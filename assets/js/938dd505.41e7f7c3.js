/*! For license information please see 938dd505.41e7f7c3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56746],{96893:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(85893),i=t(11151);const o={sidebar_label:"Frame.waitForSelector"},a="Frame.waitForSelector() method",s={id:"api/puppeteer.frame.waitforselector",title:"Frame.waitForSelector() method",description:"Waits for an element matching the given selector to appear in the frame.",source:"@site/versioned_docs/version-22.7.1/api/puppeteer.frame.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforselector",permalink:"/api/puppeteer.frame.waitforselector",draft:!1,unlisted:!1,tags:[],version:"22.7.1",frontMatter:{sidebar_label:"Frame.waitForSelector"},sidebar:"api",previous:{title:"Frame.waitForNavigation",permalink:"/api/puppeteer.frame.waitfornavigation"},next:{title:"JSHandle",permalink:"/api/puppeteer.jshandle"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"framewaitforselector-method",children:"Frame.waitForSelector() method"}),"\n",(0,n.jsx)(r.p,{children:"Waits for an element matching the given selector to appear in the frame."}),"\n",(0,n.jsx)(r.p,{children:"This method works across navigations."}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The selector to query and wait for."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," Options for customizing waiting behavior."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,n.jsx)(r.p,{children:"An element matching the given selector."}),"\n",(0,n.jsx)(r.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,n.jsx)(r.p,{children:"Throws if an element matching the given selector doesn't appear."}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .mainFrame()\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:c,ref:p,props:o,_owner:s.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var n=t(67294);const i={},o=n.createContext(i);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);