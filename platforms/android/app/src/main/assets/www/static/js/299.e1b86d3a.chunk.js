(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[299],{1030:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(1),c=n(42),i=n(43),o=n(45),l=n(44),s=n(60),u=n(46),p=n(4),m=n.n(p),f=n(47),d=n(85),y=n(688),h=n(176),E=n(682),v=n(130),b=n(172),g=n(726),C=n(703),R=n(704),S=n(17),_=n(234),O=n(175),T=n(846),N=n(707),j=n(702),w=E.a.Search,k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,u=new Array(i),p=0;p<i;p++)u[p]=arguments[p];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u)))).state={filter:{pagination:null},search:null},n.handleSearch=function(e){var t=n.props.getCurrencies;n.setState({filter:{pagination:null}}),t(1,e)},n.handleSearchValue=function(e){var t=e.target.value;n.setState({search:t})},n.handleResetSearch=function(){var e=n.props.getCurrencies;n.setState({filter:{pagination:null}}),n.setState({search:null}),e()},n.handleFilterChange=function(e,t){n.setState({filter:Object(r.a)({},n.state.filter,Object(a.a)({},e,t))})},n.handleFilter=function(){var e=n.props.getCurrencies,t=n.state.filter,a="";t.pagination&&(a+=a?"&pagination="+t.pagination:"pagination="+t.pagination),n.setState({search:null}),e(1,null,a)},n.handleResetFilter=function(){var e=n.props.getCurrencies;n.setState({filter:{pagination:null}}),n.setState({search:null}),e()},n.handleRecord=function(e,t){"activate"===e?n.props.activateCurrency(t):n.props.deactivateCurrency(t)},n.handlePageChange=function(e){(0,n.props.getCurrencies)(e,n.props.currency.search,n.props.currency.filter)},n.columns=[{title:"Code",dataIndex:"currency_code",rowKey:"currency_code",width:"5%",render:function(e){return m.a.createElement("span",null,e)}},{title:"Name",dataIndex:"currency_name",rowKey:"currency_name",width:"10%",render:function(e){return m.a.createElement("span",null,e)}},{title:"Base",dataIndex:"is_base",rowKey:"is_base",width:"5%",align:"center",render:function(e){var t,n;return 1===e?(t="primary",n="Yes"):(t="nonactive",n="No"),m.a.createElement(j.f,{className:t},n)}},{title:"Status",dataIndex:"is_active",rowKey:"is_active",width:"10%",align:"center",render:function(e){var t,n;return 1===e?(t="active",n="Active"):(t="nonactive",n="Inactive"),m.a.createElement(j.f,{className:t},n)}}],n.listAction={title:"",dataIndex:"id_currency",rowKey:"id_currency",width:"10%",align:"center",render:function(e,t){return m.a.createElement("div",null,m.a.createElement(v.a,{placement:"topLeft",title:m.a.createElement(S.a,{id:"tooltip.update"})},m.a.createElement(y.a,{to:"".concat(n.props.match.path,"/update/").concat(e)},m.a.createElement(O.a,{size:"small",className:"invoiceEdtBtn"},m.a.createElement("i",{className:"ion-android-create"})))),t.is_active?m.a.createElement(g.a,{title:m.a.createElement(S.a,{id:"currencies.popconfirm.deactivate"}),onConfirm:n.handleRecord.bind(Object(s.a)(n),"deactivate",e),okText:"Yes",cancelText:"No"},m.a.createElement(v.a,{placement:"topRight",title:m.a.createElement(S.a,{id:"tooltip.deactivate"})},m.a.createElement(O.a,{size:"small",className:"invoiceDltBtn"},m.a.createElement("i",{className:"ion-close-circled"})))):m.a.createElement(g.a,{title:m.a.createElement(S.a,{id:"currencies.popconfirm.activate"}),onConfirm:n.handleRecord.bind(Object(s.a)(n),"activate",e),okText:"Yes",cancelText:"No"},m.a.createElement(v.a,{placement:"topRight",title:m.a.createElement(S.a,{id:"tooltip.activate"})},m.a.createElement(O.a,{size:"small",className:"invoiceRstBtn"},m.a.createElement("i",{className:"ion-refresh"})))))}},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getCurrencies)()}},{key:"componentDidUpdate",value:function(){this.props.currency.error&&(Object(h.a)("error",this.props.currency.error),this.props.clearError()),this.props.currency.success&&(Object(h.a)("success",this.props.currency.success),this.props.clearSuccess())}},{key:"render",value:function(){var e=this,t=this.props.currency.currencies,n=[],a=this.props.auth.user,c=(a||[]).permissions;(c=c||[]).includes("Update Currency")&&4===this.columns.length&&this.columns.push(this.listAction),Object.keys(t).map((function(e,a){return n.push(Object(r.a)({},t[e],{key:e}))}));var i=this.props.currency,o=i.current_page,l=i.page_size,s=i.total;return m.a.createElement(C.a,null,m.a.createElement(j.a,null,m.a.createElement(R.a,{title:m.a.createElement(S.a,{id:"currencies.pageHeader"}),marginBottom:!0},m.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},m.a.createElement(O.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/menus")},style:{marginLeft:"5px"}},m.a.createElement(S.a,{id:"button.back"})))),m.a.createElement("div",{className:"isoInvoiceTableBtn"},m.a.createElement(w,{placeholder:"Name",onSearch:this.handleSearch,style:{marginRight:"1%"},value:this.state.search,onChange:this.handleSearchValue}),m.a.createElement("div",{style:{marginTop:"auto",marginRight:"1%"}},m.a.createElement(O.a,{type:"primary",onClick:this.handleSearch.bind(this,this.state.search)},m.a.createElement(S.a,{id:"button.search"}))),m.a.createElement("div",{style:{marginTop:"auto",marginRight:"27%"}},m.a.createElement(O.a,{onClick:this.handleResetSearch},m.a.createElement(S.a,{id:"filter.reset"})))),m.a.createElement(j.n,null,0!==t.length||this.props.currency.loading?m.a.createElement("div",{className:"isoInvoiceTable"},m.a.createElement(_.a,{style:{width:"100%"}},m.a.createElement(N.a,{dataSource:n,columns:this.columns,loading:this.props.currency.loading,className:"invoiceListTable",bordered:!0,pagination:!l||{current:o,pageSize:parseInt(l),total:s,onChange:this.handlePageChange.bind(this)}}))):m.a.createElement(b.a,{description:m.a.createElement(S.a,{id:"currencies.table.noData"})}))))}}]),t}(p.Component);t.default=Object(d.d)(Object(f.b)((function(e){return{currency:e.currency,auth:e.auth}}),T.a))(k)},726:function(e,t,n){"use strict";var a=n(733);t.a=a.a},733:function(e,t,n){"use strict";var a=n(4),r=n(50),c=n(130),i=n(21),o=n(66),l=n(129),s=n(98),u=n(19);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(e){var n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=d(t).call(this,e),(n=!i||"object"!==p(i)&&"function"!==typeof i?h(r):i).onConfirm=function(e){n.setVisible(!1,e);var t=n.props.onConfirm;t&&t.call(h(h(n)),e)},n.onCancel=function(e){n.setVisible(!1,e);var t=n.props.onCancel;t&&t.call(h(h(n)),e)},n.onVisibleChange=function(e){n.setVisible(e)},n.saveTooltip=function(e){n.tooltip=e},n.renderOverlay=function(e,t){var r=n.props,c=r.okButtonProps,i=r.cancelButtonProps,l=r.title,s=r.cancelText,u=r.okText,p=r.okType,f=r.icon;return a.createElement("div",null,a.createElement("div",{className:"".concat(e,"-inner-content")},a.createElement("div",{className:"".concat(e,"-message")},f,a.createElement("div",{className:"".concat(e,"-message-title")},l)),a.createElement("div",{className:"".concat(e,"-buttons")},a.createElement(o.a,m({onClick:n.onCancel,size:"small"},i),s||t.cancelText),a.createElement(o.a,m({onClick:n.onConfirm,type:p,size:"small"},c),u||t.okText))))},n.renderConfirm=function(e){var t=e.getPrefixCls,r=n.props,i=r.prefixCls,o=r.placement,u=E(r,["prefixCls","placement"]),p=t("popover",i),f=a.createElement(l.a,{componentName:"Popconfirm",defaultLocale:s.a.Popconfirm},(function(e){return n.renderOverlay(p,e)}));return a.createElement(c.a,m({},u,{prefixCls:p,placement:o,onVisibleChange:n.onVisibleChange,visible:n.state.visible,overlay:f,ref:n.saveTooltip}))},n.state={visible:e.visible},n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,i=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var a=n.onVisibleChange;a&&a(e,t)}},{key:"render",value:function(){return a.createElement(u.a,null,this.renderConfirm)}}])&&f(n.prototype,r),i&&f(n,i),t}(a.Component);v.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:a.createElement(i.a,{type:"exclamation-circle",theme:"filled"})},Object(r.polyfill)(v),t.a=v},846:function(e,t,n){"use strict";t.a={getCurrencies:function(e,t,n){return{type:"GET_CURRENCIES_REQUEST",payload:{page:e,search:t,filter:n}}},createCurrency:function(){return{type:"CREATE_CURRENCY_REQUEST"}},storeCurrency:function(e){return{type:"STORE_CURRENCY_REQUEST",payload:{body:e}}},editCurrency:function(e){return{type:"EDIT_CURRENCY_REQUEST",payload:{id_currency:e}}},updateCurrency:function(e,t){return{type:"UPDATE_CURRENCY_REQUEST",payload:{id_currency:e,body:t}}},showCurrency:function(e){return{type:"SHOW_CURRENCY_REQUEST",payload:{id_currency:e}}},deactivateCurrency:function(e){return{type:"DEACTIVATE_CURRENCY_REQUEST",payload:{id_currency:e}}},activateCurrency:function(e){return{type:"ACTIVATE_CURRENCY_REQUEST",payload:{id_currency:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=299.e1b86d3a.chunk.js.map