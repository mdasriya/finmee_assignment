import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../style/Footer.css"
const Footer = () => {
    return (
        <div className='main_footer'>

            <div className='img_logo'>
                <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
            </div>

            <div className='footer_links_main'>
                <ul className='footer_links'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privact Policy</a></li>
                    <li><a href="/sitemap">Sitemap</a></li>
                </ul>
            </div>

            <div className='address'>
                <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
            </div>

            <div className='icons'>
                <FontAwesomeIcon className='icons_fa' icon={faTwitter} />
                <FontAwesomeIcon className='icons_fa' icon={faLinkedin} />
            </div>

            <div className='address'>
                <p>© 2022. Ntwist Inc.</p>
            </div>

        </div>
    )
}

export default Footer
