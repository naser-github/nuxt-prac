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
  fetch(context) {

  },
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