import { __decorate } from "tslib";
import { Component } from '@angular/core';
let WithcomputerComponent = class WithcomputerComponent {
    constructor() {
        this.player = "X";
        this.stepCount = 0;
        this.win = [
            [1, 2, 3],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 6, 9],
            [3, 5, 7],
            [4, 5, 6],
            [7, 8, 9],
        ];
        this.dataX = [];
        this.dataO = [];
        //Array to track the board
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        //Options available
        this.options = document.querySelectorAll("[name='player-option']");
        //Board
        this.rows = document.querySelectorAll(".row");
        //Result area
        this.result = document.querySelector(".result");
        //Players option
        this.ai = "O";
        this.human = "X";
    }
    step(num, e) {
        if (!e.target.innerText && !this.winner) {
            e.target.innerText = this.player;
            this.player == 'X' ?
                this.dataX.push(num) && e.target.classList.add('x') :
                this.dataO.push(num) && e.target.classList.add('o');
            if ((this.dataO.length > 2 || this.dataX.length > 2) && (this.checkWin(this.dataO, num) || this.checkWin(this.dataX, num))) {
                return this.winner = 'Player won: ' + this.player;
            }
            console.log(this.stepComputer(this.dataO, num));
            this.stepCount++;
            if (this.stepCount == 9)
                return this.winner = 'DRAW!';
            this.player == 'X' ? this.player = "O" : this.player = 'X';
        }
    }
    resetGame() {
        var ceil = document.getElementsByClassName('game-item');
        console.log(ceil);
        for (let i = 0; i <= 8; i++) {
            ceil[i].innerHTML = '';
            ceil[i].classList.remove('x', 'o');
        }
        this.dataO = [];
        this.dataX = [];
        this.stepCount = 0;
        this.winner = '';
    }
    checkWin(arr, number) {
        for (var w = 0; w < this.win.length; w++) {
            var someWinArr = this.win[w], count = 0;
            if (someWinArr.indexOf(number) !== -1) {
                for (var k = 0; k < someWinArr.length; k++) {
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
};
WithcomputerComponent = __decorate([
    Component({
        selector: 'withcomputer',
        templateUrl: './withcomputer.component.html',
        styleUrls: ['./withcomputer.component.scss']
    })
], WithcomputerComponent);
export { WithcomputerComponent };
//# sourceMappingURL=withcomputer.component.js.map