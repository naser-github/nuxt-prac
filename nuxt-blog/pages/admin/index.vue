<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list :posts="loadPosts" isAdmin></post-list>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import PostList from "@/components/Posts/PostList.vue";
import AppButton from "@/components/UI/AppButton.vue";
export default {
  components: {
    PostList,
    AppButton,
  },

  computed:{
        loadPosts() {
      return this.$store.getters.loadPosts;
    },
  }

  // asyncData(context) {
  //   return axios.get('https://nuxt-blog-ada2d-default-rtdb.firebaseio.com/posts.json')
  //   .then(res => {
  //     console.log(res.data);
  //     return {loadedPost:res.data};
  //   })
  //   .catch(err=>console.error(err))
  // },
};
</script>

     
<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>