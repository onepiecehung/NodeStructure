import { Router } from 'express';

const router = new Router();
import { detect } from 'detect-browser';
import { getIP, getClientIp } from "../../util/help";


import UserRouter from "../user.routes";

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    var browser = detect(req.headers['user-agent']);
    if (browser) {
        browser = `${browser.name}, version: ${browser.version}, os: ${browser.os}, type: ${browser.type}` + `${browser.bot ? (", bot: ") + browser : "".random}`
    } else {
        browser = req.headers['user-agent']
    }
    // console.log(getClientIp());
    console.log(`[API]`.magenta.bold + ` Time request: ${new Date().toLocaleString()} by ${browser.cyan} from IP: ${getClientIp() ? getClientIp() + " - " + (getIP(req)) : getIP(req)}, `)
    next()
})



router.use('/user', UserRouter);

router.get('/', function (req, res) {
    res.send('Welcome to our API!');
});

// TODO api document
// app.use('/documents', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// router.use('/documents', swaggerUI.serve);
// router.get('/documents', swaggerUI.setup(swaggerSpec));


export default router;
