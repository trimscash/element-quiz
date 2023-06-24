import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const BalloonCSS = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  &.balloon-enter {
    opacity: 0;
  }
  &.balloon-enter-active {
    transition-duration: 300ms;
    transition-property: opacity;
    opacity: 1;
  }
  &.balloon-exit {
    opacity: 1;
  }
  &.balloon-exit-active {
    transition-duration: 300ms;
    transition-property: opacity;
    opacity: 0;
  }
`

interface BalloonPropType {
  value: string
}

const Balloon = (props: BalloonPropType) => {
  const [inProp, setInProp] = useState(true)
  setTimeout(() => {
    setInProp(false)
  }, 800)
  return (
    <CSSTransition classNames="balloon" in={inProp} timeout={500} unmountOnExit>
      <BalloonCSS key="transition-group-content">{props.value}</BalloonCSS>
    </CSSTransition>
  )
}
export default Balloon
