<template>
  <div id="app">

  <div>
    <b-navbar class="nav" type="dark">
      <b-navbar-nav>
        <b-navbar-brand to="/wall">Groupomania</b-navbar-brand>
        
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Utilisateur" right>
          <b-dropdown-item to="/account">Compte</b-dropdown-item>
          <b-dropdown-item @click="disconnectUser()" to="/">deconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item id="uploadButton" v-if="test == 0">
          <b-button to="/upload" variant="primary">Publier</b-button>
        </b-nav-item>

      </b-navbar-nav>
    </b-navbar>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function () {
    return{
      test: 0
    }
  },
  methods: {
    disconnectUser: function() {
      localStorage.clear();
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#uploadButton{
  position: absolute;
  right: 0;
  top: 0;
}

.nav{
  background-color: #081E43;
}

#test{
  background-color: #D15159;
}

</style>
