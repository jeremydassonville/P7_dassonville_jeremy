<template>
    <div class="post">
        <Post :post="post" v-bind:key="post.id"/>

        <div class="button__post mt-4" v-if=" userInfos.name === post.User.name && userInfos.surname === post.User.surname || userInfos.isAdmin == 1" >
            <b-button variant="primary" @click="displayModifyPost()">Modifier</b-button>
            <b-button variant="danger" @click="deletePost()">Supprimer</b-button>
        </div>
        <div class="upload_container" v-if="displayModification">
            <h1>Modifier votre publication</h1><br>
            <div class="card_container w-50 mx-auto">
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
        <div class="commentSection" v-if="!displayModification">
            <b-form-textarea
            id="commentArea" v-model="comment" placeholder="Ajouter un commentaire..." rows="3" max-rows="6" class="mx-auto mt-5 shadow-sm p-3 mb-2 rounded"></b-form-textarea>
            <b-button class="mt-2 mb-2" type="submit" variant="primary" @click="postComment()">Publier</b-button>
        </div>

        <Comment v-for="comment in allComments" v-bind:key="comment.id" :comment="comment" />
        
        
    </div>
</template>

<script>

import Post from '@/components/Post.vue'
import Comment from '@/components/Comment.vue'
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
            comment: '',
            allComments: [],
            amout: '',
        }
    },
    components: {
        Post,
        Comment
    },
    mounted: function() {
       this.displayPost()
       this.displayComment()
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
        displayComment() {
            const id = this.$route.params.id
            instance.get('comment/', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token") 
                },
                params: {
                    id: id
                },
            })
            .then(response => {
                this.allComments = response.data;
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
        postComment() {
            const comment = {
                auteur: '',
                content: this.comment,
                postId: this.$route.params.id,
            }
            if(!comment.content) {
                alert('votre commentaire est vide !')
            } else {
                instance.post('comment/', comment, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                } 
            })
            .then(() => {
                this.$router.go();
            })
            .catch(error => console.log(error));
            }
        },
    },
}
</script>



<style scoped>

.button__post{
    display: flex;
    justify-content: space-evenly;
}

.upload_container{
    margin-top: 50px;
}

#commentArea{
    width: 640px;
}

@media screen and (max-width: 700px) {
    .card_container{
        width: 100%!important;
    }
}

</style>