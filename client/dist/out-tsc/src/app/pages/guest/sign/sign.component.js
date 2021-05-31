import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SignComponent = class SignComponent {
    constructor(router, hash, http, alert) {
        this.router = router;
        this.hash = hash;
        this.http = http;
        this.alert = alert;
        this.user = {};
        this.user.email = this.hash.get('email') || 'ceo@webart.work';
        this.user.password = this.hash.get('password') || 'asdasdasdasd';
        if (this.hash.get('sign'))
            this.sign();
    }
    sign() {
        if (!this.user.email) {
            return this.alert.show({
                type: "error",
                text: 'Enter your email',
            });
        }
        this.hash.set('email', this.user.email);
        if (!this.user.password) {
            return this.alert.show({
                type: "error",
                text: 'Enter your password',
            });
        }
        this.http.post('/api/user/status', this.user, (resp) => {
            if (resp.email) {
                this.alert.show({
                    type: "error",
                    text: "This email already exists",
                });
            }
            else {
                this.http.post('/api/user/signup', this.user, (user) => {
                    if (!user) {
                        return this.alert.show({
                            type: "error",
                            text: "Something went wrong",
                        });
                    }
                    localStorage.setItem('waw_user', JSON.stringify(user));
                    this.router.navigate(['/tictactoe']);
                });
            }
        });
    }
};
SignComponent = __decorate([
    Component({
        selector: 'app-sign',
        templateUrl: './sign.component.html',
        styleUrls: ['./sign.component.scss']
    })
], SignComponent);
export { SignComponent };
//# sourceMappingURL=sign.component.js.map