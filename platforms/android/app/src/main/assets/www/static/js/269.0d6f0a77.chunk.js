(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[269],{1257:function(e,n,t){"use strict";t.r(n);var a=t(42),r=t(43),o=t(45),l=t(44),i=t(46),c=t(4),s=t.n(c),p=t(47),u=t(85),m=t(1),d=t(236),b=t(17),f=t(175),g=t(682),h=t(761),E=t(765),j=t(693),O=t(684),y=t(685),x=t(174),v=g.a.TextArea,k=h.a.TabPane,_=E.a.Group,C=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(i)))).state={id_permission:[],check:2},t.componentDidMount=function(){var e=t.props.role.role;2===t.state.check&&null!==t.props.role.role&&((0,t.props.form.setFieldsValue)({role_name:e.role_name,description:e.description}),t.setState({id_permission:e.id_permission,check:1}))},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,n){e||(n.id_permission=t.state.id_permission,t.props.submit(n))}))},t.handleChangeCheck=function(e){var n=t.props.role.permission_list,a=e.filter((function(e){return!t.state.id_permission.includes(e)})),r=t.state.id_permission.filter((function(n){return!e.includes(n)}));if(a.length>0){var o=n.find((function(e){return e.value===a[0]})),l=Object(d.a)(new Set([].concat(Object(d.a)(t.state.id_permission),Object(d.a)(e),Object(d.a)(o.permission_checks)))),i=n.find((function(e){return"All"===e.label&&e.permission_checks.includes(a[0])}));if(i)0===i.permission_checks.filter((function(e){return!l.includes(e)})).length&&l.push(i.value);t.setState({id_permission:l})}else{var c=n.find((function(e){return e.value===r[0]})),s=e.filter((function(e){return!c.permission_unchecks.includes(e)}));t.setState({id_permission:s})}},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this,n=this.props.form.getFieldDecorator,t=this.props.role,a=t.loading,r=t.permissions,o=t.raptor_module,l=(t.role&&t.role,[]),i=[],c=[],p=[],u=[],d=[],E=[],C=[],S=[],w=[];return r.map((function(e){if(8===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),l.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(1===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),i.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(2===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),c.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(10===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),p.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(3===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),u.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(4===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),d.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(5===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),E.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(6===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),C.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(7===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),S.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),r.map((function(e){if(9===e.parent_module){var n=[];e.permissions.map((function(e){n.push(Object(m.a)({},e,{label:Object(x.a)({id:e.label})}))})),w.push(Object(m.a)({},e,{label:Object(x.a)({id:e.permission_label}),value:e.id_permission,permissions:n}))}})),s.a.createElement(j.a,{layout:"vertical",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"isoDetailDataFlex",style:{padding:"0"}},s.a.createElement("div",{className:"isoColumn-2 isoFormGroupComp",style:{padding:"0 15px 0 0"}},s.a.createElement(j.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(b.a,{id:"roles.add.name"})}),n("role_name",{rules:[{required:!0,message:s.a.createElement(b.a,{id:"required"})},{max:50,message:s.a.createElement(b.a,{id:"maxLength50"})}]})(s.a.createElement(g.a,null))),s.a.createElement(j.a.Item,Object.assign({},{labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},{label:s.a.createElement(b.a,{id:"description"})}),n("description",{})(s.a.createElement(v,{autosize:{minRows:2}}))))),s.a.createElement(h.a,{defaultActiveKey:"1"},s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.master"}),key:"1",style:{marginLeft:"25px"}},s.a.createElement("br",null),l.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.purchase"}),key:"2"},s.a.createElement("br",null),i.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.sales"}),key:"3"},s.a.createElement("br",null),c.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),1===o?s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.raptor"}),key:"10"},s.a.createElement("br",null),p.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))):null,s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.inventory"}),key:"4"},s.a.createElement("br",null),u.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.finance"}),key:"5"},s.a.createElement("br",null),d.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.generalLedger"}),key:"6"},s.a.createElement("br",null),E.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.asset"}),key:"7"},s.a.createElement("br",null),C.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.promotion"}),key:"8"},s.a.createElement("br",null),S.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))}))),s.a.createElement(k,{tab:s.a.createElement(b.a,{id:"roles.tab.report"}),key:"9"},s.a.createElement("br",null),w.map((function(n){return s.a.createElement(s.a.Fragment,{key:n.id_module},s.a.createElement(O.a,null,s.a.createElement(y.a,{span:5},s.a.createElement("strong",{style:{fontSize:"16px"}}," ",Object(x.a)({id:n.module_name})," ")),s.a.createElement(y.a,{span:19},s.a.createElement(_,{options:n.permissions,value:e.state.id_permission,onChange:e.handleChangeCheck}))),s.a.createElement("br",null))})))),s.a.createElement(j.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},s.a.createElement(f.a,{type:"primary",htmlType:"submit",style:{marginTop:"20px",marginLeft:"50px"},loading:a},s.a.createElement(b.a,{id:"button.submit"}))))}}]),n}(c.Component),S=j.a.create({name:"update_role"})(C),w=t(176),R=t(683),F=t(703),A=t(704),z=t(845),T=t(702),B=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(i)))).handleSubmit=function(e){(0,t.props.updateRole)(t.props.match.params.id,e)},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.editRole)(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(){this.props.role.error&&(Object(w.a)("error",this.props.role.error),this.props.clearError()),this.props.role.success&&(Object(w.a)("success",this.props.role.success),this.props.clearSuccess(),this.props.history.replace("/dashboard/setup/roles"))}},{key:"render",value:function(){var e=this;return s.a.createElement(F.a,null,s.a.createElement(T.a,null,s.a.createElement(A.a,{title:s.a.createElement(b.a,{id:"roles.update.title"}),style:{margin:0}},s.a.createElement(f.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/roles")}},s.a.createElement(b.a,{id:"button.back"}))),this.props.role.loading&&!this.props.role.loadingSubmit?s.a.createElement("div",{className:"spinStyle"},s.a.createElement(R.a,{size:"large"})):s.a.createElement(S,{auth:this.props.auth,submit:this.handleSubmit,role:this.props.role})))}}]),n}(c.Component);n.default=Object(u.d)(Object(p.b)((function(e){return{auth:e.auth,role:e.role}}),z.a))(B)},702:function(e,n,t){"use strict";var a=t(49),r=t(39),o=t(4),l=t.n(o),i=t(26),c=t(9);function s(){var e=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function p(){var e=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return e},e}var u=i.b.h3(p(),Object(c.palette)("text",0)),m=i.b.p(s(),Object(c.palette)("text",3)),d=function(e){return l.a.createElement("div",null,e.title?l.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?l.a.createElement(m,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function b(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return b=function(){return e},e}var f=i.b.div(b(),Object(c.palette)("border",0),""),g=t(64),h=t(684),E=t(685),j=t(3);function O(){var e=Object(r.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return O=function(){return e},e}function y(){var e=Object(r.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return y=function(){return e},e}function x(){var e=Object(r.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return x=function(){return e},e}function v(){var e=Object(r.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return v=function(){return e},e}function k(){var e=Object(r.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return k=function(){return e},e}function _(){var e=Object(r.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return _=function(){return e},e}function C(){var e=Object(r.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(r.a)([""]);return S=function(){return e},e}function w(){var e=Object(r.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return w=function(){return e},e}function R(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return R=function(){return e},e}function F(){var e=Object(r.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return F=function(){return e},e}t.d(n,"g",(function(){return M})),t.d(n,"d",(function(){return G})),t.d(n,"j",(function(){return Q})),t.d(n,"c",(function(){return P})),t.d(n,"a",(function(){return q})),t.d(n,"f",(function(){return z})),t.d(n,"e",(function(){return T})),t.d(n,"k",(function(){return B})),t.d(n,"l",(function(){return U})),t.d(n,"m",(function(){return L})),t.d(n,"i",(function(){return D})),t.d(n,"h",(function(){return N})),t.d(n,"b",(function(){return H}));var A=Object(i.b)((function(e){return l.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},l.a.createElement(d,{title:e.title,subtitle:e.subtitle}),e.children)}))(F(),Object(c.palette)("text",1)),z=(i.b.div(R()),i.b.label(w(),Object(c.palette)("text",1)),i.b.div(S()),i.b.span(C(),Object(c.palette)("primary",0),Object(c.palette)("error",0),Object(c.palette)("warning",0),Object(c.palette)("success",0),Object(c.palette)("status",0),Object(c.palette)("status",8),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",1),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",0),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5))),T=i.b.span(_(),Object(c.palette)("primary",0),Object(c.palette)("error",0),Object(c.palette)("warning",0),Object(c.palette)("success",0),Object(c.palette)("status",0),Object(c.palette)("status",8),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",1),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",0),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5)),B=i.b.span(k()),I=i.b.div(v(),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(c.palette)("secondary",1),Object(c.palette)("text",3),Object(c.palette)("primary",0),Object(c.palette)("grayscale",0),Object(c.palette)("grayscale",2),Object(c.palette)("error",0),Object(c.palette)("error",2),Object(c.palette)("secondary",0),Object(c.palette)("secondary",2),Object(c.palette)("success",0),Object(c.palette)("success",2),Object(c.palette)("primary",0),Object(c.palette)("primary",2)),U={background:"#F1F3F6",marginBottom:"-7px"},L=function(e,n){n.status,n.title;return e},D=i.b.h4(x()),N=i.b.span(y()),H=i.b.span(O(),(function(e){return!0===e.italic?"italic":"normal"})),M=function(e){return l.a.createElement("strong",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},G=function(e){return l.a.createElement("span",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},Q=function(e){var n=e.data;return Array.isArray(n)&&n.length>0?l.a.createElement(l.a.Fragment,null,n.map((function(e,n){var t,r=e.label,o=e.amount,i=e.parseAmount,c=e.isDiscount,s=e.labelAlign,p=e.amountAlign;if(c){var u,m=e.discount,d=e.discountAlign;return l.a.createElement(h.a,(u={justify:"flex"},Object(a.a)(u,"justify","end"),Object(a.a)(u,"key",n),Object(a.a)(u,"style",{marginBottom:"6px"}),u),l.a.createElement(E.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},l.a.createElement("span",{style:{fontSize:"12px"}},r)),l.a.createElement(E.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:d||"right"}},l.a.createElement("span",{style:{fontSize:"12px"}},i?Object(j.e)(m):m?Object(j.e)(m.replace(/\$\s?|(,*)/g,"")):"0.00")),l.a.createElement(E.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},l.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}return l.a.createElement(h.a,(t={justify:"flex"},Object(a.a)(t,"justify","end"),Object(a.a)(t,"key",n),Object(a.a)(t,"style",{marginBottom:"6px"}),t),l.a.createElement(E.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},l.a.createElement("span",{style:{fontSize:"12px"}},r)),l.a.createElement(E.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},l.a.createElement("span",{style:{fontSize:"12px"}},i?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}))):null},P=function(e){var n=e.data;if(Array.isArray(n)&&n.length>0)return l.a.createElement(h.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},n.map((function(e,n){var t=e.label,a=e.name;return l.a.createElement(E.a,{style:{textAlign:"center"},key:n},l.a.createElement(h.a,null,l.a.createElement(E.a,{style:{marginBottom:"84px"}},l.a.createElement("span",{style:{fontSize:"12px"}},t)),l.a.createElement(E.a,null,l.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},q=Object(g.a)(A);n.n=Object(g.a)(I)},703:function(e,n,t){"use strict";var a=t(4),r=t.n(a),o=t(39);function l(){var e=Object(o.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return l=function(){return e},e}var i=t(26).b.div(l());n.a=function(e){return r.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},704:function(e,n,t){"use strict";var a=t(4),r=t.n(a),o=t(39),l=t(26),i=t(9),c=t(64);function s(){var e=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return e},e}var p=l.b.h1(s(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(c.a)(p),m=t(690);n.a=function(e){return e.title?r.a.createElement("div",null,r.a.createElement("div",{className:"isoPageHeaderWrapper"},r.a.createElement("h1",{className:"isoCode"},e.title),e.children),r.a.createElement(m.a,{style:{margin:e.marginBottom?"10px 0 20px 0":"10px 0"}})):r.a.createElement(u,{className:"isoComponentTitle"},e.children)}},845:function(e,n,t){"use strict";n.a={getRoles:function(e,n,t){return{type:"GET_ROLES_REQUEST",payload:{page:e,search:n,filter:t}}},createRole:function(){return{type:"CREATE_ROLE_REQUEST"}},storeRole:function(e){return{type:"STORE_ROLE_REQUEST",payload:{body:e}}},editRole:function(e){return{type:"EDIT_ROLE_REQUEST",payload:{id_role:e}}},updateRole:function(e,n){return{type:"UPDATE_ROLE_REQUEST",payload:{id_role:e,body:n}}},showRole:function(e){return{type:"SHOW_ROLE_REQUEST",payload:{id_role:e}}},deactivateRole:function(e){return{type:"DEACTIVATE_ROLE_REQUEST",payload:{id_role:e}}},activateRole:function(e){return{type:"ACTIVATE_ROLE_REQUEST",payload:{id_role:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=269.0d6f0a77.chunk.js.map