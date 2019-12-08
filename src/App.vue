<!--
 * @Author: yaodongyi
 * @Date: 2019-12-06 16:26:12
 * @Description: vue入口文件
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Index</router-link> | <router-link to="/home">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/tplDemo">tplDemo</router-link>
    </div>
    <transition :name="transitionName">
      <navigation>
        <router-view></router-view>
      </navigation>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: '', // history slide-right , next slide-left
    };
  },
  created() {
    console.log(this.$route);
    // bind event
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slide-left';
      console.log('forward to', to, 'from ', from);
    });
    this.$navigation.on('back', (to, from) => {
      this.transitionName = 'slide-right';
      console.log('back to', to, 'from ', from);
    });
    this.$navigation.on('replace', (to, from) => {
      this.transitionName = 'slide-left';
      console.log('replace to', to, 'from ', from);
    });
    this.$navigation.on('refresh', (to, from) => {
      console.log('refresh to', to, 'from ', from);
    });
    this.$navigation.on('reset', () => {
      console.log('reset');
    });
    // and use [once, off] methods
    this.$navigation.once('forward', () => {
      console.log('appear once');
    });
    const off = () => {
      console.log('will not appear');
    };
    this.$navigation.on('forward', off);
    this.$navigation.off('forward', off);
  },
};
</script>
<style lang="less">
@import url('../src/assets/style/index.less');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
