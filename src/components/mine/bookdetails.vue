<template>
  <div class="book-details">
    <div class="title">
      <div class="title-call">预约详情</div>
      <div class="title-state" @click="alertConfirm">{{bookState}}</div>
    </div>
    <div class="details-item">预约科室：耳鼻喉科</div>
    <div class="details-item">预约医生：安德拉</div>
    <div class="details-item">就诊日期：2018-1-26</div>
    <div class="details-item">就诊时段：上午9:00-11:00</div>
    <div class="details-item">挂号费用：13元</div>
    <div class="details-item">就诊地点：门诊大楼二楼D区17诊室</div>
    <div class="details-item">就诊人：李星</div>
    <div class="details-item">身份证：513022198412350123</div>
    <div class="details-item">电话号码：18714521235</div>
    <div class="details-item">填写时间：2018.01.06  14:52</div>

    <div v-transfer-dom>
      <confirm
        v-model="showConfirm"
        :close-on-confirm="false"
        title="操作提示"
        @on-confirm="onConfirm4">
        <p style="text-align:center;">确认取消本次预约吗？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
  import { TransferDomDirective as TransferDom , Confirm } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Confirm
    },
    data () {
      return {
        showConfirm : false,
        bookState: '取消预约'
      }
    },
    created () {

    },
    methods: {
      onConfirm4 () {
        this.bookState = '已取消'
        this.showConfirm = false
      },
      alertConfirm () {
        this.showConfirm = true
      }
    }
  }
</script>

<style lang="scss">
.book-details{
  width: 100%;
  height: 100vh;
  background-color: #fff;
  padding: 0.4rem;
  font-size: 0.28rem;
  .title{
    display: flex;
    justify-content: space-between;
    color: #999;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #f2f2f2;
    .title-call{
      color: #2ac8f5;
    }
    .title-state{
      text-decoration: underline;
    }
  }
  .details-item{
    line-height: 0.8rem;
    border-bottom: 1px solid #f2f2f2;
  }

}
.weui-dialog__hd{
   padding: 0.2rem !important;
 }
.weui-dialog__btn_primary{
  color: #2ac8f5 !important;
}
</style>
