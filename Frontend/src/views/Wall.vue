<template>
  <div class="home">
    <Post v-for="post in allPosts" v-bind:key="post.id" :post="post" />

  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'



const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default {
  name: 'Wall',
  data() {
    return {
      allPosts: [],
    }
  },
  
  components: {
    Post,
  },
  methods: {
  },
  mounted: function() {
    if(localStorage.token == undefined || localStorage.token == null){
      this.$router.push('/');
    }
    instance.get('post/', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response =>{
      this.allPosts = response.data;
      console.log(this.allPosts)
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style>


</style>