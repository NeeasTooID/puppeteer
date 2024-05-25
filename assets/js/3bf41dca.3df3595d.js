/*! For license information please see 3bf41dca.3df3595d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16336],{68943:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=t(85893),o=t(11151);const n={sidebar_label:"Page.waitForFileChooser"},s="Page.waitForFileChooser() method",a={id:"api/puppeteer.page.waitforfilechooser",title:"Page.waitForFileChooser() method",description:"This method is typically coupled with an action that triggers file choosing.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.page.waitforfilechooser.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforfilechooser",permalink:"/api/puppeteer.page.waitforfilechooser",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"Page.waitForFileChooser"},sidebar:"api",previous:{title:"Page.waitForDevicePrompt",permalink:"/api/puppeteer.page.waitfordeviceprompt"},next:{title:"Page.waitForFrame",permalink:"/api/puppeteer.page.waitforframe"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"pagewaitforfilechooser-method",children:"Page.waitForFileChooser() method"}),"\n",(0,i.jsx)(r.p,{children:"This method is typically coupled with an action that triggers file choosing."}),"\n",(0,i.jsx)(r.admonition,{type:"caution",children:(0,i.jsx)(r.p,{children:"This must be called before the file chooser is launched. It will not return a currently active file chooser."})}),"\n",(0,i.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract waitForFileChooser(\n    options?: WaitTimeoutOptions\n  ): Promise<FileChooser>;\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.em,{children:"(Optional)"})})})]})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(r.p,{children:["Promise<",(0,i.jsx)(r.a,{href:"/api/puppeteer.filechooser",children:"FileChooser"}),">"]}),"\n",(0,i.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(r.p,{children:['In the "headful" browser, this method results in the native file picker dialog ',(0,i.jsx)(r.code,{children:"not showing up"})," for the user."]}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(r.p,{children:["The following example clicks a button that issues a file chooser and then responds with ",(0,i.jsx)(r.code,{children:"/tmp/myfile.pdf"})," as if a user has selected this file."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const [fileChooser] = await Promise.all([\n  page.waitForFileChooser(),\n  page.click('#upload-file-button'),\n  // some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var i=t(67294),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var i,n={},c=null,p=null;for(i in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,i)&&!l.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===n[i]&&(n[i]=r[i]);return{$$typeof:o,type:e,key:c,ref:p,props:n,_owner:a.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>s});var i=t(67294);const o={},n=i.createContext(o);function s(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);