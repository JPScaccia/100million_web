import React from 'react'
import '../css/about.css'
import lightbulb from '../img/lightbulb.jpeg'
import rmc2logo from '../img/Wandersman-Mark-RMC.png'

const AboutComponent = (props) => (
  <div>

    <div id="about_row1">
      <div id="about_row1Tint">
        <p id="about_row1Header">
          The Wandersman Center has pioneered a<br />
          novel framework for applying readiness
      </p>
      </div>
    </div>

    <div id="about_row2">
      <div id="about_row2Col1">
        <img
          id="about_lightBulb"
          src={lightbulb}
        />
      </div>
      <div id="about_row2Col2">
        <img
          id="about_rmc2Logo"
          src={rmc2logo}
        />
        <p id="about_row2Col2Body">
          <span id="about_row2Col2Approach">
            The R = MC<sup>2</sup> approach
          </span> emphasizes the critical importance of
         organizational willingness (i.e., motivation) and ability
         (i.e., capacity) for readiness to implement something new
         with quality. Generally, we define an innovation as a program,
         practice, policy or process that is new to a setting.
         Readiness work can also be applied to current interventions
         by simply substituting the word innovation with intervention.
        </p>
      </div>
    </div>

    <div id="about_row3">
      <div id="about_row3Col1">
        <h2 className="about_row3Header">
          Motivation
      </h2>
        <p>
          There are psychological aspects of any change effort that are
          important for implementation success. Motivation consists of
          features of an innovation that contribute to whether people
          want to do it.
      </p>
      </div>
      <div id="about_row3Col2">
        <h2 className="about_row3Header">
          General<br />Capacities
      </h2>
        <p>
          General capacities are the conditions applicable for any
          innovation. These are the overall organizational
          characteristics.
      </p>
      </div>
      <div id="about_row3Col3">
        <h2 className="about_row3Header">
          Innovation-Specific Capacities
      </h2>
        <p>
          Innovation-specific capacities are the conditions that
          are necessary to implement a particular innovation. This
          includes not only the knowledge and skills for the innovation,
          but the conditions within the organization that facilitate
          implementation.
      </p>
      </div>
    </div>

    <div id="about_row4">
      <p id="about_row4Header">
        What do I need to know about Readiness?
      </p>

      <div id="about_tableContainer">
        <table id="about_table">
          <tbody>
            <tr className="about_tableRow">
              <td className="about_tableCol1">
                <div className="about_left">
                  1.
              </div>
                <div className="about_rightBlue">
                  Readiness consists of<br />
                  multiple constructs.
              </div>
              </td>
              <td className="about_tableCol2">
                Readiness is more than being "ready or not." Rather,
                readiness is determined by the three related components
                that can vary in influence depending on the setting.
                Each component has a number of subcomponents that
                provide more detail about motivation and capacity.
            </td>
            </tr>
            <tr className="about_tableRow">
              <td className="about_tableCol1">
                <div className="about_left">
                  2.
              </div>
                <div className="about_rightGreen">
                  Readiness is<br />
                  innovation-specific.
              </div>
              </td>
              <td className="about_tableCol2">
                When considering using readiness in a setting, consider
                this question: What are we ready for? Conditions may be
                right for one innovation while not being right for another.
                For example, just because a community coalition is motivated
                to implement a community walking program does not mean that
                they are ready to implement a nutrition program, even though
                they are both related to health and wellness. Therefore, it
                is necessary to specify the innovation to apply the readiness
                concepts.
            </td>
            </tr>

            <tr className="about_tableRow">
              <td className="about_tableCol1">
                <div className="about_left">
                  3.
              </div>
                <div className="about_rightBlue">
                  Readiness is<br />
                  important throughout<br />
                  implementation.
              </div>
              </td>
              <td className="about_tableCol2">
                The dynamic nature of readiness means that it is applicable and
                relevant across all stages of implementation: pre-implementation,
                adoption, active implementation, and sustainability. No matter
                the stage of an innovation’s lifespan, there are readiness issues
                that should be considered.
            </td>
            </tr>

            <tr className="about_tableRow">
              <td className="about_tableCol1">
                <div className="about_left">
                  4.
              </div>
                <div className="about_rightGreen">
                  Readiness is important<br />
                  for outcomes across<br />
                  multiple system levels.
              </div>
              </td>
              <td className="about_tableCol2">
                Readiness also applies to higher system levels: from the
                individual, to the team, to the organization, to the coalition,
                to the community, to the state, to the nation. We have been able
                to apply the model across multiple levels.
            </td>
            </tr>

            <tr className="about_tableRow">
              <td className="about_tableCol1">
                <div className="about_left">
                  5.
              </div>
                <div className="about_rightBlue">
                  Readiness can be built.
              </div>
              </td>
              <td className="about_tableCol2">
                Readiness can be built using customized interventions. By
                building the conditions that are associated with quality
                implementation, an organization can increase the likelihood
                of achieving good outcomes. Furthermore, these conditions
                can be preventively addressed to promote the sustainability
                of implementation so that gains are maintained and drift in
                quality in minimized. By knowing the readiness of an
                organization, a readiness building plan can be developed
                to increase motivation and capacity.
            </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

    <div id="about_row5">
      <div>
        <p id="about_row5Header">
          To learn more about readiness...
      </p>

        <p id="about_row5Body">
          We have an extensive research and development program dedicated to
          moving both the science AND practice of readiness forward. Learn more
          about this in our FY 2019-2020 Annual Report by clicking below.
      </p>
        <a
          href="https://www.wandersmancenter.org/learn-more.html"
          id="about_row5Button"
          target="_blank"
        >
          Annual Report
      </a>
      </div>

    </div>

  </div>
)

export default AboutComponent
