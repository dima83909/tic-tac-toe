import { Component } from '@angular/core';
@Component({
	selector: 'withcomputer',
	templateUrl: './withcomputer.component.html',
	styleUrls: ['./withcomputer.component.scss']
})
export class WithcomputerComponent{
	constructor() {}
	public xoro: string = 'x'
	public winner: string;
	public player: string = "X";
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
	public board: any = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
	];
	public dataX: any = [];
	public dataO: any = [];
	public ai = "O";
	public human = "X";
	public scores: any = {
		X: 10,
		O: -10,
		tie: 0,
	};
	public ceil = document.getElementsByClassName('game-item')
	step(num:number, e) {
		let row, column;
		if(!e.target.innerText && !this.winner) {
			e.target.innerHTML = this.human
			this.human == 'X' ? e.target.classList.add('x') : e.target.classList.add('o')
			switch(num) {
				case 1: 
				row = 0; column = 0;
				break;
				case 2:
				row = 0; column = 1;
				break;
				case 3:
				row = 0; column = 2;
				break;
				case 4:
				row = 1; column = 0;
				break;
				case 5:
				row = 1; column = 1;
				break;
				case 6:
				row = 1; column = 2;
				break;
				case 7:
				row = 2; column = 0;
				break;
				case 8:
				row = 2; column = 1;
				break;
				case 9:
				row = 2; column = 2;
				break;

			}
			this.board[row][column] = this.human
			let botMove = this.bestMove();
			let winner_ = this.checkWinner();
			if(!winner_) {
				if(botMove) {
					this.board[botMove.i][botMove.j] = this.ai
					this.ceil[botMove.cell].innerHTML = this.ai
					this.ai == 'O' ? this.ceil[botMove.cell].classList.add('o') : this.ceil[botMove.cell].classList.add('x')
				}
			}
			winner_ = this.checkWinner();
			if(winner_) {
				if(winner_ == 'tie') {
					this.winner = 'DRAW!'
				} else {
					this.winner = `${winner_} wins!`
				}
				return
			}
		}
	}
	resetGame() {
		for(let i = 0; i <= 8; i++) {
			this.ceil[i].innerHTML = ''
			this.ceil[i].classList.remove('x', 'o')
		}
		this.dataO = [];
		this.dataX = [];
		this.winner = ''
		this.board = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
		];
		if(this.ai == 'X') this.bot_step();
	}
	bestMove() {
		let bestScore = -Infinity;
		let move;
		let cell: number = -1
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				cell++
				if(this.board[i][j] == "") {
					this.board[i][j] = this.ai;
					let score = this.minimax(this.board, 0, true);
					this.board[i][j] = "";
					if (score > bestScore) {
						bestScore = score;
						move = { i, j, cell };
					}
				}
			}
		}

		return move;
	};

	minimax(board, depth, isMaximizing) {
		let result = this.checkWinner();
		if (result !== null) {
			return this.scores[result];
		}

		if (isMaximizing) {
			let bestScore = -Infinity;
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (this.board[i][j] == "") {
						this.board[i][j] = this.ai;
						let score = this.minimax(this.board, depth + 1, false);
						this.board[i][j] = "";
						bestScore = Math.max(score, bestScore);
					}
				}
			}
			return bestScore;
		} else {
			let bestScore = Infinity;
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (this.board[i][j] == "") {
						this.board[i][j] = this.human;
						let score = this.minimax(this.board, depth + 1, true);
						this.board[i][j] = "";
						bestScore = Math.min(score, bestScore);
					}
				}
			}
			return bestScore;
		}
	};
	equals3(a, b, c) {
		return a == b && b == c && a != "";
	};
	checkWinner() {
		let _winner = null;
		// horizontal
		for (let i = 0; i < 3; i++) {
			if (this.equals3(this.board[i][0], this.board[i][1], this.board[i][2])) {
				_winner = this.board[i][0];
			}
		}
		// Vertical
		for (let i = 0; i < 3; i++) {
			if (this.equals3(this.board[0][i], this.board[1][i], this.board[2][i])) {
				_winner = this.board[0][i];
			}
		}
		// Diagonal
		if (this.equals3(this.board[0][0], this.board[1][1], this.board[2][2])) {
			_winner = this.board[0][0];
		}
		if (this.equals3(this.board[2][0], this.board[1][1], this.board[0][2])) {
			_winner = this.board[2][0];
		}

		let openSpots = 0;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (this.board[i][j] == "") {
					openSpots++;
				}
			}
		}
		if (_winner == null && openSpots == 0) {
			return "tie";
		} else {
			return _winner;
		}
	};
	bot_step() {
		let botMove = this.bestMove();
		if(botMove) {
			this.board[botMove.i][botMove.j] = this.ai
			this.ceil[botMove.cell].innerHTML = this.ai
			this.ai == 'O' ? this.ceil[botMove.cell].classList.add('o') : this.ceil[botMove.cell].classList.add('x')
		}
	}
	choose_xoro() {
		this.human = [this.ai, this.ai = this.human][0]
		if(this.xoro == 'o') {
			this.bot_step()
		}
		this.resetGame()
	}
}
