var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema({
	email: {type: String, unique: true, sparse: true, trim: true},
	reg_email: {type: String, unique: true, sparse: true, trim: true},
	blocked: Boolean,
	is: {},
	password: {type: String},
	avatarUrl: {type: String, default: '/assets/user.png'},
	name: {type: String},
	generated: {type: Boolean, default: false},
	data: {},
	fb_token: String,
	fb_id: String,
	google_token: String,
	google_id: String,
	resetPin: Number,
	resetCounter: Number,
	resetCreate: Number,
}, {minimize: false});
schema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
schema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};
schema.methods.create = function(obj, user, sd) {
	this.avatarUrl = obj.avatarUrl || '/assets/user.png';
	this.generated = obj.generated;
	this.reg_email = obj.email;
	this.email = obj.email;
	this.name = obj.name;
	this.data = {};
	this.is = {}
}
module.exports = mongoose.model('User', schema);