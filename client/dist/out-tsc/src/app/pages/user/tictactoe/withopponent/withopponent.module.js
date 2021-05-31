import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { WithopponentComponent } from './withopponent.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: WithopponentComponent
    }];
let WithopponentModule = class WithopponentModule {
};
WithopponentModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            WithopponentComponent
        ],
        providers: []
    })
], WithopponentModule);
export { WithopponentModule };
//# sourceMappingURL=withopponent.module.js.map