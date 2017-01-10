'use strict';

var validator = require('validator');

/**
 * Local Authentication Protocol
 *
 * The most widely used way for websites to authenticate users is via a username
 * and/or email as well as a password. This module provides functions both for
 * registering entirely new users, assigning passwords to already registered
 * users and validating login requesting.
 *
 * For more information on local authentication in Passport.js, check out:
 * http://passportjs.org/guide/username-password/
 */

/**
 * Assign local Passport to user
 *
 * This function can be used to assign a local Passport to a user who doens't
 * have one already. This would be the case if the user registered using a
 * third-party service and therefore never set a password.
 *
 * @param {Request}   request
 * @param {Response}  response
 * @param {Function}  next
 */
exports.connect = function connect(request, response, next) {
  var user = request.user;
  var password = request.param('password');

  sails.models.passport
    .findOne({
      protocol: 'local',
      user: user.id
    })
    .exec(function onExec(error, passport) {
      if (error) {
        next(error);
      } else {
        if (!passport) {
          sails.models['passport']
            .create({
              protocol: 'local',
              password: password,
              user: user.id
            })
            .exec(function onExec(error) {
              next(error, user);
            });
        } else {
          next(null, user);
        }
      }
    })
  ;
};
/**
 * Register a new user
 *
 * This method creates a new user from a specified email, username and password
 * and assign the newly created user a local Passport.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.register = function (req, res, next) {
	sails.log("testing inside register");
	var user = req.user;
	
  var email    = req.param('email')
    , username = req.param('username')
    , password = req.param('password');
	
	sails.log("inside register method "+email);
	sails.log("inside register method "+username);
	sails.log("inside register method "+password);

  if (!email) {
    sails.log('error', 'Error.Passport.Email.Missing');
    return next(new Error('No email was entered.'));
  }

  if (!username) {
    sails.log('error', 'Error.Passport.Username.Missing');
    return next(new Error('No username was entered.'));
  }

  if (!password) {
    sails.log('error', 'Error.Passport.Password.Missing');
    return next(new Error('No password was entered.'));
  }

  sails.models.user.create({
    username : username
  , email    : email
  , admin : false
  }, function (err, user) {
    if (err) {
      if (err.code === 'E_VALIDATION') {
        if (err.invalidAttributes.email) {
          sails.log('error', 'Error.Passport.Email.Exists');
        } else {
          sails.log('error', 'Error.Passport.User.Exists');
        }s
      }

      return next(err);
    }

    var token = new Buffer(user.username + user.createdAt).toString('base64');
    sails.models.passport.create({
      protocol : 'local'
    , password : password
    , user     : user.id
    , accessToken: token  
    }, function (err, passport) {
      if (err) {
        if (err.code === 'E_VALIDATION') {
        sails.log('error', 'Error.Passport.Password.Invalid');
        }

        return user.destroy(function (destroyErr) {
          next(destroyErr || err);
        });
      }

      next(null, user);
    });
  });
};
/**
 * Validate a login request
 *
 * Looks up a user using the supplied identifier (email or username) and then
 * attempts to find a local Passport associated with the user. If a Passport is
 * found, its password is checked against the password supplied in the form.
 *
 * @param {Request}   request
 * @param {string}    identifier
 * @param {string}    password
 * @param {Function}  next
 */
exports.login = function login(request, identifier, password, next) {
  var isEmail = validator.isEmail(identifier);
  var query = {};

  if (isEmail) {
    query.email = identifier;
  } else {
    query.username = identifier;
  }

  sails.models.user
    .findOne(query)
    .exec(function onExec(error, user) {
      if (error) {
        next(error);
      } else if (!user) {
        next(null, false);
      } else {
        sails.models.passport
          .findOne({
            protocol: 'local',
            user: user.id
          })
          .exec(function onExec(error, passport) {
            if (passport) {
              passport.validatePassword(password, function callback(error, response) {
                if (error) {
                  next(error);
                } else if (!response) {
                  next(null, false);
                } else {
                  next(null, user);
                }
              });
            } else {
              next(null, false);
            }
          })
        ;
      }
    })
  ;
};
