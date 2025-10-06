import express from 'express';

// 1- Toma un puerto
// 2- Configura los midd
// 3- Usa las rutas

class Server {
    constructor() {
        this.app = express ()
        this.port = process.env.PORT || 3001
    }

}