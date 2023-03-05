import React, { useEffect } from "react";
// import PropTypes from 'prop-types'
import gsap from "gsap";
import { useSelector } from "react-redux";

function FeatureGrid() {
  const featureItems = useSelector((state) => state.reducer.featurePhotos);
  console.log(featureItems);

  useEffect(() => {
    const animateTo=setTimeout(() => {
      const grid = document.querySelector(".grid");
      const items = document.querySelectorAll(".grid-item");
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(grid, {
            "--track": "2fr",
            duration: 0.3,
          });
          gsap.to(item, {
            "--innerTrack": "1fr",
            duration: 0.3,
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(grid, {
            "--track": "1fr",
            duration: 0.3,
          });
          gsap.to(item, {
            "--innerTrack": "0fr",
            duration: 0.3,
          });
        });
      });

      
    }, 0);
  
      
      return () => {
          clearTimeout(animateTo)
      };
      
  }, [featureItems]);
    
    
    

  return (
    <div className="container feature">
      <div className="grid">
        {featureItems.map((el,index)=>  <div className="grid-item" key={index}>
              <p>{el.motto}</p>
              <div className="img-wrapper">
                <img src={el.url} alt={el.alt} />
              </div>
            </div>)
          }
      </div>
    </div>
  );
}

export default FeatureGrid;
