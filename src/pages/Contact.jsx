import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="contact_container">
        <h2 className="contact_title">{'< Contact Me />'}</h2>
        <div className="contact_subtext">
          <p>feedback?</p>
          <p>just want to say hi?</p>
          <p>found a bug?</p>
        </div>
        <form id="contact-form">
          <div className="sender">
            <div className="form-group">
              <label htmlFor="name">Your Name :</label>
              <input type="text" className="form-control" placeholder="Jacques Almanac" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your Email :</label>
              <input type="email" className="form-control" placeholder="emailhandle@sacrebleu.com" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="form-group">
            <label className="label_message" htmlFor="message">Message :</label>
            <textarea className="form-control" placeholder="your message goes here; I know you know, but y'know.." rows="5"></textarea>
          </div>
          <button type="submit" className="button-submit">send via internet ✨MAGIC✨</button>
        </form>
      </div>
    </section >
  );
}

export default Contact;