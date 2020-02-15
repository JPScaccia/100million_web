import React from 'react'
import '../css/faq.css'


const FaqComponent = (props) => (
  <div>
    <div id="faq_row1">
      <div id="faq_row1Tint">
        <p id="faq_row1Header">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p id="faq_row1Body">
          People have many questions about readiness. Feel free to consult the below
          FAQ or contact any Wandersman Center team member for further discussion
          about how to apply readiness to your projects.
        </p>
      </div>
    </div>

  <div id="faq_row2">
    <div id="faq_row2Col1">
      <div>
        <p className="faq_row2ColItemHeaderLightBlue">
          What is readiness?
        </p>
        <p>
          Readiness is not one thing: it is an umbrella concept that contains several
          related constructs.  In order to be ready, an organization needs to be
          both willing and able to implement. Being willing means having sufficient
          motivation to do something new. Being able means have sufficient capacity
          to do something new. This include the conditions for the particular
          innovation, as well as being a generally functional organization.
        </p>
      </div>

      <div>
        <p className="faq_row2ColItemHeaderGreen">
          We already started.  Why should we care about readiness?
        </p>
        <p>
          Readiness is not just important at the beginning.  The conditions that
          impact implementation change over time; both positively and negatively.
          Across project, we have found the frequent monitoring helps to mitigate any
          challenges as they emerge.
        </p>
      </div>
      
      <div>
        <p className="faq_row2ColItemHeaderBlue">
          Does it matter what type of organization we are?
        </p>
        <p>
          Nope!  Whether you are a marketing agency, a school, a behavioral health
          provider, a hospital, an urgent care clinic, a division of a large
          state-level agency, a community coalition, a board, a retailor, a military
          base, a church group, an university academic department, a non-profit, or
          ...
        </p>
        <p>
          ...readiness can be applicable to your setting.
        </p>
      </div>
    </div>

    <div id="faq_row2Col2">
      <div>
        <p className="faq_row2ColItemHeaderGreen">
          What is an innovation?
        </p>
        <p>
          An innovation is any
          [Policy
          | {' '}
          Program
          | {' '}
          Process
          | {' '}
          Practice]
    
          that is new to any
          [Setting
          | {' '}
          Organization
          | {' '}
          Unit
          | {' '}
          Team]
        </p>  
      </div>

      <div>
        <p className="faq_row2ColItemHeaderLightBlue">
          How is readiness linked to implementation?
        </p>
        <p>
          Having more readiness means that you are more likely to implement well.
          Quality implementation is more than following a process exactly as specified
          (sometimes called fidelity).  It means that an organization considers the
          surrounding context, the recipient needs, and opportunities for improvement
          while implementation is happening.
        </p>
      </div>
      <div>
        <p className="faq_row2ColItemHeaderBlue">
          What if I want to take the survey more than once?
        </p>
        <p>
          We are currently developing the functionality to link results over time.
        </p>
      </div>
      <div>
      <p className="faq_row2ColItemHeaderGreen">
        Can the survey be customized for my own organization’s needs?
      </p>
      <p>
        Yup! Contact our team and we can discuss how to develop project and
        site-specific modifications that can enhance the utility.
      </p>
      </div>
      <div>
      <p className="faq_row2ColItemHeaderLightBlue">
        What can I do to get additional help?
      </p>
      <p>
        Change Management of Readiness (CMOR) is one of our core research and
        practical activities.  Contact us for additional consultation about how to
        apply CMOR to your work.
      </p>
    </div>

    </div>
  </div>
</div>
)

export default FaqComponent
