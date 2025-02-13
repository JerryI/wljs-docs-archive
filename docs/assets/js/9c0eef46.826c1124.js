"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5656],{25984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(17624),r=t(4552);const s={draft:!1},i=void 0,o={id:"frontend/Advanced/Frontend interpretation/WLJS Functions",title:"WLJS Functions",description:"Let us start from the simplest stuff",source:"@site/docs/frontend/Advanced/Frontend interpretation/WLJS Functions.md",sourceDirName:"frontend/Advanced/Frontend interpretation",slug:"/frontend/Advanced/Frontend interpretation/WLJS Functions",permalink:"/frontend/Advanced/Frontend interpretation/WLJS Functions",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1739462254e3,frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Frontend Objects",permalink:"/frontend/Advanced/Frontend interpretation/Frontend Objects"},next:{title:"Inset expressions",permalink:"/frontend/Advanced/Graphics/Inset expressions"}},c={},l=[{value:"Quick and Dirty",id:"quick-and-dirty",level:2},{value:"Deeper look",id:"deeper-look",level:2},{value:"Simple direct call",id:"simple-direct-call",level:3},{value:"\ud83c\udfa1 Example 1: Game of Life",id:"-example-1-game-of-life",level:5},{value:"A remark about sub symbols | Methods",id:"a-remark-about-sub-symbols--methods",level:4},{value:"Contexts",id:"contexts",level:4},{value:"Containers | Virtualization",id:"containers--virtualization",level:3},{value:"Properties",id:"properties",level:4},{value:"\ud83c\udfa1 Example 2: Clocks",id:"-example-2-clocks",level:5},{value:"Default methods",id:"default-methods",level:4},{value:"A remark on Packed and Numeric arrays",id:"a-remark-on-packed-and-numeric-arrays",level:4},{value:"\ud83c\udfa1 Example 3: Game of Life (improvements)",id:"-example-3-game-of-life-improvements",level:5},{value:"Dynamic symbols",id:"dynamic-symbols",level:4},{value:"Injection into the container&#39;s instance/env",id:"injection-into-the-containers-instanceenv",level:3},{value:"\ud83c\udfa1 Example with lines",id:"-example-with-lines",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Let us start from the simplest stuff"}),"\n",(0,a.jsx)(n.h2,{id:"quick-and-dirty",children:"Quick and Dirty"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new cell, then, define a function inside ",(0,a.jsx)(n.code,{children:"core"})," ",(0,a.jsx)(n.a,{href:"/interpreter/Advanced/architecture",children:"context"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:".js\ncore.MyFunction = async (args, env) => {\n\tconst data = await interpretate(args[0], env);\n\talert(data);\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"then, to call it directly from Wolfram Kernel use"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'MyFunction["Hello World!"] // FrontSubmit;\n'})}),"\n",(0,a.jsx)(n.p,{children:"or in the cell's output"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'CreateFrontEndObject[MyFunction["Hello World!"]]\n'})}),"\n",(0,a.jsx)(n.p,{children:"it should produce a pop-up message with a given text."}),"\n",(0,a.jsx)(n.h2,{id:"deeper-look",children:"Deeper look"}),"\n",(0,a.jsx)(n.p,{children:"Firstly one need to understand the way how it was called. There are a few different ways"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"direct calls as it is"}),"\n",(0,a.jsx)(n.li,{children:"indirect using containers"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The first one is rather straightforward, where basically most UI functions and core built-in functions are written."}),"\n",(0,a.jsx)(n.h3,{id:"simple-direct-call",children:"Simple direct call"}),"\n",(0,a.jsx)(n.p,{children:"As simple as that"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(80964).c+"",width:"677",height:"177"})}),"\n",(0,a.jsxs)(n.p,{children:["A called function has no persistent memory (call and forget) except from the ",(0,a.jsx)(n.code,{children:"env"})," variable, which can share the data with other functions from the subtree - see more in ",(0,a.jsx)(n.a,{href:"/interpreter/Advanced/architecture",children:"architecture"})," (Meta Data)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Any defined functions must return javascript object or nothing"}),"\nWhile in the arguments ",(0,a.jsx)(n.code,{children:"args"})," it is always Wolfram Expression, therefore use ",(0,a.jsx)(n.code,{children:"interpretate"})," on them to convert anything into javascript data type."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, ",(0,a.jsx)(n.code,{children:"env"})," comes very handy working with graphics"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.RGBColor = async (args, env) => {\n\tconst r = await interpretate(args[0], env);\n\tconst g = await interpretate(args[1], env);\n\tconst b = await interpretate(args[2], env);\n\t//modify env\n\tenv.color = new whatever.Color(r, g, b);\n\n\t//return for the case if it is used directly\n\treturn env.color \n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["where ",(0,a.jsx)(n.code,{children:"core.RGBColor"})," can be called somewhere in the list"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"{Blue[], {Red[], Sphere[] (*i am red*)}, Cuboid[] (*i am blue*)} // Graphics3D\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then in the parent function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.Graphics3D = async (args, env) => {\n\t...\n\tvar scene = {};\n\tawait interpretate(args[0], {...env, scene: scene});\n\t//go to subthree\n\trendered.add(scene) //all objects are there!\n}\n\ncore.Sphere = async (args, env) => {\n\t...\n\tenv.scene.add(new sphere(color: env.color));\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Therefore the desired data will anyway ended up in the scene. This is a power of pointers."}),"\n",(0,a.jsx)(n.h5,{id:"-example-1-game-of-life",children:"\ud83c\udfa1 Example 1: Game of Life"}),"\n",(0,a.jsx)(n.p,{children:"To get more fun, let us firstly define some supporting structures"}),"\n",(0,a.jsx)(n.p,{children:"Create a new cell with the following code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="cell 1"',children:'.js\n//create js canvas\nconst canvas = document.createElement("canvas");\ncanvas.width = 400;\ncanvas.height = 400;\n\nlet context = canvas.getContext("2d");\ncontext.fillStyle = "lightgray";\ncontext.fillRect(0, 0, 500, 500);\n\n//an array to store the previous state\nlet old = new Array(40);\nfor (let i = 0; i < old.length; i++) {\n  old[i] = new Array(40).fill(0); \n}\n\n//a function to draw on it\ncore.MyFunction = async (args, env) => {\n  const data = await interpretate(args[0], env);\n\n  //draw our boxes\n  for(let i=0; i<40; ++i) {\n    for (let j=0; j<40; ++j) {\n      //old pixels will leave blue traces\n      if (old[i][j] > 0) {\n        context.fillStyle = "rgba(0,0,255,0.2)"; \n        context.fillRect(i*10 + 2, j*10 + 2, 6, 6);\n      }\n      //new pixels\n      if (data[i][j] > 0) {\n        context.fillStyle = "rgba(255,0,0,0.4)"; \n        context.fillRect(i*10 + 1, j*10 + 1, 8, 8);\n      } else {\n        context.fillStyle = "rgba(255,255,255,0.4)"; \n        context.fillRect(i*10 + 1, j*10 + 1, 8, 8);\n      }\n      \n      //store the previous frame\n      old[i][j] = data[i][j];\n    }\n  }\n}\n\nreturn canvas\n'})}),"\n",(0,a.jsx)(n.p,{children:"This function will draw a 40x40 array of 1 and 0 pixels inside the page. Let us try to it out on some typical cellular automata like Game of Life"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 2"',children:"gameOfLife = {224, {2, {{2, 2, 2}, {2, 1, 2}, {2, 2, 2}}}, {1, 1}};\nboard = RandomInteger[1, {40, 40}];\nDo[\n\tboard = CellularAutomaton[gameOfLife, board, {{0, 1}}] // Last;\n\tMyFunction[board] // FrontSubmit;\n\tPause[0.1];\n, {i,1,100}]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["What it does is shown on the gif below, however you can try it by yourself by openning ",(0,a.jsx)(n.code,{children:"GOL.wln"})," from the examples folder."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["See more about JS cells in ",(0,a.jsx)(n.a,{href:"Cell%20types.md",children:"Cell types"})]})}),"\n",(0,a.jsx)(n.p,{children:"Of course this is not the best example of making animations, better will be to let js run the animation on its own and wait for a new data or ask for a new data using system of events."}),"\n",(0,a.jsx)(n.h4,{id:"a-remark-about-sub-symbols--methods",children:"A remark about sub symbols | Methods"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes a function or a tree of them is called as a responce on some event. Then this information is stored in ",(0,a.jsx)(n.code,{children:"env.method"})," - see also ",(0,a.jsx)(n.a,{href:"../../../../interpreter/Advanced/symbols.md",children:"symbols"})]}),"\n",(0,a.jsxs)(n.p,{children:["If there is an update of a data, i.e. ",(0,a.jsx)(n.code,{children:"env.method = 'update'"}),", then interpreter will try to find a sub-symbols or a function (read more about how interpreter handles them ",(0,a.jsx)(n.a,{href:"https://github.com/JerryI/wljs-interpreter",children:"WLJS Interpreter"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(56768).c+"",width:"714",height:"192"})}),"\n",(0,a.jsx)(n.p,{children:"Imagine if any defined function was a class declaration with a constructor and methods (subsymbols)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.MyFunction = (args, env) => {}\n\ncore.MyFunction.update = (args, env) => {}\ncore.MyFunction.destroy = (args, env) => {}\ncore.MyFunction.whatever = (args, env) => {}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, can we want to specify it during the evaluation of a symbol"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.OurParentFunction = (args, env) => {\n\tconst data = interpetate(args[0], {...env, method:'update');\n\t...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"It is extremely useful, when it comes to the updates of some graph, plot. There is no need to redraw everything, but perform some lightweight operations"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.ListLinePlotly = (args, env) => {\n\t//create element...draw axes and etc...SLOW\n\tPlotly.newPlot(...);\n}\ncore.ListLinePlotly.update = (args, env) => {\n\t//quickly redraw changed elements\n\tPlotly.animate(...) or extend...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Destroy and update methods are usually features of ",(0,a.jsx)(n.a,{href:"#Containers%20Executables",children:"Containers"})]})}),"\n",(0,a.jsx)(n.h4,{id:"contexts",children:"Contexts"}),"\n",(0,a.jsx)(n.p,{children:"To prevent the mess of duplicated function names and etc, you can specify the context or let's say library of symbols using"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'var library = {};\nlibrary.name = "It is important to write a name"\ninterpretate.extendContext(library);\n\nlibrary.Symbol = (args, env) => {/*...*/}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The interpreter will check all available contexts and ",(0,a.jsx)(n.strong,{children:"use the first match"}),". However, you ",(0,a.jsx)(n.strong,{children:"can prioritize the context"})," providing the information in ",(0,a.jsx)(n.code,{children:"env"})," object"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.GrantSymbol = (args, env) => {\n\tconst data = interpretate(args, {...env, context: library});\n\t//...\n\t//first match should be in `library` object\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you have multiple prioritized contexts, you ",(0,a.jsx)(n.strong,{children:"can pass them as an array"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.GrantSymbol = (args, env) => {\n\tconst data = interpretate(args, {...env, context: [library1, library2]});\n\t//...\n\t//first match should be in `library1` object, if not\n\t//then in `library2`, if not, then in `core` context\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"containers--virtualization",children:"Containers | Virtualization"}),"\n",(0,a.jsxs)(n.p,{children:["Each time interpreter faces a container it creates an unique object, that scopes ",(0,a.jsx)(n.code,{children:"env"})," variable and provides local memory for all tree of Wolfram Expressions located inside the container."]}),"\n",(0,a.jsx)(n.p,{children:"An interpreter can automatically create a container for any WLJS symbols, when it sees a special property defined"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.MySymbol.virtual = true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["then ",(0,a.jsx)(n.code,{children:"MySymbol"})," takes all benefits of containers even if it was called anonymously from ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"}),". However, it can also be done manually using ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Interpreter/FrontEndVirtual",children:"FrontEndVirtual"})," wrapper"]}),"\n",(0,a.jsxs)(n.p,{children:["Most importantly containers or executables can be destroyed or updated (see ",(0,a.jsx)(n.a,{href:"#A%20remark%20about%20sub%20symbols%20Methods",children:"A remark about sub symbols Methods"}),") unlike expressions under normal evaluation."]}),"\n",(0,a.jsx)(n.p,{children:"Another feature is that it automatically binds to a child container, which allows to reevaluate expressions from the parent container once a change was made to a child."}),"\n",(0,a.jsxs)(n.p,{children:["The last one is a fundament for ",(0,a.jsx)(n.a,{href:"/frontend/Dynamics",children:"Dynamics"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.p,{children:"Containerized execution provides much more flexibility since each call creates a separate instance with its local memory."}),"\n",(0,a.jsxs)(n.p,{children:["For the convenience all extra features are provided in ",(0,a.jsx)(n.code,{children:"env"})," variable"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.MyFunction = (args, env) => {\n\tenv.local  = {} //pointer to the local memory of the instance\n\tenv.global      //pointer to the global memory of the call tree\n\tenv.exposed     //pointer to the memory outside the instance\n\tenv //sharable memory within the instance\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Global memory is created at each widget creating in the cell editor or scope of ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"}),". Local memory is scoped for each instance."]}),"\n",(0,a.jsxs)(n.p,{children:["Depending, where it is supposed to be executed, one can have an access to various page elements. For instance, if it is called from the editor it provides ",(0,a.jsx)(n.code,{children:"env.element"})," - an access to DOM placeholder in the editor or a DOM placeholder on a ",(0,a.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"Slide"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Let's make an example that can demonstrate local memory usage"})}),"\n",(0,a.jsxs)(n.p,{children:["For example ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/Sphere",children:"Sphere"}),", ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Graphics/Line",children:"Line"})," are virtual function or symbols, since for each instance of a ",(0,a.jsx)(n.code,{children:"Sphere"})," we need to store its data, position in order to be able to update them correctly and couple to dynamic symbols."]}),"\n",(0,a.jsx)(n.h5,{id:"-example-2-clocks",children:"\ud83c\udfa1 Example 2: Clocks"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:".js\ncore.PlaceholderClock = async (args, env) => {\n\t//store the handler object in the local memory\n\tenv.local.start = new Date();\n\tenv.local.clock = setInterval(()=>{\n\t\tconst d = (new Date() - env.local.start);\n\t\tenv.element.innerHTML = d;\n\t}, 10);\n}\n//when our instance is about to be destoryed - clear timer\ncore.PlaceholderClock.destroy = async (args, env) => {\n\twindow.clearInterval(env.local.clock);\n\tconst passed = (new Date() - env.local.start);\n\talert(passed+' passed');\n}\n\ncore.PlaceholderClock.virtual = true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then we can execute in inside on the frontend using ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/ViewBox",children:"ViewBox"})," or  ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/CreateFrontEndObject",children:"CreateFrontEndObject"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"CreateFrontEndObject[PlaceholderClock[]]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Try to copy and paste them into the same or different cells (from the output cell)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(86856).c+"",width:"414",height:"52"})}),"\n",(0,a.jsxs)(n.p,{children:["This examples intersects with the section ",(0,a.jsx)(n.a,{href:"#Default%20methods",children:"Default methods"}),", since it involves ",(0,a.jsx)(n.code,{children:"destroy"})," subsymbol, which is fired when one deletes a widget from the editor."]}),"\n",(0,a.jsxs)(n.p,{children:["It comes very handy, when, for example we are working with ",(0,a.jsx)(n.code,{children:"Graphics3D"}),", where every 1/60 of a second a rendering function is called. Imagine, it would be a disaster if one deleted a widget, but the rendering function ",(0,a.jsx)(n.strong,{children:"would still continue to work"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Therefore ",(0,a.jsx)(n.code,{children:"env.local"})," helps a lot"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.Graphics3D.destroy = async (args, env) => {\n\tcancelAnimationFrame(env.local.aid);\n\t//to cancel the animation\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["One can improve an example above by defining ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Formatting/StandardForm",children:"StandardForm"})," for our clocks"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"PlaceholderClock /: MakeBoxes[m_PlaceholderClock, StandardForm] := With[{\n\to = CreateFrontEndObject[m]\n},\n\tMakeBoxes[o, StandardForm]\n]\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"PlaceholderClock[] (* no need in CreateFrontEndObject anymore *)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["or ",(0,a.jsx)(n.strong,{children:"even better"})," with less overhead coming from ",(0,a.jsx)(n.code,{children:"CreateFrontEndObject"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",metastring:'title="better solution"',children:"PlaceholderClock /: MakeBoxes[m_PlaceholderClock, StandardForm] := ViewBox[m, m]\n"})}),"\n",(0,a.jsx)(n.p,{children:"This approach will keep the original expression as well"}),"\n",(0,a.jsx)(n.h4,{id:"default-methods",children:"Default methods"}),"\n",(0,a.jsxs)(n.p,{children:["In principle user can define its own methods (or subsymbols) and provide them in ",(0,a.jsx)(n.code,{children:"env.method"})," as a string. The general infromation was already mentioned before in ",(0,a.jsx)(n.a,{href:"#A%20remark%20about%20sub%20symbols%20Methods",children:"A remark about sub symbols Methods"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For the containers ",(0,a.jsx)(n.em,{children:"you should define two most important methods"})," for you functions"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".destory"})," - when a widget was destoryed. It acts from top to bottom"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".update"})," - when the data was changed. It bubbles up and goes from the nearest parent of the call-tree"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Otherwise if you even delete your widget from the editor (or just remove the cell) it wil cause an error. If you do not to mess with this, keep them empty"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"core.MyFunction.update = async (args, env) => {}\ncore.MyFunction.destroy = async (args, env) => {}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"a-remark-on-packed-and-numeric-arrays",children:"A remark on Packed and Numeric arrays"}),"\n",(0,a.jsxs)(n.p,{children:["Be aware, if you send some large chunks of numerical data Wolfram Kernel might use ",(0,a.jsx)(n.code,{children:"PackedArray"})," instead of a plain ",(0,a.jsx)(n.code,{children:"List"})," (even if you does not explicitly wrap it into ",(0,a.jsx)(n.code,{children:"NumericArray"}),"). Both of them are directly translated into ",(0,a.jsx)(n.code,{children:"NumericArrayObject"})," in Javascript, which is a wrapper of ",(0,a.jsx)(n.code,{children:"TypedArray"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Therefore you should always check for this type"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const data = await interpretate(args[0], env); //get it\n\nif (data instance of NumericArrayObject) {\n\t... process Typed Array\n} else {\n\t... process normal Javascript Array\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["One can take advantage of ",(0,a.jsx)(n.code,{children:"TypedArray"})," s since they are basically raw and flat memory regions, which is easy to process and store for Javascript or send it further to canvas or to a GPU (WebGL, WebGPU). A class wrapper contains several fields"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class NumericArrayObject {\n\tdims : Array //dimensions of data\n\tbuffer : TypedArray //actual data\n\n\tnormal() : Array<Any> //converts back to a normal JS array\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Typed arrays are widely used in ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})," primitives, ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Image/",children:"Image"}),", ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Sound/Audio",children:"Audio"})," players and etc."]}),"\n",(0,a.jsxs)(n.p,{children:["However, if you just want a normal ",(0,a.jsx)(n.code,{children:"Array"}),", you can always convert simply by calling"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let data = await interpretate(args[0], env); //get it\n\nif (data instance of NumericArrayObject) {\n\tdata = data.normal()\n}\n\n//works as usual\n"})}),"\n",(0,a.jsx)(n.h5,{id:"-example-3-game-of-life-improvements",children:"\ud83c\udfa1 Example 3: Game of Life (improvements)"}),"\n",(0,a.jsx)(n.p,{children:"Let us define our constructor"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'.js\n//constructor\ncore.MyFunction = async (args, env) => {\n  //just to make second object to be aware of the previous one\n  //and fetch initial data\n  let data = await interpretate(args[0], env);\n  if (data instance of NumericArrayObject) {\n\tdata = data.normal()\n  }\n\n  //create js canvas\n  const canvas = document.createElement("canvas");\n  canvas.width = 400;\n  canvas.height = 400;\n\n  let context = canvas.getContext("2d");\n  context.fillStyle = "lightgray";\n  context.fillRect(0, 0, 500, 500);\n\n  //an array to store the previous state\n  let old = new Array(40);\n  for (let i = 0; i < old.length; i++) {\n    old[i] = new Array(40).fill(0); \n  }\n\n  env.element.appendChild(canvas);\n  env.local.old = old;\n  env.local.ctx = context;\n}\n\ncore.MyFunction.virtual = true //enable containers\n'})}),"\n",(0,a.jsx)(n.p,{children:"here this line"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const data = await interpretate(args[0], env);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["is very important, even if we wont use ",(0,a.jsx)(n.code,{children:"data"})," variable, to make the call-tree aware of the presence of other symbols to which we need to call at least ",(0,a.jsx)(n.code,{children:"await interpretate(args[0], env);"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Now we can store all data in ",(0,a.jsx)(n.code,{children:"env.local"}),", that belongs to our instance."]}),"\n",(0,a.jsx)(n.p,{children:"The next thing - a method, that allows us to update the canvas"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'.js\ncore.MyFunction.update = async (args, env) => {\n  //get a new data\n  let data = await interpretate(args[0], env);\n  if (data instance of NumericArrayObject) {\n\tdata = data.normal()\n  }\n  //get the canvas from the local memeory\n  const context = env.local.ctx;\n  //draw our boxes\n  for(let i=0; i<40; ++i) {\n    for (let j=0; j<40; ++j) {\n      //old pixels will leave blue traces\n      if (env.local.old[i][j] > 0) {\n        context.fillStyle = "rgba(0,0,255,0.2)"; \n        context.fillRect(i*10 + 2, j*10 + 2, 6, 6);\n      }\n      //new pixels\n      if (data[i][j] > 0) {\n        context.fillStyle = "rgba(255,0,0,0.4)"; \n        context.fillRect(i*10 + 1, j*10 + 1, 8, 8);\n      } else {\n        context.fillStyle = "rgba(255,255,255,0.4)"; \n        context.fillRect(i*10 + 1, j*10 + 1, 8, 8);\n      }\n    }\n  }\n  //store the previous frame\n  env.local.old = data;\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"and the destructor"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:".js\ncore.MyFunction.destroy = (args, env) => {}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then we can use our function with some dynamic symbols using ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," wrapper"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"gameOfLife = {224, {2, {{2, 2, 2}, {2, 1, 2}, {2, 2, 2}}}, {1, 1}};\nboard = RandomInteger[1, {40, 40}];\n\nMyFunction[board] // CreateFrontEndObject\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output will look like this"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(16052).c+"",width:"859",height:"451"})}),"\n",(0,a.jsxs)(n.p,{children:["Now this is separate object, ",(0,a.jsx)(n.strong,{children:"you can copy and paste it as a symbol"}),"!"]}),"\n",(0,a.jsxs)(n.p,{children:["By updating ",(0,a.jsx)(n.code,{children:"board"})," symbol we cause ",(0,a.jsx)(n.code,{children:".update"})," method to be called"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Do[\n  board = CellularAutomaton[gameOfLife, board, {{0, 1}}] // Last;\n  Pause[0.1];\n, {i,1,100}]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then you will see a nice animation and each instance you copied will be updated as well"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(53592).c+"",width:"600",height:"294"})}),"\n",(0,a.jsx)(n.h4,{id:"dynamic-symbols",children:"Dynamic symbols"}),"\n",(0,a.jsxs)(n.p,{children:["Any defined Wolfram Language symbol with ",(0,a.jsx)(n.code,{children:"OwnValue"})," like"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"radius = 1;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["being wrapped into ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," automatically creates ",(0,a.jsx)(n.code,{children:"core.radius"})," ",(0,a.jsx)(n.strong,{children:"virtual symbol"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Graphics[Disk[{0.,0.}, Offload[radius]]]\n"})}),"\n",(0,a.jsx)(n.div,{}),"\n",(0,a.jsxs)(n.p,{children:["Wolfram Kernel ",(0,a.jsx)(n.strong,{children:"tracks any changes of own-values"}),".\n::"]}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Graphics/Disk",children:"Disk"})," is also a ",(0,a.jsx)(n.strong,{children:"virtual symbol"}),", then two instances created for ",(0,a.jsx)(n.code,{children:"Disk"})," and ",(0,a.jsx)(n.code,{children:"radius"})," will be coupled together, i.e."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[InputRange[0,1,0.1], Function[r, radius = r]]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["will cause ",(0,a.jsx)(n.code,{children:".update"})," method to be called on ",(0,a.jsx)(n.code,{children:"Disk"})," at any changes of ",(0,a.jsx)(n.code,{children:"radius"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(64472).c+"",width:"560",height:"394"})}),"\n",(0,a.jsx)(n.h3,{id:"injection-into-the-containers-instanceenv",children:"Injection into the container's instance/env"}),"\n",(0,a.jsxs)(n.p,{children:["Can be very handy if one want to append new objects to a 2D or 3D scene without reevaluating anything. This is anyway a somewhat ",(0,a.jsx)(n.code,{children:"env.scene"})," object, that it principle can be populated with new graphics in realtime."]}),"\n",(0,a.jsxs)(n.p,{children:["For that one need to attach to some particular instance and evaluate inside it the desired expression with new data. This can be done using ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"})," and ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"})]}),"\n",(0,a.jsx)(n.h4,{id:"-example-with-lines",children:"\ud83c\udfa1 Example with lines"}),"\n",(0,a.jsx)(n.p,{children:"Let us define some typical plot and add new object on it"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"ref = FrontInstanceReference[];\nPlot[x, {x,0,1}, Epilog->{ref}]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will generate ",(0,a.jsx)(n.code,{children:"Graphics"})," object and place an invisible reference on it, which will store the instance ",(0,a.jsx)(n.code,{children:"uid"})," of this frontend object."]}),"\n",(0,a.jsx)(n.p,{children:"Now we can apply a selector query and place a new expression (or lets say - evaluate in-place) inside the given container"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"FrontSubmit[Line[{{0.2,0.6},{0.1,0.5}}], ref]\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Consider to read ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"})," and ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},64472:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Disk-ezgif.com-video-to-gif-converter-63f2fdb2a3b252a8cc4e0dbde8626d15.gif"},53592:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/GOL-ezgif.com-optimize-d54877409dae30e81d0b22ccde1a57bf.gif"},16052:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Screenshot 2024-03-29 at 18.27.39-bab6e848891fb89f3a726f480881fd1a.png"},86856:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Screen Recording 2023-04-09 at 18.43.08-a597efb1076d5ee589dcdeba05b42e29.gif"},56768:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Simple call 2dn.excalidraw-c5025387f981c35acf492720c249103a.svg"},80964:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Simple call.excalidraw-fb15dcf006eec2792c01f712dae68003.svg"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>i});var a=t(11504);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);