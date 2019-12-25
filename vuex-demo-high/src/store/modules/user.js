import axios from 'axios'

let user = {
    state: {
        user: null,
        isLogin: false
    },
    getters: {},
    mutations: {
        login(state, user){
            axios.post('/api/users/login', {
                account: user.account,
                password: user.password
            }).then(res => {
                if(res.data.code === 200){
                    console.log(res.data);
                    if(user.remember){
                        localStorage.setItem('account', user.account);
                    }else{
                        localStorage.removeItem('account');
                    }
                    state.user = res.data.user;
                    state.isLogin = true;
                }
            }).catch(res => {
                console.log(res)
                console.log('登录错误')
            })
        }
    },
    actions: {},
}

export default user