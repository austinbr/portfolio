var mongoose = require('mongoose');
// var users = require('../controllers/users.js');
// var questions = require('../controllers/questions.js');
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
        console.log('***** routes > css')
        res.sendFile(path.resolve("server/css/component.css"))
    });

    app.get("/css/demo.css", (req, res, next) => {
        console.log('***** routes > css')
        res.sendFile(path.resolve("server/css/demo.css"))
    });

    app.get("/css/normalize.css", (req, res, next) => {
        console.log('***** routes > css')
        res.sendFile(path.resolve("server/css/normalize.css"))
    });

    app.get("/css/navbar.css", (req, res, next) => {
        console.log('***** routes > css')
        res.sendFile(path.resolve("server/css/navbar.css"))
    });

    app.get("/js/TweenLite.min.js", (req, res, next) => {
        console.log('***** routes > script')
        res.sendFile(path.resolve("server/js/TweenLite.min.js"))
    });
    
    app.get("/js/EasePack.min.js", (req, res, next) => {
        console.log('***** routes > script')
        res.sendFile(path.resolve("server/js/EasePack.min.js"))
    });

    app.get("/js/rAF.js", (req, res, next) => {
        console.log('***** routes > script')
        res.sendFile(path.resolve("server/js/rAF.js"))
    });

    app.get("/js/demo-1.js", (req, res, next) => {
        console.log('***** routes > script')
        res.sendFile(path.resolve("server/js/demo-1.js"))
    });

    app.get("/js/navbar.js", (req, res, next) => {
        console.log('***** routes > script')
        res.sendFile(path.resolve("server/js/navbar.js"))
    });

    app.get("/img/cygnusnebula.jpg", (req, res, next) => {
        console.log('***** routes > img')
        res.sendFile(path.resolve("server/img/cygnusnebula.jpg"))
    });

    app.get("/img/resume.pdf", (req, res, next) => {
        console.log('***** routes > img')
        res.sendFile(path.resolve("server/img/resume.pdf"))
    });

    //  NODE ROUTE
    app.all("*", (req,res,next) => {
        console.log('***** routes > node route fired')
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}