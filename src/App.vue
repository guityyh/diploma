<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import tab from '@/components/tab.vue'
export default {
  name: 'app',
  components: {
    tab
  }
}
</script>

<style lang="less">
@import './../src/assets/css/resets.scss';

body {
  background-color: #F0F0F0;
}

.weui-toast.weui-toast_text{
  white-space: nowrap !important;
}
</style>
