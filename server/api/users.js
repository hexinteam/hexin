import { Router } from 'express'
import axios from '../../plugins/axios'
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

const baseUrl = 'http://192.168.1.108:80'
/* GET location listing. */
router.get('/location', function (req, res, next) {
  return axios.get(baseUrl + '/api/open/area/list?d=pc&id=2').then((response) => {
    res.json(response.data)
  }).catch((err) => {
    res.json(err.status)
  })
})

/* 点击发送验证码. */
router.post('/sendCode', function (req, res, next) {
  // console.log('Cookies: ', req.cookies)
  // console.log('res', res)
  // console.log('req', req.body)
  // console.log('res', res)
  const body = req.body
  const mobile = body.mobile
  return axios.post(baseUrl + '/api/open/captcha/send?d=iphone', {
    mobile
  }).then((response) => {
    console.log('req: ', req.headers.cookie)
    // console.log('response: ', response.headers['set-cookie'][0].substr(11, 32))
    res.cookie('JSESSIONID', response.headers['set-cookie'][0].substr(11, 32))
    res.json(response.data)
  }).catch((err) => {
    res.json(err.status)
  })
})

/* 验证下一步操作. */
router.get('/nextStep', function (req, res, next) {
  console.log('params', req.query)
  const body = req.query
  const code = body.code
  console.log('JSESSIONID', req.cookies)
  console.log('JSESSIONID', req.headers.cookie)
  return axios.get(baseUrl + '/api/open/captcha/validate?d=iphone', {
    params: {
      code
    },
    headers: {
      'Cookie': `${req.headers.cookie}`
    }
  }).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    res.json(err.status)
  })
})

/* 注册. */
router.post('/register', function (req, res, next) {
  console.log('params', req.body)
  const body = req.body
  const username = body.mobile
  const pass = body.password
  const inviterInfo = body.inviterInfo
  return axios.post(baseUrl + '/api/open/loginOrReg/register?d=iphone', {
    username,
    pass,
    inviterInfo
  }).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    res.json(err.status)
  })
})

/* 登录 */
router.post('/login', function (req, res, next) {
  console.log('params', req.body)
  const body = req.body
  const username = body.mobile
  const pass = body.password
  return axios.post(baseUrl + '/api/open/loginOrReg/login?d=iphone', {
    username,
    pass
  }).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    res.json(err.status)
  })
})

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
