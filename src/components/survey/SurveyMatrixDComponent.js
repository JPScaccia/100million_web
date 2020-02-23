import React from 'react'


const SurveyMatrixDComponent = (props) => {
  const { item, onChange, text } = props

  return (
    <div>
      <table
        className="">
        <tbody>
          <tr>
            <td
              className="item">
              <span
                key={"key_item_" + item.number}>
                {item.phrases.map((phrase, index) => {
                  return (
                    <span
                      key={"key_phrase_" + index}>
                      {phrase}<br />
                    </span>
                  )
                })}
              </span>
            </td>
          </tr>

          <tr>
            <td className="score">
              <textarea
                name={'name_item_' + item.number}
                value={text}
                onChange={onChange} />
            </td>
          </tr>

        </tbody>
      </table>
      <br />
    </div>
  )
}

export default SurveyMatrixDComponent
