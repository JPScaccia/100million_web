import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import ComponentConsts from '../../consts/ComponentConsts'
import DashboardUploadFilesCompletedButtonComponent from './DashboardUploadFilesCompletedButtonComponent'
import uploadFilesCompletedActionCreator from '../../actions/uploadFilesCompletedActionCreator'


class DashboardUploadFilesCompletedButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
  }

  async handleSubmit(values) {
    this.props.uploadFilesCompleted()
  }

  render() {
    const { error, handleSubmit, submitting } = this.props

    return (
      <DashboardUploadFilesCompletedButtonComponent
        onSubmit={handleSubmit(this.handleSubmit)}
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
    uploadFilesCompleted: () => dispatch(uploadFilesCompletedActionCreator())
  }
}

DashboardUploadFilesCompletedButtonContainer = reduxForm({
  form: ComponentConsts.UploadFilesCompletedButtonFormComponent
})(DashboardUploadFilesCompletedButtonContainer)

export default DashboardUploadFilesCompletedButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardUploadFilesCompletedButtonContainer)
