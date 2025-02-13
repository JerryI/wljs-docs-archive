"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2824],{67452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(17624),r=t(4552);const o={package:"wljs-editor"},i=void 0,s={id:"frontend/Reference/Formatting/Annotation",title:"Annotation",description:"represents an expression expr annotated with data. This kind of annotation is not visible on output",source:"@site/docs/frontend/Reference/Formatting/Annotation.md",sourceDirName:"frontend/Reference/Formatting",slug:"/frontend/Reference/Formatting/Annotation",permalink:"/frontend/Reference/Formatting/Annotation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1737202966e3,frontMatter:{package:"wljs-editor"},sidebar:"tutorialSidebar",previous:{title:"Dataset",permalink:"/frontend/Reference/Dataset/"},next:{title:"ArrangeSummaryBox",permalink:"/frontend/Reference/Formatting/ArrangeSummaryBox"}},c={},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.M)(),...e.components},{CodeMirror:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeMirror",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Annotation[expr_, data_]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["represents an expression ",(0,a.jsx)(n.code,{children:"expr"})," annotated with ",(0,a.jsx)(n.code,{children:"data"}),". This kind of annotation is not visible on output"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"a = Table[Annotation[i, PrimeQ[i]], {i, 20}]\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now find annotated data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Cases[a, Annotation[_, True]]\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"{2,3,5,7,11,13,17,19}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Another use-case with graphs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Annotation[item_, key_->value_]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["associates\xa0key-value\xa0pairs with\xa0items\xa0in objects such as\xa0",(0,a.jsx)(n.a,{href:"https://reference.wolfram.com/language/ref/Graph.html",children:"Graph"}),",\xa0",(0,a.jsx)(n.a,{href:"https://reference.wolfram.com/language/ref/MeshRegion.html",children:"MeshRegion"}),"\xa0etc. For example"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'Graph[{Annotation[1 <-> 2, EdgeLabels -> "hello"], \n  2 <-> 3, 3 <-> 1}]\n'})}),"\n",(0,a.jsx)(t,{children:'(*VB[*)(Graph[{1, 2, 3}, {UndirectedEdge[1, 2], UndirectedEdge[2, 3], UndirectedEdge[3, 1]}, {EdgeLabels -> {UndirectedEdge[1, 2] -> "hello"}}])(*,*)(*"1:eJy9UzFLAzEUvmqrthUE/4G/wUkQDrXWCkVLr4NrvHvXhqZNSa6115/g7KKD4CIiuLp2VXBwd1AoiOLi4qyXXHNy12t1EN/wSPJeXr5833tL+7RsJzRN40nPFSix7Cmxm/PcFkOtGja5fyLiRcwdOxnayVjacznMwHRwB/xys57bbSETOy6zpT3r9rSICFdoA1uWNtCDMNOkPemRB8M7WT3juTXG6EENkMWHFzXNT02p4KQ67KK499K7fuuzj09hj/1IPHN4WlxxL1eHxd91dlNavDsbHEXhJRQDHl9uETpAsMQS8FSBrmMIUDUghEaeOZcwHvpsRj5zr/v1sp7bbqAqGCYiYEUuKaJiGCu3CUg064iD4bgEjAla/heZV35cZ1kfcH8imX8AaES93wP6sb/ju/jkWNitWrwOhRTkb1pVyFPWGDssMd0zfoiCj+Qwr4PIEydKASVADMGhfEXQhO4O5SvCRvlKxcsgG1EoKX6OnIrbAr4gpoEhCzuYNhH55iR8gaEGVLBZ5/J8hzYhkjWvpqOELAs3q+Py0sEU4R7gbtBDQYJQZ4M2HUYJl52VR4TDFzU3VBs="*)(*]VB*)'})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>i});var a=t(11504);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);