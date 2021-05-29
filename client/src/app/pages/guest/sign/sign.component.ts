import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HashService, HttpService, AlertService } from 'wacom';

@Component({
	selector: 'app-sign',
	templateUrl: './sign.component.html',
	styleUrls: ['./sign.component.scss']
})
export class SignComponent {
	constructor(private router: Router,
		private hash: HashService,
		private http: HttpService,
		private alert: AlertService) {
		this.user.email = this.hash.get('email')||'ceo@webart.work';
		this.user.password = this.hash.get('password')||'asdasdasdasd';
		if(this.hash.get('sign')) this.sign();
	}
	public user:any = {};
	sign() {
		if(!this.user.email) {
			return this.alert.show({
				type: "error",
				text: 'Enter your email',
			});
		}
		this.hash.set('email', this.user.email);
		if(!this.user.password) {
			return this.alert.show({
				type: "error",
				text: 'Enter your password',
			});
		}
		this.http.post('/api/user/status', this.user, (resp:any) => {
			if(resp.email) {
				this.alert.show({
					type: "error",
					text: "This email already exists",
				});
			} else {
				this.http.post('/api/user/signup', this.user, (user:any) => {
					if(!user){
						return this.alert.show({
							type: "error",
							text: "Something went wrong",
						});
					}
					localStorage.setItem('waw_user', JSON.stringify(user));
					this.router.navigate(['/profile'])
				})
			}
		})
	}
}