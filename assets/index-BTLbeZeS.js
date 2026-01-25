(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ks(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ss={exports:{}},ko={},js={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Gc=Symbol.for("react.portal"),Qc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),ed=Symbol.for("react.memo"),td=Symbol.for("react.lazy"),ta=Symbol.iterator;function nd(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ns=Object.assign,Cs={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Cs,this.updater=n||bs}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=Sn.prototype;function ol(e,t,n){this.props=e,this.context=t,this.refs=Cs,this.updater=n||bs}var il=ol.prototype=new Es;il.constructor=ol;Ns(il,Sn.prototype);il.isPureReactComponent=!0;var na=Array.isArray,_s=Object.prototype.hasOwnProperty,ll={current:null},zs={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)_s.call(t,r)&&!zs.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fr,type:e,key:i,ref:a,props:o,_owner:ll.current}}function rd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function al(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function Dr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fr:case Gc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Fo(a,0):r,na(o)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Dr(o,t,n,"",function(d){return d})):o!=null&&(al(o)&&(o=rd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ra,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Fo(i,s);a+=Dr(i,t,n,u,o)}else if(u=nd(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Fo(i,s++),a+=Dr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function vr(e,t,n){if(e==null)return e;var r=[],o=0;return Dr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ar={transition:null},ld={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:ll};function Ts(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Sn;U.Fragment=Qc;U.Profiler=Yc;U.PureComponent=ol;U.StrictMode=Kc;U.Suspense=qc;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ld;U.act=Ts;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ns({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ll.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)_s.call(t,u)&&!zs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:fr,type:e.type,key:o,ref:i,props:r,_owner:a}};U.createContext=function(e){return e={$$typeof:Xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jc,_context:e},e.Consumer=e};U.createElement=Ls;U.createFactory=function(e){var t=Ls.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Zc,render:e}};U.isValidElement=al;U.lazy=function(e){return{$$typeof:td,_payload:{_status:-1,_result:e},_init:id}};U.memo=function(e,t){return{$$typeof:ed,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};U.unstable_act=Ts;U.useCallback=function(e,t){return Se.current.useCallback(e,t)};U.useContext=function(e){return Se.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};U.useEffect=function(e,t){return Se.current.useEffect(e,t)};U.useId=function(){return Se.current.useId()};U.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Se.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};U.useRef=function(e){return Se.current.useRef(e)};U.useState=function(e){return Se.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Se.current.useTransition()};U.version="18.3.1";js.exports=U;var F=js.exports;const Rs=ks(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=F,sd=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,dd=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fd={key:!0,ref:!0,__self:!0,__source:!0};function Is(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)cd.call(t,r)&&!fd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sd,type:e,key:i,ref:a,props:o,_owner:dd.current}}ko.Fragment=ud;ko.jsx=Is;ko.jsxs=Is;Ss.exports=ko;var l=Ss.exports,ci={},Ps={exports:{}},Ie={},Ms={exports:{}},Os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,y){var x=L.length;L.push(y);e:for(;0<x;){var b=x-1>>>1,M=L[b];if(0<o(M,y))L[b]=y,L[x]=M,x=b;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var y=L[0],x=L.pop();if(x!==y){L[0]=x;e:for(var b=0,M=L.length,N=M>>>1;b<N;){var _=2*(b+1)-1,$=L[_],B=_+1,V=L[B];if(0>o($,x))B<M&&0>o(V,$)?(L[b]=V,L[B]=x,b=B):(L[b]=$,L[_]=x,b=_);else if(B<M&&0>o(V,x))L[b]=V,L[B]=x,b=B;else break e}}return y}function o(L,y){var x=L.sortIndex-y.sortIndex;return x!==0?x:L.id-y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],v=1,p=null,h=3,k=!1,w=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var y=n(d);y!==null;){if(y.callback===null)r(d);else if(y.startTime<=L)r(d),y.sortIndex=y.expirationTime,t(u,y);else break;y=n(d)}}function j(L){if(g=!1,m(L),!w)if(n(u)!==null)w=!0,oe(C);else{var y=n(d);y!==null&&le(j,y.startTime-L)}}function C(L,y){w=!1,g&&(g=!1,f(P),P=-1),k=!0;var x=h;try{for(m(y),p=n(u);p!==null&&(!(p.expirationTime>y)||L&&!H());){var b=p.callback;if(typeof b=="function"){p.callback=null,h=p.priorityLevel;var M=b(p.expirationTime<=y);y=e.unstable_now(),typeof M=="function"?p.callback=M:p===n(u)&&r(u),m(y)}else r(u);p=n(u)}if(p!==null)var N=!0;else{var _=n(d);_!==null&&le(j,_.startTime-y),N=!1}return N}finally{p=null,h=x,k=!1}}var R=!1,I=null,P=-1,A=5,z=-1;function H(){return!(e.unstable_now()-z<A)}function T(){if(I!==null){var L=e.unstable_now();z=L;var y=!0;try{y=I(!0,L)}finally{y?D():(R=!1,I=null)}}else R=!1}var D;if(typeof c=="function")D=function(){c(T)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,W=Y.port2;Y.port1.onmessage=T,D=function(){W.postMessage(null)}}else D=function(){S(T,0)};function oe(L){I=L,R||(R=!0,D())}function le(L,y){P=S(function(){L(e.unstable_now())},y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,oe(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var y=3;break;default:y=h}var x=h;h=y;try{return L()}finally{h=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var x=h;h=L;try{return y()}finally{h=x}},e.unstable_scheduleCallback=function(L,y,x){var b=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?b+x:b):x=b,L){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=x+M,L={id:v++,callback:y,priorityLevel:L,startTime:x,expirationTime:M,sortIndex:-1},x>b?(L.sortIndex=x,t(d,L),n(u)===null&&L===n(d)&&(g?(f(P),P=-1):g=!0,le(j,x-b))):(L.sortIndex=M,t(u,L),w||k||(w=!0,oe(C))),L},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(L){var y=h;return function(){var x=h;h=y;try{return L.apply(this,arguments)}finally{h=x}}}})(Os);Ms.exports=Os;var pd=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=F,Re=pd;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fs=new Set,Yn={};function Qt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Fs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa={},ia={};function gd(e){return di.call(ia,e)?!0:di.call(oa,e)?!1:md.test(e)?ia[e]=!0:(oa[e]=!0,!1)}function vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yd(e,t,n,r){if(t===null||typeof t>"u"||vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var sl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sl,ul);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sl,ul);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sl,ul);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yd(t,n,o,r)&&(n=null),r||o===null?gd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),Ds=Symbol.for("react.provider"),As=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),$s=Symbol.for("react.offscreen"),la=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Do;function Pn(e){if(Do===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||""}return`
`+Do+e}var Ao=!1;function $o(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function xd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Jt:return"Portal";case fi:return"Profiler";case dl:return"StrictMode";case pi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case As:return(e.displayName||"Context")+".Consumer";case Ds:return(e._context.displayName||"Context")+".Provider";case fl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:mi(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return mi(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mi(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=Bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=kd(e))}function Hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Us(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function vi(e,t){Us(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Mn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Ws(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Ks(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var jd=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,cn=null,dn=null;function da(e){if(e=mr(e)){if(typeof bi!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Co(t),bi(e.stateNode,e.type,t))}}function Ys(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Js(){if(cn){var e=cn,t=dn;if(dn=cn=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Xs(e,t){return e(t)}function Zs(){}var Bo=!1;function qs(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Xs(e,t,n)}finally{Bo=!1,(cn!==null||dn!==null)&&(Zs(),Js())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Ni=!1;if(at)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ni=!1}function bd(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var An=!1,Xr=null,Zr=!1,Ci=null,Nd={onError:function(e){An=!0,Xr=e}};function Cd(e,t,n,r,o,i,a,s,u){An=!1,Xr=null,bd.apply(Nd,arguments)}function Ed(e,t,n,r,o,i,a,s,u){if(Cd.apply(this,arguments),An){if(An){var d=Xr;An=!1,Xr=null}else throw Error(E(198));Zr||(Zr=!0,Ci=d)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Kt(e)!==e)throw Error(E(188))}function _d(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fa(o),e;if(i===r)return fa(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function tu(e){return e=_d(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nu(e);if(t!==null)return t;e=e.sibling}return null}var ru=Re.unstable_scheduleCallback,pa=Re.unstable_cancelCallback,zd=Re.unstable_shouldYield,Ld=Re.unstable_requestPaint,ae=Re.unstable_now,Td=Re.unstable_getCurrentPriorityLevel,ml=Re.unstable_ImmediatePriority,ou=Re.unstable_UserBlockingPriority,qr=Re.unstable_NormalPriority,Rd=Re.unstable_LowPriority,iu=Re.unstable_IdlePriority,So=null,Ze=null;function Id(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Od,Pd=Math.log,Md=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Pd(e)/Md|0)|0}var kr=64,Sr=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=On(s):(i&=a,i!==0&&(r=On(i)))}else a=n&~o,a!==0?r=On(a):i!==0&&(r=On(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),o=1<<n,r|=e[n],t&=~o;return r}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ge(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Fd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function Ad(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ge(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function au(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var su,vl,uu,cu,du,_i=!1,jr=[],kt=null,St=null,jt=null,Zn=new Map,qn=new Map,vt=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function _n(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=mr(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bd(e,t,n,r,o){switch(t){case"focusin":return kt=_n(kt,e,t,n,r,o),!0;case"dragenter":return St=_n(St,e,t,n,r,o),!0;case"mouseover":return jt=_n(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zn.set(i,_n(Zn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,qn.set(i,_n(qn.get(i)||null,e,t,n,r,o)),!0}return!1}function fu(e){var t=Ft(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=eu(n),t!==null){e.blockedOn=t,du(e.priority,function(){uu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=mr(n),t!==null&&vl(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){$r(e)&&n.delete(t)}function Hd(){_i=!1,kt!==null&&$r(kt)&&(kt=null),St!==null&&$r(St)&&(St=null),jt!==null&&$r(jt)&&(jt=null),Zn.forEach(ma),qn.forEach(ma)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Hd)))}function er(e){function t(o){return zn(o,e)}if(0<jr.length){zn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&zn(kt,e),St!==null&&zn(St,e),jt!==null&&zn(jt,e),Zn.forEach(t),qn.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)fu(n),n.blockedOn===null&&vt.shift()}var fn=ft.ReactCurrentBatchConfig,to=!0;function Ud(e,t,n,r){var o=K,i=fn.transition;fn.transition=null;try{K=1,yl(e,t,n,r)}finally{K=o,fn.transition=i}}function Wd(e,t,n,r){var o=K,i=fn.transition;fn.transition=null;try{K=4,yl(e,t,n,r)}finally{K=o,fn.transition=i}}function yl(e,t,n,r){if(to){var o=zi(e,t,n,r);if(o===null)Zo(e,t,r,no,n),ha(e,r);else if(Bd(o,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<$d.indexOf(e)){for(;o!==null;){var i=mr(o);if(i!==null&&su(i),i=zi(e,t,n,r),i===null&&Zo(e,t,r,no,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var no=null;function zi(e,t,n,r){if(no=null,e=hl(r),e=Ft(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case ml:return 1;case ou:return 4;case qr:case Rd:return 16;case iu:return 536870912;default:return 16}default:return 16}}var xt=null,xl=null,Br=null;function hu(){if(Br)return Br;var e,t=xl,n=t.length,r,o="value"in xt?xt.value:xt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Br=o.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function ga(){return!1}function Pe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?br:ga,this.isPropagationStopped=ga,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Pe(jn),hr=re({},jn,{view:0,detail:0}),Vd=Pe(hr),Uo,Wo,Ln,jo=re({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Uo=e.screenX-Ln.screenX,Wo=e.screenY-Ln.screenY):Wo=Uo=0,Ln=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),va=Pe(jo),Gd=re({},jo,{dataTransfer:0}),Qd=Pe(Gd),Kd=re({},hr,{relatedTarget:0}),Vo=Pe(Kd),Yd=re({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=Pe(Yd),Xd=re({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=Pe(Xd),qd=re({},jn,{data:0}),ya=Pe(qd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function kl(){return rf}var of=re({},hr,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=Pe(of),af=re({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=Pe(af),sf=re({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),uf=Pe(sf),cf=re({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=Pe(cf),ff=re({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Pe(ff),hf=[9,13,27,32],Sl=at&&"CompositionEvent"in window,$n=null;at&&"documentMode"in document&&($n=document.documentMode);var mf=at&&"TextEvent"in window&&!$n,mu=at&&(!Sl||$n&&8<$n&&11>=$n),wa=" ",ka=!1;function gu(e,t){switch(e){case"keyup":return hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function gf(e,t){switch(e){case"compositionend":return vu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function vf(e,t){if(Zt)return e==="compositionend"||!Sl&&gu(e,t)?(e=hu(),Br=xl=xt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mu&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function yu(e,t,n,r){Ys(r),t=ro(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,tr=null;function xf(e){zu(e,0)}function bo(e){var t=tn(e);if(Hs(t))return e}function wf(e,t){if(e==="change")return t}var xu=!1;if(at){var Go;if(at){var Qo="oninput"in document;if(!Qo){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),Qo=typeof ja.oninput=="function"}Go=Qo}else Go=!1;xu=Go&&(!document.documentMode||9<document.documentMode)}function ba(){Bn&&(Bn.detachEvent("onpropertychange",wu),tr=Bn=null)}function wu(e){if(e.propertyName==="value"&&bo(tr)){var t=[];yu(t,tr,e,hl(e)),qs(xf,t)}}function kf(e,t,n){e==="focusin"?(ba(),Bn=t,tr=n,Bn.attachEvent("onpropertychange",wu)):e==="focusout"&&ba()}function Sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(tr)}function jf(e,t){if(e==="click")return bo(t)}function bf(e,t){if(e==="input"||e==="change")return bo(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Nf;function nr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!di.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Su(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=Su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ku(n.ownerDocument.documentElement,n)){if(r!==null&&jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ca(n,i);var a=Ca(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=at&&"documentMode"in document&&11>=document.documentMode,qt=null,Li=null,Hn=null,Ti=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ti||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&nr(Hn,r)||(Hn=r,r=ro(Li,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Ko={},ju={};at&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function No(e){if(Ko[e])return Ko[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ju)return Ko[e]=t[n];return e}var bu=No("animationend"),Nu=No("animationiteration"),Cu=No("animationstart"),Eu=No("transitionend"),_u=new Map,_a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){_u.set(e,t),Qt(t,[e])}for(var Yo=0;Yo<_a.length;Yo++){var Jo=_a[Yo],_f=Jo.toLowerCase(),zf=Jo[0].toUpperCase()+Jo.slice(1);Tt(_f,"on"+zf)}Tt(bu,"onAnimationEnd");Tt(Nu,"onAnimationIteration");Tt(Cu,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Eu,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ed(r,t,void 0,e),e.currentTarget=null}function zu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;za(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;za(o,s,d),i=u}}}if(Zr)throw e=Ci,Zr=!1,Ci=null,e}function X(e,t){var n=t[Oi];n===void 0&&(n=t[Oi]=new Set);var r=e+"__bubble";n.has(r)||(Lu(t,e,2,!1),n.add(r))}function Xo(e,t,n){var r=0;t&&(r|=4),Lu(n,e,r,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Cr]){e[Cr]=!0,Fs.forEach(function(n){n!=="selectionchange"&&(Lf.has(n)||Xo(n,!1,e),Xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,Xo("selectionchange",!1,t))}}function Lu(e,t,n,r){switch(pu(t)){case 1:var o=Ud;break;case 4:o=Wd;break;default:o=yl}n=o.bind(null,t,n,e),o=void 0,!Ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ft(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}qs(function(){var d=i,v=hl(n),p=[];e:{var h=_u.get(e);if(h!==void 0){var k=wl,w=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":k=lf;break;case"focusin":w="focus",k=Vo;break;case"focusout":w="blur",k=Vo;break;case"beforeblur":case"afterblur":k=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=uf;break;case bu:case Nu:case Cu:k=Jd;break;case Eu:k=df;break;case"scroll":k=Vd;break;case"wheel":k=pf;break;case"copy":case"cut":case"paste":k=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xa}var g=(t&4)!==0,S=!g&&e==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var c=d,m;c!==null;){m=c;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,f!==null&&(j=Xn(c,f),j!=null&&g.push(or(c,j,m)))),S)break;c=c.return}0<g.length&&(h=new k(h,w,null,n,v),p.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ji&&(w=n.relatedTarget||n.fromElement)&&(Ft(w)||w[st]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=d,w=w?Ft(w):null,w!==null&&(S=Kt(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=d),k!==w)){if(g=va,j="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=xa,j="onPointerLeave",f="onPointerEnter",c="pointer"),S=k==null?h:tn(k),m=w==null?h:tn(w),h=new g(j,c+"leave",k,n,v),h.target=S,h.relatedTarget=m,j=null,Ft(v)===d&&(g=new g(f,c+"enter",w,n,v),g.target=m,g.relatedTarget=S,j=g),S=j,k&&w)t:{for(g=k,f=w,c=0,m=g;m;m=Yt(m))c++;for(m=0,j=f;j;j=Yt(j))m++;for(;0<c-m;)g=Yt(g),c--;for(;0<m-c;)f=Yt(f),m--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=Yt(g),f=Yt(f)}g=null}else g=null;k!==null&&La(p,h,k,g,!1),w!==null&&S!==null&&La(p,S,w,g,!0)}}e:{if(h=d?tn(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var C=wf;else if(Sa(h))if(xu)C=bf;else{C=Sf;var R=kf}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=jf);if(C&&(C=C(e,d))){yu(p,C,n,v);break e}R&&R(e,h,d),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&yi(h,"number",h.value)}switch(R=d?tn(d):window,e){case"focusin":(Sa(R)||R.contentEditable==="true")&&(qt=R,Li=d,Hn=null);break;case"focusout":Hn=Li=qt=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Ea(p,n,v);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":Ea(p,n,v)}var I;if(Sl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zt?gu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(mu&&n.locale!=="ko"&&(Zt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zt&&(I=hu()):(xt=v,xl="value"in xt?xt.value:xt.textContent,Zt=!0)),R=ro(d,P),0<R.length&&(P=new ya(P,e,null,n,v),p.push({event:P,listeners:R}),I?P.data=I:(I=vu(n),I!==null&&(P.data=I)))),(I=mf?gf(e,n):vf(e,n))&&(d=ro(d,"onBeforeInput"),0<d.length&&(v=new ya("onBeforeInput","beforeinput",null,n,v),p.push({event:v,listeners:d}),v.data=I))}zu(p,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Xn(e,n),i!=null&&r.unshift(or(e,i,o)),i=Xn(e,t),i!=null&&r.push(or(e,i,o))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Xn(n,i),u!=null&&a.unshift(or(n,u,s))):o||(u=Xn(n,i),u!=null&&a.push(or(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Tf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Rf,"")}function Er(e,t,n){if(t=Ta(t),Ta(e)!==t&&n)throw Error(E(425))}function oo(){}var Ri=null,Ii=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(Mf)}:Mi;function Mf(e){setTimeout(function(){throw e})}function qo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);er(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+bn,ir="__reactProps$"+bn,st="__reactContainer$"+bn,Oi="__reactEvents$"+bn,Of="__reactListeners$"+bn,Ff="__reactHandles$"+bn;function Ft(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ia(e);e!==null;){if(n=e[Xe])return n;e=Ia(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Co(e){return e[ir]||null}var Fi=[],nn=-1;function Rt(e){return{current:e}}function Z(e){0>nn||(e.current=Fi[nn],Fi[nn]=null,nn--)}function J(e,t){nn++,Fi[nn]=e.current,e.current=t}var Lt={},xe=Rt(Lt),Ce=Rt(!1),Ht=Lt;function gn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function io(){Z(Ce),Z(xe)}function Pa(e,t,n){if(xe.current!==Lt)throw Error(E(168));J(xe,t),J(Ce,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,wd(e)||"Unknown",o));return re({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Ht=xe.current,J(xe,e),J(Ce,Ce.current),!0}function Ma(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Tu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,Z(Ce),Z(xe),J(xe,e)):Z(Ce),J(Ce,n)}var rt=null,Eo=!1,ei=!1;function Ru(e){rt===null?rt=[e]:rt.push(e)}function Df(e){Eo=!0,Ru(e)}function It(){if(!ei&&rt!==null){ei=!0;var e=0,t=K;try{var n=rt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Eo=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),ru(ml,It),o}finally{K=t,ei=!1}}return null}var rn=[],on=0,ao=null,so=0,Me=[],Oe=0,Ut=null,ot=1,it="";function Mt(e,t){rn[on++]=so,rn[on++]=ao,ao=e,so=t}function Iu(e,t,n){Me[Oe++]=ot,Me[Oe++]=it,Me[Oe++]=Ut,Ut=e;var r=ot;e=it;var o=32-Ge(r)-1;r&=~(1<<o),n+=1;var i=32-Ge(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ot=1<<32-Ge(t)+o|n<<o|r,it=i+e}else ot=1<<i|n<<o|r,it=e}function bl(e){e.return!==null&&(Mt(e,1),Iu(e,1,0))}function Nl(e){for(;e===ao;)ao=rn[--on],rn[on]=null,so=rn[--on],rn[on]=null;for(;e===Ut;)Ut=Me[--Oe],Me[Oe]=null,it=Me[--Oe],Me[Oe]=null,ot=Me[--Oe],Me[Oe]=null}var Te=null,Le=null,ee=!1,Ve=null;function Pu(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Le=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Le=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(ee){var t=Le;if(t){var n=t;if(!Oa(e,t)){if(Di(e))throw Error(E(418));t=bt(n.nextSibling);var r=Te;t&&Oa(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,ee=!1,Te=e)}}else{if(Di(e))throw Error(E(418));e.flags=e.flags&-4097|2,ee=!1,Te=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function _r(e){if(e!==Te)return!1;if(!ee)return Fa(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=Le)){if(Di(e))throw Mu(),Error(E(418));for(;t;)Pu(e,t),t=bt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Te?bt(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=Le;e;)e=bt(e.nextSibling)}function vn(){Le=Te=null,ee=!1}function Cl(e){Ve===null?Ve=[e]:Ve.push(e)}var Af=ft.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Da(e){var t=e._init;return t(e._payload)}function Ou(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=_t(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,j){return c===null||c.tag!==6?(c=ai(m,f.mode,j),c.return=f,c):(c=o(c,m),c.return=f,c)}function u(f,c,m,j){var C=m.type;return C===Xt?v(f,c,m.props.children,j,m.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&Da(C)===c.type)?(j=o(c,m.props),j.ref=Tn(f,c,m),j.return=f,j):(j=Yr(m.type,m.key,m.props,null,f.mode,j),j.ref=Tn(f,c,m),j.return=f,j)}function d(f,c,m,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=si(m,f.mode,j),c.return=f,c):(c=o(c,m.children||[]),c.return=f,c)}function v(f,c,m,j,C){return c===null||c.tag!==7?(c=Bt(m,f.mode,j,C),c.return=f,c):(c=o(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ai(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yr:return m=Yr(c.type,c.key,c.props,null,f.mode,m),m.ref=Tn(f,null,c),m.return=f,m;case Jt:return c=si(c,f.mode,m),c.return=f,c;case mt:var j=c._init;return p(f,j(c._payload),m)}if(Mn(c)||Cn(c))return c=Bt(c,f.mode,m,null),c.return=f,c;zr(f,c)}return null}function h(f,c,m,j){var C=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(f,c,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yr:return m.key===C?u(f,c,m,j):null;case Jt:return m.key===C?d(f,c,m,j):null;case mt:return C=m._init,h(f,c,C(m._payload),j)}if(Mn(m)||Cn(m))return C!==null?null:v(f,c,m,j,null);zr(f,m)}return null}function k(f,c,m,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(m)||null,s(c,f,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case yr:return f=f.get(j.key===null?m:j.key)||null,u(c,f,j,C);case Jt:return f=f.get(j.key===null?m:j.key)||null,d(c,f,j,C);case mt:var R=j._init;return k(f,c,m,R(j._payload),C)}if(Mn(j)||Cn(j))return f=f.get(m)||null,v(c,f,j,C,null);zr(c,j)}return null}function w(f,c,m,j){for(var C=null,R=null,I=c,P=c=0,A=null;I!==null&&P<m.length;P++){I.index>P?(A=I,I=null):A=I.sibling;var z=h(f,I,m[P],j);if(z===null){I===null&&(I=A);break}e&&I&&z.alternate===null&&t(f,I),c=i(z,c,P),R===null?C=z:R.sibling=z,R=z,I=A}if(P===m.length)return n(f,I),ee&&Mt(f,P),C;if(I===null){for(;P<m.length;P++)I=p(f,m[P],j),I!==null&&(c=i(I,c,P),R===null?C=I:R.sibling=I,R=I);return ee&&Mt(f,P),C}for(I=r(f,I);P<m.length;P++)A=k(I,f,P,m[P],j),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?P:A.key),c=i(A,c,P),R===null?C=A:R.sibling=A,R=A);return e&&I.forEach(function(H){return t(f,H)}),ee&&Mt(f,P),C}function g(f,c,m,j){var C=Cn(m);if(typeof C!="function")throw Error(E(150));if(m=C.call(m),m==null)throw Error(E(151));for(var R=C=null,I=c,P=c=0,A=null,z=m.next();I!==null&&!z.done;P++,z=m.next()){I.index>P?(A=I,I=null):A=I.sibling;var H=h(f,I,z.value,j);if(H===null){I===null&&(I=A);break}e&&I&&H.alternate===null&&t(f,I),c=i(H,c,P),R===null?C=H:R.sibling=H,R=H,I=A}if(z.done)return n(f,I),ee&&Mt(f,P),C;if(I===null){for(;!z.done;P++,z=m.next())z=p(f,z.value,j),z!==null&&(c=i(z,c,P),R===null?C=z:R.sibling=z,R=z);return ee&&Mt(f,P),C}for(I=r(f,I);!z.done;P++,z=m.next())z=k(I,f,P,z.value,j),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?P:z.key),c=i(z,c,P),R===null?C=z:R.sibling=z,R=z);return e&&I.forEach(function(T){return t(f,T)}),ee&&Mt(f,P),C}function S(f,c,m,j){if(typeof m=="object"&&m!==null&&m.type===Xt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yr:e:{for(var C=m.key,R=c;R!==null;){if(R.key===C){if(C=m.type,C===Xt){if(R.tag===7){n(f,R.sibling),c=o(R,m.props.children),c.return=f,f=c;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===mt&&Da(C)===R.type){n(f,R.sibling),c=o(R,m.props),c.ref=Tn(f,R,m),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}m.type===Xt?(c=Bt(m.props.children,f.mode,j,m.key),c.return=f,f=c):(j=Yr(m.type,m.key,m.props,null,f.mode,j),j.ref=Tn(f,c,m),j.return=f,f=j)}return a(f);case Jt:e:{for(R=m.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=o(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=si(m,f.mode,j),c.return=f,f=c}return a(f);case mt:return R=m._init,S(f,c,R(m._payload),j)}if(Mn(m))return w(f,c,m,j);if(Cn(m))return g(f,c,m,j);zr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,m),c.return=f,f=c):(n(f,c),c=ai(m,f.mode,j),c.return=f,f=c),a(f)):n(f,c)}return S}var yn=Ou(!0),Fu=Ou(!1),uo=Rt(null),co=null,ln=null,El=null;function _l(){El=ln=co=null}function zl(e){var t=uo.current;Z(uo),e._currentValue=t}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){co=e,El=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(co===null)throw Error(E(308));ln=e,co.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Dt=null;function Ll(e){Dt===null?Dt=[e]:Dt.push(e)}function Du(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ll(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Ll(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function Ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}function Aa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;gt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==a&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,v=d=u=null,s=i;do{var h=s.lane,k=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,g=s;switch(h=t,k=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){p=w.call(k,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(k,p,h):w,h==null)break e;p=re({},p,h);break e;case 2:gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=k,u=p):v=v.next=k,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(v===null&&(u=p),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Vt|=a,e.lanes=a,e.memoizedState=p}}function $a(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var gr={},qe=Rt(gr),lr=Rt(gr),ar=Rt(gr);function At(e){if(e===gr)throw Error(E(174));return e}function Rl(e,t){switch(J(ar,t),J(lr,e),J(qe,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}Z(qe),J(qe,t)}function xn(){Z(qe),Z(lr),Z(ar)}function $u(e){At(ar.current);var t=At(qe.current),n=wi(t,e.type);t!==n&&(J(lr,e),J(qe,n))}function Il(e){lr.current===e&&(Z(qe),Z(lr))}var te=Rt(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function Pl(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var Wr=ft.ReactCurrentDispatcher,ni=ft.ReactCurrentBatchConfig,Wt=0,ne=null,ue=null,de=null,ho=!1,Un=!1,sr=0,$f=0;function ge(){throw Error(E(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Ol(e,t,n,r,o,i){if(Wt=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?Wf:Vf,e=n(r,o),Un){i=0;do{if(Un=!1,sr=0,25<=i)throw Error(E(301));i+=1,de=ue=null,t.updateQueue=null,Wr.current=Gf,e=n(r,o)}while(Un)}if(Wr.current=mo,t=ue!==null&&ue.next!==null,Wt=0,de=ue=ne=null,ho=!1,t)throw Error(E(300));return e}function Fl(){var e=sr!==0;return sr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ne.memoizedState=de=e:de=de.next=e,de}function $e(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?ne.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(E(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?ne.memoizedState=de=e:de=de.next=e}return de}function ur(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=$e(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var v=d.lane;if((Wt&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,ne.lanes|=v,Vt|=v}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ke(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,Vt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=$e(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ke(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bu(){}function Hu(e,t){var n=ne,r=$e(),o=t(),i=!Ke(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Dl(Vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,cr(9,Wu.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(E(349));Wt&30||Uu(n,t,o)}return o}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wu(e,t,n,r){t.value=n,t.getSnapshot=r,Gu(t)&&Qu(e)}function Vu(e,t,n){return n(function(){Gu(t)&&Qu(e)})}function Gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Qu(e){var t=ut(e,1);t!==null&&Qe(t,e,1,-1)}function Ba(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,ne,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ku(){return $e().memoizedState}function Vr(e,t,n,r){var o=Je();ne.flags|=e,o.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function _o(e,t,n,r){var o=$e();r=r===void 0?null:r;var i=void 0;if(ue!==null){var a=ue.memoizedState;if(i=a.destroy,r!==null&&Ml(r,a.deps)){o.memoizedState=cr(t,n,i,r);return}}ne.flags|=e,o.memoizedState=cr(1|t,n,i,r)}function Ha(e,t){return Vr(8390656,8,e,t)}function Dl(e,t){return _o(2048,8,e,t)}function Yu(e,t){return _o(4,2,e,t)}function Ju(e,t){return _o(4,4,e,t)}function Xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,n){return n=n!=null?n.concat([e]):null,_o(4,4,Xu.bind(null,t,e),n)}function Al(){}function qu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tc(e,t,n){return Wt&21?(Ke(n,t)||(n=lu(),ne.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function Bf(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{K=n,ni.transition=r}}function nc(){return $e().memoizedState}function Hf(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e))oc(t,n);else if(n=Du(e,t,n,r),n!==null){var o=ke();Qe(n,e,r,o),ic(n,t,r)}}function Uf(e,t,n){var r=Et(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))oc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,a)){var u=t.interleaved;u===null?(o.next=o,Ll(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Du(e,t,o,r),n!==null&&(o=ke(),Qe(n,e,r,o),ic(n,t,r))}}function rc(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function oc(e,t){Un=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}var mo={readContext:Ae,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Wf={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,Xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hf.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:Al,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=Bf.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=Je();if(ee){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));Wt&30||Uu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ha(Vu.bind(null,r,i,e),[e]),r.flags|=2048,cr(9,Wu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=fe.identifierPrefix;if(ee){var n=it,r=ot;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:Ae,useCallback:qu,useContext:Ae,useEffect:Dl,useImperativeHandle:Zu,useInsertionEffect:Yu,useLayoutEffect:Ju,useMemo:ec,useReducer:ri,useRef:Ku,useState:function(){return ri(ur)},useDebugValue:Al,useDeferredValue:function(e){var t=$e();return tc(t,ue.memoizedState,e)},useTransition:function(){var e=ri(ur)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Hu,useId:nc,unstable_isNewReconciler:!1},Gf={readContext:Ae,useCallback:qu,useContext:Ae,useEffect:Dl,useImperativeHandle:Zu,useInsertionEffect:Yu,useLayoutEffect:Ju,useMemo:ec,useReducer:oi,useRef:Ku,useState:function(){return oi(ur)},useDebugValue:Al,useDeferredValue:function(e){var t=$e();return ue===null?t.memoizedState=e:tc(t,ue.memoizedState,e)},useTransition:function(){var e=oi(ur)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Hu,useId:nc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),i=lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Qe(t,e,o,r),Ur(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),i=lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Qe(t,e,o,r),Ur(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Et(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Qe(t,e,r,n),Ur(t,e,r))}};function Ua(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(o,i):!0}function lc(e,t,n){var r=!1,o=Lt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=Ee(t)?Ht:xe.current,r=t.contextTypes,i=(r=r!=null)?gn(e,o):Lt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Tl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=Ee(t)?Ht:xe.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=xd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ui(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function ac(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,qi=r),Ui(e,t)},n}function sc(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ui(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ui(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Ga(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Kf=ft.ReactCurrentOwner,Ne=!1;function we(e,t,n,r){t.child=e===null?Fu(t,null,n,r):yn(t,e.child,n,r)}function Ka(e,t,n,r,o){n=n.render;var i=t.ref;return pn(t,o),r=Ol(e,t,n,r,i,o),n=Fl(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(ee&&n&&bl(t),t.flags|=1,we(e,t,r,o),t.child)}function Ya(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ql(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,uc(e,t,i,r,o)):(e=Yr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(a,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=_t(i,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(nr(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,ct(e,t,o)}return Wi(e,t,n,r,o)}function cc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(sn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(sn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(sn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(sn,ze),ze|=r;return we(e,t,o,n),t.child}function dc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wi(e,t,n,r,o){var i=Ee(n)?Ht:xe.current;return i=gn(t,i),pn(t,o),n=Ol(e,t,n,r,i,o),r=Fl(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(ee&&r&&bl(t),t.flags|=1,we(e,t,n,o),t.child)}function Ja(e,t,n,r,o){if(Ee(n)){var i=!0;lo(t)}else i=!1;if(pn(t,o),t.stateNode===null)Gr(e,t),lc(t,n,r),Hi(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=Ee(n)?Ht:xe.current,d=gn(t,d));var v=n.getDerivedStateFromProps,p=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Wa(t,a,r,d),gt=!1;var h=t.memoizedState;a.state=h,fo(t,r,a,o),u=t.memoizedState,s!==r||h!==u||Ce.current||gt?(typeof v=="function"&&(Bi(t,n,v,r),u=t.memoizedState),(s=gt||Ua(t,n,s,r,h,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Au(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ue(t.type,s),a.props=d,p=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=Ee(n)?Ht:xe.current,u=gn(t,u));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||h!==u)&&Wa(t,a,r,u),gt=!1,h=t.memoizedState,a.state=h,fo(t,r,a,o);var w=t.memoizedState;s!==p||h!==w||Ce.current||gt?(typeof k=="function"&&(Bi(t,n,k,r),w=t.memoizedState),(d=gt||Ua(t,n,d,r,h,w,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Vi(e,t,n,r,i,o)}function Vi(e,t,n,r,o,i){dc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Ma(t,n,!1),ct(e,t,i);r=t.stateNode,Kf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,s,i)):we(e,t,s,i),t.memoizedState=r.state,o&&Ma(t,n,!0),t.child}function fc(e){var t=e.stateNode;t.pendingContext?Pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pa(e,t.context,!1),Rl(e,t.containerInfo)}function Xa(e,t,n,r,o){return vn(),Cl(o),t.flags|=256,we(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,t,n){var r=t.pendingProps,o=te.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(te,o&1),e===null)return Ai(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ro(a,r,0,null),e=Bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qi(n),t.memoizedState=Gi,e):$l(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Yf(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=_t(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=_t(s,i):(i=Bt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Qi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=_t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $l(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Cl(r),yn(t,e.child,null,n),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ii(Error(E(422))),Lr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ro({mode:"visible",children:r.children},o,0,null),i=Bt(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=Qi(a),t.memoizedState=Gi,i);if(!(t.mode&1))return Lr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=ii(i,r,void 0),Lr(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ne||s){if(r=fe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ut(e,o),Qe(r,e,o,-1))}return Gl(),r=ii(Error(E(421))),Lr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Le=bt(o.nextSibling),Te=t,ee=!0,Ve=null,e!==null&&(Me[Oe++]=ot,Me[Oe++]=it,Me[Oe++]=Ut,ot=e.id,it=e.overflow,Ut=t),t=$l(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function li(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function hc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),li(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}li(t,!0,n,null,i);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:fc(t),vn();break;case 5:$u(t);break;case 1:Ee(t.type)&&lo(t);break;case 4:Rl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(uo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?pc(e,t,n):(J(te,te.current&1),e=ct(e,t,n),e!==null?e.sibling:null);J(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,cc(e,t,n)}return ct(e,t,n)}var mc,Ki,gc,vc;mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ki=function(){};gc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(qe.current);var i=null;switch(n){case"input":o=gi(e,o),r=gi(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=xi(e,o),r=xi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}ki(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&X("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};vc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xf(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ee(t.type)&&io(),ve(t),null;case 3:return r=t.stateNode,xn(),Z(Ce),Z(xe),Pl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(nl(Ve),Ve=null))),Ki(e,t),ve(t),null;case 5:Il(t);var o=At(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)gc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=At(qe.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xe]=t,r[ir]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<Fn.length;o++)X(Fn[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":aa(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":ua(r,i),X("invalid",r)}ki(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",""+s]):Yn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&X("scroll",r)}switch(n){case"input":xr(r),sa(r,i,!0);break;case"textarea":xr(r),ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xe]=t,e[ir]=r,mc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Si(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fn.length;o++)X(Fn[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":aa(e,r),o=gi(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":ua(e,r),o=xi(e,r),X("invalid",e);break;default:o=r}ki(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Ks(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gs(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jn(e,u):typeof u=="number"&&Jn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&X("scroll",e):u!=null&&cl(e,i,u,a))}switch(n){case"input":xr(e),sa(e,r,!1);break;case"textarea":xr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)vc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=At(ar.current),At(qe.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(i=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return ve(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Le!==null&&t.mode&1&&!(t.flags&128))Mu(),vn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Xe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ve!==null&&(nl(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ce===0&&(ce=3):Gl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return xn(),Ki(e,t),e===null&&rr(t.stateNode.containerInfo),ve(t),null;case 10:return zl(t.type._context),ve(t),null;case 17:return Ee(t.type)&&io(),ve(t),null;case 19:if(Z(te),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Rn(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=po(e),a!==null){for(t.flags|=128,Rn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>kn&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304)}else{if(!r)if(e=po(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ee)return ve(t),null}else 2*ae()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=te.current,J(te,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Vl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Zf(e,t){switch(Nl(t),t.tag){case 1:return Ee(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),Z(Ce),Z(xe),Pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Il(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return xn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var Tr=!1,ye=!1,qf=typeof WeakSet=="function"?WeakSet:Set,O=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Yi(e,t,n){try{n()}catch(r){ie(e,t,r)}}var qa=!1;function ep(e,t){if(Ri=to,e=Su(),jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,v=0,p=e,h=null;t:for(;;){for(var k;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(k=p.firstChild)!==null;)h=p,p=k;for(;;){if(p===e)break t;if(h===n&&++d===o&&(s=a),h===i&&++v===r&&(u=a),(k=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=k}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},to=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,S=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ue(t.type,g),S);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(j){ie(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=qa,qa=!1,w}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yi(t,n,i)}o=o.next}while(o!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[ir],delete t[Oi],delete t[Of],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var pe=null,We=!1;function ht(e,t,n){for(n=n.child;n!==null;)wc(e,t,n),n=n.sibling}function wc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:ye||an(n,t);case 6:var r=pe,o=We;pe=null,ht(e,t,n),pe=r,We=o,pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?qo(e.parentNode,n):e.nodeType===1&&qo(e,n),er(e)):qo(pe,n.stateNode));break;case 4:r=pe,o=We,pe=n.stateNode.containerInfo,We=!0,ht(e,t,n),pe=r,We=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Yi(n,t,a),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!ye&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,ht(e,t,n),ye=r):ht(e,t,n);break;default:ht(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var o=up.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,We=!1;break e;case 3:pe=s.stateNode.containerInfo,We=!0;break e;case 4:pe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(pe===null)throw Error(E(160));wc(i,a,o),pe=null,We=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ie(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kc(t,e),t=t.sibling}function kc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),r&4){try{Wn(3,e,e.return),Lo(3,e)}catch(g){ie(e,e.return,g)}try{Wn(5,e,e.return)}catch(g){ie(e,e.return,g)}}break;case 1:Be(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Be(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Jn(o,"")}catch(g){ie(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Us(o,i),Si(s,a);var d=Si(s,i);for(a=0;a<u.length;a+=2){var v=u[a],p=u[a+1];v==="style"?Ks(o,p):v==="dangerouslySetInnerHTML"?Gs(o,p):v==="children"?Jn(o,p):cl(o,v,p,d)}switch(s){case"input":vi(o,i);break;case"textarea":Ws(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?un(o,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?un(o,!!i.multiple,i.defaultValue,!0):un(o,!!i.multiple,i.multiple?[]:"",!1))}o[ir]=i}catch(g){ie(e,e.return,g)}}break;case 6:if(Be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ie(e,e.return,g)}}break;case 3:if(Be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(g){ie(e,e.return,g)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ul=ae())),r&4&&ts(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||v,Be(t,e),ye=d):Be(t,e),Ye(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(O=e,v=e.child;v!==null;){for(p=O=v;O!==null;){switch(h=O,k=h.child,h.tag){case 0:case 11:case 14:case 15:Wn(4,h,h.return);break;case 1:an(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){ie(r,n,g)}}break;case 5:an(h,h.return);break;case 22:if(h.memoizedState!==null){rs(p);continue}}k!==null?(k.return=h,O=k):rs(p)}v=v.sibling}e:for(v=null,p=e;;){if(p.tag===5){if(v===null){v=p;try{o=p.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qs("display",a))}catch(g){ie(e,e.return,g)}}}else if(p.tag===6){if(v===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){ie(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;v===p&&(v=null),p=p.return}v===p&&(v=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Be(t,e),Ye(e),r&4&&ts(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xc(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jn(o,""),r.flags&=-33);var i=es(e);Zi(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=es(e);Xi(e,s,a);break;default:throw Error(E(161))}}catch(u){ie(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){O=e,Sc(e)}function Sc(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Tr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=Tr;var d=ye;if(Tr=a,(ye=u)&&!d)for(O=o;O!==null;)a=O,u=a.child,a.tag===22&&a.memoizedState!==null?os(o):u!==null?(u.return=a,O=u):os(o);for(;i!==null;)O=i,Sc(i),i=i.sibling;O=o,Tr=s,ye=d}ns(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):ns(e)}}function ns(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$a(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$a(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var p=v.dehydrated;p!==null&&er(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ye||t.flags&512&&Ji(t)}catch(h){ie(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function rs(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function os(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(u){ie(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ie(t,o,u)}}var i=t.return;try{Ji(t)}catch(u){ie(t,i,u)}break;case 5:var a=t.return;try{Ji(t)}catch(u){ie(t,a,u)}}}catch(u){ie(t,t.return,u)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var np=Math.ceil,go=ft.ReactCurrentDispatcher,Bl=ft.ReactCurrentOwner,De=ft.ReactCurrentBatchConfig,G=0,fe=null,se=null,he=0,ze=0,sn=Rt(0),ce=0,dr=null,Vt=0,To=0,Hl=0,Vn=null,be=null,Ul=0,kn=1/0,nt=null,vo=!1,qi=null,Ct=null,Rr=!1,wt=null,yo=0,Gn=0,el=null,Qr=-1,Kr=0;function ke(){return G&6?ae():Qr!==-1?Qr:Qr=ae()}function Et(e){return e.mode&1?G&2&&he!==0?he&-he:Af.transition!==null?(Kr===0&&(Kr=lu()),Kr):(e=K,e!==0||(e=window.event,e=e===void 0?16:pu(e.type)),e):1}function Qe(e,t,n,r){if(50<Gn)throw Gn=0,el=null,Error(E(185));pr(e,n,r),(!(G&2)||e!==fe)&&(e===fe&&(!(G&2)&&(To|=n),ce===4&&yt(e,he)),_e(e,r),n===1&&G===0&&!(t.mode&1)&&(kn=ae()+500,Eo&&It()))}function _e(e,t){var n=e.callbackNode;Dd(e,t);var r=eo(e,e===fe?he:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Df(is.bind(null,e)):Ru(is.bind(null,e)),Pf(function(){!(G&6)&&It()}),n=null;else{switch(au(r)){case 1:n=ml;break;case 4:n=ou;break;case 16:n=qr;break;case 536870912:n=iu;break;default:n=qr}n=Lc(n,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jc(e,t){if(Qr=-1,Kr=0,G&6)throw Error(E(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=eo(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xo(e,r);else{t=r;var o=G;G|=2;var i=Nc();(fe!==e||he!==t)&&(nt=null,kn=ae()+500,$t(e,t));do try{ip();break}catch(s){bc(e,s)}while(!0);_l(),go.current=i,G=o,se!==null?t=0:(fe=null,he=0,t=ce)}if(t!==0){if(t===2&&(o=Ei(e),o!==0&&(r=o,t=tl(e,o))),t===1)throw n=dr,$t(e,0),yt(e,r),_e(e,ae()),n;if(t===6)yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!rp(o)&&(t=xo(e,r),t===2&&(i=Ei(e),i!==0&&(r=i,t=tl(e,i))),t===1))throw n=dr,$t(e,0),yt(e,r),_e(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ot(e,be,nt);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Ul+500-ae(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Mi(Ot.bind(null,e,be,nt),t);break}Ot(e,be,nt);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ge(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=Mi(Ot.bind(null,e,be,nt),r);break}Ot(e,be,nt);break;case 5:Ot(e,be,nt);break;default:throw Error(E(329))}}}return _e(e,ae()),e.callbackNode===n?jc.bind(null,e):null}function tl(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=xo(e,t),e!==2&&(t=be,be=n,t!==null&&nl(t)),e}function nl(e){be===null?be=e:be.push.apply(be,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ke(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Hl,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function is(e){if(G&6)throw Error(E(327));hn();var t=eo(e,0);if(!(t&1))return _e(e,ae()),null;var n=xo(e,t);if(e.tag!==0&&n===2){var r=Ei(e);r!==0&&(t=r,n=tl(e,r))}if(n===1)throw n=dr,$t(e,0),yt(e,t),_e(e,ae()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,be,nt),_e(e,ae()),null}function Wl(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(kn=ae()+500,Eo&&It())}}function Gt(e){wt!==null&&wt.tag===0&&!(G&6)&&hn();var t=G;G|=1;var n=De.transition,r=K;try{if(De.transition=null,K=1,e)return e()}finally{K=r,De.transition=n,G=t,!(G&6)&&It()}}function Vl(){ze=sn.current,Z(sn)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:xn(),Z(Ce),Z(xe),Pl();break;case 5:Il(r);break;case 4:xn();break;case 13:Z(te);break;case 19:Z(te);break;case 10:zl(r.type._context);break;case 22:case 23:Vl()}n=n.return}if(fe=e,se=e=_t(e.current,null),he=ze=t,ce=0,dr=null,Hl=To=Vt=0,be=Vn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Dt=null}return e}function bc(e,t){do{var n=se;try{if(_l(),Wr.current=mo,ho){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ho=!1}if(Wt=0,de=ue=ne=null,Un=!1,sr=0,Bl.current=null,n===null||n.return===null){ce=1,dr=t,se=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,p=v.tag;if(!(v.mode&1)&&(p===0||p===11||p===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Ga(a);if(k!==null){k.flags&=-257,Qa(k,a,s,i,t),k.mode&1&&Va(i,d,t),t=k,u=d;var w=t.updateQueue;if(w===null){var g=new Set;g.add(u),t.updateQueue=g}else w.add(u);break e}else{if(!(t&1)){Va(i,d,t),Gl();break e}u=Error(E(426))}}else if(ee&&s.mode&1){var S=Ga(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Qa(S,a,s,i,t),Cl(wn(u,s));break e}}i=u=wn(u,s),ce!==4&&(ce=2),Vn===null?Vn=[i]:Vn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=ac(i,u,t);Aa(i,f);break e;case 1:s=u;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ct===null||!Ct.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=sc(i,s,t);Aa(i,j);break e}}i=i.return}while(i!==null)}Ec(n)}catch(C){t=C,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Nc(){var e=go.current;return go.current=mo,e===null?mo:e}function Gl(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(Vt&268435455)&&!(To&268435455)||yt(fe,he)}function xo(e,t){var n=G;G|=2;var r=Nc();(fe!==e||he!==t)&&(nt=null,$t(e,t));do try{op();break}catch(o){bc(e,o)}while(!0);if(_l(),G=n,go.current=r,se!==null)throw Error(E(261));return fe=null,he=0,ce}function op(){for(;se!==null;)Cc(se)}function ip(){for(;se!==null&&!zd();)Cc(se)}function Cc(e){var t=zc(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Ec(e):se=t,Bl.current=null}function Ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zf(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=Xf(n,t,ze),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function Ot(e,t,n){var r=K,o=De.transition;try{De.transition=null,K=1,lp(e,t,n,r)}finally{De.transition=o,K=r}return null}function lp(e,t,n,r){do hn();while(wt!==null);if(G&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ad(e,i),e===fe&&(se=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Lc(qr,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var a=K;K=1;var s=G;G|=4,Bl.current=null,ep(e,n),kc(n,e),Cf(Ii),to=!!Ri,Ii=Ri=null,e.current=n,tp(n),Ld(),G=s,K=a,De.transition=i}else e.current=n;if(Rr&&(Rr=!1,wt=e,yo=o),i=e.pendingLanes,i===0&&(Ct=null),Id(n.stateNode),_e(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=qi,qi=null,e;return yo&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===el?Gn++:(Gn=0,el=e):Gn=0,It(),null}function hn(){if(wt!==null){var e=au(yo),t=De.transition,n=K;try{if(De.transition=null,K=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,yo=0,G&6)throw Error(E(331));var o=G;for(G|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(O=d;O!==null;){var v=O;switch(v.tag){case 0:case 11:case 15:Wn(8,v,i)}var p=v.child;if(p!==null)p.return=v,O=p;else for(;O!==null;){v=O;var h=v.sibling,k=v.return;if(yc(v),v===d){O=null;break}if(h!==null){h.return=k,O=h;break}O=k}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var S=g.sibling;g.sibling=null,g=S}while(g!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,O=f;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=c;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Lo(9,s)}}catch(C){ie(s,s.return,C)}if(s===a){O=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,O=j;break e}O=s.return}}if(G=o,It(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{K=n,De.transition=t}}return!1}function ls(e,t,n){t=wn(n,t),t=ac(e,t,1),e=Nt(e,t,1),t=ke(),e!==null&&(pr(e,1,t),_e(e,t))}function ie(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=sc(t,e,1),t=Nt(t,e,1),e=ke(),t!==null&&(pr(t,1,e),_e(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>ae()-Ul?$t(e,0):Hl|=n),_e(e,t)}function _c(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ke();e=ut(e,t),e!==null&&(pr(e,t,n),_e(e,n))}function sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_c(e,n)}function up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),_c(e,n)}var zc;zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,Jf(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,ee&&t.flags&1048576&&Iu(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gr(e,t),e=t.pendingProps;var o=gn(t,xe.current);pn(t,n),o=Ol(null,t,r,e,o,n);var i=Fl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,lo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Tl(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,Hi(t,r,e,n),t=Vi(null,t,r,!0,i,n)):(t.tag=0,ee&&i&&bl(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dp(r),e=Ue(r,e),o){case 0:t=Wi(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,Ue(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Wi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Ja(e,t,r,o,n);case 3:e:{if(fc(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Au(e,t),fo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(E(423)),t),t=Xa(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(E(424)),t),t=Xa(e,t,r,n,o);break e}else for(Le=bt(t.stateNode.containerInfo.firstChild),Te=t,ee=!0,Ve=null,n=Fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ct(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return $u(t),e===null&&Ai(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Pi(r,o)?a=null:i!==null&&Pi(r,i)&&(t.flags|=32),dc(e,t),we(e,t,a,n),t.child;case 6:return e===null&&Ai(t),null;case 13:return pc(e,t,n);case 4:return Rl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Ka(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(uo,r._currentValue),r._currentValue=a,i!==null)if(Ke(i.value,a)){if(i.children===o.children&&!Ce.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=lt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),$i(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(E(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),$i(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pn(t,n),o=Ae(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),Ya(e,t,r,o,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Gr(e,t),t.tag=1,Ee(r)?(e=!0,lo(t)):e=!1,pn(t,n),lc(t,r,o),Hi(t,r,o,n),Vi(null,t,r,!0,e,n);case 19:return hc(e,t,n);case 22:return cc(e,t,n)}throw Error(E(156,t.tag))};function Lc(e,t){return ru(e,t)}function cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new cp(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===pl)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ql(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xt:return Bt(n.children,o,i,t);case dl:a=8,o|=8;break;case fi:return e=Fe(12,n,t,o|2),e.elementType=fi,e.lanes=i,e;case pi:return e=Fe(13,n,t,o),e.elementType=pi,e.lanes=i,e;case hi:return e=Fe(19,n,t,o),e.elementType=hi,e.lanes=i,e;case $s:return Ro(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ds:a=10;break e;case As:a=9;break e;case fl:a=11;break e;case pl:a=14;break e;case mt:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Fe(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Bt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=$s,e.lanes=n,e.stateNode={isHidden:!1},e}function ai(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,o,i,a,s,u){return e=new fp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tl(i),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return Lt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Tu(e,n,t)}return t}function Rc(e,t,n,r,o,i,a,s,u){return e=Kl(n,r,!0,e,o,i,a,s,u),e.context=Tc(null),n=e.current,r=ke(),o=Et(n),i=lt(r,o),i.callback=t??null,Nt(n,i,o),e.current.lanes=o,pr(e,o,r),_e(e,r),e}function Io(e,t,n,r){var o=t.current,i=ke(),a=Et(o);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,a),e!==null&&(Qe(e,o,a,i),Ur(e,o,a)),a}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yl(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function hp(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}Po.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Io(e,t,null,null)};Po.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Io(null,e,null,null)}),t[st]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&fu(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function mp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=wo(a);i.call(d)}}var a=Rc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=a,e[st]=a.current,rr(e.nodeType===8?e.parentNode:e),Gt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=wo(u);s.call(d)}}var u=Kl(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=u,e[st]=u.current,rr(e.nodeType===8?e.parentNode:e),Gt(function(){Io(t,u,n,r)}),u}function Oo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=wo(a);s.call(u)}}Io(t,a,e,o)}else a=mp(n,t,e,o,r);return wo(a)}su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(gl(t,n|1),_e(t,ae()),!(G&6)&&(kn=ae()+500,It()))}break;case 13:Gt(function(){var r=ut(e,1);if(r!==null){var o=ke();Qe(r,e,1,o)}}),Yl(e,1)}};vl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ke();Qe(t,e,134217728,n)}Yl(e,134217728)}};uu=function(e){if(e.tag===13){var t=Et(e),n=ut(e,t);if(n!==null){var r=ke();Qe(n,e,t,r)}Yl(e,t)}};cu=function(){return K};du=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};bi=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(E(90));Hs(r),vi(r,o)}}}break;case"textarea":Ws(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Xs=Wl;Zs=Gt;var gp={usingClientEntryPoint:!1,Events:[mr,tn,Co,Ys,Js,Wl]},In={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{So=Ir.inject(vp),Ze=Ir}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(E(200));return pp(e,t,null,n)};Ie.createRoot=function(e,t){if(!Xl(e))throw Error(E(299));var n=!1,r="",o=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,rr(e.nodeType===8?e.parentNode:e),new Jl(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=tu(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Gt(e)};Ie.hydrate=function(e,t,n){if(!Mo(t))throw Error(E(200));return Oo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Xl(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Rc(t,null,e,1,n??null,o,!1,i,a),e[st]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Po(t)};Ie.render=function(e,t,n){if(!Mo(t))throw Error(E(200));return Oo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(E(40));return e._reactRootContainer?(Gt(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Ie.unstable_batchedUpdates=Wl;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Oo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Ie;var yp=Ps.exports,us=yp;ci.createRoot=us.createRoot,ci.hydrateRoot=us.hydrateRoot;const xp="modulepreload",wp=function(e,t){return new URL(e,t).href},cs={},kp=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(d=>{if(d=wp(d,r),d in cs)return;cs[d]=!0;const v=d.endsWith(".css"),p=v?'[rel="stylesheet"]':"";if(!!r)for(let w=a.length-1;w>=0;w--){const g=a[w];if(g.href===d&&(!v||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const k=document.createElement("link");if(k.rel=v?"stylesheet":xp,v||(k.as="script"),k.crossOrigin="",k.href=d,u&&k.setAttribute("nonce",u),document.head.appendChild(k),v)return new Promise((w,g)=>{k.addEventListener("load",w),k.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Sp=({onLogin:e})=>{const[t,n]=F.useState(!0),[r,o]=F.useState(""),[i,a]=F.useState(""),[s,u]=F.useState(""),[d,v]=F.useState(!1),[p,h]=F.useState(!1),k=async w=>{if(w.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(i.length<6){u("Password must be at least 6 characters long.");return}v(!0);try{const{api:g}=await kp(async()=>{const{api:S}=await Promise.resolve().then(()=>jp);return{api:S}},void 0,import.meta.url);if(t){const S=await g.login(r,i);S.success?(localStorage.setItem("auth_token",S.token),e({email:S.user.email,name:r.split("@")[0]},!1)):(u(S.error||"Login failed"),v(!1))}else{const S=await g.register(r,i);S.success?(localStorage.setItem("auth_token",S.token),e({email:S.user.email,name:r.split("@")[0]},!0)):(u(S.error||"Registration failed"),v(!1))}}catch(g){console.error("Authentication error:",g),u("Could not connect to server. Please try again later."),v(!1)}};return l.jsxs("div",{className:"login-container",children:[l.jsxs("div",{className:"login-card fade-in",children:[l.jsxs("div",{className:"logo-section",children:[l.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),l.jsx("h1",{children:"Blood & Fit"}),l.jsx("p",{children:"Your personal health companion"})]}),l.jsxs("form",{onSubmit:k,className:"login-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:w=>o(w.target.value),required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsxs("div",{className:"password-wrapper",children:[l.jsx("input",{type:p?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:i,onChange:w=>a(w.target.value),required:!0}),l.jsx("button",{type:"button",className:"toggle-password",onClick:()=>h(!p),children:p?"Hide":"Show"})]}),t&&l.jsx("div",{className:"forgot-password",children:l.jsx("span",{onClick:()=>alert("Reset link sent to email!"),children:"Forgot Password?"})})]}),s&&l.jsx("div",{className:"error-box fade-in",children:l.jsxs("span",{children:["⚠️ ",s]})}),l.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?l.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),l.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",l.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),l.jsx("style",{children:`
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
      `})]})},Pr="https://blood-report-fitness-evaluation-system.onrender.com",Mc={async register(e,t){return await(await fetch(`${Pr}/api/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json()},async login(e,t){return await(await fetch(`${Pr}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json()},async getProfile(){const e=localStorage.getItem("auth_token");return await(await fetch(`${Pr}/api/profile`,{headers:{Authorization:`Bearer ${e}`}})).json()},async updateProfile(e){const t=localStorage.getItem("auth_token");return await(await fetch(`${Pr}/api/profile`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}},jp=Object.freeze(Object.defineProperty({__proto__:null,api:Mc},Symbol.toStringTag,{value:"Module"})),bp=({onComplete:e})=>{const[t,n]=F.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=a=>{const{name:s,value:u}=a.target;n(d=>({...d,[s]:u}))},o=(a,s)=>Math.round(parseInt(a||0)*30.48+parseInt(s||0)*2.54),i=a=>{if(a.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||o(t.heightFt,t.heightIn)};e(s)};return l.jsxs("div",{className:"profile-container fade-in",children:[l.jsxs("div",{className:"card profile-card",children:[l.jsxs("div",{className:"header",children:[l.jsx("h2",{children:"Let's know you better"}),l.jsx("p",{children:"Enter your details for personalized health insights."})]}),l.jsxs("form",{onSubmit:i,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Age"}),l.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[l.jsx("option",{value:"male",children:"Male"}),l.jsx("option",{value:"female",children:"Female"}),l.jsx("option",{value:"other",children:"Other"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Weight (kg)"}),l.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),l.jsxs("div",{className:"height-section",children:[l.jsx("label",{children:"Height"}),l.jsx("div",{className:"tabs"}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"CM"}),l.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),l.jsx("div",{className:"or-divider",children:"OR"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"Feet"}),l.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"Inches"}),l.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),l.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),l.jsx("style",{children:`
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
 */var Np={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(e,t)=>{const n=F.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},v)=>F.createElement("svg",{ref:v,...Np,width:o,height:o,stroke:r,strokeWidth:a?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Cp(e)}`,s].join(" "),...d},[...t.map(([p,h])=>F.createElement(p,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=Q("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=Q("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=Q("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=Q("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=Q("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Q("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=Q("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Q("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=Q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=Q("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Q("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Q("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Q("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Q("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Q("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Q("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Q("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=Q("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=Q("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Q("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Qp=({user:e,onClose:t,onLogout:n,onNavigate:r})=>{const[o,i]=F.useState("health"),[a,s]=F.useState(!1),[u,d]=F.useState({name:e.name||"",age:e.age||"",gender:e.gender||"Male",height:e.height||"",weight:e.weight||"",bloodGroup:e.bloodGroup||"",diseases:e.diseases||"",allergies:e.allergies||"",notes:e.notes||""}),[v,p]=F.useState([]);F.useEffect(()=>{const g=localStorage.getItem(`profile_${e.email}`);g&&d({...u,...JSON.parse(g)});const S=e.email?`reports_${e.email}`:"blood_reports",f=JSON.parse(localStorage.getItem(S)||"[]");p(f)},[e.email]);const h=()=>{localStorage.setItem(`profile_${e.email}`,JSON.stringify(u)),s(!1),alert("Profile saved successfully!")},w=(()=>{if(!u.height||!u.weight)return null;const g=u.height/100;return(u.weight/(g*g)).toFixed(1)})();return l.jsxs("div",{className:"profile-dashboard fixed-fullscreen",children:[l.jsxs("div",{className:"profile-header",children:[l.jsx("button",{onClick:t,className:"p-back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h3",{children:"My Profile"}),l.jsx("button",{onClick:n,className:"p-logout",children:"Logout"})]}),l.jsxs("div",{className:"p-hero",children:[l.jsx("div",{className:"p-avatar",children:l.jsx($c,{size:40,color:"white"})}),l.jsx("h2",{children:u.name||"User"}),l.jsxs("div",{className:"p-badges",children:[w&&l.jsxs("span",{className:"p-badge",children:["BMI: ",w]}),u.bloodGroup&&l.jsx("span",{className:"p-badge red",children:u.bloodGroup})]})]}),l.jsxs("div",{className:"p-tabs",children:[l.jsx("button",{className:`p-tab ${o==="health"?"active":""}`,onClick:()=>i("health"),children:"Health Profile"}),l.jsx("button",{className:`p-tab ${o==="reports"?"active":""}`,onClick:()=>i("reports"),children:"Reports"})]}),l.jsxs("div",{className:"p-content",children:[o==="health"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsxs("div",{className:"pane-header",children:[l.jsx("h4",{children:"Personal & Medical Data"}),!a&&l.jsx("button",{className:"edit-toggle",onClick:()=>s(!0),children:"Edit"})]}),l.jsxs("div",{className:"form-grid",style:{marginBottom:"20px"},children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Age"}),l.jsx("input",{type:"number",disabled:!a,value:u.age,onChange:g=>d({...u,age:g.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Blood Group"}),l.jsxs("select",{disabled:!a,value:u.bloodGroup,onChange:g=>d({...u,bloodGroup:g.target.value}),children:[l.jsx("option",{value:"",children:"Select"}),l.jsx("option",{children:"A+"}),l.jsx("option",{children:"A-"}),l.jsx("option",{children:"B+"}),l.jsx("option",{children:"B-"}),l.jsx("option",{children:"O+"}),l.jsx("option",{children:"O-"}),l.jsx("option",{children:"AB+"}),l.jsx("option",{children:"AB-"})]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Weight (kg)"}),l.jsx("input",{type:"number",disabled:!a,value:u.weight,onChange:g=>d({...u,weight:g.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Height (cm)"}),l.jsx("input",{type:"number",disabled:!a,value:u.height,onChange:g=>d({...u,height:g.target.value})})]})]}),l.jsxs("div",{className:"health-form",children:[l.jsx("label",{children:"Existing Conditions (Diseases)"}),l.jsx("textarea",{disabled:!a,placeholder:"e.g. Diabetes, Hypertension...",value:u.diseases,onChange:g=>d({...u,diseases:g.target.value})}),l.jsx("label",{children:"Allergies"}),l.jsx("textarea",{disabled:!a,placeholder:"e.g. Peanuts, Penicillin...",value:u.allergies,onChange:g=>d({...u,allergies:g.target.value})}),l.jsx("label",{children:"Health Notes"}),l.jsx("textarea",{className:"large-text",disabled:!a,placeholder:"Write your fitness goals here...",value:u.notes,onChange:g=>d({...u,notes:g.target.value})})]}),a&&l.jsxs("button",{className:"save-btn",onClick:h,children:[l.jsx(Dp,{size:18})," Save Health Data"]}),l.jsxs("div",{className:"milestones-preview",style:{marginTop:"20px",cursor:"pointer"},onClick:()=>r("weightprogress"),children:[l.jsxs("div",{className:"pane-header",style:{marginBottom:"10px"},children:[l.jsx("h5",{children:"Weight Tracker"}),l.jsx("span",{style:{fontSize:"12px",color:"var(--color-primary)"},children:"View Graph →"})]}),l.jsx("p",{style:{fontSize:"12px",color:"#64748b"},children:"Track your weight journey over time."})]})]}),o==="reports"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsx("h4",{children:"Recent Blood Reports"}),v.length===0?l.jsx("p",{className:"empty-state",children:"No reports uploaded yet."}):l.jsx("div",{className:"reports-list",children:v.map((g,S)=>l.jsxs("div",{className:"report-item",children:[l.jsx("div",{className:"r-icon",children:l.jsx(Zl,{size:20})}),l.jsxs("div",{className:"r-info",children:[l.jsx("span",{className:"r-date",children:g.date}),l.jsxs("span",{className:"r-summary",children:[g.results.length," Parameters Analyzed"]})]}),l.jsx("button",{className:"r-action",onClick:()=>alert("Report details view simulated."),children:"View"})]},S))})]})]}),l.jsx("style",{children:`
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
            `})]})},Kp=({userName:e,onNavigate:t,onLogout:n})=>{const[r,o]=F.useState(!1);if(r)return l.jsx(Qp,{user:{name:e,email:"user@example.com"},onClose:()=>o(!1),onLogout:n,onNavigate:t});const i=[{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:l.jsx(Zl,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:l.jsx(Lp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:l.jsx(Qn,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:l.jsx(Pp,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:l.jsx(Mp,{size:24}),color:"#7209B7",bg:"#F3E8FF"},{id:"diet",title:"Specialized Diet",desc:"Meals based on Blood Report",icon:l.jsx(_p,{size:24}),color:"#10B981",bg:"#ECFDF5"}];return l.jsxs("div",{className:"dashboard-container fade-in",children:[l.jsxs("header",{className:"dash-header",children:[l.jsx("div",{className:"avatar",onClick:()=>o(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),l.jsxs("div",{className:"welcome-text",children:[l.jsx("p",{children:"Welcome back,"}),l.jsx("h3",{children:e||"User"})]})]}),l.jsx("div",{className:"stats-preview",children:l.jsxs("div",{className:"stat-card",children:[l.jsx("h4",{children:"Stay Hydrated! 💧"}),l.jsx("p",{children:"Drink 8 glasses of water today."})]})}),l.jsx("div",{className:"options-grid",children:i.map(a=>l.jsxs("button",{className:"option-card",onClick:()=>t(a.id),style:{"--hover-color":a.color},children:[l.jsx("div",{className:"icon-box",style:{color:a.color,backgroundColor:a.bg},children:a.icon}),l.jsxs("div",{className:"text-box",children:[l.jsx("h4",{children:a.title}),l.jsx("p",{children:a.desc})]}),l.jsx("div",{className:"arrow",children:"→"})]},a.id))}),l.jsx("style",{children:`
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
      `})]})},Yp=({userProfile:e,onBack:t})=>{const[n,r]=F.useState("metric"),[o,i]=F.useState(""),[a,s]=F.useState(""),[u,d]=F.useState(""),[v,p]=F.useState(""),[h,k]=F.useState("male"),[w,g]=F.useState("sedentary"),[S,f]=F.useState(null),[c,m]=F.useState(""),[j,C]=F.useState(""),[R,I]=F.useState("");F.useEffect(()=>{e&&(e.height&&i(e.height),e.weight&&d(e.weight),e.age&&p(e.age),e.gender&&k(e.gender.toLowerCase()))},[e]);const P=()=>{let z=0,H=0;if(n==="metric"){if(!o||!u)return;z=parseFloat(o)/100,H=parseFloat(u)}else{if(!o||!u)return;z=(parseFloat(o)*12+(parseFloat(a)||0))*.0254,H=parseFloat(u)*.453592}if(z<=0||H<=0)return;const T=parseFloat((H/(z*z)).toFixed(1));f(T);let D="",Y="",W="";T<18.5?(D="Underweight",Y="var(--color-accent)",W="You may need to increase your calorie intake. Focus on nutrient-dense foods."):T<24.9?(D="Normal Weight",Y="var(--color-success)",W="Great job! You have a healthy body weight. Maintain it with balanced diet and exercise."):T<29.9?(D="Overweight",Y="var(--color-warning)",W="Try to incorporate more cardio and monitor portion sizes to reach a healthier range."):(D="Obese",Y="var(--color-danger)",W="It is recommended to consult a healthcare provider for a personalized weight management plan."),m({label:D,color:Y}),I(W);const le=z/.0254-60;let L=0;h==="male"?L=52+1.9*Math.max(0,le):L=49+1.7*Math.max(0,le),C(`${L.toFixed(1)} - ${(L*1.1).toFixed(1)} kg`)},A=()=>{f(null),i(""),d(""),p("")};return l.jsxs("div",{className:"advanced-bmi-container fade-in",children:[l.jsxs("div",{className:"bmi-header",children:[l.jsx("button",{onClick:t,className:"btn-icon",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Advanced BMI Calculator"}),l.jsx("div",{style:{width:24}})," "]}),l.jsxs("div",{className:"calculator-grid",children:[l.jsxs("div",{className:"card input-card",children:[l.jsxs("div",{className:"toggle-row",children:[l.jsx("button",{className:`toggle-btn ${n==="metric"?"active":""}`,onClick:()=>r("metric"),children:"Metric (cm/kg)"}),l.jsx("button",{className:`toggle-btn ${n==="imperial"?"active":""}`,onClick:()=>r("imperial"),children:"Imperial (ft/lbs)"})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{value:h,onChange:z=>k(z.target.value),children:[l.jsx("option",{value:"male",children:"Male"}),l.jsx("option",{value:"female",children:"Female"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Age (years)"}),l.jsx("input",{type:"number",value:v,onChange:z=>p(z.target.value),placeholder:"25"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:n==="metric"?"Height (cm)":"Height (ft)"}),l.jsx("input",{type:"number",value:o,onChange:z=>i(z.target.value),placeholder:n==="metric"?"175":"5"})]}),n==="imperial"&&l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Inches"}),l.jsx("input",{type:"number",value:a,onChange:z=>s(z.target.value),placeholder:"10"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:n==="metric"?"Weight (kg)":"Weight (lbs)"}),l.jsx("input",{type:"number",value:u,onChange:z=>d(z.target.value),placeholder:n==="metric"?"70":"150"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Activity Level"}),l.jsxs("select",{value:w,onChange:z=>g(z.target.value),children:[l.jsx("option",{value:"sedentary",children:"Sedentary (Little or no exercise)"}),l.jsx("option",{value:"light",children:"Lightly active (1-3 days/week)"}),l.jsx("option",{value:"moderate",children:"Moderately active (3-5 days/week)"}),l.jsx("option",{value:"active",children:"Very active (6-7 days/week)"})]})]}),l.jsxs("div",{className:"action-row",children:[l.jsx("button",{className:"reset-btn",onClick:A,children:l.jsx(Fp,{size:18})}),l.jsx("button",{className:"calculate-btn",onClick:P,children:"Calculate BMI"})]})]}),S&&l.jsxs("div",{className:"card result-card fade-in",children:[l.jsxs("div",{className:"result-header",children:[l.jsx("h3",{children:"Your Result"}),l.jsx("div",{className:"bmi-badge",style:{backgroundColor:c.color},children:c.label})]}),l.jsxs("div",{className:"bmi-display",children:[l.jsx("span",{className:"bmi-number",style:{color:c.color},children:S}),l.jsx("span",{className:"bmi-label",children:"BMI Score"})]}),l.jsxs("div",{className:"progress-bar-container",children:[l.jsx("div",{className:"progress-track"}),l.jsx("div",{className:"progress-fill",style:{width:`${Math.min(Math.max(S/40*100,0),100)}%`,backgroundColor:c.color}}),l.jsxs("div",{className:"markers",children:[l.jsx("span",{style:{left:"46%"},children:"18.5"}),l.jsx("span",{style:{left:"62.5%"},children:"25"}),l.jsx("span",{style:{left:"75%"},children:"30"})]})]}),l.jsxs("div",{className:"health-insight",children:[l.jsxs("div",{className:"insight-item",children:[l.jsx(Oc,{size:20,className:"icon"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Ideal Weight"}),l.jsx("p",{children:j})]})]}),l.jsxs("div",{className:"insight-item",children:[l.jsx(Dc,{size:20,className:"icon"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Health Tip"}),l.jsx("p",{children:R})]})]})]})]})]}),l.jsx("style",{children:`
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
            `})]})};var Jp={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(y,x,b){y[x]=b.value},a,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",v=s.toStringTag||"@@toStringTag";function p(y,x,b){return Object.defineProperty(y,x,{value:b,enumerable:!0,configurable:!0,writable:!0}),y[x]}try{p({},"")}catch{p=function(x,b,M){return x[b]=M}}function h(y,x,b,M){var N=x&&x.prototype instanceof m?x:m,_=Object.create(N.prototype),$=new oe(M||[]);return i(_,"_invoke",{value:T(y,b,$)}),_}n.wrap=h;function k(y,x,b){try{return{type:"normal",arg:y.call(x,b)}}catch(M){return{type:"throw",arg:M}}}var w="suspendedStart",g="suspendedYield",S="executing",f="completed",c={};function m(){}function j(){}function C(){}var R={};p(R,u,function(){return this});var I=Object.getPrototypeOf,P=I&&I(I(le([])));P&&P!==r&&o.call(P,u)&&(R=P);var A=C.prototype=m.prototype=Object.create(R);j.prototype=C,i(A,"constructor",{value:C,configurable:!0}),i(C,"constructor",{value:j,configurable:!0}),j.displayName=p(C,v,"GeneratorFunction");function z(y){["next","throw","return"].forEach(function(x){p(y,x,function(b){return this._invoke(x,b)})})}n.isGeneratorFunction=function(y){var x=typeof y=="function"&&y.constructor;return x?x===j||(x.displayName||x.name)==="GeneratorFunction":!1},n.mark=function(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,C):(y.__proto__=C,p(y,v,"GeneratorFunction")),y.prototype=Object.create(A),y},n.awrap=function(y){return{__await:y}};function H(y,x){function b(_,$,B,V){var q=k(y[_],y,$);if(q.type==="throw")V(q.arg);else{var pt=q.arg,et=pt.value;return et&&typeof et=="object"&&o.call(et,"__await")?x.resolve(et.__await).then(function(tt){b("next",tt,B,V)},function(tt){b("throw",tt,B,V)}):x.resolve(et).then(function(tt){pt.value=tt,B(pt)},function(tt){return b("throw",tt,B,V)})}}var M;function N(_,$){function B(){return new x(function(V,q){b(_,$,V,q)})}return M=M?M.then(B,B):B()}i(this,"_invoke",{value:N})}z(H.prototype),p(H.prototype,d,function(){return this}),n.AsyncIterator=H,n.async=function(y,x,b,M,N){N===void 0&&(N=Promise);var _=new H(h(y,x,b,M),N);return n.isGeneratorFunction(x)?_:_.next().then(function($){return $.done?$.value:_.next()})};function T(y,x,b){var M=w;return function(_,$){if(M===S)throw new Error("Generator is already running");if(M===f){if(_==="throw")throw $;return L()}for(b.method=_,b.arg=$;;){var B=b.delegate;if(B){var V=D(B,b);if(V){if(V===c)continue;return V}}if(b.method==="next")b.sent=b._sent=b.arg;else if(b.method==="throw"){if(M===w)throw M=f,b.arg;b.dispatchException(b.arg)}else b.method==="return"&&b.abrupt("return",b.arg);M=S;var q=k(y,x,b);if(q.type==="normal"){if(M=b.done?f:g,q.arg===c)continue;return{value:q.arg,done:b.done}}else q.type==="throw"&&(M=f,b.method="throw",b.arg=q.arg)}}}function D(y,x){var b=x.method,M=y.iterator[b];if(M===a)return x.delegate=null,b==="throw"&&y.iterator.return&&(x.method="return",x.arg=a,D(y,x),x.method==="throw")||b!=="return"&&(x.method="throw",x.arg=new TypeError("The iterator does not provide a '"+b+"' method")),c;var N=k(M,y.iterator,x.arg);if(N.type==="throw")return x.method="throw",x.arg=N.arg,x.delegate=null,c;var _=N.arg;if(!_)return x.method="throw",x.arg=new TypeError("iterator result is not an object"),x.delegate=null,c;if(_.done)x[y.resultName]=_.value,x.next=y.nextLoc,x.method!=="return"&&(x.method="next",x.arg=a);else return _;return x.delegate=null,c}z(A),p(A,v,"Generator"),p(A,u,function(){return this}),p(A,"toString",function(){return"[object Generator]"});function Y(y){var x={tryLoc:y[0]};1 in y&&(x.catchLoc=y[1]),2 in y&&(x.finallyLoc=y[2],x.afterLoc=y[3]),this.tryEntries.push(x)}function W(y){var x=y.completion||{};x.type="normal",delete x.arg,y.completion=x}function oe(y){this.tryEntries=[{tryLoc:"root"}],y.forEach(Y,this),this.reset(!0)}n.keys=function(y){var x=Object(y),b=[];for(var M in x)b.push(M);return b.reverse(),function N(){for(;b.length;){var _=b.pop();if(_ in x)return N.value=_,N.done=!1,N}return N.done=!0,N}};function le(y){if(y){var x=y[u];if(x)return x.call(y);if(typeof y.next=="function")return y;if(!isNaN(y.length)){var b=-1,M=function N(){for(;++b<y.length;)if(o.call(y,b))return N.value=y[b],N.done=!1,N;return N.value=a,N.done=!0,N};return M.next=M}}return{next:L}}n.values=le;function L(){return{value:a,done:!0}}return oe.prototype={constructor:oe,reset:function(y){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(W),!y)for(var x in this)x.charAt(0)==="t"&&o.call(this,x)&&!isNaN(+x.slice(1))&&(this[x]=a)},stop:function(){this.done=!0;var y=this.tryEntries[0],x=y.completion;if(x.type==="throw")throw x.arg;return this.rval},dispatchException:function(y){if(this.done)throw y;var x=this;function b(V,q){return _.type="throw",_.arg=y,x.next=V,q&&(x.method="next",x.arg=a),!!q}for(var M=this.tryEntries.length-1;M>=0;--M){var N=this.tryEntries[M],_=N.completion;if(N.tryLoc==="root")return b("end");if(N.tryLoc<=this.prev){var $=o.call(N,"catchLoc"),B=o.call(N,"finallyLoc");if($&&B){if(this.prev<N.catchLoc)return b(N.catchLoc,!0);if(this.prev<N.finallyLoc)return b(N.finallyLoc)}else if($){if(this.prev<N.catchLoc)return b(N.catchLoc,!0)}else if(B){if(this.prev<N.finallyLoc)return b(N.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(y,x){for(var b=this.tryEntries.length-1;b>=0;--b){var M=this.tryEntries[b];if(M.tryLoc<=this.prev&&o.call(M,"finallyLoc")&&this.prev<M.finallyLoc){var N=M;break}}N&&(y==="break"||y==="continue")&&N.tryLoc<=x&&x<=N.finallyLoc&&(N=null);var _=N?N.completion:{};return _.type=y,_.arg=x,N?(this.method="next",this.next=N.finallyLoc,c):this.complete(_)},complete:function(y,x){if(y.type==="throw")throw y.arg;return y.type==="break"||y.type==="continue"?this.next=y.arg:y.type==="return"?(this.rval=this.arg=y.arg,this.method="return",this.next="end"):y.type==="normal"&&x&&(this.next=x),c},finish:function(y){for(var x=this.tryEntries.length-1;x>=0;--x){var b=this.tryEntries[x];if(b.finallyLoc===y)return this.complete(b.completion,b.afterLoc),W(b),c}},catch:function(y){for(var x=this.tryEntries.length-1;x>=0;--x){var b=this.tryEntries[x];if(b.tryLoc===y){var M=b.completion;if(M.type==="throw"){var N=M.arg;W(b)}return N}}throw new Error("illegal catch attempt")},delegateYield:function(y,x,b){return this.delegate={iterator:le(y),resultName:x,nextLoc:b},this.method==="next"&&(this.arg=a),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Jp);var ql=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Xp=ql;let hs=0;var Bc=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=Xp("Job",hs),hs+=1),{id:r,action:t,payload:n}},Nn={};let ea=!1;Nn.logging=ea;Nn.setLogging=e=>{ea=e};Nn.log=(...e)=>ea?console.log.apply(void 0,e):null;const Zp=Bc,{log:Mr}=Nn,qp=ql;let ms=0;var eh=()=>{const e=qp("Scheduler",ms),t={},n={};let r=[];ms+=1;const o=()=>r.length,i=()=>Object.keys(t).length,a=()=>{if(r.length!==0){const p=Object.keys(t);for(let h=0;h<p.length;h+=1)if(typeof n[p[h]]>"u"){r[0](t[p[h]]);break}}},s=(p,h)=>new Promise((k,w)=>{const g=Zp({action:p,payload:h});r.push(async S=>{r.shift(),n[S.id]=g;try{k(await S[p].apply(void 0,[...h,g.id]))}catch(f){w(f)}finally{delete n[S.id],a()}}),Mr(`[${e}]: Add ${g.id} to JobQueue`),Mr(`[${e}]: JobQueue length=${r.length}`),a()});return{addWorker:p=>(t[p.id]=p,Mr(`[${e}]: Add ${p.id}`),Mr(`[${e}]: Number of workers=${i()}`),a(),p.id),addJob:async(p,...h)=>{if(i()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(p,h)},terminate:async()=>{Object.keys(t).forEach(async p=>{await t[p].terminate()}),r=[]},getQueueLen:o,getNumWorkers:i}};function th(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function nh(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var rh=nh;const oh=rh;var ih=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":oh()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof th=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const lh=ih("type")==="browser",ah=lh?e=>new URL(e,window.location.href).href:e=>e;var sh=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=ah(t[n]))}),t},uh=e=>{const t=[],n=[],r=[],o=[],i=[];return e.blocks&&e.blocks.forEach(a=>{a.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(v=>{i.push({...v,page:e,block:a,paragraph:s,line:u,word:d})}),o.push({...d,page:e,block:a,paragraph:s,line:u})}),r.push({...u,page:e,block:a,paragraph:s})}),n.push({...s,page:e,block:a})}),t.push({...a,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:i}},Hc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const ch="5.1.1",dh={version:ch};var fh={workerBlobURL:!0,logger:()=>{}};const ph=dh.version,hh=fh;var mh={...hh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${ph}/dist/worker.min.js`},gh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},vh=e=>{e.terminate()},yh=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},xh=async(e,t)=>{e.postMessage(t)};const ui=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),rl=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await rl(e.src)),e.tagName==="VIDEO"&&(t=await rl(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await ui(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await ui(n)}else(e instanceof File||e instanceof Blob)&&(t=await ui(e));return new Uint8Array(t)};var wh=rl;const kh=mh,Sh=gh,jh=vh,bh=yh,Nh=xh,Ch=wh;var Eh={defaultOptions:kh,spawnWorker:Sh,terminateWorker:jh,onMessage:bh,send:Nh,loadImage:Ch};const _h=sh,zh=uh,He=Bc,{log:gs}=Nn,Lh=ql,Pt=Hc,{defaultOptions:Th,spawnWorker:Rh,terminateWorker:Ih,onMessage:Ph,loadImage:vs,send:Mh}=Eh;let ys=0;var Uc=async(e="eng",t=Pt.LSTM_ONLY,n={},r={})=>{const o=Lh("Worker",ys),{logger:i,errorHandler:a,...s}=_h({...Th,...n}),u={},d={},v=typeof e=="string"?e.split("+"):e;let p=t,h=r;const k=[Pt.DEFAULT,Pt.LSTM_ONLY].includes(t)&&!s.legacyCore;let w,g;const S=new Promise((N,_)=>{g=N,w=_}),f=N=>{w(N.message)};let c=Rh(s);c.onerror=f,ys+=1;const m=(N,_)=>{u[N]=_},j=(N,_)=>{d[N]=_},C=({id:N,action:_,payload:$})=>new Promise((B,V)=>{gs(`[${o}]: Start ${N}, action=${_}`);const q=`${_}-${N}`;m(q,B),j(q,V),Mh(c,{workerId:o,jobId:N,action:_,payload:$})}),R=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),I=N=>C(He({id:N,action:"load",payload:{options:{lstmOnly:k,corePath:s.corePath,logging:s.logging}}})),P=(N,_,$)=>C(He({id:$,action:"FS",payload:{method:"writeFile",args:[N,_]}})),A=(N,_)=>C(He({id:_,action:"FS",payload:{method:"readFile",args:[N,{encoding:"utf8"}]}})),z=(N,_)=>C(He({id:_,action:"FS",payload:{method:"unlink",args:[N]}})),H=(N,_,$)=>C(He({id:$,action:"FS",payload:{method:N,args:_}})),T=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),D=(N,_)=>C(He({id:_,action:"loadLanguage",payload:{langs:N,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Pt.DEFAULT,Pt.LSTM_ONLY].includes(p)&&!s.legacyLang}}})),Y=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),W=(N,_,$,B)=>C(He({id:B,action:"initialize",payload:{langs:N,oem:_,config:$}})),oe=(N="eng",_,$,B)=>{if(k&&[Pt.TESSERACT_ONLY,Pt.TESSERACT_LSTM_COMBINED].includes(_))throw Error("Legacy model requested but code missing.");const V=_||p;p=V;const q=$||h;h=q;const et=(typeof N=="string"?N.split("+"):N).filter(tt=>!v.includes(tt));return v.push(...et),et.length>0?D(et,B).then(()=>W(N,V,q,B)):W(N,V,q,B)},le=(N={},_)=>C(He({id:_,action:"setParameters",payload:{params:N}})),L=async(N,_={},$={blocks:!0,text:!0,hocr:!0,tsv:!0},B)=>C(He({id:B,action:"recognize",payload:{image:await vs(N),options:_,output:$}})),y=(N="Tesseract OCR Result",_=!1,$)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),C(He({id:$,action:"getPDF",payload:{title:N,textonly:_}}))),x=async(N,_)=>{if(k)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return C(He({id:_,action:"detect",payload:{image:await vs(N)}}))},b=async()=>(c!==null&&(Ih(c),c=null),Promise.resolve());Ph(c,({workerId:N,jobId:_,status:$,action:B,data:V})=>{const q=`${B}-${_}`;if($==="resolve"){gs(`[${N}]: Complete ${_}`);let pt=V;B==="recognize"?pt=zh(V):B==="getPDF"&&(pt=Array.from({...V,length:Object.keys(V).length})),u[q]({jobId:_,data:pt})}else if($==="reject")if(d[q](V),B==="load"&&w(V),a)a(V);else throw Error(V);else $==="progress"&&i({...V,userJobId:_})});const M={id:o,worker:c,setResolve:m,setReject:j,load:R,writeText:P,readText:A,removeFile:z,FS:H,loadLanguage:T,initialize:Y,reinitialize:oe,setParameters:le,recognize:L,getPDF:y,detect:x,terminate:b};return I().then(()=>D(e)).then(()=>W(e,t,r)).then(()=>g(M)).catch(()=>{}),S};const Wc=Uc,Oh=async(e,t,n)=>{const r=await Wc(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},Fh=async(e,t)=>{const n=await Wc("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Dh={recognize:Oh,detect:Fh},Ah={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},$h={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Bh=eh,Hh=Uc,Uh=Dh,Wh=Ah,Vh=Hc,Gh=$h,{setLogging:Qh}=Nn;var Kh={languages:Wh,OEM:Vh,PSM:Gh,createScheduler:Bh,createWorker:Hh,setLogging:Qh,...Uh};const Vc=ks(Kh),Kn={hemoglobin:{min:12.5,max:16,unit:"gm/dl",foods:["Spinach","Red Meat","Pumpkin Seeds"],impact:{low:"You may experience higher fatigue during cardio. Consider lower intensity now.",high:"Rarely caused by high altitude or smoking. Ensure good hydration."}},total_count:{min:4e3,max:11e3,unit:"cells/cumm",foods:["Vitamin C","Garlic","Ginger"],impact:{low:"Immunity might be lower. Skip high-intensity sessions if you feel weak.",high:"Body is fighting something. Rest and recover properly."}},neutrophil:{min:40,max:70,unit:"%",foods:[],impact:{}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{}},eosinophil:{min:2,max:8,unit:"%",foods:[],impact:{}},monocyte:{min:1,max:6,unit:"%",foods:[],impact:{}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},platelet_count:{min:1.5,max:4.5,unit:"Lakhs/cumm",foods:["Papaya Leaf","Pomegranate"],impact:{low:"Careful to avoid injury. High-impact sports are not recommended.",high:"Can indicate inflammation. Focus on recovery."}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory foods"],impact:{high:"High inflammation. Focus on light movement and stretching."}},mcv:{min:80,max:100,unit:"fL",foods:["Vitamin B12","Folic Acid"],impact:{low:"Lower oxygen capacity. Strength training may feel significantly harder."}},mch:{min:27,max:32,unit:"pg",foods:["Iron rich foods"],impact:{low:"Fatigue risk. Focus on foundational strength movements."}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},t3:{min:.85,max:2.68,unit:"nmol/L",foods:["Brazil Nuts"," Seaweed"],impact:{low:"Lowered metabolism. You might find it harder to maintain energy."}},t4:{min:5.1,max:14.1,unit:"ug/dL",foods:["Dairy","Eggs","Fish"],impact:{low:"Similar to T3, watch for sluggishness during workouts."}},tsh:{min:.27,max:4.2,unit:"uIU/mL",foods:["Avoid cruciferous veg if hypothyroid"],impact:{high:"Watch for weight gain and low energy levels during routine."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Low Carb","High Fiber"],impact:{high:"Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.",low:"Potential for dizziness. Have a small snack before exercise."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Complex Carbs","Vegetables"],impact:{high:"Spikes can affect recovery. A 10-min walk after meals is recommended."}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Nuts","Olive Oil"],impact:{high:"Focus on heart-healthy cardio like swimming or brisk walking."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["Avoid Sugar","Eat Fish"],impact:{high:"Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio."}},hdl_cholesterol:{min:40,max:60,unit:"mg/dL",foods:["Avocado","Salmon"],impact:{low:"HIIT or intensive cardio can help boost this 'good' cholesterol."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber","Soy","Almonds"],impact:{high:"Heart health priority. Daily steady movement is mandatory."}},urea:{min:15,max:40,unit:"mg/dL",foods:["Reduce Protein","Hydrate"],impact:{high:"Kidney stress. Hydrate well and limit protein supplement intake temporarily."}},creatinine:{min:.6,max:1.2,unit:"mg/dL",foods:["Reduce Red Meat","Hydrate"],impact:{high:"Ensure excellent hydration; avoid over-exertion in extreme heat."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Avoid Alcohol","Cherries","Vitamin C"],impact:{high:"Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore."}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Hydrate"],impact:{low:"Performance risk. Monitor salt loss during long workout sessions."}},potassium:{min:3.5,max:5.5,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"High risk of muscle cramps. Ensure steady electrolyte intake."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon Water"],impact:{high:"Liver stress. Keep training intensity moderate and skip supplements."}},sgot:{min:5,max:40,unit:"U/L",foods:["Leafy Greens","Coffee"],impact:{high:"Could be muscle damage from training or liver stress. Take a rest day."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole Grains","Avoid Alcohol"],impact:{high:"Focus on recovery. Avoid using pain killers like Tylenol if high."}},alkaline_phosphatase:{min:44,max:147,unit:"IU/L",foods:["Vitamin D"],impact:{low:"Vitamin D deficiency. Impacts bone health and muscle strength."}}},Yh=e=>{const t=[];return Object.keys(e).forEach(n=>{const r=parseFloat(e[n]),o=Kn[n];!o||isNaN(r)||(n==="hemoglobin"&&(r<10?t.push({condition:"Severe Anemia Risk",risk:"High",color:"#ef4444",advice:"Consult a specialist immediately for iron supplements."}):r<o.min&&t.push({condition:"Mild Anemia",risk:"Medium",color:"#fbbf24",advice:"Increase intake of spinach, red meat, and Vitamin C."})),(n==="glucose_fasting"||n==="glucose_pp")&&(r>140&&n==="glucose_fasting"?t.push({condition:"Diabetes Risk",risk:"High",color:"#ef4444",advice:"Strict sugar control needed. Monitor Hba1c."}):r>o.max&&t.push({condition:"Pre-Diabetes Warning",risk:"Medium",color:"#fbbf24",advice:"Reduce carbs/sugar and start daily brisk walking."})),n==="creatinine"&&r>1.5&&t.push({condition:"Kidney Stress",risk:"High",color:"#ef4444",advice:"High hydration needed. Avoid protein supplements temporarily."}),n==="total_count"&&r>12e3&&t.push({condition:"Potential Infection",risk:"Medium",color:"#fbbf24",advice:"Body is fighting inflammation. Rest well."}),(n==="cholesterol"&&r>240||n==="triglycerides"&&r>200)&&t.push({condition:"Cardiovascular Risk",risk:"High",color:"#ef4444",advice:"Avoid saturated fats/fried food. Increase cardio."}))}),t},Jh=({onBack:e,user:t})=>{const[n,r]=F.useState(null),[o,i]=F.useState(null),[a,s]=F.useState([]),[u,d]=F.useState(!1),[v,p]=F.useState(""),[h,k]=F.useState("hemoglobin"),[w,g]=F.useState(""),[S,f]=F.useState(null),[c,m]=F.useState("basic"),[j,C]=F.useState("checking");F.useEffect(()=>{R();const T=t&&t.email?`reports_${t.email}`:`temp_reports_${Date.now()}`,D=localStorage.getItem(T);s(D?JSON.parse(D):[])},[t]);const R=async()=>{const T="https://blood-report-fitness-evaluation-system.onrender.com";try{(await fetch(`${T}/health`)).ok?C("online"):C("offline")}catch{C("offline")}},I=async T=>{d(!0),p("Starting OCR Engine...");try{const{data:{text:D}}=await Vc.recognize(T,"eng",{logger:y=>p(`${y.status} (${Math.round(y.progress*100)}%)`)});console.log("Raw OCR Text:",D);const Y=D.split(`
`),W={},oe=y=>y.toLowerCase().replace(/[^a-z0-9.]/g,""),le={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],eosinophil:["eosinophils","eosinophil"],monocyte:["monocytes","monocyte"],basophil:["basophils","basophil"],platelet_count:["platelet count","platelet","plt"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],glucose_fasting:["glucose fasting","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],cholesterol:["total cholesterol","serum cholesterol"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"]};if(Y.forEach(y=>{const x=y.toLowerCase().trim();x&&Object.keys(le).forEach(b=>{const N=le[b].find(_=>x.includes(_));if(N&&!W[b]){const $=x.replace(N,"").match(/(\d+(\.\d+)?)/g);if($&&$.length>0){const B=parseFloat($[0]);isNaN(B)||(W[b]=B)}}})}),Object.keys(W).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+D.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+D),d(!1);return}const L=Yh(W);z({date:new Date().toLocaleDateString(),values:W,risks:L})}catch(D){console.error(D),alert("Error parsing image. Please try a clearer photo.")}finally{d(!1),p("")}},P=T=>{const D=T.target.files[0];D&&(D.type.startsWith("image/")?(r(D),c==="advanced"&&j==="online"?A(D):I(D)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},A=async T=>{d(!0),p("Sending to ML Neural Network...");const D=new FormData;D.append("file",T);const Y="https://blood-report-fitness-evaluation-system.onrender.com";try{const W=await fetch(`${Y}/analyze`,{method:"POST",body:D}),oe=await W.json();if(!W.ok)throw new Error(oe.error||"Server Error");if(console.log("ML Results:",oe),!oe.raw_results||oe.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),I(T);return}}catch(W){console.error(W),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),I(T)}finally{d(!1),p("")}},z=T=>{const D=[],Y=[];Object.keys(T.values).forEach(y=>{var _,$;const x=parseFloat(T.values[y]),b=Kn[y];if(!b)return;let M="Normal";x<b.min&&(M="Low"),x>b.max&&(M="High");const N=M==="Low"?(_=b.impact)==null?void 0:_.low:M==="High"?($=b.impact)==null?void 0:$.high:null;M!=="Normal"&&Y.push({parameter:y,status:M,foods:b.foods,fitnessImpact:N}),D.push({parameter:y,value:x,unit:b.unit,range:`${b.min}-${b.max}`,status:M,fitnessImpact:N})});const W=T.risks||[],oe={...T,results:D,suggestions:Y,risks:W};i(oe);const le=[oe,...a];s(le);const L=t&&t.email?`reports_${t.email}`:`temp_reports_${Date.now()}`;localStorage.setItem(L,JSON.stringify(le))},H=T=>{var oe,le;if(T.preventDefault(),!w)return;const D=parseFloat(w),Y=Kn[h];let W="Normal";D<Y.min&&(W="Low"),D>Y.max&&(W="High"),f({parameter:h,value:D,unit:Y.unit,range:`${Y.min}-${Y.max}`,status:W,foods:Y.foods,fitnessImpact:W==="Low"?(oe=Y.impact)==null?void 0:oe.low:W==="High"?(le=Y.impact)==null?void 0:le.high:null})};return l.jsxs("div",{className:"blood-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Blood Evaluation"})]}),o?l.jsxs("div",{className:"results-section fade-in",children:[l.jsxs("div",{className:"results-header",children:[l.jsx("h3",{children:"Report Analysis"}),l.jsx("button",{className:"text-btn",onClick:()=>i(null),children:"Close"})]}),o.risks&&o.risks.length>0&&l.jsxs("div",{className:"risk-container fade-up",children:[l.jsx("h4",{children:"⚠️ AI Health Risk Detection"}),l.jsx("div",{className:"risk-grid",children:o.risks.map((T,D)=>l.jsxs("div",{className:"risk-card",style:{borderLeft:`4px solid ${T.color}`},children:[l.jsxs("div",{className:"risk-header",children:[l.jsx("span",{className:"condition-title",children:T.condition}),l.jsx("span",{className:"risk-badge",style:{background:T.color},children:T.risk})]}),l.jsx("p",{className:"risk-advice",children:T.advice}),l.jsx("button",{className:"view-details",onClick:()=>alert(`Detailed explanation for ${T.condition}: 

This condition was flagged based on your values. Please consult a doctor for verification.`),children:"View Details"})]},D))})]}),l.jsx("div",{className:"params-list",children:o.results.map((T,D)=>l.jsxs("div",{className:"param-card",children:[l.jsxs("div",{className:"param-header",children:[l.jsx("h4",{children:T.parameter.replace(/_/g," ").toUpperCase()}),l.jsxs("span",{className:`status-badge ${T.status.toLowerCase()}`,children:[T.status==="Normal"&&l.jsx(Rp,{size:14}),T.status==="High"&&l.jsx(Ep,{size:14}),T.status==="Low"&&l.jsx(Fc,{size:14}),T.status]})]}),l.jsxs("div",{className:"param-value",children:[l.jsx("span",{className:"val",children:T.value}),l.jsx("span",{className:"unit",children:T.unit})]}),l.jsxs("p",{className:"range-info",children:["Ref Range: ",T.range]})]},D))}),o.suggestions.length>0&&l.jsxs("div",{className:"suggestions-box",children:[l.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),o.suggestions.map((T,D)=>l.jsxs("div",{className:"suggestion-item",children:[l.jsx("div",{className:"suggestion-header",children:l.jsxs("strong",{children:[T.status," ",T.parameter.replace(/_/g," ").toUpperCase()]})}),T.foods.length>0&&l.jsxs("p",{className:"food-list",children:["💡 ",l.jsx("b",{children:"Diety Tip:"})," Eat ",T.foods.join(", ")]}),T.fitnessImpact&&l.jsxs("p",{className:"fitness-list",children:["⚡ ",l.jsx("b",{children:"Fitness Impact:"})," ",T.fitnessImpact]})]},D))]})]}):l.jsxs("div",{className:"main-content",children:[l.jsxs("div",{className:"card manual-card",children:[l.jsx("h3",{children:"Quick Check"}),l.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),l.jsxs("form",{onSubmit:H,className:"manual-form",children:[l.jsxs("div",{className:"row",children:[l.jsx("select",{className:"input-field",value:h,onChange:T=>{k(T.target.value),f(null)},children:Object.keys(Kn).map(T=>l.jsx("option",{value:T,children:T.replace(/_/g," ").toUpperCase()},T))}),l.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:w,onChange:T=>g(T.target.value),required:!0})]}),l.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",l.jsx(Ap,{size:16})]})]}),S&&l.jsxs("div",{className:"manual-result fade-in",children:[l.jsx("div",{className:`result-badge ${S.status.toLowerCase()}`,children:S.status}),l.jsxs("p",{className:"result-text",children:[l.jsxs("strong",{children:[S.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",S.value," ",S.unit,l.jsx("br",{}),l.jsxs("span",{className:"text-muted",children:["Normal: ",S.range]})]}),S.status!=="Normal"&&S.foods.length>0&&l.jsxs("div",{className:"diet-tip",children:[l.jsx("strong",{children:"Tip:"})," Eat ",S.foods.join(", ")]}),S.fitnessImpact&&l.jsxs("div",{className:"fitness-tip",children:[l.jsx("strong",{children:"Fitness Impact:"})," ",S.fitnessImpact]})]})]}),l.jsx("div",{className:"divider",children:"OR"}),l.jsxs("div",{className:"upload-card",children:[l.jsx("div",{className:"icon-circle",children:l.jsx(Ac,{size:32,color:"var(--color-primary)"})}),l.jsx("h3",{children:"Upload Report Image"}),l.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),l.jsxs("div",{className:"scan-mode-toggle",children:[l.jsx("button",{className:`mode-btn ${c==="basic"?"active":""}`,onClick:()=>m("basic"),children:"Basic (Browser)"}),l.jsxs("button",{className:`mode-btn ${c==="advanced"?"active":""}`,onClick:()=>m("advanced"),children:["Advanced (Python ML)",j==="online"&&l.jsx("span",{className:"dot online",title:"Server Online"}),j==="offline"&&l.jsx("span",{className:"dot offline",title:"Server Offline (Run server.py)"})]})]}),l.jsxs("label",{className:"btn-secondary upload-btn",children:[u?v||"Scanning...":"Select Image (JPG/PNG)",l.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:P,disabled:u})]})]}),a.length>0&&l.jsxs("div",{className:"history-section",children:[l.jsx("h3",{children:"Recent Reports"}),a.map((T,D)=>l.jsxs("div",{className:"history-item",onClick:()=>i(T),children:[l.jsx(Zl,{size:18,className:"text-muted"}),l.jsx("span",{children:T.date}),l.jsx("span",{className:"arrow",children:"→"})]},D))]})]}),l.jsx("style",{children:`
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
      `})]})},Or={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},Xh=({userProfile:e,onBack:t})=>{const[n,r]=F.useState(null),[o,i]=F.useState(0),[a,s]=F.useState(null);F.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:v,heightCm:p,age:h,gender:k}=e;let w=10*v+6.25*p-5*h;k==="male"?w+=5:w-=161;let g=Math.round(w*1.375);return n==="loss"?g-500:n==="gain"?g+500:g},d=()=>{const v=u();i(v);const p=h=>h[Math.floor(Math.random()*h.length)];s({breakfast:p(Or.breakfast),lunch:p(Or.lunch),snack:p(Or.snack),dinner:p(Or.dinner)})};return l.jsxs("div",{className:"fitness-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:t,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Fitness Helper"})]}),n?l.jsxs("div",{className:"plan-view fade-in",children:[l.jsxs("div",{className:"summary-card",children:[l.jsxs("div",{className:"cal-target",children:[l.jsx("span",{className:"label",children:"Daily Target"}),l.jsx("h1",{children:o}),l.jsx("span",{className:"unit",children:"kcal"})]}),l.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),l.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),l.jsxs("div",{className:"meals-list",children:[l.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),a&&l.jsxs(l.Fragment,{children:[l.jsx(Fr,{type:"Breakfast",icon:l.jsx(fs,{size:18}),data:a.breakfast}),l.jsx(Fr,{type:"Lunch",icon:l.jsx(Qn,{size:18}),data:a.lunch}),l.jsx(Fr,{type:"Snack",icon:l.jsx(fs,{size:18}),data:a.snack}),l.jsx(Fr,{type:"Dinner",icon:l.jsx(Qn,{size:18}),data:a.dinner})]})]})]}):l.jsxs("div",{className:"goal-selection",children:[l.jsx("h3",{children:"What is your goal?"}),l.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[l.jsx("div",{className:"icon-box loss",children:l.jsx(Bp,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Weight Loss"}),l.jsx("p",{children:"Reduce body fat locally."})]})]}),l.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[l.jsx("div",{className:"icon-box maintain",children:l.jsx(Gp,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Maintain Weight"}),l.jsx("p",{children:"Stay healthy and fit."})]})]}),l.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[l.jsx("div",{className:"icon-box gain",children:l.jsx(Qn,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Weight Gain"}),l.jsx("p",{children:"Build muscle mass."})]})]})]}),l.jsx("style",{children:`
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
      `})]})},Fr=({type:e,icon:t,data:n})=>l.jsxs("div",{className:"meal-card",children:[l.jsxs("div",{className:"meal-info",children:[l.jsxs("h4",{children:[t," ",e]}),l.jsx("p",{children:n.name})]}),l.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),Zh=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],qh=({onBack:e})=>{const[t,n]=F.useState(null);return l.jsxs("div",{className:"workout-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Home Workouts"})]}),l.jsxs("div",{className:"info-card",children:[l.jsx("div",{className:"intro-icon",children:l.jsx(ps,{size:28,color:"#FF6B6B"})}),l.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),l.jsx("div",{className:"workout-list",children:Zh.map(r=>l.jsxs("div",{className:"workout-card",children:[l.jsxs("div",{className:"w-header",children:[l.jsx("h3",{children:r.name}),l.jsxs("span",{className:"cal-badge",children:[l.jsx(ps,{size:12,fill:"currentColor"})," ",r.calories]})]}),l.jsx("p",{className:"w-desc",children:r.desc}),l.jsxs("div",{className:"w-footer",children:[l.jsxs("span",{className:"duration",children:[l.jsx(Hp,{size:14})," ",r.duration]}),l.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&l.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsx("button",{className:"close-btn",onClick:()=>n(null),children:l.jsx(Vp,{size:24})}),l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t.name}),l.jsx("span",{className:"cal-pill",children:t.calories})]}),(()=>{const o={"Jumping Jacks":"iSSAk4XCsRA",Squats:"YaXPRqUwItQ","Push-ups":"IODxDxX7oi4",Burpees:"dZgVxmf6jkA","High Knees":"oDdkytliOqE",Lunges:"QOVaHwm-Q6U",Plank:"pSHjTRCQxIw","Mountain Climbers":"zT-9L3CEcmk"}[t.name]||"UpH7rm0cYbM";return l.jsx("div",{style:{width:"100%",height:"220px",marginBottom:"20px",borderRadius:"12px",overflow:"hidden",background:"#000"},children:l.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1&loop=1&playlist=${o}&controls=0&showinfo=0&modestbranding=1`,title:"Workout Demonstration",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"block"}})})})(),l.jsxs("div",{className:"modal-body",children:[l.jsxs("h4",{children:[l.jsx(Dc,{size:16})," How to do it:"]}),l.jsx("ul",{className:"steps-list",children:t.steps.map((r,o)=>l.jsxs("li",{children:[l.jsx("span",{className:"step-num",children:o+1}),r]},o))})]})]})}),l.jsx("style",{children:`
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
            `})]})},em=({onBack:e,userProfile:t})=>{const[n,r]=F.useState(()=>{if(!(t!=null&&t.email))return[];const p=localStorage.getItem(`weight_log_${t.email}`);return p?JSON.parse(p):[]}),[o,i]=F.useState(""),a=()=>{if(!o||isNaN(o))return;const p={weight:parseFloat(o),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},h=[...n,p];r(h),t!=null&&t.email&&localStorage.setItem(`weight_log_${t.email}`,JSON.stringify(h)),i("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const p=n[n.length-1].weight,h=n[n.length-2].weight,k=p-h;return{change:Math.abs(k).toFixed(1),type:k>0?"gain":k<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),v=n.length>0?n[n.length-1].weight:d;return l.jsxs("div",{className:"weight-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Weight Progress"})]}),l.jsxs("div",{className:"stats-card",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Starting Weight"}),l.jsxs("span",{className:"value",children:[d," kg"]})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Current Weight"}),l.jsxs("span",{className:"value primary",children:[v," kg"]})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Change"}),l.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&l.jsx(Wp,{size:16}),u.type==="loss"&&l.jsx(Up,{size:16}),u.type==="neutral"&&l.jsx(Op,{size:16}),u.change," kg"]})]})]}),l.jsxs("div",{className:"input-section",children:[l.jsx("h3",{children:"Log Current Weight"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:o,onChange:p=>i(p.target.value),step:"0.1"}),l.jsx("button",{className:"add-btn",onClick:a,children:"Add"})]})]}),l.jsxs("div",{className:"history-section",children:[l.jsx("h3",{children:"Weight History"}),n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Oc,{size:40,color:"#cbd5e1"}),l.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):l.jsx("div",{className:"history-list",children:[...n].reverse().map((p,h)=>l.jsxs("div",{className:"history-item",children:[l.jsxs("div",{className:"date-badge",children:[l.jsx(Tp,{size:14}),p.displayDate]}),l.jsxs("div",{className:"weight-display",children:[p.weight," kg"]})]},h))})]}),l.jsx("style",{children:`
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
            `})]})},tm=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],xs=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],nm=({onBack:e,userProfile:t})=>{const[n,r]=F.useState([{id:1,text:`Hello ${t!=null&&t.name?t.name.split(" ")[0]:""}! I'm your Health Assistant. Ask me about your blood report, diet, or workout.`,sender:"bot"}]),[o,i]=F.useState(""),[a,s]=F.useState(!1),u=F.useRef(null),d=()=>{var g;(g=u.current)==null||g.scrollIntoView({behavior:"smooth"})},[v,p]=F.useState([]);F.useEffect(()=>{if(t!=null&&t.email){const g=JSON.parse(localStorage.getItem(`reports_${t.email}`)||"[]");p(g)}d()},[n,t==null?void 0:t.email]);const h=g=>{const S=g.toLowerCase();if(S.includes("analyze")||S.includes("summary")||S.includes("my report")){if(v.length===0)return"I don't see any blood reports uploaded yet. specific values. You can upload one in the Blood Evaluation section!";const A=v[0],z=A.results.filter(T=>T.status!=="Normal");if(z.length===0)return"Your latest report looks perfect! All values are within the normal range. Keep it up! 🌟";const H=z.map(T=>`${T.parameter} is ${T.status} (${T.value} ${T.unit})`).join(", ");return`Based on your latest report (${A.date}), here are some things to watch: ${H}. Would you like diet tips for any of these?`}const f=xs.find(A=>S.includes(A));if(f&&v.length>0){const z=v[0].results.find(H=>H.parameter.toLowerCase().includes(f));if(z)return`Your latest ${z.parameter} is ${z.value} ${z.unit}, which is ${z.status}. ${z.fitnessImpact||""}`}const c=t!=null&&t.diseases?t.diseases.toLowerCase():"",m=t!=null&&t.allergies?t.allergies.toLowerCase():"",j=(t==null?void 0:t.age)||"",C=(t==null?void 0:t.weight)||"",R=(t==null?void 0:t.bloodGroup)||"",I=(t==null?void 0:t.gender)||"";return!xs.some(A=>S.includes(A))&&!S.includes("hello")&&!S.includes("hi")?`I'm analyzing your health data... I can help with Blood Reports, Diet, and Fitness. Try asking "Analyze my report" or "How is my hemoglobin?".`:S.includes("my profile")||S.includes("my health")||S.includes("about me")?`You are a ${j}-year-old ${I} with Blood Group ${R}. Current weight: ${C}kg. Known conditions: ${c||"None"}. Allergies: ${m||"None"}.`:c.includes("diabetes")&&(S.includes("sugar")||S.includes("sweet")||S.includes("fruit"))?"Since you mentioned Diabetes, be very careful with high GI fruits like mangoes and chikoo. Opt for apples, berries, and papaya. Monitor your blood sugar regularly and avoid refined sugars completely.":(c.includes("hypertension")||c.includes("bp"))&&(S.includes("salt")||S.includes("diet"))?"For hypertension management, the DASH diet is recommended. Reduce sodium intake (salt), avoid pickles and papad, and increase potassium-rich foods like bananas and leafy greens.":S.includes("protein")?"Protein is the building block. vegetarians: Paneer, Dal, Soy. Non-veg: Chicken, Fish. "+(c.includes("kidney")?"However, since you have kidney concerns, please consult your doctor for the exact protein limit.":"Aim for 1.2g/kg body weight."):S.includes("pre-workout")||S.includes("before gym")?"A banana or oatmeal 45 mins before workout is great energy.":S.includes("post-workout")||S.includes("after gym")?"Post-workout, have a protein source (shake/chicken/eggs) within 45 mins to maximize recovery.":S.includes("muscle")?"Building muscle requires specific resistance training, protein surplus, and sleep. Consistency is key!":S.includes("cardio")?"Cardio improves heart health and burns calories. 150 mins/week is a good target.":S.includes("bmi")?"BMI is a rough indicator. "+(t!=null&&t.weight?`At ${t.weight}kg, your focus should be on body composition (muscle vs fat) rather than just the scale.`:"Check your weight-to-height ratio."):S.includes("diet")||S.includes("food")?m?`Given your allergies to ${m}, ensure you check food labels. Focus on whole, unprocessed foods.`:"A balanced diet with protein, good fats, and fiber is essential. Avoid processed foods.":S.includes("hemoglobin")?"Iron-rich foods (spinach, dates, red meat) help boost hemoglobin. Vitamin C helps absorption.":S.includes("sugar")?"Minimize added sugars. Natural sugars in whole fruits are generally okay in moderation.":S.includes("weight")?"Weight management is about Calorie In vs Calorie Out, quality of food, and hormonal balance.":S.includes("sleep")?"7-9 hours of sleep is non-negotiable for recovery and mental health.":"That's a good question. Based on general fitness guidelines, consistency in diet and exercise is 90% of the game. How is your sleep lately?"},k=g=>{if(g.preventDefault(),!o.trim())return;const S={id:Date.now(),text:o,sender:"user"};r(f=>[...f,S]),i(""),s(!0),setTimeout(()=>{const f={id:Date.now()+1,text:h(S.text),sender:"bot"};r(c=>[...c,f]),s(!1)},1200)},w=g=>{const S={id:Date.now(),text:g.q,sender:"user"};r(f=>[...f,S]),s(!0),setTimeout(()=>{const f={id:Date.now()+1,text:g.a,sender:"bot"};r(c=>[...c,f]),s(!1)},1200)};return l.jsxs("div",{className:"chat-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Health Assistant"})]}),l.jsxs("div",{className:"chat-window",children:[n.map(g=>l.jsxs("div",{className:`message-row ${g.sender}`,children:[g.sender==="bot"&&l.jsx("div",{className:"avatar bot",children:l.jsx(ds,{size:16})}),l.jsx("div",{className:"message-bubble",children:g.text}),g.sender==="user"&&l.jsx("div",{className:"avatar user",children:l.jsx($c,{size:16})})]},g.id)),a&&l.jsxs("div",{className:"message-row bot",children:[l.jsx("div",{className:"avatar bot",children:l.jsx(ds,{size:16})}),l.jsxs("div",{className:"message-bubble typing",children:[l.jsx("span",{children:"."}),l.jsx("span",{children:"."}),l.jsx("span",{children:"."})]})]}),l.jsx("div",{ref:u})]}),l.jsxs("div",{className:"input-section",children:[l.jsx("div",{className:"chips-row",children:tm.map((g,S)=>l.jsx("button",{className:"chip",onClick:()=>w(g),disabled:a,children:g.q},S))}),l.jsxs("form",{onSubmit:k,className:"input-form",children:[l.jsx("input",{type:"text",value:o,onChange:g=>i(g.target.value),placeholder:"Ask about health...",className:"chat-input"}),l.jsx("button",{type:"submit",className:"send-btn",children:l.jsx($p,{size:20})})]})]}),l.jsx("style",{children:`
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
      `})]})},rm=({message:e,onClose:t})=>(F.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),l.jsxs("div",{className:"toast-notification",children:[l.jsx("div",{className:"icon-bg",children:l.jsx(zp,{size:20})}),l.jsxs("div",{className:"content",children:[l.jsx("h4",{children:"Reminder"}),l.jsx("p",{children:e})]}),l.jsx("button",{onClick:t,className:"close-btn",children:"×"}),l.jsx("style",{children:`
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
       `})]})),ws=e=>{let t={breakfast:[{name:"Oatmeal with Walnuts & Apple",calories:350,carbs:"60g",protein:"12g",fat:"8g",benefits:["Heart Healthy","High Fiber"]},{name:"Egg Whites & Whole Wheat Toast",calories:300,carbs:"30g",protein:"20g",fat:"5g",benefits:["Muscle Repair"]}],lunch:[{name:"Grilled Chicken Salad with Quinoa",calories:500,carbs:"40g",protein:"40g",fat:"15g",benefits:["Lean Protein","Complete Meal"]},{name:"Lentil Soup (Dal) & Brown Rice",calories:450,carbs:"60g",protein:"18g",fat:"8g",benefits:["Plant Protein","Easy Digestion"]}],snacks:[{name:"Greek Yogurt with Berries",calories:150,carbs:"15g",protein:"12g",fat:"0g",benefits:["Probiotics","Antioxidants"]},{name:"Handful of Almonds",calories:160,carbs:"6g",protein:"6g",fat:"14g",benefits:["Healthy Fats"]}],dinner:[{name:"Baked Salmon with Steamed Broccoli",calories:550,carbs:"10g",protein:"45g",fat:"30g",benefits:["Omega-3","Light Dinner"]},{name:"Stir-Fried Tofu with Mixed Veggies",calories:400,carbs:"15g",protein:"25g",fat:"20g",benefits:["Vegan Option","Light"]}],recommendations:["Drink 3-4 liters of water daily.","Eat dinner at least 2 hours before sleep.","Include a serving of raw salad with lunch.","Limit processed sugar intake."],restrictions:[]};if(!e||!e.results)return t;const{results:n}=e,r=h=>n.find(k=>k.parameter===h),o=r("glucose_fasting"),i=r("glucose_pp");(o&&o.status==="High"||i&&i.status==="High")&&(t.recommendations.unshift("⚠️ STRICT LOW GLYCEMIC INDEX DIET RECOMMENDED"),t.restrictions.push("White bread, white rice, pasta","Sugary drinks & desserts","High-sugar fruits (mango, grapes)"),t.breakfast=[{name:"Steel-Cut Oats with Cinnamon (No Sugar)",calories:300,carbs:"50g",protein:"10g",fat:"6g",benefits:["Low GI","Cinnamon Helps Insulin"]},{name:"Vegetable Omelette (Double Spinach)",calories:320,carbs:"5g",protein:"22g",fat:"20g",benefits:["Keto-Friendly","Iron Boost"]}],t.snacks=[{name:"Roasted Chana (Chickpeas)",calories:180,carbs:"20g",protein:"10g",fat:"4g",benefits:["Complex Carbs","Satiety"]},{name:"Cucumber & Hummus Sticks",calories:150,carbs:"15g",protein:"6g",fat:"8g",benefits:["Hydrating","Low Carb"]}]);const a=r("cholesterol"),s=r("triglycerides"),u=r("ldl_cholesterol");(a&&a.status==="High"||s&&s.status==="High"||u&&u.status==="High")&&(t.recommendations.unshift("⚠️ HEART HEALTHY FATS ONLY (Avoid Saturated Fats)"),t.restrictions.push("Red meat","Butter/Ghee","Fried foods","Full-fat dairy"),t.dinner=[{name:"Grilled Mackerel/Salmon (No Butter)",calories:500,carbs:"0g",protein:"40g",fat:"25g",benefits:["High Omega-3","Lowers inflammation"]},{name:"Quinoa Bowl with Beans",calories:450,carbs:"60g",protein:"18g",fat:"8g",benefits:["Fiber lowers cholesterol"]}],t.breakfast.some(h=>h.name.includes("Oat"))||t.breakfast.unshift({name:"Bowl of Oatmeal with Flaxseeds",calories:350,carbs:"55g",protein:"12g",fat:"10g",benefits:["Soluble Fiber","Cholesterol Lowering"]}));const d=r("hemoglobin");d&&d.status==="Low"&&(t.recommendations.unshift("⚠️ IRON-RICH DIET (Consume Vitamin C for absorption)"),t.lunch.forEach(h=>{h.name.includes("Spinach")||(h.name+=" + Side Spinach Salad"),h.benefits.push("Iron Booster")}),t.snacks.push({name:"Dates & Walnuts",calories:200,carbs:"40g",protein:"4g",fat:"8g",benefits:["High Iron","Energy"]}),t.restrictions.push("Tea/Coffee within 1 hour of meals (Inhibits Iron absorption)"));const v=r("uric_acid");v&&v.status==="High"&&(t.recommendations.unshift("⚠️ LOW PURINE DIET (Manage Uric Acid)"),t.restrictions.push("Red meat","Shellfish","Spinach","Cauliflower","Alcohol"),["breakfast","lunch","dinner","snacks"].forEach(h=>{t[h]=t[h].map(k=>k.name.includes("Spinach")?{...k,name:k.name.replace("Spinach","Cucumber"),benefits:k.benefits.filter(w=>w!=="Iron Booster")}:k)}),t.snacks.push({name:"Bowl of Cherries / Berries",calories:100,carbs:"25g",protein:"1g",fat:"0g",benefits:["Lowers Uric Acid"]}));const p=r("tsh");return p&&p.status==="High"&&(t.recommendations.unshift("⚠️ THYROID SUPPORT (Limit Goitrogens raw)"),t.restrictions.push("Raw Cruciferous Veggies (Cabbage, Broccoli, Cauliflower) - Cook them well"),t.recommendations.push("Ensure iodized salt usage or eat seaweed."),t.breakfast.push({name:"Brazil Nuts (2-3) & Smoothie",calories:300,carbs:"40g",protein:"10g",fat:"15g",benefits:["Selenium for Thyroid"]})),t},om=({onBack:e,user:t})=>{const[n,r]=F.useState(null),[o,i]=F.useState(null),[a,s]=F.useState(!0),[u,d]=F.useState(!1),[v,p]=F.useState("breakfast");F.useEffect(()=>{h()},[t]);const h=()=>{t&&t.email?`${t.email}`:`${Date.now()}`;let w=null;if(t&&t.email){const g=localStorage.getItem(`reports_${t.email}`);if(g){const S=JSON.parse(g);S.length>0&&(w=S[0])}}else{const g=Object.keys(localStorage).filter(S=>S.startsWith("temp_reports_"));if(g.length>0){const S=localStorage.getItem(g[g.length-1]);if(S){const f=JSON.parse(S);f.length>0&&(w=f[0])}}}if(w){r(w);const g=ws(w);i(g)}s(!1)},k=async w=>{const g=w.target.files[0];if(g){d(!0);try{const{data:{text:S}}=await Vc.recognize(g,"eng"),f=S.split(`
`),c={},m={hemoglobin:["hemoglobin","hb"],glucose_fasting:["glucose fasting","fbs"],cholesterol:["cholesterol"],uric_acid:["uric acid"],tsh:["tsh"]};if(f.forEach(P=>{const A=P.toLowerCase();Object.keys(m).forEach(z=>{if(m[z].some(H=>A.includes(H))){const H=P.match(/(\d+(\.\d+)?)/g);H&&(c[z]=parseFloat(H[0]))}})}),Object.keys(c).length===0){alert("Could not detect clear values. Please try a clearer image."),d(!1);return}const j=[];Object.keys(c).forEach(P=>{const A=c[P],z=Kn[P];if(!z)return;let H="Normal";A<z.min&&(H="Low"),A>z.max&&(H="High"),j.push({parameter:P,value:A,status:H})});const C={date:new Date().toLocaleDateString(),values:c,results:j},R=t&&t.email?`reports_${t.email}`:`temp_reports_${Date.now()}`,I=localStorage.getItem(R)?JSON.parse(localStorage.getItem(R)):[];localStorage.setItem(R,JSON.stringify([C,...I])),r(C),i(ws(C))}catch(S){console.error(S),alert("Error scanning file.")}finally{d(!1)}}};return a?l.jsx("div",{className:"p-4",children:"Loading Diet Plan..."}):n?l.jsxs("div",{className:"diet-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Your Personalized Diet"})]}),l.jsx("div",{className:"health-summary",children:o.recommendations.some(w=>w.includes("⚠️"))?l.jsxs("div",{className:"alert-badge warning",children:[l.jsx(Fc,{size:16}),l.jsx("span",{children:"Based on your report: Modifications applied for specific conditions."})]}):l.jsxs("div",{className:"alert-badge success",children:[l.jsx(Ip,{size:16}),l.jsx("span",{children:"Report looks balanced. Showing base healthy plan."})]})}),l.jsxs("div",{className:"recommendations-box",children:[l.jsx("h4",{children:"Key Guidelines"}),l.jsx("ul",{children:o.recommendations.slice(0,3).map((w,g)=>l.jsx("li",{className:w.includes("⚠️")?"high-priority":"",children:w},g))})]}),l.jsx("div",{className:"meal-tabs",children:["breakfast","lunch","snacks","dinner"].map(w=>l.jsx("button",{className:`tab-btn ${v===w?"active":""}`,onClick:()=>p(w),children:w.charAt(0).toUpperCase()+w.slice(1)},w))}),l.jsx("div",{className:"meal-content",children:o[v].map((w,g)=>l.jsxs("div",{className:"food-card slide-in",children:[l.jsxs("div",{className:"food-header",children:[l.jsx("h3",{children:w.name}),l.jsxs("span",{className:"cal-badge",children:[w.calories," kcal"]})]}),l.jsxs("div",{className:"macros-row",children:[l.jsxs("span",{className:"macro",children:["C: ",w.carbs]}),l.jsxs("span",{className:"macro",children:["P: ",w.protein]}),l.jsxs("span",{className:"macro",children:["F: ",w.fat]})]}),l.jsx("div",{className:"benefits-tags",children:w.benefits.map((S,f)=>l.jsx("span",{className:"tag",children:S},f))})]},g))}),o.restrictions.length>0&&l.jsxs("div",{className:"restrictions-box",children:[l.jsx("h4",{children:"⛔ Avoid / Limit"}),l.jsx("p",{children:o.restrictions.join(", ")})]}),l.jsx("style",{children:`
                .diet-container { padding: 20px; padding-bottom: 80px; }
                .header-row { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
                .back-btn { background: none; border: none; padding: 0; cursor: pointer; color: #333; }
                
                .health-summary { margin-bottom: 20px; }
                .alert-badge { 
                    padding: 10px 15px; border-radius: 8px; font-size: 13px; 
                    display: flex; align-items: center; gap: 8px; font-weight: 500;
                }
                .alert-badge.warning { background: #fff7ed; color: #c2410c; border: 1px solid #ffedd5; }
                .alert-badge.success { background: #f0fdf4; color: #15803d; border: 1px solid #dcfce7; }

                .recommendations-box { 
                    background: #f8fafc; padding: 15px; border-radius: 12px; margin-bottom: 20px;
                }
                .recommendations-box h4 { margin: 0 0 10px 0; font-size: 14px; color: #475569; }
                .recommendations-box ul { padding-left: 20px; margin: 0; font-size: 13px; color: #334155; }
                .recommendations-box li { margin-bottom: 5px; }
                .recommendations-box li.high-priority { color: #dc2626; font-weight: 600; }

                .meal-tabs { 
                    display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 10px; 
                    scrollbar-width: none;
                }
                .tab-btn {
                    padding: 8px 16px; border-radius: 20px; background: white; border: 1px solid #e2e8f0;
                    font-size: 13px; white-space: nowrap; cursor: pointer; transition: all 0.2s;
                }
                .tab-btn.active {
                    background: var(--color-primary); color: white; border-color: var(--color-primary);
                    box-shadow: 0 4px 6px -1px rgba(var(--color-primary-rgb), 0.4);
                }

                .food-card {
                    background: white; padding: 16px; border-radius: 12px; margin-bottom: 15px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06); border-left: 4px solid var(--color-primary);
                }
                .food-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
                .food-header h3 { margin: 0; font-size: 15px; font-weight: 600; color: #1e293b; max-width: 70%; }
                .cal-badge { font-size: 11px; font-weight: bold; background: #f1f5f9; padding: 4px 8px; border-radius: 6px; color: #64748b; }
                
                .macros-row { display: flex; gap: 15px; margin-bottom: 10px; font-size: 12px; color: #64748b; }
                .macro { font-weight: 500; }
                
                .benefits-tags { display: flex; flex-wrap: wrap; gap: 6px; }
                .tag { font-size: 10px; background: #ecfdf5; color: #047857; padding: 3px 8px; border-radius: 4px; }

                .restrictions-box {
                    margin-top: 25px; padding: 15px; background: #fef2f2; border-radius: 12px;
                    border: 1px dashed #fecaca;
                }
                .restrictions-box h4 { color: #b91c1c; margin: 0 0 5px 0; font-size: 13px; }
                .restrictions-box p { color: #7f1d1d; font-size: 12px; margin: 0; line-height: 1.4; }

                .slide-in { animation: slideIn 0.3s ease-out forwards; }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `})]}):l.jsxs("div",{className:"diet-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(dt,{size:24})}),l.jsx("h2",{children:"Specialized Diet"})]}),l.jsxs("div",{className:"no-report-state",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Qn,{size:40,color:"var(--color-primary)"})}),l.jsx("h3",{children:"No Report Uploaded"}),l.jsx("p",{children:"Please upload your blood test report to get a personalized diet plan tailored to your body's needs."}),l.jsxs("label",{className:"btn-primary upload-btn-large",children:[u?"Scanning...":"Upload Report Now",l.jsx(Ac,{size:18,style:{marginLeft:8}}),l.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:k,disabled:u})]})]}),l.jsx("style",{children:`
                    .diet-container { padding: 20px; }
                    .header-row { display: flex; align-items: center; gap: 15px; margin-bottom: 30px; }
                    .back-btn { background: none; border: none; padding: 0; cursor: pointer; color: #333; }
                    .no-report-state { 
                        text-align: center; padding: 40px 20px; background: white; 
                        border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                        display: flex; flex-direction: column; align-items: center;
                    }
                    .icon-box { 
                        width: 80px; height: 80px; background: #e0f2fe; border-radius: 50%; 
                        display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
                    }
                    .no-report-state h3 { margin-bottom: 10px; color: #0c4a6e; }
                    .no-report-state p { color: #64748b; margin-bottom: 30px; max-width: 300px; line-height: 1.5; }
                    .upload-btn-large { 
                        padding: 12px 24px; background: var(--color-primary); color: white; 
                        border-radius: 99px; display: inline-flex; align-items: center; cursor: pointer;
                        font-weight: 500;
                    }
                `})]})};function im(){const e=localStorage.getItem("user_profile"),[t,n]=F.useState(e?"dashboard":"login"),[r,o]=F.useState(null),[i,a]=F.useState(e?JSON.parse(e):null),[s,u]=F.useState(null);Rs.useEffect(()=>{const k=localStorage.getItem("user_profile");k&&a(JSON.parse(k));const w=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],g=setInterval(()=>{const S=w[Math.floor(Math.random()*w.length)];u(S)},12e4);return()=>clearInterval(g)},[]);const d=async(k,w=!1)=>{if(o(k),w){n("profile_setup");return}try{const g=await Mc.getProfile();g.success&&g.profile?(console.log("Profile found:",g.profile),a(g.profile),localStorage.setItem("user_profile",JSON.stringify(g.profile)),n("dashboard")):(console.log("No profile found, redirecting to setup"),n("profile_setup"))}catch(g){console.error("Error fetching profile:",g),localStorage.getItem("user_profile")?(a(JSON.parse(localStorage.getItem("user_profile"))),n("dashboard")):n("profile_setup")}},v=k=>{a(k),localStorage.setItem("user_profile",JSON.stringify(k)),n("dashboard")},p=k=>{n(k)},h=()=>{localStorage.removeItem("user_profile"),o(null),a(null),n("login")};return l.jsxs("div",{className:"app-container",children:[s&&l.jsx(rm,{message:s,onClose:()=>u(null)}),t==="login"&&l.jsx(Sp,{onLogin:d}),t==="profile_setup"&&l.jsx(bp,{onComplete:v}),t==="dashboard"&&l.jsx(Kp,{userName:i==null?void 0:i.name,onNavigate:p,onLogout:h}),t==="bmi"&&l.jsx(Yp,{userProfile:i,onBack:()=>n("dashboard")}),t==="blood"&&l.jsx(Jh,{user:i,onBack:()=>n("dashboard")}),t==="fitness"&&l.jsx(Xh,{userProfile:i,onBack:()=>n("dashboard")}),t==="homeworkout"&&l.jsx(qh,{onBack:()=>n("dashboard")}),t==="weightprogress"&&l.jsx(em,{userProfile:i,onBack:()=>n("dashboard")}),t==="chat"&&l.jsx(nm,{userProfile:i,onBack:()=>n("dashboard")}),t==="diet"&&l.jsx(om,{user:i,onBack:()=>n("dashboard")})]})}ci.createRoot(document.getElementById("root")).render(l.jsx(Rs.StrictMode,{children:l.jsx(im,{})}));
