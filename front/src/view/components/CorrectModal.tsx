import { useState } from 'react'
import { useCookies } from 'react-cookie'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import * as CSS from 'csstype'
import {
  selectHasCorrected,
  selectAnsIncorrectNum,
  setIsCorrectModalClose,
} from '../../stores/ansResulterSlice'
import { selectErrors } from '../../stores/errorCollector'
import { selectHintCount } from '../../stores/hintSetterSlice'
import { AppDispatch } from '../../stores/store'
import {
  GameInfoType,
  HintType,
  initialGameInfo,
} from '../../util/cookieGameInfoType'
import TweetButton from './TweetButton'

const modalStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '40%',
    transition: 'opacity 2000ms ease-in-out',
  },
}

type CorrectModalPropType = {
  isOpen: boolean
}

function CorrectModal(props: CorrectModalPropType) {
  const hint_count = useSelector(selectHintCount)
  const incorrectNum = useSelector(selectAnsIncorrectNum)
  const dispatch = useDispatch<AppDispatch>()
  const [cookies, setCookie, removeCookie] = useCookies(['gameInfo'])
  const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo

  return (
    <Modal
      closeTimeoutMS={1000}
      isOpen={props.isOpen}
      onRequestClose={() =>
        dispatch(setIsCorrectModalClose({ isCorrectModalClose: true }))
      }
      style={modalStyles}
    >
      <div>
        <h1>Correct!</h1>
        <div>
          <div className="ans">{gameInfoObj.answer}</div>
        </div>
        <div id="status-area">
          <h2 id="hint-counter">hints: {hint_count}</h2>
          <h2 id="incorrect-counter">incorrct: {incorrectNum}</h2>
        </div>
        <TweetButton />
      </div>
    </Modal>
  )
}

export default CorrectModal
