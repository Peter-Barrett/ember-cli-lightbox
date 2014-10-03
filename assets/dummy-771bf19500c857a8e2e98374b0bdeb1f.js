define("dummy/app",["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],function(e,t,a,s,n){"use strict";var i=e["default"],r=t["default"],h=a["default"],l=s["default"];i.MODEL_FACTORY_INJECTIONS=!0;var o=i.Application.extend({modulePrefix:l.modulePrefix,podModulePrefix:l.podModulePrefix,Resolver:r});h(o,l.modulePrefix),n["default"]=o}),define("dummy/config/environment",["exports"],function(e){"use strict";e["default"]={modulePrefix:"dummy",environment:"production",baseURL:"/ember-cli-lightbox/",locationType:"auto",EmberENV:{FEATURES:{}},APP:{}}}),define("dummy/components/code-snippet",["ember","dummy/snippets","exports"],function(e,t,a){"use strict";var s=e["default"],n=t["default"],i=require("highlight.js");a["default"]=s.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,a,s=e.split("\n"),n=0;n<s.length;n++)t=/^\s*/.exec(s[n]),t&&("undefined"==typeof a||a>t[0].length)&&(a=t[0].length);return"undefined"!=typeof a&&a>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+a+"}","g"),"$1")),e},source:function(){return this._unindent((n[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}.property("name"),didInsertElement:function(){i.highlightBlock(this.get("element"))},language:function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars"}}.property("name")})}),define("dummy/snippets",["exports"],function(e){"use strict";e["default"]={"2.hbs":'{{#light-box href="assets/images/3-4086120a5eb1c07d22a77fd006b79cb1.jpg" data-lightbox="cat-3" data-title="Cat 3" inlineImage=false}}\r\n    Cat 4\r\n{{/light-box}}\r\n\r\n{{#light-box href="assets/images/4-539ab2be834a8dcfa808ae129e6f5bf0.jpg" data-lightbox="cat-4" data-title="Cat 4" inlineImage=false}}\r\n    Cat5\r\n{{/light-box}}\r\n',"1.hbs":'{{light-box href="assets/images/1-762519d870c6425b7d0f46f485ad326f.jpg" data-lightbox="cat-1" data-title="Cat 1"}}\r\n\r\n{{light-box href="assets/images/2-c7f3ae7af3fa7e273c5dc9771303c4c2.jpg" data-lightbox="cat-2" data-title="Cat 2"}}\r\n',"3.hbs":'{{light-box href="assets/images/5-1f4bc128633b74a9e5bedf273274fbc4.jpg" data-lightbox="cats-group" data-title="Cat 5"}}\r\n\r\n{{#light-box href="assets/images/6-928574e6488d9a476e427a6e266dc205.jpg" data-lightbox="cats-group" data-title="Cat 6" inlineImage=false}}\r\n    Cat 6\r\n{{/light-box}}\r\n\r\n{{light-box href="assets/images/7-a32c3fd77d63416fbd875d49c3dc9e38.jpg" data-lightbox="cats-group" data-title="Cat 7"}}\r\n\r\n{{#light-box href="assets/images/8-76a3588cc2ccf15c11837e3bbea22981.jpg" data-lightbox="cats-group" data-title="Cat 8" inlineImage=false}}\r\n    Cat 8\r\n{{/light-box}}\r\n',usage:"npm install ember-cli-lightbox --save\r\nember g ember-cli-lightbox\r\n"}}),define("dummy/components/light-box",["ember","ember-cli-lightbox/mixins/light-box","exports"],function(e,t,a){"use strict";var s=e["default"],n=t["default"];a["default"]=s.Component.extend(n,{})}),define("dummy/config/environments/production",["exports"],function(e){"use strict";e["default"]={modulePrefix:"dummy",environment:"production",baseURL:"/ember-cli-lightbox/",locationType:"auto",EmberENV:{FEATURES:{}},APP:{}}}),define("dummy/router",["ember","dummy/config/environment","exports"],function(e,t,a){"use strict";var s=e["default"],n=t["default"],i=s.Router.extend({location:n.locationType});i.map(function(){}),a["default"]=i}),define("dummy/templates/application",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,i){function r(e,t){t.buffer.push("\r\n            Cat 4\r\n        ")}function h(e,t){t.buffer.push("\r\n            Cat5\r\n        ")}function l(e,t){t.buffer.push("\r\n            Cat 6\r\n        ")}function o(e,t){t.buffer.push("\r\n            Cat 8\r\n        ")}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),i=i||{};var p,f,u,d="",g=s.helperMissing,c=this.escapeExpression,b=this;return i.buffer.push('<div class="github-fork-ribbon-wrapper right">\r\n    <div class="github-fork-ribbon">\r\n        <a href="https://github.com/ramybenaroya/ember-cli-lightbox">Fork me on GitHub</a>\r\n    </div>\r\n</div>\r\n<h1>Ember CLI Addon for <a href="http://lokeshdhakar.com/projects/lightbox2/">Lightbox2</a></h1>\r\n<section>\r\n    <h2>Installation</h2>\r\n    '),i.buffer.push(c((f=s["code-snippet"]||t&&t["code-snippet"],u={hash:{name:"usage"},hashTypes:{name:"STRING"},hashContexts:{name:t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"code-snippet",u)))),i.buffer.push("\r\n</section>\r\n<section>\r\n    <h2>Usage Examples</h2>\r\n    <section>\r\n        <h2>Individual Clickable Images</h2>\r\n        "),i.buffer.push(c((f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/1-762519d870c6425b7d0f46f485ad326f.jpg","data-lightbox":"cat-1","data-title":"Cat 1"},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING"},hashContexts:{href:t,"data-lightbox":t,"data-title":t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"light-box",u)))),i.buffer.push("\r\n        "),i.buffer.push(c((f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/2-c7f3ae7af3fa7e273c5dc9771303c4c2.jpg","data-lightbox":"cat-2","data-title":"Cat 2"},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING"},hashContexts:{href:t,"data-lightbox":t,"data-title":t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"light-box",u)))),i.buffer.push("\r\n        <hr/>\r\n        <h4>Code</h4>\r\n        "),i.buffer.push(c((f=s["code-snippet"]||t&&t["code-snippet"],u={hash:{name:"1.hbs"},hashTypes:{name:"STRING"},hashContexts:{name:t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"code-snippet",u)))),i.buffer.push("\r\n    </section>\r\n    <section>\r\n        <h2>Individual Clickable Links</h2>\r\n        "),f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/3-4086120a5eb1c07d22a77fd006b79cb1.jpg","data-lightbox":"cat-3","data-title":"Cat 3",inlineImage:!1},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING",inlineImage:"BOOLEAN"},hashContexts:{href:t,"data-lightbox":t,"data-title":t,inlineImage:t},inverse:b.noop,fn:b.program(1,r,i),contexts:[],types:[],data:i},p=f?f.call(t,u):g.call(t,"light-box",u),(p||0===p)&&i.buffer.push(p),i.buffer.push("\r\n        "),f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/4-539ab2be834a8dcfa808ae129e6f5bf0.jpg","data-lightbox":"cat-4","data-title":"Cat 4",inlineImage:!1},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING",inlineImage:"BOOLEAN"},hashContexts:{href:t,"data-lightbox":t,"data-title":t,inlineImage:t},inverse:b.noop,fn:b.program(3,h,i),contexts:[],types:[],data:i},p=f?f.call(t,u):g.call(t,"light-box",u),(p||0===p)&&i.buffer.push(p),i.buffer.push("\r\n        <hr/>\r\n        <h4>Code</h4>\r\n        "),i.buffer.push(c((f=s["code-snippet"]||t&&t["code-snippet"],u={hash:{name:"2.hbs"},hashTypes:{name:"STRING"},hashContexts:{name:t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"code-snippet",u)))),i.buffer.push("\r\n    </section>\r\n    <section class='special'>\r\n        <h2>Grouped Images & Links</h2>\r\n        "),i.buffer.push(c((f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/5-1f4bc128633b74a9e5bedf273274fbc4.jpg","data-lightbox":"cats-group","data-title":"Cat 5"},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING"},hashContexts:{href:t,"data-lightbox":t,"data-title":t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"light-box",u)))),i.buffer.push("\r\n        "),f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/6-928574e6488d9a476e427a6e266dc205.jpg","data-lightbox":"cats-group","data-title":"Cat 6",inlineImage:!1},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING",inlineImage:"BOOLEAN"},hashContexts:{href:t,"data-lightbox":t,"data-title":t,inlineImage:t},inverse:b.noop,fn:b.program(5,l,i),contexts:[],types:[],data:i},p=f?f.call(t,u):g.call(t,"light-box",u),(p||0===p)&&i.buffer.push(p),i.buffer.push("\r\n        "),i.buffer.push(c((f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/7-a32c3fd77d63416fbd875d49c3dc9e38.jpg","data-lightbox":"cats-group","data-title":"Cat 7"},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING"},hashContexts:{href:t,"data-lightbox":t,"data-title":t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"light-box",u)))),i.buffer.push("\r\n        "),f=s["light-box"]||t&&t["light-box"],u={hash:{href:"assets/images/8-76a3588cc2ccf15c11837e3bbea22981.jpg","data-lightbox":"cats-group","data-title":"Cat 8",inlineImage:!1},hashTypes:{href:"STRING","data-lightbox":"STRING","data-title":"STRING",inlineImage:"BOOLEAN"},hashContexts:{href:t,"data-lightbox":t,"data-title":t,inlineImage:t},inverse:b.noop,fn:b.program(7,o,i),contexts:[],types:[],data:i},p=f?f.call(t,u):g.call(t,"light-box",u),(p||0===p)&&i.buffer.push(p),i.buffer.push("\r\n        <hr/>\r\n        <h4>Code</h4>\r\n        "),i.buffer.push(c((f=s["code-snippet"]||t&&t["code-snippet"],u={hash:{name:"3.hbs"},hashTypes:{name:"STRING"},hashContexts:{name:t},contexts:[],types:[],data:i},f?f.call(t,u):g.call(t,"code-snippet",u)))),i.buffer.push('\r\n    </section>\r\n</section>\r\n<p class="footer">\r\n    Project maintained by <a href="https://github.com/ramybenaroya">@ramybenaroya</a>\r\n</p>\r\n\r\n'),p=s._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:i}),(p||0===p)&&i.buffer.push(p),i.buffer.push("\r\n"),d})}),define("dummy/templates/components/code-snippet",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,i){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),i=i||{};var r,h="";return r=s._triageMustache.call(t,"source",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:i}),(r||0===r)&&i.buffer.push(r),i.buffer.push("\n"),h})}),define("dummy/templates/components/light-box",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,s,n,i){function r(e,t){var a="";return t.buffer.push("<img "),t.buffer.push(o(s["bind-attr"].call(e,{hash:{src:"href"},hashTypes:{src:"ID"},hashContexts:{src:e},contexts:[],types:[],data:t}))),t.buffer.push(" "),t.buffer.push(o(s["bind-attr"].call(e,{hash:{title:"data-title"},hashTypes:{title:"ID"},hashContexts:{title:e},contexts:[],types:[],data:t}))),t.buffer.push("/>"),a}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,a.Handlebars.helpers),i=i||{};var h,l="",o=this.escapeExpression,p=this;return h=s["if"].call(t,"inlineImage",{hash:{},hashTypes:{},hashContexts:{},inverse:p.noop,fn:p.program(1,r,i),contexts:[t],types:["ID"],data:i}),(h||0===h)&&i.buffer.push(h),h=s._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:i}),(h||0===h)&&i.buffer.push(h),i.buffer.push("\r\n"),l})});