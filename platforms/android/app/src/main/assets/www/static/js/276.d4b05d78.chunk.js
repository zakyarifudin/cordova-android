(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[276],{1243:function(n,e,t){"use strict";t.r(e);var a=t(42),r=t(43),o=t(45),c=t(44),i=t(46),l=t(4),s=t.n(l),p=t(47),u=t(85),d=t(17),b=t(175),m=t(681),f=t(682),g=t(693),x=t(684),h=t(685),O=t(692),j=(m.a.Option,f.a.TextArea),y=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).handleSubmit=function(n){n.preventDefault(),t.props.form.validateFieldsAndScroll((function(n,e){n||t.props.submit(e)}))},t}return Object(i.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props.form,e=n.getFieldDecorator,t=n.getFieldError,a=this.props.color,r=a.loading,o=a.color?a.color:[],c=o.is_used,i=a.errorField?a.errorField:[];return s.a.createElement(g.a,{layout:"vertical",onSubmit:this.handleSubmit},c?s.a.createElement(x.a,{style:{marginBottom:"20px"}},s.a.createElement(h.a,{span:24},s.a.createElement(O.a,{message:s.a.createElement(d.a,{id:"color.help"}),type:"warning",showIcon:!0}))):"",s.a.createElement("div",{className:"isoDetailDataFlex",style:{padding:"0"}},s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 15px 0 0"}},s.a.createElement(g.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(d.a,{id:"locations.add.name"}),validateStatus:i.color_name||t("color_name")?"error":null,help:i.color_name?i.color_name:t("color_name")}),e("color_name",{initialValue:o.color_name,rules:[{required:!0,message:s.a.createElement(d.a,{id:"required"})},{max:30,message:s.a.createElement(d.a,{id:"maxLength30"})}]})(s.a.createElement(f.a,{disabled:!!c}))),s.a.createElement(g.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(d.a,{id:"locations.add.description"})}),e("description",{initialValue:o.description})(s.a.createElement(j,null))))),s.a.createElement(g.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},s.a.createElement(b.a,{type:"primary",htmlType:"submit",style:{marginTop:"20px",marginLeft:"50px"},loading:r},s.a.createElement(d.a,{id:"button.submit"}))))}}]),e}(l.Component),v=g.a.create({name:"update_color"})(y),E=t(176),k=t(683),w=t(703),C=t(704),S=t(841),_=t(702),A=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).handleSubmit=function(n){(0,t.props.updateColor)(t.props.match.params.id,n)},t}return Object(i.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.editColor)(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(){this.props.color.error&&(Object(E.a)("error",this.props.color.error),this.props.clearError()),this.props.color.success&&this.props.history.replace("/dashboard/setup/colors")}},{key:"render",value:function(){var n=this;return s.a.createElement(w.a,null,s.a.createElement(_.a,null,s.a.createElement(C.a,{title:s.a.createElement(d.a,{id:"colors.update.title"}),style:{margin:0}},s.a.createElement(b.a,{onClick:function(){return n.props.history.replace("/dashboard/setup/colors")}},s.a.createElement(d.a,{id:"button.back"}))),this.props.color.loadingEdit?s.a.createElement("div",{className:"spinStyle"},s.a.createElement(k.a,{color:"large"})):s.a.createElement(v,{auth:this.props.auth,submit:this.handleSubmit,color:this.props.color})))}}]),e}(l.Component);e.default=Object(u.d)(Object(p.b)((function(n){return{auth:n.auth,color:n.color}}),S.a))(A)},702:function(n,e,t){"use strict";var a=t(49),r=t(39),o=t(4),c=t.n(o),i=t(26),l=t(9);function s(){var n=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return n},n}var u=i.b.h3(p(),Object(l.palette)("text",0)),d=i.b.p(s(),Object(l.palette)("text",3)),b=function(n){return c.a.createElement("div",null,n.title?c.a.createElement(u,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?c.a.createElement(d,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function m(){var n=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return m=function(){return n},n}var f=i.b.div(m(),Object(l.palette)("border",0),""),g=t(64),x=t(684),h=t(685),O=t(3);function j(){var n=Object(r.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return j=function(){return n},n}function y(){var n=Object(r.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return y=function(){return n},n}function v(){var n=Object(r.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return v=function(){return n},n}function E(){var n=Object(r.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return E=function(){return n},n}function k(){var n=Object(r.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return k=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(r.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return C=function(){return n},n}function S(){var n=Object(r.a)([""]);return S=function(){return n},n}function _(){var n=Object(r.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return _=function(){return n},n}function A(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return A=function(){return n},n}function T(){var n=Object(r.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return T=function(){return n},n}t.d(e,"g",(function(){return M})),t.d(e,"d",(function(){return Q})),t.d(e,"j",(function(){return G})),t.d(e,"c",(function(){return V})),t.d(e,"a",(function(){return q})),t.d(e,"f",(function(){return F})),t.d(e,"e",(function(){return B})),t.d(e,"k",(function(){return I})),t.d(e,"l",(function(){return U})),t.d(e,"m",(function(){return L})),t.d(e,"i",(function(){return N})),t.d(e,"h",(function(){return D})),t.d(e,"b",(function(){return H}));var R=Object(i.b)((function(n){return c.a.createElement(f,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},c.a.createElement(b,{title:n.title,subtitle:n.subtitle}),n.children)}))(T(),Object(l.palette)("text",1)),F=(i.b.div(A()),i.b.label(_(),Object(l.palette)("text",1)),i.b.div(S()),i.b.span(C(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5))),B=i.b.span(w(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5)),I=i.b.span(k()),z=i.b.div(E(),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(l.palette)("secondary",1),Object(l.palette)("text",3),Object(l.palette)("primary",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",2),Object(l.palette)("error",0),Object(l.palette)("error",2),Object(l.palette)("secondary",0),Object(l.palette)("secondary",2),Object(l.palette)("success",0),Object(l.palette)("success",2),Object(l.palette)("primary",0),Object(l.palette)("primary",2)),U={background:"#F1F3F6",marginBottom:"-7px"},L=function(n,e){e.status,e.title;return n},N=i.b.h4(v()),D=i.b.span(y()),H=i.b.span(j(),(function(n){return!0===n.italic?"italic":"normal"})),M=function(n){return c.a.createElement("strong",{style:{color:n.error?"#f5222d":"inherit"}},n.children)},Q=function(n){return c.a.createElement("span",{style:{color:n.error?"#f5222d":"inherit"}},n.children)},G=function(n){var e=n.data;return Array.isArray(e)&&e.length>0?c.a.createElement(c.a.Fragment,null,e.map((function(n,e){var t,r=n.label,o=n.amount,i=n.parseAmount,l=n.isDiscount,s=n.labelAlign,p=n.amountAlign;if(l){var u,d=n.discount,b=n.discountAlign;return c.a.createElement(x.a,(u={justify:"flex"},Object(a.a)(u,"justify","end"),Object(a.a)(u,"key",e),Object(a.a)(u,"style",{marginBottom:"6px"}),u),c.a.createElement(h.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},r)),c.a.createElement(h.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:b||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?Object(O.e)(d):d?Object(O.e)(d.replace(/\$\s?|(,*)/g,"")):"0.00")),c.a.createElement(h.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}return c.a.createElement(x.a,(t={justify:"flex"},Object(a.a)(t,"justify","end"),Object(a.a)(t,"key",e),Object(a.a)(t,"style",{marginBottom:"6px"}),t),c.a.createElement(h.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},r)),c.a.createElement(h.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}))):null},V=function(n){var e=n.data;if(Array.isArray(e)&&e.length>0)return c.a.createElement(x.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},e.map((function(n,e){var t=n.label,a=n.name;return c.a.createElement(h.a,{style:{textAlign:"center"},key:e},c.a.createElement(x.a,null,c.a.createElement(h.a,{style:{marginBottom:"84px"}},c.a.createElement("span",{style:{fontSize:"12px"}},t)),c.a.createElement(h.a,null,c.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},q=Object(g.a)(R);e.n=Object(g.a)(z)},703:function(n,e,t){"use strict";var a=t(4),r=t.n(a),o=t(39);function c(){var n=Object(o.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return c=function(){return n},n}var i=t(26).b.div(c());e.a=function(n){return r.a.createElement(i,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},704:function(n,e,t){"use strict";var a=t(4),r=t.n(a),o=t(39),c=t(26),i=t(9),l=t(64);function s(){var n=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return n},n}var p=c.b.h1(s(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(l.a)(p),d=t(690);e.a=function(n){return n.title?r.a.createElement("div",null,r.a.createElement("div",{className:"isoPageHeaderWrapper"},r.a.createElement("h1",{className:"isoCode"},n.title),n.children),r.a.createElement(d.a,{style:{margin:n.marginBottom?"10px 0 20px 0":"10px 0"}})):r.a.createElement(u,{className:"isoComponentTitle"},n.children)}},841:function(n,e,t){"use strict";e.a={getColors:function(n,e,t){return{type:"GET_COLORS_REQUEST",payload:{page:n,search:e,filter:t}}},createColor:function(){return{type:"CREATE_COLOR_REQUEST"}},storeColor:function(n){return{type:"STORE_COLOR_REQUEST",payload:{body:n}}},editColor:function(n){return{type:"EDIT_COLOR_REQUEST",payload:{id_color:n}}},updateColor:function(n,e){return{type:"UPDATE_COLOR_REQUEST",payload:{id_color:n,body:e}}},showColor:function(n){return{type:"SHOW_COLOR_REQUEST",payload:{id_color:n}}},deactivateColor:function(n){return{type:"DEACTIVATE_COLOR_REQUEST",payload:{id_color:n}}},activateColor:function(n){return{type:"ACTIVATE_COLOR_REQUEST",payload:{id_color:n}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=276.d4b05d78.chunk.js.map