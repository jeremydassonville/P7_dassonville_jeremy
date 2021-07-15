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
            ></b-form-textarea>
            <input class="mt-3" type="file" @change="displayPreviewImg">
            <div id="preview">
                <img v-if="url" :src="url" class="imgPreview">
            </div>
            
            
            <b-button class="mt-3" type="submit" variant="primary">Publier</b-button>
        </b-card>
    </div>
</div>
</template>



<script>
export default {
    name: 'createPost',
    data() {
        return{
            url: null,
        }
    },
    methods: {
        displayPreviewImg: function(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
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