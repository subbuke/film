import "../Styles/contact.css"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false) // ⭐ NEW

  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    axios.post(
      "https://fuzzy-space-goldfish-v6vqxqww5xvjcpr66-4000.app.github.dev/create",
      { name, email, subject, message }
    )
    .then((result) => {
      console.log(result);

      setSuccess(true); // ⭐ show message

      // redirect after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <section className="contact-page">

      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Let’s bring your story to life.</p>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Information</h2>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={submit}>
          <h2>Send a Message</h2>

          {/* ⭐ SUCCESS MESSAGE */}
          {success && (
            <div className="success-box">
              ✅ Message sent successfully!
            </div>
          )}

          <input type="text" placeholder="Your Name" required
            onChange={(e) => setName(e.target.value)} />

          <input type="email" placeholder="Your Email" required
            onChange={(e) => setEmail(e.target.value)} />

          <input type="text" placeholder="contact number"
            onChange={(e) => setSubject(e.target.value)} />

          <textarea placeholder="Your Message" rows="5" required
            onChange={(e) => setMessage(e.target.value)} />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}