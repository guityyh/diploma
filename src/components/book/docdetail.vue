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
            @on-view-change="onViewChange"
            class="inline-calendar-demo"
            :show.sync="show"
            v-model="value"
            start-date="2016-04-01"
            end-date="2018-05-30"
            :range="range"
            :show-last-month="showLastMonth"
            :show-next-month="showNextMonth"
            :highlight-weekend="highlightWeekend"
            :return-six-rows="return6Rows"
            :hide-header="hideHeader"
            :hide-week-list="hideWeekList"
            :replace-text-list="replaceTextList"
            :weeks-list="weeksList"
            :render-function="buildSlotFn"
            :disable-past="true"
            :disable-future="disableFuture"
            :disable-weekend="disableWeekend"
            :disable-date-function="disableDateFunction">
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

    <div class="dialog" v-if="dialogShow">
      <div v-transfer-dom>
        <x-dialog :show.sync="show2" class="dialog-demo">
          <div class="title">预约信息</div>
          <div class="office">就诊科室：<span>儿科</span></div>
          <div class="name">医生姓名：<span>安德拉</span></div>
          <group>
            <cell :title="就诊日期" :value="value"></cell>
          </group>
          <div class="place">就诊地点：<span>门诊大楼二楼D区17诊室</span></div>
          <group>
            <x-input title="就诊人：" placeholder="请输入就诊人姓名" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="left"></x-input>
            <x-input title="联系电话：" placeholder="请输入就诊人联系电话" novalidate :icon-type="iconType" :show-clear="false" placeholder-align="left"></x-input>
            <x-input title="身份证号码：" placeholder="请输入就诊人身份证号码" novalidate :icon-type="iconType" :show-clear="false" placeholder-align="left"></x-input>
          </group>
          <div @click="show2=false">
            <span class="vux-close"></span>
          </div>
        </x-dialog>
      </div>
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
        value: '',
        show2: false,
        dialogShow: false
      }
    },
    methods: {
      onItemClick (type) {
        this.selected = type
      },
      onBlur (val) {
        console.log('on blur', val)
      },
      onChange () {
        this.dialogShow = true
      }
    }
  }
</script>

<style lang="scss" scoped>
.docdetail{
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
          background-color: #B9EDF8;
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

  }
}
  .dialog{
    height: 100%;
  }
</style>
