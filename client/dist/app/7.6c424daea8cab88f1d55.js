(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0+ev":function(e,t,r){"use strict";r.r(t),r.d(t,"SaveModule",function(){return b});var s=r("ey9i"),n=r("fXoL"),o=r("tyNb"),a=r("zJV+"),i=r("3Pt+");const u=[{path:"",component:(()=>{class e{constructor(e,t,r){this.router=e,this.http=t,this.alert=r,this.user={},localStorage.getItem("waw_reset_email")&&(this.user.email=localStorage.getItem("waw_reset_email")),this.user.email||this.router.navigate(["/reset"])}changePass(){return this.user.code?this.user.password?void this.http.post("/api/user/change",this.user,e=>{this.alert.show({type:"info",text:e}),this.http.post("/api/user/login",this.user,e=>{if(!e)return this.alert.show({type:"error",text:"Something went wrong"});localStorage.setItem("waw_user",JSON.stringify(e)),this.router.navigate(["/profile"])})}):this.alert.show({type:"error",text:"Enter your password"}):this.alert.show({type:"error",text:"Enter your code"})}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(o.c),n.Kb(a.e),n.Kb(a.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-save"]],decls:21,vars:2,consts:[[1,"auth-wrapper"],[1,"auth"],[1,"auth__title"],[1,"auth__forms",3,"ngSubmit"],[1,"forms"],[1,"forms__title"],["type","text","placeholder","Code","name","code",1,"forms__input",3,"ngModel","keydown.enter","ngModelChange"],["type","password","placeholder","New password","name","password",1,"forms__input",3,"ngModel","keydown.enter","ngModelChange"],[1,"auth__btn"],["type","submit",1,"btn","_primary"],[1,"auth__links"],["routerLink","/login",1,"auth__link"],["routerLink","/sign",1,"auth__link"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"div",2),n.qc(3,"Set New Password"),n.Pb(),n.Qb(4,"form",3),n.Xb("ngSubmit",function(){return t.changePass()}),n.Qb(5,"div",4),n.Qb(6,"span",5),n.qc(7,"Code:"),n.Pb(),n.Qb(8,"input",6),n.Xb("keydown.enter",function(){return t.changePass()})("ngModelChange",function(e){return t.user.code=e}),n.Pb(),n.Pb(),n.Qb(9,"div",4),n.Qb(10,"span",5),n.qc(11,"Password:"),n.Pb(),n.Qb(12,"input",7),n.Xb("keydown.enter",function(){return t.changePass()})("ngModelChange",function(e){return t.user.password=e}),n.Pb(),n.Pb(),n.Qb(13,"div",8),n.Qb(14,"button",9),n.qc(15,"Save"),n.Pb(),n.Pb(),n.Pb(),n.Qb(16,"div",10),n.Qb(17,"a",11),n.qc(18,"Login"),n.Pb(),n.Qb(19,"a",12),n.qc(20,"Sign up"),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(8),n.dc("ngModel",t.user.code),n.zb(4),n.dc("ngModel",t.user.password))},directives:[i.j,i.e,i.f,i.b,i.d,i.g,o.e],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({providers:[],imports:[[o.f.forChild(u),s.a]]}),e})()}}]);