(this["webpackJsonpjs-react-component"]=this["webpackJsonpjs-react-component"]||[]).push([[0],[,,,,,,,,function(t){t.exports=JSON.parse('[{"id":"id-1","url":"https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg","title":"Feathers. Art abstract","price":500,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":10},{"id":"id-2","url":"https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg","title":"Bird. Animal art abstract","price":400,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":15},{"id":"id-3","url":"https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg","title":"Flowers. Tulip nature art abstract","price":600,"author":{"tag":"ractapopulous","url":"https://pixabay.com/users/ractapopulous-24766/"},"quantity":5}]')},function(t,e,n){t.exports={container:"Panel_container__BhI6U"}},function(t,e,n){t.exports={"primary-text-color":"green",notification:"Notification_notification__2un-3",error:"Notification_error__3UN73 Notification_notification__2un-3",success:"Notification_success__1vKDl Notification_notification__2un-3"}},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),r=n(7),s=n.n(r),c=n(2),a=n(3),l=n(5),d=n(4),j=n.p+"static/media/enot07.bdae9aaa.png",u=(n(15),n(0)),p=function(t){var e=t.url,n=t.title,i=t.profileUrl,o=t.tag,r=t.price,s=t.quantity;return Object(u.jsxs)("div",{className:"Painting",children:[Object(u.jsx)("img",{src:e,alt:n,width:"480"}),Object(u.jsx)("h2",{children:n}),Object(u.jsxs)("p",{children:["Author: ",Object(u.jsx)("a",{href:i,children:o})]}),Object(u.jsxs)("p",{children:["Price: ",r," Euro"]}),Object(u.jsxs)("p",{children:["Verf\xfcgbarkeit: ",s<10?"Leer":"Verf\xfcgbar"]}),Object(u.jsx)("button",{type:"button",children:"add korb"})]})};p.defaultProps={url:j};var f=p,b=(n(17),function(t){var e=t.paintings;return Object(u.jsx)("ul",{className:"PaintingList",children:e.map((function(t){var e=t.id,n=t.url,i=t.title,o=t.price,r=t.author,s=t.quantity;return Object(u.jsx)("li",{className:"PaintingList__item",children:Object(u.jsx)(f,{url:n,title:i,price:o,profileUrl:r.url,tag:r.tag,quantity:s})},e)}))})}),h=n(8),x=function(t){var e=t.text;return Object(u.jsx)("div",{children:e})},O=n(9),v=n.n(O),m=function(t){var e=t.title,n=t.children;return Object(u.jsxs)("div",{className:v.a.container,children:[e&&Object(u.jsx)("h2",{children:e}),n]})};m.defaultProps={title:""};var g=m,_=(n(18),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={activeOptionIdx:0},t.setActiveIdx=function(e){t.setState({activeOptionIdx:e})},t.makeOptionClassName=function(e){var n=["ColorPicker__option"];return e===t.state.activeOptionIdx&&n.push("ColorPicker__option--active"),n.join(" ")},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state.activeOptionIdx,n=this.props.options[e].label;return Object(u.jsxs)("div",{className:"ColorPicker",children:[Object(u.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(u.jsxs)("h3",{children:["This Color is: ",n]}),Object(u.jsx)("div",{children:this.props.options.map((function(e,n){var i=e.label,o=e.color;return Object(u.jsx)("button",{className:t.makeOptionClassName(n),style:{backgroundColor:o},onClick:function(){return t.setActiveIdx(n)}},i)}))})]})}}]),n}(i.Component)),y=n(10),k=n.n(y),N=function(t){var e=t.text,n=t.type;return Object(u.jsx)("p",{className:k.a[n],children:e})};N.defaultProps={type:"success"};var C=N,w=(n(19),function(t){var e=t.onIncrement,n=t.onDecrement;return Object(u.jsxs)("div",{className:"Counter__controls",children:[Object(u.jsx)("button",{type:"button",onClick:e,children:"plus 1"}),Object(u.jsx)("button",{type:"button",onClick:n,children:"minus 1"})]})}),A=function(t){var e=t.value;return Object(u.jsx)("span",{className:"Counter__value",children:e})},D=(n(20),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={value:t.props.initialValue},t.handleIncrement=function(){t.setState((function(t){return{value:t.value+1}}))},t.handleDecrement=function(){t.setState((function(t){return{value:t.value-1}}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state.value;return Object(u.jsxs)("div",{className:"Counter",children:[Object(u.jsx)(A,{value:t}),Object(u.jsx)(w,{onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})]})}}]),n}(o.a.Component));D.defaultProps={initialValue:0};var P=D,I=(n(21),n.p+"static/media/enot07.bdae9aaa.png");console.log(I);var T=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={visible:!1},t.toggle=function(){t.setState((function(t){return{visible:!t.visible}}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state.visible;return Object(u.jsxs)("div",{className:"DropDown",children:[Object(u.jsx)("button",{type:"button",className:"DropDown__toggle",onClick:this.toggle,children:t?"hide":"Click here"}),t&&Object(u.jsxs)("div",{className:"DropDown__menu",children:[Object(u.jsx)("img",{src:I,alt:"enot",width:"480"}),Object(u.jsx)("p",{children:"TADAAAAAM"})]})]})}}]),n}(i.Component),F=(n(22),function(t){var e=t.todos,n=t.onDeleteTodo;return Object(u.jsx)("ul",{className:"TodoList",children:e.map((function(t){var e=t.id,i=t.text;return Object(u.jsxs)("li",{className:"TodoList__item",children:[Object(u.jsx)("p",{className:"TodoList__text",children:i}),Object(u.jsx)("button",{onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})}),S=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}],q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{id:"id-1",text:"learn html/css",completed:!0},{id:"id-2",text:"learn js",completed:!0},{id:"id-3",text:"learn react",completed:!1},{id:"id-4",text:"learn node.js",completed:!1}]},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state.todos,e=t.reduce((function(t,e){return e.completed?t+1:t}),0);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"sostoyanie komponenta"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["amount: ",t.length]}),Object(u.jsxs)("p",{children:["erledigt: ",e]})]}),Object(u.jsx)(F,{todos:t,onDeleteTodo:this.deleteTodo}),Object(u.jsx)(T,{}),Object(u.jsx)(P,{}),Object(u.jsx)(_,{options:S}),Object(u.jsx)(C,{text:"so good",type:"success"}),Object(u.jsx)(C,{text:"so bad",type:"error"}),Object(u.jsxs)(g,{title:"last news",children:[Object(u.jsx)("p",{children:"lorem ipsums sdkl\xf6fjsdlk sdofsad\xf6oifh disofjsiodfjs sdiofjsdiofj sdiofjsiodfj iofjas dfoij sdpiofjsdi fsiodf siofjsdiofjsiodfjsiofjsdifjs\xf6dfjsadi\xf6fjasiofjwfjks+o\xfc#kdofksdo\xe4fjsdfg"})," ",Object(u.jsx)("a",{href:"",children:"lesen..."})]}),Object(u.jsxs)(g,{children:[Object(u.jsx)("p",{children:"lorem ipsums sdkl\xf6fjsdlk sdofsad\xf6oifh disofjsiodfjs sdiofjsdiofj sdiofjsiodfj iofjas dfoij sdpiofjsdi fsiodf siofjsdiofjsiodfjsiofjsdifjs\xf6dfjsadi\xf6fjasiofjwfjks+o\xfc#kdofksdo\xe4fjsdfg"})," "]}),Object(u.jsx)(x,{text:Object(u.jsx)("h1",{children:"First Component"})}),Object(u.jsx)(b,{paintings:h})]})}}]),n}(i.Component);n(23),n(24);s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.7e343ce3.chunk.js.map