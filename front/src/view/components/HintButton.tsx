import React from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { selectHasCorrected } from '../../stores/ansResulterSlice'
import { selectErrors, pushError } from '../../stores/errorCollector'
import {
  SetHintArg,
  setHint,
  selectHintCount,
  incrementHintCount,
} from '../../stores/hintSetterSlice'
import { AppDispatch } from '../../stores/store'
import { HintResponseType } from '../../util/apiResponseType'
import constant from '../../util/const'
import {
  GameInfoType,
  HintType,
  initialGameInfo,
} from '../../util/cookieGameInfoType'
import { endOfToday } from '../../util/endOfToday'
import errorTypes from '../../util/errorTypes'
import fetchTodayHints from '../../util/fetchTodayHint'
import Button from './Button'

function RouletteButton() {
  const hint_count = useSelector(selectHintCount)
  const hint_index = constant.HINTS_INDEX[hint_count]
  const hasCorrected: boolean = useSelector(selectHasCorrected)
  const dispatch = useDispatch<AppDispatch>()
  const [cookies, setCookie, removeCookie] = useCookies(['gameInfo'])

  async function handleClick() {
    const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo

    if (!hasCorrected) {
      if (constant.HINTS_INDEX.length > hint_count) {
        const res: HintResponseType = await fetchTodayHints(hint_index)

        dispatch(
          setHint({ hint: res.hint, hint_index: hint_index } as SetHintArg)
        )
        gameInfoObj.hints.push({
          hint: res.hint,
          hintIndex: hint_index,
        } as HintType)

        dispatch(incrementHintCount())
        gameInfoObj.hintNum++

        setCookie('gameInfo', JSON.stringify(gameInfoObj), {
          expires: endOfToday,
        })
      } else {
        dispatch(pushError({ error: errorTypes.NoMoreHint }))
      }
    }
    return
  }
  return <Button value="Get More Hint" onClick={() => handleClick()} />
}

export default RouletteButton
