import { Hero } from './components/Hero';
import { FeaturedTournaments } from './components/FeaturedTournaments';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import Navbar from './components/Navabr';
import GamingPlatformSections from './components/test';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <CustomCursor />
      <Navbar/>
      <Hero />
      <GamingPlatformSections/>
      <FeaturedTournaments />
      <Footer />

    </div>
  );
}
export default App;
