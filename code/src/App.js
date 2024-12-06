import AppBar from './sections/appbar';
import MainSlider from './sections/slider';
import AwardsSection from './sections/awards';
import UseCases from './sections/usecase';
import Features from './sections/features';
import Testimonials from './sections/testimonials';
import FooterSection from './sections/footer';
import FooterLinks from './sections/footerlink';
import FloatingChat from './sections/floatingchat';
import Platforms from './sections/platforms';

function App() {
  return (
    <>
      <AppBar />
      <MainSlider />
      <AwardsSection />
      <UseCases />
      <Features />
      <Testimonials />
      <Platforms />
      <FooterSection />
      <FloatingChat />
      <FooterLinks />
    </>
  );
}

export default App;
