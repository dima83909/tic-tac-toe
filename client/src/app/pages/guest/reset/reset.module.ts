import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ResetComponent } from './reset.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ResetComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ResetComponent
	],
	providers: []
	
})

export class ResetModule { }
