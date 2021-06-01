import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import * as io from 'socket.io-client'
@Injectable({
	providedIn: 'root'
})
export class SocketService {
	private host: string = 'http://localhost:3000';
	private socket: any;
	constructor() {
		this.socket = io(this.host)
		// this.socket.on('connect', () => this.connected());
		// this.socket.on('disconnect', () => this.disconnected())
		// this.socket.on('error', (error: string) => {
		// 	console.log(`ERROR: "${error}" (${this.host})`);
		// })
	}
	listen(eventName: string) {
		return new Observable((subscriber) => {
			this.socket.on(eventName, (data) => {
				subscriber.next(data)
			})
		})
	}

	emit(eventName: string, data: any) {
		this.socket.emit(eventName, data)
	}
	// connect() {
	// 	this.socket.connect();
	// }
	// disconnect() {
	// 	this.socket.disconnect();
	// }
	// emit(chanel:string, message:any) {
	// 	return new Observable<any>(observer => {
	// 		this.socket.emit(chanel, message, function (data) {
	// 			if (data.success) {
	// 				observer.next(data.msg);
	// 			} else {
	// 				observer.error(data.msg);
	// 			}
	// 			observer.complete();
	// 		});
	// 	});
	// }
	// on(event_name) {
	// 	return new Observable<any>(observer => {
	// 		this.socket.off(event_name); 
	// 		this.socket.on(event_name, (data) => {
	// 			observer.next(data);
	// 		});
	// 	});
	// }
	private connected() {
		console.log('connected');
		// let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		// this.emit("user_token", currentUser.token).subscribe(
		// 	(data) => {
		// 		console.log('Success',data);
		// 	},
		// 	(error) => {
		// 		console.log('Error',error);
		// 	},
		// 	() => {
		// 		console.log('complete');
		// 	}
		// 	);
	}
	private disconnected() {
		console.log('Disconnected');
	}
}
