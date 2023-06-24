import constant from './const'
import axios from 'axios'
import { AnswerQuery } from './apiQueryType'

async function checkTodayAns(ans: string) {
  const response = await axios
    .get(constant.TODAY_ANSWER_URL, { params: { ans: ans } as AnswerQuery })
    .catch(() => {
      console.log('checkAns Err')
      return { data: { result: 'error' } }
    })

  if (response.data.result == 'correct') {
    console.log(response.data.result)

    return 1
  }
  console.log(response.data.result)

  return 0
}

export default checkTodayAns
