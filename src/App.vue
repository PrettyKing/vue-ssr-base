<template>
    <div>
        <div id="app-box">首页</div>
        <router-link to="/">跳转到首页</router-link> | <router-link to="/item">跳转到about</router-link>
        <router-view />
    </div>
</template>
<script>
export default {
    name:'App'
}
</script>