<template>

<div>
    <div class="card__container">
        <h1>Vos informations</h1>
        <b-card class="w-50 mx-auto mt-3 shadow p-3 mb-5 bg-white rounded">
            <b-avatar src="https://img2.freepng.fr/20180802/pyj/kisspng-the-binding-of-isaac-afterbirth-plus-video-games-file-isaac-app-png-binding-of-isaac-rebirth-wik-5b62fdf83ac776.4622285615332142002408.jpg" size="12rem"></b-avatar>
            <div class="userInfos">
                <div>
                    <h3>Email:</h3> 
                    <p id="cardUserInfo">{{userInfos.email}}</p> 
                </div>
                <div>
                    <h3>Nom:</h3> 
                    <p id="cardUserInfo">{{userInfos.surname}}</p> 
                </div>
                <div>
                    <h3>Prénom:</h3> 
                    <p id="cardUserInfo">{{userInfos.name}}</p> 
                </div>
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

import { mapState } from 'vuex';

export default {
    name: 'UserInfo',

    computed: {
        ...mapState(["userInfos"])
    },
    mounted() {
        this.$store.dispatch("getUserInfos");
        console.log(this.userInfos);
    },
}
</script>





<style scoped>

.card__container{
    margin-top: 100px;
}

.button__account{
    display: flex;
    justify-content: space-around;
}

.userInfos{
    margin-top: 20px;
}

#cardUserInfo{
    box-shadow: 1px 3px 5px #BA4C54;
    padding: 10px;
}

</style>