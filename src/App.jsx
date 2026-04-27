import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
