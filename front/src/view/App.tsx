import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectHasCorrected,
  selectAnsIncorrectNum,
  selectIsCorrectModalClose,
  setIsCorrectModalClose,
} from '../stores/ansResulterSlice'
import { pushError, selectErrors } from '../stores/errorCollector'
import { selectHints, selectHintCount } from '../stores/hintSetterSlice'
import errorTypes from '../util/errorTypes'
import './App.css'
import Balloon from './components/Balloon'
import CorrectModal from './components/CorrectModal'
import Footer from './components/Footer'
import Header from './components/Header'
import Hint from './components/Hint'

function App() {
  const hint_count = useSelector(selectHintCount)
  const incorrectNum = useSelector(selectAnsIncorrectNum)
  const errors = useSelector(selectErrors)
  const hasCorrected = useSelector(selectHasCorrected)

  const isCorrectModalClose = useSelector(selectIsCorrectModalClose)

  const hint_jsx_list = []
  const balloon_list = []

  for (const e of errors) {
    let errorContext = ''
    switch (e) {
      case errorTypes.Incorrect:
        errorContext = 'Incorrect'
        break
      case errorTypes.NoMoreHint:
        errorContext = 'No More Hint'
        break
    }
    balloon_list.push(<Balloon value={errorContext} />)
  }

  for (let h = 0; h < hint_count; h++) {
    hint_jsx_list.push(<Hint hint_index={h} />)
  }

  return (
    <div>
      <Header />
      <CorrectModal isOpen={hasCorrected && !isCorrectModalClose} />
      <div id="main">
        <div id="status-area">
          <h2 id="hint-counter">hints: {hint_count}</h2>
          <h2 id="incorrect-counter">incorrct: {incorrectNum}</h2>
          <h2 id="has-corrected-state" hidden={!hasCorrected}>
            Corrected!!
          </h2>
        </div>
        <div className="balloons">{balloon_list}</div>
        <h1 className="hints">
          {hint_jsx_list}
          <br />
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
