/*! For license information please see fb481270.e2589628.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76065],{47847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(85893),a=n(11151);const s={sidebar_label:"Page.addStyleTag"},d="Page.addStyleTag() method",i={id:"api/puppeteer.page.addstyletag",title:"Page.addStyleTag() method",description:"Adds a ` tag into the page with the desired URL or a ` tag with the content.",source:"@site/../docs/api/puppeteer.page.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.page.addstyletag",permalink:"/next/api/puppeteer.page.addstyletag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.addStyleTag"},sidebar:"api",previous:{title:"Page.addScriptTag",permalink:"/next/api/puppeteer.page.addscripttag"},next:{title:"Page.addStyleTag_1",permalink:"/next/api/puppeteer.page.addstyletag_1"}},l={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pageaddstyletag-method",children:"Page.addStyleTag() method"}),"\n",(0,r.jsxs)(t.p,{children:["Adds a ",(0,r.jsx)(t.code,{children:'<link rel="stylesheet">'})," tag into the page with the desired URL or a ",(0,r.jsx)(t.code,{children:'<style type="text/css">'})," tag with the content."]}),"\n",(0,r.jsxs)(t.p,{children:["Shortcut for ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.frame.addstyletag_1",children:"page.mainFrame().addStyleTag(options)"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Omit<",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.frameaddstyletagoptions",children:"FrameAddStyleTagOptions"}),", 'url'>"]})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLStyleElement>>"]}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,r.jsx)(t.code,{children:"<link>"})," or ",(0,r.jsx)(t.code,{children:"<style>"})," element."]})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,t,n)=>{var r=n(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,s={},p=null,o=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)d.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:p,ref:o,props:s,_owner:i.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var r=n(67294);const a={},s=r.createContext(a);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);