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
                <img v-if="attachement" :src="url" class="imgPreview">
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
            url: null,
        }
    },
    methods: {
        onFileChange: function(e) {
            this.attachement = e.target.files[0];
            this.url = URL.createObjectURL(this.attachement)
        },
        createPost: function(){
            
            const fd = new FormData();
            fd.append("inputFile", this.attachement);
            fd.append("content", this.content);
            fd.append("userId", localStorage.getItem("userId"));

            if(!this.content) {
                alert('pas de titre ! ');
            } else {
                instance.post("post/", fd, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
            })
            .then(() => {
                this.$router.push('/wall');
            }) 
            .catch(error => console.log(error));
            }
            
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

button{
  background-color: #D15159;
  border: none;
}

button:hover{
    background-color: #e4666f;
}


</style>