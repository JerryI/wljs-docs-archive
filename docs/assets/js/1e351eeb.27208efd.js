"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1920],{58828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(17624),s=t(4552);const o={sidebar_position:3},r="3. Dynamic decorations",a={id:"frontend/Advanced/Objects/Dynamic decorations",title:"3. Dynamic decorations",description:"In this part we will try to synchronize the state of our symbols or objects with corresponding decorations we created in the previous part.",source:"@site/docs/frontend/Advanced/Objects/Dynamic decorations.md",sourceDirName:"frontend/Advanced/Objects",slug:"/frontend/Advanced/Objects/Dynamic decorations",permalink:"/frontend/Advanced/Objects/Dynamic decorations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1733416933e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Static decorations",permalink:"/frontend/Advanced/Objects/Static decorations"},next:{title:"Overlay mode",permalink:"/frontend/Advanced/Overlay mode"}},c={},d=[{value:"Dynamic summary item",id:"dynamic-summary-item",level:2},{value:"Controllers",id:"controllers",level:2},{value:"Deferred mode \u2764\ufe0f",id:"deferred-mode-\ufe0f",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"3-dynamic-decorations",children:"3. Dynamic decorations"}),"\n",(0,i.jsx)(n.p,{children:"In this part we will try to synchronize the state of our symbols or objects with corresponding decorations we created in the previous part."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you are looking for a simpler way, please, see ",(0,i.jsx)(n.a,{href:"#Deferred%20mode%20%E2%9D%A4%EF%B8%8F",children:"Deferred mode \u2764\ufe0f"})]})}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-summary-item",children:"Dynamic summary item"}),"\n",(0,i.jsxs)(n.p,{children:["We have already explored the possibility of animated icons in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Objects/Static%20decorations#Animated%20decoration%20in%20Summary%20Item",children:"Animated decoration in Summary Item"}),", therefore there is no obstacles in doing the same in sync with state changes of our object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tstate = s["State"] // ToString,\n    instances = 0,\n    eventObject, construct, destruct\n}, With[{\n\ttextField = EditorView[state // Offload],\n\tcontroller = CreateUUID[],\n    win = CurrentWindow[]\n},\n\n    (* if notebook was closed *)\n    EventHandler[win, {"Closed" -> Function[Null,\n          Print["All removed"];\n          destruct;\n    ]}];\n\n    construct := With[{},\n      (* subscribe to object events and update decoration *)\n      eventObject = EventClone[s];\n      EventHandler[eventObject, {\n        "State" -> Function[new, state = new // ToString]\n      }];     \n    ];\n\n    destruct := With[{},\n      Echo["Removed"];\n\t  EventRemove[eventObject];    \n      instances = 0;\n    ];\n\n\tEventHandler[controller, {\n\t\t"Mounted" -> Function[Null,\n\n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[Null, \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        (* unsubscribe when there is no instances *)\n\t        If[instances === 0, destruct];\n          ]\n\t}];\n\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", textField}]}\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\tNone,\n\t\t\tsummary,\n            Null,\n\n\t\t\t"Event" -> controller\n\t\t]\n\t]\n] ]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The idea is the same, but instead of static value, we substituted to  ",(0,i.jsx)(n.code,{children:"BoxForm`SummaryItem"})," a dynamic element ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," which is updated by the a handler function subscribed to updates of our instance."]}),"\n",(0,i.jsx)(n.p,{children:"Let us test it"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"instance = StateMachine[]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"you can copy and paste instances with no issues, since it is tracked by a variable in the box decoration code"})}),"\n",(0,i.jsx)(n.p,{children:"and change the state"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"StateMachineChange[instance, RandomInteger[{1,10}]];\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(4860).c+"",width:"800",height:"142"})}),"\n",(0,i.jsx)(n.h2,{id:"controllers",children:"Controllers"}),"\n",(0,i.jsxs)(n.p,{children:["We can also mutate our object from the decoration by substituting ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"})," or something like this to a widget. Right..?"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tstate = s["State"] // ToString,\n    instances = 0,\n    eventObject, construct, destruct, slider\n}, With[{\n\ttextField = EditorView[state // Offload],\n\tcontroller = CreateUUID[],\n    win = CurrentWindow[]\n},\n\n    (* if notebook was closed *)\n    EventHandler[win, {"Closed" -> Function[Null,\n          Print["All removed"];\n          destruct;\n    ]}];\n\n    \n    slider = InputRange[0, 10, 1, s["State"]];\n    EventHandler[slider, Function[n, \n      StateMachineChange[s, n]\n    ]];\n\n    construct := With[{},\n      (* subscribe to object events and update decoration *)\n      eventObject = EventClone[s];\n      EventHandler[eventObject, {\n        "State" -> Function[new, state = new // ToString]\n      }];     \n    ];\n\n    destruct := With[{},\n      Echo["Removed"];\n\t  EventRemove[eventObject];    \n      instances =0;\n    ];\n\n\tEventHandler[controller, {\n\t\t"Mounted" -> Function[Null,\n          Print["Mounted"];\n          \n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[Null, \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        (* unsubscribe when there is no instances *)\n\t        If[instances === 0, destruct];\n          ]\n\t}];\n\n\tWith[{\n\t\tsummary = {\n          BoxForm`SummaryItem[{"State: ", textField}],\n          BoxForm`SummaryItem[{"", slider}]\n        }\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\tNone,\n\t\t\tsummary,\n            Null,\n\n\t\t\t"Event" -> controller\n\t\t]\n\t]\n] ]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We added only a few line for ",(0,i.jsx)(n.code,{children:"slider"}),". The rest is the same"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(20032).c+"",width:"800",height:"162"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"})," does not support multiple instances and might have a conflict with DOM ids if copied and pasted from the same generated output."]}),(0,i.jsxs)(n.p,{children:["To solve this issue, we your own slider, which is generated purely from Javascript on each run. See how in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Javascript/Communication",children:"Communication"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"deferred-mode-\ufe0f",children:"Deferred mode \u2764\ufe0f"}),"\n",(0,i.jsxs)(n.p,{children:["This is a new feature introduced recently for ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"}),", aimed to solve all hassle required for maintaining the instances of the same object. The idea is to create decorations upon rendering."]}),"\n",(0,i.jsxs)(n.p,{children:["Please see on how to implement it in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Syntax%20sugar/Decorating%20symbols#Deferred",children:"Decorating symbols"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4860:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/DynamicDeco video-1c7463904380300266e8676f13890225.gif"},20032:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screen Recording May 01-0136f9a0e3ec35834faa92e9f246d621.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);