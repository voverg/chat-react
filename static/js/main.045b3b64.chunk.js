(this["webpackJsonpchat-react"]=this["webpackJsonpchat-react"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(5),s=a(35),n=a.n(s),r=a(36),o=a(21),i=Object(c.createContext)(null),j=Object(c.createContext)(null),u=a(12),l=a(32),b=a(6),m=function(e){var t=e.user,a=e.message,c=a.user===t?"reverse":"",s=a.user===t?"reverse":"",n=a.user===t?"message__text-right":"message__text-left",r=a.date.slice(0,10);return Object(b.jsxs)("div",{className:"message ".concat(c),children:[Object(b.jsx)("div",{className:"message__icon",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEC0lEQVRoge3ZW2hcRRzH8U+a1DaJ9GJbtVRoq9RLhL4oKiIWRKpCRVS8IAVR1BeRKl6QqhVERXwQqU/6UBEVqYQWUVGK4CX2QaMVr3hrtYpasfZmJUVt1oeZw2w2m012z2wrmC8sy5mZ8/v/55yZ/39mDpNMMkkjOjJqdeJMLMdSnIJj0Bvr9mEXtuFzvIs3sDejD6WYi/vxCypN/obQj7MPuddVTMEq7JYc+wyP4nL0YTamxrazsUR4Y6uxCX9X3fsKFh/SHmAOXq9yYoMwrJplHu7FzqizF5dk8nFcjsWn0fDPOD+D5ly8EDUP4toMmg3pwYfR4MdCp3Jyd9T+Bxdm1h7BumjoK2F4VTOAt4T5UIY10cZO+R8UuCgaOCBM5GqmS/PlspJ2OvBq1HqupNYoOoWIVMGDdernGxm5ekraWyiE5oM4taTWCC4WnNyuvpN9sb4Ipy9jRkmbT0etp0rqjGBDFL1zjPorY/0aIT8UEe0BLMMCIY80s5I4PersxhEteV3DPPwlPO35Y7R5PBo9T3hj/Rpn9GFhufID3sF9OLqObjGcz8rRkaui2KYx6qfiR+xHd1X5MjyBQWH5Mqxx5/7EFTXaT8a62zL0w2PSsKnH9bG+vwnNDmGoLRLm30YpGVbnj+ti+frmXK7PQBS7oE7dQmGIVHBuSTtFMvxOmhPFPPmgpDbCsruC42vKF2JrrHsxg50pgsMVrIhli+P1tgz69kSxWVVli/B9LB/EzByGcGvUXBevZ0mRqzTFJC1C5wxhiVLBRzgqh5HIGVH3/XjdIUW50hRRpeCReP2FEJpzMsfoN1Brvy5dLRg7Scgr1+C3Fu5vxO/YLNMbqKX2iXTjuHYYGoNiaJeiWHpsLe1O63wTfahNlk2xJYqsnEDbh4Xs/lDmtitlyCUHoshEwusfse2+zG2LEDzUqNF4u7kd8b92N1iPtcJTXpu5bWF7/wTajskzUoLKeZg3UTrxvJFJsiUWScPgTWER10rIbpZu3CMccFSEsLygrOhp0nKkglvKCk6A1VX2tgi5KwtdQgeKE5R2DrMuYcNVwdXtMDAFX0cDy9thIHKpdG7WNlZFI2+30cZgtHFjG23oxa/S/jw3K6SDi+5x2pbmdmkf0plRt0uKUjdn1B2THimK5TRYPKBvMS2jbkOKIbDH6C1wK5wo5at6ZwNtZb20SywznnvxSdR6NoNfTTMDX0ofelo5DZyGl6Qd55HZvGuSPmH5UBFO0HubuLcXr0mfEE7O7l2T9OEn6dhmImH5HOkAY4fwFfg/wRIpkQ0Lh3o3CA7OjL+lQpIbkLav7+GEw+BvQ7pwl7BZGu+z9C7cIW8eys5M3CRM4u3Czm5IyD0bhYXg9MPm3SST/E/5F8JqOv2xDtwOAAAAAElFTkSuQmCC"})}),Object(b.jsxs)("div",{className:n,children:[Object(b.jsxs)("div",{className:"message__text-header ".concat(s),children:[Object(b.jsx)("p",{className:"message__author",children:a.user}),Object(b.jsx)("p",{className:"message__date",children:r})]}),a.message]}),Object(b.jsx)("div",{})]})},d=a(24),h=a(30),O=(a(44),["children"]),x=function(e){var t=e.children,a=Object(h.a)(e,O),c=a.className?a.className:"";return Object(b.jsx)("button",Object(d.a)(Object(d.a)({},a),{},{className:"base-button ".concat(c),children:t}))},p=(a(45),["className"]),g=function(e){var t=e.className,a=Object(h.a)(e,p),c=t||"";return Object(b.jsx)("input",Object(d.a)(Object(d.a)({},a),{},{className:"base-input ".concat(c)}))},v=(a(46),function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"spinner"})})}),f=function(e){var t=Object(c.useContext)(i),a=t.isAuth,s=t.setIsAuth,n=t.user,r=t.setUser;return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{className:"navbar__header",children:a&&n?"\u041f\u0440\u0438\u0432\u0435\u0442, ".concat(n,"!"):"\u0427\u0430\u0442"}),Object(b.jsx)("div",{className:"navbar__btns",children:a?Object(b.jsx)(x,{className:"navbar__btn",onClick:function(){s(!1),r(""),localStorage.removeItem("auth"),localStorage.removeItem("user")},children:"\u0412\u044b\u0439\u0442\u0438"}):Object(b.jsx)("div",{className:"navbar__login",children:"\u041b\u043e\u0433\u0438\u043d"})})]})},N=a(11),A="/login",I="/chat",S=a(0),C=a.n(S),D=a(3),w=[{path:A,component:function(e){return Object(b.jsx)("div",{className:"login container",children:Object(b.jsx)(_,{})})},exact:!0}],R=[{path:I,component:function(e){var t=Object(c.useContext)(j),a=t.db,s=t.collection,n=(t.getDocs,t.addDoc),r=(t.doc,t.onSnapshot),o=Object(c.useContext)(i),l=o.user,d=o.isLoading,h=Object(c.useState)(""),O=Object(u.a)(h,2),p=O[0],f=O[1],N=Object(c.useState)([]),A=Object(u.a)(N,2),I=A[0],S=A[1];Object(c.useEffect)((function(){var e=r(s(a,"messages"),(function(e){var t=[];e.forEach((function(e){return t.push(e.data())})),S(t)}));return function(){e()}}),[]);var w=function(){var e=Object(D.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n(s(a,"messages"),{id:Date.now(),user:l,message:p,date:(new Date).toLocaleString("ru")});case 4:c=e.sent,console.log("Document written with ID: ",c.id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 11:f("");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return d?Object(b.jsx)(v,{}):Object(b.jsxs)("div",{className:"chat",children:[Object(b.jsx)("div",{className:"chat__dashboard",children:I.map((function(e){return Object(b.jsx)(m,{user:l,message:e},e.date.toString())}))}),Object(b.jsxs)("form",{className:"chat__new-message",onSubmit:w,children:[Object(b.jsx)(g,{className:"chat__input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",value:p,onChange:function(e){return f(e.target.value)}}),Object(b.jsx)(x,{className:"chat__add-btn",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},exact:!0}],E=function(){var e=Object(c.useContext)(i),t=e.isAuth;return e.isLoading?Object(b.jsx)(v,{}):t?Object(b.jsxs)(N.d,{children:[R.map((function(e){return Object(b.jsx)(N.b,{path:e.path,element:Object(b.jsx)(e.component,{}),exact:e.exact},e.path)})),Object(b.jsx)(N.b,{path:"*",element:Object(b.jsx)(N.a,{to:I})})]}):Object(b.jsxs)(N.d,{children:[w.map((function(e){return Object(b.jsx)(N.b,{path:e.path,element:Object(b.jsx)(e.component,{}),exact:e.exact},e.path)})),Object(b.jsx)(N.b,{path:"*",element:Object(b.jsx)(N.a,{to:A})})]})},_=function(e){var t=Object(c.useContext)(i),a=(t.isAuth,t.setIsAuth),s=t.user,n=t.setUser;t.isLoading;return Object(b.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),a(!0),localStorage.setItem("auth","true"),localStorage.setItem("user","".concat(s))},children:[Object(b.jsx)("h3",{className:"login-form__header",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0447\u0430\u0442\u0435"}),Object(b.jsx)(g,{type:"text",className:"login-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f...",required:!0,value:s,onChange:function(e){var t=e.target.value;n(t)}}),Object(b.jsx)(x,{className:"login-form__btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})},M=(a(47),function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),o=r[0],j=r[1],m=Object(c.useState)(!0),d=Object(u.a)(m,2),h=d[0],O=d[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&s(!0),localStorage.getItem("user")&&j(localStorage.getItem("user")),O(!1)}),[]),Object(b.jsx)(i.Provider,{value:{isAuth:a,setIsAuth:s,user:o,setUser:j,isLoading:h},children:Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(f,{}),Object(b.jsx)(E,{})]})})})}),B=Object(r.a)({apiKey:"AIzaSyAnKe95fzDiqbokcLS88FmGtBERjapSC2I",authDomain:"chat-react-prog.firebaseapp.com",projectId:"chat-react-prog",storageBucket:"chat-react-prog.appspot.com",messagingSenderId:"400703762312",appId:"1:400703762312:web:06fe4045bde9ec7dc4143d",measurementId:"G-18ZCHKGMEW"}),L=Object(o.e)(B);n.a.render(Object(b.jsx)(j.Provider,{value:{firebase:B,db:L,collection:o.b,getDocs:o.d,addDoc:o.a,doc:o.c,onSnapshot:o.f},children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.045b3b64.chunk.js.map