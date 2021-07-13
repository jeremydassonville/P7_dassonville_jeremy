<template>
<div>

    <b-form class="mt-3">

        <b-form-group class="col-8 mx-auto" label-cols="4" label-cols-lg="2" label="Email" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
        </b-form-group>

        <b-form-group class="col-8 mx-auto" label-cols="4" label-cols-lg="2" label="Password" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
        </b-form-group>

        <b-button class="mt-3" type="submit" variant="primary">Log in</b-button>

    </b-form>

</div>
</template>



<script>
export default {
   name: "Login"
}
</script>




<style scoped>

</style>