<template>
  <div id="app">

  <div>
    <b-navbar class="nav" type="light">
      <b-navbar-nav>
        <b-navbar-brand to="/wall">
          <img src="./assets/icon-left-font.jpg" id="logo_groupomania">
        </b-navbar-brand>
        
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Utilisateur" right>
          <b-dropdown-item to="/account">Compte</b-dropdown-item>
          <b-dropdown-item @click="disconnectUser()" to="/">deconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
          
        <b-nav-item id="uploadButton" >
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

nav.navbar{
  display: flex;
  justify-content: center;
}

.navbar-nav{
  display: flex;
  align-items: baseline;
}

a.btn.btn-primary{
  background-color: #D15159;
  border: none;
}
a.btn.btn-primary:hover{
  background-color: #e4666f;
}

.nav{
  background-color: #FEFFFE;
}

html, #app{
  background-color: #ebebeb;
  
}

#logo_groupomania {
  width: 300px;
  height: 60px;
  object-fit: cover;
}



</style>
