import React,{useState,useEffect} from "react";
import Announcement from "../components/Announcement";
import Productsauth from "../components/Productsauth";
import Navbarauth from "../components/Navbarauth";
import Filterauth from "../components/Filterauth";
import Footerauth from "../components/Footerauth";
import Limoo from "../components/Limoo";
import Carousel from "../components/Carousel";
import AgeVerificationPopup from "../components/AgeVerificationPopup";


const Landingpageee = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified === 'true') {
      setIsAgeVerified(true);
    }
  }, []);

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  return (
    <div className="home">
      {isAgeVerified ? (
        <div className="home">
         {/* <Announcement /> */}
    <Navbarauth/>
    <Carousel/>
     <Limoo/> 
    <div className="filter-landing-div">
      <Filterauth/>
    </div>
    <Productsauth/>
    <Footerauth/>
        </div>
      ) : (
        <AgeVerificationPopup onAgeVerified={handleAgeVerified} />
      )}
 
    
  </div>
  );
};

export default Landingpageee;

