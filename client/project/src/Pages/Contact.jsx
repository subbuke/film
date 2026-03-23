import "../Styles/contact.css"
import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function submit(e){
    e.preventDefault();
    axios.post('https://fuzzy-space-goldfish-v6vqxqww5xvjcpr66-4000.app.github.dev/create', {name, email, subject, message})
    .then(result => console.log(result))
    navigate('/')
   .catch(err => console.log(err))
  }

  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          Let’s bring your story to life. Reach out and start your cinematic journey.
        </p>
      </div>

      {/* CONTENT */}
      <div className="contact-container" >

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Have a project in mind? We’d love to hear from you.
            Fill out the form or reach us directly.
          </p>

          <div className="info-item">
            <span>Email</span>
            <p>daydreamcinemas.pvt@gmail.com</p>
          </div>

          <div className="info-item">
            <span>Phone</span>
            <p>7032394191</p>
          </div>

          <div className="info-item">
            <span>Location</span>
            <p>vempalli, India</p>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={submit}>
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
          <textarea placeholder="Your Message" rows="5" required onChange={(e) => setMessage(e.target.value)}/>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
