import constructionImg from '../assets/construction.webp';
import logo from '../assets/logo.svg';

function Construction() {
  return (
    <div className="construction_container">
      <div className="construction_image">
        <img src={constructionImg} alt="woman in construction hat" />
      </div>
      <h1 className="construction_tagline">Sorry,<br></br>this screen size is still under construction.</h1>
      <p className="construction_message">please visit <strong>mollydoes.dev</strong> on a laptop or desktop</p>
      <p className="construction_email">or send me an email to get in touch : <a href="mailto:mnfelts@gmail.com">mnfelts@gmail.com</a></p>
      <div className="construction_logo">
        <img src={logo} alt='Molly Felts Vallin Logo' />
      </div>
    </div>
  )
};

export default Construction;