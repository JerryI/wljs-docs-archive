"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[688],{62092:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(17624),a=r(4552);const i={env:["Wolfram Kernel"],context:"CoffeeLiqueur`Extensions`Manipulate`",package:"wljs-manipulate",source:"https://github.com/JerryI/wljs-manipulate/blob/main/Kernel.wl"},o=void 0,s={id:"frontend/Reference/Interpreter/Refresh",title:"Refresh",description:"Implementation differs from Mathematica",source:"@site/docs/frontend/Reference/Interpreter/Refresh.md",sourceDirName:"frontend/Reference/Interpreter",slug:"/frontend/Reference/Interpreter/Refresh",permalink:"/frontend/Reference/Interpreter/Refresh",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["Wolfram Kernel"],context:"CoffeeLiqueur`Extensions`Manipulate`",package:"wljs-manipulate",source:"https://github.com/JerryI/wljs-manipulate/blob/main/Kernel.wl"},sidebar:"tutorialSidebar",previous:{title:"ReadClipboard",permalink:"/frontend/Reference/Interpreter/ReadClipboard"},next:{title:"WindowScope",permalink:"/frontend/Reference/Interpreter/WindowScope"}},c={},d=[{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Implementation differs from Mathematica"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"Refresh[expr_, interval_]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["produces a dynamic window with ",(0,t.jsx)(n.code,{children:"expr"})," reevaluated each interval of time specified in seconds or in ",(0,t.jsx)(n.code,{children:"Quantity"})," provided in ",(0,t.jsx)(n.code,{children:"interval"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"Refresh[expr_, trigger_EventObject | trigger_String]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["produces a dynamic window with ",(0,t.jsx)(n.code,{children:"expr"})," reevaluated by ",(0,t.jsx)(n.code,{children:"trigger"})," event (see ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Misc/Events",children:"Events"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Referesh"})," has ",(0,t.jsx)(n.code,{children:"HoldFirst"})," attribute."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"Refresh[Now // TextString, 1]\n"})}),"\n",(0,t.jsx)(n.p,{children:"or even for decorated symbols"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"Refresh[Now, 1]\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["Do not put ",(0,t.jsx)(n.code,{children:"Plot"})," or any other functions inside with a fast refresh rate (< 1 second). In general the reevaluation cause a large overhead to the system with graphics."]}),(0,t.jsxs)(n.p,{children:["Consider to use ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," for rapidly changing data (see more in ",(0,t.jsx)(n.a,{href:"/frontend/Dynamics",children:"Dynamics"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Dynamics/Advanced%20animation",children:"Advanced animation"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Plotly/PlotlyExtendTraces",children:"PlotlyExtendTraces"}),")."]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>o});var t=r(11504);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);