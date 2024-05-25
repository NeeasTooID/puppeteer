/*! For license information please see e87241ca.ab70cc49.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68084],{23721:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=r(85893),d=r(11151);const l={sidebar_label:"ElementHandle.dragAndDrop"},s="ElementHandle.dragAndDrop() method",a={id:"api/puppeteer.elementhandle.draganddrop",title:"ElementHandle.dragAndDrop() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.elementhandle.draganddrop.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.draganddrop",permalink:"/api/puppeteer.elementhandle.draganddrop",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"ElementHandle.dragAndDrop"},sidebar:"api",previous:{title:"ElementHandle.drag",permalink:"/api/puppeteer.elementhandle.drag"},next:{title:"ElementHandle.dragEnter",permalink:"/api/puppeteer.elementhandle.dragenter"}},i={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"elementhandledraganddrop-method",children:"ElementHandle.dragAndDrop() method"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"ElementHandle.drop"})," instead."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  dragAndDrop(\n    this: ElementHandle<Element>,\n    target: ElementHandle<Node>,\n    options?: {\n      delay: number;\n    }\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"this"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Element>"]})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"target"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Node>"]})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"{ delay: number; }"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<void>"})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,n,r)=>{var t=r(67294),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,l={},o=null,p=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,t)&&!i.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:d,type:e,key:o,ref:p,props:l,_owner:a.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const d={},l=t.createContext(d);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);