(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ys(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},wo={},ws={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Ac=Symbol.for("react.portal"),Bc=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Gc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,js={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=Sn.prototype;function ri(e,t,n){this.props=e,this.context=t,this.refs=js,this.updater=n||ks}var oi=ri.prototype=new Ns;oi.constructor=ri;Ss(oi,Sn.prototype);oi.isPureReactComponent=!0;var ta=Array.isArray,Cs=Object.prototype.hasOwnProperty,li={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Cs.call(t,r)&&!Es.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:l,ref:i,props:o,_owner:li.current}}function Jc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Fr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case Ac:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Fo(i,0):r,ta(o)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Fr(o,t,n,"",function(d){return d})):o!=null&&(ii(o)&&(o=Jc(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(na,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Fo(l,s);i+=Fr(l,t,n,u,o)}else if(u=Yc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Fo(l,s++),i+=Fr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function mr(e,t,n){if(e==null)return e;var r=[],o=0;return Fr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Or={transition:null},qc={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Or,ReactCurrentOwner:li};function zs(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Sn;H.Fragment=Bc;H.Profiler=Hc;H.PureComponent=ri;H.StrictMode=Uc;H.Suspense=Qc;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qc;H.act=zs;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=li.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Cs.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:l,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:Wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$c,_context:e},e.Consumer=e};H.createElement=bs;H.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Vc,render:e}};H.isValidElement=ii;H.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:Zc}};H.memo=function(e,t){return{$$typeof:Gc,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};H.unstable_act=zs;H.useCallback=function(e,t){return Se.current.useCallback(e,t)};H.useContext=function(e){return Se.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};H.useEffect=function(e,t){return Se.current.useEffect(e,t)};H.useId=function(){return Se.current.useId()};H.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Se.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};H.useRef=function(e){return Se.current.useRef(e)};H.useState=function(e){return Se.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Se.current.useTransition()};H.version="18.3.1";ws.exports=H;var F=ws.exports;const _s=ys(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=F,td=Symbol.for("react.element"),nd=Symbol.for("react.fragment"),rd=Object.prototype.hasOwnProperty,od=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)rd.call(t,r)&&!ld.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:td,type:e,key:l,ref:i,props:o,_owner:od.current}}wo.Fragment=nd;wo.jsx=Ls;wo.jsxs=Ls;xs.exports=wo;var a=xs.exports,ul={},Ps={exports:{}},Me={},Ts={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,v){var g=z.length;z.push(v);e:for(;0<g;){var S=g-1>>>1,R=z[S];if(0<o(R,v))z[S]=v,z[g]=R,g=S;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var v=z[0],g=z.pop();if(g!==v){z[0]=g;e:for(var S=0,R=z.length,N=R>>>1;S<N;){var b=2*(S+1)-1,A=z[b],B=b+1,V=z[B];if(0>o(A,g))B<R&&0>o(V,A)?(z[S]=V,z[B]=g,S=B):(z[S]=A,z[b]=g,S=b);else if(B<R&&0>o(V,g))z[S]=V,z[B]=g,S=B;else break e}}return v}function o(z,v){var g=z.sortIndex-v.sortIndex;return g!==0?g:z.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],x=1,h=null,f=3,y=!1,w=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var v=n(d);v!==null;){if(v.callback===null)r(d);else if(v.startTime<=z)r(d),v.sortIndex=v.expirationTime,t(u,v);else break;v=n(d)}}function j(z){if(k=!1,m(z),!w)if(n(u)!==null)w=!0,J(E);else{var v=n(d);v!==null&&ce(j,v.startTime-z)}}function E(z,v){w=!1,k&&(k=!1,p(M),M=-1),y=!0;var g=f;try{for(m(v),h=n(u);h!==null&&(!(h.expirationTime>v)||z&&!ie());){var S=h.callback;if(typeof S=="function"){h.callback=null,f=h.priorityLevel;var R=S(h.expirationTime<=v);v=e.unstable_now(),typeof R=="function"?h.callback=R:h===n(u)&&r(u),m(v)}else r(u);h=n(u)}if(h!==null)var N=!0;else{var b=n(d);b!==null&&ce(j,b.startTime-v),N=!1}return N}finally{h=null,f=g,y=!1}}var L=!1,_=null,M=-1,$=5,O=-1;function ie(){return!(e.unstable_now()-O<$)}function P(){if(_!==null){var z=e.unstable_now();O=z;var v=!0;try{v=_(!0,z)}finally{v?I():(L=!1,_=null)}}else L=!1}var I;if(typeof c=="function")I=function(){c(P)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,U=W.port2;W.port1.onmessage=P,I=function(){U.postMessage(null)}}else I=function(){D(P,0)};function J(z){_=z,L||(L=!0,I())}function ce(z,v){M=D(function(){z(e.unstable_now())},v)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,J(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var v=3;break;default:v=f}var g=f;f=v;try{return z()}finally{f=g}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,v){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var g=f;f=z;try{return v()}finally{f=g}},e.unstable_scheduleCallback=function(z,v,g){var S=e.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?S+g:S):g=S,z){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=g+R,z={id:x++,callback:v,priorityLevel:z,startTime:g,expirationTime:R,sortIndex:-1},g>S?(z.sortIndex=g,t(d,z),n(u)===null&&z===n(d)&&(k?(p(M),M=-1):k=!0,ce(j,g-S))):(z.sortIndex=R,t(u,z),w||y||(w=!0,J(E))),z},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(z){var v=f;return function(){var g=f;f=v;try{return z.apply(this,arguments)}finally{f=g}}}})(Ms);Ts.exports=Ms;var id=Ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=F,Te=id;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rs=new Set,Gn={};function Qt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},oa={};function ud(e){return cl.call(oa,e)?!0:cl.call(ra,e)?!1:sd.test(e)?oa[e]=!0:(ra[e]=!0,!1)}function cd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dd(e,t,n,r){if(t===null||typeof t>"u"||cd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ai=/[\-:]([a-z])/g;function si(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ai,si);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ai,si);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ai,si);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ui(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dd(t,n,o,r)&&(n=null),r||o===null?ud(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),ci=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Is=Symbol.for("react.provider"),Fs=Symbol.for("react.context"),di=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),fi=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),la=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Oo;function Rn(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Do=!1;function Ao(e,t){if(!e||Do)return"";Do=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Do=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function fd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Jt:return"Portal";case dl:return"Profiler";case ci:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fs:return(e.displayName||"Context")+".Consumer";case Is:return(e._context.displayName||"Context")+".Provider";case di:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fi:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===ci?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hd(e){var t=Ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=hd(e))}function As(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&ui(e,"checked",t,!1)}function gl(e,t){Bs(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(In(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Us(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gd=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,cn=null,dn=null;function ca(e){if(e=pr(e)){if(typeof jl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Co(t),jl(e.stateNode,e.type,t))}}function Qs(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Gs(){if(cn){var e=cn,t=dn;if(dn=cn=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Ks(e,t){return e(t)}function Ys(){}var Bo=!1;function Js(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Ks(e,t,n)}finally{Bo=!1,(cn!==null||dn!==null)&&(Ys(),Gs())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Nl=!1;if(at)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Nl=!1}function vd(e,t,n,r,o,l,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var An=!1,Jr=null,Xr=!1,Cl=null,yd={onError:function(e){An=!0,Jr=e}};function xd(e,t,n,r,o,l,i,s,u){An=!1,Jr=null,vd.apply(yd,arguments)}function wd(e,t,n,r,o,l,i,s,u){if(xd.apply(this,arguments),An){if(An){var d=Jr;An=!1,Jr=null}else throw Error(C(198));Xr||(Xr=!0,Cl=d)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Gt(e)!==e)throw Error(C(188))}function kd(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return da(o),e;if(l===r)return da(o),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Zs(e){return e=kd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var eu=Te.unstable_scheduleCallback,fa=Te.unstable_cancelCallback,Sd=Te.unstable_shouldYield,jd=Te.unstable_requestPaint,le=Te.unstable_now,Nd=Te.unstable_getCurrentPriorityLevel,hi=Te.unstable_ImmediatePriority,tu=Te.unstable_UserBlockingPriority,Zr=Te.unstable_NormalPriority,Cd=Te.unstable_LowPriority,nu=Te.unstable_IdlePriority,ko=null,Ze=null;function Ed(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:_d,bd=Math.log,zd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(bd(e)/zd|0)|0}var xr=64,wr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Fn(s):(l&=i,l!==0&&(r=Fn(l)))}else i=n&~o,i!==0?r=Fn(i):l!==0&&(r=Fn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Qe(l),s=1<<i,u=o[i];u===-1?(!(s&n)||s&r)&&(o[i]=Ld(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function mi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,gi,iu,au,su,bl=!1,kr=[],wt=null,kt=null,St=null,Jn=new Map,Xn=new Map,gt=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function zn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rd(e,t,n,r,o){switch(t){case"focusin":return wt=zn(wt,e,t,n,r,o),!0;case"dragenter":return kt=zn(kt,e,t,n,r,o),!0;case"mouseover":return St=zn(St,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Jn.set(l,zn(Jn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Xn.set(l,zn(Xn.get(l)||null,e,t,n,r,o)),!0}return!1}function uu(e){var t=Ft(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,su(e.priority,function(){iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sl=r,n.target.dispatchEvent(r),Sl=null}else return t=pr(n),t!==null&&gi(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Dr(e)&&n.delete(t)}function Id(){bl=!1,wt!==null&&Dr(wt)&&(wt=null),kt!==null&&Dr(kt)&&(kt=null),St!==null&&Dr(St)&&(St=null),Jn.forEach(ha),Xn.forEach(ha)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Id)))}function Zn(e){function t(o){return _n(o,e)}if(0<kr.length){_n(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&_n(wt,e),kt!==null&&_n(kt,e),St!==null&&_n(St,e),Jn.forEach(t),Xn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&gt.shift()}var fn=dt.ReactCurrentBatchConfig,eo=!0;function Fd(e,t,n,r){var o=G,l=fn.transition;fn.transition=null;try{G=1,vi(e,t,n,r)}finally{G=o,fn.transition=l}}function Od(e,t,n,r){var o=G,l=fn.transition;fn.transition=null;try{G=4,vi(e,t,n,r)}finally{G=o,fn.transition=l}}function vi(e,t,n,r){if(eo){var o=zl(e,t,n,r);if(o===null)Xo(e,t,r,to,n),pa(e,r);else if(Rd(o,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Md.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&lu(l),l=zl(e,t,n,r),l===null&&Xo(e,t,r,to,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Xo(e,t,r,null,n)}}var to=null;function zl(e,t,n,r){if(to=null,e=pi(r),e=Ft(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case hi:return 1;case tu:return 4;case Zr:case Cd:return 16;case nu:return 536870912;default:return 16}default:return 16}}var yt=null,yi=null,Ar=null;function du(){if(Ar)return Ar;var e,t=yi,n=t.length,r,o="value"in yt?yt.value:yt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Ar=o.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ma(){return!1}function Re(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:ma,this.isPropagationStopped=ma,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=Re(jn),fr=re({},jn,{view:0,detail:0}),Dd=Re(fr),Ho,$o,Ln,So=re({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Ho=e.screenX-Ln.screenX,$o=e.screenY-Ln.screenY):$o=Ho=0,Ln=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),ga=Re(So),Ad=re({},So,{dataTransfer:0}),Bd=Re(Ad),Ud=re({},fr,{relatedTarget:0}),Wo=Re(Ud),Hd=re({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Re(Hd),Wd=re({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vd=Re(Wd),Qd=re({},jn,{data:0}),va=Re(Qd),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yd[e])?!!t[e]:!1}function wi(){return Jd}var Xd=re({},fr,{key:function(e){if(e.key){var t=Gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Re(Xd),qd=re({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Re(qd),ef=re({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),tf=Re(ef),nf=re({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rf=Re(nf),of=re({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Re(of),af=[9,13,27,32],ki=at&&"CompositionEvent"in window,Bn=null;at&&"documentMode"in document&&(Bn=document.documentMode);var sf=at&&"TextEvent"in window&&!Bn,fu=at&&(!ki||Bn&&8<Bn&&11>=Bn),xa=" ",wa=!1;function pu(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function uf(e,t){switch(e){case"compositionend":return hu(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function cf(e,t){if(Zt)return e==="compositionend"||!ki&&pu(e,t)?(e=du(),Ar=yi=yt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!df[e.type]:t==="textarea"}function mu(e,t,n,r){Qs(r),t=no(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,qn=null;function ff(e){Eu(e,0)}function jo(e){var t=tn(e);if(As(t))return e}function pf(e,t){if(e==="change")return t}var gu=!1;if(at){var Vo;if(at){var Qo="oninput"in document;if(!Qo){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Qo=typeof Sa.oninput=="function"}Vo=Qo}else Vo=!1;gu=Vo&&(!document.documentMode||9<document.documentMode)}function ja(){Un&&(Un.detachEvent("onpropertychange",vu),qn=Un=null)}function vu(e){if(e.propertyName==="value"&&jo(qn)){var t=[];mu(t,qn,e,pi(e)),Js(ff,t)}}function hf(e,t,n){e==="focusin"?(ja(),Un=t,qn=n,Un.attachEvent("onpropertychange",vu)):e==="focusout"&&ja()}function mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(qn)}function gf(e,t){if(e==="click")return jo(t)}function vf(e,t){if(e==="input"||e==="change")return jo(t)}function yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:yf;function er(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function Si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(r!==null&&Si(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ca(n,l);var i=Ca(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wf=at&&"documentMode"in document&&11>=document.documentMode,qt=null,_l=null,Hn=null,Ll=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||qt==null||qt!==Yr(r)||(r=qt,"selectionStart"in r&&Si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&er(Hn,r)||(Hn=r,r=no(_l,"onSelect"),0<r.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Go={},wu={};at&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function No(e){if(Go[e])return Go[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return Go[e]=t[n];return e}var ku=No("animationend"),Su=No("animationiteration"),ju=No("animationstart"),Nu=No("transitionend"),Cu=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Cu.set(e,t),Qt(t,[e])}for(var Ko=0;Ko<ba.length;Ko++){var Yo=ba[Ko],kf=Yo.toLowerCase(),Sf=Yo[0].toUpperCase()+Yo.slice(1);Lt(kf,"on"+Sf)}Lt(ku,"onAnimationEnd");Lt(Su,"onAnimationIteration");Lt(ju,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Nu,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wd(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;za(o,s,d),l=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;za(o,s,d),l=u}}}if(Xr)throw e=Cl,Xr=!1,Cl=null,e}function X(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Jo(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,Rs.forEach(function(n){n!=="selectionchange"&&(jf.has(n)||Jo(n,!1,e),Jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Jo("selectionchange",!1,t))}}function bu(e,t,n,r){switch(cu(t)){case 1:var o=Fd;break;case 4:o=Od;break;default:o=vi}n=o.bind(null,t,n,e),o=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Ft(s),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Js(function(){var d=l,x=pi(n),h=[];e:{var f=Cu.get(e);if(f!==void 0){var y=xi,w=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":y=Zd;break;case"focusin":w="focus",y=Wo;break;case"focusout":w="blur",y=Wo;break;case"beforeblur":case"afterblur":y=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=tf;break;case ku:case Su:case ju:y=$d;break;case Nu:y=rf;break;case"scroll":y=Dd;break;case"wheel":y=lf;break;case"copy":case"cut":case"paste":y=Vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ya}var k=(t&4)!==0,D=!k&&e==="scroll",p=k?f!==null?f+"Capture":null:f;k=[];for(var c=d,m;c!==null;){m=c;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,p!==null&&(j=Yn(c,p),j!=null&&k.push(nr(c,j,m)))),D)break;c=c.return}0<k.length&&(f=new y(f,w,null,n,x),h.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Sl&&(w=n.relatedTarget||n.fromElement)&&(Ft(w)||w[st]))break e;if((y||f)&&(f=x.window===x?x:(f=x.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=d,w=w?Ft(w):null,w!==null&&(D=Gt(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=d),y!==w)){if(k=ga,j="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ya,j="onPointerLeave",p="onPointerEnter",c="pointer"),D=y==null?f:tn(y),m=w==null?f:tn(w),f=new k(j,c+"leave",y,n,x),f.target=D,f.relatedTarget=m,j=null,Ft(x)===d&&(k=new k(p,c+"enter",w,n,x),k.target=m,k.relatedTarget=D,j=k),D=j,y&&w)t:{for(k=y,p=w,c=0,m=k;m;m=Yt(m))c++;for(m=0,j=p;j;j=Yt(j))m++;for(;0<c-m;)k=Yt(k),c--;for(;0<m-c;)p=Yt(p),m--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Yt(k),p=Yt(p)}k=null}else k=null;y!==null&&_a(h,f,y,k,!1),w!==null&&D!==null&&_a(h,D,w,k,!0)}}e:{if(f=d?tn(d):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var E=pf;else if(ka(f))if(gu)E=vf;else{E=mf;var L=hf}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=gf);if(E&&(E=E(e,d))){mu(h,E,n,x);break e}L&&L(e,f,d),e==="focusout"&&(L=f._wrapperState)&&L.controlled&&f.type==="number"&&vl(f,"number",f.value)}switch(L=d?tn(d):window,e){case"focusin":(ka(L)||L.contentEditable==="true")&&(qt=L,_l=d,Hn=null);break;case"focusout":Hn=_l=qt=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Ea(h,n,x);break;case"selectionchange":if(wf)break;case"keydown":case"keyup":Ea(h,n,x)}var _;if(ki)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Zt?pu(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(fu&&n.locale!=="ko"&&(Zt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Zt&&(_=du()):(yt=x,yi="value"in yt?yt.value:yt.textContent,Zt=!0)),L=no(d,M),0<L.length&&(M=new va(M,e,null,n,x),h.push({event:M,listeners:L}),_?M.data=_:(_=hu(n),_!==null&&(M.data=_)))),(_=sf?uf(e,n):cf(e,n))&&(d=no(d,"onBeforeInput"),0<d.length&&(x=new va("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:d}),x.data=_))}Eu(h,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Yn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=Yn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Yn(n,l),u!=null&&i.unshift(nr(n,u,s))):o||(u=Yn(n,l),u!=null&&i.push(nr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Nf=/\r\n?/g,Cf=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(Cf,"")}function Cr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(C(425))}function ro(){}var Pl=null,Tl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(zf)}:Rl;function zf(e){setTimeout(function(){throw e})}function Zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ta(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Nn,rr="__reactProps$"+Nn,st="__reactContainer$"+Nn,Il="__reactEvents$"+Nn,_f="__reactListeners$"+Nn,Lf="__reactHandles$"+Nn;function Ft(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ta(e);e!==null;){if(n=e[Xe])return n;e=Ta(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Co(e){return e[rr]||null}var Fl=[],nn=-1;function Pt(e){return{current:e}}function Z(e){0>nn||(e.current=Fl[nn],Fl[nn]=null,nn--)}function Y(e,t){nn++,Fl[nn]=e.current,e.current=t}var _t={},xe=Pt(_t),Ee=Pt(!1),Ut=_t;function gn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function oo(){Z(Ee),Z(xe)}function Ma(e,t,n){if(xe.current!==_t)throw Error(C(168));Y(xe,t),Y(Ee,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,pd(e)||"Unknown",o));return re({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Ut=xe.current,Y(xe,e),Y(Ee,Ee.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=zu(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,Z(Ee),Z(xe),Y(xe,e)):Z(Ee),Y(Ee,n)}var rt=null,Eo=!1,qo=!1;function _u(e){rt===null?rt=[e]:rt.push(e)}function Pf(e){Eo=!0,_u(e)}function Tt(){if(!qo&&rt!==null){qo=!0;var e=0,t=G;try{var n=rt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Eo=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),eu(hi,Tt),o}finally{G=t,qo=!1}}return null}var rn=[],on=0,io=null,ao=0,Ie=[],Fe=0,Ht=null,ot=1,lt="";function Rt(e,t){rn[on++]=ao,rn[on++]=io,io=e,ao=t}function Lu(e,t,n){Ie[Fe++]=ot,Ie[Fe++]=lt,Ie[Fe++]=Ht,Ht=e;var r=ot;e=lt;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var l=32-Qe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ot=1<<32-Qe(t)+o|n<<o|r,lt=l+e}else ot=1<<l|n<<o|r,lt=e}function ji(e){e.return!==null&&(Rt(e,1),Lu(e,1,0))}function Ni(e){for(;e===io;)io=rn[--on],rn[on]=null,ao=rn[--on],rn[on]=null;for(;e===Ht;)Ht=Ie[--Fe],Ie[Fe]=null,lt=Ie[--Fe],Ie[Fe]=null,ot=Ie[--Fe],Ie[Fe]=null}var Pe=null,Le=null,ee=!1,Ve=null;function Pu(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Le=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Le=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(ee){var t=Le;if(t){var n=t;if(!Ia(e,t)){if(Ol(e))throw Error(C(418));t=jt(n.nextSibling);var r=Pe;t&&Ia(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,ee=!1,Pe=e)}}else{if(Ol(e))throw Error(C(418));e.flags=e.flags&-4097|2,ee=!1,Pe=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Er(e){if(e!==Pe)return!1;if(!ee)return Fa(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Le)){if(Ol(e))throw Tu(),Error(C(418));for(;t;)Pu(e,t),t=jt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Pe?jt(e.stateNode.nextSibling):null;return!0}function Tu(){for(var e=Le;e;)e=jt(e.nextSibling)}function vn(){Le=Pe=null,ee=!1}function Ci(e){Ve===null?Ve=[e]:Ve.push(e)}var Tf=dt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Mu(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=bt(p,c),p.index=0,p.sibling=null,p}function l(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,j){return c===null||c.tag!==6?(c=il(m,p.mode,j),c.return=p,c):(c=o(c,m),c.return=p,c)}function u(p,c,m,j){var E=m.type;return E===Xt?x(p,c,m.props.children,j,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Oa(E)===c.type)?(j=o(c,m.props),j.ref=Pn(p,c,m),j.return=p,j):(j=Gr(m.type,m.key,m.props,null,p.mode,j),j.ref=Pn(p,c,m),j.return=p,j)}function d(p,c,m,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=al(m,p.mode,j),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function x(p,c,m,j,E){return c===null||c.tag!==7?(c=Bt(m,p.mode,j,E),c.return=p,c):(c=o(c,m),c.return=p,c)}function h(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=il(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return m=Gr(c.type,c.key,c.props,null,p.mode,m),m.ref=Pn(p,null,c),m.return=p,m;case Jt:return c=al(c,p.mode,m),c.return=p,c;case ht:var j=c._init;return h(p,j(c._payload),m)}if(In(c)||En(c))return c=Bt(c,p.mode,m,null),c.return=p,c;br(p,c)}return null}function f(p,c,m,j){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:return m.key===E?u(p,c,m,j):null;case Jt:return m.key===E?d(p,c,m,j):null;case ht:return E=m._init,f(p,c,E(m._payload),j)}if(In(m)||En(m))return E!==null?null:x(p,c,m,j,null);br(p,m)}return null}function y(p,c,m,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(m)||null,s(c,p,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case gr:return p=p.get(j.key===null?m:j.key)||null,u(c,p,j,E);case Jt:return p=p.get(j.key===null?m:j.key)||null,d(c,p,j,E);case ht:var L=j._init;return y(p,c,m,L(j._payload),E)}if(In(j)||En(j))return p=p.get(m)||null,x(c,p,j,E,null);br(c,j)}return null}function w(p,c,m,j){for(var E=null,L=null,_=c,M=c=0,$=null;_!==null&&M<m.length;M++){_.index>M?($=_,_=null):$=_.sibling;var O=f(p,_,m[M],j);if(O===null){_===null&&(_=$);break}e&&_&&O.alternate===null&&t(p,_),c=l(O,c,M),L===null?E=O:L.sibling=O,L=O,_=$}if(M===m.length)return n(p,_),ee&&Rt(p,M),E;if(_===null){for(;M<m.length;M++)_=h(p,m[M],j),_!==null&&(c=l(_,c,M),L===null?E=_:L.sibling=_,L=_);return ee&&Rt(p,M),E}for(_=r(p,_);M<m.length;M++)$=y(_,p,M,m[M],j),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?M:$.key),c=l($,c,M),L===null?E=$:L.sibling=$,L=$);return e&&_.forEach(function(ie){return t(p,ie)}),ee&&Rt(p,M),E}function k(p,c,m,j){var E=En(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var L=E=null,_=c,M=c=0,$=null,O=m.next();_!==null&&!O.done;M++,O=m.next()){_.index>M?($=_,_=null):$=_.sibling;var ie=f(p,_,O.value,j);if(ie===null){_===null&&(_=$);break}e&&_&&ie.alternate===null&&t(p,_),c=l(ie,c,M),L===null?E=ie:L.sibling=ie,L=ie,_=$}if(O.done)return n(p,_),ee&&Rt(p,M),E;if(_===null){for(;!O.done;M++,O=m.next())O=h(p,O.value,j),O!==null&&(c=l(O,c,M),L===null?E=O:L.sibling=O,L=O);return ee&&Rt(p,M),E}for(_=r(p,_);!O.done;M++,O=m.next())O=y(_,p,M,O.value,j),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?M:O.key),c=l(O,c,M),L===null?E=O:L.sibling=O,L=O);return e&&_.forEach(function(P){return t(p,P)}),ee&&Rt(p,M),E}function D(p,c,m,j){if(typeof m=="object"&&m!==null&&m.type===Xt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:e:{for(var E=m.key,L=c;L!==null;){if(L.key===E){if(E=m.type,E===Xt){if(L.tag===7){n(p,L.sibling),c=o(L,m.props.children),c.return=p,p=c;break e}}else if(L.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Oa(E)===L.type){n(p,L.sibling),c=o(L,m.props),c.ref=Pn(p,L,m),c.return=p,p=c;break e}n(p,L);break}else t(p,L);L=L.sibling}m.type===Xt?(c=Bt(m.props.children,p.mode,j,m.key),c.return=p,p=c):(j=Gr(m.type,m.key,m.props,null,p.mode,j),j.ref=Pn(p,c,m),j.return=p,p=j)}return i(p);case Jt:e:{for(L=m.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=al(m,p.mode,j),c.return=p,p=c}return i(p);case ht:return L=m._init,D(p,c,L(m._payload),j)}if(In(m))return w(p,c,m,j);if(En(m))return k(p,c,m,j);br(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=il(m,p.mode,j),c.return=p,p=c),i(p)):n(p,c)}return D}var yn=Mu(!0),Ru=Mu(!1),so=Pt(null),uo=null,ln=null,Ei=null;function bi(){Ei=ln=uo=null}function zi(e){var t=so.current;Z(so),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){uo=e,Ei=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(uo===null)throw Error(C(308));ln=e,uo.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Ot=null;function _i(e){Ot===null?Ot=[e]:Ot.push(e)}function Iu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_i(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,_i(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function Ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mi(e,n)}}function Da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var o=e.updateQueue;mt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?l=d:i.next=d,i=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==i&&(s===null?x.firstBaseUpdate=d:s.next=d,x.lastBaseUpdate=u))}if(l!==null){var h=o.baseState;i=0,x=d=u=null,s=l;do{var f=s.lane,y=s.eventTime;if((r&f)===f){x!==null&&(x=x.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(f=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=re({},h,f);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(d=x=y,u=h):x=x.next=y,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(x===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=h}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var hr={},qe=Pt(hr),or=Pt(hr),lr=Pt(hr);function Dt(e){if(e===hr)throw Error(C(174));return e}function Pi(e,t){switch(Y(lr,t),Y(or,e),Y(qe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Z(qe),Y(qe,t)}function xn(){Z(qe),Z(or),Z(lr)}function Ou(e){Dt(lr.current);var t=Dt(qe.current),n=xl(t,e.type);t!==n&&(Y(or,e),Y(qe,n))}function Ti(e){or.current===e&&(Z(qe),Z(or))}var te=Pt(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Mi(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Hr=dt.ReactCurrentDispatcher,tl=dt.ReactCurrentBatchConfig,$t=0,ne=null,se=null,de=null,po=!1,$n=!1,ir=0,Mf=0;function ge(){throw Error(C(321))}function Ri(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Ii(e,t,n,r,o,l){if($t=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Of:Df,e=n(r,o),$n){l=0;do{if($n=!1,ir=0,25<=l)throw Error(C(301));l+=1,de=se=null,t.updateQueue=null,Hr.current=Af,e=n(r,o)}while($n)}if(Hr.current=ho,t=se!==null&&se.next!==null,$t=0,de=se=ne=null,po=!1,t)throw Error(C(300));return e}function Fi(){var e=ir!==0;return ir=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ne.memoizedState=de=e:de=de.next=e,de}function Be(){if(se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=de===null?ne.memoizedState:de.next;if(t!==null)de=t,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?ne.memoizedState=de=e:de=de.next=e}return de}function ar(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,u=null,d=l;do{var x=d.lane;if(($t&x)===x)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,ne.lanes|=x,Wt|=x}d=d.next}while(d!==null&&d!==l);u===null?i=r:u.next=s,Ke(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ne.lanes|=l,Wt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=Be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ke(l,t.memoizedState)||(Ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Du(){}function Au(e,t){var n=ne,r=Be(),o=t(),l=!Ke(r.memoizedState,o);if(l&&(r.memoizedState=o,Ce=!0),r=r.queue,Oi(Hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,sr(9,Uu.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(C(349));$t&30||Bu(n,t,o)}return o}function Bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Wu(e)}function Hu(e,t,n){return n(function(){$u(t)&&Wu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Wu(e){var t=ut(e,1);t!==null&&Ge(t,e,1,-1)}function Ba(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,ne,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vu(){return Be().memoizedState}function $r(e,t,n,r){var o=Je();ne.flags|=e,o.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var o=Be();r=r===void 0?null:r;var l=void 0;if(se!==null){var i=se.memoizedState;if(l=i.destroy,r!==null&&Ri(r,i.deps)){o.memoizedState=sr(t,n,l,r);return}}ne.flags|=e,o.memoizedState=sr(1|t,n,l,r)}function Ua(e,t){return $r(8390656,8,e,t)}function Oi(e,t){return bo(2048,8,e,t)}function Qu(e,t){return bo(4,2,e,t)}function Gu(e,t){return bo(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,Ku.bind(null,t,e),n)}function Di(){}function Ju(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ri(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ri(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zu(e,t,n){return $t&21?(Ke(n,t)||(n=ru(),ne.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Rf(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{G=n,tl.transition=r}}function qu(){return Be().memoizedState}function If(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=Iu(e,t,n,r),n!==null){var o=ke();Ge(n,e,r,o),nc(n,t,r)}}function Ff(e,t,n){var r=Et(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,i)){var u=t.interleaved;u===null?(o.next=o,_i(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Iu(e,t,o,r),n!==null&&(o=ke(),Ge(n,e,r,o),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function tc(e,t){$n=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mi(e,n)}}var ho={readContext:Ae,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Of={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ua,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=If.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:Di,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=Rf.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=Je();if(ee){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));$t&30||Bu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ua(Hu.bind(null,r,l,e),[e]),r.flags|=2048,sr(9,Uu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=fe.identifierPrefix;if(ee){var n=lt,r=ot;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Df={readContext:Ae,useCallback:Ju,useContext:Ae,useEffect:Oi,useImperativeHandle:Yu,useInsertionEffect:Qu,useLayoutEffect:Gu,useMemo:Xu,useReducer:nl,useRef:Vu,useState:function(){return nl(ar)},useDebugValue:Di,useDeferredValue:function(e){var t=Be();return Zu(t,se.memoizedState,e)},useTransition:function(){var e=nl(ar)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Du,useSyncExternalStore:Au,useId:qu,unstable_isNewReconciler:!1},Af={readContext:Ae,useCallback:Ju,useContext:Ae,useEffect:Oi,useImperativeHandle:Yu,useInsertionEffect:Qu,useLayoutEffect:Gu,useMemo:Xu,useReducer:rl,useRef:Vu,useState:function(){return rl(ar)},useDebugValue:Di,useDeferredValue:function(e){var t=Be();return se===null?t.memoizedState=e:Zu(t,se.memoizedState,e)},useTransition:function(){var e=rl(ar)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Du,useSyncExternalStore:Au,useId:qu,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),l=it(r,o);l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ge(t,e,o,r),Ur(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Et(e),l=it(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ge(t,e,o,r),Ur(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Et(e),o=it(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Ge(t,e,r,n),Ur(t,e,r))}};function Ha(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,l):!0}function rc(e,t,n){var r=!1,o=_t,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(o=be(t)?Ut:xe.current,r=t.contextTypes,l=(r=r!=null)?gn(e,o):_t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Li(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ae(l):(l=be(t)?Ut:xe.current,o.context=gn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Bl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),co(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=fd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bf=typeof WeakMap=="function"?WeakMap:Map;function oc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,Zl=r),Hl(e,t)},n}function lc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ep.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Uf=dt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Ru(t,null,n,r):yn(t,e.child,n,r)}function Ga(e,t,n,r,o){n=n.render;var l=t.ref;return pn(t,o),r=Ii(e,t,n,r,l,o),n=Fi(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(ee&&n&&ji(t),t.flags|=1,we(e,t,r,o),t.child)}function Ka(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Qi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ic(e,t,l,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ct(e,t,o)}return $l(e,t,n,r,o)}function ac(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(sn,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(sn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(sn,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(sn,_e),_e|=r;return we(e,t,o,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $l(e,t,n,r,o){var l=be(n)?Ut:xe.current;return l=gn(t,l),pn(t,o),n=Ii(e,t,n,r,l,o),r=Fi(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(ee&&r&&ji(t),t.flags|=1,we(e,t,n,o),t.child)}function Ya(e,t,n,r,o){if(be(n)){var l=!0;lo(t)}else l=!1;if(pn(t,o),t.stateNode===null)Wr(e,t),rc(t,n,r),Ul(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=be(n)?Ut:xe.current,d=gn(t,d));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&$a(t,i,r,d),mt=!1;var f=t.memoizedState;i.state=f,co(t,r,i,o),u=t.memoizedState,s!==r||f!==u||Ee.current||mt?(typeof x=="function"&&(Bl(t,n,x,r),u=t.memoizedState),(s=mt||Ha(t,n,s,r,f,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:$e(t.type,s),i.props=d,h=t.pendingProps,f=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=be(n)?Ut:xe.current,u=gn(t,u));var y=n.getDerivedStateFromProps;(x=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||f!==u)&&$a(t,i,r,u),mt=!1,f=t.memoizedState,i.state=f,co(t,r,i,o);var w=t.memoizedState;s!==h||f!==w||Ee.current||mt?(typeof y=="function"&&(Bl(t,n,y,r),w=t.memoizedState),(d=mt||Ha(t,n,d,r,f,w,u)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,l,o)}function Wl(e,t,n,r,o,l){sc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ra(t,n,!1),ct(e,t,l);r=t.stateNode,Uf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=yn(t,e.child,null,l),t.child=yn(t,null,s,l)):we(e,t,s,l),t.memoizedState=r.state,o&&Ra(t,n,!0),t.child}function uc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Pi(e,t.containerInfo)}function Ja(e,t,n,r,o){return vn(),Ci(o),t.flags|=256,we(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var r=t.pendingProps,o=te.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(te,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Po(i,r,0,null),e=Bt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ql(n),t.memoizedState=Vl,e):Ai(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Hf(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=bt(s,l):(l=Bt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ql(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ai(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&Ci(r),yn(t,e.child,null,n),e=Ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(C(422))),zr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=Bt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&yn(t,e.child,null,i),t.child.memoizedState=Ql(i),t.memoizedState=Vl,l);if(!(t.mode&1))return zr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(C(419)),r=ol(l,r,void 0),zr(e,t,i,r)}if(s=(i&e.childLanes)!==0,Ce||s){if(r=fe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ut(e,o),Ge(r,e,o,-1))}return Vi(),r=ol(Error(C(421))),zr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Le=jt(o.nextSibling),Pe=t,ee=!0,Ve=null,e!==null&&(Ie[Fe++]=ot,Ie[Fe++]=lt,Ie[Fe++]=Ht,ot=e.id,lt=e.overflow,Ht=t),t=Ai(t,r.children),t.flags|=4096,t)}function Xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function ll(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function dc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(we(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n,t);else if(e.tag===19)Xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,l);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $f(e,t,n){switch(t.tag){case 3:uc(t),vn();break;case 5:Ou(t);break;case 1:be(t.type)&&lo(t);break;case 4:Pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):(Y(te,te.current&1),e=ct(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return ct(e,t,n)}var fc,Gl,pc,hc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};pc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(qe.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),r=yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}wl(n,r);var i;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&X("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wf(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return be(t.type)&&oo(),ve(t),null;case 3:return r=t.stateNode,xn(),Z(Ee),Z(xe),Mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(ti(Ve),Ve=null))),Gl(e,t),ve(t),null;case 5:Ti(t);var o=Dt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=Dt(qe.current),Er(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Xe]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<On.length;o++)X(On[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":ia(r,l),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},X("invalid",r);break;case"textarea":sa(r,l),X("invalid",r)}wl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),o=["children",""+s]):Gn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&X("scroll",r)}switch(n){case"input":vr(r),aa(r,l,!0);break;case"textarea":vr(r),ua(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Xe]=t,e[rr]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(i=kl(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<On.length;o++)X(On[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":ia(e,r),o=ml(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":sa(e,r),o=yl(e,r),X("invalid",e);break;default:o=r}wl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Vs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$s(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&X("scroll",e):u!=null&&ui(e,l,u,i))}switch(n){case"input":vr(e),aa(e,r,!1);break;case"textarea":vr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Dt(lr.current),Dt(qe.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(l=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return ve(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Le!==null&&t.mode&1&&!(t.flags&128))Tu(),vn(),t.flags|=98560,l=!1;else if(l=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[Xe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),l=!1}else Ve!==null&&(ti(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ue===0&&(ue=3):Vi())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return xn(),Gl(e,t),e===null&&tr(t.stateNode.containerInfo),ve(t),null;case 10:return zi(t.type._context),ve(t),null;case 17:return be(t.type)&&oo(),ve(t),null;case 19:if(Z(te),l=t.memoizedState,l===null)return ve(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Tn(l,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=fo(e),i!==null){for(t.flags|=128,Tn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}l.tail!==null&&le()>kn&&(t.flags|=128,r=!0,Tn(l,!1),t.lanes=4194304)}else{if(!r)if(e=fo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ee)return ve(t),null}else 2*le()-l.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=le(),t.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Wi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Vf(e,t){switch(Ni(t),t.tag){case 1:return be(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),Z(Ee),Z(xe),Mi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ti(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return xn(),null;case 10:return zi(t.type._context),null;case 22:case 23:return Wi(),null;case 24:return null;default:return null}}var _r=!1,ye=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,T=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Za=!1;function Gf(e,t){if(Pl=eo,e=xu(),Si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,x=0,h=e,f=null;t:for(;;){for(var y;h!==n||o!==0&&h.nodeType!==3||(s=i+o),h!==l||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++d===o&&(s=i),f===l&&++x===r&&(u=i),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},eo=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,D=w.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:$e(t.type,k),D);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(j){oe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Za,Za=!1,w}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Kl(t,n,l)}o=o.next}while(o!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mc(e){var t=e.alternate;t!==null&&(e.alternate=null,mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[rr],delete t[Il],delete t[_f],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var pe=null,We=!1;function pt(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:ye||an(n,t);case 6:var r=pe,o=We;pe=null,pt(e,t,n),pe=r,We=o,pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),Zn(e)):Zo(pe,n.stateNode));break;case 4:r=pe,o=We,pe=n.stateNode.containerInfo,We=!0,pt(e,t,n),pe=r,We=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Kl(n,t,i),o=o.next}while(o!==r)}pt(e,t,n);break;case 1:if(!ye&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,pt(e,t,n),ye=r):pt(e,t,n);break;default:pt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qf),t.forEach(function(r){var o=np.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,We=!1;break e;case 3:pe=s.stateNode.containerInfo,We=!0;break e;case 4:pe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(pe===null)throw Error(C(160));vc(l,i,o),pe=null,We=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){oe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),r&4){try{Wn(3,e,e.return),_o(3,e)}catch(k){oe(e,e.return,k)}try{Wn(5,e,e.return)}catch(k){oe(e,e.return,k)}}break;case 1:Ue(t,e),Ye(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Ue(t,e),Ye(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{Kn(o,"")}catch(k){oe(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Bs(o,l),kl(s,i);var d=kl(s,l);for(i=0;i<u.length;i+=2){var x=u[i],h=u[i+1];x==="style"?Vs(o,h):x==="dangerouslySetInnerHTML"?$s(o,h):x==="children"?Kn(o,h):ui(o,x,h,d)}switch(s){case"input":gl(o,l);break;case"textarea":Us(o,l);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?un(o,!!l.multiple,y,!1):f!==!!l.multiple&&(l.defaultValue!=null?un(o,!!l.multiple,l.defaultValue,!0):un(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(k){oe(e,e.return,k)}}break;case 6:if(Ue(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){oe(e,e.return,k)}}break;case 3:if(Ue(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(k){oe(e,e.return,k)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Hi=le())),r&4&&es(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||x,Ue(t,e),ye=d):Ue(t,e),Ye(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(T=e,x=e.child;x!==null;){for(h=T=x;T!==null;){switch(f=T,y=f.child,f.tag){case 0:case 11:case 14:case 15:Wn(4,f,f.return);break;case 1:an(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){oe(r,n,k)}}break;case 5:an(f,f.return);break;case 22:if(f.memoizedState!==null){ns(h);continue}}y!==null?(y.return=f,T=y):ns(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{o=h.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ws("display",i))}catch(k){oe(e,e.return,k)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){oe(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ye(e),r&4&&es(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kn(o,""),r.flags&=-33);var l=qa(e);Xl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=qa(e);Jl(e,s,i);break;default:throw Error(C(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){T=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||_r;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=_r;var d=ye;if(_r=i,(ye=u)&&!d)for(T=o;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?rs(o):u!==null?(u.return=i,T=u):rs(o);for(;l!==null;)T=l,xc(l),l=l.sibling;T=o,_r=s,ye=d}ts(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):ts(e)}}function ts(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Aa(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&Yl(t)}catch(f){oe(t,t.return,f)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ns(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function rs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var l=t.return;try{Yl(t)}catch(u){oe(t,l,u)}break;case 5:var i=t.return;try{Yl(t)}catch(u){oe(t,i,u)}}}catch(u){oe(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Yf=Math.ceil,mo=dt.ReactCurrentDispatcher,Bi=dt.ReactCurrentOwner,De=dt.ReactCurrentBatchConfig,Q=0,fe=null,ae=null,he=0,_e=0,sn=Pt(0),ue=0,ur=null,Wt=0,Lo=0,Ui=0,Vn=null,Ne=null,Hi=0,kn=1/0,nt=null,go=!1,Zl=null,Ct=null,Lr=!1,xt=null,vo=0,Qn=0,ql=null,Vr=-1,Qr=0;function ke(){return Q&6?le():Vr!==-1?Vr:Vr=le()}function Et(e){return e.mode&1?Q&2&&he!==0?he&-he:Tf.transition!==null?(Qr===0&&(Qr=ru()),Qr):(e=G,e!==0||(e=window.event,e=e===void 0?16:cu(e.type)),e):1}function Ge(e,t,n,r){if(50<Qn)throw Qn=0,ql=null,Error(C(185));dr(e,n,r),(!(Q&2)||e!==fe)&&(e===fe&&(!(Q&2)&&(Lo|=n),ue===4&&vt(e,he)),ze(e,r),n===1&&Q===0&&!(t.mode&1)&&(kn=le()+500,Eo&&Tt()))}function ze(e,t){var n=e.callbackNode;Pd(e,t);var r=qr(e,e===fe?he:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Pf(os.bind(null,e)):_u(os.bind(null,e)),bf(function(){!(Q&6)&&Tt()}),n=null;else{switch(ou(r)){case 1:n=hi;break;case 4:n=tu;break;case 16:n=Zr;break;case 536870912:n=nu;break;default:n=Zr}n=bc(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Vr=-1,Qr=0,Q&6)throw Error(C(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=qr(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var o=Q;Q|=2;var l=Sc();(fe!==e||he!==t)&&(nt=null,kn=le()+500,At(e,t));do try{Zf();break}catch(s){kc(e,s)}while(!0);bi(),mo.current=l,Q=o,ae!==null?t=0:(fe=null,he=0,t=ue)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=ei(e,o))),t===1)throw n=ur,At(e,0),vt(e,r),ze(e,le()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Jf(o)&&(t=yo(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=ei(e,l))),t===1))throw n=ur,At(e,0),vt(e,r),ze(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:It(e,Ne,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Hi+500-le(),10<t)){if(qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(It.bind(null,e,Ne,nt),t);break}It(e,Ne,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Qe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yf(r/1960))-r,10<r){e.timeoutHandle=Rl(It.bind(null,e,Ne,nt),r);break}It(e,Ne,nt);break;case 5:It(e,Ne,nt);break;default:throw Error(C(329))}}}return ze(e,le()),e.callbackNode===n?wc.bind(null,e):null}function ei(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=yo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&ti(t)),e}function ti(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ke(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ui,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(Q&6)throw Error(C(327));hn();var t=qr(e,0);if(!(t&1))return ze(e,le()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ei(e,r))}if(n===1)throw n=ur,At(e,0),vt(e,t),ze(e,le()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,Ne,nt),ze(e,le()),null}function $i(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(kn=le()+500,Eo&&Tt())}}function Vt(e){xt!==null&&xt.tag===0&&!(Q&6)&&hn();var t=Q;Q|=1;var n=De.transition,r=G;try{if(De.transition=null,G=1,e)return e()}finally{G=r,De.transition=n,Q=t,!(Q&6)&&Tt()}}function Wi(){_e=sn.current,Z(sn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ef(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:xn(),Z(Ee),Z(xe),Mi();break;case 5:Ti(r);break;case 4:xn();break;case 13:Z(te);break;case 19:Z(te);break;case 10:zi(r.type._context);break;case 22:case 23:Wi()}n=n.return}if(fe=e,ae=e=bt(e.current,null),he=_e=t,ue=0,ur=null,Ui=Lo=Wt=0,Ne=Vn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Ot=null}return e}function kc(e,t){do{var n=ae;try{if(bi(),Hr.current=ho,po){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}po=!1}if($t=0,de=se=ne=null,$n=!1,ir=0,Bi.current=null,n===null||n.return===null){ue=1,ur=t,ae=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,x=s,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var f=x.alternate;f?(x.updateQueue=f.updateQueue,x.memoizedState=f.memoizedState,x.lanes=f.lanes):(x.updateQueue=null,x.memoizedState=null)}var y=Va(i);if(y!==null){y.flags&=-257,Qa(y,i,s,l,t),y.mode&1&&Wa(l,d,t),t=y,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){Wa(l,d,t),Vi();break e}u=Error(C(426))}}else if(ee&&s.mode&1){var D=Va(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Qa(D,i,s,l,t),Ci(wn(u,s));break e}}l=u=wn(u,s),ue!==4&&(ue=2),Vn===null?Vn=[l]:Vn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=oc(l,u,t);Da(l,p);break e;case 1:s=u;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ct===null||!Ct.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var j=lc(l,s,t);Da(l,j);break e}}l=l.return}while(l!==null)}Nc(n)}catch(E){t=E,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Sc(){var e=mo.current;return mo.current=ho,e===null?ho:e}function Vi(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(Wt&268435455)&&!(Lo&268435455)||vt(fe,he)}function yo(e,t){var n=Q;Q|=2;var r=Sc();(fe!==e||he!==t)&&(nt=null,At(e,t));do try{Xf();break}catch(o){kc(e,o)}while(!0);if(bi(),Q=n,mo.current=r,ae!==null)throw Error(C(261));return fe=null,he=0,ue}function Xf(){for(;ae!==null;)jc(ae)}function Zf(){for(;ae!==null&&!Sd();)jc(ae)}function jc(e){var t=Ec(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Nc(e):ae=t,Bi.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vf(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ae=null;return}}else if(n=Wf(n,t,_e),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ue===0&&(ue=5)}function It(e,t,n){var r=G,o=De.transition;try{De.transition=null,G=1,qf(e,t,n,r)}finally{De.transition=o,G=r}return null}function qf(e,t,n,r){do hn();while(xt!==null);if(Q&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Td(e,l),e===fe&&(ae=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,bc(Zr,function(){return hn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=G;G=1;var s=Q;Q|=4,Bi.current=null,Gf(e,n),yc(n,e),xf(Tl),eo=!!Pl,Tl=Pl=null,e.current=n,Kf(n),jd(),Q=s,G=i,De.transition=l}else e.current=n;if(Lr&&(Lr=!1,xt=e,vo=o),l=e.pendingLanes,l===0&&(Ct=null),Ed(n.stateNode),ze(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(go)throw go=!1,e=Zl,Zl=null,e;return vo&1&&e.tag!==0&&hn(),l=e.pendingLanes,l&1?e===ql?Qn++:(Qn=0,ql=e):Qn=0,Tt(),null}function hn(){if(xt!==null){var e=ou(vo),t=De.transition,n=G;try{if(De.transition=null,G=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,vo=0,Q&6)throw Error(C(331));var o=Q;for(Q|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var x=T;switch(x.tag){case 0:case 11:case 15:Wn(8,x,l)}var h=x.child;if(h!==null)h.return=x,T=h;else for(;T!==null;){x=T;var f=x.sibling,y=x.return;if(mc(x),x===d){T=null;break}if(f!==null){f.return=y,T=f;break}T=y}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,T=p;break e}T=l.return}}var c=e.current;for(T=c;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(E){oe(s,s.return,E)}if(s===i){T=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,T=j;break e}T=s.return}}if(Q=o,Tt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{G=n,De.transition=t}}return!1}function ls(e,t,n){t=wn(n,t),t=oc(e,t,1),e=Nt(e,t,1),t=ke(),e!==null&&(dr(e,1,t),ze(e,t))}function oe(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=wn(n,e),e=lc(t,e,1),t=Nt(t,e,1),e=ke(),t!==null&&(dr(t,1,e),ze(t,e));break}}t=t.return}}function ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ue===4||ue===3&&(he&130023424)===he&&500>le()-Hi?At(e,0):Ui|=n),ze(e,t)}function Cc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ke();e=ut(e,t),e!==null&&(dr(e,t,n),ze(e,n))}function tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cc(e,n)}function np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Cc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,$f(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,ee&&t.flags&1048576&&Lu(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var o=gn(t,xe.current);pn(t,n),o=Ii(null,t,r,e,o,n);var l=Fi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(l=!0,lo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Li(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,Ul(t,r,e,n),t=Wl(null,t,r,!0,l,n)):(t.tag=0,ee&&l&&ji(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=op(r),e=$e(r,e),o){case 0:t=$l(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,$e(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),$l(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ya(e,t,r,o,n);case 3:e:{if(uc(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Fu(e,t),co(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=wn(Error(C(423)),t),t=Ja(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(C(424)),t),t=Ja(e,t,r,n,o);break e}else for(Le=jt(t.stateNode.containerInfo.firstChild),Pe=t,ee=!0,Ve=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ct(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ml(r,o)?i=null:l!==null&&Ml(r,l)&&(t.flags|=32),sc(e,t),we(e,t,i,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return cc(e,t,n);case 4:return Pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ga(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,Y(so,r._currentValue),r._currentValue=i,l!==null)if(Ke(l.value,i)){if(l.children===o.children&&!Ee.current){t=ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=it(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?u.next=u:(u.next=x.next,x.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Al(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Al(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pn(t,n),o=Ae(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=$e(r,t.pendingProps),o=$e(r.type,o),Ka(e,t,r,o,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Wr(e,t),t.tag=1,be(r)?(e=!0,lo(t)):e=!1,pn(t,n),rc(t,r,o),Ul(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ac(e,t,n)}throw Error(C(156,t.tag))};function bc(e,t){return eu(e,t)}function rp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new rp(e,t,n,r)}function Qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function op(e){if(typeof e=="function")return Qi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===di)return 11;if(e===fi)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Qi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return Bt(n.children,o,l,t);case ci:i=8,o|=8;break;case dl:return e=Oe(12,n,t,o|2),e.elementType=dl,e.lanes=l,e;case fl:return e=Oe(13,n,t,o),e.elementType=fl,e.lanes=l,e;case pl:return e=Oe(19,n,t,o),e.elementType=pl,e.lanes=l,e;case Os:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Is:i=10;break e;case Fs:i=9;break e;case di:i=11;break e;case fi:i=14;break e;case ht:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Oe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Bt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Os,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gi(e,t,n,r,o,l,i,s,u){return e=new lp(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Oe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(l),e}function ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return _t;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(be(n))return zu(e,n,t)}return t}function _c(e,t,n,r,o,l,i,s,u){return e=Gi(n,r,!0,e,o,l,i,s,u),e.context=zc(null),n=e.current,r=ke(),o=Et(n),l=it(r,o),l.callback=t??null,Nt(n,l,o),e.current.lanes=o,dr(e,o,r),ze(e,r),e}function To(e,t,n,r){var o=t.current,l=ke(),i=Et(o);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,i),e!==null&&(Ge(e,o,i,l),Ur(e,o,i)),i}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ki(e,t){is(e,t),(e=e.alternate)&&is(e,t)}function ap(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yi(e){this._internalRoot=e}Mo.prototype.render=Yi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));To(e,t,null,null)};Mo.prototype.unmount=Yi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){To(null,e,null,null)}),t[st]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&uu(e)}};function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function sp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=xo(i);l.call(d)}}var i=_c(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=i,e[st]=i.current,tr(e.nodeType===8?e.parentNode:e),Vt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=xo(u);s.call(d)}}var u=Gi(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[st]=u.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){To(t,u,n,r)}),u}function Io(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var u=xo(i);s.call(u)}}To(t,i,e,o)}else i=sp(n,t,e,o,r);return xo(i)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(mi(t,n|1),ze(t,le()),!(Q&6)&&(kn=le()+500,Tt()))}break;case 13:Vt(function(){var r=ut(e,1);if(r!==null){var o=ke();Ge(r,e,1,o)}}),Ki(e,1)}};gi=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ke();Ge(t,e,134217728,n)}Ki(e,134217728)}};iu=function(e){if(e.tag===13){var t=Et(e),n=ut(e,t);if(n!==null){var r=ke();Ge(n,e,t,r)}Ki(e,t)}};au=function(){return G};su=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};jl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Co(r);if(!o)throw Error(C(90));As(r),gl(r,o)}}}break;case"textarea":Us(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Ks=$i;Ys=Vt;var up={usingClientEntryPoint:!1,Events:[pr,tn,Co,Qs,Gs,$i]},Mn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cp={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ko=Pr.inject(cp),Ze=Pr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ji(t))throw Error(C(200));return ip(e,t,null,n)};Me.createRoot=function(e,t){if(!Ji(e))throw Error(C(299));var n=!1,r="",o=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gi(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,tr(e.nodeType===8?e.parentNode:e),new Yi(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Zs(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Vt(e)};Me.hydrate=function(e,t,n){if(!Ro(t))throw Error(C(200));return Io(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Ji(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=_c(t,null,e,1,n??null,o,!1,l,i),e[st]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Mo(t)};Me.render=function(e,t,n){if(!Ro(t))throw Error(C(200));return Io(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(C(40));return e._reactRootContainer?(Vt(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Me.unstable_batchedUpdates=$i;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Io(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Me;var dp=Ps.exports,ss=dp;ul.createRoot=ss.createRoot,ul.hydrateRoot=ss.hydrateRoot;const fp=({onLogin:e})=>{const[t,n]=F.useState(!0),[r,o]=F.useState(""),[l,i]=F.useState(""),[s,u]=F.useState(""),[d,x]=F.useState(!1),[h,f]=F.useState(!1),y=w=>{if(w.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(l.length<6){u("Password must be at least 6 characters long.");return}x(!0),setTimeout(()=>{const k=JSON.parse(localStorage.getItem("bloodfit_users")||"{}");t?k[r]&&k[r].password===l?e({email:r,name:r.split("@")[0]}):(u("Invalid email or password. Please try again."),x(!1)):k[r]?(u("User with this email already exists. Please login."),x(!1)):(k[r]={password:l},localStorage.setItem("bloodfit_users",JSON.stringify(k)),e({email:r,name:r.split("@")[0]}))},1e3)};return a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"login-card fade-in",children:[a.jsxs("div",{className:"logo-section",children:[a.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),a.jsx("h1",{children:"Blood & Fit"}),a.jsx("p",{children:"Your personal health companion"})]}),a.jsxs("form",{onSubmit:y,className:"login-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:w=>o(w.target.value),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"password-wrapper",children:[a.jsx("input",{type:h?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:l,onChange:w=>i(w.target.value),required:!0}),a.jsx("button",{type:"button",className:"toggle-password",onClick:()=>f(!h),children:h?"Hide":"Show"})]})]}),s&&a.jsx("div",{className:"error-box fade-in",children:a.jsxs("span",{children:["⚠️ ",s]})}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?a.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),a.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",a.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),a.jsx("style",{children:`
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
           background: var(--color-surface);
           padding: var(--spacing-xl);
           border-radius: var(--radius-lg);
           box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
           text-align: center;
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
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})},pp=({onComplete:e})=>{const[t,n]=F.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=i=>{const{name:s,value:u}=i.target;n(d=>({...d,[s]:u}))},o=(i,s)=>Math.round(parseInt(i||0)*30.48+parseInt(s||0)*2.54),l=i=>{if(i.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||o(t.heightFt,t.heightIn)};e(s)};return a.jsxs("div",{className:"profile-container fade-in",children:[a.jsxs("div",{className:"card profile-card",children:[a.jsxs("div",{className:"header",children:[a.jsx("h2",{children:"Let's know you better"}),a.jsx("p",{children:"Enter your details for personalized health insights."})]}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Age"}),a.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"}),a.jsx("option",{value:"other",children:"Other"})]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Weight (kg)"}),a.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),a.jsxs("div",{className:"height-section",children:[a.jsx("label",{children:"Height"}),a.jsx("div",{className:"tabs"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"CM"}),a.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),a.jsx("div",{className:"or-divider",children:"OR"}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Feet"}),a.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Inches"}),a.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),a.jsx("style",{children:`
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
 */var hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(e,t)=>{const n=F.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:s="",children:u,...d},x)=>F.createElement("svg",{ref:x,...hp,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${mp(e)}`,s].join(" "),...d},[...t.map(([h,f])=>F.createElement(h,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=K("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=K("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=K("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=K("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=K("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=K("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=K("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
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
 */const Sp=K("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=K("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=K("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=K("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
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
 */const fs=K("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=K("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
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
 */const Mc=K("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=K("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
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
 */const Rp=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ip=({user:e,onClose:t,onLogout:n})=>{const[r,o]=F.useState("details"),[l,i]=F.useState(!1),[s,u]=F.useState({name:e.name||"",age:e.age||"",gender:e.gender||"Male",height:e.height||"",weight:e.weight||"",bloodGroup:e.bloodGroup||"",diseases:e.diseases||"",allergies:e.allergies||"",notes:e.notes||""}),[d,x]=F.useState([]);F.useEffect(()=>{const w=localStorage.getItem(`profile_${e.email}`);w&&u({...s,...JSON.parse(w)});const k=JSON.parse(localStorage.getItem("blood_reports")||"[]");x(k)},[e.email]);const h=()=>{localStorage.setItem(`profile_${e.email}`,JSON.stringify(s)),i(!1),alert("Profile saved successfully!")},y=(()=>{if(!s.height||!s.weight)return null;const w=s.height/100;return(s.weight/(w*w)).toFixed(1)})();return a.jsxs("div",{className:"profile-dashboard fixed-fullscreen",children:[a.jsxs("div",{className:"profile-header",children:[a.jsx("button",{onClick:t,className:"p-back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h3",{children:"My Profile"}),a.jsx("button",{onClick:n,className:"p-logout",children:"Logout"})]}),a.jsxs("div",{className:"p-hero",children:[a.jsx("div",{className:"p-avatar",children:a.jsx(Rc,{size:40,color:"white"})}),a.jsx("h2",{children:s.name||"User"}),a.jsxs("div",{className:"p-badges",children:[y&&a.jsxs("span",{className:"p-badge",children:["BMI: ",y]}),s.bloodGroup&&a.jsx("span",{className:"p-badge red",children:s.bloodGroup})]})]}),a.jsxs("div",{className:"p-tabs",children:[a.jsx("button",{className:`p-tab ${r==="details"?"active":""}`,onClick:()=>o("details"),children:"Details"}),a.jsx("button",{className:`p-tab ${r==="health"?"active":""}`,onClick:()=>o("health"),children:"Health"}),a.jsx("button",{className:`p-tab ${r==="reports"?"active":""}`,onClick:()=>o("reports"),children:"Reports"})]}),a.jsxs("div",{className:"p-content",children:[r==="details"&&a.jsxs("div",{className:"tab-pane fade-in",children:[a.jsxs("div",{className:"pane-header",children:[a.jsx("h4",{children:"Personal Details"}),a.jsx("button",{className:"edit-toggle",onClick:()=>i(!l),children:l?"Cancel":"Edit"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Age"}),a.jsx("input",{type:"number",disabled:!l,value:s.age,onChange:w=>u({...s,age:w.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{disabled:!l,value:s.gender,onChange:w=>u({...s,gender:w.target.value}),children:[a.jsx("option",{children:"Male"}),a.jsx("option",{children:"Female"}),a.jsx("option",{children:"Other"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Height (cm)"}),a.jsx("input",{type:"number",disabled:!l,value:s.height,onChange:w=>u({...s,height:w.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Weight (kg)"}),a.jsx("input",{type:"number",disabled:!l,value:s.weight,onChange:w=>u({...s,weight:w.target.value})})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Blood Group"}),a.jsxs("select",{disabled:!l,value:s.bloodGroup,onChange:w=>u({...s,bloodGroup:w.target.value}),children:[a.jsx("option",{value:"",children:"Select"}),a.jsx("option",{children:"A+"}),a.jsx("option",{children:"A-"}),a.jsx("option",{children:"B+"}),a.jsx("option",{children:"B-"}),a.jsx("option",{children:"O+"}),a.jsx("option",{children:"O-"}),a.jsx("option",{children:"AB+"}),a.jsx("option",{children:"AB-"})]})]})]}),l&&a.jsxs("button",{className:"save-btn",onClick:h,children:[a.jsx(fs,{size:18})," Save Changes"]})]}),r==="health"&&a.jsxs("div",{className:"tab-pane fade-in",children:[a.jsxs("div",{className:"pane-header",children:[a.jsx("h4",{children:"Health Profile"}),!l&&a.jsx("button",{className:"edit-toggle",onClick:()=>i(!0),children:"Edit"})]}),a.jsxs("div",{className:"health-form",children:[a.jsx("label",{children:"Existing Conditions (Diseases)"}),a.jsx("textarea",{disabled:!l,placeholder:"e.g. Diabetes, Hypertension...",value:s.diseases,onChange:w=>u({...s,diseases:w.target.value})}),a.jsx("label",{children:"Allergies"}),a.jsx("textarea",{disabled:!l,placeholder:"e.g. Peanuts, Penicillin...",value:s.allergies,onChange:w=>u({...s,allergies:w.target.value})}),a.jsx("label",{children:"About Me / Notes"}),a.jsx("textarea",{className:"large-text",disabled:!l,placeholder:"Write your fitness goals here...",value:s.notes,onChange:w=>u({...s,notes:w.target.value})})]}),l&&a.jsxs("button",{className:"save-btn",onClick:h,children:[a.jsx(fs,{size:18})," Save Health Data"]}),a.jsxs("div",{className:"milestones-preview",children:[a.jsx("h5",{children:"Milestones"}),a.jsxs("div",{className:"milestone-badges",children:[a.jsx("span",{className:"m-badge",children:"🏆 7 Day Streak"}),a.jsx("span",{className:"m-badge",children:"💧 Hydrated"})]})]})]}),r==="reports"&&a.jsxs("div",{className:"tab-pane fade-in",children:[a.jsx("h4",{children:"Recent Blood Reports"}),d.length===0?a.jsx("p",{className:"empty-state",children:"No reports uploaded yet."}):a.jsx("div",{className:"reports-list",children:d.map((w,k)=>a.jsxs("div",{className:"report-item",children:[a.jsx("div",{className:"r-icon",children:a.jsx(Xi,{size:20})}),a.jsxs("div",{className:"r-info",children:[a.jsx("span",{className:"r-date",children:w.date}),a.jsxs("span",{className:"r-summary",children:[w.results.length," Parameters Analyzed"]})]}),a.jsx("button",{className:"r-action",onClick:()=>alert("Report details view simulated."),children:"View"})]},k))}),a.jsxs("button",{className:"export-btn",onClick:()=>alert("Exporting PDF... (Simulated)"),children:[a.jsx(zp,{size:16})," Export History PDF"]})]})]}),a.jsx("style",{children:`
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
            `})]})},Fp=({userName:e,onNavigate:t,onLogout:n})=>{const[r,o]=F.useState(!1);if(r)return a.jsx(Ip,{user:{name:e,email:"user@example.com"},onClose:()=>o(!1),onLogout:n});const l=[{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:a.jsx(Xi,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:a.jsx(xp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:a.jsx(Kr,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:a.jsx(Sp,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:a.jsx(Np,{size:24}),color:"#7209B7",bg:"#F3E8FF"},{id:"weightprogress",title:"Weight Tracker",desc:"Track your weight changes",icon:a.jsx(Mc,{size:24}),color:"#8D99AE",bg:"#F1F5F9"}];return a.jsxs("div",{className:"dashboard-container fade-in",children:[a.jsxs("header",{className:"dash-header",children:[a.jsx("div",{className:"avatar",onClick:()=>o(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),a.jsxs("div",{className:"welcome-text",children:[a.jsx("p",{children:"Welcome back,"}),a.jsx("h3",{children:e||"User"})]}),a.jsxs("button",{className:"notif-btn",children:[a.jsx(Tc,{size:20}),a.jsx("span",{className:"badge"})]})]}),a.jsx("div",{className:"stats-preview",children:a.jsxs("div",{className:"stat-card",children:[a.jsx("h4",{children:"Stay Hydrated! 💧"}),a.jsx("p",{children:"Drink 8 glasses of water today."})]})}),a.jsx("div",{className:"options-grid",children:l.map(i=>a.jsxs("button",{className:"option-card",onClick:()=>t(i.id),style:{"--hover-color":i.color},children:[a.jsx("div",{className:"icon-box",style:{color:i.color,backgroundColor:i.bg},children:i.icon}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:i.title}),a.jsx("p",{children:i.desc})]}),a.jsx("div",{className:"arrow",children:"→"})]},i.id))}),a.jsx("style",{children:`
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
      `})]})},Op=({userProfile:e,onBack:t})=>{const[n,r]=F.useState(0),[o,l]=F.useState(""),[i,s]=F.useState(""),[u,d]=F.useState(0),[x,h]=F.useState(-90);F.useEffect(()=>{e&&f()},[e]);const f=()=>{const{weight:y,heightCm:w}=e;if(!y||!w)return;const k=w/100,D=parseFloat((y/(k*k)).toFixed(1));r(D);let p="",c=0;D<18.5?(p="Underweight",c=20):D<25?(p="Normal Weight",c=0):D<30?(p="Overweight",c=40):(p="Obese",c=80),l(p),d(c);const m=15,j=40,E=Math.max(m,Math.min(D,j)),L=j-m,M=(E-m)/L*180-90;h(M);const $=(18.5*k*k).toFixed(1),O=(24.9*k*k).toFixed(1);s(`${$}kg - ${O}kg`)};return a.jsxs("div",{className:"bmi-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"BMI Calculator"})]}),a.jsxs("div",{className:"card result-card",children:[a.jsx("div",{className:"speedometer-wrapper",children:a.jsxs("div",{className:"speedometer",children:[a.jsxs("svg",{viewBox:"0 0 200 110",className:"gauge-svg",children:[a.jsx("path",{d:"M 20 100 A 80 80 0 0 1 73 26",fill:"none",stroke:"#FFD93D",strokeWidth:"15"})," ",a.jsx("path",{d:"M 73 26 A 80 80 0 0 1 127 26",fill:"none",stroke:"#6BCB77",strokeWidth:"15"})," ",a.jsx("path",{d:"M 127 26 A 80 80 0 0 1 180 100",fill:"none",stroke:"#FF6B6B",strokeWidth:"15"})," ",a.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"30",stroke:"#333",strokeWidth:"4",strokeLinecap:"round",transform:`rotate(${x} 100 100)`,className:"needle"}),a.jsx("circle",{cx:"100",cy:"100",r:"5",fill:"#333"})]}),a.jsxs("div",{className:"bmi-value",children:[a.jsx("h1",{children:n}),a.jsx("p",{children:o})]})]})}),a.jsx("div",{className:"risk-indicator",children:a.jsxs("p",{children:["Health Risk: ",a.jsx("span",{className:n>=25||n<18.5?"text-danger":"text-success",children:n>=30?"High":n>=25||n<18.5?"Moderate":"Low"})]})})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Healthy Weight Range"}),a.jsx("p",{children:i})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Weight for Age"}),a.jsx("p",{className:"highlight",children:"65th Percentile"}),a.jsx("span",{className:"sub-text",children:"(Estimated)"})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Height for Age"}),a.jsx("p",{className:"highlight",children:"70th Percentile"}),a.jsx("span",{className:"sub-text",children:"(Estimated)"})]})]}),a.jsxs("div",{className:"card manual-bmi-card",children:[a.jsx("h3",{children:"Validate a BMI Value"}),a.jsx("p",{className:"sub-text",children:"Enter a BMI number to check its category."}),a.jsxs("div",{className:"manual-input-row",children:[a.jsx("input",{type:"number",placeholder:"e.g. 24.5",className:"input-field",onChange:y=>{const w=parseFloat(y.target.value);if(w>0){let k="";w<18.5?k="Underweight 🔵":w<25?k="Normal ✅":w<30?k="Overweight ⚠️":k="Obese 🚨",y.target.nextElementSibling.innerText=k,y.target.nextElementSibling.style.display="block"}else y.target.nextElementSibling.style.display="none"}}),a.jsx("div",{className:"manual-result-badge",style:{display:"none"}})]})]}),a.jsx("style",{children:`
        .bmi-container {
           padding: var(--spacing-md);
        }
        .header-row {
           display: flex;
           align-items: center;
           gap: var(--spacing-md);
           margin-bottom: var(--spacing-md);
        }
        .back-btn {
           background: transparent;
           color: var(--color-text-main);
           padding: 0;
        }
        .result-card {
           background: white;
           padding: var(--spacing-xl);
           text-align: center;
           margin-bottom: var(--spacing-lg);
        }
        .speedometer-wrapper {
           position: relative;
           width: 220px;
           margin: 0 auto;
        }
        .gauge-svg {
           display: block;
           width: 100%;
        }
        .needle {
           transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .bmi-value {
           position: absolute;
           bottom: 0;
           left: 0;
           right: 0;
           text-align: center;
           transform: translateY(20px);
        }
        .bmi-value h1 {
           font-size: 3rem;
           color: var(--color-text-main);
        }
        .risk-indicator {
           margin-top: 40px;
           font-weight: 600;
        }
        .text-danger { color: var(--color-danger); }
        .text-success { color: var(--color-success); }

        .stats-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: var(--spacing-md);
        }
        .stat-box {
           background: white;
           padding: var(--spacing-md);
           border-radius: var(--radius-md);
           box-shadow: var(--shadow-sm);
        }
        .stat-box h4 {
           font-size: var(--font-size-sm);
           color: var(--color-text-secondary);
           margin-bottom: 5px;
        }
        .stat-box p {
           font-size: var(--font-size-lg);
           font-weight: bold;
           color: var(--color-text-main);
        }
        .sub-text {
           font-size: 10px;
           color: #999;
        }

        .manual-bmi-card {
            margin-top: 20px;
            background: #f8fafc;
            border: 1px dashed #cbd5e1;
        }
        .manual-bmi-card h3 { font-size: 16px; margin-bottom: 5px; }
        .manual-input-row { 
            display: flex; 
            align-items: center; 
            gap: 15px; 
            margin-top: 15px; 
        }
        .manual-input-row .input-field { width: 100px; padding: 8px; }
        .manual-result-badge {
            font-weight: bold;
            font-size: 14px;
            padding: 5px 10px;
            background: white;
            border-radius: 99px;
            border: 1px solid #e2e8f0;
            box-shadow: var(--shadow-sm);
        }
      `})]})};var Dp={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,l=Object.defineProperty||function(v,g,S){v[g]=S.value},i,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",x=s.toStringTag||"@@toStringTag";function h(v,g,S){return Object.defineProperty(v,g,{value:S,enumerable:!0,configurable:!0,writable:!0}),v[g]}try{h({},"")}catch{h=function(g,S,R){return g[S]=R}}function f(v,g,S,R){var N=g&&g.prototype instanceof m?g:m,b=Object.create(N.prototype),A=new J(R||[]);return l(b,"_invoke",{value:P(v,S,A)}),b}n.wrap=f;function y(v,g,S){try{return{type:"normal",arg:v.call(g,S)}}catch(R){return{type:"throw",arg:R}}}var w="suspendedStart",k="suspendedYield",D="executing",p="completed",c={};function m(){}function j(){}function E(){}var L={};h(L,u,function(){return this});var _=Object.getPrototypeOf,M=_&&_(_(ce([])));M&&M!==r&&o.call(M,u)&&(L=M);var $=E.prototype=m.prototype=Object.create(L);j.prototype=E,l($,"constructor",{value:E,configurable:!0}),l(E,"constructor",{value:j,configurable:!0}),j.displayName=h(E,x,"GeneratorFunction");function O(v){["next","throw","return"].forEach(function(g){h(v,g,function(S){return this._invoke(g,S)})})}n.isGeneratorFunction=function(v){var g=typeof v=="function"&&v.constructor;return g?g===j||(g.displayName||g.name)==="GeneratorFunction":!1},n.mark=function(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,E):(v.__proto__=E,h(v,x,"GeneratorFunction")),v.prototype=Object.create($),v},n.awrap=function(v){return{__await:v}};function ie(v,g){function S(b,A,B,V){var q=y(v[b],v,A);if(q.type==="throw")V(q.arg);else{var ft=q.arg,et=ft.value;return et&&typeof et=="object"&&o.call(et,"__await")?g.resolve(et.__await).then(function(tt){S("next",tt,B,V)},function(tt){S("throw",tt,B,V)}):g.resolve(et).then(function(tt){ft.value=tt,B(ft)},function(tt){return S("throw",tt,B,V)})}}var R;function N(b,A){function B(){return new g(function(V,q){S(b,A,V,q)})}return R=R?R.then(B,B):B()}l(this,"_invoke",{value:N})}O(ie.prototype),h(ie.prototype,d,function(){return this}),n.AsyncIterator=ie,n.async=function(v,g,S,R,N){N===void 0&&(N=Promise);var b=new ie(f(v,g,S,R),N);return n.isGeneratorFunction(g)?b:b.next().then(function(A){return A.done?A.value:b.next()})};function P(v,g,S){var R=w;return function(b,A){if(R===D)throw new Error("Generator is already running");if(R===p){if(b==="throw")throw A;return z()}for(S.method=b,S.arg=A;;){var B=S.delegate;if(B){var V=I(B,S);if(V){if(V===c)continue;return V}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(R===w)throw R=p,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);R=D;var q=y(v,g,S);if(q.type==="normal"){if(R=S.done?p:k,q.arg===c)continue;return{value:q.arg,done:S.done}}else q.type==="throw"&&(R=p,S.method="throw",S.arg=q.arg)}}}function I(v,g){var S=g.method,R=v.iterator[S];if(R===i)return g.delegate=null,S==="throw"&&v.iterator.return&&(g.method="return",g.arg=i,I(v,g),g.method==="throw")||S!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+S+"' method")),c;var N=y(R,v.iterator,g.arg);if(N.type==="throw")return g.method="throw",g.arg=N.arg,g.delegate=null,c;var b=N.arg;if(!b)return g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,c;if(b.done)g[v.resultName]=b.value,g.next=v.nextLoc,g.method!=="return"&&(g.method="next",g.arg=i);else return b;return g.delegate=null,c}O($),h($,x,"Generator"),h($,u,function(){return this}),h($,"toString",function(){return"[object Generator]"});function W(v){var g={tryLoc:v[0]};1 in v&&(g.catchLoc=v[1]),2 in v&&(g.finallyLoc=v[2],g.afterLoc=v[3]),this.tryEntries.push(g)}function U(v){var g=v.completion||{};g.type="normal",delete g.arg,v.completion=g}function J(v){this.tryEntries=[{tryLoc:"root"}],v.forEach(W,this),this.reset(!0)}n.keys=function(v){var g=Object(v),S=[];for(var R in g)S.push(R);return S.reverse(),function N(){for(;S.length;){var b=S.pop();if(b in g)return N.value=b,N.done=!1,N}return N.done=!0,N}};function ce(v){if(v){var g=v[u];if(g)return g.call(v);if(typeof v.next=="function")return v;if(!isNaN(v.length)){var S=-1,R=function N(){for(;++S<v.length;)if(o.call(v,S))return N.value=v[S],N.done=!1,N;return N.value=i,N.done=!0,N};return R.next=R}}return{next:z}}n.values=ce;function z(){return{value:i,done:!0}}return J.prototype={constructor:J,reset:function(v){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(U),!v)for(var g in this)g.charAt(0)==="t"&&o.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=i)},stop:function(){this.done=!0;var v=this.tryEntries[0],g=v.completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(v){if(this.done)throw v;var g=this;function S(V,q){return b.type="throw",b.arg=v,g.next=V,q&&(g.method="next",g.arg=i),!!q}for(var R=this.tryEntries.length-1;R>=0;--R){var N=this.tryEntries[R],b=N.completion;if(N.tryLoc==="root")return S("end");if(N.tryLoc<=this.prev){var A=o.call(N,"catchLoc"),B=o.call(N,"finallyLoc");if(A&&B){if(this.prev<N.catchLoc)return S(N.catchLoc,!0);if(this.prev<N.finallyLoc)return S(N.finallyLoc)}else if(A){if(this.prev<N.catchLoc)return S(N.catchLoc,!0)}else if(B){if(this.prev<N.finallyLoc)return S(N.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(v,g){for(var S=this.tryEntries.length-1;S>=0;--S){var R=this.tryEntries[S];if(R.tryLoc<=this.prev&&o.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var N=R;break}}N&&(v==="break"||v==="continue")&&N.tryLoc<=g&&g<=N.finallyLoc&&(N=null);var b=N?N.completion:{};return b.type=v,b.arg=g,N?(this.method="next",this.next=N.finallyLoc,c):this.complete(b)},complete:function(v,g){if(v.type==="throw")throw v.arg;return v.type==="break"||v.type==="continue"?this.next=v.arg:v.type==="return"?(this.rval=this.arg=v.arg,this.method="return",this.next="end"):v.type==="normal"&&g&&(this.next=g),c},finish:function(v){for(var g=this.tryEntries.length-1;g>=0;--g){var S=this.tryEntries[g];if(S.finallyLoc===v)return this.complete(S.completion,S.afterLoc),U(S),c}},catch:function(v){for(var g=this.tryEntries.length-1;g>=0;--g){var S=this.tryEntries[g];if(S.tryLoc===v){var R=S.completion;if(R.type==="throw"){var N=R.arg;U(S)}return N}}throw new Error("illegal catch attempt")},delegateYield:function(v,g,S){return this.delegate={iterator:ce(v),resultName:g,nextLoc:S},this.method==="next"&&(this.arg=i),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Dp);var Zi=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Ap=Zi;let ps=0;var Ic=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=Ap("Job",ps),ps+=1),{id:r,action:t,payload:n}},Cn={};let qi=!1;Cn.logging=qi;Cn.setLogging=e=>{qi=e};Cn.log=(...e)=>qi?console.log.apply(void 0,e):null;const Bp=Ic,{log:Tr}=Cn,Up=Zi;let hs=0;var Hp=()=>{const e=Up("Scheduler",hs),t={},n={};let r=[];hs+=1;const o=()=>r.length,l=()=>Object.keys(t).length,i=()=>{if(r.length!==0){const h=Object.keys(t);for(let f=0;f<h.length;f+=1)if(typeof n[h[f]]>"u"){r[0](t[h[f]]);break}}},s=(h,f)=>new Promise((y,w)=>{const k=Bp({action:h,payload:f});r.push(async D=>{r.shift(),n[D.id]=k;try{y(await D[h].apply(void 0,[...f,k.id]))}catch(p){w(p)}finally{delete n[D.id],i()}}),Tr(`[${e}]: Add ${k.id} to JobQueue`),Tr(`[${e}]: JobQueue length=${r.length}`),i()});return{addWorker:h=>(t[h.id]=h,Tr(`[${e}]: Add ${h.id}`),Tr(`[${e}]: Number of workers=${l()}`),i(),h.id),addJob:async(h,...f)=>{if(l()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(h,f)},terminate:async()=>{Object.keys(t).forEach(async h=>{await t[h].terminate()}),r=[]},getQueueLen:o,getNumWorkers:l}};function $p(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Wp(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Vp=Wp;const Qp=Vp;var Gp=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":Qp()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof $p=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const Kp=Gp("type")==="browser",Yp=Kp?e=>new URL(e,window.location.href).href:e=>e;var Jp=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=Yp(t[n]))}),t},Xp=e=>{const t=[],n=[],r=[],o=[],l=[];return e.blocks&&e.blocks.forEach(i=>{i.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(x=>{l.push({...x,page:e,block:i,paragraph:s,line:u,word:d})}),o.push({...d,page:e,block:i,paragraph:s,line:u})}),r.push({...u,page:e,block:i,paragraph:s})}),n.push({...s,page:e,block:i})}),t.push({...i,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:l}},Fc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Zp="5.1.1",qp={version:Zp};var eh={workerBlobURL:!0,logger:()=>{}};const th=qp.version,nh=eh;var rh={...nh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${th}/dist/worker.min.js`},oh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},lh=e=>{e.terminate()},ih=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},ah=async(e,t)=>{e.postMessage(t)};const sl=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),ni=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await ni(e.src)),e.tagName==="VIDEO"&&(t=await ni(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await sl(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await sl(n)}else(e instanceof File||e instanceof Blob)&&(t=await sl(e));return new Uint8Array(t)};var sh=ni;const uh=rh,ch=oh,dh=lh,fh=ih,ph=ah,hh=sh;var mh={defaultOptions:uh,spawnWorker:ch,terminateWorker:dh,onMessage:fh,send:ph,loadImage:hh};const gh=Jp,vh=Xp,He=Ic,{log:ms}=Cn,yh=Zi,Mt=Fc,{defaultOptions:xh,spawnWorker:wh,terminateWorker:kh,onMessage:Sh,loadImage:gs,send:jh}=mh;let vs=0;var Oc=async(e="eng",t=Mt.LSTM_ONLY,n={},r={})=>{const o=yh("Worker",vs),{logger:l,errorHandler:i,...s}=gh({...xh,...n}),u={},d={},x=typeof e=="string"?e.split("+"):e;let h=t,f=r;const y=[Mt.DEFAULT,Mt.LSTM_ONLY].includes(t)&&!s.legacyCore;let w,k;const D=new Promise((N,b)=>{k=N,w=b}),p=N=>{w(N.message)};let c=wh(s);c.onerror=p,vs+=1;const m=(N,b)=>{u[N]=b},j=(N,b)=>{d[N]=b},E=({id:N,action:b,payload:A})=>new Promise((B,V)=>{ms(`[${o}]: Start ${N}, action=${b}`);const q=`${b}-${N}`;m(q,B),j(q,V),jh(c,{workerId:o,jobId:N,action:b,payload:A})}),L=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),_=N=>E(He({id:N,action:"load",payload:{options:{lstmOnly:y,corePath:s.corePath,logging:s.logging}}})),M=(N,b,A)=>E(He({id:A,action:"FS",payload:{method:"writeFile",args:[N,b]}})),$=(N,b)=>E(He({id:b,action:"FS",payload:{method:"readFile",args:[N,{encoding:"utf8"}]}})),O=(N,b)=>E(He({id:b,action:"FS",payload:{method:"unlink",args:[N]}})),ie=(N,b,A)=>E(He({id:A,action:"FS",payload:{method:N,args:b}})),P=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),I=(N,b)=>E(He({id:b,action:"loadLanguage",payload:{langs:N,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Mt.DEFAULT,Mt.LSTM_ONLY].includes(h)&&!s.legacyLang}}})),W=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),U=(N,b,A,B)=>E(He({id:B,action:"initialize",payload:{langs:N,oem:b,config:A}})),J=(N="eng",b,A,B)=>{if(y&&[Mt.TESSERACT_ONLY,Mt.TESSERACT_LSTM_COMBINED].includes(b))throw Error("Legacy model requested but code missing.");const V=b||h;h=V;const q=A||f;f=q;const et=(typeof N=="string"?N.split("+"):N).filter(tt=>!x.includes(tt));return x.push(...et),et.length>0?I(et,B).then(()=>U(N,V,q,B)):U(N,V,q,B)},ce=(N={},b)=>E(He({id:b,action:"setParameters",payload:{params:N}})),z=async(N,b={},A={blocks:!0,text:!0,hocr:!0,tsv:!0},B)=>E(He({id:B,action:"recognize",payload:{image:await gs(N),options:b,output:A}})),v=(N="Tesseract OCR Result",b=!1,A)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E(He({id:A,action:"getPDF",payload:{title:N,textonly:b}}))),g=async(N,b)=>{if(y)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return E(He({id:b,action:"detect",payload:{image:await gs(N)}}))},S=async()=>(c!==null&&(kh(c),c=null),Promise.resolve());Sh(c,({workerId:N,jobId:b,status:A,action:B,data:V})=>{const q=`${B}-${b}`;if(A==="resolve"){ms(`[${N}]: Complete ${b}`);let ft=V;B==="recognize"?ft=vh(V):B==="getPDF"&&(ft=Array.from({...V,length:Object.keys(V).length})),u[q]({jobId:b,data:ft})}else if(A==="reject")if(d[q](V),B==="load"&&w(V),i)i(V);else throw Error(V);else A==="progress"&&l({...V,userJobId:b})});const R={id:o,worker:c,setResolve:m,setReject:j,load:L,writeText:M,readText:$,removeFile:O,FS:ie,loadLanguage:P,initialize:W,reinitialize:J,setParameters:ce,recognize:z,getPDF:v,detect:g,terminate:S};return _().then(()=>I(e)).then(()=>U(e,t,r)).then(()=>k(R)).catch(()=>{}),D};const Dc=Oc,Nh=async(e,t,n)=>{const r=await Dc(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},Ch=async(e,t)=>{const n=await Dc("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Eh={recognize:Nh,detect:Ch},bh={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},zh={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const _h=Hp,Lh=Oc,Ph=Eh,Th=bh,Mh=Fc,Rh=zh,{setLogging:Ih}=Cn;var Fh={languages:Th,OEM:Mh,PSM:Rh,createScheduler:_h,createWorker:Lh,setLogging:Ih,...Ph};const Oh=ys(Fh),Mr={hemoglobin:{min:12.5,max:16,unit:"gm/dl",foods:["Spinach","Red Meat","Pumpkin Seeds"],impact:{low:"You may experience higher fatigue during cardio. Consider lower intensity now.",high:"Rarely caused by high altitude or smoking. Ensure good hydration."}},total_count:{min:4e3,max:11e3,unit:"cells/cumm",foods:["Vitamin C","Garlic","Ginger"],impact:{low:"Immunity might be lower. Skip high-intensity sessions if you feel weak.",high:"Body is fighting something. Rest and recover properly."}},neutrophil:{min:40,max:70,unit:"%",foods:[],impact:{}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{}},eosinophil:{min:2,max:8,unit:"%",foods:[],impact:{}},monocyte:{min:1,max:6,unit:"%",foods:[],impact:{}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},platelet_count:{min:1.5,max:4.5,unit:"Lakhs/cumm",foods:["Papaya Leaf","Pomegranate"],impact:{low:"Careful to avoid injury. High-impact sports are not recommended.",high:"Can indicate inflammation. Focus on recovery."}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory foods"],impact:{high:"High inflammation. Focus on light movement and stretching."}},mcv:{min:80,max:100,unit:"fL",foods:["Vitamin B12","Folic Acid"],impact:{low:"Lower oxygen capacity. Strength training may feel significantly harder."}},mch:{min:27,max:32,unit:"pg",foods:["Iron rich foods"],impact:{low:"Fatigue risk. Focus on foundational strength movements."}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},t3:{min:.85,max:2.68,unit:"nmol/L",foods:["Brazil Nuts"," Seaweed"],impact:{low:"Lowered metabolism. You might find it harder to maintain energy."}},t4:{min:5.1,max:14.1,unit:"ug/dL",foods:["Dairy","Eggs","Fish"],impact:{low:"Similar to T3, watch for sluggishness during workouts."}},tsh:{min:.27,max:4.2,unit:"uIU/mL",foods:["Avoid cruciferous veg if hypothyroid"],impact:{high:"Watch for weight gain and low energy levels during routine."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Low Carb","High Fiber"],impact:{high:"Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.",low:"Potential for dizziness. Have a small snack before exercise."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Complex Carbs","Vegetables"],impact:{high:"Spikes can affect recovery. A 10-min walk after meals is recommended."}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Nuts","Olive Oil"],impact:{high:"Focus on heart-healthy cardio like swimming or brisk walking."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["Avoid Sugar","Eat Fish"],impact:{high:"Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio."}},hdl_cholesterol:{min:40,max:60,unit:"mg/dL",foods:["Avocado","Salmon"],impact:{low:"HIIT or intensive cardio can help boost this 'good' cholesterol."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber","Soy","Almonds"],impact:{high:"Heart health priority. Daily steady movement is mandatory."}},urea:{min:15,max:40,unit:"mg/dL",foods:["Reduce Protein","Hydrate"],impact:{high:"Kidney stress. Hydrate well and limit protein supplement intake temporarily."}},creatinine:{min:.6,max:1.2,unit:"mg/dL",foods:["Reduce Red Meat","Hydrate"],impact:{high:"Ensure excellent hydration; avoid over-exertion in extreme heat."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Avoid Alcohol","Cherries","Vitamin C"],impact:{high:"Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore."}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Hydrate"],impact:{low:"Performance risk. Monitor salt loss during long workout sessions."}},potassium:{min:3.5,max:5.5,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"High risk of muscle cramps. Ensure steady electrolyte intake."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon Water"],impact:{high:"Liver stress. Keep training intensity moderate and skip supplements."}},sgot:{min:5,max:40,unit:"U/L",foods:["Leafy Greens","Coffee"],impact:{high:"Could be muscle damage from training or liver stress. Take a rest day."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole Grains","Avoid Alcohol"],impact:{high:"Focus on recovery. Avoid using pain killers like Tylenol if high."}},alkaline_phosphatase:{min:44,max:147,unit:"IU/L",foods:["Vitamin D"],impact:{low:"Vitamin D deficiency. Impacts bone health and muscle strength."}}},Dh=({onBack:e})=>{const[t,n]=F.useState(null),[r,o]=F.useState(null),[l,i]=F.useState([]),[s,u]=F.useState(!1),[d,x]=F.useState(""),[h,f]=F.useState("hemoglobin"),[y,w]=F.useState(""),[k,D]=F.useState(null),[p,c]=F.useState("basic"),[m,j]=F.useState("checking");F.useEffect(()=>{E();const P=localStorage.getItem("blood_reports");P&&i(JSON.parse(P))},[]);const E=async()=>{const P="http://localhost:5000";try{(await fetch(`${P}/health`)).ok?j("online"):j("offline")}catch{j("offline")}},L=P=>{const I=[];return Object.keys(P).forEach(W=>{const U=parseFloat(P[W]),J=Mr[W];!J||isNaN(U)||(W==="hemoglobin"&&(U<10?I.push({condition:"Severe Anemia Risk",risk:"High",color:"#ef4444",advice:"Consult a specialist immediately for iron supplements."}):U<J.min&&I.push({condition:"Mild Anemia",risk:"Medium",color:"#fbbf24",advice:"Increase intake of spinach, red meat, and Vitamin C."})),(W==="glucose_fasting"||W==="glucose_pp")&&(U>140&&W==="glucose_fasting"?I.push({condition:"Diabetes Risk",risk:"High",color:"#ef4444",advice:"Strict sugar control needed. Monitor Hba1c."}):U>J.max&&I.push({condition:"Pre-Diabetes Warning",risk:"Medium",color:"#fbbf24",advice:"Reduce carbs/sugar and start daily brisk walking."})),W==="creatinine"&&U>1.5&&I.push({condition:"Kidney Stress",risk:"High",color:"#ef4444",advice:"High hydration needed. Avoid protein supplements temporarily."}),W==="total_count"&&U>12e3&&I.push({condition:"Potential Infection",risk:"Medium",color:"#fbbf24",advice:"Body is fighting inflammation. Rest well."}),(W==="cholesterol"&&U>240||W==="triglycerides"&&U>200)&&I.push({condition:"Cardiovascular Risk",risk:"High",color:"#ef4444",advice:"Avoid saturated fats/fried food. Increase cardio."}))}),I},_=async P=>{u(!0),x("Starting OCR Engine...");try{const{data:{text:I}}=await Oh.recognize(P,"eng",{logger:v=>x(`${v.status} (${Math.round(v.progress*100)}%)`)});console.log("Raw OCR Text:",I);const W=I.split(`
`),U={},J=v=>v.toLowerCase().replace(/[^a-z0-9.]/g,""),ce={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],eosinophil:["eosinophils","eosinophil"],monocyte:["monocytes","monocyte"],basophil:["basophils","basophil"],platelet_count:["platelet count","platelet","plt"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],glucose_fasting:["glucose fasting","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],cholesterol:["total cholesterol","serum cholesterol"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"]};if(W.forEach(v=>{const g=v.toLowerCase().trim();g&&Object.keys(ce).forEach(S=>{const N=ce[S].find(b=>g.includes(b));if(N&&!U[S]){const A=g.replace(N,"").match(/(\d+(\.\d+)?)/g);if(A&&A.length>0){const B=parseFloat(A[0]);isNaN(B)||(U[S]=B)}}})}),Object.keys(U).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+I.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+I),u(!1);return}const z=L(U);O({date:new Date().toLocaleDateString(),values:U,risks:z})}catch(I){console.error(I),alert("Error parsing image. Please try a clearer photo.")}finally{u(!1),x("")}},M=P=>{const I=P.target.files[0];I&&(I.type.startsWith("image/")?(n(I),p==="advanced"&&m==="online"?$(I):_(I)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},$=async P=>{u(!0),x("Sending to ML Neural Network...");const I=new FormData;I.append("file",P);const W="http://localhost:5000";try{const U=await fetch(`${W}/analyze`,{method:"POST",body:I}),J=await U.json();if(!U.ok)throw new Error(J.error||"Server Error");if(console.log("ML Results:",J),!J.raw_results||J.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),_(P);return}}catch(U){console.error(U),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),_(P)}finally{u(!1),x("")}},O=P=>{const I=[],W=[];Object.keys(P.values).forEach(z=>{var N,b;const v=parseFloat(P.values[z]),g=Mr[z];if(!g)return;let S="Normal";v<g.min&&(S="Low"),v>g.max&&(S="High");const R=S==="Low"?(N=g.impact)==null?void 0:N.low:S==="High"?(b=g.impact)==null?void 0:b.high:null;S!=="Normal"&&W.push({parameter:z,status:S,foods:g.foods,fitnessImpact:R}),I.push({parameter:z,value:v,unit:g.unit,range:`${g.min}-${g.max}`,status:S,fitnessImpact:R})});const U=P.risks||[],J={...P,results:I,suggestions:W,risks:U};o(J);const ce=[J,...l];i(ce),localStorage.setItem("blood_reports",JSON.stringify(ce))},ie=P=>{var J,ce;if(P.preventDefault(),!y)return;const I=parseFloat(y),W=Mr[h];let U="Normal";I<W.min&&(U="Low"),I>W.max&&(U="High"),D({parameter:h,value:I,unit:W.unit,range:`${W.min}-${W.max}`,status:U,foods:W.foods,fitnessImpact:U==="Low"?(J=W.impact)==null?void 0:J.low:U==="High"?(ce=W.impact)==null?void 0:ce.high:null})};return a.jsxs("div",{className:"blood-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Blood Evaluation"})]}),r?a.jsxs("div",{className:"results-section fade-in",children:[a.jsxs("div",{className:"results-header",children:[a.jsx("h3",{children:"Report Analysis"}),a.jsx("button",{className:"text-btn",onClick:()=>o(null),children:"Close"})]}),r.risks&&r.risks.length>0&&a.jsxs("div",{className:"risk-container fade-up",children:[a.jsx("h4",{children:"⚠️ AI Health Risk Detection"}),a.jsx("div",{className:"risk-grid",children:r.risks.map((P,I)=>a.jsxs("div",{className:"risk-card",style:{borderLeft:`4px solid ${P.color}`},children:[a.jsxs("div",{className:"risk-header",children:[a.jsx("span",{className:"condition-title",children:P.condition}),a.jsx("span",{className:"risk-badge",style:{background:P.color},children:P.risk})]}),a.jsx("p",{className:"risk-advice",children:P.advice}),a.jsx("button",{className:"view-details",onClick:()=>alert(`Detailed explanation for ${P.condition}: 

This condition was flagged based on your values. Please consult a doctor for verification.`),children:"View Details"})]},I))})]}),a.jsx("div",{className:"params-list",children:r.results.map((P,I)=>a.jsxs("div",{className:"param-card",children:[a.jsxs("div",{className:"param-header",children:[a.jsx("h4",{children:P.parameter.replace(/_/g," ").toUpperCase()}),a.jsxs("span",{className:`status-badge ${P.status.toLowerCase()}`,children:[P.status==="Normal"&&a.jsx(kp,{size:14}),P.status==="High"&&a.jsx(vp,{size:14}),P.status==="Low"&&a.jsx(gp,{size:14}),P.status]})]}),a.jsxs("div",{className:"param-value",children:[a.jsx("span",{className:"val",children:P.value}),a.jsx("span",{className:"unit",children:P.unit})]}),a.jsxs("p",{className:"range-info",children:["Ref Range: ",P.range]})]},I))}),r.suggestions.length>0&&a.jsxs("div",{className:"suggestions-box",children:[a.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),r.suggestions.map((P,I)=>a.jsxs("div",{className:"suggestion-item",children:[a.jsx("div",{className:"suggestion-header",children:a.jsxs("strong",{children:[P.status," ",P.parameter.replace(/_/g," ").toUpperCase()]})}),P.foods.length>0&&a.jsxs("p",{className:"food-list",children:["💡 ",a.jsx("b",{children:"Diety Tip:"})," Eat ",P.foods.join(", ")]}),P.fitnessImpact&&a.jsxs("p",{className:"fitness-list",children:["⚡ ",a.jsx("b",{children:"Fitness Impact:"})," ",P.fitnessImpact]})]},I))]})]}):a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"card manual-card",children:[a.jsx("h3",{children:"Quick Check"}),a.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),a.jsxs("form",{onSubmit:ie,className:"manual-form",children:[a.jsxs("div",{className:"row",children:[a.jsx("select",{className:"input-field",value:h,onChange:P=>{f(P.target.value),D(null)},children:Object.keys(Mr).map(P=>a.jsx("option",{value:P,children:P.replace(/_/g," ").toUpperCase()},P))}),a.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:y,onChange:P=>w(P.target.value),required:!0})]}),a.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",a.jsx(Ep,{size:16})]})]}),k&&a.jsxs("div",{className:"manual-result fade-in",children:[a.jsx("div",{className:`result-badge ${k.status.toLowerCase()}`,children:k.status}),a.jsxs("p",{className:"result-text",children:[a.jsxs("strong",{children:[k.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",k.value," ",k.unit,a.jsx("br",{}),a.jsxs("span",{className:"text-muted",children:["Normal: ",k.range]})]}),k.status!=="Normal"&&k.foods.length>0&&a.jsxs("div",{className:"diet-tip",children:[a.jsx("strong",{children:"Tip:"})," Eat ",k.foods.join(", ")]}),k.fitnessImpact&&a.jsxs("div",{className:"fitness-tip",children:[a.jsx("strong",{children:"Fitness Impact:"})," ",k.fitnessImpact]})]})]}),a.jsx("div",{className:"divider",children:"OR"}),a.jsxs("div",{className:"upload-card",children:[a.jsx("div",{className:"icon-circle",children:a.jsx(Tp,{size:32,color:"var(--color-primary)"})}),a.jsx("h3",{children:"Upload Report Image"}),a.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),a.jsxs("div",{className:"scan-mode-toggle",children:[a.jsx("button",{className:`mode-btn ${p==="basic"?"active":""}`,onClick:()=>c("basic"),children:"Basic (Browser)"}),a.jsxs("button",{className:`mode-btn ${p==="advanced"?"active":""}`,onClick:()=>c("advanced"),children:["Advanced (Python ML)",m==="online"&&a.jsx("span",{className:"dot online",title:"Server Online"}),m==="offline"&&a.jsx("span",{className:"dot offline",title:"Server Offline (Run server.py)"})]})]}),a.jsxs("label",{className:"btn-secondary upload-btn",children:[s?d||"Scanning...":"Select Image (JPG/PNG)",a.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:M,disabled:s})]})]}),l.length>0&&a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Recent Reports"}),l.map((P,I)=>a.jsxs("div",{className:"history-item",onClick:()=>o(P),children:[a.jsx(Xi,{size:18,className:"text-muted"}),a.jsx("span",{children:P.date}),a.jsx("span",{className:"arrow",children:"→"})]},I))]})]}),a.jsx("style",{children:`
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
      `})]})},Rr={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},Ah=({userProfile:e,onBack:t})=>{const[n,r]=F.useState(null),[o,l]=F.useState(0),[i,s]=F.useState(null);F.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:x,heightCm:h,age:f,gender:y}=e;let w=10*x+6.25*h-5*f;y==="male"?w+=5:w-=161;let k=Math.round(w*1.375);return n==="loss"?k-500:n==="gain"?k+500:k},d=()=>{const x=u();l(x);const h=f=>f[Math.floor(Math.random()*f.length)];s({breakfast:h(Rr.breakfast),lunch:h(Rr.lunch),snack:h(Rr.snack),dinner:h(Rr.dinner)})};return a.jsxs("div",{className:"fitness-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Fitness Helper"})]}),n?a.jsxs("div",{className:"plan-view fade-in",children:[a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{className:"cal-target",children:[a.jsx("span",{className:"label",children:"Daily Target"}),a.jsx("h1",{children:o}),a.jsx("span",{className:"unit",children:"kcal"})]}),a.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),a.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),a.jsxs("div",{className:"meals-list",children:[a.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),i&&a.jsxs(a.Fragment,{children:[a.jsx(Ir,{type:"Breakfast",icon:a.jsx(cs,{size:18}),data:i.breakfast}),a.jsx(Ir,{type:"Lunch",icon:a.jsx(Kr,{size:18}),data:i.lunch}),a.jsx(Ir,{type:"Snack",icon:a.jsx(cs,{size:18}),data:i.snack}),a.jsx(Ir,{type:"Dinner",icon:a.jsx(Kr,{size:18}),data:i.dinner})]})]})]}):a.jsxs("div",{className:"goal-selection",children:[a.jsx("h3",{children:"What is your goal?"}),a.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[a.jsx("div",{className:"icon-box loss",children:a.jsx(_p,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Loss"}),a.jsx("p",{children:"Reduce body fat locally."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[a.jsx("div",{className:"icon-box maintain",children:a.jsx(Rp,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Maintain Weight"}),a.jsx("p",{children:"Stay healthy and fit."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[a.jsx("div",{className:"icon-box gain",children:a.jsx(Kr,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Gain"}),a.jsx("p",{children:"Build muscle mass."})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Ir=({type:e,icon:t,data:n})=>a.jsxs("div",{className:"meal-card",children:[a.jsxs("div",{className:"meal-info",children:[a.jsxs("h4",{children:[t," ",e]}),a.jsx("p",{children:n.name})]}),a.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),Bh=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],Uh=({onBack:e})=>{const[t,n]=F.useState(null);return a.jsxs("div",{className:"workout-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Home Workouts"})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("div",{className:"intro-icon",children:a.jsx(ds,{size:28,color:"#FF6B6B"})}),a.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),a.jsx("div",{className:"workout-list",children:Bh.map(r=>a.jsxs("div",{className:"workout-card",children:[a.jsxs("div",{className:"w-header",children:[a.jsx("h3",{children:r.name}),a.jsxs("span",{className:"cal-badge",children:[a.jsx(ds,{size:12,fill:"currentColor"})," ",r.calories]})]}),a.jsx("p",{className:"w-desc",children:r.desc}),a.jsxs("div",{className:"w-footer",children:[a.jsxs("span",{className:"duration",children:[a.jsx(Lp,{size:14})," ",r.duration]}),a.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&a.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:a.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[a.jsx("button",{className:"close-btn",onClick:()=>n(null),children:a.jsx(Mp,{size:24})}),a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:t.name}),a.jsx("span",{className:"cal-pill",children:t.calories})]}),(()=>{const o={"Jumping Jacks":"UpH7rm0cYbM",Squats:"MBMqCNGHwBg","Push-ups":"qJ21hS7L694",Burpees:"auBLPYO8F_g","High Knees":"QPfOZ0e3xkg",Lunges:"S0QJd1mJ34s",Plank:"3oK-V0X7X8c","Mountain Climbers":"nmwgirgXLYM"}[t.name]||"UpH7rm0cYbM";return a.jsx("div",{style:{width:"100%",height:"220px",marginBottom:"20px",borderRadius:"12px",overflow:"hidden",background:"#000"},children:a.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1&loop=1&playlist=${o}&controls=0&showinfo=0&modestbranding=1`,title:"Workout Demonstration",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"block"}})})})(),a.jsxs("div",{className:"modal-body",children:[a.jsxs("h4",{children:[a.jsx(jp,{size:16})," How to do it:"]}),a.jsx("ul",{className:"steps-list",children:t.steps.map((r,o)=>a.jsxs("li",{children:[a.jsx("span",{className:"step-num",children:o+1}),r]},o))})]})]})}),a.jsx("style",{children:`
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
            `})]})},Hh=({onBack:e,userProfile:t})=>{const[n,r]=F.useState(()=>{const h=localStorage.getItem("weight_log");return h?JSON.parse(h):[]}),[o,l]=F.useState(""),i=()=>{if(!o||isNaN(o))return;const h={weight:parseFloat(o),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},f=[...n,h];r(f),localStorage.setItem("weight_log",JSON.stringify(f)),l("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const h=n[n.length-1].weight,f=n[n.length-2].weight,y=h-f;return{change:Math.abs(y).toFixed(1),type:y>0?"gain":y<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),x=n.length>0?n[n.length-1].weight:d;return a.jsxs("div",{className:"weight-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Weight Progress"})]}),a.jsxs("div",{className:"stats-card",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Starting Weight"}),a.jsxs("span",{className:"value",children:[d," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Current Weight"}),a.jsxs("span",{className:"value primary",children:[x," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Change"}),a.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&a.jsx(Mc,{size:16}),u.type==="loss"&&a.jsx(Pp,{size:16}),u.type==="neutral"&&a.jsx(Cp,{size:16}),u.change," kg"]})]})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("h3",{children:"Log Current Weight"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:o,onChange:h=>l(h.target.value),step:"0.1"}),a.jsx("button",{className:"add-btn",onClick:i,children:"Add"})]})]}),a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Weight History"}),n.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(Tc,{size:40,color:"#cbd5e1"}),a.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):a.jsx("div",{className:"history-list",children:[...n].reverse().map((h,f)=>a.jsxs("div",{className:"history-item",children:[a.jsxs("div",{className:"date-badge",children:[a.jsx(wp,{size:14}),h.displayDate]}),a.jsxs("div",{className:"weight-display",children:[h.weight," kg"]})]},f))})]}),a.jsx("style",{children:`
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
            `})]})},$h=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],Wh=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],Vh=({onBack:e})=>{const[t,n]=F.useState([{id:1,text:"Hello! I'm your Health & Fitness Assistant. Ask me anything about your blood report, nutrition, or workout strategy.",sender:"bot"}]),[r,o]=F.useState(""),[l,i]=F.useState(!1),s=F.useRef(null),u=()=>{var f;(f=s.current)==null||f.scrollIntoView({behavior:"smooth"})};F.useEffect(()=>{u()},[t]);const d=f=>{const y=f.toLowerCase();return Wh.some(k=>y.includes(k))?y.includes("protein")?"Protein is the building block of muscle. For vegetarians: Paneer, Dal, Chickpeas, Soy, and Milk are great. For non-vegetarians: Chicken breast, Fish, and Eggs are gold standards. Aim for 1.2g to 2g of protein per kg of body weight depending on your activity level.":y.includes("pre-workout")||y.includes("before gym")||y.includes("before workout")?"A good pre-workout snack should have easily digestible carbs. A banana is perfect. Alternatively, try oats or a slice of whole-grain bread with peanut butter. Avoid high-fat meals right before training as they digest slowly.":y.includes("post-workout")||y.includes("after gym")||y.includes("after workout")?"Post-workout, your body needs protein and some carbs to recover. A protein shake with a fruit, or a meal with chicken/paneer and rice/sweet potato is ideal. Try to eat within 1-2 hours after training.":y.includes("muscle")?"Building muscle requires consistent resistance training and a slight calorie surplus. Focus on compound movements like squats, pushups, and deadlifts. Don't forget recovery—muscles grow while you sleep, not while you train!":y.includes("cardio")?"Cardio is vital for heart health. For fat loss, Zone 2 cardio (where you can still talk while running/walking) is great. For endurance, try HIIT (High-Intensity Interval Training). Aim for at least 150 minutes of moderate activity per week.":y.includes("bmi")?"BMI (Body Mass Index) helps categorize weight. A healthy range is 18.5 - 24.9. However, it doesn't measure body fat percentage, so muscular people might show as 'overweight' despite being fit. Check your waist-to-height ratio for more accuracy.":y.includes("diet")||y.includes("food")?"A healthy diet is 80% whole foods. Focus on 'eating the rainbow' (variety of veg), adequate protein, and healthy fats. In Kerala, try to balance parboiled rice with more fish, pulses, and leafy greens while reducing fried snacks.":y.includes("hemoglobin")||y.includes("blood")?"Normal hemoglobin levels are 12-16 g/dL. Low levels cause fatigue during workouts. Boost it with iron-rich foods like spinach, beetroot, pomegranate, and red meat. Always take Vitamin C (like lemon) with iron for better absorption.":y.includes("sugar")||y.includes("glucose")?"To manage blood sugar, focus on complex carbs (brown rice, oats) instead of simple carbs (white sugar, maida). Fiber slows down sugar absorption. Regular walking after meals significantly helps sensitive insulin levels.":y.includes("weight")||y.includes("fat")?"Fat loss happens when you are in a calorie deficit (burning more than you eat). Avoid 'crash diets'. Instead, focus on high-protein, high-fiber intake and consistent movement to keep your metabolism high.":y.includes("sleep")||y.includes("rest")?"Sleep is the most underrated fitness tool. Most recovery and muscle growth happen during deep sleep. Aim for 7-9 hours of quality rest per night for optimal hormones and performance.":"That's a valid health query. Generally, focusing on whole foods, 7-8 hours of sleep, and 30 minutes of daily movement will solve 90% of health issues. Consult a professional for specific clinic advice!":"I apologize, but I'm specialized in Health, Blood Reports, Nutrition, and Fitness. For other topics, I might not have the best info. Ask me about your protein intake or blood levels! 🏥"},x=f=>{if(f.preventDefault(),!r.trim())return;const y={id:Date.now(),text:r,sender:"user"};n(w=>[...w,y]),o(""),i(!0),setTimeout(()=>{const w={id:Date.now()+1,text:d(y.text),sender:"bot"};n(k=>[...k,w]),i(!1)},1200)},h=f=>{const y={id:Date.now(),text:f.q,sender:"user"};n(w=>[...w,y]),i(!0),setTimeout(()=>{const w={id:Date.now()+1,text:f.a,sender:"bot"};n(k=>[...k,w]),i(!1)},1200)};return a.jsxs("div",{className:"chat-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Kt,{size:24})}),a.jsx("h2",{children:"Health Assistant"})]}),a.jsxs("div",{className:"chat-window",children:[t.map(f=>a.jsxs("div",{className:`message-row ${f.sender}`,children:[f.sender==="bot"&&a.jsx("div",{className:"avatar bot",children:a.jsx(us,{size:16})}),a.jsx("div",{className:"message-bubble",children:f.text}),f.sender==="user"&&a.jsx("div",{className:"avatar user",children:a.jsx(Rc,{size:16})})]},f.id)),l&&a.jsxs("div",{className:"message-row bot",children:[a.jsx("div",{className:"avatar bot",children:a.jsx(us,{size:16})}),a.jsxs("div",{className:"message-bubble typing",children:[a.jsx("span",{children:"."}),a.jsx("span",{children:"."}),a.jsx("span",{children:"."})]})]}),a.jsx("div",{ref:s})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("div",{className:"chips-row",children:$h.map((f,y)=>a.jsx("button",{className:"chip",onClick:()=>h(f),disabled:l,children:f.q},y))}),a.jsxs("form",{onSubmit:x,className:"input-form",children:[a.jsx("input",{type:"text",value:r,onChange:f=>o(f.target.value),placeholder:"Ask about health...",className:"chat-input"}),a.jsx("button",{type:"submit",className:"send-btn",children:a.jsx(bp,{size:20})})]})]}),a.jsx("style",{children:`
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
      `})]})},Qh=({message:e,onClose:t})=>(F.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),a.jsxs("div",{className:"toast-notification",children:[a.jsx("div",{className:"icon-bg",children:a.jsx(yp,{size:20})}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"Reminder"}),a.jsx("p",{children:e})]}),a.jsx("button",{onClick:t,className:"close-btn",children:"×"}),a.jsx("style",{children:`
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
       `})]}));function Gh(){const[e,t]=F.useState("login"),[n,r]=F.useState(null),[o,l]=F.useState(null),[i,s]=F.useState(null);_s.useEffect(()=>{const f=localStorage.getItem("user_profile");f&&l(JSON.parse(f));const y=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],w=setInterval(()=>{const k=y[Math.floor(Math.random()*y.length)];s(k)},12e4);return()=>clearInterval(w)},[]);const u=f=>{r(f),localStorage.getItem("user_profile")?(l(JSON.parse(localStorage.getItem("user_profile"))),t("dashboard")):t("profile_setup")},d=f=>{l(f),localStorage.setItem("user_profile",JSON.stringify(f)),t("dashboard")},x=f=>{t(f)},h=()=>{localStorage.removeItem("user_profile"),r(null),l(null),t("login")};return a.jsxs("div",{className:"app-container",children:[i&&a.jsx(Qh,{message:i,onClose:()=>s(null)}),e==="login"&&a.jsx(fp,{onLogin:u}),e==="profile_setup"&&a.jsx(pp,{onComplete:d}),e==="dashboard"&&a.jsx(Fp,{userName:o==null?void 0:o.name,onNavigate:x,onLogout:h}),e==="bmi"&&a.jsx(Op,{userProfile:o,onBack:()=>t("dashboard")}),e==="blood"&&a.jsx(Dh,{onBack:()=>t("dashboard")}),e==="fitness"&&a.jsx(Ah,{userProfile:o,onBack:()=>t("dashboard")}),e==="homeworkout"&&a.jsx(Uh,{onBack:()=>t("dashboard")}),e==="weightprogress"&&a.jsx(Hh,{userProfile:o,onBack:()=>t("dashboard")}),e==="chat"&&a.jsx(Vh,{onBack:()=>t("dashboard")})]})}ul.createRoot(document.getElementById("root")).render(a.jsx(_s.StrictMode,{children:a.jsx(Gh,{})}));
