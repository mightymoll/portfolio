// import assets, components, page sections for react to render on the homepage
import meImage from '../assets/me.png'
import Hero from '../components/Hero';
import Projects from './Projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="content">
      <Hero imageSrc={meImage} />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;