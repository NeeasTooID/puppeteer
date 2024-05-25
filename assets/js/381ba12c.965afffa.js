/*! For license information please see 381ba12c.965afffa.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54977],{56828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(85893),r=n(11151);const i={sidebar_label:"Page.setContent"},o="Page.setContent() method",a={id:"api/puppeteer.page.setcontent",title:"Page.setContent() method",description:"Set the content of the page.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.page.setcontent.md",sourceDirName:"api",slug:"/api/puppeteer.page.setcontent",permalink:"/api/puppeteer.page.setcontent",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Page.setContent"},sidebar:"api",previous:{title:"Page.setCacheEnabled",permalink:"/api/puppeteer.page.setcacheenabled"},next:{title:"Page.setCookie",permalink:"/api/puppeteer.page.setcookie"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagesetcontent-method",children:"Page.setContent() method"}),"\n",(0,s.jsx)(t.p,{children:"Set the content of the page."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  setContent(html: string, options?: WaitForOptions): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"html"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"HTML markup to assign to the page."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," Parameters that has some properties."]})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["The parameter ",(0,s.jsx)(t.code,{children:"options"})," might have the following options."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"timeout"})," : Maximum time in milliseconds for resources to load, defaults to 30 seconds, pass ",(0,s.jsx)(t.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," or ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," methods."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"waitUntil"}),": When to consider setting markup succeeded, defaults to ",(0,s.jsx)(t.code,{children:"load"}),". Given an array of event strings, setting content is considered to be successful after all events have been fired. Events can be either:",(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.code,{children:"load"})," : consider setting content to be finished when the ",(0,s.jsx)(t.code,{children:"load"})," event is fired.",(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.code,{children:"domcontentloaded"})," : consider setting content to be finished when the ",(0,s.jsx)(t.code,{children:"DOMContentLoaded"})," event is fired.",(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.code,{children:"networkidle0"})," : consider setting content to be finished when there are no more than 0 network connections for at least ",(0,s.jsx)(t.code,{children:"500"})," ms.",(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.code,{children:"networkidle2"})," : consider setting content to be finished when there are no more than 2 network connections for at least ",(0,s.jsx)(t.code,{children:"500"})," ms."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var s=n(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,l=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);