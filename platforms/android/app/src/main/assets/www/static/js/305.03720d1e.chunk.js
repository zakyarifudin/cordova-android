(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[305],{1017:function(e,t,n){"use strict";n.r(t);var a=n(49),i=n(1),r=n(42),o=n(43),c=n(45),l=n(44),s=n(60),u=n(46),p=n(4),d=n.n(p),m=n(47),f=n(85),h=n(688),y=n(176),b=n(682),E=n(130),v=n(172),g=n(726),_=n(703),O=n(704),S=n(17),T=n(234),j=n(175),C=n(825),U=n(707),R=n(702),w=n(174),N=b.a.Search,k=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,u=new Array(o),p=0;p<o;p++)u[p]=arguments[p];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u)))).state={filter:{transaction_type:[],pagination:null},search:null,transaction_types:[{id:1,name:"All"},{id:2,name:"Purchase"},{id:3,name:"Sales"}]},n.handleSearch=function(e){var t=n.props.getUnits;n.setState({filter:{transaction_type:[],pagination:null}}),t(1,e)},n.handleSearchValue=function(e){var t=e.target.value;n.setState({search:t})},n.handleResetSearch=function(){var e=n.props.getUnits;n.setState({filter:{id_cash_flow_group:[],transaction_type:[],pagination:null}}),n.setState({search:null}),e()},n.handleFilterChange=function(e,t){n.setState({filter:Object(i.a)({},n.state.filter,Object(a.a)({},e,t))})},n.handleFilter=function(){var e=n.props.getUnits,t=n.state.filter,a="";t.transaction_type&&(a+="transaction_type="+t.transaction_type),t.pagination&&(a+=a?"&pagination="+t.pagination:"pagination="+t.pagination),n.setState({search:null}),e(1,null,a)},n.handleResetFilter=function(){var e=n.props.getUnits;n.setState({filter:{transaction_type:[],pagination:null}}),n.setState({search:null}),e()},n.handleRecord=function(e,t){"activate"===e?n.props.activateUnit(t):n.props.deactivateUnit(t)},n.handlePageChange=function(e){(0,n.props.getUnits)(e,n.props.unit.search,n.props.unit.filter)},n.listAction={title:"",dataIndex:"id_unit",rowKey:"id_unit",width:"10%",align:"center",render:function(e,t){return d.a.createElement("div",null,d.a.createElement(E.a,{placement:"topLeft",title:d.a.createElement(S.a,{id:"tooltip.update"})},d.a.createElement(h.a,{to:"".concat(n.props.match.path,"/update/").concat(e)},d.a.createElement(j.a,{size:"small",className:"invoiceEdtBtn"},d.a.createElement("i",{className:"ion-android-create"})))),t.is_active?d.a.createElement(g.a,{title:d.a.createElement(S.a,{id:"units.popconfirm.deactivate"}),onConfirm:n.handleRecord.bind(Object(s.a)(n),"deactivate",e),okText:Object(w.a)({id:"yes"}),cancelText:Object(w.a)({id:"no"})},d.a.createElement(E.a,{placement:"topRight",title:d.a.createElement(S.a,{id:"tooltip.deactivate"})},d.a.createElement(j.a,{size:"small",className:"invoiceDltBtn"},d.a.createElement("i",{className:"ion-close-circled"})))):d.a.createElement(g.a,{title:d.a.createElement(S.a,{id:"units.popconfirm.activate"}),onConfirm:n.handleRecord.bind(Object(s.a)(n),"activate",e),okText:Object(w.a)({id:"yes"}),cancelText:Object(w.a)({id:"no"})},d.a.createElement(E.a,{placement:"topRight",title:d.a.createElement(S.a,{id:"tooltip.activate"})},d.a.createElement(j.a,{size:"small",className:"invoiceRstBtn"},d.a.createElement("i",{className:"ion-refresh"})))))}},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getUnits)()}},{key:"componentDidUpdate",value:function(){this.props.unit.error&&(Object(y.a)("error",this.props.unit.error),this.props.clearError()),this.props.unit.success&&(Object(y.a)("success",this.props.unit.success),this.props.clearSuccess())}},{key:"render",value:function(){var e=this,t=[{title:Object(w.a)({id:"code"}),dataIndex:"unit_code",rowKey:"unit_code",width:"35%",render:function(e){return d.a.createElement("span",null,e)}},{title:Object(w.a)({id:"name"}),dataIndex:"unit_name",rowKey:"unit_name",width:"50%",render:function(e){return d.a.createElement("span",null,e)}},{title:Object(w.a)({id:"isDefault"}),dataIndex:"is_default",rowKey:"is_default",width:"5%",align:"center",render:function(e){var t,n;return 1===e?(t="primary",n=d.a.createElement(S.a,{id:"yes"})):(t="nonactive",n=d.a.createElement(S.a,{id:"no"})),d.a.createElement(R.f,{className:t},n)}},{title:Object(w.a)({id:"status"}),dataIndex:"is_active",rowKey:"is_active",width:"10%",align:"center",render:function(e){var t,n;return 1===e?(t="active",n=Object(w.a)({id:"active"})):(t="nonactive",n=Object(w.a)({id:"inactive"})),d.a.createElement(R.f,{className:t},n)}}],n=this.props.unit.units,a=[],r=this.props.auth.user,o=(r||[]).permissions;(o=o||[]).includes("Update Unit")&&4===t.length&&t.push(this.listAction),Object.keys(n).map((function(e,t){return a.push(Object(i.a)({},n[e],{key:e}))}));var c=this.props.unit,l=c.current_page,s=c.page_size,u=c.total;return d.a.createElement(_.a,null,d.a.createElement(R.a,null,d.a.createElement(O.a,{title:d.a.createElement(S.a,{id:"units.pageHeader"}),marginBottom:!0},d.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.includes("Create Unit")?d.a.createElement(h.a,{to:"".concat(this.props.match.path,"/add")},d.a.createElement(j.a,{type:"primary",className:"mateAddInvoiceBtn"},d.a.createElement(S.a,{id:"units.button.add"}))):null,d.a.createElement(j.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/menus")},style:{marginLeft:"5px"}},d.a.createElement(S.a,{id:"button.back"})))),d.a.createElement("div",{className:"isoInvoiceTableBtn"},d.a.createElement(N,{placeholder:Object(w.a)({id:"code"})+", "+Object(w.a)({id:"name"}),onSearch:this.handleSearch,style:{marginRight:"1%"},value:this.state.search,onChange:this.handleSearchValue}),d.a.createElement("div",{style:{marginTop:"auto",marginRight:"1%"}},d.a.createElement(j.a,{type:"primary",onClick:this.handleSearch.bind(this,this.state.search)},d.a.createElement(S.a,{id:"button.search"}))),d.a.createElement("div",{style:{width:"30%",marginTop:"auto",marginRight:"27%"}},d.a.createElement(j.a,{onClick:this.handleResetSearch},d.a.createElement(S.a,{id:"filter.reset"})))),d.a.createElement(R.n,null,0!==n.length||this.props.unit.loading?d.a.createElement("div",{className:"isoInvoiceTable"},d.a.createElement(T.a,{style:{width:"100%"}},d.a.createElement(U.a,{dataSource:a,columns:t,loading:this.props.unit.loading,className:"invoiceListTable",bordered:!0,pagination:!s||{current:l,pageSize:parseInt(s),total:u,onChange:this.handlePageChange.bind(this)}}))):d.a.createElement(v.a,{description:d.a.createElement(S.a,{id:"units.table.noData"})}))))}}]),t}(p.Component);t.default=Object(f.d)(Object(m.b)((function(e){return{unit:e.unit,auth:e.auth}}),C.a))(k)},726:function(e,t,n){"use strict";var a=n(733);t.a=a.a},733:function(e,t,n){"use strict";var a=n(4),i=n(50),r=n(130),o=n(21),c=n(66),l=n(129),s=n(98),u=n(19);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]])}return n},E=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,o=f(t).call(this,e),(n=!o||"object"!==p(o)&&"function"!==typeof o?y(i):o).onConfirm=function(e){n.setVisible(!1,e);var t=n.props.onConfirm;t&&t.call(y(y(n)),e)},n.onCancel=function(e){n.setVisible(!1,e);var t=n.props.onCancel;t&&t.call(y(y(n)),e)},n.onVisibleChange=function(e){n.setVisible(e)},n.saveTooltip=function(e){n.tooltip=e},n.renderOverlay=function(e,t){var i=n.props,r=i.okButtonProps,o=i.cancelButtonProps,l=i.title,s=i.cancelText,u=i.okText,p=i.okType,m=i.icon;return a.createElement("div",null,a.createElement("div",{className:"".concat(e,"-inner-content")},a.createElement("div",{className:"".concat(e,"-message")},m,a.createElement("div",{className:"".concat(e,"-message-title")},l)),a.createElement("div",{className:"".concat(e,"-buttons")},a.createElement(c.a,d({onClick:n.onCancel,size:"small"},o),s||t.cancelText),a.createElement(c.a,d({onClick:n.onConfirm,type:p,size:"small"},r),u||t.okText))))},n.renderConfirm=function(e){var t=e.getPrefixCls,i=n.props,o=i.prefixCls,c=i.placement,u=b(i,["prefixCls","placement"]),p=t("popover",o),m=a.createElement(l.a,{componentName:"Popconfirm",defaultLocale:s.a.Popconfirm},(function(e){return n.renderOverlay(p,e)}));return a.createElement(r.a,d({},u,{prefixCls:p,placement:c,onVisibleChange:n.onVisibleChange,visible:n.state.visible,overlay:m,ref:n.saveTooltip}))},n.state={visible:e.visible},n}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var a=n.onVisibleChange;a&&a(e,t)}},{key:"render",value:function(){return a.createElement(u.a,null,this.renderConfirm)}}])&&m(n.prototype,i),o&&m(n,o),t}(a.Component);E.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:a.createElement(o.a,{type:"exclamation-circle",theme:"filled"})},Object(i.polyfill)(E),t.a=E},825:function(e,t,n){"use strict";t.a={getUnits:function(e,t,n){return{type:"GET_UNITS_REQUEST",payload:{page:e,search:t,filter:n}}},createUnit:function(){return{type:"CREATE_UNIT_REQUEST"}},storeUnit:function(e){return{type:"STORE_UNIT_REQUEST",payload:{body:e}}},editUnit:function(e){return{type:"EDIT_UNIT_REQUEST",payload:{id_unit:e}}},updateUnit:function(e,t){return{type:"UPDATE_UNIT_REQUEST",payload:{id_unit:e,body:t}}},showUnit:function(e){return{type:"SHOW_UNIT_REQUEST",payload:{id_unit:e}}},deactivateUnit:function(e){return{type:"DEACTIVATE_UNIT_REQUEST",payload:{id_unit:e}}},activateUnit:function(e){return{type:"ACTIVATE_UNIT_REQUEST",payload:{id_unit:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=305.03720d1e.chunk.js.map