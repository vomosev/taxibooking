import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Taxi Booking App. All rights reserved.</p>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}><a href="/terms" style={linkStyle}>Terms of Service</a></li>
            <li style={navItemStyle}><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
            <li style={navItemStyle}><a href="/contact" style={linkStyle}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const navListStyle = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 0 0',
};

const navItemStyle = {
  margin: '0 10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;