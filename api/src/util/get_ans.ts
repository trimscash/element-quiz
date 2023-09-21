import CONSTANT from './constant'

export default function get_ans(atomic_num: number): string {
  const ans_index = CONSTANT.CSV_HEADERS.symbol
  if (0 < atomic_num && atomic_num <= CONSTANT.ELEMENTS_NUM) {
    return CONSTANT.RECORDS[atomic_num][ans_index]
  }
  return CONSTANT.OUT_OF_INDEX
}
