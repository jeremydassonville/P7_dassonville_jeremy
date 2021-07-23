<template>
  <div class="home">
    <CreatePost />
    <Post title="ma publication !" img="https://i.picsum.photos/id/20/400/400.jpg?hmac=A7YmXnzxu9K5utXf6B0jErut4ApRwfhKMuPwLRWY-Wk"/>
   
    

  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import CreatePost from '@/components/CreatePost.vue'

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default {
  name: 'Wall',
  components: {
    Post,
    CreatePost
  },
  mounted: function() {
    if(localStorage.token == undefined || localStorage.token == null){
      this.$router.push('/');
    }else {
      this.$router.push('/Wall');
    }
    instance.get('post/', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response =>{
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>