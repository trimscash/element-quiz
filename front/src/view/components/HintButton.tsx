import React from 'react'
import constant from '../../util/const'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../stores/counterSlice'
import { getHint, selectHintCount } from '../../stores/hintGetterSlice'
import { AppDispatch } from '../../stores/store'

function RouletteButton() {
  const hint_count = useSelector(selectHintCount)
  const dispatch = useDispatch<AppDispatch>()

  function handleClick() {
    if (constant.HINTS_INDEX.length > hint_count) {
      dispatch(getHint({ element: 1, hint: constant.HINTS_INDEX[hint_count] }))
      dispatch(increment())
    }
    return
  }
  return <Button value="Get More Hint" onClick={() => handleClick()} />
}

export default RouletteButton
