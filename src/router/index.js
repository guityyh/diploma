import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/check',
      component: function (resolve) {
        require(['./../components/check/check.vue'], resolve)
      },
    },
    {
      path: '/diseases',
      meta: {
        name: 'diseases-list',
        title: '病情列表'
      },
      component: function (resolve) {
        require(['./../components/check/diseases-list.vue'], resolve)
      }
    },
    {
      path: '/details',
      meta: {
        name: 'detail',
        title: '病情详情'
      },
      component: function (resolve) {
        require(['./../components/check/details.vue'], resolve)
      }
    },
    {
      path: '/book',
      meta: {
        name: 'book',
        title: '科室选择'
      },
      component: function (resolve) {
        require(['./../components/book/book.vue'], resolve)
      },
    },
    {
      path: '/doclist',
      meta: {
        name: 'docList',
        title: '医生列表'
      },
      component: function (resolve) {
        require(['./../components/book/doclist.vue'], resolve)
      }
    },
    {
      path: '/docdetail',
      meta: {
        name: 'docdetail',
        title: '预约医生'
      },
      component: function (resolve) {
        require(['../components/book/docdetail.vue'], resolve)
      }
    },
    {
      path: '/news',
      meta: {
        name: 'news',
        title: '健康资讯'
      },
      component: function (resolve) {
        require(['./../components/news/news.vue'], resolve)
      }
    },
    {
      path: '/article',
      meta: {
        name: 'article',
        title: '健康资讯'
      },
      component: function (resolve) {
        require(['./../components/news/article.vue'], resolve)
      }
    },
    {
      path: '/mine',
      meta: {
        name: 'mine',
        title: '个人中心'
      },
      component: function (resolve) {
        require(['./../components/mine/mine.vue'], resolve)
      }
    },
    {
      path: '/record',
      meta: {
        name: 'record',
        title: '预约记录'
      },
      component: function (resolve) {
        require(['./../components/mine/record.vue'], resolve)
      }
    },
    {
      path: '/bookdetails',
      meta: {
        name: 'bookdetails',
        title: '预约详情'
      },
      component: function (resolve) {
        require(['./../components/mine/bookdetails.vue'], resolve)
      }
    },
    {
      path: '/notice',
      meta: {
        name: 'notice',
        title: '预约须知'
      },
      component: function (resolve) {
        require(['./../components/mine/notice.vue'], resolve)
      }
    },
    {
      path: '/manage',
      meta: {
        name: 'manage',
        title: '档案管理'
      },
      component: function (resolve) {
        require(['./../components/mine/management.vue'], resolve)
      }
    },
    {
      path: '/recordlist',
      meta: {
        name: 'recordlist',
        title: '档案管理'
      },
      component: function (resolve) {
        require(['./../components/mine/record-list.vue'], resolve)
      }
    }
  ]
})
