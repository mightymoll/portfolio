import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function EmailForm() {
  const form = useRef();
  const [status, setStatus] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_an67sqn",
      "template_bgbyr3d",
      form.current,
      "Hpk5w75e_cvizNC0o"
    )
      .then(() => {
        setStatus('success');
      })
      .catch((error) => {
        setStatus('error')
        console.log("there was an error" + error);
      });
    e.target.reset();
  }

  if (status !== 'success') {
    return (
      <div>
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
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
          <div className="form_group">
            <label className="form_label">{'> Message :'}</label>
            <textarea className="form_message" name="message" placeholder="your message goes here; I know you know, but y'know..." required></textarea>
          </div>
          <button type="submit" className="button-submit">{
            // shorter button text on mobile
            window.innerWidth > 480 ? "send via internet ✨MAGIC✨" : "✨send✨"}</button>
        </form >
        <div>{status === 'error' ?
          <div className="form_error">
            <p>SACRE BLEU 😱 that didn't seem to work, please email me directly :</p>
            <a href="mailto:mnfelts@gmail.com">mnfelts@gmail.com</a>
          </div>
          : <div></div>}
        </div>
      </div >
    )
  }
  else if (status === 'success') {
    return (
      <form className="contact_form success" ref={form} onSubmit={sendEmail}>
        <p>Your message was sent successfully ! ✅ </p>
      </form>
    )
  }
}

export default EmailForm

