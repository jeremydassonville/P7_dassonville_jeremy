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
  }
}
</script>
