import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                previewText: "Something is wrong in this life - 1",
                title: "Title 1",
                thumbnail:
                  "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
              },
              {
                id: "2",
                previewText: "Something is wrong in life - 2",
                title: "Title 2",
                thumbnail:
                  "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
              },
            ]);
            resolve();
          }, 1000 * 2);
        });
      },

      setPosts(context, payload) {
        context.commit("setPosts", payload);
      },
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
    },
  });
};

export default createStore;
