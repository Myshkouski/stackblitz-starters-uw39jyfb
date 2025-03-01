import { createServer } from "node:http"
import { toNodeListener } from "h3"
import { app } from "./app.mjs"

const listener = toNodeListener(app);

const server = createServer(listener);

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
