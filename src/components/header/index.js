import React, { useState } from "react";
import { useSelector } from "react-redux";
import Burger from "../burger-icon";
import { CSSTransition } from "react-transition-group";
function Header() {
  const navContent = [
    "SHOP",
    "DINE",
    "ENTERTAINMENT",
    "OFFERS",
    "EVENTS",
    "PLAN YOUR VISIT",
  ];
  const { url, alt } = useSelector((state) => state.reducer.logo);
  const [isOpen, setIsOpen] = useState(false);

    const renderNavContent = () => navContent.map((item, index) => (
            <a key={index}>{item}</a>
    ));

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <CSSTransition in={isOpen} appear timeout={250} classNames="black">
      <div className={`header-main ${isOpen && "open"}`}>
        <div className="header-wrapper">
          <div className="svg-wrapper logo">
            <img src={url} className="logo" alt={alt} />
          </div>
          <div className="svg-wrapper">
            <Burger toggling={toggleMenu} status={isOpen} />
            {renderNavContent()}
          </div>
          <div className="svg-wrapper lang">
            <span>EN</span>
          </div>
        </div>
        <div className="ui divider" />

        <CSSTransition in={isOpen} appear timeout={250} classNames="open">
          <div className={`burger-menu-content ${isOpen && "visible"}`}>
            {renderNavContent()}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}

export default Header;
