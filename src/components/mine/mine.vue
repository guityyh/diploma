<template>
  <div class="mine">
    <div class="portrait-background">
      <div class="portrait"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="user-name">平行与相交即</div>
    </div>
    <div class="select">
      <group>
        <cell :title="select1" is-link link="/managelist">
          <i slot="icon" width="20" style="display:block;margin-right:5px;" class="iconfont icon-icon2"></i>
        </cell>
        <cell :title="select2" is-link link="/record">
          <i slot="icon" width="20" style="display:block;margin-right:5px;" class="iconfont icon-shouye1"></i>
        </cell>
        <cell :title="select3" is-link link="notice">
          <i slot="icon" width="20" style="display:block;margin-right:5px;" class="iconfont icon-icon"></i>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { Cell, Group } from 'vux'

  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        select1: '档案管理',
        select2: '预约记录',
        select3: '预约须知'
      }
    }

  }
</script>

<style lang="scss">
  .mine{
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 0;
    .portrait-background{
      background-image: url("./../../assets/images/mine-portrait.jpg");
      width: 100%;
      height: 3.5rem;
      text-align: center;
      .portrait{
        position: relative;
        top: 20%;
        height: 1.6rem;
        width: 1.6rem;
        border-radius: 50%;
        margin: 0 auto;
        img{
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }
      .user-name{
        font-size: 0.36rem;
        margin-top: 1rem;
      }
    }
    .select{
      flex: 1;
      background-color: #fff;
      margin-top: 0.2rem;
      .weui-cells,.vux-no-group-title{
        margin-top: 0;
      }
      .vux-label{
        font-size: 0.32rem;
      }
      .weui-cell{
        .iconfont{
          /*font-weight: 700;*/
        }
      }
    }
  }
</style>
