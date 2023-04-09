import { useState } from "react";
import ReactSelect from "react-select";
import validatePhoneNumber from "../components/SubmitContactForm";
import styles from "./Contact.module.scss";

const options = [
  {
    value: "enquiry",
    label: "Enquiry",
  },
  {
    value: "complaint",
    label: "Complaint",
  },
  {
    value: "compliment",
    label: "Compliment",
  },
  {
    value: "general_message",
    label: "General message",
  },
];

export default function () {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  return (
    (showForm && (
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          validatePhoneNumber(tel);
          setShowForm(false);
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            required
            value={tel}
            onChange={(e) => {
              setTel(e.target.value.replaceAll(" ", ""));
              e.target.setCustomValidity(
                validatePhoneNumber(e.target.value)
                  ? ""
                  : "Invalid phone number"
              );
            }}
          />
        </label>
        <label>
          What is your query about?
          <ReactSelect
            options={options}
            name="query-type"
            className={styles.reactSelect + " react-select"}
            required
          />
        </label>
        <label>
          Your message
          <textarea
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )) || <h1>Form submitted succesfully!</h1>
  );
}
