import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/bookings">
              <a style={linkStyle}>Bookings</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/drivers">
              <a style={linkStyle}>Drivers</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/ratings">
              <a style={linkStyle}>Ratings</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/login">
              <a style={linkStyle}>Login</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/signup">
              <a style={linkStyle}>Signup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
  color: '#fff',
  textAlign: 'center',
};

const navStyle = {
  maxWidth: '960px',
  margin: '0 auto',
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
};

export default Header;