import React from 'react'
import SurveyMatrixAComponent from './SurveyMatrixAComponent'
import SurveyMatrixBComponent from './SurveyMatrixBComponent'
import SurveyMatrixCComponent from './SurveyMatrixCComponent'
import SurveyMatrixDComponent from './SurveyMatrixDComponent'


const SurveySheetMatrixComponent = (props) => {
  const { matrix, onNextPage, onChange } = props
  let component = null

  if (matrix) {
    let matrixComponent = null

    if (matrix.type === "A") {
      matrixComponent = <SurveyMatrixAComponent
        items={matrix.items}
        options={matrix.options}
        onChange={onChange} />
    }
    else if (matrix.type === "B") {
      matrixComponent = <SurveyMatrixBComponent
        items={matrix.items}
        options={matrix.options}
        onChange={onChange} />
    }
    else if (matrix.type === "C") {
      matrixComponent = <SurveyMatrixCComponent
        items={matrix.items}
        options={matrix.options}
        onChange={onChange} />
    }
    else if (matrix.type === "D") {
      matrixComponent = <SurveyMatrixDComponent
        item={matrix.item}
        onChange={onChange} />
    }

    if (matrixComponent) {
      component = (
        <div>
          {matrixComponent}
        </div>
      )
    }
  }

  return component
}

export default SurveySheetMatrixComponent
