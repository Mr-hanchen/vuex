<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
    <div>{{ login }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'about',
  computed: {
    /* user(){
      return this.$store.state.user.user
    } */
    ...mapState({
      count: state => state.count,
      login: state => state.user.islogin,
    })
  },
}
</script>
