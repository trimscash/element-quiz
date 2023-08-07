import axios from 'axios'
import { HintQuery } from '../util/apiQueryType'
import { HintResponseType } from './apiResponseType'
import constant from './const'

async function fetchTodayHint(hintNum: number) {
  const response = await axios.get(constant.TODAY_HINT_URL, {
    withCredentials: true,
    params: { hint_index: hintNum } as HintQuery,
  })
  return response.data as HintResponseType
}

export default fetchTodayHint
