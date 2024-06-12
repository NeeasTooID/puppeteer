/*! For license information please see c05e1d1a.c97d18b4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38966],{8492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(85893),i=r(11151);const o={sidebar_label:"Predicate"},a="Predicate type",p={id:"api/puppeteer.predicate",title:"Predicate type",description:"Signature:",source:"@site/versioned_docs/version-22.10.1/api/puppeteer.predicate.md",sourceDirName:"api",slug:"/api/puppeteer.predicate",permalink:"/api/puppeteer.predicate",draft:!1,unlisted:!1,tags:[],version:"22.10.1",frontMatter:{sidebar_label:"Predicate"},sidebar:"api",previous:{title:"PredefinedNetworkConditions",permalink:"/api/puppeteer.predefinednetworkconditions"},next:{title:"Product",permalink:"/api/puppeteer.product"}},s={},c=[{value:"Signature:",id:"signature",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"predicate-type",children:"Predicate type"}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type Predicate<From, To extends From = From> =\n  | ((value: From) => value is To)\n  | ((value: From) => Awaitable<boolean>);\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/api/puppeteer.awaitable",children:"Awaitable"})]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:p.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>a});var n=r(67294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);