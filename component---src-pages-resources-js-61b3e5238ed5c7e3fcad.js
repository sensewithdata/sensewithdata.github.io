(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9I2h":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("+e4l"),o=a("dI71"),c=a("Wbzz"),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={search:""},t.handleChange=function(e){t.setState({search:e.target.value})},t}return Object(o.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.search;return r.a.createElement(c.b,{query:"601860514",render:function(a){return r.a.createElement("div",null,t.includes("there")?r.a.createElement("p",null,"howdy"):null,r.a.createElement("p",null,"As part of our data fellowship we read around and collated a library of interesting links..."),r.a.createElement("form",null,r.a.createElement("label",null,"Search:",r.a.createElement("input",{type:"text",name:"searchBox",value:e.state.searchText,onChange:e.handleChange}))),r.a.createElement("hr",null),r.a.createElement("h3",null,"What Is Data?"),a.allMarkdownRemark.edges.map((function(e){var a=e.node;return r.a.createElement("div",null,(a.frontmatter.title.toLowerCase().includes(t.toLowerCase())||a.html.toLowerCase().includes(t.toLowerCase())||a.frontmatter.description.toLowerCase().includes(t.toLowerCase()))&&"whatisdata"==a.frontmatter.resource_category?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:a.frontmatter.url},a.frontmatter.title)," - ",a.frontmatter.description),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("br",null)):null)})),r.a.createElement("hr",null),r.a.createElement("h3",null,"Sensemaking and Systems Change"),a.allMarkdownRemark.edges.map((function(e){var a=e.node;return r.a.createElement("div",null,(a.frontmatter.title.toLowerCase().includes(t.toLowerCase())||a.html.toLowerCase().includes(t.toLowerCase())||a.frontmatter.description.toLowerCase().includes(t.toLowerCase()))&&"sensemakingandsystemschange"==a.frontmatter.resource_category?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:a.frontmatter.url},a.frontmatter.title)," - ",a.frontmatter.description),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("br",null)):null)})))}})},t}(r.a.Component);function s(){return r.a.createElement(l.a,null,r.a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-61b3e5238ed5c7e3fcad.js.map