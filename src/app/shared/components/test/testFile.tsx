import {Formik, Form, Field, FieldArray} from 'formik';

const initialValues = {
    name : '',
    age : '',
    gender : ''
}

const handleSubmit = values => {
    console.log(values);
}

export default function TestForm(){

    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {
                    (props) => {

                        console.log(props);

                        const {values, handleChange, handleSubmit} = props;

                        return (
                            <div>
                                {
                                    
                                }
                            </div>
                        )
                    }
                }

            </Formik>
        </div>
    )
}