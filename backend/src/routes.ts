import { Router } from 'express';

import SurveysController from './controllers/SurveysController';
import UserController from './controllers/UserController';
import SendMailController from './controllers/SendMailController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const surveysUsersController = new SendMailController();

router.post('/users', userController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);
router.post('/surveys', surveysController.create);

router.post('/send-mail', surveysUsersController.execute);

export default router;