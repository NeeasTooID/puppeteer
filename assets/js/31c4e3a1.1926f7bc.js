/*! For license information please see 31c4e3a1.1926f7bc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35771],{99379:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var s=t(85893),a=t(11151);const n={sidebar_label:"Target"},i="Target class",d={id:"api/puppeteer.target",title:"Target class",description:"Target represents a CDP target. In CDP a target is something that can be debugged such a frame, a page or a worker.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.target.md",sourceDirName:"api",slug:"/api/puppeteer.target",permalink:"/api/puppeteer.target",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Target"},sidebar:"api",previous:{title:"SecurityDetails.validTo",permalink:"/api/puppeteer.securitydetails.validto"},next:{title:"Target.asPage",permalink:"/api/puppeteer.target.aspage"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"target-class",children:"Target class"}),"\n",(0,s.jsxs)(r.p,{children:["Target represents a ",(0,s.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Target/",children:"CDP target"}),". In CDP a target is something that can be debugged such a frame, a page or a worker."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Target\n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"Target"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"aspage",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.aspage",children:"asPage()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Forcefully creates a page for a target of any type. It is useful if you want to handle a CDP target of type ",(0,s.jsx)(r.code,{children:"other"})," as a page. If you deal with a regular page target, use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"browser",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.browser",children:"browser()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Get the browser the target belongs to."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"browsercontext",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.browsercontext",children:"browserContext()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Get the browser context the target belongs to."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"createcdpsession",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.createcdpsession",children:"createCDPSession()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Creates a Chrome Devtools Protocol session attached to the target."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"opener",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.opener",children:"opener()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Get the target that opened this target. Top-level targets return ",(0,s.jsx)(r.code,{children:"null"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"page",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"page()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["If the target is not of type ",(0,s.jsx)(r.code,{children:'"page"'}),", ",(0,s.jsx)(r.code,{children:'"webview"'})," or ",(0,s.jsx)(r.code,{children:'"background_page"'}),", returns ",(0,s.jsx)(r.code,{children:"null"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"type",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.type",children:"type()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Identifies what kind of target this is."}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"https://developer.chrome.com/extensions/background_pages",children:"docs"})," for more info about background pages."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"url",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.url",children:"url()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"worker",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.target.worker",children:"worker()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["If the target is not of type ",(0,s.jsx)(r.code,{children:'"service_worker"'})," or ",(0,s.jsx)(r.code,{children:'"shared_worker"'}),", returns ",(0,s.jsx)(r.code,{children:"null"}),"."]})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var s=t(67294),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var s,n={},o=null,l=null;for(s in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:a,type:e,key:o,ref:l,props:n,_owner:d.current}}r.Fragment=n,r.jsx=o,r.jsxs=o},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>i});var s=t(67294);const a={},n=s.createContext(a);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);