/*! For license information please see 2e1871d7.1cc1ebb4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8793],{38503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(85893),a=t(11151);const s={sidebar_label:"Frame.evaluateHandle"},l="Frame.evaluateHandle() method",i={id:"api/puppeteer.frame.evaluatehandle",title:"Frame.evaluateHandle() method",description:"Behaves identically to Page.evaluateHandle() except it's run within the context of this frame.",source:"@site/../docs/api/puppeteer.frame.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluatehandle",permalink:"/next/api/puppeteer.frame.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Frame.evaluateHandle"},sidebar:"api",previous:{title:"Frame.evaluate",permalink:"/next/api/puppeteer.frame.evaluate"},next:{title:"Frame.focus",permalink:"/next/api/puppeteer.frame.focus"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"frameevaluatehandle-method",children:"Frame.evaluateHandle() method"}),"\n",(0,r.jsxs)(n.p,{children:["Behaves identically to ",(0,r.jsx)(n.a,{href:"/next/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Func | string"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Params"})}),(0,r.jsx)("td",{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/next/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,n,t)=>{var r=t(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:o,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);