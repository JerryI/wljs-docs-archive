"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[6552],{16324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>A,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(17624),i=t(4552);const s={internal:!1,source:"https://github.com/JerryI/wljs-editor/blob/dev/src/Boxes.wl",env:["Wolfram Kernel"],package:"wljs-editor"},o=void 0,a={id:"frontend/Reference/Formatting/Low-level/ViewBox",title:"ViewBox",description:"Used to replace wrapped Wolfram Expression with custom HTML/JS elements",source:"@site/docs/frontend/Reference/Formatting/Low-level/ViewBox.md",sourceDirName:"frontend/Reference/Formatting/Low-level",slug:"/frontend/Reference/Formatting/Low-level/ViewBox",permalink:"/frontend/Reference/Formatting/Low-level/ViewBox",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:174056094e4,frontMatter:{internal:!1,source:"https://github.com/JerryI/wljs-editor/blob/dev/src/Boxes.wl",env:["Wolfram Kernel"],package:"wljs-editor"},sidebar:"tutorialSidebar",previous:{title:"InterpretationBox",permalink:"/frontend/Reference/Formatting/Low-level/InterpretationBox"},next:{title:"Magnify",permalink:"/frontend/Reference/Formatting/Magnify"}},c={},l=[{value:"Options",id:"options",level:2},{value:"<code>&quot;Event&quot;</code>",id:"event",level:3},{value:"Examples",id:"examples",level:2},{value:"Simple straight example",id:"simple-straight-example",level:3},{value:"Event listeners",id:"event-listeners",level:4},{value:"Replacing expression with custom JS",id:"replacing-expression-with-custom-js",level:3},{value:"Mutability",id:"mutability",level:2},{value:"From Wolfram Kernel",id:"from-wolfram-kernel",level:3},{value:"<code>ViewBox`InnerExpression</code>",id:"viewboxinnerexpression",level:4},{value:"<code>ViewBox`OuterExpression</code>",id:"viewboxouterexpression",level:4},{value:"From Javascript function",id:"from-javascript-function",level:3},{value:"Example",id:"example",level:5},{value:"Supported output forms",id:"supported-output-forms",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Used ",(0,r.jsx)(n.strong,{children:"to replace wrapped"})," Wolfram Expression with custom HTML/JS elements"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"(*VB[*)(expr)(*,*)(*view*)(*]VB*)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Most decorations generated by ",(0,r.jsx)(n.code,{children:"TemplateBox"}),", graphics functions ",(0,r.jsx)(n.code,{children:"Graphics"}),", ",(0,r.jsx)(n.code,{children:"Graphics3D"}),", ",(0,r.jsx)(n.code,{children:"InputButton"})," and etc are ViewBox-es."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the expression is ",(0,r.jsx)(n.strong,{children:"not editable by a user"})," and is fully replaced in the editor by the provided view (behaves like a 1 symbol)"]}),"\n",(0,r.jsxs)(n.li,{children:["the inner ",(0,r.jsx)(n.code,{children:"expr"})," ",(0,r.jsx)(n.strong,{children:"is revealed"})," after first evaluation"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RGBColor"}),", ",(0,r.jsx)(n.code,{children:"DateObject"})," and ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/InterpretationBox",children:"InterpretationBox"})," (together with ",(0,r.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"}),") and many more use this structure to display a human-readable form of the content behind"]}),"\n",(0,r.jsx)(n.p,{children:"There is a helper function to prevent an editor from rendering, if you want to write using this low-level representation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"ViewBox[expr_, displayView_, opts___]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["it will keep ",(0,r.jsx)(n.code,{children:"expr"})," in a code replacing visually by DOM element. The last one will be attached to the expression ",(0,r.jsx)(n.code,{children:"displayView"})," executed after."]}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"event",children:(0,r.jsx)(n.code,{children:'"Event"'})}),"\n",(0,r.jsxs)(n.p,{children:["Manually enables events generation. Using the provided event object identifier (",(0,r.jsx)(n.code,{children:"_String"}),"), it fires various events based on its state. You can attach a normal ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,r.jsx)(n.code,{children:"EventHandler"})})," to the given id"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'uid = CreateUUID[];\nEventHandler[uid, {pattern_String :> handler_, ..}]\n\nViewBox[.., "Event"->uid]\n'})}),"\n",(0,r.jsx)(n.p,{children:"There are following patterns available to be attached to"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'"Mounted"'})," fires once a widget is visible. A unique identifier is provided as a payload in a form of association"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'"Destroy"'})," fires once it was removed"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once it has been mounted it provides a unique ID as a string from the key ",(0,r.jsx)(n.code,{children:"Instance"})," in ",(0,r.jsx)(n.code,{children:'"Mounted"'})," event, which can be used in the constructor ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"}),". You can also apply ",(0,r.jsx)(n.a,{href:"#%60%60ViewBox%60InnerExpression%60%60",children:(0,r.jsx)(n.code,{children:"ViewBox`InnerExpression"})})," and ",(0,r.jsx)(n.a,{href:"#%60%60ViewBox%60OuterExpression%60%60",children:(0,r.jsx)(n.code,{children:"ViewBox`OuterExpression"})})," as well."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["This method ",(0,r.jsx)(n.strong,{children:"is much faster"})," than ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Formatting/Low-level/InterpretationBox",children:"InterpretationBox"})," or ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Formatting/Interpretation",children:"Interpretation"}),", since it does not spawn ",(0,r.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," inside for displaying regular boxes."]})}),"\n",(0,r.jsx)(n.h3,{id:"simple-straight-example",children:"Simple straight example"}),"\n",(0,r.jsx)(n.p,{children:"Let us make a special symbol with a single property"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"boxObject /: MakeBoxes[boxObject[s_], StandardForm] := With[{\n  g = Graphics[{Blue, Disk[{0,0},1], Opacity[0.5], Red,Disk[{0,0},s]}, ImageSize->80, Controls->False, ImagePadding->None]\n},\n  ViewBox[boxObject[s], g ]\n]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see ",(0,r.jsx)(n.strong,{children:"no JS required"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Table[boxObject[i], {i,3}]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(92575).c+"",width:"792",height:"130"})}),"\n",(0,r.jsx)(n.p,{children:"And you can still work with them as it was symbols"}),"\n",(0,r.jsx)(n.h4,{id:"event-listeners",children:"Event listeners"}),"\n",(0,r.jsx)(n.p,{children:"We can make frontend beep, once widget has been destroyed"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'boxObject /: MakeBoxes[boxObject[s_], StandardForm] := With[{\n  g = Graphics[{Blue, Disk[{0,0},1], Opacity[0.5], Red,Disk[{0,0},s]}, ImageSize->80, Controls->False, ImagePadding->None],\n  uid = CreateUUID[]\n},\n  EventHandler[uid, {"Destroy"->Beep}];\n  \n  ViewBox[boxObject[s], g, "Event"->uid]\n]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"replacing-expression-with-custom-js",children:"Replacing expression with custom JS"}),"\n",(0,r.jsx)(n.p,{children:"One can define its own style of cells boxes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'.js\ncore.Replacer = async (args, env) => {\n  env.element.style.background = "red";\n  env.element.style.width = "2em";\n  env.element.style.height = "1em";\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"wrapper /: MakeBoxes[wrapper[expr_], StandardForm] := ViewBox[wrapper[expr], Replacer]\n"})}),"\n",(0,r.jsx)(n.p,{children:"and then try"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"wrapper[1/2]\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This is basically how ",(0,r.jsx)(n.code,{children:"RGBColor"}),", ",(0,r.jsx)(n.code,{children:"DateObject"})," are implemented"]})}),"\n",(0,r.jsx)(n.h2,{id:"mutability",children:"Mutability"}),"\n",(0,r.jsx)(n.p,{children:"In general it is possible to update the expression underneath indirectly. For this reason, there are multiple way of accessing this feature"}),"\n",(0,r.jsx)(n.h3,{id:"from-wolfram-kernel",children:"From Wolfram Kernel"}),"\n",(0,r.jsx)(n.p,{children:"Please see methods below"}),"\n",(0,r.jsx)(n.h4,{id:"viewboxinnerexpression",children:(0,r.jsx)(n.code,{children:"ViewBox`InnerExpression"})}),"\n",(0,r.jsxs)(n.p,{children:["Is used to replace a covered expression by ",(0,r.jsx)(n.code,{children:"ViewBox"})," with a given string."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["It must be evaluated in the context of an instance of ",(0,r.jsx)(n.code,{children:"ViewBox"}),", use ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"})," and ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"})," in order to apply this to a specific box"]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"It returns the current content if no string is specified as an argument"}),". Use it with ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"})," and ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/FrontFetch",children:"FrontFetch"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example, lets make a dummy view-box, which covers a simple string with a disk"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'dummy /: MakeBoxes[_dummy, StandardForm] := With[{uid = CreateUUID[]},\n\tEventHandler[uid, {\n\t\t"Mounted" -> Function[res, ref = res["Instance"]]\n\t}];\n\t\n\tViewBox["Covered", Graphics[Disk[]], "Event"->uid]\n]\n\ndummy[]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now our element reported about itself into ",(0,r.jsx)(n.code,{children:"ref"})," global symbol. Let us fetch this covered expression"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"FrontFetch[ViewBox`InnerExpression[], FrontInstanceReference[ref]]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"\\"Covered\\""\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now lets change it"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'FrontSubmit[ViewBox`InnerExpression["1+1"], FrontInstanceReference[ref]]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now if you evaluate our disk, you will see"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"2\n"})}),"\n",(0,r.jsx)(n.h4,{id:"viewboxouterexpression",children:(0,r.jsx)(n.code,{children:"ViewBox`OuterExpression"})}),"\n",(0,r.jsx)(n.p,{children:"Is used to replace or update the content string within the box (including the box as well)"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"It will destroy an instance of the ViewBox once applied."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"ref = FrontInstanceReference[];\nPlot[x, {x,0,1}, Epilog->{ref}]\n"})}),"\n",(0,r.jsx)(n.p,{children:"and then we can destroy it and replace with our text"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'FrontSubmit[ViewBox`OuterExpression["Hello World"], ref] \n'})}),"\n",(0,r.jsx)(n.h3,{id:"from-javascript-function",children:"From Javascript function"}),"\n",(0,r.jsxs)(n.p,{children:["An expression ",(0,r.jsx)(n.code,{children:"displayView"})," is evaluated on WLJS Interpreter in the browser with special property provided (see tutorial ",(0,r.jsx)(n.a,{href:"/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"WLJS Functions"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"core.displayView = async (args, env) => {\n\tenv.global.EditorWidget\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"this object contains property to update the content"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"EditorWidget.applyChanges('\"new content\"')\n"})}),"\n",(0,r.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Let us create a special object, that will act like a checkbox"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"CheckObject /: MakeBoxes[CheckObject[state_:(True | False)], StandardForm] := With[{},\n  ViewBox[CheckObject[state], CheckBoxDecorator[]]\n]\n"})}),"\n",(0,r.jsx)(n.p,{children:"now JS part"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:".js\n\ncore.CheckBoxDecorator = async (args, env) => {\n  let state = false;\n\n  //check the raw data from the viewbox to determine the state\n  if (env.global.EditorWidget.getDoc() == 'CheckObject[True]') state = true;\n\n  //make a rectangle\n  env.element.style.width = \"1em\";\n  env.element.style.height = \"1em\";\n\n  const update = (s) => env.element.style.background = s ? 'red' : 'blue';\n\n  //color it depending on state\n  update(state);\n\n  //logic for updates when a user click on it\n  env.element.addEventListener(\"click\", () => {\n    state = !state;\n    update(state);\n    \n    const stringState = state ? 'True' : 'False';\n    env.global.EditorWidget.applyChanges('CheckObject['+stringState+']');\n  });\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's test it!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"CheckObject[True]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"then try to click on it, copy and paste it"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(54860).c+"",width:"454",height:"138"})}),"\n",(0,r.jsx)(n.p,{children:"whatever you do, it will keep its state synced. No communication with WL Kernel happens, everything is running within the code-editor in the browser."}),"\n",(0,r.jsx)(n.p,{children:"Or even cooler"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Table[CheckObject[True], {i, 3}, {j, 3}] // MatrixForm \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(16616).c+"",width:"600",height:"120"})}),"\n",(0,r.jsx)(n.h2,{id:"supported-output-forms",children:"Supported output forms"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/frontend/Reference/Formatting/StandardForm",children:"StandardForm"})}),"\n"]})]})}function A(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},92575:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-05-01 at 16.02.59-7fe0c4dc4112ab597bc3aee2a9436816.png"},54860:(e,n,t)=>{t.d(n,{c:()=>r});const r="data:image/png;base64,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"},16616:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/ezgif.com-video-to-gif-6-a6084f24bfebcc24031d0132350e3d51.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var r=t(11504);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);