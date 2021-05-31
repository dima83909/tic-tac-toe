import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SaveComponent = class SaveComponent {
    constructor(router, http, alert) {
        this.router = router;
        this.http = http;
        this.alert = alert;
        this.user = {};
        if (localStorage.getItem('waw_reset_email')) {
            this.user.email = localStorage.getItem('waw_reset_email');
        }
        if (!this.user.email) {
            this.router.navigate(['/reset']);
        }
    }
    changePass() {
        if (!this.user.code) {
            return this.alert.show({
                type: "error",
                text: 'Enter your code'
            });
        }
        if (!this.user.password) {
            return this.alert.show({
                type: "error",
                text: 'Enter your password',
            });
        }
        this.http.post('/api/user/change', this.user, (resp) => {
            this.alert.show({
                type: "info",
                text: resp
            });
            this.http.post('/api/user/login', this.user, (user) => {
                if (!user) {
                    return this.alert.show({
                        type: "error",
                        text: "Something went wrong",
                    });
                }
                localStorage.setItem('waw_user', JSON.stringify(user));
                this.router.navigate(['/tictactoe']);
            });
        });
    }
};
SaveComponent = __decorate([
    Component({
        selector: 'app-save',
        templateUrl: './save.component.html',
        styleUrls: ['./save.component.scss']
    })
], SaveComponent);
export { SaveComponent };
//# sourceMappingURL=save.component.js.map