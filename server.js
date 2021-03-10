import Koa from 'koa';

const app = new Koa();
let server;

app.use(async (ctx, next) => {
  if (ctx.path === '/healthcheck') {
    console.log('healthcheck');
    ctx.body = 'OK';
    return;
  }

  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path === '/kill') {
    console.log('killing server');
    setImmediate(() => server.close());
    return;
  }

  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path === '/info') {
    console.log('info');
    ctx.body = 'Last updated at: Thu Mar 11 06:51:27 JST 2021';
    return;
  }

  await next();
});

app.use(async (ctx, next) => {
  console.log('returning request headers');
  ctx.body = { ...ctx.request.headers };
});

server = app.listen(3000);
