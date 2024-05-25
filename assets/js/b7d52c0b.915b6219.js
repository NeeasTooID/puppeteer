/*! For license information please see b7d52c0b.915b6219.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44689],{58588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(85893),o=n(11151);const s={hide_table_of_contents:!0},i="Puppeteer",a={id:"index",title:"Puppeteer",description:"build",source:"@site/versioned_docs/version-22.10.0/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{hide_table_of_contents:!0}},l={},p=[{value:"Get started | API | FAQ | Contributing | Troubleshooting",id:"get-started--api--faq--contributing--troubleshooting",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"puppeteer",children:"Puppeteer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/actions/workflows/ci.yml",children:(0,r.jsx)(t.img,{src:"https://github.com/puppeteer/puppeteer/actions/workflows/ci.yml/badge.svg?branch=main",alt:"build"})}),"\n",(0,r.jsx)(t.a,{href:"https://npmjs.org/package/puppeteer",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/npm/v/puppeteer.svg",alt:"npm puppeteer package"})})]}),"\n",(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",height:"200",align:"right"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Puppeteer is a Node.js library which provides a high-level API to control\nChrome/Chromium over the\n",(0,r.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol"}),".\nPuppeteer runs in\n",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/docs/chromium/new-headless/",children:"headless"}),'\nmode by default, but can be configured to run in full ("headful")\nChrome/Chromium.']}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"get-started--api--faq--contributing--troubleshooting",children:[(0,r.jsx)(t.a,{href:"https://pptr.dev/docs",children:"Get started"})," | ",(0,r.jsx)(t.a,{href:"https://pptr.dev/api",children:"API"})," | ",(0,r.jsx)(t.a,{href:"https://pptr.dev/faq",children:"FAQ"})," | ",(0,r.jsx)(t.a,{href:"https://pptr.dev/contributing",children:"Contributing"})," | ",(0,r.jsx)(t.a,{href:"https://pptr.dev/troubleshooting",children:"Troubleshooting"})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser and open a new blank page\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  // Navigate the page to a URL\n  await page.goto('https://developer.chrome.com/');\n\n  // Set screen size\n  await page.setViewport({width: 1080, height: 1024});\n\n  // Type into search box\n  await page.type('.devsite-search-field', 'automate beyond recorder');\n\n  // Wait and click on first result\n  const searchResultSelector = '.devsite-result-item-link';\n  await page.waitForSelector(searchResultSelector);\n  await page.click(searchResultSelector);\n\n  // Locate the full title with a unique string\n  const textSelector = await page.waitForSelector(\n    'text/Customize and automate'\n  );\n  const fullTitle = await textSelector?.evaluate(el => el.textContent);\n\n  // Print the full title\n  console.log('The title of this blog post is \"%s\".', fullTitle);\n\n  await browser.close();\n})();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,s={},p=null,c=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:p,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);