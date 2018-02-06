<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import './../src/assets/css/resets.scss';

body {
  background-color: #fbf9fe;
}
</style>
