<template>

<div>
    <div class="card__container">
        <b-card class="w-50 mx-auto mt-3 shadow p-3 mb-5 bg-white rounded">
            <b-avatar src="https://img2.freepng.fr/20180802/pyj/kisspng-the-binding-of-isaac-afterbirth-plus-video-games-file-isaac-app-png-binding-of-isaac-rebirth-wik-5b62fdf83ac776.4622285615332142002408.jpg" size="12rem"></b-avatar>
            <div>
                <b-form-group label="Adresse mail:" class="mt-3">
                    <b-form-input type="email"></b-form-input>
                </b-form-group>
                <b-form-group label="Nom:" class="mt-3">
                    <b-form-input></b-form-input>
                </b-form-group>
                <b-form-group label="Prénom:" class="mt-3">
                    <b-form-input></b-form-input>
                </b-form-group>
            </div>

        <div class="button__account mt-3">
            <b-button variant="outline-primary">Modifier votre avatar</b-button>
            <b-button variant="danger">Supprimer votre compte</b-button>
        </div>   
        </b-card>
    </div>
</div>


</template>




<script>
export default {
    name: 'UserInfo'
}
</script>





<style scoped>

.card__container{
    margin-top: 150px;
}

.button__account{
    display: flex;
    justify-content: space-around;
}



</style>