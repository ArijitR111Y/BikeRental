import React from 'react'
import DefaultInput from '../../ui-inputs/DefaultInputLayout';
import { Form, Field } from 'formik';
import { InputFeedback } from '../../text/InputFeedback';

export const InnerForm = ({ touched, errors, values, children, isSubmitting }) => (
    <Form>
        <DefaultInput label="Bike Name">
            <Field type="text" name="model" className="form-control" />
            <InputFeedback error={touched.model && errors.model} />
        </DefaultInput>
        <DefaultInput label="Rate per hour">
            <Field type="number" name="weight" className="form-control" />
            <InputFeedback error={touched.weight && errors.weight} />
        </DefaultInput>
        <DefaultInput label="Source Dock">
            <Field component="select" name="color" className="form-control">
                <option value=""></option>
                <option value="SJT">SJT</option>
                <option value="TT">TT</option>
                <option value="MB">MB</option>
                <option value="SMV">SMV</option>
                <option value="GDN">GDN</option>
                <option value="Men's Hostel">Men's Hostel</option>
            </Field>
            <InputFeedback error={touched.color && errors.color} />
        </DefaultInput>
        <DefaultInput label="Is Available">
            <div className="form-check">
                <Field checked={values.isAvailable} className="form-check-input" type="checkbox" name="isAvailable" />
            </div>
        </DefaultInput>
        {children(() => isSubmitting || Object.keys(errors).length)}
    </Form>

)
