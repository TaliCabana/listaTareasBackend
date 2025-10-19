import { Router } from "express";
import prueba, { crearProducto } from "../controllers/productos.controllers.js";

/* 
GET
PAST
PATHH
PUT
DELETE
*/

const router = Router();

router.route("/test").get(prueba)
router.route("/").post(crearProducto)

export default router;
