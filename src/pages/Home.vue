<template>
    <div>
        <h1 class="home-h1">home</h1>
        <div>{{ userInfo.name }}-{{ userInfo.address }}</div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import axios from "axios";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://www.fastmock.site/mock/408a0aa430e1783a6cec0c0706aeea8e/test/api/ssr"
      );
      console.log(data.info);
      store.commit("setData", data.info);
    };
    const userInfo = computed(() => store.getters["getData"]);
    console.log("--->",userInfo)
    // 判断store的值有没有变，没变的话发起请求
    if (userInfo.value.name === "yd") {
      fetchData();
    }
    return {
      userInfo,
      fetchData,
    };
  },
  // ssr专用钩子函数
  async serverPrefetch() {
    console.log("服务端数据获取");
    await this.fetchData();
  },
  //自定义钩子函数，但是在服务端要处理
  customFetch() {
    console.log("服务端数据获取1");
  },
};
</script>
<style scoped>
.home-h1 {
    color: red;
}
</style>
