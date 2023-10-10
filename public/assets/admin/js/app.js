if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");function _init(){"use strict";$.AdminLTE.layout={activate:function(){var e=this;e.fix(),e.fixSidebar(),$(window,".wrapper").resize((function(){e.fix(),e.fixSidebar()}))},fix:function(){var e=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),t=$(window).height(),o=$(".sidebar").height();if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",t-$(".main-footer").outerHeight());else{var i;t>=o?($(".content-wrapper, .right-side").css("min-height",t-e),i=t-e):($(".content-wrapper, .right-side").css("min-height",o),i=o);var n=$($.AdminLTE.options.controlSidebarOptions.selector);void 0!==n&&n.height()>i&&$(".content-wrapper, .right-side").css("min-height",n.height())}},fixSidebar:function(){$("body").hasClass("fixed")?(void 0===$.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),$.AdminLTE.options.sidebarSlimScroll&&void 0!==$.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"}))):void 0!==$.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto")}},$.AdminLTE.pushMenu={activate:function(e){var t=$.AdminLTE.options.screenSizes;$(e).on("click",(function(e){e.preventDefault(),$(window).width()>t.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")})),$(".content-wrapper").on("click",(function(){$(window).width()<=t.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")})),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var e=this,t=$.AdminLTE.options.screenSizes.sm-1;$(".main-sidebar").hover((function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>t&&e.expand()}),(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>t&&e.collapse()}))},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(e){var t=this,o=$.AdminLTE.options.animationSpeed;$(document).on("click",e+" li a",(function(e){var i=$(this),n=i.next();if(n.is(".treeview-menu")&&n.is(":visible"))n.slideUp(o,(function(){n.removeClass("menu-open")})),n.parent("li").removeClass("active");else if(n.is(".treeview-menu")&&!n.is(":visible")){var a=i.parents("ul").first();a.find("ul:visible").slideUp(o).removeClass("menu-open");var r=i.parent("li");n.slideDown(o,(function(){n.addClass("menu-open"),a.find("li.active").removeClass("active"),r.addClass("active"),t.layout.fix()}))}n.is(".treeview-menu")&&e.preventDefault()}))},$.AdminLTE.controlSidebar={activate:function(){var e=this,t=$.AdminLTE.options.controlSidebarOptions,o=$(t.selector);$(t.toggleBtnSelector).on("click",(function(i){i.preventDefault(),o.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?e.close(o,t.slide):e.open(o,t.slide)}));var i=$(".control-sidebar-bg");e._fix(i),$("body").hasClass("fixed")?e._fixForFixed(o):$(".content-wrapper, .right-side").height()<o.height()&&e._fixForContent(o)},open:function(e,t){t?e.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(e,t){t?e.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(e){var t=this;$("body").hasClass("layout-boxed")?(e.css("position","absolute"),e.height($(".wrapper").height()),$(window).resize((function(){t._fix(e)}))):e.css({position:"fixed",height:"auto"})},_fixForFixed:function(e){e.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(e){$(".content-wrapper, .right-side").css("min-height",e.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(e){var t=this;e||(e=document),$(e).on("click",t.selectors.collapse,(function(e){e.preventDefault(),t.collapse($(this))})),$(e).on("click",t.selectors.remove,(function(e){e.preventDefault(),t.remove($(this))}))},collapse:function(e){var t=this,o=e.parents(".box").first(),i=o.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");o.hasClass("collapsed-box")?(e.children(":first").removeClass(t.icons.open).addClass(t.icons.collapse),i.slideDown(t.animationSpeed,(function(){o.removeClass("collapsed-box")}))):(e.children(":first").removeClass(t.icons.collapse).addClass(t.icons.open),i.slideUp(t.animationSpeed,(function(){o.addClass("collapsed-box")})))},remove:function(e){e.parents(".box").first().slideUp(this.animationSpeed)}}}$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:200,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$((function(){"use strict";$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions);var e=$.AdminLTE.options;_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),e.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),e.navbarMenuSlimscroll&&void 0!==$.fn.slimscroll&&$(".navbar .menu").slimscroll({height:e.navbarMenuHeight,alwaysVisible:!1,size:e.navbarMenuSlimscrollWidth}).css("width","100%"),e.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(e.sidebarToggleSelector),e.enableBSToppltip&&$("body").tooltip({selector:e.BSTooltipSelector}),e.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),e.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),e.directChat.enable&&$(document).on("click",e.directChat.contactToggleSelector,(function(){$(this).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open")})),$('.btn-group[data-toggle="btn-toggle"]').each((function(){var e=$(this);$(this).find(".btn").on("click",(function(t){e.find(".btn.active").removeClass("active"),$(this).addClass("active"),t.preventDefault()}))}))})),function(e){"use strict";e.fn.boxRefresh=function(t){var o=e.extend({trigger:".refresh-btn",source:"",onLoadStart:function(e){return e},onLoadDone:function(e){return e}},t),i=e('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each((function(){if(""!==o.source){var t=e(this);t.find(o.trigger).first().on("click",(function(e){e.preventDefault(),function(e){e.append(i),o.onLoadStart.call(e)}(t),t.find(".box-body").load(o.source,(function(){!function(e){e.find(i).remove(),o.onLoadDone.call(e)}(t)}))}))}else window.console&&window.console.log("Please specify a source first - boxRefresh()")}))}}(jQuery),function(e){"use strict";e.fn.activateBox=function(){e.AdminLTE.boxWidget.activate(this)}}(jQuery),function(e){"use strict";e.fn.todolist=function(t){var o=e.extend({onCheck:function(e){return e},onUncheck:function(e){return e}},t);return this.each((function(){void 0!==e.fn.iCheck?(e("input",this).on("ifChecked",(function(){var t=e(this).parents("li").first();t.toggleClass("done"),o.onCheck.call(t)})),e("input",this).on("ifUnchecked",(function(){var t=e(this).parents("li").first();t.toggleClass("done"),o.onUncheck.call(t)}))):e("input",this).on("change",(function(){var t=e(this).parents("li").first();t.toggleClass("done"),e("input",t).is(":checked")?o.onCheck.call(t):o.onUncheck.call(t)}))}))}}(jQuery),function(e,t,o){"use strict";t.BuzzyAdmin=t.BuzzyAdmin||{},t.BuzzyAdmin={return_error:function(e){var t=void 0!==e.responseJSON?e.responseJSON.errors:"An Unexpected Error Occurred";swal({title:"Error",text:t,type:"error",html:!0,showCancelButton:!1})},init:function(){var o=this;e(".permanently").on("click",(function(){var t=e(this).attr("href");return swal({title:"Are you sure?",text:"You will not be able to recover this.",type:"warning",showCancelButton:!0,closeOnConfirm:!1,closeOnCancel:!1,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",showLoaderOnConfirm:!0},(function(e){e?setTimeout((function(){location.href=t}),100):swal("Cancelled","All data is safe :)","error")})),!1})),e(".sendtrash").on("click",(function(){var t=e(this).attr("href");return swal({title:"Are you sure?",text:"Sending to trash!",type:"warning",showCancelButton:!0,closeOnConfirm:!1,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes!",showLoaderOnConfirm:!0},(function(){setTimeout((function(){location.href=t}),500)})),!1})),e(".download-item").off("click").on("click",(function(){var i=e(this).data("item-code"),n=e(this).data("item-id"),a=e(this).data("version");return swal({title:"Processing Update...",text:"It will take few seconds.",timer:82e3,allowClickOutside:!1,showConfirmButton:!1}),e.ajax({type:"POST",dataType:"json",url:buzzy_base_url+"/admin/handle-download",data:{item_code:i,item_id:n,item_version:a,_token:e("#requesttoken").val()},success:function(e){var o=e.status;return"redirect"==o?(t.location.href=e.redirect,!1):"error"==o?(swal({title:"Failed",text:e.message,showConfirmButton:!0}),!1):void swal({title:e.message,type:"success",showCancelButton:!1,allowClickOutside:!1,closeOnConfirm:!0},(function(e){location.reload()}))},error:o.return_error}),!1})),e(".activate-item").on("click",(function(){var t=e(this).parents(".item-actions"),i=t.data("item-code"),n=t.data("item-id"),a=t.data("item-type"),r=e(this).parents(".box-widget").find(".overlay");r.removeClass("hide"),e.ajax({type:"POST",dataType:"json",url:buzzy_base_url+"/admin/activate-"+a,data:{item_code:i,item_id:n,_token:e("#requesttoken").val()},success:function(e){var t=e.status;"error"==t?swal({type:"warning",title:"Error",text:e.message,timer:3e3,showConfirmButton:!1}):"success"==t&&location.reload()},error:o.return_error}).always((function(){r.addClass("hide")}))}));var i=new URL(t.location),n=i.searchParams.get("purchase_code"),a=i.searchParams.get("item_id"),r=i.searchParams.get("api_status");function s(t){e(".form-group[data-target]").each((function(t,o){var i=e(o).data("target");e(o).data("value")==e('[data-dependecy="'+i+'"]').val()?e(o).show():e(o).hide()}))}e(".register-item").on("click",(function(t){t.preventDefault();e(this).parents(".item-actions").data("item-code");var i=e(this).data("item-img"),a=e(this).data("item-id"),r=e(this).data("item-name"),s=e(this).data("item-buy");o.registerAction({title:"Activate Product!",text:'Please enter your <a href="'+s+'" target="_blank">'+r+'</a> Envato Purchase Code or <a href="https://codecanyon.net/item/buzzy-bundle-viral-media-script/18754835" target="_blank">Buzzy Bundle</a> purchase code to activate this product. ',showCancelButton:!0,imageUrl:i,item_id:a,inputValue:n})})),"error"===r?(n="",alert(i.searchParams.get("api_error"))):n>""&&(buzzy_item_id===a?(e(t).trigger("activate:toggle"),e(t).trigger("register:toggle")):e('a.register-item[data-item-id="'+a+'"]').trigger("click"),setTimeout((()=>{e(".sweet-alert button.confirm").trigger("click")}),1500)),e(t).on("activate:toggle",(function(){o.registerAction({title:"Activate your Buzzy!",text:'Unfortanately, System can\'t validate your purchase code. Please enter your <a href="https://codecanyon.net/item/buzzy-news-viral-lists-polls-and-videos/13300279" target="_blank">Buzzy</a> or <a href="https://codecanyon.net/item/buzzy-bundle-viral-media-script/18754835" target="_blank">Buzzy Bundle</a> Purchase Code to access admin panel functions and new updates.',showCancelButton:!1,item_id:buzzy_item_id,inputValue:n,imageUrl:null})})),e(t).on("register:toggle",(function(){o.registerAction({title:"Activate your Buzzy<br> to Start Install!",text:'Please enter your <a href="https://codecanyon.net/item/buzzy-news-viral-lists-polls-and-videos/13300279" target="_blank">Buzzy</a> or <a href="https://codecanyon.net/item/buzzy-bundle-viral-media-script/18754835" target="_blank">Buzzy Bundle</a> Purchase Code to get start to install.',showCancelButton:!1,item_id:buzzy_item_id,inputValue:n,imageUrl:null})})),e('input[type="checkbox"].flat-red, input[type="radio"].flat-red').each((function(t,o){e(o).iCheck({checkboxClass:"icheckbox_flat-green",radioClass:"iradio_flat-green"})})),e(".my-colorpicker1").length&&e(".my-colorpicker1").colorpicker(),e(".my-colorpicker2").length&&e(".my-colorpicker2").colorpicker(),s(),e("[data-dependecy]").on("change",(function(){s()})),e("#nestlangs").length>0&&e("#nestlangs").nestable({group:1,maxDepth:1,callback:function(t,i){var n=(t.length?t:e(t.target)).nestable("toArray");e.ajax({url:e("#nestlangs").data("url"),method:"POST",responseType:"json",data:{langs:n,_token:e("#requesttoken").val()},success:function(e){},error:o.return_error})}}),e(".expand_comment").length>0&&e(".expand_comment").on("click",(function(t){t.preventDefault(),e(this).hasClass("full")?e(this).removeClass("full"):e(this).addClass("full")})),e(".get_romment_reports").length>0&&e(".get_romment_reports").on("click",(function(t){t.preventDefault();var i=e(this).data("url");e.ajax({type:"GET",url:i,success:function(t){e("#reports_modal_content").html(t.html),e("#reports_modal_content").find(".modal").modal()},error:o.return_error})}))},registerAction:function(t){var o=this;swal({title:t.title,text:t.text,type:"input",inputValue:t.inputValue,imageUrl:t.imageUrl,showCancelButton:t.showCancelButton,closeOnConfirm:!1,html:!0,animation:"slide-from-top",inputPlaceholder:"Enter Purchase Code",showLoaderOnConfirm:!0},(function(i){return!1!==i&&(""===i?(swal.showInputError("You need to write something!"),!1):void e.ajax({type:"POST",dataType:"json",url:buzzy_base_url+"/api/register_product",data:{item_id:t.item_id,code:i,_token:e("#requesttoken").val()},success:function(e){var n=e.status;if("error"==n)return swal.showInputError(e.message),!1;"auth"==n?o.initAuthAction(e.data.auth_url,e.data.auth_message,i,t.item_id):"success"==n&&location.reload()},error:function(e){var t=void 0!==e.responseJSON?e.responseJSON.errors:"An Unexpected Error Occurred";swal.showInputError(t)}}))}))},initAuthAction:function(e,t,o,i){var n=buzzy_current_url+"?purchase_code="+o+"&item_id="+i;location.href=e+"?redirectTo="+encodeURIComponent(n)+"&purchase_code="+o}},e(o).on("ready",(function(){BuzzyAdmin.init(),buzzy_registered||e(t).trigger("activate:toggle")}))}(jQuery,window,document);
