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
        state.posts = posts;
        debugger;
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
        
        //console.log(response.data)
       
        commit("updatePostList",response.data);
      }).
      catch(error => console.log("hata posts listesi çekilemedi! " + error)); 

    
   
},
putServicePostsData({commit},id){
    axios.put("http://jsonplaceholder.typicode.com/posts/" + id).then((response) => {
        
        //console.log(response.data)
       
        commit("updatePostList",response.data);
      }).catch(error => console.log("hata post güncellenemedi! " + error)); 
    
},
deleteServicePostsData({commit},id){
    axios.put("http://jsonplaceholder.typicode.com/posts/" + id).then((response) => {
        
        //console.log(response.data)
       
        commit("updatePostList",response.data);
      }).catch(error => console.log("hata post silinemedi! " + error)); 

}

}

export default {
    state,
    getters,
    mutations,
    actions
}

