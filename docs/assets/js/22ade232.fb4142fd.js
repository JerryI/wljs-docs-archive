"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4600],{74548:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(17624),a=r(4552);const i={},o=void 0,s={id:"frontend/Reference/Graphics3D/Custom shader materials",title:"Custom shader materials",description:"Using Shared libraries and WLJS Functions one can define a custom vertex / fragment shaders to be used by Graphics3D primitives.",source:"@site/docs/frontend/Reference/Graphics3D/Custom shader materials.md",sourceDirName:"frontend/Reference/Graphics3D",slug:"/frontend/Reference/Graphics3D/Custom shader materials",permalink:"/frontend/Reference/Graphics3D/Custom shader materials",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:173126759e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cuboid",permalink:"/frontend/Reference/Graphics3D/Cuboid"},next:{title:"Cylinder",permalink:"/frontend/Reference/Graphics3D/Cylinder"}},c={},d=[];function l(e){const n={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Javascript/Shared%20libraries",children:"Shared libraries"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"WLJS Functions"})," one can define a custom vertex / fragment shaders to be used by ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})," primitives."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Adapted example from ",(0,t.jsx)(n.a,{href:"https://dev.to/maniflames/creating-a-custom-shader-in-threejs-3bhi",children:"DEV.io"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="Javascript cell"',children:".js\nfunction vertexShader() {\n  return `\n    varying vec3 vUv; \n\n    void main() {\n      vUv = position; \n\n      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition; \n    }\n  `;\n}\n\nfunction fragmentShader()  {\n  return `\n      uniform vec3 colorA; \n      uniform vec3 colorB; \n      varying vec3 vUv;\n\n      void main() {\n        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);\n      }\n  `;\n}\n\nlet THREE;\ninterpretate.shared.THREE.load().then(() => {\n  THREE = interpretate.shared.THREE.THREE;\n})\n\ncore.CustomMaterial = async (args, env) => {\n  let uniforms = {\n    colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)},\n    colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)}\n  }\n\n  return (function() {\n    return new THREE.ShaderMaterial({\n      uniforms: uniforms,\n      fragmentShader: fragmentShader(),\n      vertexShader: vertexShader(),\n    });\n  })\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now hook it up to some basic graphics primitives"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="WL cell"',children:'Graphics3D[{\n  Translate[PolyhedronData["Dodecahedron"][[1]]//N , {-2,-3,0}],\n  MeshMaterial[CustomMaterial[]],\n  Translate[PolyhedronData["Dodecahedron"][[1]]//N , {2,3,0}]\n}]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(52648).c+"",width:"1318",height:"478"})})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},52648:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/Screenshot 2024-11-10 at 20.21.16-b8d6c2efccdc2feacf5b3ac56e46e196.png"},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>o});var t=r(11504);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);