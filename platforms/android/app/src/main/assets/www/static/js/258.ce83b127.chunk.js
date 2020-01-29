(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[258],{1220:function(e,n,t){"use strict";t.r(n);var a=t(42),r=t(43),o=t(45),c=t(44),i=t(46),l=t(4),s=t.n(l),p=t(47),u=t(85),d=t(49),m=t(17),b=t(175),g=t(681),f=t(682),j=t(1038),h=t(693),x=t(685),y=t(765),O=g.a.Option,E=f.a.TextArea,v=f.a.Group,k=j.a.RangePicker,w=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(i)))).state={check_code:!1},t.handleChangeCode=function(){var e=t.props.form.setFieldsValue;t.setState({check_code:!t.state.check_code}),!1===t.state.check_code&&e(Object(d.a)({},"project_code",null))},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,n){e||(console.log("\u3084\u3063\u305f"),n.start_date=n.date[0].format("YYYY-MM-DD"),n.end_date=n.date[1].format("YYYY-MM-DD"),delete n.date,t.props.submit(n))}))},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props.form,n=e.getFieldDecorator,t=e.getFieldError,a=this.props.project,r=a.loading,o=a.loadingSubmit,c=a.errorField?a.errorField:[],i={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}};return s.a.createElement(h.a,{layout:"vertical",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"isoDetailDataFlex",style:{padding:"0"}},s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 15px 0 0"}},s.a.createElement(v,{compact:!0},s.a.createElement(x.a,{span:20},s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"projects.code"}),validateStatus:c.project_code||t("project_code")?"error":null,help:c.project_code?c.project_code:t("project_code")}),n("project_code",{rules:[{max:30,message:s.a.createElement(m.a,{id:"maxLength30"})}]})(s.a.createElement(f.a,{disabled:!!this.state.check_code})))),s.a.createElement(x.a,{span:4},s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"autoGenerateCode"})}),s.a.createElement(y.a,{style:{paddingTop:"5px",paddingLeft:"8px"},checked:this.state.check_code,onChange:this.handleChangeCode})))),s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"projects.name"})}),n("project_name",{rules:[{required:!0,message:s.a.createElement(m.a,{id:"required"})},{max:50,message:s.a.createElement(m.a,{id:"maxLength50"})}]})(s.a.createElement(f.a,null))),s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"projects.parent"})}),n("id_project_parent",{})(s.a.createElement(g.a,{loading:this.props.project.loading,showSearch:!0,optionFilterProp:"children",allowClear:!0},this.props.project.project_parents.map((function(e,n){return s.a.createElement(O,{key:n,value:e.id_project},e.project_code+" ("+e.project_name+")")}))))),s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"rangeDate"})}),n("date",{rules:[{required:!0,message:s.a.createElement(m.a,{id:"required"})}]})(s.a.createElement(k,{format:"DD MMMM YYYY",showTime:!0,style:{width:"100%"}})))),s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 0 0 15px"}},s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"projects.manager"})}),n("id_employee_manager",{})(s.a.createElement(g.a,{loading:this.props.project.loading,showSearch:!0,optionFilterProp:"children",allowClear:!0},this.props.project.employees.map((function(e,n){return s.a.createElement(O,{key:n,value:e.id_employee},e.employee_code+" ("+e.first_name+(e.last_name?" "+e.last_name:"")+")")}))))),s.a.createElement(h.a.Item,Object.assign({},i,{label:s.a.createElement(m.a,{id:"projects.customer"})}),n("id_customer",{})(s.a.createElement(g.a,{loading:this.props.project.loading,showSearch:!0,optionFilterProp:"children",allowClear:!0},this.props.project.customers.map((function(e,n){return s.a.createElement(O,{key:n,value:e.id_customer},e.customer_code+" ("+e.customer_name+")")}))))),s.a.createElement(h.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(m.a,{id:"locations.add.description"})}),n("description",{})(s.a.createElement(E,{autosize:{minRows:5}}))))),s.a.createElement(h.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},s.a.createElement(b.a,{type:"primary",htmlType:"submit",style:{marginTop:"20px",marginLeft:"50px"},loading:r||o},s.a.createElement(m.a,{id:"button.submit"}))))}}]),n}(l.Component),_=h.a.create({name:"create_project"})(w),C=t(176),S=t(703),T=t(704),A=t(839),R=t(702),F=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(i)))).componentDidMount=function(){(0,t.props.createProject)()},t.handleSubmit=function(e){(0,t.props.storeProject)(e)},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidUpdate",value:function(){this.props.project.error&&(Object(C.a)("error",this.props.project.error),this.props.clearError()),this.props.project.success&&this.props.history.replace("/dashboard/setup/projects")}},{key:"render",value:function(){var e=this;return s.a.createElement(S.a,null,s.a.createElement(R.a,null,s.a.createElement(T.a,{title:s.a.createElement(m.a,{id:"projects.add.title"}),style:{margin:0}},s.a.createElement(b.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/projects")}},s.a.createElement(m.a,{id:"button.back"}))),s.a.createElement(_,{auth:this.props.auth,submit:this.handleSubmit,project:this.props.project})))}}]),n}(l.Component);n.default=Object(u.d)(Object(p.b)((function(e){return{auth:e.auth,project:e.project}}),A.a))(F)},702:function(e,n,t){"use strict";var a=t(49),r=t(39),o=t(4),c=t.n(o),i=t(26),l=t(9);function s(){var e=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function p(){var e=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return e},e}var u=i.b.h3(p(),Object(l.palette)("text",0)),d=i.b.p(s(),Object(l.palette)("text",3)),m=function(e){return c.a.createElement("div",null,e.title?c.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?c.a.createElement(d,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function b(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return b=function(){return e},e}var g=i.b.div(b(),Object(l.palette)("border",0),""),f=t(64),j=t(684),h=t(685),x=t(3);function y(){var e=Object(r.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return y=function(){return e},e}function O(){var e=Object(r.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return O=function(){return e},e}function E(){var e=Object(r.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return E=function(){return e},e}function v(){var e=Object(r.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return v=function(){return e},e}function k(){var e=Object(r.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return k=function(){return e},e}function w(){var e=Object(r.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return w=function(){return e},e}function _(){var e=Object(r.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return _=function(){return e},e}function C(){var e=Object(r.a)([""]);return C=function(){return e},e}function S(){var e=Object(r.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return S=function(){return e},e}function T(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return T=function(){return e},e}function A(){var e=Object(r.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return A=function(){return e},e}t.d(n,"g",(function(){return M})),t.d(n,"d",(function(){return Y})),t.d(n,"j",(function(){return J})),t.d(n,"c",(function(){return L})),t.d(n,"a",(function(){return G})),t.d(n,"f",(function(){return F})),t.d(n,"e",(function(){return I})),t.d(n,"k",(function(){return P})),t.d(n,"l",(function(){return D})),t.d(n,"m",(function(){return z})),t.d(n,"i",(function(){return U})),t.d(n,"h",(function(){return H})),t.d(n,"b",(function(){return N}));var R=Object(i.b)((function(e){return c.a.createElement(g,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},c.a.createElement(m,{title:e.title,subtitle:e.subtitle}),e.children)}))(A(),Object(l.palette)("text",1)),F=(i.b.div(T()),i.b.label(S(),Object(l.palette)("text",1)),i.b.div(C()),i.b.span(_(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5))),I=i.b.span(w(),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("warning",0),Object(l.palette)("success",0),Object(l.palette)("status",0),Object(l.palette)("status",8),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",1),Object(l.palette)("status",4),Object(l.palette)("status",2),Object(l.palette)("status",3),Object(l.palette)("status",0),Object(l.palette)("status",4),Object(l.palette)("status",4),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5),Object(l.palette)("status",0),Object(l.palette)("status",2),Object(l.palette)("status",5)),P=i.b.span(k()),B=i.b.div(v(),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(l.palette)("secondary",1),Object(l.palette)("text",3),Object(l.palette)("primary",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",2),Object(l.palette)("error",0),Object(l.palette)("error",2),Object(l.palette)("secondary",0),Object(l.palette)("secondary",2),Object(l.palette)("success",0),Object(l.palette)("success",2),Object(l.palette)("primary",0),Object(l.palette)("primary",2)),D={background:"#F1F3F6",marginBottom:"-7px"},z=function(e,n){n.status,n.title;return e},U=i.b.h4(E()),H=i.b.span(O()),N=i.b.span(y(),(function(e){return!0===e.italic?"italic":"normal"})),M=function(e){return c.a.createElement("strong",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},Y=function(e){return c.a.createElement("span",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},J=function(e){var n=e.data;return Array.isArray(n)&&n.length>0?c.a.createElement(c.a.Fragment,null,n.map((function(e,n){var t,r=e.label,o=e.amount,i=e.parseAmount,l=e.isDiscount,s=e.labelAlign,p=e.amountAlign;if(l){var u,d=e.discount,m=e.discountAlign;return c.a.createElement(j.a,(u={justify:"flex"},Object(a.a)(u,"justify","end"),Object(a.a)(u,"key",n),Object(a.a)(u,"style",{marginBottom:"6px"}),u),c.a.createElement(h.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},r)),c.a.createElement(h.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:m||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?Object(x.e)(d):d?Object(x.e)(d.replace(/\$\s?|(,*)/g,"")):"0.00")),c.a.createElement(h.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}return c.a.createElement(j.a,(t={justify:"flex"},Object(a.a)(t,"justify","end"),Object(a.a)(t,"key",n),Object(a.a)(t,"style",{marginBottom:"6px"}),t),c.a.createElement(h.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},r)),c.a.createElement(h.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},c.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}))):null},L=function(e){var n=e.data;if(Array.isArray(n)&&n.length>0)return c.a.createElement(j.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},n.map((function(e,n){var t=e.label,a=e.name;return c.a.createElement(h.a,{style:{textAlign:"center"},key:n},c.a.createElement(j.a,null,c.a.createElement(h.a,{style:{marginBottom:"84px"}},c.a.createElement("span",{style:{fontSize:"12px"}},t)),c.a.createElement(h.a,null,c.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},G=Object(f.a)(R);n.n=Object(f.a)(B)},703:function(e,n,t){"use strict";var a=t(4),r=t.n(a),o=t(39);function c(){var e=Object(o.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return c=function(){return e},e}var i=t(26).b.div(c());n.a=function(e){return r.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},704:function(e,n,t){"use strict";var a=t(4),r=t.n(a),o=t(39),c=t(26),i=t(9),l=t(64);function s(){var e=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return e},e}var p=c.b.h1(s(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(l.a)(p),d=t(690);n.a=function(e){return e.title?r.a.createElement("div",null,r.a.createElement("div",{className:"isoPageHeaderWrapper"},r.a.createElement("h1",{className:"isoCode"},e.title),e.children),r.a.createElement(d.a,{style:{margin:e.marginBottom?"10px 0 20px 0":"10px 0"}})):r.a.createElement(u,{className:"isoComponentTitle"},e.children)}},839:function(e,n,t){"use strict";n.a={getProjects:function(e,n,t){return{type:"GET_PROJECTS_REQUEST",payload:{page:e,search:n,filter:t}}},createProject:function(){return{type:"CREATE_PROJECT_REQUEST"}},storeProject:function(e){return{type:"STORE_PROJECT_REQUEST",payload:{body:e}}},editProject:function(e){return{type:"EDIT_PROJECT_REQUEST",payload:{id_project:e}}},updateProject:function(e,n){return{type:"UPDATE_PROJECT_REQUEST",payload:{id_project:e,body:n}}},updateProjectHistory:function(e){return{type:"UPDATE_PROJECT_HISTORY_REQUEST",payload:{body:e}}},showProject:function(e){return{type:"SHOW_PROJECT_REQUEST",payload:{id_project:e}}},deactivateProject:function(e){return{type:"DEACTIVATE_PROJECT_REQUEST",payload:{id_project:e}}},activateProject:function(e){return{type:"ACTIVATE_PROJECT_REQUEST",payload:{id_project:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=258.ce83b127.chunk.js.map