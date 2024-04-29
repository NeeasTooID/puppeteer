/*! For license information please see d1b032bb.4535ad30.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29449],{17461:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),n=s(11151);const i={sidebar_label:"Page.waitForResponse"},a="Page.waitForResponse() method",o={id:"api/puppeteer.page.waitforresponse",title:"Page.waitForResponse() method",description:"Signature:",source:"@site/versioned_docs/version-22.7.1/api/puppeteer.page.waitforresponse.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforresponse",permalink:"/api/puppeteer.page.waitforresponse",draft:!1,unlisted:!1,tags:[],version:"22.7.1",frontMatter:{sidebar_label:"Page.waitForResponse"},sidebar:"api",previous:{title:"Page.waitForRequest",permalink:"/api/puppeteer.page.waitforrequest"},next:{title:"Page.waitForSelector",permalink:"/api/puppeteer.page.waitforselector"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"pagewaitforresponse-method",children:"Page.waitForResponse() method"}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  waitForResponse(\n    urlOrPredicate: string | AwaitablePredicate<HTTPResponse>,\n    options?: WaitTimeoutOptions\n  ): Promise<HTTPResponse>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"urlOrPredicate"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["string | ",(0,t.jsx)(r.a,{href:"/api/puppeteer.awaitablepredicate",children:"AwaitablePredicate"}),"<",(0,t.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"A URL or predicate to wait for."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Optional waiting parameters"]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),">"]}),"\n",(0,t.jsx)(r.p,{children:"Promise which resolves to the matched response."}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"Optional Parameter have:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"timeout"}),": Maximum wait time in milliseconds, defaults to ",(0,t.jsx)(r.code,{children:"30"})," seconds, pass ",(0,t.jsx)(r.code,{children:"0"})," to disable the timeout. The default value can be changed by using the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const firstResponse = await page.waitForResponse(\n  'https://example.com/resource'\n);\nconst finalResponse = await page.waitForResponse(\n  response =>\n    response.url() === 'https://example.com' && response.status() === 200\n);\nconst finalResponse = await page.waitForResponse(async response => {\n  return (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,r,s)=>{var t=s(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,i={},l=null,c=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!p.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:c,props:i,_owner:o.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>a});var t=s(67294);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);