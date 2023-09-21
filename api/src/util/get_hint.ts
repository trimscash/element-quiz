import CONSTANT from './constant'

export default function get_hint(
  atomic_num: number,
  hint_index: number
): string {
  if (0 < atomic_num && atomic_num <= CONSTANT.ELEMENTS_NUM) {
    if (0 <= hint_index && hint_index <= CONSTANT.CSV_ROW_NUM) {
      return CONSTANT.RECORDS[atomic_num][hint_index]
    }
  }
  return CONSTANT.OUT_OF_INDEX
}
