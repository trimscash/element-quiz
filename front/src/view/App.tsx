import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hint from './components/Hint'
import { useSelector } from 'react-redux'
import { selectHints, selectHintCount } from '../stores/hintGetterSlice'

function App() {
  const hint_count = useSelector(selectHintCount)
  const hint_jsx_list = []

  for (let h = 0; h < hint_count; h++) {
    hint_jsx_list.push(<Hint hint_index={h} />)
  }
  return (
    <div>
      <Header />
      <div id="main">
        <h2 id="counter">{hint_count} 回目</h2>
        <h1 className="hints">
          {hint_jsx_list}
          <br />
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
