<template>
  <div class="record">
    <div class="record-single" v-for="(item, index) in bookList" :key="item.id" v-if="bookList.length > 0" >
      <router-link tag="div" :to="{path: 'bookdetails', query: {id: item.id}}" class="border" >
        <div class="single-content">
          <div class="name"><span class="call">{{item.doctor}} 医生</span></div>
          <div class="definite"><span class="office">{{item.department}}</span><span class="time">{{item.create_time.split(' ')[0]}}</span></div>
        </div>
        <div class="single-arrow">
          <div class="state">{{item.status_text}}</div>
          <div class="iconfont icon-arrow-right"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from '@/api'

  export default {
    data () {
      return {
        bookList: []
      }
    },
    async created () {
      const {data: {code, data}} = await axios.get('http://diploma.wbloc.com/api/order/lists')
      if (code === 200) {
        this.bookList = data
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.record{
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding-bottom: 1rem;
  .record-single{
    padding: 0 0.4rem;
    position: relative;
    .border{
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 0.28rem;
      padding: 0.4rem 0;
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
        line-height: 0.3rem;
        .office{
          display: inline-block;
          width: 1.8rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
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
