import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsersComponent = class UsersComponent {
    constructor(us, ui) {
        this.us = us;
        this.ui = ui;
        this.search = '';
        this.new_user = {};
    }
    delete() {
        for (let i = this.us.users.length - 1; i >= 0; i--) {
            if (this.us.users[i].generated) {
                this.us.delete(this.us.users[i]);
            }
        }
    }
};
UsersComponent = __decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss']
    })
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map