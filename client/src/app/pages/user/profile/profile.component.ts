import { Component } from '@angular/core';
import { UserService } from '@services';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
	constructor(public us: UserService) {}
}
