import { Router } from 'express';
import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Should not exist
router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;
