import classNames from 'classnames';
import scarletLogo from '../assets/scarlet-logo.png'
import mail from "../assets/footer-mail.png"
import fb from "../assets/footer-fb.png"
import insta from "../assets/footer-insta.png"
import phone from "../assets/footer-phone.png"
import time from "../assets/footer-time.png"

export default function Footer(props) {
    return (
        <div className="footer-1">
            <div className="footer-2">
                <div className="sub-container-footer bg-black">
                    <div className="logo-container">
                        <img src={scarletLogo} height={80} alt="" className="logo" />
                    </div>
                    
                    <div className="contain-11"> 
                        <p className="text-white font-500">Site Map</p>
                        <a href="#" className="text-white font-400 px-8 footer-tag">Home</a>
                        <a href="#" className="text-white font-400 px-8 footer-tag">Services</a>
                        <a href="#" className="text-white font-400 px-8 footer-tag">Project</a>
                        <a href="#" className="text-white font-400 px-8 footer-tag">About Us</a>
                    </div>

                    <div className="contain-1">
                        <p className="text-white font-500">Contact Info</p>
                        <div className="line-wrapper">
                            <img src={mail} alt="" className="footer-img" />
                            <a href="#" className="text-white font-400 footer-tag">Info@scarletconstruction.ca</a>
                        </div>
                        <div className="line-wrapper">
                        <img src={phone} alt="" className="footer-img" />
                            <p className="text-white font-400">Erfan : 236-333-9767</p>
                        </div>
                        <div className="line-wrapper">
                        <img src={time} alt="" className="footer-img" />
                            <p className="text-white font-400">Working Hours : 24/7</p>
                        </div>
                        
                    </div>

                    <div className="contain-1">
                        <p className="text-white font-500">Social Links</p>
                        <div className="line-wrapper">
                           <img src={insta} alt="" className="footer-img" />
                           <a href="#" className="text-white font-400 footer-tag">Instagram</a> 
                        </div>
                        <div className="line-wrapper">
                            <img src={fb} alt="" className="footer-img" />
                            <a href="#" className="text-white font-400 footer-tag">Facebook</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}