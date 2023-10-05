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

const Landing = () => {
  const mainRef = useRef();
  const serviceRef = useRef();
  const reviewRef = useRef();
  const contactRef = useRef();
  const {user} = useContext(Context)
  console.log(user.isAuth)
  console.log(localStorage.getItem('token'))

  return (
    <div className="App">
        <TopBar
        mainRef={mainRef}
        serviceRef={serviceRef}
        reviewRef={reviewRef}
        contactRef={contactRef}
        />
        <div className='main_content'>
          <MainSlider/>
          <About  ref={mainRef} />
          <Advantages />
          <Services ref={serviceRef} />
          <Reviews ref={reviewRef} />
          <Contacts ref={contactRef}/>
          <Footer />
        </div>
        <MainModal />
    </div>
  );
}

export default Landing