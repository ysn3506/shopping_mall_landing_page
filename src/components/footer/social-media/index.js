import React from 'react';
import facebook from '../../../assets/facebook.png';
import instagram from '../../../assets/instagram.png';
import linkedin from '../../../assets/linkedin.png';
import whatsapp from '../../../assets/whatsapp.png';
import twitter from '../../../assets/twitter.png';
import email from '../../../assets/email.png';
import location from '../../../assets/location.png';
import phone from '../../../assets/phone-call.png';

function SocialMediaButtonGroup() {
    const socialMediaIcons = [
      email,
      whatsapp,
      facebook,
      instagram,
      linkedin,
      twitter
    ];
    return (
      <div className="contact">
        <div className="social-media-button-wrapper">
          {socialMediaIcons.map((el) => (
            <button className="social-media-button" key={el}>
              <img src={el} alt="social media icon" />
            </button>
          ))}
        </div>
        <span>
          <img
            className="footer-span-icon"
            src={location}
            alt="location icon"
          />{" "}
          1000Mahler Building Gustav Mahlerlaan 1025, Amsterdam, 1082 MK, NL
        </span>
        <span>
          <img className="footer-span-icon" src={phone} alt="phone icon" /> +31
          20 25 88 100
        </span>
      </div>
    );
}

export default SocialMediaButtonGroup;