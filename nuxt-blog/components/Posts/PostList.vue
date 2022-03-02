<template>
  <section class="featured-posts">

    <post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :content="post.content"
      :title="post.title"
      :thumbnailLink="post.thumbnailLink"
      :isAdmin="isAdmin"
    >
    </post-preview>
  </section>
</template>

<script>
import PostPreview from "./PostPreview.vue";
export default {
  name: "PostList",
  components: { PostPreview },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>