"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7198],{93104:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(17624),r=s(4552);const a={sidebar_position:1},i=void 0,o={id:"frontend/Development/Plugins/Examples/Javascript library functions",title:"Javascript library functions",description:"A ready to-go example is in this repository, Clone it to /wljs-notebook/wljs_packages",source:"@site/docs/frontend/Development/Plugins/Examples/Javascript library functions.md",sourceDirName:"frontend/Development/Plugins/Examples",slug:"/frontend/Development/Plugins/Examples/Javascript library functions",permalink:"/frontend/Development/Plugins/Examples/Javascript library functions",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1740050041e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/frontend/Development/Plugins/Structure"},next:{title:"Action Button in UI and Cell Evaluation",permalink:"/frontend/Development/Plugins/Examples/Action Button in UI and Cell Evaluation"}},l={},c=[{value:"Preparations",id:"preparations",level:2},{value:"Kernel package",id:"kernel-package",level:2},{value:"Javascript Library",id:"javascript-library",level:2},{value:"Polishing",id:"polishing",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["A ready to-go example is in ",(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plugin-example-1",children:"this repository"}),", Clone it to ",(0,t.jsx)(n.code,{children:"<AppData>/wljs-notebook/wljs_packages"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wljs-plugin-example-1\n"})}),(0,t.jsx)(n.p,{children:"and restart WLJS Notebook"})]}),"\n",(0,t.jsxs)(n.p,{children:["Here is the simples example on what you can do with extensions. Why not to add ",(0,t.jsx)(n.a,{href:"https://apexcharts.com/",children:"ApexCharts"}),"? They looks beautiful and already animated. What we need"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kernel package, which implements ",(0,t.jsx)(n.code,{children:"ApexCharts[]"})," symbols"]}),"\n",(0,t.jsxs)(n.li,{children:["Javascript bundle, which should include ",(0,t.jsx)(n.em,{children:"ApexCharts"})," and bridge it with Wolfram Kernel using ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"WLJS Functions"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Summary"})," what will be done"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["package for ",(0,t.jsx)(n.em,{children:"evaluation kernel"}),", which adds a new symbol ",(0,t.jsx)(n.code,{children:"ApexCharts"})]}),"\n",(0,t.jsxs)(n.li,{children:["Javascript module, which renders the content of ",(0,t.jsx)(n.code,{children:"ApexCharts"})," expression"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plugin-template",children:"wljs-plugin-template"})," template and create a new repository. Then clone new repository to ",(0,t.jsx)(n.code,{children:"<AppData>/wljs-notebook/wljs_packages"})," folder. For example"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wljs-plugin-example-1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then edit the content of ",(0,t.jsx)(n.code,{children:"package.json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n    "name": "wljs-plugin-example-1",\n    "version": "0.0.1",\n    "scripts": {\n        "build": "node --max-old-space-size=8192 ./node_modules/.bin/rollup --config rollup.config.mjs"\n    },\n    "description": "An example plugin for WLJS Notebook. Library functions",\n    "wljs-meta": {\n        "kernel": [\n            "src/Kernel.wl"\n        ],\n        "js": "dist/kernel.js",\n        "minjs": "dist/kernel.min.js",\n        "priority": 5000,\n        "category": "Notebook Extensions"\n    },\n    "repository": {\n        "type": "git",\n        "url": "https://github.com/JerryI/wljs-plugin-example-1"\n    },\n    "dependencies": {\n        "@rollup/plugin-commonjs": "^25.0.4",\n        "@rollup/plugin-json": "^6.0.0",\n        "@rollup/plugin-node-resolve": "^15.2.1",\n        "@rollup/plugin-terser": "^0.4.4",\n        "rollup": "^3.21.6"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["By the default a template implies, that we will use ",(0,t.jsx)(n.em,{children:"rollup.js"})," for bundling. Run in the root directory of this package"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And then install ",(0,t.jsx)(n.code,{children:"apexcharts"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i apexcharts\n"})}),"\n",(0,t.jsx)(n.h2,{id:"kernel-package",children:"Kernel package"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new file in ",(0,t.jsx)(n.code,{children:"src/Kernel.wl"}),", which is going to be our package for evaluation kernel. Looking at ApexCharts API, it is easy to imagine the way how it can be used"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'ApexCharts[<|\n    "series" -> {44, 55, 67, 83},\n    "labels" -> {"Apples", "Oranges", "Bananas", "Berries"},\n    "chart" -> <|\n        "height" -> 350, \n        "type" -> "radialBar"\n    |>\n|>]\n'})}),"\n",(0,t.jsx)(n.p,{children:"or any other way, one can pre-transform the data and use intermediate symbols. Following the simplest path, we write to our Kernel file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="src/Kernel.wl"',children:'BeginPackage["CoffeeLiqueur`Extensions`ApexCharts`"]\n\n(* Public context *)\n\nApexCharts::usage = "ApexCharts[a_Association] constructor"\n\nBegin["`Private`"]\n\n\nEnd[]\nEndPackage[]\n'})}),"\n",(0,t.jsx)(n.p,{children:"We can put a few checks to ensure that input is an association"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'nonAssocHeadQ[_] = True\nnonAssocHeadQ[_Association] = False\n\nApexCharts::notassoc = "Input is not an association"\nApexCharts[_?nonAssocHeadQ ] := (Message[ApexCharts::notassoc]; $Failed)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now we can think about ",(0,t.jsx)(n.code,{children:"ApexCharts"})," as if it was a new entity, and the interpretation of this entity will be our graphs. To draw actual graphs instead of a symbolic representation we need to define an output form. For that ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/ViewBox",children:"ViewBox"})," comes in hand, which is provided in ",(0,t.jsx)(n.code,{children:"CoffeeLiqueur`Extensions`Boxes` "})," context"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'BeginPackage["CoffeeLiqueur`Extensions`ApexCharts`", {\n    "CoffeeLiqueur`Extensions`Boxes`"\n}]\n\n(* Public context *)\n\n...\n\n(* Output forms *)\n\nApexCharts /: MakeBoxes[a: ApexCharts[_Association], StandardForm ] := With[{},\n    ViewBox[a, a]\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["First ",(0,t.jsx)(n.code,{children:"a"})," will be an underlying expression (behind the graph), while second ",(0,t.jsx)(n.code,{children:"a"})," is going to be rendered instead of it. However, if you try to evaluate this with defined output form, you get a similar error"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(31516).c+"",width:"1586",height:"556"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/ViewBox",children:"ViewBox"})," tries to execute the expression provided as the second argument in the browser, but ",(0,t.jsx)(n.code,{children:"ApexCharts"})," does not exist there."]}),"\n",(0,t.jsx)(n.h2,{id:"javascript-library",children:"Javascript Library"}),"\n",(0,t.jsxs)(n.p,{children:["Now we need to implement ",(0,t.jsx)(n.code,{children:"ApexCharts"})," on the frontend. The idea is simple: take the provided data and using Apex API render a graph on the given DOM element"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/kernel.js"',children:"let ApexCharts;\n\ncore.ApexCharts = async (args, env) => {\n    if (!ApexCharts) ApexCharts = (await import('apexcharts')).default; //lazy loading\n\n    const options = await interpretate(args[0], env);\n    const chart = new ApexCharts(env.element, options);\n    chart.render();\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Our association will be in ",(0,t.jsx)(n.code,{children:"options"})," object after the interpretation."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Implement dynamic imports (lazy) if possible"})}),"\n",(0,t.jsx)(n.p,{children:"Now we need to bundle this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the restart, it should work with our extension like a charm"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(89768).c+"",width:"800",height:"706"})}),"\n",(0,t.jsxs)(n.p,{children:["However, after several evaluation dead instances of ",(0,t.jsx)(n.code,{children:"ApexCharts"})," will pile up as a garbage in Javascript memory. It is recommended to properly remove them. For that we need to identify each instance of ",(0,t.jsx)(n.code,{children:"ApexCharts"})," and assign destructor function"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/kernel.js"',children:"let ApexCharts;\n\ncore.ApexCharts = async (args, env) => {\n    if (!ApexCharts) ApexCharts = (await import('apexcharts')).default; //lazy loading\n\n    const options = await interpretate(args[0], env);\n    const chart = new ApexCharts(env.element, options);\n    chart.render();\n\n    env.local.chart = chart;\n}\n\ncore.ApexCharts.destroy = (args, env) => {\n    env.local.chart.destroy();\n} \n\ncore.ApexCharts.virtual = true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we need to bundle this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the restart it should work with our extension like a charm"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(89768).c+"",width:"800",height:"706"})}),"\n",(0,t.jsx)(n.h2,{id:"polishing",children:"Polishing"}),"\n",(0,t.jsxs)(n.p,{children:["We might do a few more tweaks. If our ",(0,t.jsx)(n.code,{children:"ApexCharts"})," expression becomes too big, it might slow down the editor. For that reason we use ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Frontend%20interpretation/Frontend%20Objects",children:"Frontend Objects"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'BeginPackage["CoffeeLiqueur`Extensions`ApexCharts`", {\n    "CoffeeLiqueur`Extensions`Boxes`",\n    "CoffeeLiqueur`Extensions`FrontendObject`"\n}]\n\n(* Public context *)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"ApexCharts /: MakeBoxes[a: ApexCharts[_Association], form: StandardForm ] := With[{o = CreateFrontEndObject[a]},\n    MakeBoxes[o, form]\n] /; ByteCount[a] > 1024*4 \n"})}),"\n",(0,t.jsx)(n.p,{children:"Frontend objects has a special predefined StandardForm (and WLXForm), where it uses a reference to a Wolfram Expression stored separately."}),"\n",(0,t.jsxs)(n.p,{children:["Another improvement can be ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Formatting/WLXForm",children:"WLXForm"}),", if we decide to use those charts on ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"Slides"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"ApexCharts /: MakeBoxes[a: ApexCharts[_Association], form: WLXForm ] := With[{o = CreateFrontEndObject[a]},\n    MakeBoxes[o, form]\n]\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Full source code can be found in ",(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plugin-example-1",children:"this repository"})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},31516:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Screenshot 2025-02-10 at 23.27.26-293a5d3db7b230e3dcb103aad4a46bae.png"},89768:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/radial-ezgif.com-optimize-6830e9d5b3b40033b9e4a80fb939827d.gif"},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>i});var t=s(11504);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);