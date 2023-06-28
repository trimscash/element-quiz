import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectErrors, pushError } from '../../stores/errorCollector'
import { getTodayHint, selectHintCount } from '../../stores/hintGetterSlice'
import { AppDispatch } from '../../stores/store'
import constant from '../../util/const'
import errorTypes from '../../util/errorTypes'
import Button from './Button'

function RouletteButton() {
  const hint_count = useSelector(selectHintCount)
  const dispatch = useDispatch<AppDispatch>()

  function handleClick() {
    if (constant.HINTS_INDEX.length > hint_count) {
      dispatch(getTodayHint({ hint: constant.HINTS_INDEX[hint_count] }))
    } else {
      dispatch(pushError({ error: errorTypes.NoMoreHint }))
    }
    return
  }
  return <Button value="Get More Hint" onClick={() => handleClick()} />
}

export default RouletteButton
