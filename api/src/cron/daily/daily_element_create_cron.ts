import cron from 'node-cron'
import { get_prev_daily_element } from '../../util/get_daily_element'
import { get_random } from '../../util/util'
import CONSTANT from '../../util/constant'
import prisma from '../../util/prisma'

async function update_todays_element() {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterday_element = await get_prev_daily_element(yesterday)
  let todays_element: number
  while (
    (todays_element = get_random(1, CONSTANT.ELEMENTS_NUM)) == yesterday_element
  );

  await prisma.daily_element.create({
    data: { atomic_num: todays_element },
  })
}

cron.schedule(
  '0 0 0 * * *',
  async () => {
    console.log('--- today_element_update_cron ---')
    console.log(new Date())
    await update_todays_element()
    console.log('------------------------------')
  },
  { scheduled: true, timezone: 'Asia/Tokyo' }
)

// cron.schedule('*/2 * * * * *', () => {
//   console.log('--- tes ---')
// })
