import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as home from './home.js'

const router = new Router();

router.get('/', first)
  .get('/login', login)
  .post('/login',jump);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function first(ctx) {
    ctx.response.body = await home.first();
  }

async function login(ctx) {
    ctx.response.body = await home.login();
  }


async function jump(ctx){
    ctx.response.redirect('/login'); 
}


console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 })