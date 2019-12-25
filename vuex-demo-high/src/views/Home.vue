<template>
  <div class="home">
    <label for="">账号：</label>
    <input type="text" placeholder="请输入账号" v-model="text">
    <label for="">密码：</label>
    <input type="password" placeholder="请输入账号" v-model="password">
    <button @click="message">调用login</button>
    <br>
    {{ user }}-{{ isLogin }}
    <br>
    {{ $store.state.count }}-{{ count }}
  </div>
</template>

<script>
// map 映射，把vuex仓库中的state, getters, mutations, actions映射到当前组件中来，当前组件就可以像使用当前组件中的数据，方法一样去使用它们。再也不用使用$store对象。
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: 'home',
  data() {
    return {
      text: '',
      password: ''  
    }
  },
  methods: {
    message(){
      console.log(this);
      this.$store.commit('login', {
        account: this.text,
        password: this.password
      })
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      isLogin: state => state.user.isLogin,
      count: state => state.count
    })
  }
}
</script>
