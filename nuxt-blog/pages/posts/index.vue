<template>
  <div class="posts-page">
    <post-list :posts="loadPosts"></post-list>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";

export default {
  components: {
    PostList,
  },
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: [
  //           {
  //             id: "1",
  //             previewText: "Something is wrong in this life - 1",
  //             title: "Title 1",
  //             thumbnail:
  //               "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
  //           },
  //           {
  //             id: "2",
  //             previewText: "Something is wrong in life - 2",
  //             title: "Title 2",
  //             thumbnail:
  //               "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
  //           },
  //         ],
  //       });
  //     }, 1000 * 2);
  //   })
  //     .then( data => {
  //       context.store.commit("setPosts", data.posts);
  //     })
  //     .catch((e) => {
  //       context.error(e);
  //     });
  // },
  computed: {
    loadPosts() {
      return this.$store.getters.loadPosts;
    },
  },
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>