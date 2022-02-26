<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadPosts"> </post-list>
  </div>
</template>

<script>
import PostList from "../components/Posts/PostList.vue";

export default {
  name: "IndexPage",
  components: {
    PostList,
  },
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       posts: [
  //         {
  //           id: "1",
  //           previewText: "Something is wrong in this life - 1",
  //           title: "Title 1",
  //           thumbnail:
  //             "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
  //         },
  //         {
  //           id: "2",
  //           previewText: "Something is wrong in life - 2",
  //           title: "Title 2",
  //           thumbnail:
  //             "https://howtodrawforkids.com/wp-content/uploads/2021/05/how-to-draw-naruto-for-kids-1.jpg",
  //         },
  //       ],
  //     });
  //   }, 1000 * 1);
  // },
  computed: {
    loadPosts() {
      return this.$store.getters.loadPosts;
    },
  },
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/img/wall.png");
  background-position: center;
  background-size: cover;
  text-align: center;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(187 221 206);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>


