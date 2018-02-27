<template>
  <div class="book">
    <div class="header">
      <search
        :results="results"
        v-model="value"
        position="fixed"
        @on-submit="onSubmit"
        placeholder='搜索科室'
        ref="search"></search>
    </div>

    <div class="department-content">
      <router-link tag="div" to="/doclist" class="item" v-for="i in 3">
        <div class="item-title">E</div>
        <div class="item-msg" v-for="i in 5">
          <div class="msg">
            <span class="name">儿科</span>
            <span class="sep">|</span>
            <span class="add">4楼</span>
          </div>
        </div>
      </router-link>
    </div>

    <div class="fixed-nav">
      <span class="item" v-for="i in 20">A</span>
    </div>
  </div>
</template>

<script>
  import { Search, XButton } from 'vux'

  export default {
    components: {
      Search,
      XButton
    },
    methods: {
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      }
    },
    data () {
      return {
        results: [],
        value: ''
      }
    }
  }
</script>

<style lang='scss'>
  .book{
    font-size: 0;
    padding: 1rem 0;
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
      margin-top: 0.24rem;
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
      }
    }
  }
</style>
