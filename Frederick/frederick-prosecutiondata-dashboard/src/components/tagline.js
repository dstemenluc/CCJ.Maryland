import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h3 className="font-heading-lg margin-top-0 tablet:margin-bottom-0">
        The Office is committed to providing the public with greater insight and transparency into our work.
        </h3>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p className='margin-top-6'>
        We hope that giving the community access to information about case referrals, outcomes, and performance indicators will lead 
to greater accountability and improve the fairness and effectiveness of the criminal justice system.
        </p>
      </div>
    </div>
  </section>
);

export default Tagline;
