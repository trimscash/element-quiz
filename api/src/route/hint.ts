import express from 'express'
import get_hint from '../util/get_hint'
import CONSTANT from '../util/constant'
import today_atom from '../util/today_atom'

const router = express.Router()

interface HintType {
  hint: string
  hint_index: number
  state: string
}

const FAILED_RESP: HintType = {
  hint: '',
  hint_index: 0,
  state: '',
} as const

router.get('/today/', (req, res) => {
  const atom_num = today_atom
  const hint_index = Number(req.query.hint_index)
  console.log(hint_index)
  let resp: HintType

  const hint = get_hint(atom_num, hint_index)
  if (hint != CONSTANT.OUT_OF_INDEX) {
    resp = {
      hint: hint,
      hint_index: hint_index,
      state: CONSTANT.SUCCESS,
    }
    res.send(resp)
    return
  }

  res.status(404).send(FAILED_RESP)
  return
})

router.get('/servival/', (req, res) => {
  const atom_num = 0 //Number(req.params.atom_num)
  const hint_index = Number(req.query.hint_index)
  let resp: HintType

  const hint = get_hint(atom_num, hint_index)
  if (hint != CONSTANT.OUT_OF_INDEX) {
    resp = {
      hint: hint,
      hint_index: hint_index,
      state: CONSTANT.SUCCESS,
    }
    res.send(resp)
    return
  }

  res.status(404).send(FAILED_RESP)
  return
})

export default router
