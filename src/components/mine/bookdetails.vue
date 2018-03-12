<template>
  <div class="book-details">
    <div class="title">
      <div class="title-call">预约详情</div>
      <div class="title-state" @click="alertConfirm">{{bookState}}</div>
    </div>
    <div class="details-item">预约科室：{{definiteInfo.department}}</div>
    <div class="details-item">预约医生：{{definiteInfo.doctor}}</div>
    <div class="details-item">就诊日期：{{definiteInfo.visit_date}}</div>
    <div class="details-item">就诊时段：{{definiteInfo.visit_time}}</div>
    <div class="details-item">挂号费用：13元</div>
    <div class="details-item">就诊地点：{{definiteInfo.visit_address}}</div>
    <div class="details-item">就诊人：{{definiteInfo.visit_username}}</div>
    <div class="details-item">身份证：{{definiteInfo.visit_id_number}}</div>
    <div class="details-item">电话号码：{{definiteInfo.visit_phone}}</div>
    <div class="details-item">填写时间：{{definiteInfo.create_time}}</div>

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
  import axios from '@/api'
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
        bookState: '',
        definiteInfo: ''
      }
    },
     async created () {
       const {data: {code , data}} = await axios.get('http://diploma.wbloc.com/api/order/info', {id: this.$route.query.id})
       if (code === 200) {
         this.definiteInfo = data
         console.log(this.definiteInfo)
         if (this.definiteInfo.status === 0) {
           this.bookState = '取消预约'
         }else if (this.definiteInfo.status === -1) {
           this.bookState = '已取消'
         }if (this.definiteInfo.status === 1) {
           this.bookState = '已就诊'
         }
       }

    },
    methods: {
      async onConfirm4 () {
        const {data: {code}} = await axios.post('http://diploma.wbloc.com/api/order/setStauts', {id: this.$route.query.id})
        if ( code === 200 ) {
          this.bookState = '已取消'
          this.showConfirm = false
        }
      },
      alertConfirm () {
        if (this.definiteInfo.status === 0) {
          this.showConfirm = true
        }
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
