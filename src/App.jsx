import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Honours } from './components/Honours';
import { Publications } from './components/Publications';
import { Speaking } from './components/Speaking';
import { Roles } from './components/Roles';
import { Quotes } from './components/Quotes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ogbu-offWhite text-ogbu-charcoal font-body selection:bg-ogbu-gold/30">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Honours />
        <Publications />
        <Speaking />
        <Roles />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
