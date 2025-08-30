import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Sure! Here's some dummy text with 50 words:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut nulla at velit tristique ullamcorper. Mauris suscipit, nisl ut viverra condimentum, sapien justo cursus augue, et laoreet turpis lacus id risus. Integer eget ante a lorem faucibus vehicula non vitae metus. Curabitur faucibus arcu at ante.
</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />

                </div>

            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivary</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 1234567890</li>
                    <li>contact@urbanbites.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 UrbanBites.com - All Rights Reserved </p>
      
    </div>
  )
}

export default Footer
