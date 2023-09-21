import React from 'react'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import { selectHints, selectHintCount } from '../../stores/hintSetterSlice'
import { initialGameInfo, GameInfoType } from '../../util/cookieGameInfoType'
import { generateResultTweetURL } from '../../util/generateTweetButton'

function TweetButton() {
  const hint_count = useSelector(selectHintCount)
  const hints: string[] = useSelector(selectHints)
  const [cookies, setCookie, removeCookie] = useCookies(['gameInfo'])
  const gameInfoObj: GameInfoType = cookies.gameInfo ?? initialGameInfo

  return (
    <a id="tweetButton" href={generateResultTweetURL(gameInfoObj)}>
      <img className="tweetButtonImage" src="./circleTweet.png" />
    </a>
  )
}

export default TweetButton
