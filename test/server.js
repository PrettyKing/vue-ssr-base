const server = require('express')();
const createApp = require('./app')
const template = require('fs').readFileSync('./index.template.html', 'utf-8');
const renderer = require('vue-server-renderer').createRenderer({
    template,
});

server.get('*', (req, res) => {
  const context = { url: req.url }
  const app = createApp(context)

  renderer.renderToString(app, (err, html) => {
    // 处理错误……
    res.end(html)
  })
})

server.listen(9000)