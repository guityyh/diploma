<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import tab from '@/components/tab.vue'
import data from '@/json/hospital.json'
export default {
  name: 'app',
  components: {
    tab
  },
  created () {
    let temp = data.office[0]
    let doctorList = []
    let docObj = {}
    for (let key in temp) {
      for (let i = 0; i < temp[key].length; i++) {
        if (temp[key][i].doctor) {
          temp[key][i].doctor.forEach((item, index) => {
            item.department = temp[key][i].department
            item.floor = temp[key][i].floor
            item.firstletter = pinyinUtil.getFirstLetter(item.name.substr(0, 1), true)[0]
            doctorList.push(item)
          })
        }
      }
    }
    this.$store.commit('setInitialDoctorList', doctorList)
    for (let i = 0; i < doctorList.length; i++) {
      var arr = []
      if (!docObj[doctorList[i].firstletter]) {
        let firstLetter = doctorList[i].firstletter
        arr.push(doctorList[i])
        docObj[firstLetter] = arr
      } else {
        docObj[doctorList[i].firstletter].push(doctorList[i])
      }
    }
    this.$store.commit('setDoctorAllList', docObj)
  }
}
</script>

<style lang="less">
@import './../src/assets/css/resets.scss';

body {
  background-color: #F0F0F0;
}

.weui-toast.weui-toast_text{
  white-space: nowrap !important;
}
</style>
