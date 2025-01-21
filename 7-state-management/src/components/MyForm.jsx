import { Field, Form } from "react-final-form";

const required = (value) => (value ? undefined : "This field is required.");

const mustBeNumber = (value) => isNaN(value) ? "Must be a number." : undefined; 

function composeValidators(...validators) {
    return (...args) => 
        validators.reduce(
            (error, validator) => error || validator(...args), 
            undefined
        );
}

const minValue = (min) => (value, allValues) => {
    if(allValues.parentName) {
        return undefined;
    }

    return isNaN(value) || value >= min ? undefined : `Min value is ${min}.`;
}

const MyForm = () => {
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <Form 
                onSubmit={onSubmit} 
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name: </label>
                            <Field name="firstname" validate={required}>
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="Your Name" />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>)
                                }
                            </Field>
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <Field name="lastname" validate={required}>
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="Your Last Name" />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>)
                                }
                            </Field>
                        </div>
                        <div>
                            <label>Email: </label>
                            <Field name="email" validate={required}>
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="email" placeholder="Your Email" />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>)
                                }
                            </Field>
                        </div>
                        <div>
                            <label>Age: </label>
                            <Field name="age" validate={composeValidators(required, mustBeNumber, minValue(18))}>
                                {({input, meta}) => (
                                    <div>
                                        <input {...input} type="text" placeholder="Your Age" />
                                        {meta.error && meta.touched && <p>{meta.error}</p>}
                                    </div>)
                                }
                            </Field>
                        </div>
                        {values.age && values.age < 18 && (
                            <div>
                                <label>Parent Name: </label>
                                <Field name="parentName" validate={required}>
                                    {({input, meta}) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Your Parent Name" />
                                            {meta.error && meta.touched && <p>{meta.error}</p>}
                                        </div>)
                                    }
                                </Field>
                            </div>
                        )}
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>Send</button>
                            <button type="button" onClick={form.reset}>Reset</button>
                        </div>
                    </form>
                )}
            />
        </>
    );
}

export default MyForm;