import React from 'react';
import circle from 'uswds/img/circle-124.png';
import { Link } from 'gatsby';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
    <h1 ><span className="usa-hero__heading--alt">System Level Metrics and Indicators</span></h1>
    <p className='margin-bottom-6'>Each one of these sections summarizes data about different parts of the prosecution process.</p>
    


      <div className="usa-graphic-list__row grid-row grid-gap">

        <div className="usa-media-block tablet:grid-col">
        <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/filing_charging" > <a className='usa-link' style={{color:'white'}}>Charging and Filing</a> </Link> 
            </h3>
            <p>
 The State’s Attorney’s Office reviews felony and serious misdemeanor cases to determine whether they should be handled in the Circuit Court or kept in the District Court. This section presents data on all cases filed in Circuit Court.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">

<div className="usa-media-block__body">
  <h3 className="usa-graphic-list__heading">
  <Link to="/case_outcomes" > <a className='usa-link' style={{color:'white'}}>Case Outcomes</a> </Link> 
  </h3>
  <p>
  This section presents data on all cases prosecuted by the State’s Attorney’s Office that have reached a final resolution. Cases can be resolved in a variety of ways, including by conviction, dismissal, acquittal, or another disposition.
  </p>
  
</div>

</div>
      </div>

      <div className="usa-graphic-list__row grid-row grid-gap">

        <div className="usa-media-block tablet:grid-col">
        <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
  <Link to="/defendant-characteristics" > <a className='usa-link' style={{color:'white'}}>Defendant Characteristics</a> </Link> 
            </h3>
            <p>
              This section presents information on defendant characteristics, including race, ethnicity, age, and gender.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">

<div className="usa-media-block__body">
  <h3 className="usa-graphic-list__heading">
<Link to="/ppis" > <a className='usa-link' style={{color:'white'}}>Capacity and Efficiency</a> </Link> 
  </h3>
  <p>
A set of indicators that help the State’s Attorney’s Office ensure they maximize government resource.
  
  </p>
  
</div>

</div>
      </div>
    
 

<div className="usa-graphic-list__row grid-row grid-gap">

<div className="usa-media-block tablet:grid-col">
<div className="usa-media-block__body">
    <h3 className="usa-graphic-list__heading">
      <Link to="/ppis-fairness-and-justice" > <a className='usa-link' style={{color:'white'}}>Fairness and Justice</a> </Link> 
    </h3>
    <p>
    A set of indicators that help the State’s Attorney’s Office ensure they address racial and ethnic disparities in the criminal justice system - whether they stem from victim or defendant identity.
    </p>
  </div>
</div>
<div className="usa-media-block tablet:grid-col">

<div className="usa-media-block__body">
<h3 className="usa-graphic-list__heading">
<Link to="/ppis-community-safety-and-well-being" > <a className='usa-link' style={{color:'white'}}>Community Safety and Well-Being</a> </Link> 
</h3>
<p>
A set of indicators that help the State’s Attorney’s Office ensure they enhance community safety.
</p>

</div>

</div>
</div>
    
    </div>
    
  </section>
);

export default Highlights;

