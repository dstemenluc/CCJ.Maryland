import React from 'react';
import { Link } from 'gatsby';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h3 className="usa-hero__heading" style={{color:'white'}}>
          <span className="usa-hero__heading">Our Data is Available to Explore</span>
        </h3>
        <p>
        Learn about what data we're releasing and important context about our criminal justice system.
        
        </p>
        <Link to="/overview" title="Learn" aria-label="Home">
        <a className="usa-button" >
          Learn More
        </a>
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
