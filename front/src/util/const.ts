import csvIndex from './csvIndex'

const API_URL = 'http://localhost:4000'

const constant = {
  API_URL: API_URL,
  TODAY_HINT_URL: API_URL + '/hint/today',
  TODAY_ANSWER_URL: API_URL + '/answer/today',
  SERVIVAL_HINT_URL: API_URL + '/hint/servival',
  SERVIVAL_ANSWER_URL: API_URL + '/answer/servival',
  HINTS_INDEX: [
    csvIndex.phase_at_rt,
    csvIndex.standard_atomic_weight,
    csvIndex.boiling_point,
    csvIndex.group,
    csvIndex.period,
    csvIndex.atomic_num,
    csvIndex.origin_of_name,
  ],
} as const

export default constant
