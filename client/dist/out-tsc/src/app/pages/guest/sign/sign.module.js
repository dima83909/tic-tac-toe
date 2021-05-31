import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SignComponent } from './sign.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: SignComponent
    }];
let SignModule = class SignModule {
};
SignModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            SignComponent
        ],
        providers: []
    })
], SignModule);
export { SignModule };
//# sourceMappingURL=sign.module.js.map