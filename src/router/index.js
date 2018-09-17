import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: () => import ('@/pages/introduce/Introduce'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import ('@/pages/admin/Admin'),
      children: [
        {
          path: 'articleAdmin',
          name: 'ArticleAdmin',
          component: () => import ('@/pages/admin/components/Article')
        },
        {
          path: 'acticleAdminList',
          name: 'ArticleAdminList',
          component: () => import ('@/pages/admin/components/ArticleList')
        },
        {
          path: 'commentAdminList',
          name: 'CommentAdminList',
          component: () => import ('@/pages/admin/components/CommentList')
        },
        {
          path: 'categoryAdmin',
          name: 'CategoryAdmin',
          component: () => import ('@/pages/admin/components/Category')
        },
        {
          path: 'categoryAdminList',
          name: 'CategoryAdminList',
          component: () => import ('@/pages/admin/components/CategoryList')
        }
      ]
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: () => import ('@/pages/admin/login/Login'),
    }, 
    {
      path: '/comment',
      name: 'Comment',
      component: () => import ('@/pages/comment/Comment'),
    },
    {
      path: '/blog',
      name: 'Blog', 
      component: () => import ('@/pages/blog/Blog'),
    },
    {
        path: '/blog/article/:id',
        name: 'BlogDetail',
        component: () => import ('@/pages/blog/components/Detail'),
    }
  ],
  mode: 'history'
})
