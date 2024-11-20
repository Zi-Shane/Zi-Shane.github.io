import DemoBlock from './components/demo/DemoBlock';
import About from './components/exp/About';
import Contact from './components/footer/Contact';
import Welcome from './components/welcome/Welcome';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main>
      <Welcome />
      <div className="max-w-7xl mx-auto">
        <DemoBlock />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
