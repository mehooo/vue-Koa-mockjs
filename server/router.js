const router = require('koa-router')();
const KoaTest = require('./controller/koa-test');

module.exports = (app) => {
    router.get( '/koa-test', KoaTest.test );

    app.use(router.routes())
        .use(router.allowedMethods())
};