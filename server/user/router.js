var User = require(__dirname + '/schema.js');
module.exports = function(waw) {
	var router = waw.router('/api/user');
	waw.file('user', {
		rename: (req)=>{ return req.user._id+'.jpg' },
		ensure: waw.ensure
	});
	var select = function(){
		return '-password';
	}
	waw.crud('user', {
		get: {
			query: function(){
				return {};
			},
			select: select
		},
		fetch: [{
			query: function(req){
				return {
					_id: req.body._id
				}
			},
			select: select
		},{
			name: 'me',
			query: function(req){
				return {
					_id: req.user._id
				}
			},
			select: select
		}],
		update: [{
			query: function(req, res, next) {
				return {
					_id: req.user._id
				}
			}
		}, {
			name: 'admin',
			ensure: function(req, res, next){
				if(req.user && req.user.is && req.user.is.admin){
					next();
				}else{
					res.json(false);
				}
			},
			query: function(req, res, next) {
				return {
					_id: req.body._id
				}
			}
		}],
		delete: {
			name: 'admin',
			ensure: function(req, res, next){
				if(req.user && req.user.is && req.user.is.admin){
					next();
				}else{
					res.json(false);
				}
			},
			query: function(req, res, next) {
				return {
					_id: req.body._id
				}
			}
		}
	});
};