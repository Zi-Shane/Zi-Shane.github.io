import DemoBlock from './components/DemoBlock';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

export default function Home() {
  return (
    // <main className="relative bg-white-100 flex flex-col justify-center items-center">
    <main>
      <Welcome />
      <div className="max-w-7xl mx-auto">
        <DemoBlock />
        <About />
        <Contact />
      </div>
    </main>
  );
}
