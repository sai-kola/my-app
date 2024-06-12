import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactUs.css';

const ContactUs = () => {
  const initialValues = {
    name: '',
    email: '',
    address: '',
    dob: '',
    bio: '',
    profileImage: null,
    bannerImage: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    dob: Yup.date().required('Date of birth is required'),
    bio: Yup.string().required('Bio is required'),
    profileImage: Yup.mixed().required('Profile image is required'),
    bannerImage: Yup.mixed().required('Banner image is required'),
  });

 
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm(); // Reset the form values
    setSubmitting(false);
    
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" id="address" />
              <ErrorMessage name="address" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="dob">Date of Birth</label>
              <Field type="date" name="dob" id="dob" />
              <ErrorMessage name="dob" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="bio">Bio</label>
              <Field as="textarea" name="bio" id="bio" />
              <ErrorMessage name="bio" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="profileImage">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                onChange={(event) => {
                  setFieldValue("profileImage", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="profileImage" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="bannerImage">Banner Image</label>
              <input
                type="file"
                name="bannerImage"
                id="bannerImage"
                onChange={(event) => {
                  setFieldValue("bannerImage", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="bannerImage" component="div" className="error-message" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
