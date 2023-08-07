import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectHasCorrected } from '../../stores/ansResulterSlice'
import { selectErrors, pushError } from '../../stores/errorCollector'
import {
  SetHintArg,
  setHint,
  selectHintCount,
} from '../../stores/hintSetterSlice'
import { AppDispatch } from '../../stores/store'
import { HintResponseType } from '../../util/apiResponseType'
import constant from '../../util/const'
import errorTypes from '../../util/errorTypes'
import fetchTodayHints from '../../util/fetchTodayHint'
import Button from './Button'

function RouletteButton() {
  const hint_count = useSelector(selectHintCount)
  const hint_index = constant.HINTS_INDEX[hint_count]
  const hasCorrected: boolean = useSelector(selectHasCorrected)
  const dispatch = useDispatch<AppDispatch>()

  async function handleClick() {
    if (!hasCorrected) {
      if (constant.HINTS_INDEX.length > hint_count) {
        const res: HintResponseType = await fetchTodayHints(hint_index)

        dispatch(
          setHint({ hint: res.hint, hint_index: hint_index } as SetHintArg)
        )
      } else {
        dispatch(pushError({ error: errorTypes.NoMoreHint }))
      }
    }
    return
  }
  return <Button value="Get More Hint" onClick={() => handleClick()} />
}

export default RouletteButton
