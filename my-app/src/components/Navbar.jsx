import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingBag, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (link) => {
    console.log(`${link} button clicked!`);
  };

  return (
    <nav style={styles.nav}>
      {/* Top Row: Logo, Search Bar, and Icons */}
      <div style={styles.topRow}>
        <div style={styles.logoContainer}>
          <img
            src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg"
            alt="Zappos Logo"
            style={styles.logo}
          />
        </div>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for shoes, clothes, etc."
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
            Search
          </button>
        </div>

        <div style={styles.iconsContainer}>
          <FontAwesomeIcon icon={faUserCircle} style={styles.icon} />
          <FontAwesomeIcon icon={faShoppingBag} style={styles.icon} />

          {/* Hamburger Icon for Small Screen */}
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            style={styles.hamburgerIcon}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Second Row: Navigation Links */}
      <div style={styles.navLinks}>
        {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sale', 'Gifts'].map((link, index) => (
          <button key={index} style={styles.navLink} onClick={() => handleNavigation(link)}>
            {link}
          </button>
        ))}
      </div>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sale', 'Gifts', 'Help & Support'].map(
            (item, index) => (
              <button key={index} style={styles.menuItem} onClick={() => handleNavigation(item)}>
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column', 
    padding: '10px 20px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff',
    position: 'relative',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: '1',
  },
  logo: {
    width: '100px',
  },
  searchContainer: {
    flex: '2', 
    display: 'flex',
    // alignItems: 'center',
  },
  searchInput: {
    flex: '1',
    padding: '10px', 
    borderRadius: '20px 0 0 20px',
    border: '1px solid #ddd',
    outline: 'none',
    fontSize: '14px',
  },
  searchButton: {
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: '0 20px 20px 0',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  iconsContainer: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    fontSize: '24px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  hamburgerIcon: {
    fontSize: '24px',
    margin: '0 10px',
    cursor: 'pointer',
    display: 'none', 
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '10px', 
  },
  navLink: {
    margin: '0 10px',
    padding: '8px 12px',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    color: '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
  },
  mobileMenu: {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '1000',
    borderLeft: '1px solid #ddd',
  },
  menuItem: {
    padding: '15px 0',
    background: 'none',
    border: 'none',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'left',
    width: '100%',
  },
  '@media (max-width: 768px)': {
    hamburgerIcon: {
      display: 'block',
    },
    mobileMenu: {
      display: 'flex', 
    },
  },
};

export default Navbar;
