"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94368],{91858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Oe});var a=n(67294),r=n(90512),o=n(89712),l=n(65319),c=n(53964),i=n(25682),s=n(92210),d=n(6379),u=n(58010);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function b(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)((({scrollY:t},a)=>{const o=null==a?void 0:a.scrollY;o&&(r.current?r.current=!1:t>=o?(l(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,u.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(28890),f=n(16550),h=n(24683),y=n(86016),g=n(49572);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return a.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){v(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const k={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function O({onClick:e}){return a.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",k.collapseSidebarButton),onClick:e},a.createElement(E,{className:k.collapseSidebarButtonIcon}))}var S=n(64738),_=n(37806);const C=Symbol("EmptyContext"),I=a.createContext(C);function w({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(I.Provider,{value:r},e)}var x=n(52647),j=n(87275),P=n(77657),N=n(30358);function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Z({collapsed:e,categoryLabel:t,onClick:n}){return a.createElement("button",{"aria-label":e?(0,s.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,s.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!e,type:"button",className:"clean-btn menu__caret",onClick:n})}function A(e){var{item:t,onItemClick:n,activePath:o,level:i,index:s}=e,d=B(e,["item","onItemClick","activePath","level","index"]);const{items:u,label:m,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),g=function(e){const t=(0,N.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,c.LM)(e):void 0),[e,t])}(t),v=(0,c._F)(t,o),E=(0,j.Mg)(f,o),{collapsed:k,setCollapsed:O}=(0,x.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:w}=function(){const e=(0,a.useContext)(I);if(e===C)throw new _.i6("DocSidebarItemsExpandedStateProvider");return e}(),A=(e=!k)=>{w(e?null:s),O(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,_.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:v,collapsed:k,updateCollapsed:A}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&h&&O(!0)}),[b,S,s,O,h]),a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},a.createElement(P.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){T(e,t,n[t])}))}return e}({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),f?A(!1):(e.preventDefault(),A())}:()=>{null==n||n(t)},"aria-current":E?"page":void 0,role:b&&!f?"button":void 0,"aria-expanded":b&&!f?!k:void 0,href:b?null!=g?g:"#":g},d),m),f&&b&&a.createElement(Z,{collapsed:k,categoryLabel:m,onClick:e=>{e.preventDefault(),A()}})),a.createElement(x.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(Q,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:i+1})))}var L=n(47785),H=n(40379);const M={menuExternalLink:"menuExternalLink_NmtK"};function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e){var{item:t,onItemClick:n,activePath:o,level:i,index:s}=e,d=R(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:m,className:b,autoAddBaseUrl:p}=t,f=(0,c._F)(t,o),h=(0,L.Z)(u);return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:m},a.createElement(P.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){D(e,t,n[t])}))}return e}({className:(0,r.Z)("menu__link",!h&&M.menuExternalLink,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),m,!h&&a.createElement(H.Z,null)))}const F={menuHtmlItem:"menuHtmlItem_M9Kj"};function V({item:e,level:t,index:n}){const{value:o,defaultStyle:c,className:i}=e;return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),c&&[F.menuHtmlItem,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:o}})}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){U(e,t,n[t])}))}return e}function Y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e){var{item:t}=e,n=Y(e,["item"]);switch(t.type){case"category":return a.createElement(A,K({item:t},n));case"html":return a.createElement(V,K({item:t},n));default:return a.createElement(W,K({item:t},n))}}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function J(e){var{items:t}=e,n=q(e,["items"]);const r=(0,c.f)(t,n.activePath);return a.createElement(w,null,r.map(((e,t)=>a.createElement(z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){G(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const Q=(0,a.memo)(J),X={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function $({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,S.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,s.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",X.menu,o&&X.menuWithAnnouncementBar,n)},a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:t,activePath:e,level:1})))}const ee="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ne="sidebarHidden_VK0M",ae="sidebarLogo_isFc";function re({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:c}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(ee,l&&te,o&&ne)},l&&a.createElement(g.Z,{tabIndex:-1,className:ae}),a.createElement($,{path:e,sidebar:t}),c&&a.createElement(O,{onClick:n}))}const oe=a.memo(re);var le=n(36847),ce=n(57796);const ie=({sidebar:e,path:t})=>{const n=(0,ce.e)();return a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function se(e){return a.createElement(le.Zo,{component:ie,props:e})}const de=a.memo(se);function ue(e){const t=(0,h.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(oe,e),r&&a.createElement(de,e))}const me={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function be({toggleSidebar:e}){return a.createElement("div",{className:me.expandButton,title:(0,s.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(E,{className:me.expandButtonIcon}))}const pe={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function fe({children:e}){const t=(0,i.V)();var n;return a.createElement(a.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function he({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,f.TH)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),!c&&(0,p.n)()&&i(!0),n((e=>!e))}),[n,c]);return a.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,pe.docSidebarContainer,t&&pe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(pe.docSidebarContainer)&&t&&i(!0)}},a.createElement(fe,null,a.createElement("div",{className:(0,r.Z)(pe.sidebarViewport,c&&pe.sidebarViewportHidden)},a.createElement(ue,{sidebar:e,path:o,onCollapse:s,isHidden:c}),c&&a.createElement(be,{toggleSidebar:s}))))}const ye={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ge({hiddenSidebarContainer:e,children:t}){const n=(0,i.V)();return a.createElement("main",{className:(0,r.Z)(ye.docMainContainer,(e||!n)&&ye.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ye.docItemWrapper,e&&ye.docItemWrapperEnhanced)},t))}const ve={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function Ee({children:e}){const t=(0,i.V)(),[n,r]=(0,a.useState)(!1);return a.createElement("div",{className:ve.docsWrapper},a.createElement(b,null),a.createElement("div",{className:ve.docRoot},t&&a.createElement(he,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(ge,{hiddenSidebarContainer:n},e)))}var ke=n(40146);function Oe(e){const t=(0,c.SN)(e);if(!t)return a.createElement(ke.Z,null);const{docElement:n,sidebarName:s,sidebarItems:d}=t;return a.createElement(o.FG,{className:(0,r.Z)(l.k.page.docsDocPage)},a.createElement(i.b,{name:s,items:d},a.createElement(Ee,null,n)))}},40146:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(90512),o=n(92210),l=n(24999);function c({className:e}){return a.createElement("main",{className:(0,r.Z)("container margin-vert--xl",e)},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(l.Z,{as:"h1",className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);