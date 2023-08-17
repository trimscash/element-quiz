import CONSTANT from './constant'

export default function get_ans(atom_num: number): string {
  const ans_index = CONSTANT.CSV_HEADERS.symbol
  if (0 < atom_num && atom_num <= CONSTANT.ELEMENTS_NUM) {
    return CONSTANT.RECORDS[atom_num][ans_index]
  }
  return CONSTANT.OUT_OF_INDEX
}
