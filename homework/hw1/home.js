export function first() {
    return `
<html lang="en">
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
    <body style="background-color:antiquewhite;">
        <div class="center">
        <b>
        <h1>主頁</h1>
        <h2>登入在下一行</h2>
        <form action="/login" method="jump">
        <input type="submit" value="登入"></form>
        <br><br>
        <img src="照片.JPG" width="20%" height="20%" alt="出不來"  >
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
        <h2>高中經歷</h2>
        <img src="https://i.imgur.com/fvWE038.jpg" alt="出不來" width="20%" height="20%">
        <p>加入熱音社,並在二年級當上器材長,高中三年參加,舉辦,表演過將近15場</p>
        <img src="https://i.imgur.com/mG0WMrY.jpg"  alt="出不來" width="20%" height="20%">
        <p>參加糾察隊,在二年級時當上統計長,三年以來協助學校舉辦各項活動,並在每天上放學時間維持交通順暢</p>
        <h2>大學經歷</h2>
        <img src="https://i.imgur.com/RAbxdzI.jpg"  alt="出不來" width="40%" height="40%">
        <p>大一上以校隊女排球經身分回本島比110 排球大專盃</p>
        <p>現在是校隊男排球經及系排球隊球經</p></b>
        </div>
    </body>
</html>`

}
        
export function login() {
    return `
<html lang="en">
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
    <form action="/" method="jumpp">
        <input type="text" name="user"  placeholder="User Name" /><br><br>
        <input type="password" name="password"  placeholder="Password"/><br><br>
        <button type="button">submit</button>
      </form>
    </div>
</body>
</html>`
}