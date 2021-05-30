import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { TictactoeComponent } from './tictactoe.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: TictactoeComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		TictactoeComponent
	],
	providers: []
	
})

export class TictactoeModule { }
