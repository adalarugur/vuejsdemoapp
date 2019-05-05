import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const state = {
    posts : [],
   
}



const getters = {
    getPosts(state){
        //web servis datası todo

        return state.posts;

    },
    getPostDetail(state){

    }
}

const mutations = {
    //state değişkenini günceller
    updatePostList(state, posts){
        state.posts = posts
        }
    
}

const actions = {
//asenkron dış servis dönen cevapla mutationu günceller çalıştırır
//commit parametresi muttaioni çağırır
initApp({commit}){
    //vue resource işlemleri
},

//metodlar
getServicePostsData({commit}){
    debugger;
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
        debugger;
        /*console.log(response.data)
        state.posts = response.data;*/
        commit("updatePostList",response.data)
      })
    
   
},
updatePost({commit},loadData){
    
},
deletePost({commint},loadData){

}

}

export default {
    state,
    getters,
    mutations,
    actions
}

