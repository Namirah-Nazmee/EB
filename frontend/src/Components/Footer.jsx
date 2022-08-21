import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
            <div className="f-col">
                <img src='/images/logo/logo.png' alt=''/>
                <p>Now your favorite authentic branded electronic items are one click away.</p>
            </div>
            <div className="f-col">
                <h2>Category</h2>
                <ul>
                    <li>
                        <NavLink to='/'>Accesories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Tablet</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Mobile Phones</NavLink>
                    </li>
                
                </ul>
            </div>
            <div className="f-col">
                <h2>QUick Links</h2>
                <ul>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop'>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="f-col">
                <h2>Find us on:</h2>
                <div className="socials">
                   <a href='/'><img src="/images/facebook.png" alt="" /></a>
                   <a href='/'><img src="/images/instagram.png" alt="" /></a>
                   <a href='/'><img src="/images/twitter.png" alt="" /></a>
                </div>
            </div>
            

        </div>
        <div className="f-copyrow">
            <p>&copy; 2022. All Rights Reserved. Powered by Electro Bang.</p>
        </div>

    </div>
  )
}

export default Footer