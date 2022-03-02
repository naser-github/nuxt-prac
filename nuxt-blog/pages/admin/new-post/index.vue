<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted"></admin-post-form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  
  components: {
    AdminPostForm,
  },

  methods:{
    onSubmitted(postData){
      axios.post('https://nuxt-blog-ada2d-default-rtdb.firebaseio.com/posts.json', postData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>