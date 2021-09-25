<template>
<div>
    <b-card style="max-width:40rem;" border-variant="light" class="card__container shadow p-3 mb-5 bg-white rounded">
        <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
        <h1 class="card__title" v-else>Inscription</h1>
        <p class="card__subtitle" v-if="mode == 'login'">Vous n'avez pas encore de compte ? 
            <span class="switchCreateAccount" @click="switchToCreateAccount()">Créer un compte</span>
        </p>
        <p class="card__subtitle" v-else>Vous avez déjà un compte 
            <span class="switchCreateAccount" @click="switchToLogin()">Se connecter</span>
        </p>
        <b-form-group label="Adresse mail:">
            <b-form-input type="email" v-model="email" placeholder="Entrer votre adresse mail" class="mt-3"></b-form-input>
        </b-form-group>
        <b-form-group label="Nom:"  class="mt-3" v-if="mode == 'create'">
            <b-form-input placeholder="Entrer votre nom" v-model="surname" ></b-form-input>
        </b-form-group>
        <b-form-group label="Prénom:" class="mt-3" v-if="mode == 'create'">
            <b-form-input placeholder="Entrer votre prénom" v-model="name"></b-form-input>
        </b-form-group>
        <b-form-group label="Mot de passe:" class="mt-3">
            <b-form-input type="password" v-model="password" placeholder="Entrer votre mot de passe"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-3" @click="login()" v-if="mode == 'login'">
            <span v-if="status == 'loading' ">Connexion en cours...</span>
            <span v-else>Connexion</span>
            </b-button>
        <b-button type="submit" variant="primary" class="mt-3" @click="createAccount()" v-else>
            <span v-if="status == 'loading' ">Création en cours...</span>
            <span v-else>Créer votre compte</span></b-button>

    </b-card>
</div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'Home',
    data: function() {
       return{
           mode: 'login',
           email: '',
           name: '',
           surname: '',
           password: '',
       } 
    },
    computed: {
        ...mapState(['status'])
    },
    methods: {
        switchToCreateAccount: function() {
            this.mode = 'create';
        },
        switchToLogin: function() {
            this.mode = 'login';
        },
        login: function() {
            const self = this;
            this.$store.dispatch('login', {
                email: this.email, 
                password: this.password,
            })
            .then(() => {
                self.$router.push('/wall'); 
            })
        },
        createAccount: function() {
            const self = this;
            this.$store.dispatch('createAccount', {
                email: this.email,
                name: this.name,
                surname: this.surname,
                password: this.password,
            })
            .then(() => {
              self.login();  
            })
        },
    },
}
</script>

<style scoped>

.card__container{
    margin: 0 auto;
    margin-top: 150px;
}

.switchCreateAccount{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

</style>