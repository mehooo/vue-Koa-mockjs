var Mock = require('mockjs'); //引入mockjs
const Random = Mock.Random;  //引入mockjs生成随机属性的函数 random具体可以生成

module.exports = {
    test: async(ctx, next) => {
        ctx.response.body = `Koa（${Random.csentence(5, 30)}）`;
        // ctx.response.body = Random.cname()
    },
}