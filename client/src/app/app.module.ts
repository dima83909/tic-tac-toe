import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { GuestComponent } from './layout/guest/guest.component';
import { UserComponent } from './layout/user/user.component';
import { Authenticated, Guest, Admins } from '@services';
import { AppComponent } from './app.component';
import { CoreModule } from '@core';
// config
import { WacomModule, MetaGuard } from 'wacom';
/*
*	Routing Management
*/
	const routes: Routes = [{
		path: '', redirectTo: 'profile', pathMatch: 'full'
	}, {
		path: '',
		canActivate: [Authenticated],
		component: UserComponent,
		children: [/* user */{
			path: 'profile',
			canActivate: [MetaGuard],
			data: {
				meta: {
					title: 'My Profile'
				}
			},
			loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
		}]
	}, {
		path: '',
		canActivate: [Admins],
		component: UserComponent,
		children: [/* admin */{
			path: 'users',
			canActivate: [MetaGuard],
			data: {
				meta: {
					title: 'Users'
				}
			},
			loadChildren: () => import('./pages/admin/users/users.module').then(m => m.UsersModule)
		}]
	}, {
		path: '',
		canActivate: [Guest],
		component: GuestComponent,
		children: [/* guest */{
			path: 'login',
			canActivate: [MetaGuard],
			data: {
				meta: {
					title: 'Login'
				}
			},
			loadChildren: () => import('./pages/guest/login/login.module').then(m => m.LoginModule)
		}, {
			path: 'sign',
			canActivate: [MetaGuard],
			data: {
				meta: {
					title: 'Sign Up'
				}
			},
			loadChildren: () => import('./pages/guest/sign/sign.module').then(m => m.SignModule)
		}, {
			path: 'reset',
			canActivate: [MetaGuard],
			data: {
				meta: {
					title: 'Reset Password'
				}
			},
			loadChildren: () => import('./pages/guest/reset/reset.module').then(m => m.ResetModule)
		}, {
			path: 'save',
			canActivate: [MetaGuard],
			data: {
				meta: {
					title: 'New Password'
				}
			},
			loadChildren: () => import('./pages/guest/save/save.module').then(m => m.SaveModule)
		}]
	}, {
		path: '**', redirectTo: 'profile', pathMatch: 'full'
	}];
/* Bootstrap */

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		WacomModule.forRoot({
			socket: false,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: 'Web Art Work',
					titleSuffix: ' | Web Art Work',
					'og:image': 'https://webart.work/api/user/cdn/waw-logo.png'
				}
			},
			alert: {
				alerts: { /* alerts */

				}
			},
			modal: {
				modals: { /* modals */

				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [Authenticated, Guest, Admins],
	bootstrap: [AppComponent]
})
export class AppModule { }
