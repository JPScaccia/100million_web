import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import util from 'util'
import SurveyAuthComponent from './SurveyAuthComponent'


class SurveyAuthContainer extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {}

  render() {
    return (
      <SurveyAuthComponent />
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
)(SurveyAuthContainer))
