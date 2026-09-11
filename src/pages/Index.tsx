import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import CtaBand from '@/components/CtaBand';
import Prices from '@/components/Prices';
import Works from '@/components/Works';
import Reviews from '@/components/Reviews';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <Clients />
      <Services />
      <Fleet />
      <CtaBand />
      <Prices />
      <Works />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
