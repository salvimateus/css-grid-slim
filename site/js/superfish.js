!function(t){t.fn.hoverIntent=function(e,n){var o={sensitivity:7,interval:10,timeout:0};o=t.extend(o,n?{over:e,out:n}:e);var r,i,u,v,s=function(t){r=t.pageX,i=t.pageY},a=function(e,n){return n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.abs(u-r)+Math.abs(v-i)<o.sensitivity?(t(n).unbind("mousemove",s),n.hoverIntent_s=1,o.over.apply(n,[e])):(u=r,v=i,n.hoverIntent_t=setTimeout(function(){a(e,n)},o.interval),void 0)},h=function(t,e){return e.hoverIntent_t=clearTimeout(e.hoverIntent_t),e.hoverIntent_s=0,o.out.apply(e,[t])},m=function(e){for(var n=("mouseover"==e.type?e.fromElement:e.toElement)||e.relatedTarget;n&&n!=this;)try{n=n.parentNode}catch(e){n=this}if(n==this)return!1;var r=jQuery.extend({},e),i=this;i.hoverIntent_t&&(i.hoverIntent_t=clearTimeout(i.hoverIntent_t)),"mouseover"==e.type?(u=r.pageX,v=r.pageY,t(i).bind("mousemove",s),1!=i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){a(r,i)},o.interval))):(t(i).unbind("mousemove",s),1==i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){h(r,i)},o.timeout)))};return this.mouseover(m).mouseout(m)}}(jQuery);!function(s){s.fn.superfish=function(i){var a=s.fn.superfish,o=a.c,e=s([""].join("")),n=function(){var i=s(this),a=l(i);clearTimeout(a.sfTimer),i.showSuperfishUl().siblings().hideSuperfishUl()},t=function(){var i=s(this),o=l(i),e=a.op;clearTimeout(o.sfTimer),o.sfTimer=setTimeout(function(){e.retainPath=s.inArray(i[0],e.$path)>-1,i.hideSuperfishUl(),e.$path.length&&i.parents(["li.",e.hoverClass].join("")).length<1&&n.call(e.$path)},e.delay)},l=function(s){var i=s.parents(["ul.",o.menuClass,":first"].join(""))[0];return a.op=a.o[i.serial],i},r=function(s){s.addClass(o.anchorClass).append(e.clone())};return this.each(function(){var e=this.serial=a.o.length,l=s.extend({},a.defaults,i);l.$path=s("li."+l.pathClass,this).slice(0,l.pathLevels).each(function(){s(this).addClass([l.hoverClass,o.bcClass].join(" ")).filter("li:has(ul)").removeClass(l.pathClass)}),a.o[e]=a.op=l,s("li:has(ul)",this)[s.fn.hoverIntent&&!l.disableHI?"hoverIntent":"hover"](n,t).each(function(){l.autoArrows&&r(s(">a:first-child",this))}).not("."+o.bcClass).hideSuperfishUl();var h=s("a",this);h.each(function(s){var i=h.eq(s).parents("li");h.eq(s).focus(function(){n.call(i)}).blur(function(){t.call(i)})}),l.onInit.call(this)}).each(function(){var i=[o.menuClass];!a.op.dropShadows||s.browser.msie&&s.browser.version<7||i.push(o.shadowClass),s(this).addClass(i.join(" "))})};var i=s.fn.superfish;i.o=[],i.op={},i.IE7fix=function(){var a=i.op;s.browser.msie&&s.browser.version>6&&a.dropShadows&&void 0!=a.animation.opacity&&this.toggleClass(i.c.shadowClass+"-off")},i.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"},i.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:300,animation:{opacity:"show"},speed:"normal",autoArrows:!0,dropShadows:!0,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}},s.fn.extend({hideSuperfishUl:function(){var a=i.op,o=a.retainPath===!0?a.$path:"";a.retainPath=!1;var e=s(["li.",a.hoverClass].join(""),this).add(this).not(o).removeClass(a.hoverClass).find(">ul").hide().css("visibility","hidden");return a.onHide.call(e),this},showSuperfishUl:function(){var s=i.op,a=(i.c.shadowClass+"-off",this.addClass(s.hoverClass).find(">ul:hidden").css("visibility","visible"));return i.IE7fix.call(a),s.onBeforeShow.call(a),a.animate(s.animation,s.speed,function(){i.IE7fix.call(a),s.onShow.call(a)}),this}})}(jQuery);