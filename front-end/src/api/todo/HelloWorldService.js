import axios from "axios"


class HelloWorldService{
    execuateHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
    }
    execuateHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean')
    }
}
export default new HelloWorldService()