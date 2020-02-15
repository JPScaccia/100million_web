import React from 'react'


const SurveyMatrixCComponent = (props) => {
  return (
    <div>
      <table
        className="">
        <thead>
          <tr>
            <th className="theaderphrase">
            </th>
            {props.options.map((option, index) => {
              return (
                <th
                  className="theader"
                  key={"key_option_" + index}>
                  {option.labels.map((label, index) => {
                    return (
                      <span
                        key={"key_label_" + index}>
                        {label}<br />
                      </span>
                    )
                  })}
                </th>
              )
            })
            }
          </tr>
        </thead>

        <tbody>
          {props.items.map(item => {
            return (
              <tr
                className="item"
                key={"key_item_" + item.number}>
                <td className="phrase">
                  <span>
                    {item.phrases.map((phrase, index) => {
                      return (
                        <span
                          key={"key_phrase_" + item.number}>
                          {phrase}<br />
                        </span>
                      )
                    })}
                  </span>
                </td>

                {props.options.map((option, index) => {
                  return (
                    <td
                      className="score"
                      key={"key_option_" + item.number + "_" + option.values}>
                      <input
                        id={"id_item_" + item.number + "_option_" + index}
                        className="radio"
                        type="radio"
                        name={'name_item_' + item.number + '_option'}
                        value={option.values}
                        onChange={props.onChange}>
                      </input>
                    </td>
                  )
                })}
              </tr>
            )
          })
          }
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default SurveyMatrixCComponent
