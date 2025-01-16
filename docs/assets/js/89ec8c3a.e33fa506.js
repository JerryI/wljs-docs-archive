"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4412],{27012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var l=t(17624),o=t(4552);const a={env:["Wolfram Kernel"],source:"https://github.com/JerryI/wljs-plotly/blob/dev/src/Kernel.wl",context:"Notebook`Kernel`PlotlyExtension`",package:"wljs-plotly"},c=void 0,r={id:"frontend/Reference/Plotly/PlotlyAddTraces",title:"PlotlyAddTraces",description:"appends to a plot p new data specified in data.",source:"@site/docs/frontend/Reference/Plotly/PlotlyAddTraces.md",sourceDirName:"frontend/Reference/Plotly",slug:"/frontend/Reference/Plotly/PlotlyAddTraces",permalink:"/frontend/Reference/Plotly/PlotlyAddTraces",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["Wolfram Kernel"],source:"https://github.com/JerryI/wljs-plotly/blob/dev/src/Kernel.wl",context:"Notebook`Kernel`PlotlyExtension`",package:"wljs-plotly"},sidebar:"tutorialSidebar",previous:{title:"ListLinePlotly",permalink:"/frontend/Reference/Plotly/ListLinePlotly"},next:{title:"PlotlyAnimate",permalink:"/frontend/Reference/Plotly/PlotlyAnimate"}},s={},i=[{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"PlotlyAddTraces[p_PlotInstance, {data_Association} | _Association]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["appends to a plot ",(0,l.jsx)(n.code,{children:"p"})," new data specified in ",(0,l.jsx)(n.code,{children:"data"}),"."]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["See the ",(0,l.jsx)(n.a,{href:"https://plotly.com/javascript/plotlyjs-function-reference/",children:"official reference"})]})}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"Plot an example data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'p = Plotly[<|\n  "x" -> Range[100],\n  "y" -> Table[Sin[2Pi x / 100.0], {x,100}],\n  "mode" -> "line"\n|>]\n'})}),"\n",(0,l.jsx)(n.p,{children:"To dynamically add new traces, we can call directly"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'PlotlyAddTraces[p, <|\n  "x" -> Range[100],\n  "y" -> Table[Cos[4Pi x / 100.0], {x,100}]\n|>]\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(24604).c+"",width:"400",height:"300"})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},24604:(e,n,t)=>{t.d(n,{c:()=>l});const l=t.p+"assets/images/test1123-6485dacce0002b92ad754a14a4c9b4cb.png"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>c});var l=t(11504);const o={},a=l.createContext(o);function c(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);