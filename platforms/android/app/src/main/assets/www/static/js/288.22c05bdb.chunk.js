(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[288],{1234:function(e,n,t){"use strict";t.r(n);var a=t(42),r=t(43),o=t(45),i=t(44),l=t(46),c=t(4),s=t.n(c),u=t(47),p=t(85),d=t(17),m=t(175),b=t(681),g=t(682),f=t(683),h=t(693),x=t(684),E=t(685),y=t(692),j=t(915),O=t(738),v=t(835),k=b.a.Option,w=g.a.TextArea,C=g.a.Group,_=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,n){e||(0,t.props.updateCourier)(t.props.id_courier.id,n)}))},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.editCourier)(this.props.id_courier.id)}},{key:"componentDidUpdate",value:function(){this.props.courier.success&&(0,this.props.editCourier)(this.props.id_courier.id)}},{key:"render",value:function(){var e=this.props.form,n=e.getFieldDecorator,t=e.getFieldError,a=this.props.courier,r=a.loading,o=a.loadingSubmit,i=a.courier?a.courier:[],l=i.is_used,c=a.errorField?a.errorField:[],u={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},p={flex:"1",textAlign:"center"};return s.a.createElement("div",null,this.props.courier.loadingEdit?s.a.createElement("div",{className:"spinStyle"},s.a.createElement(f.a,{size:"large"})):s.a.createElement(h.a,{layout:"vertical",onSubmit:this.handleSubmit},l?s.a.createElement(x.a,{style:{marginBottom:"20px"}},s.a.createElement(E.a,{span:24},s.a.createElement(y.a,{message:s.a.createElement(d.a,{id:"courier.help"}),type:"warning",showIcon:!0}))):"",s.a.createElement("div",{className:"isoDetailDataFlex",style:{padding:"0"}},s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 15px 0 0"}},s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"couriers.add.name"}),validateStatus:c.courier_name||t("courier_name")?"error":null,help:c.courier_name?c.courier_name:t("courier_name")}),n("courier_name",{initialValue:i.courier_name,rules:[{required:!0,message:s.a.createElement(d.a,{id:"required"})},{max:30,message:s.a.createElement(d.a,{id:"maxLength30"})}]})(s.a.createElement(g.a,{disabled:!!l,style:{width:"100%"}}))),s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"locations.add.description"})}),n("description",{initialValue:i.description,rules:[{required:!0,message:s.a.createElement(d.a,{id:"required"})},{max:50,message:s.a.createElement(d.a,{id:"maxLength50"})}]})(s.a.createElement(g.a,null))),s.a.createElement(C,{compact:!0},s.a.createElement(E.a,{span:12},s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"isInternal"})}),n("is_internal",{initialValue:i.is_internal,rules:[{required:!0,message:s.a.createElement(d.a,{id:"required"})}]})(s.a.createElement(j.a.Group,{buttonStyle:"solid",style:{display:"flex",width:"100%"}},s.a.createElement(j.a.Button,{style:p,value:1},s.a.createElement(d.a,{id:"Yes"})),s.a.createElement(j.a.Button,{style:p,value:0},s.a.createElement(d.a,{id:"No"})))))),s.a.createElement(E.a,{span:12},s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"defaultShippingPrice"})}),n("default_shipping_price",{initialValue:i.default_shipping_price})(s.a.createElement(O.a,{formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},style:{width:"100%"}}))))),s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"vehicleNo"})}),n("vehicle_no",{initialValue:i.vehicle_no,rules:[{max:15,message:s.a.createElement(d.a,{id:"maxLength15"})}]})(s.a.createElement(g.a,null))),s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"couriers.filter.relatedEmployee"})}),n("id_related_employee",{initialValue:i.id_related_employee})(s.a.createElement(b.a,{loading:this.props.courier.loadingFilterEmployees,showSearch:!0,optionFilterProp:"children"},this.props.courier.employees.map((function(e,n){return s.a.createElement(k,{key:n,value:e.id_employee},e.employee_code+" ("+e.first_name+(e.last_name?" "+e.last_name+")":")"))})))))),s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 0 0 15px"}},s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"phone1"})}),n("phone1",{initialValue:i.phone1,rules:[{max:15,message:s.a.createElement(d.a,{id:"maxLength15"})},{pattern:"^[0-9]*$",message:s.a.createElement(d.a,{id:"invalidPhone"})}]})(s.a.createElement(g.a,null))),s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"phone2"})}),n("phone2",{initialValue:i.phone2,rules:[{max:15,message:s.a.createElement(d.a,{id:"maxLength15"})},{pattern:"^[0-9]*$",message:s.a.createElement(d.a,{id:"invalidPhone"})}]})(s.a.createElement(g.a,null))),s.a.createElement(h.a.Item,Object.assign({},u,{label:s.a.createElement(d.a,{id:"email"})}),n("email",{initialValue:i.email,rules:[{type:"email",message:s.a.createElement(d.a,{id:"invalidEmail"})}]})(s.a.createElement(g.a,null))),s.a.createElement(h.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(d.a,{id:"address"})}),n("address",{initialValue:i.address})(s.a.createElement(w,{autosize:{minRows:5}}))))),s.a.createElement(x.a,null,s.a.createElement(E.a,null,s.a.createElement(h.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},s.a.createElement(m.a,{type:"primary",htmlType:"submit",style:{marginTop:"20px",marginLeft:"50px"},loading:r||o},s.a.createElement(d.a,{id:"button.submit"})))))))}}]),n}(c.Component),S=h.a.create({name:"update_courier"})(_),I=Object(p.d)(Object(u.b)((function(e){return{courier:e.courier}}),v.a))(S),R=t(761),A=t(176),T=t(703),B=t(704),F=t(702),U=(R.a.TabPane,function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(l)))).state={id_courier:null,url:null},t.componentWillMount=function(){t.setState({id_courier:t.props.match.params,url:t.props.match.url})},t}return Object(l.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this;this.props.courier.courier&&this.props.courier.courier;return this.props.courier.error&&(Object(A.a)("error",this.props.courier.error),this.props.clearError()),this.props.courier.success&&(Object(A.a)("success",this.props.courier.success),this.props.clearSuccess()),s.a.createElement(T.a,null,s.a.createElement(F.a,null,s.a.createElement(B.a,{title:s.a.createElement(d.a,{id:"couriers.update.title"}),marginBottom:!0},s.a.createElement(m.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/couriers")},style:{marginLeft:"5px"}},s.a.createElement(d.a,{id:"button.back"}))),s.a.createElement(I,{auth:this.props.auth,id_courier:this.state.id_courier,courier:this.props.courier})))}}]),n}(c.Component));n.default=Object(p.d)(Object(u.b)((function(e){return{auth:e.auth,courier:e.courier}}),v.a))(U)},702:function(e,n,t){"use strict";var a=t(49),r=t(39),o=t(4),i=t.n(o),l=t(26),c=t(9);function s(){var e=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return e},e}var p=l.b.h3(u(),Object(c.palette)("text",0)),d=l.b.p(s(),Object(c.palette)("text",3)),m=function(e){return i.a.createElement("div",null,e.title?i.a.createElement(p,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?i.a.createElement(d,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function b(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return b=function(){return e},e}var g=l.b.div(b(),Object(c.palette)("border",0),""),f=t(64),h=t(684),x=t(685),E=t(3);function y(){var e=Object(r.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return y=function(){return e},e}function j(){var e=Object(r.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return j=function(){return e},e}function O(){var e=Object(r.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return O=function(){return e},e}function v(){var e=Object(r.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return v=function(){return e},e}function k(){var e=Object(r.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return k=function(){return e},e}function w(){var e=Object(r.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(r.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return C=function(){return e},e}function _(){var e=Object(r.a)([""]);return _=function(){return e},e}function S(){var e=Object(r.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return S=function(){return e},e}function I(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return I=function(){return e},e}function R(){var e=Object(r.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return R=function(){return e},e}t.d(n,"g",(function(){return L})),t.d(n,"d",(function(){return P})),t.d(n,"j",(function(){return q})),t.d(n,"c",(function(){return G})),t.d(n,"a",(function(){return M})),t.d(n,"f",(function(){return T})),t.d(n,"e",(function(){return B})),t.d(n,"k",(function(){return F})),t.d(n,"l",(function(){return z})),t.d(n,"m",(function(){return N})),t.d(n,"i",(function(){return D})),t.d(n,"h",(function(){return H})),t.d(n,"b",(function(){return V}));var A=Object(l.b)((function(e){return i.a.createElement(g,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},i.a.createElement(m,{title:e.title,subtitle:e.subtitle}),e.children)}))(R(),Object(c.palette)("text",1)),T=(l.b.div(I()),l.b.label(S(),Object(c.palette)("text",1)),l.b.div(_()),l.b.span(C(),Object(c.palette)("primary",0),Object(c.palette)("error",0),Object(c.palette)("warning",0),Object(c.palette)("success",0),Object(c.palette)("status",0),Object(c.palette)("status",8),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",1),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",0),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5))),B=l.b.span(w(),Object(c.palette)("primary",0),Object(c.palette)("error",0),Object(c.palette)("warning",0),Object(c.palette)("success",0),Object(c.palette)("status",0),Object(c.palette)("status",8),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",1),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",0),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5)),F=l.b.span(k()),U=l.b.div(v(),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(c.palette)("secondary",1),Object(c.palette)("text",3),Object(c.palette)("primary",0),Object(c.palette)("grayscale",0),Object(c.palette)("grayscale",2),Object(c.palette)("error",0),Object(c.palette)("error",2),Object(c.palette)("secondary",0),Object(c.palette)("secondary",2),Object(c.palette)("success",0),Object(c.palette)("success",2),Object(c.palette)("primary",0),Object(c.palette)("primary",2)),z={background:"#F1F3F6",marginBottom:"-7px"},N=function(e,n){n.status,n.title;return e},D=l.b.h4(O()),H=l.b.span(j()),V=l.b.span(y(),(function(e){return!0===e.italic?"italic":"normal"})),L=function(e){return i.a.createElement("strong",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},P=function(e){return i.a.createElement("span",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},q=function(e){var n=e.data;return Array.isArray(n)&&n.length>0?i.a.createElement(i.a.Fragment,null,n.map((function(e,n){var t,r=e.label,o=e.amount,l=e.parseAmount,c=e.isDiscount,s=e.labelAlign,u=e.amountAlign;if(c){var p,d=e.discount,m=e.discountAlign;return i.a.createElement(h.a,(p={justify:"flex"},Object(a.a)(p,"justify","end"),Object(a.a)(p,"key",n),Object(a.a)(p,"style",{marginBottom:"6px"}),p),i.a.createElement(x.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},r)),i.a.createElement(x.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:m||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},l?Object(E.e)(d):d?Object(E.e)(d.replace(/\$\s?|(,*)/g,"")):"0.00")),i.a.createElement(x.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:u||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},l?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}return i.a.createElement(h.a,(t={justify:"flex"},Object(a.a)(t,"justify","end"),Object(a.a)(t,"key",n),Object(a.a)(t,"style",{marginBottom:"6px"}),t),i.a.createElement(x.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},r)),i.a.createElement(x.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:u||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},l?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}))):null},G=function(e){var n=e.data;if(Array.isArray(n)&&n.length>0)return i.a.createElement(h.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},n.map((function(e,n){var t=e.label,a=e.name;return i.a.createElement(x.a,{style:{textAlign:"center"},key:n},i.a.createElement(h.a,null,i.a.createElement(x.a,{style:{marginBottom:"84px"}},i.a.createElement("span",{style:{fontSize:"12px"}},t)),i.a.createElement(x.a,null,i.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},M=Object(f.a)(A);n.n=Object(f.a)(U)},703:function(e,n,t){"use strict";var a=t(4),r=t.n(a),o=t(39);function i(){var e=Object(o.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return i=function(){return e},e}var l=t(26).b.div(i());n.a=function(e){return r.a.createElement(l,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},704:function(e,n,t){"use strict";var a=t(4),r=t.n(a),o=t(39),i=t(26),l=t(9),c=t(64);function s(){var e=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return e},e}var u=i.b.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(l.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),p=Object(c.a)(u),d=t(690);n.a=function(e){return e.title?r.a.createElement("div",null,r.a.createElement("div",{className:"isoPageHeaderWrapper"},r.a.createElement("h1",{className:"isoCode"},e.title),e.children),r.a.createElement(d.a,{style:{margin:e.marginBottom?"10px 0 20px 0":"10px 0"}})):r.a.createElement(p,{className:"isoComponentTitle"},e.children)}},835:function(e,n,t){"use strict";n.a={getCouriers:function(e,n,t){return{type:"GET_COURIERS_REQUEST",payload:{page:e,search:n,filter:t}}},createCourier:function(){return{type:"CREATE_COURIER_REQUEST"}},storeCourier:function(e){return{type:"STORE_COURIER_REQUEST",payload:{body:e}}},editCourier:function(e){return{type:"EDIT_COURIER_REQUEST",payload:{id_courier:e}}},updateCourier:function(e,n){return{type:"UPDATE_COURIER_REQUEST",payload:{id_courier:e,body:n}}},showCourier:function(e){return{type:"SHOW_COURIER_REQUEST",payload:{id_courier:e}}},deactivateCourier:function(e){return{type:"DEACTIVATE_COURIER_REQUEST",payload:{id_courier:e}}},activateCourier:function(e){return{type:"ACTIVATE_COURIER_REQUEST",payload:{id_courier:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=288.22c05bdb.chunk.js.map