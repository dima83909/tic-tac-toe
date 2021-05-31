import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ResetComponent = class ResetComponent {
    constructor(router, hash, http, alert) {
        this.router = router;
        this.hash = hash;
        this.http = http;
        this.alert = alert;
        this.user = {};
        this.user.email = this.hash.get('email') || 'ceo@webart.work';
    }
    reset() {
        if (!this.user.email) {
            return this.alert.show({
                type: "error",
                text: 'Enter your email',
            });
        }
        this.hash.set('email', this.user.email);
        this.http.post('/api/user/status', this.user, (resp) => {
            if (resp.email) {
                localStorage.setItem('waw_reset_email', this.user.email);
                this.router.navigate(['/save']);
                this.http.post('/api/user/request', this.user, (resp) => { });
                this.alert.show({
                    text: "Mail will sent to your email"
                });
            }
            else {
                this.alert.show({
                    type: "error",
                    text: "This email not used"
                });
            }
        });
    }
};
ResetComponent = __decorate([
    Component({
        selector: 'app-reset',
        templateUrl: './reset.component.html',
        styleUrls: ['./reset.component.scss']
    })
], ResetComponent);
export { ResetComponent };
//# sourceMappingURL=reset.component.js.map