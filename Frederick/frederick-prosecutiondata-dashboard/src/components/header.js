import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar">
    <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text desktop:width-tablet" >
          <Link to="/"  title="Home" aria-label="Home">
          Frederick County State's Attorney <br></br> Data Dashboard
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
