import axios from "axios";
class AuthenticationService{
    registerSuccessfullLogin(username,password){
        //data stored in localStorage has no expiration time 
        //data stored in sessionStorage gets cleared when the page seesion ends
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors()
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){return false}
        else{return true}
    }
    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null){return ''}
        else{return user}
    }
    setupAxiosInterceptors(){

        let username = 'user'
        let password = 'password'

        let basicAuthHeader = 'Basic '+window.btoa(username +":"+password)

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                config.headers.authorization = basicAuthHeader
            }
            return config
        }
        )
    }

}
export default new AuthenticationService()