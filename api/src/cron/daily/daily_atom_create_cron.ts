import cron from 'node-cron'
import { get_prev_daily_atom } from '../../util/get_daily_atom'
import { get_random } from '../../util/util'
import CONSTANT from '../../util/constant'
import prisma from '../../util/prisma'

async function update_todays_atom() {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterday_atom = await get_prev_daily_atom(yesterday)
  let todays_atom: number
  while (
    (todays_atom = get_random(1, CONSTANT.ELEMENTS_NUM)) == yesterday_atom
  );

  await prisma.daily_atom.create({
    data: { atomic_num: todays_atom },
  })
}

cron.schedule('0 0 0 * * *', async () => {
  console.log('--- today_atom_update_cron ---')
  console.log(new Date())
  await update_todays_atom()
  console.log('------------------------------')
})

// cron.schedule('*/2 * * * * *', () => {
//   console.log('--- tes ---')
// })
