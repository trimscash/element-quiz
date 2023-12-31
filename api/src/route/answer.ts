import express from 'express'
import get_ans from '../util/get_ans'
import { get_todays_daily_element } from '../util/get_daily_element'
import CONSTANT from '../util/constant'
const router = express.Router()

interface ResultType {
  result: string
  answer: string
  state: string
}

const FAILED_RESP: ResultType = {
  result: '',
  answer: '',
  state: CONSTANT.FAILED,
} as const

router.get('/daily/', async (req, res) => {
  const element_num = await get_todays_daily_element()
  const player_ans = req.query.ans || ''
  let resp: ResultType

  const ans = get_ans(element_num)

  if (ans != CONSTANT.OUT_OF_INDEX) {
    if (ans == player_ans) {
      resp = {
        result: 'correct',
        answer: ans,
        state: CONSTANT.SUCCESS,
      }
      res.send(resp)
      return
    } else {
      resp = {
        result: 'incorrect',
        answer: '',
        state: CONSTANT.SUCCESS,
      }
      res.send(resp)
      return
    }
  }

  res.status(404).send(JSON.stringify(FAILED_RESP))
  return
})

router.get('/servival/', (req, res) => {
  const element_num = 0 //Number(req.params.element_num)
  const player_ans = req.query.ans || ''
  let resp: ResultType

  const ans = get_ans(element_num)

  if (ans != CONSTANT.OUT_OF_INDEX) {
    if (ans == player_ans) {
      resp = {
        result: 'correct',
        answer: ans,
        state: CONSTANT.SUCCESS,
      }
      res.send(resp)
      return
    } else {
      resp = {
        result: 'incorrect',
        answer: '',
        state: CONSTANT.SUCCESS,
      }
      res.send(resp)
      return
    }
  }

  res.status(404).send(FAILED_RESP)
  return
})

export default router
