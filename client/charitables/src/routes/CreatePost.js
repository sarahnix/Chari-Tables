import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CreatePost.css";
import * as Yup from "yup";

function CreatePost() {
  const initialValues = {
    orgName: "",
    yourName: "",
    amount: "",
    postText: "",
  };

  const validationSchema = Yup.object().shape({
    orgName: Yup.string().required(),
    yourName: Yup.string().required(),
    postText: Yup.string().min(5).required(),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="createpost">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Organization: </label>
          <ErrorMessage name="orgName" component="span" />
          <Field
            id="inputCreatePost"
            name="orgName"
            placeholder="Ex. V Foundation"
          />

          <label>Your Name: </label>
          <ErrorMessage name="Your name" component="span" />
          <Field
            id="inputCreatePost"
            name="yourName"
            placeholder="Ex. John Doe"
          />

          <label>Contribution: </label>
          <ErrorMessage name="amount" component="span" />
          <Field
            id="inputCreatePost"
            name="amount"
            placeholder="Ex. '$20', or '3 hours'"
          />

          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Share your thoughts..."
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
