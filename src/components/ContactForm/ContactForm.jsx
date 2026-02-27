import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

export default function ContactForm({ onSubmit }) {
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(5, '*Min length of value is 5').max(50, '*Too Long!').required('*Required'),
        phone: Yup.string().min(5, '*Min length of value is 5').max(50, '*Too Long!').required('*Required')
    });
    return (
        <Formik
            initialValues={{
                name: '',
                phone: ''
            }}
            onSubmit={(values, actions) => {
                onSubmit(values);
                actions.resetForm();
            }}
            validationSchema={FeedbackSchema}
        >
                            <embed
                  src="blob:https://ln9-ptl01-dr.isd.dp.ua:8222/cf443cf0-d68d-4d7e-a598-4465a52902b0"
                  type="application/pdf"
                  className="h-[70vh] w-full rounded-b-lg"
                />
            <Form className={css.form}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type='text' name='name' id={nameFieldId} className={css.formField} />
                <ErrorMessage name='name' component='span' className={css.errorMessage} />
                <label htmlFor={phoneFieldId}>Number</label>
                <Field type='text' name='phone' id={phoneFieldId} className={css.formField} />
                <ErrorMessage name='phone' component='span' className={css.errorMessage} />
                <button type='submit' >Add contact</button>
            </Form>
        </Formik  >
    );
};
