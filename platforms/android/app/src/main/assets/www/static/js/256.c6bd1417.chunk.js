(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[256],{1126:function(n,e,t){"use strict";t.r(e);var a=t(42),o=t(43),r=t(45),c=t(44),i=t(46),l=t(4),s=t.n(l),p=t(47),u=t(85),d=t(49),b=t(17),m=t(175),f=t(682),g=t(693),y=t(685),x=t(765),h=f.a.TextArea,O=f.a.Group,j=function(n){function e(){var n,t;Object(a.a)(this,e);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(t=Object(r.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).state={check_code:!1},t.handleChangeCode=function(){var n=t.props.form.setFieldsValue;t.setState({check_code:!t.state.check_code}),!1===t.state.check_code&&n(Object(d.a)({},"location_type_code",null))},t.handleSubmit=function(n){n.preventDefault(),t.props.form.validateFieldsAndScroll((function(n,e){n||t.props.submit(e)}))},t}return Object(i.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){var n=this.props.form,e=n.getFieldDecorator,t=n.getFieldError,a=this.props.locationType,o=a.loading,r=a.errorField?a.errorField:[],c={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}};return s.a.createElement(g.a,{layout:"vertical",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"isoDetailDataFlex",style:{padding:"0"}},s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 15px 0 0"}},s.a.createElement(O,{compact:!0},s.a.createElement(y.a,{span:20},s.a.createElement(g.a.Item,Object.assign({},c,{label:s.a.createElement(b.a,{id:"locationTypes.add.code"}),validateStatus:r.location_type_code||t("location_type_code")?"error":null,help:r.location_type_code?r.location_type_code:t("location_type_code")}),e("location_type_code",{rules:[{max:30,message:s.a.createElement(b.a,{id:"maxLength30"})}]})(s.a.createElement(f.a,{disabled:!!this.state.check_code})))),s.a.createElement(y.a,{span:4},s.a.createElement(g.a.Item,Object.assign({},c,{label:s.a.createElement(b.a,{id:"autoGenerateCode"})}),s.a.createElement(x.a,{style:{paddingTop:"5px",paddingLeft:"8px"},checked:this.state.check_code,onChange:this.handleChangeCode})))),s.a.createElement(g.a.Item,Object.assign({},c,{label:s.a.createElement(b.a,{id:"locationTypes.add.name"})}),e("location_type_name",{rules:[{required:!0,message:s.a.createElement(b.a,{id:"required"})},{max:50,message:s.a.createElement(b.a,{id:"maxLength50"})}]})(s.a.createElement(f.a,null))),s.a.createElement(g.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(b.a,{id:"locations.add.description"})}),e("description",{})(s.a.createElement(h,{autosize:{minRows:2}}))))),s.a.createElement(g.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},s.a.createElement(m.a,{type:"primary",htmlType:"submit",style:{marginTop:"20px",marginLeft:"50px"},loading:o},s.a.createElement(b.a,{id:"button.submit"}))))}}]),e}(l.Component),E=g.a.create({name:"create_location_type"})(j),v=t(176),k=t(703),T=t(704),w=t(823),_=t(702),C="/dashboard/companies/location-types",S=function(n){function e(){var n,t;Object(a.a)(this,e);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(t=Object(r.a)(this,(n=Object(c.a)(e)).call.apply(n,[this].concat(i)))).handleSubmit=function(n){(0,t.props.storeLocationType)(n)},t}return Object(i.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.createLocationType)()}},{key:"componentDidUpdate",value:function(){this.props.locationType.error&&(Object(v.a)("error",this.props.locationType.error),this.props.clearError()),this.props.locationType.success&&this.props.history.replace(C)}},{key:"render",value:function(){var n=this;return s.a.createElement(k.a,null,s.a.createElement(_.a,null,s.a.createElement(T.a,{title:s.a.createElement(b.a,{id:"locationTypes.add.title"}),style:{margin:0}},s.a.createElement(m.a,{onClick:function(){return n.props.history.replace(C)}},s.a.createElement(b.a,{id:"button.back"}))),s.a.createElement(E,{auth:this.props.auth,submit:this.handleSubmit,locationType:this.props.locationType})))}}]),e}(l.Component);e.default=Object(u.d)(Object(p.b)((function(n){return{auth:n.auth,locationType:n.locationType}}),w.a))(S)},702:function(n,e,t){"use strict";var a=t(49),o=t(39),r=t(4),c=t.n(r),i=t(26),l=t(9);function s(){var n=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return n},n}function p(){var n=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return n},n}var u=i.b.h3(p(),Object(l.palette)("text",0)),d=i.b.p(s(),Object(l.palette)("text",3)),b=function(n){return c.a.createElement("div",null,n.title?c.a.createElement(u,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?c.a.createElement(d,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function m(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return m=function(){return n},n}var f=i.b.div(m(),Object(l.palette)("border",0),""),g=t(64),y=t(684),x=t(685),h=t(3);function O(){var n=Object(o.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return O=function(){return n},n}function j(){var n=Object(o.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return j=function(){return n},n}function E(){var n=Object(o.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return E=function(){return n},n}function v(){var n=Object(o.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return v=function(){return n},n}function k(){var n=Object(o.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return k=function(){return n},n}function T(){var n=Object(o.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return T=function(){return n},n}function w(){var n=Object(o.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return w=function(){return n},n}function _(){var n=Object(o.a)([""]);return _=function(){return n},n}function C(){var n=Object(o.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return C=function(){return n},n}function S(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return S=function(){return n},n}function A(){var n=Object(o.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return A=function(){return n},n}t.d(e,"g",(function(){return P})),t.d(e,"d",(function(){return Y})),t.d(e,"j",(function(){return G})),t.d(e,"c",(function(){return M})),t.d(e,"a",(function(){return Q})),t.d(e,"f",(function(){return F})),t.d(e,"e",(function(){return L})),t.d(e,"k",(function(){return B})),t.d(e,"l",(function(){return z})),t.d(e,"m",(function(){return R})),t.d(e,"i",(function(){return U})),t.d(e,"h",(function(){return D})),t.d(e,"b",(function(){return H}));var I=Object(i.b)((function(n){return c.a.createElement(f,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},c.a.createElement(b,{title:n.title,subtitle:n.subtitle}),n.children)}))(A(),Object(l.palette)("text",1)),F=(i.b.div(S()),i.b.label(C(),Object(l.palette)("text",1)),i.b.div(_()),i.b.span(w(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5))),L=i.b.span(T(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5)),B=i.b.span(k()),N=i.b.div(v(),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(l.palette)("secondary",1),Object(l.palette)("text",3),Object(l.palette)("primary",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",2),Object(l.palette)("error",0),Object(l.palette)("error",2),Object(l.palette)("secondary",0),Object(l.palette)("secondary",2),Object(l.palette)("success",0),Object(l.palette)("success",2),Object(l.palette)("primary",0),Object(l.palette)("primary",2)),z={background:"#F1F3F6",marginBottom:"-7px"},R=function(n,e){e.status,e.title;return n},U=i.b.h4(E()),D=i.b.span(j()),H=i.b.span(O(),(function(n){return!0===n.italic?"italic":"normal"})),P=function(n){return c.a.createElement("strong",{style:{color:n.error?"#f5222d":"inherit"}},n.children)},Y=function(n){return c.a.createElement("span",{style:{color:n.error?"#f5222d":"inherit"}},n.children)},G=function(n){var e=n.data;return Array.isArray(e)&&e.length>0?c.a.createElement(c.a.Fragment,null,e.map((function(n,e){var t,o=n.label,r=n.amount,i=n.parseAmount,l=n.isDiscount,s=n.labelAlign,p=n.amountAlign;if(l){var u,d=n.discount,b=n.discountAlign;return c.a.createElement(y.a,(u={justify:"flex"},Object(a.a)(u,"justify","end"),Object(a.a)(u,"key",e),Object(a.a)(u,"style",{marginBottom:"6px"}),u),c.a.createElement(x.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},o)),c.a.createElement(x.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:b||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?Object(h.e)(d):d?Object(h.e)(d.replace(/\$\s?|(,*)/g,"")):"0.00")),c.a.createElement(x.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(r).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):r)))}return c.a.createElement(y.a,(t={justify:"flex"},Object(a.a)(t,"justify","end"),Object(a.a)(t,"key",e),Object(a.a)(t,"style",{marginBottom:"6px"}),t),c.a.createElement(x.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},o)),c.a.createElement(x.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(r).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):r)))}))):null},M=function(n){var e=n.data;if(Array.isArray(e)&&e.length>0)return c.a.createElement(y.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},e.map((function(n,e){var t=n.label,a=n.name;return c.a.createElement(x.a,{style:{textAlign:"center"},key:e},c.a.createElement(y.a,null,c.a.createElement(x.a,{style:{marginBottom:"84px"}},c.a.createElement("span",{style:{fontSize:"12px"}},t)),c.a.createElement(x.a,null,c.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},Q=Object(g.a)(I);e.n=Object(g.a)(N)},703:function(n,e,t){"use strict";var a=t(4),o=t.n(a),r=t(39);function c(){var n=Object(r.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return c=function(){return n},n}var i=t(26).b.div(c());e.a=function(n){return o.a.createElement(i,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},704:function(n,e,t){"use strict";var a=t(4),o=t.n(a),r=t(39),c=t(26),i=t(9),l=t(64);function s(){var n=Object(r.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return n},n}var p=c.b.h1(s(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(l.a)(p),d=t(690);e.a=function(n){return n.title?o.a.createElement("div",null,o.a.createElement("div",{className:"isoPageHeaderWrapper"},o.a.createElement("h1",{className:"isoCode"},n.title),n.children),o.a.createElement(d.a,{style:{margin:n.marginBottom?"10px 0 20px 0":"10px 0"}})):o.a.createElement(u,{className:"isoComponentTitle"},n.children)}},823:function(n,e,t){"use strict";e.a={getLocationTypes:function(n,e,t){return{type:"GET_LOCATION_TYPES_REQUEST",payload:{page:n,search:e,filter:t}}},createLocationType:function(){return{type:"CREATE_LOCATION_TYPE_REQUEST"}},storeLocationType:function(n){return{type:"STORE_LOCATION_TYPE_REQUEST",payload:{body:n}}},editLocationType:function(n){return{type:"EDIT_LOCATION_TYPE_REQUEST",payload:{id_location_type:n}}},updateLocationType:function(n,e){return{type:"UPDATE_LOCATION_TYPE_REQUEST",payload:{id_location_type:n,body:e}}},showLocationType:function(n){return{type:"SHOW_LOCATION_TYPE_REQUEST",payload:{id_location_type:n}}},deactivateLocationType:function(n){return{type:"DEACTIVATE_LOCATION_TYPE_REQUEST",payload:{id_location_type:n}}},activateLocationType:function(n){return{type:"ACTIVATE_LOCATION_TYPE_REQUEST",payload:{id_location_type:n}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=256.c6bd1417.chunk.js.map