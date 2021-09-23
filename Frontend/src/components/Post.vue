<template>
<div>
  <div class="mt-3 mb-2 container_top">
    <div class="userInfo">
    <p id="userPostInfo">{{ post.User.name }} {{ post.User.surname }}</p>
    <h2>{{post.content}}</h2>
    </div>
  </div>
    <b-card class="mb-2 mx-auto card_container">
      <router-link :to="postLink">
        <a>
          <b-card-img :src="post.attachement" loading="lazy"  alt="Image"  class="mb-2"></b-card-img>
            <div class="social_buton mt-3">
              <b-button href="#" variant="outline-primary" id="likeButon" @click="likeDislikePost()"><i class="fas fa-thumbs-up">{{ post.nbrLike }}</i></b-button>
              <b-button :to="postLink" variant="outline-primary"><i class="far fa-comment-dots">{{ post.nbrComment }}</i></b-button>
            </div>
        </a>
      </router-link>
    </b-card>
</div>
    
    
</template>

<script>

import { mapState } from 'vuex';

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})


export default {
  name: 'Post',
  data(){
    return {
      postLink: '',
    }
  },
  computed: {
    ...mapState(["userInfos"])
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  mounted() {
        this.$store.dispatch("getUserInfos");
        this.postLink = '/publication/' + this.post.id;
    },
  methods: {
    likeDislikePost() {
      const like = {
        postUserId : this.post.UserId,
        postId : this.post.id
      }
      instance.post('/like', like, {
        headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(() => {
        const postId = this.post.id
        instance.get('/like/:id', {
          params: {
            postId: postId
          }
        })
        .then(response => this.post.nbrLike = response.data.nbrLike)
        .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>

.container_top{
  display: flex;
  justify-content: center;
}

.social_buton{
  display: flex;
  justify-content: space-evenly;
}

.card_container{
  max-width: 40rem;
}

.userInfo{
  display: flex;
  align-items: baseline;
}

#userPostInfo{
  margin-right: 10px;
  font-size: 12px;
}

.btn-outline-primary:hover{
  background-color: #D15159;
  border-color: #D15159;
}

i.fas.fa-thumbs-up::before{
  margin-right: 5px
}


</style>