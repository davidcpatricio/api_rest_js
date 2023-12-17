import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> List all users -> GET
store/create -> Create a new user -> POST
delete -> Delete a user -> DELETE
show -> Show a user -> GET
update -> Update a user -> PATCH or PUT
*/
