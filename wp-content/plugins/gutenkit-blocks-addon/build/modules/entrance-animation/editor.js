(()=>{var t={6942:(t,e)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=r(t,o(n)))}return t}function o(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)i.call(t,n)&&t[n]&&(e=r(e,n));return e}function r(t,e){return e?t?t+" "+e:t+e:t}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.React,e=window.wp.hooks,i=window.wp.compose,a=window.wp.element;var o=n(6942),r=n.n(o);const l=t=>{if(t?.target?.hasAttribute("data-motion-effects")){let e=JSON.parse(t.target.getAttribute("data-motion-effects"));t.target.classList.forEach((n=>{"animate__animated"!==n&&n.includes("animate__")&&e?.className!==n&&t.target.classList.remove(n)}));let n="infinite"===e?.loop||!0===e?.loop?"infinite":"1";t.target.classList.add(e?.className),t.target.style.animationDuration=`${e?.speed}ms`,t.target.style.animationDelay=`${e?.delay}ms`,t.target.style.animationIterationCount=n,t.target.style.animationDirection=e?.direction}},c=window.wp.i18n,s=(0,i.createHigherOrderComponent)((e=>n=>{const{useDeviceType:i,onScrollAnimateIframe:o}=window?.gutenkit?.helpers,r=i(),{entranceAnimation:c,AnimationDirection:s,loopAnimation:u}=n?.attributes;return n?.name?.includes("gutenkit")&&(0,a.useEffect)((()=>{n?.attributes?.entranceAnimation&&o(".gkit-motion-effects",l)}),[c,s,u,r]),(0,t.createElement)(e,{...n})}),"EntranceAnimationEdit");(0,e.addFilter)("blocks.registerBlockType","gutenkit/entranceAnimation/attributes",((t,e)=>(e.includes("gutenkit")&&(t.attributes={...t.attributes,entranceAnimation:{type:"object"},loopAnimation:{type:"boolean",default:!1},AnimationDirection:{type:"string",default:"normal"}}),t)),10),(0,e.addFilter)("gutenkit.motionEffects.after-tab","gutenkit/entranceAnimation/controls",(e=>n=>{const{GkitAnimation:i,GkitSwitcher:a,GkitSelect:o}=window.gutenkit.components,{attributes:r,setAttributes:l}=n;return(0,t.createElement)(e,{...n},(0,t.createElement)(i,{label:(0,c.__)("Entrance Animation","gutenkit-blocks-addon"),value:r?.entranceAnimation,onChange:t=>{l({entranceAnimation:{effect:t?.effect,speed:t?.speed,delay:t?.delay}})}}),null!==r?.entranceAnimation?.effect&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{label:(0,c.__)("Loop Animation","gutenkit-blocks-addon"),value:r?.loopAnimation,onChange:t=>{l({loopAnimation:t})}}),(0,t.createElement)(o,{label:(0,c.__)("Animation Direction","gutenkit-blocks-addon"),value:r?.AnimationDirection,options:[{label:(0,c.__)("Default","gutenkit-blocks-addon"),value:"normal"},{label:(0,c.__)("Reverse ","gutenkit-blocks-addon"),value:"reverse "},{label:(0,c.__)("Alternate","gutenkit-blocks-addon"),value:"alternate"}],onChange:t=>{l({AnimationDirection:t})}})),n.children)}),10),(0,e.addFilter)("gutenkit.blockWrapper.attributes","gutenkit/entranceAnimation/blockWrapper",((t,e)=>{const n={...t,className:r()(t.className,{"gkit-motion-effects animate__animated":e?.entranceAnimation?.effect})};return e?.entranceAnimation?.effect&&(n["data-motion-effects"]=JSON.stringify({className:`animate__${e?.entranceAnimation?.effect?.value}`,speed:e?.entranceAnimation?.speed,delay:e?.entranceAnimation?.delay,loop:e?.loopAnimation,direction:e?.AnimationDirection})),n}),10),(0,e.addFilter)("editor.BlockEdit","gutenkit/entranceAnimation/edit",s,10)})()})();