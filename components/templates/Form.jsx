import style from "./Form.module.css";
import { RadioInput } from "./RadioInput";
import React, { useState } from "react";
import { ModalContact } from "./ModalContact";
import Link from "next/link";

const SUCCESS = "SUCCESS";
const SENDING = "SENDING";
const FAILURE = "FAILURE";

export default function Form() {
  const [select, setSelect] = useState("");
  const [response, setResponse] = useState(false);

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
    const res = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    const result = await res.json();

    if (res.status === 200) {
      setResponse(SUCCESS);
    } else if (res.status === 500) {
      setResponse(FAILURE);
    }

    //check if result is OK (200)
    //if ok setState to sent
    //else set state to error or whatever

    // alert(`Information submitted: ${result.data}`);
  };
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.boxContainer}>
          Full name:
          <input
            className={style.box}
            type="text"
            id="name"
            name="name"
            required
          />
        </label>
        <label className={style.boxContainer}>
          Contact number:
          <input
            className={style.box}
            type="tel"
            id="number"
            name="contact"
            required
          />
        </label>
        <label className={style.boxContainer}>
          Email:
          <input
            className={style.box}
            type="email"
            id="email"
            name="email"
            required
          />
        </label>
        <label className={style.boxContainer}>
          Enquiry:
          <textarea
            className={style.box}
            id="enquiry"
            name="enquiry"
            rows="6"
            required
          />
        </label>
        <div>
          <p className={style.question}>
            Do you have insurance or are you self-funding?
          </p>
          <div>
            <label className={style.boxContainer}>
              <RadioInput
                state={select}
                setState={setSelect}
                label="Insurance"
                value="insured"
                name="funding"
              />
            </label>
            <label className={style.boxContainer}>
              <RadioInput
                state={select}
                setState={setSelect}
                label="Self-funding"
                value="self-funding"
                name="funding"
              />
            </label>
            <div className={style.message}>
              <p>
                {select === "self-funding"
                  ? "Our team will provide you with a procedure quote"
                  : ""}
              </p>
            </div>
            <div>
              <label className={style.privacyContainer}>
                <input
                  type="checkbox"
                  label="Select if you agree to our"
                  value="privacy"
                  name="privacy"
                  required
                />
                Select if you agree to our
                <Link legacyBehavior href={"/privacy"}>
                  <a target="_blank" className={style.privacy}>
                    <u>Privacy Policy</u>
                  </a>
                </Link>
              </label>
            </div>
          </div>
        </div>
        <input type="hidden" name="oh_no_honey" value="oh_no_honey" />
        <button type="submit" onClick={() => setResponse(SENDING)}>
          Submit
        </button>
      </form>
      {response === SENDING && (
        <p className={style.sending}>
          We are prosessing your request, please wait one a moment. We will
          confirm once the enquiry has been succsessfully sent.
        </p>
      )}
      {response === SUCCESS && (
        <ModalContact visible={Boolean(response)} setResponse={setResponse}>
          <h2>
            Your enquiry has been succsessfully sent to our team who will be in
            touch as soon as possible.
          </h2>
        </ModalContact>
      )}
      {response === FAILURE && (
        <ModalContact visible={visible}>
          <h2>
            Unfortunately there was an error sending your enquiry. Please call
            our team on 02074594326 or email admin@bunionsurgeon.co.uk
          </h2>
        </ModalContact>
      )}
    </>
  );
}
