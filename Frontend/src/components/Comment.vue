<template>
<div>
  <b-card class=" mx-auto commentContainer">
      <span id="deleteCom" @click="deleteComment()" v-if="this.userInfos.userId === this.comment.userId">x</span>
      <div class="commentTitle">
        <h4>{{comment.auteur}}</h4>
        <p>{{comment.createdAt}}</p>
      </div>
    <b-card-text class="commentContent">
      {{comment.content}}
    </b-card-text>

  </b-card>
</div>


</template>



<script>

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})


import { mapState } from 'vuex';

export default {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    computed: {
        ...mapState(["userInfos"])
    },
    methods: {
        deleteComment() {

            
            const commentId = this.comment.id
            const commentUserId =  this.comment.userId
            

            instance.delete('comment/', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                params: {
                    commentId,
                    commentUserId        
                }
            })
            .then(() => this.$router.go())
            .catch(error => console.log(error));
        }
    }
}
</script>



<style>

.commentTitle{
    display: flex;
    align-items: baseline;
    font-size: 12px;
}

.commentTitle h4{
    font-size: 12px;
}

.commentTitle p {
    margin-left: 5px;
}

.commentContainer{
    margin-top: 10px;
    max-width: 640px;
}

.commentContent{
    font-size: 15px;
}

#deleteCom{
    position: absolute;
    right: -6px;
    top: -6px;
    border: 1px solid rgb(184, 182, 182);
    border-radius: 50%;
    width: 17px;
    height: 17px;
    background-color: white;
    font-size: 10px;
}

#deleteCom:hover {
    cursor: pointer;
}

</style>