import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService, AlertService } from 'wacom';

@Component({
	selector: 'app-save',
	templateUrl: './save.component.html',
	styleUrls: ['./save.component.scss']
})
export class SaveComponent {
	constructor(private router: Router,
		private http: HttpService,
		private alert: AlertService) {
		if(localStorage.getItem('waw_reset_email')){
			this.user.email = localStorage.getItem('waw_reset_email');
		}
		if(!this.user.email){
			this.router.navigate(['/reset']);
		}
	}
	public user:any = {};
	changePass() {
		if(!this.user.code) {
			return this.alert.show({
				type: "error",
				text: 'Enter your code'
			});
		}
		if(!this.user.password) {
			return this.alert.show({
				type: "error",
				text: 'Enter your password',
			});
		}
		this.http.post('/api/user/change', this.user, (resp:any) => {
			this.alert.show({
				type: "info",
				text: resp
			});
			this.http.post('/api/user/login', this.user, (user:any) => {
				if(!user){
					return this.alert.show({
						type: "error",
						text: "Something went wrong",
					});
				}
				localStorage.setItem('waw_user', JSON.stringify(user));
				this.router.navigate(['/profile']);
			});			
		});
	}
}