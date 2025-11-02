import { Router } from "express";
import tareasRoutes from "./tareas.routes.js";

const router = Router();
    // http://localhost:3000/api/productos
router.use('/tarea', tareasRoutes)

export default router;