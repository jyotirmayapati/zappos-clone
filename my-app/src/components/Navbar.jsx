import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faUserCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import SignInPopup from './SignInPopup'; // Updated to use SignInPopup

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const menuRef = useRef(null);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  // Toggle login/signup popup
  const handleUserIconClick = () => {
    setIsPopupOpen(true); // Open popup
  };

  // Close popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Close menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.navbar}>
      {/* Top Row: Logo and Icons */}
      <div className={styles.topRow}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="Zappos Logo" className={styles.logo} />
        </div>

        {/* Search Bar */}
        <div className={`${styles.searchContainer} ${isSearchOpen ? styles.searchOpen : ''}`}>
          <input type="text" placeholder="Search for shoes, clothes, etc." className={styles.searchInput} />
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Icons */}
        <div className={styles.iconsContainer}>
          <FontAwesomeIcon icon={faSearch} className={`${styles.icon} fa-search`} onClick={toggleSearch} />
          <FontAwesomeIcon icon={faUserCircle} className={styles.icon} onClick={handleUserIconClick} />
          <FontAwesomeIcon icon={faShoppingBag} className={styles.icon} />
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className={styles.hamburgerIcon} onClick={toggleMenu} />
        </div>
      </div>

      {/* Links for Larger Screens */}
      <div className={styles.navLinks}>
        {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sale', 'Gifts'].map((link, index) => (
          <a key={index} href="/" className={styles.navLink}>{link}</a>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sale', 'Gifts'].map((link, index) => (
            <a key={index} href="/" className={styles.menuItem}>{link}</a>
          ))}
        </div>
      )}

      {/* Popup for Sign-in */}
      {isPopupOpen && (
        <SignInPopup onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Navbar;
