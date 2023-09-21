import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectHasCorrected,
  selectAnsIncorrectNum,
  selectIsCorrectModalClose,
  setResult,
  setIsCorrectModalClose,
  incrementIncorrectNum,
} from '../stores/ansResulterSlice'
import { pushError, selectErrors } from '../stores/errorCollector'
import { incrementHintCount, setHint } from '../stores/hintSetterSlice'
import { selectHints, selectHintCount } from '../stores/hintSetterSlice'
import { AppDispatch } from '../stores/store'
import {
  GameInfoType,
  HintType,
  initialGameInfo,
} from '../util/cookieGameInfoType'
import errorTypes from '../util/errorTypes'
import './App.css'
import Balloon from './components/Balloon'
import CorrectModal from './components/CorrectModal'
import Footer from './components/Footer'
import Header from './components/Header'
import Hint from './components/Hint'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const hint_count = useSelector(selectHintCount)
  const incorrectNum = useSelector(selectAnsIncorrectNum)
  const errors = useSelector(selectErrors)
  const hasCorrected = useSelector(selectHasCorrected)

  const isCorrectModalClose = useSelector(selectIsCorrectModalClose)

  const hint_jsx_list = []
  const balloon_list = []

  const [cookies, setCookie, removeCookie] = useCookies(['gameInfo'])

  useEffect(() => {
    console.log(initialGameInfo)
    console.log(cookies.gameInfo)
    const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo
    dispatch(setResult({ result: gameInfoObj.hasCorrected }))
    for (let i = 0; i < gameInfoObj.hintNum; i++) {
      dispatch(
        setHint({
          hint: gameInfoObj.hints[i].hint,
          hint_index: gameInfoObj.hints[i].hintIndex,
        })
      )
      dispatch(incrementHintCount())
    }
    for (let i = 0; i < gameInfoObj.incorrectedNum; i++) {
      dispatch(incrementIncorrectNum())
    }
  }, [])

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
          <h2 id="incorrect-counter">incorrect: {incorrectNum}</h2>
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
