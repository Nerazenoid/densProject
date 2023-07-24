import TopBar from '../components/header/TopBar.jsx';
import MainSlider from '../components/MainSlider';
import Advantages from '../components/advantages/Advantages';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';

const Landing = () => {
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