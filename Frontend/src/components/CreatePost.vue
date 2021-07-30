<template>
<div class="upload_container">
    <h1>Créer votre publication</h1><br>
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
            
            
            <b-button class="mt-3" type="submit" variant="primary" @click="createPost()">Publier</b-button>
        </b-card>
    </div>
</div>
</template>



<script>

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})


export default {
    name: 'createPost',
    data() {
        return{
            content: '',
            attachement: '',
        }
    },
    methods: {
        onFileChange: function(e) {
            this.attachement = e.target.files[0] || e.dataTransfer.files;
        },
        createPost: function(){
            const fd = new FormData();
            fd.append("inputFile", this.attachement);
            fd.append("content", this.content);
            console.log(fd)
            instance.post("post/", fd, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                console.log(response);
            }) 
            .catch()
        }
    },
}
</script>



<style scoped>

.upload_container{
    margin-top: 150px;
}

.imgPreview{
    max-width: 500px;
    margin-top: 20px;
}



</style>