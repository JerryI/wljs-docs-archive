"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3288],{66080:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=i(17624),t=i(4552);const r={sidebar_position:7},o=void 0,s={id:"frontend/Guidelines",title:"Guidelines",description:"Still populating with a content",source:"@site/docs/frontend/Guidelines.md",sourceDirName:"frontend",slug:"/frontend/Guidelines",permalink:"/frontend/Guidelines",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1739462254e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Command palette",permalink:"/frontend/Command palette"},next:{title:"Dynamics",permalink:"/frontend/Dynamics"}},d={},c=[{value:"Use shortcuts",id:"use-shortcuts",level:2},{value:"UI Operations",id:"ui-operations",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Cells",id:"cells",level:3},{value:"Keep folders organized",id:"keep-folders-organized",level:2},{value:"Use <code>NotebookStore</code> for portability",id:"use-notebookstore-for-portability",level:2},{value:"Install everything locally",id:"install-everything-locally",level:2},{value:"Do not use <code>Dynamic</code>",id:"do-not-use-dynamic",level:2},{value:"Dynamic",id:"dynamic",level:3},{value:"Manipulate",id:"manipulate",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Still populating with a content"})}),"\n",(0,l.jsx)(n.h2,{id:"use-shortcuts",children:"Use shortcuts"}),"\n",(0,l.jsx)(n.p,{children:"It improves user experience drastically"}),"\n",(0,l.jsx)(n.h3,{id:"ui-operations",children:"UI Operations"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["New notebook ",(0,l.jsx)(n.code,{children:"Cmd+N"}),", ",(0,l.jsx)(n.code,{children:"Ctrl+N"})]}),"\n",(0,l.jsxs)(n.li,{children:["Open file ",(0,l.jsx)(n.code,{children:"Cmd+O"}),", ",(0,l.jsx)(n.code,{children:"Ctrl+O"})]}),"\n",(0,l.jsxs)(n.li,{children:["Save ",(0,l.jsx)(n.code,{children:"Cmd+S"}),", ",(0,l.jsx)(n.code,{children:"Ctrl+S"})]}),"\n",(0,l.jsxs)(n.li,{children:["Enter command palette ",(0,l.jsx)(n.code,{children:"Cmd+P"}),", ",(0,l.jsx)(n.code,{children:"Ctrl+P"})]}),"\n",(0,l.jsxs)(n.li,{children:["Hide/Unhide current cell ",(0,l.jsx)(n.code,{children:"Cmd+2"}),", ",(0,l.jsx)(n.code,{children:"Alt+2"})]}),"\n",(0,l.jsxs)(n.li,{children:["Clear outputs ",(0,l.jsx)(n.code,{children:"Cmd+U"}),", ",(0,l.jsx)(n.code,{children:"Alt+U"})]}),"\n",(0,l.jsxs)(n.li,{children:["Search inside cell ",(0,l.jsx)(n.code,{children:"Cmd+f"}),", ",(0,l.jsx)(n.code,{children:"Ctrl+f"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Shift + Alt + Space"})," overlay window (Desktop App only)"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Evaluate ",(0,l.jsx)(n.code,{children:"Shift+Enter"})]}),"\n",(0,l.jsxs)(n.li,{children:["Abort ",(0,l.jsx)(n.code,{children:"Cmd+."}),", ",(0,l.jsx)(n.code,{children:"Alt+."})]}),"\n",(0,l.jsxs)(n.li,{children:["Evaluate initialization cells ",(0,l.jsx)(n.code,{children:"Cmd+I"}),", ",(0,l.jsx)(n.code,{children:"Alt+I"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"cells",children:"Cells"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Ctrl+/"})," make fraction on selected"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Ctrl+6"})," make superscript on selected"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Ctrl+2"})," make square root on selected"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Ctrl+-"})," make subscript on selected"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Cmd + /"})," or ",(0,l.jsx)(n.code,{children:"Alt + /"})," comment a line"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.strong,{children:"more keybindings"})," in ",(0,l.jsx)(n.a,{href:"/frontend/Cell%20types/Input%20cell",children:"Input cell"})]}),"\n",(0,l.jsx)(n.h2,{id:"keep-folders-organized",children:"Keep folders organized"}),"\n",(0,l.jsxs)(n.p,{children:["Various functions may produce ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Formatting/Iconize",children:"Iconize"})," objects, for storing large chunks of data, which are copied to ",(0,l.jsx)(n.code,{children:"./.iconized/"})," folder in the notebook directory. Any dropped images or files will be uploaded to ",(0,l.jsx)(n.code,{children:"./attachments/"})," directory. Therefore it is important to have a clear separation between your projects."]}),"\n",(0,l.jsxs)(n.h2,{id:"use-notebookstore-for-portability",children:["Use ",(0,l.jsx)(n.code,{children:"NotebookStore"})," for portability"]}),"\n",(0,l.jsxs)(n.p,{children:["If you want your notebook to be exported to a single editable ",(0,l.jsx)(n.code,{children:".html"})," ",(0,l.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"}),", use ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Cells%20and%20Notebook/NotebookStore",children:"NotebookStore"})," as a persistent storage for your raw data. In such case all images, graphs, and stored data will be kept."]}),"\n",(0,l.jsx)(n.h2,{id:"install-everything-locally",children:"Install everything locally"}),"\n",(0,l.jsx)(n.p,{children:"We promote the idea of storing libraries or paclets for Wolfram Language locally for each project. There is no other way to provide the reliable way of computing, storing data, reproducibility and independence from any remote resources"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",metastring:'title="example of a built-in package manager"',children:'PacletRepositories[{\n    Github -> "https://github.com/KirillBelovTest/GPTLink"\n}]\n\n<<KirillBelov`GPTLink`\n'})}),"\n",(0,l.jsx)(n.p,{children:"this will create a folder with all used paclets and keep them up to date if needed"}),"\n",(0,l.jsxs)(n.h2,{id:"do-not-use-dynamic",children:["Do not use ",(0,l.jsx)(n.code,{children:"Dynamic"})]}),"\n",(0,l.jsxs)(n.p,{children:["We rely on ",(0,l.jsx)(n.em,{children:"a completely different architecture"})," to handle interactivity and graphics updates compared to Wolfram Mathematica."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["In general ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Manipulate",children:"Manipulate"})," is implemented as well, but it is not recommend to use often due to its impact to the system performance."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"dynamic",children:"Dynamic"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/frontend/Reference/GUI/InputButton",children:"Buttons"}),", ",(0,l.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"sliders"})," are event-driven, i.e. you need to subscribe to them using ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,l.jsx)(n.code,{children:"EventHandler"})}),". All updates are handled using ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," approach. For example"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"length = 1.0;\nEventHandler[InputRange[-1,1,0.1], Function[l, length = l]]\n\nGraphics[Rectangle[{-1,-1}, {length // Offload, 1}]]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"manipulate",children:"Manipulate"}),"\n",(0,l.jsxs)(n.p,{children:["In general there is built-in function for simple 2D plots - ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"}),", however, for something more complicated - ",(0,l.jsx)(n.em,{children:"you need to craft it by yourself"})," using building ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," and simple graphics primitives such as ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/Line",children:"Line"}),", ",(0,l.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/Polygon",children:"Polygon"})," and etc as building blocks."]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>o});var l=i(11504);const t={},r=l.createContext(t);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);