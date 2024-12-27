"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[840],{22284:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=i(17624),t=i(4552);const r={sidebar_position:2},o=void 0,l={id:"frontend/Overview",title:"Overview",description:"The whole notebook interface is made using plain Javascript, HTML powered by a Wolfram WebServer  and WLX running locally on a Wolfram Kernel. It means you can work remotely by running a server anywhere you want (see how at instruction).",source:"@site/docs/frontend/Overview.md",sourceDirName:"frontend",slug:"/frontend/Overview",permalink:"/frontend/Overview",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1735307244e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/"},next:{title:"Wolfram Language",permalink:"/frontend/Wolfram Language"}},c={},a=[{value:"Cell control buttons",id:"cell-control-buttons",level:3},{value:"Shortcuts",id:"shortcuts",level:3},{value:"UI",id:"ui",level:4},{value:"Cells",id:"cells",level:4},{value:"Wolfram Language",id:"wolfram-language",level:2},{value:"Snippets",id:"snippets",level:2},{value:"AI Copilot",id:"ai-copilot",level:2},{value:"Editor of Power",id:"editor-of-power",level:2},{value:"Overlay mode",id:"overlay-mode",level:2},{value:"Graphics 2D &amp; 3D",id:"graphics-2d--3d",level:2},{value:"Realtime calculations",id:"realtime-calculations",level:2},{value:"Short videos",id:"short-videos",level:3},{value:"3D Graphics using WebGL",id:"3d-graphics-using-webgl",level:3},{value:"Portability",id:"portability",level:2},{value:"Other languages",id:"other-languages",level:2}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.M)(),...e.components},{Wl:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The whole notebook interface is made using plain Javascript, HTML powered by a ",(0,s.jsx)(n.a,{href:"https://github.com/KirillBelovTest/HTTPHandler",children:"Wolfram WebServer"}),"  and ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wlx-docs/",children:"WLX"})," running locally on a Wolfram Kernel. It means you can work remotely by running a server anywhere you want (see how at ",(0,s.jsx)(n.a,{href:"/",children:"instruction"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Some calculations are performed partially by your browser, you can have a control over it, ",(0,s.jsx)(n.a,{href:"/frontend/Dynamics",children:"if you want"})," . All UI elements, cells operations are written in Javascript and Wolfram Language and performed by WLJS Interpreter"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WLJS Interpreter"})," is a tiny (3 kB) Wolfram Language Interpreter running in a browser and written in vanilla Javascript. It fully interconnects Javascript world with Wolfram Language on the server (backend). We will also reference it as ",(0,s.jsx)(n.em,{children:"frontend"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(26068).c+"",width:"1792",height:"886"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Compared to Mathematica the cell design has mostly flat structure similar to Jupyter Notebook. Only ",(0,s.jsx)(n.code,{children:"input"})," and ",(0,s.jsx)(n.code,{children:"output"})," cells are joined into groups."]})}),"\n",(0,s.jsxs)(n.p,{children:["Output cells are editable. We do not separate them explicitly unlike in Mathematica or Jupyter, since the whole document is a ",(0,s.jsx)(n.strong,{children:"notebook"}),", notebooks do not have inputs and outputs. You can freely edit, copy, reevaluate in place any output expression. Therefore we distinguish them only formally."]}),"\n",(0,s.jsx)(n.h3,{id:"cell-control-buttons",children:"Cell control buttons"}),"\n",(0,s.jsx)(n.p,{children:"All cells are grouped by parent input cell, apart from that the structure of the notebook is flat. The controls are applied to the whole group"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(63516).c+"",width:"1126",height:"76"})}),"\n",(0,s.jsx)(n.p,{children:"From left to right"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add new cell below"}),"\n",(0,s.jsx)(n.li,{children:"hide an input cell"}),"\n",(0,s.jsxs)(n.li,{children:["evaluate (also ",(0,s.jsx)(n.code,{children:"Shift+Enter"})," combo)"]}),"\n",(0,s.jsx)(n.li,{children:"more"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The last options expands into"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(16452).c+"",width:"1124",height:"312"})}),"\n",(0,s.jsxs)(n.p,{children:["Project to a window is the most interesting feature here, that allows to evaluate a cell in a new window. It comes handy while demonstrating ",(0,s.jsx)(n.a,{href:"/frontend/Advanced/Slides/",children:"presentations"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"shortcuts",children:"Shortcuts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"working in both: browser and desktop application"})}),"\n",(0,s.jsx)(n.h4,{id:"ui",children:"UI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+S"}),", ",(0,s.jsx)(n.code,{children:"Cmd+S"})," save notebook"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Alt+."}),", ",(0,s.jsx)(n.code,{children:"Cmd+."})," abort evaluation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+P"}),", ",(0,s.jsx)(n.code,{children:"Cmd+P"})," open command palette"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Shift+Enter"})," evaluate current cell"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl/Cmd + f"})," search in the focused cell"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Shift + Alt + Space"})," overlay window (Desktop App only)"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"cells",children:"Cells"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+W"}),", ",(0,s.jsx)(n.code,{children:"Cmd+2"})," hide/show input cell"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+/"})," make fraction on selected"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+6"})," make superscript on selected"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+2"})," make square root on selected"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl+-"})," make subscript on selected"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Alt/Cmd+/"})," comment a line"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.strong,{children:"more keybindings"})," in ",(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Input%20cell",children:"Input cell"})]}),"\n",(0,s.jsx)(n.h2,{id:"wolfram-language",children:"Wolfram Language"}),"\n",(0,s.jsxs)(n.p,{children:["When you start typing the language you are using assumed to be WL. By pressing ",(0,s.jsx)(n.code,{children:"Shift+Enter"})," you can start evaluation"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(54272).c+"",width:"1152",height:"590"})}),"\n",(0,s.jsxs)(n.p,{children:["Output cells are joined to the input and the last one can be hidden by clicking on the ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mo,{children:"\u2192"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,s.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," sign on the left side from the cell."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Once you change something inside the output cell, it loses its formal parent and becomes new input cell, like in Mathematica."})}),"\n",(0,s.jsx)(n.p,{children:"Syntax sugar, fractions and other 2D input are supported"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(26144).c+"",width:"796",height:"180"})}),"\n",(0,s.jsx)(n.p,{children:"The most useful commands are listed below"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl"}),"+",(0,s.jsx)(n.code,{children:"/"})," fraction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl"}),"+",(0,s.jsx)(n.code,{children:"^"})," power"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl"}),"+",(0,s.jsx)(n.code,{children:"-"})," subscript"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ctrl"}),"+",(0,s.jsx)(n.code,{children:"2"})," square root"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Or using a special toolbar (snippet)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(60992).c+"",width:"800",height:"481"})}),"\n",(0,s.jsx)(n.p,{children:"Now let us move to some other gems"}),"\n",(0,s.jsx)(n.h2,{id:"snippets",children:"Snippets"}),"\n",(0,s.jsxs)(n.p,{children:["To help in writing matrixes, colors, and some other useful stuff are accessible by the shortcut ",(0,s.jsx)(n.code,{children:"Super/Cmd"}),"+",(0,s.jsx)(n.code,{children:"P"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(98180).c+"",width:"1024",height:"553"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(34804).c+"",width:"1138",height:"764"})}),"\n",(0,s.jsx)(n.p,{children:"All snippets are just special kind of notebooks including all UI elements."}),"\n",(0,s.jsx)(n.h2,{id:"ai-copilot",children:"AI Copilot"}),"\n",(0,s.jsx)(n.p,{children:"See it in action on Youtube Shorts"}),"\n",(0,s.jsx)("iframe",{width:"315",height:"560",src:"https://youtube.com/embed/wenBdDRpD4g?si=bB5h28zAHb7r6Nmh",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)("iframe",{width:"315",height:"560",src:"https://youtube.com/embed/pXe1mSir47Q?si=UTclXIdPiB3HydPI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(n.h2,{id:"editor-of-power",children:"Editor of Power"}),"\n",(0,s.jsx)(n.p,{children:"A single input cell can produce Wolfram Language output, HTML page, Javascript window or a slide of a presentation"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(81452).c+"",width:"1024",height:"485"})}),"\n",(0,s.jsx)(n.p,{children:"Or just draw something inside the code editor"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(51750).c+"",width:"424",height:"298"})}),"\n",(0,s.jsx)(n.h2,{id:"overlay-mode",children:"Overlay mode"}),"\n",(0,s.jsxs)(n.p,{children:["While running WLJS App (in a tray or normally) press ",(0,s.jsx)(n.code,{children:"Shift+Alt+Space"})," to get quick access to WLJS input cell"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(42132).c+"",width:"886",height:"330"})}),"\n",(0,s.jsxs)(n.p,{children:["See more in ",(0,s.jsx)(n.a,{href:"/frontend/Advanced/Overlay%20mode",children:"Overlay mode"})]}),"\n",(0,s.jsx)(n.h2,{id:"graphics-2d--3d",children:"Graphics 2D & 3D"}),"\n",(0,s.jsx)(n.p,{children:"Most Mathematica's plotting functions produces lower-level primitives. The major part of them are supported"}),"\n",(0,s.jsx)(r,{children:'ExampleData[{"Geometry3D","KleinBottle"}]'}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Try to drag and pan using your mouse!"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(36176).c+"",width:"1456",height:"726"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Graphics elements are not exported SVG. All primitives are recreated using d3.js and THREE.js from scratch"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(45234).c+"",width:"540",height:"223"})}),"\n",(0,s.jsx)(n.h2,{id:"realtime-calculations",children:"Realtime calculations"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dynamics? We have a lot of it"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(97004).c+"",width:"800",height:"645"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(36364).c+"",width:"1134",height:"820"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Or may be even fluid simulation?"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(55399).c+"",width:"764",height:"556"})}),"\n",(0,s.jsx)(n.h3,{id:"short-videos",children:"Short videos"}),"\n",(0,s.jsx)("iframe",{width:"315",height:"560",src:"https://youtube.com/embed/ItXbjNtGlew?si=enz0K6jAu2xv5hAK",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(n.h3,{id:"3d-graphics-using-webgl",children:"3D Graphics using WebGL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(71944).c+"",width:"800",height:"645"})}),"\n",(0,s.jsx)(n.h2,{id:"portability",children:"Portability"}),"\n",(0,s.jsx)(n.p,{children:"You will probably need to share your notes with someone. Here we have a bunch of options:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Export entire notebook as a web-page ",(0,s.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"}),", ",(0,s.jsx)(n.a,{href:"/frontend/Exporting/Dynamic%20HTML%20%F0%9F%86%95",children:"Dynamic HTML \ud83c\udd95"})]}),"\n",(0,s.jsxs)(n.li,{children:["Export individual figures ",(0,s.jsx)(n.a,{href:"/frontend/Exporting/Figures",children:"Figures"})]}),"\n",(0,s.jsxs)(n.li,{children:["Make a presentation ",(0,s.jsx)(n.a,{href:"/frontend/Exporting/Slides",children:"Slides"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(19168).c+"",width:"600",height:"390"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"No internet dependency, it will work permanently and will not be broken by any update in the future"})," You can always convert back the exported notebook if needed, which is perfect if you want to share your notes on your personal blog."]}),"\n",(0,s.jsx)(n.h2,{id:"other-languages",children:"Other languages"}),"\n",(0,s.jsxs)(n.p,{children:["Of course the notebook interface is impossible to use without text annotation, here you do not need to switch to a different cell type. To use you favorite (or not) Markdown type in the first line of a cell ",(0,s.jsx)(n.code,{children:".md"})," and magic happens"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(76312).c+"",width:"1448",height:"662"})}),"\n",(0,s.jsx)(n.p,{children:"By clicking on an arrow on the right, you can hide the source cell and only the output will be displayed. An editor is very flexible you can quite easily add your custom output cell support."}),"\n",(0,s.jsx)(n.p,{children:"Or combine WL together with Javascript to visualize your data in incredible way"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(32428).c+"",width:"1448",height:"1068"})}),"\n",(0,s.jsx)(n.p,{children:"The core plugins provides the following cells"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Javascript",children:"Javascript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Exporting/Markdown",children:"Markdown"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Reference/Slides/",children:"Slides"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Files",children:"Files"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/HTML",children:"HTML"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Many%20more",children:"Many more"})," (Mermaid)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},34804:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/CuboidGizmo-ezgif.com-optipng-24f0f49d61040eb987cce6a4ff12adb9.png"},51750:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Excalidraw-ezgif.com-speed 1-de43a6d21db2cd6e0571b9e929afe34d.gif"},36364:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/RotationMatriix3D-ezgif.com-optipng-7e2d7b5fa61ae1d652a402881a6df000.png"},42132:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot 2024-08-25 at 16.52.14-54e3fc2a646ea29283cd34cfdfc806c9.png"},19168:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/StiticExport-ezgif.com-optimize-fae6179571ba1fb4852eafe876c36ddc.gif"},71944:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/balls-ezgif.com-video-to-gif-converter-edc2643a208aacae7738271688617fd6.gif"},55399:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/fluid-ezgif.com-video-to-webp-converter-8ca7b5316d068e2c7caf810c0b83eeca.webp"},81452:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Dropfiles-ezgif.com-optipng-32a413db0a67bec8b71749c28e5b096a.png"},98180:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Gizmo-ezgif.com-optipng-f1046dfa42795b988b7fa87d69d2b7ec.png"},26068:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Interface-1-c072fc4b42ca0e06d443919f45f0924e.png"},63516:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot 2024-03-13 at 18.53.13-ffd442db6b2d106d704ce388432c60ae.png"},16452:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot 2024-03-13 at 18.54.44-9ff0376f8c05a05b8f008b418e03b403.png"},54272:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot 2024-03-13 at 18.58.12-5af6d64c0af194395a73262191e352f2.png"},76312:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot 2024-03-13 at 19.05.40-72066e31aab830ccae8a2e524b95a4cf.png"},36176:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot 2024-03-13 at 19.07.00-baeb5782290ff1fc8a17612341db7851.png"},32428:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Spark-ezgif.com-speed-2c81cf54bbc8d7bc1c338cb820fa2b1d.png"},26144:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/nice-23ee628829c6839bc6f802b8b9ca53b8.gif"},60992:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/plattte-ezgif.com-optimize 1-dcc116244c0094c019844d92d388e264.gif"},45234:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/rerer-ezgif.com-video-to-gif-converter-86790386813e98afd04fc28bfcb92865.gif"},97004:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/roots54534-ezgif.com-video-to-gif-converter-b6338ab4c689a4dc575e3fca8ebb8d4b.gif"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>o});var s=i(11504);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);