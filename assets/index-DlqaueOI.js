(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function bs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ns={exports:{}},jo={},Cs={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),Zc=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),nd=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),id=Symbol.for("react.memo"),ld=Symbol.for("react.lazy"),ra=Symbol.iterator;function ad(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Es={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_s=Object.assign,zs={};function jn(e,t,n){this.props=e,this.context=t,this.refs=zs,this.updater=n||Es}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ls(){}Ls.prototype=jn.prototype;function ll(e,t,n){this.props=e,this.context=t,this.refs=zs,this.updater=n||Es}var al=ll.prototype=new Ls;al.constructor=ll;_s(al,jn.prototype);al.isPureReactComponent=!0;var oa=Array.isArray,Is=Object.prototype.hasOwnProperty,sl={current:null},Rs={key:!0,ref:!0,__self:!0,__source:!0};function Ms(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Is.call(t,r)&&!Rs.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:pr,type:e,key:i,ref:a,props:o,_owner:sl.current}}function sd(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function ud(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ia=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ud(""+e.key):t.toString(36)}function $r(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case pr:case Xc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ao(a,0):r,oa(o)?(n="",e!=null&&(n=e.replace(ia,"$&/")+"/"),$r(o,t,n,"",function(d){return d})):o!=null&&(ul(o)&&(o=sd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ia,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",oa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Ao(i,s);a+=$r(i,t,n,u,o)}else if(u=ad(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Ao(i,s++),a+=$r(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function xr(e,t,n){if(e==null)return e;var r=[],o=0;return $r(e,r,"","",function(i){return t.call(n,i,o++)}),r}function cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Br={transition:null},dd={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Br,ReactCurrentOwner:sl};function Ts(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:xr,forEach:function(e,t,n){xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xr(e,function(){t++}),t},toArray:function(e){return xr(e,function(t){return t})||[]},only:function(e){if(!ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=jn;H.Fragment=Zc;H.Profiler=ed;H.PureComponent=ll;H.StrictMode=qc;H.Suspense=od;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dd;H.act=Ts;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_s({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=sl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Is.call(t,u)&&!Rs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:pr,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:td,_context:e},e.Consumer=e};H.createElement=Ms;H.createFactory=function(e){var t=Ms.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:rd,render:e}};H.isValidElement=ul;H.lazy=function(e){return{$$typeof:ld,_payload:{_status:-1,_result:e},_init:cd}};H.memo=function(e,t){return{$$typeof:id,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Br.transition;Br.transition={};try{e()}finally{Br.transition=t}};H.unstable_act=Ts;H.useCallback=function(e,t){return Se.current.useCallback(e,t)};H.useContext=function(e){return Se.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};H.useEffect=function(e,t){return Se.current.useEffect(e,t)};H.useId=function(){return Se.current.useId()};H.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Se.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};H.useRef=function(e){return Se.current.useRef(e)};H.useState=function(e){return Se.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Se.current.useTransition()};H.version="18.3.1";Cs.exports=H;var P=Cs.exports;const Ps=bs(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=P,pd=Symbol.for("react.element"),hd=Symbol.for("react.fragment"),md=Object.prototype.hasOwnProperty,gd=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function Os(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)md.call(t,r)&&!vd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pd,type:e,key:i,ref:a,props:o,_owner:gd.current}}jo.Fragment=hd;jo.jsx=Os;jo.jsxs=Os;Ns.exports=jo;var l=Ns.exports,fi={},Ds={exports:{}},Pe={},Fs={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,y){var v=C.length;C.push(y);e:for(;0<v;){var N=v-1>>>1,T=C[N];if(0<o(T,y))C[N]=y,C[v]=T,v=N;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var y=C[0],v=C.pop();if(v!==y){C[0]=v;e:for(var N=0,T=C.length,b=T>>>1;N<b;){var z=2*(N+1)-1,F=C[z],U=z+1,B=C[U];if(0>o(F,v))U<T&&0>o(B,F)?(C[N]=B,C[U]=v,N=U):(C[N]=F,C[z]=v,N=z);else if(U<T&&0>o(B,v))C[N]=B,C[U]=v,N=U;else break e}}return y}function o(C,y){var v=C.sortIndex-y.sortIndex;return v!==0?v:C.id-y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],g=1,p=null,m=3,S=!1,k=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var y=n(d);y!==null;){if(y.callback===null)r(d);else if(y.startTime<=C)r(d),y.sortIndex=y.expirationTime,t(u,y);else break;y=n(d)}}function j(C){if(x=!1,h(C),!k)if(n(u)!==null)k=!0,O(E);else{var y=n(d);y!==null&&A(j,y.startTime-C)}}function E(C,y){k=!1,x&&(x=!1,f(M),M=-1),S=!0;var v=m;try{for(h(y),p=n(u);p!==null&&(!(p.expirationTime>y)||C&&!W());){var N=p.callback;if(typeof N=="function"){p.callback=null,m=p.priorityLevel;var T=N(p.expirationTime<=y);y=e.unstable_now(),typeof T=="function"?p.callback=T:p===n(u)&&r(u),h(y)}else r(u);p=n(u)}if(p!==null)var b=!0;else{var z=n(d);z!==null&&A(j,z.startTime-y),b=!1}return b}finally{p=null,m=v,S=!1}}var R=!1,I=null,M=-1,$=5,L=-1;function W(){return!(e.unstable_now()-L<$)}function ee(){if(I!==null){var C=e.unstable_now();L=C;var y=!0;try{y=I(!0,C)}finally{y?ae():(R=!1,I=null)}}else R=!1}var ae;if(typeof c=="function")ae=function(){c(ee)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,fe=be.port2;be.port1.onmessage=ee,ae=function(){fe.postMessage(null)}}else ae=function(){w(ee,0)};function O(C){I=C,R||(R=!0,ae())}function A(C,y){M=w(function(){C(e.unstable_now())},y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||S||(k=!0,O(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var y=3;break;default:y=m}var v=m;m=y;try{return C()}finally{m=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,y){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var v=m;m=C;try{return y()}finally{m=v}},e.unstable_scheduleCallback=function(C,y,v){var N=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?N+v:N):v=N,C){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=v+T,C={id:g++,callback:y,priorityLevel:C,startTime:v,expirationTime:T,sortIndex:-1},v>N?(C.sortIndex=v,t(d,C),n(u)===null&&C===n(d)&&(x?(f(M),M=-1):x=!0,A(j,v-N))):(C.sortIndex=T,t(u,C),k||S||(k=!0,O(E))),C},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(C){var y=m;return function(){var v=m;m=y;try{return C.apply(this,arguments)}finally{m=v}}}})(As);Fs.exports=As;var yd=Fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=P,Te=yd;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $s=new Set,Jn={};function Kt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)$s.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=Object.prototype.hasOwnProperty,wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},aa={};function kd(e){return pi.call(aa,e)?!0:pi.call(la,e)?!1:wd.test(e)?aa[e]=!0:(la[e]=!0,!1)}function Sd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jd(e,t,n,r){if(t===null||typeof t>"u"||Sd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var cl=/[\-:]([a-z])/g;function dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cl,dl);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cl,dl);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cl,dl);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jd(t,n,o,r)&&(n=null),r||o===null?kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),Bs=Symbol.for("react.provider"),Us=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),gi=Symbol.for("react.suspense_list"),ml=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Hs=Symbol.for("react.offscreen"),sa=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,$o;function Pn(e){if($o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||""}return`
`+$o+e}var Bo=!1;function Uo(e,t){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function bd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case hi:return"Profiler";case pl:return"StrictMode";case mi:return"Suspense";case gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Us:return(e.displayName||"Context")+".Consumer";case Bs:return(e._context.displayName||"Context")+".Provider";case hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ml:return t=e.displayName||null,t!==null?t:vi(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return vi(e(t))}catch{}}return null}function Nd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vi(t);case 8:return t===pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cd(e){var t=Ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Cd(e))}function Vs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gs(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function xi(e,t){Gs(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(On(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Qs(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Ys=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ed=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Ed.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Js(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Xs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Js(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var _d=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(_d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,dn=null,fn=null;function pa(e){if(e=gr(e)){if(typeof Ci!="function")throw Error(_(280));var t=e.stateNode;t&&(t=_o(t),Ci(e.stateNode,e.type,t))}}function Zs(e){dn?fn?fn.push(e):fn=[e]:dn=e}function qs(){if(dn){var e=dn,t=fn;if(fn=dn=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function eu(e,t){return e(t)}function tu(){}var Ho=!1;function nu(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return eu(e,t,n)}finally{Ho=!1,(dn!==null||fn!==null)&&(tu(),qs())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=_o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Ei=!1;if(ut)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Ei=!1}function zd(e,t,n,r,o,i,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var $n=!1,qr=null,eo=!1,_i=null,Ld={onError:function(e){$n=!0,qr=e}};function Id(e,t,n,r,o,i,a,s,u){$n=!1,qr=null,zd.apply(Ld,arguments)}function Rd(e,t,n,r,o,i,a,s,u){if(Id.apply(this,arguments),$n){if($n){var d=qr;$n=!1,qr=null}else throw Error(_(198));eo||(eo=!0,_i=d)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(Yt(e)!==e)throw Error(_(188))}function Md(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ha(o),e;if(i===r)return ha(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function ou(e){return e=Md(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var lu=Te.unstable_scheduleCallback,ma=Te.unstable_cancelCallback,Td=Te.unstable_shouldYield,Pd=Te.unstable_requestPaint,ie=Te.unstable_now,Od=Te.unstable_getCurrentPriorityLevel,vl=Te.unstable_ImmediatePriority,au=Te.unstable_UserBlockingPriority,to=Te.unstable_NormalPriority,Dd=Te.unstable_LowPriority,su=Te.unstable_IdlePriority,bo=null,nt=null;function Fd(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Bd,Ad=Math.log,$d=Math.LN2;function Bd(e){return e>>>=0,e===0?32:31-(Ad(e)/$d|0)|0}var jr=64,br=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Dn(s):(i&=a,i!==0&&(r=Dn(i)))}else a=n&~o,a!==0?r=Dn(a):i!==0&&(r=Dn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function Ud(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Je(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=Ud(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Wd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Y=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,xl,fu,pu,hu,Li=!1,Nr=[],St=null,jt=null,bt=null,qn=new Map,er=new Map,yt=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=gr(t),t!==null&&xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gd(e,t,n,r,o){switch(t){case"focusin":return St=zn(St,e,t,n,r,o),!0;case"dragenter":return jt=zn(jt,e,t,n,r,o),!0;case"mouseover":return bt=zn(bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return qn.set(i,zn(qn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,er.set(i,zn(er.get(i)||null,e,t,n,r,o)),!0}return!1}function mu(e){var t=Ft(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=ru(n),t!==null){e.blockedOn=t,hu(e.priority,function(){fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ni=r,n.target.dispatchEvent(r),Ni=null}else return t=gr(n),t!==null&&xl(t),e.blockedOn=n,!1;t.shift()}return!0}function va(e,t,n){Ur(e)&&n.delete(t)}function Qd(){Li=!1,St!==null&&Ur(St)&&(St=null),jt!==null&&Ur(jt)&&(jt=null),bt!==null&&Ur(bt)&&(bt=null),qn.forEach(va),er.forEach(va)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Li||(Li=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Qd)))}function tr(e){function t(o){return Ln(o,e)}if(0<Nr.length){Ln(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Ln(St,e),jt!==null&&Ln(jt,e),bt!==null&&Ln(bt,e),qn.forEach(t),er.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)mu(n),n.blockedOn===null&&yt.shift()}var pn=ht.ReactCurrentBatchConfig,ro=!0;function Kd(e,t,n,r){var o=Y,i=pn.transition;pn.transition=null;try{Y=1,wl(e,t,n,r)}finally{Y=o,pn.transition=i}}function Yd(e,t,n,r){var o=Y,i=pn.transition;pn.transition=null;try{Y=4,wl(e,t,n,r)}finally{Y=o,pn.transition=i}}function wl(e,t,n,r){if(ro){var o=Ii(e,t,n,r);if(o===null)ei(e,t,r,oo,n),ga(e,r);else if(Gd(o,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<Vd.indexOf(e)){for(;o!==null;){var i=gr(o);if(i!==null&&du(i),i=Ii(e,t,n,r),i===null&&ei(e,t,r,oo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ei(e,t,r,null,n)}}var oo=null;function Ii(e,t,n,r){if(oo=null,e=gl(r),e=Ft(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Od()){case vl:return 1;case au:return 4;case to:case Dd:return 16;case su:return 536870912;default:return 16}default:return 16}}var wt=null,kl=null,Hr=null;function vu(){if(Hr)return Hr;var e,t=kl,n=t.length,r,o="value"in wt?wt.value:wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Hr=o.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function ya(){return!1}function Oe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cr:ya,this.isPropagationStopped=ya,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Oe(bn),mr=re({},bn,{view:0,detail:0}),Jd=Oe(mr),Vo,Go,In,No=re({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(Vo=e.screenX-In.screenX,Go=e.screenY-In.screenY):Go=Vo=0,In=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),xa=Oe(No),Xd=re({},No,{dataTransfer:0}),Zd=Oe(Xd),qd=re({},mr,{relatedTarget:0}),Qo=Oe(qd),ef=re({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=Oe(ef),nf=re({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rf=Oe(nf),of=re({},bn,{data:0}),wa=Oe(of),lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function jl(){return uf}var cf=re({},mr,{key:function(e){if(e.key){var t=lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),df=Oe(cf),ff=re({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=Oe(ff),pf=re({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),hf=Oe(pf),mf=re({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gf=Oe(mf),vf=re({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=Oe(vf),xf=[9,13,27,32],bl=ut&&"CompositionEvent"in window,Bn=null;ut&&"documentMode"in document&&(Bn=document.documentMode);var wf=ut&&"TextEvent"in window&&!Bn,yu=ut&&(!bl||Bn&&8<Bn&&11>=Bn),Sa=" ",ja=!1;function xu(e,t){switch(e){case"keyup":return xf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function kf(e,t){switch(e){case"compositionend":return wu(t);case"keypress":return t.which!==32?null:(ja=!0,Sa);case"textInput":return e=t.data,e===Sa&&ja?null:e;default:return null}}function Sf(e,t){if(qt)return e==="compositionend"||!bl&&xu(e,t)?(e=vu(),Hr=kl=wt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jf[e.type]:t==="textarea"}function ku(e,t,n,r){Zs(r),t=io(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,nr=null;function bf(e){Ru(e,0)}function Co(e){var t=nn(e);if(Vs(t))return e}function Nf(e,t){if(e==="change")return t}var Su=!1;if(ut){var Ko;if(ut){var Yo="oninput"in document;if(!Yo){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),Yo=typeof Na.oninput=="function"}Ko=Yo}else Ko=!1;Su=Ko&&(!document.documentMode||9<document.documentMode)}function Ca(){Un&&(Un.detachEvent("onpropertychange",ju),nr=Un=null)}function ju(e){if(e.propertyName==="value"&&Co(nr)){var t=[];ku(t,nr,e,gl(e)),nu(bf,t)}}function Cf(e,t,n){e==="focusin"?(Ca(),Un=t,nr=n,Un.attachEvent("onpropertychange",ju)):e==="focusout"&&Ca()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(nr)}function _f(e,t){if(e==="click")return Co(t)}function zf(e,t){if(e==="input"||e==="change")return Co(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Lf;function rr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!pi.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _a(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function If(e){var t=Nu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&Nl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_a(n,i);var a=_a(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rf=ut&&"documentMode"in document&&11>=document.documentMode,en=null,Ri=null,Hn=null,Mi=!1;function za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mi||en==null||en!==Zr(r)||(r=en,"selectionStart"in r&&Nl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&rr(Hn,r)||(Hn=r,r=io(Ri,"onSelect"),0<r.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Jo={},Cu={};ut&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Eo(e){if(Jo[e])return Jo[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cu)return Jo[e]=t[n];return e}var Eu=Eo("animationend"),_u=Eo("animationiteration"),zu=Eo("animationstart"),Lu=Eo("transitionend"),Iu=new Map,La="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Iu.set(e,t),Kt(t,[e])}for(var Xo=0;Xo<La.length;Xo++){var Zo=La[Xo],Mf=Zo.toLowerCase(),Tf=Zo[0].toUpperCase()+Zo.slice(1);Rt(Mf,"on"+Tf)}Rt(Eu,"onAnimationEnd");Rt(_u,"onAnimationIteration");Rt(zu,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(Lu,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Ia(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rd(r,t,void 0,e),e.currentTarget=null}function Ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ia(o,s,d),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ia(o,s,d),i=u}}}if(eo)throw e=_i,eo=!1,_i=null,e}function X(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var r=e+"__bubble";n.has(r)||(Mu(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),Mu(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[_r]){e[_r]=!0,$s.forEach(function(n){n!=="selectionchange"&&(Pf.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,qo("selectionchange",!1,t))}}function Mu(e,t,n,r){switch(gu(t)){case 1:var o=Kd;break;case 4:o=Yd;break;default:o=wl}n=o.bind(null,t,n,e),o=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Ft(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}nu(function(){var d=i,g=gl(n),p=[];e:{var m=Iu.get(e);if(m!==void 0){var S=Sl,k=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":S=df;break;case"focusin":k="focus",S=Qo;break;case"focusout":k="blur",S=Qo;break;case"beforeblur":case"afterblur":S=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=hf;break;case Eu:case _u:case zu:S=tf;break;case Lu:S=gf;break;case"scroll":S=Jd;break;case"wheel":S=yf;break;case"copy":case"cut":case"paste":S=rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ka}var x=(t&4)!==0,w=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var c=d,h;c!==null;){h=c;var j=h.stateNode;if(h.tag===5&&j!==null&&(h=j,f!==null&&(j=Zn(c,f),j!=null&&x.push(ir(c,j,h)))),w)break;c=c.return}0<x.length&&(m=new S(m,k,null,n,g),p.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==Ni&&(k=n.relatedTarget||n.fromElement)&&(Ft(k)||k[ct]))break e;if((S||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=d,k=k?Ft(k):null,k!==null&&(w=Yt(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=d),S!==k)){if(x=xa,j="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=ka,j="onPointerLeave",f="onPointerEnter",c="pointer"),w=S==null?m:nn(S),h=k==null?m:nn(k),m=new x(j,c+"leave",S,n,g),m.target=w,m.relatedTarget=h,j=null,Ft(g)===d&&(x=new x(f,c+"enter",k,n,g),x.target=h,x.relatedTarget=w,j=x),w=j,S&&k)t:{for(x=S,f=k,c=0,h=x;h;h=Jt(h))c++;for(h=0,j=f;j;j=Jt(j))h++;for(;0<c-h;)x=Jt(x),c--;for(;0<h-c;)f=Jt(f),h--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=Jt(x),f=Jt(f)}x=null}else x=null;S!==null&&Ra(p,m,S,x,!1),k!==null&&w!==null&&Ra(p,w,k,x,!0)}}e:{if(m=d?nn(d):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var E=Nf;else if(ba(m))if(Su)E=zf;else{E=Ef;var R=Cf}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=_f);if(E&&(E=E(e,d))){ku(p,E,n,g);break e}R&&R(e,m,d),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&wi(m,"number",m.value)}switch(R=d?nn(d):window,e){case"focusin":(ba(R)||R.contentEditable==="true")&&(en=R,Ri=d,Hn=null);break;case"focusout":Hn=Ri=en=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,za(p,n,g);break;case"selectionchange":if(Rf)break;case"keydown":case"keyup":za(p,n,g)}var I;if(bl)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else qt?xu(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(yu&&n.locale!=="ko"&&(qt||M!=="onCompositionStart"?M==="onCompositionEnd"&&qt&&(I=vu()):(wt=g,kl="value"in wt?wt.value:wt.textContent,qt=!0)),R=io(d,M),0<R.length&&(M=new wa(M,e,null,n,g),p.push({event:M,listeners:R}),I?M.data=I:(I=wu(n),I!==null&&(M.data=I)))),(I=wf?kf(e,n):Sf(e,n))&&(d=io(d,"onBeforeInput"),0<d.length&&(g=new wa("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:d}),g.data=I))}Ru(p,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zn(e,n),i!=null&&r.unshift(ir(e,i,o)),i=Zn(e,t),i!=null&&r.push(ir(e,i,o))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Zn(n,i),u!=null&&a.unshift(ir(n,u,s))):o||(u=Zn(n,i),u!=null&&a.push(ir(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Of=/\r\n?/g,Df=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(Of,`
`).replace(Df,"")}function zr(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(_(425))}function lo(){}var Ti=null,Pi=null;function Oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,Ta=typeof Promise=="function"?Promise:void 0,Af=typeof queueMicrotask=="function"?queueMicrotask:typeof Ta<"u"?function(e){return Ta.resolve(null).then(e).catch($f)}:Di;function $f(e){setTimeout(function(){throw e})}function ti(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);tr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Nn,lr="__reactProps$"+Nn,ct="__reactContainer$"+Nn,Fi="__reactEvents$"+Nn,Bf="__reactListeners$"+Nn,Uf="__reactHandles$"+Nn;function Ft(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pa(e);e!==null;){if(n=e[tt])return n;e=Pa(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[tt]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function _o(e){return e[lr]||null}var Ai=[],rn=-1;function Mt(e){return{current:e}}function Z(e){0>rn||(e.current=Ai[rn],Ai[rn]=null,rn--)}function J(e,t){rn++,Ai[rn]=e.current,e.current=t}var It={},xe=Mt(It),_e=Mt(!1),Ht=It;function vn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function ao(){Z(_e),Z(xe)}function Oa(e,t,n){if(xe.current!==It)throw Error(_(168));J(xe,t),J(_e,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Nd(e)||"Unknown",o));return re({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Ht=xe.current,J(xe,e),J(_e,_e.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Tu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,Z(_e),Z(xe),J(xe,e)):Z(_e),J(_e,n)}var it=null,zo=!1,ni=!1;function Pu(e){it===null?it=[e]:it.push(e)}function Hf(e){zo=!0,Pu(e)}function Tt(){if(!ni&&it!==null){ni=!0;var e=0,t=Y;try{var n=it;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,zo=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),lu(vl,Tt),o}finally{Y=t,ni=!1}}return null}var on=[],ln=0,uo=null,co=0,Fe=[],Ae=0,Wt=null,lt=1,at="";function Ot(e,t){on[ln++]=co,on[ln++]=uo,uo=e,co=t}function Ou(e,t,n){Fe[Ae++]=lt,Fe[Ae++]=at,Fe[Ae++]=Wt,Wt=e;var r=lt;e=at;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,lt=1<<32-Je(t)+o|n<<o|r,at=i+e}else lt=1<<i|n<<o|r,at=e}function Cl(e){e.return!==null&&(Ot(e,1),Ou(e,1,0))}function El(e){for(;e===uo;)uo=on[--ln],on[ln]=null,co=on[--ln],on[ln]=null;for(;e===Wt;)Wt=Fe[--Ae],Fe[Ae]=null,at=Fe[--Ae],Fe[Ae]=null,lt=Fe[--Ae],Fe[Ae]=null}var Me=null,Re=null,q=!1,Ye=null;function Du(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Re=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Re=null,!0):!1;default:return!1}}function $i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(q){var t=Re;if(t){var n=t;if(!Fa(e,t)){if($i(e))throw Error(_(418));t=Nt(n.nextSibling);var r=Me;t&&Fa(e,t)?Du(r,n):(e.flags=e.flags&-4097|2,q=!1,Me=e)}}else{if($i(e))throw Error(_(418));e.flags=e.flags&-4097|2,q=!1,Me=e}}}function Aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Lr(e){if(e!==Me)return!1;if(!q)return Aa(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oi(e.type,e.memoizedProps)),t&&(t=Re)){if($i(e))throw Fu(),Error(_(418));for(;t;)Du(e,t),t=Nt(t.nextSibling)}if(Aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Me?Nt(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=Re;e;)e=Nt(e.nextSibling)}function yn(){Re=Me=null,q=!1}function _l(e){Ye===null?Ye=[e]:Ye.push(e)}var Wf=ht.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $a(e){var t=e._init;return t(e._payload)}function Au(e){function t(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=zt(f,c),f.index=0,f.sibling=null,f}function i(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,h,j){return c===null||c.tag!==6?(c=ui(h,f.mode,j),c.return=f,c):(c=o(c,h),c.return=f,c)}function u(f,c,h,j){var E=h.type;return E===Zt?g(f,c,h.props.children,j,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gt&&$a(E)===c.type)?(j=o(c,h.props),j.ref=Rn(f,c,h),j.return=f,j):(j=Xr(h.type,h.key,h.props,null,f.mode,j),j.ref=Rn(f,c,h),j.return=f,j)}function d(f,c,h,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ci(h,f.mode,j),c.return=f,c):(c=o(c,h.children||[]),c.return=f,c)}function g(f,c,h,j,E){return c===null||c.tag!==7?(c=Ut(h,f.mode,j,E),c.return=f,c):(c=o(c,h),c.return=f,c)}function p(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ui(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case wr:return h=Xr(c.type,c.key,c.props,null,f.mode,h),h.ref=Rn(f,null,c),h.return=f,h;case Xt:return c=ci(c,f.mode,h),c.return=f,c;case gt:var j=c._init;return p(f,j(c._payload),h)}if(On(c)||En(c))return c=Ut(c,f.mode,h,null),c.return=f,c;Ir(f,c)}return null}function m(f,c,h,j){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(f,c,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wr:return h.key===E?u(f,c,h,j):null;case Xt:return h.key===E?d(f,c,h,j):null;case gt:return E=h._init,m(f,c,E(h._payload),j)}if(On(h)||En(h))return E!==null?null:g(f,c,h,j,null);Ir(f,h)}return null}function S(f,c,h,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(h)||null,s(c,f,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case wr:return f=f.get(j.key===null?h:j.key)||null,u(c,f,j,E);case Xt:return f=f.get(j.key===null?h:j.key)||null,d(c,f,j,E);case gt:var R=j._init;return S(f,c,h,R(j._payload),E)}if(On(j)||En(j))return f=f.get(h)||null,g(c,f,j,E,null);Ir(c,j)}return null}function k(f,c,h,j){for(var E=null,R=null,I=c,M=c=0,$=null;I!==null&&M<h.length;M++){I.index>M?($=I,I=null):$=I.sibling;var L=m(f,I,h[M],j);if(L===null){I===null&&(I=$);break}e&&I&&L.alternate===null&&t(f,I),c=i(L,c,M),R===null?E=L:R.sibling=L,R=L,I=$}if(M===h.length)return n(f,I),q&&Ot(f,M),E;if(I===null){for(;M<h.length;M++)I=p(f,h[M],j),I!==null&&(c=i(I,c,M),R===null?E=I:R.sibling=I,R=I);return q&&Ot(f,M),E}for(I=r(f,I);M<h.length;M++)$=S(I,f,M,h[M],j),$!==null&&(e&&$.alternate!==null&&I.delete($.key===null?M:$.key),c=i($,c,M),R===null?E=$:R.sibling=$,R=$);return e&&I.forEach(function(W){return t(f,W)}),q&&Ot(f,M),E}function x(f,c,h,j){var E=En(h);if(typeof E!="function")throw Error(_(150));if(h=E.call(h),h==null)throw Error(_(151));for(var R=E=null,I=c,M=c=0,$=null,L=h.next();I!==null&&!L.done;M++,L=h.next()){I.index>M?($=I,I=null):$=I.sibling;var W=m(f,I,L.value,j);if(W===null){I===null&&(I=$);break}e&&I&&W.alternate===null&&t(f,I),c=i(W,c,M),R===null?E=W:R.sibling=W,R=W,I=$}if(L.done)return n(f,I),q&&Ot(f,M),E;if(I===null){for(;!L.done;M++,L=h.next())L=p(f,L.value,j),L!==null&&(c=i(L,c,M),R===null?E=L:R.sibling=L,R=L);return q&&Ot(f,M),E}for(I=r(f,I);!L.done;M++,L=h.next())L=S(I,f,M,L.value,j),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?M:L.key),c=i(L,c,M),R===null?E=L:R.sibling=L,R=L);return e&&I.forEach(function(ee){return t(f,ee)}),q&&Ot(f,M),E}function w(f,c,h,j){if(typeof h=="object"&&h!==null&&h.type===Zt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case wr:e:{for(var E=h.key,R=c;R!==null;){if(R.key===E){if(E=h.type,E===Zt){if(R.tag===7){n(f,R.sibling),c=o(R,h.props.children),c.return=f,f=c;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gt&&$a(E)===R.type){n(f,R.sibling),c=o(R,h.props),c.ref=Rn(f,R,h),c.return=f,f=c;break e}n(f,R);break}else t(f,R);R=R.sibling}h.type===Zt?(c=Ut(h.props.children,f.mode,j,h.key),c.return=f,f=c):(j=Xr(h.type,h.key,h.props,null,f.mode,j),j.ref=Rn(f,c,h),j.return=f,f=j)}return a(f);case Xt:e:{for(R=h.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=o(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ci(h,f.mode,j),c.return=f,f=c}return a(f);case gt:return R=h._init,w(f,c,R(h._payload),j)}if(On(h))return k(f,c,h,j);if(En(h))return x(f,c,h,j);Ir(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,h),c.return=f,f=c):(n(f,c),c=ui(h,f.mode,j),c.return=f,f=c),a(f)):n(f,c)}return w}var xn=Au(!0),$u=Au(!1),fo=Mt(null),po=null,an=null,zl=null;function Ll(){zl=an=po=null}function Il(e){var t=fo.current;Z(fo),e._currentValue=t}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){po=e,zl=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(po===null)throw Error(_(308));an=e,po.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var At=null;function Rl(e){At===null?At=[e]:At.push(e)}function Bu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Rl(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Rl(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var o=e.updateQueue;vt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,g=d=u=null,s=i;do{var m=s.lane,S=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(m=t,S=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(S,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,m=typeof k=="function"?k.call(S,p,m):k,m==null)break e;p=re({},p,m);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=S,u=p):g=g.next=S,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(u=p),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Gt|=a,e.lanes=a,e.memoizedState=p}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var vr={},rt=Mt(vr),ar=Mt(vr),sr=Mt(vr);function $t(e){if(e===vr)throw Error(_(174));return e}function Tl(e,t){switch(J(sr,t),J(ar,e),J(rt,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Si(t,e)}Z(rt),J(rt,t)}function wn(){Z(rt),Z(ar),Z(sr)}function Hu(e){$t(sr.current);var t=$t(rt.current),n=Si(t,e.type);t!==n&&(J(ar,e),J(rt,n))}function Pl(e){ar.current===e&&(Z(rt),Z(ar))}var te=Mt(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function Ol(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var Gr=ht.ReactCurrentDispatcher,oi=ht.ReactCurrentBatchConfig,Vt=0,ne=null,se=null,ce=null,go=!1,Wn=!1,ur=0,Vf=0;function ge(){throw Error(_(321))}function Dl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,o,i){if(Vt=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?Yf:Jf,e=n(r,o),Wn){i=0;do{if(Wn=!1,ur=0,25<=i)throw Error(_(301));i+=1,ce=se=null,t.updateQueue=null,Gr.current=Xf,e=n(r,o)}while(Wn)}if(Gr.current=vo,t=se!==null&&se.next!==null,Vt=0,ce=se=ne=null,go=!1,t)throw Error(_(300));return e}function Al(){var e=ur!==0;return ur=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?ne.memoizedState=ce=e:ce=ce.next=e,ce}function He(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?ne.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(_(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?ne.memoizedState=ce=e:ce=ce.next=e}return ce}function cr(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=He(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,d=i;do{var g=d.lane;if((Vt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,ne.lanes|=g,Gt|=g}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=s,Ze(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,Gt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function li(e){var t=He(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ze(i,t.memoizedState)||(Ee=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wu(){}function Vu(e,t){var n=ne,r=He(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,Ee=!0),r=r.queue,$l(Ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,dr(9,Qu.bind(null,n,r,o,t),void 0,null),de===null)throw Error(_(349));Vt&30||Gu(n,t,o)}return o}function Gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qu(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Ju(e)}function Ku(e,t,n){return n(function(){Yu(t)&&Ju(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Ju(e){var t=dt(e,1);t!==null&&Xe(t,e,1,-1)}function Ha(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Kf.bind(null,ne,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xu(){return He().memoizedState}function Qr(e,t,n,r){var o=et();ne.flags|=e,o.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Lo(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(se!==null){var a=se.memoizedState;if(i=a.destroy,r!==null&&Dl(r,a.deps)){o.memoizedState=dr(t,n,i,r);return}}ne.flags|=e,o.memoizedState=dr(1|t,n,i,r)}function Wa(e,t){return Qr(8390656,8,e,t)}function $l(e,t){return Lo(2048,8,e,t)}function Zu(e,t){return Lo(4,2,e,t)}function qu(e,t){return Lo(4,4,e,t)}function ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tc(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4,4,ec.bind(null,t,e),n)}function Bl(){}function nc(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oc(e,t,n){return Vt&21?(Ze(n,t)||(n=uu(),ne.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Gf(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{Y=n,oi.transition=r}}function ic(){return He().memoizedState}function Qf(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lc(e))ac(t,n);else if(n=Bu(e,t,n,r),n!==null){var o=ke();Xe(n,e,r,o),sc(n,t,r)}}function Kf(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lc(e))ac(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ze(s,a)){var u=t.interleaved;u===null?(o.next=o,Rl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Bu(e,t,o,r),n!==null&&(o=ke(),Xe(n,e,r,o),sc(n,t,r))}}function lc(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function ac(e,t){Wn=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}var vo={readContext:Ue,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Yf={readContext:Ue,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qf.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:Bl,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Ha(!1),t=e[0];return e=Gf.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=et();if(q){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));Vt&30||Gu(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Wa(Ku.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,Qu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=et(),t=de.identifierPrefix;if(q){var n=at,r=lt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jf={readContext:Ue,useCallback:nc,useContext:Ue,useEffect:$l,useImperativeHandle:tc,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:rc,useReducer:ii,useRef:Xu,useState:function(){return ii(cr)},useDebugValue:Bl,useDeferredValue:function(e){var t=He();return oc(t,se.memoizedState,e)},useTransition:function(){var e=ii(cr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:ic,unstable_isNewReconciler:!1},Xf={readContext:Ue,useCallback:nc,useContext:Ue,useEffect:$l,useImperativeHandle:tc,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:rc,useReducer:li,useRef:Xu,useState:function(){return li(cr)},useDebugValue:Bl,useDeferredValue:function(e){var t=He();return se===null?t.memoizedState=e:oc(t,se.memoizedState,e)},useTransition:function(){var e=li(cr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:ic,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=_t(e),i=st(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ct(e,i,o),t!==null&&(Xe(t,e,o,r),Vr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=_t(e),i=st(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ct(e,i,o),t!==null&&(Xe(t,e,o,r),Vr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=_t(e),o=st(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ct(e,o,r),t!==null&&(Xe(t,e,r,n),Vr(t,e,r))}};function Va(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(o,i):!0}function uc(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=ze(t)?Ht:xe.current,r=t.contextTypes,i=(r=r!=null)?vn(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function Wi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ml(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=ze(t)?Ht:xe.current,o.context=vn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Hi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Io.enqueueReplaceState(o,o.state,null),ho(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=bd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ai(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function cc(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,tl=r),Vi(e,t)},n}function dc(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Vi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vi(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=fp.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Ct(n,t,1))),n.lanes|=1),e)}var qf=ht.ReactCurrentOwner,Ee=!1;function we(e,t,n,r){t.child=e===null?$u(t,null,n,r):xn(t,e.child,n,r)}function Ja(e,t,n,r,o){n=n.render;var i=t.ref;return hn(t,o),r=Fl(e,t,n,r,i,o),n=Al(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(q&&n&&Cl(t),t.flags|=1,we(e,t,r,o),t.child)}function Xa(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Yl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,fc(e,t,i,r,o)):(e=Xr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(a,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(rr(i,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,ft(e,t,o)}return Gi(e,t,n,r,o)}function pc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(un,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(un,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(un,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(un,Ie),Ie|=r;return we(e,t,o,n),t.child}function hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gi(e,t,n,r,o){var i=ze(n)?Ht:xe.current;return i=vn(t,i),hn(t,o),n=Fl(e,t,n,r,i,o),r=Al(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(q&&r&&Cl(t),t.flags|=1,we(e,t,n,o),t.child)}function Za(e,t,n,r,o){if(ze(n)){var i=!0;so(t)}else i=!1;if(hn(t,o),t.stateNode===null)Kr(e,t),uc(t,n,r),Wi(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ue(d):(d=ze(n)?Ht:xe.current,d=vn(t,d));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ga(t,a,r,d),vt=!1;var m=t.memoizedState;a.state=m,ho(t,r,a,o),u=t.memoizedState,s!==r||m!==u||_e.current||vt?(typeof g=="function"&&(Hi(t,n,g,r),u=t.memoizedState),(s=vt||Va(t,n,s,r,m,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Uu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Qe(t.type,s),a.props=d,p=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=ze(n)?Ht:xe.current,u=vn(t,u));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||m!==u)&&Ga(t,a,r,u),vt=!1,m=t.memoizedState,a.state=m,ho(t,r,a,o);var k=t.memoizedState;s!==p||m!==k||_e.current||vt?(typeof S=="function"&&(Hi(t,n,S,r),k=t.memoizedState),(d=vt||Va(t,n,d,r,m,k,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Qi(e,t,n,r,i,o)}function Qi(e,t,n,r,o,i){hc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Da(t,n,!1),ft(e,t,i);r=t.stateNode,qf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,s,i)):we(e,t,s,i),t.memoizedState=r.state,o&&Da(t,n,!0),t.child}function mc(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Tl(e,t.containerInfo)}function qa(e,t,n,r,o){return yn(),_l(o),t.flags|=256,we(e,t,n,r),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function gc(e,t,n){var r=t.pendingProps,o=te.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(te,o&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=To(a,r,0,null),e=Ut(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Ki,e):Ul(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return ep(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=zt(s,i):(i=Ut(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Yi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ki,r}return i=e.child,e=i.sibling,r=zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ul(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&_l(r),xn(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ep(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ai(Error(_(422))),Rr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=To({mode:"visible",children:r.children},o,0,null),i=Ut(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&xn(t,e.child,null,a),t.child.memoizedState=Yi(a),t.memoizedState=Ki,i);if(!(t.mode&1))return Rr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=ai(i,r,void 0),Rr(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ee||s){if(r=de,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dt(e,o),Xe(r,e,o,-1))}return Kl(),r=ai(Error(_(421))),Rr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=pp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Re=Nt(o.nextSibling),Me=t,q=!0,Ye=null,e!==null&&(Fe[Ae++]=lt,Fe[Ae++]=at,Fe[Ae++]=Wt,lt=e.id,at=e.overflow,Wt=t),t=Ul(t,r.children),t.flags|=4096,t)}function es(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function si(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function vc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&es(e,n,t);else if(e.tag===19)es(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),si(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}si(t,!0,n,null,i);break;case"together":si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tp(e,t,n){switch(t.tag){case 3:mc(t),yn();break;case 5:Hu(t);break;case 1:ze(t.type)&&so(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(fo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?gc(e,t,n):(J(te,te.current&1),e=ft(e,t,n),e!==null?e.sibling:null);J(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,pc(e,t,n)}return ft(e,t,n)}var yc,Ji,xc,wc;yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ji=function(){};xc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$t(rt.current);var i=null;switch(n){case"input":o=yi(e,o),r=yi(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=ki(e,o),r=ki(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}ji(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&X("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};wc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function np(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ze(t.type)&&ao(),ve(t),null;case 3:return r=t.stateNode,wn(),Z(_e),Z(xe),Ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(ol(Ye),Ye=null))),Ji(e,t),ve(t),null;case 5:Pl(t);var o=$t(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)xc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ve(t),null}if(e=$t(rt.current),Lr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tt]=t,r[lr]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<Fn.length;o++)X(Fn[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":ua(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":da(r,i),X("invalid",r)}ji(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),o=["children",""+s]):Jn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&X("scroll",r)}switch(n){case"input":kr(r),ca(r,i,!0);break;case"textarea":kr(r),fa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[tt]=t,e[lr]=r,yc(e,t,!1,!1),t.stateNode=e;e:{switch(a=bi(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fn.length;o++)X(Fn[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":ua(e,r),o=yi(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":da(e,r),o=ki(e,r),X("invalid",e);break;default:o=r}ji(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Xs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ys(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&X("scroll",e):u!=null&&fl(e,i,u,a))}switch(n){case"input":kr(e),ca(e,r,!1);break;case"textarea":kr(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)wc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=$t(sr.current),$t(rt.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(i=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ve(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Re!==null&&t.mode&1&&!(t.flags&128))Fu(),yn(),t.flags|=98560,i=!1;else if(i=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[tt]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ye!==null&&(ol(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ue===0&&(ue=3):Kl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return wn(),Ji(e,t),e===null&&or(t.stateNode.containerInfo),ve(t),null;case 10:return Il(t.type._context),ve(t),null;case 17:return ze(t.type)&&ao(),ve(t),null;case 19:if(Z(te),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Mn(i,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=mo(e),a!==null){for(t.flags|=128,Mn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>Sn&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304)}else{if(!r)if(e=mo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!q)return ve(t),null}else 2*ie()-i.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=te.current,J(te,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function rp(e,t){switch(El(t),t.tag){case 1:return ze(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),Z(_e),Z(xe),Ol(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pl(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return wn(),null;case 10:return Il(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Mr=!1,ye=!1,op=typeof WeakSet=="function"?WeakSet:Set,D=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Xi(e,t,n){try{n()}catch(r){oe(e,t,r)}}var ts=!1;function ip(e,t){if(Ti=ro,e=Nu(),Nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,g=0,p=e,m=null;t:for(;;){for(var S;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===e)break t;if(m===n&&++d===o&&(s=a),m===i&&++g===r&&(u=a),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pi={focusedElem:e,selectionRange:n},ro=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,w=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),w);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(j){oe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return k=ts,ts=!1,k}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Xi(t,n,i)}o=o.next}while(o!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kc(e){var t=e.alternate;t!==null&&(e.alternate=null,kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[lr],delete t[Fi],delete t[Bf],delete t[Uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}var pe=null,Ke=!1;function mt(e,t,n){for(n=n.child;n!==null;)jc(e,t,n),n=n.sibling}function jc(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:ye||sn(n,t);case 6:var r=pe,o=Ke;pe=null,mt(e,t,n),pe=r,Ke=o,pe!==null&&(Ke?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ke?(e=pe,n=n.stateNode,e.nodeType===8?ti(e.parentNode,n):e.nodeType===1&&ti(e,n),tr(e)):ti(pe,n.stateNode));break;case 4:r=pe,o=Ke,pe=n.stateNode.containerInfo,Ke=!0,mt(e,t,n),pe=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Xi(n,t,a),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!ye&&(sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,mt(e,t,n),ye=r):mt(e,t,n);break;default:mt(e,t,n)}}function rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new op),t.forEach(function(r){var o=hp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,Ke=!1;break e;case 3:pe=s.stateNode.containerInfo,Ke=!0;break e;case 4:pe=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(pe===null)throw Error(_(160));jc(i,a,o),pe=null,Ke=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){oe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),qe(e),r&4){try{Vn(3,e,e.return),Ro(3,e)}catch(x){oe(e,e.return,x)}try{Vn(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:Ve(t,e),qe(e),r&512&&n!==null&&sn(n,n.return);break;case 5:if(Ve(t,e),qe(e),r&512&&n!==null&&sn(n,n.return),e.flags&32){var o=e.stateNode;try{Xn(o,"")}catch(x){oe(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Gs(o,i),bi(s,a);var d=bi(s,i);for(a=0;a<u.length;a+=2){var g=u[a],p=u[a+1];g==="style"?Xs(o,p):g==="dangerouslySetInnerHTML"?Ys(o,p):g==="children"?Xn(o,p):fl(o,g,p,d)}switch(s){case"input":xi(o,i);break;case"textarea":Qs(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?cn(o,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?cn(o,!!i.multiple,i.defaultValue,!0):cn(o,!!i.multiple,i.multiple?[]:"",!1))}o[lr]=i}catch(x){oe(e,e.return,x)}}break;case 6:if(Ve(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){oe(e,e.return,x)}}break;case 3:if(Ve(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:Ve(t,e),qe(e);break;case 13:Ve(t,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Vl=ie())),r&4&&rs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||g,Ve(t,e),ye=d):Ve(t,e),qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(D=e,g=e.child;g!==null;){for(p=D=g;D!==null;){switch(m=D,S=m.child,m.tag){case 0:case 11:case 14:case 15:Vn(4,m,m.return);break;case 1:sn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){oe(r,n,x)}}break;case 5:sn(m,m.return);break;case 22:if(m.memoizedState!==null){is(p);continue}}S!==null?(S.return=m,D=S):is(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{o=p.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Js("display",a))}catch(x){oe(e,e.return,x)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(x){oe(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ve(t,e),qe(e),r&4&&rs(e);break;case 21:break;default:Ve(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sc(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xn(o,""),r.flags&=-33);var i=ns(e);el(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ns(e);qi(e,s,a);break;default:throw Error(_(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lp(e,t,n){D=e,Nc(e)}function Nc(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Mr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=Mr;var d=ye;if(Mr=a,(ye=u)&&!d)for(D=o;D!==null;)a=D,u=a.child,a.tag===22&&a.memoizedState!==null?ls(o):u!==null?(u.return=a,D=u):ls(o);for(;i!==null;)D=i,Nc(i),i=i.sibling;D=o,Mr=s,ye=d}os(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):os(e)}}function os(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ua(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&tr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&Zi(t)}catch(m){oe(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function is(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function ls(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var i=t.return;try{Zi(t)}catch(u){oe(t,i,u)}break;case 5:var a=t.return;try{Zi(t)}catch(u){oe(t,a,u)}}}catch(u){oe(t,t.return,u)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var ap=Math.ceil,yo=ht.ReactCurrentDispatcher,Hl=ht.ReactCurrentOwner,Be=ht.ReactCurrentBatchConfig,V=0,de=null,le=null,he=0,Ie=0,un=Mt(0),ue=0,fr=null,Gt=0,Mo=0,Wl=0,Gn=null,Ce=null,Vl=0,Sn=1/0,ot=null,xo=!1,tl=null,Et=null,Tr=!1,kt=null,wo=0,Qn=0,nl=null,Yr=-1,Jr=0;function ke(){return V&6?ie():Yr!==-1?Yr:Yr=ie()}function _t(e){return e.mode&1?V&2&&he!==0?he&-he:Wf.transition!==null?(Jr===0&&(Jr=uu()),Jr):(e=Y,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function Xe(e,t,n,r){if(50<Qn)throw Qn=0,nl=null,Error(_(185));hr(e,n,r),(!(V&2)||e!==de)&&(e===de&&(!(V&2)&&(Mo|=n),ue===4&&xt(e,he)),Le(e,r),n===1&&V===0&&!(t.mode&1)&&(Sn=ie()+500,zo&&Tt()))}function Le(e,t){var n=e.callbackNode;Hd(e,t);var r=no(e,e===de?he:0);if(r===0)n!==null&&ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ma(n),t===1)e.tag===0?Hf(as.bind(null,e)):Pu(as.bind(null,e)),Af(function(){!(V&6)&&Tt()}),n=null;else{switch(cu(r)){case 1:n=vl;break;case 4:n=au;break;case 16:n=to;break;case 536870912:n=su;break;default:n=to}n=Mc(n,Cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cc(e,t){if(Yr=-1,Jr=0,V&6)throw Error(_(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=no(e,e===de?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ko(e,r);else{t=r;var o=V;V|=2;var i=_c();(de!==e||he!==t)&&(ot=null,Sn=ie()+500,Bt(e,t));do try{cp();break}catch(s){Ec(e,s)}while(!0);Ll(),yo.current=i,V=o,le!==null?t=0:(de=null,he=0,t=ue)}if(t!==0){if(t===2&&(o=zi(e),o!==0&&(r=o,t=rl(e,o))),t===1)throw n=fr,Bt(e,0),xt(e,r),Le(e,ie()),n;if(t===6)xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!sp(o)&&(t=ko(e,r),t===2&&(i=zi(e),i!==0&&(r=i,t=rl(e,i))),t===1))throw n=fr,Bt(e,0),xt(e,r),Le(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Dt(e,Ce,ot);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=Vl+500-ie(),10<t)){if(no(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Di(Dt.bind(null,e,Ce,ot),t);break}Dt(e,Ce,ot);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Je(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ap(r/1960))-r,10<r){e.timeoutHandle=Di(Dt.bind(null,e,Ce,ot),r);break}Dt(e,Ce,ot);break;case 5:Dt(e,Ce,ot);break;default:throw Error(_(329))}}}return Le(e,ie()),e.callbackNode===n?Cc.bind(null,e):null}function rl(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=ko(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ol(t)),e}function ol(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~Wl,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function as(e){if(V&6)throw Error(_(327));mn();var t=no(e,0);if(!(t&1))return Le(e,ie()),null;var n=ko(e,t);if(e.tag!==0&&n===2){var r=zi(e);r!==0&&(t=r,n=rl(e,r))}if(n===1)throw n=fr,Bt(e,0),xt(e,t),Le(e,ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,Ce,ot),Le(e,ie()),null}function Gl(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Sn=ie()+500,zo&&Tt())}}function Qt(e){kt!==null&&kt.tag===0&&!(V&6)&&mn();var t=V;V|=1;var n=Be.transition,r=Y;try{if(Be.transition=null,Y=1,e)return e()}finally{Y=r,Be.transition=n,V=t,!(V&6)&&Tt()}}function Ql(){Ie=un.current,Z(un)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ff(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:wn(),Z(_e),Z(xe),Ol();break;case 5:Pl(r);break;case 4:wn();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Il(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(de=e,le=e=zt(e.current,null),he=Ie=t,ue=0,fr=null,Wl=Mo=Gt=0,Ce=Gn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}At=null}return e}function Ec(e,t){do{var n=le;try{if(Ll(),Gr.current=vo,go){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}go=!1}if(Vt=0,ce=se=ne=null,Wn=!1,ur=0,Hl.current=null,n===null||n.return===null){ue=1,fr=t,le=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Ka(a);if(S!==null){S.flags&=-257,Ya(S,a,s,i,t),S.mode&1&&Qa(i,d,t),t=S,u=d;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if(!(t&1)){Qa(i,d,t),Kl();break e}u=Error(_(426))}}else if(q&&s.mode&1){var w=Ka(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ya(w,a,s,i,t),_l(kn(u,s));break e}}i=u=kn(u,s),ue!==4&&(ue=2),Gn===null?Gn=[i]:Gn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=cc(i,u,t);Ba(i,f);break e;case 1:s=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Et===null||!Et.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=dc(i,s,t);Ba(i,j);break e}}i=i.return}while(i!==null)}Lc(n)}catch(E){t=E,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function _c(){var e=yo.current;return yo.current=vo,e===null?vo:e}function Kl(){(ue===0||ue===3||ue===2)&&(ue=4),de===null||!(Gt&268435455)&&!(Mo&268435455)||xt(de,he)}function ko(e,t){var n=V;V|=2;var r=_c();(de!==e||he!==t)&&(ot=null,Bt(e,t));do try{up();break}catch(o){Ec(e,o)}while(!0);if(Ll(),V=n,yo.current=r,le!==null)throw Error(_(261));return de=null,he=0,ue}function up(){for(;le!==null;)zc(le)}function cp(){for(;le!==null&&!Td();)zc(le)}function zc(e){var t=Rc(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Lc(e):le=t,Hl.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rp(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}else if(n=np(n,t,Ie),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function Dt(e,t,n){var r=Y,o=Be.transition;try{Be.transition=null,Y=1,dp(e,t,n,r)}finally{Be.transition=o,Y=r}return null}function dp(e,t,n,r){do mn();while(kt!==null);if(V&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wd(e,i),e===de&&(le=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,Mc(to,function(){return mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var a=Y;Y=1;var s=V;V|=4,Hl.current=null,ip(e,n),bc(n,e),If(Pi),ro=!!Ti,Pi=Ti=null,e.current=n,lp(n),Pd(),V=s,Y=a,Be.transition=i}else e.current=n;if(Tr&&(Tr=!1,kt=e,wo=o),i=e.pendingLanes,i===0&&(Et=null),Fd(n.stateNode),Le(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xo)throw xo=!1,e=tl,tl=null,e;return wo&1&&e.tag!==0&&mn(),i=e.pendingLanes,i&1?e===nl?Qn++:(Qn=0,nl=e):Qn=0,Tt(),null}function mn(){if(kt!==null){var e=cu(wo),t=Be.transition,n=Y;try{if(Be.transition=null,Y=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,wo=0,V&6)throw Error(_(331));var o=V;for(V|=4,D=e.current;D!==null;){var i=D,a=i.child;if(D.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(D=d;D!==null;){var g=D;switch(g.tag){case 0:case 11:case 15:Vn(8,g,i)}var p=g.child;if(p!==null)p.return=g,D=p;else for(;D!==null;){g=D;var m=g.sibling,S=g.return;if(kc(g),g===d){D=null;break}if(m!==null){m.return=S,D=m;break}D=S}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}D=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,D=a;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,D=f;break e}D=i.return}}var c=e.current;for(D=c;D!==null;){a=D;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,D=h;else e:for(a=c;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ro(9,s)}}catch(E){oe(s,s.return,E)}if(s===a){D=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,D=j;break e}D=s.return}}if(V=o,Tt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{Y=n,Be.transition=t}}return!1}function ss(e,t,n){t=kn(n,t),t=cc(e,t,1),e=Ct(e,t,1),t=ke(),e!==null&&(hr(e,1,t),Le(e,t))}function oe(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=kn(n,e),e=dc(t,e,1),t=Ct(t,e,1),e=ke(),t!==null&&(hr(t,1,e),Le(t,e));break}}t=t.return}}function fp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(he&n)===n&&(ue===4||ue===3&&(he&130023424)===he&&500>ie()-Vl?Bt(e,0):Wl|=n),Le(e,t)}function Ic(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=ke();e=dt(e,t),e!==null&&(hr(e,t,n),Le(e,n))}function pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ic(e,n)}function hp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Ic(e,n)}var Rc;Rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,tp(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,q&&t.flags&1048576&&Ou(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var o=vn(t,xe.current);hn(t,n),o=Fl(null,t,r,e,o,n);var i=Al();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,so(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ml(t),o.updater=Io,t.stateNode=o,o._reactInternals=t,Wi(t,r,e,n),t=Qi(null,t,r,!0,i,n)):(t.tag=0,q&&i&&Cl(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=gp(r),e=Qe(r,e),o){case 0:t=Gi(null,t,r,e,n);break e;case 1:t=Za(null,t,r,e,n);break e;case 11:t=Ja(null,t,r,e,n);break e;case 14:t=Xa(null,t,r,Qe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Gi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Za(e,t,r,o,n);case 3:e:{if(mc(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Uu(e,t),ho(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=kn(Error(_(423)),t),t=qa(e,t,r,n,o);break e}else if(r!==o){o=kn(Error(_(424)),t),t=qa(e,t,r,n,o);break e}else for(Re=Nt(t.stateNode.containerInfo.firstChild),Me=t,q=!0,Ye=null,n=$u(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===o){t=ft(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Hu(t),e===null&&Bi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Oi(r,o)?a=null:i!==null&&Oi(r,i)&&(t.flags|=32),hc(e,t),we(e,t,a,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return gc(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Ja(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(fo,r._currentValue),r._currentValue=a,i!==null)if(Ze(i.value,a)){if(i.children===o.children&&!_e.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=st(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ui(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ui(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hn(t,n),o=Ue(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),Xa(e,t,r,o,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Kr(e,t),t.tag=1,ze(r)?(e=!0,so(t)):e=!1,hn(t,n),uc(t,r,o),Wi(t,r,o,n),Qi(null,t,r,!0,e,n);case 19:return vc(e,t,n);case 22:return pc(e,t,n)}throw Error(_(156,t.tag))};function Mc(e,t){return lu(e,t)}function mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new mp(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gp(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===ml)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Yl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return Ut(n.children,o,i,t);case pl:a=8,o|=8;break;case hi:return e=$e(12,n,t,o|2),e.elementType=hi,e.lanes=i,e;case mi:return e=$e(13,n,t,o),e.elementType=mi,e.lanes=i,e;case gi:return e=$e(19,n,t,o),e.elementType=gi,e.lanes=i,e;case Hs:return To(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bs:a=10;break e;case Us:a=9;break e;case hl:a=11;break e;case ml:a=14;break e;case gt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=$e(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ut(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Hs,e.lanes=n,e.stateNode={isHidden:!1},e}function ui(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function ci(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Jl(e,t,n,r,o,i,a,s,u){return e=new vp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(i),e}function yp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return It;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ze(n))return Tu(e,n,t)}return t}function Pc(e,t,n,r,o,i,a,s,u){return e=Jl(n,r,!0,e,o,i,a,s,u),e.context=Tc(null),n=e.current,r=ke(),o=_t(n),i=st(r,o),i.callback=t??null,Ct(n,i,o),e.current.lanes=o,hr(e,o,r),Le(e,r),e}function Po(e,t,n,r){var o=t.current,i=ke(),a=_t(o);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ct(o,t,a),e!==null&&(Xe(e,o,a,i),Vr(e,o,a)),a}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xl(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function xp(){return null}var Oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}Oo.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Po(e,t,null,null)};Oo.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Po(null,e,null,null)}),t[ct]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&mu(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cs(){}function wp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=So(a);i.call(d)}}var a=Pc(t,r,e,0,null,!1,!1,"",cs);return e._reactRootContainer=a,e[ct]=a.current,or(e.nodeType===8?e.parentNode:e),Qt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=So(u);s.call(d)}}var u=Jl(e,0,!1,null,null,!1,!1,"",cs);return e._reactRootContainer=u,e[ct]=u.current,or(e.nodeType===8?e.parentNode:e),Qt(function(){Po(t,u,n,r)}),u}function Fo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=So(a);s.call(u)}}Po(t,a,e,o)}else a=wp(n,t,e,o,r);return So(a)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(yl(t,n|1),Le(t,ie()),!(V&6)&&(Sn=ie()+500,Tt()))}break;case 13:Qt(function(){var r=dt(e,1);if(r!==null){var o=ke();Xe(r,e,1,o)}}),Xl(e,1)}};xl=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ke();Xe(t,e,134217728,n)}Xl(e,134217728)}};fu=function(e){if(e.tag===13){var t=_t(e),n=dt(e,t);if(n!==null){var r=ke();Xe(n,e,t,r)}Xl(e,t)}};pu=function(){return Y};hu=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};Ci=function(e,t,n){switch(t){case"input":if(xi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_o(r);if(!o)throw Error(_(90));Vs(r),xi(r,o)}}}break;case"textarea":Qs(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};eu=Gl;tu=Qt;var kp={usingClientEntryPoint:!1,Events:[gr,nn,_o,Zs,qs,Gl]},Tn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sp={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{bo=Pr.inject(Sp),nt=Pr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kp;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(_(200));return yp(e,t,null,n)};Pe.createRoot=function(e,t){if(!ql(e))throw Error(_(299));var n=!1,r="",o=Oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Jl(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,or(e.nodeType===8?e.parentNode:e),new Zl(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Qt(e)};Pe.hydrate=function(e,t,n){if(!Do(t))throw Error(_(200));return Fo(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!ql(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Oc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,o,!1,i,a),e[ct]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Oo(t)};Pe.render=function(e,t,n){if(!Do(t))throw Error(_(200));return Fo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Do(e))throw Error(_(40));return e._reactRootContainer?(Qt(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Pe.unstable_batchedUpdates=Gl;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Fo(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc)}catch(e){console.error(e)}}Dc(),Ds.exports=Pe;var jp=Ds.exports,ds=jp;fi.createRoot=ds.createRoot,fi.hydrateRoot=ds.hydrateRoot;const bp="modulepreload",Np=function(e,t){return new URL(e,t).href},fs={},Cp=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(d=>{if(d=Np(d,r),d in fs)return;fs[d]=!0;const g=d.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(!!r)for(let k=a.length-1;k>=0;k--){const x=a[k];if(x.href===d&&(!g||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":bp,g||(S.as="script"),S.crossOrigin="",S.href=d,u&&S.setAttribute("nonce",u),document.head.appendChild(S),g)return new Promise((k,x)=>{S.addEventListener("load",k),S.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Ep=({onLogin:e})=>{const[t,n]=P.useState(!0),[r,o]=P.useState(""),[i,a]=P.useState(""),[s,u]=P.useState(""),[d,g]=P.useState(!1),[p,m]=P.useState(!1),S=async k=>{if(k.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(i.length<6){u("Password must be at least 6 characters long.");return}g(!0);try{const{api:x}=await Cp(async()=>{const{api:w}=await Promise.resolve().then(()=>_p);return{api:w}},void 0,import.meta.url);if(t){const w=await x.login(r,i);w.success?(localStorage.setItem("auth_token",w.token),e({email:w.user.email,name:r.split("@")[0]},!1)):(u(w.error||"Login failed"),g(!1))}else{const w=await x.register(r,i);w.success?(localStorage.setItem("auth_token",w.token),e({email:w.user.email,name:r.split("@")[0]},!0)):(u(w.error||"Registration failed"),g(!1))}}catch(x){console.error("Authentication error:",x),u("Could not connect to server. Please try again later."),g(!1)}};return l.jsxs("div",{className:"login-container",children:[l.jsxs("div",{className:"login-card fade-in",children:[l.jsxs("div",{className:"logo-section",children:[l.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),l.jsx("h1",{children:"Blood & Fit"}),l.jsx("p",{children:"Your personal health companion"})]}),l.jsxs("form",{onSubmit:S,className:"login-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:k=>o(k.target.value),required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsxs("div",{className:"password-wrapper",children:[l.jsx("input",{type:p?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:i,onChange:k=>a(k.target.value),required:!0}),l.jsx("button",{type:"button",className:"toggle-password",onClick:()=>m(!p),children:p?"Hide":"Show"})]}),t&&l.jsx("div",{className:"forgot-password",children:l.jsx("span",{onClick:()=>alert("Reset link sent to email!"),children:"Forgot Password?"})})]}),s&&l.jsx("div",{className:"error-box fade-in",children:l.jsxs("span",{children:["⚠️ ",s]})}),l.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?l.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),l.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",l.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),l.jsx("style",{children:`
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
      `})]})},Or="https://blood-report-fitness-evaluation-system.onrender.com",Fc={async register(e,t){return await(await fetch(`${Or}/api/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json()},async login(e,t){return await(await fetch(`${Or}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json()},async getProfile(){const e=localStorage.getItem("auth_token");return await(await fetch(`${Or}/api/profile`,{headers:{Authorization:`Bearer ${e}`}})).json()},async updateProfile(e){const t=localStorage.getItem("auth_token");return await(await fetch(`${Or}/api/profile`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}},_p=Object.freeze(Object.defineProperty({__proto__:null,api:Fc},Symbol.toStringTag,{value:"Module"})),zp=({onComplete:e})=>{const[t,n]=P.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=a=>{const{name:s,value:u}=a.target;n(d=>({...d,[s]:u}))},o=(a,s)=>Math.round(parseInt(a||0)*30.48+parseInt(s||0)*2.54),i=a=>{if(a.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||o(t.heightFt,t.heightIn)};e(s)};return l.jsxs("div",{className:"profile-container fade-in",children:[l.jsxs("div",{className:"card profile-card",children:[l.jsxs("div",{className:"header",children:[l.jsx("h2",{children:"Let's know you better"}),l.jsx("p",{children:"Enter your details for personalized health insights."})]}),l.jsxs("form",{onSubmit:i,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Age"}),l.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[l.jsx("option",{value:"male",children:"Male"}),l.jsx("option",{value:"female",children:"Female"}),l.jsx("option",{value:"other",children:"Other"})]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Weight (kg)"}),l.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),l.jsxs("div",{className:"height-section",children:[l.jsx("label",{children:"Height"}),l.jsx("div",{className:"tabs"}),l.jsxs("div",{className:"row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"CM"}),l.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),l.jsx("div",{className:"or-divider",children:"OR"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"Feet"}),l.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"sub-label",children:"Inches"}),l.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),l.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),l.jsx("style",{children:`
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
 */var Lp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),G=(e,t)=>{const n=P.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:u,...d},g)=>P.createElement("svg",{ref:g,...Lp,width:o,height:o,stroke:r,strokeWidth:a?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Ip(e)}`,s].join(" "),...d},[...t.map(([p,m])=>P.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=G("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=G("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=G("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=G("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=G("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=G("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=G("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=G("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=G("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=G("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=G("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=G("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=G("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=G("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=G("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=G("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=G("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=G("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=G("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=G("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=G("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=G("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=G("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=G("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=G("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=G("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=G("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=G("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),eh=({user:e,onClose:t,onLogout:n,onNavigate:r})=>{const[o,i]=P.useState("health"),[a,s]=P.useState(!1),[u,d]=P.useState({name:e.name||"",age:e.age||"",gender:e.gender||"Male",height:e.height||"",weight:e.weight||"",bloodGroup:e.bloodGroup||"",diseases:e.diseases||"",allergies:e.allergies||"",notes:e.notes||""}),[g,p]=P.useState([]);P.useEffect(()=>{const w=localStorage.getItem(`profile_${e.email}`);w&&d({...u,...JSON.parse(w)});const f=e.email?`reports_${e.email}`:"blood_reports",c=JSON.parse(localStorage.getItem(f)||"[]");p(c)},[e.email]);const m=()=>{localStorage.setItem(`profile_${e.email}`,JSON.stringify(u)),s(!1),alert("Profile saved successfully!")},S=w=>{if(!window.confirm("Are you sure you want to delete this report?"))return;const f=[...g];f.splice(w,1),p(f);const c=e.email?`reports_${e.email}`:"blood_reports";localStorage.setItem(c,JSON.stringify(f))},x=(()=>{if(!u.height||!u.weight)return null;const w=u.height/100;return(u.weight/(w*w)).toFixed(1)})();return l.jsxs("div",{className:"profile-dashboard fixed-fullscreen",children:[l.jsxs("div",{className:"profile-header",children:[l.jsx("button",{onClick:t,className:"p-back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h3",{children:"My Profile"}),l.jsx("button",{onClick:n,className:"p-logout",children:"Logout"})]}),l.jsxs("div",{className:"p-hero",children:[l.jsx("div",{className:"p-avatar",children:l.jsx(Hc,{size:40,color:"white"})}),l.jsx("h2",{children:u.name||"User"}),l.jsxs("div",{className:"p-badges",children:[x&&l.jsxs("span",{className:"p-badge",children:["BMI: ",x]}),u.bloodGroup&&l.jsx("span",{className:"p-badge red",children:u.bloodGroup})]})]}),l.jsxs("div",{className:"p-tabs",children:[l.jsx("button",{className:`p-tab ${o==="health"?"active":""}`,onClick:()=>i("health"),children:"Health Profile"}),l.jsx("button",{className:`p-tab ${o==="reports"?"active":""}`,onClick:()=>i("reports"),children:"Reports"})]}),l.jsxs("div",{className:"p-content",children:[o==="health"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsxs("div",{className:"pane-header",children:[l.jsx("h4",{children:"Personal & Medical Data"}),!a&&l.jsx("button",{className:"edit-toggle",onClick:()=>s(!0),children:"Edit"})]}),l.jsxs("div",{className:"form-grid",style:{marginBottom:"20px"},children:[l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Age"}),l.jsx("input",{type:"number",disabled:!a,value:u.age,onChange:w=>d({...u,age:w.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Blood Group"}),l.jsxs("select",{disabled:!a,value:u.bloodGroup,onChange:w=>d({...u,bloodGroup:w.target.value}),children:[l.jsx("option",{value:"",children:"Select"}),l.jsx("option",{children:"A+"}),l.jsx("option",{children:"A-"}),l.jsx("option",{children:"B+"}),l.jsx("option",{children:"B-"}),l.jsx("option",{children:"O+"}),l.jsx("option",{children:"O-"}),l.jsx("option",{children:"AB+"}),l.jsx("option",{children:"AB-"})]})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Weight (kg)"}),l.jsx("input",{type:"number",disabled:!a,value:u.weight,onChange:w=>d({...u,weight:w.target.value})})]}),l.jsxs("div",{className:"field",children:[l.jsx("label",{children:"Height (cm)"}),l.jsx("input",{type:"number",disabled:!a,value:u.height,onChange:w=>d({...u,height:w.target.value})})]})]}),l.jsxs("div",{className:"health-form",children:[l.jsx("label",{children:"Existing Conditions (Diseases)"}),l.jsx("textarea",{disabled:!a,placeholder:"e.g. Diabetes, Hypertension...",value:u.diseases,onChange:w=>d({...u,diseases:w.target.value})}),l.jsx("label",{children:"Allergies"}),l.jsx("textarea",{disabled:!a,placeholder:"e.g. Peanuts, Penicillin...",value:u.allergies,onChange:w=>d({...u,allergies:w.target.value})}),l.jsx("label",{children:"Health Notes"}),l.jsx("textarea",{className:"large-text",disabled:!a,placeholder:"Write your fitness goals here...",value:u.notes,onChange:w=>d({...u,notes:w.target.value})})]}),a&&l.jsxs("button",{className:"save-btn",onClick:m,children:[l.jsx(Wp,{size:18})," Save Health Data"]}),l.jsxs("div",{className:"milestones-preview",style:{marginTop:"20px",cursor:"pointer"},onClick:()=>r("weightprogress"),children:[l.jsxs("div",{className:"pane-header",style:{marginBottom:"10px"},children:[l.jsx("h5",{children:"Weight Tracker"}),l.jsx("span",{style:{fontSize:"12px",color:"var(--color-primary)"},children:"View Graph →"})]}),l.jsx("p",{style:{fontSize:"12px",color:"#64748b"},children:"Track your weight journey over time."})]})]}),o==="reports"&&l.jsxs("div",{className:"tab-pane fade-in",children:[l.jsx("h4",{children:"Recent Blood Reports"}),g.length===0?l.jsx("p",{className:"empty-state",children:"No reports uploaded yet."}):l.jsx("div",{className:"reports-list",children:g.map((w,f)=>l.jsxs("div",{className:"report-item",children:[l.jsx("div",{className:"r-icon",children:l.jsx(ea,{size:20})}),l.jsxs("div",{className:"r-info",children:[l.jsx("span",{className:"r-date",children:w.date}),l.jsxs("span",{className:"r-summary",children:[w.results.length," Parameters Analyzed"]})]}),l.jsxs("div",{className:"r-actions-row",children:[l.jsx("button",{className:"icon-btn-small",onClick:()=>r("blood",w),title:"View Detail",children:l.jsx($p,{size:16,color:"var(--color-primary)"})}),l.jsx("button",{className:"icon-btn-small delete",onClick:()=>S(f),title:"Delete",children:l.jsx(Yp,{size:16,color:"#ef4444"})})]})]},f))})]})]}),l.jsx("style",{children:`
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
                .r-actions-row { display: flex; gap: 8px; }
                .icon-btn-small { 
                    background: #f1f5f9; border: none; padding: 6px; border-radius: 6px; 
                    cursor: pointer; display: flex; align-items: center; justify-content: center;
                }
                .icon-btn-small:hover { background: #e2e8f0; }
                .icon-btn-small.delete:hover { background: #fee2e2; }

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
            `})]})},th=({userName:e,userProfile:t,onNavigate:n,onLogout:r})=>{const[o,i]=P.useState(!1);if(o)return l.jsx(eh,{user:t||{name:e,email:"user@example.com"},onClose:()=>i(!1),onLogout:r,onNavigate:n});const a=[{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:l.jsx(ea,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"diet",title:"Specialized Diet",desc:"Meals based on Blood Report",icon:l.jsx(Mp,{size:24}),color:"#10B981",bg:"#ECFDF5"},{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:l.jsx(Pp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:l.jsx(Kn,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:l.jsx(Ap,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:l.jsx(Bp,{size:24}),color:"#7209B7",bg:"#F3E8FF"}];return l.jsxs("div",{className:"dashboard-container fade-in",children:[l.jsxs("header",{className:"dash-header",children:[l.jsx("div",{className:"avatar",onClick:()=>i(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),l.jsxs("div",{className:"welcome-text",children:[l.jsx("p",{children:"Welcome back,"}),l.jsx("h3",{children:e||"User"})]})]}),l.jsx("div",{className:"stats-preview",children:l.jsxs("div",{className:"stat-card",children:[l.jsx("h4",{children:"Stay Hydrated! 💧"}),l.jsx("p",{children:"Drink 8 glasses of water today."})]})}),l.jsx("div",{className:"options-grid",children:a.map(s=>l.jsxs("button",{className:"option-card",onClick:()=>n(s.id),style:{"--hover-color":s.color},children:[l.jsx("div",{className:"icon-box",style:{color:s.color,backgroundColor:s.bg},children:s.icon}),l.jsxs("div",{className:"text-box",children:[l.jsx("h4",{children:s.title}),l.jsx("p",{children:s.desc})]}),l.jsx("div",{className:"arrow",children:"→"})]},s.id))}),l.jsx("style",{children:`
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
      `})]})},nh=({userProfile:e,onBack:t})=>{const[n,r]=P.useState("metric"),[o,i]=P.useState(""),[a,s]=P.useState(""),[u,d]=P.useState(""),[g,p]=P.useState(""),[m,S]=P.useState("male"),[k,x]=P.useState("sedentary"),[w,f]=P.useState(null),[c,h]=P.useState(""),[j,E]=P.useState(""),[R,I]=P.useState("");P.useEffect(()=>{e&&(e.height&&i(e.height),e.weight&&d(e.weight),e.age&&p(e.age),e.gender&&S(e.gender.toLowerCase()))},[e]);const M=()=>{let L=0,W=0;if(n==="metric"){if(!o||!u)return;L=parseFloat(o)/100,W=parseFloat(u)}else{if(!o||!u)return;L=(parseFloat(o)*12+(parseFloat(a)||0))*.0254,W=parseFloat(u)*.453592}if(L<=0||W<=0)return;const ee=parseFloat((W/(L*L)).toFixed(1));f(ee);let ae="",be="",fe="";ee<18.5?(ae="Underweight",be="var(--color-accent)",fe="You may need to increase your calorie intake. Focus on nutrient-dense foods."):ee<24.9?(ae="Normal Weight",be="var(--color-success)",fe="Great job! You have a healthy body weight. Maintain it with balanced diet and exercise."):ee<29.9?(ae="Overweight",be="var(--color-warning)",fe="Try to incorporate more cardio and monitor portion sizes to reach a healthier range."):(ae="Obese",be="var(--color-danger)",fe="It is recommended to consult a healthcare provider for a personalized weight management plan."),h({label:ae,color:be}),I(fe);const A=L/.0254-60;let C=0;m==="male"?C=52+1.9*Math.max(0,A):C=49+1.7*Math.max(0,A),E(`${C.toFixed(1)} - ${(C*1.1).toFixed(1)} kg`)},$=()=>{f(null),i(""),d(""),p("")};return l.jsxs("div",{className:"advanced-bmi-container fade-in",children:[l.jsxs("div",{className:"bmi-header",children:[l.jsx("button",{onClick:t,className:"btn-icon",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Advanced BMI Calculator"}),l.jsx("div",{style:{width:24}})," "]}),l.jsxs("div",{className:"calculator-grid",children:[l.jsxs("div",{className:"card input-card",children:[l.jsxs("div",{className:"toggle-row",children:[l.jsx("button",{className:`toggle-btn ${n==="metric"?"active":""}`,onClick:()=>r("metric"),children:"Metric (cm/kg)"}),l.jsx("button",{className:`toggle-btn ${n==="imperial"?"active":""}`,onClick:()=>r("imperial"),children:"Imperial (ft/lbs)"})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Gender"}),l.jsxs("select",{value:m,onChange:L=>S(L.target.value),children:[l.jsx("option",{value:"male",children:"Male"}),l.jsx("option",{value:"female",children:"Female"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Age (years)"}),l.jsx("input",{type:"number",value:g,onChange:L=>p(L.target.value),placeholder:"25"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:n==="metric"?"Height (cm)":"Height (ft)"}),l.jsx("input",{type:"number",value:o,onChange:L=>i(L.target.value),placeholder:n==="metric"?"175":"5"})]}),n==="imperial"&&l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Inches"}),l.jsx("input",{type:"number",value:a,onChange:L=>s(L.target.value),placeholder:"10"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:n==="metric"?"Weight (kg)":"Weight (lbs)"}),l.jsx("input",{type:"number",value:u,onChange:L=>d(L.target.value),placeholder:n==="metric"?"70":"150"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Activity Level"}),l.jsxs("select",{value:k,onChange:L=>x(L.target.value),children:[l.jsx("option",{value:"sedentary",children:"Sedentary (Little or no exercise)"}),l.jsx("option",{value:"light",children:"Lightly active (1-3 days/week)"}),l.jsx("option",{value:"moderate",children:"Moderately active (3-5 days/week)"}),l.jsx("option",{value:"active",children:"Very active (6-7 days/week)"})]})]}),l.jsxs("div",{className:"action-row",children:[l.jsx("button",{className:"reset-btn",onClick:$,children:l.jsx(Hp,{size:18})}),l.jsx("button",{className:"calculate-btn",onClick:M,children:"Calculate BMI"})]})]}),w&&l.jsxs("div",{className:"card result-card fade-in",children:[l.jsxs("div",{className:"result-header",children:[l.jsx("h3",{children:"Your Result"}),l.jsx("div",{className:"bmi-badge",style:{backgroundColor:c.color},children:c.label})]}),l.jsxs("div",{className:"bmi-display",children:[l.jsx("span",{className:"bmi-number",style:{color:c.color},children:w}),l.jsx("span",{className:"bmi-label",children:"BMI Score"})]}),l.jsxs("div",{className:"progress-bar-container",children:[l.jsx("div",{className:"progress-track"}),l.jsx("div",{className:"progress-fill",style:{width:`${Math.min(Math.max(w/40*100,0),100)}%`,backgroundColor:c.color}}),l.jsxs("div",{className:"markers",children:[l.jsx("span",{style:{left:"46%"},children:"18.5"}),l.jsx("span",{style:{left:"62.5%"},children:"25"}),l.jsx("span",{style:{left:"75%"},children:"30"})]})]}),l.jsxs("div",{className:"health-insight",children:[l.jsxs("div",{className:"insight-item",children:[l.jsx(Ac,{size:20,className:"icon"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Ideal Weight"}),l.jsx("p",{children:j})]})]}),l.jsxs("div",{className:"insight-item",children:[l.jsx(Bc,{size:20,className:"icon"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Health Tip"}),l.jsx("p",{children:R})]})]})]})]})]}),l.jsx("style",{children:`
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
            `})]})};var rh={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(y,v,N){y[v]=N.value},a,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",g=s.toStringTag||"@@toStringTag";function p(y,v,N){return Object.defineProperty(y,v,{value:N,enumerable:!0,configurable:!0,writable:!0}),y[v]}try{p({},"")}catch{p=function(v,N,T){return v[N]=T}}function m(y,v,N,T){var b=v&&v.prototype instanceof h?v:h,z=Object.create(b.prototype),F=new O(T||[]);return i(z,"_invoke",{value:ee(y,N,F)}),z}n.wrap=m;function S(y,v,N){try{return{type:"normal",arg:y.call(v,N)}}catch(T){return{type:"throw",arg:T}}}var k="suspendedStart",x="suspendedYield",w="executing",f="completed",c={};function h(){}function j(){}function E(){}var R={};p(R,u,function(){return this});var I=Object.getPrototypeOf,M=I&&I(I(A([])));M&&M!==r&&o.call(M,u)&&(R=M);var $=E.prototype=h.prototype=Object.create(R);j.prototype=E,i($,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:j,configurable:!0}),j.displayName=p(E,g,"GeneratorFunction");function L(y){["next","throw","return"].forEach(function(v){p(y,v,function(N){return this._invoke(v,N)})})}n.isGeneratorFunction=function(y){var v=typeof y=="function"&&y.constructor;return v?v===j||(v.displayName||v.name)==="GeneratorFunction":!1},n.mark=function(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,E):(y.__proto__=E,p(y,g,"GeneratorFunction")),y.prototype=Object.create($),y},n.awrap=function(y){return{__await:y}};function W(y,v){function N(z,F,U,B){var K=S(y[z],y,F);if(K.type==="throw")B(K.arg);else{var Ne=K.arg,Q=Ne.value;return Q&&typeof Q=="object"&&o.call(Q,"__await")?v.resolve(Q.__await).then(function(De){N("next",De,U,B)},function(De){N("throw",De,U,B)}):v.resolve(Q).then(function(De){Ne.value=De,U(Ne)},function(De){return N("throw",De,U,B)})}}var T;function b(z,F){function U(){return new v(function(B,K){N(z,F,B,K)})}return T=T?T.then(U,U):U()}i(this,"_invoke",{value:b})}L(W.prototype),p(W.prototype,d,function(){return this}),n.AsyncIterator=W,n.async=function(y,v,N,T,b){b===void 0&&(b=Promise);var z=new W(m(y,v,N,T),b);return n.isGeneratorFunction(v)?z:z.next().then(function(F){return F.done?F.value:z.next()})};function ee(y,v,N){var T=k;return function(z,F){if(T===w)throw new Error("Generator is already running");if(T===f){if(z==="throw")throw F;return C()}for(N.method=z,N.arg=F;;){var U=N.delegate;if(U){var B=ae(U,N);if(B){if(B===c)continue;return B}}if(N.method==="next")N.sent=N._sent=N.arg;else if(N.method==="throw"){if(T===k)throw T=f,N.arg;N.dispatchException(N.arg)}else N.method==="return"&&N.abrupt("return",N.arg);T=w;var K=S(y,v,N);if(K.type==="normal"){if(T=N.done?f:x,K.arg===c)continue;return{value:K.arg,done:N.done}}else K.type==="throw"&&(T=f,N.method="throw",N.arg=K.arg)}}}function ae(y,v){var N=v.method,T=y.iterator[N];if(T===a)return v.delegate=null,N==="throw"&&y.iterator.return&&(v.method="return",v.arg=a,ae(y,v),v.method==="throw")||N!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+N+"' method")),c;var b=S(T,y.iterator,v.arg);if(b.type==="throw")return v.method="throw",v.arg=b.arg,v.delegate=null,c;var z=b.arg;if(!z)return v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,c;if(z.done)v[y.resultName]=z.value,v.next=y.nextLoc,v.method!=="return"&&(v.method="next",v.arg=a);else return z;return v.delegate=null,c}L($),p($,g,"Generator"),p($,u,function(){return this}),p($,"toString",function(){return"[object Generator]"});function be(y){var v={tryLoc:y[0]};1 in y&&(v.catchLoc=y[1]),2 in y&&(v.finallyLoc=y[2],v.afterLoc=y[3]),this.tryEntries.push(v)}function fe(y){var v=y.completion||{};v.type="normal",delete v.arg,y.completion=v}function O(y){this.tryEntries=[{tryLoc:"root"}],y.forEach(be,this),this.reset(!0)}n.keys=function(y){var v=Object(y),N=[];for(var T in v)N.push(T);return N.reverse(),function b(){for(;N.length;){var z=N.pop();if(z in v)return b.value=z,b.done=!1,b}return b.done=!0,b}};function A(y){if(y){var v=y[u];if(v)return v.call(y);if(typeof y.next=="function")return y;if(!isNaN(y.length)){var N=-1,T=function b(){for(;++N<y.length;)if(o.call(y,N))return b.value=y[N],b.done=!1,b;return b.value=a,b.done=!0,b};return T.next=T}}return{next:C}}n.values=A;function C(){return{value:a,done:!0}}return O.prototype={constructor:O,reset:function(y){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(fe),!y)for(var v in this)v.charAt(0)==="t"&&o.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=a)},stop:function(){this.done=!0;var y=this.tryEntries[0],v=y.completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(y){if(this.done)throw y;var v=this;function N(B,K){return z.type="throw",z.arg=y,v.next=B,K&&(v.method="next",v.arg=a),!!K}for(var T=this.tryEntries.length-1;T>=0;--T){var b=this.tryEntries[T],z=b.completion;if(b.tryLoc==="root")return N("end");if(b.tryLoc<=this.prev){var F=o.call(b,"catchLoc"),U=o.call(b,"finallyLoc");if(F&&U){if(this.prev<b.catchLoc)return N(b.catchLoc,!0);if(this.prev<b.finallyLoc)return N(b.finallyLoc)}else if(F){if(this.prev<b.catchLoc)return N(b.catchLoc,!0)}else if(U){if(this.prev<b.finallyLoc)return N(b.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(y,v){for(var N=this.tryEntries.length-1;N>=0;--N){var T=this.tryEntries[N];if(T.tryLoc<=this.prev&&o.call(T,"finallyLoc")&&this.prev<T.finallyLoc){var b=T;break}}b&&(y==="break"||y==="continue")&&b.tryLoc<=v&&v<=b.finallyLoc&&(b=null);var z=b?b.completion:{};return z.type=y,z.arg=v,b?(this.method="next",this.next=b.finallyLoc,c):this.complete(z)},complete:function(y,v){if(y.type==="throw")throw y.arg;return y.type==="break"||y.type==="continue"?this.next=y.arg:y.type==="return"?(this.rval=this.arg=y.arg,this.method="return",this.next="end"):y.type==="normal"&&v&&(this.next=v),c},finish:function(y){for(var v=this.tryEntries.length-1;v>=0;--v){var N=this.tryEntries[v];if(N.finallyLoc===y)return this.complete(N.completion,N.afterLoc),fe(N),c}},catch:function(y){for(var v=this.tryEntries.length-1;v>=0;--v){var N=this.tryEntries[v];if(N.tryLoc===y){var T=N.completion;if(T.type==="throw"){var b=T.arg;fe(N)}return b}}throw new Error("illegal catch attempt")},delegateYield:function(y,v,N){return this.delegate={iterator:A(y),resultName:v,nextLoc:N},this.method==="next"&&(this.arg=a),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(rh);var ta=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const oh=ta;let gs=0;var Wc=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=oh("Job",gs),gs+=1),{id:r,action:t,payload:n}},Cn={};let na=!1;Cn.logging=na;Cn.setLogging=e=>{na=e};Cn.log=(...e)=>na?console.log.apply(void 0,e):null;const ih=Wc,{log:Dr}=Cn,lh=ta;let vs=0;var ah=()=>{const e=lh("Scheduler",vs),t={},n={};let r=[];vs+=1;const o=()=>r.length,i=()=>Object.keys(t).length,a=()=>{if(r.length!==0){const p=Object.keys(t);for(let m=0;m<p.length;m+=1)if(typeof n[p[m]]>"u"){r[0](t[p[m]]);break}}},s=(p,m)=>new Promise((S,k)=>{const x=ih({action:p,payload:m});r.push(async w=>{r.shift(),n[w.id]=x;try{S(await w[p].apply(void 0,[...m,x.id]))}catch(f){k(f)}finally{delete n[w.id],a()}}),Dr(`[${e}]: Add ${x.id} to JobQueue`),Dr(`[${e}]: JobQueue length=${r.length}`),a()});return{addWorker:p=>(t[p.id]=p,Dr(`[${e}]: Add ${p.id}`),Dr(`[${e}]: Number of workers=${i()}`),a(),p.id),addJob:async(p,...m)=>{if(i()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(p,m)},terminate:async()=>{Object.keys(t).forEach(async p=>{await t[p].terminate()}),r=[]},getQueueLen:o,getNumWorkers:i}};function sh(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function uh(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var ch=uh;const dh=ch;var fh=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":dh()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof sh=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const ph=fh("type")==="browser",hh=ph?e=>new URL(e,window.location.href).href:e=>e;var mh=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=hh(t[n]))}),t},gh=e=>{const t=[],n=[],r=[],o=[],i=[];return e.blocks&&e.blocks.forEach(a=>{a.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(g=>{i.push({...g,page:e,block:a,paragraph:s,line:u,word:d})}),o.push({...d,page:e,block:a,paragraph:s,line:u})}),r.push({...u,page:e,block:a,paragraph:s})}),n.push({...s,page:e,block:a})}),t.push({...a,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:i}},Vc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const vh="5.1.1",yh={version:vh};var xh={workerBlobURL:!0,logger:()=>{}};const wh=yh.version,kh=xh;var Sh={...kh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${wh}/dist/worker.min.js`},jh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},bh=e=>{e.terminate()},Nh=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},Ch=async(e,t)=>{e.postMessage(t)};const di=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),il=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await il(e.src)),e.tagName==="VIDEO"&&(t=await il(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await di(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await di(n)}else(e instanceof File||e instanceof Blob)&&(t=await di(e));return new Uint8Array(t)};var Eh=il;const _h=Sh,zh=jh,Lh=bh,Ih=Nh,Rh=Ch,Mh=Eh;var Th={defaultOptions:_h,spawnWorker:zh,terminateWorker:Lh,onMessage:Ih,send:Rh,loadImage:Mh};const Ph=mh,Oh=gh,Ge=Wc,{log:ys}=Cn,Dh=ta,Pt=Vc,{defaultOptions:Fh,spawnWorker:Ah,terminateWorker:$h,onMessage:Bh,loadImage:xs,send:Uh}=Th;let ws=0;var Gc=async(e="eng",t=Pt.LSTM_ONLY,n={},r={})=>{const o=Dh("Worker",ws),{logger:i,errorHandler:a,...s}=Ph({...Fh,...n}),u={},d={},g=typeof e=="string"?e.split("+"):e;let p=t,m=r;const S=[Pt.DEFAULT,Pt.LSTM_ONLY].includes(t)&&!s.legacyCore;let k,x;const w=new Promise((b,z)=>{x=b,k=z}),f=b=>{k(b.message)};let c=Ah(s);c.onerror=f,ws+=1;const h=(b,z)=>{u[b]=z},j=(b,z)=>{d[b]=z},E=({id:b,action:z,payload:F})=>new Promise((U,B)=>{ys(`[${o}]: Start ${b}, action=${z}`);const K=`${z}-${b}`;h(K,U),j(K,B),Uh(c,{workerId:o,jobId:b,action:z,payload:F})}),R=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),I=b=>E(Ge({id:b,action:"load",payload:{options:{lstmOnly:S,corePath:s.corePath,logging:s.logging}}})),M=(b,z,F)=>E(Ge({id:F,action:"FS",payload:{method:"writeFile",args:[b,z]}})),$=(b,z)=>E(Ge({id:z,action:"FS",payload:{method:"readFile",args:[b,{encoding:"utf8"}]}})),L=(b,z)=>E(Ge({id:z,action:"FS",payload:{method:"unlink",args:[b]}})),W=(b,z,F)=>E(Ge({id:F,action:"FS",payload:{method:b,args:z}})),ee=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),ae=(b,z)=>E(Ge({id:z,action:"loadLanguage",payload:{langs:b,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Pt.DEFAULT,Pt.LSTM_ONLY].includes(p)&&!s.legacyLang}}})),be=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),fe=(b,z,F,U)=>E(Ge({id:U,action:"initialize",payload:{langs:b,oem:z,config:F}})),O=(b="eng",z,F,U)=>{if(S&&[Pt.TESSERACT_ONLY,Pt.TESSERACT_LSTM_COMBINED].includes(z))throw Error("Legacy model requested but code missing.");const B=z||p;p=B;const K=F||m;m=K;const Q=(typeof b=="string"?b.split("+"):b).filter(De=>!g.includes(De));return g.push(...Q),Q.length>0?ae(Q,U).then(()=>fe(b,B,K,U)):fe(b,B,K,U)},A=(b={},z)=>E(Ge({id:z,action:"setParameters",payload:{params:b}})),C=async(b,z={},F={blocks:!0,text:!0,hocr:!0,tsv:!0},U)=>E(Ge({id:U,action:"recognize",payload:{image:await xs(b),options:z,output:F}})),y=(b="Tesseract OCR Result",z=!1,F)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E(Ge({id:F,action:"getPDF",payload:{title:b,textonly:z}}))),v=async(b,z)=>{if(S)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return E(Ge({id:z,action:"detect",payload:{image:await xs(b)}}))},N=async()=>(c!==null&&($h(c),c=null),Promise.resolve());Bh(c,({workerId:b,jobId:z,status:F,action:U,data:B})=>{const K=`${U}-${z}`;if(F==="resolve"){ys(`[${b}]: Complete ${z}`);let Ne=B;U==="recognize"?Ne=Oh(B):U==="getPDF"&&(Ne=Array.from({...B,length:Object.keys(B).length})),u[K]({jobId:z,data:Ne})}else if(F==="reject")if(d[K](B),U==="load"&&k(B),a)a(B);else throw Error(B);else F==="progress"&&i({...B,userJobId:z})});const T={id:o,worker:c,setResolve:h,setReject:j,load:R,writeText:M,readText:$,removeFile:L,FS:W,loadLanguage:ee,initialize:be,reinitialize:O,setParameters:A,recognize:C,getPDF:y,detect:v,terminate:N};return I().then(()=>ae(e)).then(()=>fe(e,t,r)).then(()=>x(T)).catch(()=>{}),w};const Qc=Gc,Hh=async(e,t,n)=>{const r=await Qc(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},Wh=async(e,t)=>{const n=await Qc("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Vh={recognize:Hh,detect:Wh},Gh={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Qh={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Kh=ah,Yh=Gc,Jh=Vh,Xh=Gh,Zh=Vc,qh=Qh,{setLogging:em}=Cn;var tm={languages:Xh,OEM:Zh,PSM:qh,createScheduler:Kh,createWorker:Yh,setLogging:em,...Jh};const Kc=bs(tm),ks={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte count"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],platelet_count:["platelet count","platelet","plt"],hematocrit:["hematocrit","hct","pcv","packed cell volume"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],rdw:["rdw","red cell distribution width"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],monocyte:["monocytes","monocyte"],eosinophil:["eosinophils","eosinophil"],basophil:["basophils","basophil"],reticulocyte_count:["reticulocyte count","retic count"],esr:["esr","erythrocyte sedimentation rate"],absolute_neutrophil_count:["absolute neutrophil count","anc"],bun:["blood urea nitrogen","bun"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],bun_creatinine_ratio:["bun/creatinine ratio","bun/creat ratio"],egfr:["egfr","estimated glomerular filtration rate"],urine_ph:["urine ph"],urine_specific_gravity:["urine specific gravity"],bilirubin_total:["total bilirubin","bilirubin total"],bilirubin_direct:["direct bilirubin","conjugated bilirubin"],bilirubin_indirect:["indirect bilirubin","unconjugated bilirubin"],sgot:["sgot","ast","aspartate aminotransferase"],sgpt:["sgpt","alt","alanine aminotransferase"],alkaline_phosphatase:["alkaline phosphatase","alp"],total_protein:["total protein","serum protein"],albumin:["albumin"],globulin:["globulin"],ag_ratio:["a/g ratio","albumin/globulin ratio"],ggt:["gamma gt","ggt","gamma-glutamyl transferase"],ldh:["ldh","lactate dehydrogenase"],ammonia:["ammonia"],sodium:["sodium","na+","serum sodium"],potassium:["potassium","k+","serum potassium"],chloride:["chloride","cl-","serum chloride"],bicarbonate:["bicarbonate","hco3","co2 content"],calcium:["calcium","total calcium"],ionized_calcium:["ionized calcium"],phosphorus:["phosphorus","phosphate","po4"],magnesium:["magnesium"],anion_gap:["anion gap"],glucose_fasting:["glucose fasting","fasting glucose","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],glucose_random:["random glucose","rbs"],hba1c:["hba1c","glycated hemoglobin","glycosylated hemoglobin"],insulin:["insulin fasting","fasting insulin"],c_peptide:["c-peptide"],cholesterol:["total cholesterol","serum cholesterol"],hdl_cholesterol:["hdl cholesterol","hdl"],ldl_cholesterol:["ldl cholesterol","ldl"],triglycerides:["triglycerides"],vldl:["vldl"],ldl_hdl_ratio:["ldl/hdl ratio"],chol_hdl_ratio:["total cholesterol/hdl ratio","chol/hdl"],non_hdl_cholesterol:["non-hdl cholesterol"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"],free_t3:["free t3","ft3"],free_t4:["free t4","ft4"],anti_tpo:["anti-tpo","thyroid peroxidase antibody"],vitamin_b12:["vitamin b12","cobalamin"],vitamin_d:["vitamin d","25-oh vitamin d","total vitamin d"],folate:["folate","folic acid"],testosterone:["testosterone","total testosterone"],estradiol:["estradiol","e2"],progesterone:["progesterone"],cortisol:["cortisol"],prolactin:["prolactin"],ferritin:["ferritin"],iron:["serum iron","iron"],tibc:["tibc","total iron binding capacity"],crp:["crp","c-reactive protein"],hs_crp:["hs-crp","high sensitivity crp"],troponin_i:["troponin i"],troponin_t:["troponin t"],ck_total:["ck","cpk","creatine kinase"],ck_mb:["ck-mb"]},Yn={hemoglobin:{min:13,max:17,unit:"g/dL",foods:["Spinach","Red Meat","Beetroot"],impact:{low:"Fatigue, low stamina. Focus on endurance cautiously.",high:"Dehydration risk. Hydrate well."}},rbc_count:{min:4.5,max:5.9,unit:"mil/µL",foods:["Iron-rich foods","B12"],impact:{}},total_count:{min:4e3,max:11e3,unit:"/µL",foods:["Vitamin C","Garlic"],impact:{low:"Low immunity. Avoid growing crowds/gyms.",high:"Body fighting infection. Rest."}},platelet_count:{min:1.5,max:4.5,unit:"Lakh/µL",foods:["Papaya Leaf"],impact:{low:"Bleeding risk. Avoid contact sports."}},hematocrit:{min:38,max:50,unit:"%",foods:["Iron","Water"],impact:{}},mcv:{min:80,max:100,unit:"fL",foods:["B12","Folate"],impact:{low:"Microcytic anemia risk.",high:"Macrocytic (B12 deficiency) risk."}},mch:{min:27,max:33,unit:"pg",foods:[],impact:{}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},rdw:{min:11.5,max:14.5,unit:"%",foods:[],impact:{}},neutrophil:{min:40,max:75,unit:"%",foods:[],impact:{high:"Bacterial infection likely. Rest."}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{high:"Viral infection likely. Rest."}},monocyte:{min:2,max:10,unit:"%",foods:[],impact:{}},eosinophil:{min:1,max:6,unit:"%",foods:[],impact:{high:"Allergy or parasite. Monitor breathing."}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory","Turmeric"],impact:{high:"High Inflammation. Focus on recovery, light stretching."}},bun:{min:7,max:20,unit:"mg/dL",foods:["Low Protein","Water"],impact:{high:"Kidney load high. Hydrate."}},creatinine:{min:.6,max:1.3,unit:"mg/dL",foods:["Less Red Meat","Cucumber"],impact:{high:"Kidney stress. Avoid creatine supplements."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Cherries","No Alcohol"],impact:{high:"Gout risk. Avoid high-impact jumping."}},egfr:{min:90,max:150,unit:"mL/min",foods:[],impact:{low:"Kidney functionality concern. Consult doctor."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon"],impact:{high:"Jaundice risk. No heavy lifting."}},sgot:{min:10,max:40,unit:"U/L",foods:["Liver Detox"],impact:{high:"Liver/Muscle stress. Take rest days."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole grains"],impact:{high:"Liver enzyme elevation. Avoid alcohol/painkillers."}},alkaline_phosphatase:{min:44,max:147,unit:"U/L",foods:[],impact:{}},total_protein:{min:6.3,max:8.2,unit:"g/dL",foods:["Lean Protein"],impact:{}},albumin:{min:3.5,max:5,unit:"g/dL",foods:[],impact:{}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Balanced Salt"],impact:{low:"Hyponatremia risk. Salt intake needed.",high:"Dehydration."}},potassium:{min:3.5,max:5.1,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"Cramp risk. Electrolytes needed.",high:"Heart rhythm risk. Medical attention."}},calcium:{min:8.5,max:10.5,unit:"mg/dL",foods:["Milk","Yogurt"],impact:{low:"Bone weakness. Resistance train carefully."}},magnesium:{min:1.7,max:2.4,unit:"mg/dL",foods:["Nuts","Seeds"],impact:{low:"Muscle twitching/cramps."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Fiber","Low GI"],impact:{high:"Diabetes risk. Cardio recommended."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Vegetables"],impact:{high:"Insulin resistance."}},hba1c:{min:4,max:5.6,unit:"%",foods:["Low Carb"],impact:{high:"Long term sugar control poor."}},insulin:{min:2,max:25,unit:"µIU/mL",foods:[],impact:{}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Garlic"],impact:{high:"Cardiac risk. Steady state cardio."}},hdl_cholesterol:{min:40,max:100,unit:"mg/dL",foods:["Nuts","Fish"],impact:{low:"Good cholesterol low. Needs exercise."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber"],impact:{high:"Bad cholesterol. Diet control needed."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["No Sugar","Fish Oil"],impact:{high:"Metabolic syndrome risk."}},tsh:{min:.4,max:4,unit:"µIU/mL",foods:[],impact:{high:"Hypothyroid (Slow metabolism).",low:"Hyperthyroid (Fast HR)."}},t3:{min:80,max:200,unit:"ng/dL",foods:[],impact:{}},t4:{min:5,max:12,unit:"µg/dL",foods:[],impact:{}},vitamin_b12:{min:200,max:900,unit:"pg/mL",foods:["Meat","Eggs","Supplements"],impact:{low:"Nerve health/Energy low."}},vitamin_d:{min:30,max:100,unit:"ng/mL",foods:["Sunlight","Mushrooms","Supplements"],impact:{low:"Bone density/Immunity risk."}},testosterone:{min:300,max:1e3,unit:"ng/dL",foods:["Zinc","Strength Training"],impact:{low:"Muscle loss, fatigue."}},cortisol:{min:5,max:25,unit:"µg/dL",foods:["Ashwagandha","Sleep"],impact:{high:"High stress. Reduce intensity."}},ferritin:{min:20,max:300,unit:"ng/mL",foods:[],impact:{low:"Iron stores low."}},iron:{min:60,max:170,unit:"µg/dL",foods:["Spinach"],impact:{low:"Anemia."}},crp:{min:0,max:10,unit:"mg/L",foods:["Anti-inflammatory"],impact:{high:"Systemic inflammation."}},hs_crp:{min:0,max:1,unit:"mg/L",foods:[],impact:{high:"Cardiac risk marker."}},troponin_i:{min:0,max:.04,unit:"ng/mL",foods:[],impact:{high:"CRITICAL: Heart muscle damage. ER immediately."}},ck_total:{min:20,max:200,unit:"U/L",foods:[],impact:{high:"Muscle breakdown (could be hard training or rhabdo)."}}},Yc=e=>{const t=[];return Object.keys(e).forEach(n=>{const r=parseFloat(e[n]);!Yn[n]||isNaN(r)||(n==="hemoglobin"&&r<11&&t.push({condition:"Anemia",risk:"High",color:"#ef4444",advice:"Consult doctor for iron supplements."}),n==="glucose_fasting"&&r>126||n==="hba1c"&&r>6.5?t.push({condition:"Diabetes",risk:"High",color:"#ef4444",advice:"Manage sugar intake strictly."}):(n==="glucose_fasting"&&r>100||n==="hba1c">5.7)&&t.push({condition:"Pre-Diabetes",risk:"Medium",color:"#f59e0b",advice:"Lifestyle changes needed."}),n==="creatinine"&&r>1.4&&t.push({condition:"Renal Insufficiency Risk",risk:"High",color:"#ef4444",advice:"Kidney function concern."}),n==="troponin_i"&&r>.04&&t.push({condition:"Myocardial Injury Risk",risk:"CRITICAL",color:"#b91c1c",advice:"Seek immediate medical attention."}),n==="hs_crp"&&r>3&&t.push({condition:"High Cardiovascular Risk",risk:"High",color:"#ef4444",advice:"Inflammation marker high."}),n==="vitamin_d"&&r<20&&t.push({condition:"Vitamin D Deficiency",risk:"Medium",color:"#f59e0b",advice:"Supplementation recommended."}),n==="tsh"&&r>5&&t.push({condition:"Hypothyroidism Risk",risk:"Medium",color:"#f59e0b",advice:"Metabolism might be slow."}))}),t},Jc=(e,t=[])=>{const n=[],r=[];Object.keys(e).forEach(i=>{var g,p;const a=parseFloat(e[i]),s=Yn[i];if(!s)return;let u="Normal";a<s.min&&(u="Low"),a>s.max&&(u="High");const d=u==="Low"?(g=s.impact)==null?void 0:g.low:u==="High"?(p=s.impact)==null?void 0:p.high:null;u!=="Normal"&&r.push({parameter:i,status:u,foods:s.foods,fitnessImpact:d}),n.push({parameter:i,value:a,unit:s.unit,range:`${s.min}-${s.max}`,status:u,fitnessImpact:d})});const o=t.length>0?t:Yc(e);return{date:new Date().toLocaleDateString(),values:e,results:n,suggestions:r,risks:o}},nm=({onBack:e,user:t,initialViewReport:n})=>{const[r,o]=P.useState(null),[i,a]=P.useState(null),[s,u]=P.useState([]),[d,g]=P.useState(!1),[p,m]=P.useState(""),[S,k]=P.useState("hemoglobin"),[x,w]=P.useState(""),[f,c]=P.useState(null),[h,j]=P.useState("basic"),[E,R]=P.useState(!1),[I,M]=P.useState("checking");P.useEffect(()=>{$();const O=t&&t.email?`reports_${t.email}`:`temp_reports_${Date.now()}`,A=localStorage.getItem(O);u(A?JSON.parse(A):[]),n&&a(n)},[t,n]);const $=async()=>{const O="https://blood-report-fitness-evaluation-system.onrender.com";try{(await fetch(`${O}/health`)).ok?M("online"):M("offline")}catch{M("offline")}},L=O=>new Promise(A=>{const C=new Image;C.src=URL.createObjectURL(O),C.onload=()=>{const y=document.createElement("canvas"),v=y.getContext("2d");y.width=C.width,y.height=C.height,v.drawImage(C,0,0);const N=v.getImageData(0,0,y.width,y.height),T=N.data,b=50,z=259*(b+255)/(255*(259-b));for(let F=0;F<T.length;F+=4){const U=(T[F]+T[F+1]+T[F+2])/3;let B=z*(U-128)+128;B<0&&(B=0),B>255&&(B=255),T[F]=B,T[F+1]=B,T[F+2]=B}v.putImageData(N,0,0),y.toBlob(F=>{A(F)})}}),W=async O=>{g(!0),m("Applying Digital Lens (Enhancing Quality)...");try{const A=E?await L(O):O;m("Scanning Enhanced Image...");const{data:{text:C}}=await Kc.recognize(A,"eng",{logger:b=>m(`${b.status} (${Math.round(b.progress*100)}%)`)});console.log("Raw OCR Text:",C);const y=C.split(`
`),v={},N=b=>b.toLowerCase().replace(/[^a-z0-9.]/g,"");if(y.forEach(b=>{const z=b.toLowerCase().trim();z&&Object.keys(ks).forEach(F=>{const B=ks[F].find(K=>z.includes(K));if(B&&!v[F]){const K=z.split(B);if(K.length<2)return;const Ne=K.slice(1).join(" ").trim();let Q=null;const De=Ne.match(/(\d+\.\d+)/);if(De)Q=parseFloat(De[0]);else{const We=Ne.match(/(\d+)\s+(\d{1,2})(?!\d)/);if(We&&!Ne.includes("-"))Q=parseFloat(We[1]+"."+We[2]),console.log(`Detected spaced decimal: "${We[0]}" → ${Q}`);else{const yr=Ne.match(/(\d+)/);if(yr){if(new RegExp(yr[0]+"\\s*-\\s*\\d+").test(Ne)){console.log(`Skipping range value: ${yr[0]}`);return}Q=parseFloat(yr[0])}}}if(Q!==null&&!isNaN(Q)){const We=Yn[F];if(We&&(Q>We.max*5&&(Q/10>=We.min&&Q/10<=We.max?(console.log(`Auto-correcting ${F}: ${Q} -> ${Q/10}`),Q=Q/10):Q/100>=We.min&&Q/100<=We.max&&(Q=Q/100)),Q>1900&&Q<2100&&F!=="total_count"))return;v[F]=Q}}})}),Object.keys(v).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+C.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+C),g(!1);return}const T=Yc(v);be({date:new Date().toLocaleDateString(),values:v,risks:T})}catch(A){console.error(A),alert("Error parsing image. Please try a clearer photo.")}finally{g(!1),m("")}},ee=O=>{const A=O.target.files[0];A&&(A.type.startsWith("image/")?(o(A),h==="advanced"&&I==="online"?ae(A):W(A)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},ae=async O=>{g(!0),m("Sending to ML Neural Network...");const A=new FormData;A.append("file",O);const C="https://blood-report-fitness-evaluation-system.onrender.com";try{const y=await fetch(`${C}/analyze`,{method:"POST",body:A}),v=await y.json();if(!y.ok)throw new Error(v.error||"Server Error");if(console.log("ML Results:",v),!v.raw_results||v.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),W(O);return}}catch(y){console.error(y),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),W(O)}finally{g(!1),m("")}},be=O=>{const A=Jc(O.values,O.risks);a(A);const C=t&&t.email?`reports_${t.email}`:`temp_reports_${Date.now()}`,y=JSON.parse(localStorage.getItem(C)||"[]"),v=[A,...y];u(v),localStorage.setItem(C,JSON.stringify(v))},fe=O=>{var v,N;if(O.preventDefault(),!x)return;const A=parseFloat(x),C=Yn[S];let y="Normal";A<C.min&&(y="Low"),A>C.max&&(y="High"),c({parameter:S,value:A,unit:C.unit,range:`${C.min}-${C.max}`,status:y,foods:C.foods,fitnessImpact:y==="Low"?(v=C.impact)==null?void 0:v.low:y==="High"?(N=C.impact)==null?void 0:N.high:null})};return l.jsxs("div",{className:"blood-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Blood Evaluation"})]}),i?l.jsxs("div",{className:"results-section fade-in",children:[l.jsxs("div",{className:"results-header",children:[l.jsx("h3",{children:"Report Analysis"}),l.jsx("button",{className:"text-btn",onClick:()=>a(null),children:"Close"})]}),i.risks&&i.risks.length>0&&l.jsxs("div",{className:"risk-container fade-up",children:[l.jsx("h4",{children:"⚠️ AI Health Risk Detection"}),l.jsx("div",{className:"risk-grid",children:i.risks.map((O,A)=>l.jsxs("div",{className:"risk-card",style:{borderLeft:`4px solid ${O.color}`},children:[l.jsxs("div",{className:"risk-header",children:[l.jsx("span",{className:"condition-title",children:O.condition}),l.jsx("span",{className:"risk-badge",style:{background:O.color},children:O.risk})]}),l.jsx("p",{className:"risk-advice",children:O.advice}),l.jsx("button",{className:"view-details",onClick:()=>alert(`Detailed explanation for ${O.condition}: 

This condition was flagged based on your values. Please consult a doctor for verification.`),children:"View Details"})]},A))})]}),l.jsx("div",{className:"params-list",children:i.results.map((O,A)=>l.jsxs("div",{className:"param-card",children:[l.jsxs("div",{className:"param-header",children:[l.jsx("h4",{children:O.parameter.replace(/_/g," ").toUpperCase()}),l.jsxs("span",{className:`status-badge ${O.status.toLowerCase()}`,children:[O.status==="Normal"&&l.jsx(Dp,{size:14}),O.status==="High"&&l.jsx(Rp,{size:14}),O.status==="Low"&&l.jsx($c,{size:14}),O.status]})]}),l.jsxs("div",{className:"param-value",children:[l.jsx("span",{className:"val",children:O.value}),l.jsx("span",{className:"unit",children:O.unit})]}),l.jsxs("p",{className:"range-info",children:["Ref Range: ",O.range]})]},A))}),i.suggestions.length>0&&l.jsxs("div",{className:"suggestions-box",children:[l.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),i.suggestions.map((O,A)=>l.jsxs("div",{className:"suggestion-item",children:[l.jsx("div",{className:"suggestion-header",children:l.jsxs("strong",{children:[O.status," ",O.parameter.replace(/_/g," ").toUpperCase()]})}),O.foods.length>0&&l.jsxs("p",{className:"food-list",children:["💡 ",l.jsx("b",{children:"Diety Tip:"})," Eat ",O.foods.join(", ")]}),O.fitnessImpact&&l.jsxs("p",{className:"fitness-list",children:["⚡ ",l.jsx("b",{children:"Fitness Impact:"})," ",O.fitnessImpact]})]},A))]})]}):l.jsxs("div",{className:"main-content",children:[l.jsxs("div",{className:"card manual-card",children:[l.jsx("h3",{children:"Quick Check"}),l.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),l.jsxs("form",{onSubmit:fe,className:"manual-form",children:[l.jsxs("div",{className:"row",children:[l.jsx("select",{className:"input-field",value:S,onChange:O=>{k(O.target.value),c(null)},children:Object.keys(Yn).map(O=>l.jsx("option",{value:O,children:O.replace(/_/g," ").toUpperCase()},O))}),l.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:x,onChange:O=>w(O.target.value),required:!0})]}),l.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",l.jsx(Vp,{size:16})]})]}),f&&l.jsxs("div",{className:"manual-result fade-in",children:[l.jsx("div",{className:`result-badge ${f.status.toLowerCase()}`,children:f.status}),l.jsxs("p",{className:"result-text",children:[l.jsxs("strong",{children:[f.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",f.value," ",f.unit,l.jsx("br",{}),l.jsxs("span",{className:"text-muted",children:["Normal: ",f.range]})]}),f.status!=="Normal"&&f.foods.length>0&&l.jsxs("div",{className:"diet-tip",children:[l.jsx("strong",{children:"Tip:"})," Eat ",f.foods.join(", ")]}),f.fitnessImpact&&l.jsxs("div",{className:"fitness-tip",children:[l.jsx("strong",{children:"Fitness Impact:"})," ",f.fitnessImpact]})]})]}),l.jsx("div",{className:"divider",children:"OR"}),l.jsxs("div",{className:"upload-card",children:[l.jsx("div",{className:"icon-circle",children:l.jsx(Uc,{size:32,color:"var(--color-primary)"})}),l.jsx("h3",{children:"Upload Report Image"}),l.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),l.jsxs("div",{className:"scan-mode-toggle",children:[l.jsx("button",{className:`mode-btn ${h==="basic"?"active":""}`,onClick:()=>j("basic"),children:"Basic (Browser)"}),l.jsxs("button",{className:`mode-btn ${h==="advanced"?"active":""}`,onClick:()=>j("advanced"),children:["Advanced (Python ML)",I==="online"&&l.jsx("span",{className:"dot online",title:"Server Online"}),I==="offline"&&l.jsx("span",{className:"dot offline",title:"Server Offline (Run server.py)"})]})]}),l.jsx("div",{style:{marginBottom:"15px"},children:l.jsxs("label",{className:"checkbox-container",children:[l.jsx("input",{type:"checkbox",checked:E,onChange:O=>R(O.target.checked)}),l.jsx("span",{className:"checkmark"}),"Enable Digital Lens (Enhance Image)"]})}),l.jsxs("label",{className:"btn-secondary upload-btn",children:[d?p||"Scanning...":"Select Image (JPG/PNG)",l.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:ee,disabled:d})]})]}),s.length>0&&l.jsxs("div",{className:"history-section",children:[l.jsx("h3",{children:"Recent Reports"}),s.map((O,A)=>l.jsxs("div",{className:"history-item",onClick:()=>a(O),children:[l.jsx(ea,{size:18,className:"text-muted"}),l.jsx("span",{children:O.date}),l.jsx("span",{className:"arrow",children:"→"})]},A))]})]}),l.jsx("style",{children:`
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
      `})]})},Fr={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},rm=({userProfile:e,onBack:t})=>{const[n,r]=P.useState(null),[o,i]=P.useState(0),[a,s]=P.useState(null);P.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:g,heightCm:p,age:m,gender:S}=e;let k=10*g+6.25*p-5*m;S==="male"?k+=5:k-=161;let x=Math.round(k*1.375);return n==="loss"?x-500:n==="gain"?x+500:x},d=()=>{const g=u();i(g);const p=m=>m[Math.floor(Math.random()*m.length)];s({breakfast:p(Fr.breakfast),lunch:p(Fr.lunch),snack:p(Fr.snack),dinner:p(Fr.dinner)})};return l.jsxs("div",{className:"fitness-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:t,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Fitness Helper"})]}),n?l.jsxs("div",{className:"plan-view fade-in",children:[l.jsxs("div",{className:"summary-card",children:[l.jsxs("div",{className:"cal-target",children:[l.jsx("span",{className:"label",children:"Daily Target"}),l.jsx("h1",{children:o}),l.jsx("span",{className:"unit",children:"kcal"})]}),l.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),l.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),l.jsxs("div",{className:"meals-list",children:[l.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),a&&l.jsxs(l.Fragment,{children:[l.jsx(Ar,{type:"Breakfast",icon:l.jsx(hs,{size:18}),data:a.breakfast}),l.jsx(Ar,{type:"Lunch",icon:l.jsx(Kn,{size:18}),data:a.lunch}),l.jsx(Ar,{type:"Snack",icon:l.jsx(hs,{size:18}),data:a.snack}),l.jsx(Ar,{type:"Dinner",icon:l.jsx(Kn,{size:18}),data:a.dinner})]})]})]}):l.jsxs("div",{className:"goal-selection",children:[l.jsx("h3",{children:"What is your goal?"}),l.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[l.jsx("div",{className:"icon-box loss",children:l.jsx(Qp,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Weight Loss"}),l.jsx("p",{children:"Reduce body fat locally."})]})]}),l.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[l.jsx("div",{className:"icon-box maintain",children:l.jsx(qp,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Maintain Weight"}),l.jsx("p",{children:"Stay healthy and fit."})]})]}),l.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[l.jsx("div",{className:"icon-box gain",children:l.jsx(Kn,{size:24})}),l.jsxs("div",{className:"text",children:[l.jsx("h4",{children:"Weight Gain"}),l.jsx("p",{children:"Build muscle mass."})]})]})]}),l.jsx("style",{children:`
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
      `})]})},Ar=({type:e,icon:t,data:n})=>l.jsxs("div",{className:"meal-card",children:[l.jsxs("div",{className:"meal-info",children:[l.jsxs("h4",{children:[t," ",e]}),l.jsx("p",{children:n.name})]}),l.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),om=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],im=({onBack:e})=>{const[t,n]=P.useState(null);return l.jsxs("div",{className:"workout-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Home Workouts"})]}),l.jsxs("div",{className:"info-card",children:[l.jsx("div",{className:"intro-icon",children:l.jsx(ms,{size:28,color:"#FF6B6B"})}),l.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),l.jsx("div",{className:"workout-list",children:om.map(r=>l.jsxs("div",{className:"workout-card",children:[l.jsxs("div",{className:"w-header",children:[l.jsx("h3",{children:r.name}),l.jsxs("span",{className:"cal-badge",children:[l.jsx(ms,{size:12,fill:"currentColor"})," ",r.calories]})]}),l.jsx("p",{className:"w-desc",children:r.desc}),l.jsxs("div",{className:"w-footer",children:[l.jsxs("span",{className:"duration",children:[l.jsx(Kp,{size:14})," ",r.duration]}),l.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&l.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsx("button",{className:"close-btn",onClick:()=>n(null),children:l.jsx(Zp,{size:24})}),l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t.name}),l.jsx("span",{className:"cal-pill",children:t.calories})]}),(()=>{const o={"Jumping Jacks":"iSSAk4XCsRA",Squats:"YaXPRqUwItQ","Push-ups":"IODxDxX7oi4",Burpees:"dZgVxmf6jkA","High Knees":"oDdkytliOqE",Lunges:"QOVaHwm-Q6U",Plank:"pSHjTRCQxIw","Mountain Climbers":"zT-9L3CEcmk"}[t.name]||"UpH7rm0cYbM";return l.jsx("div",{style:{width:"100%",height:"220px",marginBottom:"20px",borderRadius:"12px",overflow:"hidden",background:"#000"},children:l.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1&loop=1&playlist=${o}&controls=0&showinfo=0&modestbranding=1`,title:"Workout Demonstration",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"block"}})})})(),l.jsxs("div",{className:"modal-body",children:[l.jsxs("h4",{children:[l.jsx(Bc,{size:16})," How to do it:"]}),l.jsx("ul",{className:"steps-list",children:t.steps.map((r,o)=>l.jsxs("li",{children:[l.jsx("span",{className:"step-num",children:o+1}),r]},o))})]})]})}),l.jsx("style",{children:`
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
            `})]})},lm=({onBack:e,userProfile:t})=>{const[n,r]=P.useState(()=>{if(!(t!=null&&t.email))return[];const p=localStorage.getItem(`weight_log_${t.email}`);return p?JSON.parse(p):[]}),[o,i]=P.useState(""),a=()=>{if(!o||isNaN(o))return;const p={weight:parseFloat(o),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},m=[...n,p];r(m),t!=null&&t.email&&localStorage.setItem(`weight_log_${t.email}`,JSON.stringify(m)),i("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const p=n[n.length-1].weight,m=n[n.length-2].weight,S=p-m;return{change:Math.abs(S).toFixed(1),type:S>0?"gain":S<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),g=n.length>0?n[n.length-1].weight:d;return l.jsxs("div",{className:"weight-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Weight Progress"})]}),l.jsxs("div",{className:"stats-card",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Starting Weight"}),l.jsxs("span",{className:"value",children:[d," kg"]})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Current Weight"}),l.jsxs("span",{className:"value primary",children:[g," kg"]})]}),l.jsx("div",{className:"divider"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"label",children:"Change"}),l.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&l.jsx(Xp,{size:16}),u.type==="loss"&&l.jsx(Jp,{size:16}),u.type==="neutral"&&l.jsx(Up,{size:16}),u.change," kg"]})]})]}),l.jsxs("div",{className:"input-section",children:[l.jsx("h3",{children:"Log Current Weight"}),l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:o,onChange:p=>i(p.target.value),step:"0.1"}),l.jsx("button",{className:"add-btn",onClick:a,children:"Add"})]})]}),l.jsxs("div",{className:"history-section",children:[l.jsx("h3",{children:"Weight History"}),n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Ac,{size:40,color:"#cbd5e1"}),l.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):l.jsx("div",{className:"history-list",children:[...n].reverse().map((p,m)=>l.jsxs("div",{className:"history-item",children:[l.jsxs("div",{className:"date-badge",children:[l.jsx(Op,{size:14}),p.displayDate]}),l.jsxs("div",{className:"weight-display",children:[p.weight," kg"]})]},m))})]}),l.jsx("style",{children:`
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
            `})]})},am=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],Ss=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],sm=({onBack:e,userProfile:t})=>{const[n,r]=P.useState([{id:1,text:`Hello ${t!=null&&t.name?t.name.split(" ")[0]:""}! I'm your Health Assistant. Ask me about your blood report, diet, or workout.`,sender:"bot"}]),[o,i]=P.useState(""),[a,s]=P.useState(!1),u=P.useRef(null),d=()=>{var x;(x=u.current)==null||x.scrollIntoView({behavior:"smooth"})},[g,p]=P.useState([]);P.useEffect(()=>{if(t!=null&&t.email){const x=JSON.parse(localStorage.getItem(`reports_${t.email}`)||"[]");p(x)}d()},[n,t==null?void 0:t.email]);const m=x=>{const w=x.toLowerCase();if(w.includes("analyze")||w.includes("summary")||w.includes("my report")){if(g.length===0)return"I don't see any blood reports uploaded yet. specific values. You can upload one in the Blood Evaluation section!";const $=g[0],L=$.results.filter(ee=>ee.status!=="Normal");if(L.length===0)return"Your latest report looks perfect! All values are within the normal range. Keep it up! 🌟";const W=L.map(ee=>`${ee.parameter} is ${ee.status} (${ee.value} ${ee.unit})`).join(", ");return`Based on your latest report (${$.date}), here are some things to watch: ${W}. Would you like diet tips for any of these?`}const f=Ss.find($=>w.includes($));if(f&&g.length>0){const L=g[0].results.find(W=>W.parameter.toLowerCase().includes(f));if(L)return`Your latest ${L.parameter} is ${L.value} ${L.unit}, which is ${L.status}. ${L.fitnessImpact||""}`}const c=t!=null&&t.diseases?t.diseases.toLowerCase():"",h=t!=null&&t.allergies?t.allergies.toLowerCase():"",j=(t==null?void 0:t.age)||"",E=(t==null?void 0:t.weight)||"",R=(t==null?void 0:t.bloodGroup)||"",I=(t==null?void 0:t.gender)||"";return!Ss.some($=>w.includes($))&&!w.includes("hello")&&!w.includes("hi")?`I'm analyzing your health data... I can help with Blood Reports, Diet, and Fitness. Try asking "Analyze my report" or "How is my hemoglobin?".`:w.includes("my profile")||w.includes("my health")||w.includes("about me")?`You are a ${j}-year-old ${I} with Blood Group ${R}. Current weight: ${E}kg. Known conditions: ${c||"None"}. Allergies: ${h||"None"}.`:c.includes("diabetes")&&(w.includes("sugar")||w.includes("sweet")||w.includes("fruit"))?"Since you mentioned Diabetes, be very careful with high GI fruits like mangoes and chikoo. Opt for apples, berries, and papaya. Monitor your blood sugar regularly and avoid refined sugars completely.":(c.includes("hypertension")||c.includes("bp"))&&(w.includes("salt")||w.includes("diet"))?"For hypertension management, the DASH diet is recommended. Reduce sodium intake (salt), avoid pickles and papad, and increase potassium-rich foods like bananas and leafy greens.":w.includes("protein")?"Protein is the building block. vegetarians: Paneer, Dal, Soy. Non-veg: Chicken, Fish. "+(c.includes("kidney")?"However, since you have kidney concerns, please consult your doctor for the exact protein limit.":"Aim for 1.2g/kg body weight."):w.includes("pre-workout")||w.includes("before gym")?"A banana or oatmeal 45 mins before workout is great energy.":w.includes("post-workout")||w.includes("after gym")?"Post-workout, have a protein source (shake/chicken/eggs) within 45 mins to maximize recovery.":w.includes("muscle")?"Building muscle requires specific resistance training, protein surplus, and sleep. Consistency is key!":w.includes("cardio")?"Cardio improves heart health and burns calories. 150 mins/week is a good target.":w.includes("bmi")?"BMI is a rough indicator. "+(t!=null&&t.weight?`At ${t.weight}kg, your focus should be on body composition (muscle vs fat) rather than just the scale.`:"Check your weight-to-height ratio."):w.includes("diet")||w.includes("food")?h?`Given your allergies to ${h}, ensure you check food labels. Focus on whole, unprocessed foods.`:"A balanced diet with protein, good fats, and fiber is essential. Avoid processed foods.":w.includes("hemoglobin")?"Iron-rich foods (spinach, dates, red meat) help boost hemoglobin. Vitamin C helps absorption.":w.includes("sugar")?"Minimize added sugars. Natural sugars in whole fruits are generally okay in moderation.":w.includes("weight")?"Weight management is about Calorie In vs Calorie Out, quality of food, and hormonal balance.":w.includes("sleep")?"7-9 hours of sleep is non-negotiable for recovery and mental health.":"That's a good question. Based on general fitness guidelines, consistency in diet and exercise is 90% of the game. How is your sleep lately?"},S=x=>{if(x.preventDefault(),!o.trim())return;const w={id:Date.now(),text:o,sender:"user"};r(f=>[...f,w]),i(""),s(!0),setTimeout(()=>{const f={id:Date.now()+1,text:m(w.text),sender:"bot"};r(c=>[...c,f]),s(!1)},1200)},k=x=>{const w={id:Date.now(),text:x.q,sender:"user"};r(f=>[...f,w]),s(!0),setTimeout(()=>{const f={id:Date.now()+1,text:x.a,sender:"bot"};r(c=>[...c,f]),s(!1)},1200)};return l.jsxs("div",{className:"chat-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Health Assistant"})]}),l.jsxs("div",{className:"chat-window",children:[n.map(x=>l.jsxs("div",{className:`message-row ${x.sender}`,children:[x.sender==="bot"&&l.jsx("div",{className:"avatar bot",children:l.jsx(ps,{size:16})}),l.jsx("div",{className:"message-bubble",children:x.text}),x.sender==="user"&&l.jsx("div",{className:"avatar user",children:l.jsx(Hc,{size:16})})]},x.id)),a&&l.jsxs("div",{className:"message-row bot",children:[l.jsx("div",{className:"avatar bot",children:l.jsx(ps,{size:16})}),l.jsxs("div",{className:"message-bubble typing",children:[l.jsx("span",{children:"."}),l.jsx("span",{children:"."}),l.jsx("span",{children:"."})]})]}),l.jsx("div",{ref:u})]}),l.jsxs("div",{className:"input-section",children:[l.jsx("div",{className:"chips-row",children:am.map((x,w)=>l.jsx("button",{className:"chip",onClick:()=>k(x),disabled:a,children:x.q},w))}),l.jsxs("form",{onSubmit:S,className:"input-form",children:[l.jsx("input",{type:"text",value:o,onChange:x=>i(x.target.value),placeholder:"Ask about health...",className:"chat-input"}),l.jsx("button",{type:"submit",className:"send-btn",children:l.jsx(Gp,{size:20})})]})]}),l.jsx("style",{children:`
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
      `})]})},um=({message:e,onClose:t})=>(P.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),l.jsxs("div",{className:"toast-notification",children:[l.jsx("div",{className:"icon-bg",children:l.jsx(Tp,{size:20})}),l.jsxs("div",{className:"content",children:[l.jsx("h4",{children:"Reminder"}),l.jsx("p",{children:e})]}),l.jsx("button",{onClick:t,className:"close-btn",children:"×"}),l.jsx("style",{children:`
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
       `})]})),js=e=>{let t={breakfast:[{name:"Oatmeal with Walnuts & Apple",calories:350,carbs:"60g",protein:"12g",fat:"8g",benefits:["Heart Healthy","High Fiber"]},{name:"Egg Whites & Whole Wheat Toast",calories:300,carbs:"30g",protein:"20g",fat:"5g",benefits:["Muscle Repair"]}],lunch:[{name:"Grilled Chicken Salad with Quinoa",calories:500,carbs:"40g",protein:"40g",fat:"15g",benefits:["Lean Protein","Complete Meal"]},{name:"Lentil Soup (Dal) & Brown Rice",calories:450,carbs:"60g",protein:"18g",fat:"8g",benefits:["Plant Protein","Easy Digestion"]}],snacks:[{name:"Greek Yogurt with Berries",calories:150,carbs:"15g",protein:"12g",fat:"0g",benefits:["Probiotics","Antioxidants"]},{name:"Handful of Almonds",calories:160,carbs:"6g",protein:"6g",fat:"14g",benefits:["Healthy Fats"]}],dinner:[{name:"Baked Salmon with Steamed Broccoli",calories:550,carbs:"10g",protein:"45g",fat:"30g",benefits:["Omega-3","Light Dinner"]},{name:"Stir-Fried Tofu with Mixed Veggies",calories:400,carbs:"15g",protein:"25g",fat:"20g",benefits:["Vegan Option","Light"]}],recommendations:["Drink 3-4 liters of water daily.","Eat dinner at least 2 hours before sleep.","Include a serving of raw salad with lunch.","Limit processed sugar intake."],restrictions:[]};if(!e||!e.results)return t;const{results:n}=e,r=m=>n.find(S=>S.parameter===m),o=r("glucose_fasting"),i=r("glucose_pp");(o&&o.status==="High"||i&&i.status==="High")&&(t.recommendations.unshift("⚠️ STRICT LOW GLYCEMIC INDEX DIET RECOMMENDED"),t.restrictions.push("White bread, white rice, pasta","Sugary drinks & desserts","High-sugar fruits (mango, grapes)"),t.breakfast=[{name:"Steel-Cut Oats with Cinnamon (No Sugar)",calories:300,carbs:"50g",protein:"10g",fat:"6g",benefits:["Low GI","Cinnamon Helps Insulin"]},{name:"Vegetable Omelette (Double Spinach)",calories:320,carbs:"5g",protein:"22g",fat:"20g",benefits:["Keto-Friendly","Iron Boost"]}],t.snacks=[{name:"Roasted Chana (Chickpeas)",calories:180,carbs:"20g",protein:"10g",fat:"4g",benefits:["Complex Carbs","Satiety"]},{name:"Cucumber & Hummus Sticks",calories:150,carbs:"15g",protein:"6g",fat:"8g",benefits:["Hydrating","Low Carb"]}]);const a=r("cholesterol"),s=r("triglycerides"),u=r("ldl_cholesterol");(a&&a.status==="High"||s&&s.status==="High"||u&&u.status==="High")&&(t.recommendations.unshift("⚠️ HEART HEALTHY FATS ONLY (Avoid Saturated Fats)"),t.restrictions.push("Red meat","Butter/Ghee","Fried foods","Full-fat dairy"),t.dinner=[{name:"Grilled Mackerel/Salmon (No Butter)",calories:500,carbs:"0g",protein:"40g",fat:"25g",benefits:["High Omega-3","Lowers inflammation"]},{name:"Quinoa Bowl with Beans",calories:450,carbs:"60g",protein:"18g",fat:"8g",benefits:["Fiber lowers cholesterol"]}],t.breakfast.some(m=>m.name.includes("Oat"))||t.breakfast.unshift({name:"Bowl of Oatmeal with Flaxseeds",calories:350,carbs:"55g",protein:"12g",fat:"10g",benefits:["Soluble Fiber","Cholesterol Lowering"]}));const d=r("hemoglobin");d&&d.status==="Low"&&(t.recommendations.unshift("⚠️ IRON-RICH DIET (Consume Vitamin C for absorption)"),t.lunch.forEach(m=>{m.name.includes("Spinach")||(m.name+=" + Side Spinach Salad"),m.benefits.push("Iron Booster")}),t.snacks.push({name:"Dates & Walnuts",calories:200,carbs:"40g",protein:"4g",fat:"8g",benefits:["High Iron","Energy"]}),t.restrictions.push("Tea/Coffee within 1 hour of meals (Inhibits Iron absorption)"));const g=r("uric_acid");g&&g.status==="High"&&(t.recommendations.unshift("⚠️ LOW PURINE DIET (Manage Uric Acid)"),t.restrictions.push("Red meat","Shellfish","Spinach","Cauliflower","Alcohol"),["breakfast","lunch","dinner","snacks"].forEach(m=>{t[m]=t[m].map(S=>S.name.includes("Spinach")?{...S,name:S.name.replace("Spinach","Cucumber"),benefits:S.benefits.filter(k=>k!=="Iron Booster")}:S)}),t.snacks.push({name:"Bowl of Cherries / Berries",calories:100,carbs:"25g",protein:"1g",fat:"0g",benefits:["Lowers Uric Acid"]}));const p=r("tsh");return p&&p.status==="High"&&(t.recommendations.unshift("⚠️ THYROID SUPPORT (Limit Goitrogens raw)"),t.restrictions.push("Raw Cruciferous Veggies (Cabbage, Broccoli, Cauliflower) - Cook them well"),t.recommendations.push("Ensure iodized salt usage or eat seaweed."),t.breakfast.push({name:"Brazil Nuts (2-3) & Smoothie",calories:300,carbs:"40g",protein:"10g",fat:"15g",benefits:["Selenium for Thyroid"]})),t},cm=({onBack:e,user:t})=>{const[n,r]=P.useState(null),[o,i]=P.useState(null),[a,s]=P.useState(!0),[u,d]=P.useState(!1),[g,p]=P.useState("breakfast");P.useEffect(()=>{m()},[t]);const m=()=>{t&&t.email?`${t.email}`:`${Date.now()}`;let k=null;if(t&&t.email){const x=localStorage.getItem(`reports_${t.email}`);if(x){const w=JSON.parse(x);w.length>0&&(k=w[0])}}else{const x=Object.keys(localStorage).filter(w=>w.startsWith("temp_reports_"));if(x.length>0){const w=localStorage.getItem(x[x.length-1]);if(w){const f=JSON.parse(w);f.length>0&&(k=f[0])}}}if(k){r(k);const x=js(k);i(x)}s(!1)},S=async k=>{const x=k.target.files[0];if(x){d(!0);try{const{data:{text:w}}=await Kc.recognize(x,"eng"),f=w.split(`
`),c={},h={hemoglobin:["hemoglobin","hb"],glucose_fasting:["glucose fasting","fbs"],cholesterol:["cholesterol"],uric_acid:["uric acid"],tsh:["tsh"]};if(f.forEach(M=>{const $=M.toLowerCase();Object.keys(h).forEach(L=>{if(h[L].some(W=>$.includes(W))){const W=M.match(/(\d+(\.\d+)?)/g);W&&(c[L]=parseFloat(W[0]))}})}),Object.keys(c).length===0){alert("Could not detect clear values. Please try a clearer image."),d(!1);return}const j=Jc(c);i(js(j)),r(j);const E=t&&t.email?`reports_${t.email}`:`temp_reports_${Date.now()}`,R=JSON.parse(localStorage.getItem(E)||"[]"),I=[j,...R];localStorage.setItem(E,JSON.stringify(I))}catch(w){console.error(w),alert("Error scanning file.")}finally{d(!1)}}};return a?l.jsx("div",{className:"p-4",children:"Loading Diet Plan..."}):n?l.jsxs("div",{className:"diet-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Your Personalized Diet"})]}),l.jsx("div",{className:"health-summary",children:o.recommendations.some(k=>k.includes("⚠️"))?l.jsxs("div",{className:"alert-badge warning",children:[l.jsx($c,{size:16}),l.jsx("span",{children:"Based on your report: Modifications applied for specific conditions."})]}):l.jsxs("div",{className:"alert-badge success",children:[l.jsx(Fp,{size:16}),l.jsx("span",{children:"Report looks balanced. Showing base healthy plan."})]})}),l.jsxs("div",{className:"recommendations-box",children:[l.jsx("h4",{children:"Key Guidelines"}),l.jsx("ul",{children:o.recommendations.slice(0,3).map((k,x)=>l.jsx("li",{className:k.includes("⚠️")?"high-priority":"",children:k},x))})]}),l.jsx("div",{className:"meal-tabs",children:["breakfast","lunch","snacks","dinner"].map(k=>l.jsx("button",{className:`tab-btn ${g===k?"active":""}`,onClick:()=>p(k),children:k.charAt(0).toUpperCase()+k.slice(1)},k))}),l.jsx("div",{className:"meal-content",children:o[g].map((k,x)=>l.jsxs("div",{className:"food-card slide-in",children:[l.jsxs("div",{className:"food-header",children:[l.jsx("h3",{children:k.name}),l.jsxs("span",{className:"cal-badge",children:[k.calories," kcal"]})]}),l.jsxs("div",{className:"macros-row",children:[l.jsxs("span",{className:"macro",children:["C: ",k.carbs]}),l.jsxs("span",{className:"macro",children:["P: ",k.protein]}),l.jsxs("span",{className:"macro",children:["F: ",k.fat]})]}),l.jsx("div",{className:"benefits-tags",children:k.benefits.map((w,f)=>l.jsx("span",{className:"tag",children:w},f))})]},x))}),o.restrictions.length>0&&l.jsxs("div",{className:"restrictions-box",children:[l.jsx("h4",{children:"⛔ Avoid / Limit"}),l.jsx("p",{children:o.restrictions.join(", ")})]}),l.jsx("style",{children:`
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
            `})]}):l.jsxs("div",{className:"diet-container fade-in",children:[l.jsxs("div",{className:"header-row",children:[l.jsx("button",{onClick:e,className:"back-btn",children:l.jsx(pt,{size:24})}),l.jsx("h2",{children:"Specialized Diet"})]}),l.jsxs("div",{className:"no-report-state",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Kn,{size:40,color:"var(--color-primary)"})}),l.jsx("h3",{children:"No Report Uploaded"}),l.jsx("p",{children:"Please upload your blood test report to get a personalized diet plan tailored to your body's needs."}),l.jsxs("label",{className:"btn-primary upload-btn-large",children:[u?"Scanning...":"Upload Report Now",l.jsx(Uc,{size:18,style:{marginLeft:8}}),l.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:S,disabled:u})]})]}),l.jsx("style",{children:`
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
                `})]})};function dm(){const e=localStorage.getItem("user_profile"),[t,n]=P.useState(e?"dashboard":"login"),[r,o]=P.useState(null),[i,a]=P.useState(null),[s,u]=P.useState(e?JSON.parse(e):null),[d,g]=P.useState(null);Ps.useEffect(()=>{const x=localStorage.getItem("user_profile");x&&u(JSON.parse(x));const w=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],f=setInterval(()=>{const c=w[Math.floor(Math.random()*w.length)];g(c)},12e4);return()=>clearInterval(f)},[]);const p=async(x,w=!1)=>{if(a(x),w){n("profile_setup");return}try{const f=await Fc.getProfile();f.success&&f.profile?(console.log("Profile found:",f.profile),u(f.profile),localStorage.setItem("user_profile",JSON.stringify(f.profile)),n("dashboard")):(console.log("No profile found, redirecting to setup"),n("profile_setup"))}catch(f){console.error("Error fetching profile:",f);const c=localStorage.getItem("user_profile");if(c){const h=JSON.parse(c);h.email===x.email?(u(h),n("dashboard")):(console.log("Cached profile does not match current user. Redirecting to setup."),n("profile_setup"))}else n("profile_setup")}},m=x=>{const w={...x,email:i==null?void 0:i.email};u(w),localStorage.setItem("user_profile",JSON.stringify(w)),n("dashboard")},S=(x,w=null)=>{o(w),n(x)},k=()=>{localStorage.removeItem("user_profile"),a(null),u(null),n("login")};return l.jsxs("div",{className:"app-container",children:[d&&l.jsx(um,{message:d,onClose:()=>g(null)}),t==="login"&&l.jsx(Ep,{onLogin:p}),t==="profile_setup"&&l.jsx(zp,{onComplete:m}),t==="dashboard"&&l.jsx(th,{userName:s==null?void 0:s.name,userProfile:s,onNavigate:S,onLogout:k}),t==="bmi"&&l.jsx(nh,{userProfile:s,onBack:()=>n("dashboard")}),t==="blood"&&l.jsx(nm,{user:s,onBack:()=>n("dashboard"),initialViewReport:r}),t==="fitness"&&l.jsx(rm,{userProfile:s,onBack:()=>n("dashboard")}),t==="homeworkout"&&l.jsx(im,{onBack:()=>n("dashboard")}),t==="weightprogress"&&l.jsx(lm,{userProfile:s,onBack:()=>n("dashboard")}),t==="chat"&&l.jsx(sm,{userProfile:s,onBack:()=>n("dashboard")}),t==="diet"&&l.jsx(cm,{user:s,onBack:()=>n("dashboard")})]})}fi.createRoot(document.getElementById("root")).render(l.jsx(Ps.StrictMode,{children:l.jsx(dm,{})}));
