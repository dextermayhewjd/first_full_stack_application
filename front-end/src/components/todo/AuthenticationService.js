import axios from "axios";
class AuthenticationService{
    
    executeBasicAuthenticationService(username,password){
        
        return axios.get('http://localhost:8080/basicauth',
            {headers: {authorization:this.createBasicAuthToken(username,password) }})
    }

    executeJwtAuthenticationService(username,password){
        
        return axios.post('http://localhost:8080/authenticate',
            {username,
             password}
            )
    }

    
    // createBasicAuthToken(username,password){
    //     return 'Basic '+window.btoa(username +":"+password)
    // }

    // registerSuccessfullLogin(username,password){
    //     //data stored in localStorage has no expiration time 
    //     //data stored in sessionStorage gets cleared when the page seesion ends
    //     // let basicAuthHeader = 'Basic '+window.btoa(username +":"+password)

    //     sessionStorage.setItem('authenticatedUser',username);
    //     this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    // }
    
    registerSuccessfullLoginForJwt(username,token){
        // console.log('start registerSuccessfullLoginForJwt')
        sessionStorage.setItem('authenticatedUser',username);
        // console.log(' sessionStorage')
        this.setupAxiosInterceptors(this.createJWTToken(token))
        // console.log('registerSuccessfullLoginForJwt')
    }

    createJWTToken(token){
        return 'Bearer ' + token
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
    setupAxiosInterceptors(token){

        // let username = 'user'
        // let password = 'password'

        // let basicAuthHeader = 'Basic '+window.btoa(username +":"+password)
        console.log('start setupAxiosInterceptors')
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                config.headers.authorization = token
                
                console.log(token)
            }
            return config
        }
        )
    }


}
export default new AuthenticationService()