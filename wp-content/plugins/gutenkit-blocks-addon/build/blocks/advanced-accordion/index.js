(()=>{"use strict";var o,i,r,t={1588:(o,i,r)=>{const t=window.wp.blocks;var e=r(1609),c=r(7723);const n=window.wp.blockEditor;var a=r(6087),d=r(6427);const g=window.wp.primitives,k=(0,e.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(g.Path,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})),l=(window.wp.data,({rootClientId:o})=>{const i=(0,c.__)("Add Accordion Item","gutenkit-blocks-addon");return(0,e.createElement)(n.Inserter,{rootClientId:o,renderToggle:({onToggle:o})=>(0,e.createElement)(d.Button,{className:"gkit-accordion-appender-button",onClick:()=>{o()},icon:k,iconPosition:"right",showTooltip:!0,"aria-label":i,label:i,variant:"secondary"},i),isAppender:!0})}),s=window.wp.compose,_=(0,a.lazy)((()=>r.e(6036).then(r.bind(r,6036)))),p=JSON.parse('{"UU":"gutenkit/advanced-accordion"}'),{advancedAccordion:b}=window.gutenkit.editorIcon;(0,t.registerBlockType)(p.UU,{edit:function({attributes:o,setAttributes:i,clientId:r,advancedControl:t,isSelected:c}){const{GkitStyle:d,GkitSuspense:g}=window.gutenkit.components,{useDeviceType:k,useBlockStyles:p}=window.gutenkit.helpers,{accordionItems:b,style:u}=o,h=k(),v=(0,a.useRef)(null),y=b.map((()=>["gutenkit/advanced-accordion-item"])),m=(0,n.useBlockProps)({ref:(0,s.useMergeRefs)([v])}),f=(0,n.useInnerBlocksProps)({className:`gkit-accordion ${u}`},{allowedBlocks:["gutenkit/advanced-accordion-item"],renderAppender:!1,template:y});return p(o,i,"blocksCSS",(o=>{const{parseCSS:i,backgroundGenerator:r,getBoxShadowValue:t,getBoxValue:e,getBorderValue:c,getTypographyValue:n,getSliderValue:a,getColor:d}=window.gutenkit.helpers,g=o?.blockClass,k=o.iconBoxBgClose||o.iconBoxBg,l=o.iconBoxBgBeforeClose||o.iconBoxOpenBg,s=o.iconBorderClosed||o.iconBorder,_=o.iconColorOpen||o.iconColor,p=o.iconBoxBgOpen||o.closedIconBg,b=o.iconBoxBgBeforeOpen||o.iconBoxCloseBg,u=o.iconBorderOpen||o.closedIconBorder;return i({desktop:[{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header>.gkit-btn-link`,color:d(o.titleColor)},{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link`,color:d(o.titleColorClose),background:"curve-shape"!==o?.style?r(o?.backgroundClose).background:void 0,...e(o?.borderRadiousClose,"border-radius"),"box-shadow":t(o.boxShadowClose),...c(o?.titleBorderClose),border:"curve-shape"===o?.style&&"initial"},{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link:hover, .${g} .gkit-accordion .gkit-card.active .gkit-card-header>.gkit-btn-link:hover`,color:o.titleColorHover,background:"curve-shape"!==o?.style?r(o?.backgroundHover).background:void 0,...e(o?.borderRadiousHover,"border-radius"),"box-shadow":t(o.boxShadowHover),...c(o?.titleBorderHover),border:"curve-shape"===o?.style&&"initial"},{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link:hover .path, .${g} .gkit-accordion .gkit-card.active .gkit-card-header>.gkit-btn-link:hover .path`,fill:o.curveFillHover,stroke:o.curveStrokeHover},{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header>.gkit-btn-link`,background:"curve-shape"!==o?.style?r(o?.background).background:void 0},{selector:`.${g} .gkit-accordion.curve-shape .gkit-card.active .gkit-card-header>.gkit-btn-link .path`,fill:d(o.curveFillColor),stroke:o.curveStrokeColor},{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link .path`,fill:d(o.curveFillClose),stroke:o.curveStrokeClose},{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header>.gkit-btn-link, \n                .gkit-accordion.curve-shape .gkit-card.active .gkit-card-header>.gkit-btn-link`,...e(o?.borderRadiousCurveShapeOpen,"border-radius"),"box-shadow":t(o.boxShadowOpen),...c(o?.titleBorderOpen),border:"curve-shape"===o?.style&&"initial"},{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link, \n                .gkit-wid-con .gkit-accordion.curve-shape .gkit-card-header > .gkit-btn-link`,...e(o?.titlePaddingDesktop,"padding"),...n(o.titleTypography,"Desktop")},{selector:`.${g} .gkit-accordion > .gkit-card:not(:last-child)`,"margin-bottom":a(o.titleMarginBottomDesktop)},{selector:`.${g} .gkit-accordion .gkit-card-body p, .${g} .gkit-accordion .gkit-card-body`,color:d(o.contentColor),...n(o.contentTypography,"Desktop")},{selector:`.${g} .gkit-accordion .gkit-card-body, .${g} accordion.floating-style .gkit-card-body`,background:r(o?.contentBackground).background},{selector:`.${g} .gkit-accordion .gkit-card-body`,...e(o?.contentBorderRadious,"border-radius"),...e(o?.contentPaddingDesktop,"padding")},{selector:`.${g} .gkit-accordion > .gkit-card.active`,...e(o?.borderRadiousClosed,"border-radius"),"box-shadow":t(o.elementBoxShadowGroupClosed),...c(o?.borderClosed)},{selector:`.${g} .gkit-accordion .gkit-card-header > .gkit-btn-link`,"border-radius":`${o.borderRadiousClosed?.top} ${o.borderRadiousClosed?.right} 0 0`},{selector:`.${g} .gkit-accordion > .gkit-card`,...e(o?.borderRadiousOpen,"border-radius"),"box-shadow":t(o.elementBoxShadowGroup),...c(o?.borderOpen)},{selector:`.${g} .gkit-accordion .gkit-card-header > .gkit-btn-link.collapsed`,...e(o?.borderRadiousOpen,"border-radius")},{selector:`.${g} .gkit-accordion > .gkit-card:last-child`,border:!0===o.lastChildBorderBottom&&"0px"},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_normal_icon, \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_left_group .gkit_accordion_normal_icon`,background:r(k).background,...c(s),...e(o?.iconBorderRadious,"border-radius"),...e(o?.iconPaddingDesktop,"padding")},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_normal_icon,\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_normal_icon`,"font-size":o.iconTypographyCloseDesktop?a(o.iconTypographyCloseDesktop):void 0,fill:d(o.iconColorClose)},{selector:`.${g} .gkit-accordion.accordion-4 .gkit-card-header .gkit-btn-link::before`,background:r(l).background},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_active_icon , \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon`,background:r(p).background,...c(u),...e(o?.iconBorderRadious,"border-radius"),...e(o?.iconPaddingDesktop,"padding")},{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_active_icon,\n                .${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon`,"font-size":o.iconTypographyDesktop?a(o.iconTypographyDesktop):void 0,fill:d(_)},{selector:`.${g} .gkit-accordion.accordion-4 .gkit-card.active .gkit-card-header .gkit-btn-link::before`,background:r(b).background},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_normal_icon:hover, \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_left_group .gkit_accordion_normal_icon:hover`,background:r(o?.iconBoxBgHover).background,...c(o?.iconBorderHover)},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_normal_icon:hover,\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_normal_icon:hover`,"font-size":o.iconTypographyHoverDesktop?a(o.iconTypographyHoverDesktop):void 0,fill:d(o.iconColorHover)},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_active_icon:hover, \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon:hover`,background:r(o?.iconBoxBgHover).background,...c(o?.iconBorderHover)},{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_active_icon:hover,\n                .${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon:hover`,"font-size":o.iconTypographyHoverDesktop?a(o.iconTypographyHoverDesktop):void 0,fill:d(o.iconColorHover)},{selector:`.${g} .gkit-accordion.accordion-4 .gkit-card.active .gkit-card-header .gkit-btn-link:hover::before`,background:r(o?.iconBoxBgBeforeHover).background},{selector:`.${g} .gkit_accordion_icon_group, .${g} .gkit_accordion_icon_left_group`,...e(o.iconMarginDesktop,"margin")}],tablet:[{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link`,...e(o?.titlePaddingTablet,"padding"),...n(o.titleTypography,"Tablet")},{selector:`.${g} .gkit-accordion > .gkit-card:not(:last-child)`,"margin-bottom":a(o.titleMarginBottomTablet)},{selector:`.${g} .gkit-accordion .gkit-card-body`,...e(o?.contentPaddingTablet,"padding")},{selector:`.${g} .gkit-accordion .gkit-card-body p, .${g} .gkit-accordion .gkit-card-body`,...n(o.contentTypography,"Tablet")},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_normal_icon,\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_normal_icon `,"font-size":o.iconTypographyCloseTablet?a(o.iconTypographyCloseTablet):void 0},{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_active_icon,\n                .${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon`,"font-size":o.iconTypographyTablet?a(o.iconTypographyTablet):void 0},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link :is(.gkit_accordion_icon_group, .gkit_accordion_icon_left_group) :is(.gkit_accordion_normal_icon:hover, .gkit_accordion_active_icon:hover)`,"font-size":o.iconTypographyHoverTablet?a(o.iconTypographyHoverTablet)+"!important":void 0},{selector:`.${g} .gkit_accordion_icon_group, .${g} .gkit_accordion_icon_left_group`,...e(o.iconMarginTablet,"margin")},{selector:`\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_normal_icon, \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_left_group .gkit_accordion_normal_icon,\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_active_icon , \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon`,...e(o?.iconPaddingTablet,"padding")}],mobile:[{selector:`.${g} .gkit-accordion .gkit-card-header>.gkit-btn-link`,...e(o?.titlePaddingMobile,"padding"),...n(o.titleTypography,"Mobile")},{selector:`.${g} .gkit-accordion > .gkit-card:not(:last-child)`,"margin-bottom":a(o.titleMarginBottomMobile)},{selector:`.${g} .gkit-accordion .gkit-card-body`,...e(o?.contentPaddingMobile,"padding")},{selector:`.${g} .gkit-accordion .gkit-card-body p, .${g} .gkit-accordion .gkit-card-body`,...n(o.contentTypography,"Mobile")},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_normal_icon,\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_normal_icon`,"font-size":o.iconTypographyCloseMobile?a(o.iconTypographyCloseMobile):void 0},{selector:`.${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_group .gkit_accordion_active_icon,\n                .${g} .gkit-accordion .gkit-card.active .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon`,"font-size":o.iconTypographyMobile?a(o.iconTypographyMobile):void 0},{selector:`.${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link :is(.gkit_accordion_icon_group, .gkit_accordion_icon_left_group) :is(.gkit_accordion_normal_icon:hover, .gkit_accordion_active_icon:hover)`,"font-size":o.iconTypographyHoverMobile?a(o.iconTypographyHoverMobile)+"!important":void 0},{selector:`.${g} .gkit_accordion_icon_group, .${g} .gkit_accordion_icon_left_group`,...e(o?.iconMarginMobile,"margin")},{selector:`\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_normal_icon, \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_left_group .gkit_accordion_normal_icon,\n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link > .gkit_accordion_icon_group .gkit_accordion_active_icon , \n                .${g} .gkit-accordion .gkit-card .gkit-card-header .gkit-btn-link .gkit_accordion_icon_left_group .gkit_accordion_active_icon`,...e(o?.iconPaddingMobile,"padding")}]})})(o)),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(d,{blocksCSS:o?.blocksCSS}),c&&(0,e.createElement)(g,null,(0,e.createElement)(_,{attributes:o,setAttributes:i,device:h,advancedControl:t})),(0,e.createElement)("div",{...m},(0,e.createElement)("div",{...f}),(0,e.createElement)("div",{className:"gkit-accordion-appender"},(0,e.createElement)(l,{rootClientId:r}))))},icon:{src:b},save:function({attributes:o}){const{style:i}=o,r=n.useBlockProps.save(),t=n.useInnerBlocksProps.save({className:`gkit-accordion ${i}`});return(0,e.createElement)("div",{...r},(0,e.createElement)("div",{...t}))}})},1609:o=>{o.exports=window.React},6427:o=>{o.exports=window.wp.components},6087:o=>{o.exports=window.wp.element},7723:o=>{o.exports=window.wp.i18n}},e={};function c(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,c),r.exports}c.m=t,o=[],c.O=(i,r,t,e)=>{if(!r){var n=1/0;for(k=0;k<o.length;k++){for(var[r,t,e]=o[k],a=!0,d=0;d<r.length;d++)(!1&e||n>=e)&&Object.keys(c.O).every((o=>c.O[o](r[d])))?r.splice(d--,1):(a=!1,e<n&&(n=e));if(a){o.splice(k--,1);var g=t();void 0!==g&&(i=g)}}return i}e=e||0;for(var k=o.length;k>0&&o[k-1][2]>e;k--)o[k]=o[k-1];o[k]=[r,t,e]},c.n=o=>{var i=o&&o.__esModule?()=>o.default:()=>o;return c.d(i,{a:i}),i},c.d=(o,i)=>{for(var r in i)c.o(i,r)&&!c.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:i[r]})},c.f={},c.e=o=>Promise.all(Object.keys(c.f).reduce(((i,r)=>(c.f[r](o,i),i)),[])),c.u=o=>o+".js",c.miniCssF=o=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),c.o=(o,i)=>Object.prototype.hasOwnProperty.call(o,i),i={},r="gutenkit-blocks-addon:",c.l=(o,t,e,n)=>{if(i[o])i[o].push(t);else{var a,d;if(void 0!==e)for(var g=document.getElementsByTagName("script"),k=0;k<g.length;k++){var l=g[k];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==r+e){a=l;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",r+e),a.src=o),i[o]=[t];var s=(r,t)=>{a.onerror=a.onload=null,clearTimeout(_);var e=i[o];if(delete i[o],a.parentNode&&a.parentNode.removeChild(a),e&&e.forEach((o=>o(t))),r)return r(t)},_=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),d&&document.head.appendChild(a)}},c.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o;c.g.importScripts&&(o=c.g.location+"");var i=c.g.document;if(!o&&i&&(i.currentScript&&(o=i.currentScript.src),!o)){var r=i.getElementsByTagName("script");if(r.length)for(var t=r.length-1;t>-1&&(!o||!/^http(s?):/.test(o));)o=r[t--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=o+"../../"})(),(()=>{var o={9398:0,8522:0};c.f.j=(i,r)=>{var t=c.o(o,i)?o[i]:void 0;if(0!==t)if(t)r.push(t[2]);else if(8522!=i){var e=new Promise(((r,e)=>t=o[i]=[r,e]));r.push(t[2]=e);var n=c.p+c.u(i),a=new Error;c.l(n,(r=>{if(c.o(o,i)&&(0!==(t=o[i])&&(o[i]=void 0),t)){var e=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;a.message="Loading chunk "+i+" failed.\n("+e+": "+n+")",a.name="ChunkLoadError",a.type=e,a.request=n,t[1](a)}}),"chunk-"+i,i)}else o[i]=0},c.O.j=i=>0===o[i];var i=(i,r)=>{var t,e,[n,a,d]=r,g=0;if(n.some((i=>0!==o[i]))){for(t in a)c.o(a,t)&&(c.m[t]=a[t]);if(d)var k=d(c)}for(i&&i(r);g<n.length;g++)e=n[g],c.o(o,e)&&o[e]&&o[e][0](),o[e]=0;return c.O(k)},r=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))})();var n=c.O(void 0,[8522],(()=>c(1588)));n=c.O(n)})();