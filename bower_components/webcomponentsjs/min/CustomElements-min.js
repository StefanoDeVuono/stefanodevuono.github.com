/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
"undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,o=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};o.prototype={set:function(t,o){var n=t[this.name];return n&&n[0]===t?n[1]=o:e(t,this.name,{value:[t,o],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=o}(),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,o=[],n=function(e){o.push(e)},r=function(){o.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r,e.hasNative=Boolean(document.registerElement),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||HTMLImports.useNative)}(CustomElements),CustomElements.addModule(function(e){function t(e,t){o(e,function(e){return t(e)?!0:void n(e,t)}),n(e,t)}function o(e,t,n){var r=e.firstElementChild;if(!r)for(r=e.firstChild;r&&r.nodeType!==Node.ELEMENT_NODE;)r=r.nextSibling;for(;r;)t(r,n)!==!0&&o(r,t,n),r=r.nextElementSibling;return null}function n(e,o){for(var n=e.shadowRoot;n;)t(n,o),n=n.olderShadowRoot}function r(e,t){u=[],a(e,t),u=null}function a(e,t){if(e=wrap(e),!(u.indexOf(e)>=0)){u.push(e);for(var o=e.querySelectorAll("link[rel="+i+"]"),n=0,r=o.length,d;r>n&&(d=o[n]);n++)d["import"]&&a(d["import"],t);t(e)}}var i=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:"none",u;e.forDocumentTree=r,e.forSubtree=t}),CustomElements.addModule(function(e){function t(e){return o(e)||n(e)}function o(t){return e.upgrade(t)?!0:void u(t)}function n(e){y(e,function(e){return o(e)?!0:void 0})}function r(e){u(e),f(e)&&y(e,function(e){u(e)})}function a(e){M.push(e),C||(C=!0,setTimeout(i))}function i(){C=!1;for(var e=M,t=0,o=e.length,n;o>t&&(n=e[t]);t++)n();M=[]}function u(e){E?a(function(){d(e)}):d(e)}function d(e){e.__upgraded__&&(e.attachedCallback||e.detachedCallback)&&!e.__attached&&f(e)&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){s(e),y(e,function(e){s(e)})}function s(e){E?a(function(){l(e)}):l(e)}function l(e){e.__upgraded__&&(e.attachedCallback||e.detachedCallback)&&e.__attached&&!f(e)&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function f(e){for(var t=e,o=wrap(document);t;){if(t==o)return!0;t=t.parentNode||t.host}}function p(e){if(e.shadowRoot&&!e.shadowRoot.__watched){_.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)h(t),t=t.olderShadowRoot}}function m(e){if(_.dom){var o=e[0];if(o&&"childList"===o.type&&o.addedNodes&&o.addedNodes){for(var n=o.addedNodes[0];n&&n!==document&&!n.host;)n=n.parentNode;var r=n&&(n.URL||n._URL||n.host&&n.host.localName)||"";r=r.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",e.length,r||"")}e.forEach(function(e){"childList"===e.type&&(N(e.addedNodes,function(e){e.localName&&t(e)}),N(e.removedNodes,function(e){e.localName&&c(e)}))}),_.dom&&console.groupEnd()}function w(e){for(e=wrap(e),e||(e=wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(m(t.takeRecords()),i())}function h(e){if(!e.__observer){var t=new MutationObserver(m);t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function g(e){e=wrap(e),_.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop()),t(e),h(e),_.dom&&console.groupEnd()}function v(e){b(e,g)}var _=e.flags,y=e.forSubtree,b=e.forDocumentTree,E=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=E;var C=!1,M=[],N=Array.prototype.forEach.call.bind(Array.prototype.forEach),T=Element.prototype.createShadowRoot;T&&(Element.prototype.createShadowRoot=function(){var e=T.call(this);return CustomElements.watchShadow(this),e}),e.watchShadow=p,e.upgradeDocumentTree=v,e.upgradeSubtree=n,e.upgradeAll=t,e.attachedNode=r,e.takeRecords=w}),CustomElements.addModule(function(e){function t(t){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var n=t.getAttribute("is"),r=e.getRegisteredDefinition(n||t.localName);if(r){if(n&&r.tag==t.localName)return o(t,r);if(!n&&!r["extends"])return o(t,r)}}}function o(t,o){return i.upgrade&&console.group("upgrade:",t.localName),o.is&&t.setAttribute("is",o.is),n(t,o),t.__upgraded__=!0,a(t),e.attachedNode(t),e.upgradeSubtree(t),i.upgrade&&console.groupEnd(),t}function n(e,t){Object.__proto__?e.__proto__=t.prototype:(r(e,t.prototype,t["native"]),e.__proto__=t.prototype)}function r(e,t,o){for(var n={},r=t;r!==o&&r!==HTMLElement.prototype;){for(var a=Object.getOwnPropertyNames(r),i=0,u;u=a[i];i++)n[u]||(Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(r,u)),n[u]=1);r=Object.getPrototypeOf(r)}}function a(e){e.createdCallback&&e.createdCallback()}var i=e.flags;e.upgrade=t,e.upgradeWithDefinition=o,e.implementPrototype=n}),CustomElements.addModule(function(e){function t(t,n){var d=n||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(r(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(c(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return d.prototype||(d.prototype=Object.create(HTMLElement.prototype)),d.__name=t.toLowerCase(),d.lifecycle=d.lifecycle||{},d.ancestry=a(d["extends"]),i(d),u(d),o(d.prototype),s(d.__name,d),d.ctor=l(d),d.ctor.prototype=d.prototype,d.prototype.constructor=d.ctor,e.ready&&w(document),d.ctor}function o(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,o){n.call(this,e,o,t)};var o=e.removeAttribute;e.removeAttribute=function(e){n.call(this,e,null,o)},e.setAttribute._polyfilled=!0}}function n(e,t,o){e=e.toLowerCase();var n=this.getAttribute(e);o.apply(this,arguments);var r=this.getAttribute(e);this.attributeChangedCallback&&r!==n&&this.attributeChangedCallback(e,n,r)}function r(e){for(var t=0;t<y.length;t++)if(e===y[t])return!0}function a(e){var t=c(e);return t?a(t["extends"]).concat([t]):[]}function i(e){for(var t=e["extends"],o=0,n;n=e.ancestry[o];o++)t=n.is&&n.tag;e.tag=t||e.__name,t&&(e.is=e.__name)}function u(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var o=document.createElement(e.tag),n=Object.getPrototypeOf(o);n===e.prototype&&(t=n)}for(var r=e.prototype,a;r&&r!==t;)a=Object.getPrototypeOf(r),r.__proto__=a,r=a;e["native"]=t}}function d(e){return g(C(e.tag),e)}function c(e){return e?b[e.toLowerCase()]:void 0}function s(e,t){b[e]=t}function l(e){return function(){return d(e)}}function f(e,t,o){return e===E?p(t,o):M(e,t)}function p(e,t){var o=c(t||e);if(o){if(e==o.tag&&t==o.is)return new o.ctor;if(!t&&!o.is)return new o.ctor}var n;return t?(n=p(e),n.setAttribute("is",t),n):(n=C(e),e.indexOf("-")>=0&&v(n,HTMLElement),n)}function m(e){var t=N.call(this,e);return h(t),t}var w=e.upgradeDocumentTree,h=e.upgrade,g=e.upgradeWithDefinition,v=e.implementPrototype,_=e.useNative,y=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],b={},E="http://www.w3.org/1999/xhtml",C=document.createElement.bind(document),M=document.createElementNS.bind(document),N=Node.prototype.cloneNode,T;T=Object.__proto__||_?function(e,t){return e instanceof t}:function(e,t){for(var o=e;o;){if(o===t.prototype)return!0;o=o.__proto__}return!1},document.registerElement=t,document.createElement=p,document.createElementNS=f,Node.prototype.cloneNode=m,e.registry=b,e["instanceof"]=T,e.reservedTagList=y,e.getRegisteredDefinition=c,document.register=document.registerElement}),function(e){function t(){i(wrap(document)),window.HTMLImports&&(HTMLImports.__importsParsingHook=function(e){i(wrap(e["import"]))}),CustomElements.ready=!0,setTimeout(function(){CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}var o=e.useNative,n=e.initializeModules,r=/Trident/.test(navigator.userAgent);if(o){var a=function(){};e.watchShadow=a,e.upgrade=a,e.upgradeAll=a,e.upgradeDocumentTree=a,e.upgradeSubtree=a,e.takeRecords=a,e["instanceof"]=function(e,t){return e instanceof t}}else n();var i=e.upgradeDocumentTree;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),r&&"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),o},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var u=window.HTMLImports&&!HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(u,t)}else t()}(window.CustomElements);