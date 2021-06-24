
const htmlSiginTpl = signinTpl();
const htmlindexTpl = indexTpl();
const signinTpl = require("./views/signin.art");
const indexTpl = require("./views/index.art");
class Controllers {
    signin (req, res, next){
        res.render(htmlindexTpl)
    }
    index(req, res, next) {
        res.render(htmlSiginTpl)
    }
}


export default Controllers;