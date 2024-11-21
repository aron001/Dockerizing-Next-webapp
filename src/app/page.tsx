// pages/_app.tsx or pages/index.tsx
import Footer from './components/footer';
import ContactUs from './components/ContactUs';
import SatisfiedClients from './components/SatisfiedClients';
import ContactUsComponent from './components/ContactUsComponent';
import CenteredImageWithShadow from './components/CenteredImageWithShadow';
import WhyUseAlet from './components/WhyUseAlet'
import Cover from './components/cover'
import Getstarted from './components/getstarted';
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Other page content */}
      <CenteredImageWithShadow/>
      <Getstarted/>
      <WhyUseAlet/>
      <SatisfiedClients/>
      <ContactUsComponent/>
      <ContactUs />
      <Cover/>
      <Footer />
      
    </div>
  );
}
