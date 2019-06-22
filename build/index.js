module.exports=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t){n.exports=require("react")},function(n,t){n.exports=require("styled-components")},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(1),a=e.n(i);function u(){var n=w(["\n  background: ",";\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  margin: 5px;\n  cursor: pointer;\n  border-radius: 50%;\n"]);return u=function(){return n},n}function c(){var n=w(["\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  height: 10%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  transform: translate(0, -0%);\n"]);return c=function(){return n},n}function l(){var n=w(["\n  border: solid ",";\n  border-width: 0 4px 4px 0;\n  display: inline-block;\n  margin: 20px;\n  padding: 7px;\n  transform: rotate(",");\n"]);return l=function(){return n},n}function f(){var n=w(["\n  justify-content: flex-end;\n  img{\n    opacity: ",";\n  }\n"]);return f=function(){return n},n}function d(){var n=w(["\n  justify-content: flex-start;\n  img{\n    opacity: ",";\n  }\n"]);return d=function(){return n},n}function s(){var n=w(["\n  width: 40%;\n  height: 100%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  opacity: ",";\n  justify-content: ",";\n  img{\n    width: 40px;\n    transform: translate(0, -50%);\n    transition: opacity 0.4s;\n  };\n  &:hover{\n    opacity: 1;\n  }\n"]);return s=function(){return n},n}function v(){var n=w(["\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transform: translate(0, -100%);\n  user-select: none;\n"]);return v=function(){return n},n}function p(){var n=w(["\n  width: 100%;\n  white-space: normal;\n"]);return p=function(){return n},n}function y(){var n=w(["\n  margin: 10px;\n  margin-bottom: 5px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return y=function(){return n},n}function m(){var n=w(["\n  background: #FFFA;\n  color: #333;\n  text-align: center;\n  width: 100.5%;\n  position: absolute;\n  padding: 15px 20px;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%,0);\n"]);return m=function(){return n},n}function g(){var n=w(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: ",";\n"]);return g=function(){return n},n}function h(){var n=w(["\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  transform: translateX(",");\n  transition:  \n    ",";\n"]);return h=function(){return n},n}function b(){var n=w(["\n  height: 90%;\n  overflow: hidden;\n  margin: 0 auto;\n  white-space: nowrap;\n  width: ",";\n"]);return b=function(){return n},n}function x(){var n=w(["\n  width: 100%;\n  height: 100%;\n"]);return x=function(){return n},n}function w(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var j=a.a.div(x()),S=a.a.div(b(),function(n){return n.cover?"100%":"85%"}),O=a.a.div(h(),function(n){var t=n.sliderWidth,e=n.index,r=n.translateDrag;return"".concat(-e*t+r,"px")},function(n){var t=n.transition,e=n.translateDuration;return t?"transform cubic-bezier(1, 1.40, .70, .80) ".concat(.5*e,"s"):"none"}),E=a.a.div(g(),function(n){return n.image},function(n){return n.cover?"cover":"contain"}),C=a.a.div(m()),D=a.a.div(y()),k=a.a.p(p()),P=a.a.div(v()),T=a.a.div(s(),function(n){return n.hover?"0":"1"},function(n){return"left"===n.direction?"flex-start":"flex-end"}),M=(a()(T)(d(),function(n){return n.hover?"0":"1"}),a()(T)(f(),function(n){return n.hover?"0":"1"}),a.a.div(l(),function(n){return n.primaryColor},function(n){return"left"===n.direction?"135deg":"-45deg"})),z=a.a.div(c()),A=a.a.div(u(),function(n){var t=n.active,e=n.color;return t?e.b:e.a}),I=function(n){var t=n.callToAction,e=n.direction,r=n.arrowStyle,i=n.arrowHover,a=n.arrowImg,u=n.primaryColor,c=void 0===u?"#CCC":u;return o.a.createElement(T,{direction:e,hover:i,onClick:t},a?o.a.createElement("img",{src:a,style:r,alt:""}):o.a.createElement(M,{direction:e,style:r,primaryColor:c}))},_=function(n){var t=n.index,e=n.images,r=n.handleDotClick,i=n.dotStyle,a=n.primaryColor,u=void 0===a?"#CCC":a,c=n.secondaryColor,l=void 0===c?"#333":c;return o.a.createElement(z,null,e.map(function(n,e){return o.a.createElement(A,{key:e,style:i,active:e===t,color:{a:u,b:l},onClick:r.bind(null,e)})}))};var F=function(n){var t=n.curr,e=n.taglineStyle,r=n.titleStyle,i=n.captionStyle;return t.title||t.caption?o.a.createElement(C,{style:e},o.a.createElement(D,{style:r},t.title),o.a.createElement(k,{style:i},t.caption)):null};function H(){return(H=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function X(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){L(n,t,e[t])})}return n}function L(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function R(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q={index:0,translateDrag:0,translateDuration:.5,x0:null},W=function(n){var t=n.cover,e=void 0===t||t,i=n.invert,a=void 0!==i&&i,u=n.loop,c=void 0===u?!n.swipe:u,l=n.transition,f=void 0===l||l,d=n.arrowHover,s=void 0!==d&&d,v=n.swipe,p=void 0!==v&&v,y=n.callback,m=n.containerStyle,g=n.slideStyle,h=n.taglineStyle,b=n.captionStyle,x=n.titleStyle,w=n.primaryColor,C=n.secondaryColor,D=n.dotStyle,k=n.arrowStyle,T=n.arrowLeftImg,M=n.arrowRightImg,z=n.autoPlay,A=n.duration,L=void 0===A?2e3:A,W=n.index,B=n.images,U=void 0===B?[]:B;if(!U.length)return null;var G=R(Object(r.useState)(q),2),J=G[0],K=G[1],N=Object(r.useRef)();Object(r.useEffect)(function(){},[n]),Object(r.useEffect)(function(){document.addEventListener("mouseup",Q,!1),document.addEventListener("touchend",Q,!1)},[]),Object(r.useEffect)(function(){var n=z&&setTimeout(nn,L);return function(){return clearTimeout(n)}},[J.index,n.autoPlay]),Object(r.useEffect)(function(){tn(W)},[W]);var Q=function(){K(function(n){return X({},n,{x0:null,translateDrag:0,translateDuration:.5})})},V=function(n){var t=$(n).clientX;if(J.x0){var e=t-J.x0,r=Math.sign(e),o=+(r*e/en(N)).toFixed(2);o>.2&&(K(function(n){return X({},n,{x0:null,translateDrag:0,translateDuration:1-o})}),tn(J.index-r))}else K(function(n){return X({},n,{translateDuration:.5,x0:null,translateDrag:0})})},Y=function(n){var t=$(n).clientX;K(function(n){return X({},n,{x0:t,translateDuration:0})})},Z=function(n){if(J.x0){var t=$(n).clientX;K(function(n){return X({},n,{translateDrag:Math.round(t-n.x0)})})}},$=function(n){return n.changedTouches?n.changedTouches[0]:n},nn=function(){var n=J.index,t=n<U.length-1?n+1:c?0:n;tn(t)},tn=function(n){n>=0&&n<U.length&&(K(function(t){return X({},t,{index:n})}),y&&y(n))},en=function(n){var t=n.current;return t&&t.getBoundingClientRect().width};return o.a.createElement(j,null,o.a.createElement(S,{cover:e,style:m},o.a.createElement(O,{onTouchStart:Y,onTouchMove:Z,onTouchEnd:V,onMouseDown:Y,onMouseMove:Z,onMouseUp:V,sliderWidth:en(N),transition:p||f,index:J.index,translateDrag:J.translateDrag,translateDuration:J.translateDuration,ref:N},U.map(function(n,t){return o.a.createElement(E,{style:g,cover:e,key:t,image:n.image},o.a.createElement(F,{curr:n,taglineStyle:h,titleStyle:x,captionStyle:b}))})),!p&&o.a.createElement(P,null,o.a.createElement(I,{arrowStyle:k,arrowImg:T,arrowHover:s,callToAction:function(){var n=J.index,t=n>0?n-1:c?U.length-1:n;tn(t)},primaryColor:w,direction:"left"}),o.a.createElement(I,{arrowStyle:k,arrowImg:M,arrowHover:s,callToAction:nn,primaryColor:w,direction:"right"}))),o.a.createElement(_,H({index:J.index},{images:U,handleDotClick:function(n){n===J.index||tn(n)},dotStyle:D,invert:a,primaryColor:w,secondaryColor:C})))};e.d(t,"default",function(){return W})}]);