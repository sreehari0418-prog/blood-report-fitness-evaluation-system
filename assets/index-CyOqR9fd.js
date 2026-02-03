(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Av(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cv={exports:{}},vc={},Rv={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),cT=Symbol.for("react.portal"),uT=Symbol.for("react.fragment"),hT=Symbol.for("react.strict_mode"),dT=Symbol.for("react.profiler"),fT=Symbol.for("react.provider"),pT=Symbol.for("react.context"),mT=Symbol.for("react.forward_ref"),gT=Symbol.for("react.suspense"),yT=Symbol.for("react.memo"),vT=Symbol.for("react.lazy"),wm=Symbol.iterator;function _T(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nv=Object.assign,Dv={};function ms(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||Pv}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lv(){}Lv.prototype=ms.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||Pv}var Rd=Cd.prototype=new Lv;Rd.constructor=Cd;Nv(Rd,ms.prototype);Rd.isPureReactComponent=!0;var Em=Array.isArray,Ov=Object.prototype.hasOwnProperty,Pd={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ov.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:na,type:t,key:s,ref:o,props:i,_owner:Pd.current}}function wT(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function ET(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tm=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ET(""+t.key):e.toString(36)}function sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case cT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eu(o,0):r,Em(i)?(n="",t!=null&&(n=t.replace(Tm,"$&/")+"/"),sl(i,e,n,"",function(u){return u})):i!=null&&(Nd(i)&&(i=wT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Em(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+Eu(s,l);o+=sl(s,e,n,c,i)}else if(c=_T(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+Eu(s,l++),o+=sl(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},ol={transition:null},xT={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Pd};function jv(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ms;ce.Fragment=uT;ce.Profiler=dT;ce.PureComponent=Cd;ce.StrictMode=hT;ce.Suspense=gT;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xT;ce.act=jv;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Ov.call(e,c)&&!Vv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:na,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:pT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fT,_context:t},t.Consumer=t};ce.createElement=Mv;ce.createFactory=function(t){var e=Mv.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:mT,render:t}};ce.isValidElement=Nd;ce.lazy=function(t){return{$$typeof:vT,_payload:{_status:-1,_result:t},_init:TT}};ce.memo=function(t,e){return{$$typeof:yT,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};ce.unstable_act=jv;ce.useCallback=function(t,e){return gt.current.useCallback(t,e)};ce.useContext=function(t){return gt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return gt.current.useEffect(t,e)};ce.useId=function(){return gt.current.useId()};ce.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return gt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ce.useRef=function(t){return gt.current.useRef(t)};ce.useState=function(t){return gt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return gt.current.useTransition()};ce.version="18.3.1";Rv.exports=ce;var X=Rv.exports;const Fv=Av(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT=X,kT=Symbol.for("react.element"),ST=Symbol.for("react.fragment"),bT=Object.prototype.hasOwnProperty,AT=IT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CT={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bT.call(e,r)&&!CT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kT,type:t,key:s,ref:o,props:i,_owner:AT.current}}vc.Fragment=ST;vc.jsx=Uv;vc.jsxs=Uv;Cv.exports=vc;var d=Cv.exports,ch={},zv={exports:{}},Nt={},Bv={exports:{}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,O){var N=W.length;W.push(O);e:for(;0<N;){var M=N-1>>>1,q=W[M];if(0<i(q,O))W[M]=O,W[N]=q,N=M;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var O=W[0],N=W.pop();if(N!==O){W[0]=N;e:for(var M=0,q=W.length,U=q>>>1;M<U;){var $=2*(M+1)-1,K=W[$],ne=$+1,ee=W[ne];if(0>i(K,N))ne<q&&0>i(ee,K)?(W[M]=ee,W[ne]=N,M=ne):(W[M]=K,W[$]=N,M=$);else if(ne<q&&0>i(ee,N))W[M]=ee,W[ne]=N,M=ne;else break e}}return O}function i(W,O){var N=W.sortIndex-O.sortIndex;return N!==0?N:W.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],p=1,m=null,g=3,S=!1,C=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(W){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=W)r(u),O.sortIndex=O.expirationTime,e(c,O);else break;O=n(u)}}function L(W){if(R=!1,b(W),!C)if(n(c)!==null)C=!0,Ne(F);else{var O=n(u);O!==null&&_e(L,O.startTime-W)}}function F(W,O){C=!1,R&&(R=!1,T(y),y=-1),S=!0;var N=g;try{for(b(O),m=n(c);m!==null&&(!(m.expirationTime>O)||W&&!w());){var M=m.callback;if(typeof M=="function"){m.callback=null,g=m.priorityLevel;var q=M(m.expirationTime<=O);O=t.unstable_now(),typeof q=="function"?m.callback=q:m===n(c)&&r(c),b(O)}else r(c);m=n(c)}if(m!==null)var U=!0;else{var $=n(u);$!==null&&_e(L,$.startTime-O),U=!1}return U}finally{m=null,g=N,S=!1}}var B=!1,E=null,y=-1,I=5,k=-1;function w(){return!(t.unstable_now()-k<I)}function A(){if(E!==null){var W=t.unstable_now();k=W;var O=!0;try{O=E(!0,W)}finally{O?x():(B=!1,E=null)}}else B=!1}var x;if(typeof _=="function")x=function(){_(A)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,se=te.port2;te.port1.onmessage=A,x=function(){se.postMessage(null)}}else x=function(){P(A,0)};function Ne(W){E=W,B||(B=!0,x())}function _e(W,O){y=P(function(){W(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Ne(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(W){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var N=g;g=O;try{return W()}finally{g=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,O){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var N=g;g=W;try{return O()}finally{g=N}},t.unstable_scheduleCallback=function(W,O,N){var M=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?M+N:M):N=M,W){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=N+q,W={id:p++,callback:O,priorityLevel:W,startTime:N,expirationTime:q,sortIndex:-1},N>M?(W.sortIndex=N,e(u,W),n(c)===null&&W===n(u)&&(R?(T(y),y=-1):R=!0,_e(L,N-M))):(W.sortIndex=q,e(c,W),C||S||(C=!0,Ne(F))),W},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(W){var O=g;return function(){var N=g;g=O;try{return W.apply(this,arguments)}finally{g=N}}}})($v);Bv.exports=$v;var RT=Bv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT=X,Pt=RT;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hv=new Set,Ao={};function di(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Ao[t]=e,t=0;t<e.length;t++)Hv.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,NT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},Im={};function DT(t){return uh.call(Im,t)?!0:uh.call(xm,t)?!1:NT.test(t)?Im[t]=!0:(xm[t]=!0,!1)}function LT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OT(t,e,n,r){if(e===null||typeof e>"u"||LT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Ld);tt[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Ld);tt[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Ld);tt[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OT(e,n,i,r)&&(n=null),r||i===null?DT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=PT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),hh=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),dh=Symbol.for("react.suspense"),fh=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Gv=Symbol.for("react.offscreen"),km=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Tu;function Xs(t){if(Tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tu=e&&e[1]||""}return`
`+Tu+t}var xu=!1;function Iu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function VT(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Ci:return"Portal";case hh:return"Profiler";case Vd:return"StrictMode";case dh:return"Suspense";case fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qv:return(t.displayName||"Context")+".Consumer";case Wv:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:ph(t.type)||"Memo";case Xn:e=t._payload,t=t._init;try{return ph(t(e))}catch{}}return null}function MT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ph(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jT(t){var e=Kv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=jT(t))}function Qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mh(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yv(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function gh(t,e){Yv(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&yh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yh(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function Bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Zs(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function Jv(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,Zv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FT=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){FT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function e_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function t_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UT=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(UT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xh=null,$i=null,Hi=null;function Rm(t){if(t=sa(t)){if(typeof xh!="function")throw Error(H(280));var e=t.stateNode;e&&(e=xc(e),xh(t.stateNode,t.type,e))}}function n_(t){$i?Hi?Hi.push(t):Hi=[t]:$i=t}function r_(){if($i){var t=$i,e=Hi;if(Hi=$i=null,Rm(t),e)for(t=0;t<e.length;t++)Rm(e[t])}}function i_(t,e){return t(e)}function s_(){}var ku=!1;function o_(t,e,n){if(ku)return t(e,n);ku=!0;try{return i_(t,e,n)}finally{ku=!1,($i!==null||Hi!==null)&&(s_(),r_())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Ih=!1;if(Ln)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Ih=!1}function zT(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var ho=!1,Al=null,Cl=!1,kh=null,BT={onError:function(t){ho=!0,Al=t}};function $T(t,e,n,r,i,s,o,l,c){ho=!1,Al=null,zT.apply(BT,arguments)}function HT(t,e,n,r,i,s,o,l,c){if($T.apply(this,arguments),ho){if(ho){var u=Al;ho=!1,Al=null}else throw Error(H(198));Cl||(Cl=!0,kh=u)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pm(t){if(fi(t)!==t)throw Error(H(188))}function WT(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pm(i),t;if(s===r)return Pm(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function l_(t){return t=WT(t),t!==null?c_(t):null}function c_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c_(t);if(e!==null)return e;t=t.sibling}return null}var u_=Pt.unstable_scheduleCallback,Nm=Pt.unstable_cancelCallback,qT=Pt.unstable_shouldYield,GT=Pt.unstable_requestPaint,Ve=Pt.unstable_now,KT=Pt.unstable_getCurrentPriorityLevel,Ud=Pt.unstable_ImmediatePriority,h_=Pt.unstable_UserBlockingPriority,Rl=Pt.unstable_NormalPriority,QT=Pt.unstable_LowPriority,d_=Pt.unstable_IdlePriority,_c=null,dn=null;function YT(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:ZT,JT=Math.log,XT=Math.LN2;function ZT(t){return t>>>=0,t===0?32:31-(JT(t)/XT|0)|0}var Oa=64,Va=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=eo(l):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function ex(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=ex(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f_(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function p_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m_,Bd,g_,y_,v_,bh=!1,Ma=[],cr=null,ur=null,hr=null,Po=new Map,No=new Map,er=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dm(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sa(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ix(t,e,n,r,i){switch(e){case"focusin":return cr=Hs(cr,t,e,n,r,i),!0;case"dragenter":return ur=Hs(ur,t,e,n,r,i),!0;case"mouseover":return hr=Hs(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Po.set(s,Hs(Po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,Hs(No.get(s)||null,t,e,n,r,i)),!0}return!1}function __(t){var e=Gr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=a_(n),e!==null){t.blockedOn=e,v_(t.priority,function(){g_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Th=r,n.target.dispatchEvent(r),Th=null}else return e=sa(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lm(t,e,n){al(t)&&n.delete(e)}function sx(){bh=!1,cr!==null&&al(cr)&&(cr=null),ur!==null&&al(ur)&&(ur=null),hr!==null&&al(hr)&&(hr=null),Po.forEach(Lm),No.forEach(Lm)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,sx)))}function Do(t){function e(i){return Ws(i,t)}if(0<Ma.length){Ws(Ma[0],t);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Ws(cr,t),ur!==null&&Ws(ur,t),hr!==null&&Ws(hr,t),Po.forEach(e),No.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)__(n),n.blockedOn===null&&er.shift()}var Wi=$n.ReactCurrentBatchConfig,Nl=!0;function ox(t,e,n,r){var i=ve,s=Wi.transition;Wi.transition=null;try{ve=1,$d(t,e,n,r)}finally{ve=i,Wi.transition=s}}function ax(t,e,n,r){var i=ve,s=Wi.transition;Wi.transition=null;try{ve=4,$d(t,e,n,r)}finally{ve=i,Wi.transition=s}}function $d(t,e,n,r){if(Nl){var i=Ah(t,e,n,r);if(i===null)Vu(t,e,r,Dl,n),Dm(t,r);else if(ix(i,t,e,n,r))r.stopPropagation();else if(Dm(t,r),e&4&&-1<rx.indexOf(t)){for(;i!==null;){var s=sa(i);if(s!==null&&m_(s),s=Ah(t,e,n,r),s===null&&Vu(t,e,r,Dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vu(t,e,r,null,n)}}var Dl=null;function Ah(t,e,n,r){if(Dl=null,t=Fd(r),t=Gr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function w_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KT()){case Ud:return 1;case h_:return 4;case Rl:case QT:return 16;case d_:return 536870912;default:return 16}default:return 16}}var or=null,Hd=null,ll=null;function E_(){if(ll)return ll;var t,e=Hd,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ll=i.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function Om(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ja:Om,this.isPropagationStopped=Om,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Dt(gs),ia=Re({},gs,{view:0,detail:0}),lx=Dt(ia),bu,Au,qs,wc=Re({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(bu=t.screenX-qs.screenX,Au=t.screenY-qs.screenY):Au=bu=0,qs=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Vm=Dt(wc),cx=Re({},wc,{dataTransfer:0}),ux=Dt(cx),hx=Re({},ia,{relatedTarget:0}),Cu=Dt(hx),dx=Re({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Dt(dx),px=Re({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mx=Dt(px),gx=Re({},gs,{data:0}),Mm=Dt(gx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_x[t])?!!e[t]:!1}function qd(){return wx}var Ex=Re({},ia,{key:function(t){if(t.key){var e=yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=Dt(Ex),xx=Re({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=Dt(xx),Ix=Re({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),kx=Dt(Ix),Sx=Re({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=Dt(Sx),Ax=Re({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=Dt(Ax),Rx=[9,13,27,32],Gd=Ln&&"CompositionEvent"in window,fo=null;Ln&&"documentMode"in document&&(fo=document.documentMode);var Px=Ln&&"TextEvent"in window&&!fo,T_=Ln&&(!Gd||fo&&8<fo&&11>=fo),Fm=" ",Um=!1;function x_(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function Nx(t,e){switch(t){case"compositionend":return I_(e);case"keypress":return e.which!==32?null:(Um=!0,Fm);case"textInput":return t=e.data,t===Fm&&Um?null:t;default:return null}}function Dx(t,e){if(Pi)return t==="compositionend"||!Gd&&x_(t,e)?(t=E_(),ll=Hd=or=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T_&&e.locale!=="ko"?null:e.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lx[t.type]:e==="textarea"}function k_(t,e,n,r){n_(r),e=Ll(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Lo=null;function Ox(t){V_(t,0)}function Ec(t){var e=Li(t);if(Qv(e))return t}function Vx(t,e){if(t==="change")return e}var S_=!1;if(Ln){var Ru;if(Ln){var Pu="oninput"in document;if(!Pu){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),Pu=typeof Bm.oninput=="function"}Ru=Pu}else Ru=!1;S_=Ru&&(!document.documentMode||9<document.documentMode)}function $m(){po&&(po.detachEvent("onpropertychange",b_),Lo=po=null)}function b_(t){if(t.propertyName==="value"&&Ec(Lo)){var e=[];k_(e,Lo,t,Fd(t)),o_(Ox,e)}}function Mx(t,e,n){t==="focusin"?($m(),po=e,Lo=n,po.attachEvent("onpropertychange",b_)):t==="focusout"&&$m()}function jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(Lo)}function Fx(t,e){if(t==="click")return Ec(e)}function Ux(t,e){if(t==="input"||t==="change")return Ec(e)}function zx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:zx;function Oo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uh.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,e){var n=Hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hm(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Bx(t){var e=C_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&Kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wm(n,s);var o=Wm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=Ln&&"documentMode"in document&&11>=document.documentMode,Ni=null,Ch=null,mo=null,Rh=!1;function qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||Ni==null||Ni!==bl(r)||(r=Ni,"selectionStart"in r&&Kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Oo(mo,r)||(mo=r,r=Ll(Ch,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Nu={},R_={};Ln&&(R_=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Tc(t){if(Nu[t])return Nu[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R_)return Nu[t]=e[n];return t}var P_=Tc("animationend"),N_=Tc("animationiteration"),D_=Tc("animationstart"),L_=Tc("transitionend"),O_=new Map,Gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){O_.set(t,e),di(e,[t])}for(var Du=0;Du<Gm.length;Du++){var Lu=Gm[Du],Hx=Lu.toLowerCase(),Wx=Lu[0].toUpperCase()+Lu.slice(1);Rr(Hx,"on"+Wx)}Rr(P_,"onAnimationEnd");Rr(N_,"onAnimationIteration");Rr(D_,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(L_,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Km(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HT(r,e,void 0,t),t.currentTarget=null}function V_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Km(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Km(i,l,u),s=c}}}if(Cl)throw t=kh,Cl=!1,kh=null,t}function Ie(t,e){var n=e[Oh];n===void 0&&(n=e[Oh]=new Set);var r=t+"__bubble";n.has(r)||(M_(e,t,2,!1),n.add(r))}function Ou(t,e,n){var r=0;e&&(r|=4),M_(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Ua]){t[Ua]=!0,Hv.forEach(function(n){n!=="selectionchange"&&(qx.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Ou("selectionchange",!1,e))}}function M_(t,e,n,r){switch(w_(e)){case 1:var i=ox;break;case 4:i=ax;break;default:i=$d}n=i.bind(null,e,n,t),i=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}o_(function(){var u=s,p=Fd(n),m=[];e:{var g=O_.get(t);if(g!==void 0){var S=Wd,C=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":S=Tx;break;case"focusin":C="focus",S=Cu;break;case"focusout":C="blur",S=Cu;break;case"beforeblur":case"afterblur":S=Cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=kx;break;case P_:case N_:case D_:S=fx;break;case L_:S=bx;break;case"scroll":S=lx;break;case"wheel":S=Cx;break;case"copy":case"cut":case"paste":S=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=jm}var R=(e&4)!==0,P=!R&&t==="scroll",T=R?g!==null?g+"Capture":null:g;R=[];for(var _=u,b;_!==null;){b=_;var L=b.stateNode;if(b.tag===5&&L!==null&&(b=L,T!==null&&(L=Ro(_,T),L!=null&&R.push(Mo(_,L,b)))),P)break;_=_.return}0<R.length&&(g=new S(g,C,null,n,p),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Th&&(C=n.relatedTarget||n.fromElement)&&(Gr(C)||C[On]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=u,C=C?Gr(C):null,C!==null&&(P=fi(C),C!==P||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=u),S!==C)){if(R=Vm,L="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=jm,L="onPointerLeave",T="onPointerEnter",_="pointer"),P=S==null?g:Li(S),b=C==null?g:Li(C),g=new R(L,_+"leave",S,n,p),g.target=P,g.relatedTarget=b,L=null,Gr(p)===u&&(R=new R(T,_+"enter",C,n,p),R.target=b,R.relatedTarget=P,L=R),P=L,S&&C)t:{for(R=S,T=C,_=0,b=R;b;b=xi(b))_++;for(b=0,L=T;L;L=xi(L))b++;for(;0<_-b;)R=xi(R),_--;for(;0<b-_;)T=xi(T),b--;for(;_--;){if(R===T||T!==null&&R===T.alternate)break t;R=xi(R),T=xi(T)}R=null}else R=null;S!==null&&Qm(m,g,S,R,!1),C!==null&&P!==null&&Qm(m,P,C,R,!0)}}e:{if(g=u?Li(u):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var F=Vx;else if(zm(g))if(S_)F=Ux;else{F=jx;var B=Mx}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=Fx);if(F&&(F=F(t,u))){k_(m,F,n,p);break e}B&&B(t,g,u),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&yh(g,"number",g.value)}switch(B=u?Li(u):window,t){case"focusin":(zm(B)||B.contentEditable==="true")&&(Ni=B,Ch=u,mo=null);break;case"focusout":mo=Ch=Ni=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,qm(m,n,p);break;case"selectionchange":if($x)break;case"keydown":case"keyup":qm(m,n,p)}var E;if(Gd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Pi?x_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(T_&&n.locale!=="ko"&&(Pi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Pi&&(E=E_()):(or=p,Hd="value"in or?or.value:or.textContent,Pi=!0)),B=Ll(u,y),0<B.length&&(y=new Mm(y,t,null,n,p),m.push({event:y,listeners:B}),E?y.data=E:(E=I_(n),E!==null&&(y.data=E)))),(E=Px?Nx(t,n):Dx(t,n))&&(u=Ll(u,"onBeforeInput"),0<u.length&&(p=new Mm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=E))}V_(m,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Mo(t,s,i)),s=Ro(t,e),s!=null&&r.push(Mo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ro(n,s),c!=null&&o.unshift(Mo(n,c,l))):i||(c=Ro(n,s),c!=null&&o.push(Mo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Kx,"")}function za(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(H(425))}function Ol(){}var Ph=null,Nh=null;function Dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lh=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(Jx)}:Lh;function Jx(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Do(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Do(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),hn="__reactFiber$"+ys,jo="__reactProps$"+ys,On="__reactContainer$"+ys,Oh="__reactEvents$"+ys,Xx="__reactListeners$"+ys,Zx="__reactHandles$"+ys;function Gr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xm(t);t!==null;){if(n=t[hn])return n;t=Xm(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[hn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function xc(t){return t[jo]||null}var Vh=[],Oi=-1;function Pr(t){return{current:t}}function Se(t){0>Oi||(t.current=Vh[Oi],Vh[Oi]=null,Oi--)}function Te(t,e){Oi++,Vh[Oi]=t.current,t.current=e}var Tr={},ut=Pr(Tr),Tt=Pr(!1),ei=Tr;function ts(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Vl(){Se(Tt),Se(ut)}function Zm(t,e,n){if(ut.current!==Tr)throw Error(H(168));Te(ut,e),Te(Tt,n)}function j_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,MT(t)||"Unknown",i));return Re({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ei=ut.current,Te(ut,t),Te(Tt,Tt.current),!0}function eg(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=j_(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,Se(Tt),Se(ut),Te(ut,t)):Se(Tt),Te(Tt,n)}var Sn=null,Ic=!1,ju=!1;function F_(t){Sn===null?Sn=[t]:Sn.push(t)}function eI(t){Ic=!0,F_(t)}function Nr(){if(!ju&&Sn!==null){ju=!0;var t=0,e=ve;try{var n=Sn;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Ic=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),u_(Ud,Nr),i}finally{ve=e,ju=!1}}return null}var Vi=[],Mi=0,jl=null,Fl=0,Ot=[],Vt=0,ti=null,bn=1,An="";function Hr(t,e){Vi[Mi++]=Fl,Vi[Mi++]=jl,jl=t,Fl=e}function U_(t,e,n){Ot[Vt++]=bn,Ot[Vt++]=An,Ot[Vt++]=ti,ti=t;var r=bn;t=An;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-Jt(e)+i|n<<i|r,An=s+t}else bn=1<<s|n<<i|r,An=t}function Qd(t){t.return!==null&&(Hr(t,1),U_(t,1,0))}function Yd(t){for(;t===jl;)jl=Vi[--Mi],Vi[Mi]=null,Fl=Vi[--Mi],Vi[Mi]=null;for(;t===ti;)ti=Ot[--Vt],Ot[Vt]=null,An=Ot[--Vt],Ot[Vt]=null,bn=Ot[--Vt],Ot[Vt]=null}var Rt=null,At=null,be=!1,Kt=null;function z_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,At=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:bn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,At=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(be){var e=At;if(e){var n=e;if(!tg(t,e)){if(Mh(t))throw Error(H(418));e=dr(n.nextSibling);var r=Rt;e&&tg(t,e)?z_(r,n):(t.flags=t.flags&-4097|2,be=!1,Rt=t)}}else{if(Mh(t))throw Error(H(418));t.flags=t.flags&-4097|2,be=!1,Rt=t}}}function ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Ba(t){if(t!==Rt)return!1;if(!be)return ng(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dh(t.type,t.memoizedProps)),e&&(e=At)){if(Mh(t))throw B_(),Error(H(418));for(;e;)z_(t,e),e=dr(e.nextSibling)}if(ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Rt?dr(t.stateNode.nextSibling):null;return!0}function B_(){for(var t=At;t;)t=dr(t.nextSibling)}function ns(){At=Rt=null,be=!1}function Jd(t){Kt===null?Kt=[t]:Kt.push(t)}var tI=$n.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rg(t){var e=t._init;return e(t._payload)}function $_(t){function e(T,_){if(t){var b=T.deletions;b===null?(T.deletions=[_],T.flags|=16):b.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=gr(T,_),T.index=0,T.sibling=null,T}function s(T,_,b){return T.index=b,t?(b=T.alternate,b!==null?(b=b.index,b<_?(T.flags|=2,_):b):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,b,L){return _===null||_.tag!==6?(_=Wu(b,T.mode,L),_.return=T,_):(_=i(_,b),_.return=T,_)}function c(T,_,b,L){var F=b.type;return F===Ri?p(T,_,b.props.children,L,b.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xn&&rg(F)===_.type)?(L=i(_,b.props),L.ref=Gs(T,_,b),L.return=T,L):(L=gl(b.type,b.key,b.props,null,T.mode,L),L.ref=Gs(T,_,b),L.return=T,L)}function u(T,_,b,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==b.containerInfo||_.stateNode.implementation!==b.implementation?(_=qu(b,T.mode,L),_.return=T,_):(_=i(_,b.children||[]),_.return=T,_)}function p(T,_,b,L,F){return _===null||_.tag!==7?(_=Xr(b,T.mode,L,F),_.return=T,_):(_=i(_,b),_.return=T,_)}function m(T,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Wu(""+_,T.mode,b),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return b=gl(_.type,_.key,_.props,null,T.mode,b),b.ref=Gs(T,null,_),b.return=T,b;case Ci:return _=qu(_,T.mode,b),_.return=T,_;case Xn:var L=_._init;return m(T,L(_._payload),b)}if(Zs(_)||Bs(_))return _=Xr(_,T.mode,b,null),_.return=T,_;$a(T,_)}return null}function g(T,_,b,L){var F=_!==null?_.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return F!==null?null:l(T,_,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:return b.key===F?c(T,_,b,L):null;case Ci:return b.key===F?u(T,_,b,L):null;case Xn:return F=b._init,g(T,_,F(b._payload),L)}if(Zs(b)||Bs(b))return F!==null?null:p(T,_,b,L,null);$a(T,b)}return null}function S(T,_,b,L,F){if(typeof L=="string"&&L!==""||typeof L=="number")return T=T.get(b)||null,l(_,T,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Na:return T=T.get(L.key===null?b:L.key)||null,c(_,T,L,F);case Ci:return T=T.get(L.key===null?b:L.key)||null,u(_,T,L,F);case Xn:var B=L._init;return S(T,_,b,B(L._payload),F)}if(Zs(L)||Bs(L))return T=T.get(b)||null,p(_,T,L,F,null);$a(_,L)}return null}function C(T,_,b,L){for(var F=null,B=null,E=_,y=_=0,I=null;E!==null&&y<b.length;y++){E.index>y?(I=E,E=null):I=E.sibling;var k=g(T,E,b[y],L);if(k===null){E===null&&(E=I);break}t&&E&&k.alternate===null&&e(T,E),_=s(k,_,y),B===null?F=k:B.sibling=k,B=k,E=I}if(y===b.length)return n(T,E),be&&Hr(T,y),F;if(E===null){for(;y<b.length;y++)E=m(T,b[y],L),E!==null&&(_=s(E,_,y),B===null?F=E:B.sibling=E,B=E);return be&&Hr(T,y),F}for(E=r(T,E);y<b.length;y++)I=S(E,T,y,b[y],L),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?y:I.key),_=s(I,_,y),B===null?F=I:B.sibling=I,B=I);return t&&E.forEach(function(w){return e(T,w)}),be&&Hr(T,y),F}function R(T,_,b,L){var F=Bs(b);if(typeof F!="function")throw Error(H(150));if(b=F.call(b),b==null)throw Error(H(151));for(var B=F=null,E=_,y=_=0,I=null,k=b.next();E!==null&&!k.done;y++,k=b.next()){E.index>y?(I=E,E=null):I=E.sibling;var w=g(T,E,k.value,L);if(w===null){E===null&&(E=I);break}t&&E&&w.alternate===null&&e(T,E),_=s(w,_,y),B===null?F=w:B.sibling=w,B=w,E=I}if(k.done)return n(T,E),be&&Hr(T,y),F;if(E===null){for(;!k.done;y++,k=b.next())k=m(T,k.value,L),k!==null&&(_=s(k,_,y),B===null?F=k:B.sibling=k,B=k);return be&&Hr(T,y),F}for(E=r(T,E);!k.done;y++,k=b.next())k=S(E,T,y,k.value,L),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?y:k.key),_=s(k,_,y),B===null?F=k:B.sibling=k,B=k);return t&&E.forEach(function(A){return e(T,A)}),be&&Hr(T,y),F}function P(T,_,b,L){if(typeof b=="object"&&b!==null&&b.type===Ri&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:e:{for(var F=b.key,B=_;B!==null;){if(B.key===F){if(F=b.type,F===Ri){if(B.tag===7){n(T,B.sibling),_=i(B,b.props.children),_.return=T,T=_;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xn&&rg(F)===B.type){n(T,B.sibling),_=i(B,b.props),_.ref=Gs(T,B,b),_.return=T,T=_;break e}n(T,B);break}else e(T,B);B=B.sibling}b.type===Ri?(_=Xr(b.props.children,T.mode,L,b.key),_.return=T,T=_):(L=gl(b.type,b.key,b.props,null,T.mode,L),L.ref=Gs(T,_,b),L.return=T,T=L)}return o(T);case Ci:e:{for(B=b.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===b.containerInfo&&_.stateNode.implementation===b.implementation){n(T,_.sibling),_=i(_,b.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=qu(b,T.mode,L),_.return=T,T=_}return o(T);case Xn:return B=b._init,P(T,_,B(b._payload),L)}if(Zs(b))return C(T,_,b,L);if(Bs(b))return R(T,_,b,L);$a(T,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,b),_.return=T,T=_):(n(T,_),_=Wu(b,T.mode,L),_.return=T,T=_),o(T)):n(T,_)}return P}var rs=$_(!0),H_=$_(!1),Ul=Pr(null),zl=null,ji=null,Xd=null;function Zd(){Xd=ji=zl=null}function ef(t){var e=Ul.current;Se(Ul),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){zl=t,Xd=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(zl===null)throw Error(H(308));ji=t,zl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Kr=null;function tf(t){Kr===null?Kr=[t]:Kr.push(t)}function W_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vn(t,n)}return i=r.interleaved,i===null?(e.next=e,tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vn(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}function ig(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,p=u=c=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,R=l;switch(g=e,S=n,R.tag){case 1:if(C=R.payload,typeof C=="function"){m=C.call(S,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=R.payload,g=typeof C=="function"?C.call(S,m,g):C,g==null)break e;m=Re({},m,g);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=S,c=m):p=p.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=m}}function sg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var oa={},fn=Pr(oa),Fo=Pr(oa),Uo=Pr(oa);function Qr(t){if(t===oa)throw Error(H(174));return t}function rf(t,e){switch(Te(Uo,e),Te(Fo,t),Te(fn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}Se(fn),Te(fn,e)}function is(){Se(fn),Se(Fo),Se(Uo)}function G_(t){Qr(Uo.current);var e=Qr(fn.current),n=_h(e,t.type);e!==n&&(Te(Fo,t),Te(fn,n))}function sf(t){Fo.current===t&&(Se(fn),Se(Fo))}var Ae=Pr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function of(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var hl=$n.ReactCurrentDispatcher,Uu=$n.ReactCurrentBatchConfig,ni=0,Ce=null,$e=null,Qe=null,Hl=!1,go=!1,zo=0,nI=0;function it(){throw Error(H(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(ni=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?oI:aI,t=n(r,i),go){s=0;do{if(go=!1,zo=0,25<=s)throw Error(H(301));s+=1,Qe=$e=null,e.updateQueue=null,hl.current=lI,t=n(r,i)}while(go)}if(hl.current=Wl,e=$e!==null&&$e.next!==null,ni=0,Qe=$e=Ce=null,Hl=!1,e)throw Error(H(300));return t}function cf(){var t=zo!==0;return zo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ce.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function zt(){if($e===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Qe===null?Ce.memoizedState:Qe.next;if(e!==null)Qe=e,$e=t;else{if(t===null)throw Error(H(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Qe===null?Ce.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Bo(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=zt(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var p=u.lane;if((ni&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,Ce.lanes|=p,ri|=p}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,tn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=zt(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K_(){}function Q_(t,e){var n=Ce,r=zt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,uf(X_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,$o(9,J_.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(H(349));ni&30||Y_(n,e,i)}return i}function Y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J_(t,e,n,r){e.value=n,e.getSnapshot=r,Z_(e)&&ew(t)}function X_(t,e,n){return n(function(){Z_(e)&&ew(t)})}function Z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function ew(t){var e=Vn(t,1);e!==null&&Xt(e,t,1,-1)}function og(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=sI.bind(null,Ce,t),[e.memoizedState,t]}function $o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tw(){return zt().memoizedState}function dl(t,e,n,r){var i=cn();Ce.flags|=t,i.memoizedState=$o(1|e,n,void 0,r===void 0?null:r)}function kc(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&af(r,o.deps)){i.memoizedState=$o(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=$o(1|e,n,s,r)}function ag(t,e){return dl(8390656,8,t,e)}function uf(t,e){return kc(2048,8,t,e)}function nw(t,e){return kc(4,2,t,e)}function rw(t,e){return kc(4,4,t,e)}function iw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sw(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,iw.bind(null,e,t),n)}function hf(){}function ow(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lw(t,e,n){return ni&21?(tn(n,e)||(n=f_(),Ce.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function rI(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Uu.transition;Uu.transition={};try{t(!1),e()}finally{ve=n,Uu.transition=r}}function cw(){return zt().memoizedState}function iI(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uw(t))hw(e,n);else if(n=W_(t,e,n,r),n!==null){var i=mt();Xt(n,t,r,i),dw(n,e,r)}}function sI(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uw(t))hw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var c=e.interleaved;c===null?(i.next=i,tf(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=W_(t,e,i,r),n!==null&&(i=mt(),Xt(n,t,r,i),dw(n,e,r))}}function uw(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function hw(t,e){go=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}var Wl={readContext:Ut,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},oI={readContext:Ut,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dl(4194308,4,iw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return dl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iI.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:og,useDebugValue:hf,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=og(!1),e=t[0];return t=rI.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=cn();if(be){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),Ye===null)throw Error(H(349));ni&30||Y_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ag(X_.bind(null,r,s,t),[t]),r.flags|=2048,$o(9,J_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=Ye.identifierPrefix;if(be){var n=An,r=bn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aI={readContext:Ut,useCallback:ow,useContext:Ut,useEffect:uf,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:zu,useRef:tw,useState:function(){return zu(Bo)},useDebugValue:hf,useDeferredValue:function(t){var e=zt();return lw(e,$e.memoizedState,t)},useTransition:function(){var t=zu(Bo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:Q_,useId:cw,unstable_isNewReconciler:!1},lI={readContext:Ut,useCallback:ow,useContext:Ut,useEffect:uf,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:Bu,useRef:tw,useState:function(){return Bu(Bo)},useDebugValue:hf,useDeferredValue:function(t){var e=zt();return $e===null?e.memoizedState=t:lw(e,$e.memoizedState,t)},useTransition:function(){var t=Bu(Bo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:Q_,useId:cw,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=mr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Xt(e,t,i,r),ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=mr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Xt(e,t,i,r),ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=mr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(Xt(e,t,r,n),ul(e,t,r))}};function lg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function fw(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=xt(e)?ei:ut.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=xt(e)?ei:ut.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",r=e;do n+=VT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cI=typeof WeakMap=="function"?WeakMap:Map;function pw(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gl||(Gl=!0,Xh=r),Bh(t,e)},n}function mw(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bh(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ug(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xI.bind(null,t,e,n),e.then(t,t))}function hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var uI=$n.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?H_(e,null,n,r):rs(e,t.child,n,r)}function fg(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=lf(t,e,n,r,s,i),n=cf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(be&&n&&Qd(e),e.flags|=1,pt(t,e,r,i),e.child)}function pg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gw(t,e,s,r,i)):(t=gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function gw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return $h(t,e,n,r,i)}function yw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Ui,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Ui,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Ui,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Ui,St),St|=r;return pt(t,e,i,n),e.child}function vw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,r,i){var s=xt(n)?ei:ut.current;return s=ts(e,s),qi(e,i),n=lf(t,e,n,r,s,i),r=cf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(be&&r&&Qd(e),e.flags|=1,pt(t,e,n,i),e.child)}function mg(t,e,n,r,i){if(xt(n)){var s=!0;Ml(e)}else s=!1;if(qi(e,i),e.stateNode===null)fl(t,e),fw(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=xt(n)?ei:ut.current,u=ts(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&cg(e,o,r,u),Zn=!1;var g=e.memoizedState;o.state=g,Bl(e,r,o,i),c=e.memoizedState,l!==r||g!==c||Tt.current||Zn?(typeof p=="function"&&(Uh(e,n,p,r),c=e.memoizedState),(l=Zn||lg(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:qt(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=xt(n)?ei:ut.current,c=ts(e,c));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&cg(e,o,r,c),Zn=!1,g=e.memoizedState,o.state=g,Bl(e,r,o,i);var C=e.memoizedState;l!==m||g!==C||Tt.current||Zn?(typeof S=="function"&&(Uh(e,n,S,r),C=e.memoizedState),(u=Zn||lg(e,n,u,r,g,C,c)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Hh(t,e,n,r,s,i)}function Hh(t,e,n,r,i,s){vw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&eg(e,n,!1),Mn(t,e,s);r=e.stateNode,uI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&eg(e,n,!0),e.child}function _w(t){var e=t.stateNode;e.pendingContext?Zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(t,e.context,!1),rf(t,e.containerInfo)}function gg(t,e,n,r,i){return ns(),Jd(i),e.flags|=256,pt(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Ae,i&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cc(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qh(n),e.memoizedState=Wh,t):df(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=gr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function df(t,e){return e=Cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,r){return r!==null&&Jd(r),rs(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$u(Error(H(422))),Ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cc({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Wh,s);if(!(e.mode&1))return Ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=$u(s,r,void 0),Ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(t,i),Xt(r,t,i,-1))}return vf(),r=$u(Error(H(421))),Ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=II.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=dr(i.nextSibling),Rt=e,be=!0,Kt=null,t!==null&&(Ot[Vt++]=bn,Ot[Vt++]=An,Ot[Vt++]=ti,bn=t.id,An=t.overflow,ti=e),e=df(e,r.children),e.flags|=4096,e)}function yg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Hu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yg(t,n,e);else if(t.tag===19)yg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dI(t,e,n){switch(e.tag){case 3:_w(e),ns();break;case 5:G_(e);break;case 1:xt(e.type)&&Ml(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(Te(Ae,Ae.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);Te(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,yw(t,e,n)}return Mn(t,e,n)}var Tw,Gh,xw,Iw;Tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gh=function(){};xw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(fn.current);var s=null;switch(n){case"input":i=mh(t,i),r=mh(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=vh(t,i),r=vh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ol)}wh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Iw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fI(t,e,n){var r=e.pendingProps;switch(Yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return xt(e.type)&&Vl(),st(e),null;case 3:return r=e.stateNode,is(),Se(Tt),Se(ut),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(td(Kt),Kt=null))),Gh(t,e),st(e),null;case 5:sf(e);var i=Qr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)xw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return st(e),null}if(t=Qr(fn.current),Ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[jo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)Ie(to[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Sm(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Am(r,s),Ie("invalid",r)}wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",""+l]):Ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Da(r),bm(r,s,!0);break;case"textarea":Da(r),Cm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[jo]=r,Tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)Ie(to[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Sm(t,r),i=mh(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Am(t,r),i=vh(t,r),Ie("invalid",t);break;default:i=r}wh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?t_(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zv(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Co(t,c):typeof c=="number"&&Co(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ie("scroll",t):c!=null&&Od(t,s,c,o))}switch(n){case"input":Da(t),bm(t,r,!1);break;case"textarea":Da(t),Cm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)Iw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Qr(Uo.current),Qr(fn.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return st(e),null;case 13:if(Se(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&At!==null&&e.mode&1&&!(e.flags&128))B_(),ns(),e.flags|=98560,s=!1;else if(s=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[hn]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Kt!==null&&(td(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?He===0&&(He=3):vf())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return is(),Gh(t,e),t===null&&Vo(e.stateNode.containerInfo),st(e),null;case 10:return ef(e.type._context),st(e),null;case 17:return xt(e.type)&&Vl(),st(e),null;case 19:if(Se(Ae),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>os&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=$l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return st(e),null}else 2*Ve()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,Te(Ae,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function pI(t,e){switch(Yd(e),e.tag){case 1:return xt(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),Se(Tt),Se(ut),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(Se(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ae),null;case 4:return is(),null;case 10:return ef(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Wa=!1,lt=!1,mI=typeof WeakSet=="function"?WeakSet:Set,J=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){Le(t,e,r)}}var vg=!1;function gI(t,e){if(Ph=Nl,t=C_(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,p=0,m=t,g=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++p===r&&(c=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nh={focusedElem:t,selectionRange:n},Nl=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var R=C.memoizedProps,P=C.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:qt(e.type,R),P);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(L){Le(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return C=vg,vg=!1,C}function yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kh(e,n,s)}i=i.next}while(i!==r)}}function bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kw(t){var e=t.alternate;e!==null&&(t.alternate=null,kw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[jo],delete e[Oh],delete e[Xx],delete e[Zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sw(t){return t.tag===5||t.tag===3||t.tag===4}function _g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var Je=null,Gt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)bw(t,e,n),n=n.sibling}function bw(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:lt||Fi(n,e);case 6:var r=Je,i=Gt;Je=null,Yn(t,e,n),Je=r,Gt=i,Je!==null&&(Gt?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Gt?(t=Je,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Do(t)):Mu(Je,n.stateNode));break;case 4:r=Je,i=Gt,Je=n.stateNode.containerInfo,Gt=!0,Yn(t,e,n),Je=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!lt&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Yn(t,e,n),lt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mI),e.forEach(function(r){var i=kI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,Gt=!1;break e;case 3:Je=l.stateNode.containerInfo,Gt=!0;break e;case 4:Je=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(Je===null)throw Error(H(160));bw(s,o,i),Je=null,Gt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Aw(e,t),e=e.sibling}function Aw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),an(t),r&4){try{yo(3,t,t.return),bc(3,t)}catch(R){Le(t,t.return,R)}try{yo(5,t,t.return)}catch(R){Le(t,t.return,R)}}break;case 1:Ht(e,t),an(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Ht(e,t),an(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{Co(i,"")}catch(R){Le(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Yv(i,s),Eh(l,o);var u=Eh(l,s);for(o=0;o<c.length;o+=2){var p=c[o],m=c[o+1];p==="style"?t_(i,m):p==="dangerouslySetInnerHTML"?Zv(i,m):p==="children"?Co(i,m):Od(i,p,m,u)}switch(l){case"input":gh(i,s);break;case"textarea":Jv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Bi(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?Bi(i,!!s.multiple,s.defaultValue,!0):Bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[jo]=s}catch(R){Le(t,t.return,R)}}break;case 6:if(Ht(e,t),an(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Le(t,t.return,R)}}break;case 3:if(Ht(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(e.containerInfo)}catch(R){Le(t,t.return,R)}break;case 4:Ht(e,t),an(t);break;case 13:Ht(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mf=Ve())),r&4&&wg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||p,Ht(e,t),lt=u):Ht(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(J=t,p=t.child;p!==null;){for(m=J=p;J!==null;){switch(g=J,S=g.child,g.tag){case 0:case 11:case 14:case 15:yo(4,g,g.return);break;case 1:Fi(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(R){Le(r,n,R)}}break;case 5:Fi(g,g.return);break;case 22:if(g.memoizedState!==null){Tg(m);continue}}S!==null?(S.return=g,J=S):Tg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=e_("display",o))}catch(R){Le(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(R){Le(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),an(t),r&4&&wg(t);break;case 21:break;default:Ht(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sw(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Co(i,""),r.flags&=-33);var s=_g(t);Jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_g(t);Yh(t,l,o);break;default:throw Error(H(161))}}catch(c){Le(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yI(t,e,n){J=t,Cw(t)}function Cw(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wa;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||lt;l=Wa;var u=lt;if(Wa=o,(lt=c)&&!u)for(J=i;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null?xg(i):c!==null?(c.return=o,J=c):xg(i);for(;s!==null;)J=s,Cw(s),s=s.sibling;J=i,Wa=l,lt=u}Eg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):Eg(t)}}function Eg(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||bc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Do(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}lt||e.flags&512&&Qh(e)}catch(g){Le(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function Tg(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function xg(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bc(4,e)}catch(c){Le(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Le(e,i,c)}}var s=e.return;try{Qh(e)}catch(c){Le(e,s,c)}break;case 5:var o=e.return;try{Qh(e)}catch(c){Le(e,o,c)}}}catch(c){Le(e,e.return,c)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var vI=Math.ceil,ql=$n.ReactCurrentDispatcher,ff=$n.ReactCurrentOwner,Ft=$n.ReactCurrentBatchConfig,me=0,Ye=null,Fe=null,et=0,St=0,Ui=Pr(0),He=0,Ho=null,ri=0,Ac=0,pf=0,vo=null,_t=null,mf=0,os=1/0,kn=null,Gl=!1,Xh=null,pr=null,qa=!1,ar=null,Kl=0,_o=0,Zh=null,pl=-1,ml=0;function mt(){return me&6?Ve():pl!==-1?pl:pl=Ve()}function mr(t){return t.mode&1?me&2&&et!==0?et&-et:tI.transition!==null?(ml===0&&(ml=f_()),ml):(t=ve,t!==0||(t=window.event,t=t===void 0?16:w_(t.type)),t):1}function Xt(t,e,n,r){if(50<_o)throw _o=0,Zh=null,Error(H(185));ra(t,n,r),(!(me&2)||t!==Ye)&&(t===Ye&&(!(me&2)&&(Ac|=n),He===4&&tr(t,et)),It(t,r),n===1&&me===0&&!(e.mode&1)&&(os=Ve()+500,Ic&&Nr()))}function It(t,e){var n=t.callbackNode;tx(t,e);var r=Pl(t,t===Ye?et:0);if(r===0)n!==null&&Nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nm(n),e===1)t.tag===0?eI(Ig.bind(null,t)):F_(Ig.bind(null,t)),Yx(function(){!(me&6)&&Nr()}),n=null;else{switch(p_(r)){case 1:n=Ud;break;case 4:n=h_;break;case 16:n=Rl;break;case 536870912:n=d_;break;default:n=Rl}n=Mw(n,Rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rw(t,e){if(pl=-1,ml=0,me&6)throw Error(H(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=Pl(t,t===Ye?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ql(t,r);else{e=r;var i=me;me|=2;var s=Nw();(Ye!==t||et!==e)&&(kn=null,os=Ve()+500,Jr(t,e));do try{EI();break}catch(l){Pw(t,l)}while(!0);Zd(),ql.current=s,me=i,Fe!==null?e=0:(Ye=null,et=0,e=He)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=ed(t,i))),e===1)throw n=Ho,Jr(t,0),tr(t,r),It(t,Ve()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!_I(i)&&(e=Ql(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=ed(t,s))),e===1))throw n=Ho,Jr(t,0),tr(t,r),It(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Wr(t,_t,kn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=mf+500-Ve(),10<e)){if(Pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lh(Wr.bind(null,t,_t,kn),e);break}Wr(t,_t,kn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vI(r/1960))-r,10<r){t.timeoutHandle=Lh(Wr.bind(null,t,_t,kn),r);break}Wr(t,_t,kn);break;case 5:Wr(t,_t,kn);break;default:throw Error(H(329))}}}return It(t,Ve()),t.callbackNode===n?Rw.bind(null,t):null}function ed(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=_t,_t=n,e!==null&&td(e)),t}function td(t){_t===null?_t=t:_t.push.apply(_t,t)}function _I(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~pf,e&=~Ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Ig(t){if(me&6)throw Error(H(327));Gi();var e=Pl(t,0);if(!(e&1))return It(t,Ve()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=ed(t,r))}if(n===1)throw n=Ho,Jr(t,0),tr(t,e),It(t,Ve()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,_t,kn),It(t,Ve()),null}function gf(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(os=Ve()+500,Ic&&Nr())}}function ii(t){ar!==null&&ar.tag===0&&!(me&6)&&Gi();var e=me;me|=1;var n=Ft.transition,r=ve;try{if(Ft.transition=null,ve=1,t)return t()}finally{ve=r,Ft.transition=n,me=e,!(me&6)&&Nr()}}function yf(){St=Ui.current,Se(Ui)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qx(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vl();break;case 3:is(),Se(Tt),Se(ut),of();break;case 5:sf(r);break;case 4:is();break;case 13:Se(Ae);break;case 19:Se(Ae);break;case 10:ef(r.type._context);break;case 22:case 23:yf()}n=n.return}if(Ye=t,Fe=t=gr(t.current,null),et=St=e,He=0,Ho=null,pf=Ac=ri=0,_t=vo=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function Pw(t,e){do{var n=Fe;try{if(Zd(),hl.current=Wl,Hl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hl=!1}if(ni=0,Qe=$e=Ce=null,go=!1,zo=0,ff.current=null,n===null||n.return===null){He=1,Ho=e,Fe=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=et,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=hg(o);if(S!==null){S.flags&=-257,dg(S,o,l,s,e),S.mode&1&&ug(s,u,e),e=S,c=u;var C=e.updateQueue;if(C===null){var R=new Set;R.add(c),e.updateQueue=R}else C.add(c);break e}else{if(!(e&1)){ug(s,u,e),vf();break e}c=Error(H(426))}}else if(be&&l.mode&1){var P=hg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),dg(P,o,l,s,e),Jd(ss(c,l));break e}}s=c=ss(c,l),He!==4&&(He=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=pw(s,c,e);ig(s,T);break e;case 1:l=c;var _=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(pr===null||!pr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=mw(s,l,e);ig(s,L);break e}}s=s.return}while(s!==null)}Lw(n)}catch(F){e=F,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function Nw(){var t=ql.current;return ql.current=Wl,t===null?Wl:t}function vf(){(He===0||He===3||He===2)&&(He=4),Ye===null||!(ri&268435455)&&!(Ac&268435455)||tr(Ye,et)}function Ql(t,e){var n=me;me|=2;var r=Nw();(Ye!==t||et!==e)&&(kn=null,Jr(t,e));do try{wI();break}catch(i){Pw(t,i)}while(!0);if(Zd(),me=n,ql.current=r,Fe!==null)throw Error(H(261));return Ye=null,et=0,He}function wI(){for(;Fe!==null;)Dw(Fe)}function EI(){for(;Fe!==null&&!qT();)Dw(Fe)}function Dw(t){var e=Vw(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?Lw(t):Fe=e,ff.current=null}function Lw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pI(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Fe=null;return}}else if(n=fI(n,e,St),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);He===0&&(He=5)}function Wr(t,e,n){var r=ve,i=Ft.transition;try{Ft.transition=null,ve=1,TI(t,e,n,r)}finally{Ft.transition=i,ve=r}return null}function TI(t,e,n,r){do Gi();while(ar!==null);if(me&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nx(t,s),t===Ye&&(Fe=Ye=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,Mw(Rl,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=ve;ve=1;var l=me;me|=4,ff.current=null,gI(t,n),Aw(n,t),Bx(Nh),Nl=!!Ph,Nh=Ph=null,t.current=n,yI(n),GT(),me=l,ve=o,Ft.transition=s}else t.current=n;if(qa&&(qa=!1,ar=t,Kl=i),s=t.pendingLanes,s===0&&(pr=null),YT(n.stateNode),It(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gl)throw Gl=!1,t=Xh,Xh=null,t;return Kl&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===Zh?_o++:(_o=0,Zh=t):_o=0,Nr(),null}function Gi(){if(ar!==null){var t=p_(Kl),e=Ft.transition,n=ve;try{if(Ft.transition=null,ve=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,Kl=0,me&6)throw Error(H(331));var i=me;for(me|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(J=u;J!==null;){var p=J;switch(p.tag){case 0:case 11:case 15:yo(8,p,s)}var m=p.child;if(m!==null)m.return=p,J=m;else for(;J!==null;){p=J;var g=p.sibling,S=p.return;if(kw(p),p===u){J=null;break}if(g!==null){g.return=S,J=g;break}J=S}}}var C=s.alternate;if(C!==null){var R=C.child;if(R!==null){C.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,J=T;break e}J=s.return}}var _=t.current;for(J=_;J!==null;){o=J;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,J=b;else e:for(o=_;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bc(9,l)}}catch(F){Le(l,l.return,F)}if(l===o){J=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,J=L;break e}J=l.return}}if(me=i,Nr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(_c,t)}catch{}r=!0}return r}finally{ve=n,Ft.transition=e}}return!1}function kg(t,e,n){e=ss(n,e),e=pw(t,e,1),t=fr(t,e,1),e=mt(),t!==null&&(ra(t,1,e),It(t,e))}function Le(t,e,n){if(t.tag===3)kg(t,t,n);else for(;e!==null;){if(e.tag===3){kg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=ss(n,t),t=mw(e,t,1),e=fr(e,t,1),t=mt(),e!==null&&(ra(e,1,t),It(e,t));break}}e=e.return}}function xI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(et&n)===n&&(He===4||He===3&&(et&130023424)===et&&500>Ve()-mf?Jr(t,0):pf|=n),It(t,e)}function Ow(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=mt();t=Vn(t,e),t!==null&&(ra(t,e,n),It(t,n))}function II(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ow(t,n)}function kI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),Ow(t,n)}var Vw;Vw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,dI(t,e,n);Et=!!(t.flags&131072)}else Et=!1,be&&e.flags&1048576&&U_(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fl(t,e),t=e.pendingProps;var i=ts(e,ut.current);qi(e,n),i=lf(null,e,r,t,i,n);var s=cf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nf(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=Hh(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Qd(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bI(r),t=qt(r,t),i){case 0:e=$h(null,e,r,t,n);break e;case 1:e=mg(null,e,r,t,n);break e;case 11:e=fg(null,e,r,t,n);break e;case 14:e=pg(null,e,r,qt(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),$h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),mg(t,e,r,i,n);case 3:e:{if(_w(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q_(t,e),Bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(H(423)),e),e=gg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(H(424)),e),e=gg(t,e,r,n,i);break e}else for(At=dr(e.stateNode.containerInfo.firstChild),Rt=e,be=!0,Kt=null,n=H_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Mn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return G_(e),t===null&&jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dh(r,i)?o=null:s!==null&&Dh(r,s)&&(e.flags|=32),vw(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return ww(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),fg(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(Ul,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!Tt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Pn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Fh(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=Ut(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),pg(t,e,r,i,n);case 15:return gw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),fl(t,e),e.tag=1,xt(r)?(t=!0,Ml(e)):t=!1,qi(e,n),fw(e,r,i),zh(e,r,i,n),Hh(null,e,r,!0,t,n);case 19:return Ew(t,e,n);case 22:return yw(t,e,n)}throw Error(H(156,e.tag))};function Mw(t,e){return u_(t,e)}function SI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new SI(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bI(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===jd)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Xr(n.children,i,s,e);case Vd:o=8,i|=8;break;case hh:return t=jt(12,n,e,i|2),t.elementType=hh,t.lanes=s,t;case dh:return t=jt(13,n,e,i),t.elementType=dh,t.lanes=s,t;case fh:return t=jt(19,n,e,i),t.elementType=fh,t.lanes=s,t;case Gv:return Cc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wv:o=10;break e;case qv:o=9;break e;case Md:o=11;break e;case jd:o=14;break e;case Xn:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Cc(t,e,n,r){return t=jt(22,t,r,e),t.elementType=Gv,t.lanes=n,t.stateNode={isHidden:!1},t}function Wu(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,l,c){return t=new AI(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function CI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jw(t){if(!t)return Tr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(xt(n))return j_(t,n,e)}return e}function Fw(t,e,n,r,i,s,o,l,c){return t=wf(n,r,!0,t,i,s,o,l,c),t.context=jw(null),n=t.current,r=mt(),i=mr(n),s=Pn(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,ra(t,i,r),It(t,r),t}function Rc(t,e,n,r){var i=e.current,s=mt(),o=mr(i);return n=jw(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(Xt(t,i,o,s),ul(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){Sg(t,e),(t=t.alternate)&&Sg(t,e)}function RI(){return null}var Uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}Pc.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Rc(t,e,null,null)};Pc.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){Rc(null,t,null,null)}),e[On]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&__(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bg(){}function PI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yl(o);s.call(u)}}var o=Fw(e,r,t,0,null,!1,!1,"",bg);return t._reactRootContainer=o,t[On]=o.current,Vo(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yl(c);l.call(u)}}var c=wf(t,0,!1,null,null,!1,!1,"",bg);return t._reactRootContainer=c,t[On]=c.current,Vo(t.nodeType===8?t.parentNode:t),ii(function(){Rc(e,c,n,r)}),c}function Dc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=Yl(o);l.call(c)}}Rc(e,o,t,i)}else o=PI(n,e,t,i,r);return Yl(o)}m_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(zd(e,n|1),It(e,Ve()),!(me&6)&&(os=Ve()+500,Nr()))}break;case 13:ii(function(){var r=Vn(t,1);if(r!==null){var i=mt();Xt(r,t,1,i)}}),Ef(t,1)}};Bd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=mt();Xt(e,t,134217728,n)}Ef(t,134217728)}};g_=function(t){if(t.tag===13){var e=mr(t),n=Vn(t,e);if(n!==null){var r=mt();Xt(n,t,e,r)}Ef(t,e)}};y_=function(){return ve};v_=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};xh=function(t,e,n){switch(e){case"input":if(gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xc(r);if(!i)throw Error(H(90));Qv(r),gh(r,i)}}}break;case"textarea":Jv(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}};i_=gf;s_=ii;var NI={usingClientEntryPoint:!1,Events:[sa,Li,xc,n_,r_,gf]},Qs={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DI={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l_(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||RI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{_c=Ga.inject(DI),dn=Ga}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NI;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(H(200));return CI(t,e,null,n)};Nt.createRoot=function(t,e){if(!xf(t))throw Error(H(299));var n=!1,r="",i=Uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Tf(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=l_(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return ii(t)};Nt.hydrate=function(t,e,n){if(!Nc(e))throw Error(H(200));return Dc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Uw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fw(e,null,t,1,n??null,i,!1,s,o),t[On]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pc(e)};Nt.render=function(t,e,n){if(!Nc(e))throw Error(H(200));return Dc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(H(40));return t._reactRootContainer?(ii(function(){Dc(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Nt.unstable_batchedUpdates=gf;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nc(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Dc(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function zw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zw)}catch(t){console.error(t)}}zw(),zv.exports=Nt;var LI=zv.exports,Ag=LI;ch.createRoot=Ag.createRoot,ch.hydrateRoot=Ag.hydrateRoot;const OI="modulepreload",VI=function(t,e){return new URL(t,e).href},Cg={},Bw=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=VI(u,r),u in Cg)return;Cg[u]=!0;const p=u.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let C=o.length-1;C>=0;C--){const R=o[C];if(R.href===u&&(!p||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const S=document.createElement("link");if(S.rel=p?"stylesheet":OI,p||(S.as="script"),S.crossOrigin="",S.href=u,c&&S.setAttribute("nonce",c),document.head.appendChild(S),p)return new Promise((C,R)=>{S.addEventListener("load",C),S.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},MI=({onLogin:t})=>{const[e,n]=X.useState(!0),[r,i]=X.useState(""),[s,o]=X.useState(""),[l,c]=X.useState(""),[u,p]=X.useState(!1),[m,g]=X.useState(!1),S=async C=>{if(C.preventDefault(),c(""),!r.includes("@")){c("Please enter a valid email address.");return}if(s.length<6){c("Password must be at least 6 characters long.");return}p(!0);try{const{api:R}=await Bw(async()=>{const{api:T}=await Promise.resolve().then(()=>DP);return{api:T}},void 0,import.meta.url);let P;e?P=await R.login(r,s):P=await R.register(r,s),P.success?t(P.user,!e):c(P.error||"Authentication failed")}catch(R){console.error("Authentication error:",R),c("Network error. Please try again.")}finally{p(!1)}};return d.jsxs("div",{className:"login-container",children:[d.jsxs("div",{className:"login-card fade-in",children:[d.jsxs("div",{className:"logo-section",children:[d.jsx("img",{src:"app_logo.jpg",alt:"BloodFit Logo",className:"app-logo"}),d.jsx("h1",{children:"Blood & Fit"}),d.jsx("p",{children:"Your personal health companion"})]}),d.jsxs("form",{onSubmit:S,className:"login-form",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{htmlFor:"email",children:"Email Address"}),d.jsx("input",{type:"email",id:"email",className:"input-field",placeholder:"hello@example.com",value:r,onChange:C=>i(C.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{htmlFor:"password",children:"Password"}),d.jsxs("div",{className:"password-wrapper",children:[d.jsx("input",{type:m?"text":"password",id:"password",className:"input-field",placeholder:"••••••••",value:s,onChange:C=>o(C.target.value),required:!0}),d.jsx("button",{type:"button",className:"toggle-password",onClick:()=>g(!m),children:m?"Hide":"Show"})]}),e&&d.jsx("div",{className:"forgot-password",children:d.jsx("span",{onClick:()=>alert("Reset link sent to email!"),children:"Forgot Password?"})})]}),l&&d.jsx("div",{className:"error-box fade-in",children:d.jsxs("span",{children:["⚠️ ",l]})}),d.jsx("button",{type:"submit",className:"btn-primary",disabled:u,children:u?d.jsx("span",{className:"spinner"}):e?"Login":"Sign Up"})]}),d.jsxs("p",{className:"footer-text",children:[e?"Don't have an account? ":"Already have an account? ",d.jsx("span",{className:"link",onClick:()=>{n(!e),c("")},children:e?"Sign up":"Login"})]})]}),d.jsx("style",{children:`
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
      `})]})},jI=()=>{};var Rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,S=u&63;c||(S=64,o||(g=64)),r.push(n[p],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new UI;const g=s<<2|l>>4;if(r.push(g),u!==64){const S=l<<4&240|u>>2;if(r.push(S),m!==64){const C=u<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zI=function(t){const e=$w(t);return Hw.encodeByteArray(e,!0)},Jl=function(t){return zI(t).replace(/\./g,"")},Ww=function(t){try{return Hw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=()=>BI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},Lc=()=>{try{return jI()||$I()||HI()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qw=t=>{var e,n;return(n=(e=Lc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Gw=t=>{const e=qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kw=()=>{var t;return(t=Lc())==null?void 0:t.config},Qw=t=>{var e;return(e=Lc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function If(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),""].join(".")}const wo={};function GI(){const t={prod:[],emulator:[]};for(const e of Object.keys(wo))wo[e]?t.emulator.push(e):t.prod.push(e);return t}function KI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Pg=!1;function kf(t,e){if(typeof window>"u"||typeof document>"u"||!pi(window.location.host)||wo[t]===e||wo[t]||Pg)return;wo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=GI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Pg=!0,o()},g}function p(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=KI(r),S=n("text"),C=document.getElementById(S)||document.createElement("span"),R=n("learnmore"),P=document.getElementById(R)||document.createElement("a"),T=n("preprendIcon"),_=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const b=g.element;l(b),p(P,R);const L=u();c(_,T),b.append(_,C,P,L),document.body.appendChild(b)}s?(C.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function YI(){var e;const t=(e=Lc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ek(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tk(){return!YI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nk(){try{return typeof indexedDB=="object"}catch{return!1}}function rk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ik,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xn(i,l,r)}}function sk(t,e){return t.replace(ok,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ok=/\{\$([^}]+)}/g;function ak(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ng(s)&&Ng(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lk(t,e){const n=new ck(t,e);return n.subscribe.bind(n)}class ck{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gu),i.error===void 0&&(i.error=Gu),i.complete===void 0&&(i.complete=Gu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fk(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dk(t){return t===qr?void 0:t}function fk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const mk={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},gk=ue.INFO,yk={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},vk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sf{constructor(e){this.name=e,this._logLevel=gk,this._logHandler=vk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const _k=(t,e)=>e.some(n=>t instanceof n);let Dg,Lg;function wk(){return Dg||(Dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ek(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jw=new WeakMap,nd=new WeakMap,Xw=new WeakMap,Ku=new WeakMap,bf=new WeakMap;function Tk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jw.set(n,t)}).catch(()=>{}),bf.set(e,t),e}function xk(t){if(nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nd.set(t,e)}let rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ik(t){rd=t(rd)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qu(this),e,...n);return Xw.set(r,e.sort?e.sort():[e]),yr(r)}:Ek().includes(t)?function(...e){return t.apply(Qu(this),e),yr(Jw.get(this))}:function(...e){return yr(t.apply(Qu(this),e))}}function Sk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&xk(t),_k(t,wk())?new Proxy(t,rd):t)}function yr(t){if(t instanceof IDBRequest)return Tk(t);if(Ku.has(t))return Ku.get(t);const e=Sk(t);return e!==t&&(Ku.set(t,e),bf.set(e,t)),e}const Qu=t=>bf.get(t);function bk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yr(o.result),c.oldVersion,c.newVersion,yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ak=["get","getKey","getAll","getAllKeys","count"],Ck=["put","add","delete","clear"],Yu=new Map;function Og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yu.get(e))return Yu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ck.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ak.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Yu.set(e,s),s}Ik(t=>({...t,get:(e,n,r)=>Og(e,n)||t.get(e,n,r),has:(e,n)=>!!Og(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const id="@firebase/app",Vg="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Sf("@firebase/app"),Nk="@firebase/app-compat",Dk="@firebase/analytics-compat",Lk="@firebase/analytics",Ok="@firebase/app-check-compat",Vk="@firebase/app-check",Mk="@firebase/auth",jk="@firebase/auth-compat",Fk="@firebase/database",Uk="@firebase/data-connect",zk="@firebase/database-compat",Bk="@firebase/functions",$k="@firebase/functions-compat",Hk="@firebase/installations",Wk="@firebase/installations-compat",qk="@firebase/messaging",Gk="@firebase/messaging-compat",Kk="@firebase/performance",Qk="@firebase/performance-compat",Yk="@firebase/remote-config",Jk="@firebase/remote-config-compat",Xk="@firebase/storage",Zk="@firebase/storage-compat",eS="@firebase/firestore",tS="@firebase/ai",nS="@firebase/firestore-compat",rS="firebase",iS="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="[DEFAULT]",sS={[id]:"fire-core",[Nk]:"fire-core-compat",[Lk]:"fire-analytics",[Dk]:"fire-analytics-compat",[Vk]:"fire-app-check",[Ok]:"fire-app-check-compat",[Mk]:"fire-auth",[jk]:"fire-auth-compat",[Fk]:"fire-rtdb",[Uk]:"fire-data-connect",[zk]:"fire-rtdb-compat",[Bk]:"fire-fn",[$k]:"fire-fn-compat",[Hk]:"fire-iid",[Wk]:"fire-iid-compat",[qk]:"fire-fcm",[Gk]:"fire-fcm-compat",[Kk]:"fire-perf",[Qk]:"fire-perf-compat",[Yk]:"fire-rc",[Jk]:"fire-rc-compat",[Xk]:"fire-gcs",[Zk]:"fire-gcs-compat",[eS]:"fire-fst",[nS]:"fire-fst-compat",[tS]:"fire-vertex","fire-js":"fire-js",[rS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map,oS=new Map,od=new Map;function Mg(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(od.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;od.set(e,t);for(const n of Xl.values())Mg(n,t);for(const n of oS.values())Mg(n,t);return!0}function Oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new aa("app","Firebase",aS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=iS;function Zw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:sd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=Kw()),!n)throw vr.create("no-options");const s=Xl.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new pk(i);for(const c of od.values())o.addComponent(c);const l=new lS(n,r,o);return Xl.set(i,l),l}function Af(t=sd){const e=Xl.get(t);if(!e&&t===sd&&Kw())return Zw();if(!e)throw vr.create("no-app",{appName:t});return e}function pn(t,e,n){let r=sS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}oi(new xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="firebase-heartbeat-database",uS=1,Wo="firebase-heartbeat-store";let Ju=null;function e0(){return Ju||(Ju=bk(cS,uS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Ju}async function hS(t){try{const n=(await e0()).transaction(Wo),r=await n.objectStore(Wo).get(t0(t));return await n.done,r}catch(e){if(e instanceof xn)jn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function jg(t,e){try{const r=(await e0()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,t0(t)),await r.done}catch(n){if(n instanceof xn)jn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=1024,fS=30;class pS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>fS){const o=yS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:i}=mS(this._heartbeatsCache.heartbeats),s=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return jn.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function mS(t,e=dS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ug(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nk()?rk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}function yS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){oi(new xr("platform-logger",e=>new Rk(e),"PRIVATE")),oi(new xr("heartbeat",e=>new pS(e),"PRIVATE")),pn(id,Vg,t),pn(id,Vg,"esm2020"),pn("fire-js","")}vS("");function n0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _S=n0,r0=new aa("auth","Firebase",n0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Sf("@firebase/auth");function wS(t,...e){Zl.logLevel<=ue.WARN&&Zl.warn(`Auth (${mi}): ${t}`,...e)}function yl(t,...e){Zl.logLevel<=ue.ERROR&&Zl.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Cf(t,...e)}function mn(t,...e){return Cf(t,...e)}function i0(t,e,n){const r={..._S(),[e]:n};return new aa("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return i0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r0.create(t,...e)}function re(t,e,...n){if(!t)throw Cf(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function Fn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ES(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ES()||XI()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=QI()||ZI()}get(){return TS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SS=new ca(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Lr(t,e,n,r,i={}){return o0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=la({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return JI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&pi(t.emulatorConfig.host)&&(u.credentials="include"),s0.fetch()(await a0(t,t.config.apiHost,n,l),u)})}async function o0(t,e,n){t._canInitEmulator=!1;const r={...IS,...e};try{const i=new AS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ka(t,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw i0(t,p,u);nn(t,p)}}catch(i){if(i instanceof xn)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function ua(t,e,n,r,i={}){const s=await Lr(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function a0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Rf(t.config,i):`${t.config.apiScheme}://${i}`;return kS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function bS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),SS.get())})}}function Ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}function Bg(t){return t!==void 0&&t.enterprise!==void 0}class CS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RS(t,e){return Lr(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function ec(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NS(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Pf(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(Xu(i.auth_time)),issuedAtTime:Eo(Xu(i.iat)),expirationTime:Eo(Xu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xu(t){return Number(t)*1e3}function Pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ww(n);return i?JSON.parse(i):(yl("Failed to decode base64 JWT payload"),null)}catch(i){return yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $g(t){const e=Pf(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&DS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await qo(t,ec(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?l0(i.providerUserInfo):[],o=VS(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ld(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function OS(t){const e=qe(t);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function l0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e){const n=await o0(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await a0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&pi(t.emulatorConfig.host)&&(c.credentials="include"),s0.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jS(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new LS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ld(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qo(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NS(this,e)}reload(){return OS(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await qo(this,PS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:C,stsTokenManager:R}=n;re(m&&R,e,"internal-error");const P=Ki.fromJSON(this.name,R);re(typeof m=="string",e,"internal-error"),Jn(r,e.name),Jn(i,e.name),re(typeof g=="boolean",e,"internal-error"),re(typeof S=="boolean",e,"internal-error"),Jn(s,e.name),Jn(o,e.name),Jn(l,e.name),Jn(c,e.name),Jn(u,e.name),Jn(p,e.name);const T=new Qt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:u,lastLoginAt:p});return C&&Array.isArray(C)&&(T.providerData=C.map(_=>({..._}))),c&&(T._redirectEventId=c),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?l0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const c=new Qt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ld(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;function Rn(t){Fn(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c0.type="NONE";const Wg=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ec(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(Rn(Wg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(Wg);const o=vl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const g=await ec(e,{idToken:p}).catch(()=>{});if(!g)break;m=await Qt._fromGetAccountInfoResponse(e,g,p)}else m=Qt._fromJSON(e,p);u!==s&&(l=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Qi(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m0(e))return"Blackberry";if(g0(e))return"Webos";if(h0(e))return"Safari";if((e.includes("chrome/")||d0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u0(t=ht()){return/firefox\//i.test(t)}function h0(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d0(t=ht()){return/crios\//i.test(t)}function f0(t=ht()){return/iemobile/i.test(t)}function p0(t=ht()){return/android/i.test(t)}function m0(t=ht()){return/blackberry/i.test(t)}function g0(t=ht()){return/webos/i.test(t)}function Nf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FS(t=ht()){var e;return Nf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function US(){return ek()&&document.documentMode===10}function y0(t=ht()){return Nf(t)||p0(t)||g0(t)||m0(t)||/windows phone/i.test(t)||f0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e=[]){let n;switch(t){case"Browser":n=qg(ht());break;case"Worker":n=`${qg(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=6;class HS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$S,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ec(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Nn(this));const n=e?qe(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BS(this),n=new HS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gi(t){return qe(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=lk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qS(t){Vc=t}function _0(t){return Vc.loadJS(t)}function GS(){return Vc.recaptchaEnterpriseScript}function KS(){return Vc.gapiScript}function QS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class YS{constructor(){this.enterprise=new JS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XS="recaptcha-enterprise",w0="NO_RECAPTCHA";class ZS{constructor(e){this.type=XS,this.auth=gi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{RS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new CS(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;Bg(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(w0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Bg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=GS();c.length!==0&&(c+=l),_0(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Kg(t,e,n,r=!1,i=!1){const s=new ZS(t);let o;if(i)o=w0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function cd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Kg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t,e){const n=Oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(si(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function tb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nb(t,e,n){const r=gi(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=E0(e),{host:o,port:l}=rb(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(si(u,r.config.emulator)&&si(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,pi(o)?(If(`${s}//${o}${c}`),kf("Auth",!0)):ib()}function E0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rb(t){const e=E0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ib(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function sb(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){return ua(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function lb(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Df{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cd(e,n,"signInWithPassword",ob);case"emailLink":return ab(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cd(e,r,"signUpPassword",sb);case"emailLink":return lb(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return ua(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="http://localhost";class ai extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:cb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hb(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class Lf{constructor(e){const n=no(ro(e)),r=n.apiKey??null,i=n.oobCode??null,s=ub(n.mode??null);re(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=hb(e);try{return new Lf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lf.parseLink(n);return re(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends T0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ha{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ha{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ha{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){return ua(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=Yg(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yg(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends xn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nc(e,n,r,i)}}function x0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(t,s,e,r):s})}async function fb(t,e,n=!1){const r=await qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await qo(t,x0(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Pf(s.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e,n=!1){if(bt(t.app))return Promise.reject(Nn(t));const r="signIn",i=await x0(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mb(t,e){return I0(gi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t){const e=gi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gb(t,e,n){if(bt(t.app))return Promise.reject(Nn(t));const r=gi(t),o=await cd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",db).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&k0(t),c}),l=await li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function yb(t,e,n){return bt(t.app)?Promise.reject(Nn(t)):mb(qe(t),vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&k0(t),r})}function vb(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function _b(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function wb(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function Eb(t){return qe(t).signOut()}const rc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1e3,xb=10;class b0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=y0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);US()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}b0.type="LOCAL";const Ib=b0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A0.type="SESSION";const C0=A0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await kb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Of("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function bb(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function Ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Rb(){return R0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="firebaseLocalStorageDb",Pb=1,ic="firebaseLocalStorage",N0="fbase_key";class da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function Nb(){const t=indexedDB.deleteDatabase(P0);return new da(t).toPromise()}function ud(){const t=indexedDB.open(P0,Pb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ic,{keyPath:N0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ic)?e(r):(r.close(),await Nb(),e(await ud()))})})}async function Jg(t,e,n){const r=jc(t,!0).put({[N0]:e,value:n});return new da(r).toPromise()}async function Db(t,e){const n=jc(t,!1).get(e),r=await new da(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=jc(t,!0).delete(e);return new da(n).toPromise()}const Lb=800,Ob=3;class D0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(Rb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Ab(),!this.activeServiceWorker)return;this.sender=new Sb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ud();return await Jg(e,rc,"1"),await Xg(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Db(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D0.type="LOCAL";const Vb=D0;new ca(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t,e){return e?Rn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jb(t){return I0(t.auth,new Vf(t),t.bypassAuthState)}function Fb(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),pb(n,new Vf(t),t.bypassAuthState)}async function Ub(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),fb(n,new Vf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jb;case"linkViaPopup":case"linkViaRedirect":return Ub;case"reauthViaPopup":case"reauthViaRedirect":return Fb;default:nn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new ca(2e3,1e4);class zi extends L0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zb.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="pendingRedirect",_l=new Map;class $b extends L0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await Hb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hb(t,e){const n=Gb(e),r=qb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wb(t,e){_l.set(t._key(),e)}function qb(t){return Rn(t._redirectPersistence)}function Gb(t){return vl(Bb,t.config.apiKey,t.name)}async function Kb(t,e,n=!1){if(bt(t.app))return Promise.reject(Nn(t));const r=gi(t),i=Mb(r,e),o=await new $b(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=10*60*1e3;class Yb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eA=/^https?/;async function tA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xb(t);for(const n of e)try{if(nA(n))return}catch{}nn(t,"unauthorized-domain")}function nA(t){const e=ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eA.test(n))return!1;if(Zb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new ca(3e4,6e4);function ey(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iA(t){return new Promise((e,n)=>{var i,s,o;function r(){ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ey(),n(mn(t,"network-request-failed"))},timeout:rA.get()})}if((s=(i=gn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const l=QS("iframefcb");return gn()[l]=()=>{gapi.load?r():n(mn(t,"network-request-failed"))},_0(`${KS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw wl=null,e})}let wl=null;function sA(t){return wl=wl||iA(t),wl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new ca(5e3,15e3),aA="__/auth/iframe",lA="emulator/auth/iframe",cA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rf(e,lA):`https://${t.config.authDomain}/${aA}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=uA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function dA(t){const e=await sA(t),n=gn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:hA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),l=gn().setTimeout(()=>{s(o)},oA.get());function c(){gn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pA=500,mA=600,gA="_blank",yA="http://localhost";class ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vA(t,e,n,r=pA,i=mA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...fA,width:r.toString(),height:i.toString(),top:s,left:o},u=ht().toLowerCase();n&&(l=d0(u)?gA:n),u0(u)&&(e=e||yA,c.scrollbars="yes");const p=Object.entries(c).reduce((g,[S,C])=>`${g}${S}=${C},`,"");if(FS(u)&&l!=="_self")return _A(e||"",l),new ty(null);const m=window.open(e||"",l,p);re(m,t,"popup-blocked");try{m.focus()}catch{}return new ty(m)}function _A(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="__/auth/handler",EA="emulator/auth/handler",TA=encodeURIComponent("fac");async function ny(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof T0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ak(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ha){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),u=c?`#${TA}=${encodeURIComponent(c)}`:"";return`${xA(t)}?${la(l).slice(1)}${u}`}function xA({config:t}){return t.emulator?Rf(t,EA):`https://${t.authDomain}/${wA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="webStorageSupport";class IA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C0,this._completeRedirectFn=Kb,this._overrideRedirectResult=Wb}async _openPopup(e,n,r,i){var o;Fn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ny(e,n,r,ad(),i);return vA(e,s,Of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ny(e,n,r,ad(),i);return bb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dA(e),r=new Yb(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zu,{type:Zu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Zu];s!==void 0&&n(!!s),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return y0()||h0()||Nf()}}const kA=IA;var ry="@firebase/auth",iy="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AA(t){oi(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v0(t)},u=new WS(r,i,s,c);return tb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new xr("auth-internal",e=>{const n=gi(e.getProvider("auth").getImmediate());return(r=>new SA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ry,iy,bA(t)),pn(ry,iy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=5*60,RA=Qw("authIdTokenMaxAge")||CA;let sy=null;const PA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RA)return;const i=n==null?void 0:n.token;sy!==i&&(sy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NA(t=Af()){const e=Oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eb(t,{popupRedirectResolver:kA,persistence:[Vb,Ib,C0]}),r=Qw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=PA(s.toString());_b(n,o,()=>o(n.currentUser)),vb(n,l=>o(l))}}const i=qw("auth");return i&&nb(n,`http://${i}`),n}function DA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}qS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AA("Browser");var LA="firebase",OA="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(LA,OA,"app");var oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,V0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function I(){}I.prototype=y.prototype,E.F=y.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(k,w,A){for(var x=Array(arguments.length-2),te=2;te<arguments.length;te++)x[te-2]=arguments[te];return y.prototype[w].apply(k,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,I){I||(I=0);const k=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)k[w]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(w=0;w<16;++w)k[w]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=E.g[0],I=E.g[1],w=E.g[2];let A=E.g[3],x;x=y+(A^I&(w^A))+k[0]+3614090360&4294967295,y=I+(x<<7&4294967295|x>>>25),x=A+(w^y&(I^w))+k[1]+3905402710&4294967295,A=y+(x<<12&4294967295|x>>>20),x=w+(I^A&(y^I))+k[2]+606105819&4294967295,w=A+(x<<17&4294967295|x>>>15),x=I+(y^w&(A^y))+k[3]+3250441966&4294967295,I=w+(x<<22&4294967295|x>>>10),x=y+(A^I&(w^A))+k[4]+4118548399&4294967295,y=I+(x<<7&4294967295|x>>>25),x=A+(w^y&(I^w))+k[5]+1200080426&4294967295,A=y+(x<<12&4294967295|x>>>20),x=w+(I^A&(y^I))+k[6]+2821735955&4294967295,w=A+(x<<17&4294967295|x>>>15),x=I+(y^w&(A^y))+k[7]+4249261313&4294967295,I=w+(x<<22&4294967295|x>>>10),x=y+(A^I&(w^A))+k[8]+1770035416&4294967295,y=I+(x<<7&4294967295|x>>>25),x=A+(w^y&(I^w))+k[9]+2336552879&4294967295,A=y+(x<<12&4294967295|x>>>20),x=w+(I^A&(y^I))+k[10]+4294925233&4294967295,w=A+(x<<17&4294967295|x>>>15),x=I+(y^w&(A^y))+k[11]+2304563134&4294967295,I=w+(x<<22&4294967295|x>>>10),x=y+(A^I&(w^A))+k[12]+1804603682&4294967295,y=I+(x<<7&4294967295|x>>>25),x=A+(w^y&(I^w))+k[13]+4254626195&4294967295,A=y+(x<<12&4294967295|x>>>20),x=w+(I^A&(y^I))+k[14]+2792965006&4294967295,w=A+(x<<17&4294967295|x>>>15),x=I+(y^w&(A^y))+k[15]+1236535329&4294967295,I=w+(x<<22&4294967295|x>>>10),x=y+(w^A&(I^w))+k[1]+4129170786&4294967295,y=I+(x<<5&4294967295|x>>>27),x=A+(I^w&(y^I))+k[6]+3225465664&4294967295,A=y+(x<<9&4294967295|x>>>23),x=w+(y^I&(A^y))+k[11]+643717713&4294967295,w=A+(x<<14&4294967295|x>>>18),x=I+(A^y&(w^A))+k[0]+3921069994&4294967295,I=w+(x<<20&4294967295|x>>>12),x=y+(w^A&(I^w))+k[5]+3593408605&4294967295,y=I+(x<<5&4294967295|x>>>27),x=A+(I^w&(y^I))+k[10]+38016083&4294967295,A=y+(x<<9&4294967295|x>>>23),x=w+(y^I&(A^y))+k[15]+3634488961&4294967295,w=A+(x<<14&4294967295|x>>>18),x=I+(A^y&(w^A))+k[4]+3889429448&4294967295,I=w+(x<<20&4294967295|x>>>12),x=y+(w^A&(I^w))+k[9]+568446438&4294967295,y=I+(x<<5&4294967295|x>>>27),x=A+(I^w&(y^I))+k[14]+3275163606&4294967295,A=y+(x<<9&4294967295|x>>>23),x=w+(y^I&(A^y))+k[3]+4107603335&4294967295,w=A+(x<<14&4294967295|x>>>18),x=I+(A^y&(w^A))+k[8]+1163531501&4294967295,I=w+(x<<20&4294967295|x>>>12),x=y+(w^A&(I^w))+k[13]+2850285829&4294967295,y=I+(x<<5&4294967295|x>>>27),x=A+(I^w&(y^I))+k[2]+4243563512&4294967295,A=y+(x<<9&4294967295|x>>>23),x=w+(y^I&(A^y))+k[7]+1735328473&4294967295,w=A+(x<<14&4294967295|x>>>18),x=I+(A^y&(w^A))+k[12]+2368359562&4294967295,I=w+(x<<20&4294967295|x>>>12),x=y+(I^w^A)+k[5]+4294588738&4294967295,y=I+(x<<4&4294967295|x>>>28),x=A+(y^I^w)+k[8]+2272392833&4294967295,A=y+(x<<11&4294967295|x>>>21),x=w+(A^y^I)+k[11]+1839030562&4294967295,w=A+(x<<16&4294967295|x>>>16),x=I+(w^A^y)+k[14]+4259657740&4294967295,I=w+(x<<23&4294967295|x>>>9),x=y+(I^w^A)+k[1]+2763975236&4294967295,y=I+(x<<4&4294967295|x>>>28),x=A+(y^I^w)+k[4]+1272893353&4294967295,A=y+(x<<11&4294967295|x>>>21),x=w+(A^y^I)+k[7]+4139469664&4294967295,w=A+(x<<16&4294967295|x>>>16),x=I+(w^A^y)+k[10]+3200236656&4294967295,I=w+(x<<23&4294967295|x>>>9),x=y+(I^w^A)+k[13]+681279174&4294967295,y=I+(x<<4&4294967295|x>>>28),x=A+(y^I^w)+k[0]+3936430074&4294967295,A=y+(x<<11&4294967295|x>>>21),x=w+(A^y^I)+k[3]+3572445317&4294967295,w=A+(x<<16&4294967295|x>>>16),x=I+(w^A^y)+k[6]+76029189&4294967295,I=w+(x<<23&4294967295|x>>>9),x=y+(I^w^A)+k[9]+3654602809&4294967295,y=I+(x<<4&4294967295|x>>>28),x=A+(y^I^w)+k[12]+3873151461&4294967295,A=y+(x<<11&4294967295|x>>>21),x=w+(A^y^I)+k[15]+530742520&4294967295,w=A+(x<<16&4294967295|x>>>16),x=I+(w^A^y)+k[2]+3299628645&4294967295,I=w+(x<<23&4294967295|x>>>9),x=y+(w^(I|~A))+k[0]+4096336452&4294967295,y=I+(x<<6&4294967295|x>>>26),x=A+(I^(y|~w))+k[7]+1126891415&4294967295,A=y+(x<<10&4294967295|x>>>22),x=w+(y^(A|~I))+k[14]+2878612391&4294967295,w=A+(x<<15&4294967295|x>>>17),x=I+(A^(w|~y))+k[5]+4237533241&4294967295,I=w+(x<<21&4294967295|x>>>11),x=y+(w^(I|~A))+k[12]+1700485571&4294967295,y=I+(x<<6&4294967295|x>>>26),x=A+(I^(y|~w))+k[3]+2399980690&4294967295,A=y+(x<<10&4294967295|x>>>22),x=w+(y^(A|~I))+k[10]+4293915773&4294967295,w=A+(x<<15&4294967295|x>>>17),x=I+(A^(w|~y))+k[1]+2240044497&4294967295,I=w+(x<<21&4294967295|x>>>11),x=y+(w^(I|~A))+k[8]+1873313359&4294967295,y=I+(x<<6&4294967295|x>>>26),x=A+(I^(y|~w))+k[15]+4264355552&4294967295,A=y+(x<<10&4294967295|x>>>22),x=w+(y^(A|~I))+k[6]+2734768916&4294967295,w=A+(x<<15&4294967295|x>>>17),x=I+(A^(w|~y))+k[13]+1309151649&4294967295,I=w+(x<<21&4294967295|x>>>11),x=y+(w^(I|~A))+k[4]+4149444226&4294967295,y=I+(x<<6&4294967295|x>>>26),x=A+(I^(y|~w))+k[11]+3174756917&4294967295,A=y+(x<<10&4294967295|x>>>22),x=w+(y^(A|~I))+k[2]+718787259&4294967295,w=A+(x<<15&4294967295|x>>>17),x=I+(A^(w|~y))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(w+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const I=y-this.blockSize,k=this.C;let w=this.h,A=0;for(;A<y;){if(w==0)for(;A<=I;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(k[w++]=E.charCodeAt(A++),w==this.blockSize){i(this,k),w=0;break}}else for(;A<y;)if(k[w++]=E[A++],w==this.blockSize){i(this,k),w=0;break}}this.h=w,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,I=0;I<4;++I)for(let k=0;k<32;k+=8)E[y++]=this.g[I]>>>k&255;return E};function s(E,y){var I=l;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=y(E)}function o(E,y){this.h=y;const I=[];let k=!0;for(let w=E.length-1;w>=0;w--){const A=E[w]|0;k&&A==y||(I[w]=A,k=!1)}this.g=I}var l={};function c(E){return-128<=E&&E<128?s(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return P(u(-E));const y=[];let I=1;for(let k=0;E>=I;k++)y[k]=E/I|0,I*=4294967296;return new o(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return P(p(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(y,8));let k=m;for(let A=0;A<E.length;A+=8){var w=Math.min(8,E.length-A);const x=parseInt(E.substring(A,A+w),y);w<8?(w=u(Math.pow(y,w)),k=k.j(w).add(u(x))):(k=k.j(I),k=k.add(u(x)))}return k}var m=c(0),g=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();let E=0,y=1;for(let I=0;I<this.g.length;I++){const k=this.i(I);E+=(k>=0?k:4294967296+k)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(R(this))return"-"+P(this).toString(E);const y=u(Math.pow(E,6));var I=this;let k="";for(;;){const w=L(I,y).g;I=T(I,w.j(y));let A=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=w,C(I))return A+k;for(;A.length<6;)A="0"+A;k=A+k}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=T(this,E),R(E)?-1:C(E)?0:1};function P(E){const y=E.g.length,I=[];for(let k=0;k<y;k++)I[k]=~E.g[k];return new o(I,~E.h).add(g)}t.abs=function(){return R(this)?P(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),I=[];let k=0;for(let w=0;w<=y;w++){let A=k+(this.i(w)&65535)+(E.i(w)&65535),x=(A>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);k=x>>>16,A&=65535,x&=65535,I[w]=x<<16|A}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(E,y){return E.add(P(y))}t.j=function(E){if(C(this)||C(E))return m;if(R(this))return R(E)?P(this).j(P(E)):P(P(this).j(E));if(R(E))return P(this.j(P(E)));if(this.l(S)<0&&E.l(S)<0)return u(this.m()*E.m());const y=this.g.length+E.g.length,I=[];for(var k=0;k<2*y;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(let w=0;w<E.g.length;w++){const A=this.i(k)>>>16,x=this.i(k)&65535,te=E.i(w)>>>16,se=E.i(w)&65535;I[2*k+2*w]+=x*se,_(I,2*k+2*w),I[2*k+2*w+1]+=A*se,_(I,2*k+2*w+1),I[2*k+2*w+1]+=x*te,_(I,2*k+2*w+1),I[2*k+2*w+2]+=A*te,_(I,2*k+2*w+2)}for(E=0;E<y;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=y;E<2*y;E++)I[E]=0;return new o(I,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function b(E,y){this.g=E,this.h=y}function L(E,y){if(C(y))throw Error("division by zero");if(C(E))return new b(m,m);if(R(E))return y=L(P(E),y),new b(P(y.g),P(y.h));if(R(y))return y=L(E,P(y)),new b(P(y.g),y.h);if(E.g.length>30){if(R(E)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,k=y;k.l(E)<=0;)I=F(I),k=F(k);var w=B(I,1),A=B(k,1);for(k=B(k,2),I=B(I,2);!C(k);){var x=A.add(k);x.l(E)<=0&&(w=w.add(I),A=x),k=B(k,1),I=B(I,1)}return y=T(E,w.j(y)),new b(w,y)}for(w=m;E.l(y)>=0;){for(I=Math.max(1,Math.floor(E.m()/y.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),A=u(I),x=A.j(y);R(x)||x.l(E)>0;)I-=k,A=u(I),x=A.j(y);C(A)&&(A=g),w=w.add(A),E=T(E,x)}return new b(w,E)}t.B=function(E){return L(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let k=0;k<y;k++)I[k]=this.i(k)&E.i(k);return new o(I,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let k=0;k<y;k++)I[k]=this.i(k)|E.i(k);return new o(I,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let k=0;k<y;k++)I[k]=this.i(k)^E.i(k);return new o(I,this.h^E.h)};function F(E){const y=E.g.length+1,I=[];for(let k=0;k<y;k++)I[k]=E.i(k)<<1|E.i(k-1)>>>31;return new o(I,E.h)}function B(E,y){const I=y>>5;y%=32;const k=E.g.length-I,w=[];for(let A=0;A<k;A++)w[A]=y>0?E.i(A+I)>>>y|E.i(A+I+1)<<32-y:E.i(A+I);return new o(w,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,V0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=p,_r=o}).apply(typeof oy<"u"?oy:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var M0,io,j0,El,hd,F0,U0,z0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in f))break e;f=f[D]}a=a[a.length-1],v=f[a],h=h(v),h!=v&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&f.push([v,h[v]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,f){return a.call.apply(a.bind,arguments)}function u(a,h,f){return u=c,u.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(v,D,V){for(var G=Array(arguments.length-2),le=2;le<arguments.length;le++)G[le-2]=arguments[le];return h.prototype[D].apply(v,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const f=Array(h);for(let v=0;v<h;v++)f[v]=a[v];return f}return[]}function C(a,h){for(let v=1;v<arguments.length;v++){const D=arguments[v];var f=typeof D;if(f=f!="object"?f:D?Array.isArray(D)?"array":f:"null",f=="array"||f=="object"&&typeof D.length=="number"){f=a.length||0;const V=D.length||0;a.length=f+V;for(let G=0;G<V;G++)a[f+G]=D[G]}else a.push(D)}}class R{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function T(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const v=b.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var b=new R(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,B=!1,E=new _,y=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(I)}};function I(){for(var a;a=T();){try{a.h.call(a.g)}catch(f){P(f)}var h=b;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function x(a){return/^[\s\xa0]*$/.test(a)}function te(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(te,w),te.prototype.init=function(a,h){const f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var se="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function _e(a,h,f,v,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=D,this.key=++Ne,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function O(a,h,f){for(const v in a)h.call(f,a[v],v,a)}function N(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function M(a){const h={};for(const f in a)h[f]=a[f];return h}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(a,h){let f,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(f in v)a[f]=v[f];for(let V=0;V<q.length;V++)f=q[V],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function $(a){this.src=a,this.g={},this.h=0}$.prototype.add=function(a,h,f,v,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const G=ne(a,h,v,D);return G>-1?(h=a[G],f||(h.fa=!1)):(h=new _e(h,this.src,V,!!v,D),h.fa=f,a.push(h)),h};function K(a,h){const f=h.type;if(f in a.g){var v=a.g[f],D=Array.prototype.indexOf.call(v,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(v,D,1),V&&(W(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ne(a,h,f,v){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==v)return D}return-1}var ee="closure_lm_"+(Math.random()*1e6|0),pe={};function Lt(a,h,f,v,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Lt(a,h[V],f,v,D);return null}return f=kp(f),a&&a[se]?a.J(h,f,l(v)?!!v.capture:!1,D):Bt(a,h,f,!1,v,D)}function Bt(a,h,f,v,D,V){if(!h)throw Error("Invalid event type");const G=l(D)?!!D.capture:!!D;let le=nu(a);if(le||(a[ee]=le=new $(a)),f=le.add(h,f,v,G,V),f.proxy)return f;if(v=$t(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)A||(D=G),D===void 0&&(D=!1),a.addEventListener(h.toString(),v,D);else if(a.attachEvent)a.attachEvent(Ip(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $t(){function a(f){return h.call(a.src,a.listener,f)}const h=V1;return a}function xp(a,h,f,v,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)xp(a,h[V],f,v,D);else v=l(v)?!!v.capture:!!v,f=kp(f),a&&a[se]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=ne(h,f,v,D),f>-1&&(W(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=nu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ne(h,f,v,D)),(f=a>-1?h[a]:null)&&tu(f))}function tu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[se])K(h.i,a);else{var f=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(f,v,a.capture):h.detachEvent?h.detachEvent(Ip(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=nu(h))?(K(f,a),f.h==0&&(f.src=null,h[ee]=null)):W(a)}}}function Ip(a){return a in pe?pe[a]:pe[a]="on"+a}function V1(a,h){if(a.da)a=!0;else{h=new te(h,this);const f=a.listener,v=a.ha||a.src;a.fa&&tu(a),a=f.call(v,h)}return a}function nu(a){return a=a[ee],a instanceof $?a:null}var ru="__closure_events_fn_"+(Math.random()*1e9>>>0);function kp(a){return typeof a=="function"?a:(a[ru]||(a[ru]=function(h){return a.handleEvent(h)}),a[ru])}function rt(){k.call(this),this.i=new $(this),this.M=this,this.G=null}m(rt,k),rt.prototype[se]=!0,rt.prototype.removeEventListener=function(a,h,f,v){xp(this,a,h,f,v)};function dt(a,h){var f,v=a.G;if(v)for(f=[];v;v=v.G)f.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var D=h;h=new w(v,a),U(h,D)}D=!0;let V,G;if(f)for(G=f.length-1;G>=0;G--)V=h.g=f[G],D=_a(V,v,!0,h)&&D;if(V=h.g=a,D=_a(V,v,!0,h)&&D,D=_a(V,v,!1,h)&&D,f)for(G=0;G<f.length;G++)V=h.g=f[G],D=_a(V,v,!1,h)&&D}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let v=0;v<f.length;v++)W(f[v]);delete a.g[h],a.h--}}this.G=null},rt.prototype.J=function(a,h,f,v){return this.i.add(String(a),h,!1,f,v)},rt.prototype.K=function(a,h,f,v){return this.i.add(String(a),h,!0,f,v)};function _a(a,h,f,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const G=h[V];if(G&&!G.da&&G.capture==f){const le=G.listener,Be=G.ha||G.src;G.fa&&K(a.i,G),D=le.call(Be,v)!==!1&&D}}return D&&!v.defaultPrevented}function M1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Sp(a){a.g=M1(()=>{a.g=null,a.i&&(a.i=!1,Sp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class j1 extends k{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Sp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(a){k.call(this),this.h=a,this.g={}}m(Ss,k);var bp=[];function Ap(a){O(a.g,function(h,f){this.g.hasOwnProperty(f)&&tu(h)},a),a.g={}}Ss.prototype.N=function(){Ss.Z.N.call(this),Ap(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var iu=o.JSON.stringify,F1=o.JSON.parse,U1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Cp(){}function Rp(){}var bs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function su(){w.call(this,"d")}m(su,w);function ou(){w.call(this,"c")}m(ou,w);var Mr={},Pp=null;function wa(){return Pp=Pp||new rt}Mr.Ia="serverreachability";function Np(a){w.call(this,Mr.Ia,a)}m(Np,w);function As(a){const h=wa();dt(h,new Np(h))}Mr.STAT_EVENT="statevent";function Dp(a,h){w.call(this,Mr.STAT_EVENT,a),this.stat=h}m(Dp,w);function ft(a){const h=wa();dt(h,new Dp(h,a))}Mr.Ja="timingevent";function Lp(a,h){w.call(this,Mr.Ja,a),this.size=h}m(Lp,w);function Cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Rs(){this.g=!0}Rs.prototype.ua=function(){this.g=!1};function z1(a,h,f,v,D,V){a.info(function(){if(a.g)if(V){var G="",le=V.split("&");for(let we=0;we<le.length;we++){var Be=le[we].split("=");if(Be.length>1){const Ge=Be[0];Be=Be[1];const on=Ge.split("_");G=on.length>=2&&on[1]=="type"?G+(Ge+"="+Be+"&"):G+(Ge+"=redacted&")}}}else G=null;else G=V;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+f+`
`+G})}function B1(a,h,f,v,D,V,G){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+f+`
`+V+" "+G})}function wi(a,h,f,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+H1(a,f)+(v?" "+v:"")})}function $1(a,h){a.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function H1(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var v=f[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let G=1;G<v.length;G++)v[G]=""}}}}return iu(V)}catch{return h}}var Ea={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Op={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vp;function au(){}m(au,Cp),au.prototype.g=function(){return new XMLHttpRequest},Vp=new au;function Ps(a){return encodeURIComponent(String(a))}function W1(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Hn(a,h,f,v){this.j=a,this.i=h,this.l=f,this.S=v||1,this.V=new Ss(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Mp}function Mp(){this.i=null,this.g="",this.h=!1}var jp={},lu={};function cu(a,h,f){a.M=1,a.A=xa(sn(h)),a.u=f,a.R=!0,Fp(a,null)}function Fp(a,h){a.F=Date.now(),Ta(a),a.B=sn(a.A);var f=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Xp(f.i,"t",v),a.C=0,f=a.j.L,a.h=new Mp,a.g=gm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new j1(u(a.Y,a,a.g),a.P)),h=a.V,f=a.g,v=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(bp[0]=D.toString()),D=bp);for(let V=0;V<D.length;V++){const G=Lt(f,D[V],v||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.J?M(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),As(),z1(a.i,a.v,a.B,a.l,a.S,a.u)}Hn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Gn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const le=Gn(this.g),Be=this.g.ya(),we=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||sm(this.g)))){this.K||le!=4||Be==7||(Be==8||we<=0?As(3):As(2)),uu(this);var h=this.g.ca();this.X=h;var f=q1(this);if(this.o=h==200,B1(this.i,this.v,this.B,this.l,this.S,le,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(v)){var V=v;break t}}V=null}if(a=V)wi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hu(this,a);else{this.o=!1,this.m=3,ft(12),jr(this),Ns(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<f.length;)if(Ge=G1(this,f),Ge==lu){le==4&&(this.m=4,ft(14),a=!1),wi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==jp){this.m=4,ft(15),wi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else wi(this.i,this.l,Ge,null),hu(this,Ge);if(Up(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||f.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)wi(this.i,this.l,f,"[Invalid Chunked Response]"),jr(this),Ns(this);else if(f.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),_u(G),G.P=!0,ft(11))}}else wi(this.i,this.l,f,null),hu(this,f);le==4&&jr(this),this.o&&!this.K&&(le==4?dm(this.j,this):(this.o=!1,Ta(this)))}else aT(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),jr(this),Ns(this)}}}catch{}finally{}};function q1(a){if(!Up(a))return a.g.la();const h=sm(a.g);if(h==="")return"";let f="";const v=h.length,D=Gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return jr(a),Ns(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<v;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(D&&V==v-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Up(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function G1(a,h){var f=a.C,v=h.indexOf(`
`,f);return v==-1?lu:(f=Number(h.substring(f,v)),isNaN(f)?jp:(v+=1,v+f>h.length?lu:(h=h.slice(v,v+f),a.C=v+f,h)))}Hn.prototype.cancel=function(){this.K=!0,jr(this)};function Ta(a){a.T=Date.now()+a.H,zp(a,a.H)}function zp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Cs(u(a.aa,a),h)}function uu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Hn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?($1(this.i,this.B),this.M!=2&&(As(),ft(17)),jr(this),this.m=2,Ns(this)):zp(this,this.T-a)};function Ns(a){a.j.I==0||a.K||dm(a.j,a)}function jr(a){uu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ap(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function hu(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||du(f.h,a))){if(!a.L&&du(f.h,a)&&f.I==3){try{var v=f.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Aa(f),Sa(f);else break e;vu(f),ft(18)}}else f.xa=D[1],0<f.xa-f.K&&D[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Cs(u(f.Va,f),6e3));Hp(f.h)<=1&&f.ta&&(f.ta=void 0)}else Ur(f,11)}else if((a.L||f.g==a)&&Aa(f),!x(h))for(D=f.Ba.g.parse(h),h=0;h<D.length;h++){let we=D[h];const Ge=we[0];if(!(Ge<=f.K))if(f.K=Ge,we=we[1],f.I==2)if(we[0]=="c"){f.M=we[1],f.ba=we[2];const on=we[3];on!=null&&(f.ka=on,f.j.info("VER="+f.ka));const zr=we[4];zr!=null&&(f.za=zr,f.j.info("SVER="+f.za));const Kn=we[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(v=1.5*Kn,f.O=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Qn=a.g;if(Qn){const Ra=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ra){var V=v.h;V.g||Ra.indexOf("spdy")==-1&&Ra.indexOf("quic")==-1&&Ra.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(fu(V,V.h),V.h=null))}if(v.G){const wu=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(v.wa=wu,xe(v.J,v.G,wu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),v=f;var G=a;if(v.na=mm(v,v.L?v.ba:null,v.W),G.L){Wp(v.h,G);var le=G,Be=v.O;Be&&(le.H=Be),le.D&&(uu(le),Ta(le)),v.g=G}else um(v);f.i.length>0&&ba(f)}else we[0]!="stop"&&we[0]!="close"||Ur(f,7);else f.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Ur(f,7):yu(f):we[0]!="noop"&&f.l&&f.l.qa(we),f.A=0)}}As(4)}catch{}}var K1=class{constructor(a,h){this.g=a,this.map=h}};function Bp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $p(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hp(a){return a.h?1:a.g?a.g.size:0}function du(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fu(a,h){a.g?a.g.add(h):a.h=h}function Wp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bp.prototype.cancel=function(){if(this.i=qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return S(a.i)}var Gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q1(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const v=a[f].indexOf("=");let D,V=null;v>=0?(D=a[f].substring(0,v),V=a[f].substring(v+1)):D=a[f],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Wn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Wn?(this.l=a.l,Ds(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.u),this.h=a.h,pu(this,Zp(a.i)),this.m=a.m):a&&(h=String(a).match(Gp))?(this.l=!1,Ds(this,h[1]||"",!0),this.o=Os(h[2]||""),this.g=Os(h[3]||"",!0),Ls(this,h[4]),this.h=Os(h[5]||"",!0),pu(this,h[6]||"",!0),this.m=Os(h[7]||"")):(this.l=!1,this.i=new Ms(null,this.l))}Wn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Vs(h,Kp,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vs(h,Kp,!0),"@"),a.push(Ps(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Vs(f,f.charAt(0)=="/"?X1:J1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Vs(f,eT)),a.join("")},Wn.prototype.resolve=function(a){const h=sn(this);let f=!!a.j;f?Ds(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var v=a.h;if(f)Ls(h,a.u);else if(f=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=h.h.lastIndexOf("/");D!=-1&&(v=h.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let G=0;G<D.length;){const le=D[G++];le=="."?v&&G==D.length&&V.push(""):le==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),v&&G==D.length&&V.push("")):(V.push(le),v=!0)}v=V.join("/")}else v=D}return f?h.h=v:f=a.i.toString()!=="",f?pu(h,Zp(a.i)):f=!!a.m,f&&(h.m=a.m),h};function sn(a){return new Wn(a)}function Ds(a,h,f){a.j=f?Os(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function pu(a,h,f){h instanceof Ms?(a.i=h,tT(a.i,a.l)):(f||(h=Vs(h,Z1)),a.i=new Ms(h,a.l))}function xe(a,h,f){a.i.set(h,f)}function xa(a){return xe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Os(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Y1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Y1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kp=/[#\/\?@]/g,J1=/[#\?:]/g,X1=/[#\?]/g,Z1=/[#\?@]/g,eT=/#/g;function Ms(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fr(a){a.g||(a.g=new Map,a.h=0,a.i&&Q1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ms.prototype,t.add=function(a,h){Fr(this),this.i=null,a=Ei(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Qp(a,h){Fr(a),h=Ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Yp(a,h){return Fr(a),h=Ei(a,h),a.g.has(h)}t.forEach=function(a,h){Fr(this),this.g.forEach(function(f,v){f.forEach(function(D){a.call(h,D,v,this)},this)},this)};function Jp(a,h){Fr(a);let f=[];if(typeof h=="string")Yp(a,h)&&(f=f.concat(a.g.get(Ei(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Fr(this),this.i=null,a=Ei(this,a),Yp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Jp(this,a),a.length>0?String(a[0]):h):h};function Xp(a,h,f){Qp(a,h),f.length>0&&(a.i=null,a.g.set(Ei(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var f=h[v];const D=Ps(f);f=Jp(this,f);for(let V=0;V<f.length;V++){let G=D;f[V]!==""&&(G+="="+Ps(f[V])),a.push(G)}}return this.i=a.join("&")};function Zp(a){const h=new Ms;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function tT(a,h){h&&!a.j&&(Fr(a),a.i=null,a.g.forEach(function(f,v){const D=v.toLowerCase();v!=D&&(Qp(this,v),Xp(this,D,f))},a)),a.j=h}function nT(a,h){const f=new Rs;if(o.Image){const v=new Image;v.onload=p(qn,f,"TestLoadImage: loaded",!0,h,v),v.onerror=p(qn,f,"TestLoadImage: error",!1,h,v),v.onabort=p(qn,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=p(qn,f,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function rT(a,h){const f=new Rs,v=new AbortController,D=setTimeout(()=>{v.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(V=>{clearTimeout(D),V.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),qn(f,"TestPingServer: error",!1,h)})}function qn(a,h,f,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(f)}catch{}}function iT(){this.g=new U1}function mu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(mu,Cp),mu.prototype.g=function(){return new Ia(this.i,this.h)};function Ia(a,h){rt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ia,rt),t=Ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;em(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function em(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?js(this):Fs(this),this.readyState==3&&em(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,js(this))},t.Na=function(a){this.g&&(this.response=a,js(this))},t.ga=function(){this.g&&js(this)};function js(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Fs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function tm(a){let h="";return O(a,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function gu(a,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=tm(f),typeof a=="string"?f!=null&&Ps(f):xe(a,h,f))}function De(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(De,rt);var sT=/^https?$/i,oT=["POST","PUT"];t=De.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vp.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){nm(this,V);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)f.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())f.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(oT,h,void 0)>=0)||v||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){nm(this,V)}};function nm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,rm(a),ka(a)}function rm(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,dt(this,"complete"),dt(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),De.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?im(this):this.Xa())},t.Xa=function(){im(this)};function im(a){if(a.h&&typeof s<"u"){if(a.v&&Gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(dt(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=V===0){let G=String(a.D).match(Gp)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),v=!sT.test(G?G.toLowerCase():"")}f=v}if(f)dt(a,"complete"),dt(a,"success");else{a.o=6;try{var D=Gn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",rm(a)}}finally{ka(a)}}}}function ka(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||dt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),F1(h)}};function sm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aT(a){const h={};a=(a.g&&Gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(x(a[v]))continue;var f=W1(a[v]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[D]||[];h[D]=V,V.push(f)}N(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function om(a){this.za=0,this.i=[],this.j=new Rs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Us("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Us("baseRetryDelayMs",5e3,a),this.Za=Us("retryDelaySeedMs",1e4,a),this.Ta=Us("forwardChannelMaxRetries",2,a),this.va=Us("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Bp(a&&a.concurrentRequestLimit),this.Ba=new iT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=om.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,v){ft(0),this.W=a,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.J=mm(this,null,this.W),ba(this)};function yu(a){if(am(a),a.I==3){var h=a.V++,f=sn(a.J);if(xe(f,"SID",a.M),xe(f,"RID",h),xe(f,"TYPE","terminate"),zs(a,f),h=new Hn(a,a.j,h),h.M=2,h.A=xa(sn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=gm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ta(h)}pm(a)}function Sa(a){a.g&&(_u(a),a.g.cancel(),a.g=null)}function am(a){Sa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Aa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ba(a){if(!$p(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||y(),B||(F(),B=!0),E.add(h,a),a.D=0}}function lT(a,h){return Hp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Cs(u(a.Ea,a,h),fm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Hn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=M(V),U(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=cm(this,D,h),f=sn(this.J),xe(f,"RID",a),xe(f,"CVER",22),this.G&&xe(f,"X-HTTP-Session-Id",this.G),zs(this,f),V&&(this.R?h="headers="+Ps(tm(V))+"&"+h:this.u&&gu(f,this.u,V)),fu(this.h,D),this.Ra&&xe(f,"TYPE","init"),this.S?(xe(f,"$req",h),xe(f,"SID","null"),D.U=!0,cu(D,f,null)):cu(D,f,h),this.I=2}}else this.I==3&&(a?lm(this,a):this.i.length==0||$p(this.h)||lm(this))};function lm(a,h){var f;h?f=h.l:f=a.V++;const v=sn(a.J);xe(v,"SID",a.M),xe(v,"RID",f),xe(v,"AID",a.K),zs(a,v),a.u&&a.o&&gu(v,a.u,a.o),f=new Hn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=cm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fu(a.h,f),cu(f,v,h)}function zs(a,h){a.H&&O(a.H,function(f,v){xe(h,v,f)}),a.l&&O({},function(f,v){xe(h,v,f)})}function cm(a,h,f){f=Math.min(a.i.length,f);const v=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let le=-1;for(;;){const Be=["count="+f];le==-1?f>0?(le=D[0].g,Be.push("ofs="+le)):le=0:Be.push("ofs="+le);let we=!0;for(let Ge=0;Ge<f;Ge++){var V=D[Ge].g;const on=D[Ge].map;if(V-=le,V<0)le=Math.max(0,D[Ge].g-100),we=!1;else try{V="req"+V+"_"||"";try{var G=on instanceof Map?on:Object.entries(on);for(const[zr,Kn]of G){let Qn=Kn;l(Kn)&&(Qn=iu(Kn)),Be.push(V+zr+"="+encodeURIComponent(Qn))}}catch(zr){throw Be.push(V+"type="+encodeURIComponent("_badmap")),zr}}catch{v&&v(on)}}if(we){G=Be.join("&");break e}}G=void 0}return a=a.i.splice(0,f),h.G=a,G}function um(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||y(),B||(F(),B=!0),E.add(h,a),a.A=0}}function vu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Cs(u(a.Da,a),fm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,hm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Cs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),Sa(this),hm(this))};function _u(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function hm(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=sn(a.na);xe(h,"RID","rpc"),xe(h,"SID",a.M),xe(h,"AID",a.K),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&xe(h,"TO",a.ia),xe(h,"TYPE","xmlhttp"),zs(a,h),a.u&&a.o&&gu(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=xa(sn(h)),f.u=null,f.R=!0,Fp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Sa(this),vu(this),ft(19))};function Aa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function dm(a,h){var f=null;if(a.g==h){Aa(a),_u(a),a.g=null;var v=2}else if(du(a.h,h))f=h.G,Wp(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;v=wa(),dt(v,new Lp(v,f)),ba(a)}else um(a);else if(D=h.m,D==3||D==0&&h.X>0||!(v==1&&lT(a,h)||v==2&&vu(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function fm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var f=u(a.bb,a),v=a.Ua;const D=!v;v=new Wn(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ds(v,"https"),xa(v),D?nT(v.toString(),f):rT(v.toString(),f)}else ft(2);a.I=0,a.l&&a.l.pa(h),pm(a),am(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function pm(a){if(a.I=0,a.ja=[],a.l){const h=qp(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function mm(a,h,f){var v=f instanceof Wn?sn(f):new Wn(f);if(v.g!="")h&&(v.g=h+"."+v.g),Ls(v,v.u);else{var D=o.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new Wn(null);v&&Ds(V,v),h&&(V.g=h),D&&Ls(V,D),f&&(V.h=f),v=V}return f=a.G,h=a.wa,f&&h&&xe(v,f,h),xe(v,"VER",a.ka),zs(a,v),v}function gm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new De(new mu({ab:f})):new De(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ym(){}t=ym.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ca(){}Ca.prototype.g=function(a,h){return new kt(a,h)};function kt(a,h){rt.call(this),this.g=new om(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!x(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ti(this)}m(kt,rt),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){yu(this.g)},kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=iu(a),a=f);h.i.push(new K1(h.Ya++,a)),h.I==3&&ba(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,yu(this.g),delete this.g,kt.Z.N.call(this)};function vm(a){su.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(vm,su);function _m(){ou.call(this),this.status=1}m(_m,ou);function Ti(a){this.g=a}m(Ti,ym),Ti.prototype.ra=function(){dt(this.g,"a")},Ti.prototype.qa=function(a){dt(this.g,new vm(a))},Ti.prototype.pa=function(a){dt(this.g,new _m)},Ti.prototype.oa=function(){dt(this.g,"b")},Ca.prototype.createWebChannel=Ca.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,z0=function(){return new Ca},U0=function(){return wa()},F0=Mr,hd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,El=Ea,Op.COMPLETE="complete",j0=Op,Rp.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",rt.prototype.listen=rt.prototype.J,io=Rp,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,M0=De}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="12.8.0";function VA(t){_s=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Sf("@firebase/firestore");function ki(){return ci.logLevel}function Y(t,...e){if(ci.logLevel<=ue.DEBUG){const n=e.map(Mf);ci.debug(`Firestore (${_s}): ${t}`,...n)}}function Un(t,...e){if(ci.logLevel<=ue.ERROR){const n=e.map(Mf);ci.error(`Firestore (${_s}): ${t}`,...n)}}function as(t,...e){if(ci.logLevel<=ue.WARN){const n=e.map(Mf);ci.warn(`Firestore (${_s}): ${t}`,...n)}}function Mf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,B0(t,r,n)}function B0(t,e,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function ye(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||B0(e,i,r)}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FA{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new $0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class UA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class zA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new UA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ay(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ay(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=$A(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function dd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return eh(i)===eh(s)?he(i,s):eh(i)?1:-1}return he(t.length,e.length)}const HA=55296,WA=57343;function eh(t){const e=t.charCodeAt(0);return e>=HA&&e<=WA}function ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=un.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),i=un.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?un.extractNumericId(e).compare(un.extractNumericId(n)):dd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class Ee extends un{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const qA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends un{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return qA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ly}static keyField(){return new Ze([ly])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ee.fromString(e))}static fromName(e){return new Z(Ee.fromString(e).popFirst(5))}static empty(){return new Z(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e,n){if(!n)throw new Q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GA(t,e,n,r){if(e===!0&&r===!0)throw new Q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cy(t){if(!Z.isDocumentKey(t))throw new Q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uy(t){if(Z.isDocumentKey(t))throw new Q(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function W0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fc(t);throw new Q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function fa(t,e){if(!W0(t))throw new Q(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Q(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=-62135596800,dy=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dy);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hy)throw new Q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dy}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fa(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:ze("string",ke._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ke(0,0))}static max(){return new oe(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=-1;function KA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Ir(i,Z.empty(),e)}function QA(t){return new Ir(t.readTime,t.key,Ko)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(oe.min(),Z.empty(),Ko)}static max(){return new Ir(oe.max(),Z.empty(),Ko)}}function YA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==JA)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(p=>{o[u]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ZA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Uc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=-1;function zc(t){return t==null}function sc(t){return t===0&&1/t==-1/0}function eC(t){return typeof t=="number"&&Number.isInteger(t)&&!sc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="";function tC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fy(e)),e=nC(t.get(n),e);return fy(e)}function nC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case q0:n+="";break;default:n+=s}}return n}function fy(t){return t+q0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new We(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new K0("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const rC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=rC.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="server_timestamp",Y0="__type__",J0="__previous_value__",X0="__local_write_time__";function Uf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Y0])==null?void 0:r.stringValue)===Q0}function Bc(t){const e=t.mapValue.fields[J0];return Uf(e)?Bc(e):e}function Qo(t){const e=kr(t.mapValue.fields[X0].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i,s,o,l,c,u,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=p,this.apiKey=m}}const oc="(default)";class Yo{constructor(e,n){this.projectId=e,this.database=n||oc}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database===oc}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}function sC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="__type__",oC="__max__",Ja={mapValue:{}},eE="__vector__",ac="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uf(t)?4:lC(t)?9007199254740991:aC(t)?10:11:ie(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Sr(i.bytesValue).isEqual(Sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),l=Oe(s.doubleValue);return o===l?sc(o)===sc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(py(o)!==py(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!En(o[c],l[c])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function Jo(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Oe(s.integerValue||s.doubleValue),c=Oe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(Qo(t),Qo(e));case 5:return dd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Sr(s),c=Sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const p=he(l[u],c[u]);if(p!==0)return p}return he(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Oe(s.latitude),Oe(o.latitude));return l!==0?l:he(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,S,C,R;const l=s.fields||{},c=o.fields||{},u=(g=l[ac])==null?void 0:g.arrayValue,p=(S=c[ac])==null?void 0:S.arrayValue,m=he(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((R=p==null?void 0:p.values)==null?void 0:R.length)||0);return m!==0?m:yy(u,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ja.mapValue&&o===Ja.mapValue)return 0;if(s===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},p=Object.keys(u);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){const g=dd(c[m],p[m]);if(g!==0)return g;const S=cs(l[c[m]],u[p[m]]);if(S!==0)return S}return he(c.length,p.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=kr(t),r=kr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function yy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=cs(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function us(t){return fd(t)}function fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fd(n.fields[o])}`;return i+"}"}(t.mapValue):ie(61005,{value:t})}function Tl(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bc(t);return e?16+Tl(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Tl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Or(r.fields,(s,o)=>{i+=s.length+Tl(o)}),i}(t.mapValue);default:throw ie(13486,{value:t})}}function vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pd(t){return!!t&&"integerValue"in t}function zf(t){return!!t&&"arrayValue"in t}function _y(t){return!!t&&"nullValue"in t}function wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function aC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Z0])==null?void 0:r.stringValue)===eE}function To(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=To(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return{...t}}function lC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===oC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=To(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Or(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(To(this.value))}}function tE(t){const e=[];return Or(t.fields,(n,r)=>{const i=new Ze([n]);if(xl(r)){const s=tE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,oe.min(),oe.min(),oe.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,oe.min(),oe.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,oe.min(),oe.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function cC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{}class Ue extends nE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hC(e,n,r):n==="array-contains"?new pC(e,r):n==="in"?new mC(e,r):n==="not-in"?new gC(e,r):n==="array-contains-any"?new yC(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dC(e,r):new fC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cs(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends nE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rn(e,n)}matches(e){return rE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rE(t){return t.op==="and"}function iE(t){return uC(t)&&rE(t)}function uC(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function md(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+us(t.value);if(iE(t))return t.filters.map(e=>md(e)).join(",");{const e=t.filters.map(n=>md(n)).join(",");return`${t.op}(${e})`}}function sE(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&sE(o,i.filters[l]),!0):!1}(t,e):void ie(19439)}function oE(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(oE).join(" ,")+"}"}(t):"Filter"}class hC extends Ue{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class dC extends Ue{constructor(e,n){super(e,"in",n),this.keys=aE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fC extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=aE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class pC extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zf(n)&&Jo(n.arrayValue,this.value)}}class mC extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class gC extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Jo(this.value.arrayValue,n)}}class yC extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function xy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vC(t,e,n,r,i,s,o)}function Bf(t){const e=ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>md(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Te=n}return e.Te}function $f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ty(t.startAt,e.startAt)&&Ty(t.endAt,e.endAt)}function gd(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function _C(t,e,n,r,i,s,o,l){return new Ts(t,e,n,r,i,s,o,l)}function Hf(t){return new Ts(t)}function Iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wC(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function lE(t){return t.collectionGroup!==null}function xo(t){const e=ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(Ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Xo(s,r))}),n.has(Ze.keyField().canonicalString())||e.Ie.push(new Xo(Ze.keyField(),r))}return e.Ie}function yn(t){const e=ae(t);return e.Ee||(e.Ee=EC(e,xo(t))),e.Ee}function EC(t,e){if(t.limitType==="F")return xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xo(i.field,s)});const n=t.endAt?new lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lc(t.startAt.position,t.startAt.inclusive):null;return xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yd(t,e){const n=t.filters.concat([e]);return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function TC(t,e){const n=t.explicitOrderBy.concat([e]);return new Ts(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function vd(t,e,n){return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return $f(yn(t),yn(e))&&t.limitType===e.limitType}function cE(t){return`${Bf(yn(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oE(i)).join(", ")}]`),zc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=Ey(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,xo(r),i)||r.endAt&&!function(o,l,c){const u=Ey(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,xo(r),i))}(t,e)}function xC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uE(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=IC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IC(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?cs(c,u):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return G0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new Pe(Z.comparator);function zn(){return kC}const hE=new Pe(Z.comparator);function so(...t){let e=hE;for(const n of t)e=e.insert(n.key,n);return e}function dE(t){let e=hE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Io()}function fE(){return Io()}function Io(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const SC=new Pe(Z.comparator),bC=new We(Z.comparator);function de(...t){let e=bC;for(const n of t)e=e.add(n);return e}const AC=new We(he);function CC(){return AC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(e)?"-0":e}}function pE(t){return{integerValue:""+t}}function RC(t,e){return eC(e)?pE(e):Wf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this._=void 0}}function PC(t,e,n){return t instanceof Zo?function(i,s){const o={fields:{[Y0]:{stringValue:Q0},[X0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uf(s)&&(s=Bc(s)),s&&(o.fields[J0]=s),{mapValue:o}}(n,e):t instanceof ea?gE(t,e):t instanceof ta?yE(t,e):function(i,s){const o=mE(i,s),l=ky(o)+ky(i.Ae);return pd(o)&&pd(i.Ae)?pE(l):Wf(i.serializer,l)}(t,e)}function NC(t,e,n){return t instanceof ea?gE(t,e):t instanceof ta?yE(t,e):n}function mE(t,e){return t instanceof cc?function(r){return pd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zo extends Wc{}class ea extends Wc{constructor(e){super(),this.elements=e}}function gE(t,e){const n=vE(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Wc{constructor(e){super(),this.elements=e}}function yE(t,e){let n=vE(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class cc extends Wc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ky(t){return Oe(t.integerValue||t.doubleValue)}function vE(t){return zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this.field=e,this.transform=n}}function LC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ea&&i instanceof ea||r instanceof ta&&i instanceof ta?ls(r.elements,i.elements,En):r instanceof cc&&i instanceof cc?En(r.Ae,i.Ae):r instanceof Zo&&i instanceof Zo}(t.transform,e.transform)}class OC{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function _E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new EE(t.key,Zt.none()):new pa(t.key,t.data,Zt.none());{const n=t.data,r=wt.empty();let i=new We(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vr(t.key,r,new Ct(i.toArray()),Zt.none())}}function VC(t,e,n){t instanceof pa?function(i,s,o){const l=i.value.clone(),c=by(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(i,s,o){if(!Il(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=by(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(wE(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof pa?function(s,o,l,c){if(!Il(s.precondition,o))return l;const u=s.value.clone(),p=Ay(s.fieldTransforms,c,o);return u.setAll(p),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(s,o,l,c){if(!Il(s.precondition,o))return l;const u=Ay(s.fieldTransforms,c,o),p=o.data;return p.setAll(wE(s)),p.setAll(u),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Il(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function MC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mE(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function Sy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ls(r,i,(s,o)=>LC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vr extends qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function by(t,e,n){const r=new Map;ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,NC(o,l,n[i]))}return r}function Ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PC(s,o,e))}return r}class EE extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jC extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=_E(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>Sy(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>Sy(n,r))}}class qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return SC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,fe;function BC(t){switch(t){case j.OK:return ie(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function TE(t){if(t===void 0)return Un("GRPC error has no .code"),j.UNKNOWN;switch(t){case je.OK:return j.OK;case je.CANCELLED:return j.CANCELLED;case je.UNKNOWN:return j.UNKNOWN;case je.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case je.INTERNAL:return j.INTERNAL;case je.UNAVAILABLE:return j.UNAVAILABLE;case je.UNAUTHENTICATED:return j.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case je.NOT_FOUND:return j.NOT_FOUND;case je.ALREADY_EXISTS:return j.ALREADY_EXISTS;case je.PERMISSION_DENIED:return j.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case je.ABORTED:return j.ABORTED;case je.OUT_OF_RANGE:return j.OUT_OF_RANGE;case je.UNIMPLEMENTED:return j.UNIMPLEMENTED;case je.DATA_LOSS:return j.DATA_LOSS;default:return ie(39323,{code:t})}}(fe=je||(je={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new _r([4294967295,4294967295],0);function Cy(t){const e=$C().encode(t),n=new V0;return n.update(e),new Uint8Array(n.digest())}function Ry(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _r([n,r],0),new _r([i,s],0)]}class Gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oo(`Invalid padding: ${n}`);if(r<0)throw new oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(_r.fromNumber(r)));return i.compare(HC)===1&&(i=new _r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cy(e),[r,i]=Ry(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Cy(e),[r,i]=Ry(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gc(oe.min(),i,new Pe(he),zn(),de())}}class ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ma(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class xE{constructor(e,n){this.targetId=e,this.Ce=n}}class IE{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Py{constructor(){this.ve=0,this.Fe=Ny(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie(38017,{changeType:s})}}),new ma(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ny()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WC{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.He=Xa(),this.Je=Xa(),this.Ze=new Pe(he)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(gd(s))if(r===0){const o=new Z(s.path);this.et(n,o,ct.newNoDocument(o,oe.min()))}else ye(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof K0)return as("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Gf(o,i,s)}catch(c){return as(c instanceof oo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&gd(l.target)){const c=new Z(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,ct.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=de();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Gc(e,n,this.Ze,this.je,r);return this.je=zn(),this.He=Xa(),this.Je=Xa(),this.Ze=new Pe(he),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Py,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new We(he),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new We(he),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Py),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new Pe(Z.comparator)}function Ny(){return new Pe(Z.comparator)}const qC={asc:"ASCENDING",desc:"DESCENDING"},GC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KC={and:"AND",or:"OR"};class QC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||zc(e)?e:{value:e}}function uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YC(t,e){return uc(t,e.toTimestamp())}function vn(t){return ye(!!t,49232),oe.fromTimestamp(function(n){const r=kr(n);return new ke(r.seconds,r.nanos)}(t))}function Kf(t,e){return wd(t,e).canonicalString()}function wd(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function SE(t){const e=Ee.fromString(t);return ye(PE(e),10190,{key:e.toString()}),e}function Ed(t,e){return Kf(t.databaseId,e.path)}function th(t,e){const n=SE(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(AE(n))}function bE(t,e){return Kf(t.databaseId,e)}function JC(t){const e=SE(t);return e.length===4?Ee.emptyPath():AE(e)}function Td(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AE(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dy(t,e,n){return{name:Ed(t,e),fields:n.value.mapValue.fields}}function XC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,p){return u.useProto3Json?(ye(p===void 0||typeof p=="string",58123),nt.fromBase64String(p||"")):(ye(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),nt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const p=u.code===void 0?j.UNKNOWN:TE(u.code);return new Q(p,u.message||"")}(o);n=new IE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=th(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):oe.min(),l=new wt({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(i,s,o,l),u=r.targetIds||[],p=r.removedTargetIds||[];n=new kl(u,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=th(t,r.document),s=r.readTime?vn(r.readTime):oe.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new kl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=th(t,r.document),s=r.removedTargetIds||[];n=new kl([],s,i,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zC(i,s),l=r.targetId;n=new xE(l,o)}}return n}function ZC(t,e){let n;if(e instanceof pa)n={update:Dy(t,e.key,e.value)};else if(e instanceof EE)n={delete:Ed(t,e.key)};else if(e instanceof Vr)n={update:Dy(t,e.key,e.data),updateMask:lR(e.fieldMask)};else{if(!(e instanceof jC))return ie(16599,{dt:e.type});n={verify:Ed(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie(27497)}(t,e.precondition)),n}function eR(t,e){return t&&t.length>0?(ye(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(oe.min())&&(o=vn(s)),new OC(o,i.transformResults||[])}(n,e))):[]}function tR(t,e){return{documents:[bE(t,e.path)]}}function nR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bE(t,i);const s=function(u){if(u.length!==0)return RE(rn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(p=>function(g){return{field:bi(g.field),direction:sR(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=_d(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function rR(t){let e=JC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=CE(m);return g instanceof rn&&iE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new Xo(Ai(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,zc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,S=m.values||[];return new lc(S,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,S=m.values||[];return new lc(S,g)}(n.endAt)),_C(e,i,o,s,l,"F",c,u)}function iR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function CE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ai(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ai(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ai(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ai(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Ai(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>CE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function sR(t){return qC[t]}function oR(t){return GC[t]}function aR(t){return KC[t]}function bi(t){return{fieldPath:t.canonicalString()}}function Ai(t){return Ze.fromServerFormat(t.fieldPath)}function RE(t){return t instanceof Ue?function(n){if(n.op==="=="){if(wy(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NAN"}};if(_y(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wy(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NAN"}};if(_y(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bi(n.field),op:oR(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>RE(i));return r.length===1?r[0]:{compositeFilter:{op:aR(n.op),filters:r}}}(t):ie(54877,{filter:t})}function lR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function NE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),l=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.yt=e}}function uR(t){const e=rR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.Sn=new dR}addToCollectionParentIndex(e,n){return this.Sn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Ir.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class dR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DE=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(DE,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new hs(0)}static ar(){return new hs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="LruGarbageCollector",fR=1048576;function Vy([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class pR{constructor(e){this.Pr=e,this.buffer=new We(Vy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Y(Oy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?Y(Oy,"Ignoring IndexedDB error during garbage collection: ",n):await ws(n)}await this.Ar(3e5)})}}class gR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Uc.ce);const r=new pR(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ly):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,c,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),ki()<=ue.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-p}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function yR(t,e){return new gR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ko(r.mutation,i,Ct.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=so();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=zn();const o=Io(),l=function(){return Io()}();return n.forEach((c,u)=>{const p=r.get(u.key);i.has(u.key)&&(p===void 0||p.mutation instanceof Vr)?s=s.insert(u.key,u):p!==void 0?(o.set(u.key,p.mutation.getFieldMask()),ko(p.mutation,u,p.mutation.getFieldMask(),ke.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,p)=>o.set(u,p)),n.forEach((u,p)=>l.set(u,new _R(p,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new Pe((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let p=r.get(c)||Ct.empty();p=l.applyToLocalView(u,p),r.set(c,p);const m=(i.get(l.batchId)||de()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,p=c.value,m=fE();p.forEach(g=>{if(!s.has(g)){const S=_E(n.get(g),r.get(g));S!==null&&m.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return wC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(Yr());let l=Ko,c=s;return o.next(u=>z.forEach(u,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?z.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{c=c.insert(p,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,de())).next(p=>({batchId:l,changes:dE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=so();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=so();return this.indexManager.getCollectionParents(e,s).next(l=>z.forEach(l,c=>{const u=function(m,g){return new Ts(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const p=u.getKey();o.get(p)===null&&(o=o.insert(p,ct.newInvalidDocument(p)))});let l=so();return o.forEach((c,u)=>{const p=s.get(c);p!==void 0&&ko(p.mutation,u,Ct.empty(),ke.now()),Hc(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return z.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:uR(i.bundledQuery),readTime:vn(i.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.overlays=new Pe(Z.comparator),this.Lr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new Z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,p)=>u-p);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let p=s.get(u.largestBatchId);p===null&&(p=Yr(),s=s.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const l=Yr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,p)=>l.set(u,p)),!(l.size()>=i)););return z.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UC(n,r));let s=this.Lr.get(n);s===void 0&&(s=de(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.kr=new We(Ke.Kr),this.qr=new We(Ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ke(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Z(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Z(new Ee([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=de();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Z.comparator(e.key,n.key)||he(e.Hr,n.Hr)}static Ur(e,n){return he(e.Hr,n.Hr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new We(Ke.Kr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Ff:this.Yn-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(he);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new Z(s),0);let l=new We(he);return this.Jr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Hr)),!0)},o),z.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return z.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ke(n,0),i=this.Jr.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ti=e,this.docs=function(){return new Pe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zn();const o=n.path,l=new Z(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:p}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YA(QA(p),r)<=0||(i.has(p.key)||Hc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie(9500)}ni(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return z.resolve(this.size)}}class SR extends vR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.persistence=e,this.ri=new yi(n=>Bf(n),$f),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new Qf,this.targetCount=0,this.oi=hs._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),z.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.lr(n),z.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this._i={},this.overlays={},this.ai=new Uc(0),this.ui=!1,this.ui=!0,this.ci=new xR,this.referenceDelegate=e(this),this.li=new bR(this),this.indexManager=new hR,this.remoteDocumentCache=function(i){return new kR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new cR(n),this.Pi=new ER(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new IR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new AR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return z.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class AR extends XA{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Ri=new Qf,this.Ai=null}static Vi(e){return new Yf(e)}get di(){if(this.Ai)return this.Ai;throw ie(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const i=Z.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return z.or([()=>z.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class hc{constructor(e,n){this.persistence=e,this.fi=new yi(r=>tC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=yR(this,n)}static Vi(e,n){return new hc(e,n)}Ti(){}Ii(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return z.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?z.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,oe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),z.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Tl(e.data.value)),n}wr(e,n,r){return z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return tk()?8:ZA(ht())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CR;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ki()<=ue.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(ki()<=ue.DEBUG&&Y("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ki()<=ue.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):z.resolve())}gs(e,n){if(Iy(n))return z.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vd(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(n,l);return this.Ss(n,u,o,c.readTime)?this.gs(e,vd(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,i){return Iy(n)||i.isEqual(oe.min())?z.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?z.resolve(null):(ki()<=ue.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.Ds(e,o,n,KA(i,Ko)).next(l=>l))})}bs(e,n){let r=new We(uE(e));return n.forEach((i,s)=>{Hc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ki()<=ue.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Si(n)),this.fs.getDocumentsMatchingQuery(e,n,Ir.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="LocalStore",PR=3e8;class NR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(he),this.Fs=new yi(s=>Bf(s),$f),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function DR(t,e,n,r){return new NR(t,e,n,r)}async function OE(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=de();for(const u of i){o.push(u.batchId);for(const p of u.mutations)c=c.add(p.key)}for(const u of s){l.push(u.batchId);for(const p of u.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function LR(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,p){const m=u.batch,g=m.keys();let S=z.resolve();return g.forEach(C=>{S=S.next(()=>p.getEntry(c,C)).next(R=>{const P=u.docVersions.get(C);ye(P!==null,48541),R.version.compareTo(P)<0&&(m.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),p.addEntry(R)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VE(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function OR(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,p.addedDocuments,m)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(nt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(m,S),function(R,P,T){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=PR?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,S,p)&&l.push(n.li.updateTargetData(s,S))});let c=zn(),u=de();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(VR(s,o,e.documentUpdates).next(p=>{c=p.Bs,u=p.Ls})),!r.isEqual(oe.min())){const p=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return z.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.vs=i,s))}function VR(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zn();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Y(Xf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:i}})}function MR(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ff),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jR(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function xd(t,e,n){const r=ae(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Es(o))throw o;Y(Xf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function My(t,e,n){const r=ae(t);let i=oe.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,p){const m=ae(c),g=m.Fs.get(p);return g!==void 0?z.resolve(m.vs.get(g)):m.li.getTargetData(u,p)}(r,o,yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:de())).next(l=>(FR(r,xC(e),l),{documents:l,ks:s})))}function FR(t,e,n){let r=t.Ms.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class jy{constructor(){this.activeTargetIds=CC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UR{constructor(){this.vo=new jy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="ConnectivityMonitor";class Uy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Y(Fy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Y(Fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;function Id(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="RestConnection",BR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $R{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===oc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Id(),l=this.Qo(e,n.toUriEncodedString());Y(nh,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,i,s);const{host:u}=new URL(l),p=pi(u);return this.zo(e,l,c,r,p).then(m=>(Y(nh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw as(nh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=BR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection",Ys=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ji extends $R{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ji.c_){const e=U0();Ys(e,F0.STAT_EVENT,n=>{n.stat===hd.PROXY?Y(ot,"STAT_EVENT: detected buffering proxy"):n.stat===hd.NOPROXY&&Y(ot,"STAT_EVENT: detected no buffering proxy")}),Ji.c_=!0}}zo(e,n,r,i,s){const o=Id();return new Promise((l,c)=>{const u=new M0;u.setWithCredentials(!0),u.listenOnce(j0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case El.NO_ERROR:const m=u.getResponseJson();Y(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case El.TIMEOUT:Y(ot,`RPC '${e}' ${o} timed out`),c(new Q(j.DEADLINE_EXCEEDED,"Request time out"));break;case El.HTTP_ERROR:const g=u.getStatus();if(Y(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let S=u.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const R=function(T){const _=T.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(C.status);c(new Q(R,C.message))}else c(new Q(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Q(j.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Y(ot,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);Y(ot,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Id(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");Y(ot,`Creating RPC '${e}' stream ${i}: ${u}`,l);const p=o.createWebChannel(u,l);this.I_(p);let m=!1,g=!1;const S=new HR({Ho:C=>{g?Y(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(Y(ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Y(ot,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Jo:()=>p.close()});return Ys(p,io.EventType.OPEN,()=>{g||(Y(ot,`RPC '${e}' stream ${i} transport opened.`),S.i_())}),Ys(p,io.EventType.CLOSE,()=>{g||(g=!0,Y(ot,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.E_(p))}),Ys(p,io.EventType.ERROR,C=>{g||(g=!0,as(ot,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),S.o_(new Q(j.UNAVAILABLE,"The operation could not be completed")))}),Ys(p,io.EventType.MESSAGE,C=>{var R;if(!g){const P=C.data[0];ye(!!P,16349);const T=P,_=(T==null?void 0:T.error)||((R=T[0])==null?void 0:R.error);if(_){Y(ot,`RPC '${e}' stream ${i} received error:`,_);const b=_.status;let L=function(E){const y=je[E];if(y!==void 0)return TE(y)}(b),F=_.message;L===void 0&&(L=j.INTERNAL,F="Unknown error status: "+b+" with message "+_.message),g=!0,S.o_(new Q(L,F)),p.close()}else Y(ot,`RPC '${e}' stream ${i} received:`,P),S.__(P)}}),Ji.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return z0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){return new Ji(t)}function rh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){return new QC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.c_=!1;class ME{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="PersistentStream";class jE{constructor(e,n,r,i,s,o,l,c){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ME(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Y(zy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Y(zy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qR extends jE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=XC(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?vn(o.readTime):oe.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Td(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=gd(c)?{documents:tR(s,c)}:{query:nR(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kE(s,o.resumeToken);const u=_d(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=uc(s,o.snapshotVersion.toTimestamp());const u=_d(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=iR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Td(this.serializer),n.removeTarget=e,this.K_(n)}}class GR extends jE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=eR(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Td(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZC(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{}class QR extends KR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,wd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(j.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,wd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function YR(t,e,n,r){return new QR(t,e,n,r)}class JR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Un(n),this.aa=!1):Y("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="RemoteStore";class XR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{vi(this)&&(Y(ui,"Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.Ea.add(4),await ga(u),u.Va.set("Unknown"),u.Ea.delete(4),await Qc(u)}(this))})}),this.Va=new JR(r,i)}}async function Qc(t){if(vi(t))for(const e of t.Ra)await e(!0)}async function ga(t){for(const e of t.Ra)await e(!1)}function FE(t,e){const n=ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),np(n)?tp(n):xs(n).O_()&&ep(n,e))}function Zf(t,e){const n=ae(t),r=xs(n);n.Ia.delete(e),r.O_()&&UE(n,e),n.Ia.size===0&&(r.O_()?r.L_():vi(n)&&n.Va.set("Unknown"))}function ep(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).Z_(e)}function UE(t,e){t.da.$e(e),xs(t).X_(e)}function tp(t){t.da=new WC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.Va.ua()}function np(t){return vi(t)&&!xs(t).x_()&&t.Ia.size>0}function vi(t){return ae(t).Ea.size===0}function zE(t){t.da=void 0}async function ZR(t){t.Va.set("Online")}async function e2(t){t.Ia.forEach((e,n)=>{ep(t,e)})}async function t2(t,e){zE(t),np(t)?(t.Va.ha(e),tp(t)):t.Va.set("Unknown")}async function n2(t,e,n){if(t.Va.set("Online"),e instanceof IE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){Y(ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dc(t,r)}else if(e instanceof kl?t.da.Xe(e):e instanceof xE?t.da.st(e):t.da.tt(e),!n.isEqual(oe.min()))try{const r=await VE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ia.get(u);p&&s.Ia.set(u,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const p=s.Ia.get(c);if(!p)return;s.Ia.set(c,p.withResumeToken(nt.EMPTY_BYTE_STRING,p.snapshotVersion)),UE(s,c);const m=new lr(p.target,c,u,p.sequenceNumber);ep(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y(ui,"Failed to raise snapshot:",r),await dc(t,r)}}async function dc(t,e,n){if(!Es(e))throw e;t.Ea.add(1),await ga(t),t.Va.set("Offline"),n||(n=()=>VE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(ui,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qc(t)})}function BE(t,e){return e().catch(n=>dc(t,n,e))}async function Yc(t){const e=ae(t),n=Ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ff;for(;r2(e);)try{const i=await MR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,i2(e,i)}catch(i){await dc(e,i)}$E(e)&&HE(e)}function r2(t){return vi(t)&&t.Ta.length<10}function i2(t,e){t.Ta.push(e);const n=Ar(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function $E(t){return vi(t)&&!Ar(t).x_()&&t.Ta.length>0}function HE(t){Ar(t).start()}async function s2(t){Ar(t).ra()}async function o2(t){const e=Ar(t);for(const n of t.Ta)e.ea(n.mutations)}async function a2(t,e,n){const r=t.Ta.shift(),i=qf.from(r,e,n);await BE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yc(t)}async function l2(t,e){e&&Ar(t).Y_&&await async function(r,i){if(function(o){return BC(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();Ar(r).B_(),await BE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yc(r)}}(t,e),$E(t)&&HE(t)}async function By(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),Y(ui,"RemoteStore received new credentials");const r=vi(n);n.Ea.add(3),await ga(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qc(n)}async function c2(t,e){const n=ae(t);e?(n.Ea.delete(2),await Qc(n)):e||(n.Ea.add(2),await ga(n),n.Va.set("Unknown"))}function xs(t){return t.ma||(t.ma=function(n,r,i){const s=ae(n);return s.sa(),new qR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:ZR.bind(null,t),Yo:e2.bind(null,t),t_:t2.bind(null,t),J_:n2.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),np(t)?tp(t):t.Va.set("Unknown")):(await t.ma.stop(),zE(t))})),t.ma}function Ar(t){return t.fa||(t.fa=function(n,r,i){const s=ae(n);return s.sa(),new GR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:s2.bind(null,t),t_:l2.bind(null,t),ta:o2.bind(null,t),na:a2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Yc(t)):(await t.fa.stop(),t.Ta.length>0&&(Y(ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new rp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Es(t))return new Q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{static emptySet(e){return new Xi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.ga=new Pe(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ds(e,n,Xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class h2{constructor(){this.queries=Hy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=Hy(),s.forEach((o,l)=>{for(const c of l.ba)c.onError(r)})})(this,new Q(j.ABORTED,"Firestore shutting down"))}}function Hy(){return new yi(t=>cE(t),$c)}async function WE(t,e){const n=ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new u2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ip(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&sp(n)}async function qE(t,e){const n=ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function d2(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&sp(n)}function f2(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function sp(t){t.Ca.forEach(e=>{e.next()})}var kd,Wy;(Wy=kd||(kd={})).Ma="default",Wy.Cache="cache";class GE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.key=e}}class QE{constructor(e){this.key=e}}class p2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.eu=uE(e),this.tu=new Xi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new $y,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const g=i.get(p),S=Hc(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),R=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;g&&S?g.data.isEqual(S.data)?C!==R&&(r.track({type:3,doc:S}),P=!0):this.su(g,S)||(r.track({type:2,doc:S}),P=!0,(c&&this.eu(S,c)>0||u&&this.eu(S,u)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),P=!0):g&&!S&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(S?(o=o.add(S),s=R?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(S,C){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:P})}};return R(S)-R(C)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Ya.size===0&&this.current&&!i?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new ds(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $y,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new QE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new KE(r))}),n}cu(e){this.Za=e.ks,this.Ya=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ds.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const op="SyncEngine";class m2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class g2{constructor(e){this.key=e,this.hu=!1}}class y2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi(l=>cE(l),$c),this.Iu=new Map,this.Eu=new Set,this.Ru=new Pe(Z.comparator),this.Au=new Map,this.Vu=new Qf,this.du={},this.mu=new Map,this.fu=hs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function v2(t,e,n=!0){const r=t1(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await YE(r,e,n,!0),i}async function _2(t,e){const n=t1(t);await YE(n,e,!0,!1)}async function YE(t,e,n,r){const i=await jR(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await w2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&FE(t.remoteStore,i),l}async function w2(t,e,n,r,i){t.pu=(m,g,S)=>async function(R,P,T,_){let b=P.view.ru(T);b.Ss&&(b=await My(R.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,b)));const L=_&&_.targetChanges.get(P.targetId),F=_&&_.targetMismatches.get(P.targetId)!=null,B=P.view.applyChanges(b,R.isPrimaryClient,L,F);return Gy(R,P.targetId,B.au),B.snapshot}(t,m,g,S);const s=await My(t.localStore,e,!0),o=new p2(e,s.ks),l=o.ru(s.documents),c=ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Gy(t,n,u.au);const p=new m2(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function E2(t,e,n){const r=ae(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!$c(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zf(r.remoteStore,i.targetId),Sd(r,i.targetId)}).catch(ws)):(Sd(r,i.targetId),await xd(r.localStore,i.targetId,!0))}async function T2(t,e){const n=ae(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zf(n.remoteStore,r.targetId))}async function x2(t,e,n){const r=R2(t);try{const i=await function(o,l){const c=ae(o),u=ke.now(),p=l.reduce((S,C)=>S.add(C.key),de());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=zn(),R=de();return c.xs.getEntries(S,p).next(P=>{C=P,C.forEach((T,_)=>{_.isValidDocument()||(R=R.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,C)).next(P=>{m=P;const T=[];for(const _ of l){const b=MC(_,m.get(_.key).overlayedDocument);b!=null&&T.push(new Vr(_.key,b,tE(b.value.mapValue),Zt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,u,T,l)}).next(P=>{g=P;const T=P.applyToLocalDocumentSet(m,R);return c.documentOverlayCache.saveOverlays(S,P.batchId,T)})}).then(()=>({batchId:g.batchId,changes:dE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Pe(he)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,i.batchId,n),await ya(r,i.changes),await Yc(r.remoteStore)}catch(i){const s=ip(i,"Failed to persist write");n.reject(s)}}async function JE(t,e){const n=ae(t);try{const r=await OR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ye(o.hu,14607):i.removedDocuments.size>0&&(ye(o.hu,42227),o.hu=!1))}),await ya(n,r,e)}catch(r){await ws(r)}}function qy(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=ae(o);c.onlineState=l;let u=!1;c.queries.forEach((p,m)=>{for(const g of m.ba)g.va(l)&&(u=!0)}),u&&sp(c)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I2(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Pe(Z.comparator);o=o.insert(s,ct.newNoDocument(s,oe.min()));const l=de().add(s),c=new Gc(oe.min(),new Map,new Pe(he),o,l);await JE(r,c),r.Ru=r.Ru.remove(s),r.Au.delete(e),ap(r)}else await xd(r.localStore,e,!1).then(()=>Sd(r,e,n)).catch(ws)}async function k2(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await LR(n.localStore,e);ZE(n,r,null),XE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ya(n,i)}catch(i){await ws(i)}}async function S2(t,e,n){const r=ae(t);try{const i=await function(o,l){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let p;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(ye(m!==null,37113),p=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p)).next(()=>c.localDocuments.getDocuments(u,p))})}(r.localStore,e);ZE(r,e,n),XE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ya(r,i)}catch(i){await ws(i)}}function XE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ZE(t,e,n){const r=ae(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Sd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||e1(t,r)})}function e1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Zf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ap(t))}function Gy(t,e,n){for(const r of n)r instanceof KE?(t.Vu.addReference(r.key,e),b2(t,r)):r instanceof QE?(Y(op,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||e1(t,r.key)):ie(19791,{wu:r})}function b2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(Y(op,"New document in limbo: "+n),t.Eu.add(r),ap(t))}function ap(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Z(Ee.fromString(e)),r=t.fu.next();t.Au.set(r,new g2(n)),t.Ru=t.Ru.insert(n,r),FE(t.remoteStore,new lr(yn(Hf(n.path)),r,"TargetPurposeLimboResolution",Uc.ce))}}async function ya(t,e,n){const r=ae(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var p;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(p=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=Jf.Es(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(c,u){const p=ae(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>z.forEach(u,g=>z.forEach(g.Ts,S=>p.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>z.forEach(g.Is,S=>p.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Es(m))throw m;Y(Xf,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const S=p.vs.get(g),C=S.snapshotVersion,R=S.withLastLimboFreeSnapshotVersion(C);p.vs=p.vs.insert(g,R)}}}(r.localStore,s))}async function A2(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Y(op,"User change. New user:",e.toKey());const r=await OE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new Q(j.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ya(n,r.Ns)}}function C2(t,e){const n=ae(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function t1(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I2.bind(null,e),e.Pu.J_=d2.bind(null,e.eventManager),e.Pu.yu=f2.bind(null,e.eventManager),e}function R2(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=k2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S2.bind(null,e),e}class fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return DR(this.persistence,new RR,e.initialUser,this.serializer)}Cu(e){return new LE(Yf.Vi,this.serializer)}Du(e){return new UR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fc.provider={build:()=>new fc};class P2 extends fc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof hc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new LE(r=>hc.Vi(r,n),this.serializer)}}class bd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A2.bind(null,this.syncEngine),await c2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h2}()}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=WR(e.databaseInfo);return YR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new XR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qy(this.syncEngine,n,0),function(){return Uy.v()?new Uy:new zR}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,p){const m=new y2(i,s,o,l,c,u);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);Y(ui,"RemoteStore shutting down."),s.Ea.add(5),await ga(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}bd.provider={build:()=>new bd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="FirestoreClient";class N2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y(Cr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y(Cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ih(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ky(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D2(t);Y(Cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>By(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>By(e.remoteStore,i)),t._onlineComponents=e}async function D2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Cr,"Using user provided OfflineComponentProvider");try{await ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await ih(t,new fc)}}else Y(Cr,"Using default OfflineComponentProvider"),await ih(t,new P2(void 0));return t._offlineComponents}async function r1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Cr,"Using user provided OnlineComponentProvider"),await Ky(t,t._uninitializedComponentsProvider._online)):(Y(Cr,"Using default OnlineComponentProvider"),await Ky(t,new bd))),t._onlineComponents}function L2(t){return r1(t).then(e=>e.syncEngine)}async function i1(t){const e=await r1(t),n=e.eventManager;return n.onListen=v2.bind(null,e.syncEngine),n.onUnlisten=E2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=T2.bind(null,e.syncEngine),n}function O2(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const p=new n1({next:g=>{p.Nu(),o.enqueueAndForget(()=>qE(s,m));const S=g.docs.has(l);!S&&g.fromCache?u.reject(new Q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&c&&c.source==="server"?u.reject(new Q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new GE(Hf(l.path),p,{includeMetadataChanges:!0,Ka:!0});return WE(s,m)}(await i1(t),t.asyncQueue,e,n,r)),r.promise}function V2(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const p=new n1({next:g=>{p.Nu(),o.enqueueAndForget(()=>qE(s,m)),g.fromCache&&c.source==="server"?u.reject(new Q(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new GE(l,p,{includeMetadataChanges:!0,Ka:!0});return WE(s,m)}(await i1(t),t.asyncQueue,e,n,r)),r.promise}function M2(t,e){const n=new Dn;return t.asyncQueue.enqueueAndForget(async()=>x2(await L2(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="ComponentProvider",Qy=new Map;function F2(t,e,n,r,i){return new iC(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,s1(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firestore.googleapis.com",Yy=!0;class Jy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=o1,this.ssl=Yy}else this.host=e.host,this.ssl=e.ssl??Yy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fR)throw new Q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MA;switch(r.type){case"firstParty":return new zA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qy.get(n);r&&(Y(j2,"Removing Datastore"),Qy.delete(n),r.terminate())}(this),Promise.resolve()}}function U2(t,e,n,r={}){var u;t=wn(t,Jc);const i=pi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(If(`https://${l}`),kf("Firestore",!0)),s.host!==o1&&s.host!==l&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!si(c,o)&&(t._setSettings(c),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=at.MOCK_USER;else{p=Yw(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new at(g)}t._authCredentials=new jA(new $0(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fa(n,Me._jsonSchema))return new Me(e,r||null,new Z(Ee.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:ze("string",Me._jsonSchemaVersion),referencePath:ze("string")};class wr extends _i{constructor(e,n,r){super(e,n,Hf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Z(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function Ii(t,e,...n){if(t=qe(t),H0("collection","path",e),t instanceof Jc){const r=Ee.fromString(e,...n);return uy(r),new wr(t,null,r)}{if(!(t instanceof Me||t instanceof wr))throw new Q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return uy(r),new wr(t.firestore,null,r)}}function ao(t,e,...n){if(t=qe(t),arguments.length===1&&(e=jf.newId()),H0("doc","path",e),t instanceof Jc){const r=Ee.fromString(e,...n);return cy(r),new Me(t,null,new Z(r))}{if(!(t instanceof Me||t instanceof wr))throw new Q(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return cy(r),new Me(t.firestore,t instanceof wr?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="AsyncQueue";class Zy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ME(this,"async_queue_retry"),this._c=()=>{const r=rh();r&&Y(Xy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Es(e))throw e;Y(Xy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Un("INTERNAL UNHANDLED ERROR: ",ev(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=rp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ie(47125,{Pc:ev(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ev(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Is extends Jc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Zy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zy(e),this._firestoreClient=void 0,await e}}}function z2(t,e){const n=typeof t=="object"?t:Af(),r=typeof t=="string"?t:oc,i=Oc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gw("firestore");s&&U2(i,...s)}return i}function lp(t){if(t._terminated)throw new Q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||B2(t),t._firestoreClient}function B2(t){var r,i,s,o;const e=t._freezeSettings(),n=F2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new N2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(nt.fromBase64String(e))}catch(n){throw new Q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fa(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:ze("string",Mt._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_n._jsonSchemaVersion}}static fromJSON(e){if(fa(e,_n._jsonSchema))return new _n(e.latitude,e.longitude)}}_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:ze("string",_n._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fa(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new en(e.vectorValues);throw new Q(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:ze("string",en._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=/^__.*__$/;class H2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class a1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function l1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{dataSource:t})}}class up{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new up({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return pc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(l1(this.dataSource)&&$2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class W2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}createContext(e,n,r,i=!1){return new up({dataSource:e,methodName:n,targetDoc:r,path:Ze.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zc(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new W2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function c1(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);dp("Data must be an object, but it was:",o,r);const l=u1(r,o);let c,u;if(s.merge)c=new Ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=fs(e,m,n);if(!o.contains(g))throw new Q(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);f1(p,g)||p.push(g)}c=new Ct(p),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new H2(new wt(l),c,u)}class eu extends Xc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}class hp extends Xc{_toFieldTransform(e){return new DC(e.path,new Zo)}isEqual(e){return e instanceof hp}}function q2(t,e,n,r){const i=t.createContext(1,e,n);dp("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();Or(r,(c,u)=>{const p=d1(e,c,n);u=qe(u);const m=i.childContextForFieldPath(p);if(u instanceof eu)s.push(p);else{const g=va(u,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new Ct(s);return new a1(o,l,i.fieldTransforms)}function G2(t,e,n,r,i,s){const o=t.createContext(1,e,n),l=[fs(e,r,n)],c=[i];if(s.length%2!=0)throw new Q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(fs(e,s[g])),c.push(s[g+1]);const u=[],p=wt.empty();for(let g=l.length-1;g>=0;--g)if(!f1(u,l[g])){const S=l[g];let C=c[g];C=qe(C);const R=o.childContextForFieldPath(S);if(C instanceof eu)u.push(S);else{const P=va(C,R);P!=null&&(u.push(S),p.set(S,P))}}const m=new Ct(u);return new a1(p,m,o.fieldTransforms)}function K2(t,e,n,r=!1){return va(n,t.createContext(r?4:3,e))}function va(t,e){if(h1(t=qe(t)))return dp("Unsupported field value:",e,t),u1(t,e);if(t instanceof Xc)return function(r,i){if(!l1(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=va(l,i.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:uc(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uc(i.serializer,s)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:kE(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Kf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof en)return function(o,l){const c=o instanceof en?o.toArray():o;return{mapValue:{fields:{[Z0]:{stringValue:eE},[ac]:{arrayValue:{values:c.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return Wf(l.serializer,p)})}}}}}}(r,i);if(NE(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Fc(r)}`)}(t,e)}function u1(t,e){const n={};return G0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(t,(r,i)=>{const s=va(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function h1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof _n||t instanceof Mt||t instanceof Me||t instanceof Xc||t instanceof en||NE(t))}function dp(t,e,n){if(!h1(n)||!W0(n)){const r=Fc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function fs(t,e,n){if((e=qe(e))instanceof cp)return e._internalPath;if(typeof e=="string")return d1(t,e);throw pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q2=new RegExp("[~\\*/\\[\\]]");function d1(t,e,n){if(e.search(Q2)>=0)throw pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cp(...e.split("."))._internalPath}catch{throw pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Q(j.INVALID_ARGUMENT,l+t+c)}function f1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Or(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ac].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Oe(o.doubleValue));return new en(n)}convertGeoPoint(e){return new _n(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ye(PE(r),9688,{name:e});const i=new Yo(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1 extends Y2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function Js(){return new hp("serverTimestamp")}const tv="@firebase/firestore",nv="4.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(fs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J2 extends m1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class g1 extends fp{}function rv(t,e,...n){let r=[];e instanceof fp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof mp).length,l=s.filter(c=>c instanceof pp).length;if(o>1||o>0&&l>0)throw new Q(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class pp extends g1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pp(e,n,r)}_apply(e){const n=this._parse(e);return y1(e._query,n),new _i(e.firestore,e.converter,yd(e._query,n))}_parse(e){const n=Zc(e.firestore);return function(s,o,l,c,u,p,m){let g;if(u.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new Q(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ov(m,p);const C=[];for(const R of m)C.push(sv(c,s,R));g={arrayValue:{values:C}}}else g=sv(c,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ov(m,p),g=K2(l,o,m,p==="in"||p==="not-in");return Ue.create(u,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class mp extends fp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)y1(o,c),o=yd(o,c)}(e._query,n),new _i(e.firestore,e.converter,yd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gp extends g1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Q(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xo(s,o)}(e._query,this._field,this._direction);return new _i(e.firestore,e.converter,TC(e._query,n))}}function iv(t,e="asc"){const n=e,r=fs("orderBy",t);return gp._create(r,n)}function sv(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new Q(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lE(e)&&n.indexOf("/")!==-1)throw new Q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!Z.isDocumentKey(r))throw new Q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vy(t,new Z(r))}if(n instanceof Me)return vy(t,n._key);throw new Q(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fc(n)}.`)}function ov(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function y1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function v1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zr extends m1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zr._jsonSchema={type:ze("string",Zr._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Sl extends Zr{data(e={}){return super.data(e)}}class Zi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new Sl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Sl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,p=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:Z2(l.type),doc:c,oldIndex:u,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Z2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi._jsonSchemaVersion="firestore/querySnapshot/1.0",Zi._jsonSchema={type:ze("string",Zi._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){t=wn(t,Me);const e=wn(t.firestore,Is),n=lp(e);return O2(n,t._key).then(r=>nP(e,t,r))}function el(t){t=wn(t,_i);const e=wn(t.firestore,Is),n=lp(e),r=new p1(e);return X2(t._query),V2(n,t._query).then(i=>new Zi(e,r,t,i))}function av(t,e,n){t=wn(t,Me);const r=wn(t.firestore,Is),i=v1(t.converter,e,n),s=Zc(r);return yp(r,[c1(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function tP(t,e,n,...r){t=wn(t,Me);const i=wn(t.firestore,Is),s=Zc(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof cp?G2(s,"updateDoc",t._key,e,n,r):q2(s,"updateDoc",t._key,e),yp(i,[o.toMutation(t._key,Zt.exists(!0))])}function lv(t,e){const n=wn(t.firestore,Is),r=ao(t),i=v1(t.converter,e),s=Zc(t.firestore);return yp(n,[c1(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function yp(t,e){const n=lp(t);return M2(n,e)}function nP(t,e,n){const r=n.docs.get(e._key),i=new p1(t);return new Zr(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){VA(mi),oi(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Is(new FA(r.getProvider("auth-internal")),new BA(o,r.getProvider("app-check-internal")),sC(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),pn(tv,nv,e),pn(tv,nv,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="firebasestorage.googleapis.com",rP="storageBucket",iP=2*60*1e3,sP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends xn{constructor(e,n,r=0){super(sh(e),`Firebase Storage: ${n} (${sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tn||(Tn={}));function sh(t){return"storage/"+t}function oP(){const t="An unknown error occurred, please check the error payload for server response.";return new In(Tn.UNKNOWN,t)}function aP(){return new In(Tn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lP(){return new In(Tn.CANCELED,"User canceled the upload/download.")}function cP(t){return new In(Tn.INVALID_URL,"Invalid URL '"+t+"'.")}function uP(t){return new In(Tn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cv(t){return new In(Tn.INVALID_ARGUMENT,t)}function w1(){return new In(Tn.APP_DELETED,"The Firebase app was deleted.")}function hP(t){return new In(Tn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw uP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${p}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},R=n===_1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",T=new RegExp(`^https?://${R}/${i}/${P}`,"i"),b=[{regex:l,indices:c,postModify:s},{regex:S,indices:C,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<b.length;L++){const F=b[L],B=F.regex.exec(e);if(B){const E=B[F.indices.bucket];let y=B[F.indices.path];y||(y=""),r=new Yt(E,y),F.postModify(r);break}}if(r==null)throw cP(e);return r}}class dP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function p(...P){u||(u=!0,e.apply(null,P))}function m(P){i=setTimeout(()=>{i=null,t(S,c())},P)}function g(){s&&clearTimeout(s)}function S(P,...T){if(u){g();return}if(P){g(),p.call(null,P,...T);return}if(c()||o){g(),p.call(null,P,...T);return}r<64&&(r*=2);let b;l===1?(l=2,b=0):b=(r+Math.random())*1e3,m(b)}let C=!1;function R(P){C||(C=!0,g(),!u&&(i!==null?(P||(l=2),clearTimeout(i),m(0)):P||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function pP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return t!==void 0}function uv(t,e,n,r){if(r<e)throw cv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cv(`Invalid value for '${t}'. Expected ${n} or less.`)}function gP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(mc||(mc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r,i,s,o,l,c,u,p,m,g=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,R)=>{this.resolve_=C,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===mc.NO_ERROR,c=s.getStatus();if(!l||yP(c,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===mc.ABORT;r(!1,new tl(!1,null,p));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new tl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());mP(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=oP();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?w1():lP();o(c)}else{const c=aP();o(c)}};this.canceled_?n(!1,new tl(!1,null,!0)):this.backoffId_=fP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _P(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function EP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xP(t,e,n,r,i,s,o=!0,l=!1){const c=gP(t.urlParams),u=t.url+c,p=Object.assign({},t.headers);return EP(p,e),_P(p,n),wP(p,s),TP(p,r),new vP(u,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gc(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kP(this._location.path)}get storage(){return this._service}get parent(){const e=IP(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new gc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hP(e)}}function hv(t,e){const n=e==null?void 0:e[rP];return n==null?null:Yt.makeFromBucketSpec(n,t)}function SP(t,e,n,r={}){t.host=`${e}:${n}`;const i=pi(e);i&&(If(`https://${t.host}/b`),kf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Yw(s,t.app.options.projectId))}class bP{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=_1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iP,this._maxUploadRetryTime=sP,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=hv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=hv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new dP(w1());{const o=xP(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const dv="@firebase/storage",fv="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="storage";function AP(t=Af(),e){t=qe(t);const r=Oc(t,E1).getImmediate({identifier:e}),i=Gw("storage");return i&&CP(r,...i),r}function CP(t,e,n,r={}){SP(t,e,n,r)}function RP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bP(n,r,i,e,mi)}function PP(){oi(new xr(E1,RP,"PUBLIC").setMultipleInstances(!0)),pn(dv,fv,""),pn(dv,fv,"esm2020")}PP();const NP={apiKey:"AIzaSyCRNLyBkav2ZbMNj9MakHKDdSzeabgFSTI",authDomain:"blood-fitness-app.firebaseapp.com",projectId:"blood-fitness-app",storageBucket:"blood-fitness-app.firebasestorage.app",messagingSenderId:"142443201042",appId:"1:142443201042:web:a962a38c46816d632b8ecb"},vp=Zw(NP),Br=NA(vp),ln=z2(vp);AP(vp);const oh={async saveProfile(t,e){try{const n=ao(ln,"users",t);return await av(n,{...e,updatedAt:Js()},{merge:!0}),{success:!0}}catch(n){throw console.error("Error saving profile:",n),n}},async getProfile(t){try{const e=ao(ln,"users",t),n=await eP(e);return n.exists()?{success:!0,profile:{id:n.id,...n.data()}}:{success:!1,error:"Profile not found"}}catch(e){throw console.error("Error getting profile:",e),e}},async updateProfile(t,e){try{const n=ao(ln,"users",t);return await tP(n,{...e,updatedAt:Js()}),{success:!0}}catch(n){throw console.error("Error updating profile:",n),n}},async saveBloodReport(t,e){try{const n=Ii(ln,`users/${t}/bloodReports`);return{success:!0,reportId:(await lv(n,{...e,uploadDate:Js()})).id}}catch(n){throw console.error("Error saving blood report:",n),n}},async getBloodReports(t){try{const e=Ii(ln,`users/${t}/bloodReports`),n=rv(e,iv("uploadDate","desc")),r=await el(n),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),{success:!0,reports:i}}catch(e){throw console.error("Error getting blood reports:",e),e}},async savePrediction(t,e,n){try{const r=ao(ln,`users/${t}/bloodReports/${e}/predictions`,"latest");return await av(r,{...n,predictionDate:Js()}),{success:!0}}catch(r){throw console.error("Error saving prediction:",r),r}},async getPredictionHistory(t){try{const e=Ii(ln,`users/${t}/bloodReports`),n=await el(e),r=[];for(const i of n.docs){const s=Ii(ln,`users/${t}/bloodReports/${i.id}/predictions`);(await el(s)).forEach(l=>{r.push({reportId:i.id,...l.data()})})}return{success:!0,predictions:r}}catch(e){throw console.error("Error getting predictions:",e),e}},async saveWeightLog(t,e){try{const n=Ii(ln,`users/${t}/weightLogs`);return await lv(n,{...e,timestamp:Js()}),{success:!0}}catch(n){throw console.error("Error saving weight log:",n),n}},async getWeightLogs(t){try{const e=Ii(ln,`users/${t}/weightLogs`),n=rv(e,iv("timestamp","asc")),r=await el(n),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),{success:!0,logs:i}}catch(e){throw console.error("Error getting weight logs:",e),e}}},co={async register(t,e){try{const r=(await gb(Br,t,e)).user;return await oh.saveProfile(r.uid,{email:r.email,name:t.split("@")[0],createdAt:new Date}),{success:!0,user:{email:r.email,id:r.uid}}}catch(n){return console.error("Registration error:",n),{success:!1,error:n.message||"Registration failed"}}},async login(t,e){try{const r=(await yb(Br,t,e)).user;return{success:!0,user:{email:r.email,id:r.uid}}}catch(n){return console.error("Login error:",n),{success:!1,error:n.code==="auth/invalid-credential"?"Invalid email or password":n.message}}},async logout(){try{return await Eb(Br),{success:!0}}catch(t){return console.error("Logout error:",t),{success:!1,error:t.message}}},async getProfile(){try{const t=Br.currentUser;return t?await oh.getProfile(t.uid):{success:!1,error:"No user logged in"}}catch(t){return console.error("Error getting profile:",t),{success:!1,error:t.message}}},async updateProfile(t){try{const e=Br.currentUser;return e?(await oh.saveProfile(e.uid,t),{success:!0,message:"Profile updated"}):{success:!1,error:"No user logged in"}}catch(e){return console.error("Error updating profile:",e),{success:!1,error:e.message}}},getCurrentUser(){return Br.currentUser},onAuthStateChange(t){return wb(Br,t)}},DP=Object.freeze(Object.defineProperty({__proto__:null,api:co},Symbol.toStringTag,{value:"Module"})),LP=({onComplete:t})=>{const[e,n]=X.useState({name:"",age:"",gender:"male",weight:"",heightCm:"",heightFt:"",heightIn:""}),r=o=>{const{name:l,value:c}=o.target;n(u=>({...u,[l]:c}))},i=(o,l)=>Math.round(parseInt(o||0)*30.48+parseInt(l||0)*2.54),s=o=>{if(o.preventDefault(),!e.name||!e.age||!e.weight)return;const l={...e,heightCm:e.heightCm||i(e.heightFt,e.heightIn)};t(l)};return d.jsxs("div",{className:"profile-container fade-in",children:[d.jsxs("div",{className:"card profile-card",children:[d.jsxs("div",{className:"header",children:[d.jsx("h2",{children:"Let's know you better"}),d.jsx("p",{children:"Enter your details for personalized health insights."})]}),d.jsxs("form",{onSubmit:s,children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Full Name"}),d.jsx("input",{type:"text",name:"name",className:"input-field",placeholder:"Your Name",value:e.name,onChange:r,required:!0})]}),d.jsxs("div",{className:"row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Age"}),d.jsx("input",{type:"number",name:"age",className:"input-field",placeholder:"25",value:e.age,onChange:r,required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Gender"}),d.jsxs("select",{name:"gender",className:"input-field",value:e.gender,onChange:r,children:[d.jsx("option",{value:"male",children:"Male"}),d.jsx("option",{value:"female",children:"Female"}),d.jsx("option",{value:"other",children:"Other"})]})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Weight (kg)"}),d.jsx("input",{type:"number",name:"weight",className:"input-field",placeholder:"70.5",value:e.weight,onChange:r,step:"0.1",required:!0})]}),d.jsxs("div",{className:"height-section",children:[d.jsx("label",{children:"Height"}),d.jsx("div",{className:"tabs"}),d.jsxs("div",{className:"row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"sub-label",children:"CM"}),d.jsx("input",{type:"number",name:"heightCm",className:"input-field",placeholder:"175",value:e.heightCm,onChange:r})]}),d.jsx("div",{className:"or-divider",children:"OR"}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"sub-label",children:"Feet"}),d.jsx("input",{type:"number",name:"heightFt",className:"input-field",placeholder:"5",value:e.heightFt,onChange:r})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"sub-label",children:"Inches"}),d.jsx("input",{type:"number",name:"heightIn",className:"input-field",placeholder:"9",value:e.heightIn,onChange:r})]})]})]}),d.jsx("button",{type:"submit",className:"btn-primary",style:{marginTop:"2rem"},children:"Continue"})]})]}),d.jsx("style",{children:`
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
 */var OP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ge=(t,e)=>{const n=X.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:c,...u},p)=>X.createElement("svg",{ref:p,...OP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${VP(t)}`,l].join(" "),...u},[...e.map(([m,g])=>X.createElement(m,g)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=ge("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=ge("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=ge("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=ge("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=ge("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ge("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=ge("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=ge("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=ge("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ge("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=ge("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=ge("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=ge("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ge("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=ge("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=ge("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=ge("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=ge("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=ge("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=ge("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=ge("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=ge("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=ge("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=ge("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=ge("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=ge("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=ge("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),sN=({user:t,onClose:e,onLogout:n,onNavigate:r})=>{const[i,s]=X.useState("health"),[o,l]=X.useState(!1),[c,u]=X.useState({name:t.name||"",age:t.age||"",gender:t.gender||"Male",height:t.height||"",weight:t.weight||"",bloodGroup:t.bloodGroup||"",diseases:t.diseases||"",allergies:t.allergies||"",notes:t.notes||""}),[p,m]=X.useState([]);X.useEffect(()=>{const P=localStorage.getItem(`profile_${t.email}`);P&&u({...c,...JSON.parse(P)});const T=t.email?`reports_${t.email}`:"blood_reports",_=JSON.parse(localStorage.getItem(T)||"[]");m(_)},[t.email]);const g=()=>{localStorage.setItem(`profile_${t.email}`,JSON.stringify(c)),l(!1),alert("Profile saved successfully!")},S=P=>{if(!window.confirm("Are you sure you want to delete this report?"))return;const T=[...p];T.splice(P,1),m(T);const _=t.email?`reports_${t.email}`:"blood_reports";localStorage.setItem(_,JSON.stringify(T))},R=(()=>{if(!c.height||!c.weight)return null;const P=c.height/100;return(c.weight/(P*P)).toFixed(1)})();return d.jsxs("div",{className:"profile-dashboard fixed-fullscreen",children:[d.jsxs("div",{className:"profile-header",children:[d.jsx("button",{onClick:e,className:"p-back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h3",{children:"My Profile"}),d.jsx("button",{onClick:n,className:"p-logout",children:"Logout"})]}),d.jsxs("div",{className:"p-hero",children:[d.jsx("div",{className:"p-avatar",children:d.jsx(S1,{size:40,color:"white"})}),d.jsx("h2",{children:c.name||"User"}),d.jsxs("div",{className:"p-badges",children:[R&&d.jsxs("span",{className:"p-badge",children:["BMI: ",R]}),c.bloodGroup&&d.jsx("span",{className:"p-badge red",children:c.bloodGroup})]})]}),d.jsxs("div",{className:"p-tabs",children:[d.jsx("button",{className:`p-tab ${i==="health"?"active":""}`,onClick:()=>s("health"),children:"Health Profile"}),d.jsx("button",{className:`p-tab ${i==="reports"?"active":""}`,onClick:()=>s("reports"),children:"Reports"})]}),d.jsxs("div",{className:"p-content",children:[i==="health"&&d.jsxs("div",{className:"tab-pane fade-in",children:[d.jsxs("div",{className:"pane-header",children:[d.jsx("h4",{children:"Personal & Medical Data"}),!o&&d.jsx("button",{className:"edit-toggle",onClick:()=>l(!0),children:"Edit"})]}),d.jsxs("div",{className:"form-grid",style:{marginBottom:"20px"},children:[d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Age"}),d.jsx("input",{type:"number",disabled:!o,value:c.age,onChange:P=>u({...c,age:P.target.value})})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Blood Group"}),d.jsxs("select",{disabled:!o,value:c.bloodGroup,onChange:P=>u({...c,bloodGroup:P.target.value}),children:[d.jsx("option",{value:"",children:"Select"}),d.jsx("option",{children:"A+"}),d.jsx("option",{children:"A-"}),d.jsx("option",{children:"B+"}),d.jsx("option",{children:"B-"}),d.jsx("option",{children:"O+"}),d.jsx("option",{children:"O-"}),d.jsx("option",{children:"AB+"}),d.jsx("option",{children:"AB-"})]})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Weight (kg)"}),d.jsx("input",{type:"number",disabled:!o,value:c.weight,onChange:P=>u({...c,weight:P.target.value})})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Height (cm)"}),d.jsx("input",{type:"number",disabled:!o,value:c.height,onChange:P=>u({...c,height:P.target.value})})]})]}),d.jsxs("div",{className:"health-form",children:[d.jsx("label",{children:"Existing Conditions (Diseases)"}),d.jsx("textarea",{disabled:!o,placeholder:"e.g. Diabetes, Hypertension...",value:c.diseases,onChange:P=>u({...c,diseases:P.target.value})}),d.jsx("label",{children:"Allergies"}),d.jsx("textarea",{disabled:!o,placeholder:"e.g. Peanuts, Penicillin...",value:c.allergies,onChange:P=>u({...c,allergies:P.target.value})}),d.jsx("label",{children:"Health Notes"}),d.jsx("textarea",{className:"large-text",disabled:!o,placeholder:"Write your fitness goals here...",value:c.notes,onChange:P=>u({...c,notes:P.target.value})})]}),o&&d.jsxs("button",{className:"save-btn",onClick:g,children:[d.jsx(QP,{size:18})," Save Health Data"]}),d.jsxs("div",{className:"milestones-preview",style:{marginTop:"20px",cursor:"pointer"},onClick:()=>r("weightprogress"),children:[d.jsxs("div",{className:"pane-header",style:{marginBottom:"10px"},children:[d.jsx("h5",{children:"Weight Tracker"}),d.jsx("span",{style:{fontSize:"12px",color:"var(--color-primary)"},children:"View Graph →"})]}),d.jsx("p",{style:{fontSize:"12px",color:"#64748b"},children:"Track your weight journey over time."})]})]}),i==="reports"&&d.jsxs("div",{className:"tab-pane fade-in",children:[d.jsx("h4",{children:"Recent Blood Reports"}),p.length===0?d.jsx("p",{className:"empty-state",children:"No reports uploaded yet."}):d.jsx("div",{className:"reports-list",children:p.map((P,T)=>d.jsxs("div",{className:"report-item",children:[d.jsx("div",{className:"r-icon",children:d.jsx(_p,{size:20})}),d.jsxs("div",{className:"r-info",children:[d.jsx("span",{className:"r-date",children:P.date}),d.jsxs("span",{className:"r-summary",children:[P.results.length," Parameters Analyzed"]})]}),d.jsxs("div",{className:"r-actions-row",children:[d.jsx("button",{className:"icon-btn-small",onClick:()=>r("blood",P),title:"View Detail",children:d.jsx(WP,{size:16,color:"var(--color-primary)"})}),d.jsx("button",{className:"icon-btn-small delete",onClick:()=>S(T),title:"Delete",children:d.jsx(eN,{size:16,color:"#ef4444"})})]})]},T))})]})]}),d.jsx("style",{children:`
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
            `})]})},oN=({userName:t,userProfile:e,onNavigate:n,onLogout:r})=>{const[i,s]=X.useState(!1);if(i)return d.jsx(sN,{user:e||{name:t,email:"user@example.com"},onClose:()=>s(!1),onLogout:r,onNavigate:n});const o=[{id:"blood",title:"Blood Evaluation",desc:"Analyze reports & get insights",icon:d.jsx(_p,{size:24}),color:"#4361EE",bg:"#F0F4FF"},{id:"diet",title:"Specialized Diet",desc:"Meals based on Blood Report",icon:d.jsx(jP,{size:24}),color:"#10B981",bg:"#ECFDF5"},{id:"bmi",title:"BMI Calculator",desc:"Check your health risk & vitals",icon:d.jsx(UP,{size:24}),color:"var(--color-primary)",bg:"#FFF0F1"},{id:"fitness",title:"Fitness Helper",desc:"Diet plans & weight goals",icon:d.jsx(So,{size:24}),color:"#2A9D8F",bg:"#EDF7F6"},{id:"homeworkout",title:"Home Workout",desc:"8 Basic exercises & calories",icon:d.jsx(HP,{size:24}),color:"#FF6B6B",bg:"#FFF0F1"},{id:"chat",title:"AI Health Bot",desc:"Ask questions & get advice",icon:d.jsx(qP,{size:24}),color:"#7209B7",bg:"#F3E8FF"}];return d.jsxs("div",{className:"dashboard-container fade-in",children:[d.jsxs("header",{className:"dash-header",children:[d.jsx("div",{className:"avatar",onClick:()=>s(!0),style:{cursor:"pointer"},children:t?t.charAt(0).toUpperCase():"U"}),d.jsxs("div",{className:"welcome-text",children:[d.jsx("p",{children:"Welcome back,"}),d.jsx("h3",{children:t||"User"})]})]}),d.jsx("div",{className:"stats-preview",children:d.jsxs("div",{className:"stat-card",children:[d.jsx("h4",{children:"Stay Hydrated! 💧"}),d.jsx("p",{children:"Drink 8 glasses of water today."})]})}),d.jsx("div",{className:"options-grid",children:o.map(l=>d.jsxs("button",{className:"option-card",onClick:()=>n(l.id),style:{"--hover-color":l.color},children:[d.jsx("div",{className:"icon-box",style:{color:l.color,backgroundColor:l.bg},children:l.icon}),d.jsxs("div",{className:"text-box",children:[d.jsx("h4",{children:l.title}),d.jsx("p",{children:l.desc})]}),d.jsx("div",{className:"arrow",children:"→"})]},l.id))}),d.jsx("style",{children:`
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
      `})]})},aN=({userProfile:t,onBack:e})=>{const[n,r]=X.useState("metric"),[i,s]=X.useState(""),[o,l]=X.useState(""),[c,u]=X.useState(""),[p,m]=X.useState(""),[g,S]=X.useState("male"),[C,R]=X.useState("sedentary"),[P,T]=X.useState(null),[_,b]=X.useState(""),[L,F]=X.useState(""),[B,E]=X.useState("");X.useEffect(()=>{t&&(t.height&&s(t.height),t.weight&&u(t.weight),t.age&&m(t.age),t.gender&&S(t.gender.toLowerCase()))},[t]);const y=()=>{let k=0,w=0;if(n==="metric"){if(!i||!c)return;k=parseFloat(i)/100,w=parseFloat(c)}else{if(!i||!c)return;k=(parseFloat(i)*12+(parseFloat(o)||0))*.0254,w=parseFloat(c)*.453592}if(k<=0||w<=0)return;const A=parseFloat((w/(k*k)).toFixed(1));T(A);let x="",te="",se="";A<18.5?(x="Underweight",te="var(--color-accent)",se="You may need to increase your calorie intake. Focus on nutrient-dense foods."):A<24.9?(x="Normal Weight",te="var(--color-success)",se="Great job! You have a healthy body weight. Maintain it with balanced diet and exercise."):A<29.9?(x="Overweight",te="var(--color-warning)",se="Try to incorporate more cardio and monitor portion sizes to reach a healthier range."):(x="Obese",te="var(--color-danger)",se="It is recommended to consult a healthcare provider for a personalized weight management plan."),b({label:x,color:te}),E(se);const _e=k/.0254-60;let W=0;g==="male"?W=52+1.9*Math.max(0,_e):W=49+1.7*Math.max(0,_e),F(`${W.toFixed(1)} - ${(W*1.1).toFixed(1)} kg`)},I=()=>{T(null),s(""),u(""),m("")};return d.jsxs("div",{className:"advanced-bmi-container fade-in",children:[d.jsxs("div",{className:"bmi-header",children:[d.jsx("button",{onClick:e,className:"btn-icon",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Advanced BMI Calculator"}),d.jsx("div",{style:{width:24}})," "]}),d.jsxs("div",{className:"calculator-grid",children:[d.jsxs("div",{className:"card input-card",children:[d.jsxs("div",{className:"toggle-row",children:[d.jsx("button",{className:`toggle-btn ${n==="metric"?"active":""}`,onClick:()=>r("metric"),children:"Metric (cm/kg)"}),d.jsx("button",{className:`toggle-btn ${n==="imperial"?"active":""}`,onClick:()=>r("imperial"),children:"Imperial (ft/lbs)"})]}),d.jsxs("div",{className:"form-row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Gender"}),d.jsxs("select",{value:g,onChange:k=>S(k.target.value),children:[d.jsx("option",{value:"male",children:"Male"}),d.jsx("option",{value:"female",children:"Female"})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Age (years)"}),d.jsx("input",{type:"number",value:p,onChange:k=>m(k.target.value),placeholder:"25"})]})]}),d.jsxs("div",{className:"form-row",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:n==="metric"?"Height (cm)":"Height (ft)"}),d.jsx("input",{type:"number",value:i,onChange:k=>s(k.target.value),placeholder:n==="metric"?"175":"5"})]}),n==="imperial"&&d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Inches"}),d.jsx("input",{type:"number",value:o,onChange:k=>l(k.target.value),placeholder:"10"})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:n==="metric"?"Weight (kg)":"Weight (lbs)"}),d.jsx("input",{type:"number",value:c,onChange:k=>u(k.target.value),placeholder:n==="metric"?"70":"150"})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{children:"Activity Level"}),d.jsxs("select",{value:C,onChange:k=>R(k.target.value),children:[d.jsx("option",{value:"sedentary",children:"Sedentary (Little or no exercise)"}),d.jsx("option",{value:"light",children:"Lightly active (1-3 days/week)"}),d.jsx("option",{value:"moderate",children:"Moderately active (3-5 days/week)"}),d.jsx("option",{value:"active",children:"Very active (6-7 days/week)"})]})]}),d.jsxs("div",{className:"action-row",children:[d.jsx("button",{className:"reset-btn",onClick:I,children:d.jsx(KP,{size:18})}),d.jsx("button",{className:"calculate-btn",onClick:y,children:"Calculate BMI"})]})]}),P&&d.jsxs("div",{className:"card result-card fade-in",children:[d.jsxs("div",{className:"result-header",children:[d.jsx("h3",{children:"Your Result"}),d.jsx("div",{className:"bmi-badge",style:{backgroundColor:_.color},children:_.label})]}),d.jsxs("div",{className:"bmi-display",children:[d.jsx("span",{className:"bmi-number",style:{color:_.color},children:P}),d.jsx("span",{className:"bmi-label",children:"BMI Score"})]}),d.jsxs("div",{className:"progress-bar-container",children:[d.jsx("div",{className:"progress-track"}),d.jsx("div",{className:"progress-fill",style:{width:`${Math.min(Math.max(P/40*100,0),100)}%`,backgroundColor:_.color}}),d.jsxs("div",{className:"markers",children:[d.jsx("span",{style:{left:"46%"},children:"18.5"}),d.jsx("span",{style:{left:"62.5%"},children:"25"}),d.jsx("span",{style:{left:"75%"},children:"30"})]})]}),d.jsxs("div",{className:"health-insight",children:[d.jsxs("div",{className:"insight-item",children:[d.jsx(T1,{size:20,className:"icon"}),d.jsxs("div",{children:[d.jsx("h4",{children:"Ideal Weight"}),d.jsx("p",{children:L})]})]}),d.jsxs("div",{className:"insight-item",children:[d.jsx(I1,{size:20,className:"icon"}),d.jsxs("div",{children:[d.jsx("h4",{children:"Health Tip"}),d.jsx("p",{children:B})]})]})]})]})]}),d.jsx("style",{children:`
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
            `})]})};var lN={exports:{}};(function(t){var e=function(n){var r=Object.prototype,i=r.hasOwnProperty,s=Object.defineProperty||function(O,N,M){O[N]=M.value},o,l=typeof Symbol=="function"?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",p=l.toStringTag||"@@toStringTag";function m(O,N,M){return Object.defineProperty(O,N,{value:M,enumerable:!0,configurable:!0,writable:!0}),O[N]}try{m({},"")}catch{m=function(N,M,q){return N[M]=q}}function g(O,N,M,q){var U=N&&N.prototype instanceof b?N:b,$=Object.create(U.prototype),K=new Ne(q||[]);return s($,"_invoke",{value:A(O,M,K)}),$}n.wrap=g;function S(O,N,M){try{return{type:"normal",arg:O.call(N,M)}}catch(q){return{type:"throw",arg:q}}}var C="suspendedStart",R="suspendedYield",P="executing",T="completed",_={};function b(){}function L(){}function F(){}var B={};m(B,c,function(){return this});var E=Object.getPrototypeOf,y=E&&E(E(_e([])));y&&y!==r&&i.call(y,c)&&(B=y);var I=F.prototype=b.prototype=Object.create(B);L.prototype=F,s(I,"constructor",{value:F,configurable:!0}),s(F,"constructor",{value:L,configurable:!0}),L.displayName=m(F,p,"GeneratorFunction");function k(O){["next","throw","return"].forEach(function(N){m(O,N,function(M){return this._invoke(N,M)})})}n.isGeneratorFunction=function(O){var N=typeof O=="function"&&O.constructor;return N?N===L||(N.displayName||N.name)==="GeneratorFunction":!1},n.mark=function(O){return Object.setPrototypeOf?Object.setPrototypeOf(O,F):(O.__proto__=F,m(O,p,"GeneratorFunction")),O.prototype=Object.create(I),O},n.awrap=function(O){return{__await:O}};function w(O,N){function M($,K,ne,ee){var pe=S(O[$],O,K);if(pe.type==="throw")ee(pe.arg);else{var Lt=pe.arg,Bt=Lt.value;return Bt&&typeof Bt=="object"&&i.call(Bt,"__await")?N.resolve(Bt.__await).then(function($t){M("next",$t,ne,ee)},function($t){M("throw",$t,ne,ee)}):N.resolve(Bt).then(function($t){Lt.value=$t,ne(Lt)},function($t){return M("throw",$t,ne,ee)})}}var q;function U($,K){function ne(){return new N(function(ee,pe){M($,K,ee,pe)})}return q=q?q.then(ne,ne):ne()}s(this,"_invoke",{value:U})}k(w.prototype),m(w.prototype,u,function(){return this}),n.AsyncIterator=w,n.async=function(O,N,M,q,U){U===void 0&&(U=Promise);var $=new w(g(O,N,M,q),U);return n.isGeneratorFunction(N)?$:$.next().then(function(K){return K.done?K.value:$.next()})};function A(O,N,M){var q=C;return function($,K){if(q===P)throw new Error("Generator is already running");if(q===T){if($==="throw")throw K;return W()}for(M.method=$,M.arg=K;;){var ne=M.delegate;if(ne){var ee=x(ne,M);if(ee){if(ee===_)continue;return ee}}if(M.method==="next")M.sent=M._sent=M.arg;else if(M.method==="throw"){if(q===C)throw q=T,M.arg;M.dispatchException(M.arg)}else M.method==="return"&&M.abrupt("return",M.arg);q=P;var pe=S(O,N,M);if(pe.type==="normal"){if(q=M.done?T:R,pe.arg===_)continue;return{value:pe.arg,done:M.done}}else pe.type==="throw"&&(q=T,M.method="throw",M.arg=pe.arg)}}}function x(O,N){var M=N.method,q=O.iterator[M];if(q===o)return N.delegate=null,M==="throw"&&O.iterator.return&&(N.method="return",N.arg=o,x(O,N),N.method==="throw")||M!=="return"&&(N.method="throw",N.arg=new TypeError("The iterator does not provide a '"+M+"' method")),_;var U=S(q,O.iterator,N.arg);if(U.type==="throw")return N.method="throw",N.arg=U.arg,N.delegate=null,_;var $=U.arg;if(!$)return N.method="throw",N.arg=new TypeError("iterator result is not an object"),N.delegate=null,_;if($.done)N[O.resultName]=$.value,N.next=O.nextLoc,N.method!=="return"&&(N.method="next",N.arg=o);else return $;return N.delegate=null,_}k(I),m(I,p,"Generator"),m(I,c,function(){return this}),m(I,"toString",function(){return"[object Generator]"});function te(O){var N={tryLoc:O[0]};1 in O&&(N.catchLoc=O[1]),2 in O&&(N.finallyLoc=O[2],N.afterLoc=O[3]),this.tryEntries.push(N)}function se(O){var N=O.completion||{};N.type="normal",delete N.arg,O.completion=N}function Ne(O){this.tryEntries=[{tryLoc:"root"}],O.forEach(te,this),this.reset(!0)}n.keys=function(O){var N=Object(O),M=[];for(var q in N)M.push(q);return M.reverse(),function U(){for(;M.length;){var $=M.pop();if($ in N)return U.value=$,U.done=!1,U}return U.done=!0,U}};function _e(O){if(O){var N=O[c];if(N)return N.call(O);if(typeof O.next=="function")return O;if(!isNaN(O.length)){var M=-1,q=function U(){for(;++M<O.length;)if(i.call(O,M))return U.value=O[M],U.done=!1,U;return U.value=o,U.done=!0,U};return q.next=q}}return{next:W}}n.values=_e;function W(){return{value:o,done:!0}}return Ne.prototype={constructor:Ne,reset:function(O){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(se),!O)for(var N in this)N.charAt(0)==="t"&&i.call(this,N)&&!isNaN(+N.slice(1))&&(this[N]=o)},stop:function(){this.done=!0;var O=this.tryEntries[0],N=O.completion;if(N.type==="throw")throw N.arg;return this.rval},dispatchException:function(O){if(this.done)throw O;var N=this;function M(ee,pe){return $.type="throw",$.arg=O,N.next=ee,pe&&(N.method="next",N.arg=o),!!pe}for(var q=this.tryEntries.length-1;q>=0;--q){var U=this.tryEntries[q],$=U.completion;if(U.tryLoc==="root")return M("end");if(U.tryLoc<=this.prev){var K=i.call(U,"catchLoc"),ne=i.call(U,"finallyLoc");if(K&&ne){if(this.prev<U.catchLoc)return M(U.catchLoc,!0);if(this.prev<U.finallyLoc)return M(U.finallyLoc)}else if(K){if(this.prev<U.catchLoc)return M(U.catchLoc,!0)}else if(ne){if(this.prev<U.finallyLoc)return M(U.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(O,N){for(var M=this.tryEntries.length-1;M>=0;--M){var q=this.tryEntries[M];if(q.tryLoc<=this.prev&&i.call(q,"finallyLoc")&&this.prev<q.finallyLoc){var U=q;break}}U&&(O==="break"||O==="continue")&&U.tryLoc<=N&&N<=U.finallyLoc&&(U=null);var $=U?U.completion:{};return $.type=O,$.arg=N,U?(this.method="next",this.next=U.finallyLoc,_):this.complete($)},complete:function(O,N){if(O.type==="throw")throw O.arg;return O.type==="break"||O.type==="continue"?this.next=O.arg:O.type==="return"?(this.rval=this.arg=O.arg,this.method="return",this.next="end"):O.type==="normal"&&N&&(this.next=N),_},finish:function(O){for(var N=this.tryEntries.length-1;N>=0;--N){var M=this.tryEntries[N];if(M.finallyLoc===O)return this.complete(M.completion,M.afterLoc),se(M),_}},catch:function(O){for(var N=this.tryEntries.length-1;N>=0;--N){var M=this.tryEntries[N];if(M.tryLoc===O){var q=M.completion;if(q.type==="throw"){var U=q.arg;se(M)}return U}}throw new Error("illegal catch attempt")},delegateYield:function(O,N,M){return this.delegate={iterator:_e(O),resultName:N,nextLoc:M},this.method==="next"&&(this.arg=o),_}},n}(t.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})(lN);var wp=(t,e)=>`${t}-${e}-${Math.random().toString(16).slice(3,8)}`;const cN=wp;let yv=0;var b1=({id:t,action:e,payload:n={}})=>{let r=t;return typeof r>"u"&&(r=cN("Job",yv),yv+=1),{id:r,action:e,payload:n}},ks={};let Ep=!1;ks.logging=Ep;ks.setLogging=t=>{Ep=t};ks.log=(...t)=>Ep?console.log.apply(void 0,t):null;const uN=b1,{log:nl}=ks,hN=wp;let vv=0;var dN=()=>{const t=hN("Scheduler",vv),e={},n={};let r=[];vv+=1;const i=()=>r.length,s=()=>Object.keys(e).length,o=()=>{if(r.length!==0){const m=Object.keys(e);for(let g=0;g<m.length;g+=1)if(typeof n[m[g]]>"u"){r[0](e[m[g]]);break}}},l=(m,g)=>new Promise((S,C)=>{const R=uN({action:m,payload:g});r.push(async P=>{r.shift(),n[P.id]=R;try{S(await P[m].apply(void 0,[...g,R.id]))}catch(T){C(T)}finally{delete n[P.id],o()}}),nl(`[${t}]: Add ${R.id} to JobQueue`),nl(`[${t}]: JobQueue length=${r.length}`),o()});return{addWorker:m=>(e[m.id]=m,nl(`[${t}]: Add ${m.id}`),nl(`[${t}]: Number of workers=${s()}`),o(),m.id),addJob:async(m,...g)=>{if(s()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return l(m,g)},terminate:async()=>{Object.keys(e).forEach(async m=>{await e[m].terminate()}),r=[]},getQueueLen:i,getNumWorkers:s}};function fN(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function pN(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var mN=pN;const gN=mN;var yN=t=>{const e={};return typeof WorkerGlobalScope<"u"?e.type="webworker":gN()?e.type="electron":typeof document=="object"?e.type="browser":typeof process=="object"&&typeof fN=="function"&&(e.type="node"),typeof t>"u"?e:e[t]};const vN=yN("type")==="browser",_N=vN?t=>new URL(t,window.location.href).href:t=>t;var wN=t=>{const e={...t};return["corePath","workerPath","langPath"].forEach(n=>{t[n]&&(e[n]=_N(e[n]))}),e},EN=t=>{const e=[],n=[],r=[],i=[],s=[];return t.blocks&&t.blocks.forEach(o=>{o.paragraphs.forEach(l=>{l.lines.forEach(c=>{c.words.forEach(u=>{u.symbols.forEach(p=>{s.push({...p,page:t,block:o,paragraph:l,line:c,word:u})}),i.push({...u,page:t,block:o,paragraph:l,line:c})}),r.push({...c,page:t,block:o,paragraph:l})}),n.push({...l,page:t,block:o})}),e.push({...o,page:t})}),{...t,blocks:e,paragraphs:n,lines:r,words:i,symbols:s}},A1={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const TN="5.1.1",xN={version:TN};var IN={workerBlobURL:!0,logger:()=>{}};const kN=xN.version,SN=IN;var bN={...SN,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${kN}/dist/worker.min.js`},AN=({workerPath:t,workerBlobURL:e})=>{let n;if(Blob&&URL&&e){const r=new Blob([`importScripts("${t}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(t);return n},CN=t=>{t.terminate()},RN=(t,e)=>{t.onmessage=({data:n})=>{e(n)}},PN=async(t,e)=>{t.postMessage(e)};const ah=t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{e(r.result)},r.onerror=({target:{error:{code:i}}})=>{n(Error(`File could not be read! Code=${i}`))},r.readAsArrayBuffer(t)}),Ad=async t=>{let e=t;if(typeof t>"u")return"undefined";if(typeof t=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t)?e=atob(t.split(",")[1]).split("").map(n=>n.charCodeAt(0)):e=await(await fetch(t)).arrayBuffer();else if(typeof HTMLElement<"u"&&t instanceof HTMLElement)t.tagName==="IMG"&&(e=await Ad(t.src)),t.tagName==="VIDEO"&&(e=await Ad(t.poster)),t.tagName==="CANVAS"&&await new Promise(n=>{t.toBlob(async r=>{e=await ah(r),n()})});else if(typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas){const n=await t.convertToBlob();e=await ah(n)}else(t instanceof File||t instanceof Blob)&&(e=await ah(t));return new Uint8Array(e)};var NN=Ad;const DN=bN,LN=AN,ON=CN,VN=RN,MN=PN,jN=NN;var FN={defaultOptions:DN,spawnWorker:LN,terminateWorker:ON,onMessage:VN,send:MN,loadImage:jN};const UN=wN,zN=EN,Wt=b1,{log:_v}=ks,BN=wp,$r=A1,{defaultOptions:$N,spawnWorker:HN,terminateWorker:WN,onMessage:qN,loadImage:wv,send:GN}=FN;let Ev=0;var C1=async(t="eng",e=$r.LSTM_ONLY,n={},r={})=>{const i=BN("Worker",Ev),{logger:s,errorHandler:o,...l}=UN({...$N,...n}),c={},u={},p=typeof t=="string"?t.split("+"):t;let m=e,g=r;const S=[$r.DEFAULT,$r.LSTM_ONLY].includes(e)&&!l.legacyCore;let C,R;const P=new Promise((U,$)=>{R=U,C=$}),T=U=>{C(U.message)};let _=HN(l);_.onerror=T,Ev+=1;const b=(U,$)=>{c[U]=$},L=(U,$)=>{u[U]=$},F=({id:U,action:$,payload:K})=>new Promise((ne,ee)=>{_v(`[${i}]: Start ${U}, action=${$}`);const pe=`${$}-${U}`;b(pe,ne),L(pe,ee),GN(_,{workerId:i,jobId:U,action:$,payload:K})}),B=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),E=U=>F(Wt({id:U,action:"load",payload:{options:{lstmOnly:S,corePath:l.corePath,logging:l.logging}}})),y=(U,$,K)=>F(Wt({id:K,action:"FS",payload:{method:"writeFile",args:[U,$]}})),I=(U,$)=>F(Wt({id:$,action:"FS",payload:{method:"readFile",args:[U,{encoding:"utf8"}]}})),k=(U,$)=>F(Wt({id:$,action:"FS",payload:{method:"unlink",args:[U]}})),w=(U,$,K)=>F(Wt({id:K,action:"FS",payload:{method:U,args:$}})),A=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),x=(U,$)=>F(Wt({id:$,action:"loadLanguage",payload:{langs:U,options:{langPath:l.langPath,dataPath:l.dataPath,cachePath:l.cachePath,cacheMethod:l.cacheMethod,gzip:l.gzip,lstmOnly:[$r.DEFAULT,$r.LSTM_ONLY].includes(m)&&!l.legacyLang}}})),te=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),se=(U,$,K,ne)=>F(Wt({id:ne,action:"initialize",payload:{langs:U,oem:$,config:K}})),Ne=(U="eng",$,K,ne)=>{if(S&&[$r.TESSERACT_ONLY,$r.TESSERACT_LSTM_COMBINED].includes($))throw Error("Legacy model requested but code missing.");const ee=$||m;m=ee;const pe=K||g;g=pe;const Bt=(typeof U=="string"?U.split("+"):U).filter($t=>!p.includes($t));return p.push(...Bt),Bt.length>0?x(Bt,ne).then(()=>se(U,ee,pe,ne)):se(U,ee,pe,ne)},_e=(U={},$)=>F(Wt({id:$,action:"setParameters",payload:{params:U}})),W=async(U,$={},K={blocks:!0,text:!0,hocr:!0,tsv:!0},ne)=>F(Wt({id:ne,action:"recognize",payload:{image:await wv(U),options:$,output:K}})),O=(U="Tesseract OCR Result",$=!1,K)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),F(Wt({id:K,action:"getPDF",payload:{title:U,textonly:$}}))),N=async(U,$)=>{if(S)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return F(Wt({id:$,action:"detect",payload:{image:await wv(U)}}))},M=async()=>(_!==null&&(WN(_),_=null),Promise.resolve());qN(_,({workerId:U,jobId:$,status:K,action:ne,data:ee})=>{const pe=`${ne}-${$}`;if(K==="resolve"){_v(`[${U}]: Complete ${$}`);let Lt=ee;ne==="recognize"?Lt=zN(ee):ne==="getPDF"&&(Lt=Array.from({...ee,length:Object.keys(ee).length})),c[pe]({jobId:$,data:Lt})}else if(K==="reject")if(u[pe](ee),ne==="load"&&C(ee),o)o(ee);else throw Error(ee);else K==="progress"&&s({...ee,userJobId:$})});const q={id:i,worker:_,setResolve:b,setReject:L,load:B,writeText:y,readText:I,removeFile:k,FS:w,loadLanguage:A,initialize:te,reinitialize:Ne,setParameters:_e,recognize:W,getPDF:O,detect:N,terminate:M};return E().then(()=>x(t)).then(()=>se(t,e,r)).then(()=>R(q)).catch(()=>{}),P};const R1=C1,KN=async(t,e,n)=>{const r=await R1(e,1,n);return r.recognize(t).finally(async()=>{await r.terminate()})},QN=async(t,e)=>{const n=await R1("osd",0,e);return n.detect(t).finally(async()=>{await n.terminate()})};var YN={recognize:KN,detect:QN},JN={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},XN={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const ZN=dN,eD=C1,tD=YN,nD=JN,rD=A1,iD=XN,{setLogging:sD}=ks;var oD={languages:nD,OEM:rD,PSM:iD,createScheduler:ZN,createWorker:eD,setLogging:sD,...tD};const P1=Av(oD),Tv={hemoglobin:["hemoglobin","haemoglobin","hb","hgb"],rbc_count:["rbc count","total rbc","red blood cells","erythrocyte count"],total_count:["total leucocyte count","tlc","wbc count","white blood cells","total count"],platelet_count:["platelet count","platelet","plt"],hematocrit:["hematocrit","hct","pcv","packed cell volume"],mcv:["mcv","mean corpuscular volume"],mch:["mch","mean corpuscular hemoglobin"],mchc:["mchc","mean corpuscular hemoglobin concentration"],rdw:["rdw","red cell distribution width"],neutrophil:["neutrophils","polymorphs","neutrophil"],lymphocyte:["lymphocytes","lymphocyte"],monocyte:["monocytes","monocyte"],eosinophil:["eosinophils","eosinophil"],basophil:["basophils","basophil"],reticulocyte_count:["reticulocyte count","retic count"],esr:["esr","erythrocyte sedimentation rate"],absolute_neutrophil_count:["absolute neutrophil count","anc"],bun:["blood urea nitrogen","bun"],creatinine:["serum creatinine","creatinine"],uric_acid:["serum uric acid","uric acid"],bun_creatinine_ratio:["bun/creatinine ratio","bun/creat ratio"],egfr:["egfr","estimated glomerular filtration rate"],urine_ph:["urine ph"],urine_specific_gravity:["urine specific gravity"],bilirubin_total:["total bilirubin","bilirubin total"],bilirubin_direct:["direct bilirubin","conjugated bilirubin"],bilirubin_indirect:["indirect bilirubin","unconjugated bilirubin"],sgot:["sgot","ast","aspartate aminotransferase"],sgpt:["sgpt","alt","alanine aminotransferase"],alkaline_phosphatase:["alkaline phosphatase","alp"],total_protein:["total protein","serum protein"],albumin:["albumin"],globulin:["globulin"],ag_ratio:["a/g ratio","albumin/globulin ratio"],ggt:["gamma gt","ggt","gamma-glutamyl transferase"],ldh:["ldh","lactate dehydrogenase"],ammonia:["ammonia"],sodium:["sodium","na+","serum sodium"],potassium:["potassium","k+","serum potassium"],chloride:["chloride","cl-","serum chloride"],bicarbonate:["bicarbonate","hco3","co2 content"],calcium:["calcium","total calcium"],ionized_calcium:["ionized calcium"],phosphorus:["phosphorus","phosphate","po4"],magnesium:["magnesium"],anion_gap:["anion gap"],glucose_fasting:["glucose fasting","fasting glucose","fbs","fasting blood sugar"],glucose_pp:["glucose pp","ppbs","post prandial"],glucose_random:["random glucose","rbs"],hba1c:["hba1c","glycated hemoglobin","glycosylated hemoglobin"],insulin:["insulin fasting","fasting insulin"],c_peptide:["c-peptide"],cholesterol:["total cholesterol","serum cholesterol"],hdl_cholesterol:["hdl cholesterol","hdl"],ldl_cholesterol:["ldl cholesterol","ldl"],triglycerides:["triglycerides"],vldl:["vldl"],ldl_hdl_ratio:["ldl/hdl ratio"],chol_hdl_ratio:["total cholesterol/hdl ratio","chol/hdl"],non_hdl_cholesterol:["non-hdl cholesterol"],tsh:["thyroid stimulating hormone","tsh","thyrotropin"],t3:["triiodothyronine","total t3","t3"],t4:["thyroxine","total t4","t4"],free_t3:["free t3","ft3"],free_t4:["free t4","ft4"],anti_tpo:["anti-tpo","thyroid peroxidase antibody"],vitamin_b12:["vitamin b12","cobalamin"],vitamin_d:["vitamin d","25-oh vitamin d","total vitamin d"],folate:["folate","folic acid"],testosterone:["testosterone","total testosterone"],estradiol:["estradiol","e2"],progesterone:["progesterone"],cortisol:["cortisol"],prolactin:["prolactin"],ferritin:["ferritin"],iron:["serum iron","iron"],tibc:["tibc","total iron binding capacity"],crp:["crp","c-reactive protein"],hs_crp:["hs-crp","high sensitivity crp"],troponin_i:["troponin i"],troponin_t:["troponin t"],ck_total:["ck","cpk","creatine kinase"],ck_mb:["ck-mb"]},bo={hemoglobin:{min:13,max:17,unit:"g/dL",foods:["Spinach","Red Meat","Beetroot"],impact:{low:"Fatigue, low stamina. Focus on endurance cautiously.",high:"Dehydration risk. Hydrate well."}},rbc_count:{min:4.5,max:5.9,unit:"mil/µL",foods:["Iron-rich foods","B12"],impact:{}},total_count:{min:4e3,max:11e3,unit:"/µL",foods:["Vitamin C","Garlic"],impact:{low:"Low immunity. Avoid growing crowds/gyms.",high:"Body fighting infection. Rest."}},platelet_count:{min:1.5,max:4.5,unit:"Lakh/µL",foods:["Papaya Leaf"],impact:{low:"Bleeding risk. Avoid contact sports."}},hematocrit:{min:38,max:50,unit:"%",foods:["Iron","Water"],impact:{}},mcv:{min:80,max:100,unit:"fL",foods:["B12","Folate"],impact:{low:"Microcytic anemia risk.",high:"Macrocytic (B12 deficiency) risk."}},mch:{min:27,max:33,unit:"pg",foods:[],impact:{}},mchc:{min:32,max:36,unit:"g/dL",foods:[],impact:{}},rdw:{min:11.5,max:14.5,unit:"%",foods:[],impact:{}},neutrophil:{min:40,max:75,unit:"%",foods:[],impact:{high:"Bacterial infection likely. Rest."}},lymphocyte:{min:20,max:45,unit:"%",foods:[],impact:{high:"Viral infection likely. Rest."}},monocyte:{min:2,max:10,unit:"%",foods:[],impact:{}},eosinophil:{min:1,max:6,unit:"%",foods:[],impact:{high:"Allergy or parasite. Monitor breathing."}},basophil:{min:0,max:1,unit:"%",foods:[],impact:{}},esr:{min:0,max:20,unit:"mm/hr",foods:["Anti-inflammatory","Turmeric"],impact:{high:"High Inflammation. Focus on recovery, light stretching."}},bun:{min:7,max:20,unit:"mg/dL",foods:["Low Protein","Water"],impact:{high:"Kidney load high. Hydrate."}},creatinine:{min:.6,max:1.3,unit:"mg/dL",foods:["Less Red Meat","Cucumber"],impact:{high:"Kidney stress. Avoid creatine supplements."}},uric_acid:{min:3.5,max:7.2,unit:"mg/dL",foods:["Cherries","No Alcohol"],impact:{high:"Gout risk. Avoid high-impact jumping."}},egfr:{min:90,max:150,unit:"mL/min",foods:[],impact:{low:"Kidney functionality concern. Consult doctor."}},bilirubin_total:{min:.3,max:1.2,unit:"mg/dL",foods:["Radish","Lemon"],impact:{high:"Jaundice risk. No heavy lifting."}},sgot:{min:10,max:40,unit:"U/L",foods:["Liver Detox"],impact:{high:"Liver/Muscle stress. Take rest days."}},sgpt:{min:7,max:56,unit:"U/L",foods:["Whole grains"],impact:{high:"Liver enzyme elevation. Avoid alcohol/painkillers."}},alkaline_phosphatase:{min:44,max:147,unit:"U/L",foods:[],impact:{}},total_protein:{min:6.3,max:8.2,unit:"g/dL",foods:["Lean Protein"],impact:{}},albumin:{min:3.5,max:5,unit:"g/dL",foods:[],impact:{}},sodium:{min:135,max:145,unit:"mmol/L",foods:["Balanced Salt"],impact:{low:"Hyponatremia risk. Salt intake needed.",high:"Dehydration."}},potassium:{min:3.5,max:5.1,unit:"mmol/L",foods:["Banana","Coconut Water"],impact:{low:"Cramp risk. Electrolytes needed.",high:"Heart rhythm risk. Medical attention."}},calcium:{min:8.5,max:10.5,unit:"mg/dL",foods:["Milk","Yogurt"],impact:{low:"Bone weakness. Resistance train carefully."}},magnesium:{min:1.7,max:2.4,unit:"mg/dL",foods:["Nuts","Seeds"],impact:{low:"Muscle twitching/cramps."}},glucose_fasting:{min:70,max:100,unit:"mg/dL",foods:["Fiber","Low GI"],impact:{high:"Diabetes risk. Cardio recommended."}},glucose_pp:{min:70,max:140,unit:"mg/dL",foods:["Vegetables"],impact:{high:"Insulin resistance."}},hba1c:{min:4,max:5.6,unit:"%",foods:["Low Carb"],impact:{high:"Long term sugar control poor."}},insulin:{min:2,max:25,unit:"µIU/mL",foods:[],impact:{}},cholesterol:{min:0,max:200,unit:"mg/dL",foods:["Oats","Garlic"],impact:{high:"Cardiac risk. Steady state cardio."}},hdl_cholesterol:{min:40,max:100,unit:"mg/dL",foods:["Nuts","Fish"],impact:{low:"Good cholesterol low. Needs exercise."}},ldl_cholesterol:{min:0,max:100,unit:"mg/dL",foods:["Fiber"],impact:{high:"Bad cholesterol. Diet control needed."}},triglycerides:{min:0,max:150,unit:"mg/dL",foods:["No Sugar","Fish Oil"],impact:{high:"Metabolic syndrome risk."}},tsh:{min:.4,max:4,unit:"µIU/mL",foods:[],impact:{high:"Hypothyroid (Slow metabolism).",low:"Hyperthyroid (Fast HR)."}},t3:{min:80,max:200,unit:"ng/dL",foods:[],impact:{}},t4:{min:5,max:12,unit:"µg/dL",foods:[],impact:{}},vitamin_b12:{min:200,max:900,unit:"pg/mL",foods:["Meat","Eggs","Supplements"],impact:{low:"Nerve health/Energy low."}},vitamin_d:{min:30,max:100,unit:"ng/mL",foods:["Sunlight","Mushrooms","Supplements"],impact:{low:"Bone density/Immunity risk."}},testosterone:{min:300,max:1e3,unit:"ng/dL",foods:["Zinc","Strength Training"],impact:{low:"Muscle loss, fatigue."}},cortisol:{min:5,max:25,unit:"µg/dL",foods:["Ashwagandha","Sleep"],impact:{high:"High stress. Reduce intensity."}},ferritin:{min:20,max:300,unit:"ng/mL",foods:[],impact:{low:"Iron stores low."}},iron:{min:60,max:170,unit:"µg/dL",foods:["Spinach"],impact:{low:"Anemia."}},crp:{min:0,max:10,unit:"mg/L",foods:["Anti-inflammatory"],impact:{high:"Systemic inflammation."}},hs_crp:{min:0,max:1,unit:"mg/L",foods:[],impact:{high:"Cardiac risk marker."}},troponin_i:{min:0,max:.04,unit:"ng/mL",foods:[],impact:{high:"CRITICAL: Heart muscle damage. ER immediately."}},ck_total:{min:20,max:200,unit:"U/L",foods:[],impact:{high:"Muscle breakdown (could be hard training or rhabdo)."}}},N1=t=>{const e=[];return Object.keys(t).forEach(n=>{const r=parseFloat(t[n]);!bo[n]||isNaN(r)||(n==="hemoglobin"&&r<11&&e.push({condition:"Anemia",risk:"High",color:"#ef4444",advice:"Consult doctor for iron supplements."}),n==="glucose_fasting"&&r>126||n==="hba1c"&&r>6.5?e.push({condition:"Diabetes",risk:"High",color:"#ef4444",advice:"Manage sugar intake strictly."}):(n==="glucose_fasting"&&r>100||n==="hba1c">5.7)&&e.push({condition:"Pre-Diabetes",risk:"Medium",color:"#f59e0b",advice:"Lifestyle changes needed."}),n==="creatinine"&&r>1.4&&e.push({condition:"Renal Insufficiency Risk",risk:"High",color:"#ef4444",advice:"Kidney function concern."}),n==="troponin_i"&&r>.04&&e.push({condition:"Myocardial Injury Risk",risk:"CRITICAL",color:"#b91c1c",advice:"Seek immediate medical attention."}),n==="hs_crp"&&r>3&&e.push({condition:"High Cardiovascular Risk",risk:"High",color:"#ef4444",advice:"Inflammation marker high."}),n==="vitamin_d"&&r<20&&e.push({condition:"Vitamin D Deficiency",risk:"Medium",color:"#f59e0b",advice:"Supplementation recommended."}),n==="tsh"&&r>5&&e.push({condition:"Hypothyroidism Risk",risk:"Medium",color:"#f59e0b",advice:"Metabolism might be slow."}))}),e},D1=(t,e=[])=>{const n=[],r=[];Object.keys(t).forEach(s=>{var p,m;const o=parseFloat(t[s]),l=bo[s];if(!l)return;let c="Normal";o<l.min&&(c="Low"),o>l.max&&(c="High");const u=c==="Low"?(p=l.impact)==null?void 0:p.low:c==="High"?(m=l.impact)==null?void 0:m.high:null;c!=="Normal"&&r.push({parameter:s,status:c,foods:l.foods,fitnessImpact:u}),n.push({parameter:s,value:o,unit:l.unit,range:`${l.min}-${l.max}`,status:c,fitnessImpact:u})});const i=e.length>0?e:N1(t);return{date:new Date().toLocaleDateString(),values:t,results:n,suggestions:r,risks:i}},aD=({onBack:t,user:e,initialViewReport:n})=>{const[r,i]=X.useState(null),[s,o]=X.useState(null),[l,c]=X.useState([]),[u,p]=X.useState(!1),[m,g]=X.useState(""),[S,C]=X.useState("hemoglobin"),[R,P]=X.useState(""),[T,_]=X.useState(null),[b,L]=X.useState(!1);X.useEffect(()=>{const w=e&&e.email?`reports_${e.email}`:`temp_reports_${Date.now()}`,A=localStorage.getItem(w);c(A?JSON.parse(A):[]),n&&o(n)},[e,n]);const F=w=>new Promise(A=>{const x=new Image;x.src=URL.createObjectURL(w),x.onload=()=>{const te=document.createElement("canvas"),se=te.getContext("2d");te.width=x.width,te.height=x.height,se.drawImage(x,0,0);const Ne=se.getImageData(0,0,te.width,te.height),_e=Ne.data,W=50,O=259*(W+255)/(255*(259-W));for(let N=0;N<_e.length;N+=4){const M=(_e[N]+_e[N+1]+_e[N+2])/3;let q=O*(M-128)+128;q<0&&(q=0),q>255&&(q=255),_e[N]=q,_e[N+1]=q,_e[N+2]=q}se.putImageData(Ne,0,0),te.toBlob(N=>{A(N)})}}),B=async w=>{p(!0),g("Applying Digital Lens (Enhancing Quality)...");try{const A=b?await F(w):w;g("Scanning Enhanced Image...");const{data:{text:x}}=await P1.recognize(A,"eng",{logger:W=>g(`${W.status} (${Math.round(W.progress*100)}%)`)});console.log("Raw OCR Text:",x);const te=x.split(`
`),se={},Ne=W=>W.toLowerCase().replace(/[^a-z0-9.]/g,"");if(te.forEach(W=>{const O=W.toLowerCase().trim();O&&Object.keys(Tv).forEach(N=>{const q=Tv[N].find(U=>O.includes(U));if(q&&!se[N]){const U=O.split(q);if(U.length<2)return;const $=U.slice(1).join(" ").trim();let K=null;const ne=$.match(/(\d+\.\d+)/);if(ne)K=parseFloat(ne[0]);else{const ee=$.match(/(\d+)\s+(\d{1,2})(?!\d)/);if(ee&&!$.includes("-"))K=parseFloat(ee[1]+"."+ee[2]),console.log(`Detected spaced decimal: "${ee[0]}" → ${K}`);else{const pe=$.match(/(\d+)/);if(pe){if(new RegExp(pe[0]+"\\s*-\\s*\\d+").test($)){console.log(`Skipping range value: ${pe[0]}`);return}K=parseFloat(pe[0])}}}if(K!==null&&!isNaN(K)){const ee=bo[N];if(ee&&(K>ee.max*5&&(K/10>=ee.min&&K/10<=ee.max?(console.log(`Auto-correcting ${N}: ${K} -> ${K/10}`),K=K/10):K/100>=ee.min&&K/100<=ee.max&&(K=K/100)),K>1900&&K<2100&&N!=="total_count"))return;se[N]=K}}})}),Object.keys(se).length===0){window.confirm(`Automatic scanning failed to find exact values. 

See raw text?
`+x.substring(0,100)+"...")&&alert(`Full Text Found by AI:
`+x),p(!1);return}const _e=N1(se);I({date:new Date().toLocaleDateString(),values:se,risks:_e})}catch(A){console.error(A),alert("Error parsing image. Please try a clearer photo.")}finally{p(!1),g("")}},E=w=>{const A=w.target.files[0];A&&(A.type.startsWith("image/")?(i(A),scanMode==="advanced"&&serverStatus==="online"?y(A):B(A)):alert("Please upload an Image (JPG/PNG) for OCR scanning."))},y=async w=>{p(!0),g("Sending to ML Neural Network...");const A=new FormData;A.append("file",w);const x="https://blood-report-fitness-evaluation-system.onrender.com";try{const te=await fetch(`${x}/analyze`,{method:"POST",body:A}),se=await te.json();if(!te.ok)throw new Error(se.error||"Server Error");if(console.log("ML Results:",se),!se.raw_results||se.raw_results.length===0){alert("ML Model returned no data (Model likely needs training). Switching to client-side OCR for this scan."),B(w);return}}catch(te){console.error(te),alert("Error connecting to Python Backend. Make sure 'server.py' is running!"),B(w)}finally{p(!1),g("")}},I=w=>{const A=D1(w.values,w.risks);o(A);const x=e&&e.email?`reports_${e.email}`:`temp_reports_${Date.now()}`,te=JSON.parse(localStorage.getItem(x)||"[]"),se=[A,...te];c(se),localStorage.setItem(x,JSON.stringify(se))},k=w=>{var se,Ne;if(w.preventDefault(),!R)return;const A=parseFloat(R),x=bo[S];let te="Normal";A<x.min&&(te="Low"),A>x.max&&(te="High"),_({parameter:S,value:A,unit:x.unit,range:`${x.min}-${x.max}`,status:te,foods:x.foods,fitnessImpact:te==="Low"?(se=x.impact)==null?void 0:se.low:te==="High"?(Ne=x.impact)==null?void 0:Ne.high:null})};return d.jsxs("div",{className:"blood-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:t,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Blood Evaluation"})]}),s?d.jsxs("div",{className:"results-section fade-in",children:[d.jsxs("div",{className:"results-header",children:[d.jsx("h3",{children:"Report Analysis"}),d.jsx("button",{className:"text-btn",onClick:()=>o(null),children:"Close"})]}),s.risks&&s.risks.length>0&&d.jsxs("div",{className:"risk-container fade-up",children:[d.jsx("h4",{children:"⚠️ AI Health Risk Detection"}),d.jsx("div",{className:"risk-grid",children:s.risks.map((w,A)=>d.jsxs("div",{className:"risk-card",style:{borderLeft:`4px solid ${w.color}`},children:[d.jsxs("div",{className:"risk-header",children:[d.jsx("span",{className:"condition-title",children:w.condition}),d.jsx("span",{className:"risk-badge",style:{background:w.color},children:w.risk})]}),d.jsx("p",{className:"risk-advice",children:w.advice}),d.jsx("button",{className:"view-details",onClick:()=>alert(`Detailed explanation for ${w.condition}: 

This condition was flagged based on your values. Please consult a doctor for verification.`),children:"View Details"})]},A))})]}),d.jsx("div",{className:"params-list",children:s.results.map((w,A)=>d.jsxs("div",{className:"param-card",children:[d.jsxs("div",{className:"param-header",children:[d.jsx("h4",{children:w.parameter.replace(/_/g," ").toUpperCase()}),d.jsxs("span",{className:`status-badge ${w.status.toLowerCase()}`,children:[w.status==="Normal"&&d.jsx(BP,{size:14}),w.status==="High"&&d.jsx(MP,{size:14}),w.status==="Low"&&d.jsx(x1,{size:14}),w.status]})]}),d.jsxs("div",{className:"param-value",children:[d.jsx("span",{className:"val",children:w.value}),d.jsx("span",{className:"unit",children:w.unit})]}),d.jsxs("p",{className:"range-info",children:["Ref Range: ",w.range]})]},A))}),s.suggestions.length>0&&d.jsxs("div",{className:"suggestions-box",children:[d.jsx("h3",{children:"🥗 Health & Fitness Recommendations"}),s.suggestions.map((w,A)=>d.jsxs("div",{className:"suggestion-item",children:[d.jsx("div",{className:"suggestion-header",children:d.jsxs("strong",{children:[w.status," ",w.parameter.replace(/_/g," ").toUpperCase()]})}),w.foods.length>0&&d.jsxs("p",{className:"food-list",children:["💡 ",d.jsx("b",{children:"Diety Tip:"})," Eat ",w.foods.join(", ")]}),w.fitnessImpact&&d.jsxs("p",{className:"fitness-list",children:["⚡ ",d.jsx("b",{children:"Fitness Impact:"})," ",w.fitnessImpact]})]},A))]})]}):d.jsxs("div",{className:"main-content",children:[d.jsxs("div",{className:"card manual-card",children:[d.jsx("h3",{children:"Quick Check"}),d.jsx("p",{className:"sub-label",children:"Enter a single value to check results instantly."}),d.jsxs("form",{onSubmit:k,className:"manual-form",children:[d.jsxs("div",{className:"row",children:[d.jsx("select",{className:"input-field",value:S,onChange:w=>{C(w.target.value),_(null)},children:Object.keys(bo).map(w=>d.jsx("option",{value:w,children:w.replace(/_/g," ").toUpperCase()},w))}),d.jsx("input",{type:"number",step:"0.1",className:"input-field",placeholder:"Value",value:R,onChange:w=>P(w.target.value),required:!0})]}),d.jsxs("button",{type:"submit",className:"btn-primary small-btn",children:["Check ",d.jsx(YP,{size:16})]})]}),T&&d.jsxs("div",{className:"manual-result fade-in",children:[d.jsx("div",{className:`result-badge ${T.status.toLowerCase()}`,children:T.status}),d.jsxs("p",{className:"result-text",children:[d.jsxs("strong",{children:[T.parameter.replace(/_/g," ").toUpperCase(),":"]})," ",T.value," ",T.unit,d.jsx("br",{}),d.jsxs("span",{className:"text-muted",children:["Normal: ",T.range]})]}),T.status!=="Normal"&&T.foods.length>0&&d.jsxs("div",{className:"diet-tip",children:[d.jsx("strong",{children:"Tip:"})," Eat ",T.foods.join(", ")]}),T.fitnessImpact&&d.jsxs("div",{className:"fitness-tip",children:[d.jsx("strong",{children:"Fitness Impact:"})," ",T.fitnessImpact]})]})]}),d.jsx("div",{className:"divider",children:"OR"}),d.jsxs("div",{className:"upload-card",children:[d.jsx("div",{className:"icon-circle",children:d.jsx(k1,{size:32,color:"var(--color-primary)"})}),d.jsx("h3",{children:"Upload Report Image"}),d.jsx("p",{children:"Take a clear photo of your report. AI will scan for values."}),d.jsx("div",{style:{marginBottom:"15px"},children:d.jsxs("label",{className:"checkbox-container",children:[d.jsx("input",{type:"checkbox",checked:b,onChange:w=>L(w.target.checked)}),d.jsx("span",{className:"checkmark"}),"Enable Digital Lens (Enhance Image)"]})}),d.jsxs("label",{className:"btn-secondary upload-btn",children:[u?m||"Scanning...":"Select Image (JPG/PNG)",d.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:E,disabled:u})]})]}),l.length>0&&d.jsxs("div",{className:"history-section",children:[d.jsx("h3",{children:"Recent Reports"}),l.map((w,A)=>d.jsxs("div",{className:"history-item",onClick:()=>o(w),children:[d.jsx(_p,{size:18,className:"text-muted"}),d.jsx("span",{children:w.date}),d.jsx("span",{className:"arrow",children:"→"})]},A))]})]}),d.jsx("style",{children:`
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
      `})]})},rl={breakfast:[{name:"Puttu & Kadala Curry",cal:450},{name:"Appam & Egg Roast",cal:400},{name:"Idli & Sambar",cal:300},{name:"Dosa & Chutney",cal:350},{name:"Oats Upma",cal:250}],lunch:[{name:"Kerala Rice Meals with Fish Curry",cal:650},{name:"Red Rice, Thoran & Curd",cal:500},{name:"Biriyani (Chicken)",cal:800},{name:"Kanji & Payar",cal:400}],snack:[{name:"Banana Fry (Pazham Pori) - 2 pcs",cal:300},{name:"Tea & Vada",cal:250},{name:"Fruit Salad",cal:150},{name:"Nuts & Dates",cal:200}],dinner:[{name:"Chapati & Veg Curry",cal:400},{name:"Wheat Porotta & Chicken",cal:600},{name:"Kanji (Rice Gruel)",cal:300},{name:"Salad & Grilled Fish",cal:350}]},lD=({userProfile:t,onBack:e})=>{const[n,r]=X.useState(null),[i,s]=X.useState(0),[o,l]=X.useState(null);X.useEffect(()=>{n&&t&&u()},[n]);const c=()=>{if(!t)return 2e3;const{weight:p,heightCm:m,age:g,gender:S}=t;let C=10*p+6.25*m-5*g;S==="male"?C+=5:C-=161;let R=Math.round(C*1.375);return n==="loss"?R-500:n==="gain"?R+500:R},u=()=>{const p=c();s(p);const m=g=>g[Math.floor(Math.random()*g.length)];l({breakfast:m(rl.breakfast),lunch:m(rl.lunch),snack:m(rl.snack),dinner:m(rl.dinner)})};return d.jsxs("div",{className:"fitness-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:e,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Fitness Helper"})]}),n?d.jsxs("div",{className:"plan-view fade-in",children:[d.jsxs("div",{className:"summary-card",children:[d.jsxs("div",{className:"cal-target",children:[d.jsx("span",{className:"label",children:"Daily Target"}),d.jsx("h1",{children:i}),d.jsx("span",{className:"unit",children:"kcal"})]}),d.jsx("div",{className:"goal-badge",children:n==="loss"?"Weight Loss":n==="gain"?"Weight Gain":"Maintain"}),d.jsx("button",{className:"change-btn",onClick:()=>r(null),children:"Change Goal"})]}),d.jsxs("div",{className:"meals-list",children:[d.jsx("h3",{children:"📅 Today's Kerala Diet Plan"}),o&&d.jsxs(d.Fragment,{children:[d.jsx(il,{type:"Breakfast",icon:d.jsx(mv,{size:18}),data:o.breakfast}),d.jsx(il,{type:"Lunch",icon:d.jsx(So,{size:18}),data:o.lunch}),d.jsx(il,{type:"Snack",icon:d.jsx(mv,{size:18}),data:o.snack}),d.jsx(il,{type:"Dinner",icon:d.jsx(So,{size:18}),data:o.dinner})]})]})]}):d.jsxs("div",{className:"goal-selection",children:[d.jsx("h3",{children:"What is your goal?"}),d.jsxs("button",{className:"goal-card",onClick:()=>r("loss"),children:[d.jsx("div",{className:"icon-box loss",children:d.jsx(XP,{size:24})}),d.jsxs("div",{className:"text",children:[d.jsx("h4",{children:"Weight Loss"}),d.jsx("p",{children:"Reduce body fat locally."})]})]}),d.jsxs("button",{className:"goal-card",onClick:()=>r("maintain"),children:[d.jsx("div",{className:"icon-box maintain",children:d.jsx(iN,{size:24})}),d.jsxs("div",{className:"text",children:[d.jsx("h4",{children:"Maintain Weight"}),d.jsx("p",{children:"Stay healthy and fit."})]})]}),d.jsxs("button",{className:"goal-card",onClick:()=>r("gain"),children:[d.jsx("div",{className:"icon-box gain",children:d.jsx(So,{size:24})}),d.jsxs("div",{className:"text",children:[d.jsx("h4",{children:"Weight Gain"}),d.jsx("p",{children:"Build muscle mass."})]})]})]}),d.jsx("style",{children:`
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
      `})]})},il=({type:t,icon:e,data:n})=>d.jsxs("div",{className:"meal-card",children:[d.jsxs("div",{className:"meal-info",children:[d.jsxs("h4",{children:[e," ",t]}),d.jsx("p",{children:n.name})]}),d.jsxs("div",{className:"meal-cal",children:[n.cal," kcal"]})]}),cD=[{id:1,name:"Jumping Jacks",calories:"10-15 cal/min",duration:"1 min",desc:"Full body cardio warm-up.",steps:["Stand with feet together, hands at sides.","Jump legs apart and raise arms overhead.","Jump back to starting position.","Repeat quickly."]},{id:2,name:"Push-ups",calories:"0.3-0.6 cal/rep",duration:"15-20 reps",desc:"Strengthens chest, shoulders, and triceps.",steps:["Start in plank position.","Lower chest to floor.","Push back up strongly.","Keep core tight."]},{id:3,name:"Plank",calories:"3-4 cal/min",duration:"30-45 sec",desc:"Core stability and abdominal strength.",steps:["Rest on forearms and toes.","Keep body in straight line.","Hold selection tight.","Breathe normally."]},{id:4,name:"Squats",calories:"0.3-0.5 cal/rep",duration:"20 reps",desc:"Legs and glutes builder.",steps:["Stand feet shoulder-width apart.","Lower hips like sitting in a chair.","Keep chest up.","Return to standing."]},{id:5,name:"Lunges",calories:"0.5 cal/rep",duration:"15 reps/leg",desc:"Balance and leg strength.",steps:["Step forward with one leg.","Lower hips until both knees are 90°.","Push back to start.","Switch legs."]},{id:6,name:"Burpees",calories:"10-15 cal/min",duration:"10-15 reps",desc:"High intensity full body calorie burner.",steps:["Squat down.","Kick feet back to plank.","Do a push-up.","Jump feet forward and jump up."]},{id:7,name:"High Knees",calories:"7-9 cal/min",duration:"1 min",desc:"Cardio and core engagement.",steps:["Run in place.","Lift knees as high as possible.","Pump arms.","Keep a fast pace."]},{id:8,name:"Mountain Climbers",calories:"8-10 cal/min",duration:"45 sec",desc:"Cardio, core, and arm endurance.",steps:["Start in plank.","Drive one knee to chest.","Switch legs quickly.","Keep hips down."]}],uD=({onBack:t})=>{const[e,n]=X.useState(null);return d.jsxs("div",{className:"workout-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:t,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Home Workouts"})]}),d.jsxs("div",{className:"info-card",children:[d.jsx("div",{className:"intro-icon",children:d.jsx(gv,{size:28,color:"#FF6B6B"})}),d.jsx("p",{children:"Burn calories with these 8 basic home exercises. No equipment needed!"})]}),d.jsx("div",{className:"workout-list",children:cD.map(r=>d.jsxs("div",{className:"workout-card",children:[d.jsxs("div",{className:"w-header",children:[d.jsx("h3",{children:r.name}),d.jsxs("span",{className:"cal-badge",children:[d.jsx(gv,{size:12,fill:"currentColor"})," ",r.calories]})]}),d.jsx("p",{className:"w-desc",children:r.desc}),d.jsxs("div",{className:"w-footer",children:[d.jsxs("span",{className:"duration",children:[d.jsx(ZP,{size:14})," ",r.duration]}),d.jsx("button",{className:"start-btn",onClick:()=>n(r),children:"Steps"})]})]},r.id))}),e&&d.jsx("div",{className:"modal-overlay fade-in",onClick:()=>n(null),children:d.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[d.jsx("button",{className:"close-btn",onClick:()=>n(null),children:d.jsx(rN,{size:24})}),d.jsxs("div",{className:"modal-header",children:[d.jsx("h3",{children:e.name}),d.jsx("span",{className:"cal-pill",children:e.calories})]}),(()=>{const i={"Jumping Jacks":"iSSAk4XCsRA",Squats:"YaXPRqUwItQ","Push-ups":"IODxDxX7oi4",Burpees:"dZgVxmf6jkA","High Knees":"oDdkytliOqE",Lunges:"QOVaHwm-Q6U",Plank:"pSHjTRCQxIw","Mountain Climbers":"zT-9L3CEcmk"}[e.name]||"UpH7rm0cYbM";return d.jsx("div",{style:{width:"100%",height:"220px",marginBottom:"20px",borderRadius:"12px",overflow:"hidden",background:"#000"},children:d.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${i}?autoplay=1&mute=1&loop=1&playlist=${i}&controls=0&showinfo=0&modestbranding=1`,title:"Workout Demonstration",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"block"}})})})(),d.jsxs("div",{className:"modal-body",children:[d.jsxs("h4",{children:[d.jsx(I1,{size:16})," How to do it:"]}),d.jsx("ul",{className:"steps-list",children:e.steps.map((r,i)=>d.jsxs("li",{children:[d.jsx("span",{className:"step-num",children:i+1}),r]},i))})]})]})}),d.jsx("style",{children:`
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
            `})]})},hD=({onBack:t,userProfile:e})=>{const[n,r]=X.useState(()=>{if(!(e!=null&&e.email))return[];const m=localStorage.getItem(`weight_log_${e.email}`);return m?JSON.parse(m):[]}),[i,s]=X.useState(""),o=()=>{if(!i||isNaN(i))return;const m={weight:parseFloat(i),date:new Date().toISOString(),displayDate:new Date().toLocaleDateString()},g=[...n,m];r(g),e!=null&&e.email&&localStorage.setItem(`weight_log_${e.email}`,JSON.stringify(g)),s("")},c=(()=>{if(n.length<2)return{change:0,type:"neutral"};const m=n[n.length-1].weight,g=n[n.length-2].weight,S=m-g;return{change:Math.abs(S).toFixed(1),type:S>0?"gain":S<0?"loss":"neutral"}})(),u=(e==null?void 0:e.weight)||(n.length>0?n[0].weight:0),p=n.length>0?n[n.length-1].weight:u;return d.jsxs("div",{className:"weight-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:t,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Weight Progress"})]}),d.jsxs("div",{className:"stats-card",children:[d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"label",children:"Starting Weight"}),d.jsxs("span",{className:"value",children:[u," kg"]})]}),d.jsx("div",{className:"divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"label",children:"Current Weight"}),d.jsxs("span",{className:"value primary",children:[p," kg"]})]}),d.jsx("div",{className:"divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"label",children:"Change"}),d.jsxs("span",{className:`value ${c.type}`,children:[c.type==="gain"&&d.jsx(nN,{size:16}),c.type==="loss"&&d.jsx(tN,{size:16}),c.type==="neutral"&&d.jsx(GP,{size:16}),c.change," kg"]})]})]}),d.jsxs("div",{className:"input-section",children:[d.jsx("h3",{children:"Log Current Weight"}),d.jsxs("div",{className:"input-group",children:[d.jsx("input",{type:"number",placeholder:"Enter weight in kg",value:i,onChange:m=>s(m.target.value),step:"0.1"}),d.jsx("button",{className:"add-btn",onClick:o,children:"Add"})]})]}),d.jsxs("div",{className:"history-section",children:[d.jsx("h3",{children:"Weight History"}),n.length===0?d.jsxs("div",{className:"empty-state",children:[d.jsx(T1,{size:40,color:"#cbd5e1"}),d.jsx("p",{children:"No entries yet. Start logging your weight!"})]}):d.jsx("div",{className:"history-list",children:[...n].reverse().map((m,g)=>d.jsxs("div",{className:"history-item",children:[d.jsxs("div",{className:"date-badge",children:[d.jsx(zP,{size:14}),m.displayDate]}),d.jsxs("div",{className:"weight-display",children:[m.weight," kg"]})]},g))})]}),d.jsx("style",{children:`
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
            `})]})},dD=[{q:"Best protein sources?",a:"Top protein sources: Eggs, Chicken Breast, Fish, Paneer, Lentils (Dal), Soy chunks, and Greek Yogurt."},{q:"Pre-workout snacks?",a:"Eat 30-60 mins before: Banana, Oats, Peanut butter toast, or a handful of Almonds."},{q:"How to build muscle?",a:"Focus on: 1. Resistance training (lifting weights), 2. High protein intake (1.6g per kg weight), 3. Progressive overload, 4. 7-8 hours sleep."},{q:"Weight loss tips?",a:"To lose weight: Maintain a calorie deficit, increase fiber intake, stay hydrated, and include consistent Zone 2 cardio."}],xv=["blood","report","diet","food","fitness","exercise","weight","bmi","sugar","cholesterol","protein","health","heart","hemoglobin","fat","muscle","gym","workout","yoga","sleep","water","cardio","calories","supplement","recovery","strength"],fD=({onBack:t,userProfile:e})=>{const[n,r]=X.useState([{id:1,text:`Hello ${e!=null&&e.name?e.name.split(" ")[0]:""}! I'm your Health Assistant. Ask me about your blood report, diet, or workout.`,sender:"bot"}]),[i,s]=X.useState(""),[o,l]=X.useState(!1),c=X.useRef(null),u=()=>{var R;(R=c.current)==null||R.scrollIntoView({behavior:"smooth"})},[p,m]=X.useState([]);X.useEffect(()=>{if(e!=null&&e.email){const R=JSON.parse(localStorage.getItem(`reports_${e.email}`)||"[]");m(R)}u()},[n,e==null?void 0:e.email]);const g=R=>{const P=R.toLowerCase();if(P.includes("analyze")||P.includes("summary")||P.includes("my report")){if(p.length===0)return"I don't see any blood reports uploaded yet. specific values. You can upload one in the Blood Evaluation section!";const I=p[0],k=I.results.filter(A=>A.status!=="Normal");if(k.length===0)return"Your latest report looks perfect! All values are within the normal range. Keep it up! 🌟";const w=k.map(A=>`${A.parameter} is ${A.status} (${A.value} ${A.unit})`).join(", ");return`Based on your latest report (${I.date}), here are some things to watch: ${w}. Would you like diet tips for any of these?`}const T=xv.find(I=>P.includes(I));if(T&&p.length>0){const k=p[0].results.find(w=>w.parameter.toLowerCase().includes(T));if(k)return`Your latest ${k.parameter} is ${k.value} ${k.unit}, which is ${k.status}. ${k.fitnessImpact||""}`}const _=e!=null&&e.diseases?e.diseases.toLowerCase():"",b=e!=null&&e.allergies?e.allergies.toLowerCase():"",L=(e==null?void 0:e.age)||"",F=(e==null?void 0:e.weight)||"",B=(e==null?void 0:e.bloodGroup)||"",E=(e==null?void 0:e.gender)||"";return!xv.some(I=>P.includes(I))&&!P.includes("hello")&&!P.includes("hi")?`I'm analyzing your health data... I can help with Blood Reports, Diet, and Fitness. Try asking "Analyze my report" or "How is my hemoglobin?".`:P.includes("my profile")||P.includes("my health")||P.includes("about me")?`You are a ${L}-year-old ${E} with Blood Group ${B}. Current weight: ${F}kg. Known conditions: ${_||"None"}. Allergies: ${b||"None"}.`:_.includes("diabetes")&&(P.includes("sugar")||P.includes("sweet")||P.includes("fruit"))?"Since you mentioned Diabetes, be very careful with high GI fruits like mangoes and chikoo. Opt for apples, berries, and papaya. Monitor your blood sugar regularly and avoid refined sugars completely.":(_.includes("hypertension")||_.includes("bp"))&&(P.includes("salt")||P.includes("diet"))?"For hypertension management, the DASH diet is recommended. Reduce sodium intake (salt), avoid pickles and papad, and increase potassium-rich foods like bananas and leafy greens.":P.includes("protein")?"Protein is the building block. vegetarians: Paneer, Dal, Soy. Non-veg: Chicken, Fish. "+(_.includes("kidney")?"However, since you have kidney concerns, please consult your doctor for the exact protein limit.":"Aim for 1.2g/kg body weight."):P.includes("pre-workout")||P.includes("before gym")?"A banana or oatmeal 45 mins before workout is great energy.":P.includes("post-workout")||P.includes("after gym")?"Post-workout, have a protein source (shake/chicken/eggs) within 45 mins to maximize recovery.":P.includes("muscle")?"Building muscle requires specific resistance training, protein surplus, and sleep. Consistency is key!":P.includes("cardio")?"Cardio improves heart health and burns calories. 150 mins/week is a good target.":P.includes("bmi")?"BMI is a rough indicator. "+(e!=null&&e.weight?`At ${e.weight}kg, your focus should be on body composition (muscle vs fat) rather than just the scale.`:"Check your weight-to-height ratio."):P.includes("diet")||P.includes("food")?b?`Given your allergies to ${b}, ensure you check food labels. Focus on whole, unprocessed foods.`:"A balanced diet with protein, good fats, and fiber is essential. Avoid processed foods.":P.includes("hemoglobin")?"Iron-rich foods (spinach, dates, red meat) help boost hemoglobin. Vitamin C helps absorption.":P.includes("sugar")?"Minimize added sugars. Natural sugars in whole fruits are generally okay in moderation.":P.includes("weight")?"Weight management is about Calorie In vs Calorie Out, quality of food, and hormonal balance.":P.includes("sleep")?"7-9 hours of sleep is non-negotiable for recovery and mental health.":"That's a good question. Based on general fitness guidelines, consistency in diet and exercise is 90% of the game. How is your sleep lately?"},S=R=>{if(R.preventDefault(),!i.trim())return;const P={id:Date.now(),text:i,sender:"user"};r(T=>[...T,P]),s(""),l(!0),setTimeout(()=>{const T={id:Date.now()+1,text:g(P.text),sender:"bot"};r(_=>[..._,T]),l(!1)},1200)},C=R=>{const P={id:Date.now(),text:R.q,sender:"user"};r(T=>[...T,P]),l(!0),setTimeout(()=>{const T={id:Date.now()+1,text:R.a,sender:"bot"};r(_=>[..._,T]),l(!1)},1200)};return d.jsxs("div",{className:"chat-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:t,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Health Assistant"})]}),d.jsxs("div",{className:"chat-window",children:[n.map(R=>d.jsxs("div",{className:`message-row ${R.sender}`,children:[R.sender==="bot"&&d.jsx("div",{className:"avatar bot",children:d.jsx(pv,{size:16})}),d.jsx("div",{className:"message-bubble",children:R.text}),R.sender==="user"&&d.jsx("div",{className:"avatar user",children:d.jsx(S1,{size:16})})]},R.id)),o&&d.jsxs("div",{className:"message-row bot",children:[d.jsx("div",{className:"avatar bot",children:d.jsx(pv,{size:16})}),d.jsxs("div",{className:"message-bubble typing",children:[d.jsx("span",{children:"."}),d.jsx("span",{children:"."}),d.jsx("span",{children:"."})]})]}),d.jsx("div",{ref:c})]}),d.jsxs("div",{className:"input-section",children:[d.jsx("div",{className:"chips-row",children:dD.map((R,P)=>d.jsx("button",{className:"chip",onClick:()=>C(R),disabled:o,children:R.q},P))}),d.jsxs("form",{onSubmit:S,className:"input-form",children:[d.jsx("input",{type:"text",value:i,onChange:R=>s(R.target.value),placeholder:"Ask about health...",className:"chat-input"}),d.jsx("button",{type:"submit",className:"send-btn",children:d.jsx(JP,{size:20})})]})]}),d.jsx("style",{children:`
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
      `})]})},pD=({message:t,onClose:e})=>(X.useEffect(()=>{const n=setTimeout(()=>{e()},5e3);return()=>clearTimeout(n)},[e]),d.jsxs("div",{className:"toast-notification",children:[d.jsx("div",{className:"icon-bg",children:d.jsx(FP,{size:20})}),d.jsxs("div",{className:"content",children:[d.jsx("h4",{children:"Reminder"}),d.jsx("p",{children:t})]}),d.jsx("button",{onClick:e,className:"close-btn",children:"×"}),d.jsx("style",{children:`
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
       `})]})),Iv=t=>{let e={breakfast:[{name:"Oatmeal with Walnuts & Apple",calories:350,carbs:"60g",protein:"12g",fat:"8g",benefits:["Heart Healthy","High Fiber"]},{name:"Egg Whites & Whole Wheat Toast",calories:300,carbs:"30g",protein:"20g",fat:"5g",benefits:["Muscle Repair"]}],lunch:[{name:"Grilled Chicken Salad with Quinoa",calories:500,carbs:"40g",protein:"40g",fat:"15g",benefits:["Lean Protein","Complete Meal"]},{name:"Lentil Soup (Dal) & Brown Rice",calories:450,carbs:"60g",protein:"18g",fat:"8g",benefits:["Plant Protein","Easy Digestion"]}],snacks:[{name:"Greek Yogurt with Berries",calories:150,carbs:"15g",protein:"12g",fat:"0g",benefits:["Probiotics","Antioxidants"]},{name:"Handful of Almonds",calories:160,carbs:"6g",protein:"6g",fat:"14g",benefits:["Healthy Fats"]}],dinner:[{name:"Baked Salmon with Steamed Broccoli",calories:550,carbs:"10g",protein:"45g",fat:"30g",benefits:["Omega-3","Light Dinner"]},{name:"Stir-Fried Tofu with Mixed Veggies",calories:400,carbs:"15g",protein:"25g",fat:"20g",benefits:["Vegan Option","Light"]}],recommendations:["Drink 3-4 liters of water daily.","Eat dinner at least 2 hours before sleep.","Include a serving of raw salad with lunch.","Limit processed sugar intake."],restrictions:[]};if(!t||!t.results)return e;const{results:n}=t,r=g=>n.find(S=>S.parameter===g),i=r("glucose_fasting"),s=r("glucose_pp");(i&&i.status==="High"||s&&s.status==="High")&&(e.recommendations.unshift("⚠️ STRICT LOW GLYCEMIC INDEX DIET RECOMMENDED"),e.restrictions.push("White bread, white rice, pasta","Sugary drinks & desserts","High-sugar fruits (mango, grapes)"),e.breakfast=[{name:"Steel-Cut Oats with Cinnamon (No Sugar)",calories:300,carbs:"50g",protein:"10g",fat:"6g",benefits:["Low GI","Cinnamon Helps Insulin"]},{name:"Vegetable Omelette (Double Spinach)",calories:320,carbs:"5g",protein:"22g",fat:"20g",benefits:["Keto-Friendly","Iron Boost"]}],e.snacks=[{name:"Roasted Chana (Chickpeas)",calories:180,carbs:"20g",protein:"10g",fat:"4g",benefits:["Complex Carbs","Satiety"]},{name:"Cucumber & Hummus Sticks",calories:150,carbs:"15g",protein:"6g",fat:"8g",benefits:["Hydrating","Low Carb"]}]);const o=r("cholesterol"),l=r("triglycerides"),c=r("ldl_cholesterol");(o&&o.status==="High"||l&&l.status==="High"||c&&c.status==="High")&&(e.recommendations.unshift("⚠️ HEART HEALTHY FATS ONLY (Avoid Saturated Fats)"),e.restrictions.push("Red meat","Butter/Ghee","Fried foods","Full-fat dairy"),e.dinner=[{name:"Grilled Mackerel/Salmon (No Butter)",calories:500,carbs:"0g",protein:"40g",fat:"25g",benefits:["High Omega-3","Lowers inflammation"]},{name:"Quinoa Bowl with Beans",calories:450,carbs:"60g",protein:"18g",fat:"8g",benefits:["Fiber lowers cholesterol"]}],e.breakfast.some(g=>g.name.includes("Oat"))||e.breakfast.unshift({name:"Bowl of Oatmeal with Flaxseeds",calories:350,carbs:"55g",protein:"12g",fat:"10g",benefits:["Soluble Fiber","Cholesterol Lowering"]}));const u=r("hemoglobin");u&&u.status==="Low"&&(e.recommendations.unshift("⚠️ IRON-RICH DIET (Consume Vitamin C for absorption)"),e.lunch.forEach(g=>{g.name.includes("Spinach")||(g.name+=" + Side Spinach Salad"),g.benefits.push("Iron Booster")}),e.snacks.push({name:"Dates & Walnuts",calories:200,carbs:"40g",protein:"4g",fat:"8g",benefits:["High Iron","Energy"]}),e.restrictions.push("Tea/Coffee within 1 hour of meals (Inhibits Iron absorption)"));const p=r("uric_acid");p&&p.status==="High"&&(e.recommendations.unshift("⚠️ LOW PURINE DIET (Manage Uric Acid)"),e.restrictions.push("Red meat","Shellfish","Spinach","Cauliflower","Alcohol"),["breakfast","lunch","dinner","snacks"].forEach(g=>{e[g]=e[g].map(S=>S.name.includes("Spinach")?{...S,name:S.name.replace("Spinach","Cucumber"),benefits:S.benefits.filter(C=>C!=="Iron Booster")}:S)}),e.snacks.push({name:"Bowl of Cherries / Berries",calories:100,carbs:"25g",protein:"1g",fat:"0g",benefits:["Lowers Uric Acid"]}));const m=r("tsh");return m&&m.status==="High"&&(e.recommendations.unshift("⚠️ THYROID SUPPORT (Limit Goitrogens raw)"),e.restrictions.push("Raw Cruciferous Veggies (Cabbage, Broccoli, Cauliflower) - Cook them well"),e.recommendations.push("Ensure iodized salt usage or eat seaweed."),e.breakfast.push({name:"Brazil Nuts (2-3) & Smoothie",calories:300,carbs:"40g",protein:"10g",fat:"15g",benefits:["Selenium for Thyroid"]})),e},mD=({onBack:t,user:e})=>{const[n,r]=X.useState(null),[i,s]=X.useState(null),[o,l]=X.useState(!0),[c,u]=X.useState(!1),[p,m]=X.useState("breakfast");X.useEffect(()=>{g()},[e]);const g=()=>{e&&e.email?`${e.email}`:`${Date.now()}`;let C=null;if(e&&e.email){const R=localStorage.getItem(`reports_${e.email}`);if(R){const P=JSON.parse(R);P.length>0&&(C=P[0])}}else{const R=Object.keys(localStorage).filter(P=>P.startsWith("temp_reports_"));if(R.length>0){const P=localStorage.getItem(R[R.length-1]);if(P){const T=JSON.parse(P);T.length>0&&(C=T[0])}}}if(C){r(C);const R=Iv(C);s(R)}l(!1)},S=async C=>{const R=C.target.files[0];if(R){u(!0);try{const{data:{text:P}}=await P1.recognize(R,"eng"),T=P.split(`
`),_={},b={hemoglobin:["hemoglobin","hb"],glucose_fasting:["glucose fasting","fbs"],cholesterol:["cholesterol"],uric_acid:["uric acid"],tsh:["tsh"]};if(T.forEach(y=>{const I=y.toLowerCase();Object.keys(b).forEach(k=>{if(b[k].some(w=>I.includes(w))){const w=y.match(/(\d+(\.\d+)?)/g);w&&(_[k]=parseFloat(w[0]))}})}),Object.keys(_).length===0){alert("Could not detect clear values. Please try a clearer image."),u(!1);return}const L=D1(_);s(Iv(L)),r(L);const F=e&&e.email?`reports_${e.email}`:`temp_reports_${Date.now()}`,B=JSON.parse(localStorage.getItem(F)||"[]"),E=[L,...B];localStorage.setItem(F,JSON.stringify(E))}catch(P){console.error(P),alert("Error scanning file.")}finally{u(!1)}}};return o?d.jsx("div",{className:"p-4",children:"Loading Diet Plan..."}):n?d.jsxs("div",{className:"diet-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:t,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Your Personalized Diet"})]}),d.jsx("div",{className:"health-summary",children:i.recommendations.some(C=>C.includes("⚠️"))?d.jsxs("div",{className:"alert-badge warning",children:[d.jsx(x1,{size:16}),d.jsx("span",{children:"Based on your report: Modifications applied for specific conditions."})]}):d.jsxs("div",{className:"alert-badge success",children:[d.jsx($P,{size:16}),d.jsx("span",{children:"Report looks balanced. Showing base healthy plan."})]})}),d.jsxs("div",{className:"recommendations-box",children:[d.jsx("h4",{children:"Key Guidelines"}),d.jsx("ul",{children:i.recommendations.slice(0,3).map((C,R)=>d.jsx("li",{className:C.includes("⚠️")?"high-priority":"",children:C},R))})]}),d.jsx("div",{className:"meal-tabs",children:["breakfast","lunch","snacks","dinner"].map(C=>d.jsx("button",{className:`tab-btn ${p===C?"active":""}`,onClick:()=>m(C),children:C.charAt(0).toUpperCase()+C.slice(1)},C))}),d.jsx("div",{className:"meal-content",children:i[p].map((C,R)=>d.jsxs("div",{className:"food-card slide-in",children:[d.jsxs("div",{className:"food-header",children:[d.jsx("h3",{children:C.name}),d.jsxs("span",{className:"cal-badge",children:[C.calories," kcal"]})]}),d.jsxs("div",{className:"macros-row",children:[d.jsxs("span",{className:"macro",children:["C: ",C.carbs]}),d.jsxs("span",{className:"macro",children:["P: ",C.protein]}),d.jsxs("span",{className:"macro",children:["F: ",C.fat]})]}),d.jsx("div",{className:"benefits-tags",children:C.benefits.map((P,T)=>d.jsx("span",{className:"tag",children:P},T))})]},R))}),i.restrictions.length>0&&d.jsxs("div",{className:"restrictions-box",children:[d.jsx("h4",{children:"⛔ Avoid / Limit"}),d.jsx("p",{children:i.restrictions.join(", ")})]}),d.jsx("style",{children:`
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
            `})]}):d.jsxs("div",{className:"diet-container fade-in",children:[d.jsxs("div",{className:"header-row",children:[d.jsx("button",{onClick:t,className:"back-btn",children:d.jsx(Bn,{size:24})}),d.jsx("h2",{children:"Specialized Diet"})]}),d.jsxs("div",{className:"no-report-state",children:[d.jsx("div",{className:"icon-box",children:d.jsx(So,{size:40,color:"var(--color-primary)"})}),d.jsx("h3",{children:"No Report Uploaded"}),d.jsx("p",{children:"Please upload your blood test report to get a personalized diet plan tailored to your body's needs."}),d.jsxs("label",{className:"btn-primary upload-btn-large",children:[c?"Scanning...":"Upload Report Now",d.jsx(k1,{size:18,style:{marginLeft:8}}),d.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:S,disabled:c})]})]}),d.jsx("style",{children:`
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
                `})]})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const gD=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,o)=>{n.platforms.set(s,o)},i=s=>{n.platforms.has(s)&&(n.currentPlatform=n.platforms.get(s))};return n.addPlatform=r,n.setPlatform=i,n},yD=t=>t.CapacitorPlatforms=gD(t),L1=yD(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});L1.addPlatform;L1.setPlatform;var ps;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(ps||(ps={}));class lh extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const vD=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},_D=t=>{var e,n,r,i,s;const o=t.CapacitorCustomPlatform||null,l=t.Capacitor||{},c=l.Plugins=l.Plugins||{},u=t.CapacitorPlatforms,p=()=>o!==null?o.name:vD(t),m=((e=u==null?void 0:u.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||p,g=()=>m()!=="web",S=((n=u==null?void 0:u.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||g,C=E=>{const y=L.get(E);return!!(y!=null&&y.platforms.has(m())||T(E))},R=((r=u==null?void 0:u.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||C,P=E=>{var y;return(y=l.PluginHeaders)===null||y===void 0?void 0:y.find(I=>I.name===E)},T=((i=u==null?void 0:u.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||P,_=E=>t.console.error(E),b=(E,y,I)=>Promise.reject(`${I} does not have an implementation of "${y}".`),L=new Map,F=(E,y={})=>{const I=L.get(E);if(I)return console.warn(`Capacitor plugin "${E}" already registered. Cannot register plugins twice.`),I.proxy;const k=m(),w=T(E);let A;const x=async()=>(!A&&k in y?A=typeof y[k]=="function"?A=await y[k]():A=y[k]:o!==null&&!A&&"web"in y&&(A=typeof y.web=="function"?A=await y.web():A=y.web),A),te=(N,M)=>{var q,U;if(w){const $=w==null?void 0:w.methods.find(K=>M===K.name);if($)return $.rtype==="promise"?K=>l.nativePromise(E,M.toString(),K):(K,ne)=>l.nativeCallback(E,M.toString(),K,ne);if(N)return(q=N[M])===null||q===void 0?void 0:q.bind(N)}else{if(N)return(U=N[M])===null||U===void 0?void 0:U.bind(N);throw new lh(`"${E}" plugin is not implemented on ${k}`,ps.Unimplemented)}},se=N=>{let M;const q=(...U)=>{const $=x().then(K=>{const ne=te(K,N);if(ne){const ee=ne(...U);return M=ee==null?void 0:ee.remove,ee}else throw new lh(`"${E}.${N}()" is not implemented on ${k}`,ps.Unimplemented)});return N==="addListener"&&($.remove=async()=>M()),$};return q.toString=()=>`${N.toString()}() { [capacitor code] }`,Object.defineProperty(q,"name",{value:N,writable:!1,configurable:!1}),q},Ne=se("addListener"),_e=se("removeListener"),W=(N,M)=>{const q=Ne({eventName:N},M),U=async()=>{const K=await q;_e({eventName:N,callbackId:K},M)},$=new Promise(K=>q.then(()=>K({remove:U})));return $.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await U()},$},O=new Proxy({},{get(N,M){switch(M){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return w?W:Ne;case"removeListener":return _e;default:return se(M)}}});return c[E]=O,L.set(E,{name:E,proxy:O,platforms:new Set([...Object.keys(y),...w?[k]:[]])}),O},B=((s=u==null?void 0:u.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||F;return l.convertFileSrc||(l.convertFileSrc=E=>E),l.getPlatform=m,l.handleError=_,l.isNativePlatform=S,l.isPluginAvailable=R,l.pluginMethodNoop=b,l.registerPlugin=B,l.Exception=lh,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},wD=t=>t.Capacitor=_D(t),hi=wD(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Tp=hi.registerPlugin;hi.Plugins;class O1{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new hi.Exception(e,ps.Unimplemented)}unavailable(e="not available"){return new hi.Exception(e,ps.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const kv=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Sv=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ED extends O1{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Sv(i).trim(),s=Sv(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=kv(e.key),r=kv(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Tp("CapacitorCookies",{web:()=>new ED});const TD=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),xD=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},ID=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=e?encodeURIComponent(u):u,c+=`${s}=${l}&`}),c.slice(0,-1)):(l=e?encodeURIComponent(o):o,c=`${s}=${l}`),`${r}&${c}`},"").substr(1):null,kD=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=xD(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,c)=>{s.append(c,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class SD extends O1{async request(e){const n=kD(e,e.webFetchExtra),r=ID(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await s.blob(),c=await TD(u);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const p={};return s.headers.forEach((m,g)=>{p[g]=m}),{data:c,headers:p,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Tp("CapacitorHttp",{web:()=>new SD});var bv;(function(t){t[t.Sunday=1]="Sunday",t[t.Monday=2]="Monday",t[t.Tuesday=3]="Tuesday",t[t.Wednesday=4]="Wednesday",t[t.Thursday=5]="Thursday",t[t.Friday=6]="Friday",t[t.Saturday=7]="Saturday"})(bv||(bv={}));const yc=Tp("LocalNotifications",{web:()=>Bw(()=>import("./web-CD3KaN0H.js"),[],import.meta.url).then(t=>new t.LocalNotificationsWeb)}),bD=async()=>{if(!hi.isNativePlatform())return console.log("Notifications only work on native platforms"),!1;try{return(await yc.requestPermissions()).display==="granted"}catch(t){return console.error("Error requesting notification permissions:",t),!1}},AD=async()=>{if(hi.isNativePlatform())try{await yc.cancel({notifications:[{id:1}]});const t=new Date;return t.setMonth(t.getMonth()+3),await yc.schedule({notifications:[{title:"🩺 Blood Checkup Reminder",body:"It's been 3 months since your last blood test. Time for a health checkup!",id:1,schedule:{at:t},sound:"default",actionTypeId:"",extra:{type:"blood_checkup_reminder"}}]}),console.log("3-month reminder scheduled for:",t),t}catch(t){return console.error("Error scheduling 3-month reminder:",t),null}},CD=()=>{hi.isNativePlatform()&&yc.addListener("localNotificationActionPerformed",t=>{console.log("Notification clicked:",t)})};function RD(){const t=localStorage.getItem("user_profile"),[e,n]=X.useState(t?"dashboard":"login"),[r,i]=X.useState(null),[s,o]=X.useState(null),[l,c]=X.useState(t?JSON.parse(t):null),[u,p]=X.useState(null);Fv.useEffect(()=>{(async()=>{if(await bD()){console.log("Notifications enabled"),CD();const L=await AD();L&&console.log("Next blood checkup reminder:",L.toLocaleDateString())}})();const P=co.onAuthStateChange(async b=>{if(b){console.log("User logged in:",b.email),o({email:b.email,id:b.uid});try{const L=await co.getProfile();L.success&&L.profile?(c(L.profile),n("dashboard")):n("profile_setup")}catch(L){console.error("Error loading profile:",L),n("profile_setup")}}else console.log("User logged out"),o(null),c(null),n("login")}),T=["Drink a glass of water now! 💧","Time to stretch your legs! 🚶","Don't forget to eat a fruit today! 🍎","Stay motivated! You're doing great. 💪","Check your blood report regularly. 🩸","Avoid sugary drinks for better health. 🥤❌"],_=setInterval(()=>{const b=T[Math.floor(Math.random()*T.length)];p(b)},12e4);return()=>{clearInterval(_),P()}},[]);const m=async(R,P=!1)=>{if(o(R),P){n("profile_setup");return}try{const T=await co.getProfile();T.success&&T.profile?(console.log("Profile found:",T.profile),c(T.profile),localStorage.setItem("user_profile",JSON.stringify(T.profile)),n("dashboard")):(console.log("No profile found, redirecting to setup"),n("profile_setup"))}catch(T){console.error("Error fetching profile:",T);const _=localStorage.getItem("user_profile");if(_){const b=JSON.parse(_);b.email===R.email?(c(b),n("dashboard")):(console.log("Cached profile does not match current user. Redirecting to setup."),n("profile_setup"))}else n("profile_setup")}},g=R=>{const P={...R,email:s==null?void 0:s.email};c(P),localStorage.setItem("user_profile",JSON.stringify(P)),n("dashboard")},S=(R,P=null)=>{i(P),n(R)},C=async()=>{await co.logout()};return d.jsxs("div",{className:"app-container",children:[u&&d.jsx(pD,{message:u,onClose:()=>p(null)}),e==="login"&&d.jsx(MI,{onLogin:m}),e==="profile_setup"&&d.jsx(LP,{onComplete:g}),e==="dashboard"&&d.jsx(oN,{userName:l==null?void 0:l.name,userProfile:l,onNavigate:S,onLogout:C}),e==="bmi"&&d.jsx(aN,{userProfile:l,onBack:()=>n("dashboard")}),e==="blood"&&d.jsx(aD,{user:l,onBack:()=>n("dashboard"),initialViewReport:r}),e==="fitness"&&d.jsx(lD,{userProfile:l,onBack:()=>n("dashboard")}),e==="homeworkout"&&d.jsx(uD,{onBack:()=>n("dashboard")}),e==="weightprogress"&&d.jsx(hD,{userProfile:l,onBack:()=>n("dashboard")}),e==="chat"&&d.jsx(fD,{userProfile:l,onBack:()=>n("dashboard")}),e==="diet"&&d.jsx(mD,{user:l,onBack:()=>n("dashboard")})]})}ch.createRoot(document.getElementById("root")).render(d.jsx(Fv.StrictMode,{children:d.jsx(RD,{})}));export{O1 as W};
