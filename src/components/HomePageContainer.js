import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { Link } from 'react-router-dom'
import HomePageComponent from './HomePageComponent'


class HomePageContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    //console.log('handleClick called: ' + event.target)
    this.props.history.push('/survey')
  }

  render() {
    return (
      <HomePageComponent
        onClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageContainer))
