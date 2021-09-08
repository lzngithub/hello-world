<template>
  <div id="home">
    这是home页
    <Less></Less>
    <button @click="setRouter('login')">退出登录</button>
  </div>
</template>

<script>
import Less from '../../components/less.vue'
export default {
  name: "home",
  components: {
    Less
  },
  methods: {
    setRouter(params) {
      this.$router.push({
        name: params,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
