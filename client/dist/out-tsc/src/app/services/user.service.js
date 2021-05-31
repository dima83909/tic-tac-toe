import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    /*
    *	Declarations
    */
    constructor(mongo, file, router, http) {
        this.mongo = mongo;
        this.file = file;
        this.router = router;
        this.http = http;
        this.roles = ['admin'];
        this.users = [];
        this.me = { data: {} };
        file.add({
            id: 'userAvatarUrl',
            resize: 256,
            part: 'user',
            cb: file => {
                if (typeof file != 'string')
                    return;
                this.me.avatarUrl = file;
            }
        });
        mongo.config('user', {
            replace: {
                data: (data, cb, doc) => {
                    if (typeof data != 'object')
                        data = {};
                    console.log(data);
                    cb(data);
                },
                is: mongo.beObj
            }
        });
        this.me = mongo.fetch('user', {
            name: 'me'
        }, me => {
            if (!me._id && localStorage.getItem('waw_user'))
                this.logout();
        });
        this.users = mongo.get('user');
    }
    /*
    *	User Management
    */
    create(user) {
        this.mongo.create('user', user);
    }
    doc(userId) {
        return this.mongo.fetch('user', {
            query: { _id: userId }
        });
    }
    update() {
        this.mongo.afterWhile(this, () => {
            this.mongo.update('user', this.me);
        });
    }
    save(user) {
        this.mongo.afterWhile(this, () => {
            this.mongo.update('user', user, {
                name: 'admin'
            });
        });
    }
    delete(user) {
        this.mongo.delete('user', user, {
            name: 'admin'
        });
    }
    change_password(oldPass, newPass) {
        this.http.post('/api/user/changePassword', {
            newPass: newPass,
            oldPass: oldPass
        }).subscribe(resp => {
            if (resp)
                alert('successfully changed password');
            else
                alert('failed to change password');
        });
    }
    logout() {
        localStorage.removeItem('waw_user');
        this.http.get('/api/user/logout').subscribe((resp) => { });
        this.router.navigate(['/login']);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
let Admins = class Admins {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('waw_user')) {
            let user = JSON.parse(localStorage.getItem('waw_user'));
            if (user.is && user.is.admin)
                return true;
            this.router.navigate(['/profile']);
            return false;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
Admins = __decorate([
    Injectable()
], Admins);
export { Admins };
let Authenticated = class Authenticated {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('waw_user')) {
            return true;
        }
        else {
            return this.router.navigate(['/login']);
        }
    }
};
Authenticated = __decorate([
    Injectable()
], Authenticated);
export { Authenticated };
let Guest = class Guest {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('waw_user')) {
            return this.router.navigate(['/']);
        }
        else {
            return true;
        }
    }
};
Guest = __decorate([
    Injectable()
], Guest);
export { Guest };
//# sourceMappingURL=user.service.js.map