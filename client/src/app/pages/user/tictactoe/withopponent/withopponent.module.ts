import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { WithopponentComponent } from './withopponent.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: WithopponentComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		WithopponentComponent
	],
	providers: []
	
})

export class WithopponentModule { }
