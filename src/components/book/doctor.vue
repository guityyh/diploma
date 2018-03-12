<template>
  <div class="book">
    <div class="header">
      <search
        :results="results"
        v-model="value"
        position="fixed"
        @on-submit="onSubmit"
        placeholder='搜索医生'
        ref="search"></search>
    </div>

    <div class="department-content" ref="officeWrapper">
      <div class="item" v-for="(item, index) in titleJson" :key="index">
        <div class="item-title">{{titleJson[index]}}</div>
        <!--<div class="item-msg" v-for="(list, li) in dataJson[titleJson[index]]" :key="li" @click="goDoclist(list)">-->
          <!--<div class="msg">-->
            <!--<span class="name">{{list.department}}</span>-->
            <!--<span class="sep">|</span>-->
            <!--<span class="add">{{list.floor}}</span>-->
          <!--</div>-->
        <!--</div>-->

        <div tag="div" class="single" v-for="(item, li) in dataJson[titleJson[index]]" :key="li" @click="goDoclist(item)">
          <div class="portrait"><img :src="item.avatar"></div>
          <div class="title">
            <div class="call">
              <div class="name">{{item.name}}</div>
              <div class="honor">{{item.title}}</div>
            </div>
            <div class="where">
              <div class="office">{{item.department}}</div>
              <!--<div class="float">二楼</div>-->
            </div>
            <div class="skilled">擅长：{{item.text}}</div>
          </div>
          <!--<div class="apply">-->
            <!--<div class="judge">有号</div>-->
            <!--<div class="button">预约</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>

    <div class="fixed-nav">
      <span class="item" v-for="(item, index) in titleJson" :key="index" @click='selected(index)' :class="{'current':currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  import { Search, XButton } from 'vux'
  import { setTimeout } from 'timers';

  export default {
    components: {
      Search,
      XButton
    },
    created () {
      let arr = []
      this.dataJson = this.$store.state.doctorAllList
      for (var key in this.dataJson) {
        arr.push(key)
      }
      this.titleJson = arr.sort()
    },
    data () {
      return {
        results: [],
        value: '',
        dataJson: {},
        titleJson: '',
        listHeight: [],
        currentIndex: 0
      }
    },
    computed: {

    },
    methods: {
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      selected (index) {
        let officeList = this.$refs.officeWrapper.getElementsByClassName('item')
        let headerHeight = document.getElementsByClassName('header')[0].offsetHeight
        let el = officeList[index]
        window.scrollTo(0, this.getPositionTop(el) - headerHeight)
        setTimeout(() => {
          this.currentIndex = index
        }, 0)
      },
      getPositionTop (node) {
        let top = node.offsetTop
        let parent = node.offsetParent
        while(parent != null) {
          top += parent.offsetTop
          parent = parent.offsetParent
        }
        return top
      },

      // 计算高度填进数组
      calculateHeight() {
        let officeList = this.$refs.officeWrapper.getElementsByClassName('item')
        let height = 0
        let headerHeight = document.getElementsByClassName('header')[0].offsetHeight
        this.listHeight.push(height)
        for (let i = 0; i < officeList.length; i++) {
          let item = officeList[i]
          height += item.clientHeight
          this.listHeight.push(height + 20)
        }
      },
      activeIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (window.scrollY >= height1 && window.scrollY < height2)) {
            this.currentIndex = i
            return
          }
        }
        this.currentIndex = 0
      },
      goDoclist (item) {
        console.log(item)
        this.$store.commit('setDoctorDetails', item)
        this.$router.push('/docdetail')
      }
    },
    mounted () {
      this.calculateHeight()
      window.addEventListener('scroll', () => {
        this.activeIndex()
      })
    }
  }
</script>

<style lang='scss'>
  .book{
    font-size: 0;
    padding: 1.04rem 0;
    .header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    .vux-search-box{
      font-size: 0.3rem;
      top: 0;
      .weui-search-bar__label{
        height: 1.42857143em;
        line-height: 1.42857143em;
      }
    }
    .department-content{
      .item{
        margin-top: 0.2rem;
        .item-title{
          font-size: 0.34rem;
          padding: 0 0.24rem;
        }
        .msg{
          border-bottom: 1px solid #ccc;
          padding: 0.24rem 0;
        }
        .item-msg{
          background: #fff;
          font-size: 0.32rem;
          padding: 0 0.24rem;;
          .add{
            font-size: 0.3rem;
          }
        }
      }
    }
    .fixed-nav{
      position: fixed;
      right: 0.24rem;
      top: 50%;
      transform: translateY(-50%);
      padding: 0.24rem 0.18rem;
      background: #ccc;
      border-radius: 10px;
      .item{
        font-size: 0.28rem;
        color: #fff;
        display: block;
        margin: 0.12rem 0;
        transition: all ease-in-out .2s;
        &.current {
          color: #000;
        }
      }
    }
  }
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
</style>
