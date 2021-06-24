(this.webpackJsonpmoviebox=this.webpackJsonpmoviebox||[]).push([[0],{66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(33),s=a.n(c),i=a(21),o=a(4),l=a.n(o),m=a(13),u=a(9),d=a(10),j=a(12),h=a(11),b=a(16),v=a(0),p=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleFormSubmit=function(e){e.preventDefault()},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(v.jsx)("div",{className:"form-row mb-5",children:Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("div",{className:"col-10",children:Object(v.jsx)("input",{onChange:this.props.searchMovieProp,type:"text",className:"form-control",placeholder:"Search a movie"})}),Object(v.jsx)("div",{className:"col-2",children:Object(v.jsx)(b.b,{to:"/add",type:"button",className:"btn btn-md btn-danger",style:{float:"right"},children:"Add Movie"})})]})})})}}]),a}(r.a.Component),f=function(e){return Object(v.jsx)("div",{className:"row",children:e.movies.map((function(t,a){return Object(v.jsx)("div",{className:"col-lg-4 key",children:Object(v.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(v.jsx)("img",{src:t.imageURL,className:"card-img-top",alt:"Sample Movie"}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{className:"card-title",children:t.name}),Object(v.jsx)("p",{className:"card-text",children:(n=t.overview,r=100,n?n.length<=r?n:"".concat(n.substring(0,r)," ..."):null)}),Object(v.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(v.jsx)("button",{type:"button",onClick:function(a){return e.deleteMovieProp(t)},className:"btn btn-md btn-outline-danger",children:"Delete"}),Object(v.jsx)(b.b,{type:"button",className:"btn btn-md btn-outline-primary",to:"edit/".concat(t.id),children:"Edit "}),Object(v.jsx)("h2",{children:Object(v.jsx)("span",{className:"badge badge-info",children:t.rating})})]})]})]})},a);var n,r}))})},x=a(35),O=a.n(x),g=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleFormSubmit=function(t){t.preventDefault();var a=O()(t.target,{hash:!0});e.props.onAddMovie(a)},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("form",{className:"mt-5",onSubmit:this.handleFormSubmit,children:[Object(v.jsx)("input",{className:"form-control",id:"disabledInput",type:"text",placeholder:"Fill The Form To Add A Movie..",disabled:!0}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsxs)("div",{className:"form-group col-md-10",children:[Object(v.jsx)("label",{htmlFor:"inputName",children:"Name"}),Object(v.jsx)("input",{type:"text",className:"form-control",name:"name"})]}),Object(v.jsxs)("div",{className:"form-group col-md-2",children:[Object(v.jsx)("label",{htmlFor:"inputRating",children:"Rating"}),Object(v.jsx)("input",{type:"text",className:"form-control",name:"rating"})]})]}),Object(v.jsx)("div",{className:"form-row",children:Object(v.jsxs)("div",{className:"form-group col-md-12",children:[Object(v.jsx)("label",{htmlFor:"inputImage",children:"Image URL"}),Object(v.jsx)("input",{type:"text",className:"form-control",name:"imageURL"})]})}),Object(v.jsx)("div",{className:"form-row",children:Object(v.jsxs)("div",{className:"form-group col-md-12",children:[Object(v.jsx)("label",{htmlFor:"overviewTextarea",children:"Overview"}),Object(v.jsx)("textarea",{className:"form-control",name:"overview",rows:"5"})]})}),Object(v.jsx)("input",{type:"submit",className:"btn btn-danger btn-block",value:"Add Movie"})]})})}}]),a}(r.a.Component),N=a(18),w=a(15),y=a.n(w),M=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",rating:"",overview:"",imageURL:""},e.onInputChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.rating,c=a.overview,s=a.imageURL,i=e.props.match.params.id,o={name:n,rating:r,overview:c,imageURL:s};e.props.onEditMovie(i,o),e.props.history.push("/")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,y.a.get("http://localhost:3002/movies/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,rating:n.rating,overview:n.overview,imageURL:n.imageURL});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("form",{className:"mt-5",onSubmit:this.handleFormSubmit,children:[Object(v.jsx)("input",{className:"form-control",id:"disabledInput",type:"text",placeholder:"Edit the form for update..",disabled:!0}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsxs)("div",{className:"form-group col-md-10",children:[Object(v.jsx)("label",{htmlFor:"inputName",children:"Name"}),Object(v.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.onInputChange})]}),Object(v.jsxs)("div",{className:"form-group col-md-2",children:[Object(v.jsx)("label",{htmlFor:"inputRating",children:"Rating"}),Object(v.jsx)("input",{type:"text",className:"form-control",name:"rating",value:this.state.rating,onChange:this.onInputChange})]})]}),Object(v.jsx)("div",{className:"form-row",children:Object(v.jsxs)("div",{className:"form-group col-md-12",children:[Object(v.jsx)("label",{htmlFor:"inputImage",children:"Image URL"}),Object(v.jsx)("input",{type:"text",className:"form-control",name:"imageURL",value:this.state.rating,onChange:this.onInputChange})]})}),Object(v.jsx)("div",{className:"form-row",children:Object(v.jsxs)("div",{className:"form-group col-md-12",children:[Object(v.jsx)("label",{htmlFor:"overviewTextarea",children:"Overview"}),Object(v.jsx)("textarea",{className:"form-control",name:"overview",rows:"5",value:this.state.overview,onChange:this.onInputChange})]})}),Object(v.jsx)("input",{type:"submit",className:"btn btn-warning btn-block",value:"Edit Movie"})]})})}}]),a}(r.a.Component),k=a(2),C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],searchQuery:""},e.deleteMovie=function(){var t=Object(m.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y.a.delete("http://localhost:3002/movies/".concat(a.id)),n=e.state.movies.filter((function(e){return e.id!==a.id})),e.setState((function(e){return{movies:n}}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchMovie=function(t){e.setState({searchQuery:t.target.value})},e.addMovie=function(){var t=Object(m.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("http://localhost:3002/movies/",a);case 2:e.setState((function(e){return{movies:e.movies.concat([a])}})),e.getMovies();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editMovie=function(){var t=Object(m.a)(l.a.mark((function t(a,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.put("http://localhost:3002/movies/".concat(a),n);case 2:e.getMovies();case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3002/movies");case 2:t=e.sent,this.setState({movies:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.movies.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.state.searchQuery.toLowerCase())})).sort((function(e,t){return e.id<t.id?1:e.id>t.id?-1:0}));return Object(v.jsx)(b.a,{children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(k.c,{children:[Object(v.jsx)(k.a,{path:"/",exact:!0,render:function(){return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-lg-12",children:Object(v.jsx)(p,{searchMovieProp:e.searchMovie})})}),Object(v.jsx)(f,{movies:t,deleteMovieProp:e.deleteMovie})]})}}),Object(v.jsx)(k.a,{path:"/add",exact:!0,render:function(t){var a=t.history;return Object(v.jsx)(g,{onAddMovie:function(t){e.addMovie(t),a.push("/")}})}}),Object(v.jsx)(k.a,{path:"/edit/:id",render:function(t){return Object(v.jsx)(M,Object(i.a)(Object(i.a)({},t),{},{onEditMovie:function(t,a){e.editMovie(t,a)}}))}})]})})})}}]),a}(r.a.Component);a(65);s.a.render(Object(v.jsx)(C,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c53ccc79.chunk.js.map