<template>
  <div class="container">
    <div class="content">我是less组件</div>
  </div>
</template>

<script>
export default {
  name: 'Less'
}
</script>

<style lang="less" scoped>
.container {
  .content {
    color: red;
  }
}
</style>