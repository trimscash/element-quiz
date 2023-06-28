import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnsIncorrectNum, setResult } from '../../stores/ansResulterSlice'
import { selectErrors, pushError } from '../../stores/errorCollector'
import { AppDispatch } from '../../stores/store'
import checkAns from '../../util/checkAns'
import errorTypes from '../../util/errorTypes'
import Button from './Button'

function Answer() {
  const [ans, setAns] = useState('')
  const incorrectNum: number = useSelector(selectAnsIncorrectNum)
  const errors = useSelector(selectErrors)
  const dispatch = useDispatch<AppDispatch>()

  function handleChange(input: string) {
    setAns(input)
  }
  async function onClick() {
    console.log(ans)
    const res = await checkAns(ans)
    if (!res) {
      dispatch(pushError({ error: errorTypes.Incorrect }))
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
      />
      <Button onClick={() => onClick()} value="Answer" />
    </div>
  )
}

export default Answer
