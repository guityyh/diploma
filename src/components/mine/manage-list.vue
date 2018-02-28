<template>
  <router-link tag="div" to="/manage" class="record-list">
    <div class="single" v-for="i in 3">
      <div class="definite">
        <div class="name">刘星</div>
        <div class="tel">电话号码：12345678912</div>
      </div>
      <div class="iconfont icon-arrow-right"></div>
    </div>

    <div class="button">
      <router-link tag="div" to="/manage"class="submit">添加新的就诊人</router-link>
    </div>
  </router-link>
</template>

<script>

</script>

<style lang="scss" scoped>
.record-list{
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
  }
  .button{
    margin-top: 0.5rem;
    text-align: center;
    padding: 0 0.4rem;
    font-size: 0.28rem;
    .submit{
      color: #fff;
      display: block;
      line-height: 0.72rem;
      background-color: #169BD5;
      border-radius: 0.1rem;
    }
  }
}
</style>
