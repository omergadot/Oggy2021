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

    app.post('/api/update_comp', isLoggedIn, function (req, res) {
        let comp_details = req.body;

        dal.updateCompetition(comp_details, req.query.username);
        res.send('recived');
    });

    app.post('/api/delete_competitor', isLoggedIn, function (req, res) {
        let competitor = req.body.competitor;
        dal.deleteCompetitorFromStock(competitor._id);

        res.send('recived');
    });

    app.post('/api/sporty_update', function (req, res) {
        console.log("SERVER GOT SPORTY UPDATE")
        let comp_details = req.body;

        // for sequrity
        if (comp_details.TOKEN == "sportysecret3719") {
            let username = comp_details.USER_NAME
            console.log("AMAZING BRO")
            console.log(comp_details.CONTEST_NAME)
            let podiumCompObject = generalCalc.convertSportyFormatToPodiumFormat(comp_details)
            
            dal.writeAllFullCompetition(podiumCompObject,username)
            console.log("WORKS GOOD BRO")
            res.send('SPORTY THIS RECIVED SUCCSESFULY !');
        }
    });

    app.post('/api/likeCompetitor', function (req, res) {
        console.log("LIKE !")
        let competitor = req.body;
        let category = competitor.category;
        var username = req.query.username;
        var comp_name = req.query.comp_name;
        
        res.end()
    });

    app.get('/api/get_comp_by_code', function (req, res) {
        var code = req.query.code;
        console.log("USER TRIED : " + code)
        dal.readCompDetails(code, function (compDetails) {

            if (compDetails === null)
                res.send(null);

            else {
                dal.readCompetition(compDetails.username, compDetails.name, function (info) {
                    info["username"] = compDetails.username
                    res.send(info);
                });
            }

        });
    })

    app.get('/api/get_categories', isLoggedIn, function (req, res) {

        var username = req.query.username;
        var comp_name = req.query.comp_name;

        dal.readCompetition(username, comp_name, function (competition) {

            var categories = generalCalc.getCategoriesFromCompetition(competition)
            res.send(categories);
        });
    })

    app.get('/api/get_all_players_in_the_sport', isLoggedIn, function (req, res) {
        console.log("HOMIE ? ")
        var type = req.query.type;

        dal.readAllCompetitorsInSport(type, function (allCompetitorsInSport) {
            res.send(allCompetitorsInSport);
        });
    })

    app.get('/api/get_trial_features_of_user', isLoggedIn, function (req, res) {
        
        console.log("SERVER GOT FUCKING REQUEST")
        var username = req.query.username;

        dal.readTrialFeaturesOfUser(username, function (trialFeatures) {
            console.log(JSON.stringify(trialFeatures, null, 2))
            res.send(trialFeatures);
        });
    })

    app.post('/api/add_competitors', isLoggedIn, function (req, res) {
        var username = req.query.username;
        var comp_name = req.query.comp_name;
        var selected_category = req.query.selected_category;
        var competitors = req.body;
        
        dal.writeCompetitors(username, comp_name, selected_category, competitors);
        res.send('recived');
    });

    app.get('/api/competitors', isLoggedIn, function (req, res) {
        var username = req.query.username;
        
        dal.getCompetitors(username).then((competitors) => {
            res.send(competitors);
        }).catch(() => {
            res.status(500).send('Error');
        })
    });

    app.post('/api/competitors', isLoggedIn, function (req, res) {
        var username = req.query.username;
        var competitor = req.body;
        
        dal.addCompetitor(username, competitor).then((competitor) => {
            res.send({ competitorId: competitor._id });
        }).catch(() => {
            res.status(500).send('Error');
        })
    });

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

    app.post('/api/competitors/:competitorId/like', function (req, res) {
        const { username, comp_name:competition, selected_category:category, dislike } = req.query;
        const { competitorId } = req.params;

        if (dislike != null) {
            dal.dislikeCompetitor(username, competition, category, competitorId);
        } else {
            dal.likeCompetitor(username, competition, category, competitorId);
        }

        res.send('recived');
    });

    app.post('/api/set_competition', isLoggedIn, function (req, res) {

        var username = req.query.username;
        var comp_name = req.query.comp_name;
        var competition = req.body.competition;


        dal.writeCompetition(username, comp_name, competition)
        res.send('recived');
    });

    app.post('/api/set_competition_days', isLoggedIn, function (req, res) {

        let username = req.query.username;
        let comp_name = req.query.comp_name;
        let days = req.body.days;


        dal.writeCompetitionDays(username, comp_name, days)
        res.send('recived');
    });


    app.post('/api/save_logo', isLoggedIn, function (req, res) {

        let username = req.query.username;
        let comp_name = req.query.comp_name;
        
        let logoUrl = req.body.logoUrl;
        console.log("SABOBICH")
        console.log(logoUrl.length)

        dal.saveLogo(username, logoUrl)
        res.send('recived');
    });


    app.get('/api/logout', function (req, res) {
        req.logout();
        res.send('loggedOut');
    })

    app.get('/api/get_competitions', isLoggedIn, function (req, res) {
        var username = req.query.username

        dal.readCompetitions(username, function (info) {
            res.send(info);
        });
    })

    app.get('/api/get_logo' , function (req, res) {
        var username = req.query.username

        dal.readLogo(username, function (info) {
            res.send(info);
        });
    })

    
    app.get('/api/get_competition', function (req, res) {
        var username = req.query.username;
        var comp_name = req.query.comp_name;

        dal.readCompetition(username, comp_name, function (info) {
            res.send(info);
        });
    })

    
    app.post('/api/games', isLoggedIn, function (req, res) {
        var username = req.query.username;
        var comp_name = req.query.comp_name;
        var games = req.body.games;

        dal.writeGames(username, comp_name, games)

        res.send('recived');
    })

    
    app.post('/api/saveGame', isLoggedIn, function (req, res) {
        var username = req.query.username;
        var comp_name = req.query.comp_name;

        var game = req.body.game;
        

        console.log("???????????")
        console.log(game.scheduledStartTime)
        console.log("???????????")

        dal.writeGameInCurGames(username, comp_name, game, function (result) {
            res.send('recived')
        })
    })


    app.get('/api/games', isLoggedIn, function (req, res) {
        var username = req.query.username;
        var comp_name = req.query.comp_name;

        dal.readGames(username, comp_name, function (games) {
            res.send(games);
        });
    })
};

function isLoggedIn(req, res, next) {
    var legit = jwt.verify(req.query.token, config.secret)
    if (legit.id === req.query.username) {
        return next();
    }
}