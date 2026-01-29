import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import PositionController from '../controllers/positionController.js';
import EmployeeController from '../controllers/employeeController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/positions', PositionController.index);
router.get('/positions/:id', PositionController.show);
router.post('/positions', PositionController.store);
router.put('/positions/:id', PositionController.update);
router.delete('/positions/:id', PositionController.destroy);

router.get('/employees', EmployeeController.index);
router.get('/employees/:id', EmployeeController.show);
router.post('/employees', EmployeeController.store);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.destroy);

export default router
