import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { hasExpectedRequestMetadata } from '@reduxjs/toolkit/dist/matchers'
import {
  selectAnsIncorrectNum,
  setResult,
  setIsCorrectModalClose,
  incrementIncorrectNum,
  selectHasCorrected,
} from '../../stores/ansResulterSlice'
import { selectErrors, pushError } from '../../stores/errorCollector'
import { AppDispatch } from '../../stores/store'
import { checkDailyAns } from '../../util/checkAns'
import {
  GameInfoType,
  HintType,
  initialGameInfo,
} from '../../util/cookieGameInfoType'
import { endOfToday } from '../../util/endOfToday'
import errorTypes from '../../util/errorTypes'
import Button from './Button'

function Answer() {
  const [ans, setAns] = useState('')
  const incorrectNum: number = useSelector(selectAnsIncorrectNum)
  const hasCorrected: boolean = useSelector(selectHasCorrected)
  const errors = useSelector(selectErrors)
  const dispatch = useDispatch<AppDispatch>()

  const [cookies, setCookie, removeCookie] = useCookies(['gameInfo'])

  useEffect(() => {
    if (hasCorrected) {
      const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo
      setAns(gameInfoObj.answer)
    }
  })

  function handleChange(input: string) {
    setAns(input)
  }
  async function onClick() {
    if (!hasCorrected) {
      // console.log(ans)
      const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo

      const res = await checkDailyAns(ans)
      if (!res) {
        dispatch(pushError({ error: errorTypes.Incorrect }))
        dispatch(incrementIncorrectNum())
        gameInfoObj.incorrectedNum++
      } else {
        dispatch(setIsCorrectModalClose({ isCorrectModalClose: false }))
        gameInfoObj.hasCorrected = true
        gameInfoObj.answer = ans
      }
      setCookie('gameInfo', JSON.stringify(gameInfoObj), {
        expires: endOfToday,
      })
      dispatch(setResult({ result: res }))
    }
  }

  return (
    <div className="answer">
      <div className="ans">
        {ans == '' || ans == ' ' || ans == '  ' ? '__' : ans}
      </div>
      <input
        type="text"
        maxLength={2}
        onChange={(e) => handleChange(e.target.value)}
        readOnly={hasCorrected}
      />
      <Button onClick={() => onClick()} value="Answer" />
    </div>
  )
}

export default Answer
