import "../Styles/contact.css"

export default function Contact() {
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
      <div className="contact-container">

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
        <form className="contact-form">
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />

          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
