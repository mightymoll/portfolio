import myImage from '../assets/me.png'
import CV from '../assets/CV_Felts Vallin_Molly.pdf'

function Hero() {
  return (
    <section className="hero">
      <div className="hero_left">
        <div className="hero_info">
          <h1>Hi I'm Molly</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora velit harum esse maiores consequatur. Eius accusantium fuga aliquam tempore voluptate pariatur quod, rerum natus, consectetur perferendis earum doloremque sint.</p>
          <div className="hero_stack">
          </div>
          <div className="hero_buttons">
            <div className="btn">
              <a href={CV} download="CV_Felts Vallin_Molly">download my CV</a>
            </div>
            <div className="btn">
              <a href="https://github.com/mightymoll">go to my GitHub</a>
            </div>
            <div className="btn">
              <a href="mailto:mnfelts@gmail.com">send me an email</a>
            </div>
          </div>
        </div>
        <div className="hero_image">
          <img src={myImage} alt="Molly running" />
        </div>
      </div>
      <div className="hero_right">
        <p className="hero_function">{"if (!architect(inFrance)){"}</p>
        <p className="hero_function">{"architect().stop();"}</p>
        <p className="hero_function">{"const newMetier=developpeuse;"}</p>
        <p className="hero_function">{"`};"}</p>
      </div>
    </section>
  )
};

export default Hero