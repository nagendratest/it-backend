'use strict';

var _ = require('lodash');

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
  attributes: {
    username: {
      type: 'string',
      unique: true
    },
    email: {
      type: 'email',
      unique: true
    },
    firstName: {
      type: 'string',
      required: false
    },
    lastName: {
      type: 'string',
      required: false
    },
    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    // Below is all specification for relations to another models

    // Passport configurations
    passports: {
      collection: 'Passport',
      via: 'user'
    }
  }
});
