// return ramdom int min~max
export function get_random(min: number, max: number) {
  return min + Math.floor(Math.random() * (max + 1 - min))
}
