import React from 'react'
import { useSelector } from 'react-redux'
import { selectHints, selectHintCount } from '../../stores/hintSetterSlice'
import HintButton from '../components/HintButton'
import Answer from './Answer'

function updateTweetURL(result: string, count: number) {
  const text1 = encodeURI(result + '\n')
  const text2 = encodeURI(
    '\n' + count + ' 回 あけおめルーレットをまわしました\n'
  )
  const hashtag = encodeURI('あけおめルーレット')
  const url = encodeURI('trimscash.github.io/akeome')
  const encodedURL =
    'https://twitter.com/intent/tweet?&text=' +
    text1 +
    '%20%23' +
    hashtag +
    '%20' +
    text2 +
    '&url=' +
    url
  return encodedURL
}

function Footer() {
  const hint_count = useSelector(selectHintCount)
  const hints: string[] = useSelector(selectHints)

  return (
    <div id="footer">
      <div className="controll">
        <Answer />
        <div className="buttons">
          <HintButton />
          <a id="tweetButton" href={updateTweetURL(hints[0], hint_count)}>
            <img className="tweetButtonImage" src="./circleTweet.png" />
          </a>
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
