(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{18:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(19),c=a.n(s),i=a(9),o=a.n(i),u=a(20),l=a(3),m=a(4),h=a(6),p=a(5),b=a(21),j=a.n(b).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296"}}),d=(a(18),a(0)),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"ui segment",children:[Object(d.jsx)("div",{className:"logo_section",children:Object(d.jsx)("img",{src:"img/logo.png",alt:"logo"})}),Object(d.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("input",{type:"text",placeholder:"Search images here...",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})})})]})}}]),a}(r.a.Component),v=f,g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return Object(d.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(d.jsx)("img",{ref:this.imageRef,alt:t,src:a.regular})})}}]),a}(r.a.Component),O=function(e){var t=e.images;return Object(d.jsx)("div",{className:"image-list",children:t.map((function(e){return Object(d.jsx)(g,{image:e},e.id)}))})},x=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.onSearchSubmit("nature")}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(d.jsx)(v,{onSubmit:this.onSearchSubmit}),Object(d.jsx)(O,{images:this.state.images})]})}}]),a}(r.a.Component),S=x;c.a.render(Object(d.jsx)(S,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9c251e94.chunk.js.map