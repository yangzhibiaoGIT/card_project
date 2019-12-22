import Vue from 'vue'
import VueRouter from 'vue-router'

import MyCard from './pages/my_card'
import CardVerify from './pages/card_verify'
import MyCardCode from './pages/my_card_code'

Vue.use(VueRouter)

var router= new VueRouter({
  routes:[
    {path:'/',name:'my_card',component:MyCard},
    {path:'/my_card',name:'my_card',component:MyCard},
    {path:'/card_verify',name:'card_verify',component:CardVerify},
    {path:'/my_card_code',name:'my_card_code',component:MyCardCode}
  ]
})

export default router;







