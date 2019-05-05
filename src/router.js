import Vue from "vue";

import VueRouter from 'vue-router';
import HomePage from './components/HomePage';
import PostDetail from './components/Post-Detail';
import ProfileDetail from './components/Profile-Detail';

Vue.use(VueRouter);

const routes = [
    {path : "/" , component:HomePage},
    {path : "/post-detail" , component:PostDetail},
    {path : "/profile-detail" , component:ProfileDetail},
    {path : "*", redirect : "/"}

];

export const router = new VueRouter({
    mode : "history",
    routes
  });