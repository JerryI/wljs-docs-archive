"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8704],{14804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(17624),i=n(4552);const s={origin:"https://reference.wolfram.com/language/ref/ListPlot3D.html",update:!1},r=void 0,a={id:"frontend/Reference/Plotting Functions/ListPlot3D",title:"ListPlot3D",description:"generates a surface with height\xa0fij\xa0at position\xa0{j,i}",source:"@site/docs/frontend/Reference/Plotting Functions/ListPlot3D.md",sourceDirName:"frontend/Reference/Plotting Functions",slug:"/frontend/Reference/Plotting Functions/ListPlot3D",permalink:"/frontend/Reference/Plotting Functions/ListPlot3D",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171482423e4,frontMatter:{origin:"https://reference.wolfram.com/language/ref/ListPlot3D.html",update:!1},sidebar:"tutorialSidebar",previous:{title:"ListLinePlot",permalink:"/frontend/Reference/Plotting Functions/ListLinePlot"},next:{title:"ListStepPlot",permalink:"/frontend/Reference/Plotting Functions/ListStepPlot"}},l={},c=[{value:"Examples",id:"examples",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components},{Wl:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"ListPlot3D[{{f11,\u2026,f1n},\u2026,{fm1,\u2026,fmn}}]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["generates a surface with height\xa0",(0,o.jsx)(t.code,{children:"fij"}),"\xa0at position\xa0",(0,o.jsx)(t.code,{children:"{j,i}"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"ListPlot3D[{{x1,y1,f1},...,{x_k,y_k,f_k}}]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["generates a surface with height\xa0",(0,o.jsx)(t.code,{children:"fi"}),"\xa0at\xa0position\xa0",(0,o.jsx)(t.code,{children:"{xi,yi}"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"ListPlot3D[{data1,data2,\u2026}]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["plots the surfaces corresponding to each of the\xa0",(0,o.jsx)(t.code,{children:"data_i"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"ListPlot3D[{{1, 1, 1, 1}, {1, 2, 1, 2}, {1, 1, 3, 1}, {1, 2, 1, 4}}, Mesh -> All]\n"})}),"\n",(0,o.jsx)(n,{children:"ListPlot3D[{{1, 1, 1, 1}, {1, 2, 1, 2}, {1, 1, 3, 1}, {1, 2, 1, 4}}, Mesh -> All]"}),"\n",(0,o.jsx)(t.p,{children:"or an interpolated surface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:'data = Table[Sin[j^2 + i], {i, 0, Pi, Pi/5}, {j, 0, Pi, Pi/5}];\n\nListPlot3D[data, Mesh -> None, InterpolationOrder -> 3, \n ColorFunction -> "SouthwestColors", BoxRatios->{1,1,0.5}]\n'})}),"\n",(0,o.jsx)(n,{children:'data = Table[Sin[j^2 + i], {i, 0, Pi, Pi/5}, {j, 0, Pi, Pi/5}];ListPlot3D[data, Mesh -> None, InterpolationOrder -> 3, ColorFunction -> "SouthwestColors", BoxRatios->{1,1,0.5}]'})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var o=n(11504);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);