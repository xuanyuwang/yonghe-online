(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5eIs":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a("q1tI")),n=s(a("7vrA")),r=a("Wbzz");function s(e){return e&&e.__esModule?e:{default:e}}a("HJ1d");const i=0,o=1,d=2,u=(e,t,a)=>{const n="style-"+t,r=l.default.createElement("div",{className:"info-card"},l.default.createElement("div",{className:"info-title"},e.info_title),l.default.createElement("div",{className:"info-date"},e.info_date),l.default.createElement("div",{className:"info-content"},e.info_content)),s=l.default.createElement("div",{className:"info-card-decoration"},l.default.createElement("img",{src:a}));let u;return t===i?u=l.default.createElement(l.default.Fragment,null,r,s):t===o?u=l.default.createElement(l.default.Fragment,null,s,r):t===d&&(u=l.default.createElement(l.default.Fragment,null,s,l.default.createElement("div",{className:"info-card"},l.default.createElement("div",{className:"card-title-section"},l.default.createElement("div",null,l.default.createElement("div",{className:"info-title"},e.info_title),l.default.createElement("div",{className:"info-date"},e.info_date)),l.default.createElement("div",{className:"left-quote"},"“")),l.default.createElement("div",{className:"info-content"},e.info_content)))),l.default.createElement("div",{className:"field-info-card "+n},l.default.createElement("div",{className:"card-inner-container"},u))};t.default=()=>{const e=(0,r.useStaticQuery)("3755076797"),t=e.allPrismicFieldinfoblock.edges,a=e.prismicFieldinfopage,s=a.data.background_01,c=a.data.background_02,m=a.data.field_info_group.map(e=>e.field_info_block.id).map(e=>t.filter(t=>t.node.prismicId===e)[0].node.data);let f=null;if(m.length%2==1){const e=m.pop();f=u(e,d,s.url)}const p=[i,o,o,i],g=m.map((e,t)=>{const a=p[t%p.length],l=0===a?c.url:s.url;return u(e,a,l)});return l.default.createElement(n.default,{className:"field-info-body-container"},l.default.createElement("div",{className:"field-info-columns"},g,f))}},"7F2E":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a("q1tI")),n=r(a("YSoz"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=()=>l.default.createElement(n.default,null)},B1WW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a("q1tI"));a("X6Dx");var n=i(a("aE3/")),r=a("vS6h"),s=i(a("XfFC"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=()=>l.default.createElement("div",{className:"main-footer"},l.default.createElement("div",{className:"footer-middle",style:{paddingLeft:"11%",paddingRight:"11%"}},l.default.createElement(r.Row,{className:"justify-content-center"},l.default.createElement(r.Col,{xs:4,sm:3,md:2,lg:2,style:{marginLeft:"auto",marginRight:"auto"}},l.default.createElement("p",{style:{fontSize:"0.75rem"}},"企业微信"),l.default.createElement(r.Image,{src:n.default,style:{width:"115px",height:"auto"},alt:"logo"}),l.default.createElement("br",null),l.default.createElement("br",null)),l.default.createElement(r.Col,{xs:4,sm:3,md:2,lg:2,style:{marginLeft:"auto",marginRight:"auto"}},l.default.createElement("p",{style:{fontSize:"0.75rem"}},"客户端下载"),l.default.createElement(r.Image,{src:n.default,style:{width:"115px",height:"auto"},alt:"logo"}),l.default.createElement("br",null),l.default.createElement("br",null)),l.default.createElement(r.Col,{xs:10,sm:6,md:4,lg:3,style:{marginLeft:"auto",marginRight:"auto"}},l.default.createElement("ul",{className:"list-unstyled"},l.default.createElement("br",null),l.default.createElement("h4",null,"联系我们"),l.default.createElement("h4",{style:{paddingBottom:"0.8rem"}},"010-5368-4565"),l.default.createElement("li",null,"地址：北京市东城区雍和文化艺术中心"),l.default.createElement("li",null,"邮编：100010"),l.default.createElement("li",null,"电话：010-5368-4565"),l.default.createElement("br",null))),l.default.createElement(r.Col,{xs:10,sm:10,md:8,lg:4,style:{paddingBottom:"2rem",marginLeft:"auto",marginRight:"auto"}},l.default.createElement("p",{style:{fontSize:"0.75rem"}},"请在此处留下您的宝贵意见"),l.default.createElement(s.default,null)))),l.default.createElement("div",{className:"card-footer text-muted",style:{backgroundColor:"rgb(47,50,59)"}},l.default.createElement("p",{className:"text-xs-center",style:{fontSize:"0.78rem",textAlign:"center"}},"Copyright©",(new Date).getFullYear()," 北京雍和在线有限公司  版权所有 京 ICP备02689411号-2"),"   "))},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var l=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return l.EmailJSResponseStatus}});var n=a("USkh"),r=null,s="https://api.emailjs.com";function i(e,t,a){return void 0===a&&(a={}),new Promise((function(n,r){var s=new XMLHttpRequest;for(var i in s.addEventListener("load",(function(e){var t=new l.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?n(t):r(t)})),s.addEventListener("error",(function(e){r(new l.EmailJSResponseStatus(e.target))})),s.open("POST",e,!0),a)s.setRequestHeader(i,a[i]);s.send(t)}))}function o(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function d(e,t){r=e,s=t||"https://api.emailjs.com"}function u(e,t,a,l){var n={lib_version:"2.6.3",user_id:l||r,service_id:e,template_id:t,template_params:o(a)};return i(s+"/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})}function c(e,t,a,l){var o;if("string"==typeof a&&(a=document.querySelector("#"!==(o=a)[0]?"#"+o:o)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";n.UI.progressState(a);var d=new FormData(a);return d.append("lib_version","2.6.3"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",l||r),i(s+"/api/v1.0/email/send-form",d).then((function(e){return n.UI.successState(a),e}),(function(e){return n.UI.errorState(a),Promise.reject(e)}))}t.init=d,t.send=u,t.sendForm=c,t.default={init:d,send:u,sendForm:c}},HJ1d:function(e,t,a){},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var l=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=l},OkDC:function(e,t,a){},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var l=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=l},X6Dx:function(e,t,a){},XfFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a("q1tI")),n=r(a("D5Hz"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class i extends l.default.Component{constructor(e){super(e),s(this,"onChange",e=>{const t=e.target.name,a=e.target.value;this.setState({[t]:a})}),s(this,"onClick",e=>{e.preventDefault(),this.setState({disabled:!0}),n.default.sendForm("service_65pzryk","template_g2aillj",e.target,"user_zC9lKTe2c8PYo63yQ2wDe").then(()=>{this.setState({name:"",phone:"",note:"",disabled:!1,emailSent:!0})},()=>{this.setState({disabled:!1,emailSent:!1})})}),this.state={name:"",phone:"",note:"",disabled:!1,emailSent:null}}render(){return l.default.createElement("div",{className:"card",style:{backgroundColor:"rgb(47,50,59)",border:"1px solid grey"}},l.default.createElement("form",{className:"formStyle",onSubmit:this.onClick},l.default.createElement("div",{className:"form-group row justify-content-center",style:{paddingTop:"0.5rem"}},l.default.createElement("label",{htmlFor:"name",className:"col-3 col-sm-3",style:{backgroundColor:"rgb(47,50,59)",fontSize:"0.75rem",paddingLeft:"0px"}},"姓名"),l.default.createElement("input",{onChange:this.onChange,value:this.state.name,className:"col-7 col-sm-6 form-control text-white",style:{backgroundColor:"rgb(47,50,59)",fontSize:"0.75rem",height:"1rem",border:"none",borderBottom:"1px solid grey",borderRadius:"0"},id:"name",name:"name",placeholder:"请输入姓名",required:!0})),l.default.createElement("div",{className:"form-group row justify-content-center"},l.default.createElement("label",{className:"col-3 col-sm-3",htmlFor:"phone",style:{backgroundColor:"rgb(47,50,59)",fontSize:"0.75rem",paddingLeft:"0px"}},"电话"),l.default.createElement("input",{onChange:this.onChange,value:this.state.phone,className:"col-7 col-sm-6 form-control text-white",style:{backgroundColor:"rgb(47,50,59)",fontSize:"0.75rem",height:"1rem",border:"none",borderBottom:"1px solid grey",borderRadius:"0"},id:"phone",name:"phone",placeholder:"请输入电话",required:!0})),l.default.createElement("div",{className:"form-group row justify-content-center "},l.default.createElement("label",{className:"col-3 col-sm-3",htmlFor:"note",style:{backgroundColor:"rgb(47,50,59)",fontSize:"0.75rem",paddingLeft:"0px"}},"留言"),l.default.createElement("input",{onChange:this.onChange,value:this.state.note,className:"col-7 col-sm-6 form-control text-white",id:"note",name:"note",style:{backgroundColor:"rgb(47,50,59)",fontSize:"0.75rem",height:"1rem",border:"none",borderRadius:"0",borderBottom:"1px solid grey"},rows:"1",placeholder:"请输入您的留言",required:!0})),l.default.createElement("div",{className:"form-group row justify-content-center"},l.default.createElement("button",{type:"submit",disabled:this.state.disabled,className:"btn btn-primary mb-2 text-dark bg-light",style:{borderRadius:"20px",fontSize:"0.75rem",marginBottom:"0rem",padding:"0.1rem 1.25rem"}},"发送"),!0===this.state.emailSent&&l.default.createElement("p",{className:"d-inline success-msg"},"发送成功"),!1===this.state.emailSent&&l.default.createElement("p",{className:"d-inline err-msg"},"发送失败"))))}}t.default=i},YSoz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a("q1tI")),n=o(a("5eIs")),r=o(a("iEzi")),s=o(a("B1WW")),i=o(a("Veah"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement(i.default,null),l.default.createElement(r.default,null),l.default.createElement(n.default,null),l.default.createElement(s.default,null))},"aE3/":function(e,t,a){e.exports=a.p+"static/qrcode-fa83f4ed87d22d391508ae58511c522b.png"},iEzi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a("q1tI"),r=(l=n)&&l.__esModule?l:{default:l},s=a("Wbzz");a("OkDC");t.default=()=>{const e=(0,s.useStaticQuery)("1712566939").prismicFieldinfopage.data,t=e.banner_left.url,a=e.page_title,l=e.page_subtitle,n=e.page_title_english;return r.default.createElement("div",{className:"fields-info-top"},r.default.createElement("div",{className:"left-container"},(e=>{const{brannerLeftURL:t}=e;return r.default.createElement("div",{className:"banner-image-container"},r.default.createElement("img",{src:t}))})({brannerLeftURL:t})),r.default.createElement("div",{className:"right-container"},(e=>{const{pageTitle:t,pageSubtitle:a,pageTitleEnglish:l}=e;return r.default.createElement("div",{className:"banner-text-container"},r.default.createElement("div",{className:"banner-text-left"},r.default.createElement("div",{className:"banner-title"},t),r.default.createElement("div",{className:"banner-subtitle"},a)),r.default.createElement("div",{className:"banner-title-english"},l))})({pageTitle:a,pageSubtitle:l,pageTitleEnglish:n})))}}}]);
//# sourceMappingURL=component---src-pages-fields-info-js-21b1e345472a6f1942cc.js.map