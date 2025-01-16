"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4496],{78604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(17624),o=t(4552);const s={draft:!1,sidebar_position:1},r="Components",a={id:"frontend/Advanced/Slides/Building components",title:"Components",description:"See the collection of components in Components library",source:"@site/docs/frontend/Advanced/Slides/Building components.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/Building components",permalink:"/frontend/Advanced/Slides/Building components",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,sidebarPosition:1,frontMatter:{draft:!1,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Slides",permalink:"/frontend/Advanced/Slides/"},next:{title:"Basic widgets",permalink:"/frontend/Advanced/Slides/Basic widgets"}},l={},d=[{value:"Decorators",id:"decorators",level:2},{value:"Layout helpers",id:"layout-helpers",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"components",children:"Components"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See the collection of components in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Components%20library/QR%20Code",children:"Components library"})]})}),"\n",(0,i.jsx)(n.p,{children:"Making presentation is quite repetitive process. It is quite common to have some common element shared between different slides."}),"\n",(0,i.jsxs)(n.p,{children:["To overcome this small issue one can use ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," language to define heading for instance"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.wlx\nHeading[OptionsPattern[]]] := With[{Title = OptionValue["Title"]},\n  <dummy>\n    <h1><Title/></h1>\n    Some repetative text you need\n  </dummy>\n] \n\nOptions[Heading] = {"Title"->"Nope"}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," requires always only one parent element if you has defined a function with XML tags. Use ",(0,i.jsx)(n.code,{children:"<dummy>"})," or ",(0,i.jsx)(n.code,{children:"<div>"})," for that."]})}),"\n",(0,i.jsx)(n.p,{children:"and then use it on your slides as if it was a normal tag"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n<Heading title={"Some title"}/>\n\n<br/><br/>\n\nThe actual content\n\nMb some equations $m \\\\mathbf{a} = \\\\mathbf{F}$\n'})}),"\n",(0,i.jsx)(n.p,{children:"Unfortunately it is quite tricky to use normal Markdown inside components, because it requires caret returns between XML/HTML and Markdown tags, which are trimmed by default. However for equations it still works"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.wlx\n\nHeading[OptionsPattern[]]] := With[{Title = OptionValue["Title"]},\n  <dummy>\n    <h1><Title/></h1>\n    Some repetative text you need\n    Here some random equation $x^2 + y^2 + z^2 = r^2 $\n  </dummy>\n] \n\nOptions[Heading] = {"Title"->"Nope"}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"decorators",children:"Decorators"}),"\n",(0,i.jsxs)(n.p,{children:["Decorators with ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})," defined such as [[Row]], ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Decorations/Column",children:"Column"})," can be used on slides as well natively. ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"})," is also a combination of those, which make it possible to output it directly without ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'Figure = Plot[x, {x,0,1}];\nEditor = EditorView["Plot[x, {x,0,1}] -> "];\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="cell 2"',children:".slide\n\n<Row>\n\t<Editor/>\n\t<Figure/>\n</Row>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(53564).c+"",width:"1144",height:"486"})}),"\n",(0,i.jsx)(n.h2,{id:"layout-helpers",children:"Layout helpers"}),"\n",(0,i.jsx)(n.p,{children:"This is a common case, when components comes handy. Imagine a typical situation, when we need to organize columns in the presentation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.wlx\n\nColumns[cols__] := With[{width = 99 / (List[cols]//Length) // Floor},\n\n  With[{Layout = Table[\n    <div style="width: {width}%">\n      <Col/>\n    </div>  \n   , {Col, List[cols]}]\n  },\n\n    <div style="display:flex">\n      <Layout/> \n    </div>\n  ]\n  \n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"here we firstly calculated the width of each column based of their number, and then used a normal HTML with CSS to style them."}),"\n",(0,i.jsxs)(n.p,{children:["Since the input argument is not typed, one can use nested tags, or WL expressions as a content for each columns. Here is one of the slides of ",(0,i.jsx)(n.a,{href:"https://github.com/JerryI",children:"@JerryI"}),"'s presentation on a recent talk in 2023"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n# Different ways of calculating properties for magnetic materials\n\n<br/><br/>\n\n<Columns>\n  <p style="text-align:left">\n\n## DFT+U\nDFT with Columb repulsion between sites allowing to model the localized magnetic moments\n    \n- lack of $\\sim 1~cm^{-1}$ accuracy\n- slow and time-consuming\n- hard to control the intermediate steps\n- feeling of working with "black box"\n    \n  </p>\n  <p style="text-align:left">\n\n## Effective Hamiltonians\nSpin Hamiltonian, Heisenberg, etc... randomly picked\n    \n- non consistent (completely different from compound to compund)\n- overparametrized\n    \n  </p>\n  <p style="text-align:left">\n\n## Microscopic theory \x3c!-- .element: class="fragment highlight-red" data-fragment-index="1" --\x3e\nBuilding the energy levels step by step from the isolated ion considering crystal structure and interactions \x3c!-- .element: class="fragment highlight-red" data-fragment-index="1" --\x3e\n    \n- considered to be outdated\n- ~~requires a lot of calculations~~\n- hard to threat collective excitations\n\n<span style="color:red">Use Computer Algebra!</span> \x3c!-- .element: class="fragment" data-fragment-index="1" --\x3e\n    \n  </p>\n</Columns>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["One can see, that this is again a mixture of HTML/XML and Markdown. Each tag entering into ",(0,i.jsx)(n.code,{children:"<Columns>"})," is treated as a separate argument."]}),"\n",(0,i.jsx)(n.p,{children:"But nothing can stop you from using a plain text"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:".slide\n\n<Columns>\n\n# Title\nFirst column\n  \n  <Identity>\n\n# Other title\nSecond one\n    \n  </Identity>\n</Columns>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Identity"})," or ",(0,i.jsx)(n.code,{children:"dummy"})," or ",(0,i.jsx)(n.code,{children:"p"})," or ",(0,i.jsx)(n.code,{children:"div"})," helps WLX to differentiate between the first and second argument. It is similar to ",(0,i.jsx)(n.code,{children:"li"})," tag used in ",(0,i.jsx)(n.code,{children:"ul"})," HTML tag used for lists."]})}),"\n",(0,i.jsx)(n.p,{children:"You can use the full power of modern CSS to style it in a way you like."})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},53564:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2024-09-25 at 15.37.02-1f3e50579733f2a8543b3a9180612cc2.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);