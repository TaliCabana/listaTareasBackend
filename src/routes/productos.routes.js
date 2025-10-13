import { Router } from 'express';

/* 
GET
PAST
PATHH
PUT
DELETE
*/

const router = Router();

router.route('/').get((req, res) => {
    console.log("Desde el controlador de prueba");
});

export default router;