import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { WithcomputerComponent } from './withcomputer.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: WithcomputerComponent
    }];
let WithcomputerModule = class WithcomputerModule {
};
WithcomputerModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            WithcomputerComponent
        ],
        providers: []
    })
], WithcomputerModule);
export { WithcomputerModule };
//# sourceMappingURL=withcomputer.module.js.map