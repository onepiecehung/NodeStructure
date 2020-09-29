import { Router } from 'express';
const router = new Router();
import * as UserController from "../controllers/user.controller";


// authen
// multer
// validation
// service

router.route("/test")
    .get(
        // Authentication,
        UserController.test
    )

export default router;
