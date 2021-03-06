'use strict';

/**
* Module dependencies.
*/
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Post = mongoose.model('Post');

/**
* Globals
*/
var user, post;

/**
* Unit tests
*/
describe('Post Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
            firstName: 'Full',
            lastName: 'Name',
            displayName: 'Full Name',
            email: 'test@test.edu',
            username: 'username',
            password: 'password',
            provider: 'local',
            zipCode: '12345'

		});

		user.save(function() {
			post = new Post({
				title: 'Post Name',
                abstract: 'Abstract',
                location: '12345',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return post.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) {
			post.title = '';

			return post.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		Post.remove().exec();
		User.remove().exec();

		done();
	});
});
