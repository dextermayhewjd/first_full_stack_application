package myfirstfullstackapplication.restfulwebservices.helloworld;

public class HelloWorldBean {
    private  String message;
    public HelloWorldBean(String message) {
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
