const middleware = {
    error(app,logger){
        app.use(async (ctx,next) =>{
            try{
                await next();
            }catch(e){
                ctx.status= 500;
                ctx.body='there are some thing wrong';
                logger.error(e);
            }
        });
        app.use(async (ctx, next)=>{
            try{
                next();
            }catch(e){
                if(ctx.status !== 404) return;
                ctx.status = 200;
                ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`
            }

        })
    }
}

module.exports = middleware