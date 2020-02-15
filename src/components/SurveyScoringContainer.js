import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import Levels from 'react-activity/lib/Levels'
import 'react-activity/lib/Levels/Levels.css'
import '../css/surveys.css'

class SurveyScoringContainer extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() { }

  render() {
    return (
      <div id="surveys_sheets_row1">
        <p id="surveys_sheets_row1Header">
          Generating Your Customized Report...
        </p>
        <div>
          <Levels
            size={200}
            color="#00B2E3" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {}
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyScoringContainer))
