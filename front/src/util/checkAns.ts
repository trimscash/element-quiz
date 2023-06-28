import constant from './const'
import axios from 'axios'
import { AnswerQuery } from './apiQueryType'

async function checkTodayAns(ans: string): Promise<boolean> {
  const response = await axios
    .get(constant.TODAY_ANSWER_URL, { params: { ans: ans } as AnswerQuery })
    .catch(() => {
      console.log('checkAns Err')
      return { data: { result: 'error' } }
    })

  if (response.data.result == 'correct') {
    console.log(response.data.result)

    return true
  }
  console.log(response.data.result)

  return false
}

export default checkTodayAns
