(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[301],{1025:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(42),r=a(43),o=a(45),l=a(44),c=a(60),s=a(46),E=a(4),T=a.n(E),p=a(47),u=a(85),_=a(688),d=a(176),m=a(682),b=a(130),O=a(172),f=a(726),h=a(703),S=a(704),R=a(17),y=a(234),v=a(175),C=a(826),I=a(707),j=a(702),J=a(174),g=m.a.Search,L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={search:null},a.handleSearch=function(e){(0,a.props.getJobTitles)(1,e)},a.handleSearchValue=function(e){var t=e.target.value;a.setState({search:t})},a.handleResetSearch=function(){var e=a.props.getJobTitles;a.setState({search:null}),e()},a.handleRecord=function(e,t){"activate"===e?a.props.activateJobTitle(t):a.props.deactivateJobTitle(t)},a.handlePageChange=function(e){(0,a.props.getJobTitles)(e,a.props.jobTitle.search)},a.listAction={title:"",dataIndex:"id_job_title",rowKey:"id_job_title",width:"10%",align:"center",render:function(e,t){return T.a.createElement("div",null,T.a.createElement(b.a,{placement:"topLeft",title:T.a.createElement(R.a,{id:"tooltip.update"})},T.a.createElement(_.a,{to:"".concat(a.props.match.path,"/update/").concat(e)},T.a.createElement(v.a,{size:"small",className:"invoiceEdtBtn"},T.a.createElement("i",{className:"ion-android-create"})))),t.is_active?T.a.createElement(f.a,{title:T.a.createElement(R.a,{id:"jobTitles.popconfirm.deactivate"}),onConfirm:a.handleRecord.bind(Object(c.a)(a),"deactivate",e),okText:Object(J.a)({id:"yes"}),cancelText:Object(J.a)({id:"no"})},T.a.createElement(b.a,{placement:"topRight",title:T.a.createElement(R.a,{id:"tooltip.deactivate"})},T.a.createElement(v.a,{size:"small",className:"invoiceDltBtn"},T.a.createElement("i",{className:"ion-close-circled"})))):T.a.createElement(f.a,{title:T.a.createElement(R.a,{id:"jobTitles.popconfirm.activate"}),onConfirm:a.handleRecord.bind(Object(c.a)(a),"activate",e),okText:Object(J.a)({id:"yes"}),cancelText:Object(J.a)({id:"no"})},T.a.createElement(b.a,{placement:"topRight",title:T.a.createElement(R.a,{id:"tooltip.activate"})},T.a.createElement(v.a,{size:"small",className:"invoiceRstBtn"},T.a.createElement("i",{className:"ion-refresh"})))))}},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getJobTitles)()}},{key:"componentDidUpdate",value:function(){this.props.jobTitle.error&&(Object(d.a)("error",this.props.jobTitle.error),this.props.clearError()),this.props.jobTitle.success&&(Object(d.a)("success",this.props.jobTitle.success),this.props.clearSuccessJobTitle())}},{key:"render",value:function(){var e=this,t=[{title:Object(J.a)({id:"code"}),dataIndex:"job_title_code",rowKey:"job_title_code",width:"10%",render:function(e){return T.a.createElement("span",null,e)}},{title:Object(J.a)({id:"name"}),dataIndex:"job_title_name",rowKey:"job_title_name",width:"15%",render:function(e){return T.a.createElement("span",null,e)}},{title:Object(J.a)({id:"label.description"}),dataIndex:"description",rowKey:"description",width:"15%",render:function(e){return e?e.length>50?T.a.createElement(b.a,{placement:"bottom",title:e},e.substring(0,50)+"..."):e:""}},{title:Object(J.a)({id:"status"}),dataIndex:"is_active",rowKey:"is_active",width:"10%",align:"center",render:function(e){var t,a;return 1===e?(t="active",a=Object(J.a)({id:"active"})):(t="nonactive",a=Object(J.a)({id:"inactive"})),T.a.createElement(j.f,{className:t},a)}}],a=this.props.jobTitle.job_titles,i=[],r=this.props.auth.user,o=(r||[]).permissions;(o=o||[]).includes("Update Job Title")&&4===t.length&&t.push(this.listAction),Object.keys(a).map((function(e,t){return i.push(Object(n.a)({},a[e],{key:e}))}));var l=this.props.jobTitle,c=l.current_page,s=l.page_size,E=l.total;return T.a.createElement(h.a,null,T.a.createElement(j.a,null,T.a.createElement(S.a,{title:T.a.createElement(R.a,{id:"jobTitles.pageHeader"}),marginBottom:!0},T.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.includes("Create Job Title")?T.a.createElement(_.a,{to:"".concat(this.props.match.path,"/add")},T.a.createElement(v.a,{type:"primary",className:"mateAddInvoiceBtn"},T.a.createElement(R.a,{id:"jobTitles.button.add"}))):null,T.a.createElement(v.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/menus")},style:{marginLeft:"5px"}},T.a.createElement(R.a,{id:"button.back"})))),T.a.createElement("div",{className:"isoInvoiceTableBtn"},T.a.createElement(g,{placeholder:Object(J.a)({id:"code"})+", "+Object(J.a)({id:"name"}),onSearch:this.handleSearch,style:{marginRight:"1%"},value:this.state.search,onChange:this.handleSearchValue}),T.a.createElement("div",{style:{marginTop:"auto",marginRight:"1%"}},T.a.createElement(v.a,{type:"primary",onClick:this.handleSearch.bind(this,this.state.search)},T.a.createElement(R.a,{id:"button.search"}))),T.a.createElement("div",{style:{width:"30%",marginTop:"auto",marginRight:"27%"}},T.a.createElement(v.a,{onClick:this.handleResetSearch},T.a.createElement(R.a,{id:"filter.reset"})))),T.a.createElement(j.n,null,0!==a.length||this.props.jobTitle.loading?T.a.createElement("div",{className:"isoInvoiceTable"},T.a.createElement(y.a,{style:{width:"100%"}},T.a.createElement(I.a,{dataSource:i,columns:t,loading:this.props.jobTitle.loading,className:"invoiceListTable",bordered:!0,pagination:!s||{current:c,pageSize:parseInt(s),total:E,onChange:this.handlePageChange.bind(this)}}))):T.a.createElement(O.a,{description:T.a.createElement(R.a,{id:"jobTitles.table.noData"})}))))}}]),t}(E.Component);t.default=Object(u.d)(Object(p.b)((function(e){return{jobTitle:e.jobTitle,auth:e.auth}}),C.a))(L)},726:function(e,t,a){"use strict";var n=a(733);t.a=n.a},733:function(e,t,a){"use strict";var n=a(4),i=a(50),r=a(130),o=a(21),l=a(66),c=a(129),s=a(98),E=a(19);function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a},O=function(e){function t(e){var a,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,o=_(t).call(this,e),(a=!o||"object"!==T(o)&&"function"!==typeof o?m(i):o).onConfirm=function(e){a.setVisible(!1,e);var t=a.props.onConfirm;t&&t.call(m(m(a)),e)},a.onCancel=function(e){a.setVisible(!1,e);var t=a.props.onCancel;t&&t.call(m(m(a)),e)},a.onVisibleChange=function(e){a.setVisible(e)},a.saveTooltip=function(e){a.tooltip=e},a.renderOverlay=function(e,t){var i=a.props,r=i.okButtonProps,o=i.cancelButtonProps,c=i.title,s=i.cancelText,E=i.okText,T=i.okType,u=i.icon;return n.createElement("div",null,n.createElement("div",{className:"".concat(e,"-inner-content")},n.createElement("div",{className:"".concat(e,"-message")},u,n.createElement("div",{className:"".concat(e,"-message-title")},c)),n.createElement("div",{className:"".concat(e,"-buttons")},n.createElement(l.a,p({onClick:a.onCancel,size:"small"},o),s||t.cancelText),n.createElement(l.a,p({onClick:a.onConfirm,type:T,size:"small"},r),E||t.okText))))},a.renderConfirm=function(e){var t=e.getPrefixCls,i=a.props,o=i.prefixCls,l=i.placement,E=b(i,["prefixCls","placement"]),T=t("popover",o),u=n.createElement(c.a,{componentName:"Popconfirm",defaultLocale:s.a.Popconfirm},(function(e){return a.renderOverlay(T,e)}));return n.createElement(r.a,p({},E,{prefixCls:T,placement:l,onVisibleChange:a.onVisibleChange,visible:a.state.visible,overlay:u,ref:a.saveTooltip}))},a.state={visible:e.visible},a}var a,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,o=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var a=this.props;"visible"in a||this.setState({visible:e});var n=a.onVisibleChange;n&&n(e,t)}},{key:"render",value:function(){return n.createElement(E.a,null,this.renderConfirm)}}])&&u(a.prototype,i),o&&u(a,o),t}(n.Component);O.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:n.createElement(o.a,{type:"exclamation-circle",theme:"filled"})},Object(i.polyfill)(O),t.a=O},826:function(e,t,a){"use strict";t.a={GET_JOB_TITLES_REQUEST:"GET_JOB_TITLES_REQUEST",GET_JOB_TITLES_SUCCESS:"GET_JOB_TITLES_SUCCESS",STORE_JOB_TITLE_REQUEST:"STORE_JOB_TITLE_REQUEST",STORE_JOB_TITLE_SUCCESS:"STORE_JOB_TITLE_SUCCESS",STORE_JOB_TITLE_ERROR:"STORE_JOB_TITLE_ERROR",EDIT_JOB_TITLE_REQUEST:"EDIT_JOB_TITLE_REQUEST",EDIT_JOB_TITLE_SUCCESS:"EDIT_JOB_TITLE_SUCCESS",EDIT_JOB_TITLE_ERROR:"EDIT_JOB_TITLE_ERROR",UPDATE_JOB_TITLE_REQUEST:"UPDATE_JOB_TITLE_REQUEST",UPDATE_JOB_TITLE_SUCCESS:"UPDATE_JOB_TITLE_SUCCESS",UPDATE_JOB_TITLE_ERROR:"UPDATE_JOB_TITLE_ERROR",SHOW_JOB_TITLE_REQUEST:"SHOW_JOB_TITLE_REQUEST",SHOW_JOB_TITLE_SUCCESS:"SHOW_JOB_TITLE_SUCCESS",SHOW_JOB_TITLE_ERROR:"SHOW_JOB_TITLE_ERROR",DEACTIVATE_JOB_TITLE_REQUEST:"DEACTIVATE_JOB_TITLE_REQUEST",DEACTIVATE_JOB_TITLE_SUCCESS:"DEACTIVATE_JOB_TITLE_SUCCESS",DEACTIVATE_JOB_TITLE_ERROR:"DEACTIVATE_JOB_TITLE_ERROR",ACTIVATE_JOB_TITLE_REQUEST:"ACTIVATE_JOB_TITLE_REQUEST",ACTIVATE_JOB_TITLE_SUCCESS:"ACTIVATE_JOB_TITLE_SUCCESS",ACTIVATE_JOB_TITLE_ERROR:"ACTIVATE_JOB_TITLE_ERROR",CLEAR_SUCCESS:"CLEAR_SUCCESS",CLEAR_ERROR:"CLEAR_ERROR",CLEAR_ERROR_FIELD:"CLEAR_ERROR_FIELD",getJobTitles:function(e,t){return{type:"GET_JOB_TITLES_REQUEST",payload:{page:e,search:t}}},storeJobTitle:function(e){return{type:"STORE_JOB_TITLE_REQUEST",payload:{body:e}}},editJobTitle:function(e){return{type:"EDIT_JOB_TITLE_REQUEST",payload:{id_job_title:e}}},updateJobTitle:function(e,t){return{type:"UPDATE_JOB_TITLE_REQUEST",payload:{id_job_title:e,body:t}}},showJobTitle:function(e){return{type:"SHOW_JOB_TITLE_REQUEST",payload:{id_job_title:e}}},deactivateJobTitle:function(e){return{type:"DEACTIVATE_JOB_TITLE_REQUEST",payload:{id_job_title:e}}},activateJobTitle:function(e){return{type:"ACTIVATE_JOB_TITLE_REQUEST",payload:{id_job_title:e}}},clearSuccessJobTitle:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=301.36bef011.chunk.js.map