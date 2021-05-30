import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { WithfriendComponent } from './withfriend.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: WithfriendComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		WithfriendComponent
	],
	providers: []
	
})

export class WithfriendModule { }
