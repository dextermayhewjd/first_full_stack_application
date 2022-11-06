import React,{Component} from "react";
import moment from "moment";
import { Field, Formik } from "formik";
import { Form } from "formik"

class TodosComponent extends Component{
    
    constructor(props){
        super(props)
       
        this.state = {
            id : this.props.params.id,
            description : 'Learn Forms Now',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        
        this.onSubmit = this.onSubmit.bind(this)


    }

    onSubmit(values){
            console.log(values);
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
                
                >
                    {
                        (props) => (
                            <Form>
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