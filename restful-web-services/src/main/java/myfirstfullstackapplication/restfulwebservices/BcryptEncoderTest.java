package myfirstfullstackapplication.restfulwebservices;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
public class BcryptEncoderTest {
    public static void main(String[] args){
       BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


       for(int i = 1;i<=10;i++){
           String encodedString = encoder.encode("The password you want to encode please wrtie here in the rawPassword");
           System.out.println(encodedString);
       }

    }
}