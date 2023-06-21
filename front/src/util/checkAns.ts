import constant from './const'
import axios from 'axios'

async function checkAns(element: number, ans: string) {
  const response: any = await axios
    .get(constant.API_URL + '/' + element + '/answer/' + ans)
    .catch(() => {
      console.log('checkAns Err')
      return { data: { result: 'error' } }
    })

  if (response.data.result == 'correct') {
    console.log(response.data.result)

    return 1
  }
  console.log(response.data.result)

  return 0
}

export default checkAns
