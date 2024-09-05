(()=>{var e,t,o,r={4306:(e,t,o)=>{"use strict";const r=window.wp.blocks;var n=o(1609);o(7723);const i=window.wp.blockEditor;var s=o(6087),a=o(6942),l=o.n(a);const c=(e,t)=>{const{background:o,foreground:r}=t;(({percentage:e=100,onScroll:t=!1,speed:o=1,element:r,size:n=50,backgroundClr:i="white",color:s="blue",strokeWidth:a=5})=>{let l=window.frames["editor-canvas"]?.document.querySelector("html")||document.querySelector(".interface-interface-skeleton__content");if(wp?.editor)var c=Math.ceil(l.scrollHeight-l.clientHeight);else c=Math.ceil(document.body.scrollHeight-window.innerHeight);if(!r)return void console.error("Invalid element:",r);const d=r,u=d.getContext("2d"),p=2*n+a,b=p,h=p/2,g=b/2;var f;d.width=p,d.height=b,f=t?Math.floor(window.scrollY/c*100):e>100?100:e+o,wp?.editor&&(f=t?Math.floor(l.scrollTop/c*100):e>100?100:e+o),u.clearRect(0,0,p,b),u.beginPath(),u.lineWidth=a,u.arc(h,g,n,0,2*Math.PI),u.strokeStyle=i,u.stroke(),(e=>{u.beginPath(),u.lineWidth=a,u.strokeStyle=s,u.arc(h,g,n,0,2*Math.PI*e/100),u.stroke()})(f)})({element:e.querySelector("canvas"),size:100,percentage:100,onScroll:!0,speed:50,backgroundClr:o,color:r,strokeWidth:10})},d=({attributes:e,options:t,clientId:o})=>{const{btnAppearance:r,btnIcon:i,btnText:s}=e,{GkitIcon:a}=window.gutenkit.components,c={className:l()({"icon-wrapper":"text-only"!==r},{"text-wrapper":"text-only"===r})};return(0,n.createElement)("div",{className:"gkit-back-to-top","data-settings":JSON.stringify(t)},(0,n.createElement)("span",{...c},"icon-only"===r&&(0,n.createElement)(a,{icon:i}),s&&"text-only"===r&&s,s&&"progress-indicator"===r&&(0,n.createElement)("div",{className:"progress-indicator"},(0,n.createElement)("canvas",{id:`canvas-${o}`,className:"canvas","data-canvas":o}),(0,n.createElement)(a,{icon:i}))))},u=(0,s.lazy)((()=>o.e(8024).then(o.bind(o,8024)))),p=JSON.parse('{"UU":"gutenkit/back-to-top"}'),{backToTop:b}=window.gutenkit.editorIcon;(0,r.registerBlockType)(p.UU,{edit:function({attributes:e,setAttributes:t,clientId:o,advancedControl:r,isSelected:a}){const{GkitStyle:p,GkitIcon:b,GkitSuspense:h}=window.gutenkit.components,{useDeviceType:g,useBlockStyles:f}=window.gutenkit.helpers,{btnAppearance:v,btnIcon:w,btnText:k,offsetTop:m,showBtnOnScroll:y,scrolledValue:S,lineFgColor:T,lineBgColor:x}=e,E={style:v,offset_top:m,show_scroll:y,show_after:S,foreground:T,background:x},C=(0,s.useRef)(null),M=(0,i.useBlockProps)({className:l()(v,{"show-on-scroll":y}),ref:C}),_=g();return(0,s.useEffect)((()=>{const{ownerDocument:e}=C.current,t=C.current.querySelector("span");t.addEventListener("click",(e=>{var t;t=E,(window.frames["editor-canvas"]||window).scrollTo({left:0,top:t?.offset_top,behavior:"smooth"})})),e.addEventListener("scroll",(e=>{E?.show_scroll&&((e,t)=>{let o=window.frames["editor-canvas"]?.document.querySelector("html")||document.querySelector(".interface-interface-skeleton__content");const{offset_top:r,show_after:n}=t,i=wp?.editor?o.scrollTop:window.scrollY,s=Math.ceil(i)>parseInt(n,10)+parseInt(r,10);let a=e.classList.contains("gkit-tt-show");s&&!a&&e.classList.add("gkit-tt-show"),!s&&a&&e.classList.remove("gkit-tt-show")})(t,E),"progress-indicator"===E?.style&&c(t,E)}),!0),"progress-indicator"===E?.style&&c(t,E)}),[v,m,y,S,T,x]),f(e,t,"blocksCSS",(e=>{const{parseCSS:t,backgroundGenerator:o,getBoxShadowValue:r,getBoxValue:n,getBorderValue:i,getTypographyValue:s,getSliderValue:a,getColor:l}=window.gutenkit.helpers,c=e.blockClass;return t({desktop:[{selector:`.${c}`,"text-align":e.alignDesktop},{selector:`.${c} span`,width:e.widthDesktop?a(e.widthDesktop):void 0,height:e.heightDesktop?a(e.heightDesktop):void 0,color:l(e.textColor),background:o(e?.bgColor).background,...i(e?.borderDesktop),...n(e?.borderRadiusDesktop,"border-radius"),"box-shadow":r(e.boxShadow)},{selector:`.${c} span:hover`,color:l(e.hoverColor),background:o(e?.bgHoverColor).background,...i(e?.hoverBorderDesktop),...n(e?.hoverBorderRadiusDesktop,"border-radius"),"box-shadow":r(e.hoverBoxShadow)},{selector:`.${c} .icon-wrapper`,"font-size":e.iconSizeDesktop?a(e.iconSizeDesktop):void 0},{selector:`.${c}.text-only span`,...s(e.typography,"Desktop")}],tablet:[{selector:`.${c}`,"text-align":e?.alignTablet},{selector:`.${c} span`,width:e.widthTablet?a(e.widthTablet):void 0,height:e.heightTablet?a(e.heightTablet):void 0,...i(e?.borderTablet),...n(e?.borderRadiusTablet,"border-radius")},{selector:`.${c} span:hover`,...i(e?.hoverBorderTablet),...n(e?.hoverBorderRadiusTablet,"border-radius")},{selector:`.${c} .icon-wrapper`,"font-size":e.iconSizeTablet?a(e.iconSizeTablet):void 0},{selector:`.${c}.text-only span`,...s(e.typography,"Tablet")}],mobile:[{selector:`.${c}`,"text-align":e.alignMobile},{selector:`.${c} span`,width:e.widthMobile?a(e.widthMobile):void 0,height:e.heightMobile?a(e.heightMobile):void 0,...i(e?.borderMobile),...n(e?.borderRadiusMobile,"border-radius")},{selector:`.${c} span:hover`,...i(e?.hoverBorderMobile),...n(e?.hoverBorderRadiusMobile,"border-radius")},{selector:`.${c} .icon-wrapper`,"font-size":e.iconSizeMobile?a(e.iconSizeMobile):void 0},{selector:`.${c}.text-only span`,...s(e.typography,"Mobile")}]})})(e)),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p,{blocksCSS:e?.blocksCSS}),a&&(0,n.createElement)(h,null,(0,n.createElement)(u,{attributes:e,setAttributes:t,device:_,advancedControl:r})),(0,n.createElement)("div",{...M},(0,n.createElement)(d,{attributes:e,options:E,clientId:o})))},icon:{src:b},save:function({attributes:e,clientId:t}){const{GkitIcon:o}=window.gutenkit.components,{btnAppearance:r,btnIcon:s,btnText:a,offsetTop:c,showBtnOnScroll:u,scrolledValue:p,lineFgColor:b,lineBgColor:h,blockID:g}=e,f={style:r,offset_top:c,show_scroll:u,show_after:p,foreground:b,background:h},v=i.useBlockProps.save({className:l()(r,{"show-on-scroll":u})});return(0,n.createElement)("div",{...v},(0,n.createElement)(d,{attributes:e,options:f,clientId:t}))}})},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives},6942:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=s(e,i(o)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=s(t,o));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,e=[],i.O=(t,o,r,n)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,r,n]=e[d],a=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((e=>i.O[e](o[l])))?o.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,r,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>e+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},o="gutenkit-blocks-addon:",i.l=(e,r,n,s)=>{if(t[e])t[e].push(r);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+n){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+n),a.src=e),t[e]=[r];var p=(o,r)=>{a.onerror=a.onload=null,clearTimeout(b);var n=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),o)return o(r)},b=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"})(),(()=>{var e={1910:0,794:0};i.f.j=(t,o)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else if(794!=t){var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var s=i.p+i.u(t),a=new Error;i.l(s,(o=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",a.name="ChunkLoadError",a.type=n,a.request=s,r[1](a)}}),"chunk-"+t,t)}else e[t]=0},i.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[s,a,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)var d=l(i)}for(t&&t(o);c<s.length;c++)n=s[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},o=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=i.O(void 0,[794],(()=>i(4306)));s=i.O(s)})();