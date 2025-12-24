(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function vs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ys={exports:{}},xl={},xs={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Dc=Symbol.for("react.portal"),Ac=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Gc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ks=Object.assign,Ss={};function kn(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function js(){}js.prototype=kn.prototype;function li(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}var oi=li.prototype=new js;oi.constructor=li;ks(oi,kn.prototype);oi.isPureReactComponent=!0;var ta=Array.isArray,Ns=Object.prototype.hasOwnProperty,ii={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ns.call(t,r)&&!Es.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:cr,type:e,key:o,ref:i,props:l,_owner:ii.current}}function Yc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ai(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Or(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case Dc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Il(i,0):r,ta(l)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Or(l,t,n,"",function(d){return d})):l!=null&&(ai(l)&&(l=Yc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(na,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Il(o,s);i+=Or(o,t,n,u,l)}else if(u=Gc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Il(o,s++),i+=Or(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return Or(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},br={transition:null},Zc={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:br,ReactCurrentOwner:ii};function zs(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ai(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=kn;A.Fragment=Ac;A.Profiler=Bc;A.PureComponent=li;A.StrictMode=Uc;A.Suspense=Vc;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc;A.act=zs;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ks({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ii.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ns.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:l,ref:o,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:$c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hc,_context:e},e.Consumer=e};A.createElement=Cs;A.createFactory=function(e){var t=Cs.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Wc,render:e}};A.isValidElement=ai;A.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:Jc}};A.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};A.unstable_act=zs;A.useCallback=function(e,t){return ye.current.useCallback(e,t)};A.useContext=function(e){return ye.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};A.useEffect=function(e,t){return ye.current.useEffect(e,t)};A.useId=function(){return ye.current.useId()};A.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ye.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};A.useRef=function(e){return ye.current.useRef(e)};A.useState=function(e){return ye.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ye.current.useTransition()};A.version="18.3.1";xs.exports=A;var O=xs.exports;const _s=vs(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=O,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)nd.call(t,r)&&!ld.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ed,type:e,key:o,ref:i,props:l,_owner:rd.current}}xl.Fragment=td;xl.jsx=Ls;xl.jsxs=Ls;ys.exports=xl;var a=ys.exports,so={},Ps={exports:{}},Le={},Ts={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,x){var v=T.length;T.push(x);e:for(;0<v;){var N=v-1>>>1,F=T[N];if(0<l(F,x))T[N]=x,T[v]=F,v=N;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var x=T[0],v=T.pop();if(v!==x){T[0]=v;e:for(var N=0,F=T.length,E=F>>>1;N<E;){var P=2*(N+1)-1,U=T[P],D=P+1,B=T[D];if(0>l(U,v))D<F&&0>l(B,U)?(T[N]=B,T[D]=v,N=D):(T[N]=U,T[P]=v,N=P);else if(D<F&&0>l(B,v))T[N]=B,T[D]=v,N=D;else break e}}return x}function l(T,x){var v=T.sortIndex-x.sortIndex;return v!==0?v:T.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],y=1,h=null,f=3,g=!1,S=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var x=n(d);x!==null;){if(x.callback===null)r(d);else if(x.startTime<=T)r(d),x.sortIndex=x.expirationTime,t(u,x);else break;x=n(d)}}function j(T){if(k=!1,m(T),!S)if(n(u)!==null)S=!0,Me(w);else{var x=n(d);x!==null&&qe(j,x.startTime-T)}}function w(T,x){S=!1,k&&(k=!1,p(L),L=-1),g=!0;var v=f;try{for(m(x),h=n(u);h!==null&&(!(h.expirationTime>x)||T&&!G());){var N=h.callback;if(typeof N=="function"){h.callback=null,f=h.priorityLevel;var F=N(h.expirationTime<=x);x=e.unstable_now(),typeof F=="function"?h.callback=F:h===n(u)&&r(u),m(x)}else r(u);h=n(u)}if(h!==null)var E=!0;else{var P=n(d);P!==null&&qe(j,P.startTime-x),E=!1}return E}finally{h=null,f=v,g=!1}}var z=!1,_=null,L=-1,I=5,R=-1;function G(){return!(e.unstable_now()-R<I)}function J(){if(_!==null){var T=e.unstable_now();R=T;var x=!0;try{x=_(!0,T)}finally{x?le():(z=!1,_=null)}}else z=!1}var le;if(typeof c=="function")le=function(){c(J)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Te=Ze.port2;Ze.port1.onmessage=J,le=function(){Te.postMessage(null)}}else le=function(){b(J,0)};function Me(T){_=T,z||(z=!0,le())}function qe(T,x){L=b(function(){T(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,Me(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var x=3;break;default:x=f}var v=f;f=x;try{return T()}finally{f=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,x){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var v=f;f=T;try{return x()}finally{f=v}},e.unstable_scheduleCallback=function(T,x,v){var N=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?N+v:N):v=N,T){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=v+F,T={id:y++,callback:x,priorityLevel:T,startTime:v,expirationTime:F,sortIndex:-1},v>N?(T.sortIndex=v,t(d,T),n(u)===null&&T===n(d)&&(k?(p(L),L=-1):k=!0,qe(j,v-N))):(T.sortIndex=F,t(u,T),S||g||(S=!0,Me(w))),T},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(T){var x=f;return function(){var v=f;f=x;try{return T.apply(this,arguments)}finally{f=v}}}})(Ms);Ts.exports=Ms;var od=Ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=O,_e=od;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fs=new Set,Kn={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Fs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},la={};function sd(e){return uo.call(la,e)?!0:uo.call(ra,e)?!1:ad.test(e)?la[e]=!0:(ra[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var si=/[\-:]([a-z])/g;function ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(si,ui);de[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(si,ui);de[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(si,ui);de[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ci(e,t,n,r){var l=de.hasOwnProperty(t)?de[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,l,r)&&(n=null),r||l===null?sd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),di=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),Rs=Symbol.for("react.provider"),Is=Symbol.for("react.context"),fi=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),po=Symbol.for("react.suspense_list"),pi=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),oa=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ol;function Rn(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var bl=!1;function Dl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function dd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Yt:return"Portal";case co:return"Profiler";case di:return"StrictMode";case fo:return"Suspense";case po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Is:return(e.displayName||"Context")+".Consumer";case Rs:return(e._context.displayName||"Context")+".Provider";case fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pi:return t=e.displayName||null,t!==null?t:ho(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return ho(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ho(t);case 8:return t===di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=pd(e))}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&ci(e,"checked",t,!1)}function go(e,t){As(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&vo(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vo(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function yo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(In(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function Us(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function $s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var md=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wo(e,t){if(t){if(md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,un=null,cn=null;function ca(e){if(e=pr(e)){if(typeof jo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Nl(t),jo(e.stateNode,e.type,t))}}function Vs(e){un?cn?cn.push(e):cn=[e]:un=e}function Qs(){if(un){var e=un,t=cn;if(cn=un=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Ks(e,t){return e(t)}function Gs(){}var Al=!1;function Ys(e,t,n){if(Al)return e(t,n);Al=!0;try{return Ks(e,t,n)}finally{Al=!1,(un!==null||cn!==null)&&(Gs(),Qs())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var No=!1;if(at)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){No=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{No=!1}function gd(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var An=!1,Xr=null,Jr=!1,Eo=null,vd={onError:function(e){An=!0,Xr=e}};function yd(e,t,n,r,l,o,i,s,u){An=!1,Xr=null,gd.apply(vd,arguments)}function xd(e,t,n,r,l,o,i,s,u){if(yd.apply(this,arguments),An){if(An){var d=Xr;An=!1,Xr=null}else throw Error(C(198));Jr||(Jr=!0,Eo=d)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Kt(e)!==e)throw Error(C(188))}function wd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return da(l),e;if(o===r)return da(l),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Js(e){return e=wd(e),e!==null?Zs(e):null}function Zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zs(e);if(t!==null)return t;e=e.sibling}return null}var qs=_e.unstable_scheduleCallback,fa=_e.unstable_cancelCallback,kd=_e.unstable_shouldYield,Sd=_e.unstable_requestPaint,ne=_e.unstable_now,jd=_e.unstable_getCurrentPriorityLevel,mi=_e.unstable_ImmediatePriority,eu=_e.unstable_UserBlockingPriority,Zr=_e.unstable_NormalPriority,Nd=_e.unstable_LowPriority,tu=_e.unstable_IdlePriority,wl=null,Xe=null;function Ed(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:_d,Cd=Math.log,zd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(Cd(e)/zd|0)|0}var xr=64,wr=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=On(s):(o&=i,o!==0&&(r=On(o)))}else i=n&~l,i!==0?r=On(i):o!==0&&(r=On(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),l=1<<n,r|=e[n],t&=~l;return r}function Ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-We(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=Ld(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-We(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var $=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,vi,ou,iu,au,zo=!1,kr=[],wt=null,kt=null,St=null,Xn=new Map,Jn=new Map,gt=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function _n(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=pr(t),t!==null&&vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Fd(e,t,n,r,l){switch(t){case"focusin":return wt=_n(wt,e,t,n,r,l),!0;case"dragenter":return kt=_n(kt,e,t,n,r,l),!0;case"mouseover":return St=_n(St,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Xn.set(o,_n(Xn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Jn.set(o,_n(Jn.get(o)||null,e,t,n,r,l)),!0}return!1}function su(e){var t=Ot(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,au(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);So=r,n.target.dispatchEvent(r),So=null}else return t=pr(n),t!==null&&vi(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Dr(e)&&n.delete(t)}function Rd(){zo=!1,wt!==null&&Dr(wt)&&(wt=null),kt!==null&&Dr(kt)&&(kt=null),St!==null&&Dr(St)&&(St=null),Xn.forEach(ha),Jn.forEach(ha)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,zo||(zo=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Rd)))}function Zn(e){function t(l){return Ln(l,e)}if(0<kr.length){Ln(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Ln(wt,e),kt!==null&&Ln(kt,e),St!==null&&Ln(St,e),Xn.forEach(t),Jn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&gt.shift()}var dn=dt.ReactCurrentBatchConfig,el=!0;function Id(e,t,n,r){var l=$,o=dn.transition;dn.transition=null;try{$=1,yi(e,t,n,r)}finally{$=l,dn.transition=o}}function Od(e,t,n,r){var l=$,o=dn.transition;dn.transition=null;try{$=4,yi(e,t,n,r)}finally{$=l,dn.transition=o}}function yi(e,t,n,r){if(el){var l=_o(e,t,n,r);if(l===null)Xl(e,t,r,tl,n),pa(e,r);else if(Fd(l,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Md.indexOf(e)){for(;l!==null;){var o=pr(l);if(o!==null&&lu(o),o=_o(e,t,n,r),o===null&&Xl(e,t,r,tl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var tl=null;function _o(e,t,n,r){if(tl=null,e=hi(r),e=Ot(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tl=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case mi:return 1;case eu:return 4;case Zr:case Nd:return 16;case tu:return 536870912;default:return 16}default:return 16}}var yt=null,xi=null,Ar=null;function cu(){if(Ar)return Ar;var e,t=xi,n=t.length,r,l="value"in yt?yt.value:yt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ma(){return!1}function Pe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:ma,this.isPropagationStopped=ma,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Pe(Sn),fr=ee({},Sn,{view:0,detail:0}),bd=Pe(fr),Bl,Hl,Pn,kl=ee({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Bl=e.screenX-Pn.screenX,Hl=e.screenY-Pn.screenY):Hl=Bl=0,Pn=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),ga=Pe(kl),Dd=ee({},kl,{dataTransfer:0}),Ad=Pe(Dd),Ud=ee({},fr,{relatedTarget:0}),$l=Pe(Ud),Bd=ee({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=Pe(Bd),$d=ee({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Pe($d),Vd=ee({},Sn,{data:0}),va=Pe(Vd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gd[e])?!!t[e]:!1}function ki(){return Yd}var Xd=ee({},fr,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jd=Pe(Xd),Zd=ee({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Pe(Zd),qd=ee({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),ef=Pe(qd),tf=ee({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Pe(tf),rf=ee({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Pe(rf),of=[9,13,27,32],Si=at&&"CompositionEvent"in window,Un=null;at&&"documentMode"in document&&(Un=document.documentMode);var af=at&&"TextEvent"in window&&!Un,du=at&&(!Si||Un&&8<Un&&11>=Un),xa=" ",wa=!1;function fu(e,t){switch(e){case"keyup":return of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function sf(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function uf(e,t){if(Jt)return e==="compositionend"||!Si&&fu(e,t)?(e=cu(),Ar=xi=yt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function hu(e,t,n,r){Vs(r),t=nl(t,"onChange"),0<t.length&&(n=new wi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,qn=null;function df(e){Eu(e,0)}function Sl(e){var t=en(e);if(Ds(t))return e}function ff(e,t){if(e==="change")return t}var mu=!1;if(at){var Wl;if(at){var Vl="oninput"in document;if(!Vl){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Vl=typeof Sa.oninput=="function"}Wl=Vl}else Wl=!1;mu=Wl&&(!document.documentMode||9<document.documentMode)}function ja(){Bn&&(Bn.detachEvent("onpropertychange",gu),qn=Bn=null)}function gu(e){if(e.propertyName==="value"&&Sl(qn)){var t=[];hu(t,qn,e,hi(e)),Ys(df,t)}}function pf(e,t,n){e==="focusin"?(ja(),Bn=t,qn=n,Bn.attachEvent("onpropertychange",gu)):e==="focusout"&&ja()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(qn)}function mf(e,t){if(e==="click")return Sl(t)}function gf(e,t){if(e==="input"||e==="change")return Sl(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:vf;function er(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!uo.call(t,l)||!Qe(e[l],t[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ea(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ea(n,o);var i=Ea(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=at&&"documentMode"in document&&11>=document.documentMode,Zt=null,Lo=null,Hn=null,Po=!1;function Ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||Zt==null||Zt!==Yr(r)||(r=Zt,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&er(Hn,r)||(Hn=r,r=nl(Lo,"onSelect"),0<r.length&&(t=new wi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Ql={},xu={};at&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function jl(e){if(Ql[e])return Ql[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Ql[e]=t[n];return e}var wu=jl("animationend"),ku=jl("animationiteration"),Su=jl("animationstart"),ju=jl("transitionend"),Nu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Nu.set(e,t),Qt(t,[e])}for(var Kl=0;Kl<za.length;Kl++){var Gl=za[Kl],wf=Gl.toLowerCase(),kf=Gl[0].toUpperCase()+Gl.slice(1);Pt(wf,"on"+kf)}Pt(wu,"onAnimationEnd");Pt(ku,"onAnimationIteration");Pt(Su,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(ju,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;_a(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;_a(l,s,d),o=u}}}if(Jr)throw e=Eo,Jr=!1,Eo=null,e}function Q(e,t){var n=t[Io];n===void 0&&(n=t[Io]=new Set);var r=e+"__bubble";n.has(r)||(Cu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Cu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,Fs.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Yl("selectionchange",!1,t))}}function Cu(e,t,n,r){switch(uu(t)){case 1:var l=Id;break;case 4:l=Od;break;default:l=yi}n=l.bind(null,t,n,e),l=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Ot(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Ys(function(){var d=o,y=hi(n),h=[];e:{var f=Nu.get(e);if(f!==void 0){var g=wi,S=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":g=Jd;break;case"focusin":S="focus",g=$l;break;case"focusout":S="blur",g=$l;break;case"beforeblur":case"afterblur":g=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ef;break;case wu:case ku:case Su:g=Hd;break;case ju:g=nf;break;case"scroll":g=bd;break;case"wheel":g=lf;break;case"copy":case"cut":case"paste":g=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ya}var k=(t&4)!==0,b=!k&&e==="scroll",p=k?f!==null?f+"Capture":null:f;k=[];for(var c=d,m;c!==null;){m=c;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,p!==null&&(j=Yn(c,p),j!=null&&k.push(nr(c,j,m)))),b)break;c=c.return}0<k.length&&(f=new g(f,S,null,n,y),h.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==So&&(S=n.relatedTarget||n.fromElement)&&(Ot(S)||S[st]))break e;if((g||f)&&(f=y.window===y?y:(f=y.ownerDocument)?f.defaultView||f.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=d,S=S?Ot(S):null,S!==null&&(b=Kt(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=d),g!==S)){if(k=ga,j="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ya,j="onPointerLeave",p="onPointerEnter",c="pointer"),b=g==null?f:en(g),m=S==null?f:en(S),f=new k(j,c+"leave",g,n,y),f.target=b,f.relatedTarget=m,j=null,Ot(y)===d&&(k=new k(p,c+"enter",S,n,y),k.target=m,k.relatedTarget=b,j=k),b=j,g&&S)t:{for(k=g,p=S,c=0,m=k;m;m=Gt(m))c++;for(m=0,j=p;j;j=Gt(j))m++;for(;0<c-m;)k=Gt(k),c--;for(;0<m-c;)p=Gt(p),m--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Gt(k),p=Gt(p)}k=null}else k=null;g!==null&&La(h,f,g,k,!1),S!==null&&b!==null&&La(h,b,S,k,!0)}}e:{if(f=d?en(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var w=ff;else if(ka(f))if(mu)w=gf;else{w=hf;var z=pf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=mf);if(w&&(w=w(e,d))){hu(h,w,n,y);break e}z&&z(e,f,d),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&vo(f,"number",f.value)}switch(z=d?en(d):window,e){case"focusin":(ka(z)||z.contentEditable==="true")&&(Zt=z,Lo=d,Hn=null);break;case"focusout":Hn=Lo=Zt=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Ca(h,n,y);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":Ca(h,n,y)}var _;if(Si)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Jt?fu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(du&&n.locale!=="ko"&&(Jt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Jt&&(_=cu()):(yt=y,xi="value"in yt?yt.value:yt.textContent,Jt=!0)),z=nl(d,L),0<z.length&&(L=new va(L,e,null,n,y),h.push({event:L,listeners:z}),_?L.data=_:(_=pu(n),_!==null&&(L.data=_)))),(_=af?sf(e,n):uf(e,n))&&(d=nl(d,"onBeforeInput"),0<d.length&&(y=new va("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:d}),y.data=_))}Eu(h,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Yn(e,n),o!=null&&r.unshift(nr(e,o,l)),o=Yn(e,t),o!=null&&r.push(nr(e,o,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Yn(n,o),u!=null&&i.unshift(nr(n,u,s))):l||(u=Yn(n,o),u!=null&&i.push(nr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var jf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Nf,"")}function Er(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(C(425))}function rl(){}var To=null,Mo=null;function Fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ro=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,Ta=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ta<"u"?function(e){return Ta.resolve(null).then(e).catch(zf)}:Ro;function zf(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Zn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+jn,rr="__reactProps$"+jn,st="__reactContainer$"+jn,Io="__reactEvents$"+jn,_f="__reactListeners$"+jn,Lf="__reactHandles$"+jn;function Ot(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Ye])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Ye]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Nl(e){return e[rr]||null}var Oo=[],tn=-1;function Tt(e){return{current:e}}function K(e){0>tn||(e.current=Oo[tn],Oo[tn]=null,tn--)}function V(e,t){tn++,Oo[tn]=e.current,e.current=t}var Lt={},me=Tt(Lt),Se=Tt(!1),Bt=Lt;function mn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function je(e){return e=e.childContextTypes,e!=null}function ll(){K(Se),K(me)}function Fa(e,t,n){if(me.current!==Lt)throw Error(C(168));V(me,t),V(Se,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(C(108,fd(e)||"Unknown",l));return ee({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Bt=me.current,V(me,e),V(Se,Se.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=zu(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,K(Se),K(me),V(me,e)):K(Se),V(Se,n)}var rt=null,El=!1,Zl=!1;function _u(e){rt===null?rt=[e]:rt.push(e)}function Pf(e){El=!0,_u(e)}function Mt(){if(!Zl&&rt!==null){Zl=!0;var e=0,t=$;try{var n=rt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,El=!1}catch(l){throw rt!==null&&(rt=rt.slice(e+1)),qs(mi,Mt),l}finally{$=t,Zl=!1}}return null}var nn=[],rn=0,il=null,al=0,Fe=[],Re=0,Ht=null,lt=1,ot="";function Rt(e,t){nn[rn++]=al,nn[rn++]=il,il=e,al=t}function Lu(e,t,n){Fe[Re++]=lt,Fe[Re++]=ot,Fe[Re++]=Ht,Ht=e;var r=lt;e=ot;var l=32-We(r)-1;r&=~(1<<l),n+=1;var o=32-We(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,lt=1<<32-We(t)+l|n<<l|r,ot=o+e}else lt=1<<o|n<<l|r,ot=e}function Ni(e){e.return!==null&&(Rt(e,1),Lu(e,1,0))}function Ei(e){for(;e===il;)il=nn[--rn],nn[rn]=null,al=nn[--rn],nn[rn]=null;for(;e===Ht;)Ht=Fe[--Re],Fe[Re]=null,ot=Fe[--Re],Fe[Re]=null,lt=Fe[--Re],Fe[Re]=null}var ze=null,Ce=null,X=!1,$e=null;function Pu(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ce=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:lt,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ce=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(X){var t=Ce;if(t){var n=t;if(!Ia(e,t)){if(bo(e))throw Error(C(418));t=jt(n.nextSibling);var r=ze;t&&Ia(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,X=!1,ze=e)}}else{if(bo(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,ze=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Cr(e){if(e!==ze)return!1;if(!X)return Oa(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fo(e.type,e.memoizedProps)),t&&(t=Ce)){if(bo(e))throw Tu(),Error(C(418));for(;t;)Pu(e,t),t=jt(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=ze?jt(e.stateNode.nextSibling):null;return!0}function Tu(){for(var e=Ce;e;)e=jt(e.nextSibling)}function gn(){Ce=ze=null,X=!1}function Ci(e){$e===null?$e=[e]:$e.push(e)}var Tf=dt.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function Mu(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=zt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,j){return c===null||c.tag!==6?(c=oo(m,p.mode,j),c.return=p,c):(c=l(c,m),c.return=p,c)}function u(p,c,m,j){var w=m.type;return w===Xt?y(p,c,m.props.children,j,m.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ht&&ba(w)===c.type)?(j=l(c,m.props),j.ref=Tn(p,c,m),j.return=p,j):(j=Kr(m.type,m.key,m.props,null,p.mode,j),j.ref=Tn(p,c,m),j.return=p,j)}function d(p,c,m,j){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=io(m,p.mode,j),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function y(p,c,m,j,w){return c===null||c.tag!==7?(c=Ut(m,p.mode,j,w),c.return=p,c):(c=l(c,m),c.return=p,c)}function h(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=oo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return m=Kr(c.type,c.key,c.props,null,p.mode,m),m.ref=Tn(p,null,c),m.return=p,m;case Yt:return c=io(c,p.mode,m),c.return=p,c;case ht:var j=c._init;return h(p,j(c._payload),m)}if(In(c)||Cn(c))return c=Ut(c,p.mode,m,null),c.return=p,c;zr(p,c)}return null}function f(p,c,m,j){var w=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(p,c,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:return m.key===w?u(p,c,m,j):null;case Yt:return m.key===w?d(p,c,m,j):null;case ht:return w=m._init,f(p,c,w(m._payload),j)}if(In(m)||Cn(m))return w!==null?null:y(p,c,m,j,null);zr(p,m)}return null}function g(p,c,m,j,w){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(m)||null,s(c,p,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case gr:return p=p.get(j.key===null?m:j.key)||null,u(c,p,j,w);case Yt:return p=p.get(j.key===null?m:j.key)||null,d(c,p,j,w);case ht:var z=j._init;return g(p,c,m,z(j._payload),w)}if(In(j)||Cn(j))return p=p.get(m)||null,y(c,p,j,w,null);zr(c,j)}return null}function S(p,c,m,j){for(var w=null,z=null,_=c,L=c=0,I=null;_!==null&&L<m.length;L++){_.index>L?(I=_,_=null):I=_.sibling;var R=f(p,_,m[L],j);if(R===null){_===null&&(_=I);break}e&&_&&R.alternate===null&&t(p,_),c=o(R,c,L),z===null?w=R:z.sibling=R,z=R,_=I}if(L===m.length)return n(p,_),X&&Rt(p,L),w;if(_===null){for(;L<m.length;L++)_=h(p,m[L],j),_!==null&&(c=o(_,c,L),z===null?w=_:z.sibling=_,z=_);return X&&Rt(p,L),w}for(_=r(p,_);L<m.length;L++)I=g(_,p,L,m[L],j),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?L:I.key),c=o(I,c,L),z===null?w=I:z.sibling=I,z=I);return e&&_.forEach(function(G){return t(p,G)}),X&&Rt(p,L),w}function k(p,c,m,j){var w=Cn(m);if(typeof w!="function")throw Error(C(150));if(m=w.call(m),m==null)throw Error(C(151));for(var z=w=null,_=c,L=c=0,I=null,R=m.next();_!==null&&!R.done;L++,R=m.next()){_.index>L?(I=_,_=null):I=_.sibling;var G=f(p,_,R.value,j);if(G===null){_===null&&(_=I);break}e&&_&&G.alternate===null&&t(p,_),c=o(G,c,L),z===null?w=G:z.sibling=G,z=G,_=I}if(R.done)return n(p,_),X&&Rt(p,L),w;if(_===null){for(;!R.done;L++,R=m.next())R=h(p,R.value,j),R!==null&&(c=o(R,c,L),z===null?w=R:z.sibling=R,z=R);return X&&Rt(p,L),w}for(_=r(p,_);!R.done;L++,R=m.next())R=g(_,p,L,R.value,j),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?L:R.key),c=o(R,c,L),z===null?w=R:z.sibling=R,z=R);return e&&_.forEach(function(J){return t(p,J)}),X&&Rt(p,L),w}function b(p,c,m,j){if(typeof m=="object"&&m!==null&&m.type===Xt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:e:{for(var w=m.key,z=c;z!==null;){if(z.key===w){if(w=m.type,w===Xt){if(z.tag===7){n(p,z.sibling),c=l(z,m.props.children),c.return=p,p=c;break e}}else if(z.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ht&&ba(w)===z.type){n(p,z.sibling),c=l(z,m.props),c.ref=Tn(p,z,m),c.return=p,p=c;break e}n(p,z);break}else t(p,z);z=z.sibling}m.type===Xt?(c=Ut(m.props.children,p.mode,j,m.key),c.return=p,p=c):(j=Kr(m.type,m.key,m.props,null,p.mode,j),j.ref=Tn(p,c,m),j.return=p,p=j)}return i(p);case Yt:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=io(m,p.mode,j),c.return=p,p=c}return i(p);case ht:return z=m._init,b(p,c,z(m._payload),j)}if(In(m))return S(p,c,m,j);if(Cn(m))return k(p,c,m,j);zr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=oo(m,p.mode,j),c.return=p,p=c),i(p)):n(p,c)}return b}var vn=Mu(!0),Fu=Mu(!1),sl=Tt(null),ul=null,ln=null,zi=null;function _i(){zi=ln=ul=null}function Li(e){var t=sl.current;K(sl),e._currentValue=t}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){ul=e,zi=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(ul===null)throw Error(C(308));ln=e,ul.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var bt=null;function Pi(e){bt===null?bt=[e]:bt.push(e)}function Ru(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Pi(t)):(n.next=l.next,l.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ut(e,n)}return l=r.interleaved,l===null?(t.next=t,Pi(r)):(t.next=l.next,l.next=t),r.interleaved=t,ut(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gi(e,n)}}function Da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cl(e,t,n,r){var l=e.updateQueue;mt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,y=d=u=null,s=o;do{var f=s.lane,g=s.eventTime;if((r&f)===f){y!==null&&(y=y.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,k=s;switch(f=t,g=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){h=S.call(g,h,f);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,f=typeof S=="function"?S.call(g,h,f):S,f==null)break e;h=ee({},h,f);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=l.effects,f===null?l.effects=[s]:f.push(s))}else g={eventTime:g,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=g,u=h):y=y.next=g,i|=f;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;f=s,s=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(!0);if(y===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=h}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var hr={},Je=Tt(hr),lr=Tt(hr),or=Tt(hr);function Dt(e){if(e===hr)throw Error(C(174));return e}function Mi(e,t){switch(V(or,t),V(lr,e),V(Je,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xo(t,e)}K(Je),V(Je,t)}function yn(){K(Je),K(lr),K(or)}function Ou(e){Dt(or.current);var t=Dt(Je.current),n=xo(t,e.type);t!==n&&(V(lr,e),V(Je,n))}function Fi(e){lr.current===e&&(K(Je),K(lr))}var Z=Tt(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Ri(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Hr=dt.ReactCurrentDispatcher,eo=dt.ReactCurrentBatchConfig,$t=0,q=null,oe=null,ae=null,fl=!1,$n=!1,ir=0,Mf=0;function fe(){throw Error(C(321))}function Ii(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function Oi(e,t,n,r,l,o){if($t=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Of:bf,e=n(r,l),$n){o=0;do{if($n=!1,ir=0,25<=o)throw Error(C(301));o+=1,ae=oe=null,t.updateQueue=null,Hr.current=Df,e=n(r,l)}while($n)}if(Hr.current=pl,t=oe!==null&&oe.next!==null,$t=0,ae=oe=q=null,fl=!1,t)throw Error(C(300));return e}function bi(){var e=ir!==0;return ir=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=e:ae=ae.next=e,ae}function De(){if(oe===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ae===null?q.memoizedState:ae.next;if(t!==null)ae=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ae===null?q.memoizedState=ae=e:ae=ae.next=e}return ae}function ar(e,t){return typeof t=="function"?t(e):t}function to(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var y=d.lane;if(($t&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,q.lanes|=y,Wt|=y}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,Qe(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,q.lanes|=o,Wt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function no(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Qe(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bu(){}function Du(e,t){var n=q,r=De(),l=t(),o=!Qe(r.memoizedState,l);if(o&&(r.memoizedState=l,ke=!0),r=r.queue,Di(Bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,sr(9,Uu.bind(null,n,r,l,t),void 0,null),se===null)throw Error(C(349));$t&30||Au(n,t,l)}return l}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,r){t.value=n,t.getSnapshot=r,Hu(t)&&$u(e)}function Bu(e,t,n){return n(function(){Hu(t)&&$u(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function $u(e){var t=ut(e,1);t!==null&&Ve(t,e,1,-1)}function Ua(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,q,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wu(){return De().memoizedState}function $r(e,t,n,r){var l=Ge();q.flags|=e,l.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var l=De();r=r===void 0?null:r;var o=void 0;if(oe!==null){var i=oe.memoizedState;if(o=i.destroy,r!==null&&Ii(r,i.deps)){l.memoizedState=sr(t,n,o,r);return}}q.flags|=e,l.memoizedState=sr(1|t,n,o,r)}function Ba(e,t){return $r(8390656,8,e,t)}function Di(e,t){return Cl(2048,8,e,t)}function Vu(e,t){return Cl(4,2,e,t)}function Qu(e,t){return Cl(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,Ku.bind(null,t,e),n)}function Ai(){}function Yu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ii(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ii(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return $t&21?(Qe(n,t)||(n=nu(),q.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function Ff(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=eo.transition;eo.transition={};try{e(!1),t()}finally{$=n,eo.transition=r}}function Zu(){return De().memoizedState}function Rf(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))ec(t,n);else if(n=Ru(e,t,n,r),n!==null){var l=ve();Ve(n,e,r,l),tc(n,t,r)}}function If(e,t,n){var r=Ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))ec(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Qe(s,i)){var u=t.interleaved;u===null?(l.next=l,Pi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Ru(e,t,l,r),n!==null&&(l=ve(),Ve(n,e,r,l),tc(n,t,r))}}function qu(e){var t=e.alternate;return e===q||t!==null&&t===q}function ec(e,t){$n=fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gi(e,n)}}var pl={readContext:be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Of={readContext:be,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Ba,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rf.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:Ai,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=Ff.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,l=Ge();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),se===null)throw Error(C(349));$t&30||Au(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ba(Bu.bind(null,r,o,e),[e]),r.flags|=2048,sr(9,Uu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=se.identifierPrefix;if(X){var n=ot,r=lt;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bf={readContext:be,useCallback:Yu,useContext:be,useEffect:Di,useImperativeHandle:Gu,useInsertionEffect:Vu,useLayoutEffect:Qu,useMemo:Xu,useReducer:to,useRef:Wu,useState:function(){return to(ar)},useDebugValue:Ai,useDeferredValue:function(e){var t=De();return Ju(t,oe.memoizedState,e)},useTransition:function(){var e=to(ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1},Df={readContext:be,useCallback:Yu,useContext:be,useEffect:Di,useImperativeHandle:Gu,useInsertionEffect:Vu,useLayoutEffect:Qu,useMemo:Xu,useReducer:no,useRef:Wu,useState:function(){return no(ar)},useDebugValue:Ai,useDeferredValue:function(e){var t=De();return oe===null?t.memoizedState=e:Ju(t,oe.memoizedState,e)},useTransition:function(){var e=no(ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),l=Ct(e),o=it(r,l);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&(Ve(t,e,l,r),Br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),l=Ct(e),o=it(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,l),t!==null&&(Ve(t,e,l,r),Br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Ct(e),l=it(n,r);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,r),t!==null&&(Ve(t,e,r,n),Br(t,e,r))}};function Ha(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(l,o):!0}function nc(e,t,n){var r=!1,l=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=be(o):(l=je(t)?Bt:me.current,r=t.contextTypes,o=(r=r!=null)?mn(e,l):Lt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Bo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ti(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=be(o):(o=je(t)?Bt:me.current,l.context=mn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Uo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),cl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ro(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,Zo=r),Ho(e,t)},n}function lc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ho(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Af;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Uf=dt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?Fu(t,null,n,r):vn(t,e.child,n,r)}function Ka(e,t,n,r,l){n=n.render;var o=t.ref;return fn(t,l),r=Oi(e,t,n,r,o,l),n=bi(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(X&&n&&Ni(t),t.flags|=1,ge(e,t,r,l),t.child)}function Ga(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ki(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,oc(e,t,o,r,l)):(e=Kr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return ct(e,t,l)}return t.flags|=1,e=zt(o,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ct(e,t,l)}return $o(e,t,n,r,l)}function ic(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(an,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(an,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(an,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(an,Ee),Ee|=r;return ge(e,t,l,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $o(e,t,n,r,l){var o=je(n)?Bt:me.current;return o=mn(t,o),fn(t,l),n=Oi(e,t,n,r,o,l),r=bi(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ct(e,t,l)):(X&&r&&Ni(t),t.flags|=1,ge(e,t,n,l),t.child)}function Ya(e,t,n,r,l){if(je(n)){var o=!0;ol(t)}else o=!1;if(fn(t,l),t.stateNode===null)Wr(e,t),nc(t,n,r),Bo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=be(d):(d=je(n)?Bt:me.current,d=mn(t,d));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&$a(t,i,r,d),mt=!1;var f=t.memoizedState;i.state=f,cl(t,r,i,l),u=t.memoizedState,s!==r||f!==u||Se.current||mt?(typeof y=="function"&&(Uo(t,n,y,r),u=t.memoizedState),(s=mt||Ha(t,n,s,r,f,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Iu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Be(t.type,s),i.props=d,h=t.pendingProps,f=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=je(n)?Bt:me.current,u=mn(t,u));var g=n.getDerivedStateFromProps;(y=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||f!==u)&&$a(t,i,r,u),mt=!1,f=t.memoizedState,i.state=f,cl(t,r,i,l);var S=t.memoizedState;s!==h||f!==S||Se.current||mt?(typeof g=="function"&&(Uo(t,n,g,r),S=t.memoizedState),(d=mt||Ha(t,n,d,r,f,S,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),i.props=r,i.state=S,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wo(e,t,n,r,o,l)}function Wo(e,t,n,r,l,o){ac(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Ra(t,n,!1),ct(e,t,o);r=t.stateNode,Uf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,o),t.child=vn(t,null,s,o)):ge(e,t,s,o),t.memoizedState=r.state,l&&Ra(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),Mi(e,t.containerInfo)}function Xa(e,t,n,r,l){return gn(),Ci(l),t.flags|=256,ge(e,t,n,r),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,l=Z.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(Z,l&1),e===null)return Do(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Pl(i,r,0,null),e=Ut(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qo(n),t.memoizedState=Vo,e):Ui(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Bf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=zt(s,o):(o=Ut(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Qo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Vo,r}return o=e.child,e=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ui(e,t){return t=Pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&Ci(r),vn(t,e.child,null,n),e=Ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ro(Error(C(422))),_r(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Pl({mode:"visible",children:r.children},l,0,null),o=Ut(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vn(t,e.child,null,i),t.child.memoizedState=Qo(i),t.memoizedState=Vo,o);if(!(t.mode&1))return _r(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=ro(o,r,void 0),_r(e,t,i,r)}if(s=(i&e.childLanes)!==0,ke||s){if(r=se,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,ut(e,l),Ve(r,e,l,-1))}return Qi(),r=ro(Error(C(421))),_r(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ce=jt(l.nextSibling),ze=t,X=!0,$e=null,e!==null&&(Fe[Re++]=lt,Fe[Re++]=ot,Fe[Re++]=Ht,lt=e.id,ot=e.overflow,Ht=t),t=Ui(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function lo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function cc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),lo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&dl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}lo(t,!0,n,null,o);break;case"together":lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hf(e,t,n){switch(t.tag){case 3:sc(t),gn();break;case 5:Ou(t);break;case 1:je(t.type)&&ol(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(sl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(V(Z,Z.current&1),e=ct(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,ic(e,t,n)}return ct(e,t,n)}var dc,Ko,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ko=function(){};fc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Dt(Je.current);var o=null;switch(n){case"input":l=mo(e,l),r=mo(e,r),o=[];break;case"select":l=ee({},l,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":l=yo(e,l),r=yo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}wo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Q("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $f(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return je(t.type)&&ll(),pe(t),null;case 3:return r=t.stateNode,yn(),K(Se),K(me),Ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(ti($e),$e=null))),Ko(e,t),pe(t),null;case 5:Fi(t);var l=Dt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return pe(t),null}if(e=Dt(Je.current),Cr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(l=0;l<bn.length;l++)Q(bn[l],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ia(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":sa(r,o),Q("invalid",r)}wo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),l=["children",""+s]):Kn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":vr(r),aa(r,o,!0);break;case"textarea":vr(r),ua(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ye]=t,e[rr]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(i=ko(n,r),n){case"dialog":Q("cancel",e),Q("close",e),l=r;break;case"iframe":case"object":case"embed":Q("load",e),l=r;break;case"video":case"audio":for(l=0;l<bn.length;l++)Q(bn[l],e);l=r;break;case"source":Q("error",e),l=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),l=r;break;case"details":Q("toggle",e),l=r;break;case"input":ia(e,r),l=mo(e,r),Q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":sa(e,r),l=yo(e,r),Q("invalid",e);break;default:l=r}wo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ws(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hs(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gn(e,u):typeof u=="number"&&Gn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Q("scroll",e):u!=null&&ci(e,o,u,i))}switch(n){case"input":vr(e),aa(e,r,!1);break;case"textarea":vr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Dt(or.current),Dt(Je.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return pe(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ce!==null&&t.mode&1&&!(t.flags&128))Tu(),gn(),t.flags|=98560,o=!1;else if(o=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Ye]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else $e!==null&&(ti($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ie===0&&(ie=3):Qi())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return yn(),Ko(e,t),e===null&&tr(t.stateNode.containerInfo),pe(t),null;case 10:return Li(t.type._context),pe(t),null;case 17:return je(t.type)&&ll(),pe(t),null;case 19:if(K(Z),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Mn(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=dl(e),i!==null){for(t.flags|=128,Mn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>wn&&(t.flags|=128,r=!0,Mn(o,!1),t.lanes=4194304)}else{if(!r)if(e=dl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!X)return pe(t),null}else 2*ne()-o.renderingStartTime>wn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Vi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Wf(e,t){switch(Ei(t),t.tag){case 1:return je(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),K(Se),K(me),Ri(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return yn(),null;case 10:return Li(t.type._context),null;case 22:case 23:return Vi(),null;case 24:return null;default:return null}}var Lr=!1,he=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,M=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Go(e,t,n){try{n()}catch(r){te(e,t,r)}}var Za=!1;function Qf(e,t){if(To=el,e=yu(),ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,y=0,h=e,f=null;t:for(;;){for(var g;h!==n||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break t;if(f===n&&++d===l&&(s=i),f===o&&++y===r&&(u=i),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mo={focusedElem:e,selectionRange:n},el=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,b=S.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Be(t.type,k),b);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(j){te(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return S=Za,Za=!1,S}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Go(t,n,o)}l=l.next}while(l!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[rr],delete t[Io],delete t[_f],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}function Jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jo(e,t,n),e=e.sibling;e!==null;)Jo(e,t,n),e=e.sibling}var ue=null,He=!1;function pt(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:he||on(n,t);case 6:var r=ue,l=He;ue=null,pt(e,t,n),ue=r,He=l,ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Zn(e)):Jl(ue,n.stateNode));break;case 4:r=ue,l=He,ue=n.stateNode.containerInfo,He=!0,pt(e,t,n),ue=r,He=l;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Go(n,t,i),l=l.next}while(l!==r)}pt(e,t,n);break;case 1:if(!he&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,pt(e,t,n),he=r):pt(e,t,n);break;default:pt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var l=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,He=!1;break e;case 3:ue=s.stateNode.containerInfo,He=!0;break e;case 4:ue=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(ue===null)throw Error(C(160));gc(o,i,l),ue=null,He=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){te(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ke(e),r&4){try{Wn(3,e,e.return),_l(3,e)}catch(k){te(e,e.return,k)}try{Wn(5,e,e.return)}catch(k){te(e,e.return,k)}}break;case 1:Ae(t,e),Ke(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Ae(t,e),Ke(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var l=e.stateNode;try{Gn(l,"")}catch(k){te(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&As(l,o),ko(s,i);var d=ko(s,o);for(i=0;i<u.length;i+=2){var y=u[i],h=u[i+1];y==="style"?Ws(l,h):y==="dangerouslySetInnerHTML"?Hs(l,h):y==="children"?Gn(l,h):ci(l,y,h,d)}switch(s){case"input":go(l,o);break;case"textarea":Us(l,o);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?sn(l,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?sn(l,!!o.multiple,o.defaultValue,!0):sn(l,!!o.multiple,o.multiple?[]:"",!1))}l[rr]=o}catch(k){te(e,e.return,k)}}break;case 6:if(Ae(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){te(e,e.return,k)}}break;case 3:if(Ae(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(k){te(e,e.return,k)}break;case 4:Ae(t,e),Ke(e);break;case 13:Ae(t,e),Ke(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||($i=ne())),r&4&&es(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(he=(d=he)||y,Ae(t,e),he=d):Ae(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(M=e,y=e.child;y!==null;){for(h=M=y;M!==null;){switch(f=M,g=f.child,f.tag){case 0:case 11:case 14:case 15:Wn(4,f,f.return);break;case 1:on(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){te(r,n,k)}}break;case 5:on(f,f.return);break;case 22:if(f.memoizedState!==null){ns(h);continue}}g!==null?(g.return=f,M=g):ns(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{l=h.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=$s("display",i))}catch(k){te(e,e.return,k)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){te(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(t,e),Ke(e),r&4&&es(e);break;case 21:break;default:Ae(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Gn(l,""),r.flags&=-33);var o=qa(e);Jo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=qa(e);Xo(e,s,i);break;default:throw Error(C(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){M=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Lr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||he;s=Lr;var d=he;if(Lr=i,(he=u)&&!d)for(M=l;M!==null;)i=M,u=i.child,i.tag===22&&i.memoizedState!==null?rs(l):u!==null?(u.return=i,M=u):rs(l);for(;o!==null;)M=o,yc(o),o=o.sibling;M=l,Lr=s,he=d}ts(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,M=o):ts(e)}}function ts(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Aa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}he||t.flags&512&&Yo(t)}catch(f){te(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function ns(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function rs(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){te(t,l,u)}}var o=t.return;try{Yo(t)}catch(u){te(t,o,u)}break;case 5:var i=t.return;try{Yo(t)}catch(u){te(t,i,u)}}}catch(u){te(t,t.return,u)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Gf=Math.ceil,hl=dt.ReactCurrentDispatcher,Bi=dt.ReactCurrentOwner,Oe=dt.ReactCurrentBatchConfig,H=0,se=null,re=null,ce=0,Ee=0,an=Tt(0),ie=0,ur=null,Wt=0,Ll=0,Hi=0,Vn=null,we=null,$i=0,wn=1/0,nt=null,ml=!1,Zo=null,Et=null,Pr=!1,xt=null,gl=0,Qn=0,qo=null,Vr=-1,Qr=0;function ve(){return H&6?ne():Vr!==-1?Vr:Vr=ne()}function Ct(e){return e.mode&1?H&2&&ce!==0?ce&-ce:Tf.transition!==null?(Qr===0&&(Qr=nu()),Qr):(e=$,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function Ve(e,t,n,r){if(50<Qn)throw Qn=0,qo=null,Error(C(185));dr(e,n,r),(!(H&2)||e!==se)&&(e===se&&(!(H&2)&&(Ll|=n),ie===4&&vt(e,ce)),Ne(e,r),n===1&&H===0&&!(t.mode&1)&&(wn=ne()+500,El&&Mt()))}function Ne(e,t){var n=e.callbackNode;Pd(e,t);var r=qr(e,e===se?ce:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Pf(ls.bind(null,e)):_u(ls.bind(null,e)),Cf(function(){!(H&6)&&Mt()}),n=null;else{switch(ru(r)){case 1:n=mi;break;case 4:n=eu;break;case 16:n=Zr;break;case 536870912:n=tu;break;default:n=Zr}n=Cc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Vr=-1,Qr=0,H&6)throw Error(C(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=qr(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vl(e,r);else{t=r;var l=H;H|=2;var o=kc();(se!==e||ce!==t)&&(nt=null,wn=ne()+500,At(e,t));do try{Jf();break}catch(s){wc(e,s)}while(!0);_i(),hl.current=o,H=l,re!==null?t=0:(se=null,ce=0,t=ie)}if(t!==0){if(t===2&&(l=Co(e),l!==0&&(r=l,t=ei(e,l))),t===1)throw n=ur,At(e,0),vt(e,r),Ne(e,ne()),n;if(t===6)vt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Yf(l)&&(t=vl(e,r),t===2&&(o=Co(e),o!==0&&(r=o,t=ei(e,o))),t===1))throw n=ur,At(e,0),vt(e,r),Ne(e,ne()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:It(e,we,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=$i+500-ne(),10<t)){if(qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ro(It.bind(null,e,we,nt),t);break}It(e,we,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-We(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gf(r/1960))-r,10<r){e.timeoutHandle=Ro(It.bind(null,e,we,nt),r);break}It(e,we,nt);break;case 5:It(e,we,nt);break;default:throw Error(C(329))}}}return Ne(e,ne()),e.callbackNode===n?xc.bind(null,e):null}function ei(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=vl(e,t),e!==2&&(t=we,we=n,t!==null&&ti(t)),e}function ti(e){we===null?we=e:we.push.apply(we,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Qe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Hi,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(H&6)throw Error(C(327));pn();var t=qr(e,0);if(!(t&1))return Ne(e,ne()),null;var n=vl(e,t);if(e.tag!==0&&n===2){var r=Co(e);r!==0&&(t=r,n=ei(e,r))}if(n===1)throw n=ur,At(e,0),vt(e,t),Ne(e,ne()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,we,nt),Ne(e,ne()),null}function Wi(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(wn=ne()+500,El&&Mt())}}function Vt(e){xt!==null&&xt.tag===0&&!(H&6)&&pn();var t=H;H|=1;var n=Oe.transition,r=$;try{if(Oe.transition=null,$=1,e)return e()}finally{$=r,Oe.transition=n,H=t,!(H&6)&&Mt()}}function Vi(){Ee=an.current,K(an)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ef(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:yn(),K(Se),K(me),Ri();break;case 5:Fi(r);break;case 4:yn();break;case 13:K(Z);break;case 19:K(Z);break;case 10:Li(r.type._context);break;case 22:case 23:Vi()}n=n.return}if(se=e,re=e=zt(e.current,null),ce=Ee=t,ie=0,ur=null,Hi=Ll=Wt=0,we=Vn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}bt=null}return e}function wc(e,t){do{var n=re;try{if(_i(),Hr.current=pl,fl){for(var r=q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}fl=!1}if($t=0,ae=oe=q=null,$n=!1,ir=0,Bi.current=null,n===null||n.return===null){ie=1,ur=t,re=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=ce,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var f=y.alternate;f?(y.updateQueue=f.updateQueue,y.memoizedState=f.memoizedState,y.lanes=f.lanes):(y.updateQueue=null,y.memoizedState=null)}var g=Va(i);if(g!==null){g.flags&=-257,Qa(g,i,s,o,t),g.mode&1&&Wa(o,d,t),t=g,u=d;var S=t.updateQueue;if(S===null){var k=new Set;k.add(u),t.updateQueue=k}else S.add(u);break e}else{if(!(t&1)){Wa(o,d,t),Qi();break e}u=Error(C(426))}}else if(X&&s.mode&1){var b=Va(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qa(b,i,s,o,t),Ci(xn(u,s));break e}}o=u=xn(u,s),ie!==4&&(ie=2),Vn===null?Vn=[o]:Vn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=rc(o,u,t);Da(o,p);break e;case 1:s=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Et===null||!Et.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=lc(o,s,t);Da(o,j);break e}}o=o.return}while(o!==null)}jc(n)}catch(w){t=w,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function kc(){var e=hl.current;return hl.current=pl,e===null?pl:e}function Qi(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(Wt&268435455)&&!(Ll&268435455)||vt(se,ce)}function vl(e,t){var n=H;H|=2;var r=kc();(se!==e||ce!==t)&&(nt=null,At(e,t));do try{Xf();break}catch(l){wc(e,l)}while(!0);if(_i(),H=n,hl.current=r,re!==null)throw Error(C(261));return se=null,ce=0,ie}function Xf(){for(;re!==null;)Sc(re)}function Jf(){for(;re!==null&&!kd();)Sc(re)}function Sc(e){var t=Ec(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?jc(e):re=t,Bi.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,re=null;return}}else if(n=$f(n,t,Ee),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ie===0&&(ie=5)}function It(e,t,n){var r=$,l=Oe.transition;try{Oe.transition=null,$=1,Zf(e,t,n,r)}finally{Oe.transition=l,$=r}return null}function Zf(e,t,n,r){do pn();while(xt!==null);if(H&6)throw Error(C(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Td(e,o),e===se&&(re=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Cc(Zr,function(){return pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var i=$;$=1;var s=H;H|=4,Bi.current=null,Qf(e,n),vc(n,e),yf(Mo),el=!!To,Mo=To=null,e.current=n,Kf(n),Sd(),H=s,$=i,Oe.transition=o}else e.current=n;if(Pr&&(Pr=!1,xt=e,gl=l),o=e.pendingLanes,o===0&&(Et=null),Ed(n.stateNode),Ne(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,e=Zo,Zo=null,e;return gl&1&&e.tag!==0&&pn(),o=e.pendingLanes,o&1?e===qo?Qn++:(Qn=0,qo=e):Qn=0,Mt(),null}function pn(){if(xt!==null){var e=ru(gl),t=Oe.transition,n=$;try{if(Oe.transition=null,$=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,gl=0,H&6)throw Error(C(331));var l=H;for(H|=4,M=e.current;M!==null;){var o=M,i=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(M=d;M!==null;){var y=M;switch(y.tag){case 0:case 11:case 15:Wn(8,y,o)}var h=y.child;if(h!==null)h.return=y,M=h;else for(;M!==null;){y=M;var f=y.sibling,g=y.return;if(hc(y),y===d){M=null;break}if(f!==null){f.return=g,M=f;break}M=g}}}var S=o.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}M=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,M=i;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var c=e.current;for(M=c;M!==null;){i=M;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,M=m;else e:for(i=c;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_l(9,s)}}catch(w){te(s,s.return,w)}if(s===i){M=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,M=j;break e}M=s.return}}if(H=l,Mt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(wl,e)}catch{}r=!0}return r}finally{$=n,Oe.transition=t}}return!1}function os(e,t,n){t=xn(n,t),t=rc(e,t,1),e=Nt(e,t,1),t=ve(),e!==null&&(dr(e,1,t),Ne(e,t))}function te(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=xn(n,e),e=lc(t,e,1),t=Nt(t,e,1),e=ve(),t!==null&&(dr(t,1,e),Ne(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>ne()-$i?At(e,0):Hi|=n),Ne(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ve();e=ut(e,t),e!==null&&(dr(e,t,n),Ne(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Nc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Hf(e,t,n);ke=!!(e.flags&131072)}else ke=!1,X&&t.flags&1048576&&Lu(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var l=mn(t,me.current);fn(t,n),l=Oi(null,t,r,e,l,n);var o=bi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(o=!0,ol(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ti(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,Bo(t,r,e,n),t=Wo(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Ni(t),ge(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=rp(r),e=Be(r,e),l){case 0:t=$o(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ga(null,t,r,Be(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),$o(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Ya(e,t,r,l,n);case 3:e:{if(sc(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Iu(e,t),cl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=xn(Error(C(423)),t),t=Xa(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(C(424)),t),t=Xa(e,t,r,n,l);break e}else for(Ce=jt(t.stateNode.containerInfo.firstChild),ze=t,X=!0,$e=null,n=Fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===l){t=ct(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Do(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Fo(r,l)?i=null:o!==null&&Fo(r,o)&&(t.flags|=32),ac(e,t),ge(e,t,i,n),t.child;case 6:return e===null&&Do(t),null;case 13:return uc(e,t,n);case 4:return Mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Ka(e,t,r,l,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,V(sl,r._currentValue),r._currentValue=i,o!==null)if(Qe(o.value,i)){if(o.children===l.children&&!Se.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=it(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ao(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(C(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ao(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ge(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,fn(t,n),l=be(l),r=r(l),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,l=Be(r,t.pendingProps),l=Be(r.type,l),Ga(e,t,r,l,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Be(r,l),Wr(e,t),t.tag=1,je(r)?(e=!0,ol(t)):e=!1,fn(t,n),nc(t,r,l),Bo(t,r,l,n),Wo(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return ic(e,t,n)}throw Error(C(156,t.tag))};function Cc(e,t){return qs(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new np(e,t,n,r)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return Ki(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fi)return 11;if(e===pi)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ki(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return Ut(n.children,l,o,t);case di:i=8,l|=8;break;case co:return e=Ie(12,n,t,l|2),e.elementType=co,e.lanes=o,e;case fo:return e=Ie(13,n,t,l),e.elementType=fo,e.lanes=o,e;case po:return e=Ie(19,n,t,l),e.elementType=po,e.lanes=o,e;case Os:return Pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rs:i=10;break e;case Is:i=9;break e;case fi:i=11;break e;case pi:i=14;break e;case ht:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ut(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Pl(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Os,e.lanes=n,e.stateNode={isHidden:!1},e}function oo(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function io(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Gi(e,t,n,r,l,o,i,s,u){return e=new lp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(o),e}function op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return Lt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(je(n))return zu(e,n,t)}return t}function _c(e,t,n,r,l,o,i,s,u){return e=Gi(n,r,!0,e,l,o,i,s,u),e.context=zc(null),n=e.current,r=ve(),l=Ct(n),o=it(r,l),o.callback=t??null,Nt(n,o,l),e.current.lanes=l,dr(e,l,r),Ne(e,r),e}function Tl(e,t,n,r){var l=t.current,o=ve(),i=Ct(l);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(l,t,i),e!==null&&(Ve(e,l,i,o),Br(e,l,i)),i}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yi(e,t){is(e,t),(e=e.alternate)&&is(e,t)}function ip(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}Ml.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Tl(e,t,null,null)};Ml.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Tl(null,e,null,null)}),t[st]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&su(e)}};function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function ap(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=yl(i);o.call(d)}}var i=_c(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=i,e[st]=i.current,tr(e.nodeType===8?e.parentNode:e),Vt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=yl(u);s.call(d)}}var u=Gi(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[st]=u.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){Tl(t,u,n,r)}),u}function Rl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=yl(i);s.call(u)}}Tl(t,i,e,l)}else i=ap(n,t,e,l,r);return yl(i)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(gi(t,n|1),Ne(t,ne()),!(H&6)&&(wn=ne()+500,Mt()))}break;case 13:Vt(function(){var r=ut(e,1);if(r!==null){var l=ve();Ve(r,e,1,l)}}),Yi(e,1)}};vi=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ve();Ve(t,e,134217728,n)}Yi(e,134217728)}};ou=function(e){if(e.tag===13){var t=Ct(e),n=ut(e,t);if(n!==null){var r=ve();Ve(n,e,t,r)}Yi(e,t)}};iu=function(){return $};au=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};jo=function(e,t,n){switch(t){case"input":if(go(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Nl(r);if(!l)throw Error(C(90));Ds(r),go(r,l)}}}break;case"textarea":Us(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};Ks=Wi;Gs=Vt;var sp={usingClientEntryPoint:!1,Events:[pr,en,Nl,Vs,Qs,Wi]},Fn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{wl=Tr.inject(up),Xe=Tr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ji(t))throw Error(C(200));return op(e,t,null,n)};Le.createRoot=function(e,t){if(!Ji(e))throw Error(C(299));var n=!1,r="",l=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Gi(e,1,!1,null,null,n,!1,r,l),e[st]=t.current,tr(e.nodeType===8?e.parentNode:e),new Xi(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Js(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Vt(e)};Le.hydrate=function(e,t,n){if(!Fl(t))throw Error(C(200));return Rl(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Ji(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=_c(t,null,e,1,n??null,l,!1,o,i),e[st]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)};Le.render=function(e,t,n){if(!Fl(t))throw Error(C(200));return Rl(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Fl(e))throw Error(C(40));return e._reactRootContainer?(Vt(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Le.unstable_batchedUpdates=Wi;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Rl(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Le;var cp=Ps.exports,ss=cp;so.createRoot=ss.createRoot,so.hydrateRoot=ss.hydrateRoot;const dp=({onLogin:e})=>{const[t,n]=O.useState(!0),[r,l]=O.useState(""),[o,i]=O.useState(""),[s,u]=O.useState(""),[d,y]=O.useState(!1),h=f=>{if(f.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(o.length<6){u("Password must be at least 6 characters long.");return}y(!0),setTimeout(()=>{const g=JSON.parse(localStorage.getItem("bloodfit_users")||"{}");t?g[r]&&g[r].password===o?e({email:r,name:r.split("@")[0]}):(u("Invalid email or password. Please try again."),y(!1)):g[r]?(u("User with this email already exists. Please login."),y(!1)):(g[r]={password:o},localStorage.setItem("bloodfit_users",JSON.stringify(g)),e({email:r,name:r.split("@")[0]}))},1e3)};return a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"login-card fade-in",children:[a.jsxs("div",{className:"logo-section",children:[a.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),a.jsx("h1",{children:"Blood & Fit"}),a.jsx("p",{children:"Your personal health companion"})]}),a.jsxs("form",{onSubmit:h,className:"login-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:f=>l(f.target.value),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx("input",{type:"password",id:"password",className:"input-field",placeholder:"••••••••",value:o,onChange:f=>i(f.target.value),required:!0})]}),s&&a.jsx("p",{className:"error-msg",children:s}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?a.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),a.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",a.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),a.jsx("style",{children:`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-md);
          background: linear-gradient(135deg, #FFF0F1 0%, #FFFFFF 100%);
        }
        
        .login-card {
           width: 100%;
           max-width: 400px;
           background: var(--color-surface);
           padding: var(--spacing-xl);
           border-radius: var(--radius-lg);
           box-shadow: var(--shadow-lg);
           text-align: center;
        }

        .logo-section {
          margin-bottom: var(--spacing-xl);
        }

        .app-logo {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: var(--spacing-md);
          border-radius: 50%;
          box-shadow: var(--shadow-md);
        }

        .logo-section h1 {
          font-size: var(--font-size-2xl);
          color: var(--color-primary-dark);
          margin-bottom: var(--spacing-xs);
        }

        .logo-section p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 500;
          color: var(--color-text-main);
          font-size: var(--font-size-sm);
        }

        .btn-primary {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .error-msg {
            color: #ef4444;
            font-size: 12px;
            text-align: left;
            margin-top: -10px;
        }

        .footer-text {
          margin-top: var(--spacing-lg);
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
        }

        .link {
          color: var(--color-primary);
          font-weight: 600;
          cursor: pointer;
        }

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
      `})]})},fp=({onComplete:e})=>{const[t,n]=O.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=i=>{const{name:s,value:u}=i.target;n(d=>({...d,[s]:u}))},l=(i,s)=>Math.round(parseInt(i||0)*30.48+parseInt(s||0)*2.54),o=i=>{if(i.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||l(t.heightFt,t.heightIn)};e(s)};return a.jsxs("div",{className:"profile-container fade-in",children:[a.jsxs("div",{className:"card profile-card",children:[a.jsxs("div",{className:"header",children:[a.jsx("h2",{children:"Let's know you better"}),a.jsx("p",{children:"Enter your details for personalized health insights."})]}),a.jsxs("form",{onSubmit:o,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Age"}),a.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"}),a.jsx("option",{value:"other",children:"Other"})]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Weight (kg)"}),a.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),a.jsxs("div",{className:"height-section",children:[a.jsx("label",{children:"Height"}),a.jsx("div",{className:"tabs"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"CM"}),a.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),a.jsx("div",{className:"or-divider",children:"OR"}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Feet"}),a.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Inches"}),a.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),a.jsx("style",{children:`
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
 */var pp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(e,t)=>{const n=O.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:u,...d},y)=>O.createElement("svg",{ref:y,...pp,width:l,height:l,stroke:r,strokeWidth:i?Number(o)*24/Number(l):o,className:["lucide",`lucide-${hp(e)}`,s].join(" "),...d},[...t.map(([h,f])=>O.createElement(h,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=W("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=W("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=W("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=W("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=W("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=W("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=W("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=W("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=W("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=W("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=W("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=W("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=W("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=W("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=W("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=W("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=W("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=W("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=W("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=W("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=W("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=W("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Fp=({onClose:e,onNavigate:t,onLogout:n})=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"overlay",onClick:e}),a.jsxs("div",{className:"profile-menu fade-in",children:[a.jsx("button",{className:"close-btn",onClick:e,children:a.jsx(Fc,{size:20})}),a.jsx("h3",{children:"Profile Menu"}),a.jsxs("div",{className:"menu-options",children:[a.jsxs("button",{className:"menu-item",onClick:()=>{e(),t("weightprogress")},children:[a.jsx("div",{className:"icon-box weight",children:a.jsx(Mc,{size:20})}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:"Weight Progress"}),a.jsx("p",{children:"Track your weight journey"})]})]}),a.jsxs("button",{className:"menu-item logout",onClick:n,children:[a.jsx("div",{className:"icon-box logout-icon",children:a.jsx(Sp,{size:20})}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:"Logout"}),a.jsx("p",{children:"Sign out of your account"})]})]})]}),a.jsx("style",{children:`
                    .overlay {
                        position: fixed;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background: rgba(0,0,0,0.5);
                        z-index: 999;
                    }
                    .profile-menu {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: white;
                        border-radius: var(--radius-lg);
                        padding: 25px;
                        width: 90%;
                        max-width: 350px;
                        box-shadow: var(--shadow-xl);
                        z-index: 1000;
                        animation: slideIn 0.2s ease;
                    }
                    @keyframes slideIn {
                        from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
                        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    }
                    .close-btn {
                        position: absolute;
                        top: 15px; right: 15px;
                        background: #f1f5f9;
                        width: 30px; height: 30px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #64748b;
                    }
                    .profile-menu h3 {
                        margin-bottom: 20px;
                        color: var(--color-text-main);
                    }
                    .menu-options {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .menu-item {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        padding: 15px;
                        background: #f8fafc;
                        border-radius: var(--radius-md);
                        border: 1px solid #e2e8f0;
                        transition: all 0.2s;
                        text-align: left;
                        width: 100%;
                    }
                    .menu-item:hover {
                        background: #f1f5f9;
                        transform: translateX(2px);
                    }
                    .menu-item.logout {
                        border-color: #fee2e2;
                        background: #fef2f2;
                    }
                    .menu-item.logout:hover {
                        background: #fee2e2;
                    }
                    .icon-box {
                        width: 45px;
                        height: 45px;
                        border-radius: var(--radius-md);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }
                    .icon-box.weight {
                        background: #dcfce7;
                        color: #166534;
                    }
                    .icon-box.logout-icon {
                        background: #fee2e2;
                        color: #991b1b;
                    }
                    .text-box h4 {
                        font-size: 15px;
                        margin-bottom: 2px;
                        color: var(--color-text-main);
                    }
                    .text-box p {
                        font-size: 12px;
                        color: var(--color-text-secondary);
                    }
                `})]})]}),Rp=({userName:e,onNavigate:t,onLogout:n})=>{const[r,l]=O.useState(!1),o=[{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:a.jsx(yp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:a.jsx(Tc,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:a.jsx(Gr,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:a.jsx(ni,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:a.jsx(jp,{size:24}),color:"#7209B7",bg:"#F3E8FF"}];return a.jsxs("div",{className:"dashboard-container fade-in",children:[r&&a.jsx(Fp,{onClose:()=>l(!1),onNavigate:t,onLogout:n}),a.jsxs("header",{className:"dash-header",children:[a.jsx("div",{className:"avatar",onClick:()=>l(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),a.jsxs("div",{className:"welcome-text",children:[a.jsx("p",{children:"Welcome back,"}),a.jsx("h3",{children:e||"User"})]}),a.jsxs("button",{className:"notif-btn",children:[a.jsx(ni,{size:20}),a.jsx("span",{className:"badge"})]})]}),a.jsx("div",{className:"stats-preview",children:a.jsxs("div",{className:"stat-card",children:[a.jsx("h4",{children:"Stay Hydrated! 💧"}),a.jsx("p",{children:"Drink 8 glasses of water today."})]})}),a.jsx("div",{className:"options-grid",children:o.map(i=>a.jsxs("button",{className:"option-card",onClick:()=>t(i.id),style:{"--hover-color":i.color},children:[a.jsx("div",{className:"icon-box",style:{color:i.color,backgroundColor:i.bg},children:i.icon}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:i.title}),a.jsx("p",{children:i.desc})]}),a.jsx("div",{className:"arrow",children:"→"})]},i.id))}),a.jsx("style",{children:`
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
      `})]})},Ip=({userProfile:e,onBack:t})=>{const[n,r]=O.useState(0),[l,o]=O.useState(""),[i,s]=O.useState(""),[u,d]=O.useState(0),[y,h]=O.useState(-90);O.useEffect(()=>{e&&f()},[e]);const f=()=>{const{weight:g,heightCm:S}=e;if(!g||!S)return;const k=S/100,b=parseFloat((g/(k*k)).toFixed(1));r(b);let p="",c=0;b<18.5?(p="Underweight",c=20):b<25?(p="Normal Weight",c=0):b<30?(p="Overweight",c=40):(p="Obese",c=80),o(p),d(c);const m=15,j=40,w=Math.max(m,Math.min(b,j)),z=j-m,L=(w-m)/z*180-90;h(L);const I=(18.5*k*k).toFixed(1),R=(24.9*k*k).toFixed(1);s(`${I}kg - ${R}kg`)};return a.jsxs("div",{className:"bmi-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"BMI Calculator"})]}),a.jsxs("div",{className:"card result-card",children:[a.jsx("div",{className:"speedometer-wrapper",children:a.jsxs("div",{className:"speedometer",children:[a.jsxs("svg",{viewBox:"0 0 200 110",className:"gauge-svg",children:[a.jsx("path",{d:"M 20 100 A 80 80 0 0 1 73 26",fill:"none",stroke:"#FFD93D",strokeWidth:"15"})," ",a.jsx("path",{d:"M 73 26 A 80 80 0 0 1 127 26",fill:"none",stroke:"#6BCB77",strokeWidth:"15"})," ",a.jsx("path",{d:"M 127 26 A 80 80 0 0 1 180 100",fill:"none",stroke:"#FF6B6B",strokeWidth:"15"})," ",a.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"30",stroke:"#333",strokeWidth:"4",strokeLinecap:"round",transform:`rotate(${y} 100 100)`,className:"needle"}),a.jsx("circle",{cx:"100",cy:"100",r:"5",fill:"#333"})]}),a.jsxs("div",{className:"bmi-value",children:[a.jsx("h1",{children:n}),a.jsx("p",{children:l})]})]})}),a.jsx("div",{className:"risk-indicator",children:a.jsxs("p",{children:["Health Risk: ",a.jsx("span",{className:n>=25||n<18.5?"text-danger":"text-success",children:n>=30?"High":n>=25||n<18.5?"Moderate":"Low"})]})})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Healthy Weight Range"}),a.jsx("p",{children:i})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Weight for Age"}),a.jsx("p",{className:"highlight",children:"65th Percentile"}),a.jsx("span",{className:"sub-text",children:"(Estimated)"})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Height for Age"}),a.jsx("p",{className:"highlight",children:"70th Percentile"}),a.jsx("span",{className:"sub-text",children:"(Estimated)"})]})]}),a.jsxs("div",{className:"card manual-bmi-card",children:[a.jsx("h3",{children:"Validate a BMI Value"}),a.jsx("p",{className:"sub-text",children:"Enter a BMI number to check its category."}),a.jsxs("div",{className:"manual-input-row",children:[a.jsx("input",{type:"number",placeholder:"e.g. 24.5",className:"input-field",onChange:g=>{const S=parseFloat(g.target.value);if(S>0){let k="";S<18.5?k="Underweight 🔵":S<25?k="Normal ✅":S<30?k="Overweight ⚠️":k="Obese 🚨",g.target.nextElementSibling.innerText=k,g.target.nextElementSibling.style.display="block"}else g.target.nextElementSibling.style.display="none"}}),a.jsx("div",{className:"manual-result-badge",style:{display:"none"}})]})]}),a.jsx("style",{children:`
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
      `})]})};var Op={exports:{}};(function(e){var t=function(n){var r=Object.prototype,l=r.hasOwnProperty,o=Object.defineProperty||function(x,v,N){x[v]=N.value},i,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",y=s.toStringTag||"@@toStringTag";function h(x,v,N){return Object.defineProperty(x,v,{value:N,enumerable:!0,configurable:!0,writable:!0}),x[v]}try{h({},"")}catch{h=function(v,N,F){return v[N]=F}}function f(x,v,N,F){var E=v&&v.prototype instanceof m?v:m,P=Object.create(E.prototype),U=new Me(F||[]);return o(P,"_invoke",{value:J(x,N,U)}),P}n.wrap=f;function g(x,v,N){try{return{type:"normal",arg:x.call(v,N)}}catch(F){return{type:"throw",arg:F}}}var S="suspendedStart",k="suspendedYield",b="executing",p="completed",c={};function m(){}function j(){}function w(){}var z={};h(z,u,function(){return this});var _=Object.getPrototypeOf,L=_&&_(_(qe([])));L&&L!==r&&l.call(L,u)&&(z=L);var I=w.prototype=m.prototype=Object.create(z);j.prototype=w,o(I,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:j,configurable:!0}),j.displayName=h(w,y,"GeneratorFunction");function R(x){["next","throw","return"].forEach(function(v){h(x,v,function(N){return this._invoke(v,N)})})}n.isGeneratorFunction=function(x){var v=typeof x=="function"&&x.constructor;return v?v===j||(v.displayName||v.name)==="GeneratorFunction":!1},n.mark=function(x){return Object.setPrototypeOf?Object.setPrototypeOf(x,w):(x.__proto__=w,h(x,y,"GeneratorFunction")),x.prototype=Object.create(I),x},n.awrap=function(x){return{__await:x}};function G(x,v){function N(P,U,D,B){var Y=g(x[P],x,U);if(Y.type==="throw")B(Y.arg);else{var ft=Y.arg,et=ft.value;return et&&typeof et=="object"&&l.call(et,"__await")?v.resolve(et.__await).then(function(tt){N("next",tt,D,B)},function(tt){N("throw",tt,D,B)}):v.resolve(et).then(function(tt){ft.value=tt,D(ft)},function(tt){return N("throw",tt,D,B)})}}var F;function E(P,U){function D(){return new v(function(B,Y){N(P,U,B,Y)})}return F=F?F.then(D,D):D()}o(this,"_invoke",{value:E})}R(G.prototype),h(G.prototype,d,function(){return this}),n.AsyncIterator=G,n.async=function(x,v,N,F,E){E===void 0&&(E=Promise);var P=new G(f(x,v,N,F),E);return n.isGeneratorFunction(v)?P:P.next().then(function(U){return U.done?U.value:P.next()})};function J(x,v,N){var F=S;return function(P,U){if(F===b)throw new Error("Generator is already running");if(F===p){if(P==="throw")throw U;return T()}for(N.method=P,N.arg=U;;){var D=N.delegate;if(D){var B=le(D,N);if(B){if(B===c)continue;return B}}if(N.method==="next")N.sent=N._sent=N.arg;else if(N.method==="throw"){if(F===S)throw F=p,N.arg;N.dispatchException(N.arg)}else N.method==="return"&&N.abrupt("return",N.arg);F=b;var Y=g(x,v,N);if(Y.type==="normal"){if(F=N.done?p:k,Y.arg===c)continue;return{value:Y.arg,done:N.done}}else Y.type==="throw"&&(F=p,N.method="throw",N.arg=Y.arg)}}}function le(x,v){var N=v.method,F=x.iterator[N];if(F===i)return v.delegate=null,N==="throw"&&x.iterator.return&&(v.method="return",v.arg=i,le(x,v),v.method==="throw")||N!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+N+"' method")),c;var E=g(F,x.iterator,v.arg);if(E.type==="throw")return v.method="throw",v.arg=E.arg,v.delegate=null,c;var P=E.arg;if(!P)return v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,c;if(P.done)v[x.resultName]=P.value,v.next=x.nextLoc,v.method!=="return"&&(v.method="next",v.arg=i);else return P;return v.delegate=null,c}R(I),h(I,y,"Generator"),h(I,u,function(){return this}),h(I,"toString",function(){return"[object Generator]"});function Ze(x){var v={tryLoc:x[0]};1 in x&&(v.catchLoc=x[1]),2 in x&&(v.finallyLoc=x[2],v.afterLoc=x[3]),this.tryEntries.push(v)}function Te(x){var v=x.completion||{};v.type="normal",delete v.arg,x.completion=v}function Me(x){this.tryEntries=[{tryLoc:"root"}],x.forEach(Ze,this),this.reset(!0)}n.keys=function(x){var v=Object(x),N=[];for(var F in v)N.push(F);return N.reverse(),function E(){for(;N.length;){var P=N.pop();if(P in v)return E.value=P,E.done=!1,E}return E.done=!0,E}};function qe(x){if(x){var v=x[u];if(v)return v.call(x);if(typeof x.next=="function")return x;if(!isNaN(x.length)){var N=-1,F=function E(){for(;++N<x.length;)if(l.call(x,N))return E.value=x[N],E.done=!1,E;return E.value=i,E.done=!0,E};return F.next=F}}return{next:T}}n.values=qe;function T(){return{value:i,done:!0}}return Me.prototype={constructor:Me,reset:function(x){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(Te),!x)for(var v in this)v.charAt(0)==="t"&&l.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=i)},stop:function(){this.done=!0;var x=this.tryEntries[0],v=x.completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(x){if(this.done)throw x;var v=this;function N(B,Y){return P.type="throw",P.arg=x,v.next=B,Y&&(v.method="next",v.arg=i),!!Y}for(var F=this.tryEntries.length-1;F>=0;--F){var E=this.tryEntries[F],P=E.completion;if(E.tryLoc==="root")return N("end");if(E.tryLoc<=this.prev){var U=l.call(E,"catchLoc"),D=l.call(E,"finallyLoc");if(U&&D){if(this.prev<E.catchLoc)return N(E.catchLoc,!0);if(this.prev<E.finallyLoc)return N(E.finallyLoc)}else if(U){if(this.prev<E.catchLoc)return N(E.catchLoc,!0)}else if(D){if(this.prev<E.finallyLoc)return N(E.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(x,v){for(var N=this.tryEntries.length-1;N>=0;--N){var F=this.tryEntries[N];if(F.tryLoc<=this.prev&&l.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var E=F;break}}E&&(x==="break"||x==="continue")&&E.tryLoc<=v&&v<=E.finallyLoc&&(E=null);var P=E?E.completion:{};return P.type=x,P.arg=v,E?(this.method="next",this.next=E.finallyLoc,c):this.complete(P)},complete:function(x,v){if(x.type==="throw")throw x.arg;return x.type==="break"||x.type==="continue"?this.next=x.arg:x.type==="return"?(this.rval=this.arg=x.arg,this.method="return",this.next="end"):x.type==="normal"&&v&&(this.next=v),c},finish:function(x){for(var v=this.tryEntries.length-1;v>=0;--v){var N=this.tryEntries[v];if(N.finallyLoc===x)return this.complete(N.completion,N.afterLoc),Te(N),c}},catch:function(x){for(var v=this.tryEntries.length-1;v>=0;--v){var N=this.tryEntries[v];if(N.tryLoc===x){var F=N.completion;if(F.type==="throw"){var E=F.arg;Te(N)}return E}}throw new Error("illegal catch attempt")},delegateYield:function(x,v,N){return this.delegate={iterator:qe(x),resultName:v,nextLoc:N},this.method==="next"&&(this.arg=i),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Op);var Zi=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const bp=Zi;let fs=0;var Rc=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=bp("Job",fs),fs+=1),{id:r,action:t,payload:n}},En={};let qi=!1;En.logging=qi;En.setLogging=e=>{qi=e};En.log=(...e)=>qi?console.log.apply(void 0,e):null;const Dp=Rc,{log:Mr}=En,Ap=Zi;let ps=0;var Up=()=>{const e=Ap("Scheduler",ps),t={},n={};let r=[];ps+=1;const l=()=>r.length,o=()=>Object.keys(t).length,i=()=>{if(r.length!==0){const h=Object.keys(t);for(let f=0;f<h.length;f+=1)if(typeof n[h[f]]>"u"){r[0](t[h[f]]);break}}},s=(h,f)=>new Promise((g,S)=>{const k=Dp({action:h,payload:f});r.push(async b=>{r.shift(),n[b.id]=k;try{g(await b[h].apply(void 0,[...f,k.id]))}catch(p){S(p)}finally{delete n[b.id],i()}}),Mr(`[${e}]: Add ${k.id} to JobQueue`),Mr(`[${e}]: JobQueue length=${r.length}`),i()});return{addWorker:h=>(t[h.id]=h,Mr(`[${e}]: Add ${h.id}`),Mr(`[${e}]: Number of workers=${o()}`),i(),h.id),addJob:async(h,...f)=>{if(o()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(h,f)},terminate:async()=>{Object.keys(t).forEach(async h=>{await t[h].terminate()}),r=[]},getQueueLen:l,getNumWorkers:o}};function Bp(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Hp(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var $p=Hp;const Wp=$p;var Vp=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":Wp()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof Bp=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const Qp=Vp("type")==="browser",Kp=Qp?e=>new URL(e,window.location.href).href:e=>e;var Gp=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=Kp(t[n]))}),t},Yp=e=>{const t=[],n=[],r=[],l=[],o=[];return e.blocks&&e.blocks.forEach(i=>{i.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(y=>{o.push({...y,page:e,block:i,paragraph:s,line:u,word:d})}),l.push({...d,page:e,block:i,paragraph:s,line:u})}),r.push({...u,page:e,block:i,paragraph:s})}),n.push({...s,page:e,block:i})}),t.push({...i,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:l,symbols:o}},Ic={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Xp="5.1.1",Jp={version:Xp};var Zp={workerBlobURL:!0,logger:()=>{}};const qp=Jp.version,eh=Zp;var th={...eh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${qp}/dist/worker.min.js`},nh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},rh=e=>{e.terminate()},lh=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},oh=async(e,t)=>{e.postMessage(t)};const ao=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:l}}})=>{n(Error(`File could not be read! Code=${l}`))},r.readAsArrayBuffer(e)}),ri=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await ri(e.src)),e.tagName==="VIDEO"&&(t=await ri(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await ao(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await ao(n)}else(e instanceof File||e instanceof Blob)&&(t=await ao(e));return new Uint8Array(t)};var ih=ri;const ah=th,sh=nh,uh=rh,ch=lh,dh=oh,fh=ih;var ph={defaultOptions:ah,spawnWorker:sh,terminateWorker:uh,onMessage:ch,send:dh,loadImage:fh};const hh=Gp,mh=Yp,Ue=Rc,{log:hs}=En,gh=Zi,Ft=Ic,{defaultOptions:vh,spawnWorker:yh,terminateWorker:xh,onMessage:wh,loadImage:ms,send:kh}=ph;let gs=0;var Oc=async(e="eng",t=Ft.LSTM_ONLY,n={},r={})=>{const l=gh("Worker",gs),{logger:o,errorHandler:i,...s}=hh({...vh,...n}),u={},d={},y=typeof e=="string"?e.split("+"):e;let h=t,f=r;const g=[Ft.DEFAULT,Ft.LSTM_ONLY].includes(t)&&!s.legacyCore;let S,k;const b=new Promise((E,P)=>{k=E,S=P}),p=E=>{S(E.message)};let c=yh(s);c.onerror=p,gs+=1;const m=(E,P)=>{u[E]=P},j=(E,P)=>{d[E]=P},w=({id:E,action:P,payload:U})=>new Promise((D,B)=>{hs(`[${l}]: Start ${E}, action=${P}`);const Y=`${P}-${E}`;m(Y,D),j(Y,B),kh(c,{workerId:l,jobId:E,action:P,payload:U})}),z=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),_=E=>w(Ue({id:E,action:"load",payload:{options:{lstmOnly:g,corePath:s.corePath,logging:s.logging}}})),L=(E,P,U)=>w(Ue({id:U,action:"FS",payload:{method:"writeFile",args:[E,P]}})),I=(E,P)=>w(Ue({id:P,action:"FS",payload:{method:"readFile",args:[E,{encoding:"utf8"}]}})),R=(E,P)=>w(Ue({id:P,action:"FS",payload:{method:"unlink",args:[E]}})),G=(E,P,U)=>w(Ue({id:U,action:"FS",payload:{method:E,args:P}})),J=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),le=(E,P)=>w(Ue({id:P,action:"loadLanguage",payload:{langs:E,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Ft.DEFAULT,Ft.LSTM_ONLY].includes(h)&&!s.legacyLang}}})),Ze=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),Te=(E,P,U,D)=>w(Ue({id:D,action:"initialize",payload:{langs:E,oem:P,config:U}})),Me=(E="eng",P,U,D)=>{if(g&&[Ft.TESSERACT_ONLY,Ft.TESSERACT_LSTM_COMBINED].includes(P))throw Error("Legacy model requested but code missing.");const B=P||h;h=B;const Y=U||f;f=Y;const et=(typeof E=="string"?E.split("+"):E).filter(tt=>!y.includes(tt));return y.push(...et),et.length>0?le(et,D).then(()=>Te(E,B,Y,D)):Te(E,B,Y,D)},qe=(E={},P)=>w(Ue({id:P,action:"setParameters",payload:{params:E}})),T=async(E,P={},U={blocks:!0,text:!0,hocr:!0,tsv:!0},D)=>w(Ue({id:D,action:"recognize",payload:{image:await ms(E),options:P,output:U}})),x=(E="Tesseract OCR Result",P=!1,U)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),w(Ue({id:U,action:"getPDF",payload:{title:E,textonly:P}}))),v=async(E,P)=>{if(g)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return w(Ue({id:P,action:"detect",payload:{image:await ms(E)}}))},N=async()=>(c!==null&&(xh(c),c=null),Promise.resolve());wh(c,({workerId:E,jobId:P,status:U,action:D,data:B})=>{const Y=`${D}-${P}`;if(U==="resolve"){hs(`[${E}]: Complete ${P}`);let ft=B;D==="recognize"?ft=mh(B):D==="getPDF"&&(ft=Array.from({...B,length:Object.keys(B).length})),u[Y]({jobId:P,data:ft})}else if(U==="reject")if(d[Y](B),D==="load"&&S(B),i)i(B);else throw Error(B);else U==="progress"&&o({...B,userJobId:P})});const F={id:l,worker:c,setResolve:m,setReject:j,load:z,writeText:L,readText:I,removeFile:R,FS:G,loadLanguage:J,initialize:Ze,reinitialize:Me,setParameters:qe,recognize:T,getPDF:x,detect:v,terminate:N};return _().then(()=>le(e)).then(()=>Te(e,t,r)).then(()=>k(F)).catch(()=>{}),b};const bc=Oc,Sh=async(e,t,n)=>{const r=await bc(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},jh=async(e,t)=>{const n=await bc("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Nh={recognize:Sh,detect:jh},Eh={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Ch={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const zh=Up,_h=Oc,Lh=Nh,Ph=Eh,Th=Ic,Mh=Ch,{setLogging:Fh}=En;var Rh={languages:Ph,OEM:Th,PSM:Mh,createScheduler:zh,createWorker:_h,setLogging:Fh,...Lh};const Ih=vs(Rh),Fr={hemoglobin:{min:12.5,max:16,unit:"gm/dl",foods:["Spinach","Red Meat","Pumpkin Seeds"],impact:{low:"You may experience higher fatigue during cardio. Consider lower intensity now.",high:"Rarely caused by high altitude or smoking. Ensure good hydration."}},total_count:{min:4e3,max:11e3,unit:"cells/cumm",foods:["Vitamin C","Garlic","Ginger"],impact:{low:"Immunity might be lower. Skip high-intensity sessions if you feel weak.",high:"Body is fighting something. Rest and recover properly."}},neutrophil:{min:40,max:70,unit:"%",foods:[],impact:{}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{}},eosinophil:{min:2,max:8,unit:"%",foods:[],impact:{}},monocyte:{min:1,max:6,unit:"%",foods:[],impact:{}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},platelet_count:{min:1.5,max:4.5,unit:"Lakhs/cumm",foods:["Papaya Leaf","Pomegranate"],impact:{low:"Careful to avoid injury. High-impact sports are not recommended.",high:"Can indicate inflammation. Focus on recovery."}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory foods"],impact:{high:"High inflammation. Focus on light movement and stretching."}},mcv:{min:80,max:100,unit:"fL",foods:["Vitamin B12","Folic Acid"],impact:{low:"Lower oxygen capacity. Strength training may feel significantly harder."}},mch:{min:27,max:32,unit:"pg",foods:["Iron rich foods"],impact:{low:"Fatigue risk. Focus on foundational strength movements."}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},t3:{min:.85,max:2.68,unit:"nmol/L",foods:["Brazil Nuts"," Seaweed"],impact:{low:"Lowered metabolism. You might find it harder to maintain energy."}},t4:{min:5.1,max:14.1,unit:"ug/dL",foods:["Dairy","Eggs","Fish"],impact:{low:"Similar to T3, watch for sluggishness during workouts."}},tsh:{min:.27,max:4.2,unit:"uIU/mL",foods:["Avoid cruciferous veg if hypothyroid"],impact:{high:"Watch for weight gain and low energy levels during routine."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Low Carb","High Fiber"],impact:{high:"Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.",low:"Potential for dizziness. Have a small snack before exercise."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Complex Carbs","Vegetables"],impact:{high:"Spikes can affect recovery. A 10-min walk after meals is recommended."}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Nuts","Olive Oil"],impact:{high:"Focus on heart-healthy cardio like swimming or brisk walking."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["Avoid Sugar","Eat Fish"],impact:{high:"Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio."}},hdl_cholesterol:{min:40,max:60,unit:"mg/dL",foods:["Avocado","Salmon"],impact:{low:"HIIT or intensive cardio can help boost this 'good' cholesterol."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber","Soy","Almonds"],impact:{high:"Heart health priority. Daily steady movement is mandatory."}},urea:{min:15,max:40,unit:"mg/dL",foods:["Reduce Protein","Hydrate"],impact:{high:"Kidney stress. Hydrate well and limit protein supplement intake temporarily."}},creatinine:{min:.6,max:1.2,unit:"mg/dL",foods:["Reduce Red Meat","Hydrate"],impact:{high:"Ensure excellent hydration; avoid over-exertion in extreme heat."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Avoid Alcohol","Cherries","Vitamin C"],impact:{high:"Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore."}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Hydrate"],impact:{low:"Performance risk. Monitor salt loss during long workout sessions."}},potassium:{min:3.5,max:5.5,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"High risk of muscle cramps. Ensure steady electrolyte intake."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon Water"],impact:{high:"Liver stress. Keep training intensity moderate and skip supplements."}},sgot:{min:5,max:40,unit:"U/L",foods:["Leafy Greens","Coffee"],impact:{high:"Could be muscle damage from training or liver stress. Take a rest day."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole Grains","Avoid Alcohol"],impact:{high:"Focus on recovery. Avoid using pain killers like Tylenol if high."}},alkaline_phosphatase:{min:44,max:147,unit:"IU/L",foods:["Vitamin D"],impact:{low:"Vitamin D deficiency. Impacts bone health and muscle strength."}}},Oh=({onBack:e})=>{const[t,n]=O.useState(null),[r,l]=O.useState(null),[o,i]=O.useState([]),[s,u]=O.useState(!1),[d,y]=O.useState(""),[h,f]=O.useState("hemoglobin"),[g,S]=O.useState(""),[k,b]=O.useState(null);O.useEffect(()=>{const w=localStorage.getItem("blood_reports");w&&i(JSON.parse(w))},[]);const p=async w=>{u(!0),y("Starting OCR Engine...");try{const{data:{text:z}}=await Ih.recognize(w,"eng",{logger:I=>y(`${I.status} (${Math.round(I.progress*100)}%)`)});console.log("Raw OCR Text:",z);const _={},L=z.toLowerCase().replace(/[^a-z0-9\s\.]/g," ").replace(/\s+/g," ");if(Object.keys(Fr).forEach(I=>{const R=I.replace(/_/g," "),G=new RegExp(`${R}.{0,30}\\s(\\d{1,3}(\\.\\d{1,2})?)`,"i"),J=L.match(G);J&&J[1]&&(_[I]=parseFloat(J[1]))}),!_.platelet_count&&L.includes("platelet")){const I=L.match(/platelet.{0,20}\s(\d+(\.\d+)?)/i);I&&(_.platelet_count=parseFloat(I[1]))}if(Object.keys(_).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+z.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+z),u(!1);return}m({date:new Date().toLocaleDateString(),values:_})}catch(z){console.error(z),alert("Error parsing image. Please try a clearer photo.")}finally{u(!1),y("")}},c=w=>{const z=w.target.files[0];z&&(z.type.startsWith("image/")?(n(z),p(z)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},m=w=>{const z=[],_=[];Object.keys(w.values).forEach(R=>{var Te,Me;const G=parseFloat(w.values[R]),J=Fr[R];if(!J)return;let le="Normal";G<J.min&&(le="Low"),G>J.max&&(le="High");const Ze=le==="Low"?(Te=J.impact)==null?void 0:Te.low:le==="High"?(Me=J.impact)==null?void 0:Me.high:null;le!=="Normal"&&_.push({parameter:R,status:le,foods:J.foods,fitnessImpact:Ze}),z.push({parameter:R,value:G,unit:J.unit,range:`${J.min}-${J.max}`,status:le,fitnessImpact:Ze})});const L={...w,results:z,suggestions:_};l(L);const I=[L,...o];i(I),localStorage.setItem("blood_reports",JSON.stringify(I))},j=w=>{var I,R;if(w.preventDefault(),!g)return;const z=parseFloat(g),_=Fr[h];let L="Normal";z<_.min&&(L="Low"),z>_.max&&(L="High"),b({parameter:h,value:z,unit:_.unit,range:`${_.min}-${_.max}`,status:L,foods:_.foods,fitnessImpact:L==="Low"?(I=_.impact)==null?void 0:I.low:L==="High"?(R=_.impact)==null?void 0:R.high:null})};return a.jsxs("div",{className:"blood-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Blood Evaluation"})]}),r?a.jsxs("div",{className:"results-section fade-in",children:[a.jsxs("div",{className:"results-header",children:[a.jsx("h3",{children:"Report Analysis"}),a.jsx("button",{className:"text-btn",onClick:()=>l(null),children:"Close"})]}),a.jsx("div",{className:"params-list",children:r.results.map((w,z)=>a.jsxs("div",{className:"param-card",children:[a.jsxs("div",{className:"param-header",children:[a.jsx("h4",{children:w.parameter.replace(/_/g," ").toUpperCase()}),a.jsxs("span",{className:`status-badge ${w.status.toLowerCase()}`,children:[w.status==="Normal"&&a.jsx(wp,{size:14}),w.status==="High"&&a.jsx(gp,{size:14}),w.status==="Low"&&a.jsx(mp,{size:14}),w.status]})]}),a.jsxs("div",{className:"param-value",children:[a.jsx("span",{className:"val",children:w.value}),a.jsx("span",{className:"unit",children:w.unit})]}),a.jsxs("p",{className:"range-info",children:["Ref Range: ",w.range]})]},z))}),r.suggestions.length>0&&a.jsxs("div",{className:"suggestions-box",children:[a.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),r.suggestions.map((w,z)=>a.jsxs("div",{className:"suggestion-item",children:[a.jsx("div",{className:"suggestion-header",children:a.jsxs("strong",{children:[w.status," ",w.parameter.replace(/_/g," ").toUpperCase()]})}),w.foods.length>0&&a.jsxs("p",{className:"food-list",children:["💡 ",a.jsx("b",{children:"Diety Tip:"})," Eat ",w.foods.join(", ")]}),w.fitnessImpact&&a.jsxs("p",{className:"fitness-list",children:["⚡ ",a.jsx("b",{children:"Fitness Impact:"})," ",w.fitnessImpact]})]},z))]})]}):a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"card manual-card",children:[a.jsx("h3",{children:"Quick Check"}),a.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),a.jsxs("form",{onSubmit:j,className:"manual-form",children:[a.jsxs("div",{className:"row",children:[a.jsx("select",{className:"input-field",value:h,onChange:w=>{f(w.target.value),b(null)},children:Object.keys(Fr).map(w=>a.jsx("option",{value:w,children:w.replace(/_/g," ").toUpperCase()},w))}),a.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:g,onChange:w=>S(w.target.value),required:!0})]}),a.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",a.jsx(Ep,{size:16})]})]}),k&&a.jsxs("div",{className:"manual-result fade-in",children:[a.jsx("div",{className:`result-badge ${k.status.toLowerCase()}`,children:k.status}),a.jsxs("p",{className:"result-text",children:[a.jsxs("strong",{children:[k.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",k.value," ",k.unit,a.jsx("br",{}),a.jsxs("span",{className:"text-muted",children:["Normal: ",k.range]})]}),k.status!=="Normal"&&k.foods.length>0&&a.jsxs("div",{className:"diet-tip",children:[a.jsx("strong",{children:"Tip:"})," Eat ",k.foods.join(", ")]}),k.fitnessImpact&&a.jsxs("div",{className:"fitness-tip",children:[a.jsx("strong",{children:"Fitness Impact:"})," ",k.fitnessImpact]})]})]}),a.jsx("div",{className:"divider",children:"OR"}),a.jsxs("div",{className:"upload-card",children:[a.jsx("div",{className:"icon-circle",children:a.jsx(Pp,{size:32,color:"var(--color-primary)"})}),a.jsx("h3",{children:"Upload Report Image"}),a.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),a.jsxs("label",{className:"btn-secondary upload-btn",children:[s?d||"Scanning...":"Select Image (JPG/PNG)",a.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:c,disabled:s})]})]}),o.length>0&&a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Recent Reports"}),o.map((w,z)=>a.jsxs("div",{className:"history-item",onClick:()=>l(w),children:[a.jsx(Tc,{size:18,className:"text-muted"}),a.jsx("span",{children:w.date}),a.jsx("span",{className:"arrow",children:"→"})]},z))]})]}),a.jsx("style",{children:`
        .blood-container {
           padding: var(--spacing-md);
        }
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
      `})]})},Rr={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},bh=({userProfile:e,onBack:t})=>{const[n,r]=O.useState(null),[l,o]=O.useState(0),[i,s]=O.useState(null);O.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:y,heightCm:h,age:f,gender:g}=e;let S=10*y+6.25*h-5*f;g==="male"?S+=5:S-=161;let k=Math.round(S*1.375);return n==="loss"?k-500:n==="gain"?k+500:k},d=()=>{const y=u();o(y);const h=f=>f[Math.floor(Math.random()*f.length)];s({breakfast:h(Rr.breakfast),lunch:h(Rr.lunch),snack:h(Rr.snack),dinner:h(Rr.dinner)})};return a.jsxs("div",{className:"fitness-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Fitness Helper"})]}),n?a.jsxs("div",{className:"plan-view fade-in",children:[a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{className:"cal-target",children:[a.jsx("span",{className:"label",children:"Daily Target"}),a.jsx("h1",{children:l}),a.jsx("span",{className:"unit",children:"kcal"})]}),a.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),a.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),a.jsxs("div",{className:"meals-list",children:[a.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),i&&a.jsxs(a.Fragment,{children:[a.jsx(Ir,{type:"Breakfast",icon:a.jsx(cs,{size:18}),data:i.breakfast}),a.jsx(Ir,{type:"Lunch",icon:a.jsx(Gr,{size:18}),data:i.lunch}),a.jsx(Ir,{type:"Snack",icon:a.jsx(cs,{size:18}),data:i.snack}),a.jsx(Ir,{type:"Dinner",icon:a.jsx(Gr,{size:18}),data:i.dinner})]})]})]}):a.jsxs("div",{className:"goal-selection",children:[a.jsx("h3",{children:"What is your goal?"}),a.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[a.jsx("div",{className:"icon-box loss",children:a.jsx(zp,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Loss"}),a.jsx("p",{children:"Reduce body fat locally."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[a.jsx("div",{className:"icon-box maintain",children:a.jsx(Mp,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Maintain Weight"}),a.jsx("p",{children:"Stay healthy and fit."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[a.jsx("div",{className:"icon-box gain",children:a.jsx(Gr,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Gain"}),a.jsx("p",{children:"Build muscle mass."})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Ir=({type:e,icon:t,data:n})=>a.jsxs("div",{className:"meal-card",children:[a.jsxs("div",{className:"meal-info",children:[a.jsxs("h4",{children:[t," ",e]}),a.jsx("p",{children:n.name})]}),a.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),Dh=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],Ah=({onBack:e})=>{const[t,n]=O.useState(null);return a.jsxs("div",{className:"workout-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Home Workouts"})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("div",{className:"intro-icon",children:a.jsx(ds,{size:28,color:"#FF6B6B"})}),a.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),a.jsx("div",{className:"workout-list",children:Dh.map(r=>a.jsxs("div",{className:"workout-card",children:[a.jsxs("div",{className:"w-header",children:[a.jsx("h3",{children:r.name}),a.jsxs("span",{className:"cal-badge",children:[a.jsx(ds,{size:12,fill:"currentColor"})," ",r.calories]})]}),a.jsx("p",{className:"w-desc",children:r.desc}),a.jsxs("div",{className:"w-footer",children:[a.jsxs("span",{className:"duration",children:[a.jsx(_p,{size:14})," ",r.duration]}),a.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&a.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:a.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[a.jsx("button",{className:"close-btn",onClick:()=>n(null),children:a.jsx(Fc,{size:24})}),a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:t.name}),a.jsx("span",{className:"cal-pill",children:t.calories})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("h4",{children:[a.jsx(kp,{size:16})," How to do it:"]}),a.jsx("ul",{className:"steps-list",children:t.steps.map((r,l)=>a.jsxs("li",{children:[a.jsx("span",{className:"step-num",children:l+1}),r]},l))})]})]})}),a.jsx("style",{children:`
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
                .duration {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-weight: 500;
                }
                .start-btn {
                    background: transparent;
                    color: var(--color-primary);
                    font-size: 12px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                /* MODAL */
                .modal-overlay {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.6);
                    z-index: 1000;
                    display: flex;
                    align-items: flex-end; /* Bottom sheet on mobile */
                    justify-content: center;
                }
                @media (min-width: 500px) {
                    .modal-overlay { align-items: center; }
                    .modal-content { max-width: 400px; border-radius: var(--radius-lg); }
                }

                .modal-content {
                    background: white;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    border-radius: 20px 20px 0 0;
                    padding: 20px;
                    position: relative;
                    animation: slideUp 0.3s ease-out;
                }
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }

                .close-btn {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #f1f5f9;
                    border-radius: 50%;
                    width: 32px; height: 32px;
                    display: flex; align-items: center; justify-content: center;
                    color: #64748b;
                }

                .modal-header { margin-bottom: 15px; padding-right: 40px; }
                .modal-header h3 { font-size: 20px; color: var(--color-text-main); margin-bottom: 5px; }
                .cal-pill { 
                    font-size: 12px; background: #ffe4e6; color: #be123c; 
                    padding: 4px 10px; border-radius: 99px; font-weight: bold; 
                }

                .video-placeholder {
                    width: 100%;
                    height: 180px;
                    background: #1e293b;
                    border-radius: var(--radius-md);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.7);
                    font-size: 12px;
                    margin-bottom: 20px;
                }
                .play-circle { margin-bottom: 10px; opacity: 0.8; }

                .modal-body h4 { display: flex; align-items: center; gap: 8px; font-size: 14px; margin-bottom: 10px; }
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

                .modal-footer-stats {
                    margin-top: 20px;
                    padding-top: 15px;
                    border-top: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .m-stat { display: flex; flex-direction: column; font-size: 12px; color: #64748b; }
                .m-stat strong { font-size: 16px; color: var(--color-text-main); }
                
                .start-now-btn {
                    background: var(--color-primary);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 99px;
                    font-weight: 600;
                    box-shadow: var(--shadow-md);
                }
            `})]})},Uh=({onBack:e,userProfile:t})=>{const[n,r]=O.useState(()=>{const h=localStorage.getItem("weight_log");return h?JSON.parse(h):[]}),[l,o]=O.useState(""),i=()=>{if(!l||isNaN(l))return;const h={weight:parseFloat(l),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},f=[...n,h];r(f),localStorage.setItem("weight_log",JSON.stringify(f)),o("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const h=n[n.length-1].weight,f=n[n.length-2].weight,g=h-f;return{change:Math.abs(g).toFixed(1),type:g>0?"gain":g<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),y=n.length>0?n[n.length-1].weight:d;return a.jsxs("div",{className:"weight-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Weight Progress"})]}),a.jsxs("div",{className:"stats-card",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Starting Weight"}),a.jsxs("span",{className:"value",children:[d," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Current Weight"}),a.jsxs("span",{className:"value primary",children:[y," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Change"}),a.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&a.jsx(Mc,{size:16}),u.type==="loss"&&a.jsx(Lp,{size:16}),u.type==="neutral"&&a.jsx(Np,{size:16}),u.change," kg"]})]})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("h3",{children:"Log Current Weight"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:l,onChange:h=>o(h.target.value),step:"0.1"}),a.jsx("button",{className:"add-btn",onClick:i,children:"Add"})]})]}),a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Weight History"}),n.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(ni,{size:40,color:"#cbd5e1"}),a.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):a.jsx("div",{className:"history-list",children:[...n].reverse().map((h,f)=>a.jsxs("div",{className:"history-item",children:[a.jsxs("div",{className:"date-badge",children:[a.jsx(xp,{size:14}),h.displayDate]}),a.jsxs("div",{className:"weight-display",children:[h.weight," kg"]})]},f))})]}),a.jsx("style",{children:`
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
            `})]})},Bh=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],Hh=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],$h=({onBack:e})=>{const[t,n]=O.useState([{id:1,text:"Hello! I'm your Health & Fitness Assistant. Ask me anything about your blood report, nutrition, or workout strategy.",sender:"bot"}]),[r,l]=O.useState(""),[o,i]=O.useState(!1),s=O.useRef(null),u=()=>{var f;(f=s.current)==null||f.scrollIntoView({behavior:"smooth"})};O.useEffect(()=>{u()},[t]);const d=f=>{const g=f.toLowerCase();return Hh.some(k=>g.includes(k))?g.includes("protein")?"Protein is the building block of muscle. For vegetarians: Paneer, Dal, Chickpeas, Soy, and Milk are great. For non-vegetarians: Chicken breast, Fish, and Eggs are gold standards. Aim for 1.2g to 2g of protein per kg of body weight depending on your activity level.":g.includes("pre-workout")||g.includes("before gym")||g.includes("before workout")?"A good pre-workout snack should have easily digestible carbs. A banana is perfect. Alternatively, try oats or a slice of whole-grain bread with peanut butter. Avoid high-fat meals right before training as they digest slowly.":g.includes("post-workout")||g.includes("after gym")||g.includes("after workout")?"Post-workout, your body needs protein and some carbs to recover. A protein shake with a fruit, or a meal with chicken/paneer and rice/sweet potato is ideal. Try to eat within 1-2 hours after training.":g.includes("muscle")?"Building muscle requires consistent resistance training and a slight calorie surplus. Focus on compound movements like squats, pushups, and deadlifts. Don't forget recovery—muscles grow while you sleep, not while you train!":g.includes("cardio")?"Cardio is vital for heart health. For fat loss, Zone 2 cardio (where you can still talk while running/walking) is great. For endurance, try HIIT (High-Intensity Interval Training). Aim for at least 150 minutes of moderate activity per week.":g.includes("bmi")?"BMI (Body Mass Index) helps categorize weight. A healthy range is 18.5 - 24.9. However, it doesn't measure body fat percentage, so muscular people might show as 'overweight' despite being fit. Check your waist-to-height ratio for more accuracy.":g.includes("diet")||g.includes("food")?"A healthy diet is 80% whole foods. Focus on 'eating the rainbow' (variety of veg), adequate protein, and healthy fats. In Kerala, try to balance parboiled rice with more fish, pulses, and leafy greens while reducing fried snacks.":g.includes("hemoglobin")||g.includes("blood")?"Normal hemoglobin levels are 12-16 g/dL. Low levels cause fatigue during workouts. Boost it with iron-rich foods like spinach, beetroot, pomegranate, and red meat. Always take Vitamin C (like lemon) with iron for better absorption.":g.includes("sugar")||g.includes("glucose")?"To manage blood sugar, focus on complex carbs (brown rice, oats) instead of simple carbs (white sugar, maida). Fiber slows down sugar absorption. Regular walking after meals significantly helps sensitive insulin levels.":g.includes("weight")||g.includes("fat")?"Fat loss happens when you are in a calorie deficit (burning more than you eat). Avoid 'crash diets'. Instead, focus on high-protein, high-fiber intake and consistent movement to keep your metabolism high.":g.includes("sleep")||g.includes("rest")?"Sleep is the most underrated fitness tool. Most recovery and muscle growth happen during deep sleep. Aim for 7-9 hours of quality rest per night for optimal hormones and performance.":"That's a valid health query. Generally, focusing on whole foods, 7-8 hours of sleep, and 30 minutes of daily movement will solve 90% of health issues. Consult a professional for specific clinic advice!":"I apologize, but I'm specialized in Health, Blood Reports, Nutrition, and Fitness. For other topics, I might not have the best info. Ask me about your protein intake or blood levels! 🏥"},y=f=>{if(f.preventDefault(),!r.trim())return;const g={id:Date.now(),text:r,sender:"user"};n(S=>[...S,g]),l(""),i(!0),setTimeout(()=>{const S={id:Date.now()+1,text:d(g.text),sender:"bot"};n(k=>[...k,S]),i(!1)},1200)},h=f=>{const g={id:Date.now(),text:f.q,sender:"user"};n(S=>[...S,g]),i(!0),setTimeout(()=>{const S={id:Date.now()+1,text:f.a,sender:"bot"};n(k=>[...k,S]),i(!1)},1200)};return a.jsxs("div",{className:"chat-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Health Assistant"})]}),a.jsxs("div",{className:"chat-window",children:[t.map(f=>a.jsxs("div",{className:`message-row ${f.sender}`,children:[f.sender==="bot"&&a.jsx("div",{className:"avatar bot",children:a.jsx(us,{size:16})}),a.jsx("div",{className:"message-bubble",children:f.text}),f.sender==="user"&&a.jsx("div",{className:"avatar user",children:a.jsx(Tp,{size:16})})]},f.id)),o&&a.jsxs("div",{className:"message-row bot",children:[a.jsx("div",{className:"avatar bot",children:a.jsx(us,{size:16})}),a.jsxs("div",{className:"message-bubble typing",children:[a.jsx("span",{children:"."}),a.jsx("span",{children:"."}),a.jsx("span",{children:"."})]})]}),a.jsx("div",{ref:s})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("div",{className:"chips-row",children:Bh.map((f,g)=>a.jsx("button",{className:"chip",onClick:()=>h(f),disabled:o,children:f.q},g))}),a.jsxs("form",{onSubmit:y,className:"input-form",children:[a.jsx("input",{type:"text",value:r,onChange:f=>l(f.target.value),placeholder:"Ask about health...",className:"chat-input"}),a.jsx("button",{type:"submit",className:"send-btn",children:a.jsx(Cp,{size:20})})]})]}),a.jsx("style",{children:`
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
      `})]})},Wh=({message:e,onClose:t})=>(O.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),a.jsxs("div",{className:"toast-notification",children:[a.jsx("div",{className:"icon-bg",children:a.jsx(vp,{size:20})}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"Reminder"}),a.jsx("p",{children:e})]}),a.jsx("button",{onClick:t,className:"close-btn",children:"×"}),a.jsx("style",{children:`
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
       `})]}));function Vh(){const[e,t]=O.useState("login"),[n,r]=O.useState(null),[l,o]=O.useState(null),[i,s]=O.useState(null);_s.useEffect(()=>{const f=localStorage.getItem("user_profile");f&&o(JSON.parse(f));const g=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],S=setInterval(()=>{const k=g[Math.floor(Math.random()*g.length)];s(k)},12e4);return()=>clearInterval(S)},[]);const u=f=>{r(f),localStorage.getItem("user_profile")?(o(JSON.parse(localStorage.getItem("user_profile"))),t("dashboard")):t("profile_setup")},d=f=>{o(f),localStorage.setItem("user_profile",JSON.stringify(f)),t("dashboard")},y=f=>{t(f)},h=()=>{localStorage.removeItem("user_profile"),r(null),o(null),t("login")};return a.jsxs("div",{className:"app-container",children:[i&&a.jsx(Wh,{message:i,onClose:()=>s(null)}),e==="login"&&a.jsx(dp,{onLogin:u}),e==="profile_setup"&&a.jsx(fp,{onComplete:d}),e==="dashboard"&&a.jsx(Rp,{userName:l==null?void 0:l.name,onNavigate:y,onLogout:h}),e==="bmi"&&a.jsx(Ip,{userProfile:l,onBack:()=>t("dashboard")}),e==="blood"&&a.jsx(Oh,{onBack:()=>t("dashboard")}),e==="fitness"&&a.jsx(bh,{userProfile:l,onBack:()=>t("dashboard")}),e==="homeworkout"&&a.jsx(Ah,{onBack:()=>t("dashboard")}),e==="weightprogress"&&a.jsx(Uh,{userProfile:l,onBack:()=>t("dashboard")}),e==="chat"&&a.jsx($h,{onBack:()=>t("dashboard")})]})}so.createRoot(document.getElementById("root")).render(a.jsx(_s.StrictMode,{children:a.jsx(Vh,{})}));
