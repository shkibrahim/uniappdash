import { proxy } from 'valtio'
import Cookies from 'universal-cookie';
const cookies=new Cookies()
const auth=proxy(({
    isLogin:true,
    user:{},
    token:cookies.get("jwt_authorization"),
    login: (token, expirationTime,user) => {
        auth.isLogin=true
        auth.user=user
        cookies.set("jwt_authorization", token, { expires: expirationTime });
    },
	logout: () => {
        auth.token=null
        auth.isLogin=false
        cookies.remove("jwt_authorization")
    }
}))

export default auth