import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import ComponentConsts from '../consts/ComponentConsts'
//import uploadFilesActionCreator from '../actions/uploadFilesActionCreator'
import DashboardUploadFilesComponent from './DashboardUploadFilesComponent'

class DashboardUploadFilesContainer extends Component {
  constructor(props) {
    super(props)
    this.handleUpload = this.handleUpload.bind(this)
  }

  componentDidMount() {
  }

  async handleUpload(values) {
    this.props.uploadFile()
  }

  render() {
    const { error, handleSubmit, submitting } = this.props

    return (
      <DashboardUploadFilesComponent
        onSubmit={handleSubmit(this.handleUpload)}
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
    //    uploadFile: () => dispatch(uploadFilesActionCreator())
  }
}

DashboardUploadFilesContainer = reduxForm({
  form: ComponentConsts.DashboardUploadFileFormComponent
})(DashboardUploadFilesContainer)

export default DashboardUploadFilesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardUploadFilesContainer)
