<template>
  <div class="docdetail">
    <div class="call">
      <div class="portrait"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="definite">
        <div class="job">
          <div class="name">安德拉</div>
          <div class="professor">一级专家</div>
        </div>
        <div class="office">科室：儿科</div>
      </div>
    </div>

    <div class="operate">
      <div class="button">
        <div class="book">预约医生</div>
        <div class="content">医生详情</div>
      </div>
      <div class="calendar">

      </div>

      <div class="detail">
        <div class="speciality"><i class="iconfont icon-icon1"></i>擅长</div>
        <div class="content"></div>
        <div class="introduce"><i class="iconfont icon-pingtaijieshao"></i>简介</div>
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.docdetail{
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
  .call{
    background-color: #fff;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    .portrait{
      width: 1.6rem;
      height: 1.6rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .definite{
      flex: 1;
      margin-left: 0.5rem;
      .job{
        .name{
          font-size: 0.32rem;
          display: inline-block;
          line-height: 0.52rem;
        }
        .professor{
          display: inline-block;
          background-color: #B9EDF8;
          border-radius: 0.1rem;
          padding: 0.05rem 0.1rem;
          margin-left: 0.15rem;
        }
      }
      .office{
        line-height: 0.48rem;
      }
    }
  }

  .operate{
    flex: 1;
    background-color: #fff;
    margin-top: 0.18rem;
    .button{
      display: flex;
      justify-content: space-around;
      padding: 0.3rem;
      border-bottom: 2px solid #ccc;
    }

  }
}
</style>
