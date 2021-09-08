<template>
  <div id="login">
    这是登录页
    <button>
      <router-link to="/home">登录</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  created() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
};
</script>

<style lang="less" scoped></style>
