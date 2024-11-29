"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3e3],{17032:(A,C,E)=>{E.r(C),E.d(C,{assets:()=>n,contentTitle:()=>I,default:()=>r,frontMatter:()=>B,metadata:()=>e,toc:()=>i});var g=E(17624),Q=E(4552);const B={},I=void 0,e={id:"frontend/Advanced/Javascript/Shared libraries",title:"Shared libraries",description:"There are shared Javascript libraries used by various modules available in interpretate.shared  object.",source:"@site/docs/frontend/Advanced/Javascript/Shared libraries.md",sourceDirName:"frontend/Advanced/Javascript",slug:"/frontend/Advanced/Javascript/Shared libraries",permalink:"/frontend/Advanced/Javascript/Shared libraries",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1732899651e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Communication",permalink:"/frontend/Advanced/Javascript/Communication"},next:{title:"1. Creating new type",permalink:"/frontend/Advanced/Objects/Creating new type"}},n={},i=[];function c(A){const C={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,Q.M)(),...A.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(C.p,{children:["There are shared Javascript libraries used by various modules available in ",(0,g.jsx)(C.code,{children:"interpretate.shared"}),"  object."]}),"\n",(0,g.jsxs)(C.p,{children:["Here is an example with THREE.js used by ",(0,g.jsx)(C.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})]}),"\n",(0,g.jsx)(C.pre,{children:(0,g.jsx)(C.code,{className:"language-js",children:".js\nconst dom = document.createElement('div');\nlet animation;\n\nasync function buildScene() {\n  await interpretate.shared.THREE.load(); //here\n  const THREE = interpretate.shared.THREE.THREE;\n\n  const scene = new THREE.Scene();\n  const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );\n\n  const renderer = new THREE.WebGLRenderer();\n  renderer.setSize( 400, 300);\n\n  dom.appendChild( renderer.domElement );\n\n  const geometry = new THREE.BoxGeometry( 1, 1, 1 );\n  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );\n  const cube = new THREE.Mesh( geometry, material );\n  scene.add( cube );\n\n  camera.position.z = 5 \n\n  function animate() {\n\n\tcube.rotation.x += 0.01;\n\tcube.rotation.y += 0.01;\n\n\trenderer.render( scene, camera );\n    animation = requestAnimationFrame(animate);\n\n  } \n\n  animate();\n}\n\nthis.ondestroy = () => {\n  cancelAnimationFrame(animation);\n  console.log('removed');\n}\n\nbuildScene();\n\n\nreturn dom;\n"})}),"\n",(0,g.jsx)(C.p,{children:(0,g.jsx)(C.img,{src:E(33503).c+"",width:"710",height:"321"})})]})}function r(A={}){const{wrapper:C}={...(0,Q.M)(),...A.components};return C?(0,g.jsx)(C,{...A,children:(0,g.jsx)(c,{...A})}):c(A)}},33503:(A,C,E)=>{E.d(C,{c:()=>g});const g="data:image/png;base64,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"},4552:(A,C,E)=>{E.d(C,{I:()=>e,M:()=>I});var g=E(11504);const Q={},B=g.createContext(Q);function I(A){const C=g.useContext(B);return g.useMemo((function(){return"function"==typeof A?A(C):{...C,...A}}),[C,A])}function e(A){let C;return C=A.disableParentContext?"function"==typeof A.components?A.components(Q):A.components||Q:I(A.components),g.createElement(B.Provider,{value:C},A.children)}}}]);