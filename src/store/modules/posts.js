const state = {
    posts : []
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
    updateProductList(state, post){
        state.posts.push(post);
        }
    
}

const actions = {
//asenkron dış servis dönen cevapla mutationu çalıştırır


}

export default {
    state,
    getters,
    mutations,
    actions
}

