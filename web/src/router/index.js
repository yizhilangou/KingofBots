import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RecordView from '../views/record/RecordIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import UserBotsIndexView from '../views/user/bots/UserBotsIndex.vue'
import NotFound from '../views/error/NotFound.vue'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView.vue'
import  store from '@/store'


const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
    meta:{
      requestAuth: true
    }
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
    meta:{
      requestAuth: true
    }
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordView,
    meta:{
      requestAuth: true
    }
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
    meta:{
      requestAuth: true
    }
  },
  {
    path: "/user/bots/",
    name: "user_bots_index",
    component: UserBotsIndexView,
    meta:{
      requestAuth: true
    }
  },
  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView,
    meta:{
      requestAuth: false
    }
  },
  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView,
    meta:{
      requestAuth: false
    }
  },
  {
    path: "/404/",
    name: "not_found",
    component: NotFound,
    meta:{
      requestAuth: false
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requestAuth && !store.state.user.is_login){
    next({name:"user_account_login"})
  }
  else{
    next()
  }
})

export default router
