// import assets, components, page sections for react to render on the homepage
import meImage from '../assets/me.png'
import Hero from '../components/Hero';
import ProjectsGallery from './ProjectsGallery';
import About from './About';


function Home() {
  return (
    <div className="content">
      <Hero imageSrc={meImage} />
      <ProjectsGallery />
      <About />
    </div>
  );
}

export default Home;