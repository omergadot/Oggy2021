var dal = require("./DAL/database");
var generalCalc = require("./BL/generalCalc.js");
var config = require("./BL/config.js");
const jwt = require('jsonwebtoken');

module.exports = function (app, express) {

    app.post('/api/login', function (req, res) {

        console.log("User tried log in !");
        dal.readUser(req.body.username, req.body.password, function (user) {
            if (!user) {
                res.status(404).send('No user found.');
            } else {
                let token = jwt.sign({
                    id: req.body.username
                }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.send({
                    auth: true,
                    token: token,
                    user: {
                        username: user.username,
                        mainSportType: user.mainSportType
                    }
                });
                console.log("RIGHT LOGIN DETAILS")
            }
        })
    });

    app.post('/api/verifyAuth', (req, res) => {
        jwt.verify(req.body.token, config.secret, function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                res.send("verified succesfully")
            }
        })
    })

    app.post('/api/new_comp', isLoggedIn, function (req, res) {
        var comp_details = req.body;

        dal.writeCompDetails(comp_details, req.query.username);
        res.send('recived');
    });


    app.get('/api/get_categories', isLoggedIn, function (req, res) {

        var username = req.query.username;
        var comp_name = req.query.comp_name;

        dal.readCompetition(username, comp_name, function (competition) {

            var categories = generalCalc.getCategoriesFromCompetition(competition)
            res.send(categories);
        });
    })

    app.put('/api/competitors/:id', isLoggedIn, function (req, res) {
        var username = req.query.username;
        var competitor = req.body;
        var competitorId = req.params.id;
        
        dal.replaceCompetitor(username, competitorId, competitor).then((competitor) => {
            res.send(competitor);
        }).catch(() => {
            res.status(500).send('Error');
        });
    });

    app.post('/api/set_competition', isLoggedIn, function (req, res) {

        var username = req.query.username;
        var comp_name = req.query.comp_name;
        var competition = req.body.competition;


        dal.writeCompetition(username, comp_name, competition)
        res.send('recived');
    });


    app.get('/api/logout', function (req, res) {
        req.logout();
        res.send('loggedOut');
    })
};

function isLoggedIn(req, res, next) {
    var legit = jwt.verify(req.query.token, config.secret)
    if (legit.id === req.query.username) {
        return next();
    }
}