package myfirstfullstackapplication.restfulwebservices.basic.auth;

public class AuthenticationBean {
    private  String message;
    public AuthenticationBean(String message) {
        this.message = message;
    }


    public void setMessage(String message) {
        this.message = message;
    }
    // have to write a getter otherwise it would be a 500 e

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
