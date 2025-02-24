"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8216],{41520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var r=t(17624),o=t(4552);const d={env:["Wolfram Kernel"]},c=void 0,i={id:"frontend/Reference/Frontend IO/WindowObj",title:"WindowObj",description:"an internal representation of a current window (can be a notebook or projected cell), that contains the information of a live connection to it used by FrontSubmit, FrontFetch, FrontSlidesSelected and other functions.",source:"@site/docs/frontend/Reference/Frontend IO/WindowObj.md",sourceDirName:"frontend/Reference/Frontend IO",slug:"/frontend/Reference/Frontend IO/WindowObj",permalink:"/frontend/Reference/Frontend IO/WindowObj",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1740239847e3,frontMatter:{env:["Wolfram Kernel"]},sidebar:"tutorialSidebar",previous:{title:"SystemOpen",permalink:"/frontend/Reference/Frontend IO/SystemOpen"},next:{title:"CreateFrontEndObject",permalink:"/frontend/Reference/Frontend Objects/CreateFrontEndObject"}},s={},a=[{value:"Methods",id:"methods",level:2},{value:"<code>EventHandler</code>",id:"eventhandler",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"WindowObj[assoc_Association]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["an internal representation of a current window (can be a notebook or projected cell), that contains the information of a live connection to it used by ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"}),", ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontFetch",children:"FrontFetch"}),", ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Slides/FrontSlidesSelected",children:"FrontSlidesSelected"})," and other functions."]}),"\n",(0,r.jsxs)(n.p,{children:["It is produced by ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/CurrentWindow",children:"CurrentWindow"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"eventhandler",children:(0,r.jsx)(n.code,{children:"EventHandler"})}),"\n",(0,r.jsx)(n.p,{children:"You can attach an event listener to it. The following patterns are supported"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'"Closed"'})," - fires, when a windows has been closed"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It returns a wrapper for ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventObject%60",children:(0,r.jsx)(n.code,{children:"EventObject"})})," generated from the events of the given window. You can apply ",(0,r.jsx)(n.code,{children:"EventRemove"})," on it to remove all handlers."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'test = {0,1,0};\n\nEventHandler[CurrentWindow[], {"Closed" -> Function[Null,\n  test = {1,0,0};\n]}];\n\nGraphics[{RGBColor[test // Offload], Disk[{0,0}, 1]}]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Try to reopen a window (reload) a disk must turn red."})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>c});var r=t(11504);const o={},d=r.createContext(o);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);