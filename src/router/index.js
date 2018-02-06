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
      children: [
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
            require(['./../components/book/docdetail.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: function (resolve) {
        require(['./../components/news/news.vue'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: function (resolve) {
        require(['./../components/mine/mine.vue'], resolve)
      }
    }
  ]
})
