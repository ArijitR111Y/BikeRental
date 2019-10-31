import React from 'react'
import DefaultInput from '../../ui-inputs/DefaultInputLayout';
import SubmitButton from '../../buttons/SubmitButton';
import { Form, Field } from 'formik';
import { InputFeedback } from '../../text/InputFeedback';

export const InnerForm = ({ errors, touched, isSubmitting, dirty  }) => (
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
        <DefaultInput label="Rate Average">
            <Field component="select" name="avgRate" className="form-control">
                <option value=""></option>
                <option value="z">0+</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
            </Field>
            <InputFeedback error={touched.color && errors.color} />
        </DefaultInput>

        <SubmitButton label="Search" disabled={isSubmitting || Object.keys(errors).length} ></SubmitButton>
    </Form>
)
