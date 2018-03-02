<template>
  <div class="docdetail">
    <div class="call">
      <div class="portrait"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="definite">
        <div class="job">
          <div class="name">安德拉</div>
          <div class="professor">一级专家</div>
        </div>
        <div class="office">科室：儿科</div>
      </div>
    </div>

    <div class="operate">
      <tab custom-bar-width="65%" disabled-color="#000">
        <tab-item selected @on-item-click="onItemClick(1)" type="1">预约医生</tab-item>
        <tab-item @on-item-click="onItemClick(2)" >医生详情</tab-item>
      </tab>
      <div>
        <div class="calendar" v-if="selected === 1">
          <inline-calendar
            ref="calendar"
            @on-select-single-date="onChange"
            class="inline-calendar-demo"
            :show.sync="show"
            v-model="value"
            :start-date="nowtime"
            end-date="2018-05-30"
            :show-last-month="showLastMonth"
            :highlight-weekend="highlightWeekend"
            :disable-past='true'
            :disable-weekend="disableWeekend">
          </inline-calendar>
        </div>

        <div class="detail" v-else>
          <div class="speciality">
            <div class="icon"><i class="iconfont icon-icon1"></i></div>
            <div class="content">
              <div class="title">擅长</div>
              <div class="details">小儿麻痹症、小儿发烧、小儿感冒</div>
            </div>
          </div>
          <div class="introduce">
            <div class="icon"><i class="iconfont icon-pingtaijieshao"></i></div>
            <div class="content">
              <div class="title">简介</div>
              <div class="details">原成都军区总医院疼痛科主任。毕业于泸州医学院，解放军第三军医大学硕士研究生。2012年于北京首都医科大学宣武医院疼痛诊疗中心进修。</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-transfer-dom>
      <x-dialog :show.sync="show2" :hide-on-blur="true" class="dialog-demo">
        <div class="title">预约信息</div>
        <div class="dialog-content">
          <div class="office">就诊科室：<span>儿科</span></div>
          <div class="name">医生姓名：<span>安德拉</span></div>
          <group>
            <cell :title="clinicTime" :value="value"></cell>
          </group>
          <div class="place">就诊地点：<span>门诊大楼二楼D区17诊室</span></div>
          <group>
            <x-input title=" 就诊人：" label-width="5em" placeholder="请输入就诊人姓名" novalidate :show-clear="false" @on-blur="onBlur" placeholder-align="left"></x-input>
            <x-input title="联系电话：" label-width="5em" placeholder="请输入就诊人联系电话" novalidate :show-clear="false" placeholder-align="left"></x-input>
            <x-input title="身份证号：" label-width="5em" placeholder="请输入就诊人身份证号码" novalidate :show-clear="false" placeholder-align="left"></x-input>
          </group>
          <div class="price">挂号费用：<span class="red">13</span> 元</div>
          <div class="button">
            <div class="cancel" @click="closeDialog">取消</div>
            <router-link tag="div" to="/bookdetails" href="##" class="submit">提交</router-link>
          </div>
        </div>
      </x-dialog>
    </div>

  </div>
</template>

<script>
  import { Tab, TabItem, InlineCalendar, XDialog, TransferDomDirective as TransferDom, XInput, Group, Cell } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Tab,
      TabItem,
      InlineCalendar,
      XDialog,
      XInput,
      Group,
      Cell
    },
    data () {
      return{
        selected: 1,
        nowtime: '',
        value: '',
        show: true,
        showLastMonth: false,
        highlightWeekend: true,
        disableWeekend: false,
        show2: false,
        dialogShow: false,
        clinicTime: '就诊日期：'
      }
    },
    created () {
      let now = new Date();
      let year = now.getFullYear(); //得到年份
      let month = now.getMonth()+1;//得到月份
      let date = now.getDate();//得到日期
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      this.nowtime = `${year}-${month}-${date}`
      console.log(this.nowtime)
    },
    methods: {
      onItemClick (type) {
        this.selected = type
      },
      onBlur (val) {
        console.log('on blur', val)
      },
      onChange () {
//        this.dialogShow = true
        this.show2 = true
      },
      closeDialog () {
        this.show2 = false
      }
    }
  }
</script>

<style lang="scss">
.docdetail{
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
  .call{
    background-color: #fff;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    .portrait{
      width: 1.6rem;
      height: 1.6rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .definite{
      flex: 1;
      margin-left: 0.5rem;
      .job{
        .name{
          font-size: 0.32rem;
          display: inline-block;
          line-height: 0.52rem;
        }
        .professor{
          display: inline-block;
          background-color: #d4f4fd;
          border-radius: 0.1rem;
          padding: 0.05rem 0.1rem;
          margin-left: 0.15rem;
        }
      }
      .office{
        line-height: 0.48rem;
      }
    }
  }
  .calendar{
    margin-top: 0.3rem;
  }
  .operate{
    flex: 1;
    background-color: #fff;
    margin-top: 0.18rem;
    padding: 0.3rem 0.4rem 0;
    .detail{
      margin-top: 0.4rem;
      .speciality, .introduce{
        display: flex;
        align-items: flex-start;
        margin-top: 0.3rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #f2f2f2;
        .content{
          margin-left: 0.15rem;
          .title{
            font-weight: 700;
          }
          .details{
            margin-top: 0.2rem;
            color: #666;
          }
        }
      }
      .introduce{
        border-bottom: none;
      }
    }
    .vux-tab .vux-tab-item.vux-tab-selected{
      color: #2ac8f5;
      border-bottom: 3px solid #2ac8f5;
    }
    .vux-tab-bar-inner{
      background-color: #2ac8f5;
    }
    .vux-tab .vux-tab-item{
      font-size: 0.32rem;
    }
    .vux-prev-icon, .vux-next-icon{
      border: 1px solid #2ac8f5;
      border-top: none;
      border-right: none;
    }
    .inline-calendar td.is-today, .inline-calendar td.is-today.is-disabled{
      color: #2ac8f5;
    }
    .inline-calendar td.current > span.vux-calendar-each-date{
      background-color: #2ac8f5;
    }
  }
}

  .dialog-demo{
    font-size: 0.28rem;
    .weui-dialog{
      border-radius: 0.3rem;
    }
    .title{
      font-size: 0.32rem;
      color: #2ac8f5;
      line-height: 0.64rem;
      border-bottom: 1px solid #f2f2f2;
    }
    .dialog-content{
      margin-top: 0.14rem;
      padding-left: 0.3rem;
      text-align: left;
      line-height: 0.56rem;
      padding-bottom: 0.6rem;
      .weui-cells:before{
        border: none;
      }
      .vux-x-input:before{
        border: none;
      }
      .weui-cells:after{
        border: none;
      }
      .weui-cells{
        margin-top: 0;
      }
      .weui-cell{
        padding: 0;
        font-size: 0.28rem;
        margin: 0.14rem 0;
      }
      .vux-cell-primary{
        flex: none;
      }
      .weui-cell__ft{

      }
      .red{
        color: #f00;
      }
      .button{
        margin-top: 0.5rem;
        text-align: center;
        line-height: 0.52rem;
        .cancel{
          display: inline-block;
          border: 1px solid #2ac8f5;
          padding: 0 0.4rem;
          border-radius: 0.1rem;
        }
        .submit{
          color: #fff;
          display: inline-block;
          background-color: #2ac8f5;
          padding: 0 0.4rem;
          border-radius: 0.1rem;
          margin-left: 0.3rem;
        }
      }
    }

  }


</style>
