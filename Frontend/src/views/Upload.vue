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
  }
}
</script>
