"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8632],{20304:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(17624),o=r(4552);const i={},s=void 0,d={id:"frontend/Advanced/Frontend interpretation/Frontend Objects",title:"Frontend Objects",description:"Motivation",source:"@site/docs/frontend/Advanced/Frontend interpretation/Frontend Objects.md",sourceDirName:"frontend/Advanced/Frontend interpretation",slug:"/frontend/Advanced/Frontend interpretation/Frontend Objects",permalink:"/frontend/Advanced/Frontend interpretation/Frontend Objects",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724064567e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editor manipulation",permalink:"/frontend/Advanced/Frontend interpretation/Editor manipulation"},next:{title:"WLJS Functions",permalink:"/frontend/Advanced/Frontend interpretation/WLJS Functions"}},a={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Compress and reuse large expressions",id:"compress-and-reuse-large-expressions",level:3},{value:"Properties",id:"properties",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(n.h3,{id:"compress-and-reuse-large-expressions",children:"Compress and reuse large expressions"}),"\n",(0,t.jsxs)(n.p,{children:["Is intended to reduce the load to on the frontend by packing a large Wolfram Expressions like ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," with all its data to a single line reference ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndExecutable",children:"FrontEndExecutable"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndRef",children:"FrontEndRef"}),", which can be interpreted later by the editor in the cell."]}),"\n",(0,t.jsx)(n.p,{children:"To display such expressions like"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"Plot[x, {x,0,1}]\n"})}),"\n",(0,t.jsx)(n.p,{children:"inline in the editor or on a slide, they are converted to a pointer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'FrontEndExecutable["746fa2e0-24f7-4003-a7cc-4c77f8b4891d"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["An actual expression now is shared between the frontend and the Kernel. Both can have an access to the original expression using ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndExecutable",children:"FrontEndExecutable"})," wrapper on frontend (see ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"WLJS Functions"}),") and ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndRef",children:"FrontEndRef"})," wrapper to access it from Wolfram Kernel."]}),"\n",(0,t.jsx)(n.p,{children:"Such objects are also saved to the notebook internally."}),"\n",(0,t.jsxs)(n.p,{children:["Defined ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," on ",(0,t.jsx)(n.code,{children:"FrontEndExecutable"})," uses ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," to replace it with an empty widget. This widget later is populated by the content produced by the original expression, for example ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/Image",children:"Image"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"It does not alter the original expression."}),"\n",(0,t.jsxs)(n.li,{children:["All active objects are synchronized between the notebook and a Kernel. Once you have ",(0,t.jsx)(n.strong,{children:"saved"})," a notebook they are serialized to a file as well."]}),"\n",(0,t.jsxs)(n.li,{children:["All active objects are exported to ",(0,t.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Exporting/Dynamic%20HTML",children:"Dynamic HTML"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Exporting/Figures",children:"Figures"})]}),"\n",(0,t.jsxs)(n.li,{children:["All objects are embedded automatically to ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"Slides"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})," for all ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndExecutable",children:"FrontEndExecutable"})," is ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})," for all ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndExecutable",children:"FrontEndExecutable"})," is a sort of view-box as well, but displayed on a slide / HTML output element"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>d,M:()=>s});var t=r(11504);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);