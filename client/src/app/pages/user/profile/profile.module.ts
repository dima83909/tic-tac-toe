import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ProfileComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ProfileComponent
	],
	providers: []
	
})

export class ProfileModule { }
