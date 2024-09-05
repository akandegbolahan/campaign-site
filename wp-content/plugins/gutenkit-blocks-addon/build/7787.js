"use strict";(globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[]).push([[7787],{168:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var l=n(1609),a=n(7723),o=n(1455),i=n.n(o),r=n(6087),c=n(5573);const d=(0,l.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(c.Path,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})),m=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"m12 20-4.5-3.6-.9 1.2L12 22l5.5-4.4-.9-1.2L12 20zm0-16 4.5 3.6.9-1.2L12 2 6.5 6.4l.9 1.2L12 4z"})),u=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),g=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),s=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),b=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})),k=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),v=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})),_=({attributes:e,setAttributes:t,device:n,advancedControl:o})=>{const{GkitBoxShadow:c,GkitColor:_,GkitPanelBody:h,GkitResponsive:C,GkitSwitcher:E,GkitTabs:p,GkitTypography:w,GkitBackgrounGroup:B,GkitChoose:x,GkitSlider:T,GkitComplexSelectAsync:y,GkitBoxControl:H,GkitBorderControl:A,GkitNumber:G,GkitSelect:S}=window.gutenkit.components,{gkitResponsiveValue:V,useFontFamilyinBlock:P,responsiveHelper:f,boxControlUnit:M}=window.gutenkit.helpers,[R,z]=(0,r.useState)([{name:"normal-tab",title:(0,a.__)("Normal","gutenkit-blocks-addon")},{name:"active-tab",title:(0,a.__)("Active","gutenkit-blocks-addon")}]);(0,r.useEffect)((()=>{"click"===e?.eventType&&z([{name:"normal-tab",title:(0,a.__)("Normal","gutenkit-blocks-addon")},{name:"hover-tab",title:(0,a.__)("Hover","gutenkit-blocks-addon")},{name:"active-tab",title:(0,a.__)("Active","gutenkit-blocks-addon")}])}),[e?.eventType]),P([e?.itemTypography,e?.titleTypography]);const Z=e=>i()({path:`/wp/v2/categories/?search=${e}`}).then((e=>e.map((e=>({label:e?.name,value:e?.id}))))).catch((e=>{console.error(e)}));return(0,l.createElement)(p,{type:"top-level",tabs:[{name:"content",title:(0,a.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,a.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,a.__)("Advanced","gutenkit-blocks-addon")}]},(i=>"content"===i.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(h,{title:(0,a.__)("Settings","gutenkit-blocks-addon"),initialOpen:!0},(0,l.createElement)(y,{label:(0,a.__)("Select Catagories","gutenkit-blocks-addon"),options:Z,cacheOptions:!0,defaultOptions:!0,isMulti:!0,value:e.selectedCatagories,onChange:e=>t({selectedCatagories:e})}),(0,l.createElement)(G,{label:(0,a.__)("Post Count","gutenkit-blocks-addon"),value:e.postCount,onChange:e=>t({postCount:Number(e)}),labelPosition:"side",min:0,max:100,step:1}),(0,l.createElement)(E,{label:(0,a.__)("Crop Title by Words","gutenkit-blocks-addon"),value:e?.enableCropTitle,onChange:e=>t({enableCropTitle:e})}),e.enableCropTitle&&(0,l.createElement)(G,{label:(0,a.__)("Number of Words","gutenkit-blocks-addon"),value:e.numberOfWordsTitle,onChange:e=>t({numberOfWordsTitle:Number(e)}),labelPosition:"side",min:1,max:100,step:1}),(0,l.createElement)(C,null,(0,l.createElement)(S,{label:(0,a.__)("Select Column","gutenkit-blocks-addon"),options:[{label:(0,a.__)("2 Column","gutenkit-blocks-addon"),value:"50%"},{label:(0,a.__)("3 Column","gutenkit-blocks-addon"),value:"33.33%"},{label:(0,a.__)("4 Column","gutenkit-blocks-addon"),value:"25%"},{label:(0,a.__)("5 Column","gutenkit-blocks-addon"),value:"20%"},{label:(0,a.__)("6 Column","gutenkit-blocks-addon"),value:"16.66%"}],value:V(e,"selectColumn",n),onChange:e=>f("selectColumn",e,n,t)}))),(0,l.createElement)(h,{title:(0,a.__)("Nav","gutenkit-blocks-addon")},(0,l.createElement)(x,{label:(0,a.__)("Mouse Event","gutenkit-blocks-addon"),value:e?.eventType,options:[{label:(0,a.__)("Hover","gutenkit-blocks-addon"),value:"mouseenter"},{label:(0,a.__)("Click","gutenkit-blocks-addon"),value:"click"}],onChange:e=>t({eventType:e}),isToggle:!1}),"click"===e.eventType&&(0,l.createElement)(E,{label:(0,a.__)("Link Archive?","gutenkit-blocks-addon"),value:e?.linkArchive,onChange:e=>t({linkArchive:e})}),(0,l.createElement)(C,null,(0,l.createElement)(x,{label:(0,a.__)("Tab Position","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Horizontal","gutenkit-blocks-addon"),value:"horizontal",icon:d},{label:(0,a.__)("Vertical","gutenkit-blocks-addon"),value:"vertical",icon:m}],value:V(e,"tabPosition",n),onChange:e=>f("tabPosition",e,n,t),isToggle:!1})),"horizontal"===V(e,"tabPosition",n)&&(0,l.createElement)(C,null,(0,l.createElement)(x,{label:(0,a.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Left","gutenkit-blocks-addon"),value:"flex-start",icon:u},{label:(0,a.__)("Center","gutenkit-blocks-addon"),value:"center",icon:g},{label:(0,a.__)("Right","gutenkit-blocks-addon"),value:"flex-end",icon:s}],value:V(e,"tabAlignment",n),onChange:e=>f("tabAlignment",e,n,t)})),"vertical"===V(e,"tabPosition",n)&&(0,l.createElement)(C,null,(0,l.createElement)(x,{label:(0,a.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Top","gutenkit-blocks-addon"),value:"flex-start",icon:b},{label:(0,a.__)("Center","gutenkit-blocks-addon"),value:"center",icon:k},{label:(0,a.__)("Bottom","gutenkit-blocks-addon"),value:"flex-end",icon:v}],value:V(e,"tabJustify",n),onChange:e=>f("tabJustify",e,n,t)})))):"style"===i.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(h,{title:(0,a.__)("Tab Item Container","gutenkit-blocks-addon"),initialOpen:!0},(0,l.createElement)(A,{label:(0,a.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({tabContainerBorder:e}),value:e?.tabContainerBorder}),(0,l.createElement)(B,{onChange:e=>t({tabContainerBackground:e}),value:e?.tabContainerBackground,exclude:{video:!0,image:!0}}),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:V(e,"tabContainerPadding",n),onChange:e=>f("tabContainerPadding",e,n,t)})),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:V(e,"tabContainerMargin",n),onChange:e=>f("tabContainerMargin",e,n,t)}))),(0,l.createElement)(h,{title:(0,a.__)("Tab Item","gutenkit-blocks-addon")},(0,l.createElement)(w,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:e?.itemTypography,onChange:e=>t({itemTypography:e})}),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:V(e,"itemPadding",n),onChange:e=>f("itemPadding",e,n,t)})),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:V(e,"itemMargin",n),onChange:e=>f("itemMargin",e,n,t)})),(0,l.createElement)(p,{type:"normal",tabs:R},(o=>"normal-tab"===o.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_,{label:(0,a.__)("Text Color","gutenkit-blocks-addon"),onChange:e=>t({itemTextColor:e}),value:e?.itemTextColor}),(0,l.createElement)(B,{onChange:e=>t({itemBgColor:e}),value:e?.itemBgColor,exclude:{video:!0,image:!0}}),(0,l.createElement)(A,{label:(0,a.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({itemBorder:e}),value:e?.itemBorder}),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),units:M,values:V(e,"itemBorderRadius",n),onChange:e=>f("itemBorderRadius",e,n,t)})),(0,l.createElement)(c,{value:e?.itemShadow,onChange:e=>t({itemShadow:e})})):"hover-tab"===o.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_,{label:(0,a.__)("Text Color","gutenkit-blocks-addon"),onChange:e=>t({itemHoverColor:e}),value:e?.itemHoverColor}),(0,l.createElement)(B,{onChange:e=>t({itemHoverBgColor:e}),value:e?.itemHoverBgColor,exclude:{video:!0,image:!0}}),(0,l.createElement)(A,{label:(0,a.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({itemHoverBorder:e}),value:e?.itemHoverBorder}),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),units:M,values:V(e,"itemHoverBorderRadius",n),onChange:e=>f("itemHoverBorderRadius",e,n,t)})),(0,l.createElement)(c,{value:e?.itemHoverShadow,onChange:e=>t({itemHoverShadow:e})})):"active-tab"===o.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_,{label:(0,a.__)("Text Color","gutenkit-blocks-addon"),onChange:e=>t({itemActiveColor:e}),value:e?.itemActiveColor}),(0,l.createElement)(B,{onChange:e=>t({itemActiveBgColor:e}),value:e?.itemActiveBgColor,exclude:{video:!0,image:!0}}),(0,l.createElement)(A,{label:(0,a.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({itemActiveBorder:e}),value:e?.itemActiveBorder}),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),units:M,values:V(e,"itemActiveBorderRadius",n),onChange:e=>f("itemActiveBorderRadius",e,n,t)})),(0,l.createElement)(c,{value:e?.itemActiveShadow,onChange:e=>t({itemActiveShadow:e})})):void 0))),(0,l.createElement)(h,{title:(0,a.__)("Tab Content","gutenkit-blocks-addon")},(0,l.createElement)(C,null,(0,l.createElement)(x,{label:(0,a.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,a.__)("Left","gutenkit-blocks-addon"),value:"left",icon:u},{label:(0,a.__)("Center","gutenkit-blocks-addon"),value:"center",icon:g},{label:(0,a.__)("Right","gutenkit-blocks-addon"),value:"right",icon:s}],value:V(e,"contentAlignment",n),onChange:e=>f("contentAlignment",e,n,t)}))),(0,l.createElement)(h,{title:(0,a.__)("Image","gutenkit-blocks-addon")},(0,l.createElement)(E,{label:(0,a.__)("Disable Hover Effect","gutenkit-blocks-addon"),value:e?.disableHoverEffect,onChange:e=>t({disableHoverEffect:e})}),(0,l.createElement)(C,null,(0,l.createElement)(T,{label:(0,a.__)("Width","gutenkit-blocks-addon"),value:V(e,"imageWidth",n),onChange:e=>f("imageWidth",e,n,t),sizeUnits:["px","%"],range:{max:500}})),(0,l.createElement)(C,null,(0,l.createElement)(T,{label:(0,a.__)("Height","gutenkit-blocks-addon"),value:V(e,"imageHeight",n),onChange:e=>f("imageHeight",e,n,t),sizeUnits:["px","%"],range:{max:500}}))),(0,l.createElement)(h,{title:(0,a.__)("Title","gutenkit-blocks-addon")},(0,l.createElement)(w,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:e?.titleTypography,onChange:e=>t({titleTypography:e})}),(0,l.createElement)(_,{label:(0,a.__)("Color","gutenkit-blocks-addon"),onChange:e=>t({titleColor:e}),value:e?.titleColor}),(0,l.createElement)(_,{label:(0,a.__)("Hover Color","gutenkit-blocks-addon"),onChange:e=>t({titleHoverColor:e}),value:e?.titleHoverColor}),(0,l.createElement)(C,null,(0,l.createElement)(H,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:V(e,"titleMargin",n),onChange:e=>f("titleMargin",e,n,t)})))):"advanced"===i.name?o:void 0))}}}]);