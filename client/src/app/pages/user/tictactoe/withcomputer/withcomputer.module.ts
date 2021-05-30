import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { WithcomputerComponent } from './withcomputer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: WithcomputerComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		WithcomputerComponent
	],
	providers: []
	
})

export class WithcomputerModule { }
