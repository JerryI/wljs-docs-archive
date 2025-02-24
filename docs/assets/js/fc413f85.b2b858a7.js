"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5264],{64484:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var i=s(17624),l=s(4552);const r={sidebar_position:1},c=void 0,t={id:"frontend/Cell types/Input cell",title:"Input cell",description:"One Ring to rule them all...",source:"@site/docs/frontend/Cell types/Input cell.md",sourceDirName:"frontend/Cell types",slug:"/frontend/Cell types/Input cell",permalink:"/frontend/Cell types/Input cell",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1740396638e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cell types",permalink:"/category/cell-types"},next:{title:"Markdown",permalink:"/frontend/Cell types/Markdown"}},d={},o=[{value:"Cell properties",id:"cell-properties",level:2},{value:"Wolfram Language",id:"wolfram-language",level:2},{value:"Syntax highlighting symbols tracking",id:"syntax-highlighting-symbols-tracking",level:3},{value:"Syntax sugar",id:"syntax-sugar",level:3},{value:"Access to documentation",id:"access-to-documentation",level:3},{value:"Morph output cell into input",id:"morph-output-cell-into-input",level:3},{value:"Auto-upload files",id:"auto-upload-files",level:3},{value:"Other languages",id:"other-languages",level:2}];function a(e){const n={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",msqrt:"msqrt",ol:"ol",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",strong:"strong",svg:"svg",ul:"ul",...(0,l.M)(),...e.components},{CodeMirror:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeMirror",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"One Ring to rule them all..."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["An input cell is a multi tool. ",(0,i.jsx)(n.strong,{children:"By the default it assumes Wolfram Language as an input"}),", however, it can be altered by the directive in the first line. See ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/Markdown",children:"Markdown"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/Javascript",children:"Javascript"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/HTML",children:"HTML"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"Slides"}),", and so on."]}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsx)(r,{children:"1+1"}),"\n",(0,i.jsx)(r,{children:".md\n# Heading"}),"\n",(0,i.jsx)(r,{children:".js\nreturn 1+1;"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Think about it if it was an anonymous file"}),"\nThen whatever you typed, you should press ",(0,i.jsx)(n.code,{children:"Shift-Enter"})," to make magic happen."]}),"\n",(0,i.jsxs)(n.p,{children:["When you ",(0,i.jsx)(n.strong,{children:"start typing"}),", the following happens"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"each character is send to a server and updates the cell (autosaving every 300 ms)"}),"\n",(0,i.jsx)(n.li,{children:"editor tries to figure out the language or a cell type"}),"\n",(0,i.jsx)(n.li,{children:"considering (2) it changes the syntax highlighting, autocomplete / other plugins"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(91008).c+"",width:"600",height:"199"})}),"\n",(0,i.jsx)(n.h2,{id:"cell-properties",children:"Cell properties"}),"\n",(0,i.jsxs)(n.p,{children:["By clicking on ",(0,i.jsx)(n.code,{children:"..."})," (more icon) located on the right side of a cell group, you can change the properties of an input cell"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(43536).c+"",width:"725",height:"341"})}),"\n",(0,i.jsx)(n.p,{children:"It affects the whole cell group, i.e. input cell & all children output cells. The following transformations are possible"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Project to a window"})," - evaluates a cell and shows the first output result in a separate window"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Make initialization cell"})," - marks an input cell as initialization cell, which will be evaluated once a notebook has been opened (appears as a ",(0,i.jsx)("span",{style:{color:"green"},children:"green"})," dot in the top-right corner)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Copy"})," - compresses cell group into a gzip-compressed string expression. Paste it to a new empty input cell"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Hide / Show"})," - hides an input cell keeping only its output cells. There is a shortcut ",(0,i.jsx)(n.code,{children:"Cmd+2 / Alt+2"})," or an arrow symbol on the left side of the group."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Shrink / Expand"})," - fades out the large text keeping only the preview of it. A cursor can still be navigated into it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Lock / Unlock"})," - makes an input read-only and limits the controls of the given input cell"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Vanish"})," - makes a cell group completely invisible and uneditable. If an output cell has JS or HTML code, it will anyway be executed, however not visible explicitly. Invisible cells can only be viewed using ",(0,i.jsx)(n.code,{children:"Expert Mode"})," (located in the settings menu). It comes useful for making templates."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wolfram-language",children:"Wolfram Language"}),"\n",(0,i.jsx)(n.h3,{id:"syntax-highlighting-symbols-tracking",children:"Syntax highlighting symbols tracking"}),"\n",(0,i.jsx)(n.p,{children:"Wolfram Language autocomplete and highlighting can be extended using external packages."}),"\n",(0,i.jsxs)(n.p,{children:["Once you have defined something in Wolfram Kernel session in ",(0,i.jsx)(n.code,{children:"Global` "}),", the corresponding symbol appears in the autocomplete window and is shared between all opened notebooks."]}),"\n",(0,i.jsxs)(n.p,{children:["On the startup Wolfram Kernel reads all packages imported and fetches ",(0,i.jsx)(n.code,{children:"::usage"})," directives for defined symbols and periodically repeats this if upon any ",(0,i.jsx)(n.code,{children:"Get"})," or ",(0,i.jsx)(n.code,{children:"Needs"})," command has been fired."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax-sugar",children:"Syntax sugar"}),"\n",(0,i.jsxs)(n.p,{children:["All equations typed in the editor are compatible with any WL kernels,  i.e. can be used in ",(0,i.jsx)(n.code,{children:"wolframscript"}),", since the syntax sugar and the structure is localized inside comments"]}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.msqrt,{children:(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mn,{children:"2"}),(0,i.jsx)(n.mi,{children:"\u03c0"})]})})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\sqrt{2\\pi}"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1.04em",verticalAlign:"-0.1328em"}}),(0,i.jsx)(n.span,{className:"mord sqrt",children:(0,i.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(n.span,{className:"vlist-r",children:[(0,i.jsxs)(n.span,{className:"vlist",style:{height:"0.9072em"},children:[(0,i.jsxs)(n.span,{className:"svg-align",style:{top:"-3em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsxs)(n.span,{className:"mord",style:{paddingLeft:"0.833em"},children:[(0,i.jsx)(n.span,{className:"mord",children:"2"}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c0"})]})]}),(0,i.jsxs)(n.span,{style:{top:"-2.8672em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(n.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:(0,i.jsx)(n.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,i.jsx)(n.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,i.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.1328em"},children:(0,i.jsx)(n.span,{})})})]})})]})})]}),"\nbecomes"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"(*SqB[*)Sqrt[2\\[Pi]](*]SqB*)\n"})}),"\n",(0,i.jsx)(n.p,{children:"which is safe for copying to anywhere outside the WLJS ecosystem."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"You do not need a mouse to construct and edit complex equations."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Unlike Wolfram Mathematica our ",(0,i.jsx)(n.code,{children:"StandardForm"})," output is always compatible with ",(0,i.jsx)(n.code,{children:"InputForm"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The following shortcuts are often used for equations typing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ctrl-2"})," - place a square root on the selected text"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ctrl-/"})," - make a fraction"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ctrl--"})," - make a subscript"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ctrl-6"})," - make a superscript (power)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ESC+.."})," - to enter greek characters"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Alt+/"})," ",(0,i.jsx)(n.code,{children:"Cmd+/"})," - to comment a line"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Hold ",(0,i.jsx)(n.code,{children:"Alt"})," to create multiple carets"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Cmd/Ctrl+F"})," - search in the current cell"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As well as the standard layout"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ArrowLeft: ",(0,i.jsx)(n.code,{children:"cursorCharLeft"})," (",(0,i.jsx)(n.code,{children:"selectCharLeft"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ArrowRight: ",(0,i.jsx)(n.code,{children:"cursorCharRight"})," (",(0,i.jsx)(n.code,{children:"selectCharRight"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-ArrowLeft (Alt-ArrowLeft on macOS): ",(0,i.jsx)(n.code,{children:"cursorGroupLeft"})," (",(0,i.jsx)(n.code,{children:"selectGroupLeft"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-ArrowRight (Alt-ArrowRight on macOS): ",(0,i.jsx)(n.code,{children:"cursorGroupRight"})," (",(0,i.jsx)(n.code,{children:"selectGroupRight"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cmd-ArrowLeft (on macOS): ",(0,i.jsx)(n.code,{children:"cursorLineStart"})," (",(0,i.jsx)(n.code,{children:"selectLineStart"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cmd-ArrowRight (on macOS): ",(0,i.jsx)(n.code,{children:"cursorLineEnd"})," (",(0,i.jsx)(n.code,{children:"selectLineEnd"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ArrowUp: ",(0,i.jsx)(n.code,{children:"cursorLineUp"})," (",(0,i.jsx)(n.code,{children:"selectLineUp"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ArrowDown: ",(0,i.jsx)(n.code,{children:"cursorLineDown"})," (",(0,i.jsx)(n.code,{children:"selectLineDown"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cmd-ArrowUp (on macOS): ",(0,i.jsx)(n.code,{children:"cursorDocStart"})," (",(0,i.jsx)(n.code,{children:"selectDocStart"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cmd-ArrowDown (on macOS): ",(0,i.jsx)(n.code,{children:"cursorDocEnd"})," (",(0,i.jsx)(n.code,{children:"selectDocEnd"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-ArrowUp (on macOS): ",(0,i.jsx)(n.code,{children:"cursorPageUp"})," (",(0,i.jsx)(n.code,{children:"selectPageUp"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-ArrowDown (on macOS): ",(0,i.jsx)(n.code,{children:"cursorPageDown"})," (",(0,i.jsx)(n.code,{children:"selectPageDown"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["PageUp: ",(0,i.jsx)(n.code,{children:"cursorPageUp"})," (",(0,i.jsx)(n.code,{children:"selectPageUp"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["PageDown: ",(0,i.jsx)(n.code,{children:"cursorPageDown"})," (",(0,i.jsx)(n.code,{children:"selectPageDown"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Home: ",(0,i.jsx)(n.code,{children:"cursorLineBoundaryBackward"})," (",(0,i.jsx)(n.code,{children:"selectLineBoundaryBackward"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["End: ",(0,i.jsx)(n.code,{children:"cursorLineBoundaryForward"})," (",(0,i.jsx)(n.code,{children:"selectLineBoundaryForward"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-Home (Cmd-Home on macOS): ",(0,i.jsx)(n.code,{children:"cursorDocStart"})," (",(0,i.jsx)(n.code,{children:"selectDocStart"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-End (Cmd-End on macOS): ",(0,i.jsx)(n.code,{children:"cursorDocEnd"})," (",(0,i.jsx)(n.code,{children:"selectDocEnd"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter: ",(0,i.jsx)(n.code,{children:"insertNewlineAndIndent"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-a (Cmd-a on macOS): ",(0,i.jsx)(n.code,{children:"selectAll"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Backspace: ",(0,i.jsx)(n.code,{children:"deleteCharBackward"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Delete: ",(0,i.jsx)(n.code,{children:"deleteCharForward"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-Backspace (Alt-Backspace on macOS): ",(0,i.jsx)(n.code,{children:"deleteGroupBackward"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-Delete (Alt-Delete on macOS): ",(0,i.jsx)(n.code,{children:"deleteGroupForward"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cmd-Backspace (macOS): ",(0,i.jsx)(n.code,{children:"deleteToLineStart"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cmd-Delete (macOS): ",(0,i.jsx)(n.code,{children:"deleteToLineEnd"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Alt-ArrowLeft (Ctrl-ArrowLeft on macOS): ",(0,i.jsx)(n.code,{children:"cursorSyntaxLeft"})," (",(0,i.jsx)(n.code,{children:"selectSyntaxLeft"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Alt-ArrowRight (Ctrl-ArrowRight on macOS): ",(0,i.jsx)(n.code,{children:"cursorSyntaxRight"})," (",(0,i.jsx)(n.code,{children:"selectSyntaxRight"})," with Shift)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Alt-ArrowUp: ",(0,i.jsx)(n.code,{children:"moveLineUp"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Alt-ArrowDown: ",(0,i.jsx)(n.code,{children:"moveLineDown"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Shift-Alt-ArrowUp: ",(0,i.jsx)(n.code,{children:"copyLineUp"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Shift-Alt-ArrowDown: ",(0,i.jsx)(n.code,{children:"copyLineDown"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Escape: ",(0,i.jsx)(n.code,{children:"simplifySelection"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-Enter (Cmd-Enter on macOS): ",(0,i.jsx)(n.code,{children:"insertBlankLine"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Alt-l (Ctrl-l on macOS): ",(0,i.jsx)(n.code,{children:"selectLine"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-i (Cmd-i on macOS): ",(0,i.jsx)(n.code,{children:"selectParentSyntax"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-[ (Cmd-[ on macOS): ",(0,i.jsx)(n.code,{children:"indentLess"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-] (Cmd-] on macOS): ",(0,i.jsx)(n.code,{children:"indentMore"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ctrl-Alt-\\\\ (Cmd-Alt-\\ on macOS): ",(0,i.jsx)(n.code,{children:"indentSelection"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Shift-Ctrl-k (Shift-Cmd-k on macOS): ",(0,i.jsx)(n.code,{children:"deleteLine"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Shift-Ctrl-\\\\ (Shift-Cmd-\\ on macOS): ",(0,i.jsx)(n.code,{children:"cursorMatchingBracket"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Shift-Alt-a: ",(0,i.jsx)(n.code,{children:"toggleBlockComment"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following EMACsy style key-bindings are also available on MacOS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-b"}),": ",(0,i.jsx)(n.code,{children:"cursorCharLeft"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-f"}),": ",(0,i.jsx)(n.code,{children:"cursorCharRight"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-p"}),": ",(0,i.jsx)(n.code,{children:"cursorLineUp"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-n"}),": ",(0,i.jsx)(n.code,{children:"cursorLineDown"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-a"}),": ",(0,i.jsx)(n.code,{children:"cursorLineStart"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-e"}),": ",(0,i.jsx)(n.code,{children:"cursorLineEnd"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-d"}),": ",(0,i.jsx)(n.code,{children:"deleteCharForward"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-h"}),": ",(0,i.jsx)(n.code,{children:"deleteCharBackward"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-k"}),": ",(0,i.jsx)(n.code,{children:"deleteToLineEnd"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-Alt-h"}),": ",(0,i.jsx)(n.code,{children:"deleteGroupBackward"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-o"}),": ",(0,i.jsx)(n.code,{children:"splitLine"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-t"}),": ",(0,i.jsx)(n.code,{children:"transposeChars"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Ctrl-v"}),": ",(0,i.jsx)(n.code,{children:"cursorPageDown"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For integrals, derivatives and series use ",(0,i.jsx)(n.a,{href:"/frontend/Command%20palette",children:"Command palette"})," tool for entering special characters."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DateObject"}),", ",(0,i.jsx)(n.code,{children:"Graphics"})," and many things you probably got used in Mathematica are implemented. Please see the overview in ",(0,i.jsx)(n.a,{href:"/frontend/Symbolic%20programming",children:"Symbolic programming"})]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If an output is too big, it will be truncated or converted into a temporal symbol (if possible) to reduce the load on the editor"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also make your own custom representation of your symbol like in Mathematica using ",(0,i.jsx)(n.code,{children:"MakeBoxes"}),". Please see ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/InterpretationBox",children:"InterpretationBox"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Formatting/Interpretation",children:"Interpretation"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Formatting/MakeBoxes",children:"MakeBoxes"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Formatting/ArrangeSummaryBox",children:"ArrangeSummaryBox"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/ViewBox",children:"ViewBox"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/BoxBox",children:"BoxBox"})," and an ultimate guide on them in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Syntax%20sugar/Decorating%20symbols",children:"Decorating symbols"})]}),"\n",(0,i.jsx)(n.h3,{id:"access-to-documentation",children:"Access to documentation"}),"\n",(0,i.jsx)(n.p,{children:"Click on \ud83d\udd0e icon in autocomplete window to open docs on that symbol in a new window"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(82472).c+"",width:"797",height:"184"})}),"\n",(0,i.jsx)(n.h3,{id:"morph-output-cell-into-input",children:"Morph output cell into input"}),"\n",(0,i.jsx)(n.p,{children:"If you change something in the output Wolfram Language cell, it will be automatically converted into a new input cell."}),"\n",(0,i.jsx)(n.h3,{id:"auto-upload-files",children:"Auto-upload files"}),"\n",(0,i.jsxs)(n.p,{children:["Drag and drop a file to the editor and paste a media from a clipboard. ",(0,i.jsxs)(n.em,{children:["By the way you can always have an access to clipboard using ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Interpreter/ReadClipboard",children:"ReadClipboard"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"other-languages",children:"Other languages"}),"\n",(0,i.jsx)(n.p,{children:"Most of other languages used as input do support"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"auto-upload files or importing media from a clipboard"}),"\n",(0,i.jsx)(n.li,{children:"autocomplete"}),"\n",(0,i.jsx)(n.li,{children:"highlighting and code parsing (more than just tokenizing)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},82472:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2024-08-25 at 17.36.24-948cfb43f3e7edde94bbeda33f66a0bf.png"},43536:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2025-02-24 at 11.48.04-bc4c28aeaf2606746114f32022d7a53c.png"},91008:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Mathinput-ezgif.com-optipng 1-4ad2e5b04d85465480b2bbe181ca25a8.png"},4552:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>c});var i=s(11504);const l={},r=i.createContext(l);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);