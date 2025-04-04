import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import Contact from './../views/Contact.vue'
import News from './../views/News.vue'
import Schedule from './../views/Schedule.vue'
import Students from './../views/Students.vue'
import Teachers from './../views/Teachers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/trang-chu',
      name: 'Home',
      component: Home
    },
    {
      path: '/giao-vien',
      name: 'giao-vien',
      component: Teachers
    },
    {
      path: '/hoc-sinh',
      name: 'hoc-sinh',
      component: Students
    },
    {
      path: '/lich-hoc',
      name: 'lich-hoc',
      component: Schedule
    },
    {
      path: '/tuyen-sinh',
      name: 'tuyen-sinh',
      component: News
    },
    {
      path: '/lien-he',
      name: 'contact',
      component: Contact
    }
  ]
})
