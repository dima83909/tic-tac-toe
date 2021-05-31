import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ResetComponent } from './reset.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: ResetComponent
    }];
let ResetModule = class ResetModule {
};
ResetModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            ResetComponent
        ],
        providers: []
    })
], ResetModule);
export { ResetModule };
//# sourceMappingURL=reset.module.js.map