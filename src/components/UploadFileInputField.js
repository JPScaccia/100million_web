import React, { Component } from 'react'

class UploadFileInputField extends Component {
  render() {
    const { input, dataAllowedFileExtensions } = this.props

    const onChange = (e) => {
      e.preventDefault()
      const files = [...e.target.files]
      input.onChange(files)
    };
    return (
      <div>
        <input type="file"
          onChange={onChange}
          data-allowed-file-extensions={dataAllowedFileExtensions}
        />
      </div>
    )
  }
}

export default UploadFileInputField