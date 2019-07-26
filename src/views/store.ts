// @ts-ignore
const state: StateLogin = {
    login:{}
}


// @ts-ignore
export default {
    state,
    mutations: {
        SET_LOGIN(state: StateLogin, loginData: any) {
            console.log(loginData)
            state.login = loginData
        }
    }
}
