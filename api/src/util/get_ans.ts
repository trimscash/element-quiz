import CONSTANT from './constant'

export default function get_ans(element_num: number): string {
  const ans_index = CONSTANT.CSV_HEADERS.symbol
  if (0 < element_num && element_num <= CONSTANT.ELEMENTS_NUM) {
    return CONSTANT.RECORDS[element_num][ans_index]
  }
  return CONSTANT.OUT_OF_INDEX
}
