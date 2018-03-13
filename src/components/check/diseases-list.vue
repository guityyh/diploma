<template>
  <div class="container">
    <div class="left-list">
      <div class="item" :class="{active: activePart == 'body'}" @click="part('body')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">全身症状</p>
      </div>
      <div class="item" :class="{active: activePart == 'skin'}" @click="part('skin')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">皮肤症状</p>
      </div>
      <div class="item" :class="{active: activePart == 'head'}" @click="part('head')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">头部</p>
      </div>
      <div class="item" :class="{active: activePart == 'neck'}" @click="part('neck')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">咽颈部</p>
      </div>
      <div class="item" :class="{active: activePart == 'chest'}" @click="part('chest')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">胸部</p>
      </div>
      <div class="item" :class="{active: activePart == 'waist'}" @click="part('waist')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">腹部</p>
      </div>
      <div class="item" :class="{active: activePart == 'panties'}" @click="part('panties')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">生殖部位</p>
      </div>
      <div class="item" :class="{active: activePart == 'pelvis'}" @click="part('pelvis')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">盆骨</p>
      </div>
      <div class="item" :class="{active: activePart == 'legs'}" @click="part('legs')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">四肢</p>
      </div>
      <div class="item" :class="{active: activePart == 'back'}" @click="part('back')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">腰背部</p>
      </div>
      <div class="item" :class="{active: activePart == 'hip'}" @click="part('hip')">
        <i class="iconfont icon-toutong"></i>
        <p class="text">臀部及肛门</p>
      </div>
    </div>
    <router-link tag="div" to="/details" class="right-list">
      <div class="item" v-for="(item, index) in diseasesList" :key="index">{{item.content}}</div>
    </router-link>
  </div>
</template>

<script>
  import girl from '@/json/diseasegirl.json'
  import boy from '@/json/diseaseboy.json'


  export default {
    data () {
      return {
        activePart: '',
        diseasesList: []
      }
    },
    created () {
      this.part()
    },
    methods: {
      part (part = this.$route.query.part) {
        const sex = this.$route.query.sex
        this.activePart = part
        this.diseasesList = sex === '1' ? boy[part] : girl[part]
      }
    }
  }
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  padding-bottom: 1rem;
  .left-list{
    width: 30%;
    height: 100vh;
    overflow: auto;
    font-size: 0;
    border-right: 1px solid #e9e9e9;
    .item{
      text-align: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #e9e9e9;
      .iconfont{
        color: #222;
        font-size: 0.6rem;
      }
      .text{
        color: #222;
        font-size: 0.28rem;
        margin-top: 0.14rem;
      }
    }
  }
  .right-list{
    flex: 1;
    height: 100vh;
    overflow: auto;
    font-size: 0;
    padding-left: 0.6rem;
    .item{
      font-size: 0.32rem;
      color: #333;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #e9e9e9;
    }
  }
}
</style>
