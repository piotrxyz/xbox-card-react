(this["webpackJsonpxbox-card-react"]=this["webpackJsonpxbox-card-react"]||[]).push([[0],{31:function(n,t,e){"use strict";e.r(t);var i,r,a,o,c,s,l,d,u,b,j,p,m,h,x,f,O,g,v,y,w,C,z,k,S,F,I,q,X,B,D,M,L,P,A,E,G,J,R,Y,T=e(1),W=e.n(T),_=e(10),H=e.n(_),K=e(5),N=e(6),Q=e(8),U=e(7),V=e(3),Z=e(18),$=e.n(Z),nn=e(2),tn=e(4),en=Object(tn.a)(Object(tn.a)(Object(tn.a)({},{mobile:"321px",tablet:"768px"}),{sizeXS:"12px",sizeS:"13px",sizeM:"14px",sizeL:"15px",sizeXL:"16px"}),{},{mainFontFamily:"Arial, sans-serif",blueColor:"#0090F6",lightBlueColor:"#47B3FF",textColor:"#333333",borderColor:"#C3C7C8"}),rn=e(23),an=e(22),on=e(16),cn=e(0),sn=Object(nn.keyframes)(i||(i=Object(V.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),ln=nn.default.div(r||(r=Object(V.a)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),dn=nn.default.div(a||(a=Object(V.a)(["\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 4px solid black;\n  border-radius: 50%;\n  animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: black transparent transparent transparent;\n\n  &:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  &:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"])),sn),un=function(n){Object(Q.a)(e,n);var t=Object(U.a)(e);function e(){return Object(K.a)(this,e),t.apply(this,arguments)}return Object(N.a)(e,[{key:"render",value:function(){return Object(cn.jsx)(ln,{children:Object(cn.jsx)(dn,{})})}}]),e}(T.PureComponent),bn=e.p+"static/media/minus.9fa86d10.svg",jn=e.p+"static/media/plus.1cc300eb.svg",pn=e.p+"static/media/check.12c6a570.svg",mn=e.p+"static/media/arrow.8c2f2794.svg",hn=e.p+"static/media/clock.c6f3f6be.svg",xn=e.p+"static/media/close.11f9d827.svg",fn=e.p+"static/media/crossed.5d5b862c.svg",On={MinusIcon:bn,PlusIcon:jn,CheckIcon:pn,ArrowIcon:mn,ClockIcon:hn,CloseIcon:xn,CrossIcon:fn},gn=e.p+"static/media/xwhiteS.89bfd587.png",vn=nn.default.button(o||(o=Object(V.a)(["\n  background: ",";\n  padding: 16.9px 45px 16.1px 46px;\n  color: white;\n  border-radius: 5px;\n  border: 1px solid ",";\n  font-size: ",";\n  font-weight: bold;\n  transition: all 0.3s;\n\n  &:hover {\n    background: ",";\n    border-color: ",";\n    transform: translateY(-2px);\n  }\n\n  ","\n"])),(function(n){return n.theme.blueColor}),(function(n){return n.theme.blueColor}),(function(n){return n.theme.sizeL}),(function(n){return n.theme.lightBlueColor}),(function(n){return n.theme.lightBlueColor}),(function(n){return n.disabled&&Object(nn.css)(c||(c=Object(V.a)(["\n      opacity: 0.3;\n      &:hover {\n        transform: none;\n      }\n    "])))})),yn=function(n){var t=n.title;return Object(cn.jsx)(vn,Object(tn.a)(Object(tn.a)({},n),{},{children:t}))},wn=e(13),Cn=nn.default.div(s||(s=Object(V.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n  margin-bottom: 20px;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: ",";\n  }\n\n  @media (min-width: ",") {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.blueColor}),(function(n){return n.theme.tablet})),zn=nn.default.input(l||(l=Object(V.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n"]))),kn=nn.default.label(d||(d=Object(V.a)(["\n  font-size: ",";\n  padding: 10.2px 18px 10.8px 18px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  min-width: 100%;\n  text-align: center;\n\n  ",":checked + && {\n    border: 2px solid ",";\n    margin: -1px;\n  }\n"])),(function(n){return n.theme.sizeXS}),(function(n){return n.theme.borderColor}),zn,(function(n){return n.theme.blueColor})),Sn=function(n){var t=n.input,e=n.label,i=Object(wn.a)(n,["input","label"]);return Object(cn.jsx)(cn.Fragment,{children:Object(cn.jsxs)(Cn,{children:[Object(cn.jsx)(zn,Object(tn.a)(Object(tn.a)({},t),i)),e&&Object(cn.jsx)(kn,{children:e})]})})},Fn=nn.default.div(u||(u=Object(V.a)(["\n  position: relative;\n  min-height: 35px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  font-size: ",";\n\n  img {\n    position: absolute;\n    top: 13.8px;\n    right: 14.4px;\n    transform: rotate(90deg);\n    pointer-events: none;\n  }\n"])),(function(n){return n.theme.borderColor}),(function(n){return n.theme.sizeXS})),In=nn.default.select(b||(b=Object(V.a)(["\n  padding-left: 13px;\n  width: 100%;\n  border: none;\n  font-size: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.sizeXS})),qn=function(n){var t=n.input,e=Object(wn.a)(n,["input"]);return Object(cn.jsxs)(Fn,{children:[Object(cn.jsx)("img",{src:mn,alt:"dropdown"}),Object(cn.jsx)(In,Object(tn.a)(Object(tn.a)({},t),e))]})},Xn=nn.default.form(j||(j=Object(V.a)(["\n  background: white;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 8px 20px #0000003b;\n  border-radius: 5px;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.tablet})),Bn=nn.default.div(p||(p=Object(V.a)(["\n  display: flex;\n  align-items: center;\n\n  @media (min-width: ",") {\n    padding: 0 0 0 18.6px;\n  }\n"])),(function(n){return n.theme.tablet})),Dn=nn.default.div(m||(m=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Mn=nn.default.button(h||(h=Object(V.a)(["\n  width: 40px;\n  height: 40px;\n"]))),Ln=Object(nn.default)(Mn)(x||(x=Object(V.a)(["\n  transform: rotate(180deg);\n"]))),Pn=nn.default.div(f||(f=Object(V.a)(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0 20px 0;\n\n  @media (min-width: ",") {\n    padding: 24px 19px 31.4px 36px;\n  }\n"])),(function(n){return n.theme.tablet})),An=nn.default.h1(O||(O=Object(V.a)(["\n  max-width: 315px;\n  margin: 0;\n  font-size: ",";\n"])),(function(n){return n.theme.sizeXL})),En=nn.default.div(g||(g=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Gn=nn.default.h2(v||(v=Object(V.a)(["\n  font-size: ",";\n  margin: 4px 0 5px 0;\n  line-height: 25px;\n  color: ",";\n  transition: color 0.3s;\n"])),(function(n){return n.theme.sizeXL}),(function(n){var t=n.theme;return 0===n.amount?"gray":t.blueColor})),Jn=nn.default.label(y||(y=Object(V.a)(["\n  font-size: ",";\n  line-height: 19px;\n  margin: 0 0 7px 0;\n"])),(function(n){return n.theme.sizeS})),Rn=nn.default.div(w||(w=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 20px 0;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.tablet})),Yn=nn.default.div(C||(C=Object(V.a)(["\n  font-size: ",";\n  display: flex;\n  flex-direction: column;\n  padding-top: 16px;\n  padding-bottom: 20px;\n  height: 64px;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n  }\n"])),(function(n){return n.theme.sizeS}),(function(n){return n.theme.tablet})),Tn=nn.default.div(z||(z=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0 5px 0;\n\n  img {\n    width: 15px;\n    height: 16px;\n    margin-right: 12px;\n  }\n"]))),Wn=nn.default.div(k||(k=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  @media (min-width: ",") {\n    margin-bottom: 0;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  img {\n    width: 15px;\n    height: 11px;\n    margin-right: 11px;\n  }\n"])),(function(n){return n.theme.tablet})),_n=nn.default.div(S||(S=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 165px;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.tablet})),Hn=nn.default.span(F||(F=Object(V.a)(["\n  margin-right: 16px;\n"]))),Kn=nn.default.div(I||(I=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n\n  a {\n    text-decoration: none;\n    position: relative;\n    color: ",";\n\n    &:before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 1px;\n      bottom: -1px;\n      background: ",";\n      transform: scaleX(0);\n      transition: all 0.6s ",";\n    }\n\n    &:hover {\n      &:before {\n        transform: scaleX(1);\n      }\n    }\n  }\n"])),(function(n){return n.theme.blueColor}),(function(n){return n.theme.borderColor}),"cubic-bezier(0.68, -0.55, 0.27, 1.55);"),Nn=nn.default.div(q||(q=Object(V.a)(["\n  font-size: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s;\n\n  @media (min-width: ",") {\n    margin-right: 12px;\n  }\n\n  ","\n"])),(function(n){return n.theme.sizeM}),(function(n){return n.theme.tablet}),(function(n){return n.disabled&&Object(nn.css)(X||(X=Object(V.a)(["\n      opacity: 0.3;\n      pointer-events: none;\n    "])))})),Qn=nn.default.div(B||(B=Object(V.a)(["\n  padding: 17.2px 64px 16.8px 65px;\n  border-radius: 5px;\n  border: 1px solid ",";\n  margin-bottom: 10px;\n  text-align: center;\n  width: 100%;\n\n  @media (min-width: ",") {\n    margin-bottom: 0;\n    min-width: 150px;\n    max-width: 150px;\n  }\n\n  ","\n"])),(function(n){return n.theme.borderColor}),(function(n){return n.theme.tablet}),(function(n){return n.disabled&&Object(nn.css)(D||(D=Object(V.a)(["\n      opacity: 0.3;\n      pointer-events: none;\n    "])))})),Un=nn.default.button(M||(M=Object(V.a)(["\n  position: absolute;\n  left: 12px;\n  transition: opacity 0.3s;\n\n  ","\n"])),(function(n){return n.disabled&&Object(nn.css)(L||(L=Object(V.a)(["\n      opacity: 0.3;\n      pointer-events: none;\n    "])))})),Vn=nn.default.button(P||(P=Object(V.a)(["\n  position: absolute;\n  right: 11px;\n  transition: opacity 0.3s;\n\n  ","\n"])),(function(n){return n.disabled&&Object(nn.css)(A||(A=Object(V.a)(["\n      opacity: 0.3;\n      pointer-events: none;\n    "])))})),Zn=nn.default.div(E||(E=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n\n  @media (min-width: ",") {\n    flex-direction: row;\n    margin-top: 0;\n  }\n"])),(function(n){return n.theme.tablet})),$n=function(n){Object(Q.a)(e,n);var t=Object(U.a)(e);function e(n){var i;return Object(K.a)(this,e),(i=t.call(this,n)).handleDataFetch=function(){fetch("./xbox.json").then((function(n){if(n.ok)return n;throw Error(n.status)})).then((function(n){return n.json()})).then((function(n){var t=n.product,e=n.sizes.items,r=n.multiversions;Object.entries(r[0].items).reverse().map((function(n){var t=Object(on.a)(n,2)[1];return Object.values(t.values).map((function(n){var t=n.name;return i.setState({variant:Object.values(t).join("")}),null}))})),i.setState({loading:!1,name:t.name,price:Object.values(e)[0].price,size:Object.values(e)[0].name,status:Object.values(e)[0].status,amount:Object.values(e)[0].amount,quantity:1,items:e,data:n})})).catch((function(n){return console.log(n)}))},i.handleColorChange=function(n){i.setState({variant:n.target.value})},i.handleSubmit=function(n){n.preventDefault();var t=i.state,e=t.name,r=t.price,a=t.size,o=t.variant,c=t.status,s=t.quantity,l={name:e,price:r,totalPrice:s*r,size:a,variant:o,status:c,quantity:s};(0,i.props.onSubmit)(l)},i.increment=function(){var n=i.state;n.quantity<n.amount&&i.setState((function(n){return Object(tn.a)(Object(tn.a)({},n),{},{quantity:n.quantity+1})}))},i.decrement=function(){i.state.quantity>1&&i.setState((function(n){return Object(tn.a)(Object(tn.a)({},n),{},{quantity:n.quantity-1})}))},i.state={loading:!0},i}return Object(N.a)(e,[{key:"componentDidMount",value:function(){this.handleDataFetch()}},{key:"render",value:function(){var n=this,t=this.state,e=t.loading,i=t.name,r=t.price,a=t.status,o=t.amount,c=t.quantity,s=t.items,l=t.data;return Object(cn.jsx)(cn.Fragment,{children:e?Object(cn.jsx)(un,{}):Object(cn.jsxs)(Xn,{onSubmit:this.handleSubmit,children:[Object(cn.jsxs)(Bn,{children:[Object(cn.jsx)(Ln,{type:"button",children:Object(cn.jsx)("img",{src:On.ArrowIcon,alt:"left arrow"})}),Object(cn.jsx)(Dn,{children:Object(cn.jsx)("img",{src:gn,alt:"xbox pic"})}),Object(cn.jsx)(Mn,{type:"button",children:Object(cn.jsx)("img",{src:On.ArrowIcon,alt:"right arrow"})})]}),Object(cn.jsxs)(Pn,{children:[Object(cn.jsx)(An,{children:i}),Object(cn.jsxs)(En,{children:[Object(cn.jsx)(Jn,{htmlor:"price"}),Object(cn.jsxs)(Gn,{amount:o,children:[r*c,",00 z\u0142"]}),Object(cn.jsx)(Jn,{htmlFor:"size",children:"Rozmiar: "}),Object(cn.jsx)(Rn,{children:Object.values(s).map((function(t){return Object(cn.jsx)(Sn,{onChange:function(e){return n.setState({size:e.target.value,price:t.price,status:t.status,amount:t.amount,quantity:1})},defaultChecked:"Ram 32 GB"===t.name,name:"size",type:"radio",label:t.name,value:t.name},t.type)}))}),Object(cn.jsx)(Jn,{htmlFor:"color",children:"Wariant:"}),Object(cn.jsx)(qn,{onChange:this.handleColorChange,children:Object.entries(l.multiversions[0].items).map((function(n){var t=Object(on.a)(n,2),e=t[0],i=t[1];return Object.values(i.values).map((function(n){var t=n.name;return Object(cn.jsx)("option",{value:t,children:t},e)}))}))}),Object(cn.jsx)(Yn,{children:Object(cn.jsx)(Wn,{children:Object(cn.jsx)(_n,{children:0!==o?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsxs)(Hn,{children:[Object(cn.jsx)("img",{src:On.CheckIcon,alt:"checkmark"}),a]}),Object(cn.jsxs)(Tn,{children:[Object(cn.jsx)("img",{src:On.ClockIcon,alt:"clock icon"}),Object(cn.jsxs)(Kn,{children:[Object(cn.jsx)("span",{children:"Mo\u017cemy wys\u0142a\u0107 ju\u017c dzisiaj!"}),Object(cn.jsx)("a",{"aria-label":"delivery information link",href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Sprawd\u017a czasy i koszty wysy\u0142ki"})]})]})]}):Object(cn.jsx)(cn.Fragment,{children:Object(cn.jsxs)(Hn,{children:[Object(cn.jsx)("img",{src:On.CrossIcon,alt:"cross"}),a]})})})})})]}),Object(cn.jsxs)(Zn,{children:[Object(cn.jsxs)(Nn,{children:[Object(cn.jsx)(Un,{type:"button",onClick:this.decrement,disabled:1===c,children:Object(cn.jsx)("img",{src:On.MinusIcon,alt:"minus"})}),Object(cn.jsx)(Vn,{type:"button",onClick:this.increment,disabled:1===o||c===o||0===o,children:Object(cn.jsx)("img",{src:On.PlusIcon,alt:"plus"})}),Object(cn.jsx)(Qn,{disabled:0===o,children:c})]}),Object(cn.jsx)(yn,{type:"submit",title:"Dodaj do koszyka",disabled:0===o})]})]})]})})}}]),e}(T.Component),nt=Object(nn.default)(an.a)(G||(G=Object(V.a)(["\n  &-overlay {\n    position: absolute !important;\n    background: #cccccc;\n  }\n"]))),tt=nn.default.button(J||(J=Object(V.a)(["\n  background: ",";\n  padding: 16.9px 45px 16.1px 46px;\n  color: white;\n  border-radius: 5px;\n  border: 1px solid ",";\n  font-size: ",";\n  font-weight: bold;\n  transition: all 0.3s;\n\n  &:hover {\n    background: ",";\n    border-color: ",";\n    transform: translateY(-2px);\n  }\n"])),(function(n){return n.theme.blueColor}),(function(n){return n.theme.blueColor}),(function(n){return n.theme.sizeL}),(function(n){return n.theme.lightBlueColor}),(function(n){return n.theme.lightBlueColor})),et=nn.default.button(R||(R=Object(V.a)(["\n  z-index: 100;\n  position: absolute;\n  top: 23.9px;\n  right: 19px;\n  display: flex;\n  align-items: center;\n  transition: transform 0.3s ease;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),it=function(n){Object(Q.a)(e,n);var t=Object(U.a)(e);function e(n){var i;return Object(K.a)(this,e),(i=t.call(this,n)).addOrder=function(n){i.setState((function(t){return Object(tn.a)(Object(tn.a)({},t),{},{orders:[n].concat(Object(rn.a)(t.orders))})})),alert("Dodano do koszyka, sprawd\u017a console"),console.log(n)},i.state={orders:[]},i}return Object(N.a)(e,[{key:"render",value:function(){var n=this;return Object(cn.jsx)(nt,{trigger:Object(cn.jsx)(tt,{type:"button",children:"Otw\xf3rz"}),modal:!0,nested:!0,closeOnDocumentClick:!0,children:function(t){return Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(et,{type:"button",onClick:t,children:Object(cn.jsx)("img",{src:On.CloseIcon,alt:"close"})}),Object(cn.jsx)($n,{onSubmit:n.addOrder})]})}})}}]),e}(T.Component),rt=Object(nn.createGlobalStyle)(Y||(Y=Object(V.a)(["\n  ","\n\n  * {\n    box-sizing: border-box;\n  }\n\n  html {\n   height: 100%;\n   width: 100%;\n}\n\n  body {\n    font-family: ",";\n    color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100%;\n    width: 100%;\n  }\n\n  button {\n    cursor: pointer;\n    text-decoration: none;\n    border: none;\n    background: transparent;\n    padding: 0;\n  }\n\n  select {\n    border-color: ",";\n    border-radius: 5px;\n    height: 35px;\n    padding-left: 10px;\n    font-size: 13px;\n    appearance: none;\n  }\n"])),$.a,(function(n){return n.theme.mainFontFamily}),(function(n){return n.theme.textColor}),(function(n){return n.theme.borderColor})),at=function(n){Object(Q.a)(e,n);var t=Object(U.a)(e);function e(n){var i;return Object(K.a)(this,e),(i=t.call(this,n)).state={},i}return Object(N.a)(e,[{key:"render",value:function(){return Object(cn.jsxs)(nn.ThemeProvider,{theme:en,children:[Object(cn.jsx)(rt,{}),Object(cn.jsx)(it,{})]})}}]),e}(T.Component);H.a.render(Object(cn.jsx)(W.a.StrictMode,{children:Object(cn.jsx)(at,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1ebb4735.chunk.js.map