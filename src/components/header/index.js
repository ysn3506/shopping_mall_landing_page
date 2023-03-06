import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Burger from "../burger-icon";
import { CSSTransition } from "react-transition-group";


function Header() {
    const navContent = [
      {motto: "SHOP",url: "/brands"},
      { motto: "DINE", url: "/brands" },
      { motto: "ENTERTAINMENT", url: "/brands" },
      { motto: "OFFERS", url: "/brands" },
      { motto: "EVENTS", url: "/brands" },
      { motto: "PLAN YOUR VISIT", url: "/plan-your-visit" },
    ];
  const { url, alt } = useSelector((state) => state.reducer.logo);
  const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.documentElement.scrollTop >= 100
        ? setIsScrolled(true)
        : setIsScrolled(false);
    });
  }, []);

  const renderNavContent = () =>
    navContent.map((item, index) => <a key={index} href={item.url}>{item.motto}</a>);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <CSSTransition in={isOpen} appear timeout={250} classNames="black">
      <div className={`header-main  ${isScrolled && "dark"}`}>
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
