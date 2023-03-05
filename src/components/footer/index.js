import React from 'react';
import Location from './location';
import NewsLetterSubscription from './newsletter-subscription';
import QuickLinks from './quick-links';
import SocialMediaButtonGroup from './social-media';

function Footer() {
    const footerElements = [
      {
        header: "WHERE WE ARE",
        content: [<Location key={0} />],
      },

      {
        header: "QUICK LINKS",
        content: [
          <QuickLinks key={0}/>
        ],
      },

      { header: "CONTACT", content: [<SocialMediaButtonGroup key={0}/>] },
      {
        header: "NEWSLETTER",
        content: [<NewsLetterSubscription key={0} />],
      },
    ];
    return (
      <div className="footer">
      {  footerElements.map(el=>
        <div className="footer-grid-item" key={el.header}>
              <h3>{el.header}</h3>
              {el.content.map((el)=>el)}
        </div>
            )}
         
      </div>
    );
}

export default Footer;