import Testimonial from "../sections/Testimonial";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Disease from "../sections/Disease";
import Stepper from "../sections/Stepper";
import Location from "../sections/Location";
import mountainImg from "../img/mountains.jpg";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero image={mountainImg} text="dark">
        Membantu melancarkan sirkulasi darah dan mengatasi berbagai keluhan
        kesehatan dengan teknik terapi tradisional yang higienis di Depok.
      </Hero>
      <Disease />
      <AboutUs />
      <Testimonial />
      <Stepper />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dbe9f2"
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,58.7C672,53,768,75,864,112C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Location />
    </div>
  );
};

export default Home;
