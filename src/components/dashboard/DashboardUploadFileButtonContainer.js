import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import DashboardUploadFileButtonComponent from './DashboardUploadFileButtonComponent'
import setUploadFileActionCreator from '../../actions/setUploadFileActionCreator'


class DashboardUploadFileButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.handleUploadPressed = this.handleUploadPressed.bind(this)
  }

  componentDidMount() {
  }

  async handleUploadPressed(values) {
    console.log("called handleUploadPressed")
    this.props.uploadFile()
  }

  render() {
    const { error, handleSubmit, submitting } = this.props

    return (
      <DashboardUploadFileButtonComponent
        onSubmit={handleSubmit(this.handleUploadPressed)}
        submitting={submitting}
        error={error} />
    )
  }
}

const mapStateToProps = (state) => {
  var props = {}

  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: () => dispatch(setUploadFileActionCreator())
  }
}

DashboardUploadFileButtonContainer = reduxForm({
  form: ComponentConsts.UploadFileButtonFormComponent
})(DashboardUploadFileButtonContainer)

export default DashboardUploadFileButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardUploadFileButtonContainer)
