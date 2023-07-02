import { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { setIsCorrectModalClose } from '../../stores/ansResulterSlice'
import { AppDispatch } from '../../stores/store'

const customStyles = {
  content: {
    top: '20%',
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
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Modal
      closeTimeoutMS={1000}
      isOpen={props.isOpen}
      onRequestClose={() =>
        dispatch(setIsCorrectModalClose({ isCorrectModalClose: true }))
      }
      style={customStyles}
    >
      Correct!
    </Modal>
  )
}

export default CorrectModal
