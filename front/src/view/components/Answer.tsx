import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hasExpectedRequestMetadata } from '@reduxjs/toolkit/dist/matchers'
import {
  selectAnsIncorrectNum,
  setResult,
  setIsCorrectModalClose,
  selectHasCorrected,
} from '../../stores/ansResulterSlice'
import { selectErrors, pushError } from '../../stores/errorCollector'
import { AppDispatch } from '../../stores/store'
import { checkDailyAns } from '../../util/checkAns'
import errorTypes from '../../util/errorTypes'
import Button from './Button'

function Answer() {
  const [ans, setAns] = useState('')
  const incorrectNum: number = useSelector(selectAnsIncorrectNum)
  const hasCorrected: boolean = useSelector(selectHasCorrected)
  const errors = useSelector(selectErrors)
  const dispatch = useDispatch<AppDispatch>()

  function handleChange(input: string) {
    setAns(input)
  }
  async function onClick() {
    console.log(ans)
    const res = await checkDailyAns(ans)
    if (!res) {
      dispatch(pushError({ error: errorTypes.Incorrect }))
    } else {
      dispatch(setIsCorrectModalClose({ isCorrectModalClose: false }))
    }
    dispatch(setResult({ result: res }))
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
