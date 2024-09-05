"use strict";(globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[]).push([[3834],{3834:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(1609),o=a(7723),i=a(6087),n=a(6427),c=a(5573);const d=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),r=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),k=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),g=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(c.Path,{d:"M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"})),m=(0,i.memo)((({attributes:e,setAttributes:t,device:a,advancedControl:i})=>{const{GkitTabs:c,GkitPanelBody:m,GkitSwitcher:s,GkitChoose:u,GkitSlider:_,GkitBoxShadow:b,GkitColor:S,GkitTypography:h,GkitResponsive:v,GkitIconPicker:E,GkitRepeater:p,GkitAdvancedUrl:C,GkitBoxControl:x,GkitBorderControl:w,GkitSelect:B,GkitBlockStylePreview:H,GkitBackgrounGroup:y,GkitText:I}=window.gutenkit.components,{gkitResponsiveValue:L,useFontFamilyinBlock:G,responsiveHelper:T}=window.gutenkit.helpers;return G([e?.gkitSocialmediaListTypography]),(0,l.createElement)(c,{type:"top-level",tabs:[{name:"content",title:(0,o.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,o.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,o.__)("Advanced","gutenkit-blocks-addon")}]},(G=>{switch(G.name){case"content":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m,{title:(0,o.__)("Social Icons","gutenkit-blocks-addon"),initialOpen:!0},(0,l.createElement)(H,{label:(0,o.__)("Select Style","gutenkit-blocks-addon"),value:e?.gkitSocialmediaStyle,options:[{label:(0,o.__)("Icon","gutenkit-blocks-addon"),value:"icon",attributes:{gkitSocialmediaStyle:"icon"}},{label:(0,o.__)("Text","gutenkit-blocks-addon"),value:"text",attributes:{gkitSocialmediaStyle:"text"}},{label:(0,o.__)("Icon And Text","gutenkit-blocks-addon"),title:(0,o.__)("Icon And Text Both","gutenkit-blocks-addon"),value:"both",attributes:{gkitSocialmediaStyle:"both"}}],onChange:e=>t({gkitSocialmediaStyle:e})}),(0,l.createElement)(n.__experimentalDivider,null),(0,l.createElement)(v,null,(0,l.createElement)(_,{label:(0,o.__)("Space Between","gutenkit-blocks-addon"),value:L(e,"gkitSocialmediaElementSpacing",a),onChange:e=>T("gkitSocialmediaElementSpacing",e,a,t),sizeUnits:["px"]})),"both"===e?.gkitSocialmediaStyle&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(B,{label:(0,o.__)("Icon Position","gutenkit-blocks-addon"),value:e?.gkitSocialmediaStyleIconPosition,options:[{label:(0,o.__)("Before","gutenkit-blocks-addon"),value:"before"},{label:(0,o.__)("After","gutenkit-blocks-addon"),value:"after"}],onChange:e=>t({gkitSocialmediaStyleIconPosition:e}),__nextHasNoMarginBottom:!0}),(0,l.createElement)(v,null,(0,l.createElement)(_,{label:(0,o.__)("Icon Space Between","gutenkit-blocks-addon"),value:L(e,"gkitSocialmediaIconSpacing",a),onChange:e=>T("gkitSocialmediaIconSpacing",e,a,t),sizeUnits:["px"]}))),(0,l.createElement)(v,null,(0,l.createElement)(u,{label:(0,o.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Start","gutenkit-blocks-addon"),value:"flex-start",icon:d},{label:(0,o.__)("Center","gutenkit-blocks-addon"),value:"center",icon:r},{label:(0,o.__)("End","gutenkit-blocks-addon"),value:"flex-end",icon:k},{label:(0,o.__)("Space between","gutenkit-blocks-addon"),value:"space-between",icon:g}],onChange:e=>T("gkitSocialmediaListAlign",e,a,t),value:L(e,"gkitSocialmediaListAlign",a),isToggle:!1})),(0,l.createElement)(n.__experimentalDivider,null),(0,l.createElement)(n.__experimentalHeading,null,(0,o.__)("Icons","gutenkit-blocks-addon")),(0,l.createElement)(p,{onChange:e=>t({gkitSocialmediaIcons:e}),itemLabelName:"gkitSocialmediaLabel",repeaterFields:e?.gkitSocialmediaIcons},(0,l.createElement)(E,{label:(0,o.__)("Choose Icon","gutenkit-blocks-addon"),name:"gkitSocialmediaIcon",default:{title:"facebook-f",src:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>'}}),(0,l.createElement)(I,{label:(0,o.__)("Label","gutenkit-blocks-addon"),name:"gkitSocialmediaLabel",default:"Facebook",labelBlock:"block"}),(0,l.createElement)(C,{label:(0,o.__)("Link","gutenkit-blocks-addon"),name:"gkitSocialmediaLink",default:{url:"https://facebook.com"}}),(0,l.createElement)(n.__experimentalDivider,null),(0,l.createElement)(n.__experimentalHeading,null,(0,o.__)("Normal Style","gutenkit-blocks-addon")),(0,l.createElement)(S,{label:(0,o.__)("Color","gutenkit-blocks-addon"),name:"gkitSocialmediaIconColor"}),(0,l.createElement)(S,{label:(0,o.__)("Background Color","gutenkit-blocks-addon"),name:"gkitSocialmediaIconBgColor"}),(0,l.createElement)(S,{label:(0,o.__)("Border Color","gutenkit-blocks-addon"),name:"gkitSocialmediaBorderColor"}),(0,l.createElement)(n.__experimentalDivider,null),(0,l.createElement)(n.__experimentalHeading,null,(0,o.__)("Hover Style","gutenkit-blocks-addon")),(0,l.createElement)(S,{label:(0,o.__)("Color","gutenkit-blocks-addon"),name:"gkitSocialmediaIconHoverColor"}),(0,l.createElement)(S,{label:(0,o.__)("Background Color","gutenkit-blocks-addon"),name:"gkitSocialmediaIconHoverBgColor"}),(0,l.createElement)(S,{label:(0,o.__)("Border Color","gutenkit-blocks-addon"),name:"gkitSocialmediaBorderHoverColor"}))));case"style":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m,{title:(0,o.__)("Social Media","gutenkit-blocks-addon"),initialOpen:!0},(0,l.createElement)(v,null,(0,l.createElement)(u,{label:(0,o.__)("Display","gutenkit-blocks-addon"),value:L(e,"gkitSocialmediaListDisplay",a),options:[{label:(0,o.__)("Inline","gutenkit-blocks-addon"),value:"row"},{label:(0,o.__)("Block","gutenkit-blocks-addon"),value:"column"}],onChange:e=>T("gkitSocialmediaListDisplay",e,a,t),isToggle:!1})),"text"!==e?.gkitSocialmediaStyle&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v,null,(0,l.createElement)(_,{label:(0,o.__)("Icon Size","gutenkit-blocks-addon"),value:L(e,"gkitSocialmediaListIconSize",a),onChange:e=>T("gkitSocialmediaListIconSize",e,a,t),sizeUnits:["px","%"]}))),"icon"!==e?.gkitSocialmediaStyle&&(0,l.createElement)(h,{label:(0,o.__)("Typography","gutenkit-blocks-addon"),value:e?.gkitSocialmediaListTypography,onChange:e=>t({gkitSocialmediaListTypography:e})}),"icon"===e?.gkitSocialmediaStyle&&(0,l.createElement)(s,{label:(0,o.__)("Use Height Width","gutenkit-blocks-addon"),value:e?.useHeightAndWidth,onChange:e=>t({useHeightAndWidth:e})}),!0===e?.useHeightAndWidth&&"icon"===e?.gkitSocialmediaStyle&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v,null,(0,l.createElement)(_,{label:(0,o.__)("Width","gutenkit-blocks-addon"),value:L(e,"gkitSocialmediaListWidth",a),onChange:e=>T("gkitSocialmediaListWidth",e,a,t),sizeUnits:["px","%"],range:{min:0,max:200}})),(0,l.createElement)(v,null,(0,l.createElement)(_,{label:(0,o.__)("Height","gutenkit-blocks-addon"),value:L(e,"gkitSocialmediaListHeight",a),onChange:e=>T("gkitSocialmediaListHeight",e,a,t),sizeUnits:["px","%"],range:{min:0,max:200}}))),(0,l.createElement)(c,{type:"normal",tabs:[{name:"normal-tab",title:(0,o.__)("Normal","gutenkit-blocks-addon")},{name:"hover-tab",title:(0,o.__)("Hover","gutenkit-blocks-addon")}]},(i=>"normal-tab"===i.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(S,{label:(0,o.__)("Color","gutenkit-blocks-addon"),value:e?.gkitSocialIconNomalColor,onChange:e=>t({gkitSocialIconNomalColor:e})}),(0,l.createElement)(y,{label:(0,o.__)("Background","gutenkit-blocks-addon"),value:e?.gkitSocialIconNomalBackgroundColor,onChange:e=>t({gkitSocialIconNomalBackgroundColor:e}),exclude:{video:!0,image:!0}}),(0,l.createElement)(w,{label:(0,o.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({gkitSocialmediaBorder:e}),value:e?.gkitSocialmediaBorder}),(0,l.createElement)(v,null,(0,l.createElement)(x,{label:(0,o.__)("Border Radius","gutenkit-blocks-addon"),values:L(e,"gkitSocialmediaListBorderRadius",a),onChange:e=>T("gkitSocialmediaListBorderRadius",e,a,t)})),(0,l.createElement)(b,{label:(0,o.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialmediaBoxShadow,onChange:e=>t({gkitSocialmediaBoxShadow:e})}),"icon"!==e?.gkitSocialmediaStyle&&(0,l.createElement)(b,{label:(0,o.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialmediaTextShadow,onChange:e=>t({gkitSocialmediaTextShadow:e}),exclude:{position:!0,spread:!0}})):"hover-tab"===i.name?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(S,{label:(0,o.__)("Color","gutenkit-blocks-addon"),value:e?.gkitSocialIconHoverColor,onChange:e=>t({gkitSocialIconHoverColor:e})}),(0,l.createElement)(y,{label:(0,o.__)("Background","gutenkit-blocks-addon"),value:e?.gkitSocialIconHoverBackgroundColor,onChange:e=>t({gkitSocialIconHoverBackgroundColor:e}),exclude:{video:!0,image:!0}}),(0,l.createElement)(w,{label:(0,o.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({gkitSocialmediaBorderHover:e}),value:e?.gkitSocialmediaBorderHover}),(0,l.createElement)(v,null,(0,l.createElement)(x,{label:(0,o.__)("Border Radius","gutenkit-blocks-addon"),values:L(e,"gkitSocialmediaListBorderRadiusHover",a),onChange:e=>T("gkitSocialmediaListBorderRadiusHover",e,a,t)})),(0,l.createElement)(b,{label:(0,o.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialmediaBoxShadowHover,onChange:e=>t({gkitSocialmediaBoxShadowHover:e})}),"icon"!==e?.gkitSocialmediaStyle&&(0,l.createElement)(b,{label:(0,o.__)("Text Shadow","gutenkit-blocks-addon"),value:e?.gkitSocialmediaTextShadowHover,onChange:e=>t({gkitSocialmediaTextShadowHover:e}),exclude:{position:!0,spread:!0}})):void 0)),!1===e?.useHeightAndWidth&&"icon"===e?.gkitSocialmediaStyle&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.__experimentalDivider,null),(0,l.createElement)(v,null,(0,l.createElement)(x,{label:(0,o.__)("Padding","gutenkit-blocks-addon"),values:L(e,"gkitSocialmediaIconPadding",a),onChange:e=>T("gkitSocialmediaIconPadding",e,a,t)}))),"icon"!==e?.gkitSocialmediaStyle&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.__experimentalDivider,null),(0,l.createElement)(v,null,(0,l.createElement)(x,{label:(0,o.__)("Padding","gutenkit-blocks-addon"),values:L(e,"gkitSocialmediaListPadding",a),onChange:e=>T("gkitSocialmediaListPadding",e,a,t)})))));case"advanced":return(0,l.createElement)(l.Fragment,null,i)}}))}))}}]);