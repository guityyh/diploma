<template>
  <div>
    <div class="navbar">
      <div class="navbar-item" v-for="(item , index) in navlist" @click="(item , index)"></div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        navlist : ['1', '2', '3']
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.navbar{

}
</style>
