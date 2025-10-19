import { Router } from "express";
import prueba, { borrarProductoPorId, crearProducto, editarProductoPorId, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

/* 
GET
PAST
PATHH
PUT
DELETE
*/

const router = Router();

router.route("/test").get(prueba)
router.route("/").post(crearProducto).get(listarProductos) 
router.route(":id").get(obtenerProducto).delete(borrarProductoPorId).put(editarProductoPorId)

export default router;
