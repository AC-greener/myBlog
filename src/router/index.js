import Vue from 'vue'
import Router from 'vue-router'

import Introduce from '@/pages/introduce/Introduce'
import Comment from '@/pages/comment/Comment'

import Blog from '@/pages/blog/Blog'
import BlogDetail from '@/pages/blog/components/Detail'


import Admin from '@/pages/admin/Admin'
import AdminArticle from '@/pages/admin/components/Article'
import AdminCategory from '@/pages/admin/components/Category'
import AdminComment from '@/pages/admin/components/Comment'


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
          name: 'AdminArticle',
          component: AdminArticle
        },
        {
          path: 'commentAdmin',
          name: 'AdminComment',
          component: AdminComment
        },
        {
          path: 'categoryAdmin',
          name: 'AdminCategory',
          component: AdminCategory
        }
      ]
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
      path: '/blog/detail',
      name: 'BlogDetail',
      component: BlogDetail
    }
  
  ],
  mode: 'history'
})
