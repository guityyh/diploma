<template>
  <div class="manage">
    <group>
      <x-input title="姓名：" novalidate :icon-type="iconType" :show-clear="iconState" @on-blur="onBlur"></x-input>
      <popup-radio title="性别：" :options="options3">
        <p slot="popup-header" class="vux-1px-b demo3-slot">请选择</p>
      </popup-radio>
      <x-input title="年龄：" novalidate :icon-type="iconType" :show-clear="iconState"></x-input>
      <x-input title="身份证号：" novalidate :icon-type="iconType" :show-clear="iconState"></x-input>
      <x-input title="手机号：" novalidate :icon-type="iconType" :show-clear="iconState"></x-input>
    </group>

    <div class="button">
      <router-link tag="div" to="/recordlist" href="##" class="submit">保存</router-link>
    </div>

  </div>
</template>

<script>
  import { XInput, Group, PopupRadio } from 'vux'

  export default {
    components: {
      XInput,
      Group,
      PopupRadio
    },
    data () {
      return {
        iconType: '',
        iconState: '',
        options3: ['男', '女']
      }
    },
    methods:{
      onBlur () {
        this.iconState = false
      }
    }
  }
</script>

<style lang="scss">
.manage{
  background-color: #fff;
  padding-top: 0.2rem;
  font-size: 0.28rem;
  .weui-cells{
    margin-top: 0;
    &:before{
      border-top: none;
    }
  }
  .weui-cell{
    font-size: 0.28rem;
  }
  .weui-cell__bd{
    color: #999;
  }
  .weui-cell__ft:after{
    display: none !important;
  }
  .vux-label{
    width: 4em;
  }
  .vux-cell-primary{
    flex: 0;
  }
  .button{
    margin-top: 0.5rem;
    text-align: center;
    padding: 0 0.4rem;
    .submit{
      color: #fff;
      display: block;
      line-height: 0.72rem;
      background-color: #169BD5;
      border-radius: 0.1rem;
    }
  }
}
.demo3-slot {
  text-align: center;
  padding: 12px 0;
  color: #169BD5;
  border-bottom: 1px solid #f2f2f2;
}
.vux-popup-dialog{
  font-size: 0.28rem !important;
}

</style>
