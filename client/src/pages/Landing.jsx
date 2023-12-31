import TopBar from '../components/header/TopBar.jsx';
import MainSlider from '../components/MainSlider.jsx';
import Advantages from '../components/advantages/Advantages.jsx';
import Services from '../components/services/Services.jsx';
import Reviews from '../components/reviews/Reviews.jsx';
import { useContext, useRef } from 'react';
import { Context } from '../index.js';
import MainModal from '../components/mainModal.jsx';
import Contacts from '../components/contactsLanding/Contacts.jsx';
import Footer from '../components/Footer/Footer.jsx';
import About from '../components/about/About.jsx';
import LandingLast from '../components/last/LandingLast.jsx';
import TopBarMobile from '../components/header/topbar_mobile/TopBarMobile.jsx';

const Landing = () => {
  const mainRef = useRef();
  const serviceRef = useRef();
  const reviewRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      <TopBarMobile
        mainRef={mainRef}
        serviceRef={serviceRef}
        reviewRef={reviewRef}
        contactRef={contactRef} />
      <TopBar
        mainRef={mainRef}
        serviceRef={serviceRef}
        reviewRef={reviewRef}
        contactRef={contactRef}
      />
      <div className='main_content'>
        <MainSlider />
        <About ref={mainRef} />
        <Advantages />
        <Services ref={serviceRef} />
        <Reviews ref={reviewRef} />
        <Contacts ref={contactRef} />
        <LandingLast />
        <Footer />
      </div>
      <MainModal />
    </div>
  );
}

export default Landing