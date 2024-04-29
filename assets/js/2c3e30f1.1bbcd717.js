/*! For license information please see 2c3e30f1.1bbcd717.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14317],{22587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(85893),o=t(11151);const s={},a="PDF generation",i={id:"guides/pdf-generation",title:"PDF generation",description:"For printing PDFs use Page.pdf().",source:"@site/versioned_docs/version-22.7.1/guides/pdf-generation.md",sourceDirName:"guides",slug:"/guides/pdf-generation",permalink:"/guides/pdf-generation",draft:!1,unlisted:!1,tags:[],version:"22.7.1",frontMatter:{},sidebar:"docs",previous:{title:"Screenshots",permalink:"/guides/screenshots"},next:{title:"Chrome Extensions",permalink:"/guides/chrome-extensions"}},p={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pdf-generation",children:"PDF generation"}),"\n",(0,r.jsxs)(n.p,{children:["For printing PDFs use ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.pdf",children:(0,r.jsx)(n.code,{children:"Page.pdf()"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://news.ycombinator.com', {\n  waitUntil: 'networkidle2',\n});\n// Saves the PDF to hn.pdf.\nawait page.pdf({\n  path: 'hn.pdf',\n});\n\nawait browser.close();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.pdf",children:(0,r.jsx)(n.code,{children:"Page.pdf()"})})," waits for fonts to be loaded."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var r=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!p.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);