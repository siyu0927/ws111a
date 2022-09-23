import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
  return `<html>
  <head>
  <style>
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
  console.log('ctx.request.url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname.startsWith("/login")) {
    ctx.response.body = page(`
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=0, initial-scale=1.0">
    <title>Document</title>
    <style>
        .center{
            padding-top: 100px;
            text-align: center;
            font-size: 20px;
        }
        body{
            background-color: antiquewhite;
        }
 
       
    </style>
</head>
<body>
    <div class="center">
    <h2>登入表單</h2>
    <form action="" method="post">
        <input type="text" name="user"  placeholder="User Name" /><br><br>
        <input type="password" name="password"  placeholder="Password"/><br><br>
        <button type="button">submit</button>
      </form>
    </div>
</body>
</html>
    `)
  } else {
    ctx.response.body = page(`
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HOME page</title>
        <style>
            table,tr,td,th
            {
                border: 2px solid black;
                border-collapse: collapse;
            }  
            .center{
                text-align: center;
            }    
        </style>
    </head>
    <body style="background-color: antiquewhite;">
        <div class="center">
        <b>
        <h1>主頁</h1>
        <p>不知道要放甚麼就把網頁設計做的弄過來了</p>
        <img src="https://i.imgur.com/SnPHBQX.jpg" width="20%" height="20%" alt="出不來"  >
        <p>圖不知道為甚麼出不來</p>
        <p>生日:91/09/27</p>
        <a href="https://www.instagram.com/siyu0927/">ig連結</a><br>
        <table align="center" cellpadding="8" ><br>
            <caption>求學過程</caption>
            <tr>
                <th>幼稚園</th>
                <th>國小</th>
                <th>國中</th>
                <th>高中</th>
                <th>大學</th>
            </tr>
            <tr>
                <td>四季幼稚園</td>
                <td>文心國小</td>
                <td>崇德國中</td>
                <td>東海大學附屬高中</td>
                <td>金門大學資訊工程學系</td>
            </tr>
        </table>
    </body>
</html>`)
  }
  // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
});

console.log('start at : http://127.0.0.1:8002')
await app.listen({ port: 8002 });
