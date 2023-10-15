import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact Me!</h2>

      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}
