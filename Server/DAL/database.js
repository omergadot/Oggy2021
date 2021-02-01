var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var url = "mongodb+srv://oggyUser:Aa123456789@cluster0.cmqfr.mongodb.net/IAFproj?retryWrites=true&w=majority"

module.exports = {
    readUser: function (username, password, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) {
                throw new Error(`DB connection error - url:${url}`, err);
            }
            var dbo = db.db("general");
            dbo.collection("users").findOne({
                "username": username,
                "password": password
            }, function (err, result) {
                if (err) throw "find " + err;
                db.close();
                console.log("username is : " + username)
                if (result == null) {
                    cb(undefined);
                } else {
                    cb(result);
                }
            });
        });
    },

    deleteCompetitorFromStock: function (_id) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            console.log(_id)
            var myquery = { _id: ObjectID(_id) };
            dbo.collection("competitors").deleteOne(myquery, function(err) {
              if (err) throw err;

              console.log("DELETED!")
              db.close();
            });
          });
    },

    writeDoubleKnockouts: function (username, compName, doubleKnockouts) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
            };

            var newvalues = {
                $set: {
                    doubleKnockouts: doubleKnockouts,
                },
            };

            dbo.collection(username).update(myquery, newvalues, function (err, result) {

                if (err) throw err;
                db.close();
            });
        });
    },

    writeCompetitionDays: function (username, compName, days) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
            };

            var newvalues = {
                $set: {
                    days: days,
                },
            };

            dbo.collection(username).update(myquery, newvalues, function (err, result) {

                if (err) throw err;
                db.close();
            });
        });
    },


    writeCompetition: function (username, compName, newComp) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
            };

            var newvalues = {
                $set: {
                    curGames: newComp.curGames,
                    categories: newComp.categories,
                },
            };

            dbo.collection(username).update(myquery, newvalues, function (err, result) {

                if (err) throw err;
                db.close();
            });
        });
    },

    saveLogo: function (username, logo) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            var myquery = {
                username: username,
            };

            var newvalues = {
                $set: {
                    logo: logo,
                },
            };  

            dbo.collection('users').updateOne(myquery, newvalues, function (err, result) {
                if (err) throw err;
                db.close(); 
            });
        });
    },

    writeGames: function (username, compName, games) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
            };
            var newvalues = {
                $set: {
                    curGames: games
                }
            };
            dbo.collection(username).update(myquery, newvalues, function (err, result) {

                if (err) throw err;
                db.close();
            });
        });
    },

    writeIsAllowSchedule: function (username, compName, isAllowSchedule) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
            };
            var newvalues = {
                $set: {
                    isSchedule: isAllowSchedule
                }
            };
            dbo.collection(username).update(myquery, newvalues, function (err, result) {

                if (err) throw err;
                db.close();
            });
        });
    },

    writeCourtsNum: function (username, compName, courtsNum) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
            };
            var newvalues = {
                $set: {
                    courtsNum: courtsNum
                }
            };
            dbo.collection(username).update(myquery, newvalues, function (err, result) {

                if (err) throw err;
                db.close();
            });
        });
    },

    writeCategoryMethod: function (username, compName, categoryName,method) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = { 
                name: compName,
                "categories.name": categoryName,
            };
            var newvalues = {
                $set: {
                    "categories.$.method": method,
                }
            };
            dbo.collection(username).update(myquery, newvalues, function (err, result) {
                console.log("YO YO YO : " + method)
                console.log("BO BO BO : " + categoryName)
                if (err) throw err
                db.close();
                console.log("MODIFIED : " + result.nModified)
            });
        });
    },

    writeGameInCurGames: function (username, compName, game, cb) {  
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
                "curGames.id": game.id,
            };
            var newvalues = {
                $set: {
                    "curGames.$.teamA": game.teamA,
                    "curGames.$.teamB": game.teamB,
                    "curGames.$.resultA": game.resultA,
                    "curGames.$.resultB": game.resultB,
                    "curGames.$.innersA": game.innersA,
                    "curGames.$.innersB": game.innersB,
                    "curGames.$.finished": game.finished,
                    "curGames.$.courtNum": game.courtNum,
                    "curGames.$.endTime": game.endTime,
                    "curGames.$.startTime": game.startTime,
                    "curGames.$.scheduledStartTime": game.scheduledStartTime,
                    "curGames.$.scheduledDay": game.scheduledDay,
                }
            };
            dbo.collection(username).updateOne(myquery, newvalues, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result)
            });
        });
    },

    deleteGame: function (username, compName, gameId, cb) {  
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: compName,
                "curGames.id": gameId,
            };
            var newvalues = {
                $pull: {
                    "curGames": { id: gameId },
                }
            };
            dbo.collection(username).updateOne(myquery, newvalues, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result)
            });
        });
    },

    readTasks: function (cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("IAFproj");
            dbo.collection("trainings").find({}).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },

    readCompetitions: function (username, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).find({}, {
                projection: {
                    _id: 0,
                    name: 1,
                    type: 1,
                    date: 1
                }
            }).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },



    readAllCompetitions: function (cb) {

        var allComps = [];

        var bar = new Promise((resolve, reject) => {
            MongoClient.connect(url, cb, function (err, db) {
                if (err) throw err;
                var dbo = db.db("podium");
                dbo.listCollections().toArray(function (err, collInfos) {

                    collInfos.forEach((collection, index, array) => {

                        dbo.collection(collection.name).find({}, {
                            projection: {
                                _id: 0,
                                name: 1,
                                date: 1,
                                type: 1
                            }

                        }).toArray(function (err, result) {
                            if (err) throw err;

                            for (var i = 0; i < result.length; i++) {
                                result[i].username = collection.name;
                                allComps.push(result[i]);

                                if (index === array.length - 1) {
                                    db.close()
                                    resolve();
                                }
                            }
                        });
                    });
                });
            });
        });

        bar.then(() => {

            console.log("TIME");

            cb(allComps)
        });
    },

    readCompetition: function (username, compName, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).findOne({
                name: compName
            }, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },

    readLogo: function (username, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            dbo.collection('users').findOne({
                username: username
            },{
                projection: {
                    _id: 0,
                    logo: 1
                }
            }, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },

    readAllCompetitorsInSport: function (type, cb) {

        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            dbo.collection("competitors").find({
                type: type
            }).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },

    writeStage: function (username, compName, selected_category, curStage) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                "name": compName,
                "categories.name": selected_category
            };
            var newvalues = {
                $set: {
                    'categories.$.stage': curStage
                }
            };
            dbo.collection(username).update(myquery, newvalues, function (err, result) {
                if (err) throw err;
                db.close();
            });
        });
    },

    readStage: function (username, compName, selected_category, cb) {

        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).findOne({
                "name": compName,
                "categories.name": selected_category
            }, {
                projection: {
                    _id: 0,
                    'categories.$': 1
                }
            }, function (err, result) {
                if (err) {
                    console.log("ERROR ON SERVER")
                    throw err;
                }

                db.close();

                cb(result.categories[0].stage);
            });
        });
    },


    readCompDetails: function (code, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            dbo.collection("competitions").findOne({
                code: code,
            }, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },

    readCompetitionsNumber: function (cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            dbo.collection("competitions").countDocuments({}, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result);
            });
        });
    },

    readHouses: function (username, compName, selected_category, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).findOne({
                name: compName,
                "categories.name": selected_category
            }, {
                projection: {
                    _id: 0,
                    'categories.$': 1
                }
            }, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result.categories[0].houses);
            });
        });
    },

    readGames: function (username, compName, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).findOne({
                name: compName
            }, {
                projection: {
                    _id: 0,
                    curGames: 1
                }
            }, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result.curGames);
            });
        });
    },

    readDoubleKnockouts: function (username, compName, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).findOne({
                name: compName
            }, {
                projection: {
                    _id: 0,
                    doubleKnockouts: 1
                }
            }, function (err, result) {
                if (err) throw err;
                db.close();
                cb(result.doubleKnockouts);
            });
        });
    },



    //readTrialFeaturesOfUser

    readTrialFeaturesOfUser: function (username, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) {
                throw new Error(`DB connection error - url:${url}`, err);
            }
            var dbo = db.db("general");
            dbo.collection("users").findOne({
                "username": username,
            }, function (err, result) {
                if (err) throw "find " + err;
                db.close();
                if (result == null) {
                    cb(false);
                } else {
                    cb(result.trialFeatures);
                }
            });
        });
    },



    readCompetitors: function (username, compName, selected_category, cb) {
        MongoClient.connect(url, cb, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).findOne({
                "name": compName,
                "categories.name": selected_category
            }, {
                projection: {
                    _id: 0,
                    'categories.$': 1
                }
            }, function (err, result) {
                if (err) {
                    console.log("ERROR ON SERVER")
                    throw err;
                }

                db.close();
                cb(result.categories[0].competitors);
            });
        });
    },


    writeCompDetails: function (compDetails, username) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            dbo.collection(username).insert(compDetails, function (err, result) {
                if (err) throw err;

                console.log("ID : " + compDetails._id);
                db.close();

                var generalCompDetails = {}

                generalCompDetails._idGeneral = compDetails._id

                generalCompDetails.name = compDetails.name
                generalCompDetails.type = compDetails.type
                generalCompDetails.code = compDetails.code
                generalCompDetails.sponser = compDetails.sponser
                generalCompDetails.date = compDetails.date
                generalCompDetails.username = username

                MongoClient.connect(url, {
                    useNewUrlParser: true
                }, function (err, db1) {
                    if (err) throw err;
                    var dbo = db1.db("general");
                    dbo.collection("competitions").insert(generalCompDetails, function (err, result) {
                        if (err) throw err;
                        db1.close();
                    });
                });
            });
        });

    },

    //For SportY
    writeAllFullCompetition: function (competition,username) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");

            var myQuery = {
                code: competition.code
            };

            var newValues = {
                $set: competition
            }

            dbo.collection(username).updateOne(myQuery, newValues,{ upsert: true }, function (err, result) {
                if (err) {
                    throw err;
                }

                db.close();
            });
        });
    },

    updateCompetition: function (competition, username) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");

            var myQuery = {
                _id: ObjectID(competition._id)
            };

            var newValues = {
                $set: {    
                    name: competition.name,
                    type: competition.type,
                    method: competition.method,
                    description: competition.description,
                    code: competition.code,
                    sponser: competition.sponser,
                    isSchedule: competition.isSchedule,
                    isOnline: competition.isOnline,
                    date: competition.date,
                    courtsNum: competition.courtsNum,
                    stage: competition.stage,
                }
            }

            dbo.collection(username).updateOne(myQuery, newValues, function (err, result) {
                if (err) {
                    throw err;
                }

                db.close();
            });
        });


        var generalCompDetails = {}

        generalCompDetails.name = competition.name
        generalCompDetails.type = competition.type
        generalCompDetails.date = competition.date
        generalCompDetails.code = competition.code
        generalCompDetails.username = username

        console.log(JSON.stringify(JSON.stringify(generalCompDetails, null, 2)))

        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");

            var myQuery = {
                _idGeneral: ObjectID(competition._id)
            };
            var newValues = {
                $set: {
                    username: generalCompDetails.username,
                    code: generalCompDetails.code,
                    name: generalCompDetails.name,
                    type: generalCompDetails.type,
                    date: generalCompDetails.date,
                }
            }

            dbo.collection("competitions").updateOne(myQuery, newValues, function (err, result) {
                if (err) {
                    throw err;
                }

                db.close();
            });
        });
    },

    writeCompetitors: function (username, comp_name, selected_category, competitors) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("podium");
            var myquery = {
                name: comp_name,
                "categories.name": selected_category
            };
            var newvalues = {
                $set: {
                    'categories.$.competitors': competitors
                }
            };
            dbo.collection(username).update(myquery, newvalues, function (err, result) {
                if (err) throw err;
                db.close();
            });
        });
    },

    addCompetitor(username, competitor) {
        console.log(JSON.stringify(competitor,null,2))
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {
                useNewUrlParser: true
            }, function(err, db) {
                if (err) reject(err);

                const generalDb = db.db('general');

                generalDb.collection('competitors').findOneAndUpdate({
                    name: competitor.name,
                    organizer_username: username
                }, {
                    $setOnInsert: {
                        organizer_username: username,
                        ...competitor
                    }
                },
                {
                    upsert: true,
                    returnOriginal: false
                }).then(({ value:competitor }) => {
                    resolve(competitor);
                }).catch((err) => {
                    reject(err);
                }).then(() => {
                    db.close();
                });
            });
        });
    },

    replaceCompetitorNew: function (compId,comp) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("general");
            console.log(comp.name)
            var myQuery = {
                _id: ObjectID(comp._id)
            };

            var newValues = {
                $set: {    
                    name: comp.name,
                    club: comp.club,
                    phone: comp.phone,
                    imgUrl: comp.imgUrl,
                }
            }

            dbo.collection("competitors").updateOne(myQuery, newValues, function (err) {
                if (err) {
                    throw err;
                } else {
                    console.log("GOOD")
                }
                db.close();
            });
        });
    },
    
    replaceCompetitor(username, competitorId, newCompetitor) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {
                useNewUrlParser: true
            }, function(err, db) {
                if (err) reject(err);

                const generalDb = db.db('general');

                generalDb.collection('competitors').findOneAndReplace({
                    _id: ObjectID(competitorId)
                },
                {...newCompetitor, organizer_username: username}).then(({ value:competitor }) => {
                    resolve(competitor);
                }).catch((error) => {
                    reject(error);
                }).then(() => {
                    db.close();
                })
            });
        });
    },
    getCompetitorsByorganizer(username) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {
                useNewUrlParser: true
            }, function(err, db) {
                if (err) reject(err);

                const generalDb = db.db('general');

                generalDb.collection('competitors').find({ organizer_username: username }).toArray().then((competitors) => {
                    resolve(competitors);
                }).catch((error) => {
                    reject(error);
                }).then(() => {
                    db.close();
                })
            });
        });
    },
    addLikesToCompetitor(username, competitionName, category, competitorId, amount) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {
                useNewUrlParser: true
            }, async (err, db) => {
                if (err) return reject(err);

                const generalDb = db.db('podium');
                const collection = generalDb.collection(username);

                const filter = {
                    name: competitionName
                };

                const update = {
                    $inc: {
                        'categories.$[category].competitors.$[competitor].likes': amount
                    }
                };

                const arrayFilters = [
                    { 'category.name': category },
                    { 'competitor._id': competitorId }
                ]

                try {
                    await collection.updateOne(filter, update, { arrayFilters });
                } catch (error) {
                    reject(error);
                } finally {
                    await db.close();
                }
            });
        });
    },
    likeCompetitor(username, competitionName, category, competitorId) {
        return this.addLikesToCompetitor(username, competitionName, category, competitorId, 1);
    },
    dislikeCompetitor(username, competitionName, category, competitorId) {
        return this.addLikesToCompetitor(username, competitionName, category, competitorId, -1);
    }
}
