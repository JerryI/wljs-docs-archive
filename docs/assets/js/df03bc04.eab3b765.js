"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3004],{54652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(17624),s=t(4552);const o={context:"System`"},a=void 0,i={id:"frontend/Reference/Decorations/WLXForm",title:"WLXForm",description:"A standard form used for representing Wolfram expressions on Slides and in WLX cells",source:"@site/docs/frontend/Reference/Decorations/WLXForm.md",sourceDirName:"frontend/Reference/Decorations",slug:"/frontend/Reference/Decorations/WLXForm",permalink:"/frontend/Reference/Decorations/WLXForm",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724064567e3,frontMatter:{context:"System`"},sidebar:"tutorialSidebar",previous:{title:"ViewBox",permalink:"/frontend/Reference/Decorations/ViewBox"},next:{title:"ChoiceDialog",permalink:"/frontend/Reference/Frontend IO/ChoiceDialog"}},c={},d=[{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["A standard form used for representing Wolfram expressions on ",(0,r.jsx)(n.a,{href:"/frontend/Advanced/Slides/",children:"Slides"})," and in ",(0,r.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," cells\nBy the default it applies ",(0,r.jsx)(n.code,{children:"Indentity"})," transformation."]}),"\n",(0,r.jsxs)(n.p,{children:["The use cases are the same as for ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Depending on where an expression is displayed, one can change its visual representation using ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/MakeBoxes",children:"MakeBoxes"})," tagset, i.e."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"SpecialOne /: MakeBoxes[SpecialOne, StandardForm] := With[{\n\to = Graphics[{Red, Disk[]}] \n},\n\tViewBox[SpecialOne, o]\n]\n\nSpecialOne /: MakeBoxes[SpecialOne, WLXForm] := With[{\n\to = Graphics[{Blue, Disk[]}] // CreateFrontEndObject\n},\n\to\n]\n"})}),"\n",(0,r.jsx)(n.p,{children:"in the normal Wolfram cell an output looks like"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(38852).c+"",width:"1474",height:"146"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(86708).c+"",width:"1512",height:"618"})}),"\n",(0,r.jsx)(n.p,{children:"while on a slide"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(23256).c+"",width:"1518",height:"928"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},86708:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-03-27 at 21.42.31-b35d1b32f076eb6e8fa15b4754de8d24.png"},23256:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-03-27 at 21.43.10-f5986b48964c9f4ee72535a90e3885da.png"},38852:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-03-27 at 21.43.43-e36e631081ad6021ff791716eaba916b.png"},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>a});var r=t(11504);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);