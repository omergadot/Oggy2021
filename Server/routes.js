var dal = require("./DAL/database");
var generalCalc = require("./BL/generalCalc.js");
var config = require("./BL/config.js");
const jwt = require('jsonwebtoken');
var multer = require('multer');
const Training = require('./schemas/training-schema');

module.exports = function (app, express) {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, DIR);
        },
        filename: (req, file, cb) => {
            const fileName = file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName)
        }
    });

    var upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            cb(null, true);
        }
    });

    app.get('/api/trainings', async function(req, res) {
        await Training.find({}, (err, trainings) => {
            if (err) {
                return res.status(400);
            }
            if (!trainings.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Trainings not found` })
            }
            return res.status(200).json({ trainings })
        }).catch(err => console.log(err))
    });

    app.post('/api/training', upload.array('files', 1), function (req, res) {
        const body = req.body;
        const reqFiles = []
        const url = req.protocol + '://' + req.get('host')
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + '/public/' + req.files[i].filename)
        }


        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a comment',
            })
        }

        const training = {
            email: body.email,
            title: body.title,
            files: reqFiles
        };

        if (!training) {
            return res.status(400).json({ success: false, error: "error with training object" });
        }

        training.save()
            .then(() => {
                return res.status(200);
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'error in saving',
                })
            })
    });

};

function isLoggedIn(req, res, next) {
    var legit = jwt.verify(req.query.token, config.secret)
    if (legit.id === req.query.username) {
        return next();
    }
}