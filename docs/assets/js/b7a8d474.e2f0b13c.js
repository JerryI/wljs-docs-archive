"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[728],{49374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(17624),o=r(4552);const s={env:["WLJS"],context:"CoffeeLiqueur`Extensions`WLJSInterpreter`",package:"wljs-interpreter",source:"https://github.com/JerryI/wljs-interpreter/blob/dev/src/Definitions.wl"},a=void 0,i={id:"frontend/Reference/Interpreter/WindowScope",title:"WindowScope",description:"reads out Javascript variable available from the global scope and returns it. This is pure WLJS function",source:"@site/docs/frontend/Reference/Interpreter/WindowScope.md",sourceDirName:"frontend/Reference/Interpreter",slug:"/frontend/Reference/Interpreter/WindowScope",permalink:"/frontend/Reference/Interpreter/WindowScope",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["WLJS"],context:"CoffeeLiqueur`Extensions`WLJSInterpreter`",package:"wljs-interpreter",source:"https://github.com/JerryI/wljs-interpreter/blob/dev/src/Definitions.wl"},sidebar:"tutorialSidebar",previous:{title:"Refresh",permalink:"/frontend/Reference/Interpreter/Refresh"},next:{title:"Assert",permalink:"/frontend/Reference/Misc/Assert"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Read JS variable",id:"read-js-variable",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"WindowScope[name_String] _JSObject\n"})}),"\n",(0,t.jsxs)(n.p,{children:["reads out Javascript variable available from the global scope and returns it. ",(0,t.jsx)(n.strong,{children:"This is pure WLJS function"})]}),"\n",(0,t.jsx)(n.p,{children:"It allows another way of WL JS communication"}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h3,{id:"read-js-variable",children:"Read JS variable"}),"\n",(0,t.jsx)(n.p,{children:"Firstly let us create it"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="cell 1"',children:".js\n\nwindow.variable = [0,1,2,3,4,5];\n"})}),"\n",(0,t.jsx)(n.p,{children:"now read"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'FrontFetch[WindowScope["variable"]]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>i,M:()=>a});var t=r(11504);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);