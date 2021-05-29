import { CanActivate, ActivatedRouteSnapshot, 
	RouterStateSnapshot, Router, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MongoService, FileService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	/*
	*	Declarations
	*/
		constructor(private mongo: MongoService, private file: FileService,
			private router: Router, private http: HttpClient) {
			file.add({
				id: 'userAvatarUrl',
				resize: 256,
				part: 'user',
				cb: file=>{
					if(typeof file != 'string') return;
					this.me.avatarUrl = file;
				}
			});
			mongo.config('user', {
				replace: {
					data: (data, cb, doc) => {
						if(typeof data != 'object') data = {};
						console.log(data);
						cb(data);
					},
					is: mongo.beObj
				}
			});
			this.me = mongo.fetch('user', {
				name: 'me'
			}, me => {
				if(!me._id && localStorage.getItem('waw_user')) this.logout();
			});
			this.users = mongo.get('user');
		}
		public roles = ['admin'];
		public users: any = [];
		public me: any = { data: {} };
	/*
	*	User Management
	*/
		create(user){
			this.mongo.create('user', user);
		}
		doc(userId){
			return this.mongo.fetch('user', {
				query: { _id: userId }
			});
		}
		update(){
			this.mongo.afterWhile(this, ()=>{
				this.mongo.update('user', this.me);
			});
		}
		save(user){
			this.mongo.afterWhile(this, ()=>{
				this.mongo.update('user', user, {
					name: 'admin'
				});
			});
		}
		delete(user){
			this.mongo.delete('user', user, {
				name: 'admin'
			});
		}
		change_password(oldPass, newPass){
			this.http.post('/api/user/changePassword', {
				newPass: newPass,
				oldPass: oldPass
			}).subscribe(resp => {
				if(resp) alert('successfully changed password');
				else alert('failed to change password');
			});	
		}
		logout(){
			localStorage.removeItem('waw_user')
			this.http.get('/api/user/logout').subscribe((resp:any)=> {});
			this.router.navigate(['/login']);
		}
	/*
	*	End of 
	*/
}

@Injectable()
export class Admins implements CanActivate {
	constructor(private router: Router) {}
	canActivate(){
		if ( localStorage.getItem('waw_user') ) {
			let user = JSON.parse(localStorage.getItem('waw_user'));
			if(user.is && user.is.admin) return true;
			this.router.navigate(['/profile']);
			return false;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

@Injectable()
export class Authenticated implements CanActivate {
	constructor(private router: Router) {}
	canActivate(){
		if ( localStorage.getItem('waw_user') ) {
			return true;
		} else {
			return this.router.navigate(['/login']);
		}
	}

}

@Injectable()
export class Guest implements CanActivate {
	constructor(private router: Router) {}
	canActivate(){
		if (localStorage.getItem('waw_user')) {
			return this.router.navigate(['/'])
		} else {
			return true;
		}
	}
}