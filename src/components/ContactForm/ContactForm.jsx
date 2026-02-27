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
        <>                            
            <embed
                  src='blob:http://localhost:3000/2855af18-02f0-4426-b0ab-ef254d9826e5
                  type="application/pdf"
                  className="h-[70vh] w-full rounded-b-lg"
                />
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
            <Form className={css.form}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type='text' name='name' id={nameFieldId} className={css.formField} />
                <ErrorMessage name='name' component='span' className={css.errorMessage} />
                <label htmlFor={phoneFieldId}>Number</label>
                <Field type='text' name='phone' id={phoneFieldId} className={css.formField} />
                <ErrorMessage name='phone' component='span' className={css.errorMessage} />
                <button type='submit' >Add contact</button>
            </Form>
        </Formik>
            </>
    );
};
