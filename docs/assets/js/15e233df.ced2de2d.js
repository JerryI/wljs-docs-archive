"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9486],{69188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(17624),r=t(4552);const a={tags:["export"]},s=void 0,i={id:"frontend/Advanced/Components library/Share downloadable files",title:"Share downloadable files",description:"If you export your notebook or presentation to a Static HTML, you might need to provide some ASCII or other binary files together with it. It may benefit a user, if you provide a direct link to it right on the notebook page",source:"@site/docs/frontend/Advanced/Components library/Share downloadable files.md",sourceDirName:"frontend/Advanced/Components library",slug:"/frontend/Advanced/Components library/Share downloadable files",permalink:"/frontend/Advanced/Components library/Share downloadable files",draft:!1,unlisted:!1,tags:[{label:"export",permalink:"/tags/export"}],version:"current",lastUpdatedAt:1732651155e3,frontMatter:{tags:["export"]},sidebar:"tutorialSidebar",previous:{title:"QR Code",permalink:"/frontend/Advanced/Components library/QR Code"},next:{title:"Stats counter",permalink:"/frontend/Advanced/Components library/Stats counter"}},l={},c=[{value:"Source code",id:"source-code",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["If you export your notebook or presentation to a ",(0,o.jsx)(n.a,{href:"/frontend/Exporting/Static%20HTML",children:"Static HTML"}),", you might need to provide some ASCII or other binary files together with it. It may benefit a user, if you provide a direct link to it right on the notebook page"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Do not embed files larger than 1-5 Mb using this wrapper"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(94596).c+"",width:"800",height:"364"})}),"\n",(0,o.jsx)(n.p,{children:"For example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'EmbedFile["data.dat", {{1,2}, {3,4}}]\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["It effectively uses the same interface as ",(0,o.jsx)(n.code,{children:"Export"})," and can export image, sound or any binary data as well"]})}),"\n",(0,o.jsxs)(n.p,{children:["One can also put it on a slide or any ",(0,o.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," cell if needed"]}),"\n",(0,o.jsx)(n.h2,{id:"source-code",children:"Source code"}),"\n",(0,o.jsx)(n.p,{children:"Copy and evaluate both cells"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:"EmbedFile[name_String, data_] := With[{exported = Export[name, data]},\n  If[!FailureQ[exported],\n    With[{base64 = BaseEncode[ReadByteArray[exported]]},\n      EmbedFile[name, base64] // Hold // CreateFrontEndObject\n    ]\n  ,\n    $Failed\n  ]\n]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="cell 2"',children:'.js\n\nconst b64toBlob = (b64Data, contentType=\'\', sliceSize=512) => {\n  const byteCharacters = atob(b64Data);\n  const byteArrays = [];\n\n  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {\n    const slice = byteCharacters.slice(offset, offset + sliceSize);\n\n    const byteNumbers = new Array(slice.length);\n    for (let i = 0; i < slice.length; i++) {\n      byteNumbers[i] = slice.charCodeAt(i);\n    }\n\n    const byteArray = new Uint8Array(byteNumbers);\n    byteArrays.push(byteArray);\n  }\n    \n  const blob = new Blob(byteArrays, {type: contentType});\n  return blob;\n}\n\ncore.EmbedFile = async (args, env) => {\n  const name = await interpretate(args[0], env);\n  const data = await interpretate(args[1], env);\n\n  // Create the anchor element\n  const anchor = document.createElement("button");\n  anchor.className = "sm-controls rounded bg-white px-2 py-1 text-xs text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex flex-row gap-x-1 items-end";\n\n\n  anchor.textContent = "Download";\n\n  anchor.innerHTML = `<span>Download <b>${name}</b></span> \n  <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-5 h-5 ml-auto" viewBox="0 0 24 24">\n    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"></path>\n  </svg>\n`;\n  \n  env.element.appendChild(anchor);\n\n  env.element.onclick = () => {\n    const blob = b64toBlob(data);\n\n    // Create a download link\n    const link = document.createElement(\'a\');\n    link.href = URL.createObjectURL(blob);\n    link.download = name;\n    link.click();\n    link.remove();\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},94596:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/demofiles-ezgif.com-video-to-gif-converter-debb52a4a805564c9a5514f3b6a3fe8c.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>s});var o=t(11504);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);