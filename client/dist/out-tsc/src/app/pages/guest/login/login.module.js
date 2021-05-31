import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: LoginComponent
    }];
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            LoginComponent
        ],
        providers: []
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map