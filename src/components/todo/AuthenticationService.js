class AuthenticationService{
    registerSuccessfullLogin(username,password){
        //data stored in localStorage has no expiration time 
        //data stored in sessionStorage gets cleared when the page seesion ends
        sessionStorage.setItem('authenticatedUser',username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
}
export default new AuthenticationService()