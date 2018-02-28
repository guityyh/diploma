<template>
  <div class="docList">
    <div class="single" v-for="i in 10">
      <div class="portrait"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="title">
        <div class="call">
          <div class="name">安德拉</div>
          <div class="honor">一级专家</div>
        </div>
        <div class="where">
          <div class="office">儿科</div>
          <div class="float">二楼</div>
        </div>
        <div class="skilled">擅长：小儿推拿、整脊、疝气小儿推拿</div>
      </div>
      <div class="apply">
        <div class="judge">有号</div>
        <router-link tag="div" to="/docdetail" class="button">预约</router-link>
      </div>
    </div>


  </div>
</template>

<script>
  export default{
    title: '医生列表'
  }
</script>

<style lang="scss" scoped>
.docList{
  padding-bottom: 1rem;
  .single{
    background-color: #fff;
    padding: 0.2rem 0.4rem;
    margin-top: 0.18rem;
    font-size: 0.28rem;
    &:first-child{
      margin-top: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    .portrait {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .title{
      margin: 0 0.25rem;
      overflow: hidden;
      flex: 1;
      .call {
        .name {
          font-size: 0.36rem;
          display: inline-block;
        }
        .honor {
          margin-left: 0.1rem;
          display: inline-block;
          background-color: #B9EDF8;
          border-radius: 0.1rem;
          padding: 0.05rem 0.1rem;
        }
      }
      .where{
        margin: 0.2rem 0;
        font-size: 0.26rem;
        .office{
          display: inline-block;
          border: 1px solid #181A19;
          border-radius: 0.05rem;
          padding: 0.05rem 0.1rem;
        }
        .float{
          display: inline-block;
          margin-left: 0.15rem;
          border: 1px solid #181A19;
          border-radius: 0.05rem;
          padding: 0.05rem 0.1rem;
        }
      }
      .skilled{
        height: 0.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

      }
    }
    .apply{
      text-align: center;
      .judge{
        line-height: 0.48rem;
      }
      .button{
        display: block;
        color: #fff;
        line-height: 0.52rem;
        padding: 0 0.3rem;
        border-radius: 0.1rem;
        background-color: #169BD5;
      }
    }
  }
}

</style>
