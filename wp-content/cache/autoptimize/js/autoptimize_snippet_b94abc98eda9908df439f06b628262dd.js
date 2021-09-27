!function(e,t){t=t(e,e.document,Date),"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(t):e.lazySizes=t}(window,function(n,f,s){"use strict";var m,h;if(!function(){var e,t={lazyClass:"br-lazy",loadedClass:"br-loaded",loadingClass:"br-loading",preloadClass:"br-preload",errorClass:"br-error",autosizesClass:"br-autosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-breeze",srcsetAttr:"data-brsrcset",sizesAttr:"data-brsizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=n.lazySizesConfig||n.lazysizesConfig||{},t)e in h||(h[e]=t[e])}(),!f||!f.getElementsByClassName)return{init:function(){},cfg:h,noSupport:!0};function r(e,t){return w[t]||(w[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),w[t].test(e[C]("class")||"")&&w[t]}function c(e,t){r(e,t)||e.setAttribute("class",(e[C]("class")||"").trim()+" "+t)}function u(e,t){(t=r(e,t))&&e.setAttribute("class",(e[C]("class")||"").replace(t," "))}function z(e,t,a,n,i){var s=f.createEvent("Event");return(a=a||{}).instance=m,s.initEvent(t,!n,!i),s.detail=a,e.dispatchEvent(s),s}function y(e,t){var a;!p&&(a=n.picturefill||h.pf)?(t&&t.src&&!e[C]("srcset")&&e.setAttribute("srcset",t.src),a({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)}function g(e,t){return(getComputedStyle(e,null)||{})[t]}function i(e,t,a){for(a=a||e.offsetWidth;a<h.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a}var a,o,t,l,d,v=f.documentElement,p=n.HTMLPictureElement,b="addEventListener",C="getAttribute",e=n[b].bind(n),A=n.setTimeout,E=n.requestAnimationFrame||A,_=n.requestIdleCallback,M=/^picture$/i,N=["load","error","lazyincluded","_lazyloaded"],w={},L=Array.prototype.forEach,x=function(t,a,e){var n=e?b:"removeEventListener";e&&x(t,a),N.forEach(function(e){t[n](e,a)})},W=(l=[],d=t=[],B._lsFlush=S,B);function S(){var e=d;for(d=t.length?l:t,o=!(a=!0);e.length;)e.shift()();a=!1}function B(e,t){a&&!t?e.apply(this,arguments):(d.push(e),o||(o=!0,(f.hidden?A:E)(S)))}function T(a,e){return e?function(){W(a)}:function(){var e=this,t=arguments;W(function(){a.apply(e,t)})}}function F(e){function t(){a=null,e()}var a,n,i=function(){var e=s.now()-n;e<99?A(i,99-e):(_||t)(t)};return function(){n=s.now(),a=a||A(i,99)}}var R,D,k,H,O,P,$,q,I,U,j,G,J,K,Q,V,X,Y,Z,ee,te,ae,ne,ie,se,re,oe,le,de,ce,ue,fe=(Z=/^img$/i,ee=/^iframe$/i,te="onscroll"in n&&!/(gle|ing)bot/.test(navigator.userAgent),ie=-1,J=ze,Q=ne=ae=0,V=h.throttleDelay,X=h.ricTimeout,Y=_&&49<X?function(){_(ye,{timeout:X}),X!==h.ricTimeout&&(X=h.ricTimeout)}:T(function(){A(ye)},!0),re=T(ge),oe=function(e){re({target:e.target})},le=T(function(t,e,a,n,i){var s,r,o,l,d;(o=z(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(a?c(t,h.autosizesClass):t.setAttribute("sizes",n)),s=t[C](h.srcsetAttr),a=t[C](h.srcAttr),i&&(r=(d=t.parentNode)&&M.test(d.nodeName||"")),l=e.firesLoad||"src"in t&&(s||a||r),o={target:t},c(t,h.loadingClass),l&&(clearTimeout(k),k=A(me,2500),x(t,oe,!0)),r&&L.call(d.getElementsByTagName("source"),ve),s?t.setAttribute("srcset",s):a&&!r&&(ee.test(t.nodeName)?(n=a,0==(d=(e=t).getAttribute("data-load-mode")||h.iframeLoadMode)?e.contentWindow.location.replace(n):1==d&&(e.src=n)):t.src=a),i&&(s||r)&&y(t,{src:a})),t._lazyRace&&delete t._lazyRace,u(t,h.lazyClass),W(function(){var e=t.complete&&1<t.naturalWidth;l&&!e||(e&&c(t,h.fastLoadedClass),ge(o),t._lazyCache=!0,A(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&ne--},!0)}),ce=F(function(){h.loadMode=3,se()}),ue=function(){D||(s.now()-O<999?A(ue,999):(D=!0,h.loadMode=3,se(),e("scroll",pe,!0)))},{_:function(){O=s.now(),m.elements=f.getElementsByClassName(h.lazyClass),R=f.getElementsByClassName(h.lazyClass+" "+h.preloadClass),e("scroll",se,!0),e("resize",se,!0),e("pageshow",function(e){var t;!e.persisted||(t=f.querySelectorAll("."+h.loadingClass)).length&&t.forEach&&E(function(){t.forEach(function(e){e.complete&&de(e)})})}),n.MutationObserver?new MutationObserver(se).observe(v,{childList:!0,subtree:!0,attributes:!0}):(v[b]("DOMNodeInserted",se,!0),v[b]("DOMAttrModified",se,!0),setInterval(se,999)),e("hashchange",se,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[b](e,se,!0)}),/d$|^c/.test(f.readyState)?ue():(e("load",ue),f[b]("DOMContentLoaded",se),A(ue,2e4)),m.elements.length?(ze(),W._lsFlush()):se()},checkElems:se=function(e){var t;(e=!0===e)&&(X=33),K||(K=!0,(t=V-(s.now()-Q))<0&&(t=0),e||t<9?Y():A(Y,t))},unveil:de=function(e){var t,a,n,i;e._lazyRace||(!(i="auto"==(n=(a=Z.test(e.nodeName))&&(e[C](h.sizesAttr)||e[C]("sizes"))))&&D||!a||!e[C]("src")&&!e.srcset||e.complete||r(e,h.errorClass)||!r(e,h.lazyClass))&&(t=z(e,"lazyunveilread").detail,i&&Ee.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ne++,le(e,t,i,n,a))},_aLSL:pe});function me(e){ne--,e&&!(ne<0)&&e.target||(ne=0)}function he(e){return null==G&&(G="hidden"==g(f.body,"visibility")),G||!("hidden"==g(e.parentNode,"visibility")&&"hidden"==g(e,"visibility"))}function ze(){var e,t,a,n,i,s,r,o,l,d,c,u=m.elements;if((H=h.loadMode)&&ne<8&&(e=u.length)){for(t=0,ie++;t<e;t++)if(u[t]&&!u[t]._lazyRace)if(!te||m.prematureUnveil&&m.prematureUnveil(u[t]))de(u[t]);else if((r=u[t][C]("data-expand"))&&(i=+r)||(i=ae),l||(l=!h.expand||h.expand<1?500<v.clientHeight&&500<v.clientWidth?500:370:h.expand,d=(m._defEx=l)*h.expFactor,c=h.hFac,G=null,ae<d&&ne<1&&2<ie&&2<H&&!f.hidden?(ae=d,ie=0):ae=1<H&&1<ie&&ne<6?l:0),o!==i&&(P=innerWidth+i*c,$=innerHeight+i,s=-1*i,o=i),d=u[t].getBoundingClientRect(),(j=d.bottom)>=s&&(q=d.top)<=$&&(U=d.right)>=s*c&&(I=d.left)<=P&&(j||U||I||q)&&(h.loadHidden||he(u[t]))&&(D&&ne<3&&!r&&(H<3||ie<4)||function(e,t){var a,n=e,i=he(e);for(q-=t,j+=t,I-=t,U+=t;i&&(n=n.offsetParent)&&n!=f.body&&n!=v;)(i=0<(g(n,"opacity")||1))&&"visible"!=g(n,"overflow")&&(a=n.getBoundingClientRect(),i=U>a.left&&I<a.right&&j>a.top-1&&q<a.bottom+1);return i}(u[t],i))){if(de(u[t]),n=!0,9<ne)break}else!n&&D&&!a&&ne<4&&ie<4&&2<H&&(R[0]||h.preloadAfterLoad)&&(R[0]||!r&&(j||U||I||q||"auto"!=u[t][C](h.sizesAttr)))&&(a=R[0]||u[t]);a&&!n&&de(a)}}function ye(){K=!1,Q=s.now(),J()}function ge(e){var t=e.target;t._lazyCache?delete t._lazyCache:(me(e),c(t,h.loadedClass),u(t,h.loadingClass),x(t,oe),z(t,"lazyloaded"))}function ve(e){var t,a=e[C](h.srcsetAttr);(t=h.customMedia[e[C]("data-media")||e[C]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)}function pe(){3==h.loadMode&&(h.loadMode=2),ce()}var be,Ce,Ae,Ee=(Ce=T(function(e,t,a,n){var i,s,r;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),M.test(t.nodeName||""))for(s=0,r=(i=t.getElementsByTagName("source")).length;s<r;s++)i[s].setAttribute("sizes",n);a.detail.dataAttr||y(e,a.detail)}),{_:function(){be=f.getElementsByClassName(h.autosizesClass),e("resize",Ae)},checkElems:Ae=F(function(){var e,t=be.length;if(t)for(e=0;e<t;e++)_e(be[e])}),updateElem:_e});function _e(e,t,a){var n=e.parentNode;n&&(a=i(e,n,a),(t=z(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=t.detail.width)&&a!==e._lazysizesWidth&&Ce(e,n,t,a))}var Me=function(){!Me.i&&f.getElementsByClassName&&(Me.i=!0,Ee._(),fe._())};return A(function(){h.init&&Me()}),m={cfg:h,autoSizer:Ee,loader:fe,init:Me,uP:y,aC:c,rC:u,hC:r,fire:z,gW:i,rAF:W}});