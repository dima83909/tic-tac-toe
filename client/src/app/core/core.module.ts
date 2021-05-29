import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		FormsModule,
		WacomModule,
	],
	imports: [
		CommonModule,
		FormsModule,
		WacomModule,
	]
})
export class CoreModule { }
