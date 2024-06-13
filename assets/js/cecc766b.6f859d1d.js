/*! For license information please see cecc766b.6f859d1d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20758],{82827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(85893),l=n(11151);const o={sidebar_label:"ElementHandle.waitForSelector"},i="ElementHandle.waitForSelector() method",s={id:"api/puppeteer.elementhandle.waitforselector",title:"ElementHandle.waitForSelector() method",description:"Wait for an element matching the given selector to appear in the current element.",source:"@site/versioned_docs/version-22.11.0/api/puppeteer.elementhandle.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.waitforselector",permalink:"/api/puppeteer.elementhandle.waitforselector",draft:!1,unlisted:!1,tags:[],version:"22.11.0",frontMatter:{sidebar_label:"ElementHandle.waitForSelector"},sidebar:"api",previous:{title:"ElementHandle.uploadFile",permalink:"/api/puppeteer.elementhandle.uploadfile"},next:{title:"HTTPRequest",permalink:"/api/puppeteer.httprequest"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandlewaitforselector-method",children:"ElementHandle.waitForSelector() method"}),"\n",(0,r.jsx)(t.p,{children:"Wait for an element matching the given selector to appear in the current element."}),"\n",(0,r.jsxs)(t.p,{children:["Unlike ",(0,r.jsx)(t.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"}),", this method does not work across navigations or if the element is detached from DOM."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The selector to query and wait for."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Options for customizing waiting behavior."]})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,r.jsx)(t.p,{children:"An element matching the given selector."}),"\n",(0,r.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,r.jsx)(t.p,{children:"Throws if an element matching the given selector doesn't appear."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .mainFrame()\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:c,ref:p,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(67294);const l={},o=r.createContext(l);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);