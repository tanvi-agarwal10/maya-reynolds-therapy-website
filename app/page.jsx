import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Services from './components/layout/Services';
import About from './components/layout/About';
import Office from './components/layout/Office';
import CTA from './components/layout/CTA';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Office />
      <CTA />
      <Footer />
    </main>
  );
}
