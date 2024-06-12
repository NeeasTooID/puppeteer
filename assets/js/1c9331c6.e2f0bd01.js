/*! For license information please see 1c9331c6.e2f0bd01.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6100],{25851:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var t=r(85893),o=r(11151);const i={},s="Running Puppeteer in the browser",p={id:"guides/running-puppeteer-in-the-browser",title:"Running Puppeteer in the browser",description:"Puppeteer is a powerful tool for automating browsers, but did you know it can also run within a browser itself? This enables you to leverage Puppeteer's capabilities for tasks that don't require Node.js specific features.",source:"@site/versioned_docs/version-22.10.1/guides/running-puppeteer-in-the-browser.md",sourceDirName:"guides",slug:"/guides/running-puppeteer-in-the-browser",permalink:"/guides/running-puppeteer-in-the-browser",draft:!1,unlisted:!1,tags:[],version:"22.10.1",frontMatter:{},sidebar:"docs",previous:{title:"Files",permalink:"/guides/files"},next:{title:"Running Puppeteer in Chrome extensions",permalink:"/guides/running-puppeteer-in-extensions"}},u={},a=[{value:"Supported Features",id:"supported-features",level:2},{value:"How to run Puppeteer in the browser",id:"how-to-run-puppeteer-in-the-browser",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-puppeteer-in-the-browser",children:"Running Puppeteer in the browser"}),"\n",(0,t.jsx)(n.p,{children:"Puppeteer is a powerful tool for automating browsers, but did you know it can also run within a browser itself? This enables you to leverage Puppeteer's capabilities for tasks that don't require Node.js specific features."}),"\n",(0,t.jsx)(n.h2,{id:"supported-features",children:"Supported Features"}),"\n",(0,t.jsx)(n.p,{children:"While running in the browser, Puppeteer offers a variety of functionalities including:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"WebSocket Connections: Establish connections to existing browser instances using WebSockets. Launching or downloading browsers directly is not supported as it relies on Node.js APIs."}),"\n",(0,t.jsx)(n.li,{children:"Script Evaluation: Execute JavaScript code within the browser context."}),"\n",(0,t.jsx)(n.li,{children:"Document Manipulation: Generate PDFs and screenshots of the current web page."}),"\n",(0,t.jsx)(n.li,{children:"Page Management: Create, close, and navigate between different web pages."}),"\n",(0,t.jsx)(n.li,{children:"Cookie Handling: Inspect, modify, and manage cookies within the browser."}),"\n",(0,t.jsx)(n.li,{children:"Network Control: Monitor and intercept network requests made by the browser."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-run-puppeteer-in-the-browser",children:"How to run Puppeteer in the browser"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-browser",children:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-browser"})," for a complete example."]})}),"\n",(0,t.jsx)(n.p,{children:"To run Puppeteer in the browser, first you need to produce a browser-compatible build using a bundler such as rollup or webpack:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["When importing Puppeteer use the browser-specific entrypoint from puppeteer-core ",(0,t.jsx)(n.code,{children:"puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js'"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js';\n\nconst browser = await puppeteer.connect({\n  browserWSEndpoint: wsUrl,\n});\n\nalert('Browser has ' + (await browser.pages()).length + ' pages');\n\nbrowser.disconnect();\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Build your app using a bundler. For example, the following configuration can be used with rollup:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import {nodeResolve} from '@rollup/plugin-node-resolve';\n\nexport default {\n  input: 'main.mjs',\n  output: {\n    format: 'esm',\n    dir: 'out',\n  },\n  plugins: [\n    nodeResolve({\n      // Indicate that we target a browser environment.\n      browser: true,\n      // Exclude any dependencies except for puppeteer-core.\n      // `npm install puppeteer-core` # To install puppeteer-core if needed.\n      resolveOnly: ['puppeteer-core'],\n    }),\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Do not forget to include a valid browser WebSocket endpoint when connecting to an instance."})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Include the produced bundle into a web page."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,n,r)=>{var t=r(67294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!u.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:p.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>p,a:()=>s});var t=r(67294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);