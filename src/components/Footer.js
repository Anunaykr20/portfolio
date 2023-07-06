import React from 'react'
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <GitHub/>
            <LinkedIn/>
            <Twitter/>
        </div>
        <p> &copy; 2022 anunay.com</p>
    </div>
  )
}

export default Footer