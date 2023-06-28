import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const BalloonCSS = styled.div`
  z-index: 40000;
  margin: 0.2vh;
  position: relative;
  color: #fff;
  padding: 0 1.5vw;
  width: 10em;
  height: 4vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 5px;
  opacity: 0.9;
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
    transition-duration: 500ms;
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
  }, 1000)
  return (
    <CSSTransition classNames="balloon" in={inProp} timeout={200} unmountOnExit>
      <BalloonCSS key="transition-group-content">{props.value}</BalloonCSS>
    </CSSTransition>
  )
}
export default Balloon
