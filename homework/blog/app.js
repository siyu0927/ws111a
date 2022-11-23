import { Application, Router } from "https://deno.land/x/oak/mod.ts";


const router = new Router();

let notes = [
    {id:'0',title:'aaa',body:'aaaaa'},
    {id:'1',title:'bbb',body:'bbbbb'}
]

function getNote(ctx){
    //console.log("id=",ctx.params.id)debug用
    let id=parseInt(ctx.params.id)//把id轉成int形式
    let {title, body} = notes[id]
   ctx.response.type = 'text/html'
   ctx.response.body = `
    <h1>${title}</h1>
    <p>${body}</p>
   `
}

function listNotes(ctx){

    let lines=[]
    lines.push(`
    <h1>Posts</h1>
    <p>You have <strong>${notes.length}</strong> posts!</p>
    <p><a href="/add">Create a Post</a></p>
    `)
    for(let note of notes){
        lines.push(`
        <li>${note.title}</li>
        <p><a href="/note/${note.id}">Read Note</a><p>`)
    }
    ctx.response.type='text/html'
    ctx.response.body=lines.join('\n')
    
}

function add(ctx){
   let lines=[]
   lines.push(`
   <h1>New Post</h1>
   <p>Create a new post.</p>
   <form action="/new" method="post">
     <p><input type="text" placeholder="Title" name="title"></p>
     <p><textarea placeholder="Contents" name="body"></textarea></p>
     <p><input type="submit" value="Create"></p>
   </form>
   `)
   ctx.response.type='text/html'
   ctx.response.body=lines.join('\n')
}

async function create(ctx){
    const body = ctx.request.body()
    if (body.type === "form") {
      const pairs = await body.value
      const post = {}
      for (const [key, value] of pairs) {
        post[key] = value
      }
      console.log('post=', post)
      const id = notes.push(post) - 1;
      post.id = id;
      ctx.response.redirect('/');
    }
}


  router.get("/",listNotes)//列貼文
        .get("/note/:id", getNote)//取得貼文
        .get("/add",add)
        .post("/new",create)
        

  

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
