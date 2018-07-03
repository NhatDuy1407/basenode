import { Router, Request, Response } from 'express';
import container from "../config/iocConfig";
import { HomeController } from './controllers/homeController';
import { CONTROLLER_IDENTIFIER } from '../constants';
const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    let homeController =  container.get<HomeController>(CONTROLLER_IDENTIFIER.HomeController)
    homeController.index(req, res);
});

// Define the about route
router.get('/me', (req: Request, res: Response) => {
    let homeController =  container.get<HomeController>(CONTROLLER_IDENTIFIER.HomeController)
    homeController.index(req, res);
});

export default router;