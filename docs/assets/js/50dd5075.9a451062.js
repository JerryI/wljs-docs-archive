"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3620],{43448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(17624),o=t(4552);const s={sidebar_position:3},d="Code highlighting",r={id:"frontend/Advanced/Slides/Widgets and components/embed-wl",title:"Code highlighting",description:"Since it support WLX syntax as well, one can combine the copied text from the normal Wolfram Language cell into a EditorView component",source:"@site/docs/frontend/Advanced/Slides/Widgets and components/embed-wl.md",sourceDirName:"frontend/Advanced/Slides/Widgets and components",slug:"/frontend/Advanced/Slides/Widgets and components/embed-wl",permalink:"/frontend/Advanced/Slides/Widgets and components/embed-wl",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1728808485e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Animated Graphics",permalink:"/frontend/Advanced/Slides/Widgets and components/animations"},next:{title:"Mermaid Diagrams",permalink:"/frontend/Advanced/Slides/Widgets and components/Mermaid Diagrams"}},a={},c=[{value:"Layout fixes",id:"layout-fixes",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"code-highlighting",children:"Code highlighting"}),"\n",(0,i.jsxs)(n.p,{children:["Since it support WLX syntax as well, one can combine the copied text from the normal Wolfram Language cell into a ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," component"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"prototype"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.wlx\nCodeInset[str_String] := With[{Fe = EditorView[str]},\n  <div style="text-align: left;"><Fe/></div>\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then somewhere on your slide"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Input cell inside a slide\n\n<CodeInset>\n(*SbB[*)Subscript[B(*|*),(*|*)k_, q_](*]SbB*)[coords_] := Sum[ \n  \n  With[{\\\\[Theta] = ToSphericalCoordinates[c][[2]], \\\\[Phi] = ToSphericalCoordinates[c][[3]]},\n    (*SpB[*)Power[(-1)(*|*),(*|*)q](*]SpB*) (*SbB[*)Subscript[a(*|*),(*|*)k](*]SbB*)[Norm[c]] (*SqB[*)Sqrt[(*FB[*)((4Pi)(*,*)/(*,*)(2k + 1))(*]FB*)](*]SqB*) SphericalHarmonicY[k,-q, \\\\[Theta], \\\\[Phi]]\n  ]\n  \n, {c, coords}]\n</CodeInset>\n\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There is no need in writing ",(0,i.jsx)(n.code,{children:"(*funny comments*)"})," and etc. manually, this is a representation of cell's elements (Boxes) from a normal WL editor. ",(0,i.jsx)(n.strong,{children:"Just copy the text from it"}),"  (input/output cell)"]})}),"\n",(0,i.jsx)(n.p,{children:"The result will look like this"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(35128).c+"",width:"825",height:"327"})}),"\n",(0,i.jsx)(n.h3,{id:"layout-fixes",children:"Layout fixes"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes the text is aligned to the center no matter what. To fix this issue, apply this patch by evaluating in a new cell the following"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:".wlx\n\n<style>\n\t.slide-frontend-object .cm-editor\xa0{\n\t\ttext-align: left;\n\t}\n</style>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},35128:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2023-11-02 at 10.18.16-f5b8243daf6d46b3e2cba5bce34fa0c8.png"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>d});var i=t(11504);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);