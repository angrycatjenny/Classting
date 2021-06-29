(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{107:function(t,e,n){},208:function(t,e,n){},362:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(48),s=n.n(a),i=n(127),r=n(19),o=n(47),u=n(14),l=n(40),j=n(35),b={questions:null,options:null,answers:null,total:null,min:null,sec:null},d="SET_QUESTIONS_REQUEST",O="SET_ANSWERS_REQUEST",f="SET_TIME",h="RESET_ALL",p="RESET_ANSWERS",x=function(t){return{type:d,data:t}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(j.a)(Object(j.a)({},t),{},{questions:e.data.questions,total:e.data.questions.length,options:e.data.options});case O:return Object(j.a)(Object(j.a)({},t),{},{answers:e.data});case f:return Object(j.a)(Object(j.a)({},t),{},{min:e.data.min,sec:e.data.sec});case h:return Object(j.a)(Object(j.a)({},t),{},{questions:null,options:null,answers:null,total:null,min:null,sec:null});case p:return Object(j.a)(Object(j.a)({},t),{},{answers:null,min:null,sec:null});default:return t}},v=(n(208),n(107),n(176)),g=n.n(v);function S(t){var e="https://opentdb.com/api.php".concat("?amount=".concat(t.amount));return t.category&&(e=e.concat("&category=".concat(t.category))),t.difficulty&&(e=e.concat("&difficulty=".concat(t.difficulty))),e=e.concat("&type=multiple"),g.a.get(e)}var y=n(377),N=n(4);function q(){return Object(N.jsx)("div",{className:"center",children:Object(N.jsx)(y.a,{color:"secondary"})})}var w=function(t){var e=t.history,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],i=a[1],r=Object(l.b)(),j=function(t){return t.sort((function(t,e){return.5-Math.random()}))};return Object(N.jsx)("div",{className:"center",children:s?Object(N.jsx)(q,{}):Object(N.jsx)("div",{className:"center",children:Object(N.jsxs)("button",{className:"quizButton",onClick:function(){i(!0),S({amount:10}).then((function(t){var n=t.data.results,c=[];n.map((function(t){var e=[].concat(Object(o.a)(t.incorrect_answers),[t.correct_answer]);c=[].concat(Object(o.a)(c),[j(e)])})),r(x({questions:n,options:c})),i(!1),e.push("/quiz")})).catch((function(t){console.log(t,"e")}))},children:[Object(N.jsx)("span",{className:"shadow"}),Object(N.jsx)("span",{className:"edge"}),Object(N.jsx)("span",{className:"phrase",children:"Let's Quiz!"})]})})})},z=n(96),E=n.n(z),_=function(t){var e,n=t.history,a=Object(c.useState)(!1),s=Object(u.a)(a,2),i=s[0],r=s[1],j=Object(c.useState)(null),b=Object(u.a)(j,2),d=b[0],h=b[1],p=Object(c.useState)(0),x=Object(u.a)(p,2),m=x[0],v=x[1],g=Object(c.useState)([]),S=Object(u.a)(g,2),y=S[0],w=S[1],z=Object(c.useState)(0),_=Object(u.a)(z,2),B=_[0],T=_[1],F=Object(c.useState)(""),R=Object(u.a)(F,2),I=R[0],C=R[1],k=Object(c.useState)(!1),L=Object(u.a)(k,2),W=L[0],M=L[1],Q=Object(c.useState)(null),A=Object(u.a)(Q,2),H=A[0],P=A[1],U=Object(c.useState)(0),J=Object(u.a)(U,2),D=J[0],K=J[1],G=Object(c.useState)(0),V=Object(u.a)(G,2),X=V[0],Y=V[1],Z=Object(c.useRef)(0),$=Object(l.b)(),tt=Object(l.c)((function(t){return{quiz:t.quiz}})).quiz;Object(c.useEffect)((function(){if(r(!0),tt.questions||tt.total||tt.options)return h(tt.questions),v(tt.total),P(tt.options),r(!1),e=setInterval((function(){K(parseInt(Z.current/60)),Y(Z.current%60),Z.current+=1}),1e3),function(){return clearInterval(e)};n.push("/")}),[]),Object(c.useEffect)((function(){W&&($({type:O,data:y}),$(function(t){return{type:f,data:t}}({min:D,sec:X})),clearInterval(e))}),[W]),Object(c.useEffect)((function(){tt.answers&&n.push("/analysis")}),[tt.answers]);var et=function(t){C(t.target.value)},nt=function(){if(B===m-1)return w([].concat(Object(o.a)(y),[I])),C(""),void M(!0);I?(T((function(t){return t+1})),w([].concat(Object(o.a)(y),[I])),C("")):alert("Please choose an answer!")};return Object(N.jsx)("div",{className:"center",children:i?Object(N.jsx)(q,{}):Object(N.jsx)(N.Fragment,{children:null===d||void 0===d?void 0:d.map((function(t,e){return Object(N.jsx)("div",{children:e===B&&Object(N.jsx)(N.Fragment,{children:(n=e,Object(N.jsxs)("div",{className:"quizBox",children:[Object(N.jsxs)("div",{className:"timer",children:[Object(N.jsx)(E.a,{}),Object(N.jsxs)("span",{className:"defaultFontSize fontWeight",children:[D,":",X]})]}),Object(N.jsxs)("div",{className:"flexBox",children:[Object(N.jsxs)("span",{className:"title",children:["Question ",n+1]}),Object(N.jsxs)("div",{className:"category",children:[Object(N.jsx)("span",{style:{background:"pink",borderRadius:"8px",padding:"4px 8px",marginRight:"5px"},children:d[n].difficulty}),Object(N.jsx)("span",{style:{background:"yellow",borderRadius:"8px",padding:"4px 8px"},dangerouslySetInnerHTML:{__html:d[n].category}})]})]}),Object(N.jsxs)("div",{className:"questionBox",children:[Object(N.jsx)("span",{className:"question",dangerouslySetInnerHTML:{__html:d[n].question}}),H[n].map((function(t,e){return Object(N.jsxs)("div",{className:"questionBox",children:[Object(N.jsx)("input",{type:"radio",name:"option",value:t,onChange:et}),Object(N.jsx)("span",{style:{fontSize:"18px"},dangerouslySetInnerHTML:{__html:t}})]})}))]}),Object(N.jsx)("button",{className:"defaultButton",onClick:nt,children:"Next"})]}))})});var n}))})})},B=n(382),T=n(195),F=n(191),R=function(t){var e=t.history,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(null),j=Object(u.a)(r,2),b=j[0],d=j[1],O=Object(c.useState)(0),f=Object(u.a)(O,2),m=f[0],v=f[1],g=Object(c.useState)(null),y=Object(u.a)(g,2),w=y[0],z=y[1],_=["#ff3769","#5e7e9b"],R=Object(l.b)(),I=Object(l.c)((function(t){return{quiz:t.quiz}})).quiz;Object(c.useEffect)((function(){if(i(!0),I.questions||I.total||I.options){for(var t=0,n=0;n<I.total;n++)I.answers[n]===I.questions[n].correct_answer&&t++;v(t);var c=[{name:"\uc815\ub2f5",value:t},{name:"\uc624\ub2f5",value:I.total-t}];z(c),d(I.answers)}else e.push("/")}),[]),Object(c.useEffect)((function(){b&&i(!1)}),[b]);var C=function(){i(!0),S({amount:10}).then((function(t){var n=t.data.results,c=[];n.map((function(t){var e=[].concat(Object(o.a)(t.incorrect_answers),[t.correct_answer]);c=[].concat(Object(o.a)(c),[k(e)])})),R(x({questions:n,options:c})),i(!1),e.push("/quiz")})).catch((function(t){console.log(t,"e")}))},k=function(t){return t.sort((function(t,e){return.5-Math.random()}))};return Object(N.jsx)(N.Fragment,{children:s?Object(N.jsx)(q,{}):Object(N.jsxs)("div",{className:"center",children:[Object(N.jsxs)("div",{className:"timer",children:[Object(N.jsx)(E.a,{}),Object(N.jsxs)("span",{className:"defaultFontSize fontWeight",children:[I.min," : ",I.sec]})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("span",{className:"defaultFontSize fontWeight correct",children:["Correct:"," "]}),Object(N.jsx)("span",{className:"defaultFontSize correct",children:m})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"defaultFontSize fontWeight wrong",children:"Wrong: "}),Object(N.jsx)("span",{className:"defaultFontSize wrong",children:I.total-m})]}),w&&Object(N.jsx)("div",{className:"questionBox",children:Object(N.jsx)(B.a,{width:200,height:200,children:Object(N.jsx)(T.a,{dataKey:"value",data:w,innerRadius:95,outerRadius:100,style:{border:"1px solid blue"},children:w.map((function(t,e){return Object(N.jsx)(F.a,{fill:_[e%_.length]})}))})})}),Object(N.jsxs)("div",{className:"flexBox",children:[Object(N.jsx)("button",{className:"defaultButton newButton",onClick:function(){R({type:p}),e.push("/quiz")},children:"Restart"}),Object(N.jsx)("button",{className:"defaultButton newButton",onClick:function(){R({type:h}),C()},children:"New Quiz"})]})]})})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,383)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))},C=n(102),k=function(t,e){return e.type,Object(C.a)({quiz:m})(t,e)},L=Object(C.b)(k);s.a.render(Object(N.jsx)(l.a,{store:L,children:Object(N.jsx)(i.a,{basename:"https://angrycatjenny.github.io/Classting",children:Object(N.jsx)(i.b,{children:Object(N.jsxs)(r.c,{children:[Object(N.jsx)(r.a,{exact:!0,path:"/",component:w}),Object(N.jsx)(r.a,{path:"/quiz",component:_}),Object(N.jsx)(r.a,{path:"/analysis",component:R})]})})})}),document.getElementById("root")),I()}},[[362,1,2]]]);
//# sourceMappingURL=main.5b69b2ec.chunk.js.map