import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { WithfriendComponent } from './withfriend.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: WithfriendComponent
    }];
let WithfriendModule = class WithfriendModule {
};
WithfriendModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            WithfriendComponent
        ],
        providers: []
    })
], WithfriendModule);
export { WithfriendModule };
//# sourceMappingURL=withfriend.module.js.map