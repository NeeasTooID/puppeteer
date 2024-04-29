/*! For license information please see 32896cfa.a0e420ca.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35416],{37938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(85893),t=s(11151);const i={sidebar_label:"CDPSession.send"},o="CDPSession.send() method",d={id:"api/puppeteer.cdpsession.send",title:"CDPSession.send() method",description:"Signature:",source:"@site/versioned_docs/version-22.7.1/api/puppeteer.cdpsession.send.md",sourceDirName:"api",slug:"/api/puppeteer.cdpsession.send",permalink:"/api/puppeteer.cdpsession.send",draft:!1,unlisted:!1,tags:[],version:"22.7.1",frontMatter:{sidebar_label:"CDPSession.send"},sidebar:"api",previous:{title:"CDPSession.id",permalink:"/api/puppeteer.cdpsession.id"},next:{title:"Coverage",permalink:"/api/puppeteer.coverage"}},p={},a=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cdpsessionsend-method",children:"CDPSession.send() method"}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class CDPSession {\n  abstract send<T extends keyof ProtocolMapping.Commands>(\n    method: T,\n    params?: ProtocolMapping.Commands[T]['paramsType'][0],\n    options?: CommandOptions\n  ): Promise<ProtocolMapping.Commands[T]['returnType']>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"method"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"T"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"params"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"ProtocolMapping.Commands[T]['paramsType'][0]"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Optional)"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/puppeteer.commandoptions",children:"CommandOptions"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<ProtocolMapping.Commands[T]['returnType']>"})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,n,s)=>{var r=s(67294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,i={},a=null,c=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,r)&&!p.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:d.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},85893:(e,n,s)=>{e.exports=s(75251)},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var r=s(67294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);