/* Do not modify this file directly. It is compiled from other files. */
/* global WPCOM_sharing_counts, grecaptcha */
/* jshint unused:false */
var sharing_js_options;if(sharing_js_options&&sharing_js_options.counts)var WPCOMSharing={done_urls:[],get_counts:function(){var t,e,i,n,a;if("undefined"!=typeof WPCOM_sharing_counts)for(t in WPCOM_sharing_counts)if(i=WPCOM_sharing_counts[t],void 0===WPCOMSharing.done_urls[i]){e={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(t)],facebook:[window.location.protocol+"//graph.facebook.com/?callback=WPCOMSharing.update_facebook_count&ids="+encodeURIComponent(t)]};for(n in e)if(jQuery("a[data-shared=sharing-"+n+"-"+i+"]").length){for(;a=e[n].pop();)jQuery.getScript(a);sharing_js_options.is_stats_active&&WPCOMSharing.bump_sharing_count_stat(n)}WPCOMSharing.done_urls[i]=!0}},get_permalink:function(t){return t="https:"===window.location.protocol?t.replace(/^http:\/\//i,"https://"):t.replace(/^https:\/\//i,"http://")},update_facebook_count:function(t){var e,i;if(t)for(e in t)t.hasOwnProperty(e)&&t[e].share&&t[e].share.share_count&&(i=WPCOMSharing.get_permalink(e))in WPCOM_sharing_counts&&WPCOMSharing.inject_share_count("sharing-facebook-"+WPCOM_sharing_counts[i],t[e].share.share_count)},update_pinterest_count:function(t){void 0!==t.count&&1*t.count>0&&WPCOMSharing.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[t.url],t.count)},inject_share_count:function(t,e){var i=jQuery("a[data-shared="+t+"] > span");i.find(".share-count").remove(),i.append('<span class="share-count">'+WPCOMSharing.format_count(e)+"</span>")},format_count:function(t){return t<1e3?t:t>=1e3&&t<1e4?String(t).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(t){(new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request="+t+"&r="+Math.random()}};!function(t){function e(){var e;void 0!==WPCOMSharing&&WPCOMSharing.get_counts(),e=t(".sharedaddy a.sharing-anchor"),e.click(function(){return!1}),t(".sharedaddy a").each(function(){t(this).attr("href")&&-1!==t(this).attr("href").indexOf("share=")&&t(this).attr("href",t(this).attr("href")+"&nb=1")}),e.on("click",function(){var e=t(this),i=e.parents("div:first").find(".inner");i.is(":animated")||!0!==i.data("justSlid")&&(n.slideUp(200),i.css({left:e.position().left+"px",top:e.position().top+e.height()+3+"px"}).slideToggle(200))}),void 0===document.ontouchstart?e.hover(function(){var e,i=t(this),a=i.parents("div:first").find(".inner");a.is(":animated")||(e=setTimeout(function(){var t,e,r,o,s;n.slideUp(200),a.data("justSlid",!0),a.css({left:i.position().left+"px",top:i.position().top+i.height()+3+"px"}).slideDown(200,function(){i.data("hasoriginal",!0).data("hasitem",!1),setTimeout(function(){a.data("justSlid",!1)},300),a.find(".share-google-plus-1").length||(a.mouseleave(t).mouseenter(e),i.mouseleave(r).mouseenter(o))}),t=function(){if(i.data("hasitem",!1),!1===i.data("hasoriginal")){var t=setTimeout(s,800);i.data("timer2",t)}},e=function(){i.data("hasitem",!0),clearTimeout(i.data("timer2"))},r=function(){if(i.data("hasoriginal",!1),!1===i.data("hasitem")){var t=setTimeout(s,800);i.data("timer2",t)}},o=function(){i.data("hasoriginal",!0),clearTimeout(i.data("timer2"))},s=function(){return a.data("justSlid",!0),a.slideUp(200,function(){setTimeout(function(){a.data("justSlid",!1)},300)}),i.unbind("mouseleave",r).unbind("mouseenter",o),a.unbind("mouseleave",t).unbind("mouseenter",t),!1}},200),i.data("timer",e))},function(){e.each(function(){clearTimeout(t(this).data("timer"))}),e.data("timer",!1)}):t(document.body).addClass("jp-sharing-input-touch"),t(document).click(function(){e.each(function(){clearTimeout(t(this).data("timer"))}),e.data("timer",!1),t(".sharedaddy .inner").slideUp()}),t(".sharedaddy ul").each(function(){if("yep"!==t(this).data("has-click-events")){t(this).data("has-click-events","yep");var e=function(e,i){t("body:first").append('<iframe style="position:fixed;top:100;left:100;height:1px;width:1px;border:none;" id="printFrame-'+e+'" name="printFrame-'+e+'" src="'+i+'" onload="frames[\'printFrame-'+e+"'].focus();frames['printFrame-"+e+"'].print();\"></iframe>")};t(this).find("a.share-print").click(function(){var i=t(this).attr("href"),n=function(){if(-1===i.indexOf("#print")){var t=(new Date).getTime();e(t,i)}else print()};return t(this).parents(".sharing-hidden").length>0?t(this).parents(".inner").slideUp(0,function(){n()}):n(),!1}),t(this).find("a.share-press-this").click(function(){var e="";return window.getSelection?e=window.getSelection():document.getSelection?e=document.getSelection():document.selection&&(e=document.selection.createRange().text),e&&t(this).attr("href",t(this).attr("href")+"&sel="+encodeURI(e)),window.open(t(this).attr("href"),"t","toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570")||(document.location.href=t(this).attr("href")),!1}),t("a.share-email",this).on("click",function(){var e=t(this).attr("href"),i=window.location.protocol+"//"+window.location.hostname+"/";return 0!==e.indexOf(i)||(n.is(":visible")?n.slideUp(200):(t(".sharedaddy .inner").slideUp(),t("#sharing_email .response").remove(),t("#sharing_email form").show(),t("#sharing_email form input[type=submit]").removeAttr("disabled"),t("#sharing_email form a.sharing_cancel").show(),"object"==typeof grecaptcha&&"function"==typeof grecaptcha.reset&&window.___grecaptcha_cfg.count&&grecaptcha.reset(),n.css({left:t(this).offset().left+"px",top:t(this).offset().top+t(this).height()+"px"}).slideDown(200),t("#sharing_email a.sharing_cancel").unbind("click").click(function(){return t("#sharing_email .errors").hide(),n.slideUp(200),t("#sharing_background").fadeOut(),!1}),t("#sharing_email input[type=submit]").unbind("click").click(function(){var i=t(this).parents("form"),a=i.find("input[name=source_email]"),r=i.find("input[name=target_email]");return t(this).prop("disabled",!0),i.find("a.sharing_cancel").hide(),i.find("img.loading").show(),t("#sharing_email .errors").hide(),t("#sharing_email .error").removeClass("error"),a.share_is_email()||a.addClass("error"),r.share_is_email()||r.addClass("error"),0===t("#sharing_email .error").length?(t.ajax({url:e,type:"POST",data:i.serialize(),success:function(e){i.find("img.loading").hide(),"1"===e||"2"===e||"3"===e?(t("#sharing_email .errors-"+e).show(),i.find("input[type=submit]").removeAttr("disabled"),i.find("a.sharing_cancel").show(),"object"==typeof grecaptcha&&"function"==typeof grecaptcha.reset&&grecaptcha.reset()):(t("#sharing_email form").hide(),n.append(e),t("#sharing_email a.sharing_cancel").click(function(){return n.slideUp(200),t("#sharing_background").fadeOut(),!1}))}}),!1):(i.find("img.loading").hide(),i.find("input[type=submit]").removeAttr("disabled"),i.find("a.sharing_cancel").show(),t("#sharing_email .errors-1").show(),!1)})),!1)})}}),t("li.share-email, li.share-custom a.sharing-anchor").addClass("share-service-visible")}var i,n;t.fn.extend({share_is_email:function(){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(this.val())}}),i=t(document.body).on("post-load",e),t(document).ready(function(){n=t("#sharing_email"),i.append(n),e()})}(jQuery);