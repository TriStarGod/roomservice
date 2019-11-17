(this.webpackJsonproomservice=this.webpackJsonproomservice||[]).push([[0],{86:function(e,a,t){e.exports=t(99)},91:function(e,a,t){},92:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),c=(t(91),t(33)),o=t(27),m=t(148),s=(t(92),t(149)),u=t(155),d=t(172),p=t(146),g=t(157),E=t(169),h=t(68),f=t.n(h),v=t(22),b=t(67),y=t(147),w=r.a.forwardRef((function(e,a){return r.a.createElement(c.b,Object.assign({innerRef:a},e))}));function N(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",component:w,to:"https://roomservice.com/"},"Room Service")," ",(new Date).getFullYear(),".")}function x(){return r.a.createElement(N,null)}var C=t(173),O=t(170),k=t(156),S=t(154),j=t(150),B=Object(b.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},cContain:{display:"flex",flexWrap:"wrap"},textCenter:{textAlign:"center"},dividerSpacing:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},formControl:{margin:e.spacing(1),minWidth:120}}}));function T(){var e=B(),a=Object(n.useRef)(null);return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(m.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(s.a,{className:e.avatar},r.a.createElement(f.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Patient sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(j.a,{ref:a,variant:"outlined",className:e.formControl},r.a.createElement(C.a,{id:"lang"},"Language"),r.a.createElement(O.a,{labelId:"lang",id:"langselect",value:1},r.a.createElement(S.a,{value:1},"English"),r.a.createElement(S.a,{value:2},"Spanish"),r.a.createElement(S.a,{value:3},"German"))),r.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"dob",label:"Date of Birth",name:"dob",autoComplete:"dob",type:"date",autoFocus:!0,InputLabelProps:{shrink:!0}}),r.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"mrn",label:"MRN",type:"password",id:"mrn",autoComplete:"current-password",InputLabelProps:{shrink:!0}}),r.a.createElement(v.a,null,"By signing in, you agree to the"," ",r.a.createElement(c.b,{to:"tos"},"terms and conditions")),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,component:w,to:"/order"},"Sign in"),r.a.createElement(v.a,{variant:"h6",className:e.textCenter},"or"),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,component:w,to:"/order"},"Scan your QR code"),r.a.createElement(v.a,{variant:"h6",className:e.textCenter},"or"),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,component:w,to:"/order"},"Switch to voice"),r.a.createElement(k.a,{className:e.dividerSpacing}),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(p.a,{component:w,to:"#",variant:"body2"},"Staff sign in")),r.a.createElement(g.a,{item:!0},r.a.createElement(p.a,{component:w,to:"#",variant:"body2"},"Can't sign in? Contact support!"))))),r.a.createElement(E.a,{mt:8},r.a.createElement(x,null)))}var I=t(50),F=t(41),P=t(74),R=t(175),W=t(168),D=t(171),L=t(158),M=t(159),V=Object(b.a)((function(e){return{appBar:{position:"relative"}}}));function J(){var e=V();return r.a.createElement(L.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(M.a,null,r.a.createElement(v.a,{variant:"h6",color:"inherit",noWrap:!0},r.a.createElement(p.a,{component:w,to:"/"},"Room Service"))))}var A=t(153),Y=t(100),q=t(160),z=[{name:"Scrambled Eggs",desc:"Delivered to patient @ 01/01/2019 01:00 PM"}],G=Object(b.a)((function(e){return{listItem:{padding:e.spacing(0,0)},total:{fontWeight:"700"},title:{marginTop:e.spacing(2)}}}));function H(){var e=G();return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"Order summary"),r.a.createElement(A.a,{disablePadding:!0},z.map((function(a){var t=a.name,n=a.desc;a.price;return r.a.createElement(Y.a,{className:e.listItem,key:t},r.a.createElement(q.a,{primary:t,secondary:n}))}))))}var Q=[{name:"Honey",desc:"itchiness, hives, swelling"},{name:"Peanut",desc:"eczema, sneezing, cardiac arrest"},{name:"Lactose intolerance",desc:"upset stomach, bloating, gas, diarrhea"}],U=[{name:"Name",detail:"Blue Cross"},{name:"ID",detail:"523A-23526-235-23"},{name:"Subscriber",detail:"John Smith"},{name:"Expiry date",detail:"04/2024"}],$=Object(b.a)((function(e){return{listItem:{padding:e.spacing(0,0)},total:{fontWeight:"700"},title:{marginTop:e.spacing(2)},cContain:{display:"flex",flexWrap:"wrap"},textField:{marginRight:e.spacing(1),width:200},dietOrder:{marginTop:e.spacing(1)}}}));function K(){var e=$();return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"Your Profile"),r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Demographics"),r.a.createElement(d.a,{id:"name",label:"Name",defaultValue:"John Smith",margin:"normal",className:e.textField,InputProps:{readOnly:!0}}),r.a.createElement(d.a,{id:"dob",label:"Date of Birth",defaultValue:"01/01/2019",margin:"normal",className:e.textField,InputProps:{readOnly:!0}}),r.a.createElement(d.a,{id:"mrn",label:"MRN",defaultValue:"******1234",margin:"normal",className:e.textField,InputProps:{readOnly:!0}}),r.a.createElement(d.a,{id:"phone",label:"Phone",defaultValue:"(321) 321-4213",margin:"normal",className:e.textField,InputProps:{readOnly:!0}}),r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p",className:e.dietOrder},"Dietary order"),r.a.createElement(v.a,{variant:"body2",component:"p"},"Consistent Carb"),r.a.createElement("div",{className:"cContain"},r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Allergies")),r.a.createElement(A.a,{disablePadding:!0},Q.map((function(a,t){var n=a.name,l=a.desc;return r.a.createElement(Y.a,{className:e.listItem,key:t},r.a.createElement(q.a,{primary:n,secondary:l}))}))),r.a.createElement("div",{className:"cContain"},r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Insurance details")),r.a.createElement(A.a,{disablePadding:!0},U.map((function(a,t){var n=a.name,l=a.detail;return r.a.createElement(Y.a,{className:e.listItem,key:t},r.a.createElement(q.a,{primary:n,secondary:l}))}))))}var X=t(3),Z=t(161),_=t(162),ee=t(167),ae=t(164),te=t(165),ne=t(166),re=t(163),le=t(51),ie=t(72),ce=t.n(ie),oe=t(71),me=t.n(oe),se=t(73),ue=t.n(se),de=Object(b.a)((function(e){return{card:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:le.a[500]}}}));function pe(e){e.id;var a=e.title,t=e.eTime,n=e.image,l=e.desc,i=e.ingredients,c=e.calorie,o=de(),m=r.a.useState(!1),u=Object(I.a)(m,2),d=u[0],p=u[1];return r.a.createElement(Z.a,{className:o.card},r.a.createElement(_.a,{avatar:r.a.createElement(s.a,{"aria-label":"recipe",className:o.avatar},"R"),action:r.a.createElement(re.a,{"aria-label":"add to cart"},r.a.createElement(me.a,null)),title:a,subheader:"Estimated time: ".concat(t)}),r.a.createElement(ae.a,null,r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},l)),r.a.createElement(te.a,{disableSpacing:!0},r.a.createElement(re.a,{"aria-label":"love it"},r.a.createElement(ce.a,null)),r.a.createElement(re.a,{className:Object(X.a)(o.expand,Object(F.a)({},o.expandOpen,d)),onClick:function(){p(!d)},"aria-expanded":d,"aria-label":"show more"},r.a.createElement(ue.a,null))),r.a.createElement(ne.a,{in:d,timeout:"auto",unmountOnExit:!0},r.a.createElement(ae.a,null,r.a.createElement(ee.a,{className:o.media,image:n,title:a}),r.a.createElement(v.a,{variant:"h6",paragraph:!0},"Ingredients:"),r.a.createElement(v.a,{paragraph:!0},i),r.a.createElement(v.a,{variant:"h6",paragraph:!0},"Serving:"),r.a.createElement(v.a,{paragraph:!0},c))))}var ge=[{id:"i12",title:"Scrambled Eggs",eTime:"45 mins",image:"static/images/scrambledeggs.jpg",desc:"Eggs",ingredients:"Eggs",calorie:"Calories 220; Total Fat 40g; Sodium 4500mg;"},{id:"i13",title:"Greek Salad",eTime:"45 mins",image:"static/images/salad.jpg",desc:"Refreshingly nutritious grilled salad",ingredients:"Tomatoes, olives, lettuce, feta cheese, and grilled chicken",calorie:"Calories 360; Total Fat 19g; Sodium 2180mg;"}];function Ee(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"Menu"),r.a.createElement("div",{className:"cContain"},ge.map((function(e,a){return r.a.createElement(pe,Object.assign({},e,{key:a}))}))))}var he=Object(b.a)((function(e){return{appBar:{position:"relative"},layout:Object(F.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(F.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),fe=["Review","Menu","Receipt"];function ve(){var e=he(),a=r.a.useState(0),t=Object(I.a)(a,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement("main",{className:e.layout},r.a.createElement(P.a,{className:e.paper},r.a.createElement(v.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),r.a.createElement(R.a,{activeStep:n,className:e.stepper},fe.map((function(e){return r.a.createElement(W.a,{key:e},r.a.createElement(D.a,null,e))}))),r.a.createElement(r.a.Fragment,null,n===fe.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(v.a,{variant:"subtitle1"},"Your order number is #2001539. We have texted your order confirmation, and will send you an update when your order has shipped.")):r.a.createElement(r.a.Fragment,null,function(e){switch(e){case 0:return r.a.createElement(K,null);case 1:return r.a.createElement(Ee,null);case 2:return r.a.createElement(H,null);default:throw new Error("Unknown step")}}(n),r.a.createElement("div",{className:e.buttons},0!==n&&r.a.createElement(u.a,{onClick:function(){l(n-1)},className:e.button},"Back"),r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){l(n+1)},className:e.button},n===fe.length-1?"Place order":"Next")))))),r.a.createElement(x,null))}var be=function(){var e=window.location.hostname;return r.a.createElement(c.a,{basename:"localhost"===e||"127.0.0.1"===e?"":"/roomservice"},r.a.createElement(m.a,null),r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/order"},r.a.createElement(ve,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[86,1,2]]]);
//# sourceMappingURL=main.3ebdc10e.chunk.js.map