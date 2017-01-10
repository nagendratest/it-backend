'use strict';

var _ = require('lodash');

/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
//module.exports = _.merge(_.cloneDeep(require('../base/Controller')), {
//});
module.exports = {
	
	createUser:function(req,res)
	{
		 var userData = req.params.all();;
		 sails.log("üser data -->"+userData);
		sails.log("request --->"+userData.email);
		
		sails.models.user.create(userData)
				.exec(function(err,user){

					if(err)
						res.json({error:err});
					if(user === undefined)
						res.json({notFound:true});
					else
						res.json({notFound:false,userData:user});
					
				});
	}
	
};
