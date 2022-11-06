import React,{Component} from "react";
import moment from "moment";
import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "formik"
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService"
class TodosComponent extends Component{
    
    constructor(props){
        super(props)
       
        this.state = {
            id : this.props.params.id,
            description : 'Learn Forms Now',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username,this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')   
            }
            ))
    }

    onSubmit(values){
            console.log(values);
        }
    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a Description'
        }else if(values.description.length<5){
            errors={description:'Should have at least 5 Characters'}
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = ' Enter a valid Target Date '
        }
        return errors
    }
    render(){
        // let description = this.state.description
        // let targetDate = this.state.targetDate
        // a simple way to define
        let {description,targetDate} = this.state
        //let test = {a:'1',b:'2',c:'3'}
        //let {a,b,c} = test
        //this is called restructuring
        
        return (
        <div>
            <h1>Todo</h1>
            <div classname= "container">
                <Formik
                    initialValues = {
                        {
                            // description : description,
                            // tagetDate : targetDate
                            // if the key has the same name as the value 
                            // don't have to type it twice
                            description,
                            targetDate
                        }
                    }
                    onSubmit = {this.onSubmit}
                    validateOnBlur = {false}
                    validateOnChange = {false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name = "description" component="div" 
                                                    className="alert alert-warning"></ErrorMessage>
                                <ErrorMessage name = "targetDate" component="div" 
                                                    className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>                                  
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate" ></Field>                                  
                                </fieldset>
                                <button classname="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>)
    }
}
export default TodosComponent