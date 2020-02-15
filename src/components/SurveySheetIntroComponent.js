import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'


const SurveySheetIntroComponent = (props) => {
  const { introduction } = props

  let component = null

  if (introduction) {
    component = (
      <div className='sheetIntro'>
        {ReactHtmlParser(introduction)}
      </div>
    )
  }

  return component
}

export default SurveySheetIntroComponent
