// return ramdom int min~max
export function getRandom(min: number, max: number) {
  return min + Math.floor(Math.random() * (max + 1 - min))
}
