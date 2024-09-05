"use strict";(globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[]).push([[6524],{6524:(e,n,o)=>{o.r(n),o.d(n,{default:()=>k});var t=o(1609),l=o(7723),a=o(6087),i=o(6427);const r=[{color:"#72aee6",name:"Blue 20"},{color:"#3582c4",name:"Blue 40"},{color:"#e65054",name:"Red 40"},{color:"#8a2424",name:"Red 70"}];var c=o(5573);const d=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),s=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),u=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),k=(0,a.memo)((({attributes:e,setAttributes:n,device:o,advancedControl:a})=>{const{GkitBoxShadow:c,GkitColor:k,GkitIconPicker:g,GkitPanelBody:m,GkitBoxControl:v,GkitResponsive:b,GkitSwitcher:_,GkitTabs:h,GkitAdvancedUrl:E,GkitChoose:C,GkitSlider:B,GkitBorderControl:w}=window.gutenkit.components,{gkitResponsiveValue:p,responsiveHelper:H}=window.gutenkit.helpers;return(0,t.createElement)(h,{type:"top-level",tabs:[{name:"content",title:(0,l.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,l.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,l.__)("Advanced","gutenkit-blocks-addon")}]},(x=>{switch(x.name){case"content":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(m,{title:(0,l.__)("Icon","gutenkit-blocks-addon"),initialOpen:!0},(0,t.createElement)(g,{label:(0,l.__)("Icon","gutenkit-blocks-addon"),value:e?.icon,onChange:e=>n({icon:e})}),(0,t.createElement)(_,{label:(0,l.__)("Enable Link?","gutenkit-blocks-addon"),value:e?.iconEnableLink,onChange:e=>n({iconEnableLink:e})}),e?.iconEnableLink&&(0,t.createElement)(E,{value:e?.iconWebsiteLink,onChange:e=>n({iconWebsiteLink:e})}),(0,t.createElement)(b,null,(0,t.createElement)(C,{label:(0,l.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,l.__)("Left","gutenkit-blocks-addon"),value:"left",icon:d},{label:(0,l.__)("Center","gutenkit-blocks-addon"),value:"center",icon:s},{label:(0,l.__)("Right","gutenkit-blocks-addon"),value:"right",icon:u}],value:p(e,"iconAlign",o),onChange:e=>H("iconAlign",e,o,n)}))));case"style":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(m,{title:(0,l.__)("Icon","gutenkit-blocks-addon")},(0,t.createElement)(b,null,(0,t.createElement)(B,{label:(0,l.__)("Size","gutenkit-blocks-addon"),values:p(e,"iconSize",o),onChange:e=>H("iconSize",e,o,n),sizeUnits:["px"],range:{min:0,max:200,step:1}})),(0,t.createElement)(B,{label:(0,l.__)("Roate","gutenkit-blocks-addon"),value:e?.iconRoate,onChange:e=>n({iconRoate:e}),sizeUnits:["deg"],range:{min:0,max:360,step:1}}),(0,t.createElement)(h,{type:"normal",tabs:[{name:"normal",title:(0,l.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,l.__)("Hover","gutenkit-blocks-addon")}]},(a=>"normal"===a.name?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(k,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.iconColor,onChange:e=>n({iconColor:e})}),(0,t.createElement)(k,{label:(0,l.__)("Background Color","gutenkit-blocks-addon"),value:e?.iconBgColor,onChange:e=>n({iconBgColor:e})}),(0,t.createElement)(w,{label:(0,l.__)("Border"),colors:r,onChange:e=>n({iconBorder:e}),value:e?.iconBorder}),(0,t.createElement)(b,null,(0,t.createElement)(v,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:p(e,"iconBorderRadius",o),onChange:e=>H("iconBorderRadius",e,o,n),isMinPositiveOnly:!0})),(0,t.createElement)(c,{label:(0,l.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.iconBoxShadow,onChange:e=>n({iconBoxShadow:e})})):"hover"===a.name?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(k,{label:(0,l.__)("Color","gutenkit-blocks-addon"),value:e?.iconHoverColor,onChange:e=>n({iconHoverColor:e})}),(0,t.createElement)(k,{label:(0,l.__)("Background Color","gutenkit-blocks-addon"),value:e?.iconHoverBgColor,onChange:e=>n({iconHoverBgColor:e})}),(0,t.createElement)(w,{label:(0,l.__)("Border"),colors:r,onChange:e=>n({iconHoverBorder:e}),value:e?.iconHoverBorder}),(0,t.createElement)(b,null,(0,t.createElement)(v,{label:(0,l.__)("Border Radius","gutenkit-blocks-addon"),values:p(e,"iconHoverBorderRadius",o),onChange:e=>H("iconHoverBorderRadius",e,o,n),isMinPositiveOnly:!1})),(0,t.createElement)(c,{label:(0,l.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.iconHoverBoxShadow,onChange:e=>n({iconHoverBoxShadow:e})})):void 0)),(0,t.createElement)(i.__experimentalDivider,null),(0,t.createElement)(b,null,(0,t.createElement)(v,{label:(0,l.__)("Padding","gutenkit-blocks-addon"),values:p(e,"iconPadding",o),onChange:e=>H("iconPadding",e,o,n)})),(0,t.createElement)(b,null,(0,t.createElement)(v,{label:(0,l.__)("Margin","gutenkit-blocks-addon"),values:p(e,"iconMargin",o),onChange:e=>H("iconMargin",e,o,n)}))));case"advanced":return(0,t.createElement)(t.Fragment,null,a)}}))}))}}]);