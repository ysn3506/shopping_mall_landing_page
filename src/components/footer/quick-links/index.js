import React from 'react';

function QuickLinks() {

    const links = [
        { name: 'Working Hours', url: '/contact' },
        { name: 'Brands', url: '/stores' },
        { name: 'Career', url: '/hr' },
        { name: 'Shopping Center Map', url: '/map' },
        { name:'Services', url:'/services'}
        
        
    ]

    return (
      <div className='quick-links'>
          {links.map((el)=><a href='' key={el.name}>{el.name}</a>)}
      </div>
    );
}

export default QuickLinks;