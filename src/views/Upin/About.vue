<!--
 * @Author: yaodongyi
 * @Date: 2019-12-06 16:26:12
 * @Description: demo
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="`/home`">pushHome</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.about {
  height: 100vh;
  width: 375px;
}
</style>
