import Home from  './components/Home';
import Section from './components/Section';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import GetStarted from './components/GetStarted';
import TreatmentFocus from './components/TreatmentFocus';
import  Footer from './components/Footer';
import FAQs from './components/FAQs'


import './App.css';

const  App = () => { 
  return (
    <>
      <Home />
      <Section />
      <TreatmentFocus />
      <Services />
      <WhyChooseUs />
      <GetStarted />
      <FAQs />
      <Footer />
    </>
  )
}

export default App;
