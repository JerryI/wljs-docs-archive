"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1766],{84972:(e,n,A)=>{A.r(n),A.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>g,toc:()=>x});var o=A(17624),t=A(4552);const s={},r=void 0,g={id:"frontend/Reference/Formatting/Item",title:"Item",description:"represents an item within constructs such Grid",source:"@site/docs/frontend/Reference/Formatting/Item.md",sourceDirName:"frontend/Reference/Formatting",slug:"/frontend/Reference/Formatting/Item",permalink:"/frontend/Reference/Formatting/Item",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1737202966e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invisible",permalink:"/frontend/Reference/Formatting/Invisible"},next:{title:"Ket",permalink:"/frontend/Reference/Formatting/Ket"}},a={},x=[{value:"Options",id:"options",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.M)(),...e.components},{CodeMirror:A}=n;return A||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeMirror",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Item[expr_, opts___]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["represents an item within constructs such ",(0,o.jsx)(n.a,{href:"/frontend/Reference/Formatting/Grid",children:"Grid"})]}),"\n",(0,o.jsxs)(n.p,{children:["It modifies on outer container applying custom styles specified in ",(0,o.jsx)(n.code,{children:"opts"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Grid[{{Item[a, Frame -> True], b}, {c, d}}]\n"})}),"\n",(0,o.jsx)(A,{children:'(*GB[*){{a(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUotZgQy3osTcVLBQSFFpKpoCHiAjuKQos8A/zzOvoLQEoiMxpzgVAMnhGG0="*)(*]VB*)(*|*),(*|*)b}(*||*),(*||*){c(*|*),(*|*)d}}(*]GB*)'}),"\n",(0,o.jsx)(n.p,{children:"Another example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"a = {{1, 2}, {3, 4}};\nGrid[KroneckerProduct[IdentityMatrix[5], a]] /. {0 -> 0, \n   x_?NumberQ -> Item[x, Background -> Orange]}\n"})}),"\n",(0,o.jsx)(A,{children:'(*GB[*){{1(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)2(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){3(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)4(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)1(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)2(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)3(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)4(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)1(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)2(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)3(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)4(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)1(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)2(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)3(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)4(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)0(*|*),(*|*)0}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)1(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)2(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)}(*||*),(*||*){0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)0(*|*),(*|*)3(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)(*|*),(*|*)4(*VB[*)(**)(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KWlMIB47kPAsSc11yq+ACICkg0pzUou5gAynxOTs9KL80ryUNGaQJAdI0t3JOT8nvygTZFoRAxg8sM8EUWgm8AAZwSVFmQX+eZ55BaUlxaxAAbfEnOJUABnOHpI="*)(*]VB*)}}(*]GB*)'}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.p,{children:["The same as for ",(0,o.jsx)(n.a,{href:"/frontend/Reference/Graphics/Style",children:"Style"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,A)=>{A.d(n,{I:()=>g,M:()=>r});var o=A(11504);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function g(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);