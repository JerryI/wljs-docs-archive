"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7878],{94976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=t(17624),o=t(4552);const c={env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",context:"CoffeeLiqueur`Extensions`InputsOutputs`",package:"wljs-inputs",source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl"},i=void 0,s={id:"frontend/Reference/GUI/InputButton",title:"InputButton",description:"creates a button component and returns EventObject",source:"@site/docs/frontend/Reference/GUI/InputButton.md",sourceDirName:"frontend/Reference/GUI",slug:"/frontend/Reference/GUI/InputButton",permalink:"/frontend/Reference/GUI/InputButton",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",context:"CoffeeLiqueur`Extensions`InputsOutputs`",package:"wljs-inputs",source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl"},sidebar:"tutorialSidebar",previous:{title:"InputAutocomplete",permalink:"/frontend/Reference/GUI/InputAutocomplete"},next:{title:"InputCheckbox",permalink:"/frontend/Reference/GUI/InputCheckbox"}},l={},a=[{value:"Event generation",id:"event-generation",level:2},{value:"Options",id:"options",level:2},{value:"<code>&quot;Class&quot;</code>",id:"class",level:3},{value:"<code>&quot;Style&quot;</code>",id:"style",level:3},{value:"<code>&quot;Topic&quot;</code>",id:"topic",level:3},{value:"Application",id:"application",level:2},{value:"Chaining events",id:"chaining-events",level:2},{value:"Supported output forms",id:"supported-output-forms",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"InputButton[label_String, opts___] _EventObject\n"})}),"\n",(0,r.jsxs)(n.p,{children:["creates a button component and returns ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventObject%60",children:(0,r.jsx)(n.code,{children:"EventObject"})})]}),"\n",(0,r.jsx)(n.h2,{id:"event-generation",children:"Event generation"}),"\n",(0,r.jsxs)(n.p,{children:["On-click emits ",(0,r.jsx)(n.code,{children:"True"})," to a handler function assigned"]}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"class",children:(0,r.jsx)(n.code,{children:'"Class"'})}),"\n",(0,r.jsx)(n.p,{children:"A text string of CSS classes used for customizing a button"}),"\n",(0,r.jsx)(n.h3,{id:"style",children:(0,r.jsx)(n.code,{children:'"Style"'})}),"\n",(0,r.jsx)(n.p,{children:"A text string with CSS styles applied to an element"}),"\n",(0,r.jsx)(n.h3,{id:"topic",children:(0,r.jsx)(n.code,{children:'"Topic"'})}),"\n",(0,r.jsxs)(n.p,{children:["The default topic/pattern is ",(0,r.jsx)(n.code,{children:'"Default"'}),". Specifies an event-pattern used on emitting (see more on ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventFire%60",children:(0,r.jsx)(n.code,{children:"EventFire"})})," patterns topics)"]}),"\n",(0,r.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,r.jsx)(n.p,{children:"A basic GUI element"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'button = InputButton["Click me!"];\nEventHandler[button, Print]\n'})}),"\n",(0,r.jsx)(n.p,{children:"or click to make sound"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[InputButton[], Beep]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"chaining-events",children:"Chaining events"}),"\n",(0,r.jsx)(n.p,{children:"One can reuse another event when creating a button"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"InputButton[event_EventObject, label_String, opts___]\n"})}),"\n",(0,r.jsx)(n.p,{children:"for example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'ev = EventObject[];\n\nInputButton[ev, "Topic"->"Button"]\nInputRange[ev, 0,1,0.1, "Topic"->"Slider"]\n\nEventHandler[ev, {\n\t"Button" -> Beep,\n\t"Slider" -> Print\n}];\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supported-output-forms",children:"Supported output forms"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>i});var r=t(11504);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);