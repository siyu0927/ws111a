import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";//套件插入
import { DB } from "https://deno.land/x/sqlite/mod.ts";//套件插入

const db = new DB("mydb.db");//建資料庫
const app = new Application()
const router = new Router()

router.get('/', home)
.get('/sqlcmd/:cmd', sqlcmd)
.get('/(.*)', pub)

app.use(router.routes())
app.use(router.allowedMethods())

async function home(ctx) {
    await send(ctx, ctx.request.url.pathname,
        {
            root: `${ Deno.cwd() }/`,
            index: "index.html"
        });

}

async function pub(ctx) {
  console.log(ctx.request.url.pathname)
  await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/`,
      index: "index.html",
  })
}

async function sqlcmd(ctx) {
  let cmd = ctx.params['cmd']
  console.log('cmd=', cmd)
  let result = db.query(cmd)
  console.log('result=', result)
  ctx.response.type = 'application/json'
  ctx.response.body = result
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 })
