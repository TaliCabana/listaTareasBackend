import { Router } from "express";
import prueba, { borrarTareaPorId, crearTarea, editarTareaPorId, listarTareas, obtenerTarea } from "../controllers/tareas.controllers.js";

/* 
GET
PAST
PATHH
PUT
DELETE
*/

const router = Router();

router.route("/test").get(prueba)
router.route("/").post(crearTarea).get(listarTareas) 
router.route("/:id").get(obtenerTarea).delete(borrarTareaPorId).put(editarTareaPorId)

export default router;
