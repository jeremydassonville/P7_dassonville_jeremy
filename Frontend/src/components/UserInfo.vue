<template>

<div>
    <div class="card__container">
        <h1>Vos informations</h1>
        <b-card class="w-50 mx-auto mt-3 shadow p-3 mb-5 bg-white rounded">
            <div class="userInfos">
                <div>
                    <h3>Email:</h3> 
                    <b-form-input v-model="userEmail"  :placeholder="userInfos.email" id="cardUserInfo"></b-form-input>
                </div>
                <div>
                    <h3>Nom:</h3> 
                    <b-form-input v-model="userSurname" :placeholder="userInfos.surname" id="cardUserInfo"></b-form-input> 
                </div>
                <div>
                    <h3>Prénom:</h3> 
                    <b-form-input v-model="userName" :placeholder="userInfos.name" id="cardUserInfo"></b-form-input> 
                </div>
            </div>
        <div class="button__account mt-3">
            <b-button variant="primary" @click="modifyUserInfos()">Modifier</b-button>
            <div>
                <b-button v-b-modal.modal-1 variant="danger" id="deleteButton" >Supprimer votre compte</b-button>
                    <b-modal id="modal-1" title="Supprimer votre compte?" hide-footer>
                        <p class="my-4">Êtes vous sûr de vouloir supprimer votre compte?</p>
                        <b-button variant="danger" @click="deleteUserAccount()">Confirmer</b-button>
                </b-modal>
            </div>
        </div>   
        </b-card>
    </div>
</div>

</template>

<script>

import { mapState } from 'vuex';

const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export default {
    name: 'UserInfo',
    data() {
        return {
            userEmail: this.userEmail,
            userSurname: this.userSurname,
            userName: this.userName,
            userId: this.userId,
        }
    },
    computed: {
        ...mapState(["userInfos"])
    },
    mounted() {
        this.$store.dispatch("getUserInfos");
    },
    methods: {
        modifyUserInfos() {
            const userInfos = {
                userEmail: this.userEmail,
                userSurname: this.userSurname,
                userName: this.userName,
                userId: this.userId
            }

            if(userInfos.userEmail == undefined && userInfos.userSurname == undefined && userInfos.userName == undefined && userInfos.userId == undefined){
                alert("Vous n'avez pas rempli de modification !")
            } else {
                instance.put("user/", userInfos, {
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
        deleteUserAccount() {
            instance.delete("user/",
                {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            .then(() => {
                localStorage.clear();
                this.$router.push('/wall');
            })
            .catch(error => console.log(error));
        }
    }
}
</script>


<style scoped>

h3{
    margin-top: 10px;
}

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
    padding: 10px;
}

input{
    text-align: center;
}

@media screen and (max-width: 1000px){
    .card {
        width: 100%!important;
    }
    #deleteButton{
        width: 110px;
    }
}

</style>