import React, { useState } from "react";
import "./header.scss";

const Header = ({ handleViewPage }) => {
   const [menu, setMenu] = useState(false);

   const handleMenu = (event) => {
      setMenu(!menu);
   };

   const handleContactPage = (event) => {
      handleViewPage("contact");
      setMenu(!menu);
   };

   const handleProductsPage = (event) => {
      const id = event.target.id;

      if (id == "productsPage") {
         handleViewPage("products");
         setMenu(!menu);
      }

      id == "logo" && handleViewPage("products");
   };

   if (menu == false) {
      return (
         <header className="header">
            <div className="logo-container" onClick={handleProductsPage}>
               <img id="logo" src="../../../public/logo.svg" className="header__logo" />
               <h1 id="logo" className="header__title">
                  My Site
               </h1>
            </div>
            <div className="menu-container">
               <h2 className="header__message">Get started</h2>
               <button className="header__open-menu" onClick={handleMenu}>
                  <i className="bi bi-list"></i>
               </button>
            </div>
         </header>
      );
   } else {
      return (
         <header className="header">
            <div className="logo-container">
               <img src="../../../public/logo.svg" className="header__logo" />
               <h1 className="header__title">My Site</h1>
            </div>
            <div className="menu-container">
               <h2 className="header__message">Get started</h2>
               <button className="header__open-menu" onClick={handleMenu}>
                  <i className="bi bi-list"></i>
               </button>
               <nav className="header__menu">
                  <button className="header__close-menu" onClick={handleMenu}>
                     <i className="bi bi-x x-button"></i>
                  </button>
                  <ul>
                     <li id="productsPage" onClick={handleProductsPage}>
                        Products
                     </li>
                     <li onClick={handleContactPage}>Contact</li>
                  </ul>
               </nav>
            </div>
         </header>
      );
   }
};

export default Header;
