import style from "./Form.module.css";
import { RadioInput } from "./RadioInput";
import React, { useState } from "react";

export default function Form() {
  const [select, setSelect] = useState("");

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      contact: event.target.number.value,
      email: event.target.email.value,
      enquiry: event.target.enquiry.value,
      funding: event.target.funding.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Information submitted: ${result.data}`);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Full name:</label>
      <input className={style.box} type="text" id="name" name="name" required />
      <label htmlFor="contact">Contact number:</label>
      <input
        className={style.box}
        type="tel"
        id="number"
        name="number"
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        className={style.box}
        type="email"
        id="email"
        name="email"
        required
      />
      <label htmlFor="email">Enquiry:</label>
      <textarea
        className={style.box}
        id="enquiry"
        name="enquiry"
        rows="6"
        required
      />
      <div>
        <h4 className={style.question}>
          Do you have insurance or are you self-funding?
        </h4>
        <div>
          <RadioInput
            state={select}
            setState={setSelect}
            label="Insurance"
            value="insured"
            name="funding"
          />
          <RadioInput
            state={select}
            setState={setSelect}
            label="Self-funding"
            value="self-funding"
            name="funding"
          />
          <div className={style.message}>
            <p>
              {select === "self-funding"
                ? "Our team will provide you with a procedure quote"
                : ""}
            </p>
          </div>
        </div>
      </div>
      <input type="hidden" name="oh_no_honey" value="oh_no_honey" />
      <button type="submit">Submit</button>
    </form>
  );
}
