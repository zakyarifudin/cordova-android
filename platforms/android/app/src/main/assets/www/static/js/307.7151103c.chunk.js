(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[307],{1010:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(42),i=a(43),l=a(45),o=a(44),c=a(60),p=a(46),s=a(4),E=a.n(s),u=a(47),_=a(85),S=a(688),T=a(176),P=a(682),d=a(130),R=a(172),m=a(726),y=a(703),f=a(704),h=a(17),b=a(234),U=a(175),v=a(803),C=a(707),O=a(702),I=a(174),g=P.a.Search,L=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),p=0;p<n;p++)i[p]=arguments[p];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={search:null},a.handleSearch=function(e){(0,a.props.getSupplierTypes)(1,e)},a.handleSearchValue=function(e){var t=e.target.value;a.setState({search:t})},a.handleResetSearch=function(){var e=a.props.getSupplierTypes;a.setState({search:null}),e()},a.handleRecord=function(e,t){"activate"===e?a.props.activateSupplierType(t):a.props.deactivateSupplierType(t)},a.handlePageChange=function(e){(0,a.props.getSupplierTypes)(e,a.props.supplierType.search)},a.listAction={title:"",dataIndex:"id_supplier_type",rowKey:"id_supplier_type",width:"10%",align:"center",render:function(e,t){return E.a.createElement("div",null,E.a.createElement(d.a,{placement:"topLeft",title:E.a.createElement(h.a,{id:"tooltip.update"})},E.a.createElement(S.a,{to:"".concat(a.props.match.path,"/update/").concat(e)},E.a.createElement(U.a,{size:"small",className:"invoiceEdtBtn"},E.a.createElement("i",{className:"ion-android-create"})))),t.is_active?E.a.createElement(m.a,{title:E.a.createElement(h.a,{id:"supplierTypes.popconfirm.deactivate"}),onConfirm:a.handleRecord.bind(Object(c.a)(a),"deactivate",e),okText:Object(I.a)({id:"yes"}),cancelText:Object(I.a)({id:"no"})},E.a.createElement(d.a,{placement:"topRight",title:E.a.createElement(h.a,{id:"tooltip.deactivate"})},E.a.createElement(U.a,{size:"small",className:"invoiceDltBtn"},E.a.createElement("i",{className:"ion-close-circled"})))):E.a.createElement(m.a,{title:E.a.createElement(h.a,{id:"supplierTypes.popconfirm.activate"}),onConfirm:a.handleRecord.bind(Object(c.a)(a),"activate",e),okText:Object(I.a)({id:"yes"}),cancelText:Object(I.a)({id:"no"})},E.a.createElement(d.a,{placement:"topRight",title:E.a.createElement(h.a,{id:"tooltip.activate"})},E.a.createElement(U.a,{size:"small",className:"invoiceRstBtn"},E.a.createElement("i",{className:"ion-refresh"})))))}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getSupplierTypes)()}},{key:"componentDidUpdate",value:function(){this.props.supplierType.error&&(Object(T.a)("error",this.props.supplierType.error),this.props.clearError()),this.props.supplierType.success&&(Object(T.a)("success",this.props.supplierType.success),this.props.clearSuccess())}},{key:"render",value:function(){var e=this,t=[{title:Object(I.a)({id:"code"}),dataIndex:"supplier_type_code",rowKey:"supplier_type_code",width:"10%",render:function(e){return E.a.createElement("span",null,e)}},{title:Object(I.a)({id:"name"}),dataIndex:"supplier_type_name",rowKey:"supplier_type_name",width:"15%",render:function(e){return E.a.createElement("span",null,e)}},{title:Object(I.a)({id:"label.description"}),dataIndex:"description",rowKey:"description",width:"15%",render:function(e){return e?e.length>50?E.a.createElement(d.a,{placement:"bottom",title:e},e.substring(0,50)+"..."):e:""}},{title:Object(I.a)({id:"status"}),dataIndex:"is_active",rowKey:"is_active",width:"10%",align:"center",render:function(e){var t,a;return 1===e?(t="active",a=Object(I.a)({id:"active"})):(t="nonactive",a=Object(I.a)({id:"inactive"})),E.a.createElement(O.f,{className:t},a)}}],a=this.props.supplierType.supplierTypes,r=[],i=this.props.auth.user,l=(i||[]).permissions;(l=l||[]).includes("Update Supplier Type")&&4===t.length&&t.push(this.listAction),Object.keys(a).map((function(e,t){return r.push(Object(n.a)({},a[e],{key:e}))}));var o=this.props.supplierType,c=o.current_page,p=o.page_size,s=o.total;return E.a.createElement(y.a,null,E.a.createElement(O.a,null,E.a.createElement(f.a,{title:E.a.createElement(h.a,{id:"supplierTypes.pageHeader"}),marginBottom:!0},E.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.includes("Create Supplier Type")?E.a.createElement(S.a,{to:"".concat(this.props.match.path,"/add")},E.a.createElement(U.a,{type:"primary",className:"mateAddInvoiceBtn"},E.a.createElement(h.a,{id:"supplierTypes.button.add"}))):null,E.a.createElement(U.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/menus")},style:{marginLeft:"5px"}},E.a.createElement(h.a,{id:"button.back"})))),E.a.createElement("div",{className:"isoInvoiceTableBtn"},E.a.createElement(g,{placeholder:Object(I.a)({id:"code"})+", "+Object(I.a)({id:"name"}),onSearch:this.handleSearch,style:{marginRight:"1%"},value:this.state.search,onChange:this.handleSearchValue}),E.a.createElement("div",{style:{marginTop:"auto",marginRight:"1%"}},E.a.createElement(U.a,{type:"primary",onClick:this.handleSearch.bind(this,this.state.search)},E.a.createElement(h.a,{id:"button.search"}))),E.a.createElement("div",{style:{width:"30%",marginTop:"auto",marginRight:"27%"}},E.a.createElement(U.a,{onClick:this.handleResetSearch},E.a.createElement(h.a,{id:"filter.reset"})))),E.a.createElement(O.n,null,0!==a.length||this.props.supplierType.loading?E.a.createElement("div",{className:"isoInvoiceTable"},E.a.createElement(b.a,{style:{width:"100%"}},E.a.createElement(C.a,{dataSource:r,columns:t,loading:this.props.supplierType.loading,className:"invoiceListTable",bordered:!0,pagination:!p||{current:c,pageSize:parseInt(p),total:s,onChange:this.handlePageChange.bind(this)}}))):E.a.createElement(R.a,{description:E.a.createElement(h.a,{id:"supplierTypes.table.noData"})}))))}}]),t}(s.Component);t.default=Object(_.d)(Object(u.b)((function(e){return{supplierType:e.supplierType,auth:e.auth}}),v.a))(L)},726:function(e,t,a){"use strict";var n=a(733);t.a=n.a},733:function(e,t,a){"use strict";var n=a(4),r=a(50),i=a(130),l=a(21),o=a(66),c=a(129),p=a(98),s=a(19);function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a},R=function(e){function t(e){var a,r,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,l=S(t).call(this,e),(a=!l||"object"!==E(l)&&"function"!==typeof l?P(r):l).onConfirm=function(e){a.setVisible(!1,e);var t=a.props.onConfirm;t&&t.call(P(P(a)),e)},a.onCancel=function(e){a.setVisible(!1,e);var t=a.props.onCancel;t&&t.call(P(P(a)),e)},a.onVisibleChange=function(e){a.setVisible(e)},a.saveTooltip=function(e){a.tooltip=e},a.renderOverlay=function(e,t){var r=a.props,i=r.okButtonProps,l=r.cancelButtonProps,c=r.title,p=r.cancelText,s=r.okText,E=r.okType,_=r.icon;return n.createElement("div",null,n.createElement("div",{className:"".concat(e,"-inner-content")},n.createElement("div",{className:"".concat(e,"-message")},_,n.createElement("div",{className:"".concat(e,"-message-title")},c)),n.createElement("div",{className:"".concat(e,"-buttons")},n.createElement(o.a,u({onClick:a.onCancel,size:"small"},l),p||t.cancelText),n.createElement(o.a,u({onClick:a.onConfirm,type:E,size:"small"},i),s||t.okText))))},a.renderConfirm=function(e){var t=e.getPrefixCls,r=a.props,l=r.prefixCls,o=r.placement,s=d(r,["prefixCls","placement"]),E=t("popover",l),_=n.createElement(c.a,{componentName:"Popconfirm",defaultLocale:p.a.Popconfirm},(function(e){return a.renderOverlay(E,e)}));return n.createElement(i.a,u({},s,{prefixCls:E,placement:o,onVisibleChange:a.onVisibleChange,visible:a.state.visible,overlay:_,ref:a.saveTooltip}))},a.state={visible:e.visible},a}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),a=t,l=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var a=this.props;"visible"in a||this.setState({visible:e});var n=a.onVisibleChange;n&&n(e,t)}},{key:"render",value:function(){return n.createElement(s.a,null,this.renderConfirm)}}])&&_(a.prototype,r),l&&_(a,l),t}(n.Component);R.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:n.createElement(l.a,{type:"exclamation-circle",theme:"filled"})},Object(r.polyfill)(R),t.a=R},803:function(e,t,a){"use strict";t.a={GET_SUPPLIER_TYPES_REQUEST:"GET_SUPPLIER_TYPES_REQUEST",GET_SUPPLIER_TYPES_SUCCESS:"GET_SUPPLIER_TYPES_SUCCESS",STORE_SUPPLIER_TYPE_REQUEST:"STORE_SUPPLIER_TYPE_REQUEST",STORE_SUPPLIER_TYPE_SUCCESS:"STORE_SUPPLIER_TYPE_SUCCESS",STORE_SUPPLIER_TYPE_ERROR:"STORE_SUPPLIER_TYPE_ERROR",EDIT_SUPPLIER_TYPE_REQUEST:"EDIT_SUPPLIER_TYPE_REQUEST",EDIT_SUPPLIER_TYPE_SUCCESS:"EDIT_SUPPLIER_TYPE_SUCCESS",EDIT_SUPPLIER_TYPE_ERROR:"EDIT_SUPPLIER_TYPE_ERROR",UPDATE_SUPPLIER_TYPE_REQUEST:"UPDATE_SUPPLIER_TYPE_REQUEST",UPDATE_SUPPLIER_TYPE_SUCCESS:"UPDATE_SUPPLIER_TYPE_SUCCESS",UPDATE_SUPPLIER_TYPE_ERROR:"UPDATE_SUPPLIER_TYPE_ERROR",SHOW_SUPPLIER_TYPE_REQUEST:"SHOW_SUPPLIER_TYPE_REQUEST",SHOW_SUPPLIER_TYPE_SUCCESS:"SHOW_SUPPLIER_TYPE_SUCCESS",SHOW_SUPPLIER_TYPE_ERROR:"SHOW_SUPPLIER_TYPE_ERROR",DEACTIVATE_SUPPLIER_TYPE_REQUEST:"DEACTIVATE_SUPPLIER_TYPE_REQUEST",DEACTIVATE_SUPPLIER_TYPE_SUCCESS:"DEACTIVATE_SUPPLIER_TYPE_SUCCESS",DEACTIVATE_SUPPLIER_TYPE_ERROR:"DEACTIVATE_SUPPLIER_TYPE_ERROR",ACTIVATE_SUPPLIER_TYPE_REQUEST:"ACTIVATE_SUPPLIER_TYPE_REQUEST",ACTIVATE_SUPPLIER_TYPE_SUCCESS:"ACTIVATE_SUPPLIER_TYPE_SUCCESS",ACTIVATE_SUPPLIER_TYPE_ERROR:"ACTIVATE_SUPPLIER_TYPE_ERROR",CLEAR_SUCCESS:"CLEAR_SUCCESS",CLEAR_ERROR:"CLEAR_ERROR",CLEAR_ERROR_FIELD:"CLEAR_ERROR_FIELD",getSupplierTypes:function(e,t){return{type:"GET_SUPPLIER_TYPES_REQUEST",payload:{page:e,search:t}}},storeSupplierType:function(e){return{type:"STORE_SUPPLIER_TYPE_REQUEST",payload:{body:e}}},editSupplierType:function(e){return{type:"EDIT_SUPPLIER_TYPE_REQUEST",payload:{id_supplier_type:e}}},updateSupplierType:function(e,t){return{type:"UPDATE_SUPPLIER_TYPE_REQUEST",payload:{id_supplier_type:e,body:t}}},showSupplierType:function(e){return{type:"SHOW_SUPPLIER_TYPE_REQUEST",payload:{id_supplier_type:e}}},deactivateSupplierType:function(e){return{type:"DEACTIVATE_SUPPLIER_TYPE_REQUEST",payload:{id_supplier_type:e}}},activateSupplierType:function(e){return{type:"ACTIVATE_SUPPLIER_TYPE_REQUEST",payload:{id_supplier_type:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=307.7151103c.chunk.js.map