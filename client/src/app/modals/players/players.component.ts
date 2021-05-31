import { Component } from '@angular/core';
import {  UiService } from 'wacom'
@Component({
	selector: 'players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
	public close: any
	constructor(
		public ui: UiService) {
	}
}
