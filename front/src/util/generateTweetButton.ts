import constants from './const'
import { GameInfoType } from './cookieGameInfoType'
import csvHeaders from './csvHeaders'
import { getRandom } from './util'

function limitStringNum(str: string, limit: number) {
  return str.slice(0, limit)
}

export function generateResultTweetURL(gameInfo: GameInfoType) {
  const hintNum = getRandom(0, gameInfo.hintNum - 1)
  const hintText =
    gameInfo.hintNum == 0
      ? ''
      : "Today's Elemental Hint (" +
          csvHeaders[constants.HINTS_INDEX[hintNum]] +
          '): ' +
          gameInfo.hints[hintNum]?.hint ?? ''

  const context = `Played Today's Element Quiz! #ElementQuiz

Opened Hints Num: ${gameInfo.hintNum}
Wrong Num: ${gameInfo.incorrectedNum}

${hintText}

`
  console.log(context)
  const tweetLimit = 270
  const URL = encodeURIComponent(process.env.REACT_APP_API_URL ?? '')
  const encoded = encodeURIComponent(
    limitStringNum(context, tweetLimit - URL.length - 3)
  )
  const encodedURL =
    'https://twitter.com/intent/tweet?&text=' +
    encoded +
    (context.length > tweetLimit - URL.length - 3
      ? encodeURIComponent('...\n')
      : '') +
    '&url=' +
    URL
  return encodedURL
}
