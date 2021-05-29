import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SaveComponent } from './save.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: SaveComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		SaveComponent
	],
	providers: []
	
})

export class SaveModule { }
