(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3tnz":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a("q1tI"));a("q4sD"),a("8ELX");var n=s(a("JmLH")),d=a("Wbzz");function s(e){return e&&e.__esModule?e:{default:e}}t.default=()=>{const e=(0,d.useStaticQuery)("2593459260"),{allPrismicNewscollection:{edges:t}}=e;return l.default.createElement("div",{className:"row",style:{paddingTop:"3rem",paddingLeft:"8%",paddingRight:"10%",paddingBottom:"2rem"}},t.map(e=>l.default.createElement("div",{className:"col-md-6",key:e.node.id},l.default.createElement(d.Link,{to:"/news/"+e.node.uid,style:{color:"black"}},l.default.createElement("div",{className:"card",style:{border:"none"}},l.default.createElement("div",{className:"card-body"},l.default.createElement("div",{className:"newsListTitleRow"},l.default.createElement("div",{className:"newsListDateTime"},l.default.createElement("h1",{style:{fontWeight:"400"}},e.node.data.date.substring(8,10)),l.default.createElement("p",{style:{fontSize:"11px",fontWeight:"400"}},e.node.data.date.substring(0,7))),l.default.createElement("div",{className:"newsListTitle"},l.default.createElement("p",{style:{fontSize:"15px",paddingBottom:"5px",fontWeight:"560"}},e.node.data.title.text),l.default.createElement("p",{className:"newsListShortDescription"},e.node.data.shortdescription.text),l.default.createElement("div",{className:"newsListArrow"},l.default.createElement("button",{className:"newsListMoreButton"},"查看更多"),l.default.createElement("img",{className:"newsListHalfArrowImg",src:n.default,style:{width:"32px",height:"22px"}}))))),l.default.createElement("div",{className:"newsListUnderline"}))))))}},"8ELX":function(e,t,a){},FJi0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a("q1tI")),n=d(a("MPvn"));function d(e){return e&&e.__esModule?e:{default:e}}class s extends l.default.Component{render(){return l.default.createElement(n.default,null)}}t.default=s},JmLH:function(e,t){e.exports="data:image/png;base64,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"},MPvn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=c(a("q1tI")),n=c(a("17x9")),d=c(a("UswT")),s=c(a("3tnz")),r=c(a("Veah")),A=c(a("B1WW"));function c(e){return e&&e.__esModule?e:{default:e}}class u extends l.default.Component{render(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.default,null),l.default.createElement(d.default,null),l.default.createElement(s.default,null),l.default.createElement(A.default,null))}}u.propTypes={children:n.default.node},t.default=u},UswT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a("q1tI"));a("q4sD");var n=d(a("uihr"));function d(e){return e&&e.__esModule?e:{default:e}}t.default=()=>l.default.createElement("div",{className:"card mb-3",style:{backgroundColor:"rgb(144,36,19)",borderRadius:"0px",border:"none"}},l.default.createElement("div",{className:"row no-gutters"},l.default.createElement("div",{className:"col-md-3 justify-content-center align-self-center",style:{color:"white"}},l.default.createElement("div",{className:"card-body"},l.default.createElement("p",{className:"card-title",style:{fontWeight:600,fontSize:"7.8vw",fontStyle:"italic",marginLeft:"-2.6vw",transform:"scale(1, 1.2)"}},"NEWS"))),l.default.createElement("div",{className:"col-md-3 justify-content-center align-self-center",style:{color:"white"}},l.default.createElement("div",{className:"card-body"},l.default.createElement("h4",{className:"card-title",style:{marginLeft:"-2.6vw"}},"新闻中心"),l.default.createElement("p",{className:"card-text",style:{marginLeft:"-2.6vw"}},"This is a wider card with supporting text below as a natural lead-in to additional content."))),l.default.createElement("div",{className:"col-md-6"},l.default.createElement("img",{src:n.default,className:"card-img",style:{width:"100%",height:"100%"},alt:"..."}))))},q4sD:function(e,t,a){},uihr:function(e,t,a){e.exports=a.p+"static/header-right-6c6a4e81b0e1bb7464fca32471a4a847.png"}}]);
//# sourceMappingURL=component---src-pages-news-js-bb12be93d40307f74599.js.map