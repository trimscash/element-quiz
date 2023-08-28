import prisma from './prisma'

export async function get_todays_daily_atom(): Promise<number> {
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  const endOfToday = new Date(startOfToday)
  endOfToday.setDate(startOfToday.getDate() + 1)

  const atom = await prisma.daily_atom.findFirst({
    where: {
      created_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
  })
  return atom?.atomic_num ?? 1
}

export async function get_prev_daily_atom(date: Date): Promise<number> {
  const startOfToday = date
  startOfToday.setHours(0, 0, 0, 0)

  const endOfToday = new Date(startOfToday)
  endOfToday.setDate(startOfToday.getDate() + 1)

  const atom = await prisma.daily_atom.findFirst({
    where: {
      created_at: {
        gte: startOfToday,
        lt: endOfToday,
      },
    },
  })
  return atom?.atomic_num ?? 1
}
