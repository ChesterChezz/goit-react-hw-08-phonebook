"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[428],{428:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var o,a,i,t,p,s=r(439),d=r(686),c=r.n(d),l=r(168),u=r(867),x=u.ZP.div(o||(o=(0,l.Z)(["\n  width: 1380px;\n  padding: 10px;\n  margin: 0 auto;\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),f=u.ZP.form(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 400px;\n  padding: 12px;\n  font-weight: 500;\n  background-color: #a9b1b8;\n  border: 3px solid #94c8ee;\n  border-radius: 8px;\n"]))),h=u.ZP.input(i||(i=(0,l.Z)(["\n  margin-top: 10px;\n  margin-bottom: 6px;\n  padding: 6px 10px;\n  border-radius: 5px;\n  font: inherit;\n  cursor: pointer;\n"]))),b=u.ZP.label(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2px;\n  color: #425a6b;\n  font-size: 20px;\n"]))),g=u.ZP.button(p||(p=(0,l.Z)(["\n  padding: 6px 10px;\n  margin-top: 10px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 3px solid #d7e2ea;\n  background-color: #d7e2ea;\n  color: #425a6b;\n  font-size: 20px;\n\n  &:hover,\n  &:focus {\n    color: black;\n    background-color: #f3f3f3;\n    cursor: pointer;\n  }\n"]))),m=r(184),w=r(791).useState,k=r(101).useDispatch,Z=r(131).loginThunk,v=function(){var n=k(),e=w(""),r=(0,s.Z)(e,2),o=r[0],a=r[1],i=w(""),t=(0,s.Z)(i,2),p=t[0],d=t[1],l=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"email":a(o);break;case"password":d(o);break;default:throw new Error}};return(0,m.jsx)(x,{children:(0,m.jsxs)(f,{onSubmit:function(e){e.preventDefault(),n(Z({email:o,password:p})).unwrap().then((function(){a(""),d("")})).catch((function(){return c().Notify.failure("Incorrect login or password")}))},children:[(0,m.jsx)(b,{children:"Email address"}),(0,m.jsx)(h,{onChange:l,name:"email",value:o,type:"email",placeholder:"Enter email"}),(0,m.jsx)(b,{children:"Password"}),(0,m.jsx)(h,{onChange:l,type:"password",name:"password",value:p,placeholder:"Password"}),(0,m.jsx)(g,{type:"submit",children:"Log in"})]})})}}}]);
//# sourceMappingURL=428.a703aed7.chunk.js.map