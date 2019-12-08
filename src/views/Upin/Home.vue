<!-- demo -->
<template>
  <div class="home">
    <div @click="goBack">back</div>
    <br />
    <div @click="goAbout">pushAbout</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goAbout() {
      this.$router.push('/about');
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  width: 375px;
}
</style>
