import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HashService, HttpService, AlertService } from 'wacom';

@Component({
	selector: 'app-reset',
	templateUrl: './reset.component.html',
	styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
	constructor(private router: Router,
		private hash: HashService,
		private http: HttpService,
		private alert: AlertService) {
		this.user.email = this.hash.get('email')||'ceo@webart.work';
	}
	public user:any = {};
	reset() {
		if(!this.user.email) {
			return this.alert.show({
				type: "error",
				text: 'Enter your email',
			});
		}
		this.hash.set('email', this.user.email);
		this.http.post('/api/user/status', this.user, (resp:any) => {
			if(resp.email) {
				localStorage.setItem('waw_reset_email', this.user.email);
				this.router.navigate(['/save']);
				this.http.post('/api/user/request', this.user, (resp:any) => {});
				this.alert.show({
					text: "Mail will sent to your email"
				});
			} else {
				this.alert.show({
					type: "error",
					text: "This email not used"
				});
			}
		})
	}
}