(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function vs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ys={exports:{}},xo={},xs={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Dc=Symbol.for("react.portal"),Ac=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Hc=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Yc=Symbol.for("react.lazy"),ea=Symbol.iterator;function Gc(e){return e===null||typeof e!="object"?null:(e=ea&&e[ea]||e["@@iterator"],typeof e=="function"?e:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ks=Object.assign,Ss={};function kn(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function js(){}js.prototype=kn.prototype;function oi(e,t,n){this.props=e,this.context=t,this.refs=Ss,this.updater=n||ws}var li=oi.prototype=new js;li.constructor=oi;ks(li,kn.prototype);li.isPureReactComponent=!0;var ta=Array.isArray,Ns=Object.prototype.hasOwnProperty,ii={current:null},Es={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Ns.call(t,r)&&!Es.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:l,ref:i,props:o,_owner:ii.current}}function Kc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ai(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var na=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Fr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case cr:case Dc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Fo(i,0):r,ta(o)?(n="",e!=null&&(n=e.replace(na,"$&/")+"/"),Fr(o,t,n,"",function(d){return d})):o!=null&&(ai(o)&&(o=Kc(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(na,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ta(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Fo(l,s);i+=Fr(l,t,n,u,o)}else if(u=Gc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Fo(l,s++),i+=Fr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function mr(e,t,n){if(e==null)return e;var r=[],o=0;return Fr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ir={transition:null},Zc={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ii};function zs(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ai(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=kn;U.Fragment=Ac;U.Profiler=Bc;U.PureComponent=oi;U.StrictMode=Uc;U.Suspense=Vc;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc;U.act=zs;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ks({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=ii.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ns.call(t,u)&&!Es.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:l,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:Hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$c,_context:e},e.Consumer=e};U.createElement=Cs;U.createFactory=function(e){var t=Cs.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Wc,render:e}};U.isValidElement=ai;U.lazy=function(e){return{$$typeof:Yc,_payload:{_status:-1,_result:e},_init:Jc}};U.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};U.unstable_act=zs;U.useCallback=function(e,t){return Se.current.useCallback(e,t)};U.useContext=function(e){return Se.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};U.useEffect=function(e,t){return Se.current.useEffect(e,t)};U.useId=function(){return Se.current.useId()};U.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Se.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};U.useRef=function(e){return Se.current.useRef(e)};U.useState=function(e){return Se.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Se.current.useTransition()};U.version="18.3.1";xs.exports=U;var F=xs.exports;const _s=vs(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=F,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,od={key:!0,ref:!0,__self:!0,__source:!0};function Ls(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)nd.call(t,r)&&!od.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ed,type:e,key:l,ref:i,props:o,_owner:rd.current}}xo.Fragment=td;xo.jsx=Ls;xo.jsxs=Ls;ys.exports=xo;var a=ys.exports,ul={},Ps={exports:{}},Me={},bs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,g){var v=z.length;z.push(g);e:for(;0<v;){var j=v-1>>>1,b=z[j];if(0<o(b,g))z[j]=g,z[v]=b,v=j;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var g=z[0],v=z.pop();if(v!==g){z[0]=v;e:for(var j=0,b=z.length,N=b>>>1;j<N;){var _=2*(j+1)-1,B=z[_],A=_+1,H=z[A];if(0>o(B,v))A<b&&0>o(H,B)?(z[j]=H,z[A]=v,j=A):(z[j]=B,z[_]=v,j=_);else if(A<b&&0>o(H,v))z[j]=H,z[A]=v,j=A;else break e}}return g}function o(z,g){var v=z.sortIndex-g.sortIndex;return v!==0?v:z.id-g.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],y=1,h=null,f=3,x=!1,k=!1,w=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var g=n(d);g!==null;){if(g.callback===null)r(d);else if(g.startTime<=z)r(d),g.sortIndex=g.expirationTime,t(u,g);else break;g=n(d)}}function S(z){if(w=!1,m(z),!k)if(n(u)!==null)k=!0,ae(C);else{var g=n(d);g!==null&&le(S,g.startTime-z)}}function C(z,g){k=!1,w&&(w=!1,p(R),R=-1),x=!0;var v=f;try{for(m(g),h=n(u);h!==null&&(!(h.expirationTime>g)||z&&!M());){var j=h.callback;if(typeof j=="function"){h.callback=null,f=h.priorityLevel;var b=j(h.expirationTime<=g);g=e.unstable_now(),typeof b=="function"?h.callback=b:h===n(u)&&r(u),m(g)}else r(u);h=n(u)}if(h!==null)var N=!0;else{var _=n(d);_!==null&&le(S,_.startTime-g),N=!1}return N}finally{h=null,f=v,x=!1}}var L=!1,P=null,R=-1,$=5,I=-1;function M(){return!(e.unstable_now()-I<$)}function D(){if(P!==null){var z=e.unstable_now();I=z;var g=!0;try{g=P(!0,z)}finally{g?Q():(L=!1,P=null)}}else L=!1}var Q;if(typeof c=="function")Q=function(){c(D)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,oe=K.port2;K.port1.onmessage=D,Q=function(){oe.postMessage(null)}}else Q=function(){O(D,0)};function ae(z){P=z,L||(L=!0,Q())}function le(z,g){R=O(function(){z(e.unstable_now())},g)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,ae(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var g=3;break;default:g=f}var v=f;f=g;try{return z()}finally{f=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,g){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var v=f;f=z;try{return g()}finally{f=v}},e.unstable_scheduleCallback=function(z,g,v){var j=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?j+v:j):v=j,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=v+b,z={id:y++,callback:g,priorityLevel:z,startTime:v,expirationTime:b,sortIndex:-1},v>j?(z.sortIndex=v,t(d,z),n(u)===null&&z===n(d)&&(w?(p(R),R=-1):w=!0,le(S,v-j))):(z.sortIndex=b,t(u,z),k||x||(k=!0,ae(C))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var g=f;return function(){var v=f;f=g;try{return z.apply(this,arguments)}finally{f=v}}}})(Ts);bs.exports=Ts;var ld=bs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=F,Te=ld;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ms=new Set,Yn={};function Qt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Ms.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra={},oa={};function sd(e){return cl.call(oa,e)?!0:cl.call(ra,e)?!1:ad.test(e)?oa[e]=!0:(ra[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var si=/[\-:]([a-z])/g;function ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(si,ui);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(si,ui);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(si,ui);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ci(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,o,r)&&(n=null),r||o===null?sd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),di=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Rs=Symbol.for("react.provider"),Fs=Symbol.for("react.context"),fi=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),pi=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Is=Symbol.for("react.offscreen"),la=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Io;function Rn(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Oo=!1;function Do(e,t){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function dd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Do(e.type,!1),e;case 11:return e=Do(e.type.render,!1),e;case 1:return e=Do(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Kt:return"Portal";case dl:return"Profiler";case di:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fs:return(e.displayName||"Context")+".Consumer";case Rs:return(e._context.displayName||"Context")+".Provider";case fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pi:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Os(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=Os(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=pd(e))}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Os(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&ci(e,"checked",t,!1)}function gl(e,t){As(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Fn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function Us(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Hs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Hs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var md=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,un=null,cn=null;function ca(e){if(e=pr(e)){if(typeof jl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=No(t),jl(e.stateNode,e.type,t))}}function Vs(e){un?cn?cn.push(e):cn=[e]:un=e}function Qs(){if(un){var e=un,t=cn;if(cn=un=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function Ys(e,t){return e(t)}function Gs(){}var Ao=!1;function Ks(e,t,n){if(Ao)return e(t,n);Ao=!0;try{return Ys(e,t,n)}finally{Ao=!1,(un!==null||cn!==null)&&(Gs(),Qs())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=No(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Nl=!1;if(at)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Nl=!1}function gd(e,t,n,r,o,l,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var An=!1,Kr=null,Xr=!1,El=null,vd={onError:function(e){An=!0,Kr=e}};function yd(e,t,n,r,o,l,i,s,u){An=!1,Kr=null,gd.apply(vd,arguments)}function xd(e,t,n,r,o,l,i,s,u){if(yd.apply(this,arguments),An){if(An){var d=Kr;An=!1,Kr=null}else throw Error(E(198));Xr||(Xr=!0,El=d)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function da(e){if(Yt(e)!==e)throw Error(E(188))}function wd(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return da(o),e;if(l===r)return da(o),t;l=l.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Js(e){return e=wd(e),e!==null?Zs(e):null}function Zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zs(e);if(t!==null)return t;e=e.sibling}return null}var qs=Te.unstable_scheduleCallback,fa=Te.unstable_cancelCallback,kd=Te.unstable_shouldYield,Sd=Te.unstable_requestPaint,ie=Te.unstable_now,jd=Te.unstable_getCurrentPriorityLevel,mi=Te.unstable_ImmediatePriority,eu=Te.unstable_UserBlockingPriority,Jr=Te.unstable_NormalPriority,Nd=Te.unstable_LowPriority,tu=Te.unstable_IdlePriority,wo=null,Ze=null;function Ed(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:_d,Cd=Math.log,zd=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(Cd(e)/zd|0)|0}var xr=64,wr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=In(s):(l&=i,l!==0&&(r=In(l)))}else i=n&~o,i!==0?r=In(i):l!==0&&(r=In(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Qe(l),s=1<<i,u=o[i];u===-1?(!(s&n)||s&r)&&(o[i]=Ld(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,vi,lu,iu,au,zl=!1,kr=[],wt=null,kt=null,St=null,Xn=new Map,Jn=new Map,gt=[],Td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function _n(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Md(e,t,n,r,o){switch(t){case"focusin":return wt=_n(wt,e,t,n,r,o),!0;case"dragenter":return kt=_n(kt,e,t,n,r,o),!0;case"mouseover":return St=_n(St,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Xn.set(l,_n(Xn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Jn.set(l,_n(Jn.get(l)||null,e,t,n,r,o)),!0}return!1}function su(e){var t=It(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,au(e.priority,function(){lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sl=r,n.target.dispatchEvent(r),Sl=null}else return t=pr(n),t!==null&&vi(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Or(e)&&n.delete(t)}function Rd(){zl=!1,wt!==null&&Or(wt)&&(wt=null),kt!==null&&Or(kt)&&(kt=null),St!==null&&Or(St)&&(St=null),Xn.forEach(ha),Jn.forEach(ha)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Rd)))}function Zn(e){function t(o){return Ln(o,e)}if(0<kr.length){Ln(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Ln(wt,e),kt!==null&&Ln(kt,e),St!==null&&Ln(St,e),Xn.forEach(t),Jn.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&gt.shift()}var dn=dt.ReactCurrentBatchConfig,qr=!0;function Fd(e,t,n,r){var o=V,l=dn.transition;dn.transition=null;try{V=1,yi(e,t,n,r)}finally{V=o,dn.transition=l}}function Id(e,t,n,r){var o=V,l=dn.transition;dn.transition=null;try{V=4,yi(e,t,n,r)}finally{V=o,dn.transition=l}}function yi(e,t,n,r){if(qr){var o=_l(e,t,n,r);if(o===null)Xo(e,t,r,eo,n),pa(e,r);else if(Md(o,e,t,n,r))r.stopPropagation();else if(pa(e,r),t&4&&-1<Td.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&ou(l),l=_l(e,t,n,r),l===null&&Xo(e,t,r,eo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Xo(e,t,r,null,n)}}var eo=null;function _l(e,t,n,r){if(eo=null,e=hi(r),e=It(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case mi:return 1;case eu:return 4;case Jr:case Nd:return 16;case tu:return 536870912;default:return 16}default:return 16}}var yt=null,xi=null,Dr=null;function cu(){if(Dr)return Dr;var e,t=xi,n=t.length,r,o="value"in yt?yt.value:yt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Dr=o.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ma(){return!1}function Re(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:ma,this.isPropagationStopped=ma,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Re(Sn),fr=ne({},Sn,{view:0,detail:0}),Od=Re(fr),Bo,$o,Pn,ko=ne({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Bo=e.screenX-Pn.screenX,$o=e.screenY-Pn.screenY):$o=Bo=0,Pn=e),Bo)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),ga=Re(ko),Dd=ne({},ko,{dataTransfer:0}),Ad=Re(Dd),Ud=ne({},fr,{relatedTarget:0}),Ho=Re(Ud),Bd=ne({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Re(Bd),Hd=ne({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Re(Hd),Vd=ne({},Sn,{data:0}),va=Re(Vd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gd[e])?!!t[e]:!1}function ki(){return Kd}var Xd=ne({},fr,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jd=Re(Xd),Zd=ne({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Re(Zd),qd=ne({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),ef=Re(qd),tf=ne({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Re(tf),rf=ne({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),of=Re(rf),lf=[9,13,27,32],Si=at&&"CompositionEvent"in window,Un=null;at&&"documentMode"in document&&(Un=document.documentMode);var af=at&&"TextEvent"in window&&!Un,du=at&&(!Si||Un&&8<Un&&11>=Un),xa=" ",wa=!1;function fu(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function sf(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(wa=!0,xa);case"textInput":return e=t.data,e===xa&&wa?null:e;default:return null}}function uf(e,t){if(Jt)return e==="compositionend"||!Si&&fu(e,t)?(e=cu(),Dr=xi=yt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function hu(e,t,n,r){Vs(r),t=to(t,"onChange"),0<t.length&&(n=new wi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,qn=null;function df(e){Eu(e,0)}function So(e){var t=en(e);if(Ds(t))return e}function ff(e,t){if(e==="change")return t}var mu=!1;if(at){var Wo;if(at){var Vo="oninput"in document;if(!Vo){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Vo=typeof Sa.oninput=="function"}Wo=Vo}else Wo=!1;mu=Wo&&(!document.documentMode||9<document.documentMode)}function ja(){Bn&&(Bn.detachEvent("onpropertychange",gu),qn=Bn=null)}function gu(e){if(e.propertyName==="value"&&So(qn)){var t=[];hu(t,qn,e,hi(e)),Ks(df,t)}}function pf(e,t,n){e==="focusin"?(ja(),Bn=t,qn=n,Bn.attachEvent("onpropertychange",gu)):e==="focusout"&&ja()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(qn)}function mf(e,t){if(e==="click")return So(t)}function gf(e,t){if(e==="input"||e==="change")return So(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:vf;function er(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ea(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&ji(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ea(n,l);var i=Ea(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=at&&"documentMode"in document&&11>=document.documentMode,Zt=null,Ll=null,$n=null,Pl=!1;function Ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||Zt==null||Zt!==Gr(r)||(r=Zt,"selectionStart"in r&&ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&er($n,r)||($n=r,r=to(Ll,"onSelect"),0<r.length&&(t=new wi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Qo={},xu={};at&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function jo(e){if(Qo[e])return Qo[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Qo[e]=t[n];return e}var wu=jo("animationend"),ku=jo("animationiteration"),Su=jo("animationstart"),ju=jo("transitionend"),Nu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Nu.set(e,t),Qt(t,[e])}for(var Yo=0;Yo<za.length;Yo++){var Go=za[Yo],wf=Go.toLowerCase(),kf=Go[0].toUpperCase()+Go.slice(1);Pt(wf,"on"+kf)}Pt(wu,"onAnimationEnd");Pt(ku,"onAnimationIteration");Pt(Su,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(ju,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;_a(o,s,d),l=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;_a(o,s,d),l=u}}}if(Xr)throw e=El,Xr=!1,El=null,e}function X(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Cu(t,e,2,!1),n.add(r))}function Ko(e,t,n){var r=0;t&&(r|=4),Cu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Nr]){e[Nr]=!0,Ms.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||Ko(n,!1,e),Ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Ko("selectionchange",!1,t))}}function Cu(e,t,n,r){switch(uu(t)){case 1:var o=Fd;break;case 4:o=Id;break;default:o=yi}n=o.bind(null,t,n,e),o=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=It(s),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Ks(function(){var d=l,y=hi(n),h=[];e:{var f=Nu.get(e);if(f!==void 0){var x=wi,k=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":x=Jd;break;case"focusin":k="focus",x=Ho;break;case"focusout":k="blur",x=Ho;break;case"beforeblur":case"afterblur":x=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=ef;break;case wu:case ku:case Su:x=$d;break;case ju:x=nf;break;case"scroll":x=Od;break;case"wheel":x=of;break;case"copy":case"cut":case"paste":x=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ya}var w=(t&4)!==0,O=!w&&e==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var c=d,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=Kn(c,p),S!=null&&w.push(nr(c,S,m)))),O)break;c=c.return}0<w.length&&(f=new x(f,k,null,n,y),h.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==Sl&&(k=n.relatedTarget||n.fromElement)&&(It(k)||k[st]))break e;if((x||f)&&(f=y.window===y?y:(f=y.ownerDocument)?f.defaultView||f.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=d,k=k?It(k):null,k!==null&&(O=Yt(k),k!==O||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(w=ga,S="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ya,S="onPointerLeave",p="onPointerEnter",c="pointer"),O=x==null?f:en(x),m=k==null?f:en(k),f=new w(S,c+"leave",x,n,y),f.target=O,f.relatedTarget=m,S=null,It(y)===d&&(w=new w(p,c+"enter",k,n,y),w.target=m,w.relatedTarget=O,S=w),O=S,x&&k)t:{for(w=x,p=k,c=0,m=w;m;m=Gt(m))c++;for(m=0,S=p;S;S=Gt(S))m++;for(;0<c-m;)w=Gt(w),c--;for(;0<m-c;)p=Gt(p),m--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break t;w=Gt(w),p=Gt(p)}w=null}else w=null;x!==null&&La(h,f,x,w,!1),k!==null&&O!==null&&La(h,O,k,w,!0)}}e:{if(f=d?en(d):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var C=ff;else if(ka(f))if(mu)C=gf;else{C=hf;var L=pf}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=mf);if(C&&(C=C(e,d))){hu(h,C,n,y);break e}L&&L(e,f,d),e==="focusout"&&(L=f._wrapperState)&&L.controlled&&f.type==="number"&&vl(f,"number",f.value)}switch(L=d?en(d):window,e){case"focusin":(ka(L)||L.contentEditable==="true")&&(Zt=L,Ll=d,$n=null);break;case"focusout":$n=Ll=Zt=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Ca(h,n,y);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":Ca(h,n,y)}var P;if(Si)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Jt?fu(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(du&&n.locale!=="ko"&&(Jt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Jt&&(P=cu()):(yt=y,xi="value"in yt?yt.value:yt.textContent,Jt=!0)),L=to(d,R),0<L.length&&(R=new va(R,e,null,n,y),h.push({event:R,listeners:L}),P?R.data=P:(P=pu(n),P!==null&&(R.data=P)))),(P=af?sf(e,n):uf(e,n))&&(d=to(d,"onBeforeInput"),0<d.length&&(y=new va("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:d}),y.data=P))}Eu(h,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Kn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=Kn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Kn(n,l),u!=null&&i.unshift(nr(n,u,s))):o||(u=Kn(n,l),u!=null&&i.push(nr(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var jf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(Nf,"")}function Er(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(E(425))}function no(){}var bl=null,Tl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,ba=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ba<"u"?function(e){return ba.resolve(null).then(e).catch(zf)}:Rl;function zf(e){setTimeout(function(){throw e})}function Jo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ta(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),Je="__reactFiber$"+jn,rr="__reactProps$"+jn,st="__reactContainer$"+jn,Fl="__reactEvents$"+jn,_f="__reactListeners$"+jn,Lf="__reactHandles$"+jn;function It(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ta(e);e!==null;){if(n=e[Je])return n;e=Ta(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Je]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function No(e){return e[rr]||null}var Il=[],tn=-1;function bt(e){return{current:e}}function J(e){0>tn||(e.current=Il[tn],Il[tn]=null,tn--)}function G(e,t){tn++,Il[tn]=e.current,e.current=t}var Lt={},xe=bt(Lt),Ce=bt(!1),Bt=Lt;function mn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function ro(){J(Ce),J(xe)}function Ma(e,t,n){if(xe.current!==Lt)throw Error(E(168));G(xe,t),G(Ce,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,fd(e)||"Unknown",o));return ne({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Bt=xe.current,G(xe,e),G(Ce,Ce.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zu(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,J(Ce),J(xe),G(xe,e)):J(Ce),G(Ce,n)}var rt=null,Eo=!1,Zo=!1;function _u(e){rt===null?rt=[e]:rt.push(e)}function Pf(e){Eo=!0,_u(e)}function Tt(){if(!Zo&&rt!==null){Zo=!0;var e=0,t=V;try{var n=rt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Eo=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),qs(mi,Tt),o}finally{V=t,Zo=!1}}return null}var nn=[],rn=0,lo=null,io=0,Fe=[],Ie=0,$t=null,ot=1,lt="";function Rt(e,t){nn[rn++]=io,nn[rn++]=lo,lo=e,io=t}function Lu(e,t,n){Fe[Ie++]=ot,Fe[Ie++]=lt,Fe[Ie++]=$t,$t=e;var r=ot;e=lt;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var l=32-Qe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ot=1<<32-Qe(t)+o|n<<o|r,lt=l+e}else ot=1<<l|n<<o|r,lt=e}function Ni(e){e.return!==null&&(Rt(e,1),Lu(e,1,0))}function Ei(e){for(;e===lo;)lo=nn[--rn],nn[rn]=null,io=nn[--rn],nn[rn]=null;for(;e===$t;)$t=Fe[--Ie],Fe[Ie]=null,lt=Fe[--Ie],Fe[Ie]=null,ot=Fe[--Ie],Fe[Ie]=null}var be=null,Pe=null,q=!1,Ve=null;function Pu(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Pe=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Pe=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(q){var t=Pe;if(t){var n=t;if(!Fa(e,t)){if(Ol(e))throw Error(E(418));t=jt(n.nextSibling);var r=be;t&&Fa(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,q=!1,be=e)}}else{if(Ol(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,be=e}}}function Ia(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Cr(e){if(e!==be)return!1;if(!q)return Ia(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Pe)){if(Ol(e))throw bu(),Error(E(418));for(;t;)Pu(e,t),t=jt(t.nextSibling)}if(Ia(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=be?jt(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=Pe;e;)e=jt(e.nextSibling)}function gn(){Pe=be=null,q=!1}function Ci(e){Ve===null?Ve=[e]:Ve.push(e)}var bf=dt.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Tu(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=zt(p,c),p.index=0,p.sibling=null,p}function l(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,S){return c===null||c.tag!==6?(c=ll(m,p.mode,S),c.return=p,c):(c=o(c,m),c.return=p,c)}function u(p,c,m,S){var C=m.type;return C===Xt?y(p,c,m.props.children,S,m.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&Oa(C)===c.type)?(S=o(c,m.props),S.ref=bn(p,c,m),S.return=p,S):(S=Qr(m.type,m.key,m.props,null,p.mode,S),S.ref=bn(p,c,m),S.return=p,S)}function d(p,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=il(m,p.mode,S),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function y(p,c,m,S,C){return c===null||c.tag!==7?(c=Ut(m,p.mode,S,C),c.return=p,c):(c=o(c,m),c.return=p,c)}function h(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return m=Qr(c.type,c.key,c.props,null,p.mode,m),m.ref=bn(p,null,c),m.return=p,m;case Kt:return c=il(c,p.mode,m),c.return=p,c;case ht:var S=c._init;return h(p,S(c._payload),m)}if(Fn(c)||Cn(c))return c=Ut(c,p.mode,m,null),c.return=p,c;zr(p,c)}return null}function f(p,c,m,S){var C=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(p,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:return m.key===C?u(p,c,m,S):null;case Kt:return m.key===C?d(p,c,m,S):null;case ht:return C=m._init,f(p,c,C(m._payload),S)}if(Fn(m)||Cn(m))return C!==null?null:y(p,c,m,S,null);zr(p,m)}return null}function x(p,c,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,s(c,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gr:return p=p.get(S.key===null?m:S.key)||null,u(c,p,S,C);case Kt:return p=p.get(S.key===null?m:S.key)||null,d(c,p,S,C);case ht:var L=S._init;return x(p,c,m,L(S._payload),C)}if(Fn(S)||Cn(S))return p=p.get(m)||null,y(c,p,S,C,null);zr(c,S)}return null}function k(p,c,m,S){for(var C=null,L=null,P=c,R=c=0,$=null;P!==null&&R<m.length;R++){P.index>R?($=P,P=null):$=P.sibling;var I=f(p,P,m[R],S);if(I===null){P===null&&(P=$);break}e&&P&&I.alternate===null&&t(p,P),c=l(I,c,R),L===null?C=I:L.sibling=I,L=I,P=$}if(R===m.length)return n(p,P),q&&Rt(p,R),C;if(P===null){for(;R<m.length;R++)P=h(p,m[R],S),P!==null&&(c=l(P,c,R),L===null?C=P:L.sibling=P,L=P);return q&&Rt(p,R),C}for(P=r(p,P);R<m.length;R++)$=x(P,p,R,m[R],S),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?R:$.key),c=l($,c,R),L===null?C=$:L.sibling=$,L=$);return e&&P.forEach(function(M){return t(p,M)}),q&&Rt(p,R),C}function w(p,c,m,S){var C=Cn(m);if(typeof C!="function")throw Error(E(150));if(m=C.call(m),m==null)throw Error(E(151));for(var L=C=null,P=c,R=c=0,$=null,I=m.next();P!==null&&!I.done;R++,I=m.next()){P.index>R?($=P,P=null):$=P.sibling;var M=f(p,P,I.value,S);if(M===null){P===null&&(P=$);break}e&&P&&M.alternate===null&&t(p,P),c=l(M,c,R),L===null?C=M:L.sibling=M,L=M,P=$}if(I.done)return n(p,P),q&&Rt(p,R),C;if(P===null){for(;!I.done;R++,I=m.next())I=h(p,I.value,S),I!==null&&(c=l(I,c,R),L===null?C=I:L.sibling=I,L=I);return q&&Rt(p,R),C}for(P=r(p,P);!I.done;R++,I=m.next())I=x(P,p,R,I.value,S),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?R:I.key),c=l(I,c,R),L===null?C=I:L.sibling=I,L=I);return e&&P.forEach(function(D){return t(p,D)}),q&&Rt(p,R),C}function O(p,c,m,S){if(typeof m=="object"&&m!==null&&m.type===Xt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:e:{for(var C=m.key,L=c;L!==null;){if(L.key===C){if(C=m.type,C===Xt){if(L.tag===7){n(p,L.sibling),c=o(L,m.props.children),c.return=p,p=c;break e}}else if(L.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ht&&Oa(C)===L.type){n(p,L.sibling),c=o(L,m.props),c.ref=bn(p,L,m),c.return=p,p=c;break e}n(p,L);break}else t(p,L);L=L.sibling}m.type===Xt?(c=Ut(m.props.children,p.mode,S,m.key),c.return=p,p=c):(S=Qr(m.type,m.key,m.props,null,p.mode,S),S.ref=bn(p,c,m),S.return=p,p=S)}return i(p);case Kt:e:{for(L=m.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=il(m,p.mode,S),c.return=p,p=c}return i(p);case ht:return L=m._init,O(p,c,L(m._payload),S)}if(Fn(m))return k(p,c,m,S);if(Cn(m))return w(p,c,m,S);zr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=ll(m,p.mode,S),c.return=p,p=c),i(p)):n(p,c)}return O}var vn=Tu(!0),Mu=Tu(!1),ao=bt(null),so=null,on=null,zi=null;function _i(){zi=on=so=null}function Li(e){var t=ao.current;J(ao),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){so=e,zi=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(so===null)throw Error(E(308));on=e,so.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Ot=null;function Pi(e){Ot===null?Ot=[e]:Ot.push(e)}function Ru(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pi(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Pi(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function Ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gi(e,n)}}function Da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;mt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?l=d:i.next=d,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(l!==null){var h=o.baseState;i=0,y=d=u=null,s=l;do{var f=s.lane,x=s.eventTime;if((r&f)===f){y!==null&&(y=y.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,w=s;switch(f=t,x=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){h=k.call(x,h,f);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,f=typeof k=="function"?k.call(x,h,f):k,f==null)break e;h=ne({},h,f);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=x,u=h):y=y.next=x,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(y===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=h}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var hr={},qe=bt(hr),or=bt(hr),lr=bt(hr);function Dt(e){if(e===hr)throw Error(E(174));return e}function Ti(e,t){switch(G(lr,t),G(or,e),G(qe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}J(qe),G(qe,t)}function yn(){J(qe),J(or),J(lr)}function Iu(e){Dt(lr.current);var t=Dt(qe.current),n=xl(t,e.type);t!==n&&(G(or,e),G(qe,n))}function Mi(e){or.current===e&&(J(qe),J(or))}var ee=bt(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Ri(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var Br=dt.ReactCurrentDispatcher,el=dt.ReactCurrentBatchConfig,Ht=0,te=null,ue=null,de=null,fo=!1,Hn=!1,ir=0,Tf=0;function ge(){throw Error(E(321))}function Fi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Ii(e,t,n,r,o,l){if(Ht=l,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?If:Of,e=n(r,o),Hn){l=0;do{if(Hn=!1,ir=0,25<=l)throw Error(E(301));l+=1,de=ue=null,t.updateQueue=null,Br.current=Df,e=n(r,o)}while(Hn)}if(Br.current=po,t=ue!==null&&ue.next!==null,Ht=0,de=ue=te=null,fo=!1,t)throw Error(E(300));return e}function Oi(){var e=ir!==0;return ir=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?te.memoizedState=de=e:de=de.next=e,de}function Ue(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?te.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(E(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?te.memoizedState=de=e:de=de.next=e}return de}function ar(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,u=null,d=l;do{var y=d.lane;if((Ht&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,te.lanes|=y,Wt|=y}d=d.next}while(d!==null&&d!==l);u===null?i=r:u.next=s,Ge(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,te.lanes|=l,Wt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(Ee=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ou(){}function Du(e,t){var n=te,r=Ue(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,Ee=!0),r=r.queue,Di(Bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,sr(9,Uu.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(E(349));Ht&30||Au(n,t,o)}return o}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Hu(e)}function Bu(e,t,n){return n(function(){$u(t)&&Hu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Hu(e){var t=ut(e,1);t!==null&&Ye(t,e,1,-1)}function Ua(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,te,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wu(){return Ue().memoizedState}function $r(e,t,n,r){var o=Xe();te.flags|=e,o.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var o=Ue();r=r===void 0?null:r;var l=void 0;if(ue!==null){var i=ue.memoizedState;if(l=i.destroy,r!==null&&Fi(r,i.deps)){o.memoizedState=sr(t,n,l,r);return}}te.flags|=e,o.memoizedState=sr(1|t,n,l,r)}function Ba(e,t){return $r(8390656,8,e,t)}function Di(e,t){return Co(2048,8,e,t)}function Vu(e,t){return Co(4,2,e,t)}function Qu(e,t){return Co(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,Yu.bind(null,t,e),n)}function Ai(){}function Ku(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return Ht&21?(Ge(n,t)||(n=nu(),te.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Mf(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{V=n,el.transition=r}}function Zu(){return Ue().memoizedState}function Rf(e,t,n){var r=Ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))ec(t,n);else if(n=Ru(e,t,n,r),n!==null){var o=ke();Ye(n,e,r,o),tc(n,t,r)}}function Ff(e,t,n){var r=Ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))ec(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ge(s,i)){var u=t.interleaved;u===null?(o.next=o,Pi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ru(e,t,o,r),n!==null&&(o=ke(),Ye(n,e,r,o),tc(n,t,r))}}function qu(e){var t=e.alternate;return e===te||t!==null&&t===te}function ec(e,t){Hn=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gi(e,n)}}var po={readContext:Ae,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},If={readContext:Ae,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ba,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rf.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:Ai,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=Mf.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,o=Xe();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));Ht&30||Au(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ba(Bu.bind(null,r,l,e),[e]),r.flags|=2048,sr(9,Uu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Xe(),t=fe.identifierPrefix;if(q){var n=lt,r=ot;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Of={readContext:Ae,useCallback:Ku,useContext:Ae,useEffect:Di,useImperativeHandle:Gu,useInsertionEffect:Vu,useLayoutEffect:Qu,useMemo:Xu,useReducer:tl,useRef:Wu,useState:function(){return tl(ar)},useDebugValue:Ai,useDeferredValue:function(e){var t=Ue();return Ju(t,ue.memoizedState,e)},useTransition:function(){var e=tl(ar)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1},Df={readContext:Ae,useCallback:Ku,useContext:Ae,useEffect:Di,useImperativeHandle:Gu,useInsertionEffect:Vu,useLayoutEffect:Qu,useMemo:Xu,useReducer:nl,useRef:Wu,useState:function(){return nl(ar)},useDebugValue:Ai,useDeferredValue:function(e){var t=Ue();return ue===null?t.memoizedState=e:Ju(t,ue.memoizedState,e)},useTransition:function(){var e=nl(ar)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Ct(e),l=it(r,o);l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ye(t,e,o,r),Ur(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Ct(e),l=it(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ye(t,e,o,r),Ur(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Ct(e),o=it(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Ye(t,e,r,n),Ur(t,e,r))}};function $a(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,l):!0}function nc(e,t,n){var r=!1,o=Lt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(o=ze(t)?Bt:xe.current,r=t.contextTypes,l=(r=r!=null)?mn(e,o):Lt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},bi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ae(l):(l=ze(t)?Bt:xe.current,o.context=mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ul(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zo.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,Zl=r),$l(e,t)},n}function oc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$l(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Af;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Uf=dt.ReactCurrentOwner,Ee=!1;function we(e,t,n,r){t.child=e===null?Mu(t,null,n,r):vn(t,e.child,n,r)}function Ya(e,t,n,r,o){n=n.render;var l=t.ref;return fn(t,o),r=Ii(e,t,n,r,l,o),n=Oi(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(q&&n&&Ni(t),t.flags|=1,we(e,t,r,o),t.child)}function Ga(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Yi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,lc(e,t,l,r,o)):(e=Qr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=zt(l,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,ct(e,t,o)}return Hl(e,t,n,r,o)}function ic(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(an,Le),Le|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(an,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,G(an,Le),Le|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,G(an,Le),Le|=r;return we(e,t,o,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,n,r,o){var l=ze(n)?Bt:xe.current;return l=mn(t,l),fn(t,o),n=Ii(e,t,n,r,l,o),r=Oi(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(q&&r&&Ni(t),t.flags|=1,we(e,t,n,o),t.child)}function Ka(e,t,n,r,o){if(ze(n)){var l=!0;oo(t)}else l=!1;if(fn(t,o),t.stateNode===null)Hr(e,t),nc(t,n,r),Bl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=ze(n)?Bt:xe.current,d=mn(t,d));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ha(t,i,r,d),mt=!1;var f=t.memoizedState;i.state=f,uo(t,r,i,o),u=t.memoizedState,s!==r||f!==u||Ce.current||mt?(typeof y=="function"&&(Ul(t,n,y,r),u=t.memoizedState),(s=mt||$a(t,n,s,r,f,u,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:He(t.type,s),i.props=d,h=t.pendingProps,f=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=ze(n)?Bt:xe.current,u=mn(t,u));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||f!==u)&&Ha(t,i,r,u),mt=!1,f=t.memoizedState,i.state=f,uo(t,r,i,o);var k=t.memoizedState;s!==h||f!==k||Ce.current||mt?(typeof x=="function"&&(Ul(t,n,x,r),k=t.memoizedState),(d=mt||$a(t,n,d,r,f,k,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,l,o)}function Wl(e,t,n,r,o,l){ac(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ra(t,n,!1),ct(e,t,l);r=t.stateNode,Uf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vn(t,e.child,null,l),t.child=vn(t,null,s,l)):we(e,t,s,l),t.memoizedState=r.state,o&&Ra(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Ti(e,t.containerInfo)}function Xa(e,t,n,r,o){return gn(),Ci(o),t.flags|=256,we(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,o=ee.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(ee,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Po(i,r,0,null),e=Ut(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ql(n),t.memoizedState=Vl,e):Ui(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Bf(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=zt(s,l):(l=Ut(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ql(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return l=e.child,e=l.sibling,r=zt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ui(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&Ci(r),vn(t,e.child,null,n),e=Ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(E(422))),_r(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=Ut(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&vn(t,e.child,null,i),t.child.memoizedState=Ql(i),t.memoizedState=Vl,l);if(!(t.mode&1))return _r(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(E(419)),r=rl(l,r,void 0),_r(e,t,i,r)}if(s=(i&e.childLanes)!==0,Ee||s){if(r=fe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ut(e,o),Ye(r,e,o,-1))}return Qi(),r=rl(Error(E(421))),_r(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Pe=jt(o.nextSibling),be=t,q=!0,Ve=null,e!==null&&(Fe[Ie++]=ot,Fe[Ie++]=lt,Fe[Ie++]=$t,ot=e.id,lt=e.overflow,$t=t),t=Ui(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function ol(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function cc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(we(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,l);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $f(e,t,n){switch(t.tag){case 3:sc(t),gn();break;case 5:Iu(t);break;case 1:ze(t.type)&&oo(t);break;case 4:Ti(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(G(ee,ee.current&1),e=ct(e,t,n),e!==null?e.sibling:null);G(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,ic(e,t,n)}return ct(e,t,n)}var dc,Yl,fc,pc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};fc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(qe.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=ne({},o,{value:void 0}),r=ne({},r,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),r=yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}wl(n,r);var i;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&X("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hf(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ze(t.type)&&ro(),ve(t),null;case 3:return r=t.stateNode,yn(),J(Ce),J(xe),Ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(ti(Ve),Ve=null))),Yl(e,t),ve(t),null;case 5:Mi(t);var o=Dt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=Dt(qe.current),Cr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Je]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<On.length;o++)X(On[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":ia(r,l),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},X("invalid",r);break;case"textarea":sa(r,l),X("invalid",r)}wl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),o=["children",""+s]):Yn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&X("scroll",r)}switch(n){case"input":vr(r),aa(r,l,!0);break;case"textarea":vr(r),ua(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=no)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Je]=t,e[rr]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(i=kl(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<On.length;o++)X(On[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":ia(e,r),o=ml(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ne({},r,{value:void 0}),X("invalid",e);break;case"textarea":sa(e,r),o=yl(e,r),X("invalid",e);break;default:o=r}wl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Ws(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$s(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gn(e,u):typeof u=="number"&&Gn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&X("scroll",e):u!=null&&ci(e,l,u,i))}switch(n){case"input":vr(e),aa(e,r,!1);break;case"textarea":vr(e),ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Dt(lr.current),Dt(qe.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(l=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ve(t),null;case 13:if(J(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Pe!==null&&t.mode&1&&!(t.flags&128))bu(),gn(),t.flags|=98560,l=!1;else if(l=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(E(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(E(317));l[Je]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),l=!1}else Ve!==null&&(ti(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Qi())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return yn(),Yl(e,t),e===null&&tr(t.stateNode.containerInfo),ve(t),null;case 10:return Li(t.type._context),ve(t),null;case 17:return ze(t.type)&&ro(),ve(t),null;case 19:if(J(ee),l=t.memoizedState,l===null)return ve(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Tn(l,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=co(e),i!==null){for(t.flags|=128,Tn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ee,ee.current&1|2),t.child}e=e.sibling}l.tail!==null&&ie()>wn&&(t.flags|=128,r=!0,Tn(l,!1),t.lanes=4194304)}else{if(!r)if(e=co(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!q)return ve(t),null}else 2*ie()-l.renderingStartTime>wn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,n=ee.current,G(ee,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Vi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Wf(e,t){switch(Ei(t),t.tag){case 1:return ze(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),J(Ce),J(xe),Ri(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mi(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return yn(),null;case 10:return Li(t.type._context),null;case 22:case 23:return Vi(),null;case 24:return null;default:return null}}var Lr=!1,ye=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,T=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){re(e,t,r)}}var Za=!1;function Qf(e,t){if(bl=qr,e=yu(),ji(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,y=0,h=e,f=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(s=i+o),h!==l||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)f=h,h=x;for(;;){if(h===e)break t;if(f===n&&++d===o&&(s=i),f===l&&++y===r&&(u=i),(x=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},qr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,O=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:He(t.type,w),O);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){re(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=Za,Za=!1,k}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Gl(t,n,l)}o=o.next}while(o!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[rr],delete t[Fl],delete t[_f],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var pe=null,We=!1;function pt(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:ye||ln(n,t);case 6:var r=pe,o=We;pe=null,pt(e,t,n),pe=r,We=o,pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(We?(e=pe,n=n.stateNode,e.nodeType===8?Jo(e.parentNode,n):e.nodeType===1&&Jo(e,n),Zn(e)):Jo(pe,n.stateNode));break;case 4:r=pe,o=We,pe=n.stateNode.containerInfo,We=!0,pt(e,t,n),pe=r,We=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Gl(n,t,i),o=o.next}while(o!==r)}pt(e,t,n);break;case 1:if(!ye&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,pt(e,t,n),ye=r):pt(e,t,n);break;default:pt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var o=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,We=!1;break e;case 3:pe=s.stateNode.containerInfo,We=!0;break e;case 4:pe=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(pe===null)throw Error(E(160));gc(l,i,o),pe=null,We=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){re(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{Wn(3,e,e.return),_o(3,e)}catch(w){re(e,e.return,w)}try{Wn(5,e,e.return)}catch(w){re(e,e.return,w)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var o=e.stateNode;try{Gn(o,"")}catch(w){re(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&As(o,l),kl(s,i);var d=kl(s,l);for(i=0;i<u.length;i+=2){var y=u[i],h=u[i+1];y==="style"?Ws(o,h):y==="dangerouslySetInnerHTML"?$s(o,h):y==="children"?Gn(o,h):ci(o,y,h,d)}switch(s){case"input":gl(o,l);break;case"textarea":Us(o,l);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?sn(o,!!l.multiple,x,!1):f!==!!l.multiple&&(l.defaultValue!=null?sn(o,!!l.multiple,l.defaultValue,!0):sn(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(w){re(e,e.return,w)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){re(e,e.return,w)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(w){re(e,e.return,w)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Hi=ie())),r&4&&es(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(d=ye)||y,Be(t,e),ye=d):Be(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(h=T=y;T!==null;){switch(f=T,x=f.child,f.tag){case 0:case 11:case 14:case 15:Wn(4,f,f.return);break;case 1:ln(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){re(r,n,w)}}break;case 5:ln(f,f.return);break;case 22:if(f.memoizedState!==null){ns(h);continue}}x!==null?(x.return=f,T=x):ns(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{o=h.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Hs("display",i))}catch(w){re(e,e.return,w)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){re(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&es(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Gn(o,""),r.flags&=-33);var l=qa(e);Jl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=qa(e);Xl(e,s,i);break;default:throw Error(E(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yf(e,t,n){T=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Lr;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=Lr;var d=ye;if(Lr=i,(ye=u)&&!d)for(T=o;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?rs(o):u!==null?(u.return=i,T=u):rs(o);for(;l!==null;)T=l,yc(l),l=l.sibling;T=o,Lr=s,ye=d}ts(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):ts(e)}}function ts(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Aa(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ye||t.flags&512&&Kl(t)}catch(f){re(t,t.return,f)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ns(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function rs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){re(t,o,u)}}var l=t.return;try{Kl(t)}catch(u){re(t,l,u)}break;case 5:var i=t.return;try{Kl(t)}catch(u){re(t,i,u)}}}catch(u){re(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Gf=Math.ceil,ho=dt.ReactCurrentDispatcher,Bi=dt.ReactCurrentOwner,De=dt.ReactCurrentBatchConfig,W=0,fe=null,se=null,he=0,Le=0,an=bt(0),ce=0,ur=null,Wt=0,Lo=0,$i=0,Vn=null,Ne=null,Hi=0,wn=1/0,nt=null,mo=!1,Zl=null,Et=null,Pr=!1,xt=null,go=0,Qn=0,ql=null,Wr=-1,Vr=0;function ke(){return W&6?ie():Wr!==-1?Wr:Wr=ie()}function Ct(e){return e.mode&1?W&2&&he!==0?he&-he:bf.transition!==null?(Vr===0&&(Vr=nu()),Vr):(e=V,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e):1}function Ye(e,t,n,r){if(50<Qn)throw Qn=0,ql=null,Error(E(185));dr(e,n,r),(!(W&2)||e!==fe)&&(e===fe&&(!(W&2)&&(Lo|=n),ce===4&&vt(e,he)),_e(e,r),n===1&&W===0&&!(t.mode&1)&&(wn=ie()+500,Eo&&Tt()))}function _e(e,t){var n=e.callbackNode;Pd(e,t);var r=Zr(e,e===fe?he:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?Pf(os.bind(null,e)):_u(os.bind(null,e)),Cf(function(){!(W&6)&&Tt()}),n=null;else{switch(ru(r)){case 1:n=mi;break;case 4:n=eu;break;case 16:n=Jr;break;case 536870912:n=tu;break;default:n=Jr}n=Cc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Wr=-1,Vr=0,W&6)throw Error(E(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=Zr(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=W;W|=2;var l=kc();(fe!==e||he!==t)&&(nt=null,wn=ie()+500,At(e,t));do try{Jf();break}catch(s){wc(e,s)}while(!0);_i(),ho.current=l,W=o,se!==null?t=0:(fe=null,he=0,t=ce)}if(t!==0){if(t===2&&(o=Cl(e),o!==0&&(r=o,t=ei(e,o))),t===1)throw n=ur,At(e,0),vt(e,r),_e(e,ie()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Kf(o)&&(t=vo(e,r),t===2&&(l=Cl(e),l!==0&&(r=l,t=ei(e,l))),t===1))throw n=ur,At(e,0),vt(e,r),_e(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ft(e,Ne,nt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Hi+500-ie(),10<t)){if(Zr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Ft.bind(null,e,Ne,nt),t);break}Ft(e,Ne,nt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Qe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gf(r/1960))-r,10<r){e.timeoutHandle=Rl(Ft.bind(null,e,Ne,nt),r);break}Ft(e,Ne,nt);break;case 5:Ft(e,Ne,nt);break;default:throw Error(E(329))}}}return _e(e,ie()),e.callbackNode===n?xc.bind(null,e):null}function ei(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=vo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&ti(t)),e}function ti(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~$i,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(W&6)throw Error(E(327));pn();var t=Zr(e,0);if(!(t&1))return _e(e,ie()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=ei(e,r))}if(n===1)throw n=ur,At(e,0),vt(e,t),_e(e,ie()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,Ne,nt),_e(e,ie()),null}function Wi(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(wn=ie()+500,Eo&&Tt())}}function Vt(e){xt!==null&&xt.tag===0&&!(W&6)&&pn();var t=W;W|=1;var n=De.transition,r=V;try{if(De.transition=null,V=1,e)return e()}finally{V=r,De.transition=n,W=t,!(W&6)&&Tt()}}function Vi(){Le=an.current,J(an)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ef(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:yn(),J(Ce),J(xe),Ri();break;case 5:Mi(r);break;case 4:yn();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Li(r.type._context);break;case 22:case 23:Vi()}n=n.return}if(fe=e,se=e=zt(e.current,null),he=Le=t,ce=0,ur=null,$i=Lo=Wt=0,Ne=Vn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Ot=null}return e}function wc(e,t){do{var n=se;try{if(_i(),Br.current=po,fo){for(var r=te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fo=!1}if(Ht=0,de=ue=te=null,Hn=!1,ir=0,Bi.current=null,n===null||n.return===null){ce=1,ur=t,se=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var f=y.alternate;f?(y.updateQueue=f.updateQueue,y.memoizedState=f.memoizedState,y.lanes=f.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Va(i);if(x!==null){x.flags&=-257,Qa(x,i,s,l,t),x.mode&1&&Wa(l,d,t),t=x,u=d;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){Wa(l,d,t),Qi();break e}u=Error(E(426))}}else if(q&&s.mode&1){var O=Va(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Qa(O,i,s,l,t),Ci(xn(u,s));break e}}l=u=xn(u,s),ce!==4&&(ce=2),Vn===null?Vn=[l]:Vn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=rc(l,u,t);Da(l,p);break e;case 1:s=u;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Et===null||!Et.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=oc(l,s,t);Da(l,S);break e}}l=l.return}while(l!==null)}jc(n)}catch(C){t=C,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function kc(){var e=ho.current;return ho.current=po,e===null?po:e}function Qi(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(Wt&268435455)&&!(Lo&268435455)||vt(fe,he)}function vo(e,t){var n=W;W|=2;var r=kc();(fe!==e||he!==t)&&(nt=null,At(e,t));do try{Xf();break}catch(o){wc(e,o)}while(!0);if(_i(),W=n,ho.current=r,se!==null)throw Error(E(261));return fe=null,he=0,ce}function Xf(){for(;se!==null;)Sc(se)}function Jf(){for(;se!==null&&!kd();)Sc(se)}function Sc(e){var t=Ec(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?jc(e):se=t,Bi.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=Hf(n,t,Le),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function Ft(e,t,n){var r=V,o=De.transition;try{De.transition=null,V=1,Zf(e,t,n,r)}finally{De.transition=o,V=r}return null}function Zf(e,t,n,r){do pn();while(xt!==null);if(W&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(bd(e,l),e===fe&&(se=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Cc(Jr,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=V;V=1;var s=W;W|=4,Bi.current=null,Qf(e,n),vc(n,e),yf(Tl),qr=!!bl,Tl=bl=null,e.current=n,Yf(n),Sd(),W=s,V=i,De.transition=l}else e.current=n;if(Pr&&(Pr=!1,xt=e,go=o),l=e.pendingLanes,l===0&&(Et=null),Ed(n.stateNode),_e(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(mo)throw mo=!1,e=Zl,Zl=null,e;return go&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===ql?Qn++:(Qn=0,ql=e):Qn=0,Tt(),null}function pn(){if(xt!==null){var e=ru(go),t=De.transition,n=V;try{if(De.transition=null,V=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,go=0,W&6)throw Error(E(331));var o=W;for(W|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Wn(8,y,l)}var h=y.child;if(h!==null)h.return=y,T=h;else for(;T!==null;){y=T;var f=y.sibling,x=y.return;if(hc(y),y===d){T=null;break}if(f!==null){f.return=x,T=f;break}T=x}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var O=w.sibling;w.sibling=null,w=O}while(w!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Wn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,T=p;break e}T=l.return}}var c=e.current;for(T=c;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(C){re(s,s.return,C)}if(s===i){T=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,T=S;break e}T=s.return}}if(W=o,Tt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{V=n,De.transition=t}}return!1}function ls(e,t,n){t=xn(n,t),t=rc(e,t,1),e=Nt(e,t,1),t=ke(),e!==null&&(dr(e,1,t),_e(e,t))}function re(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=xn(n,e),e=oc(t,e,1),t=Nt(t,e,1),e=ke(),t!==null&&(dr(t,1,e),_e(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>ie()-Hi?At(e,0):$i|=n),_e(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ke();e=ut(e,t),e!==null&&(dr(e,t,n),_e(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Nc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,$f(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,q&&t.flags&1048576&&Lu(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var o=mn(t,xe.current);fn(t,n),o=Ii(null,t,r,e,o,n);var l=Oi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(l=!0,oo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bi(t),o.updater=zo,t.stateNode=o,o._reactInternals=t,Bl(t,r,e,n),t=Wl(null,t,r,!0,l,n)):(t.tag=0,q&&l&&Ni(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rp(r),e=He(r,e),o){case 0:t=Hl(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Ya(null,t,r,e,n);break e;case 14:t=Ga(null,t,r,He(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Hl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ka(e,t,r,o,n);case 3:e:{if(sc(t),e===null)throw Error(E(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Fu(e,t),uo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=xn(Error(E(423)),t),t=Xa(e,t,r,n,o);break e}else if(r!==o){o=xn(Error(E(424)),t),t=Xa(e,t,r,n,o);break e}else for(Pe=jt(t.stateNode.containerInfo.firstChild),be=t,q=!0,Ve=null,n=Mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===o){t=ct(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Iu(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ml(r,o)?i=null:l!==null&&Ml(r,l)&&(t.flags|=32),ac(e,t),we(e,t,i,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return uc(e,t,n);case 4:return Ti(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ya(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,G(ao,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!Ce.current){t=ct(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=it(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Al(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(E(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Al(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fn(t,n),o=Ae(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),Ga(e,t,r,o,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Hr(e,t),t.tag=1,ze(r)?(e=!0,oo(t)):e=!1,fn(t,n),nc(t,r,o),Bl(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return ic(e,t,n)}throw Error(E(156,t.tag))};function Cc(e,t){return qs(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new np(e,t,n,r)}function Yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return Yi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fi)return 11;if(e===pi)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Yi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Xt:return Ut(n.children,o,l,t);case di:i=8,o|=8;break;case dl:return e=Oe(12,n,t,o|2),e.elementType=dl,e.lanes=l,e;case fl:return e=Oe(13,n,t,o),e.elementType=fl,e.lanes=l,e;case pl:return e=Oe(19,n,t,o),e.elementType=pl,e.lanes=l,e;case Is:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rs:i=10;break e;case Fs:i=9;break e;case fi:i=11;break e;case pi:i=14;break e;case ht:i=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Oe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Ut(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Is,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function op(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gi(e,t,n,r,o,l,i,s,u){return e=new op(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Oe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bi(l),e}function lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return Lt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ze(n))return zu(e,n,t)}return t}function _c(e,t,n,r,o,l,i,s,u){return e=Gi(n,r,!0,e,o,l,i,s,u),e.context=zc(null),n=e.current,r=ke(),o=Ct(n),l=it(r,o),l.callback=t??null,Nt(n,l,o),e.current.lanes=o,dr(e,o,r),_e(e,r),e}function bo(e,t,n,r){var o=t.current,l=ke(),i=Ct(o);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=it(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,i),e!==null&&(Ye(e,o,i,l),Ur(e,o,i)),i}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ki(e,t){is(e,t),(e=e.alternate)&&is(e,t)}function ip(){return null}var Lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}To.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));bo(e,t,null,null)};To.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){bo(null,e,null,null)}),t[st]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&su(e)}};function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function as(){}function ap(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=yo(i);l.call(d)}}var i=_c(t,r,e,0,null,!1,!1,"",as);return e._reactRootContainer=i,e[st]=i.current,tr(e.nodeType===8?e.parentNode:e),Vt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=yo(u);s.call(d)}}var u=Gi(e,0,!1,null,null,!1,!1,"",as);return e._reactRootContainer=u,e[st]=u.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){bo(t,u,n,r)}),u}function Ro(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var u=yo(i);s.call(u)}}bo(t,i,e,o)}else i=ap(n,t,e,o,r);return yo(i)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(gi(t,n|1),_e(t,ie()),!(W&6)&&(wn=ie()+500,Tt()))}break;case 13:Vt(function(){var r=ut(e,1);if(r!==null){var o=ke();Ye(r,e,1,o)}}),Ki(e,1)}};vi=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ke();Ye(t,e,134217728,n)}Ki(e,134217728)}};lu=function(e){if(e.tag===13){var t=Ct(e),n=ut(e,t);if(n!==null){var r=ke();Ye(n,e,t,r)}Ki(e,t)}};iu=function(){return V};au=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};jl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=No(r);if(!o)throw Error(E(90));Ds(r),gl(r,o)}}}break;case"textarea":Us(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};Ys=Wi;Gs=Vt;var sp={usingClientEntryPoint:!1,Events:[pr,en,No,Vs,Qs,Wi]},Mn={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{wo=br.inject(up),Ze=br}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ji(t))throw Error(E(200));return lp(e,t,null,n)};Me.createRoot=function(e,t){if(!Ji(e))throw Error(E(299));var n=!1,r="",o=Lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gi(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,tr(e.nodeType===8?e.parentNode:e),new Xi(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Js(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Vt(e)};Me.hydrate=function(e,t,n){if(!Mo(t))throw Error(E(200));return Ro(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Ji(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Lc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=_c(t,null,e,1,n??null,o,!1,l,i),e[st]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new To(t)};Me.render=function(e,t,n){if(!Mo(t))throw Error(E(200));return Ro(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(E(40));return e._reactRootContainer?(Vt(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Me.unstable_batchedUpdates=Wi;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ro(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Me;var cp=Ps.exports,ss=cp;ul.createRoot=ss.createRoot,ul.hydrateRoot=ss.hydrateRoot;const dp=({onLogin:e})=>{const[t,n]=F.useState(!0),[r,o]=F.useState(""),[l,i]=F.useState(""),[s,u]=F.useState(""),[d,y]=F.useState(!1),[h,f]=F.useState(!1),x=k=>{if(k.preventDefault(),u(""),!r.includes("@")){u("Please enter a valid email address.");return}if(l.length<6){u("Password must be at least 6 characters long.");return}y(!0),setTimeout(()=>{const w=JSON.parse(localStorage.getItem("bloodfit_users")||"{}");t?w[r]&&w[r].password===l?e({email:r,name:r.split("@")[0]}):(u("Invalid email or password. Please try again."),y(!1)):w[r]?(u("User with this email already exists. Please login."),y(!1)):(w[r]={password:l},localStorage.setItem("bloodfit_users",JSON.stringify(w)),e({email:r,name:r.split("@")[0]}))},1e3)};return a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"login-card fade-in",children:[a.jsxs("div",{className:"logo-section",children:[a.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),a.jsx("h1",{children:"Blood & Fit"}),a.jsx("p",{children:"Your personal health companion"})]}),a.jsxs("form",{onSubmit:x,className:"login-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:k=>o(k.target.value),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"password-wrapper",children:[a.jsx("input",{type:h?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:l,onChange:k=>i(k.target.value),required:!0}),a.jsx("button",{type:"button",className:"toggle-password",onClick:()=>f(!h),children:h?"Hide":"Show"})]})]}),s&&a.jsx("div",{className:"error-box fade-in",children:a.jsxs("span",{children:["⚠️ ",s]})}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:d,children:d?a.jsx("span",{className:"spinner"}):t?"Login":"Sign Up"})]}),a.jsxs("p",{className:"footer-text",children:[t?"Don't have an account? ":"Already have an account? ",a.jsx("span",{className:"link",onClick:()=>{n(!t),u("")},children:t?"Sign up":"Login"})]})]}),a.jsx("style",{children:`
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
      `})]})},fp=({onComplete:e})=>{const[t,n]=F.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=i=>{const{name:s,value:u}=i.target;n(d=>({...d,[s]:u}))},o=(i,s)=>Math.round(parseInt(i||0)*30.48+parseInt(s||0)*2.54),l=i=>{if(i.preventDefault(),!t.name||!t.age||!t.weight)return;const s={...t,heightCm:t.heightCm||o(t.heightFt,t.heightIn)};e(s)};return a.jsxs("div",{className:"profile-container fade-in",children:[a.jsxs("div",{className:"card profile-card",children:[a.jsxs("div",{className:"header",children:[a.jsx("h2",{children:"Let's know you better"}),a.jsx("p",{children:"Enter your details for personalized health insights."})]}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:t.name,onChange:r,required:!0})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Age"}),a.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:t.age,onChange:r,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Gender"}),a.jsxs("select",{name:"gender",className:"input-field",value:t.gender,onChange:r,children:[a.jsx("option",{value:"male",children:"Male"}),a.jsx("option",{value:"female",children:"Female"}),a.jsx("option",{value:"other",children:"Other"})]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Weight (kg)"}),a.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:t.weight,onChange:r,step:"0.1",required:!0})]}),a.jsxs("div",{className:"height-section",children:[a.jsx("label",{children:"Height"}),a.jsx("div",{className:"tabs"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"CM"}),a.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:t.heightCm,onChange:r})]}),a.jsx("div",{className:"or-divider",children:"OR"}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Feet"}),a.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:t.heightFt,onChange:r})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"sub-label",children:"Inches"}),a.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:t.heightIn,onChange:r})]})]})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),a.jsx("style",{children:`
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
 */const hp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Y=(e,t)=>{const n=F.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:s="",children:u,...d},y)=>F.createElement("svg",{ref:y,...pp,width:o,height:o,stroke:r,strokeWidth:i?Number(l)*24/Number(o):l,className:["lucide",`lucide-${hp(e)}`,s].join(" "),...d},[...t.map(([h,f])=>F.createElement(h,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=Y("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=Y("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=Y("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=Y("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=Y("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=Y("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=Y("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=Y("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=Y("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=Y("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=Y("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Y("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=Y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=Y("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=Y("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Y("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=Y("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=Y("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Y("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=Y("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Y("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=Y("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Mp=({onClose:e,onNavigate:t,onLogout:n})=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"overlay",onClick:e}),a.jsxs("div",{className:"profile-menu fade-in",children:[a.jsx("button",{className:"close-btn",onClick:e,children:a.jsx(Mc,{size:20})}),a.jsx("h3",{children:"Profile Menu"}),a.jsxs("div",{className:"menu-options",children:[a.jsxs("button",{className:"menu-item",onClick:()=>{e(),t("weightprogress")},children:[a.jsx("div",{className:"icon-box weight",children:a.jsx(Tc,{size:20})}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:"Weight Progress"}),a.jsx("p",{children:"Track your weight journey"})]})]}),a.jsxs("button",{className:"menu-item logout",onClick:n,children:[a.jsx("div",{className:"icon-box logout-icon",children:a.jsx(Sp,{size:20})}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:"Logout"}),a.jsx("p",{children:"Sign out of your account"})]})]})]}),a.jsx("style",{children:`
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
                `})]})]}),Rp=({userName:e,onNavigate:t,onLogout:n})=>{const[r,o]=F.useState(!1),l=[{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:a.jsx(yp,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:a.jsx(bc,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:a.jsx(Yr,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:a.jsx(ni,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:a.jsx(jp,{size:24}),color:"#7209B7",bg:"#F3E8FF"}];return a.jsxs("div",{className:"dashboard-container fade-in",children:[r&&a.jsx(Mp,{onClose:()=>o(!1),onNavigate:t,onLogout:n}),a.jsxs("header",{className:"dash-header",children:[a.jsx("div",{className:"avatar",onClick:()=>o(!0),style:{cursor:"pointer"},children:e?e.charAt(0).toUpperCase():"U"}),a.jsxs("div",{className:"welcome-text",children:[a.jsx("p",{children:"Welcome back,"}),a.jsx("h3",{children:e||"User"})]}),a.jsxs("button",{className:"notif-btn",children:[a.jsx(ni,{size:20}),a.jsx("span",{className:"badge"})]})]}),a.jsx("div",{className:"stats-preview",children:a.jsxs("div",{className:"stat-card",children:[a.jsx("h4",{children:"Stay Hydrated! 💧"}),a.jsx("p",{children:"Drink 8 glasses of water today."})]})}),a.jsx("div",{className:"options-grid",children:l.map(i=>a.jsxs("button",{className:"option-card",onClick:()=>t(i.id),style:{"--hover-color":i.color},children:[a.jsx("div",{className:"icon-box",style:{color:i.color,backgroundColor:i.bg},children:i.icon}),a.jsxs("div",{className:"text-box",children:[a.jsx("h4",{children:i.title}),a.jsx("p",{children:i.desc})]}),a.jsx("div",{className:"arrow",children:"→"})]},i.id))}),a.jsx("style",{children:`
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
      `})]})},Fp=({userProfile:e,onBack:t})=>{const[n,r]=F.useState(0),[o,l]=F.useState(""),[i,s]=F.useState(""),[u,d]=F.useState(0),[y,h]=F.useState(-90);F.useEffect(()=>{e&&f()},[e]);const f=()=>{const{weight:x,heightCm:k}=e;if(!x||!k)return;const w=k/100,O=parseFloat((x/(w*w)).toFixed(1));r(O);let p="",c=0;O<18.5?(p="Underweight",c=20):O<25?(p="Normal Weight",c=0):O<30?(p="Overweight",c=40):(p="Obese",c=80),l(p),d(c);const m=15,S=40,C=Math.max(m,Math.min(O,S)),L=S-m,R=(C-m)/L*180-90;h(R);const $=(18.5*w*w).toFixed(1),I=(24.9*w*w).toFixed(1);s(`${$}kg - ${I}kg`)};return a.jsxs("div",{className:"bmi-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"BMI Calculator"})]}),a.jsxs("div",{className:"card result-card",children:[a.jsx("div",{className:"speedometer-wrapper",children:a.jsxs("div",{className:"speedometer",children:[a.jsxs("svg",{viewBox:"0 0 200 110",className:"gauge-svg",children:[a.jsx("path",{d:"M 20 100 A 80 80 0 0 1 73 26",fill:"none",stroke:"#FFD93D",strokeWidth:"15"})," ",a.jsx("path",{d:"M 73 26 A 80 80 0 0 1 127 26",fill:"none",stroke:"#6BCB77",strokeWidth:"15"})," ",a.jsx("path",{d:"M 127 26 A 80 80 0 0 1 180 100",fill:"none",stroke:"#FF6B6B",strokeWidth:"15"})," ",a.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"30",stroke:"#333",strokeWidth:"4",strokeLinecap:"round",transform:`rotate(${y} 100 100)`,className:"needle"}),a.jsx("circle",{cx:"100",cy:"100",r:"5",fill:"#333"})]}),a.jsxs("div",{className:"bmi-value",children:[a.jsx("h1",{children:n}),a.jsx("p",{children:o})]})]})}),a.jsx("div",{className:"risk-indicator",children:a.jsxs("p",{children:["Health Risk: ",a.jsx("span",{className:n>=25||n<18.5?"text-danger":"text-success",children:n>=30?"High":n>=25||n<18.5?"Moderate":"Low"})]})})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Healthy Weight Range"}),a.jsx("p",{children:i})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Weight for Age"}),a.jsx("p",{className:"highlight",children:"65th Percentile"}),a.jsx("span",{className:"sub-text",children:"(Estimated)"})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("h4",{children:"Height for Age"}),a.jsx("p",{className:"highlight",children:"70th Percentile"}),a.jsx("span",{className:"sub-text",children:"(Estimated)"})]})]}),a.jsxs("div",{className:"card manual-bmi-card",children:[a.jsx("h3",{children:"Validate a BMI Value"}),a.jsx("p",{className:"sub-text",children:"Enter a BMI number to check its category."}),a.jsxs("div",{className:"manual-input-row",children:[a.jsx("input",{type:"number",placeholder:"e.g. 24.5",className:"input-field",onChange:x=>{const k=parseFloat(x.target.value);if(k>0){let w="";k<18.5?w="Underweight 🔵":k<25?w="Normal ✅":k<30?w="Overweight ⚠️":w="Obese 🚨",x.target.nextElementSibling.innerText=w,x.target.nextElementSibling.style.display="block"}else x.target.nextElementSibling.style.display="none"}}),a.jsx("div",{className:"manual-result-badge",style:{display:"none"}})]})]}),a.jsx("style",{children:`
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
      `})]})};var Ip={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,l=Object.defineProperty||function(g,v,j){g[v]=j.value},i,s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",y=s.toStringTag||"@@toStringTag";function h(g,v,j){return Object.defineProperty(g,v,{value:j,enumerable:!0,configurable:!0,writable:!0}),g[v]}try{h({},"")}catch{h=function(v,j,b){return v[j]=b}}function f(g,v,j,b){var N=v&&v.prototype instanceof m?v:m,_=Object.create(N.prototype),B=new ae(b||[]);return l(_,"_invoke",{value:D(g,j,B)}),_}n.wrap=f;function x(g,v,j){try{return{type:"normal",arg:g.call(v,j)}}catch(b){return{type:"throw",arg:b}}}var k="suspendedStart",w="suspendedYield",O="executing",p="completed",c={};function m(){}function S(){}function C(){}var L={};h(L,u,function(){return this});var P=Object.getPrototypeOf,R=P&&P(P(le([])));R&&R!==r&&o.call(R,u)&&(L=R);var $=C.prototype=m.prototype=Object.create(L);S.prototype=C,l($,"constructor",{value:C,configurable:!0}),l(C,"constructor",{value:S,configurable:!0}),S.displayName=h(C,y,"GeneratorFunction");function I(g){["next","throw","return"].forEach(function(v){h(g,v,function(j){return this._invoke(v,j)})})}n.isGeneratorFunction=function(g){var v=typeof g=="function"&&g.constructor;return v?v===S||(v.displayName||v.name)==="GeneratorFunction":!1},n.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,C):(g.__proto__=C,h(g,y,"GeneratorFunction")),g.prototype=Object.create($),g},n.awrap=function(g){return{__await:g}};function M(g,v){function j(_,B,A,H){var Z=x(g[_],g,B);if(Z.type==="throw")H(Z.arg);else{var ft=Z.arg,et=ft.value;return et&&typeof et=="object"&&o.call(et,"__await")?v.resolve(et.__await).then(function(tt){j("next",tt,A,H)},function(tt){j("throw",tt,A,H)}):v.resolve(et).then(function(tt){ft.value=tt,A(ft)},function(tt){return j("throw",tt,A,H)})}}var b;function N(_,B){function A(){return new v(function(H,Z){j(_,B,H,Z)})}return b=b?b.then(A,A):A()}l(this,"_invoke",{value:N})}I(M.prototype),h(M.prototype,d,function(){return this}),n.AsyncIterator=M,n.async=function(g,v,j,b,N){N===void 0&&(N=Promise);var _=new M(f(g,v,j,b),N);return n.isGeneratorFunction(v)?_:_.next().then(function(B){return B.done?B.value:_.next()})};function D(g,v,j){var b=k;return function(_,B){if(b===O)throw new Error("Generator is already running");if(b===p){if(_==="throw")throw B;return z()}for(j.method=_,j.arg=B;;){var A=j.delegate;if(A){var H=Q(A,j);if(H){if(H===c)continue;return H}}if(j.method==="next")j.sent=j._sent=j.arg;else if(j.method==="throw"){if(b===k)throw b=p,j.arg;j.dispatchException(j.arg)}else j.method==="return"&&j.abrupt("return",j.arg);b=O;var Z=x(g,v,j);if(Z.type==="normal"){if(b=j.done?p:w,Z.arg===c)continue;return{value:Z.arg,done:j.done}}else Z.type==="throw"&&(b=p,j.method="throw",j.arg=Z.arg)}}}function Q(g,v){var j=v.method,b=g.iterator[j];if(b===i)return v.delegate=null,j==="throw"&&g.iterator.return&&(v.method="return",v.arg=i,Q(g,v),v.method==="throw")||j!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+j+"' method")),c;var N=x(b,g.iterator,v.arg);if(N.type==="throw")return v.method="throw",v.arg=N.arg,v.delegate=null,c;var _=N.arg;if(!_)return v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,c;if(_.done)v[g.resultName]=_.value,v.next=g.nextLoc,v.method!=="return"&&(v.method="next",v.arg=i);else return _;return v.delegate=null,c}I($),h($,y,"Generator"),h($,u,function(){return this}),h($,"toString",function(){return"[object Generator]"});function K(g){var v={tryLoc:g[0]};1 in g&&(v.catchLoc=g[1]),2 in g&&(v.finallyLoc=g[2],v.afterLoc=g[3]),this.tryEntries.push(v)}function oe(g){var v=g.completion||{};v.type="normal",delete v.arg,g.completion=v}function ae(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(K,this),this.reset(!0)}n.keys=function(g){var v=Object(g),j=[];for(var b in v)j.push(b);return j.reverse(),function N(){for(;j.length;){var _=j.pop();if(_ in v)return N.value=_,N.done=!1,N}return N.done=!0,N}};function le(g){if(g){var v=g[u];if(v)return v.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var j=-1,b=function N(){for(;++j<g.length;)if(o.call(g,j))return N.value=g[j],N.done=!1,N;return N.value=i,N.done=!0,N};return b.next=b}}return{next:z}}n.values=le;function z(){return{value:i,done:!0}}return ae.prototype={constructor:ae,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(oe),!g)for(var v in this)v.charAt(0)==="t"&&o.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=i)},stop:function(){this.done=!0;var g=this.tryEntries[0],v=g.completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var v=this;function j(H,Z){return _.type="throw",_.arg=g,v.next=H,Z&&(v.method="next",v.arg=i),!!Z}for(var b=this.tryEntries.length-1;b>=0;--b){var N=this.tryEntries[b],_=N.completion;if(N.tryLoc==="root")return j("end");if(N.tryLoc<=this.prev){var B=o.call(N,"catchLoc"),A=o.call(N,"finallyLoc");if(B&&A){if(this.prev<N.catchLoc)return j(N.catchLoc,!0);if(this.prev<N.finallyLoc)return j(N.finallyLoc)}else if(B){if(this.prev<N.catchLoc)return j(N.catchLoc,!0)}else if(A){if(this.prev<N.finallyLoc)return j(N.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(g,v){for(var j=this.tryEntries.length-1;j>=0;--j){var b=this.tryEntries[j];if(b.tryLoc<=this.prev&&o.call(b,"finallyLoc")&&this.prev<b.finallyLoc){var N=b;break}}N&&(g==="break"||g==="continue")&&N.tryLoc<=v&&v<=N.finallyLoc&&(N=null);var _=N?N.completion:{};return _.type=g,_.arg=v,N?(this.method="next",this.next=N.finallyLoc,c):this.complete(_)},complete:function(g,v){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&v&&(this.next=v),c},finish:function(g){for(var v=this.tryEntries.length-1;v>=0;--v){var j=this.tryEntries[v];if(j.finallyLoc===g)return this.complete(j.completion,j.afterLoc),oe(j),c}},catch:function(g){for(var v=this.tryEntries.length-1;v>=0;--v){var j=this.tryEntries[v];if(j.tryLoc===g){var b=j.completion;if(b.type==="throw"){var N=b.arg;oe(j)}return N}}throw new Error("illegal catch attempt")},delegateYield:function(g,v,j){return this.delegate={iterator:le(g),resultName:v,nextLoc:j},this.method==="next"&&(this.arg=i),c}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Ip);var Zi=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Op=Zi;let fs=0;var Rc=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=Op("Job",fs),fs+=1),{id:r,action:t,payload:n}},En={};let qi=!1;En.logging=qi;En.setLogging=e=>{qi=e};En.log=(...e)=>qi?console.log.apply(void 0,e):null;const Dp=Rc,{log:Tr}=En,Ap=Zi;let ps=0;var Up=()=>{const e=Ap("Scheduler",ps),t={},n={};let r=[];ps+=1;const o=()=>r.length,l=()=>Object.keys(t).length,i=()=>{if(r.length!==0){const h=Object.keys(t);for(let f=0;f<h.length;f+=1)if(typeof n[h[f]]>"u"){r[0](t[h[f]]);break}}},s=(h,f)=>new Promise((x,k)=>{const w=Dp({action:h,payload:f});r.push(async O=>{r.shift(),n[O.id]=w;try{x(await O[h].apply(void 0,[...f,w.id]))}catch(p){k(p)}finally{delete n[O.id],i()}}),Tr(`[${e}]: Add ${w.id} to JobQueue`),Tr(`[${e}]: JobQueue length=${r.length}`),i()});return{addWorker:h=>(t[h.id]=h,Tr(`[${e}]: Add ${h.id}`),Tr(`[${e}]: Number of workers=${l()}`),i(),h.id),addJob:async(h,...f)=>{if(l()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return s(h,f)},terminate:async()=>{Object.keys(t).forEach(async h=>{await t[h].terminate()}),r=[]},getQueueLen:o,getNumWorkers:l}};function Bp(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function $p(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Hp=$p;const Wp=Hp;var Vp=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":Wp()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof Bp=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const Qp=Vp("type")==="browser",Yp=Qp?e=>new URL(e,window.location.href).href:e=>e;var Gp=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=Yp(t[n]))}),t},Kp=e=>{const t=[],n=[],r=[],o=[],l=[];return e.blocks&&e.blocks.forEach(i=>{i.paragraphs.forEach(s=>{s.lines.forEach(u=>{u.words.forEach(d=>{d.symbols.forEach(y=>{l.push({...y,page:e,block:i,paragraph:s,line:u,word:d})}),o.push({...d,page:e,block:i,paragraph:s,line:u})}),r.push({...u,page:e,block:i,paragraph:s})}),n.push({...s,page:e,block:i})}),t.push({...i,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:l}},Fc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Xp="5.1.1",Jp={version:Xp};var Zp={workerBlobURL:!0,logger:()=>{}};const qp=Jp.version,eh=Zp;var th={...eh,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${qp}/dist/worker.min.js`},nh=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},rh=e=>{e.terminate()},oh=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},lh=async(e,t)=>{e.postMessage(t)};const al=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),ri=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await ri(e.src)),e.tagName==="VIDEO"&&(t=await ri(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await al(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await al(n)}else(e instanceof File||e instanceof Blob)&&(t=await al(e));return new Uint8Array(t)};var ih=ri;const ah=th,sh=nh,uh=rh,ch=oh,dh=lh,fh=ih;var ph={defaultOptions:ah,spawnWorker:sh,terminateWorker:uh,onMessage:ch,send:dh,loadImage:fh};const hh=Gp,mh=Kp,$e=Rc,{log:hs}=En,gh=Zi,Mt=Fc,{defaultOptions:vh,spawnWorker:yh,terminateWorker:xh,onMessage:wh,loadImage:ms,send:kh}=ph;let gs=0;var Ic=async(e="eng",t=Mt.LSTM_ONLY,n={},r={})=>{const o=gh("Worker",gs),{logger:l,errorHandler:i,...s}=hh({...vh,...n}),u={},d={},y=typeof e=="string"?e.split("+"):e;let h=t,f=r;const x=[Mt.DEFAULT,Mt.LSTM_ONLY].includes(t)&&!s.legacyCore;let k,w;const O=new Promise((N,_)=>{w=N,k=_}),p=N=>{k(N.message)};let c=yh(s);c.onerror=p,gs+=1;const m=(N,_)=>{u[N]=_},S=(N,_)=>{d[N]=_},C=({id:N,action:_,payload:B})=>new Promise((A,H)=>{hs(`[${o}]: Start ${N}, action=${_}`);const Z=`${_}-${N}`;m(Z,A),S(Z,H),kh(c,{workerId:o,jobId:N,action:_,payload:B})}),L=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),P=N=>C($e({id:N,action:"load",payload:{options:{lstmOnly:x,corePath:s.corePath,logging:s.logging}}})),R=(N,_,B)=>C($e({id:B,action:"FS",payload:{method:"writeFile",args:[N,_]}})),$=(N,_)=>C($e({id:_,action:"FS",payload:{method:"readFile",args:[N,{encoding:"utf8"}]}})),I=(N,_)=>C($e({id:_,action:"FS",payload:{method:"unlink",args:[N]}})),M=(N,_,B)=>C($e({id:B,action:"FS",payload:{method:N,args:_}})),D=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),Q=(N,_)=>C($e({id:_,action:"loadLanguage",payload:{langs:N,options:{langPath:s.langPath,dataPath:s.dataPath,cachePath:s.cachePath,cacheMethod:s.cacheMethod,gzip:s.gzip,lstmOnly:[Mt.DEFAULT,Mt.LSTM_ONLY].includes(h)&&!s.legacyLang}}})),K=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),oe=(N,_,B,A)=>C($e({id:A,action:"initialize",payload:{langs:N,oem:_,config:B}})),ae=(N="eng",_,B,A)=>{if(x&&[Mt.TESSERACT_ONLY,Mt.TESSERACT_LSTM_COMBINED].includes(_))throw Error("Legacy model requested but code missing.");const H=_||h;h=H;const Z=B||f;f=Z;const et=(typeof N=="string"?N.split("+"):N).filter(tt=>!y.includes(tt));return y.push(...et),et.length>0?Q(et,A).then(()=>oe(N,H,Z,A)):oe(N,H,Z,A)},le=(N={},_)=>C($e({id:_,action:"setParameters",payload:{params:N}})),z=async(N,_={},B={blocks:!0,text:!0,hocr:!0,tsv:!0},A)=>C($e({id:A,action:"recognize",payload:{image:await ms(N),options:_,output:B}})),g=(N="Tesseract OCR Result",_=!1,B)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),C($e({id:B,action:"getPDF",payload:{title:N,textonly:_}}))),v=async(N,_)=>{if(x)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return C($e({id:_,action:"detect",payload:{image:await ms(N)}}))},j=async()=>(c!==null&&(xh(c),c=null),Promise.resolve());wh(c,({workerId:N,jobId:_,status:B,action:A,data:H})=>{const Z=`${A}-${_}`;if(B==="resolve"){hs(`[${N}]: Complete ${_}`);let ft=H;A==="recognize"?ft=mh(H):A==="getPDF"&&(ft=Array.from({...H,length:Object.keys(H).length})),u[Z]({jobId:_,data:ft})}else if(B==="reject")if(d[Z](H),A==="load"&&k(H),i)i(H);else throw Error(H);else B==="progress"&&l({...H,userJobId:_})});const b={id:o,worker:c,setResolve:m,setReject:S,load:L,writeText:R,readText:$,removeFile:I,FS:M,loadLanguage:D,initialize:K,reinitialize:ae,setParameters:le,recognize:z,getPDF:g,detect:v,terminate:j};return P().then(()=>Q(e)).then(()=>oe(e,t,r)).then(()=>w(b)).catch(()=>{}),O};const Oc=Ic,Sh=async(e,t,n)=>{const r=await Oc(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},jh=async(e,t)=>{const n=await Oc("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var Nh={recognize:Sh,detect:jh},Eh={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Ch={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const zh=Up,_h=Ic,Lh=Nh,Ph=Eh,bh=Fc,Th=Ch,{setLogging:Mh}=En;var Rh={languages:Ph,OEM:bh,PSM:Th,createScheduler:zh,createWorker:_h,setLogging:Mh,...Lh};const Fh=vs(Rh),sl={hemoglobin:{min:12.5,max:16,unit:"gm/dl",foods:["Spinach","Red Meat","Pumpkin Seeds"],impact:{low:"You may experience higher fatigue during cardio. Consider lower intensity now.",high:"Rarely caused by high altitude or smoking. Ensure good hydration."}},total_count:{min:4e3,max:11e3,unit:"cells/cumm",foods:["Vitamin C","Garlic","Ginger"],impact:{low:"Immunity might be lower. Skip high-intensity sessions if you feel weak.",high:"Body is fighting something. Rest and recover properly."}},neutrophil:{min:40,max:70,unit:"%",foods:[],impact:{}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{}},eosinophil:{min:2,max:8,unit:"%",foods:[],impact:{}},monocyte:{min:1,max:6,unit:"%",foods:[],impact:{}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},platelet_count:{min:1.5,max:4.5,unit:"Lakhs/cumm",foods:["Papaya Leaf","Pomegranate"],impact:{low:"Careful to avoid injury. High-impact sports are not recommended.",high:"Can indicate inflammation. Focus on recovery."}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory foods"],impact:{high:"High inflammation. Focus on light movement and stretching."}},mcv:{min:80,max:100,unit:"fL",foods:["Vitamin B12","Folic Acid"],impact:{low:"Lower oxygen capacity. Strength training may feel significantly harder."}},mch:{min:27,max:32,unit:"pg",foods:["Iron rich foods"],impact:{low:"Fatigue risk. Focus on foundational strength movements."}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},t3:{min:.85,max:2.68,unit:"nmol/L",foods:["Brazil Nuts"," Seaweed"],impact:{low:"Lowered metabolism. You might find it harder to maintain energy."}},t4:{min:5.1,max:14.1,unit:"ug/dL",foods:["Dairy","Eggs","Fish"],impact:{low:"Similar to T3, watch for sluggishness during workouts."}},tsh:{min:.27,max:4.2,unit:"uIU/mL",foods:["Avoid cruciferous veg if hypothyroid"],impact:{high:"Watch for weight gain and low energy levels during routine."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Low Carb","High Fiber"],impact:{high:"Higher inflammation. Focus on consistent low-intensity (Zone 2) cardio.",low:"Potential for dizziness. Have a small snack before exercise."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Complex Carbs","Vegetables"],impact:{high:"Spikes can affect recovery. A 10-min walk after meals is recommended."}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Nuts","Olive Oil"],impact:{high:"Focus on heart-healthy cardio like swimming or brisk walking."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["Avoid Sugar","Eat Fish"],impact:{high:"Cut sugar/alcohol. Focus on 'Fat-Burning' Zone cardio."}},hdl_cholesterol:{min:40,max:60,unit:"mg/dL",foods:["Avocado","Salmon"],impact:{low:"HIIT or intensive cardio can help boost this 'good' cholesterol."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber","Soy","Almonds"],impact:{high:"Heart health priority. Daily steady movement is mandatory."}},urea:{min:15,max:40,unit:"mg/dL",foods:["Reduce Protein","Hydrate"],impact:{high:"Kidney stress. Hydrate well and limit protein supplement intake temporarily."}},creatinine:{min:.6,max:1.2,unit:"mg/dL",foods:["Reduce Red Meat","Hydrate"],impact:{high:"Ensure excellent hydration; avoid over-exertion in extreme heat."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Avoid Alcohol","Cherries","Vitamin C"],impact:{high:"Risk of joint pain (Gout). Avoid high-impact exercise if joints feel sore."}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Hydrate"],impact:{low:"Performance risk. Monitor salt loss during long workout sessions."}},potassium:{min:3.5,max:5.5,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"High risk of muscle cramps. Ensure steady electrolyte intake."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon Water"],impact:{high:"Liver stress. Keep training intensity moderate and skip supplements."}},sgot:{min:5,max:40,unit:"U/L",foods:["Leafy Greens","Coffee"],impact:{high:"Could be muscle damage from training or liver stress. Take a rest day."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole Grains","Avoid Alcohol"],impact:{high:"Focus on recovery. Avoid using pain killers like Tylenol if high."}},alkaline_phosphatase:{min:44,max:147,unit:"IU/L",foods:["Vitamin D"],impact:{low:"Vitamin D deficiency. Impacts bone health and muscle strength."}}},Ih=({onBack:e})=>{const[t,n]=F.useState(null),[r,o]=F.useState(null),[l,i]=F.useState([]),[s,u]=F.useState(!1),[d,y]=F.useState(""),[h,f]=F.useState("hemoglobin"),[x,k]=F.useState(""),[w,O]=F.useState(null),[p,c]=F.useState("basic"),[m,S]=F.useState("checking");F.useEffect(()=>{C();const M=localStorage.getItem("blood_reports");M&&i(JSON.parse(M))},[]);const C=async()=>{const M="http://localhost:5000";try{(await fetch(`${M}/health`)).ok?S("online"):S("offline")}catch{S("offline")}},L=async M=>{u(!0),y("Starting OCR Engine...");try{const{data:{text:D}}=await Fh.recognize(M,"eng",{logger:le=>y(`${le.status} (${Math.round(le.progress*100)}%)`)});console.log("Raw OCR Text:",D);const Q=D.split(`
`),K={},oe=le=>le.toLowerCase().replace(/[^a-z0-9.]/g,""),ae={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],eosinophil:["eosinophils","eosinophil"],monocyte:["monocytes","monocyte"],basophil:["basophils","basophil"],platelet_count:["platelet count","platelet","plt"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],glucose_fasting:["glucose fasting","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],cholesterol:["total cholesterol","serum cholesterol"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"]};if(Q.forEach(le=>{const z=le.toLowerCase().trim();z&&Object.keys(ae).forEach(g=>{const j=ae[g].find(b=>z.includes(b));if(j&&!K[g]){const N=z.replace(j,"").match(/(\d+(\.\d+)?)/g);if(N&&N.length>0){const _=parseFloat(N[0]);isNaN(_)||(K[g]=_)}}})}),Object.keys(K).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+D.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+D),u(!1);return}$({date:new Date().toLocaleDateString(),values:K})}catch(D){console.error(D),alert("Error parsing image. Please try a clearer photo.")}finally{u(!1),y("")}},P=M=>{const D=M.target.files[0];D&&(D.type.startsWith("image/")?(n(D),p==="advanced"&&m==="online"?R(D):L(D)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},R=async M=>{u(!0),y("Sending to ML Neural Network...");const D=new FormData;D.append("file",M);const Q="http://localhost:5000";try{const K=await fetch(`${Q}/analyze`,{method:"POST",body:D}),oe=await K.json();if(!K.ok)throw new Error(oe.error||"Server Error");if(console.log("ML Results:",oe),!oe.raw_results||oe.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),L(M);return}}catch(K){console.error(K),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),L(M)}finally{u(!1),y("")}},$=M=>{const D=[],Q=[];Object.keys(M.values).forEach(ae=>{var j,b;const le=parseFloat(M.values[ae]),z=sl[ae];if(!z)return;let g="Normal";le<z.min&&(g="Low"),le>z.max&&(g="High");const v=g==="Low"?(j=z.impact)==null?void 0:j.low:g==="High"?(b=z.impact)==null?void 0:b.high:null;g!=="Normal"&&Q.push({parameter:ae,status:g,foods:z.foods,fitnessImpact:v}),D.push({parameter:ae,value:le,unit:z.unit,range:`${z.min}-${z.max}`,status:g,fitnessImpact:v})});const K={...M,results:D,suggestions:Q};o(K);const oe=[K,...l];i(oe),localStorage.setItem("blood_reports",JSON.stringify(oe))},I=M=>{var oe,ae;if(M.preventDefault(),!x)return;const D=parseFloat(x),Q=sl[h];let K="Normal";D<Q.min&&(K="Low"),D>Q.max&&(K="High"),O({parameter:h,value:D,unit:Q.unit,range:`${Q.min}-${Q.max}`,status:K,foods:Q.foods,fitnessImpact:K==="Low"?(oe=Q.impact)==null?void 0:oe.low:K==="High"?(ae=Q.impact)==null?void 0:ae.high:null})};return a.jsxs("div",{className:"blood-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Blood Evaluation"})]}),r?a.jsxs("div",{className:"results-section fade-in",children:[a.jsxs("div",{className:"results-header",children:[a.jsx("h3",{children:"Report Analysis"}),a.jsx("button",{className:"text-btn",onClick:()=>o(null),children:"Close"})]}),a.jsx("div",{className:"params-list",children:r.results.map((M,D)=>a.jsxs("div",{className:"param-card",children:[a.jsxs("div",{className:"param-header",children:[a.jsx("h4",{children:M.parameter.replace(/_/g," ").toUpperCase()}),a.jsxs("span",{className:`status-badge ${M.status.toLowerCase()}`,children:[M.status==="Normal"&&a.jsx(wp,{size:14}),M.status==="High"&&a.jsx(gp,{size:14}),M.status==="Low"&&a.jsx(mp,{size:14}),M.status]})]}),a.jsxs("div",{className:"param-value",children:[a.jsx("span",{className:"val",children:M.value}),a.jsx("span",{className:"unit",children:M.unit})]}),a.jsxs("p",{className:"range-info",children:["Ref Range: ",M.range]})]},D))}),r.suggestions.length>0&&a.jsxs("div",{className:"suggestions-box",children:[a.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),r.suggestions.map((M,D)=>a.jsxs("div",{className:"suggestion-item",children:[a.jsx("div",{className:"suggestion-header",children:a.jsxs("strong",{children:[M.status," ",M.parameter.replace(/_/g," ").toUpperCase()]})}),M.foods.length>0&&a.jsxs("p",{className:"food-list",children:["💡 ",a.jsx("b",{children:"Diety Tip:"})," Eat ",M.foods.join(", ")]}),M.fitnessImpact&&a.jsxs("p",{className:"fitness-list",children:["⚡ ",a.jsx("b",{children:"Fitness Impact:"})," ",M.fitnessImpact]})]},D))]})]}):a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"card manual-card",children:[a.jsx("h3",{children:"Quick Check"}),a.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),a.jsxs("form",{onSubmit:I,className:"manual-form",children:[a.jsxs("div",{className:"row",children:[a.jsx("select",{className:"input-field",value:h,onChange:M=>{f(M.target.value),O(null)},children:Object.keys(sl).map(M=>a.jsx("option",{value:M,children:M.replace(/_/g," ").toUpperCase()},M))}),a.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:x,onChange:M=>k(M.target.value),required:!0})]}),a.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",a.jsx(Ep,{size:16})]})]}),w&&a.jsxs("div",{className:"manual-result fade-in",children:[a.jsx("div",{className:`result-badge ${w.status.toLowerCase()}`,children:w.status}),a.jsxs("p",{className:"result-text",children:[a.jsxs("strong",{children:[w.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",w.value," ",w.unit,a.jsx("br",{}),a.jsxs("span",{className:"text-muted",children:["Normal: ",w.range]})]}),w.status!=="Normal"&&w.foods.length>0&&a.jsxs("div",{className:"diet-tip",children:[a.jsx("strong",{children:"Tip:"})," Eat ",w.foods.join(", ")]}),w.fitnessImpact&&a.jsxs("div",{className:"fitness-tip",children:[a.jsx("strong",{children:"Fitness Impact:"})," ",w.fitnessImpact]})]})]}),a.jsx("div",{className:"divider",children:"OR"}),a.jsxs("div",{className:"upload-card",children:[a.jsx("div",{className:"icon-circle",children:a.jsx(Pp,{size:32,color:"var(--color-primary)"})}),a.jsx("h3",{children:"Upload Report Image"}),a.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),a.jsxs("div",{className:"scan-mode-toggle",children:[a.jsx("button",{className:`mode-btn ${p==="basic"?"active":""}`,onClick:()=>c("basic"),children:"Basic (Browser)"}),a.jsxs("button",{className:`mode-btn ${p==="advanced"?"active":""}`,onClick:()=>c("advanced"),children:["Advanced (Python ML)",m==="online"&&a.jsx("span",{className:"dot online",title:"Server Online"}),m==="offline"&&a.jsx("span",{className:"dot offline",title:"Server Offline (Run server.py)"})]})]}),a.jsxs("label",{className:"btn-secondary upload-btn",children:[s?d||"Scanning...":"Select Image (JPG/PNG)",a.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:P,disabled:s})]})]}),l.length>0&&a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Recent Reports"}),l.map((M,D)=>a.jsxs("div",{className:"history-item",onClick:()=>o(M),children:[a.jsx(bc,{size:18,className:"text-muted"}),a.jsx("span",{children:M.date}),a.jsx("span",{className:"arrow",children:"→"})]},D))]})]}),a.jsx("style",{children:`
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
      `})]})},Mr={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},Oh=({userProfile:e,onBack:t})=>{const[n,r]=F.useState(null),[o,l]=F.useState(0),[i,s]=F.useState(null);F.useEffect(()=>{n&&e&&d()},[n]);const u=()=>{if(!e)return 2e3;const{weight:y,heightCm:h,age:f,gender:x}=e;let k=10*y+6.25*h-5*f;x==="male"?k+=5:k-=161;let w=Math.round(k*1.375);return n==="loss"?w-500:n==="gain"?w+500:w},d=()=>{const y=u();l(y);const h=f=>f[Math.floor(Math.random()*f.length)];s({breakfast:h(Mr.breakfast),lunch:h(Mr.lunch),snack:h(Mr.snack),dinner:h(Mr.dinner)})};return a.jsxs("div",{className:"fitness-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:t,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Fitness Helper"})]}),n?a.jsxs("div",{className:"plan-view fade-in",children:[a.jsxs("div",{className:"summary-card",children:[a.jsxs("div",{className:"cal-target",children:[a.jsx("span",{className:"label",children:"Daily Target"}),a.jsx("h1",{children:o}),a.jsx("span",{className:"unit",children:"kcal"})]}),a.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),a.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),a.jsxs("div",{className:"meals-list",children:[a.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),i&&a.jsxs(a.Fragment,{children:[a.jsx(Rr,{type:"Breakfast",icon:a.jsx(cs,{size:18}),data:i.breakfast}),a.jsx(Rr,{type:"Lunch",icon:a.jsx(Yr,{size:18}),data:i.lunch}),a.jsx(Rr,{type:"Snack",icon:a.jsx(cs,{size:18}),data:i.snack}),a.jsx(Rr,{type:"Dinner",icon:a.jsx(Yr,{size:18}),data:i.dinner})]})]})]}):a.jsxs("div",{className:"goal-selection",children:[a.jsx("h3",{children:"What is your goal?"}),a.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[a.jsx("div",{className:"icon-box loss",children:a.jsx(zp,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Loss"}),a.jsx("p",{children:"Reduce body fat locally."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[a.jsx("div",{className:"icon-box maintain",children:a.jsx(Tp,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Maintain Weight"}),a.jsx("p",{children:"Stay healthy and fit."})]})]}),a.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[a.jsx("div",{className:"icon-box gain",children:a.jsx(Yr,{size:24})}),a.jsxs("div",{className:"text",children:[a.jsx("h4",{children:"Weight Gain"}),a.jsx("p",{children:"Build muscle mass."})]})]})]}),a.jsx("style",{children:`
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
      `})]})},Rr=({type:e,icon:t,data:n})=>a.jsxs("div",{className:"meal-card",children:[a.jsxs("div",{className:"meal-info",children:[a.jsxs("h4",{children:[t," ",e]}),a.jsx("p",{children:n.name})]}),a.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),Dh=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],Ah=({onBack:e})=>{const[t,n]=F.useState(null);return a.jsxs("div",{className:"workout-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Home Workouts"})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("div",{className:"intro-icon",children:a.jsx(ds,{size:28,color:"#FF6B6B"})}),a.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),a.jsx("div",{className:"workout-list",children:Dh.map(r=>a.jsxs("div",{className:"workout-card",children:[a.jsxs("div",{className:"w-header",children:[a.jsx("h3",{children:r.name}),a.jsxs("span",{className:"cal-badge",children:[a.jsx(ds,{size:12,fill:"currentColor"})," ",r.calories]})]}),a.jsx("p",{className:"w-desc",children:r.desc}),a.jsxs("div",{className:"w-footer",children:[a.jsxs("span",{className:"duration",children:[a.jsx(_p,{size:14})," ",r.duration]}),a.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),t&&a.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:a.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[a.jsx("button",{className:"close-btn",onClick:()=>n(null),children:a.jsx(Mc,{size:24})}),a.jsxs("div",{className:"modal-header",children:[a.jsx("h3",{children:t.name}),a.jsx("span",{className:"cal-pill",children:t.calories})]}),a.jsx("div",{className:`animation-stage anim-${t.name.split(" ")[0]||"default"}`,children:a.jsxs("div",{className:"stick-figure",children:[a.jsx("div",{className:"head"}),a.jsx("div",{className:"body"}),a.jsx("div",{className:"arms"}),a.jsxs("div",{className:"legs",children:[a.jsx("div",{className:"leg-l"}),a.jsx("div",{className:"leg-r"})]})]})}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("h4",{children:[a.jsx(kp,{size:16})," How to do it:"]}),a.jsx("ul",{className:"steps-list",children:t.steps.map((r,o)=>a.jsxs("li",{children:[a.jsx("span",{className:"step-num",children:o+1}),r]},o))})]})]})}),a.jsx("style",{children:`
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
                
                /* ANIMATION CONTAINER */
                .animation-stage {
                    width: 100%;
                    height: 180px;
                    background: #f0fdf4;
                    border-radius: var(--radius-md);
                    margin-bottom: 20px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 2px solid #bbf7d0;
                }
                
                /* Character Elements */
                .stick-figure {
                    position: relative;
                    width: 40px;
                    height: 100px;
                }
                .head {
                    width: 20px; height: 20px; background: #15803d; border-radius: 50%;
                    position: absolute; top: 0; left: 10px;
                }
                .body {
                    width: 4px; height: 40px; background: #15803d;
                    position: absolute; top: 20px; left: 18px;
                }
                .arms {
                    width: 40px; height: 4px; background: #15803d;
                    position: absolute; top: 30px; left: 0;
                }
                .legs {
                    width: 40px; height: 40px;
                    position: absolute; top: 60px; left: 0;
                }
                .leg-l, .leg-r {
                    width: 4px; height: 40px; background: #15803d;
                    position: absolute; top: 0;
                }
                .leg-l { left: 10px; transform: rotate(-10deg); }
                .leg-r { right: 10px; transform: rotate(10deg); }


                /* Workout Specific Animations */
                
                /* Squats: Simple Up/Down */
                .anim-Squats .stick-figure {
                    animation: squat 1.5s infinite ease-in-out;
                }
                @keyframes squat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(30px) scaleY(0.8); }
                }

                /* Jump Jacks: Arms/Legs spread */
                .anim-Jumping .arms, .anim-Jumping .legs {
                    animation: jack 1s infinite steps(2);
                }
                @keyframes jack {
                    0% { transform: scaleX(1); }
                    50% { transform: scaleX(1.5); }
                }

                /* Pushups: Rotate and translate */
                .anim-Push-ups .stick-figure {
                    transform: rotate(90deg);
                    animation: pushup 1.5s infinite ease-in-out;
                }
                @keyframes pushup {
                    0%, 100% { transform: rotate(90deg) translateX(0); }
                    50% { transform: rotate(90deg) translateX(20px); }
                }

                /* Burpees */
                .anim-Burpees .stick-figure {
                    animation: burpee 2s infinite;
                }
                @keyframes burpee {
                    0% { transform: translateY(0); }
                    25% { transform: translateY(40px) rotate(90deg); /* Down */ }
                    50% { transform: translateY(40px) rotate(90deg); /* Pushup */ }
                    75% { transform: translateY(0); /* Jump */ }
                    100% { transform: translateY(0); }
                }

                /* Default Bounce */
                .anim-default .stick-figure {
                    animation: bounce 1s infinite;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .start-now-btn {
                    background: var(--color-primary);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 99px;
                    font-weight: 600;
                    box-shadow: var(--shadow-md);
                }
            `})]})},Uh=({onBack:e,userProfile:t})=>{const[n,r]=F.useState(()=>{const h=localStorage.getItem("weight_log");return h?JSON.parse(h):[]}),[o,l]=F.useState(""),i=()=>{if(!o||isNaN(o))return;const h={weight:parseFloat(o),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},f=[...n,h];r(f),localStorage.setItem("weight_log",JSON.stringify(f)),l("")},u=(()=>{if(n.length<2)return{change:0,type:"neutral"};const h=n[n.length-1].weight,f=n[n.length-2].weight,x=h-f;return{change:Math.abs(x).toFixed(1),type:x>0?"gain":x<0?"loss":"neutral"}})(),d=(t==null?void 0:t.weight)||(n.length>0?n[0].weight:0),y=n.length>0?n[n.length-1].weight:d;return a.jsxs("div",{className:"weight-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Weight Progress"})]}),a.jsxs("div",{className:"stats-card",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Starting Weight"}),a.jsxs("span",{className:"value",children:[d," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Current Weight"}),a.jsxs("span",{className:"value primary",children:[y," kg"]})]}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("span",{className:"label",children:"Change"}),a.jsxs("span",{className:`value ${u.type}`,children:[u.type==="gain"&&a.jsx(Tc,{size:16}),u.type==="loss"&&a.jsx(Lp,{size:16}),u.type==="neutral"&&a.jsx(Np,{size:16}),u.change," kg"]})]})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("h3",{children:"Log Current Weight"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:o,onChange:h=>l(h.target.value),step:"0.1"}),a.jsx("button",{className:"add-btn",onClick:i,children:"Add"})]})]}),a.jsxs("div",{className:"history-section",children:[a.jsx("h3",{children:"Weight History"}),n.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(ni,{size:40,color:"#cbd5e1"}),a.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):a.jsx("div",{className:"history-list",children:[...n].reverse().map((h,f)=>a.jsxs("div",{className:"history-item",children:[a.jsxs("div",{className:"date-badge",children:[a.jsx(xp,{size:14}),h.displayDate]}),a.jsxs("div",{className:"weight-display",children:[h.weight," kg"]})]},f))})]}),a.jsx("style",{children:`
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
            `})]})},Bh=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],$h=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],Hh=({onBack:e})=>{const[t,n]=F.useState([{id:1,text:"Hello! I'm your Health & Fitness Assistant. Ask me anything about your blood report, nutrition, or workout strategy.",sender:"bot"}]),[r,o]=F.useState(""),[l,i]=F.useState(!1),s=F.useRef(null),u=()=>{var f;(f=s.current)==null||f.scrollIntoView({behavior:"smooth"})};F.useEffect(()=>{u()},[t]);const d=f=>{const x=f.toLowerCase();return $h.some(w=>x.includes(w))?x.includes("protein")?"Protein is the building block of muscle. For vegetarians: Paneer, Dal, Chickpeas, Soy, and Milk are great. For non-vegetarians: Chicken breast, Fish, and Eggs are gold standards. Aim for 1.2g to 2g of protein per kg of body weight depending on your activity level.":x.includes("pre-workout")||x.includes("before gym")||x.includes("before workout")?"A good pre-workout snack should have easily digestible carbs. A banana is perfect. Alternatively, try oats or a slice of whole-grain bread with peanut butter. Avoid high-fat meals right before training as they digest slowly.":x.includes("post-workout")||x.includes("after gym")||x.includes("after workout")?"Post-workout, your body needs protein and some carbs to recover. A protein shake with a fruit, or a meal with chicken/paneer and rice/sweet potato is ideal. Try to eat within 1-2 hours after training.":x.includes("muscle")?"Building muscle requires consistent resistance training and a slight calorie surplus. Focus on compound movements like squats, pushups, and deadlifts. Don't forget recovery—muscles grow while you sleep, not while you train!":x.includes("cardio")?"Cardio is vital for heart health. For fat loss, Zone 2 cardio (where you can still talk while running/walking) is great. For endurance, try HIIT (High-Intensity Interval Training). Aim for at least 150 minutes of moderate activity per week.":x.includes("bmi")?"BMI (Body Mass Index) helps categorize weight. A healthy range is 18.5 - 24.9. However, it doesn't measure body fat percentage, so muscular people might show as 'overweight' despite being fit. Check your waist-to-height ratio for more accuracy.":x.includes("diet")||x.includes("food")?"A healthy diet is 80% whole foods. Focus on 'eating the rainbow' (variety of veg), adequate protein, and healthy fats. In Kerala, try to balance parboiled rice with more fish, pulses, and leafy greens while reducing fried snacks.":x.includes("hemoglobin")||x.includes("blood")?"Normal hemoglobin levels are 12-16 g/dL. Low levels cause fatigue during workouts. Boost it with iron-rich foods like spinach, beetroot, pomegranate, and red meat. Always take Vitamin C (like lemon) with iron for better absorption.":x.includes("sugar")||x.includes("glucose")?"To manage blood sugar, focus on complex carbs (brown rice, oats) instead of simple carbs (white sugar, maida). Fiber slows down sugar absorption. Regular walking after meals significantly helps sensitive insulin levels.":x.includes("weight")||x.includes("fat")?"Fat loss happens when you are in a calorie deficit (burning more than you eat). Avoid 'crash diets'. Instead, focus on high-protein, high-fiber intake and consistent movement to keep your metabolism high.":x.includes("sleep")||x.includes("rest")?"Sleep is the most underrated fitness tool. Most recovery and muscle growth happen during deep sleep. Aim for 7-9 hours of quality rest per night for optimal hormones and performance.":"That's a valid health query. Generally, focusing on whole foods, 7-8 hours of sleep, and 30 minutes of daily movement will solve 90% of health issues. Consult a professional for specific clinic advice!":"I apologize, but I'm specialized in Health, Blood Reports, Nutrition, and Fitness. For other topics, I might not have the best info. Ask me about your protein intake or blood levels! 🏥"},y=f=>{if(f.preventDefault(),!r.trim())return;const x={id:Date.now(),text:r,sender:"user"};n(k=>[...k,x]),o(""),i(!0),setTimeout(()=>{const k={id:Date.now()+1,text:d(x.text),sender:"bot"};n(w=>[...w,k]),i(!1)},1200)},h=f=>{const x={id:Date.now(),text:f.q,sender:"user"};n(k=>[...k,x]),i(!0),setTimeout(()=>{const k={id:Date.now()+1,text:f.a,sender:"bot"};n(w=>[...w,k]),i(!1)},1200)};return a.jsxs("div",{className:"chat-container fade-in",children:[a.jsxs("div",{className:"header-row",children:[a.jsx("button",{onClick:e,className:"back-btn",children:a.jsx(Nn,{size:24})}),a.jsx("h2",{children:"Health Assistant"})]}),a.jsxs("div",{className:"chat-window",children:[t.map(f=>a.jsxs("div",{className:`message-row ${f.sender}`,children:[f.sender==="bot"&&a.jsx("div",{className:"avatar bot",children:a.jsx(us,{size:16})}),a.jsx("div",{className:"message-bubble",children:f.text}),f.sender==="user"&&a.jsx("div",{className:"avatar user",children:a.jsx(bp,{size:16})})]},f.id)),l&&a.jsxs("div",{className:"message-row bot",children:[a.jsx("div",{className:"avatar bot",children:a.jsx(us,{size:16})}),a.jsxs("div",{className:"message-bubble typing",children:[a.jsx("span",{children:"."}),a.jsx("span",{children:"."}),a.jsx("span",{children:"."})]})]}),a.jsx("div",{ref:s})]}),a.jsxs("div",{className:"input-section",children:[a.jsx("div",{className:"chips-row",children:Bh.map((f,x)=>a.jsx("button",{className:"chip",onClick:()=>h(f),disabled:l,children:f.q},x))}),a.jsxs("form",{onSubmit:y,className:"input-form",children:[a.jsx("input",{type:"text",value:r,onChange:f=>o(f.target.value),placeholder:"Ask about health...",className:"chat-input"}),a.jsx("button",{type:"submit",className:"send-btn",children:a.jsx(Cp,{size:20})})]})]}),a.jsx("style",{children:`
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
      `})]})},Wh=({message:e,onClose:t})=>(F.useEffect(()=>{const n=setTimeout(()=>{t()},5e3);return()=>clearTimeout(n)},[t]),a.jsxs("div",{className:"toast-notification",children:[a.jsx("div",{className:"icon-bg",children:a.jsx(vp,{size:20})}),a.jsxs("div",{className:"content",children:[a.jsx("h4",{children:"Reminder"}),a.jsx("p",{children:e})]}),a.jsx("button",{onClick:t,className:"close-btn",children:"×"}),a.jsx("style",{children:`
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
       `})]}));function Vh(){const[e,t]=F.useState("login"),[n,r]=F.useState(null),[o,l]=F.useState(null),[i,s]=F.useState(null);_s.useEffect(()=>{const f=localStorage.getItem("user_profile");f&&l(JSON.parse(f));const x=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],k=setInterval(()=>{const w=x[Math.floor(Math.random()*x.length)];s(w)},12e4);return()=>clearInterval(k)},[]);const u=f=>{r(f),localStorage.getItem("user_profile")?(l(JSON.parse(localStorage.getItem("user_profile"))),t("dashboard")):t("profile_setup")},d=f=>{l(f),localStorage.setItem("user_profile",JSON.stringify(f)),t("dashboard")},y=f=>{t(f)},h=()=>{localStorage.removeItem("user_profile"),r(null),l(null),t("login")};return a.jsxs("div",{className:"app-container",children:[i&&a.jsx(Wh,{message:i,onClose:()=>s(null)}),e==="login"&&a.jsx(dp,{onLogin:u}),e==="profile_setup"&&a.jsx(fp,{onComplete:d}),e==="dashboard"&&a.jsx(Rp,{userName:o==null?void 0:o.name,onNavigate:y,onLogout:h}),e==="bmi"&&a.jsx(Fp,{userProfile:o,onBack:()=>t("dashboard")}),e==="blood"&&a.jsx(Ih,{onBack:()=>t("dashboard")}),e==="fitness"&&a.jsx(Oh,{userProfile:o,onBack:()=>t("dashboard")}),e==="homeworkout"&&a.jsx(Ah,{onBack:()=>t("dashboard")}),e==="weightprogress"&&a.jsx(Uh,{userProfile:o,onBack:()=>t("dashboard")}),e==="chat"&&a.jsx(Hh,{onBack:()=>t("dashboard")})]})}ul.createRoot(document.getElementById("root")).render(a.jsx(_s.StrictMode,{children:a.jsx(Vh,{})}));
