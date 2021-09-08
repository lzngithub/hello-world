<template>
  <div id="user">
    <div>
      <div span="4"  v-for="(item,index) in nav" :key="index">
        <button @click="setRouter(item.name)">{{item.babel}}</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import nav from './common/config/index';
export default {
  name: 'user',
  data() {
    return {
      nav,
      isTrue: false,
    };
  },
  created() {
    console.log(this.nav);
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