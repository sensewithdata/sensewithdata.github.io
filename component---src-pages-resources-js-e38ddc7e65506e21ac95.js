(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9I2h":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=n("+e4l"),c=n("dI71"),o=n("Wbzz"),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={search:""},t.handleChange=function(e){t.setState({search:e.target.value})},t}return Object(c.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.search;return r.a.createElement(o.b,{query:"300809177",render:function(n){return r.a.createElement("div",null,t.includes("there")?r.a.createElement("p",null,"howdy"):null,r.a.createElement("p",null,"As part of our data fellowship we read around and collated a library of interesting links..."),r.a.createElement("form",null,r.a.createElement("label",null,"Search:",r.a.createElement("input",{type:"text",name:"searchBox",value:e.state.searchText,onChange:e.handleChange}))),r.a.createElement("hr",null),n.allMarkdownRemark.edges.map((function(e){var n=e.node;return r.a.createElement("div",null,n.frontmatter.title.toLowerCase().includes(t)||n.html.toLowerCase().includes(t)||n.frontmatter.description.toLowerCase().includes(t)?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:n.frontmatter.url},n.frontmatter.title)," - ",n.frontmatter.description),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),r.a.createElement("hr",null)):null)})))}})},t}(r.a.Component);function i(){return r.a.createElement(l.a,null,r.a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-e38ddc7e65506e21ac95.js.map