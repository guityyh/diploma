<template>
  <div class="docList">
    <div v-if="!doclist" class="nodoctor">
      <i class="iconfont icon-shangxin"></i>
      <p>不好意思，该科室还没有医生哦</p>
    </div>

    <div class="single" v-for="(item, index) in doclist" :key="index" @click="goDocDetails(item)" v-else>
      <div class="portrait"><img :src="item.avatar"></div>
      <div class="title">
        <div class="call">
          <div class="name">{{item.name}}</div>
          <div class="honor">{{item.title}}</div>
        </div>
        <div class="where">
          <div class="office">{{keshi}}</div>
          <!--<div class="float">二楼</div>-->
        </div>
        <div class="skilled">擅长：{{item.text}}</div>
      </div>
      <div class="apply">
        <div class="judge">有号</div>
        <div class="button">预约</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    title: '医生列表',
    computed: {
      doclist () {
        return this.$store.state.doctorList.doctor
      },
      keshi () {
        return this.$store.state.doctorList.department
      }
    },
    created () {
    },
    methods: {
      goDocDetails (item) {
        let obj = Object.assign(item, {department: this.keshi, floor: this.$store.state.doctorList.floor})
        console.log(obj)
        this.$store.commit('setDoctorDetails', obj)
        this.$router.push('/docdetail')
      }
    }
  }
</script>

<style lang="scss" scoped>
.docList{
  padding-bottom: 1rem;
  min-height: 100vh;
  .single{
    background-color: #fff;
    padding: 0.3rem 0.4rem;
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
          background-color: #d4f4fd;
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
        /*margin-top: 0.2rem;*/
        height: 0.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333;
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
        background-color: #2ac8f5;
      }
    }
  }
  .nodoctor{
    font-size: 0.28rem;
    color: #777;
    text-align: center;
    padding-top: 30vh;
    .icon-shangxin{
      font-size: 1.6rem;
      display: block;
    }
    p{
      margin-top: 0.4rem;
    }
  }
}

</style>
