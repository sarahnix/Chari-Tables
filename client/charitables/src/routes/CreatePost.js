import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CreatePost.css";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
  const initialValues_ = {
    orgName: "",
    yourName: "",
    amount: "",
    postText: "",
  };

  const validationSchema_ = Yup.object().shape({
    orgName: Yup.string().required("You must input a title"),
    yourName: Yup.string().required("You must enter your name"),
    amount: Yup.string().required(),
    postText: Yup.string()
      .min(5)
      .required("You must enter a post greater than 5 characters"),
  });

  const onSubmit_ = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Success!");
    });
  };

  return (
    <div className="createpost">
      <Formik
        initialValues={initialValues_}
        onSubmit={onSubmit_}
        validationSchema={validationSchema_}
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
