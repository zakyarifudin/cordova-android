(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[302],{1023:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(42),o=a(43),i=a(45),l=a(44),c=a(60),s=a(46),p=a(4),u=a.n(p),d=a(47),m=a(85),f=a(688),h=a(176),E=a(682),b=a(130),y=a(172),v=a(726),g=a(703),O=a(704),R=a(17),_=a(234),C=a(175),S=a(845),j=a(707),T=a(702),w=a(174),k=E.a.Search,x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={search:null},a.handleSearch=function(e){(0,a.props.getRoles)(1,e)},a.handleSearchValue=function(e){var t=e.target.value;a.setState({search:t})},a.handleResetSearch=function(){var e=a.props.getRoles;a.setState({search:null}),e()},a.handleRecord=function(e,t){"activate"===e?a.props.activateRole(t):a.props.deactivateRole(t)},a.handlePageChange=function(e){(0,a.props.getRoles)(e,a.props.role.search)},a.listAction={title:"",dataIndex:"id_role",rowKey:"id_role",width:"10%",align:"center",render:function(e,t){return u.a.createElement("div",null,u.a.createElement(b.a,{placement:"topLeft",title:u.a.createElement(R.a,{id:"tooltip.update"})},u.a.createElement(f.a,{to:"".concat(a.props.match.path,"/update/").concat(e)},u.a.createElement(C.a,{size:"small",className:"invoiceEdtBtn"},u.a.createElement("i",{className:"ion-android-create"})))),t.is_active?u.a.createElement(v.a,{title:u.a.createElement(R.a,{id:"roles.popconfirm.deactivate"}),onConfirm:a.handleRecord.bind(Object(c.a)(a),"deactivate",e),okText:Object(w.a)({id:"yes"}),cancelText:Object(w.a)({id:"no"})},u.a.createElement(b.a,{placement:"topRight",title:u.a.createElement(R.a,{id:"tooltip.deactivate"})},u.a.createElement(C.a,{size:"small",className:"invoiceDltBtn"},u.a.createElement("i",{className:"ion-close-circled"})))):u.a.createElement(v.a,{title:u.a.createElement(R.a,{id:"roles.popconfirm.activate"}),onConfirm:a.handleRecord.bind(Object(c.a)(a),"activate",e),okText:Object(w.a)({id:"yes"}),cancelText:Object(w.a)({id:"no"})},u.a.createElement(b.a,{placement:"topRight",title:u.a.createElement(R.a,{id:"tooltip.activate"})},u.a.createElement(C.a,{size:"small",className:"invoiceRstBtn"},u.a.createElement("i",{className:"ion-refresh"})))))}},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getRoles)()}},{key:"componentDidUpdate",value:function(){this.props.role.error&&(Object(h.a)("error",this.props.role.error),this.props.clearError()),this.props.role.success&&(Object(h.a)("success",this.props.role.success),this.props.clearSuccess())}},{key:"render",value:function(){var e=this,t=[{title:Object(w.a)({id:"name"}),dataIndex:"role_name",rowKey:"role_name",width:"15%",render:function(e){return u.a.createElement("span",null,e)}},{title:Object(w.a)({id:"label.description"}),dataIndex:"description",rowKey:"description",width:"55%",render:function(e){return e?e.length>100?u.a.createElement(b.a,{placement:"bottom",title:e},e.substring(0,100)+"..."):e:""}},{title:"Super Admin",dataIndex:"is_superadmin",rowKey:"is_superadmin",width:"10%",align:"center",render:function(e){var t,a;return 1===e?(t="active",a=u.a.createElement(R.a,{id:"yes"})):(t="nonactive",a=u.a.createElement(R.a,{id:"no"})),u.a.createElement(T.f,{className:t},a)}},{title:Object(w.a)({id:"status"}),dataIndex:"is_active",rowKey:"is_active",width:"10%",align:"center",render:function(e){var t,a;return 1===e?(t="active",a=Object(w.a)({id:"active"})):(t="nonactive",a=Object(w.a)({id:"inactive"})),u.a.createElement(T.f,{className:t},a)}}],a=this.props.role.roles,r=[],o=this.props.auth.user,i=(o||[]).permissions;(i=i||[]).includes("Update Role")&&4===t.length&&t.push(this.listAction),Object.keys(a).map((function(e,t){return r.push(Object(n.a)({},a[e],{key:e}))}));var l=this.props.role,c=l.current_page,s=l.page_size,p=l.total;return u.a.createElement(g.a,null,u.a.createElement(T.a,null,u.a.createElement(O.a,{title:u.a.createElement(R.a,{id:"roles.pageHeader"}),marginBottom:!0},u.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.includes("Create Role")?u.a.createElement(f.a,{to:"".concat(this.props.match.path,"/add")},u.a.createElement(C.a,{type:"primary",className:"mateAddInvoiceBtn"},u.a.createElement(R.a,{id:"roles.button.add"}))):null,u.a.createElement(C.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/menus")},style:{marginLeft:"5px"}},u.a.createElement(R.a,{id:"button.back"})))),u.a.createElement("div",{className:"isoInvoiceTableBtn"},u.a.createElement(k,{placeholder:Object(w.a)({id:"name"}),onSearch:this.handleSearch,style:{marginRight:"1%"},value:this.state.search,onChange:this.handleSearchValue}),u.a.createElement("div",{style:{marginTop:"auto",marginRight:"1%"}},u.a.createElement(C.a,{type:"primary",onClick:this.handleSearch.bind(this,this.state.search)},u.a.createElement(R.a,{id:"button.search"}))),u.a.createElement("div",{style:{width:"30%",marginTop:"auto",marginRight:"27%"}},u.a.createElement(C.a,{onClick:this.handleResetSearch},u.a.createElement(R.a,{id:"filter.reset"})))),u.a.createElement(T.n,null,0!==a.length||this.props.role.loading?u.a.createElement("div",{className:"isoInvoiceTable"},u.a.createElement(_.a,{style:{width:"100%"}},u.a.createElement(j.a,{dataSource:r,columns:t,loading:this.props.role.loading,className:"invoiceListTable",bordered:!0,pagination:!s||{current:c,pageSize:parseInt(s),total:p,onChange:this.handlePageChange.bind(this)}}))):u.a.createElement(y.a,{description:u.a.createElement(R.a,{id:"roles.table.noData"})}))))}}]),t}(p.Component);t.default=Object(m.d)(Object(d.b)((function(e){return{role:e.role,auth:e.auth}}),S.a))(x)},726:function(e,t,a){"use strict";var n=a(733);t.a=n.a},733:function(e,t,a){"use strict";var n=a(4),r=a(50),o=a(130),i=a(21),l=a(66),c=a(129),s=a(98),p=a(19);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a},y=function(e){function t(e){var a,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=f(t).call(this,e),(a=!i||"object"!==u(i)&&"function"!==typeof i?E(r):i).onConfirm=function(e){a.setVisible(!1,e);var t=a.props.onConfirm;t&&t.call(E(E(a)),e)},a.onCancel=function(e){a.setVisible(!1,e);var t=a.props.onCancel;t&&t.call(E(E(a)),e)},a.onVisibleChange=function(e){a.setVisible(e)},a.saveTooltip=function(e){a.tooltip=e},a.renderOverlay=function(e,t){var r=a.props,o=r.okButtonProps,i=r.cancelButtonProps,c=r.title,s=r.cancelText,p=r.okText,u=r.okType,m=r.icon;return n.createElement("div",null,n.createElement("div",{className:"".concat(e,"-inner-content")},n.createElement("div",{className:"".concat(e,"-message")},m,n.createElement("div",{className:"".concat(e,"-message-title")},c)),n.createElement("div",{className:"".concat(e,"-buttons")},n.createElement(l.a,d({onClick:a.onCancel,size:"small"},i),s||t.cancelText),n.createElement(l.a,d({onClick:a.onConfirm,type:u,size:"small"},o),p||t.okText))))},a.renderConfirm=function(e){var t=e.getPrefixCls,r=a.props,i=r.prefixCls,l=r.placement,p=b(r,["prefixCls","placement"]),u=t("popover",i),m=n.createElement(c.a,{componentName:"Popconfirm",defaultLocale:s.a.Popconfirm},(function(e){return a.renderOverlay(u,e)}));return n.createElement(o.a,d({},p,{prefixCls:u,placement:l,onVisibleChange:a.onVisibleChange,visible:a.state.visible,overlay:m,ref:a.saveTooltip}))},a.state={visible:e.visible},a}var a,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),a=t,i=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var a=this.props;"visible"in a||this.setState({visible:e});var n=a.onVisibleChange;n&&n(e,t)}},{key:"render",value:function(){return n.createElement(p.a,null,this.renderConfirm)}}])&&m(a.prototype,r),i&&m(a,i),t}(n.Component);y.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:n.createElement(i.a,{type:"exclamation-circle",theme:"filled"})},Object(r.polyfill)(y),t.a=y},845:function(e,t,a){"use strict";t.a={getRoles:function(e,t,a){return{type:"GET_ROLES_REQUEST",payload:{page:e,search:t,filter:a}}},createRole:function(){return{type:"CREATE_ROLE_REQUEST"}},storeRole:function(e){return{type:"STORE_ROLE_REQUEST",payload:{body:e}}},editRole:function(e){return{type:"EDIT_ROLE_REQUEST",payload:{id_role:e}}},updateRole:function(e,t){return{type:"UPDATE_ROLE_REQUEST",payload:{id_role:e,body:t}}},showRole:function(e){return{type:"SHOW_ROLE_REQUEST",payload:{id_role:e}}},deactivateRole:function(e){return{type:"DEACTIVATE_ROLE_REQUEST",payload:{id_role:e}}},activateRole:function(e){return{type:"ACTIVATE_ROLE_REQUEST",payload:{id_role:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=302.5f14fc29.chunk.js.map