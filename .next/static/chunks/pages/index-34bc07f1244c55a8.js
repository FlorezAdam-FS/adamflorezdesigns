(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8674)}])},8045:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(o.push(i.value),!e||o.length!==e);a=!0);}catch(c){l=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return o}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}e.default=function(t){var e=t.src,n=t.sizes,i=t.unoptimized,l=void 0!==i&&i,c=t.priority,g=void 0!==c&&c,x=t.loading,k=t.lazyRoot,S=void 0===k?null:k,z=t.lazyBoundary,O=void 0===z?"200px":z,E=t.className,P=t.quality,N=t.width,R=t.height,I=t.objectFit,_=t.objectPosition,D=t.onLoadingComplete,U=t.loader,M=void 0===U?j:U,B=t.placeholder,C=void 0===B?"empty":B,L=t.blurDataURL,W=function(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),q=s.useRef(null),T=s.useContext(m.ImageConfigContext),X=s.useMemo((function(){var t=h||T||d.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return p({},t,{allSizes:e,deviceSizes:n})}),[T]),F=W,G=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var H="";if(function(t){return"object"===typeof t&&(v(t)||function(t){return void 0!==t.src}(t))}(e)){var J=v(e)?e.default:e;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(L=L||J.blurDataURL,H=J.src,(!G||"fill"!==G)&&(R=R||J.height,N=N||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}e="string"===typeof e?e:H;var V=A(N),Q=A(R),K=A(P),Y=!g&&("lazy"===x||"undefined"===typeof x);(e.startsWith("data:")||e.startsWith("blob:"))&&(l=!0,Y=!1);y.has(e)&&(Y=!1);0;var Z,$=o(f.useIntersection({rootRef:S,rootMargin:O,disabled:!Y}),2),tt=$[0],et=$[1],nt=!Y||et,it={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},rt={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ot=!1,at={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:_},lt="blur"===C?{filter:"blur(20px)",backgroundSize:I||"cover",backgroundImage:'url("'.concat(L,'")'),backgroundPosition:_||"0% 0%"}:{};if("fill"===G)it.display="block",it.position="absolute",it.top=0,it.left=0,it.bottom=0,it.right=0;else if("undefined"!==typeof V&&"undefined"!==typeof Q){var ct=Q/V,st=isNaN(ct)?"100%":"".concat(100*ct,"%");"responsive"===G?(it.display="block",it.position="relative",ot=!0,rt.paddingTop=st):"intrinsic"===G?(it.display="inline-block",it.position="relative",it.maxWidth="100%",ot=!0,rt.maxWidth="100%",Z="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(V,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===G&&(it.display="inline-block",it.position="relative",it.width=V,it.height=Q)}else 0;var ut={src:b,srcSet:void 0,sizes:void 0};nt&&(ut=w({config:X,src:e,unoptimized:l,layout:G,width:V,quality:K,sizes:n,loader:M}));var dt=e;0;var ft;0;var mt=(r(ft={},"imagesrcset",ut.srcSet),r(ft,"imagesizes",ut.sizes),ft),gt=s.default.useLayoutEffect,pt=s.useRef(D);return s.useEffect((function(){pt.current=D}),[D]),gt((function(){tt(q.current)}),[tt]),s.useEffect((function(){!function(t,e,n,i,r){var o=function(){var n=t.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(y.add(e),"blur"===i&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),r.current)){var o=n.naturalWidth,a=n.naturalHeight;r.current({naturalWidth:o,naturalHeight:a})}})))};t.current&&(t.current.complete?o():t.current.onload=o)}(q,dt,0,C,pt)}),[dt,G,C,nt]),s.default.createElement("span",{style:it},ot?s.default.createElement("span",{style:rt},Z?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Z}):null):null,s.default.createElement("img",Object.assign({},F,ut,{decoding:"async","data-nimg":G,className:E,ref:q,style:p({},at,lt)})),Y&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},F,w({config:X,src:e,unoptimized:l,layout:G,width:V,quality:K,sizes:n,loader:M}),{decoding:"async","data-nimg":G,style:at,className:E,loading:x||"lazy"}))),g?s.default.createElement(u.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ut.src+ut.srcSet+ut.sizes,rel:"preload",as:"image",href:ut.srcSet?void 0:ut.src},mt))):null)};var c,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(7294)),u=(c=n(5443))&&c.__esModule?c:{default:c},d=n(5809),f=n(7190),m=n(9977);function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=arguments,n=function(n){var i=null!=e[n]?e[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),r.forEach((function(e){g(t,e,i[e])}))},i=1;i<arguments.length;i++)n(i);return t}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality,o=new URL("".concat(e.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(k(n))}],["akamai",function(t){var e=t.config,n=t.src,i=t.width;return"".concat(e.path).concat(k(n),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(t){return void 0!==t.default}function w(t){var e=t.config,n=t.src,i=t.unoptimized,r=t.layout,o=t.width,l=t.quality,c=t.sizes,s=t.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(t,e,n,i){var r=t.deviceSizes,o=t.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(i);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(t){return t>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,r,c),d=u.widths,f=u.kind,m=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(t,i){return"".concat(s({config:e,src:n,quality:l,width:t})," ").concat("w"===f?t:i+1).concat(f)})).join(", "),src:s({config:e,src:n,quality:l,width:d[m]})}}function A(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function j(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",i=x.get(n);if(i)return i(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(t){return"/"===t[0]?t.slice(1):t}},8674:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var i=n(5893),r=(n(8010),n(1664)),o=n(7294),a=n(6038),l=n(5675),c={src:"/_next/static/media/me.ef332bcc.png",height:792,width:669,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAbFBMVEVMaXHW09UAAADmxKO+XQq2Wwy1fFg8LCBPQjZXR0PaonK5kHnUgUGDPhueSRXQhDv///+hc2C9q5zjmWeNZ13Jm4idhXTg0r17TTSUYES/cDnFlnd2Mgjiupbx3Mm5g2LUimCUUTDJhVGCc2dL/lbtAAAAGHRSTlMA/Sea/v79whgNZfVY/er+DPz9rev+/bK/8LlcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImRXFRxZAMABAwR+kadGl6O5/R89sBqzWBsBUPvu3UyiBbn2XI4cxDULsNakPp4otar783Wy4J0opiw9O5gMGiaSETgAAAABJRU5ErkJggg=="};function s(){return(0,o.useEffect)((function(){var t=a.p8.timeline({defaults:{ease:"power4",duration:2}});t.to(".black-bg",{"clip-path":"polygon(60% 100%, 100% 100%, 100% 100%, 100% 60%)"},"+=2"),t.to(".adam",{y:0,"clip-path":"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"},"-=5"),t.to(".adam span",{color:"#27282A"},"-=2.5"),t.to(".titles",{y:0,opacity:1,duration:1,clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"},"-=5"),t.to(".info",{y:0,opacity:1,duration:1,clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"},"-=.8"),t.to(".button",{scaleY:1,ease:"bounce.out",stagger:.2,marginBottom:8},"-=2.5"),t.to(".image",{bottom:"-260px"})})),(0,i.jsxs)("main",{className:"flex flex-col items-center justify-center min-h-screen min-w-full bg-orange",children:[(0,i.jsx)("div",{className:"w-[90%] mx-auto h-full flex-grow flex items-center justify-start",children:(0,i.jsxs)("div",{className:"p-8 relative z-50 sm:text-center lg:text-left",children:[(0,i.jsxs)("h1",{className:"adam translate-y-[100px] text-3xl max-w-[900px] tracking-tight text-left leading-tight font-bold sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl",style:{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"},children:[(0,i.jsxs)("span",{className:"text-white",children:["I'm Adam Florez",(0,i.jsx)("br",{})," "]}),(0,i.jsx)("span",{className:"titles block text-lg text-white opacity-0 font-light mt-4 mb-8 tracking-normal translate-y-[100px] sm:text-3xl md:text-3xl",style:{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"},children:"Developer | Designer | Dedicated"})]}),(0,i.jsx)("p",{className:"info mt-3 text-sm translate-y-[100px] opacity-0 text-left text-dark sm:mt-5 sm:text-md sm:max-w-cl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:max-w-2xl lg:text-lg",style:{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"},children:"Graduating from Full Sail University in June 2022 with a Bachelor's of Science in Web Development and Design. Looking to make a name for myself as well as increase productivity and enhance creativity for your company."}),(0,i.jsxs)("div",{className:"mt-8 max-w-[400px] sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[(0,i.jsx)(r.default,{href:"/work",children:(0,i.jsx)("a",{className:"button scale-y-0 origin-bottom ease-in mr-3 duration-200 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-dark hover:bg-dark md:py-4 md:text-lg md:px-10",children:"My Work"})}),(0,i.jsx)("a",{href:"#",className:"button scale-y-0 origin-bottom ease-in duration-200 w-full flex items-center justify-center px-8 py-3 border border-dark text-base font-medium text-dark bg-transparent border-white hover:border-dark hover:text-white hover:bg-dark md:py-4 md:text-lg md:px-10",children:"Contact Me"})]})]})}),(0,i.jsx)("div",{className:"black-bg h-full w-full absolute lg:block bottom-0 right-0 bg-dark z-0",style:{"clip-path":"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",zIndex:0}}),(0,i.jsx)("div",{className:"image fixed hidden right-[-30px] bottom-[-860px] xl:inline",children:(0,i.jsx)(l.default,{src:c})})]})}},5675:function(t,e,n){t.exports=n(8045)}},function(t){t.O(0,[774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);