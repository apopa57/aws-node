import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path === '/healthcheck') {
    ctx.body = 'OK';
    return;
  }

  await next();
});

app.use(async (ctx, next) => {
  ctx.body = { ...ctx.request.headers };
});

app.listen(3000);
