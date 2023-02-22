// import assets, components, page sections for react to render on the homepage
import meImage from '../assets/me.png'
import Hero from '../components/Hero';
import Projects from './Projects';
import About from './About';


function Home() {
  return (
    <div className="content">
      <Hero imageSrc={meImage} />
      <section id='projects'>
        <Projects />
      </section>
      <section id='about'>
        <About />
      </section>
    </div>
  );
}

export default Home;