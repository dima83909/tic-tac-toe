import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { TictactoeComponent } from './tictactoe.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: TictactoeComponent
    }];
let TictactoeModule = class TictactoeModule {
};
TictactoeModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            TictactoeComponent
        ],
        providers: []
    })
], TictactoeModule);
export { TictactoeModule };
//# sourceMappingURL=tictactoe.module.js.map