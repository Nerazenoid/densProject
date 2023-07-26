import TopBar from '../components/header/TopBar.jsx';
import MainSlider from '../components/MainSlider.jsx';
import Advantages from '../components/advantages/Advantages.jsx';
import Services from '../components/services/Services.jsx';
import Reviews from '../components/reviews/Reviews.jsx';
import { useContext } from 'react';
import { Context } from '../index.js';

const Landing = () => {
  const {user} = useContext(Context)
  console.log(user.isAuth)
  console.log(localStorage.getItem('token'))
  return (
    <div className="App">
        <TopBar />
        <div className='main_content'>
          <MainSlider />
          <Advantages />
          <Services />
          <Reviews />
        </div>
    </div>
  );
}

export default Landing