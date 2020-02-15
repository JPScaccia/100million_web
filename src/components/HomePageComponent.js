import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'
import ipad from '../img/ipad.jpeg'
import lightbulb from '../img/lightbulb.jpeg'
import rmc2logo from '../img/Wandersman-Mark-RMC.png'


const HomePageComponent = (props) => {
  return (
    <div>
      <div id="home_row1">
        <div id="home_row1Col1">
          <img
            id="home_ipadUser"
            src={ipad}
          />
        </div>
        <div id="home_row1Col2">
          <div id="home_rmc2LogoParent">
            <h1>
              Readiness Building Systems
            </h1>

            <p id="home_row1Col2Body">
              In order to implement with quality, your team needs to be both willing and
              able to succeed.  You need the motivation, the innovation-specific capacity,
              and the general capacity. We provide rigorous tools, resources, processes,
              and support to help industries and organizations implement better and reach
              desired outcomes.
            </p>
          </div>

          <div id="home_rmc2LogoContainer">
            <img
              id="home_rmc2Logo"
              src={rmc2logo}
            />
          </div>

        </div>
      </div>

      <div id="home_row2">
        <div id="home_row2Tint">
          <p id="home_row2Header">
            Why do we need to understand readiness??
          </p>
          <p id="home_row2Body">
            Many things can impact how well a change effort is implemented and supported.<br />
            By understanding the motivation and capacity of your team and organization,<br />
            you can proactively address conditions that might prove troublesome down the<br />
            road and make sure there is sufficient momentum to achieve your goals.<br />
          </p>
          <Link
            id="home_row2Button"
            to="/surveys">
            TAKE YOUR SURVEY NOW
          </Link>
        </div>
      </div>

      <div id="home_row3">
        <div id="home_row3Col1">
          <p id="home_row3Header">
            Who We Are
          </p>
          <p className="home_row3Col1Body">
            The Wandersman Center is among the industry leaders in practical implementation
            science. We use the tools of research and evaluation, guided a set of
            transdisciplinary theories and participatory values, to find solutions to meet
            organizational and community-based needs.
          </p>
          <a
            href="https://www.wandersmancenter.org/what-we-do.html"
            id="home_row3Col1Button"
            target="_blank">
            LEARN MORE
          </a>
        </div>
        <div id="home_row3Col2">
          <img
            id="home_lightBulb"
            src={lightbulb}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePageComponent
