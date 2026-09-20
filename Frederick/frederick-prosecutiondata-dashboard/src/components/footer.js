import React from 'react';
import logo from 'uswds/img/logo-img.png';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://www.bouldercounty.org/district-attorney/">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Seal_of_Frederick_County%2C_Maryland.png/200px-Seal_of_Frederick_County%2C_Maryland.png'} width="100" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li> <a href=''>Homepage</a></li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
         
              <li> <a href=''>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
