import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(router, hash, http, alert) {
        this.router = router;
        this.hash = hash;
        this.http = http;
        this.alert = alert;
        this.user = {};
        this.user.email = this.hash.get('email') || 'ceo@webart.work';
        this.user.password = this.hash.get('password') || 'asdasdasdasd';
        if (this.hash.get('login'))
            this.login();
    }
    login() {
        console.log(this.alert.show);
        if (!this.user.email) {
            return this.alert.show({
                type: "error",
                text: 'Enter your email',
                position: "center"
            });
        }
        this.hash.set('email', this.user.email);
        if (!this.user.password) {
            return this.alert.show({
                type: "error",
                text: 'Enter your password'
            });
        }
        this.http.post('/api/user/status', this.user, (resp) => {
            if (resp.email && resp.pass) {
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
            }
            else {
                this.alert.show({
                    type: "error",
                    text: "Wrong email or password"
                });
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map