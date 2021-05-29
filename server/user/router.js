var User = require(__dirname + '/schema.js');
module.exports = function(waw) {
	waw.app.get('/api/manage/update', (req, res)=>{
		waw.exe('update_ttt', resp=>{});		
		res.send('Server Is Updated');
	});
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
