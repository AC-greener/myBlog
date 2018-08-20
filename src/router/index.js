import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Admin from '@/pages/admin/Admin'
import Article from '@/pages/admin/components/Article'
import Category from '@/pages/admin/components/Category'
import Comment from '@/pages/admin/components/Comment'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'articleAdmin',
          name: 'Article',
          component: Article
        },
        {
          path: 'commentAdmin',
          name: 'Comment',
          component: Comment
        },
        {
          path: 'categoryAdmin',
          name: 'Category',
          component: Category
        }
      ]
    }, 
   
  ],
  mode: 'history'
})
