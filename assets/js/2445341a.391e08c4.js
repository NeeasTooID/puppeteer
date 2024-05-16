/*! For license information please see 2445341a.391e08c4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71845],{5509:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var s=t(85893),i=t(11151);const n={sidebar_label:"DeviceRequestPrompt"},c="DeviceRequestPrompt class",d={id:"api/puppeteer.devicerequestprompt",title:"DeviceRequestPrompt class",description:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth.",source:"@site/versioned_docs/version-22.8.2/api/puppeteer.devicerequestprompt.md",sourceDirName:"api",slug:"/api/puppeteer.devicerequestprompt",permalink:"/api/puppeteer.devicerequestprompt",draft:!1,unlisted:!1,tags:[],version:"22.8.2",frontMatter:{sidebar_label:"DeviceRequestPrompt"},sidebar:"api",previous:{title:"Device",permalink:"/api/puppeteer.device"},next:{title:"DeviceRequestPrompt.cancel",permalink:"/api/puppeteer.devicerequestprompt.cancel"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"devicerequestprompt-class",children:"DeviceRequestPrompt class"}),"\n",(0,s.jsx)(r.p,{children:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth."}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare class DeviceRequestPrompt\n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"DeviceRequestPrompt"})," instances are returned via the ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.waitfordeviceprompt",children:"Page.waitForDevicePrompt()"})," method."]}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"DeviceRequestPrompt"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const [deviceRequest] = Promise.all([\n  page.waitForDevicePrompt(),\n  page.click('#connect-bluetooth'),\n]);\nawait devicePrompt.select(\n  await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))\n);\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"devices",children:"devices"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.devicerequestpromptdevice",children:"DeviceRequestPromptDevice"}),"[]"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Current list of selectable devices."})})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"cancel",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.devicerequestprompt.cancel",children:"cancel()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Cancel the prompt."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"select",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.devicerequestprompt.select",children:"select(device)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Select a device in the prompt's list."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waitfordevice",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.devicerequestprompt.waitfordevice",children:"waitForDevice(filter, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Resolve to the first device in the prompt matching a filter."})})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75251:(e,r,t)=>{var s=t(67294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,n={},l=null,o=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)c.call(r,s)&&!p.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:i,type:e,key:l,ref:o,props:n,_owner:d.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>c});var s=t(67294);const i={},n=s.createContext(i);function c(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);