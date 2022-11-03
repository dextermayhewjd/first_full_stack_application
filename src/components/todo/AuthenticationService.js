class AuthenticationService{
    registerSuccessfullLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }
}
export default new AuthenticationService()