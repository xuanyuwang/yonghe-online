(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"nM/0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=void 0;var l=a("q1tI"),n=m(l),r=m(a("Veah")),d=m(a("B1WW")),c=a("vS6h"),u=a("Wbzz");function m(e){return e&&e.__esModule?e:{default:e}}a("nSux");t.query="2135761191";t.default=({data:e})=>{const[t,a]=(0,l.useState)(!1),m=()=>a(!1),s=(e=>{const{mainimage:t}=e,a=[t,...e.subimages.map(e=>e.image)],[r,d]=(0,l.useState)(t.url),u=a.filter(e=>e.url!==r.url),m=e=>{if(u.length>e){const t=u[e].url;return n.default.createElement(c.Image,{src:t,onClick:()=>{d(t)}})}};return(0,l.useEffect)(()=>{const e=document.getElementsByClassName("product-details-container")[0],t=document.getElementsByClassName("product-detail-mainImage")[0];e.style.height=t.getClientRects()[0].width+"px"}),n.default.createElement(c.Container,{className:"product-detail-images"},n.default.createElement(c.Row,{className:"product-details-container"},n.default.createElement(c.Col,{className:"product-detail-mainImage",sm:9,xs:9},n.default.createElement(c.Image,{src:r})),n.default.createElement(c.Col,{className:"product-detail-thumbnails",sm:3,xs:3},n.default.createElement("div",{className:"layout-wrapper"},n.default.createElement("div",{className:"first-thumbnails"},m(0)),n.default.createElement("div",{className:"second-thumbnails"},m(1)),n.default.createElement("div",{className:"third-thumbnails"},m(2)),n.default.createElement("div",{className:"forth-thumbnails"},m(3))))))})(e.product.data);return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.default,null),n.default.createElement("div",{className:"productDetailsSection"},n.default.createElement(c.Container,{style:{paddingBottom:"3rem"}},n.default.createElement(c.Row,null,n.default.createElement(c.Breadcrumb,null,n.default.createElement(c.Breadcrumb.Item,{linkAs:u.Link,linkProps:{to:"/platform"}},"甄品商城首页"),n.default.createElement(c.Breadcrumb.Item,{linkAs:u.Link,linkProps:{to:"/platform/product-list-"+e.product.data.categoryid}},"列表页"),n.default.createElement(c.Breadcrumb.Item,{active:!0},"商品详情页"))),n.default.createElement(c.Row,{style:{paddingBottom:"3.5rem"}},n.default.createElement(c.Col,{style:{paddingLeft:"0"},md:7},s),n.default.createElement(c.Col,{xs:10,sm:10,md:5},n.default.createElement("div",{className:"productDetailsStyle"},n.default.createElement("p",{style:{fontSize:"calc(18px + 0.4vw)"}},e.product.data.productname.text),n.default.createElement("p",{className:"pStyle"},"商品编号：",e.product.data.productid.text),n.default.createElement("p",{className:"pStyle"},"尺寸大小： ",e.product.data.productsize.text),n.default.createElement("p",{className:"pStyle"},"年份：",e.product.data.productyearinfo.text),n.default.createElement("p",{className:"pStyle"},"藏品描述：",e.product.data.productdescription.text),n.default.createElement("br",null),n.default.createElement("p",{className:"pStyle"},n.default.createElement(c.Button,{onClick:()=>a(!0),style:{backgroundColor:"black",color:"white",borderColor:"black",boxShadow:"none"}},"查看征信报告")),n.default.createElement(c.Modal,{show:t,centered:!0,onHide:m,animation:!1},n.default.createElement(c.Carousel,{interval:null,indicators:!1,nextIcon:n.default.createElement("span",{"aria-hidden":"true",className:"nextArrowIconStyle"}),prevIcon:n.default.createElement("span",{"aria-hidden":"true",className:"prevArrowIconStyle"})},e.product.data.qualificationimages.map(e=>n.default.createElement(c.Carousel.Item,{className:"slideW",key:e.qualificationimageid},n.default.createElement("img",{src:e.qualificationimage.url,style:{width:"100%",height:"auto"},onClick:m,alt:"no image"})))))))))),n.default.createElement(d.default,null))}},nSux:function(e,t,a){}}]);
//# sourceMappingURL=component---src-components-product-details-product-details-js-1ee38f589494f48ad2b4.js.map