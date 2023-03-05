/* eslint react/prop-types: 0 */

import React, { useEffect } from "react";
// import PropTypes from 'prop-types'
import gsap from "gsap";
import { useSelector } from "react-redux";






function FeatureGrid() {
  const featureItems = useSelector((state) => state.reducer.featurePhotos);
    console.log(featureItems);

    useEffect(() => {
  
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


        return () => {
             items.forEach((item) => {
               item.removeEventListener("mouseenter", () => {
                 gsap.to(grid, {
                   "--track": "2fr",
                   duration: 0.3,
                 });
                 gsap.to(item, {
                   "--innerTrack": "1fr",
                   duration: 0.3,
                 });
               });

               item.removeEventListener("mouseleave", () => {
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
        }
    }, []);
    


  return (
    <div className="container feature">
      <div className="grid">
        {featureItems.length > 0 && (
          <>
            <div className="grid-item">
              <p>{featureItems[0].motto}</p>
              <div className="img-wrapper">
                <img src={featureItems[0].url} alt={featureItems[0].alt} />
              </div>
            </div>
            <div className="grid-item">
              <p>{featureItems[1].motto}</p>
              <div className="img-wrapper">
                <img src={featureItems[1].url} alt={featureItems[1].alt} />
              </div>
            </div>
            <div className="grid-item">
              <p>{featureItems[2].motto}</p>
              <div className="img-wrapper">
                <img src={featureItems[2].url} alt={featureItems[2].alt} />
              </div>
            </div>
            <div className="grid-item">
              <p>{featureItems[3].motto}</p>
              <div className="img-wrapper">
                <img src={featureItems[3].url} alt={featureItems[3].alt} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FeatureGrid;
