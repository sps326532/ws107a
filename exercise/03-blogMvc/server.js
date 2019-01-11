const V = require('./view')
const M = require('./model')
const logger = require('koa-logger')
const router = require('koa-router')()
const koaBody = require('koa-body')

const Koa = require('koa')
const app = (module.exports = new Koa())

app.use(logger())
app.use(koaBody())

router
  .get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create)

app.use(router.routes())

async function list (ctx) {
  const posts =await M.list()
  ctx.body = await V.list(posts,ctx)
}

async function add (ctx) {
  ctx.body = await V.new(ctx)
}

async function show (ctx) {
  const id = await M.read(ctx.params.id)
  if (!id) ctx.throw(404, 'invalid post id')
  ctx.body = await V.show(id, ctx)
}

async function create (ctx) {
  const post = ctx.request.body
  M.add(post)
  ctx.redirect('/')
}
app.stop = async function () {
  await M.stop()
}

app.start = async function () {
  await M.start()
  if (!module.parent) app.listen(3000)
  console.log('Server run at http://localhost:3000')
}

app.start()