import { Component } from '@angular/core';
import { UserService } from '@services';
import { UiService } from 'wacom';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent{
	public search:any='';
	constructor(public us: UserService, public ui: UiService) {}
	public new_user:any={};
	delete(){
		for(let i = this.us.users.length-1; i>=0; i--){
			if(this.us.users[i].generated){
				this.us.delete(this.us.users[i]);
			}
		}
	}
}

