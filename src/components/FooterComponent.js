import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'
import wandersman from '../img/Wandersman-Seal.jpg'

const FooterComponent = (props) => {
  return (

    <div id="footer">
      <div id="footer_col1">
        <a href="https://wandersmancenter.org"
          target="_blank">
          <img id="footer_col1Logo"
            src={wandersman}
          />
        </a>
      </div>

      <div id="footer_col2">
        <p className="footer_col2Header">
          Wandersman Center South
        </p>
        <p className="footer_col2Body">
          Located in downtown Columbia, SC., our main office is conveniently located close to the flagship University of South Carolina and multiple state and community-level agencies. We are deeply connected to many stakeholders throughout the community.
        </p>
        <p>
          1512 Laurel Street • Columbia, SC 29201
        </p>
        <p className="footer_col2Header">
          Wandersman Center North
        </p>
        <p className="footer_col2Body">
          Strategically positioned in the Appalachian foothills, the Wandersman Center North has easy access to the Northeast's major population centers: New York City, Philadelphia, Baltimore and Washington, DC.
       </p>
        <p>
          Philadelphia, PA
        </p>
      </div>

      <div id="footer_col3">
        <p id="footer_col3Phone">
          803.252.5455
       </p>
        <p>
          jonathan.p.scaccia@wandersmancenter.org
       </p>
        <hr id="footer_col3Line" />
        <p id="footer_col3Header">
          Sign up for news &amp; updates
        </p>

        <Link to="/signup">
          <span id="footer_emailButton">
            <span id="footer_emailButtonCol1">
              EMAIL ADDRESS
            </span>
            <span id="footer_emailButtonCol2">
              <i id="footer_arrow" className="footer_arrowRight"></i>
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default FooterComponent
