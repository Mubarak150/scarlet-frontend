import classNames from 'classnames';
import scarletLogo from '../assets/scarlet-logo.png'
import Button from './Button';

export default function Navbar(props) {
    return (
        <>
            <nav>
            <img src={scarletLogo} alt="" className="logo" />
            <div className='navbar-components-container'>
                <a className='navbar-component' href="#">Home</a>
                <a className='navbar-component' href="#">Services</a>
                <a className='navbar-component' href="#">Projects</a>
                <a className='navbar-component' href="#">About Us</a>
                <a className='navbar-component' href="#">Contact Us</a>
            </div> 
            <Button colors="red" class="navbar-button" />
            </nav> 
        </>
    );
}


        