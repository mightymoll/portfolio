import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_an67sqn",
      "template_bgbyr3d",
      form.current,
      "Hpk5w75e_cvizNC0o"
    )
      .then(
        result => console.log(result.text),
        error => console.log(error.text)
      );
    e.target.reset();
  }

  return (
    <section id="contact">
      <div className="contact_container">
        <h2 className="contact_title">{'< Contact Me />'}</h2>
        <div className="contact_subtext">
          <p>feedback?</p>
          <p>just want to say hi?</p>
          <p>found a bug?</p>
        </div>
        <form className="contact-form box" ref={form} onSubmit={sendEmail}>
          <div className="sender">
            <div className="form_group">
              <label className="form_label">{'> Name :'}</label>
              <input className="form_input" type="text" name="user_name" placeholder="Jacques Almanac" required />
            </div>
            <div className="form_group">
              <label className="form_label">{'> Email :'}</label>
              <input className="form_input" type="email" name="user_email" placeholder="emailhandle@sacrebleu.com" aria-describedby="emailHelp" required />
            </div>
          </div>
          <label className="form_label">{'> Message :'}</label>
          <textarea className="form_message" name="message" placeholder="your message goes here; I know you know, but y'know..." required></textarea>
          <button type="submit" className="button-submit">send via internet ✨MAGIC✨</button>
        </form>
      </div>
    </section >
  );
}

export default Contact;