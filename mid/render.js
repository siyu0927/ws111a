export function layout(date, content) {
    return `
    <html>
    <head>
      <title>${date}</title>
      <style>
        body {
          padding: 80px;
          font: 16px Helvetica, Arial;
          text-align: center;
          background-color: antiquewhite
        }
    
        h1 {
          font-size: 2em;
          text-align: center;
        }
    
        h2 {
          font-size: 1.2em;
          text-align: center;
        }
    
        #posts {
          margin: 0;
          padding: 0;
          text-align: center;
        }
    
        #posts li {
          margin: 40px 0;
          padding: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          list-style: none;
          text-align: center;
        }
    
        #posts li:last-child {
          border-bottom: none;
          text-align: center;
        }
    
        textarea {
          width: 500px;
          height: 300px;
          text-align: center;
        }
    
        /*input[type=text],
        textarea {
          border: 1px solid #eee;
          border-top-color: #ddd;
          border-left-color: #ddd;
          border-radius: 2px;
          padding: 15px;
          font-size: .8em;
          text-align: center;
        }*/
    
 
      </style>
    </head>
    <body>
      <section id="content">
        ${content}
      </section>
    </body>
    </html>
    `
  }
  
  export function list(posts) {
    let list = []
    for (let post of posts) {
      list.push(`
      <li>
        <h2>${ post.title }</h2>
        <p><a href="/post/${post.id}">閱讀貼文</a></p>
      </li>
      `)
    }
    let content = `
    <h1>部落格系統</h1>
    <button style="position:absolute; top:80px;right:80px;"><a href="/login/log">登入</a></button>
    <button style="position:absolute; top:80px;right:140px;"><a href="/login/create">註冊</a></button><br>
    <h2>你有 <strong>${posts.length}</strong> 篇貼文!</h2>
    <p><a href="/post/new">新增貼文</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `
    return layout('Posts', content)
  }
  
  export function newPost() {
    return layout('New Post', `
    <h1>新增貼文</h1>
    <p>建立新貼文.</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="標題" name="title"></p>
      <p><textarea placeholder="內容" name="body"></textarea></p>
      <p><input type="submit" value="新增"></p>
    </form>
    `)
  }
  
  export function login(){
    return layout('New Post',`
    <h1>登入</h1>
      <label>帳號:</label>
      <input type="text" placeholder="帳號"><br><br>
      <label>密碼:</label>
      <input type="password" placeholder="密碼"><br><br>
      <input type="submit" value="送出">
    `)
  }


  export function logcreate(){
    return layout('New Post',`
    <h1>註冊</h1>
    <label>信箱:</label>
    <input type="email" placeholder="信箱"><br><br>
    <label>帳號:</label>
    <input type="text" placeholder="帳號"><br><br>
    <label>密碼:</label>
    <input type="password" placeholder="密碼"><br><br>
    <input type="submit" value="送出">
    `)
  }

  export function show(post) {
    return layout(post.title, `
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    `)
  }