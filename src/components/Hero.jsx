import myImage from '../assets/me.png'
import CV from '../assets/CV_Felts Vallin_Molly.pdf'

function Hero() {
  return (
    <section className="container">
      <div className="hero left">
        <div className="hero_info">
          <h1>Hi I'm Molly</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora velit harum esse maiores consequatur. Eius accusantium fuga aliquam tempore voluptate pariatur quod, rerum natus, consectetur perferendis earum doloremque sint.</p>
          <div className="hero_stack">
          </div>
          <div className="hero_buttons">
            <a className="button" href={CV} download="CV_Felts Vallin_Molly">CV</a>
            <a className="button" href="https://github.com/mightymoll">GitHub</a>
            <a className="button" href="mailto:mnfelts@gmail.com">email</a>
          </div>
        </div>
        <div className="hero_image">
          <div className="image_container">
            <img src={myImage} alt="Molly running" />
          </div>
        </div>
      </div>
      <div className="hero right">
        <div className="hero_function">
          <span className="typed line_1"><span>{`if (!architect(inFrance)){`}</span></span>
          <span className="typed line_2"><span>{`architect().stop();`}</span></span>
          <span className="typed line_3"><span>{`const newCareer = developper;`}</span></span>
          <span className="typed line_4"><span>{`};`}</span></span>
        </div>
      </div>
    </section>
  )
};

export default Hero