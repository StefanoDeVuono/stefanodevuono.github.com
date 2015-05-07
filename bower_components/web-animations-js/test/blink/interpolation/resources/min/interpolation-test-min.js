"use strict";!function(){function e(){q||(q=!0,setTimeout(function(){q=!1,document.body.appendChild(S),x.forEach(function(e){e()})},0))}function t(){for(var e=document.querySelectorAll(".target.active"),t=0;t<e.length;t++)e[t].evaluate()}function r(e){P=e}function n(e){if(0==e)return"steps(1, end)";if(1==e)return"steps(1, start)";if(.5==e)return"steps(2, end)";var t=(8*e-1)/6;return"cubic-bezier(0, "+t+", 1, "+t+")"}function o(e,t){var r=document.createElement("div");return r.setAttribute("description",e),r.classList.add("test"),t&&r.classList.add(t),r}function a(e){return e.replace(/^-/,"").replace(/-\w/g,function(e){return e[1].toUpperCase()})}function i(e){return a(e.property)+": from ["+e.from+"] to ["+e.to+"]"}function d(t,r){var n="test-"+ ++L,a=0,d=o(i(t),n);T.appendChild(d),r.forEach(function(e){d.appendChild(p(e.at,n,"case-"+ ++a,t,e.is))}),e()}function u(e){return e.replace(/-?\d*\.\d+/g,function(e){return parseFloat(e).toFixed(2).replace(/\.\d+/,function(e){return e.replace(/0+$/,"")}).replace(/\.$/,"").replace(/^-0$/,"0")})}function l(e){return u(e).replace(/([\w\d.]+|[^\s])/g,"$1 ").replace(/\s+/g," ")}function c(e){var t=document.createElement("div"),r=document.querySelector("#target-template");if(r){for(t.appendChild(r.content?r.content.cloneNode(!0):r.querySelector("div")?r.querySelector("div").cloneNode(!0):r.cloneNode(!0));t.firstChild.nodeType!=Node.ELEMENT_NODE&&!/\S/.test(t.firstChild.nodeValue);)t.removeChild(t.firstChild);for(;t.lastChild.nodeType!=Node.ELEMENT_NODE&&!/\S/.test(t.lastChild.nodeValue);)t.removeChild(t.lastChild);1==t.children.length&&1==t.childNodes.length&&(t=t.firstChild,t.parentNode.removeChild(t))}var n=t.querySelector(".target")||t;return n.classList.add("target"),n.classList.add(e),t}function s(e){var t=e.match(/url\([^\)]*\)/g);if(null!==t)for(var r=0;r<t.length;++r){var n=/url\(([^\)]*)\)/g.exec(t[r])[1],o=document.createElement("a");o.href=n,o.pathname="..."+o.pathname.substring(o.pathname.lastIndexOf("/")),e=e.replace(t[r],"url("+o.href+")")}return e}function p(e,t,r,o,d){var u=async_test(i(o)+" at "+e),s=c(r),p=s.querySelector(".target")||s;p.classList.add("active");var f,m;if(f=c(r),m=f.querySelector(".target")||f,m.classList.add("replica"),m.style.setProperty(o.property,d),o.prefixedProperty)for(var h=0;h<o.prefixedProperty.length;h++)m.style.setProperty(o.prefixedProperty[h],d);p.evaluate=function(){var e=this;u.step(function(){window.CSS&&assert_true(CSS.supports(o.property,d));var t=getComputedStyle(e).getPropertyValue(o.property),r=o.property;if(o.prefixedProperty)for(var n=0;n<o.prefixedProperty.length&&!t;)r=o.prefixedProperty[n++],t=getComputedStyle(e).getPropertyValue(r);t||assert_false(o.property+" not supported by this browser");var a=t,i=getComputedStyle(m).getPropertyValue(r);assert_equals(l(a),l(i)),u.done()})};var g=n(e);v++;var C=[{},{}];C[0][a(o.property)]=o.from,C[1][a(o.property)]=o.to,x.push(function(){p.animate(C,{fill:"forwards",duration:1,easing:g,delay:-.5,iterations:.5}),y()});var E=document.createDocumentFragment();return E.appendChild(s),m&&E.appendChild(f),E.appendChild(document.createTextNode("\n")),E}function f(){if(b=!0,t(),P&&P(),window.testRunner){var e=document.querySelector("#results");document.documentElement.textContent="",document.documentElement.appendChild(e),testRunner.dumpAsText(),testRunner.notifyDone()}}function m(){return!b&&g===v}function y(){g++,m()&&f()}var h="animationend",v=0,g=0,C=0,E=.5,w=0,S=document.createDocumentFragment(),x=[],N=document.createElement("style"),P=null;S.appendChild(N);var T=document.createElement("div");T.id="interpolation-tests",T.textContent="Interpolation Tests:",S.appendChild(T);var q=!1,L=0,b=!1;window.testRunner&&testRunner.waitUntilDone(),document.documentElement.addEventListener(h,y),window.testRunner||setTimeout(function(){b||f()},1e4),window.assertInterpolation=d,window.afterTest=r}();
