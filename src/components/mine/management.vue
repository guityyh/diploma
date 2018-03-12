<template>
  <div class="manage">
    <group>
      <x-input title="姓名：" name="username" is-type="china-name" v-model="manageName"></x-input>
      <popup-radio title="性别：" :options="options3" v-model="manageSex">
        <p slot="popup-header" class="vux-1px-b demo3-slot">请选择</p>
      </popup-radio>
      <popup-picker title="年龄：" :data="ageList" v-model="manageAge" ></popup-picker>
      <x-input title="身份证号：" :icon-type="iconType" :show-clear="iconState" type="number" :min=18 :max=18 v-model="manageCard"></x-input>
      <x-input title="手机号码：" name="mobile" keyboard="number" :min=11 :max=11 is-type="china-mobile" ref="mobile" v-model="manageTel"></x-input>
    </group>

    <div class="button">
      <div class="submit" @click="_localStorage">保存</div>
    </div>

  </div>
</template>

<script>
  import { XInput, Group, PopupRadio, PopupPicker } from 'vux'

  export default {
    components: {
      XInput,
      Group,
      PopupRadio,
      PopupPicker
    },
    data () {
      return {
        iconType: '',
        iconState: '',
        options3: ['男', '女'],
        ageList: [[]],
        manageName: '',
        manageSex: '',
        manageAge: [],
        manageCard: '',
        manageTel: ''
      }
    },
    created () {
      if (this.$route.query.id >= 0) {
        const data = JSON.parse(localStorage.getItem('data'))[this.$route.query.id]
        this.manageName = data.name,
        this.manageSex = data.sex,
        this.manageAge.push(data.age),
        this.manageCard = data.card,
        this.manageTel = data.tel
      }
      for (let i=1; i<100; i++) {
        this.ageList[0].push(i + '')
      }

    },
    methods:{
      onBlur () {
        this.iconState = false
      },
      _localStorage () {
        if (!this.manageName) {
          this.toast('请您输入姓名')
          return
        }else if (!this.manageSex) {
          this.toast('请选择您的性别')
          return
        }else if (!this.manageAge[0]) {
          this.toast('请选择您的年龄')
          return
        }else if (this.manageCard.length !== 18) {
          this.toast('请输入正确的身份证号')
          return
        }else if (this.$refs.mobile.valid === false) {
          this.toast('请输入正确的联系方式')
          return
        }
        let arr = JSON.parse(localStorage.getItem('data')) || [];
        let obj = {
          name: this.manageName,
          sex: this.manageSex,
          age: this.manageAge[0],
          card: this.manageCard,
          tel: this.manageTel
        }
        if (this.$route.query.id >= 0) {
          arr[this.$route.query.id] = obj
        } else {
          arr.push(obj)
        }
        arr = JSON.stringify(arr)
        localStorage.setItem('data', arr)
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
.manage{
  background-color: #fff;
  padding-top: 0.2rem;
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
  .weui-cells{
    margin-top: 0;
    &:before{
      border-top: none;
    }
  }
  .weui-cell{
    font-size: 0.32rem;
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
  .vux-x-input-kvbnz{
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
      background-color: #2ac8f5;
      border-radius: 0.1rem;
    }
  }
}
.demo3-slot {
  text-align: center;
  padding: 12px 0;
  color: #2ac8f5;
  border-bottom: 1px solid #f2f2f2;
}
.vux-popup-dialog{
  font-size: 0.28rem !important;
}
.vux-cell-box .weui-cell__hd{
  width: 4em;
}
.vux-popup-header-right{
  color: #2ac8f5 !important;
}
.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
  color: #2ac8f5 !important;
}
</style>
