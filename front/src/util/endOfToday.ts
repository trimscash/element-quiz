export const endOfToday = new Date()
endOfToday.setUTCHours(0, 0, 0, 0)
endOfToday.setUTCDate(endOfToday.getDate() + 1)
