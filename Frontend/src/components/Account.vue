<template>

<div>
    <b-card class="w-50 mx-auto mt-3">
        <b-card-header>
            <b-avatar src="https://ecodev.ch/wp-content/uploads/2019/06/joshua-earle-12689-unsplash.jpg" id="img_avatar"></b-avatar>
            <b-button  type="submit" variant="primary">Change avatar</b-button>
        </b-card-header>

            <b-card-text class="card_text">
                User name: 
            </b-card-text>
            <b-card-text class="card_text">
                E-mail:
            </b-card-text>

            <b-card-footer>
                <b-button class="mt-3" type="submit" variant="danger">delete account</b-button>
            </b-card-footer>
    </b-card>
</div>


</template>




<script>
export default {
    name: 'Account'
}
</script>





<style scoped>

.card_text{
    text-align: left;
}


</style>