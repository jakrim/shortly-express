const models = require("../models");
const Promise = require("bluebird");

module.exports.createSession = (req, res, next) => {
<<<<<<< HEAD
  Promise.resolve(req.cookies.shortlyid)
    .then(hash => {
      if (!hash) {
        throw hash;
      }
      return models.Sessions.get({ hash });
    })
    .tap(session => {
      if (!session) {
        throw session;
      }
    })
    // initializes a new session
    .catch(() => {
      return models.Sessions.create()
        .then(results => {
          return models.Sessions.get({ id: results.insertId });
        })
        .tap(session => {
          res.cookie('shortlyid', session.hash);
        });
    })
    .then(session => {
      req.session = session;
      next();
    });
=======
  // add to req and res obj -
>>>>>>> 0236e0a204005d624fda273fe3737a16108897f6
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

<<<<<<< HEAD
module.exports.verifySession = (req, res, next) => {
  if (!models.Sessions.isLoggedIn(req.session)) {
    res.redirect('/login');
  } else {
    next();
  }
};
=======
// module.exports.isSession = (req, res, next) => {
// if true
//     next()
// else {

// }
// }
>>>>>>> 0236e0a204005d624fda273fe3737a16108897f6
