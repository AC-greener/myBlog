import Vue from 'vue'
import Router from 'vue-router'

import Introduce from '@/pages/introduce/Introduce'
import Comment from '@/pages/comment/Comment'

import Blog from '@/pages/blog/Blog'
import BlogDetail from '@/pages/blog/components/Detail'


import Admin from '@/pages/admin/Admin'
import ArticleAdmin from '@/pages/admin/components/Article'
import ArticleAdminList from '@/pages/admin/components/ArticleList'
import CategoryAdmin from '@/pages/admin/components/Category'
import CategoryAdminList from '@/pages/admin/components/CategoryList'
import CommentAdminList from '@/pages/admin/components/CommentList'
import AdminLogin from '@/pages/admin/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'articleAdmin',
          name: 'ArticleAdmin',
          component: ArticleAdmin
        },
        {
          path: 'acticleAdminList',
          name: 'ArticleAdminList',
          component: ArticleAdminList
        },
        {
          path: 'commentAdminList',
          name: 'CommentAdminList',
          component: CommentAdminList
        },
        {
          path: 'categoryAdmin',
          name: 'CategoryAdmin',
          component: CategoryAdmin
        },
        {
          path: 'categoryAdminList',
          name: 'CategoryAdminList',
          component: CategoryAdminList
        }
      ]
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin,
    }, 
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/blog',
      name: 'Blog', 
      component: Blog,
    },
    {
        path: '/blog/article/:id',
        name: 'BlogDetail',
        component: BlogDetail
    }
  ],
  mode: 'history'
})
