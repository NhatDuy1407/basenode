import { Router, Request, Response } from 'express';
import { HomeController } from './controllers/homeController';
const router: Router = Router();

router.get("/", (homeController: HomeController, req: Request, res: Response) => {
    homeController.index(req, res);
});

// Define the about route
router.get('/me', (homeController: HomeController, req: Request, res: Response) => {
    homeController.index(req, res);
});


export default router;