import axios from 'axios'
import { AnswerQuery } from './apiQueryType'
import constant from './const'

export async function checkDailyAns(ans: string): Promise<boolean> {
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
