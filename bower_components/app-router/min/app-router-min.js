!function(t,e){function a(t,a,i){var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!1,!0,a),i.dispatchEvent(r)}function i(e){var i=g.parseUrl(t.location.href,e.getAttribute("mode"));if(i.hash!==b.hash&&i.path===b.path&&i.search===b.search&&i.isHashPath===b.isHashPath)return void d(i.hash);b=i;var n={path:i.path};if(a("state-change",n,e)){for(var s=e.firstElementChild;s;){if("APP-ROUTE"===s.tagName&&g.testRoute(s.getAttribute("path"),i.path,e.getAttribute("trailingSlash"),s.hasAttribute("regex")))return void r(e,s,i);s=s.nextSibling}a("not-found",n,e)}}function r(t,e,i){if(e.hasAttribute("redirect"))return void t.go(e.getAttribute("redirect"),{replace:!0});if(e!==t.activeRoute||"noop"!==e.getAttribute("onUrlChange")){var r={path:i.path,route:e,oldRoute:t.activeRoute};if(a("activate-route-start",r,t)&&a("activate-route-start",r,e)){if(t.loadingRoute=e,e===t.activeRoute&&"updateModel"===e.getAttribute("onUrlChange")){var s=h(t,e,i,r);return e.hasAttribute("template")||e.isInlineTemplate?l(e.lastElementChild.templateInstance.model,s):l(e.firstElementChild,s),a("activate-route-end",r,t),void a("activate-route-end",r,r.route)}e.hasAttribute("import")?n(t,e.getAttribute("import"),e,i,r):e.hasAttribute("element")?o(t,e.getAttribute("element"),e,i,r):e.firstElementChild&&"TEMPLATE"===e.firstElementChild.tagName&&(e.isInlineTemplate=!0,u(t,e.firstElementChild,e,i,r))}}}function n(t,a,i,r,n){function o(){u.loaded=!0,s(t,u,a,i,r,n)}var u;m.hasOwnProperty(a)?(u=m[a],u.loaded?s(t,u,a,i,r,n):u.addEventListener("load",o)):(u=e.createElement("link"),u.setAttribute("rel","import"),u.setAttribute("href",a),u.setAttribute("async","async"),u.addEventListener("load",o),u.loaded=!1,e.head.appendChild(u),m[a]=u)}function s(t,e,a,i,r,n){if(i.importLink=e,i===t.loadingRoute)if(i.hasAttribute("template")){var s,h=i.getAttribute("template");s=h?e["import"].getElementById(h):e["import"].querySelector("template"),u(t,s,i,r,n)}else o(t,i.getAttribute("element")||a.split("/").slice(-1)[0].replace(".html",""),i,r,n)}function o(t,a,i,r,n){var s=e.createElement(a),o=h(t,i,r,n);l(s,o),c(t,s,r,n)}function u(t,a,i,r,n){var s;if("createInstance"in a){var o=h(t,i,r,n);s=a.createInstance(o)}else s=e.importNode(a.content,!0);c(t,s,r,n)}function h(t,e,i,r){var n=g.routeArguments(e.getAttribute("path"),i.path,i.search,e.hasAttribute("regex"),"auto"===t.getAttribute("typecast"));return(e.hasAttribute("bindRouter")||t.hasAttribute("bindRouter"))&&(n.router=t),r.model=n,a("before-data-binding",r,t),a("before-data-binding",r,r.route),r.model}function l(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])}function c(t,e,i,r){p(t.previousRoute),t.previousRoute=t.activeRoute,t.activeRoute=t.loadingRoute,t.loadingRoute=null,t.previousRoute&&t.previousRoute.removeAttribute("active"),t.activeRoute.setAttribute("active","active"),t.hasAttribute("core-animated-pages")&&r.route!==r.oldRoute||p(t.previousRoute),t.activeRoute.appendChild(e),t.hasAttribute("core-animated-pages")&&(t.coreAnimatedPages.selected=t.activeRoute.getAttribute("path")),i.hash&&!t.hasAttribute("core-animated-pages")&&d(i.hash),a("activate-route-end",r,t),a("activate-route-end",r,r.route)}function p(t){if(t){var e=t.firstChild;for(t.isInlineTemplate&&(e=t.querySelector("template").nextSibling);e;){var a=e;e=e.nextSibling,t.removeChild(a)}}}function d(t){t&&setTimeout(function(){var a=e.querySelector("html /deep/ "+t)||e.querySelector('html /deep/ [name="'+t.substring(1)+'"]');a&&a.scrollIntoView&&a.scrollIntoView(!0)},0)}function v(t,e,a,i,r){var n=t[e],s=a[i];if("**"===n&&e===t.length-1)return!0;if("undefined"==typeof n||"undefined"==typeof s)return n===s;if(n===s||"*"===n||":"===n.charAt(0))return":"===n.charAt(0)&&"undefined"!=typeof r&&(r[n.substring(1)]=a[i]),v(t,e+1,a,i+1,r);if("**"===n)for(var o=i;o<a.length;o++)if(v(t,e+1,a,o,r))return!0;return!1}var g={},m={},f="ActiveXObject"in t,b={},A=Object.create(HTMLElement.prototype);A.util=g,e.registerElement("app-route",{prototype:Object.create(HTMLElement.prototype)}),A.attachedCallback=function(){"manual"!==this.getAttribute("init")&&this.init()},A.init=function(){var a=this;a.isInitialized||(a.isInitialized=!0,a.hasAttribute("trailingSlash")||a.setAttribute("trailingSlash","strict"),a.hasAttribute("mode")||a.setAttribute("mode","auto"),a.hasAttribute("typecast")||a.setAttribute("typecast","auto"),a.hasAttribute("core-animated-pages")&&(a.createShadowRoot(),a.coreAnimatedPages=e.createElement("core-animated-pages"),a.coreAnimatedPages.appendChild(e.createElement("content")),a.coreAnimatedPages.style.position="static",a.coreAnimatedPages.setAttribute("valueattr","path"),a.coreAnimatedPages.setAttribute("transitions",a.getAttribute("transitions")),a.shadowRoot.appendChild(a.coreAnimatedPages),a.coreAnimatedPages.addEventListener("core-animated-pages-transition-end",function(){a.previousRoute&&!a.previousRoute.hasAttribute("active")&&p(a.previousRoute)})),a.stateChangeHandler=i.bind(null,a),t.addEventListener("popstate",a.stateChangeHandler,!1),f&&t.addEventListener("hashchange",a.stateChangeHandler,!1),i(a))},A.detachedCallback=function(){t.removeEventListener("popstate",this.stateChangeHandler,!1),f&&t.removeEventListener("hashchange",this.stateChangeHandler,!1)},A.go=function(a,i){"pushstate"!==this.getAttribute("mode")&&(a="#"+a),i&&i.replace===!0?t.history.replaceState(null,null,a):t.history.pushState(null,null,a);try{var r=new PopStateEvent("popstate",{bubbles:!1,cancelable:!1,state:{}});"dispatchEvent_"in t?t.dispatchEvent_(r):t.dispatchEvent(r)}catch(n){var s=e.createEvent("CustomEvent");s.initCustomEvent("popstate",!1,!1,{state:{}}),t.dispatchEvent(s)}},g.parseUrl=function(t,a){var i={isHashPath:"hash"===a};if("function"==typeof URL){var r=new URL(t);i.path=r.pathname,i.hash=r.hash,i.search=r.search}else{var n=e.createElement("a");n.href=t,i.path=n.pathname,"/"!==i.path.charAt(0)&&(i.path="/"+i.path),i.hash=n.hash,i.search=n.search}if("pushstate"!==a&&("#/"===i.hash.substring(0,2)?(i.isHashPath=!0,i.path=i.hash.substring(1)):"#!/"===i.hash.substring(0,3)?(i.isHashPath=!0,i.path=i.hash.substring(2)):i.isHashPath&&(i.path=0===i.hash.length?"/":i.hash.substring(1)),i.isHashPath)){i.hash="";var s=i.path.indexOf("#");-1!==s&&(i.hash=i.path.substring(s),i.path=i.path.substring(0,s));var o=i.path.indexOf("?");-1!==o&&(i.search=i.path.substring(o),i.path=i.path.substring(0,o))}return i},g.testRoute=function(t,e,a,i){return"ignore"===a&&("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"!==t.slice(-1)||i||(t=t.slice(0,-1))),i?g.testRegExString(t,e):t===e||"*"===t?!0:("/"!==t.charAt(0)&&(t="/**/"+t),v(t.split("/"),1,e.split("/"),1))},g.routeArguments=function(t,e,a,i,r){var n={};i||("/"!==t.charAt(0)&&(t="/**/"+t),v(t.split("/"),1,e.split("/"),1,n));var s=a.substring(1).split("&");1===s.length&&""===s[0]&&(s=[]);for(var o=0;o<s.length;o++){var u=s[o],h=u.split("=");n[h[0]]=h.splice(1,h.length-1).join("=")}if(r)for(var l in n)n[l]=g.typecast(n[l]);return n},g.typecast=function(t){return"true"===t?!0:"false"===t?!1:isNaN(t)||""===t||"0"===t.charAt(0)?decodeURIComponent(t):+t},g.testRegExString=function(t,e){if("/"!==t.charAt(0))return!1;t=t.slice(1);var a="";if("/"===t.slice(-1))t=t.slice(0,-1);else{if("/i"!==t.slice(-2))return!1;t=t.slice(0,-2),a="i"}return new RegExp(t,a).test(e)},e.registerElement("app-router",{prototype:A})}(window,document);
