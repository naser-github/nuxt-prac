import axios from "axios";
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
    },
    actions: {
      nuxtServerInit(vuexContext) {

        return axios.get(process.env.baseUrl  + '/posts.json')
        .then(res => {
          const postsData=[];
          for (const key in res.data){
            postsData.push({...res.data[key], id:key});
          }
          vuexContext.commit('setPosts', postsData);
        })
        .catch(err => console.log(err));


        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit("setPosts", [
        //       {
        //         id: "1",
        //         previewText: "Something is wrong in this life - 1",
        //         title: "Title 1",
        //         thumbnail:
        //         "https://i.pinimg.com/originals/5e/e2/d4/5ee2d406d7a857375a636f8c7e5bdd7c.jpg",
        //       },
        //       {
        //         id: "2",
        //         previewText: "Something is wrong in life - 2",
        //         title: "Title 2",
        //         thumbnail:
        //           "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
        //       },
        //     ]);
        //     resolve();
        //   }, 1000 * 2);
        // });
      },

      // addPost (vuexContext, post){
        
      // },
      // editPost (vuexContext, editedPost){
        
      // }

      // setPosts(context, payload) {
      //   context.commit("setPosts", payload);
      // },
    },
    getters: {
      loadPosts(state) {
        return state.posts;
      },
    },
    mutations: {
      setPosts(state, payload) {
        state.posts = payload;
      },

      addPost (state, post){
        state.posts.push(post);
      },
      editPost (state, editedPost){
        const postIndex = state.posts.findIndex(post => post.id === editedPost.id);
      }
    },
  });
};

export default createStore;
