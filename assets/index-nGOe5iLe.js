(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ws(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ks={exports:{}},ko={},Ss={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Hc=Symbol.for("react.portal"),Wc=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Xc=Symbol.for("react.memo"),Zc=Symbol.for("react.lazy"),ta=Symbol.iterator;function qc(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ns=Object.assign,Cs={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Cs,this.updater=n||js}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=Sn.prototype;function ol(e,t,n){this.props=e,this.context=t,this.refs=Cs,this.updater=n||js}var il=ol.prototype=new Es;il.constructor=ol;Ns(il,Sn.prototype);il.isPureReactComponent=!0;var na=Array.isArray,bs=Object.prototype.hasOwnProperty,ll={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)bs.call(t,r)&&!_s.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:i,ref:l,props:o,_owner:ll.current}}function ed(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function al(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?td(""+e.key):t.toString(36)}function Fr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case cr:case Hc:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Fo(l,0):r,na(o)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Fr(o,t,n,"",function(d){return d})):o!=null&&(al(o)&&(o=ed(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ra,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Fo(i,s);l+=Fr(i,t,n,u,o)}else if(u=qc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Fo(i,s++),l+=Fr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mr(e,t,n){if(e==null)return e;var r=[],o=0;return Fr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Dr={transition:null},rd={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:ll};function Ls(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Sn;H.Fragment=Wc;H.Profiler=Qc;H.PureComponent=ol;H.StrictMode=Vc;H.Suspense=Jc;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rd;H.act=Ls;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ns({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ll.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)bs.call(t,u)&&!_s.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:i,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gc,_context:e},e.Consumer=e};H.createElement=zs;H.createFactory=function(e){var t=zs.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Yc,render:e}};H.isValidElement=al;H.lazy=function(e){return{$$typeof:Zc,_payload:{_status:-1,_result:e},_init:nd}};H.memo=function(e,t){return{$$typeof:Xc,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};H.unstable_act=Ls;H.useCallback=function(e,t){return Se.current.useCallback(e,t)};H.useContext=function(e){return Se.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};H.useEffect=function(e,t){return Se.current.useEffect(e,t)};H.useId=function(){return Se.current.useId()};H.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Se.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};H.useRef=function(e){return Se.current.useRef(e)};H.useState=function(e){return Se.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Se.current.useTransition()};H.version="18.3.1";Ss.exports=H;var D=Ss.exports;const Ps=ws(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=D,id=Symbol.for("react.element"),ld=Symbol.for("react.fragment"),ad=Object.prototype.hasOwnProperty,sd=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ud={key:!0,ref:!0,__self:!0,__source:!0};function Ts(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ad.call(t,r)&&!ud.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:id,type:e,key:i,ref:l,props:o,_owner:sd.current}}ko.Fragment=ld;ko.jsx=Ts;ko.jsxs=Ts;ks.exports=ko;var a=ks.exports,ci={},Rs={exports:{}},Re={},Ms={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,w){var v=b.length;b.push(w);e:for(;0<v;){var S=v-1>>>1,M=b[S];if(0<o(M,w))b[S]=w,b[v]=M,v=S;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var w=b[0],v=b.pop();if(v!==w){b[0]=v;e:for(var S=0,M=b.length,N=M>>>1;S<N;){var _=2*(S+1)-1,U=b[_],B=_+1,V=b[B];if(0>o(U,v))B<M&&0>o(V,U)?(b[S]=V,b[B]=v,S=B):(b[S]=U,b[_]=v,S=_);else if(B<M&&0>o(V,v))b[S]=V,b[B]=v,S=B;else break e}}return w}function o(b,w){var v=b.sortIndex-w.sortIndex;return v!==0?v:b.id-w.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],y=1,p=null,m=3,x=!1,g=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var w=n(d);w!==null;){if(w.callback===null)r(d);else if(w.startTime<=b)r(d),w.sortIndex=w.expirationTime,t(u,w);else break;w=n(d)}}function j(b){if(k=!1,h(b),!g)if(n(u)!==null)g=!0,Y(E);else{var w=n(d);w!==null&&le(j,w.startTime-b)}}function E(b,w){g=!1,k&&(k=!1,f(R),R=-1),x=!0;var v=m;try{for(h(w),p=n(u);p!==null&&(!(p.expirationTime>w)||b&&!X());){var S=p.callback;if(typeof S=="function"){p.callback=null,m=p.priorityLevel;var M=S(p.expirationTime<=w);w=e.unstable_now(),typeof M=="function"?p.callback=M:p===n(u)&&r(u),h(w)}else r(u);p=n(u)}if(p!==null)var N=!0;else{var _=n(d);_!==null&&le(j,_.startTime-w),N=!1}return N}finally{p=null,m=v,x=!1}}var P=!1,L=null,R=-1,W=5,O=-1;function X(){return!(e.unstable_now()-O<W)}function z(){if(L!==null){var b=e.unstable_now();O=b;var w=!0;try{w=L(!0,b)}finally{w?F():(P=!1,L=null)}}else P=!1}var F;if(typeof c=="function")F=function(){c(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,A=$.port2;$.port1.onmessage=z,F=function(){A.postMessage(null)}}else F=function(){I(z,0)};function Y(b){L=b,P||(P=!0,F())}function le(b,w){R=I(function(){b(e.unstable_now())},w)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,Y(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var w=3;break;default:w=m}var v=m;m=w;try{return b()}finally{m=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,w){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var v=m;m=b;try{return w()}finally{m=v}},e.unstable_scheduleCallback=function(b,w,v){var S=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?S+v:S):v=S,b){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=v+M,b={id:y++,callback:w,priorityLevel:b,startTime:v,expirationTime:M,sortIndex:-1},v>S?(b.sortIndex=v,t(d,b),n(u)===null&&b===n(d)&&(k?(f(R),R=-1):k=!0,le(j,v-S))):(b.sortIndex=M,t(u,b),g||x||(g=!0,Y(E))),b},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(b){var w=m;return function(){var v=m;m=w;try{return b.apply(this,arguments)}finally{m=v}}}})(Is);Ms.exports=Is;var cd=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=D,Te=cd;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Os=new Set,Gn={};function Qt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Os.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa={},ia={};function pd(e){return di.call(ia,e)?!0:di.call(oa,e)?!1:fd.test(e)?ia[e]=!0:(oa[e]=!0,!1)}function hd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function md(e,t,n,r){if(t===null||typeof t>"u"||hd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var sl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sl,ul);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sl,ul);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sl,ul);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(md(t,n,o,r)&&(n=null),r||o===null?pd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),Fs=Symbol.for("react.provider"),Ds=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),As=Symbol.for("react.offscreen"),la=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Do;function Mn(e){if(Do===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||""}return`
`+Do+e}var Ao=!1;function Uo(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function gd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Jt:return"Portal";case fi:return"Profiler";case dl:return"StrictMode";case pi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ds:return(e.displayName||"Context")+".Consumer";case Fs:return(e._context.displayName||"Context")+".Provider";case fl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:mi(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return mi(e(t))}catch{}}return null}function vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mi(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yd(e){var t=Us(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=yd(e))}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Us(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $s(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function vi(e,t){$s(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(In(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function Hs(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){xd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Gs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wd=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,t){if(t){if(wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,cn=null,dn=null;function da(e){if(e=pr(e)){if(typeof Ni!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Eo(t),Ni(e.stateNode,e.type,t))}}function Ks(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Ys(){if(cn){var e=cn,t=dn;if(dn=cn=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Js(e,t){return e(t)}function Xs(){}var Bo=!1;function Zs(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Js(e,t,n)}finally{Bo=!1,(cn!==null||dn!==null)&&(Xs(),Ys())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ci=!1;if(at)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Ci=!1}function kd(e,t,n,r,o,i,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var An=!1,Xr=null,Zr=!1,Ei=null,Sd={onError:function(e){An=!0,Xr=e}};function jd(e,t,n,r,o,i,l,s,u){An=!1,Xr=null,kd.apply(Sd,arguments)}function Nd(e,t,n,r,o,i,l,s,u){if(jd.apply(this,arguments),An){if(An){var d=Xr;An=!1,Xr=null}else throw Error(C(198));Zr||(Zr=!0,Ei=d)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Gt(e)!==e)throw Error(C(188))}function Cd(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fa(o),e;if(i===r)return fa(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function eu(e){return e=Cd(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tu(e);if(t!==null)return t;e=e.sibling}return null}var nu=Te.unstable_scheduleCallback,pa=Te.unstable_cancelCallback,Ed=Te.unstable_shouldYield,bd=Te.unstable_requestPaint,ae=Te.unstable_now,_d=Te.unstable_getCurrentPriorityLevel,ml=Te.unstable_ImmediatePriority,ru=Te.unstable_UserBlockingPriority,qr=Te.unstable_NormalPriority,zd=Te.unstable_LowPriority,ou=Te.unstable_IdlePriority,So=null,Ze=null;function Ld(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Rd,Pd=Math.log,Td=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Pd(e)/Td|0)|0}var xr=64,wr=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=On(s):(i&=l,i!==0&&(r=On(i)))}else l=n&~o,l!==0?r=On(l):i!==0&&(r=On(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Md(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Qe(i),s=1<<l,u=o[l];u===-1?(!(s&n)||s&r)&&(o[l]=Md(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function $o(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var au,vl,su,uu,cu,_i=!1,kr=[],wt=null,kt=null,St=null,Jn=new Map,Xn=new Map,gt=[],Fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function _n(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dd(e,t,n,r,o){switch(t){case"focusin":return wt=_n(wt,e,t,n,r,o),!0;case"dragenter":return kt=_n(kt,e,t,n,r,o),!0;case"mouseover":return St=_n(St,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Jn.set(i,_n(Jn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xn.set(i,_n(Xn.get(i)||null,e,t,n,r,o)),!0}return!1}function du(e){var t=Ot(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=qs(n),t!==null){e.blockedOn=t,cu(e.priority,function(){su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=pr(n),t!==null&&vl(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Ar(e)&&n.delete(t)}function Ad(){_i=!1,wt!==null&&Ar(wt)&&(wt=null),kt!==null&&Ar(kt)&&(kt=null),St!==null&&Ar(St)&&(St=null),Jn.forEach(ma),Xn.forEach(ma)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Ad)))}function Zn(e){function t(o){return zn(o,e)}if(0<kr.length){zn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&zn(wt,e),kt!==null&&zn(kt,e),St!==null&&zn(St,e),Jn.forEach(t),Xn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)du(n),n.blockedOn===null&&gt.shift()}var fn=dt.ReactCurrentBatchConfig,to=!0;function Ud(e,t,n,r){var o=G,i=fn.transition;fn.transition=null;try{G=1,yl(e,t,n,r)}finally{G=o,fn.transition=i}}function Bd(e,t,n,r){var o=G,i=fn.transition;fn.transition=null;try{G=4,yl(e,t,n,r)}finally{G=o,fn.transition=i}}function yl(e,t,n,r){if(to){var o=zi(e,t,n,r);if(o===null)Zo(e,t,r,no,n),ha(e,r);else if(Dd(o,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<Fd.indexOf(e)){for(;o!==null;){var i=pr(o);if(i!==null&&au(i),i=zi(e,t,n,r),i===null&&Zo(e,t,r,no,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var no=null;function zi(e,t,n,r){if(no=null,e=hl(r),e=Ot(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case ml:return 1;case ru:return 4;case qr:case zd:return 16;case ou:return 536870912;default:return 16}default:return 16}}var yt=null,xl=null,Ur=null;function pu(){if(Ur)return Ur;var e,t=xl,n=t.length,r,o="value"in yt?yt.value:yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ur=o.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ga(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ga,this.isPropagationStopped=ga,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Me(jn),fr=oe({},jn,{view:0,detail:0}),$d=Me(fr),Ho,Wo,Ln,jo=oe({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Ho=e.screenX-Ln.screenX,Wo=e.screenY-Ln.screenY):Wo=Ho=0,Ln=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),va=Me(jo),Hd=oe({},jo,{dataTransfer:0}),Wd=Me(Hd),Vd=oe({},fr,{relatedTarget:0}),Vo=Me(Vd),Qd=oe({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=Me(Qd),Kd=oe({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=Me(Kd),Jd=oe({},jn,{data:0}),ya=Me(Jd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qd[e])?!!t[e]:!1}function kl(){return ef}var tf=oe({},fr,{key:function(e){if(e.key){var t=Xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=Me(tf),rf=oe({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=Me(rf),of=oe({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),lf=Me(of),af=oe({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=Me(af),uf=oe({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=Me(uf),df=[9,13,27,32],Sl=at&&"CompositionEvent"in window,Un=null;at&&"documentMode"in document&&(Un=document.documentMode);var ff=at&&"TextEvent"in window&&!Un,hu=at&&(!Sl||Un&&8<Un&&11>=Un),wa=" ",ka=!1;function mu(e,t){switch(e){case"keyup":return df.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function pf(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function hf(e,t){if(Zt)return e==="compositionend"||!Sl&&mu(e,t)?(e=pu(),Ur=xl=yt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hu&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function vu(e,t,n,r){Ks(r),t=ro(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,qn=null;function gf(e){_u(e,0)}function No(e){var t=tn(e);if(Bs(t))return e}function vf(e,t){if(e==="change")return t}var yu=!1;if(at){var Qo;if(at){var Go="oninput"in document;if(!Go){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),Go=typeof ja.oninput=="function"}Qo=Go}else Qo=!1;yu=Qo&&(!document.documentMode||9<document.documentMode)}function Na(){Bn&&(Bn.detachEvent("onpropertychange",xu),qn=Bn=null)}function xu(e){if(e.propertyName==="value"&&No(qn)){var t=[];vu(t,qn,e,hl(e)),Zs(gf,t)}}function yf(e,t,n){e==="focusin"?(Na(),Bn=t,qn=n,Bn.attachEvent("onpropertychange",xu)):e==="focusout"&&Na()}function xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(qn)}function wf(e,t){if(e==="click")return No(t)}function kf(e,t){if(e==="input"||e==="change")return No(t)}function Sf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Sf;function er(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!di.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ea(e,t){var n=Ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ca(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jf(e){var t=ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ea(n,i);var l=Ea(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nf=at&&"documentMode"in document&&11>=document.documentMode,qt=null,Li=null,$n=null,Pi=!1;function ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pi||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&er($n,r)||($n=r,r=ro(Li,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Ko={},Su={};at&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Co(e){if(Ko[e])return Ko[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Su)return Ko[e]=t[n];return e}var ju=Co("animationend"),Nu=Co("animationiteration"),Cu=Co("animationstart"),Eu=Co("transitionend"),bu=new Map,_a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){bu.set(e,t),Qt(t,[e])}for(var Yo=0;Yo<_a.length;Yo++){var Jo=_a[Yo],Cf=Jo.toLowerCase(),Ef=Jo[0].toUpperCase()+Jo.slice(1);Lt(Cf,"on"+Ef)}Lt(ju,"onAnimationEnd");Lt(Nu,"onAnimationIteration");Lt(Cu,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Eu,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nd(r,t,void 0,e),e.currentTarget=null}function _u(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;za(o,s,d),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;za(o,s,d),i=u}}}if(Zr)throw e=Ei,Zr=!1,Ei=null,e}function Z(e,t){var n=t[Oi];n===void 0&&(n=t[Oi]=new Set);var r=e+"__bubble";n.has(r)||(zu(t,e,2,!1),n.add(r))}function Xo(e,t,n){var r=0;t&&(r|=4),zu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,Os.forEach(function(n){n!=="selectionchange"&&(bf.has(n)||Xo(n,!1,e),Xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Xo("selectionchange",!1,t))}}function zu(e,t,n,r){switch(fu(t)){case 1:var o=Ud;break;case 4:o=Bd;break;default:o=yl}n=o.bind(null,t,n,e),o=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Ot(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Zs(function(){var d=i,y=hl(n),p=[];e:{var m=bu.get(e);if(m!==void 0){var x=wl,g=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":x=nf;break;case"focusin":g="focus",x=Vo;break;case"focusout":g="blur",x=Vo;break;case"beforeblur":case"afterblur":x=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=lf;break;case ju:case Nu:case Cu:x=Gd;break;case Eu:x=sf;break;case"scroll":x=$d;break;case"wheel":x=cf;break;case"copy":case"cut":case"paste":x=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=xa}var k=(t&4)!==0,I=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,h;c!==null;){h=c;var j=h.stateNode;if(h.tag===5&&j!==null&&(h=j,f!==null&&(j=Yn(c,f),j!=null&&k.push(nr(c,j,h)))),I)break;c=c.return}0<k.length&&(m=new x(m,g,null,n,y),p.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ji&&(g=n.relatedTarget||n.fromElement)&&(Ot(g)||g[st]))break e;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=d,g=g?Ot(g):null,g!==null&&(I=Gt(g),g!==I||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=d),x!==g)){if(k=va,j="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=xa,j="onPointerLeave",f="onPointerEnter",c="pointer"),I=x==null?m:tn(x),h=g==null?m:tn(g),m=new k(j,c+"leave",x,n,y),m.target=I,m.relatedTarget=h,j=null,Ot(y)===d&&(k=new k(f,c+"enter",g,n,y),k.target=h,k.relatedTarget=I,j=k),I=j,x&&g)t:{for(k=x,f=g,c=0,h=k;h;h=Yt(h))c++;for(h=0,j=f;j;j=Yt(j))h++;for(;0<c-h;)k=Yt(k),c--;for(;0<h-c;)f=Yt(f),h--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=Yt(k),f=Yt(f)}k=null}else k=null;x!==null&&La(p,m,x,k,!1),g!==null&&I!==null&&La(p,I,g,k,!0)}}e:{if(m=d?tn(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=vf;else if(Sa(m))if(yu)E=kf;else{E=xf;var P=yf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=wf);if(E&&(E=E(e,d))){vu(p,E,n,y);break e}P&&P(e,m,d),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&yi(m,"number",m.value)}switch(P=d?tn(d):window,e){case"focusin":(Sa(P)||P.contentEditable==="true")&&(qt=P,Li=d,$n=null);break;case"focusout":$n=Li=qt=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,ba(p,n,y);break;case"selectionchange":if(Nf)break;case"keydown":case"keyup":ba(p,n,y)}var L;if(Sl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Zt?mu(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(hu&&n.locale!=="ko"&&(Zt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Zt&&(L=pu()):(yt=y,xl="value"in yt?yt.value:yt.textContent,Zt=!0)),P=ro(d,R),0<P.length&&(R=new ya(R,e,null,n,y),p.push({event:R,listeners:P}),L?R.data=L:(L=gu(n),L!==null&&(R.data=L)))),(L=ff?pf(e,n):hf(e,n))&&(d=ro(d,"onBeforeInput"),0<d.length&&(y=new ya("onBeforeInput","beforeinput",null,n,y),p.push({event:y,listeners:d}),y.data=L))}_u(p,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yn(e,n),i!=null&&r.unshift(nr(e,i,o)),i=Yn(e,t),i!=null&&r.push(nr(e,i,o))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Yn(n,i),u!=null&&l.unshift(nr(n,u,s))):o||(u=Yn(n,i),u!=null&&l.push(nr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var _f=/\r\n?/g,zf=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(zf,"")}function Cr(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(C(425))}function oo(){}var Ti=null,Ri=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ii=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Ta=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ta<"u"?function(e){return Ta.resolve(null).then(e).catch(Tf)}:Ii;function Tf(e){setTimeout(function(){throw e})}function qo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Nn,rr="__reactProps$"+Nn,st="__reactContainer$"+Nn,Oi="__reactEvents$"+Nn,Rf="__reactListeners$"+Nn,Mf="__reactHandles$"+Nn;function Ot(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ra(e);e!==null;){if(n=e[Xe])return n;e=Ra(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Eo(e){return e[rr]||null}var Fi=[],nn=-1;function Pt(e){return{current:e}}function q(e){0>nn||(e.current=Fi[nn],Fi[nn]=null,nn--)}function J(e,t){nn++,Fi[nn]=e.current,e.current=t}var zt={},xe=Pt(zt),Ee=Pt(!1),Bt=zt;function gn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function io(){q(Ee),q(xe)}function Ma(e,t,n){if(xe.current!==zt)throw Error(C(168));J(xe,t),J(Ee,n)}function Lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,vd(e)||"Unknown",o));return oe({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Bt=xe.current,J(xe,e),J(Ee,Ee.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Lu(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,q(Ee),q(xe),J(xe,e)):q(Ee),J(Ee,n)}var rt=null,bo=!1,ei=!1;function Pu(e){rt===null?rt=[e]:rt.push(e)}function If(e){bo=!0,Pu(e)}function Tt(){if(!ei&&rt!==null){ei=!0;var e=0,t=G;try{var n=rt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,bo=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),nu(ml,Tt),o}finally{G=t,ei=!1}}return null}var rn=[],on=0,ao=null,so=0,Ie=[],Oe=0,$t=null,ot=1,it="";function Mt(e,t){rn[on++]=so,rn[on++]=ao,ao=e,so=t}function Tu(e,t,n){Ie[Oe++]=ot,Ie[Oe++]=it,Ie[Oe++]=$t,$t=e;var r=ot;e=it;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var i=32-Qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ot=1<<32-Qe(t)+o|n<<o|r,it=i+e}else ot=1<<i|n<<o|r,it=e}function Nl(e){e.return!==null&&(Mt(e,1),Tu(e,1,0))}function Cl(e){for(;e===ao;)ao=rn[--on],rn[on]=null,so=rn[--on],rn[on]=null;for(;e===$t;)$t=Ie[--Oe],Ie[Oe]=null,it=Ie[--Oe],Ie[Oe]=null,ot=Ie[--Oe],Ie[Oe]=null}var Pe=null,Le=null,te=!1,Ve=null;function Ru(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Le=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Le=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(te){var t=Le;if(t){var n=t;if(!Oa(e,t)){if(Di(e))throw Error(C(418));t=jt(n.nextSibling);var r=Pe;t&&Oa(e,t)?Ru(r,n):(e.flags=e.flags&-4097|2,te=!1,Pe=e)}}else{if(Di(e))throw Error(C(418));e.flags=e.flags&-4097|2,te=!1,Pe=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Er(e){if(e!==Pe)return!1;if(!te)return Fa(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=Le)){if(Di(e))throw Mu(),Error(C(418));for(;t;)Ru(e,t),t=jt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Pe?jt(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=Le;e;)e=jt(e.nextSibling)}function vn(){Le=Pe=null,te=!1}function El(e){Ve===null?Ve=[e]:Ve.push(e)}var Of=dt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Da(e){var t=e._init;return t(e._payload)}function Iu(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=bt(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,h,j){return c===null||c.tag!==6?(c=ai(h,f.mode,j),c.return=f,c):(c=o(c,h),c.return=f,c)}function u(f,c,h,j){var E=h.type;return E===Xt?y(f,c,h.props.children,j,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Da(E)===c.type)?(j=o(c,h.props),j.ref=Pn(f,c,h),j.return=f,j):(j=Kr(h.type,h.key,h.props,null,f.mode,j),j.ref=Pn(f,c,h),j.return=f,j)}function d(f,c,h,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=si(h,f.mode,j),c.return=f,c):(c=o(c,h.children||[]),c.return=f,c)}function y(f,c,h,j,E){return c===null||c.tag!==7?(c=Ut(h,f.mode,j,E),c.return=f,c):(c=o(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ai(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return h=Kr(c.type,c.key,c.props,null,f.mode,h),h.ref=Pn(f,null,c),h.return=f,h;case Jt:return c=si(c,f.mode,h),c.return=f,c;case ht:var j=c._init;return p(f,j(c._payload),h)}if(In(c)||En(c))return c=Ut(c,f.mode,h,null),c.return=f,c;br(f,c)}return null}function m(f,c,h,j){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(f,c,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gr:return h.key===E?u(f,c,h,j):null;case Jt:return h.key===E?d(f,c,h,j):null;case ht:return E=h._init,m(f,c,E(h._payload),j)}if(In(h)||En(h))return E!==null?null:y(f,c,h,j,null);br(f,h)}return null}function x(f,c,h,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(h)||null,s(c,f,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case gr:return f=f.get(j.key===null?h:j.key)||null,u(c,f,j,E);case Jt:return f=f.get(j.key===null?h:j.key)||null,d(c,f,j,E);case ht:var P=j._init;return x(f,c,h,P(j._payload),E)}if(In(j)||En(j))return f=f.get(h)||null,y(c,f,j,E,null);br(c,j)}return null}function g(f,c,h,j){for(var E=null,P=null,L=c,R=c=0,W=null;L!==null&&R<h.length;R++){L.index>R?(W=L,L=null):W=L.sibling;var O=m(f,L,h[R],j);if(O===null){L===null&&(L=W);break}e&&L&&O.alternate===null&&t(f,L),c=i(O,c,R),P===null?E=O:P.sibling=O,P=O,L=W}if(R===h.length)return n(f,L),te&&Mt(f,R),E;if(L===null){for(;R<h.length;R++)L=p(f,h[R],j),L!==null&&(c=i(L,c,R),P===null?E=L:P.sibling=L,P=L);return te&&Mt(f,R),E}for(L=r(f,L);R<h.length;R++)W=x(L,f,R,h[R],j),W!==null&&(e&&W.alternate!==null&&L.delete(W.key===null?R:W.key),c=i(W,c,R),P===null?E=W:P.sibling=W,P=W);return e&&L.forEach(function(X){return t(f,X)}),te&&Mt(f,R),E}function k(f,c,h,j){var E=En(h);if(typeof E!="function")throw Error(C(150));if(h=E.call(h),h==null)throw Error(C(151));for(var P=E=null,L=c,R=c=0,W=null,O=h.next();L!==null&&!O.done;R++,O=h.next()){L.index>R?(W=L,L=null):W=L.sibling;var X=m(f,L,O.value,j);if(X===null){L===null&&(L=W);break}e&&L&&X.alternate===null&&t(f,L),c=i(X,c,R),P===null?E=X:P.sibling=X,P=X,L=W}if(O.done)return n(f,L),te&&Mt(f,R),E;if(L===null){for(;!O.done;R++,O=h.next())O=p(f,O.value,j),O!==null&&(c=i(O,c,R),P===null?E=O:P.sibling=O,P=O);return te&&Mt(f,R),E}for(L=r(f,L);!O.done;R++,O=h.next())O=x(L,f,R,O.value,j),O!==null&&(e&&O.alternate!==null&&L.delete(O.key===null?R:O.key),c=i(O,c,R),P===null?E=O:P.sibling=O,P=O);return e&&L.forEach(function(z){return t(f,z)}),te&&Mt(f,R),E}function I(f,c,h,j){if(typeof h=="object"&&h!==null&&h.type===Xt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case gr:e:{for(var E=h.key,P=c;P!==null;){if(P.key===E){if(E=h.type,E===Xt){if(P.tag===7){n(f,P.sibling),c=o(P,h.props.children),c.return=f,f=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Da(E)===P.type){n(f,P.sibling),c=o(P,h.props),c.ref=Pn(f,P,h),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}h.type===Xt?(c=Ut(h.props.children,f.mode,j,h.key),c.return=f,f=c):(j=Kr(h.type,h.key,h.props,null,f.mode,j),j.ref=Pn(f,c,h),j.return=f,f=j)}return l(f);case Jt:e:{for(P=h.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=o(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=si(h,f.mode,j),c.return=f,f=c}return l(f);case ht:return P=h._init,I(f,c,P(h._payload),j)}if(In(h))return g(f,c,h,j);if(En(h))return k(f,c,h,j);br(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,h),c.return=f,f=c):(n(f,c),c=ai(h,f.mode,j),c.return=f,f=c),l(f)):n(f,c)}return I}var yn=Iu(!0),Ou=Iu(!1),uo=Pt(null),co=null,ln=null,bl=null;function _l(){bl=ln=co=null}function zl(e){var t=uo.current;q(uo),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){co=e,bl=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(bl!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(co===null)throw Error(C(308));ln=e,co.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Ft=null;function Ll(e){Ft===null?Ft=[e]:Ft.push(e)}function Fu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ll(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Ll(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}function Aa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;mt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?i=d:l.next=d,l=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;l=0,y=d=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,k=s;switch(m=t,x=n,k.tag){case 1:if(g=k.payload,typeof g=="function"){p=g.call(x,p,m);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=k.payload,m=typeof g=="function"?g.call(x,p,m):g,m==null)break e;p=oe({},p,m);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=x,u=p):y=y.next=x,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(y===null&&(u=p),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wt|=l,e.lanes=l,e.memoizedState=p}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var hr={},qe=Pt(hr),or=Pt(hr),ir=Pt(hr);function Dt(e){if(e===hr)throw Error(C(174));return e}function Tl(e,t){switch(J(ir,t),J(or,e),J(qe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}q(qe),J(qe,t)}function xn(){q(qe),q(or),q(ir)}function Au(e){Dt(ir.current);var t=Dt(qe.current),n=wi(t,e.type);t!==n&&(J(or,e),J(qe,n))}function Rl(e){or.current===e&&(q(qe),q(or))}var ne=Pt(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function Ml(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var Hr=dt.ReactCurrentDispatcher,ni=dt.ReactCurrentBatchConfig,Ht=0,re=null,ue=null,de=null,ho=!1,Hn=!1,lr=0,Ff=0;function ge(){throw Error(C(321))}function Il(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Ol(e,t,n,r,o,i){if(Ht=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Bf:$f,e=n(r,o),Hn){i=0;do{if(Hn=!1,lr=0,25<=i)throw Error(C(301));i+=1,de=ue=null,t.updateQueue=null,Hr.current=Hf,e=n(r,o)}while(Hn)}if(Hr.current=mo,t=ue!==null&&ue.next!==null,Ht=0,de=ue=re=null,ho=!1,t)throw Error(C(300));return e}function Fl(){var e=lr!==0;return lr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?re.memoizedState=de=e:de=de.next=e,de}function Ue(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?re.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(C(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?re.memoizedState=de=e:de=de.next=e}return de}function ar(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=Ue(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,d=i;do{var y=d.lane;if((Ht&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=p,l=r):u=u.next=p,re.lanes|=y,Wt|=y}d=d.next}while(d!==null&&d!==i);u===null?l=r:u.next=s,Ke(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,Wt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ke(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Uu(){}function Bu(e,t){var n=re,r=Ue(),o=t(),i=!Ke(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,Dl(Wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,sr(9,Hu.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(C(349));Ht&30||$u(n,t,o)}return o}function $u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hu(e,t,n,r){t.value=n,t.getSnapshot=r,Vu(t)&&Qu(e)}function Wu(e,t,n){return n(function(){Vu(t)&&Qu(e)})}function Vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Qu(e){var t=ut(e,1);t!==null&&Ge(t,e,1,-1)}function Ba(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,re,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return Ue().memoizedState}function Wr(e,t,n,r){var o=Je();re.flags|=e,o.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function _o(e,t,n,r){var o=Ue();r=r===void 0?null:r;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,r!==null&&Il(r,l.deps)){o.memoizedState=sr(t,n,i,r);return}}re.flags|=e,o.memoizedState=sr(1|t,n,i,r)}function $a(e,t){return Wr(8390656,8,e,t)}function Dl(e,t){return _o(2048,8,e,t)}function Ku(e,t){return _o(4,2,e,t)}function Yu(e,t){return _o(4,4,e,t)}function Ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xu(e,t,n){return n=n!=null?n.concat([e]):null,_o(4,4,Ju.bind(null,t,e),n)}function Al(){}function Zu(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qu(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Il(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ec(e,t,n){return Ht&21?(Ke(n,t)||(n=iu(),re.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Df(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{G=n,ni.transition=r}}function tc(){return Ue().memoizedState}function Af(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nc(e))rc(t,n);else if(n=Fu(e,t,n,r),n!==null){var o=ke();Ge(n,e,r,o),oc(n,t,r)}}function Uf(e,t,n){var r=Et(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nc(e))rc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,l)){var u=t.interleaved;u===null?(o.next=o,Ll(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Fu(e,t,o,r),n!==null&&(o=ke(),Ge(n,e,r,o),oc(n,t,r))}}function nc(e){var t=e.alternate;return e===re||t!==null&&t===re}function rc(e,t){Hn=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}var mo={readContext:Ae,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Bf={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:$a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Af.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:Al,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=Df.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=Je();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));Ht&30||$u(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,$a(Wu.bind(null,r,i,e),[e]),r.flags|=2048,sr(9,Hu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=fe.identifierPrefix;if(te){var n=it,r=ot;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ff++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$f={readContext:Ae,useCallback:Zu,useContext:Ae,useEffect:Dl,useImperativeHandle:Xu,useInsertionEffect:Ku,useLayoutEffect:Yu,useMemo:qu,useReducer:ri,useRef:Gu,useState:function(){return ri(ar)},useDebugValue:Al,useDeferredValue:function(e){var t=Ue();return ec(t,ue.memoizedState,e)},useTransition:function(){var e=ri(ar)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:tc,unstable_isNewReconciler:!1},Hf={readContext:Ae,useCallback:Zu,useContext:Ae,useEffect:Dl,useImperativeHandle:Xu,useInsertionEffect:Ku,useLayoutEffect:Yu,useMemo:qu,useReducer:oi,useRef:Gu,useState:function(){return oi(ar)},useDebugValue:Al,useDeferredValue:function(e){var t=Ue();return ue===null?t.memoizedState=e:ec(t,ue.memoizedState,e)},useTransition:function(){var e=oi(ar)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Bu,useId:tc,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),i=lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Ge(t,e,o,r),$r(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),i=lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Ge(t,e,o,r),$r(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Et(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Ge(t,e,r,n),$r(t,e,r))}};function Ha(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,i):!0}function ic(e,t,n){var r=!1,o=zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=be(t)?Bt:xe.current,r=t.contextTypes,i=(r=r!=null)?gn(e,o):zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function $i(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Pl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=be(t)?Bt:xe.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=gd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,qi=r),Hi(e,t)},n}function ac(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=op.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Vf=dt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Ou(t,null,n,r):yn(t,e.child,n,r)}function Ka(e,t,n,r,o){n=n.render;var i=t.ref;return pn(t,o),r=Ol(e,t,n,r,i,o),n=Fl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(te&&n&&Nl(t),t.flags|=1,we(e,t,r,o),t.child)}function Ya(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Gl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sc(e,t,i,r,o)):(e=Kr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(l,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(er(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ct(e,t,o)}return Wi(e,t,n,r,o)}function uc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(sn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(sn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(sn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(sn,ze),ze|=r;return we(e,t,o,n),t.child}function cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wi(e,t,n,r,o){var i=be(n)?Bt:xe.current;return i=gn(t,i),pn(t,o),n=Ol(e,t,n,r,i,o),r=Fl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(te&&r&&Nl(t),t.flags|=1,we(e,t,n,o),t.child)}function Ja(e,t,n,r,o){if(be(n)){var i=!0;lo(t)}else i=!1;if(pn(t,o),t.stateNode===null)Vr(e,t),ic(t,n,r),$i(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=be(n)?Bt:xe.current,d=gn(t,d));var y=n.getDerivedStateFromProps,p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Wa(t,l,r,d),mt=!1;var m=t.memoizedState;l.state=m,fo(t,r,l,o),u=t.memoizedState,s!==r||m!==u||Ee.current||mt?(typeof y=="function"&&(Bi(t,n,y,r),u=t.memoizedState),(s=mt||Ha(t,n,s,r,m,u,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Du(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:He(t.type,s),l.props=d,p=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=be(n)?Bt:xe.current,u=gn(t,u));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||m!==u)&&Wa(t,l,r,u),mt=!1,m=t.memoizedState,l.state=m,fo(t,r,l,o);var g=t.memoizedState;s!==p||m!==g||Ee.current||mt?(typeof x=="function"&&(Bi(t,n,x,r),g=t.memoizedState),(d=mt||Ha(t,n,d,r,m,g,u)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Vi(e,t,n,r,i,o)}function Vi(e,t,n,r,o,i){cc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ia(t,n,!1),ct(e,t,i);r=t.stateNode,Vf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,s,i)):we(e,t,s,i),t.memoizedState=r.state,o&&Ia(t,n,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Tl(e,t.containerInfo)}function Xa(e,t,n,r,o){return vn(),El(o),t.flags|=256,we(e,t,n,r),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ne,o&1),e===null)return Ai(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=To(l,r,0,null),e=Ut(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Gi(n),t.memoizedState=Qi,e):Ul(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Qf(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=bt(s,i):(i=Ut(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Gi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Qi,r}return i=e.child,e=i.sibling,r=bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ul(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&El(r),yn(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ii(Error(C(422))),_r(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=To({mode:"visible",children:r.children},o,0,null),i=Ut(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yn(t,e.child,null,l),t.child.memoizedState=Gi(l),t.memoizedState=Qi,i);if(!(t.mode&1))return _r(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=ii(i,r,void 0),_r(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ut(e,o),Ge(r,e,o,-1))}return Ql(),r=ii(Error(C(421))),_r(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ip.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=jt(o.nextSibling),Pe=t,te=!0,Ve=null,e!==null&&(Ie[Oe++]=ot,Ie[Oe++]=it,Ie[Oe++]=$t,ot=e.id,it=e.overflow,$t=t),t=Ul(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function li(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function pc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),li(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}li(t,!0,n,null,i);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gf(e,t,n){switch(t.tag){case 3:dc(t),vn();break;case 5:Au(t);break;case 1:be(t.type)&&lo(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(uo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?fc(e,t,n):(J(ne,ne.current&1),e=ct(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,uc(e,t,n)}return ct(e,t,n)}var hc,Ki,mc,gc;hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ki=function(){};mc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(qe.current);var i=null;switch(n){case"input":o=gi(e,o),r=gi(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=xi(e,o),r=xi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}ki(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Z("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kf(e,t,n){var r=t.pendingProps;switch(Cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return be(t.type)&&io(),ve(t),null;case 3:return r=t.stateNode,xn(),q(Ee),q(xe),Ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(nl(Ve),Ve=null))),Ki(e,t),ve(t),null;case 5:Rl(t);var o=Dt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)mc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=Dt(qe.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xe]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<Fn.length;o++)Z(Fn[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":aa(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":ua(r,i),Z("invalid",r)}ki(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",""+s]):Gn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Z("scroll",r)}switch(n){case"input":vr(r),sa(r,i,!0);break;case"textarea":vr(r),ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ws(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xe]=t,e[rr]=r,hc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Si(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fn.length;o++)Z(Fn[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":aa(e,r),o=gi(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":ua(e,r),o=xi(e,r),Z("invalid",e);break;default:o=r}ki(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Gs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vs(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Z("scroll",e):u!=null&&cl(e,i,u,l))}switch(n){case"input":vr(e),sa(e,r,!1);break;case"textarea":vr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Dt(ir.current),Dt(qe.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return ve(t),null;case 13:if(q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Le!==null&&t.mode&1&&!(t.flags&128))Mu(),vn(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Xe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ve!==null&&(nl(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ce===0&&(ce=3):Ql())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return xn(),Ki(e,t),e===null&&tr(t.stateNode.containerInfo),ve(t),null;case 10:return zl(t.type._context),ve(t),null;case 17:return be(t.type)&&io(),ve(t),null;case 19:if(q(ne),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Tn(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=po(e),l!==null){for(t.flags|=128,Tn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>kn&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304)}else{if(!r)if(e=po(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!te)return ve(t),null}else 2*ae()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Vl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Yf(e,t){switch(Cl(t),t.tag){case 1:return be(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),q(Ee),q(xe),Ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ne),null;case 4:return xn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var zr=!1,ye=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,T=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Yi(e,t,n){try{n()}catch(r){ie(e,t,r)}}var qa=!1;function Xf(e,t){if(Ti=to,e=ku(),jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,y=0,p=e,m=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(s=l+o),p!==i||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===n&&++d===o&&(s=l),m===i&&++y===r&&(u=l),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ri={focusedElem:e,selectionRange:n},to=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var k=g.memoizedProps,I=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:He(t.type,k),I);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(j){ie(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return g=qa,qa=!1,g}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yi(t,n,i)}o=o.next}while(o!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vc(e){var t=e.alternate;t!==null&&(e.alternate=null,vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[rr],delete t[Oi],delete t[Rf],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var pe=null,We=!1;function pt(e,t,n){for(n=n.child;n!==null;)xc(e,t,n),n=n.sibling}function xc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:ye||an(n,t);case 6:var r=pe,o=We;pe=null,pt(e,t,n),pe=r,We=o,pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?qo(e.parentNode,n):e.nodeType===1&&qo(e,n),Zn(e)):qo(pe,n.stateNode));break;case 4:r=pe,o=We,pe=n.stateNode.containerInfo,We=!0,pt(e,t,n),pe=r,We=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Yi(n,t,l),o=o.next}while(o!==r)}pt(e,t,n);break;case 1:if(!ye&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,pt(e,t,n),ye=r):pt(e,t,n);break;default:pt(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jf),t.forEach(function(r){var o=lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,We=!1;break e;case 3:pe=s.stateNode.containerInfo,We=!0;break e;case 4:pe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(pe===null)throw Error(C(160));xc(i,l,o),pe=null,We=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ie(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),r&4){try{Wn(3,e,e.return),Lo(3,e)}catch(k){ie(e,e.return,k)}try{Wn(5,e,e.return)}catch(k){ie(e,e.return,k)}}break;case 1:Be(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Be(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Kn(o,"")}catch(k){ie(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&$s(o,i),Si(s,l);var d=Si(s,i);for(l=0;l<u.length;l+=2){var y=u[l],p=u[l+1];y==="style"?Gs(o,p):y==="dangerouslySetInnerHTML"?Vs(o,p):y==="children"?Kn(o,p):cl(o,y,p,d)}switch(s){case"input":vi(o,i);break;case"textarea":Hs(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?un(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[rr]=i}catch(k){ie(e,e.return,k)}}break;case 6:if(Be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){ie(e,e.return,k)}}break;case 3:if(Be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(k){ie(e,e.return,k)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Hl=ae())),r&4&&ts(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||y,Be(t,e),ye=d):Be(t,e),Ye(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(p=T=y;T!==null;){switch(m=T,x=m.child,m.tag){case 0:case 11:case 14:case 15:Wn(4,m,m.return);break;case 1:an(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(k){ie(r,n,k)}}break;case 5:an(m,m.return);break;case 22:if(m.memoizedState!==null){rs(p);continue}}x!==null?(x.return=m,T=x):rs(p)}y=y.sibling}e:for(y=null,p=e;;){if(p.tag===5){if(y===null){y=p;try{o=p.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qs("display",l))}catch(k){ie(e,e.return,k)}}}else if(p.tag===6){if(y===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(k){ie(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;y===p&&(y=null),p=p.return}y===p&&(y=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Be(t,e),Ye(e),r&4&&ts(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kn(o,""),r.flags&=-33);var i=es(e);Zi(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=es(e);Xi(e,s,l);break;default:throw Error(C(161))}}catch(u){ie(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e,t,n){T=e,kc(e)}function kc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||zr;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=zr;var d=ye;if(zr=l,(ye=u)&&!d)for(T=o;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?os(o):u!==null?(u.return=l,T=u):os(o);for(;i!==null;)T=i,kc(i),i=i.sibling;T=o,zr=s,ye=d}ns(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):ns(e)}}function ns(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ua(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var p=y.dehydrated;p!==null&&Zn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&Ji(t)}catch(m){ie(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function rs(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function os(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(u){ie(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ie(t,o,u)}}var i=t.return;try{Ji(t)}catch(u){ie(t,i,u)}break;case 5:var l=t.return;try{Ji(t)}catch(u){ie(t,l,u)}}}catch(u){ie(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var qf=Math.ceil,go=dt.ReactCurrentDispatcher,Bl=dt.ReactCurrentOwner,De=dt.ReactCurrentBatchConfig,Q=0,fe=null,se=null,he=0,ze=0,sn=Pt(0),ce=0,ur=null,Wt=0,Po=0,$l=0,Vn=null,Ne=null,Hl=0,kn=1/0,nt=null,vo=!1,qi=null,Ct=null,Lr=!1,xt=null,yo=0,Qn=0,el=null,Qr=-1,Gr=0;function ke(){return Q&6?ae():Qr!==-1?Qr:Qr=ae()}function Et(e){return e.mode&1?Q&2&&he!==0?he&-he:Of.transition!==null?(Gr===0&&(Gr=iu()),Gr):(e=G,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function Ge(e,t,n,r){if(50<Qn)throw Qn=0,el=null,Error(C(185));dr(e,n,r),(!(Q&2)||e!==fe)&&(e===fe&&(!(Q&2)&&(Po|=n),ce===4&&vt(e,he)),_e(e,r),n===1&&Q===0&&!(t.mode&1)&&(kn=ae()+500,bo&&Tt()))}function _e(e,t){var n=e.callbackNode;Id(e,t);var r=eo(e,e===fe?he:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?If(is.bind(null,e)):Pu(is.bind(null,e)),Pf(function(){!(Q&6)&&Tt()}),n=null;else{switch(lu(r)){case 1:n=ml;break;case 4:n=ru;break;case 16:n=qr;break;case 536870912:n=ou;break;default:n=qr}n=zc(n,Sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sc(e,t){if(Qr=-1,Gr=0,Q&6)throw Error(C(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=eo(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xo(e,r);else{t=r;var o=Q;Q|=2;var i=Nc();(fe!==e||he!==t)&&(nt=null,kn=ae()+500,At(e,t));do try{np();break}catch(s){jc(e,s)}while(!0);_l(),go.current=i,Q=o,se!==null?t=0:(fe=null,he=0,t=ce)}if(t!==0){if(t===2&&(o=bi(e),o!==0&&(r=o,t=tl(e,o))),t===1)throw n=ur,At(e,0),vt(e,r),_e(e,ae()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!ep(o)&&(t=xo(e,r),t===2&&(i=bi(e),i!==0&&(r=i,t=tl(e,i))),t===1))throw n=ur,At(e,0),vt(e,r),_e(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:It(e,Ne,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Hl+500-ae(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ii(It.bind(null,e,Ne,nt),t);break}It(e,Ne,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qf(r/1960))-r,10<r){e.timeoutHandle=Ii(It.bind(null,e,Ne,nt),r);break}It(e,Ne,nt);break;case 5:It(e,Ne,nt);break;default:throw Error(C(329))}}}return _e(e,ae()),e.callbackNode===n?Sc.bind(null,e):null}function tl(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=xo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&nl(t)),e}function nl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ke(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~$l,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function is(e){if(Q&6)throw Error(C(327));hn();var t=eo(e,0);if(!(t&1))return _e(e,ae()),null;var n=xo(e,t);if(e.tag!==0&&n===2){var r=bi(e);r!==0&&(t=r,n=tl(e,r))}if(n===1)throw n=ur,At(e,0),vt(e,t),_e(e,ae()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,Ne,nt),_e(e,ae()),null}function Wl(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(kn=ae()+500,bo&&Tt())}}function Vt(e){xt!==null&&xt.tag===0&&!(Q&6)&&hn();var t=Q;Q|=1;var n=De.transition,r=G;try{if(De.transition=null,G=1,e)return e()}finally{G=r,De.transition=n,Q=t,!(Q&6)&&Tt()}}function Vl(){ze=sn.current,q(sn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:xn(),q(Ee),q(xe),Ml();break;case 5:Rl(r);break;case 4:xn();break;case 13:q(ne);break;case 19:q(ne);break;case 10:zl(r.type._context);break;case 22:case 23:Vl()}n=n.return}if(fe=e,se=e=bt(e.current,null),he=ze=t,ce=0,ur=null,$l=Po=Wt=0,Ne=Vn=null,Ft!==null){for(t=0;t<Ft.length;t++)if(n=Ft[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ft=null}return e}function jc(e,t){do{var n=se;try{if(_l(),Hr.current=mo,ho){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ho=!1}if(Ht=0,de=ue=re=null,Hn=!1,lr=0,Bl.current=null,n===null||n.return===null){ce=1,ur=t,se=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,p=y.tag;if(!(y.mode&1)&&(p===0||p===11||p===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Qa(l);if(x!==null){x.flags&=-257,Ga(x,l,s,i,t),x.mode&1&&Va(i,d,t),t=x,u=d;var g=t.updateQueue;if(g===null){var k=new Set;k.add(u),t.updateQueue=k}else g.add(u);break e}else{if(!(t&1)){Va(i,d,t),Ql();break e}u=Error(C(426))}}else if(te&&s.mode&1){var I=Qa(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ga(I,l,s,i,t),El(wn(u,s));break e}}i=u=wn(u,s),ce!==4&&(ce=2),Vn===null?Vn=[i]:Vn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=lc(i,u,t);Aa(i,f);break e;case 1:s=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ct===null||!Ct.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=ac(i,s,t);Aa(i,j);break e}}i=i.return}while(i!==null)}Ec(n)}catch(E){t=E,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Nc(){var e=go.current;return go.current=mo,e===null?mo:e}function Ql(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(Wt&268435455)&&!(Po&268435455)||vt(fe,he)}function xo(e,t){var n=Q;Q|=2;var r=Nc();(fe!==e||he!==t)&&(nt=null,At(e,t));do try{tp();break}catch(o){jc(e,o)}while(!0);if(_l(),Q=n,go.current=r,se!==null)throw Error(C(261));return fe=null,he=0,ce}function tp(){for(;se!==null;)Cc(se)}function np(){for(;se!==null&&!Ed();)Cc(se)}function Cc(e){var t=_c(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Ec(e):se=t,Bl.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yf(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=Kf(n,t,ze),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function It(e,t,n){var r=G,o=De.transition;try{De.transition=null,G=1,rp(e,t,n,r)}finally{De.transition=o,G=r}return null}function rp(e,t,n,r){do hn();while(xt!==null);if(Q&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Od(e,i),e===fe&&(se=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,zc(qr,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var l=G;G=1;var s=Q;Q|=4,Bl.current=null,Xf(e,n),wc(n,e),jf(Ri),to=!!Ti,Ri=Ti=null,e.current=n,Zf(n),bd(),Q=s,G=l,De.transition=i}else e.current=n;if(Lr&&(Lr=!1,xt=e,yo=o),i=e.pendingLanes,i===0&&(Ct=null),Ld(n.stateNode),_e(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=qi,qi=null,e;return yo&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===el?Qn++:(Qn=0,el=e):Qn=0,Tt(),null}function hn(){if(xt!==null){var e=lu(yo),t=De.transition,n=G;try{if(De.transition=null,G=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,yo=0,Q&6)throw Error(C(331));var o=Q;for(Q|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Wn(8,y,i)}var p=y.child;if(p!==null)p.return=y,T=p;else for(;T!==null;){y=T;var m=y.sibling,x=y.return;if(vc(y),y===d){T=null;break}if(m!==null){m.return=x,T=m;break}T=x}}}var g=i.alternate;if(g!==null){var k=g.child;if(k!==null){g.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var c=e.current;for(T=c;T!==null;){l=T;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,T=h;else e:for(l=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Lo(9,s)}}catch(E){ie(s,s.return,E)}if(s===l){T=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,T=j;break e}T=s.return}}if(Q=o,Tt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{G=n,De.transition=t}}return!1}function ls(e,t,n){t=wn(n,t),t=lc(e,t,1),e=Nt(e,t,1),t=ke(),e!==null&&(dr(e,1,t),_e(e,t))}function ie(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=ac(t,e,1),t=Nt(t,e,1),e=ke(),t!==null&&(dr(t,1,e),_e(t,e));break}}t=t.return}}function op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>ae()-Hl?At(e,0):$l|=n),_e(e,t)}function bc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ke();e=ut(e,t),e!==null&&(dr(e,t,n),_e(e,n))}function ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bc(e,n)}function lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),bc(e,n)}var _c;_c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Gf(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,te&&t.flags&1048576&&Tu(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var o=gn(t,xe.current);pn(t,n),o=Ol(null,t,r,e,o,n);var i=Fl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,lo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pl(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,$i(t,r,e,n),t=Vi(null,t,r,!0,i,n)):(t.tag=0,te&&i&&Nl(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=sp(r),e=He(r,e),o){case 0:t=Wi(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,He(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Wi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ja(e,t,r,o,n);case 3:e:{if(dc(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Du(e,t),fo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(C(423)),t),t=Xa(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(C(424)),t),t=Xa(e,t,r,n,o);break e}else for(Le=jt(t.stateNode.containerInfo.firstChild),Pe=t,te=!0,Ve=null,n=Ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ct(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Au(t),e===null&&Ai(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Mi(r,o)?l=null:i!==null&&Mi(r,i)&&(t.flags|=32),cc(e,t),we(e,t,l,n),t.child;case 6:return e===null&&Ai(t),null;case 13:return fc(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ka(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,J(uo,r._currentValue),r._currentValue=l,i!==null)if(Ke(i.value,l)){if(i.children===o.children&&!Ee.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=lt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ui(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ui(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pn(t,n),o=Ae(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),Ya(e,t,r,o,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Vr(e,t),t.tag=1,be(r)?(e=!0,lo(t)):e=!1,pn(t,n),ic(t,r,o),$i(t,r,o,n),Vi(null,t,r,!0,e,n);case 19:return pc(e,t,n);case 22:return uc(e,t,n)}throw Error(C(156,t.tag))};function zc(e,t){return nu(e,t)}function ap(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new ap(e,t,n,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sp(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===pl)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Gl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xt:return Ut(n.children,o,i,t);case dl:l=8,o|=8;break;case fi:return e=Fe(12,n,t,o|2),e.elementType=fi,e.lanes=i,e;case pi:return e=Fe(13,n,t,o),e.elementType=pi,e.lanes=i,e;case hi:return e=Fe(19,n,t,o),e.elementType=hi,e.lanes=i,e;case As:return To(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fs:l=10;break e;case Ds:l=9;break e;case fl:l=11;break e;case pl:l=14;break e;case ht:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ut(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=As,e.lanes=n,e.stateNode={isHidden:!1},e}function ai(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function up(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$o(0),this.expirationTimes=$o(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,o,i,l,s,u){return e=new up(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pl(i),e}function cp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lc(e){if(!e)return zt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(be(n))return Lu(e,n,t)}return t}function Pc(e,t,n,r,o,i,l,s,u){return e=Kl(n,r,!0,e,o,i,l,s,u),e.context=Lc(null),n=e.current,r=ke(),o=Et(n),i=lt(r,o),i.callback=t??null,Nt(n,i,o),e.current.lanes=o,dr(e,o,r),_e(e,r),e}function Ro(e,t,n,r){var o=t.current,i=ke(),l=Et(o);return n=Lc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,l),e!==null&&(Ge(e,o,l,i),$r(e,o,l)),l}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yl(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function dp(){return null}var Tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}Mo.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ro(e,t,null,null)};Mo.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ro(null,e,null,null)}),t[st]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&du(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function fp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=wo(l);i.call(d)}}var l=Pc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=l,e[st]=l.current,tr(e.nodeType===8?e.parentNode:e),Vt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=wo(u);s.call(d)}}var u=Kl(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=u,e[st]=u.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){Ro(t,u,n,r)}),u}function Oo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=wo(l);s.call(u)}}Ro(t,l,e,o)}else l=fp(n,t,e,o,r);return wo(l)}au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(gl(t,n|1),_e(t,ae()),!(Q&6)&&(kn=ae()+500,Tt()))}break;case 13:Vt(function(){var r=ut(e,1);if(r!==null){var o=ke();Ge(r,e,1,o)}}),Yl(e,1)}};vl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ke();Ge(t,e,134217728,n)}Yl(e,134217728)}};su=function(e){if(e.tag===13){var t=Et(e),n=ut(e,t);if(n!==null){var r=ke();Ge(n,e,t,r)}Yl(e,t)}};uu=function(){return G};cu=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Ni=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(C(90));Bs(r),vi(r,o)}}}break;case"textarea":Hs(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Js=Wl;Xs=Vt;var pp={usingClientEntryPoint:!1,Events:[pr,tn,Eo,Ks,Ys,Wl]},Rn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hp={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{So=Pr.inject(hp),Ze=Pr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(C(200));return cp(e,t,null,n)};Re.createRoot=function(e,t){if(!Xl(e))throw Error(C(299));var n=!1,r="",o=Tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,tr(e.nodeType===8?e.parentNode:e),new Jl(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=eu(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Vt(e)};Re.hydrate=function(e,t,n){if(!Io(t))throw Error(C(200));return Oo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Xl(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Tc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,o,!1,i,l),e[st]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Mo(t)};Re.render=function(e,t,n){if(!Io(t))throw Error(C(200));return Oo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Io(e))throw Error(C(40));return e._reactRootContainer?(Vt(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Re.unstable_batchedUpdates=Wl;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Oo(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Rs.exports=Re;var mp=Rs.exports,us=mp;ci.createRoot=us.createRoot,ci.hydrateRoot=us.hydrateRoot;const gp="modulepreload",vp=function(e,t){return new URL(e,t).href},cs={},yp=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(d=>{if(d=vp(d,r),d in cs)return;cs[d]=!0;const y=d.endsWith(".css"),p=y?'[rel="stylesheet"]':"";if(!!r)for(let g=l.length-1;g>=0;g--){const k=l[g];if(k.href===d&&(!y||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const x=document.createElement("link");if(x.rel=y?"stylesheet":gp,y||(x.as="script"),x.crossOrigin="",x.href=d,u&&x.setAttribute("nonce",u),document.head.appendChild(x),y)return new Promise((g,k)=>{x.addEventListener("load",g),x.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},xp=({onLogin:e})=>{const[t,n]=D.useState(!0),[r,o]=D.useState(""),[i,l]=D.useState(""),[s,u]=D.useState(""),[d,y]=D.useState(!1),[p,m]=D.useState(!1),x=async g=>{if(g.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(i.length<6){u("Password must be at least 6 characters long.");return}y(!0);try{const{api:k}=await yp(async()=>{const{api:I}=await Promise.resolve().then(()=>wp);return{api:I}},void 0,import.meta.url);if(t){const I=await k.login(r,i);I.success?(localStorage.setItem("auth_token",I.token),e({email:I.user.email,name:r.split("@")[0]})):(u(I.error||"Login failed"),y(!1))}else{const I=await k.register(r,i);I.success?(localStorage.setItem("auth_token",I.token),e({email:I.user.email,name:r.split("@")[0]})):(u(I.error||"Registration failed"),y(!1))}}catch(k){console.error("Authentication error:",k),u("Could not connect to server. Please try again later."),y(!1)}};return a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"login-card fade-in",children:[a.jsxs("div",{className:"logo-section",children:[a.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),a.jsx("h1",{children:"Blood & Fit"}),a.jsx("p",{children:"Your personal health companion"})]}),a.jsxs("form",{onSubmit:x,className:"login-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:g=>o(g.target.value),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"password-wrapper",children:[a.jsx("input",{type:p?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:i,onChange:g=>l(g.target.value),required:!0}),a.jsx("button",{type:"button",className:"toggle-password",onClick:()=>m(!p),children:p?"Hide":"Show"})]}),t&&a.jsx("div",{className:"forgot-password",children:a.jsx("span",{onClick:()=>alert("Reset link sent to email!"),children:"Forgot Password?"})})]}),s&&a.jsx("div",{className:"error-box fade-in",children:a.jsxs("span",{children:["⚠️ ",s]})}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?a.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),a.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",a.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),a.jsx("style",{children:`
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
      `})]})},Tr="https://blood-report-fitness-evaluation-system.onrender.com",Mc={async register(e,t){return await(await fetch(`${Tr}/api/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json()},async login(e,t){return await(await fetch(`${Tr}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json()},async getProfile(){const e=localStorage.getItem("auth_token");return await(await fetch(`${Tr}/api/profile`,{headers:{Authorization:`Bearer ${e}`}})).json()},async updateProfile(e){const t=localStorage.getItem("auth_token");return await(await fetch(`${Tr}/api/profile`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}},wp=Object.freeze(Object.defineProperty({__proto__:null,api:Mc},Symbol.toStringTag,{value:"Module"})),kp=({onComplete:e})=>{const[t,n]=D.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=l=>{const{name:s,value:u}=l.target;n(d=>({...d,[s]:u}))},o=(l,s)=>Math.round(parseInt(l||0)*30.48+parseInt(s||0)*2.54),i=l=>{if(l.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||o(t.heightFt,t.heightIn)};e(s)};return a.jsxs("div",{className:"profile-container fade-in",children:[a.jsxs("div",{className:"card profile-card",children:[a.jsxs("div",{className:"header",children:[a.jsx("h2",{children:"Let's know you better"}),a.jsx("p",{children:"Enter your details for personalized health insights."})]}),a.jsxs("form",{onSubmit:i,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Age"}),a.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"}),a.jsx("option",{value:"other",children:"Other"})]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Weight (kg)"}),a.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),a.jsxs("div",{className:"height-section",children:[a.jsx("label",{children:"Height"}),a.jsx("div",{className:"tabs"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"CM"}),a.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),a.jsx("div",{className:"or-divider",children:"OR"}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Feet"}),a.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Inches"}),a.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),a.jsx("style",{children:`
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
 */var Sp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(e,t)=>{const n=D.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:u,...d},y)=>D.createElement("svg",{ref:y,...Sp,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${jp(e)}`,s].join(" "),...d},[...t.map(([p,m])=>D.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=K("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=K("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=K("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=K("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=K("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=K("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=K("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=K("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=K("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=K("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=K("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=K("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=K("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=K("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=K("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=K("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=K("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=K("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=K("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=K("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=K("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$p=({user:e,onClose:t,onLogout:n})=>{const[r,o]=D.useState("details"),[i,l]=D.useState(!1),[s,u]=D.useState({name:e.name||"",age:e.age||"",gender:e.gender||"Male",height:e.height||"",weight:e.weight||"",bloodGroup:e.bloodGroup||"",diseases:e.diseases||"",allergies:e.allergies||"",notes:e.notes||""}),[d,y]=D.useState([]);D.useEffect(()=>{const g=localStorage.getItem(`profile_${e.email}`);g&&u({...s,...JSON.parse(g)});const k=JSON.parse(localStorage.getItem("blood_reports")||"[]");y(k)},[e.email]);const p=()=>{localStorage.setItem(`profile_${e.email}`,JSON.stringify(s)),l(!1),alert("Profile saved successfully!")},x=(()=>{if(!s.height||!s.weight)return null;const g=s.height/100;return(s.weight/(g*g)).toFixed(1)})();return a.jsxs("div",{className:"profile-dashboard fixed-fullscreen",children:[a.jsxs("div",{className:"profile-header",children:[a.jsx("button",{onClick:t,className:"p-back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h3",{children:"My Profile"}),a.jsx("button",{onClick:n,className:"p-logout",children:"Logout"})]}),a.jsxs("div",{className:"p-hero",children:[a.jsx("div",{className:"p-avatar",children:a.jsx(Dc,{size:40,color:"white"})}),a.jsx("h2",{children:s.name||"User"}),a.jsxs("div",{className:"p-badges",children:[x&&a.jsxs("span",{className:"p-badge",children:["BMI: ",x]}),s.bloodGroup&&a.jsx("span",{className:"p-badge red",children:s.bloodGroup})]})]}),a.jsxs("div",{className:"p-tabs",children:[a.jsx("button",{className:`p-tab ${r==="details"?"active":""}`,onClick:()=>o("details"),children:"Details"}),a.jsx("button",{className:`p-tab ${r==="health"?"active":""}`,onClick:()=>o("health"),children:"Health"}),a.jsx("button",{className:`p-tab ${r==="reports"?"active":""}`,onClick:()=>o("reports"),children:"Reports"})]}),a.jsxs("div",{className:"p-content",children:[r==="details"&&a.jsxs("div",{className:"tab-pane fade-in",children:[a.jsxs("div",{className:"pane-header",children:[a.jsx("h4",{children:"Personal Details"}),a.jsx("button",{className:"edit-toggle",onClick:()=>l(!i),children:i?"Cancel":"Edit"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Age"}),a.jsx("input",{type:"number",disabled:!i,value:s.age,onChange:g=>u({...s,age:g.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{disabled:!i,value:s.gender,onChange:g=>u({...s,gender:g.target.value}),children:[a.jsx("option",{children:"Male"}),a.jsx("option",{children:"Female"}),a.jsx("option",{children:"Other"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Height (cm)"}),a.jsx("input",{type:"number",disabled:!i,value:s.height,onChange:g=>u({...s,height:g.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Weight (kg)"}),a.jsx("input",{type:"number",disabled:!i,value:s.weight,onChange:g=>u({...s,weight:g.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Blood Group"}),a.jsxs("select",{disabled:!i,value:s.bloodGroup,onChange:g=>u({...s,bloodGroup:g.target.value}),children:[a.jsx("option",{value:"",children:"Select"}),a.jsx("option",{children:"A+"}),a.jsx("option",{children:"A-"}),a.jsx("option",{children:"B+"}),a.jsx("option",{children:"B-"}),a.jsx("option",{children:"O+"}),a.jsx("option",{children:"O-"}),a.jsx("option",{children:"AB+"}),a.jsx("option",{children:"AB-"})]})]})]}),i&&a.jsxs("button",{className:"save-btn",onClick:p,children:[a.jsx(hs,{size:18})," Save Changes"]})]}),r==="health"&&a.jsxs("div",{className:"tab-pane fade-in",children:[a.jsxs("div",{className:"pane-header",children:[a.jsx("h4",{children:"Health Profile"}),!i&&a.jsx("button",{className:"edit-toggle",onClick:()=>l(!0),children:"Edit"})]}),a.jsxs("div",{className:"health-form",children:[a.jsx("label",{children:"Existing Conditions (Diseases)"}),a.jsx("textarea",{disabled:!i,placeholder:"e.g. Diabetes, Hypertension...",value:s.diseases,onChange:g=>u({...s,diseases:g.target.value})}),a.jsx("label",{children:"Allergies"}),a.jsx("textarea",{disabled:!i,placeholder:"e.g. Peanuts, Penicillin...",value:s.allergies,onChange:g=>u({...s,allergies:g.target.value})}),a.jsx("label",{children:"About Me / Notes"}),a.jsx("textarea",{className:"large-text",disabled:!i,placeholder:"Write your fitness goals here...",value:s.notes,onChange:g=>u({...s,notes:g.target.value})})]}),i&&a.jsxs("button",{className:"save-btn",onClick:p,children:[a.jsx(hs,{size:18})," Save Health Data"]}),a.jsxs("div",{className:"milestones-preview",children:[a.jsx("h5",{children:"Milestones"}),a.jsxs("div",{className:"milestone-badges",children:[a.jsx("span",{className:"m-badge",children:"🏆 7 Day Streak"}),a.jsx("span",{className:"m-badge",children:"💧 Hydrated"})]})]})]}),r==="reports"&&a.jsxs("div",{className:"tab-pane fade-in",children:[a.jsx("h4",{children:"Recent Blood Reports"}),d.length===0?a.jsx("p",{className:"empty-state",children:"No reports uploaded yet."}):a.jsx("div",{className:"reports-list",children:d.map((g,k)=>a.jsxs("div",{className:"report-item",children:[a.jsx("div",{className:"r-icon",children:a.jsx(Zl,{size:20})}),a.jsxs("div",{className:"r-info",children:[a.jsx("span",{className:"r-date",children:g.date}),a.jsxs("span",{className:"r-summary",children:[g.results.length," Parameters Analyzed"]})]}),a.jsx("button",{className:"r-action",onClick:()=>alert("Report details view simulated."),children:"View"})]},k))})]})]}),a.jsx("style",{children:`
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
            `})]})},Hp=({userName:e,onNavigate:t,onLogout:n})=>{const[r,o]=D.useState(!1);if(r)return a.jsx($p,{user:{name:e,email:"user@example.com"},onClose:()=>o(!1),onLogout:n});const i=[{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:a.jsx(Zl,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:a.jsx(bp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:a.jsx(Yr,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:a.jsx(Lp,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:a.jsx(Pp,{size:24}),color:"#7209B7",bg:"#F3E8FF"},{id:"weightprogress",title:"Weight Tracker",desc:"Track your weight changes",icon:a.jsx(Fc,{size:24}),color:"#8D99AE",bg:"#F1F5F9"}];return a.jsxs("div",{className:"dashboard-container fade-in",children:[a.jsxs("header",{className:"dash-header",children:[a.jsx("div",{className:"avatar",onClick:()=>o(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),a.jsxs("div",{className:"welcome-text",children:[a.jsx("p",{children:"Welcome back,"}),a.jsx("h3",{children:e||"User"})]})]}),a.jsx("div",{className:"stats-preview",children:a.jsxs("div",{className:"stat-card",children:[a.jsx("h4",{children:"Stay Hydrated! 💧"}),a.jsx("p",{children:"Drink 8 glasses of water today."})]})}),a.jsx("div",{className:"options-grid",children:i.map(l=>a.jsxs("button",{className:"option-card",onClick:()=>t(l.id),style:{"--hover-color":l.color},children:[a.jsx("div",{className:"icon-box",style:{color:l.color,backgroundColor:l.bg},children:l.icon}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:l.title}),a.jsx("p",{children:l.desc})]}),a.jsx("div",{className:"arrow",children:"→"})]},l.id))}),a.jsx("style",{children:`
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
      `})]})},Wp=({userProfile:e,onBack:t})=>{const[n,r]=D.useState("metric"),[o,i]=D.useState(""),[l,s]=D.useState(""),[u,d]=D.useState(""),[y,p]=D.useState(""),[m,x]=D.useState("male"),[g,k]=D.useState("sedentary"),[I,f]=D.useState(null),[c,h]=D.useState(""),[j,E]=D.useState(""),[P,L]=D.useState("");D.useEffect(()=>{e&&(e.height&&i(e.height),e.weight&&d(e.weight),e.age&&p(e.age),e.gender&&x(e.gender.toLowerCase()))},[e]);const R=()=>{let O=0,X=0;if(n==="metric"){if(!o||!u)return;O=parseFloat(o)/100,X=parseFloat(u)}else{if(!o||!u)return;O=(parseFloat(o)*12+(parseFloat(l)||0))*.0254,X=parseFloat(u)*.453592}if(O<=0||X<=0)return;const z=parseFloat((X/(O*O)).toFixed(1));f(z);let F="",$="",A="";z<18.5?(F="Underweight",$="var(--color-accent)",A="You may need to increase your calorie intake. Focus on nutrient-dense foods."):z<24.9?(F="Normal Weight",$="var(--color-success)",A="Great job! You have a healthy body weight. Maintain it with balanced diet and exercise."):z<29.9?(F="Overweight",$="var(--color-warning)",A="Try to incorporate more cardio and monitor portion sizes to reach a healthier range."):(F="Obese",$="var(--color-danger)",A="It is recommended to consult a healthcare provider for a personalized weight management plan."),h({label:F,color:$}),L(A);const le=O/.0254-60;let b=0;m==="male"?b=52+1.9*Math.max(0,le):b=49+1.7*Math.max(0,le),E(`${b.toFixed(1)} - ${(b*1.1).toFixed(1)} kg`)},W=()=>{f(null),i(""),d(""),p("")};return a.jsxs("div",{className:"advanced-bmi-container fade-in",children:[a.jsxs("div",{className:"bmi-header",children:[a.jsx("button",{onClick:t,className:"btn-icon",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Advanced BMI Calculator"}),a.jsx("div",{style:{width:24}})," "]}),a.jsxs("div",{className:"calculator-grid",children:[a.jsxs("div",{className:"card input-card",children:[a.jsxs("div",{className:"toggle-row",children:[a.jsx("button",{className:`toggle-btn ${n==="metric"?"active":""}`,onClick:()=>r("metric"),children:"Metric (cm/kg)"}),a.jsx("button",{className:`toggle-btn ${n==="imperial"?"active":""}`,onClick:()=>r("imperial"),children:"Imperial (ft/lbs)"})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{value:m,onChange:O=>x(O.target.value),children:[a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Age (years)"}),a.jsx("input",{type:"number",value:y,onChange:O=>p(O.target.value),placeholder:"25"})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:n==="metric"?"Height (cm)":"Height (ft)"}),a.jsx("input",{type:"number",value:o,onChange:O=>i(O.target.value),placeholder:n==="metric"?"175":"5"})]}),n==="imperial"&&a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Inches"}),a.jsx("input",{type:"number",value:l,onChange:O=>s(O.target.value),placeholder:"10"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:n==="metric"?"Weight (kg)":"Weight (lbs)"}),a.jsx("input",{type:"number",value:u,onChange:O=>d(O.target.value),placeholder:n==="metric"?"70":"150"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Activity Level"}),a.jsxs("select",{value:g,onChange:O=>k(O.target.value),children:[a.jsx("option",{value:"sedentary",children:"Sedentary (Little or no exercise)"}),a.jsx("option",{value:"light",children:"Lightly active (1-3 days/week)"}),a.jsx("option",{value:"moderate",children:"Moderately active (3-5 days/week)"}),a.jsx("option",{value:"active",children:"Very active (6-7 days/week)"})]})]}),a.jsxs("div",{className:"action-row",children:[a.jsx("button",{className:"reset-btn",onClick:W,children:a.jsx(Rp,{size:18})}),a.jsx("button",{className:"calculate-btn",onClick:R,children:"Calculate BMI"})]})]}),I&&a.jsxs("div",{className:"card result-card fade-in",children:[a.jsxs("div",{className:"result-header",children:[a.jsx("h3",{children:"Your Result"}),a.jsx("div",{className:"bmi-badge",style:{backgroundColor:c.color},children:c.label})]}),a.jsxs("div",{className:"bmi-display",children:[a.jsx("span",{className:"bmi-number",style:{color:c.color},children:I}),a.jsx("span",{className:"bmi-label",children:"BMI Score"})]}),a.jsxs("div",{className:"progress-bar-container",children:[a.jsx("div",{className:"progress-track"}),a.jsx("div",{className:"progress-fill",style:{width:`${Math.min(Math.max(I/40*100,0),100)}%`,backgroundColor:c.color}}),a.jsxs("div",{className:"markers",children:[a.jsx("span",{style:{left:"46%"},children:"18.5"}),a.jsx("span",{style:{left:"62.5%"},children:"25"}),a.jsx("span",{style:{left:"75%"},children:"30"})]})]}),a.jsxs("div",{className:"health-insight",children:[a.jsxs("div",{className:"insight-item",children:[a.jsx(Ic,{size:20,className:"icon"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Ideal Weight"}),a.jsx("p",{children:j})]})]}),a.jsxs("div",{className:"insight-item",children:[a.jsx(Oc,{size:20,className:"icon"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Health Tip"}),a.jsx("p",{children:P})]})]})]})]})]}),a.jsx("style",{children:`
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
            `})]})};var Vp={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(w,v,S){w[v]=S.value},l,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",y=s.toStringTag||"@@toStringTag";function p(w,v,S){return Object.defineProperty(w,v,{value:S,enumerable:!0,configurable:!0,writable:!0}),w[v]}try{p({},"")}catch{p=function(v,S,M){return v[S]=M}}function m(w,v,S,M){var N=v&&v.prototype instanceof h?v:h,_=Object.create(N.prototype),U=new Y(M||[]);return i(_,"_invoke",{value:z(w,S,U)}),_}n.wrap=m;function x(w,v,S){try{return{type:"normal",arg:w.call(v,S)}}catch(M){return{type:"throw",arg:M}}}var g="suspendedStart",k="suspendedYield",I="executing",f="completed",c={};function h(){}function j(){}function E(){}var P={};p(P,u,function(){return this});var L=Object.getPrototypeOf,R=L&&L(L(le([])));R&&R!==r&&o.call(R,u)&&(P=R);var W=E.prototype=h.prototype=Object.create(P);j.prototype=E,i(W,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:j,configurable:!0}),j.displayName=p(E,y,"GeneratorFunction");function O(w){["next","throw","return"].forEach(function(v){p(w,v,function(S){return this._invoke(v,S)})})}n.isGeneratorFunction=function(w){var v=typeof w=="function"&&w.constructor;return v?v===j||(v.displayName||v.name)==="GeneratorFunction":!1},n.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,E):(w.__proto__=E,p(w,y,"GeneratorFunction")),w.prototype=Object.create(W),w},n.awrap=function(w){return{__await:w}};function X(w,v){function S(_,U,B,V){var ee=x(w[_],w,U);if(ee.type==="throw")V(ee.arg);else{var ft=ee.arg,et=ft.value;return et&&typeof et=="object"&&o.call(et,"__await")?v.resolve(et.__await).then(function(tt){S("next",tt,B,V)},function(tt){S("throw",tt,B,V)}):v.resolve(et).then(function(tt){ft.value=tt,B(ft)},function(tt){return S("throw",tt,B,V)})}}var M;function N(_,U){function B(){return new v(function(V,ee){S(_,U,V,ee)})}return M=M?M.then(B,B):B()}i(this,"_invoke",{value:N})}O(X.prototype),p(X.prototype,d,function(){return this}),n.AsyncIterator=X,n.async=function(w,v,S,M,N){N===void 0&&(N=Promise);var _=new X(m(w,v,S,M),N);return n.isGeneratorFunction(v)?_:_.next().then(function(U){return U.done?U.value:_.next()})};function z(w,v,S){var M=g;return function(_,U){if(M===I)throw new Error("Generator is already running");if(M===f){if(_==="throw")throw U;return b()}for(S.method=_,S.arg=U;;){var B=S.delegate;if(B){var V=F(B,S);if(V){if(V===c)continue;return V}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(M===g)throw M=f,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);M=I;var ee=x(w,v,S);if(ee.type==="normal"){if(M=S.done?f:k,ee.arg===c)continue;return{value:ee.arg,done:S.done}}else ee.type==="throw"&&(M=f,S.method="throw",S.arg=ee.arg)}}}function F(w,v){var S=v.method,M=w.iterator[S];if(M===l)return v.delegate=null,S==="throw"&&w.iterator.return&&(v.method="return",v.arg=l,F(w,v),v.method==="throw")||S!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+S+"' method")),c;var N=x(M,w.iterator,v.arg);if(N.type==="throw")return v.method="throw",v.arg=N.arg,v.delegate=null,c;var _=N.arg;if(!_)return v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,c;if(_.done)v[w.resultName]=_.value,v.next=w.nextLoc,v.method!=="return"&&(v.method="next",v.arg=l);else return _;return v.delegate=null,c}O(W),p(W,y,"Generator"),p(W,u,function(){return this}),p(W,"toString",function(){return"[object Generator]"});function $(w){var v={tryLoc:w[0]};1 in w&&(v.catchLoc=w[1]),2 in w&&(v.finallyLoc=w[2],v.afterLoc=w[3]),this.tryEntries.push(v)}function A(w){var v=w.completion||{};v.type="normal",delete v.arg,w.completion=v}function Y(w){this.tryEntries=[{tryLoc:"root"}],w.forEach($,this),this.reset(!0)}n.keys=function(w){var v=Object(w),S=[];for(var M in v)S.push(M);return S.reverse(),function N(){for(;S.length;){var _=S.pop();if(_ in v)return N.value=_,N.done=!1,N}return N.done=!0,N}};function le(w){if(w){var v=w[u];if(v)return v.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var S=-1,M=function N(){for(;++S<w.length;)if(o.call(w,S))return N.value=w[S],N.done=!1,N;return N.value=l,N.done=!0,N};return M.next=M}}return{next:b}}n.values=le;function b(){return{value:l,done:!0}}return Y.prototype={constructor:Y,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(A),!w)for(var v in this)v.charAt(0)==="t"&&o.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=l)},stop:function(){this.done=!0;var w=this.tryEntries[0],v=w.completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var v=this;function S(V,ee){return _.type="throw",_.arg=w,v.next=V,ee&&(v.method="next",v.arg=l),!!ee}for(var M=this.tryEntries.length-1;M>=0;--M){var N=this.tryEntries[M],_=N.completion;if(N.tryLoc==="root")return S("end");if(N.tryLoc<=this.prev){var U=o.call(N,"catchLoc"),B=o.call(N,"finallyLoc");if(U&&B){if(this.prev<N.catchLoc)return S(N.catchLoc,!0);if(this.prev<N.finallyLoc)return S(N.finallyLoc)}else if(U){if(this.prev<N.catchLoc)return S(N.catchLoc,!0)}else if(B){if(this.prev<N.finallyLoc)return S(N.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(w,v){for(var S=this.tryEntries.length-1;S>=0;--S){var M=this.tryEntries[S];if(M.tryLoc<=this.prev&&o.call(M,"finallyLoc")&&this.prev<M.finallyLoc){var N=M;break}}N&&(w==="break"||w==="continue")&&N.tryLoc<=v&&v<=N.finallyLoc&&(N=null);var _=N?N.completion:{};return _.type=w,_.arg=v,N?(this.method="next",this.next=N.finallyLoc,c):this.complete(_)},complete:function(w,v){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&v&&(this.next=v),c},finish:function(w){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.finallyLoc===w)return this.complete(S.completion,S.afterLoc),A(S),c}},catch:function(w){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.tryLoc===w){var M=S.completion;if(M.type==="throw"){var N=M.arg;A(S)}return N}}throw new Error("illegal catch attempt")},delegateYield:function(w,v,S){return this.delegate={iterator:le(w),resultName:v,nextLoc:S},this.method==="next"&&(this.arg=l),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Vp);var ql=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Qp=ql;let ms=0;var Ac=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=Qp("Job",ms),ms+=1),{id:r,action:t,payload:n}},Cn={};let ea=!1;Cn.logging=ea;Cn.setLogging=e=>{ea=e};Cn.log=(...e)=>ea?console.log.apply(void 0,e):null;const Gp=Ac,{log:Rr}=Cn,Kp=ql;let gs=0;var Yp=()=>{const e=Kp("Scheduler",gs),t={},n={};let r=[];gs+=1;const o=()=>r.length,i=()=>Object.keys(t).length,l=()=>{if(r.length!==0){const p=Object.keys(t);for(let m=0;m<p.length;m+=1)if(typeof n[p[m]]>"u"){r[0](t[p[m]]);break}}},s=(p,m)=>new Promise((x,g)=>{const k=Gp({action:p,payload:m});r.push(async I=>{r.shift(),n[I.id]=k;try{x(await I[p].apply(void 0,[...m,k.id]))}catch(f){g(f)}finally{delete n[I.id],l()}}),Rr(`[${e}]: Add ${k.id} to JobQueue`),Rr(`[${e}]: JobQueue length=${r.length}`),l()});return{addWorker:p=>(t[p.id]=p,Rr(`[${e}]: Add ${p.id}`),Rr(`[${e}]: Number of workers=${i()}`),l(),p.id),addJob:async(p,...m)=>{if(i()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(p,m)},terminate:async()=>{Object.keys(t).forEach(async p=>{await t[p].terminate()}),r=[]},getQueueLen:o,getNumWorkers:i}};function Jp(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Xp(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Zp=Xp;const qp=Zp;var eh=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":qp()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof Jp=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const th=eh("type")==="browser",nh=th?e=>new URL(e,window.location.href).href:e=>e;var rh=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=nh(t[n]))}),t},oh=e=>{const t=[],n=[],r=[],o=[],i=[];return e.blocks&&e.blocks.forEach(l=>{l.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(y=>{i.push({...y,page:e,block:l,paragraph:s,line:u,word:d})}),o.push({...d,page:e,block:l,paragraph:s,line:u})}),r.push({...u,page:e,block:l,paragraph:s})}),n.push({...s,page:e,block:l})}),t.push({...l,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:i}},Uc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const ih="5.1.1",lh={version:ih};var ah={workerBlobURL:!0,logger:()=>{}};const sh=lh.version,uh=ah;var ch={...uh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${sh}/dist/worker.min.js`},dh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},fh=e=>{e.terminate()},ph=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},hh=async(e,t)=>{e.postMessage(t)};const ui=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),rl=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await rl(e.src)),e.tagName==="VIDEO"&&(t=await rl(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await ui(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await ui(n)}else(e instanceof File||e instanceof Blob)&&(t=await ui(e));return new Uint8Array(t)};var mh=rl;const gh=ch,vh=dh,yh=fh,xh=ph,wh=hh,kh=mh;var Sh={defaultOptions:gh,spawnWorker:vh,terminateWorker:yh,onMessage:xh,send:wh,loadImage:kh};const jh=rh,Nh=oh,$e=Ac,{log:vs}=Cn,Ch=ql,Rt=Uc,{defaultOptions:Eh,spawnWorker:bh,terminateWorker:_h,onMessage:zh,loadImage:ys,send:Lh}=Sh;let xs=0;var Bc=async(e="eng",t=Rt.LSTM_ONLY,n={},r={})=>{const o=Ch("Worker",xs),{logger:i,errorHandler:l,...s}=jh({...Eh,...n}),u={},d={},y=typeof e=="string"?e.split("+"):e;let p=t,m=r;const x=[Rt.DEFAULT,Rt.LSTM_ONLY].includes(t)&&!s.legacyCore;let g,k;const I=new Promise((N,_)=>{k=N,g=_}),f=N=>{g(N.message)};let c=bh(s);c.onerror=f,xs+=1;const h=(N,_)=>{u[N]=_},j=(N,_)=>{d[N]=_},E=({id:N,action:_,payload:U})=>new Promise((B,V)=>{vs(`[${o}]: Start ${N}, action=${_}`);const ee=`${_}-${N}`;h(ee,B),j(ee,V),Lh(c,{workerId:o,jobId:N,action:_,payload:U})}),P=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),L=N=>E($e({id:N,action:"load",payload:{options:{lstmOnly:x,corePath:s.corePath,logging:s.logging}}})),R=(N,_,U)=>E($e({id:U,action:"FS",payload:{method:"writeFile",args:[N,_]}})),W=(N,_)=>E($e({id:_,action:"FS",payload:{method:"readFile",args:[N,{encoding:"utf8"}]}})),O=(N,_)=>E($e({id:_,action:"FS",payload:{method:"unlink",args:[N]}})),X=(N,_,U)=>E($e({id:U,action:"FS",payload:{method:N,args:_}})),z=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),F=(N,_)=>E($e({id:_,action:"loadLanguage",payload:{langs:N,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Rt.DEFAULT,Rt.LSTM_ONLY].includes(p)&&!s.legacyLang}}})),$=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),A=(N,_,U,B)=>E($e({id:B,action:"initialize",payload:{langs:N,oem:_,config:U}})),Y=(N="eng",_,U,B)=>{if(x&&[Rt.TESSERACT_ONLY,Rt.TESSERACT_LSTM_COMBINED].includes(_))throw Error("Legacy model requested but code missing.");const V=_||p;p=V;const ee=U||m;m=ee;const et=(typeof N=="string"?N.split("+"):N).filter(tt=>!y.includes(tt));return y.push(...et),et.length>0?F(et,B).then(()=>A(N,V,ee,B)):A(N,V,ee,B)},le=(N={},_)=>E($e({id:_,action:"setParameters",payload:{params:N}})),b=async(N,_={},U={blocks:!0,text:!0,hocr:!0,tsv:!0},B)=>E($e({id:B,action:"recognize",payload:{image:await ys(N),options:_,output:U}})),w=(N="Tesseract OCR Result",_=!1,U)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E($e({id:U,action:"getPDF",payload:{title:N,textonly:_}}))),v=async(N,_)=>{if(x)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return E($e({id:_,action:"detect",payload:{image:await ys(N)}}))},S=async()=>(c!==null&&(_h(c),c=null),Promise.resolve());zh(c,({workerId:N,jobId:_,status:U,action:B,data:V})=>{const ee=`${B}-${_}`;if(U==="resolve"){vs(`[${N}]: Complete ${_}`);let ft=V;B==="recognize"?ft=Nh(V):B==="getPDF"&&(ft=Array.from({...V,length:Object.keys(V).length})),u[ee]({jobId:_,data:ft})}else if(U==="reject")if(d[ee](V),B==="load"&&g(V),l)l(V);else throw Error(V);else U==="progress"&&i({...V,userJobId:_})});const M={id:o,worker:c,setResolve:h,setReject:j,load:P,writeText:R,readText:W,removeFile:O,FS:X,loadLanguage:z,initialize:$,reinitialize:Y,setParameters:le,recognize:b,getPDF:w,detect:v,terminate:S};return L().then(()=>F(e)).then(()=>A(e,t,r)).then(()=>k(M)).catch(()=>{}),I};const $c=Bc,Ph=async(e,t,n)=>{const r=await $c(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},Th=async(e,t)=>{const n=await $c("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Rh={recognize:Ph,detect:Th},Mh={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Ih={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Oh=Yp,Fh=Bc,Dh=Rh,Ah=Mh,Uh=Uc,Bh=Ih,{setLogging:$h}=Cn;var Hh={languages:Ah,OEM:Uh,PSM:Bh,createScheduler:Oh,createWorker:Fh,setLogging:$h,...Dh};const Wh=ws(Hh),Mr={hemoglobin:{min:12.5,max:16,unit:"gm/dl",foods:["Spinach","Red Meat","Pumpkin Seeds"],impact:{low:"You may experience higher fatigue during cardio. Consider lower intensity now.",high:"Rarely caused by high altitude or smoking. Ensure good hydration."}},total_count:{min:4e3,max:11e3,unit:"cells/cumm",foods:["Vitamin C","Garlic","Ginger"],impact:{low:"Immunity might be lower. Skip high-intensity sessions if you feel weak.",high:"Body is fighting something. Rest and recover properly."}},neutrophil:{min:40,max:70,unit:"%",foods:[],impact:{}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{}},eosinophil:{min:2,max:8,unit:"%",foods:[],impact:{}},monocyte:{min:1,max:6,unit:"%",foods:[],impact:{}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},platelet_count:{min:1.5,max:4.5,unit:"Lakhs/cumm",foods:["Papaya Leaf","Pomegranate"],impact:{low:"Careful to avoid injury. High-impact sports are not recommended.",high:"Can indicate inflammation. Focus on recovery."}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory foods"],impact:{high:"High inflammation. Focus on light movement and stretching."}},mcv:{min:80,max:100,unit:"fL",foods:["Vitamin B12","Folic Acid"],impact:{low:"Lower oxygen capacity. Strength training may feel significantly harder."}},mch:{min:27,max:32,unit:"pg",foods:["Iron rich foods"],impact:{low:"Fatigue risk. Focus on foundational strength movements."}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},t3:{min:.85,max:2.68,unit:"nmol/L",foods:["Brazil Nuts"," Seaweed"],impact:{low:"Lowered metabolism. You might find it harder to maintain energy."}},t4:{min:5.1,max:14.1,unit:"ug/dL",foods:["Dairy","Eggs","Fish"],impact:{low:"Similar to T3, watch for sluggishness during workouts."}},tsh:{min:.27,max:4.2,unit:"uIU/mL",foods:["Avoid cruciferous veg if hypothyroid"],impact:{high:"Watch for weight gain and low energy levels during routine."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Low Carb","High Fiber"],impact:{high:"Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.",low:"Potential for dizziness. Have a small snack before exercise."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Complex Carbs","Vegetables"],impact:{high:"Spikes can affect recovery. A 10-min walk after meals is recommended."}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Nuts","Olive Oil"],impact:{high:"Focus on heart-healthy cardio like swimming or brisk walking."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["Avoid Sugar","Eat Fish"],impact:{high:"Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio."}},hdl_cholesterol:{min:40,max:60,unit:"mg/dL",foods:["Avocado","Salmon"],impact:{low:"HIIT or intensive cardio can help boost this 'good' cholesterol."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber","Soy","Almonds"],impact:{high:"Heart health priority. Daily steady movement is mandatory."}},urea:{min:15,max:40,unit:"mg/dL",foods:["Reduce Protein","Hydrate"],impact:{high:"Kidney stress. Hydrate well and limit protein supplement intake temporarily."}},creatinine:{min:.6,max:1.2,unit:"mg/dL",foods:["Reduce Red Meat","Hydrate"],impact:{high:"Ensure excellent hydration; avoid over-exertion in extreme heat."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Avoid Alcohol","Cherries","Vitamin C"],impact:{high:"Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore."}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Hydrate"],impact:{low:"Performance risk. Monitor salt loss during long workout sessions."}},potassium:{min:3.5,max:5.5,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"High risk of muscle cramps. Ensure steady electrolyte intake."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon Water"],impact:{high:"Liver stress. Keep training intensity moderate and skip supplements."}},sgot:{min:5,max:40,unit:"U/L",foods:["Leafy Greens","Coffee"],impact:{high:"Could be muscle damage from training or liver stress. Take a rest day."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole Grains","Avoid Alcohol"],impact:{high:"Focus on recovery. Avoid using pain killers like Tylenol if high."}},alkaline_phosphatase:{min:44,max:147,unit:"IU/L",foods:["Vitamin D"],impact:{low:"Vitamin D deficiency. Impacts bone health and muscle strength."}}},Vh=({onBack:e})=>{const[t,n]=D.useState(null),[r,o]=D.useState(null),[i,l]=D.useState([]),[s,u]=D.useState(!1),[d,y]=D.useState(""),[p,m]=D.useState("hemoglobin"),[x,g]=D.useState(""),[k,I]=D.useState(null),[f,c]=D.useState("basic"),[h,j]=D.useState("checking");D.useEffect(()=>{E();const z=localStorage.getItem("blood_reports");z&&l(JSON.parse(z))},[]);const E=async()=>{const z="https://blood-report-fitness-evaluation-system.onrender.com";try{(await fetch(`${z}/health`)).ok?j("online"):j("offline")}catch{j("offline")}},P=z=>{const F=[];return Object.keys(z).forEach($=>{const A=parseFloat(z[$]),Y=Mr[$];!Y||isNaN(A)||($==="hemoglobin"&&(A<10?F.push({condition:"Severe Anemia Risk",risk:"High",color:"#ef4444",advice:"Consult a specialist immediately for iron supplements."}):A<Y.min&&F.push({condition:"Mild Anemia",risk:"Medium",color:"#fbbf24",advice:"Increase intake of spinach, red meat, and Vitamin C."})),($==="glucose_fasting"||$==="glucose_pp")&&(A>140&&$==="glucose_fasting"?F.push({condition:"Diabetes Risk",risk:"High",color:"#ef4444",advice:"Strict sugar control needed. Monitor Hba1c."}):A>Y.max&&F.push({condition:"Pre-Diabetes Warning",risk:"Medium",color:"#fbbf24",advice:"Reduce carbs/sugar and start daily brisk walking."})),$==="creatinine"&&A>1.5&&F.push({condition:"Kidney Stress",risk:"High",color:"#ef4444",advice:"High hydration needed. Avoid protein supplements temporarily."}),$==="total_count"&&A>12e3&&F.push({condition:"Potential Infection",risk:"Medium",color:"#fbbf24",advice:"Body is fighting inflammation. Rest well."}),($==="cholesterol"&&A>240||$==="triglycerides"&&A>200)&&F.push({condition:"Cardiovascular Risk",risk:"High",color:"#ef4444",advice:"Avoid saturated fats/fried food. Increase cardio."}))}),F},L=async z=>{u(!0),y("Starting OCR Engine...");try{const{data:{text:F}}=await Wh.recognize(z,"eng",{logger:w=>y(`${w.status} (${Math.round(w.progress*100)}%)`)});console.log("Raw OCR Text:",F);const $=F.split(`
`),A={},Y=w=>w.toLowerCase().replace(/[^a-z0-9.]/g,""),le={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],eosinophil:["eosinophils","eosinophil"],monocyte:["monocytes","monocyte"],basophil:["basophils","basophil"],platelet_count:["platelet count","platelet","plt"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],glucose_fasting:["glucose fasting","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],cholesterol:["total cholesterol","serum cholesterol"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"]};if($.forEach(w=>{const v=w.toLowerCase().trim();v&&Object.keys(le).forEach(S=>{const N=le[S].find(_=>v.includes(_));if(N&&!A[S]){const U=v.replace(N,"").match(/(\d+(\.\d+)?)/g);if(U&&U.length>0){const B=parseFloat(U[0]);isNaN(B)||(A[S]=B)}}})}),Object.keys(A).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+F.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+F),u(!1);return}const b=P(A);O({date:new Date().toLocaleDateString(),values:A,risks:b})}catch(F){console.error(F),alert("Error parsing image. Please try a clearer photo.")}finally{u(!1),y("")}},R=z=>{const F=z.target.files[0];F&&(F.type.startsWith("image/")?(n(F),f==="advanced"&&h==="online"?W(F):L(F)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},W=async z=>{u(!0),y("Sending to ML Neural Network...");const F=new FormData;F.append("file",z);const $="https://blood-report-fitness-evaluation-system.onrender.com";try{const A=await fetch(`${$}/analyze`,{method:"POST",body:F}),Y=await A.json();if(!A.ok)throw new Error(Y.error||"Server Error");if(console.log("ML Results:",Y),!Y.raw_results||Y.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),L(z);return}}catch(A){console.error(A),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),L(z)}finally{u(!1),y("")}},O=z=>{const F=[],$=[];Object.keys(z.values).forEach(b=>{var N,_;const w=parseFloat(z.values[b]),v=Mr[b];if(!v)return;let S="Normal";w<v.min&&(S="Low"),w>v.max&&(S="High");const M=S==="Low"?(N=v.impact)==null?void 0:N.low:S==="High"?(_=v.impact)==null?void 0:_.high:null;S!=="Normal"&&$.push({parameter:b,status:S,foods:v.foods,fitnessImpact:M}),F.push({parameter:b,value:w,unit:v.unit,range:`${v.min}-${v.max}`,status:S,fitnessImpact:M})});const A=z.risks||[],Y={...z,results:F,suggestions:$,risks:A};o(Y);const le=[Y,...i];l(le),localStorage.setItem("blood_reports",JSON.stringify(le))},X=z=>{var Y,le;if(z.preventDefault(),!x)return;const F=parseFloat(x),$=Mr[p];let A="Normal";F<$.min&&(A="Low"),F>$.max&&(A="High"),I({parameter:p,value:F,unit:$.unit,range:`${$.min}-${$.max}`,status:A,foods:$.foods,fitnessImpact:A==="Low"?(Y=$.impact)==null?void 0:Y.low:A==="High"?(le=$.impact)==null?void 0:le.high:null})};return a.jsxs("div",{className:"blood-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Blood Evaluation"})]}),r?a.jsxs("div",{className:"results-section fade-in",children:[a.jsxs("div",{className:"results-header",children:[a.jsx("h3",{children:"Report Analysis"}),a.jsx("button",{className:"text-btn",onClick:()=>o(null),children:"Close"})]}),r.risks&&r.risks.length>0&&a.jsxs("div",{className:"risk-container fade-up",children:[a.jsx("h4",{children:"⚠️ AI Health Risk Detection"}),a.jsx("div",{className:"risk-grid",children:r.risks.map((z,F)=>a.jsxs("div",{className:"risk-card",style:{borderLeft:`4px solid ${z.color}`},children:[a.jsxs("div",{className:"risk-header",children:[a.jsx("span",{className:"condition-title",children:z.condition}),a.jsx("span",{className:"risk-badge",style:{background:z.color},children:z.risk})]}),a.jsx("p",{className:"risk-advice",children:z.advice}),a.jsx("button",{className:"view-details",onClick:()=>alert(`Detailed explanation for ${z.condition}: 

This condition was flagged based on your values. Please consult a doctor for verification.`),children:"View Details"})]},F))})]}),a.jsx("div",{className:"params-list",children:r.results.map((z,F)=>a.jsxs("div",{className:"param-card",children:[a.jsxs("div",{className:"param-header",children:[a.jsx("h4",{children:z.parameter.replace(/_/g," ").toUpperCase()}),a.jsxs("span",{className:`status-badge ${z.status.toLowerCase()}`,children:[z.status==="Normal"&&a.jsx(zp,{size:14}),z.status==="High"&&a.jsx(Cp,{size:14}),z.status==="Low"&&a.jsx(Np,{size:14}),z.status]})]}),a.jsxs("div",{className:"param-value",children:[a.jsx("span",{className:"val",children:z.value}),a.jsx("span",{className:"unit",children:z.unit})]}),a.jsxs("p",{className:"range-info",children:["Ref Range: ",z.range]})]},F))}),r.suggestions.length>0&&a.jsxs("div",{className:"suggestions-box",children:[a.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),r.suggestions.map((z,F)=>a.jsxs("div",{className:"suggestion-item",children:[a.jsx("div",{className:"suggestion-header",children:a.jsxs("strong",{children:[z.status," ",z.parameter.replace(/_/g," ").toUpperCase()]})}),z.foods.length>0&&a.jsxs("p",{className:"food-list",children:["💡 ",a.jsx("b",{children:"Diety Tip:"})," Eat ",z.foods.join(", ")]}),z.fitnessImpact&&a.jsxs("p",{className:"fitness-list",children:["⚡ ",a.jsx("b",{children:"Fitness Impact:"})," ",z.fitnessImpact]})]},F))]})]}):a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"card manual-card",children:[a.jsx("h3",{children:"Quick Check"}),a.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),a.jsxs("form",{onSubmit:X,className:"manual-form",children:[a.jsxs("div",{className:"row",children:[a.jsx("select",{className:"input-field",value:p,onChange:z=>{m(z.target.value),I(null)},children:Object.keys(Mr).map(z=>a.jsx("option",{value:z,children:z.replace(/_/g," ").toUpperCase()},z))}),a.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:x,onChange:z=>g(z.target.value),required:!0})]}),a.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",a.jsx(Mp,{size:16})]})]}),k&&a.jsxs("div",{className:"manual-result fade-in",children:[a.jsx("div",{className:`result-badge ${k.status.toLowerCase()}`,children:k.status}),a.jsxs("p",{className:"result-text",children:[a.jsxs("strong",{children:[k.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",k.value," ",k.unit,a.jsx("br",{}),a.jsxs("span",{className:"text-muted",children:["Normal: ",k.range]})]}),k.status!=="Normal"&&k.foods.length>0&&a.jsxs("div",{className:"diet-tip",children:[a.jsx("strong",{children:"Tip:"})," Eat ",k.foods.join(", ")]}),k.fitnessImpact&&a.jsxs("div",{className:"fitness-tip",children:[a.jsx("strong",{children:"Fitness Impact:"})," ",k.fitnessImpact]})]})]}),a.jsx("div",{className:"divider",children:"OR"}),a.jsxs("div",{className:"upload-card",children:[a.jsx("div",{className:"icon-circle",children:a.jsx(Ap,{size:32,color:"var(--color-primary)"})}),a.jsx("h3",{children:"Upload Report Image"}),a.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),a.jsxs("div",{className:"scan-mode-toggle",children:[a.jsx("button",{className:`mode-btn ${f==="basic"?"active":""}`,onClick:()=>c("basic"),children:"Basic (Browser)"}),a.jsxs("button",{className:`mode-btn ${f==="advanced"?"active":""}`,onClick:()=>c("advanced"),children:["Advanced (Python ML)",h==="online"&&a.jsx("span",{className:"dot online",title:"Server Online"}),h==="offline"&&a.jsx("span",{className:"dot offline",title:"Server Offline (Run server.py)"})]})]}),a.jsxs("label",{className:"btn-secondary upload-btn",children:[s?d||"Scanning...":"Select Image (JPG/PNG)",a.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:R,disabled:s})]})]}),i.length>0&&a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Recent Reports"}),i.map((z,F)=>a.jsxs("div",{className:"history-item",onClick:()=>o(z),children:[a.jsx(Zl,{size:18,className:"text-muted"}),a.jsx("span",{children:z.date}),a.jsx("span",{className:"arrow",children:"→"})]},F))]})]}),a.jsx("style",{children:`
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
      `})]})},Ir={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},Qh=({userProfile:e,onBack:t})=>{const[n,r]=D.useState(null),[o,i]=D.useState(0),[l,s]=D.useState(null);D.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:y,heightCm:p,age:m,gender:x}=e;let g=10*y+6.25*p-5*m;x==="male"?g+=5:g-=161;let k=Math.round(g*1.375);return n==="loss"?k-500:n==="gain"?k+500:k},d=()=>{const y=u();i(y);const p=m=>m[Math.floor(Math.random()*m.length)];s({breakfast:p(Ir.breakfast),lunch:p(Ir.lunch),snack:p(Ir.snack),dinner:p(Ir.dinner)})};return a.jsxs("div",{className:"fitness-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Fitness Helper"})]}),n?a.jsxs("div",{className:"plan-view fade-in",children:[a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{className:"cal-target",children:[a.jsx("span",{className:"label",children:"Daily Target"}),a.jsx("h1",{children:o}),a.jsx("span",{className:"unit",children:"kcal"})]}),a.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),a.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),a.jsxs("div",{className:"meals-list",children:[a.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),l&&a.jsxs(a.Fragment,{children:[a.jsx(Or,{type:"Breakfast",icon:a.jsx(fs,{size:18}),data:l.breakfast}),a.jsx(Or,{type:"Lunch",icon:a.jsx(Yr,{size:18}),data:l.lunch}),a.jsx(Or,{type:"Snack",icon:a.jsx(fs,{size:18}),data:l.snack}),a.jsx(Or,{type:"Dinner",icon:a.jsx(Yr,{size:18}),data:l.dinner})]})]})]}):a.jsxs("div",{className:"goal-selection",children:[a.jsx("h3",{children:"What is your goal?"}),a.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[a.jsx("div",{className:"icon-box loss",children:a.jsx(Op,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Loss"}),a.jsx("p",{children:"Reduce body fat locally."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[a.jsx("div",{className:"icon-box maintain",children:a.jsx(Bp,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Maintain Weight"}),a.jsx("p",{children:"Stay healthy and fit."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[a.jsx("div",{className:"icon-box gain",children:a.jsx(Yr,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Gain"}),a.jsx("p",{children:"Build muscle mass."})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Or=({type:e,icon:t,data:n})=>a.jsxs("div",{className:"meal-card",children:[a.jsxs("div",{className:"meal-info",children:[a.jsxs("h4",{children:[t," ",e]}),a.jsx("p",{children:n.name})]}),a.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),Gh=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],Kh=({onBack:e})=>{const[t,n]=D.useState(null);return a.jsxs("div",{className:"workout-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Home Workouts"})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("div",{className:"intro-icon",children:a.jsx(ps,{size:28,color:"#FF6B6B"})}),a.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),a.jsx("div",{className:"workout-list",children:Gh.map(r=>a.jsxs("div",{className:"workout-card",children:[a.jsxs("div",{className:"w-header",children:[a.jsx("h3",{children:r.name}),a.jsxs("span",{className:"cal-badge",children:[a.jsx(ps,{size:12,fill:"currentColor"})," ",r.calories]})]}),a.jsx("p",{className:"w-desc",children:r.desc}),a.jsxs("div",{className:"w-footer",children:[a.jsxs("span",{className:"duration",children:[a.jsx(Fp,{size:14})," ",r.duration]}),a.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&a.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:a.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[a.jsx("button",{className:"close-btn",onClick:()=>n(null),children:a.jsx(Up,{size:24})}),a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:t.name}),a.jsx("span",{className:"cal-pill",children:t.calories})]}),(()=>{const o={"Jumping Jacks":"iSSAk4XCsRA",Squats:"YaXPRqUwItQ","Push-ups":"IODxDxX7oi4",Burpees:"dZgVxmf6jkA","High Knees":"ZZKpjaVk_2A",Lunges:"QOVaHwm-Q6U",Plank:"pSHjTRCQxIw","Mountain Climbers":"zT-9L3CEcmk"}[t.name]||"UpH7rm0cYbM";return a.jsx("div",{style:{width:"100%",height:"220px",marginBottom:"20px",borderRadius:"12px",overflow:"hidden",background:"#000"},children:a.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1&loop=1&playlist=${o}&controls=0&showinfo=0&modestbranding=1`,title:"Workout Demonstration",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"block"}})})})(),a.jsxs("div",{className:"modal-body",children:[a.jsxs("h4",{children:[a.jsx(Oc,{size:16})," How to do it:"]}),a.jsx("ul",{className:"steps-list",children:t.steps.map((r,o)=>a.jsxs("li",{children:[a.jsx("span",{className:"step-num",children:o+1}),r]},o))})]})]})}),a.jsx("style",{children:`
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
            `})]})},Yh=({onBack:e,userProfile:t})=>{const[n,r]=D.useState(()=>{const p=localStorage.getItem("weight_log");return p?JSON.parse(p):[]}),[o,i]=D.useState(""),l=()=>{if(!o||isNaN(o))return;const p={weight:parseFloat(o),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},m=[...n,p];r(m),localStorage.setItem("weight_log",JSON.stringify(m)),i("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const p=n[n.length-1].weight,m=n[n.length-2].weight,x=p-m;return{change:Math.abs(x).toFixed(1),type:x>0?"gain":x<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),y=n.length>0?n[n.length-1].weight:d;return a.jsxs("div",{className:"weight-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Weight Progress"})]}),a.jsxs("div",{className:"stats-card",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Starting Weight"}),a.jsxs("span",{className:"value",children:[d," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Current Weight"}),a.jsxs("span",{className:"value primary",children:[y," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Change"}),a.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&a.jsx(Fc,{size:16}),u.type==="loss"&&a.jsx(Dp,{size:16}),u.type==="neutral"&&a.jsx(Tp,{size:16}),u.change," kg"]})]})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("h3",{children:"Log Current Weight"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:o,onChange:p=>i(p.target.value),step:"0.1"}),a.jsx("button",{className:"add-btn",onClick:l,children:"Add"})]})]}),a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Weight History"}),n.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(Ic,{size:40,color:"#cbd5e1"}),a.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):a.jsx("div",{className:"history-list",children:[...n].reverse().map((p,m)=>a.jsxs("div",{className:"history-item",children:[a.jsxs("div",{className:"date-badge",children:[a.jsx(_p,{size:14}),p.displayDate]}),a.jsxs("div",{className:"weight-display",children:[p.weight," kg"]})]},m))})]}),a.jsx("style",{children:`
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
            `})]})},Jh=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],Xh=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],Zh=({onBack:e,userProfile:t})=>{const[n,r]=D.useState([{id:1,text:`Hello ${t!=null&&t.name?t.name.split(" ")[0]:""}! I'm your Health Assistant. Ask me about your blood report, diet, or workout.`,sender:"bot"}]),[o,i]=D.useState(""),[l,s]=D.useState(!1),u=D.useRef(null),d=()=>{var x;(x=u.current)==null||x.scrollIntoView({behavior:"smooth"})};D.useEffect(()=>{d()},[n]);const y=x=>{const g=x.toLowerCase(),k=t!=null&&t.diseases?t.diseases.toLowerCase():"",I=t!=null&&t.allergies?t.allergies.toLowerCase():"";return Xh.some(c=>g.includes(c))?k.includes("diabetes")&&(g.includes("sugar")||g.includes("sweet")||g.includes("fruit"))?"Since you mentioned Diabetes, be very careful with high GI fruits like mangoes and chikoo. Opt for apples, berries, and papaya. Monitor your blood sugar regularly and avoid refined sugars completely.":(k.includes("hypertension")||k.includes("bp"))&&(g.includes("salt")||g.includes("diet"))?"For hypertension management, the DASH diet is recommended. Reduce sodium intake (salt), avoid pickles and papad, and increase potassium-rich foods like bananas and leafy greens.":g.includes("protein")?"Protein is the building block. vegetarians: Paneer, Dal, Soy. Non-veg: Chicken, Fish. "+(k.includes("kidney")?"However, since you have kidney concerns, please consult your doctor for the exact protein limit.":"Aim for 1.2g/kg body weight."):g.includes("pre-workout")||g.includes("before gym")?"A banana or oatmeal 45 mins before workout is great energy.":g.includes("post-workout")||g.includes("after gym")?"Post-workout, have a protein source (shake/chicken/eggs) within 45 mins to maximize recovery.":g.includes("muscle")?"Building muscle requires specific resistance training, protein surplus, and sleep. Consistency is key!":g.includes("cardio")?"Cardio improves heart health and burns calories. 150 mins/week is a good target.":g.includes("bmi")?"BMI is a rough indicator. "+(t!=null&&t.weight?`At ${t.weight}kg, your focus should be on body composition (muscle vs fat) rather than just the scale.`:"Check your weight-to-height ratio."):g.includes("diet")||g.includes("food")?I?`Given your allergies to ${I}, ensure you check food labels. Focus on whole, unprocessed foods.`:"A balanced diet with protein, good fats, and fiber is essential. Avoid processed foods.":g.includes("hemoglobin")?"Iron-rich foods (spinach, dates, red meat) help boost hemoglobin. Vitamin C helps absorption.":g.includes("sugar")?"Minimize added sugars. Natural sugars in whole fruits are generally okay in moderation.":g.includes("weight")?"Weight management is about Calorie In vs Calorie Out, quality of food, and hormonal balance.":g.includes("sleep")?"7-9 hours of sleep is non-negotiable for recovery and mental health.":"That's a good question. Based on general fitness guidelines, consistency in diet and exercise is 90% of the game. How is your sleep lately?":"I apologize, but I'm specialized in Health, Blood Reports, Nutrition, and Fitness. Ask me about your protein intake or blood levels! 🏥"},p=x=>{if(x.preventDefault(),!o.trim())return;const g={id:Date.now(),text:o,sender:"user"};r(k=>[...k,g]),i(""),s(!0),setTimeout(()=>{const k={id:Date.now()+1,text:y(g.text),sender:"bot"};r(I=>[...I,k]),s(!1)},1200)},m=x=>{const g={id:Date.now(),text:x.q,sender:"user"};r(k=>[...k,g]),s(!0),setTimeout(()=>{const k={id:Date.now()+1,text:x.a,sender:"bot"};r(I=>[...I,k]),s(!1)},1200)};return a.jsxs("div",{className:"chat-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Health Assistant"})]}),a.jsxs("div",{className:"chat-window",children:[n.map(x=>a.jsxs("div",{className:`message-row ${x.sender}`,children:[x.sender==="bot"&&a.jsx("div",{className:"avatar bot",children:a.jsx(ds,{size:16})}),a.jsx("div",{className:"message-bubble",children:x.text}),x.sender==="user"&&a.jsx("div",{className:"avatar user",children:a.jsx(Dc,{size:16})})]},x.id)),l&&a.jsxs("div",{className:"message-row bot",children:[a.jsx("div",{className:"avatar bot",children:a.jsx(ds,{size:16})}),a.jsxs("div",{className:"message-bubble typing",children:[a.jsx("span",{children:"."}),a.jsx("span",{children:"."}),a.jsx("span",{children:"."})]})]}),a.jsx("div",{ref:u})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("div",{className:"chips-row",children:Jh.map((x,g)=>a.jsx("button",{className:"chip",onClick:()=>m(x),disabled:l,children:x.q},g))}),a.jsxs("form",{onSubmit:p,className:"input-form",children:[a.jsx("input",{type:"text",value:o,onChange:x=>i(x.target.value),placeholder:"Ask about health...",className:"chat-input"}),a.jsx("button",{type:"submit",className:"send-btn",children:a.jsx(Ip,{size:20})})]})]}),a.jsx("style",{children:`
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
      `})]})},qh=({message:e,onClose:t})=>(D.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),a.jsxs("div",{className:"toast-notification",children:[a.jsx("div",{className:"icon-bg",children:a.jsx(Ep,{size:20})}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"Reminder"}),a.jsx("p",{children:e})]}),a.jsx("button",{onClick:t,className:"close-btn",children:"×"}),a.jsx("style",{children:`
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
       `})]}));function em(){const e=localStorage.getItem("user_profile"),[t,n]=D.useState(e?"dashboard":"login"),[r,o]=D.useState(null),[i,l]=D.useState(e?JSON.parse(e):null),[s,u]=D.useState(null);Ps.useEffect(()=>{const x=localStorage.getItem("user_profile");x&&l(JSON.parse(x));const g=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],k=setInterval(()=>{const I=g[Math.floor(Math.random()*g.length)];u(I)},12e4);return()=>clearInterval(k)},[]);const d=async(x,g=!1)=>{if(o(x),g){n("profile_setup");return}try{const k=await Mc.getProfile();k.success&&k.profile?(console.log("Profile found:",k.profile),l(k.profile),localStorage.setItem("user_profile",JSON.stringify(k.profile)),n("dashboard")):(console.log("No profile found, redirecting to setup"),n("profile_setup"))}catch(k){console.error("Error fetching profile:",k),localStorage.getItem("user_profile")?(l(JSON.parse(localStorage.getItem("user_profile"))),n("dashboard")):n("profile_setup")}},y=x=>{l(x),localStorage.setItem("user_profile",JSON.stringify(x)),n("dashboard")},p=x=>{n(x)},m=()=>{localStorage.removeItem("user_profile"),o(null),l(null),n("login")};return a.jsxs("div",{className:"app-container",children:[s&&a.jsx(qh,{message:s,onClose:()=>u(null)}),t==="login"&&a.jsx(xp,{onLogin:d}),t==="profile_setup"&&a.jsx(kp,{onComplete:y}),t==="dashboard"&&a.jsx(Hp,{userName:i==null?void 0:i.name,onNavigate:p,onLogout:m}),t==="bmi"&&a.jsx(Wp,{userProfile:i,onBack:()=>n("dashboard")}),t==="blood"&&a.jsx(Vh,{onBack:()=>n("dashboard")}),t==="fitness"&&a.jsx(Qh,{userProfile:i,onBack:()=>n("dashboard")}),t==="homeworkout"&&a.jsx(Kh,{onBack:()=>n("dashboard")}),t==="weightprogress"&&a.jsx(Yh,{userProfile:i,onBack:()=>n("dashboard")}),t==="chat"&&a.jsx(Zh,{userProfile:i,onBack:()=>n("dashboard")})]})}ci.createRoot(document.getElementById("root")).render(a.jsx(Ps.StrictMode,{children:a.jsx(em,{})}));
