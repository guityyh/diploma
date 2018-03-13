<template>
  <div class="notice">
    <div class="notice-refer">
      <div class="title"><i class="iconfont icon-shouye2"></i>咨询：</div>
      <p class="paragraph">（1）门诊大厅内设咨询服务台，有专职医务人员为您服务。您在 我院就诊中有任何不明白的问题均可以直接咨询或提出服务要求。 </p>
      <p class="paragraph">（2）门诊大厅内设有大屏幕显示屏。可供您了解医院各科室专业、 出诊专家、各项检查收费标准及药品价格等情况。  </p>
    </div>
    <div class="notice-refer">
      <div class="title"><i class="iconfont icon-shouye"></i>挂号、建卡：</div>
      <p class="paragraph">为了简化就诊流程，我院已全面启动一卡通实名制诊疗模式，凭诊疗卡或长城健康卡就诊。严禁使用他人的诊疗卡就诊，以免给您带来不必要的麻烦。 </p>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.notice{
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding:0.4rem;
  position: absolute;
  z-index: 250;
  .notice-refer{
    margin-top: 0.3rem;
    &:first-child{
      margin-top: 0;
    }
    .title{
      font-size: 0.32rem;
      line-height: 0.48rem;
      background-color: #2ac8f5;
      border-radius: 0.1rem;
      padding-left: 0.1rem;
    }
    .paragraph{
      display: block;
      font-size: 0.28rem;
      color: #999;
      line-height: 0.52rem;
      /*text-indent: 2em;*/
      word-break: break-all;
    }
  }
  .iconfont{
    vertical-align: middle;
    font-size: 0.4rem;
    margin-right: 0.1rem;
  }
}
</style>
