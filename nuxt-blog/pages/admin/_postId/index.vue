<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost"> </admin-post-form>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },

  data() {
    return {
      loadedPost: {
        author: "Maxmilian",
        content: "Great",
        title: "Title",
        thumbnailLink: "N/A",
      },
    };
  },
};
</script>
 
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>