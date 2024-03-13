import React from 'react'
import {Link} from 'react-router-dom';
import headerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant,
                    focused on traditional rescipies served with a modern twist</p>
               </div>

               <Link to="/booking"><button aria-label='Click to reserve'>Reserve a Table</button></Link>

               <div className='headerImg'>
                  <img src={headerImg} alt='Headerimage' />
               </div>
            </section>
        </header>
  )
}

export default Header;