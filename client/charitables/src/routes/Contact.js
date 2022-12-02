import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/83857590-70fa-11ed-a377-655c67143cec";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you for your message!</h2>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
    <div className = "form">
    <form>      
      <input name="name" type="text" class="feedback-input" placeholder="Name" />   
      <input name="email" type="text" class="feedback-input" placeholder="Email" />
      <textarea name="text" class="feedback-input" placeholder="Message"> </textarea>
      <input type="submit" value="SUBMIT"/>
    </form>
   </div>
  );
};

export default Contact;
