"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8656],{15312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(17624),s=t(4552);const o={},r=void 0,a={id:"frontend/Exporting/Dynamic HTML",title:"Dynamic HTML",description:"A user does not need any app installed to drag some sliders on your notebook",source:"@site/docs/frontend/Exporting/Dynamic HTML.md",sourceDirName:"frontend/Exporting",slug:"/frontend/Exporting/Dynamic HTML",permalink:"/frontend/Exporting/Dynamic HTML",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1735307244e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy to Github Pages",permalink:"/frontend/Exporting/Deploy to Github Pages"},next:{title:"Embed project files",permalink:"/frontend/Exporting/Embed project files"}},l={},c=[{value:"Use cases",id:"use-cases",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Sniffer",id:"sniffer",level:3},{value:"Analyser",id:"analyser",level:4},{value:"Sampler",id:"sampler",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Prepare notebook",id:"prepare-notebook",level:3},{value:"Sniffing phase",id:"sniffing-phase",level:3},{value:"Sampling phase",id:"sampling-phase",level:3},{value:"Result",id:"result",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components},{CodeMirror:o,Details:r}=n;return o||p("CodeMirror",!0),r||p("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"A user does not need any app installed to drag some sliders on your notebook"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This feature is quite experimental. Please, read the manual carefully"})}),"\n",(0,i.jsxs)(n.p,{children:["This is a dynamic version of exporter ",(0,i.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"}),", which is aimed to recreate full interactivity of the normal notebooks"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(64632).c+"",width:"1486",height:"76"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(36284).c+"",width:"1558",height:"524"})}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All use cases of ",(0,i.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"})]}),"\n",(0,i.jsx)(n.li,{children:"Demonstration project"}),"\n",(0,i.jsx)(n.li,{children:"Live animation of some physical process"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsxs)(n.p,{children:["It order to make the system more general and be able to capture the effects of ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"}),", any combinations of ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputButton",children:"InputButton"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," and many more it is abstracted by the design from the controlling elements and purely analyses the events and mutations of symbols."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["It requires the architecture of your dynamic system, which follows the principle of ",(0,i.jsx)(n.em,{children:"call and response"}),", i.e. it must generate (by a user or automatically) an event from the input element or any other code on the frontend and then generate the corresponding response as a mutations of symbols used from the Wolfram Kernel."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["TLDR; We record the calculated data for all possible combinations of input elements used and store it in a large table. See how to do this in ",(0,i.jsx)(n.a,{href:"#How%20to%20use",children:"How to use"})," section"]})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(n.h3,{id:"sniffer",children:"Sniffer"}),(0,i.jsxs)(n.p,{children:["All magic happens on the frontend in Javascript. The first stage it is to record all events fired by ",(0,i.jsx)(n.code,{children:"server.kernel.emitt"})," (see here ",(0,i.jsx)(n.a,{href:"https://jerryi.github.io/wlx-docs/docs/Reference/Misc/WLJSTransport#server",children:"API"})," reference), which is a part of ",(0,i.jsx)(n.code,{children:"JerryI`Misc`WLJS`Transport"})," core package, that provides an easy interface between kernel ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Events",children:"events system"})," and Javascript together with symbols mutations. ",(0,i.jsx)(n.code,{children:".emitt()"})," method ",(0,i.jsx)(n.strong,{children:"is used in all built-in input elements"})," such as ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputText",children:"InputText"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputJoystick",children:"InputJoystick"})," (see an example on how to built your own in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Javascript/Communication",children:"Communication"})," guide) and even ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/AnimationFrameListener",children:"AnimationFrameListener"}),". Symbols mutations are recorded only for ones wrapped in ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"}),", which is a usual case scenario for any kind of ",(0,i.jsx)(n.a,{href:"/frontend/Dynamics",children:"Dynamics"})," in WLJS Notebook"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(15096).c+"",width:"1369",height:"588"})}),(0,i.jsx)(n.h4,{id:"analyser",children:"Analyser"}),(0,i.jsx)(n.p,{children:"Since Wolfram Engine is single threaded as well as Javascript, it is easy to spot a correlation between events and symbols mutations. For example let us have a look at the recorded time-series"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"A 1 B 2 C 1 2\n"})}),(0,i.jsxs)(n.p,{children:["here ",(0,i.jsx)(n.code,{children:"A"}),", ",(0,i.jsx)(n.code,{children:"B"}),", ",(0,i.jsx)(n.code,{children:"C"})," are some arbitrary event and ",(0,i.jsx)(n.code,{children:"1"}),", ",(0,i.jsx)(n.code,{children:"2"})," are symbols mutations. By analyzing this series it is easy to guess that the connections are following"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"A"})," mutates ",(0,i.jsx)(n.code,{children:"1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"B"})," mutates ",(0,i.jsx)(n.code,{children:"2"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"C"})," mutates ",(0,i.jsx)(n.code,{children:"1"})," and ",(0,i.jsx)(n.code,{children:"2"})]}),"\n"]}),(0,i.jsx)(n.p,{children:'It also accounts for a possible delay and "noise" (rare events from other subsystems you don\'t want to include to your exported notebook) in computing, i.e.'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"A 1 B B B 2 2 2 V C 1 2 C C 1 2 1 2 A B 1 2\n"})}),(0,i.jsx)(n.p,{children:"will also be processed correctly assuming you have enough sampled data. By also analyzing the payload of each call, system can make a guess"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"A 1 A 1 A 1 A 1 A 1 ... 20-60 times per second\n"})}),(0,i.jsxs)(n.p,{children:["if the payload of an event ",(0,i.jsx)(n.code,{children:"A"})," is the same, then ",(0,i.jsx)(n.code,{children:"1"})," is most likely a frame of some animation constructed using ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/AnimationFrameListener",children:"AnimationFrameListener"}),"."]}),(0,i.jsx)(n.p,{children:"If we know from this data all connections and the range of values for each event, it will be enough to reproduce this behavior offline using look-up tables and state machines."}),(0,i.jsx)(n.h3,{id:"sampler",children:"Sampler"}),(0,i.jsxs)(n.p,{children:["After all connections are known, the idea is to sample the data of symbol mutations using all combinations of events recursively. This is not the best solution, since having 1 checkbox and 2 sliders (with 10 positions for instance) already gives ",(0,i.jsx)(n.code,{children:"200"})," sampling points. If an animation process is not detected, an automatic sampling will be applied starting from the current state of a system"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*.emitt('A', 1)               //manually fire\n                              //wait for 1\n* mutation('1', {new data 1}) //collect\n*.emitt('A', 2)               //manually fire\n                              //wait for 1\n* mutation('1', {new data 2}) //collect\n...\n*.emitt('B', 1)               //manually fire\n                              //wait for 2\n* mutation('2', {new data 1}) //collect\n...\n*.emitt('C', 1)               //manually fire\n                              //wait for 1 & 2\n* mutation('1', {new data 3}) //collect \n* mutation('2', {new data 3}) //collect \n...\n"})}),(0,i.jsx)(n.p,{children:"After all data has been harvested, it is translated into a big hash map with each entity corresponding to single state of a system - sort of a loop-up table. The state is determined by the sum of hashes (fingerprints) of all fired events including the their payload"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(19008).c+"",width:"1597",height:"668"})}),(0,i.jsx)(n.p,{children:"In this implementation it is impossible to mimic Markov chains or other systems with internal state and a history (hysteresis loops)."}),(0,i.jsxs)(n.p,{children:["Then a sampler compresses all data using ",(0,i.jsx)(n.code,{children:"zlib"})," and packs it together with an exported notebook to a single HTML file including the supporting code for ."]})]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(n.p,{children:"Please follow the steps listed below"}),"\n",(0,i.jsx)(n.h3,{id:"prepare-notebook",children:"Prepare notebook"}),"\n",(0,i.jsxs)(n.p,{children:["Connect to Wolfram Kernel, do normal evaluation of your dynamics. Try to minimize the number of input elements and their possible states. For example, do not put 3 slider (",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"}),") with 100 steps for each. If you use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"}),", specify explicitly ",(0,i.jsx)(n.code,{children:"step"})," for your parameters. The same counts for number and size of used dynamic symbols."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you record an animation constructed using ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/AnimationFrameListener",children:"AnimationFrameListener"}),", start it ",(0,i.jsx)(n.strong,{children:"right before going to the next step"}),". Note, that the effects of ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Async#%60SetInterval%60",children:(0,i.jsx)(n.code,{children:"SetInterval"})})," as well as ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"})," will not be recorded at all."]})}),"\n",(0,i.jsxs)(n.p,{children:["For example, we can try ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"})," for the simplicity"]}),"\n",(0,i.jsx)(o,{children:"ManipulatePlot[(*TB[*)Sum[(*|*)(*FB[*)((Sin[2[Pi](2j - 1) x])(*,*)/(*,*)(2j - 1))(*]FB*)(*|*), {(*|*)j(*|*),(*|*)1(*|*),(*|*)n(*|*)}](*|*)(*1:eJxTTMoPSmNiYGAoZgMSwaW5TvkVmYwgPguQCCkqTQUAeAcHBQ==*)(*]TB*), {x, -1,1}, {n, 1,10,1}]"}),"\n",(0,i.jsx)(n.h3,{id:"sniffing-phase",children:"Sniffing phase"}),"\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.code,{children:"Share"})," and pick ",(0,i.jsx)(n.code,{children:"Dynamic Notebook"}),", it will automatically initiate recording. A widget should appear in the top-right corner"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you record an animation. Just evaluate the corresponding cell and wait number of frames you want to be recorded, then click ",(0,i.jsx)(n.code,{children:"Continue"})," on the widget"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(42747).c+"",width:"1350",height:"1108"})}),"\n",(0,i.jsxs)(n.p,{children:["Now drag a slider in all ranges. It is important to cover all positions of it, since while sampling phase it will only use values it had during ",(0,i.jsx)(n.a,{href:"#Sniffing%20phase",children:"Sniffing phase"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you have multiple input elements (2, 3 sliders). Drag each individually in full range ",(0,i.jsx)(n.strong,{children:"one time"}),". Cross combinations are not necessary, since they will be sampled automatically recursively on the next stage by the system."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(63700).c+"",width:"1350",height:"1112"})}),"\n",(0,i.jsxs)(n.p,{children:["Now you see found connections between symbols and events. Their names do not manner, since it is autogenerated by ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"}),". Make sure they become ",(0,i.jsx)(n.strong,{children:"green"}),", which means a good confidence in the corresponding bond."]}),"\n",(0,i.jsx)(n.h3,{id:"sampling-phase",children:"Sampling phase"}),"\n",(0,i.jsx)(n.p,{children:"Now it samples all combinations automatically, it might take some time depending on how complex your calculations"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(55894).c+"",width:"800",height:"659"})}),"\n",(0,i.jsxs)(n.p,{children:["This is the last stage. On the next step it will export your notebook with this data to your drive. Click ",(0,i.jsx)(n.code,{children:"Continue"})]}),"\n",(0,i.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,i.jsxs)(n.p,{children:["Depending on how many sampling points you have, the average file size is about ",(0,i.jsx)(n.code,{children:"7-20"})," Mb and ",(0,i.jsx)(n.code,{children:"3-15"})," Mb of you set ",(0,i.jsx)(n.code,{children:"CDN"})," in the settings (see ",(0,i.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"}),"). An example above costs only ",(0,i.jsx)(n.code,{children:"165"})," kB uncompressed and ",(0,i.jsx)(n.code,{children:"50"})," kB compressed data."]}),"\n",(0,i.jsx)(n.p,{children:"The result is fully interactive widget working offline without internet connection and any Wolfram Kernel \u2728"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(36160).c+"",width:"800",height:"658"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["See some interactive examples from ",(0,i.jsx)(n.strong,{children:"our blog page"})," and demonstration project"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/wljs-demo/mid-thz-tds/",children:"TDS-THz in 10 lines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jerryi.github.io/wljs-demo/fitting_tds_ppt.html",children:"Why fitting the raw data is so important"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15096:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Pasted image 20241117184956-6c398df4e6c7e479c2f66dc2384e557a.png"},19008:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Pasted image 20241117185053-08216f20fde204530be83351e7995811.png"},36284:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2024-08-03 at 13.58.42-5bc97c248c80dade8f967f87c592ff9e.png"},42747:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2024-08-03 at 15.47.04-0ec35c2da91192af71d26affd05b6dfb.png"},63700:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2024-08-03 at 15.49.58-dbc16d2b54b24a949a00ee352a8a6e8d.png"},64632:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2024-03-13 at 19.37.13-26e8c1d2357122fff357e9fe4945b6aa.png"},55894:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/sampled-ezgif.com-optimize-ca155e2335ab8c630a022d0acc07bfe5.gif"},36160:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/saved-ezgif.com-cut-19e5502bdd0c5b0cbee21453f8ade191.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);