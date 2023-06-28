import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectAnsResult,
  selectAnsIncorrectNum,
  setResult,
} from '../stores/ansResulterSlice'
import { pushError, selectErrors } from '../stores/errorCollector'
import { selectHints, selectHintCount } from '../stores/hintGetterSlice'
import errorTypes from '../util/errorTypes'
import './App.css'
import Balloon from './components/Balloon'
import Footer from './components/Footer'
import Header from './components/Header'
import Hint from './components/Hint'

function App() {
  const hint_count = useSelector(selectHintCount)
  const incorrectNum = useSelector(selectAnsIncorrectNum)
  const errors = useSelector(selectErrors)
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
      <div id="main">
        <h2 id="counter">hints: {hint_count}</h2>
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
