<template>
  <div class="record-list">
    <router-link tag="div" :to="{path: '/manage', query: {id: index}}" class="single" v-for="(item, index) in listData">
      <div class="definite">
        <div class="name">{{item.name}}</div>
        <div class="tel">电话号码：{{item.tel}}</div>
      </div>
      <div class="iconfont icon-arrow-right"></div>
    </router-link>

    <div class="button">
      <router-link tag="div" to="/manage"class="submit">添加新的就诊人</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listData: []
      }
    },
    created () {
      if (localStorage.getItem('data')) {
        this.listData = JSON.parse(localStorage.getItem('data'))
      }
    }
  }
</script>

<style lang="scss" scoped>
.record-list{
  min-height: 100vh;
  width: 100%;
  background-color: #F0F0F0;
  padding-bottom: 1rem;
  .single{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    font-size: 0.28rem;
    padding: 0.4rem;
    line-height: 0.52rem;
    margin-top: 0.2rem;
    &:first-child{
      margin-top: 0;
    }
    &:last-child{
      margin-bottom: 0.5rem;
    }
    .name{
      font-size: 0.32rem;
    }
  }
  .button{
    text-align: center;
    padding: 0.5rem 0.4rem;
    font-size: 0.28rem;
    .submit{
      color: #fff;
      display: block;
      line-height: 0.72rem;
      background-color: #2ac8f5;
      border-radius: 0.1rem;
    }
  }
}
</style>
