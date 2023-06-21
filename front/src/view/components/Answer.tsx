import React, { useState } from 'react'
import csvHeaders from '../../util/csvHeaders'
import constant from '../../util/const'
import * as reactRedux from 'react-redux'
import { selectHints, selectHintCount } from '../../stores/hintGetterSlice'
import Button from './Button'
import checkAns from '../../util/checkAns'

function Answer() {
  const [ans, setAns] = useState('')
  const [result, setResult] = useState(0)
  const hints: string[] = reactRedux.useSelector(selectHints)
  function handleChange(input: string) {
    setAns(input)
  }
  async function onClick() {
    console.log(ans)
    setResult(await checkAns(1, ans))
  }

  return (
    <div className="answer">
      result:{result}
      <div className="ans">
        {ans == '' || ans == ' ' || ans == '  ' ? '__' : ans}
      </div>
      <input
        type="text"
        maxLength={2}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={() => onClick()} value="ans" />
    </div>
  )
}

export default Answer
