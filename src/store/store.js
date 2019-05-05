import Vuex from 'vuex';
import Vue from 'vue';
import post from './modules/post';

Vue.vuex(Vuex);

export const store = new Vuex.Store({
    state:{
        
    },
    modules:{
        product
    }
})