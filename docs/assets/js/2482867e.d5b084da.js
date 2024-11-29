"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3520],{69556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(17624),l=t(4552);const r={},s=void 0,i={id:"frontend/Reference/Misc/Parallel",title:"Parallel",description:"ParallelSubmitAsync",source:"@site/docs/frontend/Reference/Misc/Parallel.md",sourceDirName:"frontend/Reference/Misc",slug:"/frontend/Reference/Misc/Parallel",permalink:"/frontend/Reference/Misc/Parallel",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1732830019e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Language",permalink:"/frontend/Reference/Misc/Language"},next:{title:"Promise",permalink:"/frontend/Reference/Misc/Promise"}},c={},o=[{value:"<code>ParallelSubmitAsync</code>",id:"parallelsubmitasync",level:2},{value:"<code>ParallelSubmitFunctionAsync</code>",id:"parallelsubmitfunctionasync",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"parallelsubmitasync",children:(0,a.jsx)(n.code,{children:"ParallelSubmitAsync"})}),"\n",(0,a.jsxs)(n.p,{children:["Submits and expression for evaluation to any available parallel kernel and returns ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Misc/Promise",children:"Promise"})," with the result"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"ParallelSubmitAsync[expr_] _Promise\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Please, launch parallel Kernels beforehand using ",(0,a.jsx)(n.code,{children:"LaunchKernels[n_Integer]"})]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'Then[\n\tParallelSubmitAsync[URLRead["http://google.com"]],\n\n\tFunction[result, Beep[]; page = result]\n]; \n'})}),"\n",(0,a.jsxs)(n.p,{children:["The downloaded page will appear in a global symbol ",(0,a.jsx)(n.code,{children:"page"}),". To share the definitions of any symbol from your main evaluation Kernel use ",(0,a.jsx)(n.code,{children:'DistributeDefinitions[sym_ | "ContextName"]'}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"parallelsubmitfunctionasync",children:(0,a.jsx)(n.code,{children:"ParallelSubmitFunctionAsync"})}),"\n",(0,a.jsx)(n.p,{children:"Similar to the previous one, but allows an inner expression make callback manually"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"ParallelSubmitFunctionAsync[f_, args__] _Promise\n"})}),"\n",(0,a.jsx)(n.p,{children:"For example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'Then[\n\tParallelSubmitFunctionAsync[\n\t\tFunction[{url, cbk}, \n\t\t\tWith[{data = URLRead["http://google.com"]},\n\t\t\t\tcbk[data];\n\t\t\t];\n\t\t],\n\t\t\n\t\t"http://google.com"\n\t],\n\t\n\tFunction[result, Beep[]; page = result]\t\n];\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>s});var a=t(11504);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);