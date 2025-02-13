"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9732],{48024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(17624),o=t(4552);const a={env:["Wolfram Kernel"],package:"wljs-editor",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/"},c=void 0,i={id:"frontend/Reference/Frontend IO/FrontEndRuntime",title:"FrontEndRuntime",description:"an interface to modify frontend runtime from Wolfram Kernel.",source:"@site/docs/frontend/Reference/Frontend IO/FrontEndRuntime.md",sourceDirName:"frontend/Reference/Frontend IO",slug:"/frontend/Reference/Frontend IO/FrontEndRuntime",permalink:"/frontend/Reference/Frontend IO/FrontEndRuntime",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1739462254e3,frontMatter:{env:["Wolfram Kernel"],package:"wljs-editor",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/"},sidebar:"tutorialSidebar",previous:{title:"CurrentWindow",permalink:"/frontend/Reference/Frontend IO/CurrentWindow"},next:{title:"FrontFetch",permalink:"/frontend/Reference/Frontend IO/FrontFetch"}},s={},d=[{value:"Append Javascript, CSS from WL package",id:"append-javascript-css-from-wl-package",level:2},{value:"How to check if a Wolfram Package runs in WLJS Notebook environment",id:"how-to-check-if-a-wolfram-package-runs-in-wljs-notebook-environment",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"FrontEndRuntime[]\n"})}),"\n",(0,r.jsx)(n.p,{children:"an interface to modify frontend runtime from Wolfram Kernel."}),"\n",(0,r.jsx)(n.h2,{id:"append-javascript-css-from-wl-package",children:"Append Javascript, CSS from WL package"}),"\n",(0,r.jsxs)(n.p,{children:["It comes handy while developing Wolfram Language Packages together with Javascript modules and styles. To extend frontend runtime with external scripts or styles simply ",(0,r.jsx)(n.code,{children:"Append"})," them"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'FrontEndRuntime[{"Modules", "js"}] = Append[FrontEndRuntime[{"Modules", "js"}], File["path to your JS"]]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'FrontEndRuntime[{"Modules", "css"}] = Append[FrontEndRuntime[{"Modules", "css"}], File["path to your CSS"]]\n'})}),"\n",(0,r.jsx)(n.p,{children:"These command automatically add the provided data to all opened notebooks and will keep them in the current session (even if you kill a Kernel or reload a notebook)"}),"\n",(0,r.jsx)(n.h3,{id:"how-to-check-if-a-wolfram-package-runs-in-wljs-notebook-environment",children:"How to check if a Wolfram Package runs in WLJS Notebook environment"}),"\n",(0,r.jsx)(n.p,{children:"There is a special internal variable for this purpose available from any context (technically you specify the context explicitly)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Internal`Kernel`WLJSQ // TrueQ\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>c});var r=t(11504);const o={},a=r.createContext(o);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);