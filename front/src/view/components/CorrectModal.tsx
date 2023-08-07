import { useState } from 'react'
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

const contentStyles: CSS.Properties = {
  // textAlign: 'center',
}

type CorrectModalPropType = {
  isOpen: boolean
}

function CorrectModal(props: CorrectModalPropType) {
  const hint_count = useSelector(selectHintCount)
  const incorrectNum = useSelector(selectAnsIncorrectNum)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Modal
      closeTimeoutMS={1000}
      isOpen={props.isOpen}
      onRequestClose={() =>
        dispatch(setIsCorrectModalClose({ isCorrectModalClose: true }))
      }
      style={modalStyles}
    >
      <div style={contentStyles}>
        <h1>Correct!</h1>
        <div className="ans">{'a'}</div>
        {/* <div id="status-area" style={contentStyles}> */}
        <h2 id="hint-counter">hints: {hint_count}</h2>
        <h2 id="incorrect-counter">incorrct: {incorrectNum}</h2>
        {/* </div> */}
      </div>
    </Modal>
  )
}

export default CorrectModal
