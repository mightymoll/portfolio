import EmailForm from "../components/EmailForm"

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
        <EmailForm />
      </div>
    </section >
  );
}

export default Contact;