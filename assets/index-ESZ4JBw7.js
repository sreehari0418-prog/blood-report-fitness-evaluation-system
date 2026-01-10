(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ys(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},wo={},ws={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Uc=Symbol.for("react.portal"),Bc=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Qc=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Kc=Symbol.for("react.memo"),Yc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Jc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,js={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=Sn.prototype;function rl(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}var ol=rl.prototype=new Ns;ol.constructor=rl;Ss(ol,Sn.prototype);ol.isPureReactComponent=!0;var ta=Array.isArray,Cs=Object.prototype.hasOwnProperty,il={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Cs.call(t,r)&&!Es.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:i,ref:a,props:o,_owner:il.current}}function Xc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zc(""+e.key):t.toString(36)}function Fr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case cr:case Uc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Fo(a,0):r,ta(o)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Fr(o,t,n,"",function(d){return d})):o!=null&&(ll(o)&&(o=Xc(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(na,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Fo(i,s);a+=Fr(i,t,n,u,o)}else if(u=Jc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Fo(i,s++),a+=Fr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,t,n){if(e==null)return e;var r=[],o=0;return Fr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function qc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Or={transition:null},ed={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Or,ReactCurrentOwner:il};function zs(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Sn;$.Fragment=Bc;$.Profiler=$c;$.PureComponent=rl;$.StrictMode=Hc;$.Suspense=Gc;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed;$.act=zs;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=il.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Cs.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:i,props:r,_owner:a}};$.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wc,_context:e},e.Consumer=e};$.createElement=bs;$.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Qc,render:e}};$.isValidElement=ll;$.lazy=function(e){return{$$typeof:Yc,_payload:{_status:-1,_result:e},_init:qc}};$.memo=function(e,t){return{$$typeof:Kc,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};$.unstable_act=zs;$.useCallback=function(e,t){return Se.current.useCallback(e,t)};$.useContext=function(e){return Se.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};$.useEffect=function(e,t){return Se.current.useEffect(e,t)};$.useId=function(){return Se.current.useId()};$.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Se.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};$.useRef=function(e){return Se.current.useRef(e)};$.useState=function(e){return Se.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Se.current.useTransition()};$.version="18.3.1";ws.exports=$;var O=ws.exports;const _s=ys(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td=O,nd=Symbol.for("react.element"),rd=Symbol.for("react.fragment"),od=Object.prototype.hasOwnProperty,id=td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)od.call(t,r)&&!ld.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nd,type:e,key:i,ref:a,props:o,_owner:id.current}}wo.Fragment=rd;wo.jsx=Ls;wo.jsxs=Ls;xs.exports=wo;var l=xs.exports,ui={},Ps={exports:{}},Me={},Ts={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,y){var v=b.length;b.push(y);e:for(;0<v;){var S=v-1>>>1,R=b[S];if(0<o(R,y))b[S]=y,b[v]=R,v=S;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var y=b[0],v=b.pop();if(v!==y){b[0]=v;e:for(var S=0,R=b.length,N=R>>>1;S<N;){var z=2*(S+1)-1,U=b[z],B=z+1,V=b[B];if(0>o(U,v))B<R&&0>o(V,U)?(b[S]=V,b[B]=v,S=B):(b[S]=U,b[z]=v,S=z);else if(B<R&&0>o(V,v))b[S]=V,b[B]=v,S=B;else break e}}return y}function o(b,y){var v=b.sortIndex-y.sortIndex;return v!==0?v:b.id-y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],x=1,p=null,m=3,w=!1,g=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var y=n(d);y!==null;){if(y.callback===null)r(d);else if(y.startTime<=b)r(d),y.sortIndex=y.expirationTime,t(u,y);else break;y=n(d)}}function j(b){if(k=!1,h(b),!g)if(n(u)!==null)g=!0,Y(E);else{var y=n(d);y!==null&&le(j,y.startTime-b)}}function E(b,y){g=!1,k&&(k=!1,f(M),M=-1),w=!0;var v=m;try{for(h(y),p=n(u);p!==null&&(!(p.expirationTime>y)||b&&!X());){var S=p.callback;if(typeof S=="function"){p.callback=null,m=p.priorityLevel;var R=S(p.expirationTime<=y);y=e.unstable_now(),typeof R=="function"?p.callback=R:p===n(u)&&r(u),h(y)}else r(u);p=n(u)}if(p!==null)var N=!0;else{var z=n(d);z!==null&&le(j,z.startTime-y),N=!1}return N}finally{p=null,m=v,w=!1}}var P=!1,L=null,M=-1,W=5,I=-1;function X(){return!(e.unstable_now()-I<W)}function _(){if(L!==null){var b=e.unstable_now();I=b;var y=!0;try{y=L(!0,b)}finally{y?F():(P=!1,L=null)}}else P=!1}var F;if(typeof c=="function")F=function(){c(_)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,A=H.port2;H.port1.onmessage=_,F=function(){A.postMessage(null)}}else F=function(){D(_,0)};function Y(b){L=b,P||(P=!0,F())}function le(b,y){M=D(function(){b(e.unstable_now())},y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Y(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var y=3;break;default:y=m}var v=m;m=y;try{return b()}finally{m=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,y){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var v=m;m=b;try{return y()}finally{m=v}},e.unstable_scheduleCallback=function(b,y,v){var S=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?S+v:S):v=S,b){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=v+R,b={id:x++,callback:y,priorityLevel:b,startTime:v,expirationTime:R,sortIndex:-1},v>S?(b.sortIndex=v,t(d,b),n(u)===null&&b===n(d)&&(k?(f(M),M=-1):k=!0,le(j,v-S))):(b.sortIndex=R,t(u,b),g||w||(g=!0,Y(E))),b},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(b){var y=m;return function(){var v=m;m=y;try{return b.apply(this,arguments)}finally{m=v}}}})(Ms);Ts.exports=Ms;var ad=Ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=O,Te=ad;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rs=new Set,Gn={};function Qt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=Object.prototype.hasOwnProperty,ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},oa={};function cd(e){return ci.call(oa,e)?!0:ci.call(ra,e)?!1:ud.test(e)?oa[e]=!0:(ra[e]=!0,!1)}function dd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fd(e,t,n,r){if(t===null||typeof t>"u"||dd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var al=/[\-:]([a-z])/g;function sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,sl);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,sl);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,sl);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fd(t,n,o,r)&&(n=null),r||o===null?cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),cl=Symbol.for("react.strict_mode"),di=Symbol.for("react.profiler"),Is=Symbol.for("react.provider"),Fs=Symbol.for("react.context"),dl=Symbol.for("react.forward_ref"),fi=Symbol.for("react.suspense"),pi=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),ia=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Oo;function Rn(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Do=!1;function Ao(e,t){if(!e||Do)return"";Do=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Do=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function pd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Jt:return"Portal";case di:return"Profiler";case cl:return"StrictMode";case fi:return"Suspense";case pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fs:return(e.displayName||"Context")+".Consumer";case Is:return(e._context.displayName||"Context")+".Provider";case dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function md(e){var t=Ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=md(e))}function As(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function la(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Us(e,t){t=t.checked,t!=null&&ul(e,"checked",t,!1)}function gi(e,t){Us(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vi(e,t.type,n):t.hasOwnProperty("defaultValue")&&vi(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vi(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(In(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Bs(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var vd=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wi(e,t){if(t){if(vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ji=null,cn=null,dn=null;function ca(e){if(e=pr(e)){if(typeof ji!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Co(t),ji(e.stateNode,e.type,t))}}function Qs(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Gs(){if(cn){var e=cn,t=dn;if(dn=cn=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Ks(e,t){return e(t)}function Ys(){}var Uo=!1;function Js(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return Ks(e,t,n)}finally{Uo=!1,(cn!==null||dn!==null)&&(Ys(),Gs())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ni=!1;if(at)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Ni=!1}function yd(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var An=!1,Jr=null,Xr=!1,Ci=null,xd={onError:function(e){An=!0,Jr=e}};function wd(e,t,n,r,o,i,a,s,u){An=!1,Jr=null,yd.apply(xd,arguments)}function kd(e,t,n,r,o,i,a,s,u){if(wd.apply(this,arguments),An){if(An){var d=Jr;An=!1,Jr=null}else throw Error(C(198));Xr||(Xr=!0,Ci=d)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Gt(e)!==e)throw Error(C(188))}function Sd(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return da(o),e;if(i===r)return da(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Zs(e){return e=Sd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var eu=Te.unstable_scheduleCallback,fa=Te.unstable_cancelCallback,jd=Te.unstable_shouldYield,Nd=Te.unstable_requestPaint,ae=Te.unstable_now,Cd=Te.unstable_getCurrentPriorityLevel,hl=Te.unstable_ImmediatePriority,tu=Te.unstable_UserBlockingPriority,Zr=Te.unstable_NormalPriority,Ed=Te.unstable_LowPriority,nu=Te.unstable_IdlePriority,ko=null,Ze=null;function bd(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Ld,zd=Math.log,_d=Math.LN2;function Ld(e){return e>>>=0,e===0?32:31-(zd(e)/_d|0)|0}var xr=64,wr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Fn(s):(i&=a,i!==0&&(r=Fn(i)))}else a=n&~o,a!==0?r=Fn(a):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Qe(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Pd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iu,gl,lu,au,su,bi=!1,kr=[],wt=null,kt=null,St=null,Jn=new Map,Xn=new Map,gt=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&gl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Id(e,t,n,r,o){switch(t){case"focusin":return wt=zn(wt,e,t,n,r,o),!0;case"dragenter":return kt=zn(kt,e,t,n,r,o),!0;case"mouseover":return St=zn(St,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Jn.set(i,zn(Jn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xn.set(i,zn(Xn.get(i)||null,e,t,n,r,o)),!0}return!1}function uu(e){var t=Ft(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,su(e.priority,function(){lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Si=r,n.target.dispatchEvent(r),Si=null}else return t=pr(n),t!==null&&gl(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Dr(e)&&n.delete(t)}function Fd(){bi=!1,wt!==null&&Dr(wt)&&(wt=null),kt!==null&&Dr(kt)&&(kt=null),St!==null&&Dr(St)&&(St=null),Jn.forEach(ha),Xn.forEach(ha)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,bi||(bi=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Fd)))}function Zn(e){function t(o){return _n(o,e)}if(0<kr.length){_n(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&_n(wt,e),kt!==null&&_n(kt,e),St!==null&&_n(St,e),Jn.forEach(t),Xn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&gt.shift()}var fn=dt.ReactCurrentBatchConfig,eo=!0;function Od(e,t,n,r){var o=G,i=fn.transition;fn.transition=null;try{G=1,vl(e,t,n,r)}finally{G=o,fn.transition=i}}function Dd(e,t,n,r){var o=G,i=fn.transition;fn.transition=null;try{G=4,vl(e,t,n,r)}finally{G=o,fn.transition=i}}function vl(e,t,n,r){if(eo){var o=zi(e,t,n,r);if(o===null)Xo(e,t,r,to,n),pa(e,r);else if(Id(o,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Rd.indexOf(e)){for(;o!==null;){var i=pr(o);if(i!==null&&iu(i),i=zi(e,t,n,r),i===null&&Xo(e,t,r,to,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Xo(e,t,r,null,n)}}var to=null;function zi(e,t,n,r){if(to=null,e=pl(r),e=Ft(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case hl:return 1;case tu:return 4;case Zr:case Ed:return 16;case nu:return 536870912;default:return 16}default:return 16}}var yt=null,yl=null,Ar=null;function du(){if(Ar)return Ar;var e,t=yl,n=t.length,r,o="value"in yt?yt.value:yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ar=o.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ma(){return!1}function Re(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ma,this.isPropagationStopped=ma,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Re(jn),fr=oe({},jn,{view:0,detail:0}),Ad=Re(fr),Ho,$o,Ln,So=oe({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Ho=e.screenX-Ln.screenX,$o=e.screenY-Ln.screenY):$o=Ho=0,Ln=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),ga=Re(So),Ud=oe({},So,{dataTransfer:0}),Bd=Re(Ud),Hd=oe({},fr,{relatedTarget:0}),Wo=Re(Hd),$d=oe({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=Re($d),Vd=oe({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=Re(Vd),Gd=oe({},jn,{data:0}),va=Re(Gd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jd[e])?!!t[e]:!1}function wl(){return Xd}var Zd=oe({},fr,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qd=Re(Zd),ef=oe({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Re(ef),tf=oe({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),nf=Re(tf),rf=oe({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),of=Re(rf),lf=oe({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),af=Re(lf),sf=[9,13,27,32],kl=at&&"CompositionEvent"in window,Un=null;at&&"documentMode"in document&&(Un=document.documentMode);var uf=at&&"TextEvent"in window&&!Un,fu=at&&(!kl||Un&&8<Un&&11>=Un),xa=" ",wa=!1;function pu(e,t){switch(e){case"keyup":return sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function cf(e,t){switch(e){case"compositionend":return hu(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function df(e,t){if(Zt)return e==="compositionend"||!kl&&pu(e,t)?(e=du(),Ar=yl=yt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ff[e.type]:t==="textarea"}function mu(e,t,n,r){Qs(r),t=no(t,"onChange"),0<t.length&&(n=new xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,qn=null;function pf(e){Eu(e,0)}function jo(e){var t=tn(e);if(As(t))return e}function hf(e,t){if(e==="change")return t}var gu=!1;if(at){var Vo;if(at){var Qo="oninput"in document;if(!Qo){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Qo=typeof Sa.oninput=="function"}Vo=Qo}else Vo=!1;gu=Vo&&(!document.documentMode||9<document.documentMode)}function ja(){Bn&&(Bn.detachEvent("onpropertychange",vu),qn=Bn=null)}function vu(e){if(e.propertyName==="value"&&jo(qn)){var t=[];mu(t,qn,e,pl(e)),Js(pf,t)}}function mf(e,t,n){e==="focusin"?(ja(),Bn=t,qn=n,Bn.attachEvent("onpropertychange",vu)):e==="focusout"&&ja()}function gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(qn)}function vf(e,t){if(e==="click")return jo(t)}function yf(e,t){if(e==="input"||e==="change")return jo(t)}function xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:xf;function er(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ci.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(r!==null&&Sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ca(n,i);var a=Ca(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kf=at&&"documentMode"in document&&11>=document.documentMode,qt=null,_i=null,Hn=null,Li=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Li||qt==null||qt!==Yr(r)||(r=qt,"selectionStart"in r&&Sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&er(Hn,r)||(Hn=r,r=no(_i,"onSelect"),0<r.length&&(t=new xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Go={},wu={};at&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function No(e){if(Go[e])return Go[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return Go[e]=t[n];return e}var ku=No("animationend"),Su=No("animationiteration"),ju=No("animationstart"),Nu=No("transitionend"),Cu=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Cu.set(e,t),Qt(t,[e])}for(var Ko=0;Ko<ba.length;Ko++){var Yo=ba[Ko],Sf=Yo.toLowerCase(),jf=Yo[0].toUpperCase()+Yo.slice(1);Lt(Sf,"on"+jf)}Lt(ku,"onAnimationEnd");Lt(Su,"onAnimationIteration");Lt(ju,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Nu,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kd(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;za(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;za(o,s,d),i=u}}}if(Xr)throw e=Ci,Xr=!1,Ci=null,e}function Z(e,t){var n=t[Ii];n===void 0&&(n=t[Ii]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Jo(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,Rs.forEach(function(n){n!=="selectionchange"&&(Nf.has(n)||Jo(n,!1,e),Jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Jo("selectionchange",!1,t))}}function bu(e,t,n,r){switch(cu(t)){case 1:var o=Od;break;case 4:o=Dd;break;default:o=vl}n=o.bind(null,t,n,e),o=void 0,!Ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xo(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ft(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Js(function(){var d=i,x=pl(n),p=[];e:{var m=Cu.get(e);if(m!==void 0){var w=xl,g=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":w=qd;break;case"focusin":g="focus",w=Wo;break;case"focusout":g="blur",w=Wo;break;case"beforeblur":case"afterblur":w=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=nf;break;case ku:case Su:case ju:w=Wd;break;case Nu:w=of;break;case"scroll":w=Ad;break;case"wheel":w=af;break;case"copy":case"cut":case"paste":w=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ya}var k=(t&4)!==0,D=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,h;c!==null;){h=c;var j=h.stateNode;if(h.tag===5&&j!==null&&(h=j,f!==null&&(j=Yn(c,f),j!=null&&k.push(nr(c,j,h)))),D)break;c=c.return}0<k.length&&(m=new w(m,g,null,n,x),p.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Si&&(g=n.relatedTarget||n.fromElement)&&(Ft(g)||g[st]))break e;if((w||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=d,g=g?Ft(g):null,g!==null&&(D=Gt(g),g!==D||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=d),w!==g)){if(k=ga,j="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ya,j="onPointerLeave",f="onPointerEnter",c="pointer"),D=w==null?m:tn(w),h=g==null?m:tn(g),m=new k(j,c+"leave",w,n,x),m.target=D,m.relatedTarget=h,j=null,Ft(x)===d&&(k=new k(f,c+"enter",g,n,x),k.target=h,k.relatedTarget=D,j=k),D=j,w&&g)t:{for(k=w,f=g,c=0,h=k;h;h=Yt(h))c++;for(h=0,j=f;j;j=Yt(j))h++;for(;0<c-h;)k=Yt(k),c--;for(;0<h-c;)f=Yt(f),h--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=Yt(k),f=Yt(f)}k=null}else k=null;w!==null&&_a(p,m,w,k,!1),g!==null&&D!==null&&_a(p,D,g,k,!0)}}e:{if(m=d?tn(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=hf;else if(ka(m))if(gu)E=yf;else{E=gf;var P=mf}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=vf);if(E&&(E=E(e,d))){mu(p,E,n,x);break e}P&&P(e,m,d),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&vi(m,"number",m.value)}switch(P=d?tn(d):window,e){case"focusin":(ka(P)||P.contentEditable==="true")&&(qt=P,_i=d,Hn=null);break;case"focusout":Hn=_i=qt=null;break;case"mousedown":Li=!0;break;case"contextmenu":case"mouseup":case"dragend":Li=!1,Ea(p,n,x);break;case"selectionchange":if(kf)break;case"keydown":case"keyup":Ea(p,n,x)}var L;if(kl)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Zt?pu(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(fu&&n.locale!=="ko"&&(Zt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Zt&&(L=du()):(yt=x,yl="value"in yt?yt.value:yt.textContent,Zt=!0)),P=no(d,M),0<P.length&&(M=new va(M,e,null,n,x),p.push({event:M,listeners:P}),L?M.data=L:(L=hu(n),L!==null&&(M.data=L)))),(L=uf?cf(e,n):df(e,n))&&(d=no(d,"onBeforeInput"),0<d.length&&(x=new va("onBeforeInput","beforeinput",null,n,x),p.push({event:x,listeners:d}),x.data=L))}Eu(p,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yn(e,n),i!=null&&r.unshift(nr(e,i,o)),i=Yn(e,t),i!=null&&r.push(nr(e,i,o))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Yn(n,i),u!=null&&a.unshift(nr(n,u,s))):o||(u=Yn(n,i),u!=null&&a.push(nr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Cf=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(Ef,"")}function Cr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(C(425))}function ro(){}var Pi=null,Ti=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ri=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(_f)}:Ri;function _f(e){setTimeout(function(){throw e})}function Zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ta(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Nn,rr="__reactProps$"+Nn,st="__reactContainer$"+Nn,Ii="__reactEvents$"+Nn,Lf="__reactListeners$"+Nn,Pf="__reactHandles$"+Nn;function Ft(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ta(e);e!==null;){if(n=e[Xe])return n;e=Ta(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Co(e){return e[rr]||null}var Fi=[],nn=-1;function Pt(e){return{current:e}}function q(e){0>nn||(e.current=Fi[nn],Fi[nn]=null,nn--)}function J(e,t){nn++,Fi[nn]=e.current,e.current=t}var _t={},xe=Pt(_t),Ee=Pt(!1),Bt=_t;function gn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function oo(){q(Ee),q(xe)}function Ma(e,t,n){if(xe.current!==_t)throw Error(C(168));J(xe,t),J(Ee,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,hd(e)||"Unknown",o));return oe({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Bt=xe.current,J(xe,e),J(Ee,Ee.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=zu(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,q(Ee),q(xe),J(xe,e)):q(Ee),J(Ee,n)}var rt=null,Eo=!1,qo=!1;function _u(e){rt===null?rt=[e]:rt.push(e)}function Tf(e){Eo=!0,_u(e)}function Tt(){if(!qo&&rt!==null){qo=!0;var e=0,t=G;try{var n=rt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Eo=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),eu(hl,Tt),o}finally{G=t,qo=!1}}return null}var rn=[],on=0,lo=null,ao=0,Ie=[],Fe=0,Ht=null,ot=1,it="";function Rt(e,t){rn[on++]=ao,rn[on++]=lo,lo=e,ao=t}function Lu(e,t,n){Ie[Fe++]=ot,Ie[Fe++]=it,Ie[Fe++]=Ht,Ht=e;var r=ot;e=it;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var i=32-Qe(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ot=1<<32-Qe(t)+o|n<<o|r,it=i+e}else ot=1<<i|n<<o|r,it=e}function jl(e){e.return!==null&&(Rt(e,1),Lu(e,1,0))}function Nl(e){for(;e===lo;)lo=rn[--on],rn[on]=null,ao=rn[--on],rn[on]=null;for(;e===Ht;)Ht=Ie[--Fe],Ie[Fe]=null,it=Ie[--Fe],Ie[Fe]=null,ot=Ie[--Fe],Ie[Fe]=null}var Pe=null,Le=null,te=!1,Ve=null;function Pu(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Le=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Le=null,!0):!1;default:return!1}}function Oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(te){var t=Le;if(t){var n=t;if(!Ia(e,t)){if(Oi(e))throw Error(C(418));t=jt(n.nextSibling);var r=Pe;t&&Ia(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,te=!1,Pe=e)}}else{if(Oi(e))throw Error(C(418));e.flags=e.flags&-4097|2,te=!1,Pe=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Er(e){if(e!==Pe)return!1;if(!te)return Fa(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=Le)){if(Oi(e))throw Tu(),Error(C(418));for(;t;)Pu(e,t),t=jt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Pe?jt(e.stateNode.nextSibling):null;return!0}function Tu(){for(var e=Le;e;)e=jt(e.nextSibling)}function vn(){Le=Pe=null,te=!1}function Cl(e){Ve===null?Ve=[e]:Ve.push(e)}var Mf=dt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Mu(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=bt(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,h,j){return c===null||c.tag!==6?(c=li(h,f.mode,j),c.return=f,c):(c=o(c,h),c.return=f,c)}function u(f,c,h,j){var E=h.type;return E===Xt?x(f,c,h.props.children,j,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Oa(E)===c.type)?(j=o(c,h.props),j.ref=Pn(f,c,h),j.return=f,j):(j=Gr(h.type,h.key,h.props,null,f.mode,j),j.ref=Pn(f,c,h),j.return=f,j)}function d(f,c,h,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ai(h,f.mode,j),c.return=f,c):(c=o(c,h.children||[]),c.return=f,c)}function x(f,c,h,j,E){return c===null||c.tag!==7?(c=Ut(h,f.mode,j,E),c.return=f,c):(c=o(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=li(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return h=Gr(c.type,c.key,c.props,null,f.mode,h),h.ref=Pn(f,null,c),h.return=f,h;case Jt:return c=ai(c,f.mode,h),c.return=f,c;case ht:var j=c._init;return p(f,j(c._payload),h)}if(In(c)||En(c))return c=Ut(c,f.mode,h,null),c.return=f,c;br(f,c)}return null}function m(f,c,h,j){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(f,c,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gr:return h.key===E?u(f,c,h,j):null;case Jt:return h.key===E?d(f,c,h,j):null;case ht:return E=h._init,m(f,c,E(h._payload),j)}if(In(h)||En(h))return E!==null?null:x(f,c,h,j,null);br(f,h)}return null}function w(f,c,h,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(h)||null,s(c,f,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case gr:return f=f.get(j.key===null?h:j.key)||null,u(c,f,j,E);case Jt:return f=f.get(j.key===null?h:j.key)||null,d(c,f,j,E);case ht:var P=j._init;return w(f,c,h,P(j._payload),E)}if(In(j)||En(j))return f=f.get(h)||null,x(c,f,j,E,null);br(c,j)}return null}function g(f,c,h,j){for(var E=null,P=null,L=c,M=c=0,W=null;L!==null&&M<h.length;M++){L.index>M?(W=L,L=null):W=L.sibling;var I=m(f,L,h[M],j);if(I===null){L===null&&(L=W);break}e&&L&&I.alternate===null&&t(f,L),c=i(I,c,M),P===null?E=I:P.sibling=I,P=I,L=W}if(M===h.length)return n(f,L),te&&Rt(f,M),E;if(L===null){for(;M<h.length;M++)L=p(f,h[M],j),L!==null&&(c=i(L,c,M),P===null?E=L:P.sibling=L,P=L);return te&&Rt(f,M),E}for(L=r(f,L);M<h.length;M++)W=w(L,f,M,h[M],j),W!==null&&(e&&W.alternate!==null&&L.delete(W.key===null?M:W.key),c=i(W,c,M),P===null?E=W:P.sibling=W,P=W);return e&&L.forEach(function(X){return t(f,X)}),te&&Rt(f,M),E}function k(f,c,h,j){var E=En(h);if(typeof E!="function")throw Error(C(150));if(h=E.call(h),h==null)throw Error(C(151));for(var P=E=null,L=c,M=c=0,W=null,I=h.next();L!==null&&!I.done;M++,I=h.next()){L.index>M?(W=L,L=null):W=L.sibling;var X=m(f,L,I.value,j);if(X===null){L===null&&(L=W);break}e&&L&&X.alternate===null&&t(f,L),c=i(X,c,M),P===null?E=X:P.sibling=X,P=X,L=W}if(I.done)return n(f,L),te&&Rt(f,M),E;if(L===null){for(;!I.done;M++,I=h.next())I=p(f,I.value,j),I!==null&&(c=i(I,c,M),P===null?E=I:P.sibling=I,P=I);return te&&Rt(f,M),E}for(L=r(f,L);!I.done;M++,I=h.next())I=w(L,f,M,I.value,j),I!==null&&(e&&I.alternate!==null&&L.delete(I.key===null?M:I.key),c=i(I,c,M),P===null?E=I:P.sibling=I,P=I);return e&&L.forEach(function(_){return t(f,_)}),te&&Rt(f,M),E}function D(f,c,h,j){if(typeof h=="object"&&h!==null&&h.type===Xt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case gr:e:{for(var E=h.key,P=c;P!==null;){if(P.key===E){if(E=h.type,E===Xt){if(P.tag===7){n(f,P.sibling),c=o(P,h.props.children),c.return=f,f=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Oa(E)===P.type){n(f,P.sibling),c=o(P,h.props),c.ref=Pn(f,P,h),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}h.type===Xt?(c=Ut(h.props.children,f.mode,j,h.key),c.return=f,f=c):(j=Gr(h.type,h.key,h.props,null,f.mode,j),j.ref=Pn(f,c,h),j.return=f,f=j)}return a(f);case Jt:e:{for(P=h.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=o(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ai(h,f.mode,j),c.return=f,f=c}return a(f);case ht:return P=h._init,D(f,c,P(h._payload),j)}if(In(h))return g(f,c,h,j);if(En(h))return k(f,c,h,j);br(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,h),c.return=f,f=c):(n(f,c),c=li(h,f.mode,j),c.return=f,f=c),a(f)):n(f,c)}return D}var yn=Mu(!0),Ru=Mu(!1),so=Pt(null),uo=null,ln=null,El=null;function bl(){El=ln=uo=null}function zl(e){var t=so.current;q(so),e._currentValue=t}function Ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){uo=e,El=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(uo===null)throw Error(C(308));ln=e,uo.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Ot=null;function _l(e){Ot===null?Ot=[e]:Ot.push(e)}function Iu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_l(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,_l(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}function Da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var o=e.updateQueue;mt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==a&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,x=d=u=null,s=i;do{var m=s.lane,w=s.eventTime;if((r&m)===m){x!==null&&(x=x.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,k=s;switch(m=t,w=n,k.tag){case 1:if(g=k.payload,typeof g=="function"){p=g.call(w,p,m);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=k.payload,m=typeof g=="function"?g.call(w,p,m):g,m==null)break e;p=oe({},p,m);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=w,u=p):x=x.next=w,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(x===null&&(u=p),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=p}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var hr={},qe=Pt(hr),or=Pt(hr),ir=Pt(hr);function Dt(e){if(e===hr)throw Error(C(174));return e}function Pl(e,t){switch(J(ir,t),J(or,e),J(qe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xi(t,e)}q(qe),J(qe,t)}function xn(){q(qe),q(or),q(ir)}function Ou(e){Dt(ir.current);var t=Dt(qe.current),n=xi(t,e.type);t!==n&&(J(or,e),J(qe,n))}function Tl(e){or.current===e&&(q(qe),q(or))}var ne=Pt(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Ml(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Hr=dt.ReactCurrentDispatcher,ti=dt.ReactCurrentBatchConfig,$t=0,re=null,ue=null,de=null,po=!1,$n=!1,lr=0,Rf=0;function ge(){throw Error(C(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Il(e,t,n,r,o,i){if($t=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Df:Af,e=n(r,o),$n){i=0;do{if($n=!1,lr=0,25<=i)throw Error(C(301));i+=1,de=ue=null,t.updateQueue=null,Hr.current=Uf,e=n(r,o)}while($n)}if(Hr.current=ho,t=ue!==null&&ue.next!==null,$t=0,de=ue=re=null,po=!1,t)throw Error(C(300));return e}function Fl(){var e=lr!==0;return lr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?re.memoizedState=de=e:de=de.next=e,de}function Ue(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?re.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(C(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?re.memoizedState=de=e:de=de.next=e}return de}function ar(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Ue(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var x=d.lane;if(($t&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,re.lanes|=x,Wt|=x}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ke(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,Wt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=Ue(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ke(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Du(){}function Au(e,t){var n=re,r=Ue(),o=t(),i=!Ke(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,Ol(Hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,sr(9,Bu.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(C(349));$t&30||Uu(n,t,o)}return o}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Wu(e)}function Hu(e,t,n){return n(function(){$u(t)&&Wu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Wu(e){var t=ut(e,1);t!==null&&Ge(t,e,1,-1)}function Ua(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Of.bind(null,re,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vu(){return Ue().memoizedState}function $r(e,t,n,r){var o=Je();re.flags|=e,o.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var o=Ue();r=r===void 0?null:r;var i=void 0;if(ue!==null){var a=ue.memoizedState;if(i=a.destroy,r!==null&&Rl(r,a.deps)){o.memoizedState=sr(t,n,i,r);return}}re.flags|=e,o.memoizedState=sr(1|t,n,i,r)}function Ba(e,t){return $r(8390656,8,e,t)}function Ol(e,t){return bo(2048,8,e,t)}function Qu(e,t){return bo(4,2,e,t)}function Gu(e,t){return bo(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,Ku.bind(null,t,e),n)}function Dl(){}function Ju(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zu(e,t,n){return $t&21?(Ke(n,t)||(n=ru(),re.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function If(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{G=n,ti.transition=r}}function qu(){return Ue().memoizedState}function Ff(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Iu(e,t,n,r),n!==null){var o=ke();Ge(n,e,r,o),nc(n,t,r)}}function Of(e,t,n){var r=Et(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,a)){var u=t.interleaved;u===null?(o.next=o,_l(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Iu(e,t,o,r),n!==null&&(o=ke(),Ge(n,e,r,o),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===re||t!==null&&t===re}function tc(e,t){$n=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}var ho={readContext:Ae,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Df={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ba,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ff.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:Dl,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=If.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=Je();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));$t&30||Uu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ba(Hu.bind(null,r,i,e),[e]),r.flags|=2048,sr(9,Bu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=fe.identifierPrefix;if(te){var n=it,r=ot;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Af={readContext:Ae,useCallback:Ju,useContext:Ae,useEffect:Ol,useImperativeHandle:Yu,useInsertionEffect:Qu,useLayoutEffect:Gu,useMemo:Xu,useReducer:ni,useRef:Vu,useState:function(){return ni(ar)},useDebugValue:Dl,useDeferredValue:function(e){var t=Ue();return Zu(t,ue.memoizedState,e)},useTransition:function(){var e=ni(ar)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Du,useSyncExternalStore:Au,useId:qu,unstable_isNewReconciler:!1},Uf={readContext:Ae,useCallback:Ju,useContext:Ae,useEffect:Ol,useImperativeHandle:Yu,useInsertionEffect:Qu,useLayoutEffect:Gu,useMemo:Xu,useReducer:ri,useRef:Vu,useState:function(){return ri(ar)},useDebugValue:Dl,useDeferredValue:function(e){var t=Ue();return ue===null?t.memoizedState=e:Zu(t,ue.memoizedState,e)},useTransition:function(){var e=ri(ar)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Du,useSyncExternalStore:Au,useId:qu,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ui(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),i=lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Ge(t,e,o,r),Br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),i=lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Ge(t,e,o,r),Br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Et(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Ge(t,e,r,n),Br(t,e,r))}};function Ha(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,i):!0}function rc(e,t,n){var r=!1,o=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=be(t)?Bt:xe.current,r=t.contextTypes,i=(r=r!=null)?gn(e,o):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function Bi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ll(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=be(t)?Bt:xe.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ui(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),co(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=pd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function oi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bf=typeof WeakMap=="function"?WeakMap:Map;function oc(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,Zi=r),Hi(e,t)},n}function ic(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=tp.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Hf=dt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Ru(t,null,n,r):yn(t,e.child,n,r)}function Ga(e,t,n,r,o){n=n.render;var i=t.ref;return pn(t,o),r=Il(e,t,n,r,i,o),n=Fl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(te&&n&&jl(t),t.flags|=1,we(e,t,r,o),t.child)}function Ka(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ql(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lc(e,t,i,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(a,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(er(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ct(e,t,o)}return $i(e,t,n,r,o)}function ac(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(sn,_e),_e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(sn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(sn,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(sn,_e),_e|=r;return we(e,t,o,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,o){var i=be(n)?Bt:xe.current;return i=gn(t,i),pn(t,o),n=Il(e,t,n,r,i,o),r=Fl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(te&&r&&jl(t),t.flags|=1,we(e,t,n,o),t.child)}function Ya(e,t,n,r,o){if(be(n)){var i=!0;io(t)}else i=!1;if(pn(t,o),t.stateNode===null)Wr(e,t),rc(t,n,r),Bi(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=be(n)?Bt:xe.current,d=gn(t,d));var x=n.getDerivedStateFromProps,p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&$a(t,a,r,d),mt=!1;var m=t.memoizedState;a.state=m,co(t,r,a,o),u=t.memoizedState,s!==r||m!==u||Ee.current||mt?(typeof x=="function"&&(Ui(t,n,x,r),u=t.memoizedState),(s=mt||Ha(t,n,s,r,m,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:$e(t.type,s),a.props=d,p=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=be(n)?Bt:xe.current,u=gn(t,u));var w=n.getDerivedStateFromProps;(x=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||m!==u)&&$a(t,a,r,u),mt=!1,m=t.memoizedState,a.state=m,co(t,r,a,o);var g=t.memoizedState;s!==p||m!==g||Ee.current||mt?(typeof w=="function"&&(Ui(t,n,w,r),g=t.memoizedState),(d=mt||Ha(t,n,d,r,m,g,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,i,o)}function Wi(e,t,n,r,o,i){sc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Ra(t,n,!1),ct(e,t,i);r=t.stateNode,Hf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,s,i)):we(e,t,s,i),t.memoizedState=r.state,o&&Ra(t,n,!0),t.child}function uc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Pl(e,t.containerInfo)}function Ja(e,t,n,r,o){return vn(),Cl(o),t.flags|=256,we(e,t,n,r),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Po(a,r,0,null),e=Ut(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qi(n),t.memoizedState=Vi,e):Al(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return $f(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=bt(s,i):(i=Ut(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Qi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Vi,r}return i=e.child,e=i.sibling,r=bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Al(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&Cl(r),yn(t,e.child,null,n),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=oi(Error(C(422))),zr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),i=Ut(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=Qi(a),t.memoizedState=Vi,i);if(!(t.mode&1))return zr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=oi(i,r,void 0),zr(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ce||s){if(r=fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ut(e,o),Ge(r,e,o,-1))}return Vl(),r=oi(Error(C(421))),zr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=np.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=jt(o.nextSibling),Pe=t,te=!0,Ve=null,e!==null&&(Ie[Fe++]=ot,Ie[Fe++]=it,Ie[Fe++]=Ht,ot=e.id,it=e.overflow,Ht=t),t=Al(t,r.children),t.flags|=4096,t)}function Xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ai(e.return,t,n)}function ii(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function dc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n,t);else if(e.tag===19)Xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ii(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ii(t,!0,n,null,i);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wf(e,t,n){switch(t.tag){case 3:uc(t),vn();break;case 5:Ou(t);break;case 1:be(t.type)&&io(t);break;case 4:Pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):(J(ne,ne.current&1),e=ct(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return ct(e,t,n)}var fc,Gi,pc,hc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gi=function(){};pc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(qe.current);var i=null;switch(n){case"input":o=mi(e,o),r=mi(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=yi(e,o),r=yi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}wi(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Z("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return be(t.type)&&oo(),ve(t),null;case 3:return r=t.stateNode,xn(),q(Ee),q(xe),Ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(tl(Ve),Ve=null))),Gi(e,t),ve(t),null;case 5:Tl(t);var o=Dt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=Dt(qe.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xe]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<On.length;o++)Z(On[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":la(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":sa(r,i),Z("invalid",r)}wi(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",""+s]):Gn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":vr(r),aa(r,i,!0);break;case"textarea":vr(r),ua(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xe]=t,e[rr]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(a=ki(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<On.length;o++)Z(On[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":la(e,r),o=mi(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":sa(e,r),o=yi(e,r),Z("invalid",e);break;default:o=r}wi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Vs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$s(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Z("scroll",e):u!=null&&ul(e,i,u,a))}switch(n){case"input":vr(e),aa(e,r,!1);break;case"textarea":vr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Dt(ir.current),Dt(qe.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return ve(t),null;case 13:if(q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Le!==null&&t.mode&1&&!(t.flags&128))Tu(),vn(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Xe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ve!==null&&(tl(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ce===0&&(ce=3):Vl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return xn(),Gi(e,t),e===null&&tr(t.stateNode.containerInfo),ve(t),null;case 10:return zl(t.type._context),ve(t),null;case 17:return be(t.type)&&oo(),ve(t),null;case 19:if(q(ne),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Tn(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fo(e),a!==null){for(t.flags|=128,Tn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>kn&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304)}else{if(!r)if(e=fo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!te)return ve(t),null}else 2*ae()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Qf(e,t){switch(Nl(t),t.tag){case 1:return be(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),q(Ee),q(xe),Ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ne),null;case 4:return xn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var _r=!1,ye=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,T=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Ki(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Za=!1;function Kf(e,t){if(Pi=eo,e=xu(),Sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,x=0,p=e,m=null;t:for(;;){for(var w;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===e)break t;if(m===n&&++d===o&&(s=a),m===i&&++x===r&&(u=a),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},eo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var k=g.memoizedProps,D=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:$e(t.type,k),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(j){ie(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return g=Za,Za=!1,g}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ki(t,n,i)}o=o.next}while(o!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[rr],delete t[Ii],delete t[Lf],delete t[Pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ji(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Ji(e,t,n),e=e.sibling;e!==null;)Ji(e,t,n),e=e.sibling}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}var pe=null,We=!1;function pt(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:ye||an(n,t);case 6:var r=pe,o=We;pe=null,pt(e,t,n),pe=r,We=o,pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),Zn(e)):Zo(pe,n.stateNode));break;case 4:r=pe,o=We,pe=n.stateNode.containerInfo,We=!0,pt(e,t,n),pe=r,We=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ki(n,t,a),o=o.next}while(o!==r)}pt(e,t,n);break;case 1:if(!ye&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,pt(e,t,n),ye=r):pt(e,t,n);break;default:pt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gf),t.forEach(function(r){var o=rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,We=!1;break e;case 3:pe=s.stateNode.containerInfo,We=!0;break e;case 4:pe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(pe===null)throw Error(C(160));vc(i,a,o),pe=null,We=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ie(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),r&4){try{Wn(3,e,e.return),_o(3,e)}catch(k){ie(e,e.return,k)}try{Wn(5,e,e.return)}catch(k){ie(e,e.return,k)}}break;case 1:Be(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Be(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Kn(o,"")}catch(k){ie(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Us(o,i),ki(s,a);var d=ki(s,i);for(a=0;a<u.length;a+=2){var x=u[a],p=u[a+1];x==="style"?Vs(o,p):x==="dangerouslySetInnerHTML"?$s(o,p):x==="children"?Kn(o,p):ul(o,x,p,d)}switch(s){case"input":gi(o,i);break;case"textarea":Bs(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?un(o,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[rr]=i}catch(k){ie(e,e.return,k)}}break;case 6:if(Be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){ie(e,e.return,k)}}break;case 3:if(Be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(k){ie(e,e.return,k)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Hl=ae())),r&4&&es(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||x,Be(t,e),ye=d):Be(t,e),Ye(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(T=e,x=e.child;x!==null;){for(p=T=x;T!==null;){switch(m=T,w=m.child,m.tag){case 0:case 11:case 14:case 15:Wn(4,m,m.return);break;case 1:an(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(k){ie(r,n,k)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){ns(p);continue}}w!==null?(w.return=m,T=w):ns(p)}x=x.sibling}e:for(x=null,p=e;;){if(p.tag===5){if(x===null){x=p;try{o=p.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ws("display",a))}catch(k){ie(e,e.return,k)}}}else if(p.tag===6){if(x===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(k){ie(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;x===p&&(x=null),p=p.return}x===p&&(x=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Be(t,e),Ye(e),r&4&&es(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kn(o,""),r.flags&=-33);var i=qa(e);Xi(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=qa(e);Ji(e,s,a);break;default:throw Error(C(161))}}catch(u){ie(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yf(e,t,n){T=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||_r;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=_r;var d=ye;if(_r=a,(ye=u)&&!d)for(T=o;T!==null;)a=T,u=a.child,a.tag===22&&a.memoizedState!==null?rs(o):u!==null?(u.return=a,T=u):rs(o);for(;i!==null;)T=i,xc(i),i=i.sibling;T=o,_r=s,ye=d}ts(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):ts(e)}}function ts(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Aa(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var p=x.dehydrated;p!==null&&Zn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&Yi(t)}catch(m){ie(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ns(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function rs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(u){ie(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ie(t,o,u)}}var i=t.return;try{Yi(t)}catch(u){ie(t,i,u)}break;case 5:var a=t.return;try{Yi(t)}catch(u){ie(t,a,u)}}}catch(u){ie(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Jf=Math.ceil,mo=dt.ReactCurrentDispatcher,Ul=dt.ReactCurrentOwner,De=dt.ReactCurrentBatchConfig,Q=0,fe=null,se=null,he=0,_e=0,sn=Pt(0),ce=0,ur=null,Wt=0,Lo=0,Bl=0,Vn=null,Ne=null,Hl=0,kn=1/0,nt=null,go=!1,Zi=null,Ct=null,Lr=!1,xt=null,vo=0,Qn=0,qi=null,Vr=-1,Qr=0;function ke(){return Q&6?ae():Vr!==-1?Vr:Vr=ae()}function Et(e){return e.mode&1?Q&2&&he!==0?he&-he:Mf.transition!==null?(Qr===0&&(Qr=ru()),Qr):(e=G,e!==0||(e=window.event,e=e===void 0?16:cu(e.type)),e):1}function Ge(e,t,n,r){if(50<Qn)throw Qn=0,qi=null,Error(C(185));dr(e,n,r),(!(Q&2)||e!==fe)&&(e===fe&&(!(Q&2)&&(Lo|=n),ce===4&&vt(e,he)),ze(e,r),n===1&&Q===0&&!(t.mode&1)&&(kn=ae()+500,Eo&&Tt()))}function ze(e,t){var n=e.callbackNode;Td(e,t);var r=qr(e,e===fe?he:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Tf(os.bind(null,e)):_u(os.bind(null,e)),zf(function(){!(Q&6)&&Tt()}),n=null;else{switch(ou(r)){case 1:n=hl;break;case 4:n=tu;break;case 16:n=Zr;break;case 536870912:n=nu;break;default:n=Zr}n=bc(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Vr=-1,Qr=0,Q&6)throw Error(C(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=qr(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var o=Q;Q|=2;var i=Sc();(fe!==e||he!==t)&&(nt=null,kn=ae()+500,At(e,t));do try{qf();break}catch(s){kc(e,s)}while(!0);bl(),mo.current=i,Q=o,se!==null?t=0:(fe=null,he=0,t=ce)}if(t!==0){if(t===2&&(o=Ei(e),o!==0&&(r=o,t=el(e,o))),t===1)throw n=ur,At(e,0),vt(e,r),ze(e,ae()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Xf(o)&&(t=yo(e,r),t===2&&(i=Ei(e),i!==0&&(r=i,t=el(e,i))),t===1))throw n=ur,At(e,0),vt(e,r),ze(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:It(e,Ne,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Hl+500-ae(),10<t)){if(qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ri(It.bind(null,e,Ne,nt),t);break}It(e,Ne,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Qe(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jf(r/1960))-r,10<r){e.timeoutHandle=Ri(It.bind(null,e,Ne,nt),r);break}It(e,Ne,nt);break;case 5:It(e,Ne,nt);break;default:throw Error(C(329))}}}return ze(e,ae()),e.callbackNode===n?wc.bind(null,e):null}function el(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=yo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&tl(t)),e}function tl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ke(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Bl,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(Q&6)throw Error(C(327));hn();var t=qr(e,0);if(!(t&1))return ze(e,ae()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=Ei(e);r!==0&&(t=r,n=el(e,r))}if(n===1)throw n=ur,At(e,0),vt(e,t),ze(e,ae()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,Ne,nt),ze(e,ae()),null}function $l(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(kn=ae()+500,Eo&&Tt())}}function Vt(e){xt!==null&&xt.tag===0&&!(Q&6)&&hn();var t=Q;Q|=1;var n=De.transition,r=G;try{if(De.transition=null,G=1,e)return e()}finally{G=r,De.transition=n,Q=t,!(Q&6)&&Tt()}}function Wl(){_e=sn.current,q(sn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:xn(),q(Ee),q(xe),Ml();break;case 5:Tl(r);break;case 4:xn();break;case 13:q(ne);break;case 19:q(ne);break;case 10:zl(r.type._context);break;case 22:case 23:Wl()}n=n.return}if(fe=e,se=e=bt(e.current,null),he=_e=t,ce=0,ur=null,Bl=Lo=Wt=0,Ne=Vn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Ot=null}return e}function kc(e,t){do{var n=se;try{if(bl(),Hr.current=ho,po){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}po=!1}if($t=0,de=ue=re=null,$n=!1,lr=0,Ul.current=null,n===null||n.return===null){ce=1,ur=t,se=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,p=x.tag;if(!(x.mode&1)&&(p===0||p===11||p===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var w=Va(a);if(w!==null){w.flags&=-257,Qa(w,a,s,i,t),w.mode&1&&Wa(i,d,t),t=w,u=d;var g=t.updateQueue;if(g===null){var k=new Set;k.add(u),t.updateQueue=k}else g.add(u);break e}else{if(!(t&1)){Wa(i,d,t),Vl();break e}u=Error(C(426))}}else if(te&&s.mode&1){var D=Va(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Qa(D,a,s,i,t),Cl(wn(u,s));break e}}i=u=wn(u,s),ce!==4&&(ce=2),Vn===null?Vn=[i]:Vn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=oc(i,u,t);Da(i,f);break e;case 1:s=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ct===null||!Ct.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=ic(i,s,t);Da(i,j);break e}}i=i.return}while(i!==null)}Nc(n)}catch(E){t=E,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Sc(){var e=mo.current;return mo.current=ho,e===null?ho:e}function Vl(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(Wt&268435455)&&!(Lo&268435455)||vt(fe,he)}function yo(e,t){var n=Q;Q|=2;var r=Sc();(fe!==e||he!==t)&&(nt=null,At(e,t));do try{Zf();break}catch(o){kc(e,o)}while(!0);if(bl(),Q=n,mo.current=r,se!==null)throw Error(C(261));return fe=null,he=0,ce}function Zf(){for(;se!==null;)jc(se)}function qf(){for(;se!==null&&!jd();)jc(se)}function jc(e){var t=Ec(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Nc(e):se=t,Ul.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qf(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=Vf(n,t,_e),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function It(e,t,n){var r=G,o=De.transition;try{De.transition=null,G=1,ep(e,t,n,r)}finally{De.transition=o,G=r}return null}function ep(e,t,n,r){do hn();while(xt!==null);if(Q&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Md(e,i),e===fe&&(se=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,bc(Zr,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var a=G;G=1;var s=Q;Q|=4,Ul.current=null,Kf(e,n),yc(n,e),wf(Ti),eo=!!Pi,Ti=Pi=null,e.current=n,Yf(n),Nd(),Q=s,G=a,De.transition=i}else e.current=n;if(Lr&&(Lr=!1,xt=e,vo=o),i=e.pendingLanes,i===0&&(Ct=null),bd(n.stateNode),ze(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(go)throw go=!1,e=Zi,Zi=null,e;return vo&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===qi?Qn++:(Qn=0,qi=e):Qn=0,Tt(),null}function hn(){if(xt!==null){var e=ou(vo),t=De.transition,n=G;try{if(De.transition=null,G=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,vo=0,Q&6)throw Error(C(331));var o=Q;for(Q|=4,T=e.current;T!==null;){var i=T,a=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var x=T;switch(x.tag){case 0:case 11:case 15:Wn(8,x,i)}var p=x.child;if(p!==null)p.return=x,T=p;else for(;T!==null;){x=T;var m=x.sibling,w=x.return;if(mc(x),x===d){T=null;break}if(m!==null){m.return=w,T=m;break}T=w}}}var g=i.alternate;if(g!==null){var k=g.child;if(k!==null){g.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}T=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,T=a;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){a=T;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,T=h;else e:for(a=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(E){ie(s,s.return,E)}if(s===a){T=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,T=j;break e}T=s.return}}if(Q=o,Tt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{G=n,De.transition=t}}return!1}function is(e,t,n){t=wn(n,t),t=oc(e,t,1),e=Nt(e,t,1),t=ke(),e!==null&&(dr(e,1,t),ze(e,t))}function ie(e,t,n){if(e.tag===3)is(e,e,n);else for(;t!==null;){if(t.tag===3){is(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=ic(t,e,1),t=Nt(t,e,1),e=ke(),t!==null&&(dr(t,1,e),ze(t,e));break}}t=t.return}}function tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>ae()-Hl?At(e,0):Bl|=n),ze(e,t)}function Cc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ke();e=ut(e,t),e!==null&&(dr(e,t,n),ze(e,n))}function np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Cc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Wf(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,te&&t.flags&1048576&&Lu(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var o=gn(t,xe.current);pn(t,n),o=Il(null,t,r,e,o,n);var i=Fl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,io(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ll(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,Bi(t,r,e,n),t=Wi(null,t,r,!0,i,n)):(t.tag=0,te&&i&&jl(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ip(r),e=$e(r,e),o){case 0:t=$i(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,$e(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),$i(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ya(e,t,r,o,n);case 3:e:{if(uc(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Fu(e,t),co(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(C(423)),t),t=Ja(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(C(424)),t),t=Ja(e,t,r,n,o);break e}else for(Le=jt(t.stateNode.containerInfo.firstChild),Pe=t,te=!0,Ve=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ct(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Di(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Mi(r,o)?a=null:i!==null&&Mi(r,i)&&(t.flags|=32),sc(e,t),we(e,t,a,n),t.child;case 6:return e===null&&Di(t),null;case 13:return cc(e,t,n);case 4:return Pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ga(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(so,r._currentValue),r._currentValue=a,i!==null)if(Ke(i.value,a)){if(i.children===o.children&&!Ee.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=lt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ai(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(C(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ai(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pn(t,n),o=Ae(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=$e(r,t.pendingProps),o=$e(r.type,o),Ka(e,t,r,o,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Wr(e,t),t.tag=1,be(r)?(e=!0,io(t)):e=!1,pn(t,n),rc(t,r,o),Bi(t,r,o,n),Wi(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ac(e,t,n)}throw Error(C(156,t.tag))};function bc(e,t){return eu(e,t)}function op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new op(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dl)return 11;if(e===fl)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ql(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xt:return Ut(n.children,o,i,t);case cl:a=8,o|=8;break;case di:return e=Oe(12,n,t,o|2),e.elementType=di,e.lanes=i,e;case fi:return e=Oe(13,n,t,o),e.elementType=fi,e.lanes=i,e;case pi:return e=Oe(19,n,t,o),e.elementType=pi,e.lanes=i,e;case Os:return Po(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Is:a=10;break e;case Fs:a=9;break e;case dl:a=11;break e;case fl:a=14;break e;case ht:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Oe(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ut(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Os,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,o,i,a,s,u){return e=new lp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(i),e}function ap(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return _t;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(be(n))return zu(e,n,t)}return t}function _c(e,t,n,r,o,i,a,s,u){return e=Gl(n,r,!0,e,o,i,a,s,u),e.context=zc(null),n=e.current,r=ke(),o=Et(n),i=lt(r,o),i.callback=t??null,Nt(n,i,o),e.current.lanes=o,dr(e,o,r),ze(e,r),e}function To(e,t,n,r){var o=t.current,i=ke(),a=Et(o);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,a),e!==null&&(Ge(e,o,a,i),Br(e,o,a)),a}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ls(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kl(e,t){ls(e,t),(e=e.alternate)&&ls(e,t)}function sp(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}Mo.prototype.render=Yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));To(e,t,null,null)};Mo.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){To(null,e,null,null)}),t[st]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&uu(e)}};function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function up(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=xo(a);i.call(d)}}var a=_c(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=a,e[st]=a.current,tr(e.nodeType===8?e.parentNode:e),Vt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=xo(u);s.call(d)}}var u=Gl(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[st]=u.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){To(t,u,n,r)}),u}function Io(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=xo(a);s.call(u)}}To(t,a,e,o)}else a=up(n,t,e,o,r);return xo(a)}iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(ml(t,n|1),ze(t,ae()),!(Q&6)&&(kn=ae()+500,Tt()))}break;case 13:Vt(function(){var r=ut(e,1);if(r!==null){var o=ke();Ge(r,e,1,o)}}),Kl(e,1)}};gl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ke();Ge(t,e,134217728,n)}Kl(e,134217728)}};lu=function(e){if(e.tag===13){var t=Et(e),n=ut(e,t);if(n!==null){var r=ke();Ge(n,e,t,r)}Kl(e,t)}};au=function(){return G};su=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};ji=function(e,t,n){switch(t){case"input":if(gi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(C(90));As(r),gi(r,o)}}}break;case"textarea":Bs(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ks=$l;Ys=Vt;var cp={usingClientEntryPoint:!1,Events:[pr,tn,Co,Qs,Gs,$l]},Mn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ko=Pr.inject(dp),Ze=Pr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jl(t))throw Error(C(200));return ap(e,t,null,n)};Me.createRoot=function(e,t){if(!Jl(e))throw Error(C(299));var n=!1,r="",o=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,tr(e.nodeType===8?e.parentNode:e),new Yl(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Vt(e)};Me.hydrate=function(e,t,n){if(!Ro(t))throw Error(C(200));return Io(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Jl(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_c(t,null,e,1,n??null,o,!1,i,a),e[st]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Mo(t)};Me.render=function(e,t,n){if(!Ro(t))throw Error(C(200));return Io(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(C(40));return e._reactRootContainer?(Vt(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Me.unstable_batchedUpdates=$l;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Io(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Me;var fp=Ps.exports,ss=fp;ui.createRoot=ss.createRoot,ui.hydrateRoot=ss.hydrateRoot;const pp=({onLogin:e})=>{const[t,n]=O.useState(!0),[r,o]=O.useState(""),[i,a]=O.useState(""),[s,u]=O.useState(""),[d,x]=O.useState(!1),[p,m]=O.useState(!1),w=g=>{if(g.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(i.length<6){u("Password must be at least 6 characters long.");return}x(!0),setTimeout(()=>{const k=JSON.parse(localStorage.getItem("bloodfit_users")||"{}");t?k[r]&&k[r].password===i?e({email:r,name:r.split("@")[0]}):(u("Invalid email or password. Please try again."),x(!1)):k[r]?(u("User with this email already exists. Please login."),x(!1)):(k[r]={password:i},localStorage.setItem("bloodfit_users",JSON.stringify(k)),e({email:r,name:r.split("@")[0]}))},1e3)};return l.jsxs("div",{className:"login-container",children:[l.jsxs("div",{className:"login-card fade-in",children:[l.jsxs("div",{className:"logo-section",children:[l.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),l.jsx("h1",{children:"Blood & Fit"}),l.jsx("p",{children:"Your personal health companion"})]}),l.jsxs("form",{onSubmit:w,className:"login-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:g=>o(g.target.value),required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsxs("div",{className:"password-wrapper",children:[l.jsx("input",{type:p?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:i,onChange:g=>a(g.target.value),required:!0}),l.jsx("button",{type:"button",className:"toggle-password",onClick:()=>m(!p),children:p?"Hide":"Show"})]}),t&&l.jsx("div",{className:"forgot-password",children:l.jsx("span",{onClick:()=>alert("Reset link sent to email!"),children:"Forgot Password?"})})]}),s&&l.jsx("div",{className:"error-box fade-in",children:l.jsxs("span",{children:["⚠️ ",s]})}),l.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?l.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),l.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",l.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),l.jsx("style",{children:`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-md);
          background: linear-gradient(135deg, #fff1f2 0%, #fff 100%);
        }
        
        .login-card {
           width: 100%;
           max-width: 400px;
           background: rgba(255, 255, 255, 0.9);
           backdrop-filter: blur(10px);
           padding: var(--spacing-xl);
           border-radius: 24px;
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
           text-align: center;
           border: 1px solid rgba(255,255,255,0.5);
        }

        .logo-section {
          margin-bottom: var(--spacing-xl);
        }

        .app-logo {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: var(--spacing-md);
          border-radius: 20px; /* Softer edges */
          box-shadow: var(--shadow-md);
        }

        .logo-section h1 {
          font-size: 24px;
          color: var(--color-text-main);
          margin-bottom: 5px;
          font-weight: 800;
        }

        .logo-section p {
          color: var(--color-text-secondary);
          font-size: 14px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--color-text-main);
          font-size: 13px;
        }

        .input-field {
            width: 100%;
            padding: 12px;
            border: 1px solid #e2e8f0;
            border-radius: var(--radius-md);
            font-size: 14px;
            transition: all 0.2s;
        }
        .input-field:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.1);
        }

        .password-wrapper {
            position: relative;
        }
        .toggle-password {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            font-size: 12px;
            color: var(--color-primary);
            font-weight: 600;
            cursor: pointer;
        }

        .btn-primary {
          width: 100%;
          padding: 12px;
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:active { transform: scale(0.98); }

        .error-box {
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #ef4444;
            padding: 10px;
            border-radius: var(--radius-md);
            font-size: 12px;
            text-align: left;
            display: flex; gap: 8px;
        }

        .footer-text {
          margin-top: 25px;
          font-size: 13px;
          color: var(--color-text-secondary);
        }

        .link {
          color: var(--color-primary);
          font-weight: 600;
          cursor: pointer;
        }
        .link:hover { text-decoration: underline; }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
        
        .forgot-password {
            text-align: right;
            margin-top: 8px;
            font-size: 12px;
        }
        .forgot-password span {
            color: var(--color-primary);
            cursor: pointer;
            font-weight: 500;
        }
      `})]})},hp=({onComplete:e})=>{const[t,n]=O.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=a=>{const{name:s,value:u}=a.target;n(d=>({...d,[s]:u}))},o=(a,s)=>Math.round(parseInt(a||0)*30.48+parseInt(s||0)*2.54),i=a=>{if(a.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||o(t.heightFt,t.heightIn)};e(s)};return l.jsxs("div",{className:"profile-container fade-in",children:[l.jsxs("div",{className:"card profile-card",children:[l.jsxs("div",{className:"header",children:[l.jsx("h2",{children:"Let's know you better"}),l.jsx("p",{children:"Enter your details for personalized health insights."})]}),l.jsxs("form",{onSubmit:i,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Age"}),l.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[l.jsx("option",{value:"male",children:"Male"}),l.jsx("option",{value:"female",children:"Female"}),l.jsx("option",{value:"other",children:"Other"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Weight (kg)"}),l.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),l.jsxs("div",{className:"height-section",children:[l.jsx("label",{children:"Height"}),l.jsx("div",{className:"tabs"}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"CM"}),l.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),l.jsx("div",{className:"or-divider",children:"OR"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"Feet"}),l.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"Inches"}),l.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),l.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),l.jsx("style",{children:`
        .profile-container {
          padding: var(--spacing-md);
          min-height: 100vh;
          background-color: var(--color-background);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-card {
           width: 100%;
           max-width: 450px;
        }
        .header {
          margin-bottom: var(--spacing-xl);
          text-align: center;
        }
        .header h2 {
          color: var(--color-text-main);
          margin-bottom: var(--spacing-xs);
        }
        .header p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }
        .row {
          display: flex;
          gap: var(--spacing-md);
        }
        .row .form-group {
          flex: 1;
        }
        .form-group {
          margin-bottom: var(--spacing-md);
        }
        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        .sub-label {
          font-size: var(--font-size-xs) !important;
          color: var(--color-text-muted) !important;
        }
        .or-divider {
          display: flex;
          align-items: center;
          font-size: var(--font-size-xs);
          color: var(--color-text-muted);
          font-weight: bold;
        }
        .height-section {
           background: #f1f5f9;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
        }
        .fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(e,t)=>{const n=O.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},x)=>O.createElement("svg",{ref:x,...mp,width:o,height:o,stroke:r,strokeWidth:a?Number(i)*24/Number(o):i,className:["lucide",`lucide-${gp(e)}`,s].join(" "),...d},[...t.map(([p,m])=>O.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=K("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=K("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=K("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=K("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=K("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=K("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=K("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=K("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=K("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=K("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=K("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=K("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=K("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=K("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=K("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=K("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=K("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=K("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=K("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=K("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=K("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ip=({user:e,onClose:t,onLogout:n})=>{const[r,o]=O.useState("details"),[i,a]=O.useState(!1),[s,u]=O.useState({name:e.name||"",age:e.age||"",gender:e.gender||"Male",height:e.height||"",weight:e.weight||"",bloodGroup:e.bloodGroup||"",diseases:e.diseases||"",allergies:e.allergies||"",notes:e.notes||""}),[d,x]=O.useState([]);O.useEffect(()=>{const g=localStorage.getItem(`profile_${e.email}`);g&&u({...s,...JSON.parse(g)});const k=JSON.parse(localStorage.getItem("blood_reports")||"[]");x(k)},[e.email]);const p=()=>{localStorage.setItem(`profile_${e.email}`,JSON.stringify(s)),a(!1),alert("Profile saved successfully!")},w=(()=>{if(!s.height||!s.weight)return null;const g=s.height/100;return(s.weight/(g*g)).toFixed(1)})();return l.jsxs("div",{className:"profile-dashboard fixed-fullscreen",children:[l.jsxs("div",{className:"profile-header",children:[l.jsx("button",{onClick:t,className:"p-back-btn",children:l.jsx(Kt,{size:24})}),l.jsx("h3",{children:"My Profile"}),l.jsx("button",{onClick:n,className:"p-logout",children:"Logout"})]}),l.jsxs("div",{className:"p-hero",children:[l.jsx("div",{className:"p-avatar",children:l.jsx(Ic,{size:40,color:"white"})}),l.jsx("h2",{children:s.name||"User"}),l.jsxs("div",{className:"p-badges",children:[w&&l.jsxs("span",{className:"p-badge",children:["BMI: ",w]}),s.bloodGroup&&l.jsx("span",{className:"p-badge red",children:s.bloodGroup})]})]}),l.jsxs("div",{className:"p-tabs",children:[l.jsx("button",{className:`p-tab ${r==="details"?"active":""}`,onClick:()=>o("details"),children:"Details"}),l.jsx("button",{className:`p-tab ${r==="health"?"active":""}`,onClick:()=>o("health"),children:"Health"}),l.jsx("button",{className:`p-tab ${r==="reports"?"active":""}`,onClick:()=>o("reports"),children:"Reports"})]}),l.jsxs("div",{className:"p-content",children:[r==="details"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsxs("div",{className:"pane-header",children:[l.jsx("h4",{children:"Personal Details"}),l.jsx("button",{className:"edit-toggle",onClick:()=>a(!i),children:i?"Cancel":"Edit"})]}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Age"}),l.jsx("input",{type:"number",disabled:!i,value:s.age,onChange:g=>u({...s,age:g.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{disabled:!i,value:s.gender,onChange:g=>u({...s,gender:g.target.value}),children:[l.jsx("option",{children:"Male"}),l.jsx("option",{children:"Female"}),l.jsx("option",{children:"Other"})]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Height (cm)"}),l.jsx("input",{type:"number",disabled:!i,value:s.height,onChange:g=>u({...s,height:g.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Weight (kg)"}),l.jsx("input",{type:"number",disabled:!i,value:s.weight,onChange:g=>u({...s,weight:g.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Blood Group"}),l.jsxs("select",{disabled:!i,value:s.bloodGroup,onChange:g=>u({...s,bloodGroup:g.target.value}),children:[l.jsx("option",{value:"",children:"Select"}),l.jsx("option",{children:"A+"}),l.jsx("option",{children:"A-"}),l.jsx("option",{children:"B+"}),l.jsx("option",{children:"B-"}),l.jsx("option",{children:"O+"}),l.jsx("option",{children:"O-"}),l.jsx("option",{children:"AB+"}),l.jsx("option",{children:"AB-"})]})]})]}),i&&l.jsxs("button",{className:"save-btn",onClick:p,children:[l.jsx(fs,{size:18})," Save Changes"]})]}),r==="health"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsxs("div",{className:"pane-header",children:[l.jsx("h4",{children:"Health Profile"}),!i&&l.jsx("button",{className:"edit-toggle",onClick:()=>a(!0),children:"Edit"})]}),l.jsxs("div",{className:"health-form",children:[l.jsx("label",{children:"Existing Conditions (Diseases)"}),l.jsx("textarea",{disabled:!i,placeholder:"e.g. Diabetes, Hypertension...",value:s.diseases,onChange:g=>u({...s,diseases:g.target.value})}),l.jsx("label",{children:"Allergies"}),l.jsx("textarea",{disabled:!i,placeholder:"e.g. Peanuts, Penicillin...",value:s.allergies,onChange:g=>u({...s,allergies:g.target.value})}),l.jsx("label",{children:"About Me / Notes"}),l.jsx("textarea",{className:"large-text",disabled:!i,placeholder:"Write your fitness goals here...",value:s.notes,onChange:g=>u({...s,notes:g.target.value})})]}),i&&l.jsxs("button",{className:"save-btn",onClick:p,children:[l.jsx(fs,{size:18})," Save Health Data"]}),l.jsxs("div",{className:"milestones-preview",children:[l.jsx("h5",{children:"Milestones"}),l.jsxs("div",{className:"milestone-badges",children:[l.jsx("span",{className:"m-badge",children:"🏆 7 Day Streak"}),l.jsx("span",{className:"m-badge",children:"💧 Hydrated"})]})]})]}),r==="reports"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsx("h4",{children:"Recent Blood Reports"}),d.length===0?l.jsx("p",{className:"empty-state",children:"No reports uploaded yet."}):l.jsx("div",{className:"reports-list",children:d.map((g,k)=>l.jsxs("div",{className:"report-item",children:[l.jsx("div",{className:"r-icon",children:l.jsx(Xl,{size:20})}),l.jsxs("div",{className:"r-info",children:[l.jsx("span",{className:"r-date",children:g.date}),l.jsxs("span",{className:"r-summary",children:[g.results.length," Parameters Analyzed"]})]}),l.jsx("button",{className:"r-action",onClick:()=>alert("Report details view simulated."),children:"View"})]},k))})]})]}),l.jsx("style",{children:`
                .fixed-fullscreen {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: #f8fafc; z-index: 2000;
                    overflow-y: auto;
                    font-family: var(--font-family-body);
                }
                .profile-header {
                    display: flex; justify-content: space-between; align-items: center;
                    padding: 20px; background: white;
                }
                .profile-header h3 { margin: 0; font-size: 18px; }
                .p-back-btn { background: none; font-size: 24px; padding: 0; }
                .p-logout { color: #ef4444; background: none; font-weight: 600; font-size: 14px; }

                .p-hero {
                    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
                    color: white; padding: 30px; text-align: center;
                    border-radius: 0 0 30px 30px; margin-bottom: 20px;
                    box-shadow: 0 10px 30px rgba(230, 57, 70, 0.2);
                }
                .p-avatar {
                    width: 80px; height: 80px; background: rgba(255,255,255,0.2);
                    border-radius: 50%; margin: 0 auto 15px;
                    display: flex; align-items: center; justify-content: center;
                    backdrop-filter: blur(5px); border: 2px solid rgba(255,255,255,0.4);
                }
                .p-badges { display: flex; justify-content: center; gap: 10px; margin-top: 10px; }
                .p-badge { background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 600; }
                .p-badge.red { background: #fee2e2; color: #991b1b; }

                .p-tabs {
                    display: flex; padding: 0 20px; gap: 10px; border-bottom: 1px solid #e2e8f0;
                }
                .p-tab {
                    flex: 1; padding: 12px; background: none; border-bottom: 3px solid transparent;
                    color: #64748b; font-weight: 600; font-size: 14px;
                }
                .p-tab.active { border-color: var(--color-primary); color: var(--color-primary); }

                .p-content { padding: 20px; }
                .tab-pane { animation: fadeIn 0.3s ease; }
                .pane-header { display: flex; justify-content: space-between; margin-bottom: 20px; align-items: center; }
                .edit-toggle { color: var(--color-primary); font-size: 14px; font-weight: 600; background: none; }

                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .field label { display: block; font-size: 12px; color: #64748b; margin-bottom: 5px; }
                .field input, .field select {
                    width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;
                    background: white; font-weight: 500;
                }
                .field input:disabled { background: #f1f5f9; color: #94a3b8; }

                .health-form label { display: block; font-size: 13px; font-weight: 600; margin-top: 15px; margin-bottom: 5px; }
                .health-form textarea {
                    width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 12px;
                    font-family: inherit; resize: none; height: 60px;
                }
                .health-form textarea.large-text { height: 100px; }

                .save-btn {
                    width: 100%; background: var(--color-primary); color: white;
                    padding: 14px; border-radius: 12px; margin-top: 25px;
                    font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;
                    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.2);
                }

                .reports-list { display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }
                .report-item {
                    background: white; padding: 15px; border-radius: 12px;
                    display: flex; align-items: center; gap: 15px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                .r-icon {
                    width: 40px; height: 40px; background: #eff6ff; color: #3b82f6;
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                }
                .r-info { flex: 1; display: flex; flex-direction: column; }
                .r-date { font-weight: 600; font-size: 14px; }
                .r-summary { font-size: 12px; color: #64748b; }
                .r-action { font-size: 12px; color: var(--color-primary); border: 1px solid var(--color-primary); padding: 4px 10px; border-radius: 6px; background: none; }

                .export-btn {
                     width: 100%; margin-top: 20px; padding: 12px;
                     border: 1px dashed #cbd5e1; background: white; color: #475569;
                     border-radius: 12px; display: flex; justify-content: center; gap: 8px;
                     align-items: center;
                }

                .milestones-preview { margin-top: 30px; padding: 15px; background: #fff7ed; border-radius: 12px; }
                .milestone-badges { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
                .m-badge { background: white; padding: 5px 10px; border-radius: 8px; font-size: 12px; font-weight: 600; color: #c2410c; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

                .fade-in { animation: fadeIn 0.4s ease; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `})]})},Fp=({userName:e,onNavigate:t,onLogout:n})=>{const[r,o]=O.useState(!1);if(r)return l.jsx(Ip,{user:{name:e,email:"user@example.com"},onClose:()=>o(!1),onLogout:n});const i=[{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:l.jsx(Xl,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:l.jsx(wp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:l.jsx(Kr,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:l.jsx(jp,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:l.jsx(Np,{size:24}),color:"#7209B7",bg:"#F3E8FF"},{id:"weightprogress",title:"Weight Tracker",desc:"Track your weight changes",icon:l.jsx(Rc,{size:24}),color:"#8D99AE",bg:"#F1F5F9"}];return l.jsxs("div",{className:"dashboard-container fade-in",children:[l.jsxs("header",{className:"dash-header",children:[l.jsx("div",{className:"avatar",onClick:()=>o(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),l.jsxs("div",{className:"welcome-text",children:[l.jsx("p",{children:"Welcome back,"}),l.jsx("h3",{children:e||"User"})]})]}),l.jsx("div",{className:"stats-preview",children:l.jsxs("div",{className:"stat-card",children:[l.jsx("h4",{children:"Stay Hydrated! 💧"}),l.jsx("p",{children:"Drink 8 glasses of water today."})]})}),l.jsx("div",{className:"options-grid",children:i.map(a=>l.jsxs("button",{className:"option-card",onClick:()=>t(a.id),style:{"--hover-color":a.color},children:[l.jsx("div",{className:"icon-box",style:{color:a.color,backgroundColor:a.bg},children:a.icon}),l.jsxs("div",{className:"text-box",children:[l.jsx("h4",{children:a.title}),l.jsx("p",{children:a.desc})]}),l.jsx("div",{className:"arrow",children:"→"})]},a.id))}),l.jsx("style",{children:`
        .dashboard-container {
          padding: var(--spacing-md);
          padding-bottom: 80px; /* Space for bottom nav if added */
        }
        
        .dash-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .avatar {
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: var(--font-size-lg);
          box-shadow: var(--shadow-md);
        }

        .welcome-text {
          flex: 1;
        }

        .welcome-text p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-xs);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .welcome-text h3 {
          color: var(--color-text-main);
        }

        .notif-btn {
          background: white;
          padding: 10px;
          border-radius: 50%;
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: var(--color-danger);
          border-radius: 50%;
          border: 1px solid white;
        }

        .stats-preview {
          margin-bottom: var(--spacing-xl);
        }

        .stat-card {
           background: linear-gradient(135deg, #4CC9F0 0%, #4361EE 100%);
           color: white;
           padding: var(--spacing-lg);
           border-radius: var(--radius-lg);
           box-shadow: var(--shadow-md);
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .option-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          background: white;
          padding: var(--spacing-md);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: var(--shadow-sm);
          text-align: left;
          width: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .option-card:hover { /* Desktop hover */
           transform: translateY(-2px);
           box-shadow: var(--shadow-md);
           border-color: var(--hover-color);
        }

        .option-card:active {
           transform: scale(0.98);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-box {
          flex: 1;
        }

        .text-box h4 {
           margin-bottom: 2px;
           color: var(--color-text-main);
        }

        .text-box p {
           font-size: var(--font-size-xs);
           color: var(--color-text-secondary);
        }

        .arrow {
          color: var(--color-text-muted);
          font-weight: bold;
        }
      `})]})},Op=({userProfile:e,onBack:t})=>{const[n,r]=O.useState("metric"),[o,i]=O.useState(""),[a,s]=O.useState(""),[u,d]=O.useState(""),[x,p]=O.useState(""),[m,w]=O.useState("male"),[g,k]=O.useState("sedentary"),[D,f]=O.useState(null),[c,h]=O.useState(""),[j,E]=O.useState(""),[P,L]=O.useState("");O.useEffect(()=>{e&&(e.height&&i(e.height),e.weight&&d(e.weight),e.age&&p(e.age),e.gender&&w(e.gender.toLowerCase()))},[e]);const M=()=>{let I=0,X=0;if(n==="metric"){if(!o||!u)return;I=parseFloat(o)/100,X=parseFloat(u)}else{if(!o||!u)return;I=(parseFloat(o)*12+(parseFloat(a)||0))*.0254,X=parseFloat(u)*.453592}if(I<=0||X<=0)return;const _=parseFloat((X/(I*I)).toFixed(1));f(_);let F="",H="",A="";_<18.5?(F="Underweight",H="var(--color-accent)",A="You may need to increase your calorie intake. Focus on nutrient-dense foods."):_<24.9?(F="Normal Weight",H="var(--color-success)",A="Great job! You have a healthy body weight. Maintain it with balanced diet and exercise."):_<29.9?(F="Overweight",H="var(--color-warning)",A="Try to incorporate more cardio and monitor portion sizes to reach a healthier range."):(F="Obese",H="var(--color-danger)",A="It is recommended to consult a healthcare provider for a personalized weight management plan."),h({label:F,color:H}),L(A);const le=I/.0254-60;let b=0;m==="male"?b=52+1.9*Math.max(0,le):b=49+1.7*Math.max(0,le),E(`${b.toFixed(1)} - ${(b*1.1).toFixed(1)} kg`)},W=()=>{f(null),i(""),d(""),p("")};return l.jsxs("div",{className:"advanced-bmi-container fade-in",children:[l.jsxs("div",{className:"bmi-header",children:[l.jsx("button",{onClick:t,className:"btn-icon",children:l.jsx(Kt,{size:24})}),l.jsx("h2",{children:"Advanced BMI Calculator"}),l.jsx("div",{style:{width:24}})," "]}),l.jsxs("div",{className:"calculator-grid",children:[l.jsxs("div",{className:"card input-card",children:[l.jsxs("div",{className:"toggle-row",children:[l.jsx("button",{className:`toggle-btn ${n==="metric"?"active":""}`,onClick:()=>r("metric"),children:"Metric (cm/kg)"}),l.jsx("button",{className:`toggle-btn ${n==="imperial"?"active":""}`,onClick:()=>r("imperial"),children:"Imperial (ft/lbs)"})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{value:m,onChange:I=>w(I.target.value),children:[l.jsx("option",{value:"male",children:"Male"}),l.jsx("option",{value:"female",children:"Female"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Age (years)"}),l.jsx("input",{type:"number",value:x,onChange:I=>p(I.target.value),placeholder:"25"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:n==="metric"?"Height (cm)":"Height (ft)"}),l.jsx("input",{type:"number",value:o,onChange:I=>i(I.target.value),placeholder:n==="metric"?"175":"5"})]}),n==="imperial"&&l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Inches"}),l.jsx("input",{type:"number",value:a,onChange:I=>s(I.target.value),placeholder:"10"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:n==="metric"?"Weight (kg)":"Weight (lbs)"}),l.jsx("input",{type:"number",value:u,onChange:I=>d(I.target.value),placeholder:n==="metric"?"70":"150"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Activity Level"}),l.jsxs("select",{value:g,onChange:I=>k(I.target.value),children:[l.jsx("option",{value:"sedentary",children:"Sedentary (Little or no exercise)"}),l.jsx("option",{value:"light",children:"Lightly active (1-3 days/week)"}),l.jsx("option",{value:"moderate",children:"Moderately active (3-5 days/week)"}),l.jsx("option",{value:"active",children:"Very active (6-7 days/week)"})]})]}),l.jsxs("div",{className:"action-row",children:[l.jsx("button",{className:"reset-btn",onClick:W,children:l.jsx(Ep,{size:18})}),l.jsx("button",{className:"calculate-btn",onClick:M,children:"Calculate BMI"})]})]}),D&&l.jsxs("div",{className:"card result-card fade-in",children:[l.jsxs("div",{className:"result-header",children:[l.jsx("h3",{children:"Your Result"}),l.jsx("div",{className:"bmi-badge",style:{backgroundColor:c.color},children:c.label})]}),l.jsxs("div",{className:"bmi-display",children:[l.jsx("span",{className:"bmi-number",style:{color:c.color},children:D}),l.jsx("span",{className:"bmi-label",children:"BMI Score"})]}),l.jsxs("div",{className:"progress-bar-container",children:[l.jsx("div",{className:"progress-track"}),l.jsx("div",{className:"progress-fill",style:{width:`${Math.min(Math.max(D/40*100,0),100)}%`,backgroundColor:c.color}}),l.jsxs("div",{className:"markers",children:[l.jsx("span",{style:{left:"46%"},children:"18.5"}),l.jsx("span",{style:{left:"62.5%"},children:"25"}),l.jsx("span",{style:{left:"75%"},children:"30"})]})]}),l.jsxs("div",{className:"health-insight",children:[l.jsxs("div",{className:"insight-item",children:[l.jsx(Tc,{size:20,className:"icon"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Ideal Weight"}),l.jsx("p",{children:j})]})]}),l.jsxs("div",{className:"insight-item",children:[l.jsx(Mc,{size:20,className:"icon"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Health Tip"}),l.jsx("p",{children:P})]})]})]})]})]}),l.jsx("style",{children:`
                .advanced-bmi-container {
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .bmi-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                .btn-icon { background: none; color: var(--color-text-main); padding: 0; }
                
                .toggle-row {
                    display: flex;
                    background: #f1f5f9;
                    border-radius: 12px;
                    padding: 4px;
                    margin-bottom: 20px;
                }
                .toggle-btn {
                    flex: 1;
                    padding: 10px;
                    border-radius: 8px;
                    background: transparent;
                    color: #64748b;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.2s;
                }
                .toggle-btn.active {
                    background: white;
                    color: var(--color-primary);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .form-row {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 15px;
                }
                .form-group { flex: 1; }
                .form-group label {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    color: #475569;
                    margin-bottom: 6px;
                }
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 16px;
                    background: #fff;
                    transition: border-color 0.2s;
                }
                .form-group input:focus, .form-group select:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }

                .action-row {
                    display: flex;
                    gap: 10px;
                    margin-top: 25px;
                }
                .reset-btn {
                    width: 48px;
                    background: #f1f5f9;
                    color: #64748b;
                    border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                }
                .calculate-btn {
                    flex: 1;
                    background: var(--color-primary);
                    color: white;
                    padding: 14px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 16px;
                    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.25);
                }
                .calculate-btn:active { transform: scale(0.98); }

                /* Result Card Styles */
                .result-card {
                    margin-top: 25px;
                    border: 1px solid #e2e8f0;
                }
                .result-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }
                .bmi-badge {
                    padding: 6px 12px;
                    border-radius: 99px;
                    color: white;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                
                .bmi-display {
                    text-align: center;
                    margin-bottom: 25px;
                }
                .bmi-number {
                    display: block;
                    font-size: 4rem;
                    font-weight: 800;
                    line-height: 1;
                }
                .bmi-label {
                    color: #94a3b8;
                    font-size: 14px;
                    font-weight: 500;
                }

                .progress-bar-container {
                    position: relative;
                    height: 12px;
                    background: #f1f5f9;
                    border-radius: 99px;
                    margin-bottom: 30px;
                }
                .progress-fill {
                    height: 100%;
                    border-radius: 99px;
                    transition: width 1s ease-out;
                }
                .markers {
                    position: absolute;
                    top: 15px;
                    left: 0;
                    width: 100%;
                    height: 20px;
                }
                .markers span {
                    position: absolute;
                    transform: translateX(-50%);
                    font-size: 10px;
                    color: #94a3b8;
                    font-weight: 600;
                }
                .markers span::before {
                    content: '';
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    width: 2px;
                    height: 12px;
                    background: white;
                    transform: translateX(-50%);
                }

                .health-insight {
                    background: #f8fafc;
                    border-radius: 12px;
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .insight-item {
                    display: flex;
                    gap: 15px;
                    align-items: flex-start;
                }
                .insight-item .icon {
                    color: var(--color-primary);
                    margin-top: 2px;
                }
                .insight-item h4 {
                    font-size: 14px;
                    margin-bottom: 4px;
                    color: var(--color-text-main);
                }
                .insight-item p {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.4;
                }

                .fade-in { animation: fadeIn 0.4s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `})]})};var Dp={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(y,v,S){y[v]=S.value},a,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",x=s.toStringTag||"@@toStringTag";function p(y,v,S){return Object.defineProperty(y,v,{value:S,enumerable:!0,configurable:!0,writable:!0}),y[v]}try{p({},"")}catch{p=function(v,S,R){return v[S]=R}}function m(y,v,S,R){var N=v&&v.prototype instanceof h?v:h,z=Object.create(N.prototype),U=new Y(R||[]);return i(z,"_invoke",{value:_(y,S,U)}),z}n.wrap=m;function w(y,v,S){try{return{type:"normal",arg:y.call(v,S)}}catch(R){return{type:"throw",arg:R}}}var g="suspendedStart",k="suspendedYield",D="executing",f="completed",c={};function h(){}function j(){}function E(){}var P={};p(P,u,function(){return this});var L=Object.getPrototypeOf,M=L&&L(L(le([])));M&&M!==r&&o.call(M,u)&&(P=M);var W=E.prototype=h.prototype=Object.create(P);j.prototype=E,i(W,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:j,configurable:!0}),j.displayName=p(E,x,"GeneratorFunction");function I(y){["next","throw","return"].forEach(function(v){p(y,v,function(S){return this._invoke(v,S)})})}n.isGeneratorFunction=function(y){var v=typeof y=="function"&&y.constructor;return v?v===j||(v.displayName||v.name)==="GeneratorFunction":!1},n.mark=function(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,E):(y.__proto__=E,p(y,x,"GeneratorFunction")),y.prototype=Object.create(W),y},n.awrap=function(y){return{__await:y}};function X(y,v){function S(z,U,B,V){var ee=w(y[z],y,U);if(ee.type==="throw")V(ee.arg);else{var ft=ee.arg,et=ft.value;return et&&typeof et=="object"&&o.call(et,"__await")?v.resolve(et.__await).then(function(tt){S("next",tt,B,V)},function(tt){S("throw",tt,B,V)}):v.resolve(et).then(function(tt){ft.value=tt,B(ft)},function(tt){return S("throw",tt,B,V)})}}var R;function N(z,U){function B(){return new v(function(V,ee){S(z,U,V,ee)})}return R=R?R.then(B,B):B()}i(this,"_invoke",{value:N})}I(X.prototype),p(X.prototype,d,function(){return this}),n.AsyncIterator=X,n.async=function(y,v,S,R,N){N===void 0&&(N=Promise);var z=new X(m(y,v,S,R),N);return n.isGeneratorFunction(v)?z:z.next().then(function(U){return U.done?U.value:z.next()})};function _(y,v,S){var R=g;return function(z,U){if(R===D)throw new Error("Generator is already running");if(R===f){if(z==="throw")throw U;return b()}for(S.method=z,S.arg=U;;){var B=S.delegate;if(B){var V=F(B,S);if(V){if(V===c)continue;return V}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(R===g)throw R=f,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);R=D;var ee=w(y,v,S);if(ee.type==="normal"){if(R=S.done?f:k,ee.arg===c)continue;return{value:ee.arg,done:S.done}}else ee.type==="throw"&&(R=f,S.method="throw",S.arg=ee.arg)}}}function F(y,v){var S=v.method,R=y.iterator[S];if(R===a)return v.delegate=null,S==="throw"&&y.iterator.return&&(v.method="return",v.arg=a,F(y,v),v.method==="throw")||S!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+S+"' method")),c;var N=w(R,y.iterator,v.arg);if(N.type==="throw")return v.method="throw",v.arg=N.arg,v.delegate=null,c;var z=N.arg;if(!z)return v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,c;if(z.done)v[y.resultName]=z.value,v.next=y.nextLoc,v.method!=="return"&&(v.method="next",v.arg=a);else return z;return v.delegate=null,c}I(W),p(W,x,"Generator"),p(W,u,function(){return this}),p(W,"toString",function(){return"[object Generator]"});function H(y){var v={tryLoc:y[0]};1 in y&&(v.catchLoc=y[1]),2 in y&&(v.finallyLoc=y[2],v.afterLoc=y[3]),this.tryEntries.push(v)}function A(y){var v=y.completion||{};v.type="normal",delete v.arg,y.completion=v}function Y(y){this.tryEntries=[{tryLoc:"root"}],y.forEach(H,this),this.reset(!0)}n.keys=function(y){var v=Object(y),S=[];for(var R in v)S.push(R);return S.reverse(),function N(){for(;S.length;){var z=S.pop();if(z in v)return N.value=z,N.done=!1,N}return N.done=!0,N}};function le(y){if(y){var v=y[u];if(v)return v.call(y);if(typeof y.next=="function")return y;if(!isNaN(y.length)){var S=-1,R=function N(){for(;++S<y.length;)if(o.call(y,S))return N.value=y[S],N.done=!1,N;return N.value=a,N.done=!0,N};return R.next=R}}return{next:b}}n.values=le;function b(){return{value:a,done:!0}}return Y.prototype={constructor:Y,reset:function(y){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(A),!y)for(var v in this)v.charAt(0)==="t"&&o.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=a)},stop:function(){this.done=!0;var y=this.tryEntries[0],v=y.completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(y){if(this.done)throw y;var v=this;function S(V,ee){return z.type="throw",z.arg=y,v.next=V,ee&&(v.method="next",v.arg=a),!!ee}for(var R=this.tryEntries.length-1;R>=0;--R){var N=this.tryEntries[R],z=N.completion;if(N.tryLoc==="root")return S("end");if(N.tryLoc<=this.prev){var U=o.call(N,"catchLoc"),B=o.call(N,"finallyLoc");if(U&&B){if(this.prev<N.catchLoc)return S(N.catchLoc,!0);if(this.prev<N.finallyLoc)return S(N.finallyLoc)}else if(U){if(this.prev<N.catchLoc)return S(N.catchLoc,!0)}else if(B){if(this.prev<N.finallyLoc)return S(N.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(y,v){for(var S=this.tryEntries.length-1;S>=0;--S){var R=this.tryEntries[S];if(R.tryLoc<=this.prev&&o.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var N=R;break}}N&&(y==="break"||y==="continue")&&N.tryLoc<=v&&v<=N.finallyLoc&&(N=null);var z=N?N.completion:{};return z.type=y,z.arg=v,N?(this.method="next",this.next=N.finallyLoc,c):this.complete(z)},complete:function(y,v){if(y.type==="throw")throw y.arg;return y.type==="break"||y.type==="continue"?this.next=y.arg:y.type==="return"?(this.rval=this.arg=y.arg,this.method="return",this.next="end"):y.type==="normal"&&v&&(this.next=v),c},finish:function(y){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.finallyLoc===y)return this.complete(S.completion,S.afterLoc),A(S),c}},catch:function(y){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.tryLoc===y){var R=S.completion;if(R.type==="throw"){var N=R.arg;A(S)}return N}}throw new Error("illegal catch attempt")},delegateYield:function(y,v,S){return this.delegate={iterator:le(y),resultName:v,nextLoc:S},this.method==="next"&&(this.arg=a),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Dp);var Zl=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Ap=Zl;let ps=0;var Fc=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=Ap("Job",ps),ps+=1),{id:r,action:t,payload:n}},Cn={};let ql=!1;Cn.logging=ql;Cn.setLogging=e=>{ql=e};Cn.log=(...e)=>ql?console.log.apply(void 0,e):null;const Up=Fc,{log:Tr}=Cn,Bp=Zl;let hs=0;var Hp=()=>{const e=Bp("Scheduler",hs),t={},n={};let r=[];hs+=1;const o=()=>r.length,i=()=>Object.keys(t).length,a=()=>{if(r.length!==0){const p=Object.keys(t);for(let m=0;m<p.length;m+=1)if(typeof n[p[m]]>"u"){r[0](t[p[m]]);break}}},s=(p,m)=>new Promise((w,g)=>{const k=Up({action:p,payload:m});r.push(async D=>{r.shift(),n[D.id]=k;try{w(await D[p].apply(void 0,[...m,k.id]))}catch(f){g(f)}finally{delete n[D.id],a()}}),Tr(`[${e}]: Add ${k.id} to JobQueue`),Tr(`[${e}]: JobQueue length=${r.length}`),a()});return{addWorker:p=>(t[p.id]=p,Tr(`[${e}]: Add ${p.id}`),Tr(`[${e}]: Number of workers=${i()}`),a(),p.id),addJob:async(p,...m)=>{if(i()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(p,m)},terminate:async()=>{Object.keys(t).forEach(async p=>{await t[p].terminate()}),r=[]},getQueueLen:o,getNumWorkers:i}};function $p(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Wp(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Vp=Wp;const Qp=Vp;var Gp=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":Qp()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof $p=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const Kp=Gp("type")==="browser",Yp=Kp?e=>new URL(e,window.location.href).href:e=>e;var Jp=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=Yp(t[n]))}),t},Xp=e=>{const t=[],n=[],r=[],o=[],i=[];return e.blocks&&e.blocks.forEach(a=>{a.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(x=>{i.push({...x,page:e,block:a,paragraph:s,line:u,word:d})}),o.push({...d,page:e,block:a,paragraph:s,line:u})}),r.push({...u,page:e,block:a,paragraph:s})}),n.push({...s,page:e,block:a})}),t.push({...a,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:i}},Oc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Zp="5.1.1",qp={version:Zp};var eh={workerBlobURL:!0,logger:()=>{}};const th=qp.version,nh=eh;var rh={...nh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${th}/dist/worker.min.js`},oh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},ih=e=>{e.terminate()},lh=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},ah=async(e,t)=>{e.postMessage(t)};const si=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),nl=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await nl(e.src)),e.tagName==="VIDEO"&&(t=await nl(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await si(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await si(n)}else(e instanceof File||e instanceof Blob)&&(t=await si(e));return new Uint8Array(t)};var sh=nl;const uh=rh,ch=oh,dh=ih,fh=lh,ph=ah,hh=sh;var mh={defaultOptions:uh,spawnWorker:ch,terminateWorker:dh,onMessage:fh,send:ph,loadImage:hh};const gh=Jp,vh=Xp,He=Fc,{log:ms}=Cn,yh=Zl,Mt=Oc,{defaultOptions:xh,spawnWorker:wh,terminateWorker:kh,onMessage:Sh,loadImage:gs,send:jh}=mh;let vs=0;var Dc=async(e="eng",t=Mt.LSTM_ONLY,n={},r={})=>{const o=yh("Worker",vs),{logger:i,errorHandler:a,...s}=gh({...xh,...n}),u={},d={},x=typeof e=="string"?e.split("+"):e;let p=t,m=r;const w=[Mt.DEFAULT,Mt.LSTM_ONLY].includes(t)&&!s.legacyCore;let g,k;const D=new Promise((N,z)=>{k=N,g=z}),f=N=>{g(N.message)};let c=wh(s);c.onerror=f,vs+=1;const h=(N,z)=>{u[N]=z},j=(N,z)=>{d[N]=z},E=({id:N,action:z,payload:U})=>new Promise((B,V)=>{ms(`[${o}]: Start ${N}, action=${z}`);const ee=`${z}-${N}`;h(ee,B),j(ee,V),jh(c,{workerId:o,jobId:N,action:z,payload:U})}),P=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),L=N=>E(He({id:N,action:"load",payload:{options:{lstmOnly:w,corePath:s.corePath,logging:s.logging}}})),M=(N,z,U)=>E(He({id:U,action:"FS",payload:{method:"writeFile",args:[N,z]}})),W=(N,z)=>E(He({id:z,action:"FS",payload:{method:"readFile",args:[N,{encoding:"utf8"}]}})),I=(N,z)=>E(He({id:z,action:"FS",payload:{method:"unlink",args:[N]}})),X=(N,z,U)=>E(He({id:U,action:"FS",payload:{method:N,args:z}})),_=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),F=(N,z)=>E(He({id:z,action:"loadLanguage",payload:{langs:N,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Mt.DEFAULT,Mt.LSTM_ONLY].includes(p)&&!s.legacyLang}}})),H=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),A=(N,z,U,B)=>E(He({id:B,action:"initialize",payload:{langs:N,oem:z,config:U}})),Y=(N="eng",z,U,B)=>{if(w&&[Mt.TESSERACT_ONLY,Mt.TESSERACT_LSTM_COMBINED].includes(z))throw Error("Legacy model requested but code missing.");const V=z||p;p=V;const ee=U||m;m=ee;const et=(typeof N=="string"?N.split("+"):N).filter(tt=>!x.includes(tt));return x.push(...et),et.length>0?F(et,B).then(()=>A(N,V,ee,B)):A(N,V,ee,B)},le=(N={},z)=>E(He({id:z,action:"setParameters",payload:{params:N}})),b=async(N,z={},U={blocks:!0,text:!0,hocr:!0,tsv:!0},B)=>E(He({id:B,action:"recognize",payload:{image:await gs(N),options:z,output:U}})),y=(N="Tesseract OCR Result",z=!1,U)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E(He({id:U,action:"getPDF",payload:{title:N,textonly:z}}))),v=async(N,z)=>{if(w)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return E(He({id:z,action:"detect",payload:{image:await gs(N)}}))},S=async()=>(c!==null&&(kh(c),c=null),Promise.resolve());Sh(c,({workerId:N,jobId:z,status:U,action:B,data:V})=>{const ee=`${B}-${z}`;if(U==="resolve"){ms(`[${N}]: Complete ${z}`);let ft=V;B==="recognize"?ft=vh(V):B==="getPDF"&&(ft=Array.from({...V,length:Object.keys(V).length})),u[ee]({jobId:z,data:ft})}else if(U==="reject")if(d[ee](V),B==="load"&&g(V),a)a(V);else throw Error(V);else U==="progress"&&i({...V,userJobId:z})});const R={id:o,worker:c,setResolve:h,setReject:j,load:P,writeText:M,readText:W,removeFile:I,FS:X,loadLanguage:_,initialize:H,reinitialize:Y,setParameters:le,recognize:b,getPDF:y,detect:v,terminate:S};return L().then(()=>F(e)).then(()=>A(e,t,r)).then(()=>k(R)).catch(()=>{}),D};const Ac=Dc,Nh=async(e,t,n)=>{const r=await Ac(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},Ch=async(e,t)=>{const n=await Ac("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Eh={recognize:Nh,detect:Ch},bh={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},zh={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const _h=Hp,Lh=Dc,Ph=Eh,Th=bh,Mh=Oc,Rh=zh,{setLogging:Ih}=Cn;var Fh={languages:Th,OEM:Mh,PSM:Rh,createScheduler:_h,createWorker:Lh,setLogging:Ih,...Ph};const Oh=ys(Fh),Mr={hemoglobin:{min:12.5,max:16,unit:"gm/dl",foods:["Spinach","Red Meat","Pumpkin Seeds"],impact:{low:"You may experience higher fatigue during cardio. Consider lower intensity now.",high:"Rarely caused by high altitude or smoking. Ensure good hydration."}},total_count:{min:4e3,max:11e3,unit:"cells/cumm",foods:["Vitamin C","Garlic","Ginger"],impact:{low:"Immunity might be lower. Skip high-intensity sessions if you feel weak.",high:"Body is fighting something. Rest and recover properly."}},neutrophil:{min:40,max:70,unit:"%",foods:[],impact:{}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{}},eosinophil:{min:2,max:8,unit:"%",foods:[],impact:{}},monocyte:{min:1,max:6,unit:"%",foods:[],impact:{}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},platelet_count:{min:1.5,max:4.5,unit:"Lakhs/cumm",foods:["Papaya Leaf","Pomegranate"],impact:{low:"Careful to avoid injury. High-impact sports are not recommended.",high:"Can indicate inflammation. Focus on recovery."}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory foods"],impact:{high:"High inflammation. Focus on light movement and stretching."}},mcv:{min:80,max:100,unit:"fL",foods:["Vitamin B12","Folic Acid"],impact:{low:"Lower oxygen capacity. Strength training may feel significantly harder."}},mch:{min:27,max:32,unit:"pg",foods:["Iron rich foods"],impact:{low:"Fatigue risk. Focus on foundational strength movements."}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},t3:{min:.85,max:2.68,unit:"nmol/L",foods:["Brazil Nuts"," Seaweed"],impact:{low:"Lowered metabolism. You might find it harder to maintain energy."}},t4:{min:5.1,max:14.1,unit:"ug/dL",foods:["Dairy","Eggs","Fish"],impact:{low:"Similar to T3, watch for sluggishness during workouts."}},tsh:{min:.27,max:4.2,unit:"uIU/mL",foods:["Avoid cruciferous veg if hypothyroid"],impact:{high:"Watch for weight gain and low energy levels during routine."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Low Carb","High Fiber"],impact:{high:"Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.",low:"Potential for dizziness. Have a small snack before exercise."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Complex Carbs","Vegetables"],impact:{high:"Spikes can affect recovery. A 10-min walk after meals is recommended."}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Nuts","Olive Oil"],impact:{high:"Focus on heart-healthy cardio like swimming or brisk walking."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["Avoid Sugar","Eat Fish"],impact:{high:"Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio."}},hdl_cholesterol:{min:40,max:60,unit:"mg/dL",foods:["Avocado","Salmon"],impact:{low:"HIIT or intensive cardio can help boost this 'good' cholesterol."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber","Soy","Almonds"],impact:{high:"Heart health priority. Daily steady movement is mandatory."}},urea:{min:15,max:40,unit:"mg/dL",foods:["Reduce Protein","Hydrate"],impact:{high:"Kidney stress. Hydrate well and limit protein supplement intake temporarily."}},creatinine:{min:.6,max:1.2,unit:"mg/dL",foods:["Reduce Red Meat","Hydrate"],impact:{high:"Ensure excellent hydration; avoid over-exertion in extreme heat."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Avoid Alcohol","Cherries","Vitamin C"],impact:{high:"Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore."}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Hydrate"],impact:{low:"Performance risk. Monitor salt loss during long workout sessions."}},potassium:{min:3.5,max:5.5,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"High risk of muscle cramps. Ensure steady electrolyte intake."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon Water"],impact:{high:"Liver stress. Keep training intensity moderate and skip supplements."}},sgot:{min:5,max:40,unit:"U/L",foods:["Leafy Greens","Coffee"],impact:{high:"Could be muscle damage from training or liver stress. Take a rest day."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole Grains","Avoid Alcohol"],impact:{high:"Focus on recovery. Avoid using pain killers like Tylenol if high."}},alkaline_phosphatase:{min:44,max:147,unit:"IU/L",foods:["Vitamin D"],impact:{low:"Vitamin D deficiency. Impacts bone health and muscle strength."}}},Dh=({onBack:e})=>{const[t,n]=O.useState(null),[r,o]=O.useState(null),[i,a]=O.useState([]),[s,u]=O.useState(!1),[d,x]=O.useState(""),[p,m]=O.useState("hemoglobin"),[w,g]=O.useState(""),[k,D]=O.useState(null),[f,c]=O.useState("basic"),[h,j]=O.useState("checking");O.useEffect(()=>{E();const _=localStorage.getItem("blood_reports");_&&a(JSON.parse(_))},[]);const E=async()=>{const _="http://localhost:5000";try{(await fetch(`${_}/health`)).ok?j("online"):j("offline")}catch{j("offline")}},P=_=>{const F=[];return Object.keys(_).forEach(H=>{const A=parseFloat(_[H]),Y=Mr[H];!Y||isNaN(A)||(H==="hemoglobin"&&(A<10?F.push({condition:"Severe Anemia Risk",risk:"High",color:"#ef4444",advice:"Consult a specialist immediately for iron supplements."}):A<Y.min&&F.push({condition:"Mild Anemia",risk:"Medium",color:"#fbbf24",advice:"Increase intake of spinach, red meat, and Vitamin C."})),(H==="glucose_fasting"||H==="glucose_pp")&&(A>140&&H==="glucose_fasting"?F.push({condition:"Diabetes Risk",risk:"High",color:"#ef4444",advice:"Strict sugar control needed. Monitor Hba1c."}):A>Y.max&&F.push({condition:"Pre-Diabetes Warning",risk:"Medium",color:"#fbbf24",advice:"Reduce carbs/sugar and start daily brisk walking."})),H==="creatinine"&&A>1.5&&F.push({condition:"Kidney Stress",risk:"High",color:"#ef4444",advice:"High hydration needed. Avoid protein supplements temporarily."}),H==="total_count"&&A>12e3&&F.push({condition:"Potential Infection",risk:"Medium",color:"#fbbf24",advice:"Body is fighting inflammation. Rest well."}),(H==="cholesterol"&&A>240||H==="triglycerides"&&A>200)&&F.push({condition:"Cardiovascular Risk",risk:"High",color:"#ef4444",advice:"Avoid saturated fats/fried food. Increase cardio."}))}),F},L=async _=>{u(!0),x("Starting OCR Engine...");try{const{data:{text:F}}=await Oh.recognize(_,"eng",{logger:y=>x(`${y.status} (${Math.round(y.progress*100)}%)`)});console.log("Raw OCR Text:",F);const H=F.split(`
`),A={},Y=y=>y.toLowerCase().replace(/[^a-z0-9.]/g,""),le={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],eosinophil:["eosinophils","eosinophil"],monocyte:["monocytes","monocyte"],basophil:["basophils","basophil"],platelet_count:["platelet count","platelet","plt"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],glucose_fasting:["glucose fasting","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],cholesterol:["total cholesterol","serum cholesterol"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"]};if(H.forEach(y=>{const v=y.toLowerCase().trim();v&&Object.keys(le).forEach(S=>{const N=le[S].find(z=>v.includes(z));if(N&&!A[S]){const U=v.replace(N,"").match(/(\d+(\.\d+)?)/g);if(U&&U.length>0){const B=parseFloat(U[0]);isNaN(B)||(A[S]=B)}}})}),Object.keys(A).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+F.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+F),u(!1);return}const b=P(A);I({date:new Date().toLocaleDateString(),values:A,risks:b})}catch(F){console.error(F),alert("Error parsing image. Please try a clearer photo.")}finally{u(!1),x("")}},M=_=>{const F=_.target.files[0];F&&(F.type.startsWith("image/")?(n(F),f==="advanced"&&h==="online"?W(F):L(F)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},W=async _=>{u(!0),x("Sending to ML Neural Network...");const F=new FormData;F.append("file",_);const H="http://localhost:5000";try{const A=await fetch(`${H}/analyze`,{method:"POST",body:F}),Y=await A.json();if(!A.ok)throw new Error(Y.error||"Server Error");if(console.log("ML Results:",Y),!Y.raw_results||Y.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),L(_);return}}catch(A){console.error(A),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),L(_)}finally{u(!1),x("")}},I=_=>{const F=[],H=[];Object.keys(_.values).forEach(b=>{var N,z;const y=parseFloat(_.values[b]),v=Mr[b];if(!v)return;let S="Normal";y<v.min&&(S="Low"),y>v.max&&(S="High");const R=S==="Low"?(N=v.impact)==null?void 0:N.low:S==="High"?(z=v.impact)==null?void 0:z.high:null;S!=="Normal"&&H.push({parameter:b,status:S,foods:v.foods,fitnessImpact:R}),F.push({parameter:b,value:y,unit:v.unit,range:`${v.min}-${v.max}`,status:S,fitnessImpact:R})});const A=_.risks||[],Y={..._,results:F,suggestions:H,risks:A};o(Y);const le=[Y,...i];a(le),localStorage.setItem("blood_reports",JSON.stringify(le))},X=_=>{var Y,le;if(_.preventDefault(),!w)return;const F=parseFloat(w),H=Mr[p];let A="Normal";F<H.min&&(A="Low"),F>H.max&&(A="High"),D({parameter:p,value:F,unit:H.unit,range:`${H.min}-${H.max}`,status:A,foods:H.foods,fitnessImpact:A==="Low"?(Y=H.impact)==null?void 0:Y.low:A==="High"?(le=H.impact)==null?void 0:le.high:null})};return l.jsxs("div",{className:"blood-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(Kt,{size:24})}),l.jsx("h2",{children:"Blood Evaluation"})]}),r?l.jsxs("div",{className:"results-section fade-in",children:[l.jsxs("div",{className:"results-header",children:[l.jsx("h3",{children:"Report Analysis"}),l.jsx("button",{className:"text-btn",onClick:()=>o(null),children:"Close"})]}),r.risks&&r.risks.length>0&&l.jsxs("div",{className:"risk-container fade-up",children:[l.jsx("h4",{children:"⚠️ AI Health Risk Detection"}),l.jsx("div",{className:"risk-grid",children:r.risks.map((_,F)=>l.jsxs("div",{className:"risk-card",style:{borderLeft:`4px solid ${_.color}`},children:[l.jsxs("div",{className:"risk-header",children:[l.jsx("span",{className:"condition-title",children:_.condition}),l.jsx("span",{className:"risk-badge",style:{background:_.color},children:_.risk})]}),l.jsx("p",{className:"risk-advice",children:_.advice}),l.jsx("button",{className:"view-details",onClick:()=>alert(`Detailed explanation for ${_.condition}: 

This condition was flagged based on your values. Please consult a doctor for verification.`),children:"View Details"})]},F))})]}),l.jsx("div",{className:"params-list",children:r.results.map((_,F)=>l.jsxs("div",{className:"param-card",children:[l.jsxs("div",{className:"param-header",children:[l.jsx("h4",{children:_.parameter.replace(/_/g," ").toUpperCase()}),l.jsxs("span",{className:`status-badge ${_.status.toLowerCase()}`,children:[_.status==="Normal"&&l.jsx(Sp,{size:14}),_.status==="High"&&l.jsx(yp,{size:14}),_.status==="Low"&&l.jsx(vp,{size:14}),_.status]})]}),l.jsxs("div",{className:"param-value",children:[l.jsx("span",{className:"val",children:_.value}),l.jsx("span",{className:"unit",children:_.unit})]}),l.jsxs("p",{className:"range-info",children:["Ref Range: ",_.range]})]},F))}),r.suggestions.length>0&&l.jsxs("div",{className:"suggestions-box",children:[l.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),r.suggestions.map((_,F)=>l.jsxs("div",{className:"suggestion-item",children:[l.jsx("div",{className:"suggestion-header",children:l.jsxs("strong",{children:[_.status," ",_.parameter.replace(/_/g," ").toUpperCase()]})}),_.foods.length>0&&l.jsxs("p",{className:"food-list",children:["💡 ",l.jsx("b",{children:"Diety Tip:"})," Eat ",_.foods.join(", ")]}),_.fitnessImpact&&l.jsxs("p",{className:"fitness-list",children:["⚡ ",l.jsx("b",{children:"Fitness Impact:"})," ",_.fitnessImpact]})]},F))]})]}):l.jsxs("div",{className:"main-content",children:[l.jsxs("div",{className:"card manual-card",children:[l.jsx("h3",{children:"Quick Check"}),l.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),l.jsxs("form",{onSubmit:X,className:"manual-form",children:[l.jsxs("div",{className:"row",children:[l.jsx("select",{className:"input-field",value:p,onChange:_=>{m(_.target.value),D(null)},children:Object.keys(Mr).map(_=>l.jsx("option",{value:_,children:_.replace(/_/g," ").toUpperCase()},_))}),l.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:w,onChange:_=>g(_.target.value),required:!0})]}),l.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",l.jsx(bp,{size:16})]})]}),k&&l.jsxs("div",{className:"manual-result fade-in",children:[l.jsx("div",{className:`result-badge ${k.status.toLowerCase()}`,children:k.status}),l.jsxs("p",{className:"result-text",children:[l.jsxs("strong",{children:[k.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",k.value," ",k.unit,l.jsx("br",{}),l.jsxs("span",{className:"text-muted",children:["Normal: ",k.range]})]}),k.status!=="Normal"&&k.foods.length>0&&l.jsxs("div",{className:"diet-tip",children:[l.jsx("strong",{children:"Tip:"})," Eat ",k.foods.join(", ")]}),k.fitnessImpact&&l.jsxs("div",{className:"fitness-tip",children:[l.jsx("strong",{children:"Fitness Impact:"})," ",k.fitnessImpact]})]})]}),l.jsx("div",{className:"divider",children:"OR"}),l.jsxs("div",{className:"upload-card",children:[l.jsx("div",{className:"icon-circle",children:l.jsx(Tp,{size:32,color:"var(--color-primary)"})}),l.jsx("h3",{children:"Upload Report Image"}),l.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),l.jsxs("div",{className:"scan-mode-toggle",children:[l.jsx("button",{className:`mode-btn ${f==="basic"?"active":""}`,onClick:()=>c("basic"),children:"Basic (Browser)"}),l.jsxs("button",{className:`mode-btn ${f==="advanced"?"active":""}`,onClick:()=>c("advanced"),children:["Advanced (Python ML)",h==="online"&&l.jsx("span",{className:"dot online",title:"Server Online"}),h==="offline"&&l.jsx("span",{className:"dot offline",title:"Server Offline (Run server.py)"})]})]}),l.jsxs("label",{className:"btn-secondary upload-btn",children:[s?d||"Scanning...":"Select Image (JPG/PNG)",l.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:M,disabled:s})]})]}),i.length>0&&l.jsxs("div",{className:"history-section",children:[l.jsx("h3",{children:"Recent Reports"}),i.map((_,F)=>l.jsxs("div",{className:"history-item",onClick:()=>o(_),children:[l.jsx(Xl,{size:18,className:"text-muted"}),l.jsx("span",{children:_.date}),l.jsx("span",{className:"arrow",children:"→"})]},F))]})]}),l.jsx("style",{children:`
        .blood-container {
           padding: var(--spacing-md);
        }
        /* ... Existing Styles ... */
        /* Risk Styles */
        .risk-container {
            background: #fffafa; border: 1px solid #fee2e2; padding: 15px; border-radius: 12px; margin-bottom: 20px;
        }
        .risk-container h4 { color: #b91c1c; margin-top: 0; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
        .risk-grid { display: flex; flex-direction: column; gap: 10px; }
        .risk-card { background: white; padding: 12px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .risk-header { display: flex; justify-content: space-between; margin-bottom: 5px; align-items: center; }
        .condition-title { font-weight: 700; color: #1f2937; }
        .risk-badge { font-size: 10px; color: white; padding: 2px 8px; border-radius: 99px; font-weight: 700; text-transform: uppercase; }
        .risk-advice { font-size: 13px; color: #4b5563; margin: 0; line-height: 1.4; }
        .view-details { margin-top: 8px; font-size: 11px; background: white; border: 1px solid #e5e7eb; padding: 4px 10px; border-radius: 4px; cursor: pointer; }
        
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-lg);
        }
        .back-btn, .text-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
           font-weight: 600;
        }

        .card {
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
           box-shadow: var(--shadow-sm);
           margin-bottom: var(--spacing-lg);
        }

        /* Manual Entry */
        .manual-card h3 { font-size: var(--font-size-base); margin-bottom: 5px; }
        .sub-label { font-size: 12px; color: var(--color-text-secondary); margin-bottom: 15px; }
        .manual-form {
           display: flex;
           flex-direction: column;
           gap: 10px;
        }
        .manual-form .row { display: flex; gap: 10px; }
        .manual-form .input-field { 
            padding: 10px; 
            border: 1px solid #e2e8f0; 
            border-radius: var(--radius-sm); 
            flex: 1;
            font-size: 14px;
        }
        .small-btn { padding: 10px; width: 100%; display: flex; justify-content: center; gap: 8px; }

        .manual-result {
            margin-top: 15px;
            padding: 10px;
            background: #f8fafc;
            border-radius: var(--radius-sm);
            border-left: 3px solid var(--color-text-muted);
        }
        .result-badge {
            display: inline-block;
            font-size: 10px;
            font-weight: bold;
            padding: 2px 8px;
            border-radius: 99px;
            margin-bottom: 5px;
            text-transform: uppercase;
        }
        .result-badge.normal { background: #dcfce7; color: #166534; border-color: #166534; }
        .result-badge.high { background: #fee2e2; color: #991b1b; }
        .result-badge.low { background: #fef9c3; color: #854d0e; }
        
        .diet-tip { margin-top: 8px; font-size: 12px; color: #155724; background: #d4edda; padding: 5px; border-radius: 4px; }

        .divider { text-align: center; color: var(--color-text-muted); font-size: 12px; margin: 20px 0; font-weight: bold; }

        .upload-card {
           text-align: center;
           padding: 20px;
           background: #F8F9FA;
           border: 1px dashed #cbd5e1;
           border-radius: var(--radius-lg);
        }
        .icon-circle {
           width: 60px; height: 60px;
           background: #eef2ff;
           border-radius: 50%;
           display: flex; align-items: center; justify-content: center;
           margin: 0 auto 15px;
        }
        .upload-btn {
           display: inline-block;
           margin-top: 15px;
           font-size: 14px;
           padding: 8px 16px;
           background: white; border: 1px solid #e2e8f0; border-radius: 99px;
        }

        .results-header {
           display: flex; justify-content: space-between; align-items: center;
           margin-bottom: 20px;
        }
        .params-list { display: grid; gap: 10px; }
        .param-card {
           background: white; padding: 15px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
        }
        .param-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .status-badge { font-size: 10px; padding: 2px 8px; border-radius: 99px; font-weight: bold; float: right; }
        .status-badge.normal { background: #dcfce7; color: #166534; }
        .status-badge.high { background: #fee2e2; color: #991b1b; }
        .status-badge.low { background: #fef9c3; color: #854d0e; }

        .param-value .val { font-size: 18px; font-weight: bold; margin-right: 5px; }
        .param-value .unit { font-size: 12px; color: #64748b; }
        .range-info { font-size: 10px; color: #94a3b8; margin-top: 2px; }

        .suggestions-box { margin-top: 20px; background: #fffbeb; padding: 15px; border-radius: var(--radius-md); border-left: 4px solid #f59e0b; }
        .suggestions-box h3 { font-size: 14px; margin-bottom: 12px; color: #92400e; display: flex; align-items: center; gap: 8px; }
        .suggestion-item { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #fef3c7; }
        .suggestion-item:last-child { border-bottom: none; }
        .suggestion-header { margin-bottom: 6px; color: #92400e; }
        .food-list, .fitness-list { font-size: 11px; margin-top: 4px; line-height: 1.4; color: #78350f; }
        .fitness-list { font-style: italic; color: #b45309; }
        .fitness-tip { margin-top: 8px; font-size: 11px; color: #b45309; background: #fffbeb; padding: 8px; border-radius: 4px; border: 1px dashed #f59e0b; }

        .scan-mode-toggle {
            display: flex; justify-content: center; gap: 10px; margin: 15px 0;
        }
        .mode-btn {
            padding: 6px 12px;
            font-size: 12px;
            border: 1px solid #e2e8f0;
            background: white;
            border-radius: 99px;
            cursor: pointer;
            position: relative;
        }
        .mode-btn.active {
            background: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
        }
        .dot {
            width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-left: 5px;
        }
        .dot.online { background: #22c55e; }
        .dot.offline { background: #ef4444; }
      `})]})},Rr={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},Ah=({userProfile:e,onBack:t})=>{const[n,r]=O.useState(null),[o,i]=O.useState(0),[a,s]=O.useState(null);O.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:x,heightCm:p,age:m,gender:w}=e;let g=10*x+6.25*p-5*m;w==="male"?g+=5:g-=161;let k=Math.round(g*1.375);return n==="loss"?k-500:n==="gain"?k+500:k},d=()=>{const x=u();i(x);const p=m=>m[Math.floor(Math.random()*m.length)];s({breakfast:p(Rr.breakfast),lunch:p(Rr.lunch),snack:p(Rr.snack),dinner:p(Rr.dinner)})};return l.jsxs("div",{className:"fitness-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:t,className:"back-btn",children:l.jsx(Kt,{size:24})}),l.jsx("h2",{children:"Fitness Helper"})]}),n?l.jsxs("div",{className:"plan-view fade-in",children:[l.jsxs("div",{className:"summary-card",children:[l.jsxs("div",{className:"cal-target",children:[l.jsx("span",{className:"label",children:"Daily Target"}),l.jsx("h1",{children:o}),l.jsx("span",{className:"unit",children:"kcal"})]}),l.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),l.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),l.jsxs("div",{className:"meals-list",children:[l.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),a&&l.jsxs(l.Fragment,{children:[l.jsx(Ir,{type:"Breakfast",icon:l.jsx(cs,{size:18}),data:a.breakfast}),l.jsx(Ir,{type:"Lunch",icon:l.jsx(Kr,{size:18}),data:a.lunch}),l.jsx(Ir,{type:"Snack",icon:l.jsx(cs,{size:18}),data:a.snack}),l.jsx(Ir,{type:"Dinner",icon:l.jsx(Kr,{size:18}),data:a.dinner})]})]})]}):l.jsxs("div",{className:"goal-selection",children:[l.jsx("h3",{children:"What is your goal?"}),l.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[l.jsx("div",{className:"icon-box loss",children:l.jsx(_p,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Weight Loss"}),l.jsx("p",{children:"Reduce body fat locally."})]})]}),l.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[l.jsx("div",{className:"icon-box maintain",children:l.jsx(Rp,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Maintain Weight"}),l.jsx("p",{children:"Stay healthy and fit."})]})]}),l.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[l.jsx("div",{className:"icon-box gain",children:l.jsx(Kr,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Weight Gain"}),l.jsx("p",{children:"Build muscle mass."})]})]})]}),l.jsx("style",{children:`
        .fitness-container {
           padding: var(--spacing-md);
        }
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-xl);
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .goal-selection {
           display: flex;
           flex-direction: column;
           gap: var(--spacing-md);
        }
        .goal-selection h3 {
           text-align: center;
           margin-bottom: var(--spacing-md);
        }
        .goal-card {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-lg);
           box-shadow: var(--shadow-sm);
           text-align: left;
           width: 100%;
           transition: transform 0.2s;
        }
        .goal-card:active { transform: scale(0.98); }
        .icon-box {
           width: 50px;
           height: 50px;
           border-radius: var(--radius-md);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
        }
        .icon-box.loss { background: #FF6B6B; }
        .icon-box.maintain { background: #4CC9F0; }
        .icon-box.gain { background: #4ECDC4; }
        
        .summary-card {
           background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%);
           color: white;
           padding: var(--spacing-lg);
           border-radius: var(--radius-lg);
           text-align: center;
           margin-bottom: var(--spacing-xl);
           box-shadow: var(--shadow-md);
           position: relative;
        }
        .cal-target h1 {
           font-size: 3rem;
           line-height: 1;
           margin: 10px 0;
        }
        .change-btn {
           position: absolute;
           top: 10px;
           right: 10px;
           background: rgba(255,255,255,0.2);
           color: white;
           font-size: 10px;
           padding: 4px 8px;
           border-radius: var(--radius-full);
        }

        .meals-list h3 {
           margin-bottom: var(--spacing-md);
        }
        .meal-card {
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
           margin-bottom: var(--spacing-sm);
           box-shadow: var(--shadow-sm);
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        .meal-info h4 {
           font-size: var(--font-size-sm);
           color: var(--color-text-secondary);
           margin-bottom: 2px;
           display: flex;
           align-items: center;
           gap: 6px;
        }
        .meal-info p {
           font-weight: 600;
           color: var(--color-text-main);
        }
        .meal-cal {
           font-size: var(--font-size-sm);
           color: var(--color-primary);
           font-weight: bold;
        }
      `})]})},Ir=({type:e,icon:t,data:n})=>l.jsxs("div",{className:"meal-card",children:[l.jsxs("div",{className:"meal-info",children:[l.jsxs("h4",{children:[t," ",e]}),l.jsx("p",{children:n.name})]}),l.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),Uh=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],Bh=({onBack:e})=>{const[t,n]=O.useState(null);return l.jsxs("div",{className:"workout-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(Kt,{size:24})}),l.jsx("h2",{children:"Home Workouts"})]}),l.jsxs("div",{className:"info-card",children:[l.jsx("div",{className:"intro-icon",children:l.jsx(ds,{size:28,color:"#FF6B6B"})}),l.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),l.jsx("div",{className:"workout-list",children:Uh.map(r=>l.jsxs("div",{className:"workout-card",children:[l.jsxs("div",{className:"w-header",children:[l.jsx("h3",{children:r.name}),l.jsxs("span",{className:"cal-badge",children:[l.jsx(ds,{size:12,fill:"currentColor"})," ",r.calories]})]}),l.jsx("p",{className:"w-desc",children:r.desc}),l.jsxs("div",{className:"w-footer",children:[l.jsxs("span",{className:"duration",children:[l.jsx(Lp,{size:14})," ",r.duration]}),l.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&l.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsx("button",{className:"close-btn",onClick:()=>n(null),children:l.jsx(Mp,{size:24})}),l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t.name}),l.jsx("span",{className:"cal-pill",children:t.calories})]}),(()=>{const o={"Jumping Jacks":"iSSAk4XCsRA",Squats:"YaXPRqUwItQ","Push-ups":"IODxDxX7oi4",Burpees:"dZgVxmf6jkA","High Knees":"ZZKpjaVk_2A",Lunges:"QOVaHwm-Q6U",Plank:"pSHjTRCQxIw","Mountain Climbers":"zT-9L3CEcmk"}[t.name]||"UpH7rm0cYbM";return l.jsx("div",{style:{width:"100%",height:"220px",marginBottom:"20px",borderRadius:"12px",overflow:"hidden",background:"#000"},children:l.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1&loop=1&playlist=${o}&controls=0&showinfo=0&modestbranding=1`,title:"Workout Demonstration",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"block"}})})})(),l.jsxs("div",{className:"modal-body",children:[l.jsxs("h4",{children:[l.jsx(Mc,{size:16})," How to do it:"]}),l.jsx("ul",{className:"steps-list",children:t.steps.map((r,o)=>l.jsxs("li",{children:[l.jsx("span",{className:"step-num",children:o+1}),r]},o))})]})]})}),l.jsx("style",{children:`
                .workout-container {
                    padding: var(--spacing-md);
                    padding-bottom: 40px;
                }
                .header-row {
                   display: flex;
                   align-items: center;
                   gap: var(--spacing-md);
                   margin-bottom: var(--spacing-lg);
                }
                .back-btn {
                   background: transparent;
                   color: var(--color-text-main);
                   padding: 0;
                }
                
                .info-card {
                    background: #FFF0F1;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: var(--color-text-main);
                    border: 1px solid #FFD1D1;
                }
                .intro-icon {
                    background: white;
                    padding: 10px;
                    border-radius: 50%;
                    box-shadow: var(--shadow-sm);
                }

                .workout-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .workout-card {
                    background: white;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-sm);
                    transition: transform 0.2s;
                    border: 1px solid #f1f5f9;
                }
                .workout-card:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .w-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                }
                .w-header h3 {
                    font-size: 16px;
                    color: var(--color-text-main);
                }
                .cal-badge {
                    font-size: 11px;
                    background: #ffe4e6;
                    color: #be123c;
                    padding: 4px 8px;
                    border-radius: 99px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-weight: 600;
                }

                .w-desc {
                    font-size: 12px;
                    color: var(--color-text-secondary);
                    margin-bottom: 15px;
                }

                .w-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 10px;
                    border-top: 1px solid #f1f5f9;
                }
                .start-now-btn {
                    background: var(--color-primary);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 99px;
                    font-weight: 600;
                    box-shadow: var(--shadow-md);
                }

                .modal-body h4 { display: flex; align-items: center; gap: 8px; font-size: 14px; margin-bottom: 10px; margin-top: 15px; color: var(--color-text-main); }
                .steps-list { list-style: none; padding: 0; }
                .steps-list li {
                    display: flex; gap: 10px;
                    font-size: 14px; color: var(--color-text-secondary);
                    margin-bottom: 12px;
                    line-height: 1.4;
                }
                .step-num {
                    background: #eef2ff; color: var(--color-primary);
                    font-weight: bold; font-size: 12px;
                    width: 20px; height: 20px;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
            `})]})},Hh=({onBack:e,userProfile:t})=>{const[n,r]=O.useState(()=>{const p=localStorage.getItem("weight_log");return p?JSON.parse(p):[]}),[o,i]=O.useState(""),a=()=>{if(!o||isNaN(o))return;const p={weight:parseFloat(o),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},m=[...n,p];r(m),localStorage.setItem("weight_log",JSON.stringify(m)),i("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const p=n[n.length-1].weight,m=n[n.length-2].weight,w=p-m;return{change:Math.abs(w).toFixed(1),type:w>0?"gain":w<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),x=n.length>0?n[n.length-1].weight:d;return l.jsxs("div",{className:"weight-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(Kt,{size:24})}),l.jsx("h2",{children:"Weight Progress"})]}),l.jsxs("div",{className:"stats-card",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Starting Weight"}),l.jsxs("span",{className:"value",children:[d," kg"]})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Current Weight"}),l.jsxs("span",{className:"value primary",children:[x," kg"]})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Change"}),l.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&l.jsx(Rc,{size:16}),u.type==="loss"&&l.jsx(Pp,{size:16}),u.type==="neutral"&&l.jsx(Cp,{size:16}),u.change," kg"]})]})]}),l.jsxs("div",{className:"input-section",children:[l.jsx("h3",{children:"Log Current Weight"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:o,onChange:p=>i(p.target.value),step:"0.1"}),l.jsx("button",{className:"add-btn",onClick:a,children:"Add"})]})]}),l.jsxs("div",{className:"history-section",children:[l.jsx("h3",{children:"Weight History"}),n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Tc,{size:40,color:"#cbd5e1"}),l.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):l.jsx("div",{className:"history-list",children:[...n].reverse().map((p,m)=>l.jsxs("div",{className:"history-item",children:[l.jsxs("div",{className:"date-badge",children:[l.jsx(kp,{size:14}),p.displayDate]}),l.jsxs("div",{className:"weight-display",children:[p.weight," kg"]})]},m))})]}),l.jsx("style",{children:`
                .weight-container {
                    padding: var(--spacing-md);
                    padding-bottom: 40px;
                }
                .header-row {
                   display: flex;
                   align-items: center;
                   gap: var(--spacing-md);
                   margin-bottom: 20px;
                }
                .back-btn { background: transparent; color: var(--color-text-main); padding: 0; }
                
                .stats-card {
                    background: white;
                    padding: 20px;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 25px;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                }
                .label {
                    font-size: 11px;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                }
                .value {
                    font-size: 18px;
                    font-weight: bold;
                    color: var(--color-text-main);
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .value.primary { color: var(--color-primary); }
                .value.gain { color: #f59e0b; }
                .value.loss { color: #10b981; }
                .value.neutral { color: #64748b; }
                .divider {
                    width: 1px;
                    background: #e2e8f0;
                    align-self: stretch;
                }

                .input-section {
                    background: white;
                    padding: 20px;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                    margin-bottom: 25px;
                }
                .input-section h3 {
                    font-size: 14px;
                    margin-bottom: 15px;
                    color: var(--color-text-main);
                }
                .input-group {
                    display: flex;
                    gap: 10px;
                }
                .input-group input {
                    flex: 1;
                    padding: 12px;
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius-md);
                    font-size: 14px;
                }
                .add-btn {
                    background: var(--color-primary);
                    color: white;
                    padding: 12px 24px;
                    border-radius: var(--radius-md);
                    font-weight: 600;
                    box-shadow: var(--shadow-sm);
                }

                .history-section h3 {
                    font-size: 14px;
                    margin-bottom: 15px;
                    color: var(--color-text-main);
                }
                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 40px 20px;
                    color: var(--color-text-muted);
                    font-size: 13px;
                }
                .history-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .history-item {
                    background: white;
                    padding: 15px;
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-sm);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .date-badge {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 12px;
                    color: var(--color-text-secondary);
                }
                .weight-display {
                    font-size: 16px;
                    font-weight: bold;
                    color: var(--color-primary);
                }
            `})]})},$h=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],Wh=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],Vh=({onBack:e,userProfile:t})=>{const[n,r]=O.useState([{id:1,text:`Hello ${t!=null&&t.name?t.name.split(" ")[0]:""}! I'm your Health Assistant. Ask me about your blood report, diet, or workout.`,sender:"bot"}]),[o,i]=O.useState(""),[a,s]=O.useState(!1),u=O.useRef(null),d=()=>{var w;(w=u.current)==null||w.scrollIntoView({behavior:"smooth"})};O.useEffect(()=>{d()},[n]);const x=w=>{const g=w.toLowerCase(),k=t!=null&&t.diseases?t.diseases.toLowerCase():"",D=t!=null&&t.allergies?t.allergies.toLowerCase():"";return Wh.some(c=>g.includes(c))?k.includes("diabetes")&&(g.includes("sugar")||g.includes("sweet")||g.includes("fruit"))?"Since you mentioned Diabetes, be very careful with high GI fruits like mangoes and chikoo. Opt for apples, berries, and papaya. Monitor your blood sugar regularly and avoid refined sugars completely.":(k.includes("hypertension")||k.includes("bp"))&&(g.includes("salt")||g.includes("diet"))?"For hypertension management, the DASH diet is recommended. Reduce sodium intake (salt), avoid pickles and papad, and increase potassium-rich foods like bananas and leafy greens.":g.includes("protein")?"Protein is the building block. vegetarians: Paneer, Dal, Soy. Non-veg: Chicken, Fish. "+(k.includes("kidney")?"However, since you have kidney concerns, please consult your doctor for the exact protein limit.":"Aim for 1.2g/kg body weight."):g.includes("pre-workout")||g.includes("before gym")?"A banana or oatmeal 45 mins before workout is great energy.":g.includes("post-workout")||g.includes("after gym")?"Post-workout, have a protein source (shake/chicken/eggs) within 45 mins to maximize recovery.":g.includes("muscle")?"Building muscle requires specific resistance training, protein surplus, and sleep. Consistency is key!":g.includes("cardio")?"Cardio improves heart health and burns calories. 150 mins/week is a good target.":g.includes("bmi")?"BMI is a rough indicator. "+(t!=null&&t.weight?`At ${t.weight}kg, your focus should be on body composition (muscle vs fat) rather than just the scale.`:"Check your weight-to-height ratio."):g.includes("diet")||g.includes("food")?D?`Given your allergies to ${D}, ensure you check food labels. Focus on whole, unprocessed foods.`:"A balanced diet with protein, good fats, and fiber is essential. Avoid processed foods.":g.includes("hemoglobin")?"Iron-rich foods (spinach, dates, red meat) help boost hemoglobin. Vitamin C helps absorption.":g.includes("sugar")?"Minimize added sugars. Natural sugars in whole fruits are generally okay in moderation.":g.includes("weight")?"Weight management is about Calorie In vs Calorie Out, quality of food, and hormonal balance.":g.includes("sleep")?"7-9 hours of sleep is non-negotiable for recovery and mental health.":"That's a good question. Based on general fitness guidelines, consistency in diet and exercise is 90% of the game. How is your sleep lately?":"I apologize, but I'm specialized in Health, Blood Reports, Nutrition, and Fitness. Ask me about your protein intake or blood levels! 🏥"},p=w=>{if(w.preventDefault(),!o.trim())return;const g={id:Date.now(),text:o,sender:"user"};r(k=>[...k,g]),i(""),s(!0),setTimeout(()=>{const k={id:Date.now()+1,text:x(g.text),sender:"bot"};r(D=>[...D,k]),s(!1)},1200)},m=w=>{const g={id:Date.now(),text:w.q,sender:"user"};r(k=>[...k,g]),s(!0),setTimeout(()=>{const k={id:Date.now()+1,text:w.a,sender:"bot"};r(D=>[...D,k]),s(!1)},1200)};return l.jsxs("div",{className:"chat-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(Kt,{size:24})}),l.jsx("h2",{children:"Health Assistant"})]}),l.jsxs("div",{className:"chat-window",children:[n.map(w=>l.jsxs("div",{className:`message-row ${w.sender}`,children:[w.sender==="bot"&&l.jsx("div",{className:"avatar bot",children:l.jsx(us,{size:16})}),l.jsx("div",{className:"message-bubble",children:w.text}),w.sender==="user"&&l.jsx("div",{className:"avatar user",children:l.jsx(Ic,{size:16})})]},w.id)),a&&l.jsxs("div",{className:"message-row bot",children:[l.jsx("div",{className:"avatar bot",children:l.jsx(us,{size:16})}),l.jsxs("div",{className:"message-bubble typing",children:[l.jsx("span",{children:"."}),l.jsx("span",{children:"."}),l.jsx("span",{children:"."})]})]}),l.jsx("div",{ref:u})]}),l.jsxs("div",{className:"input-section",children:[l.jsx("div",{className:"chips-row",children:$h.map((w,g)=>l.jsx("button",{className:"chip",onClick:()=>m(w),disabled:a,children:w.q},g))}),l.jsxs("form",{onSubmit:p,className:"input-form",children:[l.jsx("input",{type:"text",value:o,onChange:w=>i(w.target.value),placeholder:"Ask about health...",className:"chat-input"}),l.jsx("button",{type:"submit",className:"send-btn",children:l.jsx(zp,{size:20})})]})]}),l.jsx("style",{children:`
        .chat-container {
           padding: var(--spacing-md);
           display: flex;
           flex-direction: column;
           height: 100vh;
           max-height: 100vh;
        }
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-md);
           flex-shrink: 0;
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .chat-window {
           flex: 1;
           background: #f8fafc;
           border-radius: var(--radius-lg);
           padding: var(--spacing-md);
           overflow-y: auto;
           display: flex;
           flex-direction: column;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-md);
           border: 1px solid #e2e8f0;
        }
        .message-row {
           display: flex;
           align-items: flex-end;
           gap: 8px;
        }
        .message-row.user {
           justify-content: flex-end;
        }
        .avatar {
           width: 28px;
           height: 28px;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
        }
        .avatar.bot { background: #7209B7; color: white; }
        .avatar.user { background: var(--color-primary); color: white; }

        .message-bubble {
           max-width: 75%;
           padding: 10px 14px;
           border-radius: 12px;
           font-size: var(--font-size-sm);
           line-height: 1.4;
           box-shadow: var(--shadow-sm);
        }
        .bot .message-bubble {
           background: white;
           color: var(--color-text-main);
           border-bottom-left-radius: 4px;
        }
        .user .message-bubble {
           background: var(--color-primary);
           color: white;
           border-bottom-right-radius: 4px;
        }

        .input-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex-shrink: 0;
        }

        .chips-row {
           display: flex;
           overflow-x: auto;
           gap: 8px;
           padding-bottom: 5px;
           scrollbar-width: none;
        }
        .chip {
           white-space: nowrap;
           background: white;
           border: 1px solid var(--color-primary);
           color: var(--color-primary);
           padding: 6px 12px;
           border-radius: var(--radius-full);
           font-size: 11px;
           transition: all 0.2s;
        }
        .chip:hover {
           background: var(--color-primary);
           color: white;
        }

        .input-form {
            display: flex;
            gap: 10px;
            padding-bottom: 5px; /* for safe area */
        }
        .chat-input {
            flex: 1;
            padding: 12px 16px;
            border-radius: 99px;
            border: 1px solid #cbd5e1;
            font-size: 14px;
            background: white;
        }
        .chat-input:focus { border-color: var(--color-primary); outline: none; }
        .send-btn {
            width: 46px; 
            height: 46px;
            background: var(--color-primary);
            color: white;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            box-shadow: var(--shadow-md);
        }

        .typing span {
           animation: blink 1.4s infinite both;
           margin: 0 1px;
        }
        .typing span:nth-child(2) { animation-delay: 0.2s; }
        .typing span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes blink {
           0% { opacity: 0.2; }
           20% { opacity: 1; }
           100% { opacity: 0.2; }
        }
      `})]})},Qh=({message:e,onClose:t})=>(O.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),l.jsxs("div",{className:"toast-notification",children:[l.jsx("div",{className:"icon-bg",children:l.jsx(xp,{size:20})}),l.jsxs("div",{className:"content",children:[l.jsx("h4",{children:"Reminder"}),l.jsx("p",{children:e})]}),l.jsx("button",{onClick:t,className:"close-btn",children:"×"}),l.jsx("style",{children:`
         .toast-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            color: var(--color-text-main);
            padding: 12px 16px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 1000;
            animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            border-left: 4px solid var(--color-primary);
            max-width: 90vw;
         }
         
         .icon-bg {
            background: #FFF0F1;
            color: var(--color-primary);
            padding: 8px;
            border-radius: 50%;
            display: flex;
         }

         .content h4 {
            font-size: var(--font-size-sm);
            margin-bottom: 2px;
         }

         .content p {
            font-size: var(--font-size-xs);
            color: var(--color-text-secondary);
         }

         .close-btn {
            background: transparent;
            font-size: 20px;
            color: #999;
            margin-left: 8px;
         }

         @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
         }
       `})]}));function Gh(){const e=localStorage.getItem("user_profile"),[t,n]=O.useState(e?"dashboard":"login"),[r,o]=O.useState(null),[i,a]=O.useState(e?JSON.parse(e):null),[s,u]=O.useState(null);_s.useEffect(()=>{const w=localStorage.getItem("user_profile");w&&a(JSON.parse(w));const g=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],k=setInterval(()=>{const D=g[Math.floor(Math.random()*g.length)];u(D)},12e4);return()=>clearInterval(k)},[]);const d=w=>{o(w),localStorage.getItem("user_profile")?(a(JSON.parse(localStorage.getItem("user_profile"))),n("dashboard")):n("profile_setup")},x=w=>{a(w),localStorage.setItem("user_profile",JSON.stringify(w)),n("dashboard")},p=w=>{n(w)},m=()=>{localStorage.removeItem("user_profile"),o(null),a(null),n("login")};return l.jsxs("div",{className:"app-container",children:[s&&l.jsx(Qh,{message:s,onClose:()=>u(null)}),t==="login"&&l.jsx(pp,{onLogin:d}),t==="profile_setup"&&l.jsx(hp,{onComplete:x}),t==="dashboard"&&l.jsx(Fp,{userName:i==null?void 0:i.name,onNavigate:p,onLogout:m}),t==="bmi"&&l.jsx(Op,{userProfile:i,onBack:()=>n("dashboard")}),t==="blood"&&l.jsx(Dh,{onBack:()=>n("dashboard")}),t==="fitness"&&l.jsx(Ah,{userProfile:i,onBack:()=>n("dashboard")}),t==="homeworkout"&&l.jsx(Bh,{onBack:()=>n("dashboard")}),t==="weightprogress"&&l.jsx(Hh,{userProfile:i,onBack:()=>n("dashboard")}),t==="chat"&&l.jsx(Vh,{userProfile:i,onBack:()=>n("dashboard")})]})}ui.createRoot(document.getElementById("root")).render(l.jsx(_s.StrictMode,{children:l.jsx(Gh,{})}));
