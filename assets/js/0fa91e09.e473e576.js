/*! For license information please see 0fa91e09.e473e576.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86156],{69772:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=t(85893),a=t(11151);const n={sidebar_label:"Coverage"},o="Coverage class",c={id:"api/puppeteer.coverage",title:"Coverage class",description:"The Coverage class provides methods to gather information about parts of JavaScript and CSS that were used by the page.",source:"@site/versioned_docs/version-22.7.1/api/puppeteer.coverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage",permalink:"/api/puppeteer.coverage",draft:!1,unlisted:!1,tags:[],version:"22.7.1",frontMatter:{sidebar_label:"Coverage"},sidebar:"api",previous:{title:"CDPSession.send",permalink:"/api/puppeteer.cdpsession.send"},next:{title:"Coverage.(constructor)",permalink:"/api/puppeteer.coverage._constructor_"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"coverage-class",children:"Coverage class"}),"\n",(0,s.jsx)(r.p,{children:"The Coverage class provides methods to gather information about parts of JavaScript and CSS that were used by the page."}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare class Coverage\n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["To output coverage in a form consumable by ",(0,s.jsx)(r.a,{href:"https://github.com/istanbuljs",children:"Istanbul"}),", see ",(0,s.jsx)(r.a,{href:"https://github.com/istanbuljs/puppeteer-to-istanbul",children:"puppeteer-to-istanbul"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"An example of using JavaScript and CSS coverage to get percentage of initially executed code:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// Enable both JavaScript and CSS coverage\nawait Promise.all([\n  page.coverage.startJSCoverage(),\n  page.coverage.startCSSCoverage(),\n]);\n// Navigate to page\nawait page.goto('https://example.com');\n// Disable both JavaScript and CSS coverage\nconst [jsCoverage, cssCoverage] = await Promise.all([\n  page.coverage.stopJSCoverage(),\n  page.coverage.stopCSSCoverage(),\n]);\nlet totalBytes = 0;\nlet usedBytes = 0;\nconst coverage = [...jsCoverage, ...cssCoverage];\nfor (const entry of coverage) {\n  totalBytes += entry.text.length;\n  for (const range of entry.ranges) usedBytes += range.end - range.start - 1;\n}\nconsole.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);\n"})}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Constructor"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"_constructor_",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.coverage._constructor_",children:"(constructor)(client)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,s.jsx)(r.code,{children:"Coverage"})," class"]})})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"startcsscoverage",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.coverage.startcsscoverage",children:"startCSSCoverage(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"startjscoverage",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.coverage.startjscoverage",children:"startJSCoverage(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"stopcsscoverage",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.coverage.stopcsscoverage",children:"stopCSSCoverage()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Promise that resolves to the array of coverage reports for all stylesheets."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"stopjscoverage",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.coverage.stopjscoverage",children:"stopJSCoverage()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Promise that resolves to the array of coverage reports for all scripts."})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var s=t(67294),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,n={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!i.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:a,type:e,key:l,ref:d,props:n,_owner:c.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var s=t(67294);const a={},n=s.createContext(a);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);