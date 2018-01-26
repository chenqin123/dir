import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//引入login
import Login from "../views/loginregister/Login"
import Zhuce from "../views/loginregister/Zhuce"
//引入启动页面
import Start from "../views/startPage/StartPage"
import Main from "../views/main/Main"
//改密码
import Changepassword from "../views/changepassword/Changepassword"
import Changepassword2 from "../views/changepassword/Changepassword2"
import Changepassword3 from "../views/changepassword/Changepassword3"

//other
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      
      component: Main
    },
    {
      path: '/login',
     
      component: Login
    },
    {
      path: '/zhuce',
     
      component: Zhuce
    },
    {
      path: '/start',
      
      component: Start
    },
    {
      path: '/changepassword',
      
      component: Changepassword
    },
    {
      path: '/changepassword3',
      
      component: Changepassword3
    },
    {
      path: '/changepassword2',
      
      component: Changepassword2
    },
    {
      path: '*',
      redirect:'/login'
    }
  ]
})
