<template>
  <div class="admin-post-page">
    <section class="update-form">
      
      <admin-post-form :post="loadedPost" @submitted="submitter"> </admin-post-form>
      
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },

  // data() {
  //   return {
  //     loadedPost: {
  //       author: "Maxmilian",
  //       content: "Great",
  //       title: "Title",
  //       thumbnailLink: "N/A",
  //     },
  //   };
  // },

  asyncData(context) {
    // setTimeout( () => {
      return axios.get('https://nuxt-blog-ada2d-default-rtdb.firebaseio.com/posts/'+ context.params.postId + '.json')
    .then(res => {
      console.log(res.data);
      return {loadedPost:res.data};
    })
    .catch(err=>console.error(err));
    // }, 1000 * 2);
  },

  

  methods:{
    submitter(editedPost){
      axios.put('https://nuxt-blog-ada2d-default-rtdb.firebaseio.com/posts/'+ this.$route.params.postId + '.json', editedPost)
      .then(res=>{
        console.log(res);
        this.$router.push('/admin');  
      })
      .catch(err=>console.log(err));
    }
  }
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