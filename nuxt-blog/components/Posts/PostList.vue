<template>
  <section class="featured-posts">
    <post-preview
      id="1"
      :isAdmin="isAdmin"
      previewText="Something is wrong in this life - 1"
      title="Post Title 1"
      thumbnail="https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg"
    ></post-preview>
    <post-preview
      id="2"
      :isAdmin="isAdmin"
      previewText="Something is wrong in this life - 2"
      title="Post Title 2"
      thumbnail="https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg"
    ></post-preview>
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