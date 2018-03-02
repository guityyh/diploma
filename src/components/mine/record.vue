<template>
  <div class="record">
    <router-link tag="div" to="/bookdetails" class="record-single" v-for="i in 3">
      <div class="border">
        <div class="single-content">
          <div class="name"><span class="call">安德拉</span><span>主治医师</span></div>
          <div class="definite"><span class="office">耳鼻喉科</span><span class="time">2018.01.06</span></div>
        </div>
        <div class="single-arrow">
          <div class="state">已就诊</div>
          <div class="iconfont icon-arrow-right"></div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.record{
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  .record-single{
    padding: 0.4rem 0.4rem 0 0.4rem;
    position: relative;
    .border{
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 0.28rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid #f2f2f2;
      .name{
        .call{
          display: inline-block;
          font-size: 0.32rem;
          width: 1.8rem;
        }
      }
      .definite{
        margin-top: 0.2rem;
        color: #999;
        .office{
          display: inline-block;
          width: 1.8rem;
        }
      }
    }
    .single-arrow{
      .state{
        color: #999;
        margin-right: 0.6rem;
      }
      .icon-arrow-right{
        position: absolute;
        right: 0.5rem;
      }
    }

  }
}
</style>
