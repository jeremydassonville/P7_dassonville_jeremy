<template>
  <div class="login">
    <Account/>
  </div>
</template>

<script>
// @ is an alias to /src
import Account from '@/components/Account.vue'

export default {
  name: 'Home',
  components: {
    Account
  }
}
</script>
