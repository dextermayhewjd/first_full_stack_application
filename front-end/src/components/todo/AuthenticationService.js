class AuthenticationService{
    registerSuccessfullLogin(username,password){
        //data stored in localStorage has no expiration time 
        //data stored in sessionStorage gets cleared when the page seesion ends
        sessionStorage.setItem('authenticatedUser',username);
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
}
export default new AuthenticationService()