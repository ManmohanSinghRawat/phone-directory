(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),c=a.n(s),r=(a(15),a(2)),i=a(3),u=a(5),m=a(4),o=a(6),h=a(1),b=(a(16),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={page:"First",data:[]},a.changeList=a.changeList.bind(Object(h.a)(Object(h.a)(a))),a.handlePage=a.handlePage.bind(Object(h.a)(Object(h.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"enterDataToDirectory",value:function(e){this.state.data.push(e)}},{key:"changePage",value:function(){"First"===this.state.page?this.setState({page:"Second"}):this.setState({page:"First"})}},{key:"changeList",value:function(e){var t=this.state.data,a=t[e];this.setState({data:t.filter(function(e){return e!==a})})}},{key:"handlePage",value:function(){return"First"===this.state.page?l.a.createElement("div",null,l.a.createElement(p,{className:"HeaderStyle"}),l.a.createElement(E,{className:"PageButton",name:"ADD NEW CONTACT",page:this.changePage.bind(this)}),l.a.createElement(d,{classTableName:"Table",classTableBodyName:"TableBody",classTableHeadName:"TableHead",data:this.state.data,del:this.changeList.bind(this),updateTable:this.handlePage.bind(this)})):"Second"===this.state.page?l.a.createElement("div",null,l.a.createElement(p,{className:"HeaderStyle"}),l.a.createElement(E,{className:"PageButton",name:"BACK",page:this.changePage.bind(this)}),l.a.createElement(O,{classFORMSHOWName:"FORMSHOW",classFORMDATAName:"FORMDATA",classSUBMITBUTTONName:"SUBMITBUTTON",classUSERName:"USER",classPASSName:"PHONE",data:this.enterDataToDirectory.bind(this)})):void 0}},{key:"render",value:function(){return l.a.createElement("div",null,this.handlePage())}}]),t}(n.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.className},"PHONE DIRECTORY")}}]),t}(n.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.del,t=-1,a=this.props.data.map(function(a){return t++,l.a.createElement(N,{num:t,name:a.name,del:e,number:a.number})});return l.a.createElement("div",null,l.a.createElement("table",{className:this.props.classTableName},l.a.createElement("thead",{className:this.props.classTableHeadName},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Number"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",{className:this.props.classTableBodyName,updateTable:this.props.updateTable},a)))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={name:"",number:""},a.changeName=a.changeName.bind(Object(h.a)(Object(h.a)(a))),a.changeNumber=a.changeNumber.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"changeName",value:function(e){this.setState({name:e.target.value})}},{key:"changeNumber",value:function(e){this.setState({number:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,number:this.state.number};this.props.data(t)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit,className:this.props.classFORMSHOWName},l.a.createElement("span",{className:this.props.classUSERName},"Username : ",l.a.createElement("input",{placeholder:"Username",onChange:this.changeName,type:"text"})),l.a.createElement("br",null),l.a.createElement("span",{className:this.props.classPASSName},"Phone : ",l.a.createElement("input",{placeholder:"XXXXXXXXXX",onChange:this.changeNumber,type:"text"})," ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:this.props.classFORMDATAName},"Enter data is: ",l.a.createElement("br",null),"Name: ",l.a.createElement("span",null,this.state.name),l.a.createElement("br",null),"Number: ",l.a.createElement("span",null,this.state.number),l.a.createElement("br",null)),l.a.createElement("button",{type:"submit",className:this.props.classSUBMITBUTTONName},"Add Contact")))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{className:this.props.className,onClick:function(){return e.props.page()}},this.props.name))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).deleteContact=a.deleteContact.bind(Object(h.a)(Object(h.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"deleteContact",value:function(e){return this.props.del(e.target.value)}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.name),l.a.createElement("td",null,this.props.number),l.a.createElement("td",null,l.a.createElement("button",{value:this.props.num,onClick:this.deleteContact},"Delete")))}}]),t}(n.Component),g=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c7511b0b.chunk.js.map