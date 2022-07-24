$(document).ready(function(){svg4everybody();$(".search__icon").on("click",function(event){event.preventDefault();$(".search").addClass("search--vis");$(".header").addClass("header-search-vis")});$(".search__del").on("click",function(event){event.preventDefault();$(".search").removeClass("search--vis");$(".header").removeClass("header-search-vis")});$(".footer__handler").on("click",function(event){event.preventDefault();$(this).parent().toggleClass("footer__sub-title--open");$(this).parent().parent().find(".footer__list").slideToggle()});$(".sort__handler").on("click",function(event){event.preventDefault();$(this).parent().toggleClass("sort--open")});$(".sort__mobile-handler").on("click",function(event){event.preventDefault();console.log("click");$(this).parent().toggleClass("sort--vis")});$(".section__sort-handler").on("click",function(event){event.preventDefault();$(this).parent().toggleClass("section--sort-vis")});$(".channel__more").on("click",function(event){event.preventDefault();$(this).parent().parent().addClass("channel--full")});function dropHide(){$(".drop").removeClass("drop--active");$(".drop__down").fadeOut()}function dropShow(drop){dropHide();drop.addClass("drop--active");drop.find(".drop__down").fadeIn()}$(document).on("click",".drop__handler",function(){if(!$(this).parents(".drop").hasClass("drop--active")){dropShow($(this).parents(".drop"))}else{dropHide($(this).parents(".drop"))}});$(document).on("keyup",function(event){if(event.keyCode==27){dropHide()}});$(document).on("click",function(event){if(!$(event.target).closest(".drop").length){dropHide()}});function sendViewSlider(event,slick,currentSlide){if(!currentSlide){var current=slick.$slides.get(0)}else{var current=slick.$slides.get(currentSlide)}var a=$(current).find("a");var viewURl=$(current).find("a").data("view-url");if(!$(current).data("sended")&&viewURl){$(current).attr("data-sended",true);$.ajax({url:viewURl,method:"POST"})}}$(".hero-slider__list").on("afterChange",sendViewSlider);$(".hero-slider__list").on("init",sendViewSlider);$(".hero-slider__list").slick({infinite:true,slidesToShow:1,slidesToScroll:1,fade:true,cssEase:"linear",dots:true,arrows:true,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>',responsive:[{breakpoint:639,settings:{arrows:false,dots:false,autoplay:true,autoplaySpeed:3e3}}]});$(".hero-slider-nav").slick({infinite:true,slidesToShow:1,slidesToScroll:1,variableWidth:true,dots:false,arrows:true,focusOnSelect:true,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>',responsive:[{breakpoint:639,settings:{arrows:false,autoplay:true,autoplaySpeed:3e3}}]});$(".grid--slider").slick({infinite:true,slidesToShow:4,slidesToScroll:4,cssEase:"linear",dots:true,arrows:true,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>',responsive:[{breakpoint:1469,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1099,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:479,settings:"unslick"}]});$(".series__list").slick({infinite:true,slidesToShow:4,slidesToScroll:1,cssEase:"linear",dots:false,arrows:true,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>',autoplay:true,autoplaySpeed:3e3,responsive:[{breakpoint:959,settings:{slidesToShow:3}},{breakpoint:639,settings:{slidesToShow:2}},{breakpoint:389,settings:{slidesToShow:1}}]});$(".overview__list").slick({infinite:true,slidesToShow:4,slidesToScroll:1,cssEase:"linear",dots:true,arrows:false,responsive:[{breakpoint:1599,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:1}}]});$(".reviews__list").slick({infinite:true,slidesToShow:3,slidesToScroll:1,cssEase:"linear",dots:true,arrows:false,responsive:[{breakpoint:1399,settings:{slidesToShow:2}},{breakpoint:959,settings:{slidesToShow:1}}]});$(".tour-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,cssEase:"linear",dots:false,arrows:true,prevArrow:'<div class="slick-prev"></div>',nextArrow:'<div class="slick-next"></div>',responsive:[{breakpoint:1399,settings:{}},{breakpoint:959,settings:{}}]});$(".comments .input__area").focus(function(){$(this).parent().parent().parent().find(".comments__submit").show()});$(".player-actions__item--download, .player-actions__item--subtitles").on("click",function(event){$(this).children().find(".download").toggleClass("download--vis");$("body").find(".header__inner").toggleClass("hide--element")});$(".download__close").on("click",function(event){$(".download").addClass("download--hide")});$(".player-description__more").on("click",function(event){event.preventDefault();$(this).parent().parent().addClass("player-description--full")});$(".upgrade-pin__close").on("click",function(event){event.preventDefault();$(".upgrade-pin").hide()});$(window).scroll(function(){if($(this).scrollTop()>0){$(".body-video").addClass("burger-top")}else{$(".body-video").removeClass("burger-top")}});var $previewVideo=$(".item__preview-container video");var $previewContainer=$(".item__preview-container");$(document).on("mouseover",".section__grid--preview .item__main",function(e){if($(this).parent().find(".item__preview-container video").length){$(".item__preview-container").hide();$(this).parent().find(".item__preview-container").show();$(this).parent().find(".item__preview-container video")[0].play()}});$(document).on("mouseleave",".section__grid--preview .item__preview-container, .section__grid--preview .item",function(e){if($(this).parent().find(".item__preview-container video").length){$(".item__preview-container").hide();$(this).parent().find(".item__preview-container video")[0].pause();$(this).parent().find(".item__preview-container video")[0].currentTime=0}});$(".input--show .input__icon").on("click",function(event){event.preventDefault();$(this).parent().toggleClass("input--active");var input=$(this).parent().find(".input__area");console.log(input);if(input.attr("type")=="password"){input.attr("type","text")}else{input.attr("type","password")}});var sidebar=document.getElementById("sidebar");if(sidebar!=null&&sidebar.value==""){new SimpleBar(sidebar)}$(".header__burger").on("click",function(event){event.preventDefault();$(".content").toggleClass("content--sidebar-hid");$("html, body").toggleClass("body-fxd");$(".hero-slider__list").slick("refresh");if($(window).width()>479){$(".grid--slider").slick("refresh")}});$(".body-overlay").on("click",function(event){event.preventDefault();$(".content").toggleClass("content--sidebar-hid");$("html, body").toggleClass("body-fxd")});$(".modal-info__close").on("click",function(event){event.preventDefault();$(this).parent().parent().hide()});customSelect(".custom-select select");if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch){document.documentElement.classList.add("is-touch")}$("#open-video-report").on("click",function(){$(".modal-report").show()});$(".modal-report__close").on("click",function(){$(".modal-report").hide()});$(".svg__container").each(function(index){var address=$(this).data("addr");var div=$(this);$.get(address,function(data){$(div).append((new XMLSerializer).serializeToString(data.documentElement))})});$("#subscriber-form").submit(function(event){event.preventDefault();var $form=$(this),url=$form.attr("action");var posting=$.get(url,$form.serialize());posting.done(function(data){alert(data.message)})});$("[data-thumbs]").each(function(index,element){var $element=$(element);var $container=$element.find("[thumbs-container]");var $more=$("[thumbs-more]");var $moreContainer=$more.parent();var pages=$element.data("thumbs-pages")|0;var page=$element.data("thumbs-page")|0;var path=$element.data("thumbs");$more.on("click",function(event){event.preventDefault();event.stopPropagation();$.ajax(path.replace(":page:",++page),{method:"GET",success:function(response){$container.append(response);if(typeof prepareThumbs==="function"){prepareThumbs()}if(typeof $().unveil==="function"){$(".img_lazy").unveil()}},error:function(){$moreContainer.remove()}});if(page>=pages){$moreContainer.remove()}});if(page>=pages){$moreContainer.remove()}});$(".filter-select").on("change",function(event){var selected=$(this).find("option:selected");if(selected!==undefined){var url=$(selected).data("url");if(url!==undefined){window.location.href=url}}});var flash_labels=["days","hours","minutes","seconds"],flash_toDate="2022/07/05 12:0:0",flash_template=_.template($("#main-example-template").html()),flash_currDate="00:00:00:00:00",flash_nextDate="00:00:00:00:00",parser=/([0-9]{2})/gi,$flash_example=$("#main-example"),dyncamicDate=$("#main-example").data("date");if($("#main-example").data("show-to")){var flash_toDate=$("#main-example").data("show-to")}else{var flash_toDate="2022/04/19 12:0:0"}if(typeof dyncamicDate!=="undefined"){flash_toDate=dyncamicDate}function flash_strfobj(str){var parsed=str.match(parser),obj={};flash_labels.forEach(function(label,i){obj[label]=parsed[i]});return obj}function flash_diff(obj1,obj2){var diff=[];flash_labels.forEach(function(key){if(obj1[key]!==obj2[key]){diff.push(key)}});return diff}var flash_initData=flash_strfobj(flash_currDate);flash_labels.forEach(function(label,i){$flash_example.append(flash_template({curr:flash_initData[label],next:flash_initData[label],label:label}))});$flash_example.length&&$flash_example.countdown(flash_toDate,function(event){var newDate=event.strftime("%D:%H:%M:%S"),data;if(newDate!==flash_nextDate){flash_currDate=flash_nextDate;flash_nextDate=newDate;data={curr:flash_strfobj(flash_currDate),next:flash_strfobj(flash_nextDate)};flash_diff(data.curr,data.next).forEach(function(label){var selector=".%s".replace(/%s/,label),$node=$flash_example.find(selector);$node.removeClass("flip");$node.find(".curr").text(data.curr[label]);$node.find(".next").text(data.next[label]);_.delay(function($node){$node.addClass("flip")},50,$node)})}});$(".s-offer__close").on("click",function(){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation();e.preventDefault();$(this).closest(".s-offer").remove()})});var touch="ontouchstart"in document.documentElement||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0;if(touch){try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(!styleSheet.rules)continue;for(var ri=styleSheet.rules.length-1;ri>=0;ri--){if(!styleSheet.rules[ri].selectorText)continue;if(styleSheet.rules[ri].selectorText.match(":hover")){styleSheet.deleteRule(ri)}}}}catch(ex){}}const USER_QUALITY_COOKIE="usquality";function setCookie(name,value,days){var expires="";if(days){var date=new Date;date.setTime(date.getTime()+days*24*60*60*1e3);expires="; expires="+date.toUTCString()}document.cookie=name+"="+(value||"")+expires+"; path=/"}function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null}function eraseCookie(name){document.cookie=name+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){try{var ce=new window.CustomEvent("test");if(ce.preventDefault(),!0!==ce.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var CustomEvent=function(e,t){var n,r;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent}},{}],2:[function(require,module,exports){(function(global){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _index=require("./index"),_index2=_interopRequireDefault(_index);!function(e){e.customSelect=_index2.default}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./index":3}],3:[function(require,module,exports){"use strict";function builder(e,t){function n(e){x&&x.classList.remove(t.hasFocusClass),void 0!==e?(x=e,x.classList.add(t.hasFocusClass),T&&(e.offsetTop<e.offsetParent.scrollTop||e.offsetTop>e.offsetParent.scrollTop+e.offsetParent.clientHeight-e.clientHeight)&&e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel",{bubbles:!0}))):x=void 0}function s(e){w&&(w.classList.remove(t.isSelectedClass),w.removeAttribute("id"),A.removeAttribute("aria-activedescendant")),void 0!==e?(e.classList.add(t.isSelectedClass),e.setAttribute("id",E+"-"+L+"-selectedOption"),A.setAttribute("aria-activedescendant",E+"-"+L+"-selectedOption"),w=e,A.children[0].textContent=w.customSelectOriginalOption.text):(w=void 0,A.children[0].textContent=""),n(e)}function o(e){var t=S.querySelector("option[value='"+e+"']");if(!t){t=_slicedToArray(S.options,1)[0]}t.selected=!0,s(S.options[S.selectedIndex].customSelectCstOption)}function a(e){var t=[].indexOf.call(S.options,x.customSelectOriginalOption);S.options[t+e]&&n(S.options[t+e].customSelectCstOption)}function r(e){if(e||void 0===e){var s=document.querySelector("."+E+"."+t.isOpenClass);s&&(s.customSelect.open=!1),y.classList.add(t.isOpenClass),y.classList.add(t.isOpenClass),A.setAttribute("aria-expanded","true"),w&&(N.scrollTop=w.offsetTop),y.dispatchEvent(new CustomEvent("custom-select:open")),T=!0}else y.classList.remove(t.isOpenClass),A.setAttribute("aria-expanded","false"),T=!1,n(w),y.dispatchEvent(new CustomEvent("custom-select:close"));return T}function i(e){e.target===A||A.contains(e.target)?T?r(!1):r():e.target.classList&&e.target.classList.contains(t.optionClass)&&N.contains(e.target)?(s(e.target),w.customSelectOriginalOption.selected=!0,r(!1),S.dispatchEvent(new CustomEvent("change"))):e.target===S?A!==document.activeElement&&S!==document.activeElement&&A.focus():T&&!y.contains(e.target)&&r(!1)}function c(e){e.target.classList&&e.target.classList.contains(t.optionClass)&&n(e.target)}function l(e){if(T)switch(e.keyCode){case 13:case 32:s(x),w.customSelectOriginalOption.selected=!0,S.dispatchEvent(new CustomEvent("change")),r(!1);break;case 27:r(!1);break;case 38:a(-1);break;case 40:a(1);break;default:if(e.keyCode>=48&&e.keyCode<=90){P&&clearTimeout(P),P=setTimeout(function(){k=""},1500),k+=String.fromCharCode(e.keyCode);for(var t=0,o=S.options.length;t<o;t++)if(S.options[t].text.toUpperCase().substr(0,k.length)===k){n(S.options[t].customSelectCstOption);break}}}else 40!==e.keyCode&&38!==e.keyCode&&32!==e.keyCode||r()}function d(){var e=S.selectedIndex;s(-1===e?void 0:S.options[e].customSelectCstOption)}function u(e){var t=e.currentTarget,n=e.target;n.offsetTop<t.scrollTop?t.scrollTop=n.offsetTop:t.scrollTop=n.offsetTop+n.clientHeight-t.clientHeight}function p(){document.addEventListener("click",i),N.addEventListener("mouseover",c),N.addEventListener("custom-select:focus-outside-panel",u),S.addEventListener("change",d),y.addEventListener("keydown",l)}function m(){document.removeEventListener("click",i),N.removeEventListener("mouseover",c),N.removeEventListener("custom-select:focus-outside-panel",u),S.removeEventListener("change",d),y.removeEventListener("keydown",l)}function f(e){e&&!S.disabled?(y.classList.add(t.isDisabledClass),S.disabled=!0,A.removeAttribute("tabindex"),y.dispatchEvent(new CustomEvent("custom-select:disabled")),m()):!e&&S.disabled&&(y.classList.remove(t.isDisabledClass),S.disabled=!1,A.setAttribute("tabindex","0"),y.dispatchEvent(new CustomEvent("custom-select:enabled")),p())}function v(e){var n=e,o=[];if(void 0===n.length)throw new TypeError("Invalid Argument");for(var a=0,r=n.length;a<r;a++)if(n[a]instanceof HTMLElement&&"OPTGROUP"===n[a].tagName.toUpperCase()){var i=document.createElement("div");i.classList.add(t.optgroupClass),i.setAttribute("data-label",n[a].label),i.customSelectOriginalOptgroup=n[a],n[a].customSelectCstOptgroup=i;for(var c=v(n[a].children),l=0,d=c.length;l<d;l++)i.appendChild(c[l]);o.push(i)}else{if(!(n[a]instanceof HTMLElement&&"OPTION"===n[a].tagName.toUpperCase()))throw new TypeError("Invalid Argument");var u=document.createElement("div");u.classList.add(t.optionClass),u.textContent=n[a].text,u.setAttribute("data-value",n[a].value),u.setAttribute("role","option"),u.customSelectOriginalOption=n[a],n[a].customSelectCstOption=u,n[a].selected&&s(u),o.push(u)}return o}function C(e,t,n){var s=void 0;if(void 0===n||n===S)s=N;else{if(!(n instanceof HTMLElement&&"OPTGROUP"===n.tagName.toUpperCase()&&S.contains(n)))throw new TypeError("Invalid Argument");s=n.customSelectCstOptgroup}var o=e instanceof HTMLElement?[e]:e;if(t)for(var a=0,r=o.length;a<r;a++)s===N?S.appendChild(o[a]):s.customSelectOriginalOptgroup.appendChild(o[a]);for(var i=v(o),c=0,l=i.length;c<l;c++)s.appendChild(i[c]);return o}function g(e,t){var n=void 0;if(t instanceof HTMLElement&&"OPTION"===t.tagName.toUpperCase()&&S.contains(t))n=t.customSelectCstOption;else{if(!(t instanceof HTMLElement&&"OPTGROUP"===t.tagName.toUpperCase()&&S.contains(t)))throw new TypeError("Invalid Argument");n=t.customSelectCstOptgroup}var s=v(e.length?e:[e]);return n.parentNode.insertBefore(s[0],n),t.parentNode.insertBefore(e.length?e[0]:e,t)}function b(e){var t=void 0;if(e instanceof HTMLElement&&"OPTION"===e.tagName.toUpperCase()&&S.contains(e))t=e.customSelectCstOption;else{if(!(e instanceof HTMLElement&&"OPTGROUP"===e.tagName.toUpperCase()&&S.contains(e)))throw new TypeError("Invalid Argument");t=e.customSelectCstOptgroup}t.parentNode.removeChild(t);var n=e.parentNode.removeChild(e);return d(),n}function h(){for(var e=[];S.children.length;)N.removeChild(N.children[0]),e.push(S.removeChild(S.children[0]));return s(),e}function O(){for(var e=0,t=S.options.length;e<t;e++)delete S.options[e].customSelectCstOption;for(var n=S.getElementsByTagName("optgroup"),s=0,o=n.length;s<o;s++)delete n.customSelectCstOptgroup;return m(),y.parentNode.replaceChild(S,y)}var E="customSelect",T=!1,L="",S=e,y=void 0,A=void 0,x=void 0,w=void 0,N=void 0,j=void 0,P=void 0,k="";y=document.createElement("div"),y.classList.add(t.containerClass,E),A=document.createElement("span"),A.className=t.openerClass,A.setAttribute("role","combobox"),A.setAttribute("aria-autocomplete","list"),A.setAttribute("aria-expanded","false"),A.innerHTML="<span>\n   "+(-1!==S.selectedIndex?S.options[S.selectedIndex].text:"")+"\n   </span>",N=document.createElement("div");for(var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",U=0;U<5;U++)L+=H.charAt(Math.floor(Math.random()*H.length));return N.id=E+"-"+L+"-panel",N.className=t.panelClass,N.setAttribute("role","listbox"),A.setAttribute("aria-owns",N.id),C(S.children,!1),y.appendChild(A),S.parentNode.replaceChild(y,S),y.appendChild(S),y.appendChild(N),document.querySelector('label[for="'+S.id+'"]')?j=document.querySelector('label[for="'+S.id+'"]'):"LABEL"===y.parentNode.tagName.toUpperCase()&&(j=y.parentNode),void 0!==j&&(j.setAttribute("id",E+"-"+L+"-label"),A.setAttribute("aria-labelledby",E+"-"+L+"-label")),S.disabled?y.classList.add(t.isDisabledClass):(A.setAttribute("tabindex","0"),S.setAttribute("tabindex","-1"),p()),y.customSelect={get pluginOptions(){return t},get open(){return T},set open(e){r(e)},get disabled(){return S.disabled},set disabled(e){f(e)},get value(){return S.value},set value(e){o(e)},append:function(e,t){return C(e,!0,t)},insertBefore:function(e,t){return g(e,t)},remove:b,empty:h,destroy:O,opener:A,select:S,panel:N,container:y},S.customSelect=y.customSelect,y.customSelect}function customSelect(e,t){var n=[],s=[];return function(){if(e&&e instanceof HTMLElement&&"SELECT"===e.tagName.toUpperCase())n.push(e);else if(e&&"string"==typeof e)for(var o=document.querySelectorAll(e),a=0,r=o.length;a<r;++a)o[a]instanceof HTMLElement&&"SELECT"===o[a].tagName.toUpperCase()&&n.push(o[a]);else if(e&&e.length)for(var i=0,c=e.length;i<c;++i)e[i]instanceof HTMLElement&&"SELECT"===e[i].tagName.toUpperCase()&&n.push(e[i]);for(var l=0,d=n.length;l<d;++l)s.push(builder(n[l],_extends({},defaultParams,t)));return s}()}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_slicedToArray=function(){function e(e,t){var n=[],s=!0,o=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(s=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);s=!0);}catch(e){o=!0,a=e}finally{try{!s&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();exports.default=customSelect,require("custom-event-polyfill");var defaultParams={containerClass:"custom-select-container",openerClass:"custom-select-opener",panelClass:"custom-select-panel",optionClass:"custom-select-option",optgroupClass:"custom-select-optgroup",isSelectedClass:"is-selected",hasFocusClass:"has-focus",isDisabledClass:"is-disabled",isOpenClass:"is-open"}},{"custom-event-polyfill":1}]},{},[2]);
!function(){$("[tabs]").each(function(index,tabs){var $tabs=$(tabs);var $containers=$tabs.find("[data-tab-container]");var $buttons=$tabs.find("[data-tab-button]");$containers.hide();$buttons.each(function(index,button){var $button=$(button);var name=$button.data("tab-button");var $container=$tabs.find('[data-tab-container="'+name+'"]');$button.on("click",function(event){event.preventDefault();$containers.hide();$container.show();$buttons.removeClass("formats__item--active");$button.addClass("formats__item--active");if($button.hasClass("formats__item--mobile")){var type=$button.data("type");var $type_buttons=$tabs.find('[data-type="'+type+'"]');$type_buttons.each(function(index,button){$(button).addClass("formats__item--active");$(".formats--list-open").removeClass("formats--list-open")})}})})})}();