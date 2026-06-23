import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { initSocketIO } from './src/server/socket-handler';
import { initDatabase } from './src/server/db';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // 初始化数据库
  initDatabase();

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // 初始化 Socket.IO
  initSocketIO(server);

  server.listen(port, () => {
    console.log(`> 服务器已启动: http://${hostname}:${port}`);
    console.log(`> 环境: ${dev ? '开发' : '生产'}`);
  });
});
