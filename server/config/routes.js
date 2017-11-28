var mongoose = require('mongoose');
var path = require("path");

module.exports = function(app) {

    // REST ROUTES
    // app.get('/getquestions', (req, res, next) =>
    // {
    //     console.log("***** ROUTE FIRED: GET /GETQUESTIONS");
    //     questions.getAllQ(req, res);
    // });

    // app.get('/getquestion/:id', (req, res, next) =>
    // {
    //     console.log("***** ROUTE FIRED: GET /GETQUESTION/ID");
    //     questions.getOneQ(req, res);
    // });

    // app.get('/getanswers', (req, res, next) =>
    // {
    //     console.log("***** ROUTE FIRED: GET /GETANSWERS");
    //     questions.getAllA(req, res);
    // });

    // app.post('/newquestion', (req, res, next) => {
    //     console.log("***** ROUTE FIRED: POST /NEWQUESTION");
    //     questions.newQ(req, res);
    // });

    // app.post('/newanswer', (req, res, next) => {
    //     console.log("***** ROUTE FIRED: POST /NEWANSWER");
    //     questions.newA(req, res);
    // });

    // app.put('/newlike', (req, res, next) => {
    //     console.log("***** ROUTE FIRED: PUT /NEWLIKE");
    //     questions.newLike(req, res);
    // });


    // STATIC ROUTES
    app.get("/css/component.css", (req, res, next) => {
        console.log('***** routes > css - component')
        res.sendFile(path.resolve("server/static/css/component.css"))
    });

    app.get("/css/demo.css", (req, res, next) => {
        console.log('***** routes > css - demo')
        res.sendFile(path.resolve("server/static/css/demo.css"))
    });

    app.get("/css/normalize.css", (req, res, next) => {
        console.log('***** routes > css - normalize')
        res.sendFile(path.resolve("server/static/css/normalize.css"))
    });

    app.get("/css/navbar.css", (req, res, next) => {
        console.log('***** routes > css - navbar')
        res.sendFile(path.resolve("server/static/css/navbar.css"))
    });

    app.get("/js/TweenLite.min.js", (req, res, next) => {
        console.log('***** routes > script - tweenlite')
        res.sendFile(path.resolve("server/static/js/TweenLite.min.js"))
    });
    
    app.get("/js/EasePack.min.js", (req, res, next) => {
        console.log('***** routes > script - easepack')
        res.sendFile(path.resolve("server/static/js/EasePack.min.js"))
    });

    app.get("/js/rAF.js", (req, res, next) => {
        console.log('***** routes > script - rAF')
        res.sendFile(path.resolve("server/static/js/rAF.js"))
    });

    app.get("/js/demo-1.js", (req, res, next) => {
        console.log('***** routes > script - demo')
        res.sendFile(path.resolve("server/static/js/demo-1.js"))
    });

    app.get("/js/navbar.js", (req, res, next) => {
        console.log('***** routes > script - navbar')
        res.sendFile(path.resolve("server/static/js/navbar.js"))
    });

    app.get("/img/cygnusnebula.jpg", (req, res, next) => {
        console.log('***** routes > img - cygnus')
        res.sendFile(path.resolve("server/static/img/cygnusnebula.jpg"))
    });

    app.get("/img/resume.pdf", (req, res, next) => {
        console.log('***** routes > img - resume')
        res.sendFile(path.resolve("server/static/img/resume.pdf"))
    });

    app.get("/favicon-196x196.png", (req, res, next) => {
        console.log('***** routes > img - favicon-196x196.png')
        res.sendFile(path.resolve("server/static/img/png/favicon-196x196.png"))
    });

    app.get("/favicon-96x96.png", (req, res, next) => {
        console.log('***** routes > img - favicon-96x96.png')
        res.sendFile(path.resolve("server/static/img/png/favicon-96x96.png"))
    });

    app.get("/favicon-32x32.png", (req, res, next) => {
        console.log('***** routes > img - favicon-32x32.png')
        res.sendFile(path.resolve("server/static/img/png/favicon-32x32.png"))
    });

    app.get("/favicon-16x16.png", (req, res, next) => {
        console.log('***** routes > img - favicon-16x16.png')
        res.sendFile(path.resolve("server/static/img/png/favicon-16x16.png"))
    });

    app.get("/favicon-128.png", (req, res, next) => {
        console.log('***** routes > img - favicon-128.png')
        res.sendFile(path.resolve("server/static/img/png/favicon-128.png"))
    });

    //  NODE ROUTE
    app.all("*", (req,res,next) => {
        console.log('***** routes > node route fired')
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}