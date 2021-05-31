import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SaveComponent } from './save.component';
import { RouterModule } from '@angular/router';
const routes = [{
        path: '',
        component: SaveComponent
    }];
let SaveModule = class SaveModule {
};
SaveModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
            CoreModule
        ],
        declarations: [
            SaveComponent
        ],
        providers: []
    })
], SaveModule);
export { SaveModule };
//# sourceMappingURL=save.module.js.map