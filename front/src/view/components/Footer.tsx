import React from 'react'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import { selectHints, selectHintCount } from '../../stores/hintSetterSlice'
import { initialGameInfo, GameInfoType } from '../../util/cookieGameInfoType'
import { generateResultTweetURL } from '../../util/generateTweetButton'
import HintButton from '../components/HintButton'
import Answer from './Answer'
import TweetButton from './TweetButton'

function Footer() {
  const hint_count = useSelector(selectHintCount)
  const hints: string[] = useSelector(selectHints)
  const [cookies, setCookie, removeCookie] = useCookies(['gameInfo'])
  const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo

  return (
    <div id="footer">
      <div className="controll">
        <Answer />
        <div className="buttons">
          <HintButton />
          <TweetButton />
        </div>
      </div>

      <div className="cash">
        <a href="https://github.com/trimscash/element-quiz/">ソースコード/</a>
        <a href="https://twitter.com/trims_cash">@trims_cash</a>
        <span style={{ fontSize: 1 + 'em' }}>←誤り等</span>
      </div>
    </div>
  )
}

export default Footer
