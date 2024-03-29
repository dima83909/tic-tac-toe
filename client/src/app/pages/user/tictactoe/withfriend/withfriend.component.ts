import { Component } from '@angular/core';
import { UserService } from '@services'
import { ModalService, UiService } from 'wacom'
@Component({
	selector: 'withfriend',
	templateUrl: './withfriend.component.html',
	styleUrls: ['./withfriend.component.scss']
})
export class WithfriendComponent{
	constructor(
		public us: UserService,
		private modal: ModalService,
		public ui: UiService) {
		ui.var.names = {
			p1: 'Player1',
			p2: 'Player2'
		};
	}
	public disableModal: boolean  = JSON.parse(localStorage.getItem('disableModal'))
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
	disModal() {
		localStorage.setItem('disableModal', this.disableModal.toString())
	}
	step(num, e) {
		if(!e.target.innerText && !this.winner) {
			e.target.innerText = this.player
			this.player == 'X' ? 
			this.dataX.push(num) && e.target.classList.add('x') :
			this.dataO.push(num) && e.target.classList.add('o')
			if((this.dataO.length > 2 || this.dataX.length > 2) && (this.checkWin(this.dataO, num) || this.checkWin(this.dataX, num))) {
				if(!this.us.data.winners[this.player])
					this.us.data.winners[this.player] = 0
				this.us.data.winners[this.player]++
				this.us.update()
				return this.winner = `(${this.player}) ${this.player == 'X' ? this.ui.var.names.p1 : this.ui.var.names.p2} wins!`
			}
			this.stepCount++
			if(this.stepCount == 9) return this.winner = 'DRAW!';
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
		this.player = 'X'
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
	ngOnInit() {
		if(!this.disableModal) {
			this.modal.show({
				component: 'players' 
			})
		}
	}
}
