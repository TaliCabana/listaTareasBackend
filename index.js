import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server()

// agregar rutas
// http://localhost:3000/api/tareas
server.app.use('/api',router) // router del index

server.listen()