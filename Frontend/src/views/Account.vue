<template>
  <div class="account">
    <UserInfo/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserInfo from '@/components/UserInfo.vue'

export default {
  name: 'Account',
  components: {
    UserInfo
  },
  mounted: function() {
    if(localStorage.token == undefined || localStorage.token == null){
      this.$router.push('/');
    }else {
      this.$router.push('/Account');
    }
  }
}
</script>
