(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820,997],{3997:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});var u=r(8754),a=r(5893),c=u._(r(7294)),f=u._(r(6487)),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},p=function(e){var t;function r(){var e,t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),e=r,t=arguments,e=o(e),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){return!1}}()?e.apply(this,t):Reflect.construct(e,t||[],o(this).constructor))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(r,e),t=[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||l[t]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:d.error,children:[(0,a.jsx)(f.default,{children:(0,a.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:d.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,a.jsx)("h1",{className:"next-error-h1",style:d.h1,children:t}):null,(0,a.jsx)("div",{style:d.wrap,children:(0,a.jsxs)("h2",{style:d.h2,children:[this.props.title||t?n:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}],function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(o.key),o)}}(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),r}(c.default.Component);p.displayName="ErrorPage",p.getInitialProps=s,p.origGetInitialProps=s,("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3529:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext({})},1260:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6487:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return p}});var i=r(8754),u=r(1757),a=r(5893),c=u._(r(7294)),f=i._(r(1350)),l=r(3529),s=r(3581),d=r(1260);function p(e){void 0===e&&(e=!1);var t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function y(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(1366);var b=["name","httpEquiv","charSet","itemProp"];function h(e,t){var r,i,u,a,f=t.inAmpMode;return e.reduce(y,[]).reverse().concat(p(f).reverse()).filter((r=new Set,i=new Set,u=new Set,a={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var c=0,f=b.length;c<f;c++){var l=b[c];if(e.props.hasOwnProperty(l)){if("charSet"===l)u.has(l)?t=!1:u.add(l);else{var s=e.props[l],d=a[l]||new Set;("name"!==l||!n)&&d.has(s)?t=!1:(d.add(s),a[l]=d)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!f&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var o,i;o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:r})})}var m=function(e){var t=e.children,r=(0,c.useContext)(l.AmpStateContext),n=(0,c.useContext)(s.HeadManagerContext);return(0,a.jsx)(f.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1350:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});var n=r(7294),o=n.useLayoutEffect,i=n.useEffect;function u(e){var t=e.headManager,r=e.reduceComponentsToState;function u(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=u),function(){t&&(t._pendingUpdate=u)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},1366:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},1981:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(3997)}])}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1981)}),_N_E=e.O()}]);