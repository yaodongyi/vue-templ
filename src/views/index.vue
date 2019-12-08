<!--
 * @Author: yaodongyi
 * @Date: 2019-12-06 17:16:29
 * @Description: demo
 -->
<template>
  <div class="index">
    <div @click="gohome">{{ num }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '${dirName}',
      num: 0,
    };
  },
  watch: {},
  created() {
    setInterval(() => {
      this.num++;
    }, 1000);
  },
  methods: {
    gohome() {
      this.$router.push('/home');
    },
  },
};
</script>

<style lang="less" scoped>
.index {
  height: 100vh;
  width: 375px;
}
</style>
