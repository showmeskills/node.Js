const signinTpl = require("./views/signin.art");
const indexTpl = require("./views/index.art");

import SMERouter from 'sme-router'
 
const router = new SMERouter('root')
 
const htmlSiginTpl = signinTpl();
const htmlindexTpl = indexTpl();
// route config
router.route('/signin', (req, res, next) => {
    res.render(htmlSiginTpl)
})


router.route('/', (req, res, next) => {
    res.render(htmlindexTpl)
})


export default router;
 

