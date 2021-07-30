<template>
    <div class="post">
        <Post :post="post" v-bind:key="post.id"/>
    </div>
</template>




<script>

import Post from '@/components/Post.vue'


const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default {
    name:'Publication',
    data() {
        return {
            post: {
                User: {
                    name: ' ',
                }
            },
        }
    },
    components: {
        Post,
    },
    mounted: function() {
       this.displayPost()
    },
    methods: {
        displayPost: function() {
            const id = this.$route.params.id
            instance.get('post/:id', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                params: {
                    id: id
                },
            })
            .then(response => {
                this.post = response.data;
                console.log(this.post)
                
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    
}
</script>



<style scoped>

</style>