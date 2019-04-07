import Vue from 'vue'
import Router from 'vue-router'
import Curso from './components/Curso.vue'
import Conteudo from './components/Conteudo.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    name:'home',
    component: Home
  },
    {
      path:'/login',
      name:'login',
      component: Login,
      children:[{
        path:'/conteudo',
        name: 'conteudo',
        component:Conteudo
        
  
      }]
    },
    


  ]
})
