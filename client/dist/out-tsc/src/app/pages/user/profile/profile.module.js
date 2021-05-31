import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: ProfileComponent
    }];
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            ProfileComponent
        ],
        providers: []
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map