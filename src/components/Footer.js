import React from 'react'
import logo from '../images/Logo.svg';


const Footer = () => {
  return (
   <footer>
        <section className='footer-section'>
            <div className='company-info'>
                <img src={logo} alt=''></img>
                <p>We are a family owned Mediterranean restaurant, focused on traditional rescipies served with a modern twist</p>
            </div>

            <div className='important-links'>
                <h4>Important Links</h4>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div className='contacts'>
                <h4>Contacts</h4>
                <ul>
                    <li>Address:<br/> 123 Towncity, USA</li>
                    <li>Phone:<br/> +123 456 789</li>
                    <li>Email:<br/> little@lemon.com</li>
                </ul>
            </div>

            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>Twitter</a></li>
                </ul>
            </div>
        </section>
   </footer>
  )
}

export default Footer;