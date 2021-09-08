<template>
    <div class="post">
        <Post :post="post" v-bind:key="post.id"/>

        <div class="button__post mt-4" v-if=" userInfos.name === post.User.name && userInfos.surname === post.User.surname" >
            <b-button variant="outline-primary" @click="displayModifyPost()">Modifier</b-button>
            <b-button variant="danger" @click="deletePost()">Supprimer</b-button>
        </div>

        <div class="upload_container" v-if="displayModification">
            <h1>Modifier votre publication</h1><br>
            <div class="card__container w-50 mx-auto">
                <b-card class="shadow p-3 mb-5 bg-white rounded">
                    <b-form-textarea
                        id="textarea"
                        placeholder="Décrivez votre publication..."
                        rows="2"
                        max-rows="6"
                        v-model="content"
                    ></b-form-textarea>
                    <input class="mt-3" type="file" @change="onFileChange">
                    <div id="preview">
                        <img v-if="attachement" :src="attachement" class="imgPreview">
                    </div>
                    
                    
                    <b-button class="mt-3" type="submit" variant="primary" @click="modifyPost()">Modifier</b-button>
                </b-card>
        </div>
</div>


    </div>
</template>




<script>

import Post from '@/components/Post.vue'
import { mapState } from 'vuex';




const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default {
    name:'Publication',
    data() {
        return {
            displayModification: '',
            post: {
                User: {
                    name: ' ',
                }
            },
            content: '',
            attachement: '',
        }
    },
    components: {
        Post,
    },
    mounted: function() {
       this.displayPost()
    },
    computed: {
    ...mapState(["userInfos"])
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
            })
            .catch(error => {
                console.log(error);
            })
        },
        onFileChange: function(e) {
            this.attachement = e.target.files[0] || e.dataTransfer.files;
        },
        displayModifyPost() {
            this.displayModification = 'on';
        },
        modifyPost() {
            const userId = this.post.User.id
            const postId = this.$route.params.id
            

            const fd = new FormData();
            fd.append("inputFile", this.attachement);
            fd.append("content", this.content);
            fd.append("postId", postId);
            fd.append("userId", userId);

            instance.put("post/", fd, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
                .then(() => {
                    this.$router.push('/wall');
                }) 
                .catch(error => console.log(error));
        },
        deletePost() {
        instance.delete("http://localhost:3000/api/post/", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: {
                postId: this.post.id,
                userIdOrder: this.userInfos.id
            }
            })
            .then(() => {
            this.$router.push('/wall')
            })
            .catch(error => console.log(error));
        },
    },
}
</script>



<style scoped>

.button__post{
    display: flex;
    justify-content: space-around;
}

.upload_container{
    margin-top: 50px;
}

</style>