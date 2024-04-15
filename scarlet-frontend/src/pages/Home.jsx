import scarletLogo from '../assets/scarlet-logo.png'
import Button from '../components/Button';
import RoundButton from '../components/RoundButton';
import Header from '../components/Header';
import Avatar, {avatars} from '../components/Avatar';
import frameGray from '../assets/Frame 5.png'
import frameRed from '../assets/Frame 6.png'
import heroImage from '../assets/Rectangle 326.png'
import {servicesImages} from '../components/OurServiceImage'
import Footer from '../components/Footer';


import "./Home.css"
import OurServicesImage from '../components/OurServiceImage';
function Home() {
    return <>
    <div className="main">
      <div className="black">
        <div className='navbar'>
          <img src={scarletLogo} alt="" className="logo" />
          <div className='components-container'>
            <a className='nav-component' href="#">Home</a>
            <a className='nav-component' href="#">Services</a>
            <a className='nav-component' href="#">Projects</a>
            <a className='nav-component' href="#">About Us</a>
            <a className='nav-component' href="#">Contact Us</a>
          </div> 
        </div>
        <div className="hero">
            <h1 className='hero-h1-text'>
            WELCOME TO SCARLET ROOFING & GUTTERS
            </h1>
            <p className="hero-p-text">
              For all your roofing, gutters, and metal fascia needs. Commercial / Residential
            </p>
             <div className='hero-button-container'>
              <Button colors='red' />
              <img src={frameRed} alt="" className="frame-red" />
             </div>
            
          </div>
        
      </div>
       <div className="red-container">
        <div className="red-container-button-con">
          <Button colors='white' />
          <img src={frameGray} alt="" className="frame-gray" />
          <div className="hero-image-container">
            <img src={heroImage} alt="" className="red-container-img" />
          </div>
        </div>
          
        </div>
    </div>
    <div className="our-services-container">
          <Header black="Our" red="Services" />
          <div className="our-services-grid grid-rows-2">
            {servicesImages.map((image, index) => (
                <OurServicesImage imageClass="our-services-image" capClass="our-services-caption" key={index} src={image.src} caption={image.caption} />
              ))}

          </div>
    </div>

    <div className="about-container">
          <Header black="About" red="Us" />
          <div className="about-flex">
            <div className="about-text-container">
              <p className='about-text'>We are a roofing, Gutters, and metal fascia company that is active in the Lower Mainland Area (Vancouver, Richmond, Burnaby, Surrey, Delta, Maple Ridge,Pitt Meadows, Langley, Mission, Abbottsford, Chilliwack, North Vancouver, West Vancouver). Upon request, we also provide services in Nanaimo, Victoria, and Gibsons.</p>
              <p className='about-text bold'>Core Values</p>
              <p className='about-text small-text-height'>At Scarlet Roofing and Gutters, we treat our clients as people — Not as numbers. We provide high quality work and reliable service. We are always willing to go the extra mile to meet and exceed expectations.</p>
              <Button colors="red" />
            </div>
             <OurServicesImage src="./src/assets/Rectangle 346.png" imageClass="about-image"/>
          </div>
    </div>
    
    <div className="why-us">
      <Header black="Why Choose" red="Us" />
      <div className="our-services-grid grid-rows-1">
            {servicesImages.slice(0, 3).map((image, index) => (
                <OurServicesImage imageClass="why-us-image" key={index} src={image.src} />
              ))}

          </div>
          <div className="why-us-black">
            <div className="why-us-button-container">
              <Button colors='red' />
            </div>
          </div>
    </div>

    <div className="why-us-main-container">
      <Header black='Recent' red="Work" />
      <div className="practice-div-container">
        <div className="practice-div" style={{backgroundImage: `url(${heroImage})`}}>
          <div className="why-us-gradient">
            <a className="why-us-text" href='#'>
              2-Ply SBS Torch-Down Roof system
            </a>
          </div>
        </div>
        <div className="practice-div-2" style={{backgroundImage: `url(${heroImage})`}}>
          <div className="why-us-gradient">
            <a className="why-us-text" href='#'>
              Metal fascia over fascia boards
            </a>
          </div>
        </div>
        <div className="practice-div-3" style={{backgroundImage: `url(${heroImage})`}}>
          <div className="why-us-gradient">
            <a className="why-us-text" href='#'>
              Metal fascia over fascia boards
            </a>
          </div>
        </div>
        <div className="practice-div-4" style={{backgroundImage: `url(${heroImage})`}}>
          <div className="why-us-more">
            <a className="why-us-text" href='#'>
            + 7 more
            </a>
          </div>
        </div>
      </div>  
    </div>

   
    <div className="customers">
    <div className="cr-sub-container">
    <div className="header-wrapper">
        <Header black='Customer' red="Reviews" className="center-header"/>
    </div>
    <div className="button-wrapper">
        <RoundButton arrowColor="black-round" colors="white" align="rotate-180"  />
        <RoundButton arrowColor="white-round" colors="red" className="padding-left-rb" />
    </div>
</div>

      
      <div className="avatar">
      {avatars.map((avatar, index) => (
              <Avatar key={index} src={avatar.src} imageClass="circle-image" userName={avatar.userName} stars={avatar.stars} userComment={avatar.userComment} />
        ))}
        
      </div>
    </div>
    
    <div className="footer">
      <Footer />
    </div>


    </>;
}

  
  export default Home;
  