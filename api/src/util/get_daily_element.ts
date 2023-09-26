import prisma from './prisma'

export async function get_todays_daily_element(): Promise<number> {
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  const endOfToday = new Date(startOfToday)
  endOfToday.setDate(startOfToday.getDate() + 1)

  const element = await prisma.daily_element.findFirst({
    where: {
      created_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
  })
  return element?.atomic_num ?? 1
}

export async function get_prev_daily_element(date: Date): Promise<number> {
  const startOfToday = date
  startOfToday.setHours(0, 0, 0, 0)

  const endOfToday = new Date(startOfToday)
  endOfToday.setDate(startOfToday.getDate() + 1)

  const element = await prisma.daily_element.findFirst({
    where: {
      created_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
  })
  return element?.atomic_num ?? 1
}
