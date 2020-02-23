import React from 'react'


const SurveyMatrixAComponent = (props) => {
  return (
    <div>
      <table
        className="">
        <tbody>
          <tr>
            {props.options.map((option, index) => {
              return (
                <td
                  className="aItem"
                  key={"key_option_" + index}>
                  <span>
                    {option.phrases.map((phrase, index) => {
                      return (
                        <span
                          key={"key_phrase_" + index}>
                          {phrase}<br />
                        </span>
                      )
                    })}
                  </span>
                </td>
              )
            })
            }
          </tr>

          <tr>
            {props.options.map((option, index) => {
              return (
                <th
                  className="theader"
                  key={"key_" + index}>
                  {option.labels.map((label, index) => {
                    return (
                      <span
                        key={"key_" + index}>
                        {label}<br />
                      </span>
                    )
                  })}
                </th>
              )
            })
            }
          </tr>

          <tr>
            {props.options.map((option, index) => {
              return (
                <td
                  className="score"
                  key={"key_option_" + props.items[0].number + "_" + option.values}>
                  <input
                    id={"id_item_" + props.items[0].number + "_option_" + index}
                    className="radio"
                    type="radio"
                    name={'name_item_' + props.items[0].number + '_option'}
                    value={option.values}
                    onChange={props.onChange}>
                  </input>
                </td>
              )
            })}
          </tr>

        </tbody>
      </table>
      <br />
    </div>
  )
}

export default SurveyMatrixAComponent
