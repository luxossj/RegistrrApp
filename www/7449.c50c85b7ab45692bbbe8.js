(self.webpackChunkRegisterApp=self.webpackChunkRegisterApp||[]).push([[7449],{7449:(r,e,o)=>{"use strict";o.r(e),o.d(e,{LoginPageModule:()=>h});var i=o(8583),n=o(665),t=o(3083),s=o(2316),a=o(4762);class u{constructor(){this.nombreUsuario="",this.password=""}validarNombreUsuario(){return""===this.nombreUsuario.trim()?"Porfavor ingrese un Nombre de Usuario":this.nombreUsuario.length<3||this.nombreUsuario.length>8?"El nombre de usuario debe tener entre 4 o 6 caracteres":""}validarPassword(){if(""===this.password.trim())return"Ingrese la contrase\xf1a para continuar";for(let r=0;r<this.password.length;r++)if(-1==="0123456789".indexOf(this.password.charAt(r)))return"Ingrese una contrase\xf1a numerica";return this.password.length>4?"La contrase\xf1a debe tener mas de 4 digitos":""}}var l=o(639),c=o(6934);const d=[{path:"",component:(()=>{class r{constructor(r,e){this.router=r,this.toastController=e,this.usuario=new u,this.usuario.nombreUsuario="",this.usuario.password=""}ngOnInit(){}ingresarRecovery(){this.router.navigate(["/recovery-password"])}ingresar(){this.validarNombreUsuario(this.usuario)&&this.validarPassword(this.usuario)&&(this.mostrarMensaje("Bienvenido"),this.router.navigate(["/cuenta"],{state:{usuario:this.usuario}}))}validarNombreUsuario(r){const e=r.validarNombreUsuario();return!e||(this.mostrarMensaje(e),!1)}validarPassword(r){const e=r.validarPassword();return!e||(this.mostrarMensaje(e),!1)}mostrarMensaje(r,e){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:r,duration:e||2e3})).present()})}}return r.\u0275fac=function(e){return new(e||r)(l.Y36(s.F0),l.Y36(t.yF))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-login"]],decls:24,vars:2,consts:[[1,"ion-padding-vertical"],[1,"ion-text-center","ion-padding-vertical"],["tituloLogin","BIENVENIDO","subtituloLogin","Plataforma de Asistencia Online","subtituloLogin2","De Duoc UC 2021"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["position","floating",1,"paddingPassword"],["type","password",1,"box",3,"ngModel","ngModelChange"],["size","12"],["color","primary","checked","","slot","start"],["id","login","shape","block",3,"click"],["slot","end","name","arrow-forward-outline"],["id","recovery","shape","block","fill","outline","routerLink","/welcome-page"]],template:function(r,e){1&r&&(l.TgZ(0,"ion-content"),l.TgZ(1,"div",0),l.TgZ(2,"ion-card",1),l._UZ(3,"app-login-header",2),l.TgZ(4,"ion-card-content"),l.TgZ(5,"ion-item"),l.TgZ(6,"ion-label",3),l._uU(7,"Usuario"),l.qZA(),l.TgZ(8,"ion-input",4),l.NdJ("ngModelChange",function(r){return e.usuario.nombreUsuario=r}),l.qZA(),l.qZA(),l.TgZ(9,"ion-item"),l.TgZ(10,"ion-label",5),l._uU(11,"Password"),l.qZA(),l.TgZ(12,"ion-input",6),l.NdJ("ngModelChange",function(r){return e.usuario.password=r}),l.qZA(),l.qZA(),l.TgZ(13,"ion-row"),l.TgZ(14,"ion-col",7),l.TgZ(15,"ion-item"),l.TgZ(16,"ion-label"),l._uU(17,"Recu\xe9rdame"),l.qZA(),l._UZ(18,"ion-checkbox",8),l.qZA(),l.TgZ(19,"ion-button",9),l.NdJ("click",function(){return e.ingresar()}),l._UZ(20,"ion-icon",10),l._uU(21," Iniciar Sesi\xf3n "),l.qZA(),l.TgZ(22,"ion-button",11),l._uU(23,"Volver"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&r&&(l.xp6(8),l.Q6J("ngModel",e.usuario.nombreUsuario),l.xp6(4),l.Q6J("ngModel",e.usuario.password))},directives:[t.W2,t.PM,c.N,t.FN,t.Ie,t.Q$,t.pK,t.j9,n.JJ,n.On,t.Nd,t.wI,t.nz,t.w,t.YG,t.gu,t.YI,s.rH],styles:[""]}),r})()}];let g=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),r})();var p=o(5642);let h=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[i.ez,n.u5,t.Pc,g,p.K]]}),r})()}}]);