import { DB } from "https://deno.land/x/sqlite/mod.ts";

try {
  Deno.remove("mydb.db")//移除資料庫
} catch (e) {
  console.log('remove fail!')
}
const db = new DB("mydb.db");//新增資料庫
db.query("CREATE TABLE users (user TEXT, pass TEXT)");//查詢
db.query("CREATE TABLE msgs (msg TEXT, user TEXT)");//查詢

db.query(`INSERT INTO users (user, pass) VALUES ('ccc', '123')`);//插入資料
db.query(`INSERT INTO users (user, pass) VALUES ('tim', '321')`);//插入資料

for (const [user,pass] of db.query("SELECT user,pass FROM users"))//印table內容
    console.log(user, pass);

let r = db.query(`SELECT name FROM sqlite_schema WHERE type ='table' AND name NOT LIKE 'sqlite_%'`)//印table名稱
console.log('r=', r)
db.close();

