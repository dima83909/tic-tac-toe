(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0+ev":function(e,t,r){"use strict";r.r(t),r.d(t,"SaveModule",function(){return c});var s=r("ey9i"),n=r("fXoL"),o=r("tyNb"),i=r("zJV+"),a=r("3Pt+");const u=[{path:"",component:(()=>{class e{constructor(e,t,r){this.router=e,this.http=t,this.alert=r,this.user={},localStorage.getItem("waw_reset_email")&&(this.user.email=localStorage.getItem("waw_reset_email")),this.user.email||this.router.navigate(["/reset"])}changePass(){return this.user.code?this.user.password?void this.http.post("/api/user/change",this.user,e=>{this.alert.show({type:"info",text:e}),this.http.post("/api/user/login",this.user,e=>{if(!e)return this.alert.show({type:"error",text:"Something went wrong"});localStorage.setItem("waw_user",JSON.stringify(e)),this.router.navigate(["/profile"])})}):this.alert.show({type:"error",text:"Enter your password"}):this.alert.show({type:"error",text:"Enter your code"})}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(o.c),n.Mb(i.e),n.Mb(i.a))},e.\u0275cmp=n.Gb({type:e,selectors:[["app-save"]],decls:21,vars:2,consts:[[1,"auth-wrapper"],[1,"auth"],[1,"auth__title"],[1,"auth__forms",3,"ngSubmit"],[1,"forms"],[1,"forms__title"],["type","text","placeholder","Code","name","code",1,"forms__input",3,"ngModel","keydown.enter","ngModelChange"],["type","password","placeholder","New password","name","password",1,"forms__input",3,"ngModel","keydown.enter","ngModelChange"],[1,"auth__btn"],["type","submit",1,"btn","_primary"],[1,"auth__links"],["routerLink","/login",1,"auth__link"],["routerLink","/sign",1,"auth__link"]],template:function(e,t){1&e&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Cc(3,"Set New Password"),n.Rb(),n.Sb(4,"form",3),n.cc("ngSubmit",function(){return t.changePass()}),n.Sb(5,"div",4),n.Sb(6,"span",5),n.Cc(7,"Code:"),n.Rb(),n.Sb(8,"input",6),n.cc("keydown.enter",function(){return t.changePass()})("ngModelChange",function(e){return t.user.code=e}),n.Rb(),n.Rb(),n.Sb(9,"div",4),n.Sb(10,"span",5),n.Cc(11,"Password:"),n.Rb(),n.Sb(12,"input",7),n.cc("keydown.enter",function(){return t.changePass()})("ngModelChange",function(e){return t.user.password=e}),n.Rb(),n.Rb(),n.Sb(13,"div",8),n.Sb(14,"button",9),n.Cc(15,"Save"),n.Rb(),n.Rb(),n.Rb(),n.Sb(16,"div",10),n.Sb(17,"a",11),n.Cc(18,"Login"),n.Rb(),n.Sb(19,"a",12),n.Cc(20,"Sign up"),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&e&&(n.zb(8),n.lc("ngModel",t.user.code),n.zb(4),n.lc("ngModel",t.user.password))},directives:[a.m,a.g,a.h,a.b,a.f,a.i,o.f],styles:[""]}),e})()}];let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({providers:[],imports:[[o.g.forChild(u),s.a]]}),e})()}}]);