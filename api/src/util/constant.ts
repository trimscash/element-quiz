import fs from 'fs'
import { parse } from 'csv-parse/sync'

const data = fs.readFileSync('./resource/elements.csv')

const CONSTANT = {
  RECORDS: parse(data),
  ELEMENTS_NUM: 118,
  CSV_ROW_NUM: 14,
  OUT_OF_INDEX: 'out_of_index',
  SUCCESS: 'success',
  FAILED: 'failed',
  CSV_HEADERS: {
    atomic_num: 0,
    symbol: 1,
    name: 2,
    origin_of_name: 3,
    group: 4,
    period: 5,
    block: 6,
    standard_atomic_weight: 7,
    density: 8,
    melting_point: 9,
    boiling_point: 10,
    abundance_in_crust: 11,
    origin: 12,
    phase_at_rt: 13,
  },
} as const

export default CONSTANT
