import { Component } from '@angular/core';
@Component({
	selector: 'withfriend',
	templateUrl: './withfriend.component.html',
	styleUrls: ['./withfriend.component.scss']
})
export class WithfriendComponent{
	constructor() {}
	public play: number 
	public winner: string;
	public player: string = "X";
	public stepCount: number = 0;
	public win: any = [
	[1, 2, 3],
	[1, 4, 7],
	[1, 5, 9],
	[2, 5, 8],
	[3, 6, 9],
	[3, 5, 7],
	[4, 5, 6],
	[7, 8, 9],
	]
	public dataX: any = [];
	public dataO: any = [];
	step(num, e) {
		if(!e.target.innerText && !this.winner) {
			e.target.innerText = this.player
			this.player == 'X' ? 
			this.dataX.push(num) && e.target.classList.add('x') :
			this.dataO.push(num) && e.target.classList.add('o')
			if((this.dataO.length > 2 || this.dataX.length > 2) && (this.checkWin(this.dataO, num) || this.checkWin(this.dataX, num))) {
				return this.winner = `${this.player} wins!`
			}
			this.stepCount++
			if(this.stepCount == 9) return this.winner = 'DRAW!'
			this.player == 'X' ? this.player = "O" : this.player = 'X'
		}
	}
	resetGame() {
		var ceil = document.getElementsByClassName('game-item')
		console.log(ceil);
		for(let i = 0; i <= 8; i++) {
			ceil[i].innerHTML = ''
			ceil[i].classList.remove('x', 'o')
		}
		this.dataO = [];
		this.dataX = [];
		this.stepCount = 0;
		this.winner = ''
	}
	checkWin(arr, number) {
		for (var w = 0, wLen = this.win.length; w < wLen; w++) {
			var someWinArr = this.win[w],
			count = 0;
			if (someWinArr.indexOf(number) !== -1) {
				for (var k = 0, kLen = someWinArr.length; k < kLen; k++) {
					if (arr.indexOf(someWinArr[k]) !== -1) {
						count++;
						if (count === 3) {
							return true;
						}
					}
				}
				count = 0;
			}
		}
	}
}
