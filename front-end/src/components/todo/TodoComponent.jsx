import React,{Component} from "react";
import moment from "moment";
import { Field, Formik } from "formik";
import { Form } from "formik"

class TodosComponent extends Component{
    
    constructor(props){
        super(props)
       
        this.state = {
            id : this.props.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }
    render(){
        return (
        <div>
            <h1>Todo</h1>
            <div classname= "container">
                <Formik>
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