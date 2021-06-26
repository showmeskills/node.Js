const signinTpl = require("./views/signin.art");
const indexTpl = require("./views/index.art");
const usersTpl = require("./views/users.art");
const usersListTpl = require("./views/users-list.art");
const usersPagesTpl = require("./views/users-pages.art");
const htmlSiginTpl = signinTpl();
const htmlindexTpl = indexTpl();
const htmlUsersTpl = usersTpl();

class Controllers {
    signin (req, res, next){

        $("#signin").on('submit', (e) => {
            e.preventDefault();
            router.go("/index",)
        })
        res.render(htmlSiginTpl);
    }
    index(req, res, next) {
        res.render(htmlSiginTpl)
    }
}


export default Controllers;