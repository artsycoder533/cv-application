(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{25:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a,i,r,c,s,d,l,o,p,j,b,h,u,x,O,m,g,f,v,y,w,k,I,C,D,S,N,E,z,V,F,A,G,T,Y,B,P,J,M,_,L,R,q,H,K,Q,U,W,X,Z,$,ee,ne,te,ae,ie=t(1),re=t.n(ie),ce=t(12),se=t.n(ce),de=t(9),le=t(4),oe=t(5),pe=t(7),je=t(6),be=(t(25),t(10)),he=t.n(be),ue=t(2),xe=t(3),Oe=xe.a.input(a||(a=Object(ue.a)(["\n  padding: 0.75rem;\n  width: 100%;\n  font-size: 1rem;\n  \n  &:focus {\n    background: rgba(228, 241, 254, .7);\n  }\n"]))),me=xe.a.label(i||(i=Object(ue.a)(["\n    font-size: 1.1rem;\n    margin-bottom: 0.5rem;\n"]))),ge=xe.a.div(r||(r=Object(ue.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),fe=t(0),ve=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){var e=this;return Object(fe.jsxs)(ge,{children:[Object(fe.jsxs)(me,{htmlFor:this.props.name,children:[this.props.label,": "]}),Object(fe.jsx)(Oe,{onChange:function(n){return e.props.handleInput(n,e.props.index)},name:this.props.name,value:this.props.value,type:this.props.type,placeholder:this.props.placeholder,id:this.props.id})]})}}]),t}(ie.Component),ye=(xe.a.form(c||(c=Object(ue.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  max-width: 1400px; \n  width: 90vw;\n  border-radius: 8px;\n  padding: 3rem;\n  background: white;\n"]))),xe.a.form(s||(s=Object(ue.a)(["\n  width: 100%;\n  display: grid;\n  gap: 2rem;\n  /* border: 2px solid orange; */\n  padding: 3rem;\n  overflow-y: scroll;\n  height: calc(100vh - 120px - 175px - 121px);\n  position: fixed;\n  bottom: 120px;\n  top: 295px;\n  max-width: 1400px;\n  width: 90vw;\n"])))),we=xe.a.div(d||(d=Object(ue.a)(["\n  width: 100%;\n  height: calc(100vh - 75px - 100px - 120px);\n  display: grid;\n  /* grid-template-rows: auto 1fr; */\n  position: fixed;\n  top: 175px;\n \n"]))),ke=xe.a.div(l||(l=Object(ue.a)(["\n  display: flex;\n  justify-content: center;\n  /* padding: 3rem; */\n  \n  /* /height: 100%; */\n"]))),Ie=xe.a.div(o||(o=Object(ue.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  border-radius: 10px;\n  padding: 3rem;\n  background: white;\n"]))),Ce=xe.a.div(p||(p=Object(ue.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 2rem;\n  max-width: 1400px;\n  width: 90vw;\n  border-radius: 8px;\n  padding: 3rem;\n"]))),De=xe.a.h2(j||(j=Object(ue.a)(["\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 3rem;\n  height: 120px;\n  border-bottom: 1px solid lightgray;\n  z-index: 1;\n  background: white;\n"]))),Se=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(e){var a;return Object(le.a)(this,t),(a=n.call(this,e)).handleInput=function(e){e.preventDefault();var n=e.currentTarget;console.log(n.value);var t=Object(de.a)({},a.state);t.general[n.name]=n.value,a.setState(t)},a.resetForm=function(){var e={name:"",email:"",phone:"",portfolio:"",linkedIn:"",github:"",id:he()()};a.setState(Object.assign(e,a.state))},a.edit=function(){a.setState(Object.assign(a.props.general,a.state))},a.state={general:a.props.general,id:he()()},a}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props.general,n=e.name,t=e.email,a=e.phone,i=e.portfolio,r=e.github,c=e.linkedIn;return Object(fe.jsxs)(we,{children:[Object(fe.jsx)(De,{children:"General Info"}),Object(fe.jsx)(ke,{children:Object(fe.jsx)(Ce,{action:"",onSubmit:this.handleSubmit,className:"general__form",children:Object(fe.jsxs)(Ie,{children:[Object(fe.jsx)(ve,{label:"Name",name:"name",value:n,type:"text",handleInput:this.handleInput,placeholder:"enter name"},he.a),Object(fe.jsx)(ve,{label:"Email",name:"email",value:t,type:"email",handleInput:this.handleInput,placeholder:"email@email.com"}),Object(fe.jsx)(ve,{label:"Phone",name:"phone",value:a,type:"tel",handleInput:this.handleInput,placeholder:"555-555-5555"}),Object(fe.jsx)(ve,{label:"Portfolio",name:"portfolio",value:i,type:"text",handleInput:this.handleInput,placeholder:"www or http(s)"}),Object(fe.jsx)(ve,{label:"LinkedIn",name:"linkedIn",value:c,type:"text",handleInput:this.handleInput,placeholder:"www or http(s)"}),Object(fe.jsx)(ve,{label:"Github",name:"github",value:r,type:"text",handleInput:this.handleInput,placeholder:"www or http(s)"})]})})})]})}}]),t}(ie.Component),Ne=t(8),Ee=xe.a.input(b||(b=Object(ue.a)(["\n  margin-right: 0.2rem;\n"]))),ze=xe.a.div(h||(h=Object(ue.a)(["\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0;\n  font-size: 1.1rem;\n"]))),Ve=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){var e;Object(le.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={values:["Yes","No"],graduate:e.props.graduate},e}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.handleInput,a=(e.comp,e.index),i=e.graduate;e.id;return Object(fe.jsxs)(ze,{children:[Object(fe.jsx)("span",{children:"Did you graduate?"}),this.state.values.map((function(e){return Object(fe.jsxs)("div",{children:[Object(fe.jsx)(Ee,{type:"radio",name:n,value:e,checked:i===e,onChange:function(e){return t(e,a)}}),Object(fe.jsx)("label",{htmlFor:n,children:e})]})}))]})}}]),t}(ie.Component),Fe=xe.a.input(u||(u=Object(ue.a)(["\n"]))),Ae=xe.a.div(x||(x=Object(ue.a)(["\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n"]))),Ge=xe.a.label(O||(O=Object(ue.a)(["\n  font-size: 1.1rem;\n  padding: 1rem 0;\n"]))),Te=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.value,a=e.label,i=e.handleInput,r=e.index;return Object(fe.jsxs)(Ae,{children:[Object(fe.jsx)(Fe,{type:"checkbox",name:n,value:t,checked:t,onChange:function(e){return i(e,r)}}),Object(fe.jsx)(Ge,{children:a})]})}}]),t}(ie.Component),Ye=xe.a.label(m||(m=Object(ue.a)(["\n    font-size: 1.1rem;\n    margin-right: 1rem;\n"]))),Be=xe.a.select(g||(g=Object(ue.a)(["\n  padding: 0.5rem;\n  margin-right: 1rem;\n"]))),Pe=xe.a.option(f||(f=Object(ue.a)(["\n    padding: 0.5rem;\n"]))),Je=(xe.a.div(v||(v=Object(ue.a)(["\n    border: 1px solid red;\n"]))),function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,n=e.label,t=e.value,a=e.name,i=e.handleInput,r=e.index,c=e.options;return Object(fe.jsxs)(re.a.Fragment,{children:[Object(fe.jsx)(Ye,{children:n}),Object(fe.jsxs)(Be,{name:a,value:t,onChange:function(e){return i(e,r)},children:[Object(fe.jsx)(Pe,{disabled:!0,value:"",children:"Select Level"}),c.map((function(e){return Object(fe.jsx)("option",{children:e},he()())}))]})]})}}]),t}(ie.Component)),Me=xe.a.button(y||(y=Object(ue.a)(["\n    width: 10rem;\n    padding: 0.75rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 1rem;\n    font-size: 1.1rem;\n    font-weight: bold;\n    border-radius: 10px;\n    border: none;\n    background-image: linear-gradient(to right, blue, purple);\n    color: white;\n    cursor: pointer;\n    letter-spacing: 1px;\n    \n    &:hover {\n        opacity: 0.7;\n    }\n"]))),_e=Object(xe.a)(Me)(w||(w=Object(ue.a)(["\n  background: transparent;\n  width: 12rem;\n  border: 2px solid white;\n"]))),Le=xe.a.button(k||(k=Object(ue.a)(["\n  background: transparent;\n  border: none;\n  align-self: right;\n"]))),Re=Object(xe.a)(Ne.l)(I||(I=Object(ue.a)(["\n  font-size: 1.5rem;\n  color: red;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),qe=Object(xe.a)(Me)(C||(C=Object(ue.a)(["\n  position: absolute;\n  right: 10px;\n  top: 37px;\n  z-index: 2;\n"]))),He=Object(xe.a)(Le)(D||(D=Object(ue.a)(["\n  position: absolute;\n  right: 60px;\n  padding: 1rem;\n"]))),Ke=Object(xe.a)(Me)(S||(S=Object(ue.a)(["\n  background: none;\n  width: 5rem;\n"]))),Qe=Object(xe.a)(_e)(N||(N=Object(ue.a)(["\n  z-index: 2;\n  position: absolute;\n  right: 10px;\n  top: 11px;\n\n  @media print {\n    display: none;\n  }\n"]))),Ue=xe.a.div(E||(E=Object(ue.a)(["\n  width: 100%;\n  height: calc(100vh - 120px - 75px - 100px);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  /* border: 2px solid green; */\n  position: fixed;\n  top: 175px;\n"]))),We=xe.a.div(z||(z=Object(ue.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  border-radius: 10px;\n  padding: 3rem;\n  background: white;\n  \n"]))),Xe=xe.a.div(V||(V=Object(ue.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Ze=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(e){var a;return Object(le.a)(this,t),(a=n.call(this,e)).handleInput=function(e,n){var t=e.currentTarget,i=Object(de.a)({},a.state),r=i.education[n];"checkbox"===t.type?r[t.name]=t.checked:r[t.name]=t.value,"radio"===t.type&&(r.graduate=t.value),"checkbox"===t.type?r.graduate="No":r.graduate=t.value,"radio"===t.type&&"Yes"===r.graduate?r.attending="":r.attending=t.value,a.setState(i)},a.delete=function(e){var n=Object(de.a)({},a.state);n.education.splice(e,1),a.setState(n)},a.addNewEntry=function(){var e=Object(de.a)({},a.state);e.education.push({school:"",major:"",startDate:"",endDate:"",attending:"",graduate:"",designation:"",degree:"",id:he()()}),a.setState(e)},a.state={education:a.props.education,degreeOptions:["Bachelors","Masters","Certificate","Doctorate"],designationOptions:["Science","Arts"],view:a.props.view},a}return Object(oe.a)(t,[{key:"render",value:function(){var e=this,n=this.props.education,t=this.state,a=t.degreeOptions,i=t.designationOptions;return Object(fe.jsxs)(Ue,{children:[Object(fe.jsx)(De,{children:"Education"}),Object(fe.jsx)(Xe,{children:Object(fe.jsx)(ye,{action:"",onSubmit:this.handleSubmit,className:"education_form",children:n.map((function(n,t){var r=n.school,c=n.major,s=n.startDate,d=n.endDate,l=n.attending,o=n.graduate,p=n.designation,j=n.degree,b=n.id;return Object(fe.jsxs)(We,{children:[Object(fe.jsx)(ve,{label:"School",name:"school",value:r,type:"text",handleInput:e.handleInput,placeholder:r,index:t,id:b}),Object(fe.jsx)(ve,{label:"Major",name:"major",value:c,type:"text",handleInput:e.handleInput,placeholder:c,index:t,id:b}),Object(fe.jsx)(Te,{label:"Check if still attending",name:"attending",value:l,handleInput:e.handleInput,index:t,id:b}),Object(fe.jsx)(ve,{label:"Date Started",name:"startDate",value:s,type:"date",handleInput:e.handleInput,index:t,id:b}),!0===l?"":Object(fe.jsxs)(re.a.Fragment,{children:[" ",Object(fe.jsx)(ve,{label:"Date Ended",name:"endDate",value:d,type:"date",handleInput:e.handleInput,index:t,id:b}),Object(fe.jsx)("div",{className:"radios",children:Object(fe.jsx)(Ve,{label:"Yes",name:"graduate".concat(t),graduate:o,handleInput:e.handleInput,index:t,id:b})}),"Yes"===o?Object(fe.jsxs)("div",{children:[Object(fe.jsx)(Je,{label:"Degree",value:j,name:"degree",handleInput:e.handleInput,options:a,index:t,id:b}),Object(fe.jsx)(Je,{label:"Designation",value:p,name:"designation",handleInput:e.handleInput,options:i,index:t,id:b})]}):""]}),0===t?"":Object(fe.jsx)(He,{type:"button",onClick:function(){return e.delete(t)},children:Object(fe.jsx)(Re,{})})]},b)}))})}),Object(fe.jsxs)(qe,{type:"button",onClick:function(){return e.addNewEntry()},children:["Add Entry ",Object(fe.jsx)(Ne.j,{})]})]})}}]),t}(ie.Component),$e=xe.a.textarea(F||(F=Object(ue.a)(["\n    width: 100%;\n"]))),en=xe.a.label(A||(A=Object(ue.a)(["\n  font-size: 1.1rem;\n"]))),nn=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,n=e.type,t=e.label,a=e.name,i=e.cols,r=e.rows,c=e.index,s=e.handleInput,d=e.value;return Object(fe.jsxs)("div",{children:[Object(fe.jsx)(en,{htmlFor:a,children:t}),Object(fe.jsx)("br",{}),Object(fe.jsx)($e,{type:n,name:a,cols:i,rows:r,value:d,onChange:function(e){return s(e,c)}})]})}}]),t}(ie.Component),tn=xe.a.div(G||(G=Object(ue.a)(["\n  width: 100%;\n  height: calc(100vh - 120px - 75px - 100px);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  /* border: 2px solid green; */\n  position: fixed;\n  top: 175px;\n"]))),an=xe.a.div(T||(T=Object(ue.a)(["\n  display: flex;\n  justify-content: center;\n"]))),rn=xe.a.div(Y||(Y=Object(ue.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  border-radius: 10px;\n  padding: 3rem;\n  background: white;\n"]))),cn=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(e){var a;return Object(le.a)(this,t),(a=n.call(this,e)).handleInput=function(e,n){var t=e.currentTarget,i=Object(de.a)({},a.state),r=i.experience[n];"checkbox"===t.type?r[t.name]=t.checked:r[t.name]=t.value,a.setState(i)},a.delete=function(e){var n=Object(de.a)({},a.state);n.experience.splice(e,1),a.setState(n)},a.addNewEntry=function(){var e=Object(de.a)({},a.state);e.experience.push({title:"",company:"",startDate:"",endDate:"",employed:"",duties:"",id:he()()}),a.setState(e)},a.state={experience:a.props.experience},a}return Object(oe.a)(t,[{key:"render",value:function(){var e=this,n=this.props.experience;return Object(fe.jsxs)(tn,{children:[Object(fe.jsx)(De,{children:"Experience"}),Object(fe.jsx)(an,{children:Object(fe.jsx)(ye,{action:"",children:n.map((function(n,t){var a=n.title,i=n.company,r=n.startDate,c=n.endDate,s=n.employed,d=n.duties,l=n.id;return Object(fe.jsxs)(rn,{children:[Object(fe.jsx)(ve,{label:"Job Title",name:"title",value:a,type:"text",handleInput:e.handleInput,placeholder:a,index:t,id:l}),Object(fe.jsx)(ve,{label:"Company",name:"company",value:i,type:"text",handleInput:e.handleInput,placeholder:i,index:t,id:l}),Object(fe.jsx)(Te,{label:"Check if still employed",name:"employed",value:s,handleInput:e.handleInput,index:t,id:l}),Object(fe.jsx)(ve,{label:"Date Started",name:"startDate",value:r,type:"date",handleInput:e.handleInput,index:t,id:l}),s?"":Object(fe.jsx)(re.a.Fragment,{children:Object(fe.jsx)(ve,{label:"Date Ended",name:"endDate",value:c,type:"date",handleInput:e.handleInput,index:t,id:l})}),Object(fe.jsx)(nn,{type:"textarea",label:"Duties",value:d,name:"duties",cols:30,rows:10,index:t,handleInput:e.handleInput}),0===t?"":Object(fe.jsx)(He,{type:"button",onClick:function(){return e.delete(t)},children:Object(fe.jsx)(Re,{})})]},l)}))})}),Object(fe.jsxs)(qe,{type:"button",onClick:function(){return e.addNewEntry()},children:["Add Entry ",Object(fe.jsx)(Ne.j,{})]})]})}}]),t}(ie.Component),sn=xe.a.div(B||(B=Object(ue.a)(["\n  width: 100%;\n  height: calc(100vh - 120px - 75px - 100px);\n  display: grid;\n  grid-template-rows: auto 1fr; \n  /* border: 2px solid green; */\n  position: fixed;\n  top: 175px;\n"]))),dn=xe.a.div(P||(P=Object(ue.a)(["\n  display: flex;\n  justify-content: center;\n  /* padding: 3rem; */\n  border: 2px solid blue;\n"]))),ln=xe.a.div(J||(J=Object(ue.a)(["\n  /* display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  padding: 3rem;\n  gap: 2rem; */\n\n  /* display: grid;\n  grid-template-columns: 1fr 1fr; */\n  display: flex;\n  \n  align-items: center;\n  /* gap: 2rem; */\n  border-radius: 10px;\n  padding:  3rem;\n  background: white;\n"]))),on=xe.a.div(M||(M=Object(ue.a)(["\n  /* display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  max-width: 1400px;\n  width: 90vw;\n  border-radius: 8px;\n  padding: 3rem 0;\n  background: white;\n  align-items: center;\n  gap: 2rem; */\n\n  /* display: grid;\n  grid-template-columns: 1fr 1fr; */\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 2rem;\n  max-width: 1400px;\n  width: 90vw;\n  border-radius: 8px;\n  padding: 3rem;\n  overflow-y: scroll;\n  height: calc(100vh - 120px - 175px - 121px);\n  /* background: white; */\n"]))),pn=(xe.a.form(_||(_=Object(ue.a)(["\n  /* width: 100%; */\n  display: grid;\n  gap: 2rem;\n  background: white;\n  padding: 3rem 0;\n  overflow-y: scroll;\n  height: calc(100vh - 120px - 175px - 121px);\n  position: fixed;\n  bottom: 120px;\n  top: 295px;\n  max-width: 1400px;\n  width: 90vw;\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  border: 2px solid black;\n"]))),function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(e){var a;return Object(le.a)(this,t),(a=n.call(this,e)).handleInput=function(e,n){e.preventDefault();var t=Object(de.a)({},a.state),i=t.skills,r=e.currentTarget;i[n]=r.value,a.setState(t)},a.delete=function(e){var n=Object(de.a)({},a.state);n.skills.splice(e,1),a.setState(n)},a.addNewEntry=function(){var e=Object(de.a)({},a.state);a.state.skills.push(""),a.setState(e)},a.state={skills:a.props.skills},a}return Object(oe.a)(t,[{key:"render",value:function(){var e=this,n=this.props.skills;return Object(fe.jsxs)(sn,{children:[Object(fe.jsx)(De,{children:"Skills"}),Object(fe.jsx)(dn,{children:Object(fe.jsx)(on,{children:n.length<1?Object(fe.jsx)("h4",{children:'No skills added, press "Add Entry to add a skill"'}):n.map((function(n,t){return Object(fe.jsxs)(ln,{children:[Object(fe.jsx)(ve,{label:"Skill",name:"skill",value:n,handleInput:e.handleInput,index:t}),Object(fe.jsx)(Ke,{type:"button",onClick:function(){return e.delete(t)},children:Object(fe.jsx)(Re,{})})]},t)}))})}),Object(fe.jsxs)(qe,{type:"button",onClick:function(){return e.addNewEntry()},children:["Add Entry ",Object(fe.jsx)(Ne.j,{})]})]})}}]),t}(ie.Component)),jn=xe.a.div(L||(L=Object(ue.a)(["\n    position: fixed;\n    top: 75px;\n    width: 100%;\n    height: 100%;\n    padding: 3rem;\n"]))),bn=xe.a.h1(R||(R=Object(ue.a)(["\n    font-size: 2rem;\n    text-align: center;\n"]))),hn=xe.a.h2(q||(q=Object(ue.a)(["\n    font-size: 1.5rem;\n"]))),un=xe.a.div(H||(H=Object(ue.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-bottom: 1rem;\n"]))),xn=xe.a.ul(K||(K=Object(ue.a)(["\n    list-style-type: none;\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 1rem;\n"]))),On=xe.a.h3(Q||(Q=Object(ue.a)(["\n    padding: 1rem 0;\n"]))),mn=xe.a.div(U||(U=Object(ue.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 1rem;\n"]))),gn=xe.a.p(W||(W=Object(ue.a)(["\n  padding-bottom: 1rem;\n"]))),fn=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,n=e.general,t=e.education,a=e.experience,i=e.skills,r=n.name,c=n.email,s=n.phone,d=n.portfolio,l=n.linkedIn,o=n.github;return console.log(this.props),Object(fe.jsxs)(jn,{className:"cv",children:[Object(fe.jsx)(bn,{children:r}),Object(fe.jsx)("br",{}),Object(fe.jsxs)(un,{children:[Object(fe.jsxs)("span",{children:[Object(fe.jsx)(Ne.i,{})," ",s]})," ","|"," ",Object(fe.jsxs)("span",{children:[Object(fe.jsx)(Ne.h,{})," ",c]})," ","|"," ",Object(fe.jsxs)("span",{children:[Object(fe.jsx)(Ne.e,{})," ",d]})," ","|"," ",Object(fe.jsxs)("span",{children:[" ",Object(fe.jsx)(Ne.g,{})," ",l]})," ","|"," ",Object(fe.jsxs)("span",{children:[Object(fe.jsx)(Ne.f,{})," ",o]})]}),Object(fe.jsxs)("div",{className:"experience",children:[Object(fe.jsx)("hr",{}),Object(fe.jsx)(hn,{children:"Experience"}),Object(fe.jsx)("hr",{}),a.map((function(e){var n=e.title,t=e.company,a=e.startDate,i=e.endDate,r=e.employed,c=e.duties;return console.log(a),Object(fe.jsxs)(re.a.Fragment,{children:[Object(fe.jsx)(On,{children:n}),Object(fe.jsxs)(mn,{children:[Object(fe.jsx)("span",{children:t}),!0===r?Object(fe.jsxs)("span",{children:[a," - Present"]}):Object(fe.jsxs)("span",{children:[a," - ",i]})]}),Object(fe.jsx)(gn,{children:c})]})}))]}),Object(fe.jsxs)("div",{className:"education",children:[Object(fe.jsx)("hr",{}),Object(fe.jsx)(hn,{children:"Education"}),Object(fe.jsx)("hr",{}),t.map((function(e){var n=e.school,t=e.major,a=e.attending,i=e.graduate,r=e.degree,c=e.startDate,s=e.designation,d=e.endDate;return Object(fe.jsxs)(re.a.Fragment,{children:[Object(fe.jsx)(On,{children:n}),"Yes"===i?Object(fe.jsxs)(mn,{children:[Object(fe.jsxs)("span",{children:[r," of ",s,", ",t]})," ",Object(fe.jsxs)("span",{children:["Graduated ",d]})," "]}):!0===a?Object(fe.jsxs)(mn,{children:[Object(fe.jsx)("span",{children:t}),Object(fe.jsxs)("span",{children:[c," - Present"]})]}):Object(fe.jsxs)("h4",{children:[c," - ",d]})]})}))]}),Object(fe.jsxs)("div",{className:"skills",children:[Object(fe.jsx)("hr",{}),Object(fe.jsx)(hn,{children:"Skills"}),Object(fe.jsx)("hr",{}),Object(fe.jsx)(xn,{children:i.map((function(e){return Object(fe.jsx)(re.a.Fragment,{children:Object(fe.jsx)("li",{children:e})})}))})]})]})}}]),t}(ie.Component),vn=xe.a.footer(X||(X=Object(ue.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 8rem;\n  padding: 2rem;\n  height: 120px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 1;\n  background: white;\n  border-top: 1px solid lightgray;\n\n  @media print {\n    display: none;\n  }\n"]))),yn=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,n=e.prevView,t=e.nextView,a=e.view;return Object(fe.jsxs)(vn,{children:[0===a?"":Object(fe.jsxs)(Me,{onClick:n,children:[Object(fe.jsx)(Ne.a,{})," Go Back"]}),3===a?Object(fe.jsxs)(Me,{onClick:t,children:["Generate ",Object(fe.jsx)(Ne.k,{})]}):Object(fe.jsxs)(Me,{onClick:t,children:["Next ",Object(fe.jsx)(Ne.b,{})]})]})}}]),t}(ie.Component),wn=xe.a.header(Z||(Z=Object(ue.a)(["\n  height: 75px;\n  background-image: linear-gradient(to right, blue, purple);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  @media print {\n    display: none;\n  }\n"]))),kn=xe.a.h1($||($=Object(ue.a)(["\n    font-size: 2rem;\n    letter-spacing: 2px;\n    font-family: 'Roboto';\n"]))),In=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){return Object(le.a)(this,t),n.apply(this,arguments)}return Object(oe.a)(t,[{key:"render",value:function(){return Object(fe.jsxs)(wn,{children:[Object(fe.jsx)(kn,{children:"CV Builder"}),Object(fe.jsxs)(Qe,{className:"hide",onClick:function(){return window.print()},children:["Download CV ",Object(fe.jsx)(Ne.d,{})]})]})}}]),t}(ie.Component),Cn=xe.a.div(ee||(ee=Object(ue.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  height: 100px;\n  position: fixed;\n  top: 75px;\n  background: white;\n"]))),Dn=xe.a.div(ne||(ne=Object(ue.a)(["\n  border: 1px solid blue;\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  font-size: 25px;\n  font-weight: bold;\n  background: blue;\n  color: white;\n"]))),Sn=xe.a.div(te||(te=Object(ue.a)(["\n    display: grid;\n    place-items: center;\n"]))),Nn=Object(xe.a)(Ne.c)(ae||(ae=Object(ue.a)(["\n    font-weight: bold;\n"]))),En=function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(){var e;Object(le.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={steps:[1,2,3,4,5]},e}return Object(oe.a)(t,[{key:"render",value:function(){var e=this.state.steps;return Object(fe.jsx)(Cn,{children:e.map((function(e){return Object(fe.jsxs)(Sn,{children:[Object(fe.jsx)(Dn,{children:Object(fe.jsx)(Nn,{})}),Object(fe.jsxs)("p",{children:["Step ",e]})]})}))})}}]),t}(ie.Component),zn=t(13),Vn=t.n(zn),Fn=(ie.Component,function(e){Object(pe.a)(t,e);var n=Object(je.a)(t);function t(e){var a;return Object(le.a)(this,t),(a=n.call(this,e)).generateCV=function(){var e=Object(de.a)({},a.state);e.view++,a.setState(e)},a.nextView=function(e){e.preventDefault();var n=Object(de.a)({},a.state);n.view++,a.setState(n)},a.prevView=function(e){e.preventDefault();var n=Object(de.a)({},a.state);n.view--,a.setState(n)},a.state={general:{name:"",email:"",phone:"",portfolio:"",linkedIn:"",github:""},education:[{school:"",major:"",startDate:"",endDate:"",attending:"",graduate:"",degree:"",designation:"",id:he()()}],experience:[{title:"",company:"",startDate:"",endDate:"",employed:"",duties:"",id:he()()}],skills:[""],view:0},a}return Object(oe.a)(t,[{key:"render",value:function(){var e=this,n=this.state.view;return Object(fe.jsxs)("section",{className:"App",children:[Object(fe.jsx)(In,{className:"hide"}),n>3?"":Object(fe.jsx)(En,{}),Object(fe.jsx)("article",{className:"builder",children:0===n?Object(fe.jsx)(Se,{general:this.state.general,addNewEntry:this.addNewEntry}):1===n?Object(fe.jsx)("div",{children:Object(fe.jsx)(Ze,{education:this.state.education})}):2===n?Object(fe.jsx)("div",{children:Object(fe.jsx)(cn,{experience:this.state.experience})}):3===n?Object(fe.jsx)("div",{children:Object(fe.jsx)(pn,{skills:this.state.skills})}):Object(fe.jsx)("div",{className:"cv",children:Object(fe.jsx)(fn,{general:this.state.general,education:this.state.education,experience:this.state.experience,skills:this.state.skills,ref:function(n){return e.componentRef=n}})})}),Object(fe.jsx)(yn,{className:"hide",prevView:this.prevView,nextView:this.nextView,view:this.state.view,generateCV:this.generateCV})]})}}]),t}(ie.Component));se.a.render(Object(fe.jsx)(re.a.StrictMode,{children:Object(fe.jsx)(Fn,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b54c1eb2.chunk.js.map