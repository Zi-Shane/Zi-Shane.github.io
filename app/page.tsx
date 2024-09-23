import DemoBlock from './components/DemoBlock';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

export default function Home() {
  return (
    <main className="relative bg-white-100 flex flex-col justify-center items-center px-5">
      <Welcome />
      <div>
        <DemoBlock />
        <About />
        <Contact />
      </div>
    </main>
  );
}