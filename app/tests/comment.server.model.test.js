'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    should = require('should');

var User = mongoose.model('User'),
	Comment = mongoose.model('Comment');

/**
* Globals
*/
var user, comment;

/**
* Unit tests
*/
describe('Comment Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.edu',
			username: 'username',
			password: 'password',
            zipCode: '12345'
		});

		user.save(function() {
			comment = new Comment({
				content: 'Comment content',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return comment.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) {
			comment.content = '';

			return comment.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		Comment.remove().exec();
		User.remove().exec();

		done();
	});
});
