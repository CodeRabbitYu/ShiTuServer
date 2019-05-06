/**
  * Created by Rabbit on 2019/03/11.
  */

 module.exports = () => {
    return async function hasBody(ctx, next) {
        console.log('hasBody');
        const body = ctx.body;
        if (!body || Object.keys(body).length === 0) {
            ctx.body = {
                success: false,
                error: '没有Body!'
            }
            ctx.status = 400;
            return;
        };
        await next();
    }
}