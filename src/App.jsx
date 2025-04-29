import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import DealOfTheDay from './components/DealOfTheDay';
import HeroSectionWithText from './components/HeroSectionWithText';
import NewArrivals from './components/NewArrivals';
import PromoSection from './components/PromoSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<HeroSection />} /> */}
        <Route path="/categorysection" element={<CategorySection />} />
        {/* <Route path="/" element={<DealOfTheDay />} /> */}
        <Route path="/herosectionwithtext" element={<HeroSectionWithText />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/promosection" element={<PromoSection />} />
      </Routes>

      <HeroSection />
      <CategorySection />
      <DealOfTheDay />
      <HeroSectionWithText />
      <NewArrivals />
      <PromoSection />
      
      <Footer />
    </div>
  );
}

export default App;
