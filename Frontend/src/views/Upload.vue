<template>
  <div class="Upload">
    <CreatePost/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePost from '@/components/CreatePost.vue'

export default {
  name: 'Upload',
  components: {
    CreatePost
  },
  mounted: function() {
    if(localStorage.token == undefined || localStorage.token == null){
      this.$router.push('/');
    }else {
      this.$router.push('/Upload');
    }
  }
}
</script>
