import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: UsersComponent
    }];
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            UsersComponent
        ],
        providers: []
    })
], UsersModule);
export { UsersModule };
//# sourceMappingURL=users.module.js.map