<template>
<div class="upload_container">
    <h2>Upload your file</h2><br>
    <b-row class="mt-2">
        <b-col sm="2">
        <label for="textarea-default">Description</label>
        </b-col>
        <b-col sm="10">
        <b-form-textarea
            id="textarea-default"
            placeholder="Description de la publication"
        ></b-form-textarea>
        </b-col>
    </b-row>
        <div class="mb-3 mt-3 col-8 mx-auto">
            <label for="formFile" class="form-label">Image</label>
            <input class="form-control" type="file" id="formFile">
        </div>
        
    <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>
</div>
</template>



<script>
export default {
    name: 'createPost',
    
}
</script>



<style scoped>

.upload_container{
    margin-top: 20px;
}

</style>