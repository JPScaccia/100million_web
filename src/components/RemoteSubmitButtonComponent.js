import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import PropTypes from 'prop-types'


const RemoteSubmitButtonComponent = (props) => {
  let buttonText = props.buttonText || "GO!"

  let button = <button
        className="primary-button button-inverse"
        onClick={() => {
            props.dispatch(submit(props.formName))
          }
        }
      >
        {buttonText}
      </button>

    if (props.disabled) {
      button = <button disabled
            className="primary-button button-inverse"
            onClick={() => {
                props.dispatch(submit(props.formName))
              }
            }
          >
            {buttonText}
          </button>
    }

  return (
    button
  )
}


RemoteSubmitButtonComponent.propTypes = {
  formName: PropTypes.string.isRequired
}

export default connect()(RemoteSubmitButtonComponent)
