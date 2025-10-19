import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "./dbconfig" from "mongoose";

// 1- Toma un puerto
// 2- Configura los middlewares
// 3- Usa las rutas

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middlewares();
  }
  middlewares() {
    this.app.use(cors()); // permite conexiones remotas
    this.app.use(morgan("dev")); // permite interpretar los datos que llegan en la solicitud
    this.app.use(express.json()); // permite interpretar datos que lleguen en la solicitud en formato json
    // Configurar el archivo estatico (carpeta publica)
    const __dirname = dirname(fileURLToPath(import.meta.url));
    console.log(__dirname);
    console.log(__dirname + "../../public");
    this.app.use(express.static(__dirname + "/../../public"));
  }
  listen() {
    this.app.listen(this.port, () =>
      console.log(
        `El servidor está ejecutando en: http://localhost:${this.port}`
      )
    );
  }
}
