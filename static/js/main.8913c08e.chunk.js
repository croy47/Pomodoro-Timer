(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(8),a=c.n(s),i=c(5),o=c(3),l=c(9),j=c(4),b=function(e,t){var c=function(e){var t=Number(e.timer.split(":")[0]),c=Number(e.timer.split(":")[1]);return 0===c&&(c=60,0!==t&&(t-=1)),c-=1,"".concat(t,":").concat(c<10?"0".concat(c):"".concat(c))}(e);switch(t.type){case"INCREASE":var n,r=t.payload.split("-")[0],s=60===e["".concat(r,"Length")]?60:e["".concat(r,"Length")]+1;return Object(o.a)(Object(o.a)({},e),{},(n={},Object(j.a)(n,"".concat(r,"Length"),s),Object(j.a)(n,"timer","session"===r?"".concat(s,":00"):e.timer),n));case"DECREASE":var a,i=t.payload.split("-")[0],l=1===e["".concat(i,"Length")]?1:e["".concat(i,"Length")]-1;return Object(o.a)(Object(o.a)({},e),{},(a={},Object(j.a)(a,"".concat(i,"Length"),l),Object(j.a)(a,"timer","session"===i?"".concat(l,":00"):e.timer),a));case"RESET":return Object(o.a)(Object(o.a)({},e),{},{sessionLength:25,breakLength:5,timer:"25:00",active:"Session",activate:!1});case"START_STOP_SESSION":return Object(o.a)(Object(o.a)({},e),{},{activate:!e.activate});case"UPDATE_SESSION":case"UPDATE_BREAK":return Object(o.a)(Object(o.a)({},e),{},{timer:c});case"CHANGE_SESSION":var b="Session"===e.active;return Object(o.a)(Object(o.a)({},e),{},{active:b?"Break":"Session",timer:"".concat(b?e.breakLength:e.sessionLength,":00")})}return Object(o.a)({},e)},d=c(1),u=r.a.createContext(),h={sessionLength:25,breakLength:5,timer:"25:00",active:"Session",activate:!1},O=function(e){var t=e.children,c=Object(n.useReducer)(b,h),r=Object(l.a)(c,2),s=r[0],a=r[1],i=s.timer,j=s.active,O=s.activate,m=Object(n.useRef)(null),p=function(e){e=e.toUpperCase(),m.current||(m.current=setTimeout((function(){m.current=null,a({type:"UPDATE_".concat(e)})}),1e3))};return Object(n.useEffect)((function(){return O?"0:00"===i?(document.getElementById("beep").play(),a({type:"CHANGE_SESSION"})):("Session"===j&&p(j),void("Break"===j&&p(j))):(clearTimeout(m.current),void(m.current=null))}),[O,j,i]),Object(d.jsx)(u.Provider,{value:Object(o.a)(Object(o.a)({},s),{},{decrease:function(e){a({type:"DECREASE",payload:e})},increase:function(e){a({type:"INCREASE",payload:e})},reset:function(){var e=document.getElementById("beep");e.pause(),e.currentTime=0,a({type:"RESET"})},startStopSession:function(){a({type:"START_STOP_SESSION"})}}),children:t})},m=function(){return Object(n.useContext)(u)},p=function(){var e=m(),t=e.sessionLength,c=e.increase,n=e.decrease;return Object(d.jsxs)("div",{className:"length",children:[Object(d.jsx)("p",{id:"session-label",children:"Session Length"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("button",{id:"session-decrement",className:"icon-container",onClick:function(e){return n(e.target.closest("button").id)},children:Object(d.jsx)(i.a,{className:"icon"})}),Object(d.jsx)("p",{id:"session-length",className:"string",children:"".concat(t)}),Object(d.jsx)("button",{id:"session-increment",className:"icon-container",onClick:function(e){return c(e.target.closest("button").id)},children:Object(d.jsx)(i.b,{className:"icon"})})]})]})},x=function(){var e=m(),t=e.breakLength,c=e.decrease,n=e.increase;return Object(d.jsxs)("div",{className:"length",children:[Object(d.jsx)("p",{id:"break-label",children:"Break Length"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("button",{id:"break-decrement",className:"icon-container",onClick:function(e){return c(e.target.closest("button").id)},children:Object(d.jsx)(i.a,{className:"icon"})}),Object(d.jsx)("p",{id:"break-length",className:"string",children:"".concat(t)}),Object(d.jsx)("button",{id:"break-increment",className:"icon-container",onClick:function(e){return n(e.target.closest("button").id)},children:Object(d.jsx)(i.b,{className:"icon"})})]})]})},g=function(){var e=m(),t=e.timer,c=e.reset,n=e.startStopSession,r=e.activate,s=e.active,a=function(e){var t=e.split(":")[0],c=e.split(":")[1];return 1===t.length&&(t="0".concat(t)),"".concat(t,":").concat(c)}(t);return Object(d.jsxs)("div",{className:"session length",children:[Object(d.jsx)("p",{id:"timer-label",children:s}),Object(d.jsx)("p",{id:"time-left",children:a}),Object(d.jsxs)("div",{id:"control-btn-container",children:[Object(d.jsx)("button",{id:"start_stop",className:"control-btn",onClick:n,children:r?"Stop":"Start"}),Object(d.jsx)("button",{id:"reset",className:"control-btn",onClick:c,children:"Reset"})]}),Object(d.jsx)("audio",{id:"beep",src:"https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"})]})},S=c(6),v=function(){return Object(d.jsxs)("div",{id:"app",children:[Object(d.jsxs)("h1",{id:"project-title",children:[Object(d.jsx)("u",{children:"25 + 5 Clock"})," "]}),Object(d.jsxs)("div",{id:"length-container",children:[Object(d.jsx)(p,{}),Object(d.jsx)(x,{})]}),Object(d.jsx)(g,{}),Object(d.jsxs)("footer",{children:[Object(d.jsxs)("p",{children:["Designed by"," ",Object(d.jsxs)("a",{href:"mailto:croy4744@gmail.com",id:"check",children:[" ","Chandan Roy"]})]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsxs)("a",{href:"https://github.com/croy47/drum_machine",rel:"noopener noreferrer",target:"_blank",children:[" ","Source Code"]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:"https://twitter.com/chandan_py_js",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(S.c,{className:"contact-icons"})}),Object(d.jsx)("a",{href:"https://www.freecodecamp.org/croy4744",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(S.a,{className:"contact-icons"})}),Object(d.jsx)("a",{href:"https://github.com/croy47/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(S.b,{className:"contact-icons"})})]})]})]})};c(15);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(v,{})})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8913c08e.chunk.js.map