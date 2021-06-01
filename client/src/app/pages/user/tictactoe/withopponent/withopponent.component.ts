import { Component , OnInit } from '@angular/core';
import { SocketService } from '@services';
@Component({
	selector: 'withopponent',
	templateUrl: './withopponent.component.html',
	styleUrls: ['./withopponent.component.scss'],
})
export class WithopponentComponent implements OnInit {
	constructor(
		private socket: SocketService) {
	}
	ngOnInit() {
		this.socket.listen('test event').subscribe((data) => {
			console.log(data);
		})
	}
}