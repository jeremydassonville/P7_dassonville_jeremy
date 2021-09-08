<template>
<div>
  <div class="mt-3 mb-2 container_top">
    <b-avatar src="https://img2.freepng.fr/20180802/pyj/kisspng-the-binding-of-isaac-afterbirth-plus-video-games-file-isaac-app-png-binding-of-isaac-rebirth-wik-5b62fdf83ac776.4622285615332142002408.jpg" id="img_avatar"></b-avatar>
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
              <b-button href="#" variant="outline-primary"><i class="fas fa-thumbs-up"></i></b-button>
              <b-button href="#" variant="outline-primary"><i class="far fa-thumbs-down"></i></b-button>
              <b-button href="#" variant="outline-primary"><i class="far fa-comment-dots"></i></b-button>
            </div>
        </a>
      </router-link>
    </b-card>
</div>
    
    
</template>

<script>

import { mapState } from 'vuex';



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
}
</script>

<style scoped>

.container_top{
  display: flex;
  justify-content: center;
}

#img_avatar{
  margin-right: 10px;
}

.social_buton{
  display: flex;
  justify-content: space-around;
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
}

</style>