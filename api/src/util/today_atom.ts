import { get_random } from './util'
import CONSTANT from './constant'

let now_date = 0//new Date().getDate()
let today_atom = get_random(1, CONSTANT.ELEMENTS_NUM)
let yesterday_atom = 1

setInterval(() => {
  const date = new Date().getDate()
  if (date != now_date) {
    yesterday_atom = today_atom
    while (
      (today_atom = get_random(1, CONSTANT.ELEMENTS_NUM)) == yesterday_atom
    );
    now_date = date
  }
  console.log("----------------")
  console.log(new Date())
  console.log(today_atom)
  console.log("----------------")
}, 1000 * 60)

export default today_atom
