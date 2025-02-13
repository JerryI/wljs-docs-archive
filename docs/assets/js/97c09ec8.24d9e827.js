"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8584],{42171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var l=t(17624),o=t(4552);const s={sidebar_position:2},i=void 0,a={id:"frontend/Development/Plugins/Examples/Action Button in UI and Cell Evaluation",title:"Action Button in UI and Cell Evaluation",description:"A ready-to-go example is available in this repository. Clone it to /wljs-notebook/wljs_packages using:",source:"@site/docs/frontend/Development/Plugins/Examples/Action Button in UI and Cell Evaluation.md",sourceDirName:"frontend/Development/Plugins/Examples",slug:"/frontend/Development/Plugins/Examples/Action Button in UI and Cell Evaluation",permalink:"/frontend/Development/Plugins/Examples/Action Button in UI and Cell Evaluation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1739462254e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Javascript library functions",permalink:"/frontend/Development/Plugins/Examples/Javascript library functions"},next:{title:"New cell type and Kernel evaluation",permalink:"/frontend/Development/Plugins/Examples/New cell type and Kernel evaluation"}},r={},c=[{value:"Summary",id:"summary",level:3},{value:"Preparations",id:"preparations",level:2},{value:"Main Kernel Package",id:"main-kernel-package",level:2},{value:"UI Element",id:"ui-element",level:3},{value:"Creating the Button",id:"creating-the-button",level:3},{value:"Processing Cells",id:"processing-cells",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:["A ready-to-go example is available in ",(0,l.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plugin-example-2",children:"this repository"}),". Clone it to ",(0,l.jsx)(n.code,{children:"<AppData>/wljs-notebook/wljs_packages"})," using:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wljs-plugin-example-2\n"})}),(0,l.jsx)(n.p,{children:"Then restart WLJS Notebook."})]}),"\n",(0,l.jsxs)(n.p,{children:["In this short tutorial, we will discuss how to add a basic UI element to the WLJS Notebook interface and cover some fundamentals of cell evaluation. In general, we need to create a package for the ",(0,l.jsx)(n.em,{children:"main kernel"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,l.jsx)(n.p,{children:"This tutorial will cover:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Creating a package for the ",(0,l.jsx)(n.em,{children:"main kernel"})," that adds a new UI action button and a handler function to evaluate all cells in a notebook."]}),"\n",(0,l.jsx)(n.li,{children:"Writing a UI action button template using WLX."}),"\n",(0,l.jsx)(n.li,{children:"Adding a native top-menu button that duplicates the action of the UI button."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plugin-template",children:"wljs-plugin-template"})," to create a new repository, then clone it to the ",(0,l.jsx)(n.code,{children:"<AppData>/wljs-notebook/wljs_packages"})," folder. For example:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wljs-plugin-example-2\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Next, edit the contents of ",(0,l.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n    "name": "wljs-plugin-example-2",\n    "version": "0.0.1",\n    "description": "An example plugin for WLJS Notebook",\n    "wljs-meta": {\n        "frontend": ["src/Frontend.wl"],\n        "priority": 5000,\n        "category": "Notebook Extensions",\n        "menu": [\n            {\n                "label": "Example Button Evaluate",\n                "event": "example-eval-all",\n                "spawnWindow": false,\n                "type": "button"\n            }\n        ]\n    },\n    "repository": {\n        "type": "git",\n        "url": "https://github.com/JerryI/wljs-plugin-example-2"\n    },\n    "dependencies": {\n        "@rollup/plugin-commonjs": "^25.0.4",\n        "@rollup/plugin-json": "^6.0.0",\n        "@rollup/plugin-node-resolve": "^15.2.1",\n        "@rollup/plugin-terser": "^0.4.4",\n        "rollup": "^3.21.6"\n    }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["This defines an action button placed in the top-bar menu. When clicked, it triggers the ",(0,l.jsx)(n.code,{children:"example-eval-all"})," event in the global event pool, which we will handle later."]}),"\n",(0,l.jsx)(n.h2,{id:"main-kernel-package",children:"Main Kernel Package"}),"\n",(0,l.jsx)(n.h3,{id:"ui-element",children:"UI Element"}),"\n",(0,l.jsxs)(n.p,{children:["To inject new UI elements, we use the ",(0,l.jsx)(n.code,{children:"CoffeeLiqueur"}),"Notebook",(0,l.jsx)(n.code,{children:"AppExtensions"})," interface:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",metastring:'title="src/Frontend.wl"',children:'BeginPackage["CoffeeLiqueur`Extensions`EvalAllButton`", {\n    "JerryI`Misc`Events`",\n    "JerryI`Misc`Events`Promise`",\n    "JerryI`WLX`Importer`",\n    "JerryI`WLX`WebUI`"\n}]\n\nNeeds["CoffeeLiqueur`Notebook`AppExtensions`" -> "AppExtensions`"];\n\nBegin["`Private`"]\n\nrootFolder = $InputFileName // DirectoryName // ParentDirectory;\n\nbuttonTemplate = ImportComponent[FileNameJoin[{rootFolder, "templates", "Button.wlx"}]];\n\nAppExtensions`TemplateInjection["AppNotebookTopBar"] = buttonTemplate[##, "HandlerFunction" -> processRequest]&;\n\nEnd[]\nEndPackage[]\n'})}),"\n",(0,l.jsx)(n.p,{children:"The packages:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"JerryI`Misc`Events`\nJerryI`Misc`Events`Promise`\n"})}),"\n",(0,l.jsx)(n.p,{children:"are used for event handling. The new UI element is injected via:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'AppExtensions`TemplateInjection["AppNotebookTopBar"] = buttonTemplate[##, "HandlerFunction" -> processRequest]&;\n'})}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-button",children:"Creating the Button"}),"\n",(0,l.jsx)(n.p,{children:"A more convenient way to create UI elements is through WLX. We include the necessary contexts:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"JerryI`WLX`Importer`,\nJerryI`WLX`WebUI`\n"})}),"\n",(0,l.jsx)(n.p,{children:"Now, let's create our button:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:'title="templates/Button.wlx"',children:'Component[OptionsPattern[]] := With[{\n    messager = OptionValue["Messanger"], \n    globalControls = OptionValue["Controls"], \n    appEvents = OptionValue["AppEvent"], \n    modals = OptionValue["Modals"],\n    UId = CreateUUID[],\n    listener = CreateUUID[],\n    processRequest = OptionValue["HandlerFunction"]\n},\n\n    EventHandler[listener, {\n        "Button" -> Function[Null,\n            processRequest[globalControls, modals, messager, Global`$Client (*`*)]\n        ]\n    }];\n\n    EventHandler[EventClone[globalControls], {\n        "example-eval-all" -> Function[Null, processRequest[globalControls, modals, messager, Global`$Client (*`*)]]\n    }];\n\n    {\n        <button title="Evaluate all" id="{UId}" class="text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md w-6 h-6">\n            <svg class="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">\n                <path d="M2.78 2L2 2.41v12l.78.42 9-6V8l-9-6zM3 13.48V3.35l7.6 5.07L3 13.48z"/>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 14.683l8.78-5.853V8L6 2.147V3.35l7.6 5.07L6 13.48v1.203z"/>\n            </svg>\n        </button>,\n        <WebUIEventListener Type={"click"} Id={UId} Pattern={"Button"} Event={listener} /> \n    }\n]\n\nOptions[Component] = {"Controls"->"", "AppEvent"->"", "Modals"->"", "HandlerFunction" -> Print};\n\nComponent\n'})}),"\n",(0,l.jsx)(n.p,{children:"After restarting the app, you should see a new icon in the top bar and a new menu item."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(65960).c+"",width:"1582",height:"606"})}),"\n",(0,l.jsx)(n.h3,{id:"processing-cells",children:"Processing Cells"}),"\n",(0,l.jsxs)(n.p,{children:["To evaluate all cells when the user clicks the button, we modify ",(0,l.jsx)(n.code,{children:"Frontend.wl"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Needs["CoffeeLiqueur`Notebook`Cells`" -> "cell`"];\nNeeds["CoffeeLiqueur`Notebook`" -> "nb`"];\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Define ",(0,l.jsx)(n.code,{children:"processRequest"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'processRequest[globalControls_String, modals_String, messager_String, client_] := With[{\n    notebookOnline = findNotebook[globalControls]\n},\n    If[!MatchQ[notebookOnline, _nb`NotebookObj], \n        EventFire[messager, "Warning", "No active notebooks"];\n        Return[];\n    ];\n    \n    With[{\n        inputCells = Select[notebookOnline["Cells"], cell`InputCellQ]\n    },\n        runNext[inputCells, Function[cell, EventFire[globalControls, "NotebookCellEvaluate", cell]]]\n    ]\n]\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["The full source code is available in ",(0,l.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plugin-example-2",children:"this repository"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},65960:(e,n,t)=>{t.d(n,{c:()=>l});const l=t.p+"assets/images/Screenshot 2025-02-09 at 18.04.45-6a1da580fd9aaf6fc8f6432f488d5dc6.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var l=t(11504);const o={},s=l.createContext(o);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);