<template>
<div>

    <h1 class="mt-3">Create your account</h1>

    <b-form class="mt-3">
        <b-form-group class="col-8 mx-auto" label-cols="4" label-cols-lg="2" label="User Name" label-for="input-default">
            <b-form-input v-model="userName" id="input-default"></b-form-input>
        </b-form-group>

        <b-form-group class="col-8 mx-auto" label-cols="4" label-cols-lg="2" label="Email" label-for="input-default">
            <b-form-input v-model="email" id="input-default"></b-form-input>
        </b-form-group>

        <b-form-group class="col-8 mx-auto" label-cols="4" label-cols-lg="2" label="Password" label-for="input-default">
            <b-form-input v-model="password" id="input-default"></b-form-input>
        </b-form-group>

        <div class="mb-3 col-8 mx-auto">
            <label for="formFile" class="form-label">Avatar</label>
            <input class="form-control" type="file" id="formFile">
        </div>

        <b-button @click="createAccount()" v-on:submit.prevent="onSubmit" class="mt-3" type="submit" variant="primary">Create account</b-button>

    </b-form>

</div>
</template>



<script>
export default {
    name: "Signup",
    data: function () {
        return {
                userName: '',
                email: '',
                password: '',
        }
    },
    methods: {
        createAccount: function() {
            this.$store.dispatch('createAccount', {
                userName: this.userName,
                email: this.email,
                password: this.password
            })
        }
    },
}
</script>




<style scoped>

</style>