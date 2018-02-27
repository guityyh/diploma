<template>
  <div class="container">
    <div class="float-box">
      <checker v-model="sex" default-item-class="item" selected-item-class="item-active" radio-required>
        <checker-item value="1">男</checker-item>
        <checker-item value="2">女</checker-item>
      </checker>
    </div>

    <div class="body-content boy" v-if="sex === '1'">
      <div class="content">
        <router-link tag="div" to="/diseases" class="body-item head" :class="{active: activeClass === 1}" @touchstart = 'active(1)' @touchend = 'activeClass = 0'></router-link>
        <div class="body-item neck" :class="{active: activeClass === 2}" @touchstart = 'active(2)' @touchend = 'activeClass = 0'></div>
        <div class="body-item chest" :class="{active: activeClass === 3}" @touchstart = 'active(3)' @touchend = 'activeClass = 0'></div>
        <div class="body-item waist" :class="{active: activeClass === 4}" @touchstart = 'active(4)' @touchend = 'activeClass = 0'></div>
        <div class="body-item panties" :class="{active: activeClass === 5}" @touchstart = 'active(5)' @touchend = 'activeClass = 0'></div>
        <div class="body-item left-hand" :class="{active: activeClass === 6}" @touchstart = 'active(6)' @touchend = 'activeClass = 0'></div>
        <div class="body-item right-hand" :class="{active: activeClass === 7}" @touchstart = 'active(7)' @touchend = 'activeClass = 0'></div>
        <div class="body-item left-leg" :class="{active: activeClass === 8}" @touchstart = 'active(8)' @touchend = 'activeClass = 0'></div>
        <div class="body-item right-leg" :class="{active: activeClass === 9}" @touchstart = 'active(9)' @touchend = 'activeClass = 0'></div>
      </div>
    </div>
    <div class="body-content girl" v-if="sex === '2'">
      <div class="content">
        <div class="body-item head" :class="{active: activeClass === 10}" @touchstart = 'active(10)' @touchend = 'activeClass = 0'></div>
        <div class="body-item neck" :class="{active: activeClass === 11}" @touchstart = 'active(11)' @touchend = 'activeClass = 0'></div>
        <div class="body-item chest" :class="{active: activeClass === 12}" @touchstart = 'active(12)' @touchend = 'activeClass = 0'></div>
        <div class="body-item waist" :class="{active: activeClass === 13}" @touchstart = 'active(13)' @touchend = 'activeClass = 0'></div>
        <div class="body-item panties" :class="{active: activeClass === 14}" @touchstart = 'active(14)' @touchend = 'activeClass = 0'></div>
        <div class="body-item left-hand" :class="{active: activeClass === 15}" @touchstart = 'active(15)' @touchend = 'activeClass = 0'></div>
        <div class="body-item right-hand" :class="{active: activeClass === 16}" @touchstart = 'active(16)' @touchend = 'activeClass = 0'></div>
        <div class="body-item left-leg" :class="{active: activeClass === 17}" @touchstart = 'active(17)' @touchend = 'activeClass = 0'></div>
        <div class="body-item right-leg" :class="{active: activeClass === 18}" @touchstart = 'active(18)' @touchend = 'activeClass = 0'></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Checker, CheckerItem, TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Checker,
      CheckerItem
    },
    data () {
      return {
        sex: '1',
        activeClass: 0
      }
    },
    methods: {
      active (active) {
        this.activeClass = active
      },
      endActive () {
        console.log(this.activeClass)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .float-box{
    position: absolute;
    z-index: 100;
    right: 0.3rem;
    top: 0.3rem;
    font-size: 0;
    .item{
      font-size: 0.28rem;
      width: 0.6rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #222;
      border: 1px solid #ccc;
      transition: all linear .2s;
    }
    .item-active{
      background: #1AAD19;
      color: #fff;
      border-color: #1AAD19;
    }
  }
  .body-content{
    box-sizing: border-box;
    position: relative;
    padding-bottom: 1.6rem;
    padding-top: 2.2rem;
    height: 100vh;
    .content{
      position: relative;
      width: 6rem;
      margin: 0 auto;
      height: 100%;
      transform: scale(1.2);
      .body-item{
        position: absolute;
        background: no-repeat center;
        background-size: cover;
      }
    }
    &.boy{
      .head{
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-19.png');
        width: 1.58rem;
        height: 1.94rem;
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-20.png');
        }
      }
      .neck{
        width: 1.14rem;
        height: 0.4rem;
        left: 50%;
        top: 1.91rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-21.png');
        z-index: 99;
        &.active{
          background-image: url('./../../assets/images/1-22.png');
        }
      }
      .chest{
        width: 1.3rem;
        height: 1.26rem;
        left: 50%;
        top: 2.136rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-25.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-26.png');
        }
      }
      .waist{
        width: 1.24rem;
        height: 0.7rem;
        left: 50%;
        top: 3.38rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-35.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-37.png');
        }
      }
      .panties{
        width: 1.24rem;
        height: 0.78rem;
        left: 50%;
        top: 4.05rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-36.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-38.png');
        }
      }
      .left-hand{
        width: 0.36rem;
        height: 3.1rem;
        left: 2.04rem;
        top: 2.136rem;
        background-image: url('./../../assets/images/1-23.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-24.png');
        }
      }
      .right-hand{
        width: 0.36rem;
        height: 3.1rem;
        right: 2rem;
        top: 2.136rem;
        background-image: url('./../../assets/images/1-27.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-28.png');
        }
      }
      .left-leg{
        width: 0.74rem;
        height: 2.92rem;
        left: 2.19rem;
        top: 4.82rem;
        background-image: url('./../../assets/images/1-31.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-32.png');
        }
      }
      .right-leg{
        width: 0.74rem;
        height: 2.92rem;
        right: 2.18rem;
        top: 4.82rem;
        background-image: url('./../../assets/images/1-33.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-34.png');
        }
      }
    }
    &.girl{
      .head{
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-03.png');
        width: 1.66rem;
        height: 2.24rem;
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-04.png');
        }
      }
      .neck{
        width: 0.7rem;
        height: 0.32rem;
        left: 50%;
        top: 1.91rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-05.png');
        z-index: 99;
        &.active{
          background-image: url('./../../assets/images/1-06.png');
        }
      }
      .chest{
        width: 1.3rem;
        height: 1.38rem;
        left: 50%;
        top: 2.136rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-09.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-10.png');
        }
      }
      .waist{
        width: 1.24rem;
        height: 0.7rem;
        left: 50%;
        top: 3.38rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-39.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-41.png');
        }
      }
      .panties{
        width: 1.24rem;
        height: 0.68rem;
        left: 50%;
        top: 3.98rem;
        transform: translateX(-50%);
        background-image: url('./../../assets/images/1-40.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-42.png');
        }
      }
      .left-hand{
        width: 0.36rem;
        height: 3.1rem;
        left: 2.04rem;
        top: 2.2rem;
        background-image: url('./../../assets/images/1-07.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-08.png');
        }
      }
      .right-hand{
        width: 0.36rem;
        height: 3.1rem;
        right: 2.04rem;
        top: 2.18rem;
        background-image: url('./../../assets/images/1-11.png');
        z-index: 100;
        &.active{
          background-image: url('./../../assets/images/1-12.png');
        }
      }
      .left-leg{
        width: 0.64rem;
        height: 3.2rem;
        left: 2.24rem;
        top: 4.26rem;
        background-image: url('./../../assets/images/1-15.png');
        z-index: 99;
        &.active{
          background-image: url('./../../assets/images/1-16.png');
        }
      }
      .right-leg{
        width: 0.64rem;
        height: 3.2rem;
        right: 2.22rem;
        top: 4.26rem;
        background-image: url('./../../assets/images/1-17.png');
        z-index: 99;
        &.active{
          background-image: url('./../../assets/images/1-18.png');
        }
      }
    }
  }
</style>
