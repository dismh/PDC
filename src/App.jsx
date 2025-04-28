import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // or wherever your Tailwind CSS file is
import '../../PDC/node_modules'


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Register />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;