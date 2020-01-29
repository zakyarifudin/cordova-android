(this.webpackJsonpequal=this.webpackJsonpequal||[]).push([[199,6],{1025:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(1),o=n(42),i=n(43),l=n(45),c=n(44),s=n(60),p=n(46),d=n(4),u=n.n(d),b=n(47),m=n(85),f=n(688),g=n(176),h=n(717),y=n(681),x=n(682),j=n(130),O=n(172),E=n(726),v=n(703),_=n(704),w=n(17),k=n(234),T=n(175),S=n(812),C=n(707),A=n(702),z=n(174),I=h.a.Panel,F=y.a.Option,R=x.a.Search,B=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,p=new Array(i),d=0;d<i;d++)p[d]=arguments[d];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(p)))).state={filter:{id_asset_fiscal:[],id_asset_category:[],transaction_type:[],pagination:null},search:null},n.handleSearch=function(e){console.log(e);var t=n.props.getAssetTypes;n.setState({filter:{id_asset_fiscal:[],id_asset_category:[],transaction_type:[],pagination:null}}),t(1,e)},n.handleSearchValue=function(e){var t=e.target.value;n.setState({search:t})},n.handleResetSearch=function(){var e=n.props.getAssetTypes;n.setState({filter:{id_asset_fiscal:[],id_asset_category:[],transaction_type:[],pagination:null}}),n.setState({search:null}),e()},n.handleFilterChange=function(e,t){n.setState({filter:Object(r.a)({},n.state.filter,Object(a.a)({},e,t))})},n.handleFilter=function(){var e=n.props.getAssetTypes,t=n.state.filter,a="";t.id_asset_fiscal&&(a+="id_asset_fiscal="+t.id_asset_fiscal),t.id_asset_category&&(a+=a?"&id_asset_category="+t.id_asset_category:"id_asset_category="+t.id_asset_category),t.pagination&&(a+=a?"&pagination="+t.pagination:"pagination="+t.pagination),n.setState({search:null}),e(1,null,a)},n.handleResetFilter=function(){var e=n.props.getAssetTypes;n.setState({filter:{id_asset_fiscal:[],transaction_type:[],id_asset_category:[],pagination:null}}),n.setState({search:null}),e()},n.handleRecord=function(e,t){"activate"===e?n.props.activateAssetType(t):n.props.deactivateAssetType(t)},n.handlePageChange=function(e){(0,n.props.getAssetTypes)(e,n.props.assetType.search,n.props.assetType.filter)},n.listAction={title:"",dataIndex:"id_asset_type",rowKey:"id_asset_type",width:"10%",align:"center",fixed:"right",render:function(e,t){return u.a.createElement("div",null,u.a.createElement(j.a,{placement:"topLeft",title:u.a.createElement(w.a,{id:"tooltip.update"})},u.a.createElement(f.a,{to:"".concat(n.props.match.path,"/update/").concat(e)},u.a.createElement(T.a,{size:"small",className:"invoiceEdtBtn"},u.a.createElement("i",{className:"ion-android-create"})))),t.is_active?u.a.createElement(E.a,{title:u.a.createElement(w.a,{id:"assetTypes.popconfirm.deactivate"}),onConfirm:n.handleRecord.bind(Object(s.a)(n),"deactivate",e),okText:Object(z.a)({id:"yes"}),cancelText:Object(z.a)({id:"no"})},u.a.createElement(j.a,{placement:"topRight",title:u.a.createElement(w.a,{id:"tooltip.deactivate"})},u.a.createElement(T.a,{size:"small",className:"invoiceDltBtn"},u.a.createElement("i",{className:"ion-close-circled"})))):u.a.createElement(E.a,{title:u.a.createElement(w.a,{id:"assetTypes.popconfirm.activate"}),onConfirm:n.handleRecord.bind(Object(s.a)(n),"activate",e),okText:Object(z.a)({id:"yes"}),cancelText:Object(z.a)({id:"no"})},u.a.createElement(j.a,{placement:"topRight",title:u.a.createElement(w.a,{id:"tooltip.activate"})},u.a.createElement(T.a,{size:"small",className:"invoiceRstBtn"},u.a.createElement("i",{className:"ion-refresh"})))))}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getAssetTypes)()}},{key:"componentDidUpdate",value:function(){this.props.assetType.error&&(Object(g.a)("error",this.props.assetType.error),this.props.clearError()),this.props.assetType.success&&(Object(g.a)("success",this.props.assetType.success),this.props.clearSuccess())}},{key:"render",value:function(){var e=this,t=[{title:Object(z.a)({id:"code"}),dataIndex:"asset_type_code",rowKey:"asset_type_code",width:"10%",render:function(e){return u.a.createElement("span",null,e)}},{title:Object(z.a)({id:"name"}),dataIndex:"asset_type_name",rowKey:"asset_type_name",width:"20%",render:function(e){return u.a.createElement("span",null,e)}},{title:Object(z.a)({id:"sidebar.assetCategory"}),dataIndex:"asset_category.asset_category_name",rowKey:"asset_category.asset_category_name",width:"20%",render:function(e){return u.a.createElement("span",null,e)}},{title:Object(z.a)({id:"sidebar.assetFiscal"}),dataIndex:"asset_fiscal.asset_fiscal_name",rowKey:"asset_fiscal.asset_fiscal_name",width:"20%",render:function(e){return u.a.createElement("span",null,e)}},{title:Object(z.a)({id:"assetTypes.add.depreciationMethod"}),dataIndex:"depreciation_method",rowKey:"depreciation_method",width:"10%",align:"center",render:function(e){var t,n;return 1===e?(t="warning",n=Object(z.a)({id:"Non Depreciable"})):2===e?(t="active",n=Object(z.a)({id:"Straight Line"})):(t="primary",n=Object(z.a)({id:"Double Declining Method"})),u.a.createElement(A.f,{className:t},n)}},{title:Object(z.a)({id:"assetTypes.add.estimatedLifeYear"}),dataIndex:"estimated_life_year",rowKey:"estimated_life_year",width:"10%",align:"center",render:function(e){return u.a.createElement("span",null,e)}},{title:Object(z.a)({id:"assetTypes.add.depreciationRate"}),dataIndex:"depreciation_rate",rowKey:"depreciation_rate",width:"10%",align:"center",render:function(e){return u.a.createElement("span",null,parseFloat(e))}},{title:Object(z.a)({id:"status"}),dataIndex:"is_active",rowKey:"is_active",width:"10%",align:"center",render:function(e){var t,n;return 1===e?(t="active",n=Object(z.a)({id:"active"})):(t="nonactive",n=Object(z.a)({id:"inactive"})),u.a.createElement(A.f,{className:t},n)}}],n=this.props.assetType.asset_types,a=[],o=this.props.auth.user,i=(o||[]).permissions;(i=i||[]).includes("Update Asset Type")&&8===t.length&&t.push(this.listAction),Object.keys(n).map((function(e,t){return a.push(Object(r.a)({},n[e],{key:e}))}));var l=this.props.assetType,c=l.current_page,s=l.page_size,p=l.total;l.loading;return u.a.createElement(v.a,null,u.a.createElement(A.a,null,u.a.createElement(_.a,{title:u.a.createElement(w.a,{id:"assetTypes.pageHeader"}),marginBottom:!0},u.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.includes("Create Asset Type")?u.a.createElement(f.a,{to:"".concat(this.props.match.path,"/add")},u.a.createElement(T.a,{type:"primary",className:"mateAddInvoiceBtn"},u.a.createElement(w.a,{id:"assetTypes.button.add"}))):null,u.a.createElement(T.a,{onClick:function(){return e.props.history.replace("/dashboard/setup/menus")},style:{marginLeft:"5px"}},u.a.createElement(w.a,{id:"button.back"})))),u.a.createElement("div",{className:"isoInvoiceTableBtn"},u.a.createElement(R,{placeholder:Object(z.a)({id:"code"})+", "+Object(z.a)({id:"name"}),onSearch:this.handleSearch,style:{marginRight:"1%"},value:this.state.search,onChange:this.handleSearchValue}),u.a.createElement("div",{style:{marginTop:"auto",marginRight:"1%"}},u.a.createElement(T.a,{type:"primary",onClick:this.handleSearch.bind(this,this.state.search)},u.a.createElement(w.a,{id:"button.search"}))),u.a.createElement("div",{style:{width:"30%",marginTop:"auto",marginRight:"27%"}},u.a.createElement(T.a,{onClick:this.handleResetSearch},u.a.createElement(w.a,{id:"filter.reset"})))),u.a.createElement("div",{className:"isoFilter"},u.a.createElement(h.a,{style:A.l},u.a.createElement(I,{header:u.a.createElement(w.a,{id:"filter.header"}),key:"1"},u.a.createElement("div",{className:"isoFilterContent"},u.a.createElement("div",{style:{width:"50%"}},u.a.createElement("label",null,u.a.createElement(w.a,{id:"assetFiscals.pageHeader"})),u.a.createElement("br",null),u.a.createElement(y.a,{showSearch:!0,onChange:this.handleFilterChange.bind(this,"id_asset_fiscal"),value:this.state.filter.id_asset_fiscal?this.state.filter.id_asset_fiscal:[],style:{width:"95%"},placeholder:u.a.createElement(w.a,{id:"assetTypes.filter.select.assetFiscal"}),loading:this.props.assetType.loading,allowClear:!0},this.props.assetType.asset_fiscals.map((function(e,t){return u.a.createElement(F,{key:t,value:e.id_asset_fiscal},e.asset_fiscal_name)})))),u.a.createElement("div",{style:{width:"50%"}},u.a.createElement("label",null,u.a.createElement(w.a,{id:"assetCategories.pageHeader"})),u.a.createElement("br",null),u.a.createElement(y.a,{showSearch:!0,onChange:this.handleFilterChange.bind(this,"id_asset_category"),value:this.state.filter.id_asset_category?this.state.filter.id_asset_category:[],style:{width:"100%"},placeholder:u.a.createElement(w.a,{id:"assetTypes.filter.select.assetCategory"}),loading:this.props.assetType.loading,allowClear:!0},this.props.assetType.asset_categories.map((function(e,t){return u.a.createElement(F,{key:t,value:e.id_asset_category},e.asset_category_name)}))))),u.a.createElement("div",{className:"isoFilterContent",style:{marginTop:"10px"}},u.a.createElement("div",{style:{width:"15%"}},u.a.createElement("label",null,u.a.createElement(w.a,{id:"dataPerPage"})),u.a.createElement("br",null),u.a.createElement(y.a,{showSearch:!0,onChange:this.handleFilterChange.bind(this,"pagination"),value:this.state.filter.pagination?this.state.filter.pagination:s,style:{width:"95%"},optionFilterProp:"children",filterOption:!0,loading:this.props.assetType.loading},u.a.createElement(F,{key:1,value:10},"10"),u.a.createElement(F,{key:2,value:25},"25"),u.a.createElement(F,{key:3,value:50},"50"),u.a.createElement(F,{key:4,value:100},"100"))),u.a.createElement("div",{style:{width:"20%",marginTop:"auto"}},u.a.createElement(T.a,{size:"small",type:"primary",style:{marginRight:"10px"},onClick:this.handleFilter},u.a.createElement(w.a,{id:"filter.submit"})),u.a.createElement(T.a,{onClick:this.handleResetFilter,size:"small"},u.a.createElement(w.a,{id:"filter.reset"}))))))),u.a.createElement(A.n,null,0!==n.length||this.props.assetType.loading?u.a.createElement("div",{className:"isoInvoiceTable"},u.a.createElement(k.a,{style:{width:"100%"}},u.a.createElement(C.a,{dataSource:a,columns:t,loading:this.props.assetType.loading,className:"invoiceListTable",bordered:!0,pagination:!s||{current:c,pageSize:parseInt(s),total:p,onChange:this.handlePageChange.bind(this)}}))):u.a.createElement(O.a,{description:u.a.createElement(w.a,{id:"assetTypes.table.noData"})}))))}}]),t}(d.Component);t.default=Object(m.d)(Object(b.b)((function(e){return{assetType:e.assetType,auth:e.auth}}),S.a))(B)},702:function(e,t,n){"use strict";var a=n(49),r=n(39),o=n(4),i=n.n(o),l=n(26),c=n(9);function s(){var e=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function p(){var e=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return p=function(){return e},e}var d=l.b.h3(p(),Object(c.palette)("text",0)),u=l.b.p(s(),Object(c.palette)("text",3)),b=function(e){return i.a.createElement("div",null,e.title?i.a.createElement(d,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?i.a.createElement(u,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function m(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return m=function(){return e},e}var f=l.b.div(m(),Object(c.palette)("border",0),""),g=n(64),h=n(684),y=n(685),x=n(3);function j(){var e=Object(r.a)(["\n  margin-bottom: 1em;\n  font-weight: 400;\n  font-style: ",';\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n']);return j=function(){return e},e}function O(){var e=Object(r.a)(['\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  font-variant: tabular-nums;\n  font-feature-settings: "tnum";\n\n  &.company-name {\n    margin-bottom: 2em;\n  }\n']);return O=function(){return e},e}function E(){var e=Object(r.a)(['\n  text-align: center;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",\n    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-variant: tabular-nums;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: tabular-nums;\n  font-variant-east-asian: normal;\n']);return E=function(){return e},e}function v(){var e=Object(r.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              > a {\n                margin: ",";\n              }\n            }\n          }\n          &:hover {\n            .isoInvoiceBtnView {\n              ",";\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .invoiceListTable {\n    .ant-dropdown-menu-item,\n    .ant-dropdown-menu-submenu-title {\n      &:hover {\n        background-color: ",";\n      }\n    }\n\n    .invoiceViewBtn {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .invoiceMrBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceDltBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRestBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceRstBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n\n    .invoiceEdtBtn {\n      font-size: 18px;\n      border: 0;\n      color: ",";\n\n      &:hover {\n        border: 0;\n        color: ",";\n      }\n  }\n}"]);return v=function(){return e},e}function _(){var e=Object(r.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n"]);return _=function(){return e},e}function w(){var e=Object(r.a)(["\n  margin-right: 8px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 10px;\n  height: 10px;\n  display: flex;\n  border-radius: 2%;\n  background-color: ",";\n  color: #ffffff;\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return w=function(){return e},e}function k(){var e=Object(r.a)(["\n  padding: 0 5px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background-color: ",";\n  font-size: 12px;\n  color: #ffffff;\n  text-transform: capitalize;\n\n  &.inside-form {\n    height: 25px;\n    width: 100%;\n    margin-top: 2px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  &.nonactive {\n    background-color: ",";\n  }\n\n  &.warning {\n    background-color: ",";\n  }\n\n  &.active {\n    background-color: ",";\n  }\n\n  &.new {\n    background-color: ",";\n  }\n\n  &.requested {\n    background-color: ",";\n  }\n\n  &.transferred {\n    background-color: ",";\n  }\n\n  &.fulfilled {\n    background-color: ",";\n  }\n\n  &.progress {\n    background-color: ",";\n  }\n\n  &.cancelled {\n    background-color: ",";\n  }\n\n  &.ordered {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.closed {\n    background-color: ",";\n  }\n\n  &.approved {\n    background-color: ",";\n  }\n\n  &.invoiced {\n    background-color: ",";\n  }\n\n  &.rejected {\n    background-color: ",";\n  }\n\n  &.pending {\n    background-color: ",";\n  }\n\n  &.processed {\n    background-color: ",";\n  }\n\n  &.confirmed {\n    background-color: ",";\n  }\n\n  &.received {\n    background-color: ",";\n  }\n\n  &.new-payment {\n    background-color: ",";\n  }\n\n  &.billed-payment {\n    background-color: ",";\n  }\n\n  &.paid-payment {\n    background-color: ",";\n  }\n\n  &.new-receipt {\n    background-color: ",";\n  }\n\n  &.partial-receipt {\n    background-color: ",";\n  }\n\n  &.full-receipt {\n    background-color: ",";\n  }\n"]);return k=function(){return e},e}function T(){var e=Object(r.a)([""]);return T=function(){return e},e}function S(){var e=Object(r.a)(["\n  font-size: 13px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0;\n  margin: 0 0 8px;\n"]);return S=function(){return e},e}function C(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return C=function(){return e},e}function A(){var e=Object(r.a)(["\n  border-radius: 5px;\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    margin-bottom: 20px;\n    button {\n      margin-left: auto;\n    }\n  }\n\n  .isoPageHeaderWrapper {\n    display: flex;\n    margin-bottom: 5px;\n    button {\n      margin-left: auto;\n    }\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .spinStyle {\n    text-align: center;\n    padding: 30px 50px;\n  }\n\n  .isoCode {\n    color: ",";\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .isoDetailDataFlex {\n    display: flex;\n    .isoColumn-1 {\n      width: 100%;\n      display: block;\n    }\n    .isoColumn-2 {\n      width: 50%;\n    }\n    .isoColumn-3 {\n      width: 33%;\n    }\n  }\n\n  .isoFormGroupComp {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n\n  .isoDetailDataBlock {\n    display: block;\n    .isoColumn {\n      width: 100%;\n    }\n  }\n\n  .isoFilter {\n    margin-bottom: 30px;\n    .isoFilterContent {\n      display: flex;\n    }\n  }\n\n  .isoFormGroup {\n    margin-bottom: 20px;\n    margin-right: 20px;\n    .isoInputCode-20 {\n      width: 20%;\n    }\n    .isoInputCode-30 {\n      width: 30%;\n    }\n    .isoInputCode-40 {\n      width: 40%;\n    }\n    .isoInputCode-50 {\n      width: 50%;\n    }\n    .isoInputCode-100 {\n      width: 100%;\n    }\n  }\n"]);return A=function(){return e},e}n.d(t,"g",(function(){return L})),n.d(t,"d",(function(){return Y})),n.d(t,"j",(function(){return M})),n.d(t,"c",(function(){return K})),n.d(t,"a",(function(){return Q})),n.d(t,"f",(function(){return I})),n.d(t,"e",(function(){return F})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return N})),n.d(t,"m",(function(){return U})),n.d(t,"i",(function(){return D})),n.d(t,"h",(function(){return P})),n.d(t,"b",(function(){return H}));var z=Object(l.b)((function(e){return i.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},i.a.createElement(b,{title:e.title,subtitle:e.subtitle}),e.children)}))(A(),Object(c.palette)("text",1)),I=(l.b.div(C()),l.b.label(S(),Object(c.palette)("text",1)),l.b.div(T()),l.b.span(k(),Object(c.palette)("primary",0),Object(c.palette)("error",0),Object(c.palette)("warning",0),Object(c.palette)("success",0),Object(c.palette)("status",0),Object(c.palette)("status",8),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",1),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",0),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5))),F=l.b.span(w(),Object(c.palette)("primary",0),Object(c.palette)("error",0),Object(c.palette)("warning",0),Object(c.palette)("success",0),Object(c.palette)("status",0),Object(c.palette)("status",8),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",1),Object(c.palette)("status",4),Object(c.palette)("status",2),Object(c.palette)("status",3),Object(c.palette)("status",0),Object(c.palette)("status",4),Object(c.palette)("status",4),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5),Object(c.palette)("status",0),Object(c.palette)("status",2),Object(c.palette)("status",5)),R=l.b.span(_()),B=l.b.div(v(),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),"",Object(c.palette)("secondary",1),Object(c.palette)("text",3),Object(c.palette)("primary",0),Object(c.palette)("grayscale",0),Object(c.palette)("grayscale",2),Object(c.palette)("error",0),Object(c.palette)("error",2),Object(c.palette)("secondary",0),Object(c.palette)("secondary",2),Object(c.palette)("success",0),Object(c.palette)("success",2),Object(c.palette)("primary",0),Object(c.palette)("primary",2)),N={background:"#F1F3F6",marginBottom:"-7px"},U=function(e,t){t.status,t.title;return e},D=l.b.h4(E()),P=l.b.span(O()),H=l.b.span(j(),(function(e){return!0===e.italic?"italic":"normal"})),L=function(e){return i.a.createElement("strong",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},Y=function(e){return i.a.createElement("span",{style:{color:e.error?"#f5222d":"inherit"}},e.children)},M=function(e){var t=e.data;return Array.isArray(t)&&t.length>0?i.a.createElement(i.a.Fragment,null,t.map((function(e,t){var n,r=e.label,o=e.amount,l=e.parseAmount,c=e.isDiscount,s=e.labelAlign,p=e.amountAlign;if(c){var d,u=e.discount,b=e.discountAlign;return i.a.createElement(h.a,(d={justify:"flex"},Object(a.a)(d,"justify","end"),Object(a.a)(d,"key",t),Object(a.a)(d,"style",{marginBottom:"6px"}),d),i.a.createElement(y.a,{span:10,style:{marginTop:"5px",textAlign:s||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},r)),i.a.createElement(y.a,{span:4,offset:1,style:{marginTop:"5px",textAlign:b||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},l?Object(x.e)(u):u?Object(x.e)(u.replace(/\$\s?|(,*)/g,"")):"0.00")),i.a.createElement(y.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},l?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}return i.a.createElement(h.a,(n={justify:"flex"},Object(a.a)(n,"justify","end"),Object(a.a)(n,"key",t),Object(a.a)(n,"style",{marginBottom:"6px"}),n),i.a.createElement(y.a,{span:15,style:{marginTop:"5px",textAlign:s||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},r)),i.a.createElement(y.a,{span:8,offset:1,style:{marginTop:"5px",textAlign:p||"right"}},i.a.createElement("span",{style:{fontSize:"12px"}},l?parseFloat(o).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):o)))}))):null},K=function(e){var t=e.data;if(Array.isArray(t)&&t.length>0)return i.a.createElement(h.a,{className:"avoid-page-break",justify:"space-between",type:"flex"},t.map((function(e,t){var n=e.label,a=e.name;return i.a.createElement(y.a,{style:{textAlign:"center"},key:t},i.a.createElement(h.a,null,i.a.createElement(y.a,{style:{marginBottom:"84px"}},i.a.createElement("span",{style:{fontSize:"12px"}},n)),i.a.createElement(y.a,null,i.a.createElement("span",{style:{fontSize:"12px"}},a?"( ".concat(a," )"):"(..............................................)"))))})))},Q=Object(g.a)(z);t.n=Object(g.a)(B)},703:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(39);function i(){var e=Object(o.a)(["\n  padding: 10px 20px 10px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 5px 20px 30px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 5px 20px 30px 20px;\n  }\n"]);return i=function(){return e},e}var l=n(26).b.div(i());t.a=function(e){return r.a.createElement(l,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},704:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(39),i=n(26),l=n(9),c=n(64);function s(){var e=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 5px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return e},e}var p=i.b.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(l.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),d=Object(c.a)(p),u=n(690);t.a=function(e){return e.title?r.a.createElement("div",null,r.a.createElement("div",{className:"isoPageHeaderWrapper"},r.a.createElement("h1",{className:"isoCode"},e.title),e.children),r.a.createElement(u.a,{style:{margin:e.marginBottom?"10px 0 20px 0":"10px 0"}})):r.a.createElement(d,{className:"isoComponentTitle"},e.children)}},706:function(e,t,n){"use strict";var a=n(1037);t.a=a.a},707:function(e,t,n){"use strict";var a=n(39),r=n(706),o=n(26),i=n(9),l=n(20),c=n(64);function s(){var e=Object(a.a)(["\n  .isoCustomizedTableControlBar {\n    margin-bottom: 40px;\n\n    .ant-form-item {\n      margin: ",";\n    }\n\n    .ant-form-item-label {\n      label {\n        color: ",";\n\n        &:after {\n          margin: ",";\n        }\n      }\n    }\n\n    .ant-switch-checked {\n      border-color: ",";\n      background-color: ",";\n    }\n  }\n"]);return s=function(){return e},e}function p(){var e=Object(a.a)(["\n  overflow: hidden;\n  overflow-x: auto;\n  background-color: #ffffff;\n\n  .ant-table-body {\n    overflow-x: auto;\n  }\n\n  &.forceHeight .ant-table-body {\n    max-height: calc(100vh - 100px)\n  }\n\n  .ant-table-thead > tr > th {\n    color: ",";\n    font-size: 16px;\n    background-color: ",";\n    border-bottom: 0;\n\n    &.ant-table-column-sort {\n      background: ",";\n      margin: ",";\n    }\n  }\n\n  .ant-table-thead > tr > th,\n  .ant-table-tbody > tr > td {\n    padding: 8px 15px;\n    white-space: nowrap;\n    text-align: ",";\n\n    p {\n      margin-bottom: 0;\n    }\n  }\n\n  .ant-table-tbody > tr > td {\n    font-size: 16px;\n    color: ",";\n    border-bottom: 1px solid ",";\n\n    a {\n      color: ",";\n      ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  .ant-table-thead > tr.ant-table-row-hover > td,\n  .ant-table-tbody > tr.ant-table-row-hover > td,\n  .ant-table-thead > tr:hover > td,\n  .ant-table-tbody > tr:hover > td {\n    background-color: transparent;\n  }\n\n  .ant-table-bordered .ant-table-thead > tr > th {\n    border-bottom: 1px solid ",";\n  }\n\n  .ant-table-bordered .ant-table-thead > tr > th,\n  .ant-table-bordered .ant-table-tbody > tr > td {\n    border-right: 1px solid ",";\n  }\n\n  .ant-table-pagination {\n    float: ",";\n  }\n\n  .ant-pagination-prev,\n  .ant-pagination-next {\n    border: 1px solid ",";\n  }\n\n  .ant-pagination-disabled,\n  .ant-pagination-prev.ant-pagination-disabled,\n  .ant-pagination-next.ant-pagination-disabled {\n    border: 1px solid ",";\n\n    a {\n      border: 0;\n    }\n  }\n\n  .ant-pagination-prev,\n  .ant-pagination-next,\n  .ant-pagination-jump-prev,\n  .ant-pagination-jump-next {\n    transform: ",";\n  }\n\n  .ant-pagination-prev,\n  .ant-pagination-jump-prev,\n  .ant-pagination-jump-next {\n    margin: ",";\n  }\n\n  .ant-pagination-item {\n    margin: ",";\n\n    &:hover {\n      border-color: ",";\n      ",";\n    }\n\n    &:hover a {\n      color: ",";\n    }\n  }\n\n  .ant-pagination-item-active {\n    background-color: ",";\n    border-color: ",";\n\n    a {\n      color: #ffffff;\n    }\n\n    &:hover a {\n      color: #ffffff;\n    }\n  }\n\n  .ant-table-expanded-row {\n    background: ",";\n\n    p {\n      color: ",";\n    }\n  }\n\n  .ant-spin-nested-loading > div > .ant-spin {\n    max-height: none;\n\n    .ant-spin-dot i {\n      color: ",";\n    }\n  }\n\n  .ant-table-header {\n    background-color: transparent;\n  }\n\n  .ant-table-title {\n    background: ",";\n    color: ",";\n    font-size: 13px;\n    font-weight: 500;\n    padding: 16px 30px;\n    ",";\n  }\n\n  .ant-table-footer {\n    background: ",";\n    color: ",";\n    font-size: 12px;\n    font-weight: 400;\n    padding: 16px 30px;\n    ",";\n  }\n\n  .ant-table-content {\n    overflow-x: auto;\n  }\n\n  .ant-table-column-sorter-up.on .anticon-caret-up,\n  .ant-table-column-sorter-down.on .anticon-caret-up,\n  .ant-table-column-sorter-up.on .anticon-caret-down,\n  .ant-table-column-sorter-down.on .anticon-caret-down {\n    color: ",";\n  }\n\n  &.isoSearchableTable {\n    .isoTableSearchBox {\n      padding: 20px;\n      display: flex;\n      background: #ffffff;\n      border: 1px solid ",";\n      ",";\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: inherit;\n        height: 36px;\n        width: 100%;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus,\n        &:hover {\n          border-color: ",";\n          ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n\n      button {\n        font-size: 12px;\n        font-weight: 400;\n        padding: 0;\n        text-transform: uppercase;\n        color: #ffffff;\n        background-color: ",";\n        border: 0;\n        outline: 0;\n        height: 36px;\n        padding: 0 15px;\n        margin-left: -1px;\n        cursor: pointer;\n        border-radius: ",";\n        ",";\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n\n    .ant-table-thead > tr > th {\n      word-break: keep-all;\n\n      span {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n\n        i {\n          margin: ",";\n          order: -1;\n        }\n      }\n    }\n  }\n\n  &.isoGroupTable {\n    .ant-table-thead > tr {\n      th {\n        border: 1px solid ",";\n        border-left: 0;\n\n        &[rowspan] {\n          text-align: center;\n        }\n\n        &.isoImageCell {\n          padding: 3px;\n        }\n      }\n\n      &:first-child {\n        th {\n          &:first-child {\n            border-left: ","\n              solid ",";\n          }\n        }\n      }\n\n      &:last-child {\n        th {\n          border-top: 0;\n        }\n      }\n    }\n\n    .ant-table-tbody {\n      .ant-table-row {\n        td {\n          border-right: 1px solid ",";\n\n          &:first-child {\n            border-left: ","\n              solid ",";\n          }\n\n          &:last-child {\n            border-left: ","\n              solid ",";\n          }\n\n          &.isoImageCell {\n            padding: 3px;\n          }\n        }\n      }\n    }\n  }\n\n  &.isoEditableTable {\n    .isoEditData {\n      .isoEditDataWrapper {\n        display: flex;\n        align-items: center;\n\n        input {\n          font-size: 12px;\n          font-weight: 400;\n          color: ",";\n          line-height: inherit;\n          padding: 7px 10px;\n          margin: ",";\n          border: 1px solid ",";\n          outline: 0 !important;\n          overflow: hidden;\n          background-color: #ffffff;\n          ",";\n          ",";\n          ",";\n\n          &:focus,\n          &:hover {\n            border-color: ",";\n            ",";\n          }\n\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n\n        .isoEditIcon {\n          cursor: pointer;\n        }\n      }\n\n      .isoDataWrapper {\n        display: flex;\n        align-items: center;\n\n        .isoEditIcon {\n          margin: ",";\n          cursor: pointer;\n          flex-shrink: 0;\n        }\n      }\n    }\n  }\n\n  // custom padding untuk fixed column \n  .ant-table-fixed tbody.ant-table-tbody .ant-table-row td, td.ant-table-fixed-columns-in-body {\n    padding: 8px 2px !important;\n    .ant-btn.ant-btn-sm {\n      padding: 0 10px !important;\n    }\n  }\n"]);return p=function(){return e},e}var d=Object(o.b)(r.a)(p(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",1),Object(i.palette)("secondary",1),(function(e){return"rtl"===e["data-rtl"]?"0 4px 0 0":"0 0 0 4px"}),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),Object(i.palette)("text",3),Object(i.palette)("border",0),Object(i.palette)("primary",0),Object(l.c)(),Object(i.palette)("primary",4),Object(i.palette)("border",0),Object(i.palette)("border",0),(function(e){return"rtl"===e["data-rtl"]?"left":"right"}),Object(i.palette)("border",0),Object(i.palette)("border",0),(function(e){return"rtl"===e["data-rtl"]?"rotate(180deg)":"rotate(0)"}),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"}),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 8px":"0 8px 0 0"}),Object(i.palette)("primary",0),Object(l.c)(),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("grayscale",6),Object(i.palette)("text",3),Object(i.palette)("primary",0),Object(i.palette)("secondary",1),Object(i.palette)("secondary",2),Object(l.a)(),Object(i.palette)("secondary",1),Object(i.palette)("secondary",2),Object(l.a)(),Object(i.palette)("primary",0),Object(i.palette)("border",0),Object(l.b)("0 1px 6px rgba(0,0,0,0.2)"),Object(i.palette)("text",3),Object(i.palette)("secondary",7),Object(l.a)("3px 0 0 3px"),Object(l.c)(),Object(l.b)("none"),Object(i.palette)("secondary",7),Object(l.b)("none"),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("primary",0),(function(e){return"rtl"===e["data-rtl"]?"3px 0 0 3px":"0 3px 3px 0"}),Object(l.c)(),Object(i.palette)("primary",1),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"}),Object(i.palette)("border",0),(function(e){return"rtl"===e["data-rtl"]?"0":"1px"}),Object(i.palette)("border",0),Object(i.palette)("border",0),(function(e){return"rtl"===e["data-rtl"]?"0":"1px"}),Object(i.palette)("border",0),(function(e){return"rtl"===e["data-rtl"]?"1px":"0"}),Object(i.palette)("border",0),Object(i.palette)("text",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 10px":"0 10px 0 0"}),Object(i.palette)("border",0),Object(l.a)("3px"),Object(l.b)(),Object(l.c)(),Object(i.palette)("border",0),Object(l.b)(),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),(function(e){return"rtl"===e["data-rtl"]?"0 auto 0 0":"0 0 0 auto"})),u=o.b.div(s(),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 16px":"0 16px 0 0"}),Object(i.palette)("secondary",2),(function(e){return"rtl"===e["data-rtl"]?"0 2px 0 8px":"0 8px 0 2px"}),Object(i.palette)("primary",0),Object(i.palette)("primary",0));Object(c.a)(u);t.a=Object(c.a)(d)},726:function(e,t,n){"use strict";var a=n(733);t.a=a.a},812:function(e,t,n){"use strict";t.a={getAssetTypes:function(e,t,n){return{type:"GET_ASSET_TYPES_REQUEST",payload:{page:e,search:t,filter:n}}},getAssetFiscal:function(e){return{type:"GET_ASSET_FISCAL_REQUEST",payload:{id_asset_fiscal:e}}},createAssetType:function(){return{type:"CREATE_ASSET_TYPE_REQUEST"}},storeAssetType:function(e){return{type:"STORE_ASSET_TYPE_REQUEST",payload:{body:e}}},editAssetType:function(e){return{type:"EDIT_ASSET_TYPE_REQUEST",payload:{id_asset_type:e}}},updateAssetType:function(e,t){return{type:"UPDATE_ASSET_TYPE_REQUEST",payload:{id_asset_type:e,body:t}}},showAssetType:function(e){return{type:"SHOW_ASSET_TYPE_REQUEST",payload:{id_asset_type:e}}},deactivateAssetType:function(e){return{type:"DEACTIVATE_ASSET_TYPE_REQUEST",payload:{id_asset_type:e}}},activateAssetType:function(e){return{type:"ACTIVATE_ASSET_TYPE_REQUEST",payload:{id_asset_type:e}}},clearSuccess:function(){return{type:"CLEAR_SUCCESS"}},clearError:function(){return{type:"CLEAR_ERROR"}},clearErrorField:function(){return{type:"CLEAR_ERROR_FIELD"}}}}}]);
//# sourceMappingURL=199.54f69d1d.chunk.js.map