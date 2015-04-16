'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var comments = require('../../app/controllers/comments.server.controller');

	// Comments Routes
	app.route('/comments')
		.post(users.requiresLogin, comments.create);

	app.route('/comments/:commentId')
		.get(comments.read)
		.put(users.requiresLogin, comments.hasAuthorization, comments.update)
		.delete(users.requiresLogin, comments.hasAuthorization, comments.delete);

	// Finish by binding the Comment middleware
	app.param('commentId', comments.commentByID);
};
