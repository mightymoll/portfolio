import myImage from '../assets/me.png'
import carrotGraphic from "../assets/carrot.png"
import CV from '../assets/CV_Felts Vallin_Molly.pdf'
import css from '../assets/stackLogos/CSS.png';
import html from '../assets/stackLogos/HTML.png';
import javascript from '../assets/stackLogos/JavaScript.png';
import node from '../assets/stackLogos/nodeJS.png';
import react from '../assets/stackLogos/React.png';
import sass from '../assets/stackLogos/SASS.png';


function Hero() {
  return (
    <section className="hero">
      <div className="hero_main">
        <div className="hero_info">
          <h1>Hi I'm Molly</h1>
          <p>Passionate about <strong>squeaky-clean</strong> code & currently seeking opportunities in web development near <strong>Paris, France </strong><nobr>- oui, oui, c'est ma vie !</nobr></p>
          <p>I'm a former interior architect with a demonstrated history of working in <nobr>multi-disciplinary</nobr> roles in the USA and South Korea.</p>
          <h3>{'<my stack />'}</h3>
          <ul className="hero_stack">
            <li className="stack_item"><img src={css} alt="" />CSS 3</li>
            <li className="stack_item"><img src={html} alt="" />HTML 5</li>
            <li className="stack_item"><img src={javascript} alt="" />JavaScript</li>
            <li className="stack_item"><img src={node} alt="" />node.js</li>
            <li className="stack_item"><img src={react} alt="" />React js</li>
            <li className="stack_item"><img src={sass} alt="" />SASS</li>
          </ul>
          <h3>{'< dive-in />'}</h3>
          <div className="hero_buttons">
            <a className="button" href={CV} download="CV_Felts Vallin_Molly">CV</a>
            <a className="button" href="https://github.com/mightymoll">GitHub</a>
            <a className="button" href="mailto:mnfelts@gmail.com">email</a>
          </div>
        </div>
        <div className="hero_image">
          <img src={myImage} alt="Molly running" />
        </div>
      </div>
      <aside className="hero_aside">
        <div className="hero_aside-background">
          <img src={carrotGraphic} alt="decorative graphic" />
        </div>
        <div className="hero_function">
          <span className="typed line_1"><span>{`if (theDevil == isInTheDetails) {`}</span></span>
          <span className="typed line_2"><span>{`goodFriendsOfMine.push(theDevil)`}</span></span>
          <span className="typed line_3"><span>{`};`}</span></span>
        </div>
      </aside>
    </section>
  )
};

export default Hero