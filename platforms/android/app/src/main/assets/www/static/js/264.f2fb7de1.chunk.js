(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[264],{1237:function(n,e,t){"use strict";t.r(e);var a=t(42),r=t(43),o=t(45),c=t(44),i=t(46),l=t(4),s=t.n(l),p=t(47),u=t(85),d=t(17),m=t(175),E=t(682),b=t(693),f=t(684),g=t(685),T=t(692),O=E.a.TextArea,_=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).handleSubmit=function(n){n.preventDefault(),t.props.form.validateFieldsAndScroll((function(n,e){n||t.props.submit(e)}))},t}return Object(i.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props.form,e=n.getFieldDecorator,t=n.getFieldError,a=this.props.customerType,r=a.loading,o=a.loadingSubmit,c=a.customerType?a.customerType:[],i=c.is_used,l=a.errorField?a.errorField:[],p={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}};return s.a.createElement(b.a,{layout:"vertical",onSubmit:this.handleSubmit},i?s.a.createElement(f.a,{style:{marginBottom:"20px"}},s.a.createElement(g.a,{span:24},s.a.createElement(T.a,{message:s.a.createElement(d.a,{id:"customerType.help"}),type:"warning",showIcon:!0}))):"",s.a.createElement("div",{className:"isoDetailDataFlex",style:{padding:"0"}},s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 15px 0 0"}},s.a.createElement(b.a.Item,Object.assign({},p,{label:s.a.createElement(d.a,{id:"customerTypes.add.code"}),validateStatus:l.customer_type_code||t("customer_type_code")?"error":null,help:l.customer_type_code?l.customer_type_code:t("customer_type_code")}),e("customer_type_code",{initialValue:c.customer_type_code,rules:[{required:!0,message:s.a.createElement(d.a,{id:"required"})},{max:30,message:s.a.createElement(d.a,{id:"maxLength30"})}]})(s.a.createElement(E.a,{disabled:!!i}))),s.a.createElement(b.a.Item,Object.assign({},p,{label:s.a.createElement(d.a,{id:"customerTypes.add.name"})}),e("customer_type_name",{initialValue:c.customer_type_name,rules:[{required:!0,message:s.a.createElement(d.a,{id:"required"})},{max:50,message:s.a.createElement(d.a,{id:"maxLength50"})}]})(s.a.createElement(E.a,{disabled:!!i}))),s.a.createElement(b.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(d.a,{id:"customerTypes.add.description"})}),e("description",{initialValue:c.description})(s.a.createElement(O,{autosize:{minRows:2}}))))),s.a.createElement(b.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},s.a.createElement(m.a,{type:"primary",htmlType:"submit",style:{marginTop:"20px",marginLeft:"50px"},loading:r||o},s.a.createElement(d.a,{id:"button.submit"}))))}}]),e}(l.Component),S=b.a.create({name:"update_customer_type"})(_),y=t(176),x=t(683),R=t(703),C=t(704),h=t(785),j=t(702),v=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).handleSubmit=function(n){(0,t.props.updateCustomerType)(t.props.match.params.id,n)},t}return Object(i.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.editCustomerType)(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(){(this.props.customerType.error&&(Object(y.a)("error",this.props.customerType.error),this.props.clearError()),this.props.customerType.success)&&(Object(y.a)("success",this.props.customerType.success),this.props.clearSuccess(),(0,this.props.editCustomerType)(this.props.match.params.id))}},{key:"render",value:function(){var n=this;return s.a.createElement(R.a,null,s.a.createElement(j.a,null,s.a.createElement(C.a,{title:s.a.createElement(d.a,{id:"customerTypes.update.title"}),style:{margin:0}},s.a.createElement(m.a,{onClick:function(){return n.props.history.replace("/dashboard/setup/customer-types")}},s.a.createElement(d.a,{id:"button.back"}))),this.props.customerType.loading&&!this.props.customerType.loadingSubmit?s.a.createElement("div",{className:"spinStyle"},s.a.createElement(x.a,{size:"large"})):s.a.createElement(S,{auth:this.props.auth,submit:this.handleSubmit,customerType:this.props.customerType})))}}]),e}(l.Component);e.default=Object(u.d)(Object(p.b)((function(n){return{auth:n.auth,customerType:n.customerType}}),h.a))(v)},702:function(n,e,t){"use strict";var a=t(49),r=t(39),o=t(4),c=t.n(o),i=t(26),l=t(9);function s(){var n=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return n},n}var u=i.b.h3(p(),Object(l.palette)("text",0)),d=i.b.p(s(),Object(l.palette)("text",3)),m=function(n){return c.a.createElement("div",null,n.title?c.a.createElement(u,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?c.a.createElement(d,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function E(){var n=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return E=function(){return n},n}var b=i.b.div(E(),Object(l.palette)("border",0),""),f=t(64),g=t(684),T=t(685),O=t(3);function _(){var n=Object(r.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return _=function(){return n},n}function S(){var n=Object(r.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return S=function(){return n},n}function y(){var n=Object(r.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return y=function(){return n},n}function x(){var n=Object(r.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return x=function(){return n},n}function R(){var n=Object(r.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return R=function(){return n},n}function C(){var n=Object(r.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return C=function(){return n},n}function h(){var n=Object(r.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(r.a)([""]);return j=function(){return n},n}function v(){var n=Object(r.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return v=function(){return n},n}function U(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return U=function(){return n},n}function k(){var n=Object(r.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return k=function(){return n},n}t.d(e,"g",(function(){return H})),t.d(e,"d",(function(){return Q})),t.d(e,"j",(function(){return V})),t.d(e,"c",(function(){return L})),t.d(e,"a",(function(){return N})),t.d(e,"f",(function(){return A})),t.d(e,"e",(function(){return P})),t.d(e,"k",(function(){return M})),t.d(e,"l",(function(){return I})),t.d(e,"m",(function(){return D})),t.d(e,"i",(function(){return F})),t.d(e,"h",(function(){return B})),t.d(e,"b",(function(){return z}));var w=Object(i.b)((function(n){return c.a.createElement(b,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},c.a.createElement(m,{title:n.title,subtitle:n.subtitle}),n.children)}))(k(),Object(l.palette)("text",1)),A=(i.b.div(U()),i.b.label(v(),Object(l.palette)("text",1)),i.b.div(j()),i.b.span(h(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5))),P=i.b.span(C(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5)),M=i.b.span(R()),Y=i.b.div(x(),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(l.palette)("secondary",1),Object(l.palette)("text",3),Object(l.palette)("primary",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",2),Object(l.palette)("error",0),Object(l.palette)("error",2),Object(l.palette)("secondary",0),Object(l.palette)("secondary",2),Object(l.palette)("success",0),Object(l.palette)("success",2),Object(l.palette)("primary",0),Object(l.palette)("primary",2)),I={background:"#F1F3F6",marginBottom:"-7px"},D=function(n,e){e.status,e.title;return n},F=i.b.h4(y()),B=i.b.span(S()),z=i.b.span(_(),(function(n){return!0===n.italic?"italic":"normal"})),H=function(n){return c.a.createElement("strong",{style:{color:n.error?"#f5222d":"inherit"}},n.children)},Q=function(n){return c.a.createElement("span",{style:{color:n.error?"#f5222d":"inherit"}},n.children)},V=function(n){var e=n.data;return Array.isArray(e)&&e.length>0?c.a.createElement(c.a.Fragment,null,e.map((function(n,e){var t,r=n.label,o=n.amount,i=n.parseAmount,l=n.isDiscount,s=n.labelAlign,p=n.amountAlign;if(l){var u,d=n.discount,m=n.discountAlign;return c.a.createElement(g.a,(u={justify:"flex"},Object(a.a)(u,"justify","end"),Object(a.a)(u,"key",e),Object(a.a)(u,"style",{marginBottom:"6px"}),u),c.a.createElement(T.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},r)),c.a.createElement(T.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:m||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?Object(O.e)(d):d?Object(O.e)(d.replace(/\$\s?|(,*)/g,"")):"0.00")),c.a.createElement(T.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}return c.a.createElement(g.a,(t={justify:"flex"},Object(a.a)(t,"justify","end"),Object(a.a)(t,"key",e),Object(a.a)(t,"style",{marginBottom:"6px"}),t),c.a.createElement(T.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},r)),c.a.createElement(T.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}))):null},L=function(n){var e=n.data;if(Array.isArray(e)&&e.length>0)return c.a.createElement(g.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},e.map((function(n,e){var t=n.label,a=n.name;return c.a.createElement(T.a,{style:{textAlign:"center"},key:e},c.a.createElement(g.a,null,c.a.createElement(T.a,{style:{marginBottom:"84px"}},c.a.createElement("span",{style:{fontSize:"12px"}},t)),c.a.createElement(T.a,null,c.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},N=Object(f.a)(w);e.n=Object(f.a)(Y)},703:function(n,e,t){"use strict";var a=t(4),r=t.n(a),o=t(39);function c(){var n=Object(o.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return c=function(){return n},n}var i=t(26).b.div(c());e.a=function(n){return r.a.createElement(i,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},704:function(n,e,t){"use strict";var a=t(4),r=t.n(a),o=t(39),c=t(26),i=t(9),l=t(64);function s(){var n=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return n},n}var p=c.b.h1(s(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(l.a)(p),d=t(690);e.a=function(n){return n.title?r.a.createElement("div",null,r.a.createElement("div",{className:"isoPageHeaderWrapper"},r.a.createElement("h1",{className:"isoCode"},n.title),n.children),r.a.createElement(d.a,{style:{margin:n.marginBottom?"10px 0 20px 0":"10px 0"}})):r.a.createElement(u,{className:"isoComponentTitle"},n.children)}},785:function(n,e,t){"use strict";e.a={GET_CUSTOMER_TYPES_REQUEST:"GET_CUSTOMER_TYPES_REQUEST",GET_CUSTOMER_TYPES_SUCCESS:"GET_CUSTOMER_TYPES_SUCCESS",GET_CUSTOMER_TYPES_ERROR:"GET_CUSTOMER_TYPES_ERROR",STORE_CUSTOMER_TYPE_REQUEST:"STORE_CUSTOMER_TYPE_REQUEST",STORE_CUSTOMER_TYPE_SUCCESS:"STORE_CUSTOMER_TYPE_SUCCESS",STORE_CUSTOMER_TYPE_ERROR:"STORE_CUSTOMER_TYPE_ERROR",EDIT_CUSTOMER_TYPE_REQUEST:"EDIT_CUSTOMER_TYPE_REQUEST",EDIT_CUSTOMER_TYPE_SUCCESS:"EDIT_CUSTOMER_TYPE_SUCCESS",EDIT_CUSTOMER_TYPE_ERROR:"EDIT_CUSTOMER_TYPE_ERROR",UPDATE_CUSTOMER_TYPE_REQUEST:"UPDATE_CUSTOMER_TYPE_REQUEST",UPDATE_CUSTOMER_TYPE_SUCCESS:"UPDATE_CUSTOMER_TYPE_SUCCESS",UPDATE_CUSTOMER_TYPE_ERROR:"UPDATE_CUSTOMER_TYPE_ERROR",SHOW_CUSTOMER_TYPE_REQUEST:"SHOW_CUSTOMER_TYPE_REQUEST",SHOW_CUSTOMER_TYPE_SUCCESS:"SHOW_CUSTOMER_TYPE_SUCCESS",SHOW_CUSTOMER_TYPE_ERROR:"SHOW_CUSTOMER_TYPE_ERROR",DEACTIVATE_CUSTOMER_TYPE_REQUEST:"DEACTIVATE_CUSTOMER_TYPE_REQUEST",DEACTIVATE_CUSTOMER_TYPE_SUCCESS:"DEACTIVATE_CUSTOMER_TYPE_SUCCESS",DEACTIVATE_CUSTOMER_TYPE_ERROR:"DEACTIVATE_CUSTOMER_TYPE_ERROR",ACTIVATE_CUSTOMER_TYPE_REQUEST:"ACTIVATE_CUSTOMER_TYPE_REQUEST",ACTIVATE_CUSTOMER_TYPE_SUCCESS:"ACTIVATE_CUSTOMER_TYPE_SUCCESS",ACTIVATE_CUSTOMER_TYPE_ERROR:"ACTIVATE_CUSTOMER_TYPE_ERROR",CLEAR_SUCCESS:"CLEAR_SUCCESS",CLEAR_ERROR:"CLEAR_ERROR",CLEAR_ERROR_FIELD:"CLEAR_ERROR_FIELD",getCustomerTypes:function(n,e){return{type:"GET_CUSTOMER_TYPES_REQUEST",payload:{page:n,search:e}}},storeCustomerType:function(n){return{type:"STORE_CUSTOMER_TYPE_REQUEST",payload:{body:n}}},editCustomerType:function(n){return{type:"EDIT_CUSTOMER_TYPE_REQUEST",payload:{id_customer_type:n}}},updateCustomerType:function(n,e){return{type:"UPDATE_CUSTOMER_TYPE_REQUEST",payload:{id_customer_type:n,body:e}}},showCustomerType:function(n){return{type:"SHOW_CUSTOMER_TYPE_REQUEST",payload:{id_customer_type:n}}},deactivateCustomerType:function(n){return{type:"DEACTIVATE_CUSTOMER_TYPE_REQUEST",payload:{id_customer_type:n}}},activateCustomerType:function(n){return{type:"ACTIVATE_CUSTOMER_TYPE_REQUEST",payload:{id_customer_type:n}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=264.f2fb7de1.chunk.js.map