import express from 'express'
import session from 'express-session'
import { get_todays_daily_element } from './util/get_daily_element'
import answer from './route/answer'
import hint from './route/hint'
import './cron/daily/daily_element_create_cron'

const app = express()
const port = 4000

app.use(
  session({
    secret: Math.random().toString(36).slice(-8),
    name: 'session',
    resave: false,
    rolling: true,
    saveUninitialized: true,
    cookie: {
      path: '/',
      httpOnly: true,
      // secure: true,
      maxAge: 180 * 1000,
      // sameSite: 'none',
    },
  })
)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// app.use(
//   session({
//     secret: Math.random().toString(36).slice(-8),
//     name: 'a', // default: connect.sid
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       path: '/', // default
//       httpOnly: true, // default
//       maxAge: 180 * 1000, // 10sec
//     },
//   })
// )

// get today's element
app.get('/', async (req, res) => {
  console.log('aaa')
  res.send('{"todays_element": "' + (await get_todays_daily_element()) + '"}')
})

app.use('/answer', answer)
app.use('/hint', hint)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
