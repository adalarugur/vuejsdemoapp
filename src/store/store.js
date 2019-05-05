import Vuex from 'vuex';
import Vue from 'vue';
import post from './modules/post';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        
    },
    modules:{
        post
    }
})