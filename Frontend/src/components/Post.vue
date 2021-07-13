<template>
<div>
  <div class="mt-3 mb-2 container_top">
    <b-avatar src="https://placekitten.com/300/300" id="img_avatar"></b-avatar>
    <h2>{{title}}</h2>
  </div>
    <b-card class="mb-2 mx-auto card_container">
      <b-card-img :src="img" loading="lazy"  alt="Image"  class="mb-2"></b-card-img>
        <div class="social_buton">
          <b-button href="#" variant="outline-primary"><i class="fas fa-thumbs-up"></i></b-button>
          <b-button href="#" variant="outline-primary"><i class="far fa-thumbs-down"></i></b-button>
          <b-button href="#" variant="outline-primary"><i class="far fa-comment-dots"></i></b-button>
        </div>
    </b-card>
</div>
    
    
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: String,
    img: String,
  }
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

</style>