const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const json = require('koa-json');

const router = require('./router');
router(app);

app.use(cors());
app.use(bodyparser());
app.use(logger());
app.use(json());

app.listen(3000,()=>{
    console.log("server is running at 3000 port");
});