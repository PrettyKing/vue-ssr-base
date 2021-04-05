const Koa = require('koa');
const { resolve } = require('path');
const server = require('koa-static');
const app = new Koa();
const fs = require('fs');
const { renderToString } = require('@vue/server-renderer');
const Router = require('@koa/router');

const serverBundle = require('../dist/server-bundle').default
const temlate = fs.readFileSync(resolve(__dirname, '../dist/index.html'), 'utf-8')

const router = new Router();


const renderState = (state, windowKey) => {
    return `<script>window.${windowKey} = ${JSON.stringify(state)}</script>`
}
const { app: appComp, router: r, store } = serverBundle()

router.get(['/', '/item'], async (ctx, next) => {
    r.push(ctx.req.url);
    await r.isReady();
    // 挂载的方法
    const matchComp = r.currentRoute.value.matched.flatMap(record =>
        Object.values(record.components)
    )
    console.log(matchComp);
    let appComponent = await renderToString(appComp);
    console.log(store.state);
    appComponent = `<div id="app">${renderState(store.state, "__INIT_STATE__")}${appComponent}</div>`
    let html = temlate.replace('<div id="app"></div>', appComponent)
    ctx.body = html
})
// ctx.status 404 
app.use(router.routes()).use(router.allowedMethods())
app.use(server(resolve(__dirname, '../dist')));


app.listen(3000, () => {
    console.log('server is running')
})