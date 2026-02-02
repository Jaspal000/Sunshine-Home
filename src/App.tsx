import Header from './sections/Header';
import Hero from './sections/Hero';
import Tier1Services from './sections/Tier1Services';
import Process from './sections/Process';
import BeforeAfter from './sections/BeforeAfter';
import Tier2Services from './sections/Tier2Services';
import Reviews from './sections/Reviews';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Tier1Services />
        <Process />
        <BeforeAfter />
        <Tier2Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
