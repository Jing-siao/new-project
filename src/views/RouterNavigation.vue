<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">push</button>
  <button type="button" @click="replace">replace</button>
  <button type="button" @click="go">go</button>
  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>
<script>
export default {
  methods: {
    push() {
      this.$router.push({
        name: 'About',
      });
    },
    replace() {
      // 不會有歷史紀錄
      this.$router.replace({
        name: 'About',
      });
    },
    go() {
      this.$router.go(-1);
    },
    getRoute() {
      // 取得路由屬性
      // https://next.router.vuejs.org/zh/api/#routelocationnormalized
      // console.log(this.$route);
      // 呼叫路由方法
      // https://next.router.vuejs.org/zh/api/#router-@E6%96%B9%E6%B3%95
      // console.log(this.$router);
    },
    addRoute() {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./About.vue'),
      });
    },
  },
};
</script>
