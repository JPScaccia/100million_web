import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchChooseYourOwnAdventureActionCreator from '../../actions/fetchChooseYourOwnAdventureActionCreator'
import fetchSurveyActionCreator from '../../actions/fetchSurveyActionCreator'
import startSurveyActionCreator from '../../actions/startSurveyActionCreator'
import SurveySelect2Component from './SurveySelect2Component'


class SurveySelect2Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateName: "startState"
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    this.chooseYourOwnAdventure = await this.props.fetchChooseYourOwnAdventure()

    // this.forceUpdate()
    this.setState({ state: this.state })
  }

  async handleClick(event) {
    const nextStateName = event.target.value
    const currentState = this.chooseYourOwnAdventure[nextStateName]

    if (currentState.transitions) {
      this.setState({
        stateName: nextStateName
      })
    }
    else { // final state
      await this.props.fetchSurvey(currentState.survey.id)
      await this.props.startSurvey(this.props.userId, currentState.survey.id)
    }
  }

  render() {
    if (this.chooseYourOwnAdventure === undefined) {
      return null
    }

    const currentState = this.chooseYourOwnAdventure[this.state.stateName]

    return (
      <SurveySelect2Component
        transitions={currentState.transitions}
        onClick={this.handleClick} />
    )
  }
}

const mapStateToProps = (state) => {
  var props = {
    initialValues: {
      survey: {
        id: -1
      }
    },
    userId: state.authReducer.user.id,
    surveys: state.surveyReducer.surveys || []
  }

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChooseYourOwnAdventure: () => dispatch(fetchChooseYourOwnAdventureActionCreator()),
    startSurvey: (userId, surveyId) => dispatch(startSurveyActionCreator(userId, surveyId)),
    fetchSurvey: (surveyId) => dispatch(fetchSurveyActionCreator(surveyId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveySelect2Container)
