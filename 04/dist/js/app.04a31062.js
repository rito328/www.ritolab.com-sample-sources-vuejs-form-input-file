(function(e){function t(t){for(var i,s,o=t[0],l=t[1],u=t[2],p=0,c=[];p<o.length;p++)s=o[p],n[s]&&c.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);f&&f(t);while(c.length)c.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var f=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("c79a")},"7b29":function(e,t,r){"use strict";var i=r("b155"),n=r.n(i);n.a},b155:function(e,t,r){},db13:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",[r("file-input",{attrs:{params:{limit:100,unit:"kb",allow:"csv"}}}),r("file-input-image",{attrs:{params:{limit:100,unit:"kb",allow:"png,jpg,gif",preview:!0}}})],1)},n=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"drop_area",class:e.classesDragArea,on:{dragover:function(t){return t.preventDefault(),e.onArea(t)},drop:function(t){return t.preventDefault(),e.dropFile(t)},dragleave:function(t){return t.preventDefault(),e.offArea(t)},dragend:function(t){return t.preventDefault(),e.offArea(t)}}},[r("label",[e._v("ファイルを選択\n            "),r("input",{ref:"file",attrs:{type:"file"},on:{change:e.changeFile}})])]),r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:e.file.name,expression:"file.name"}],attrs:{id:"file_name"}},[e._v(e._s(e.file.name)+" "),r("span",{staticClass:"reset_file_ico",on:{click:e.resetFile}},[e._v("×")])])]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{id:"error"}},[e._v(e._s(e.error))])])},s=[],o=(r("26eb"),r("18c1"),{props:["params"],data:function(){return{limit:0,unit:"",allow:"",allowType:[],lists:{mimeType:{gif:"image/gif",jpg:"image/jpeg",png:"image/png",text:"text/plain",tsv:"text/tab-separated-values",csv:["application/vnd.ms-excel","text/csv"],pdf:"application/pdf"},unit:{kb:1e3,mb:1e6}}}},mounted:function(){this.limit=parseInt(this.params.limit),this.unit=this.params.unit,this.allow=this.params.allow.split(","),this.allowType=this._getAllowMimeType(this.allow)},methods:{isAllowFileType:function(e){return-1!==this.allowType.indexOf(e)},isAllowFileSize:function(e){return parseInt(e)<this._getLimitSizeByte()},isImage:function(e){return-1!==e.indexOf("image")},getErrorMessageSize:function(){return this.limit+this.unit+"未満のファイルのみアップロード可能です"},getErrorMessageType:function(){return this.allow.join("/")+" ファイルのみアップロード可能です"},_getAllowMimeType:function(e){for(var t=[],r=0;r<e.length;r++){var i=this.lists.mimeType[e[r]];"string"===typeof i?t.push(i):i instanceof Array&&(t=t.concat(i))}return t},_getLimitSizeByte:function(){return this.limit*this.lists.unit[this.unit]}}}),l={mixins:[o],data:function(){return{file:{},error:"",inArea:!1}},computed:{isError:function(){return""!==!!this.error},classesDragArea:function(){return{drag_on:this.inArea}}},methods:{dropFile:function(e){this.changeFile(e),this.offArea()},changeFile:function(e){var t=e.target.files||e.dataTransfer.files;this.validation(t[0])?this.file=t[0]:this.file={}},resetFile:function(){var e=this.$refs.file;e.type="text",e.type="file",this.file={},this.error=""},validation:function(e){return this.isAllowFileType(e.type)?this.isAllowFileSize(e.size)?(this.error="",!0):(this.error=this.getErrorMessageSize(),!1):(this.error=this.getErrorMessageType(),!1)},onArea:function(){this.inArea=!0},offArea:function(){this.inArea=!1}}},u={name:"FileInput",mixins:[l]},f=u,p=r("7eab"),c=Object(p["a"])(f,a,s,!1,null,null,null),h=c.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"drop_area",class:e.classesDragArea,on:{dragover:function(t){return t.preventDefault(),e.onArea(t)},drop:function(t){return t.preventDefault(),e.dropFile(t)},dragleave:function(t){return t.preventDefault(),e.offArea(t)},dragend:function(t){return t.preventDefault(),e.offArea(t)}}},[r("label",[e._v("ファイルを選択\n            "),r("input",{ref:"file",attrs:{type:"file"},on:{change:e.changeFile}})])]),r("p",[r("span",{directives:[{name:"show",rawName:"v-show",value:e.file.name,expression:"file.name"}],attrs:{id:"file_name"}},[e._v(e._s(e.file.name)+" "),r("span",{staticClass:"reset_file_ico",on:{click:e.resetFile}},[e._v("×")])])]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{id:"error"}},[e._v(e._s(e.error))]),e.isPreview?r("p",[r("img",{attrs:{src:e.imageData,alt:""}})]):e._e()])},v=[],d={data:function(){return{imageData:""}},methods:{createImage:function(e){var t=this,r=new FileReader;r.onload=function(e){t.imageData=e.target.result},r.readAsDataURL(e)}}},g={name:"FileInputImage",props:["params"],mixins:[l,d],data:function(){return{preview:!0}},mounted:function(){var e=this.params.preview;this.preview="boolean"!==typeof e||e},updated:function(){"undefined"!==typeof this.file.size?this.isImage(this.file.type)&&this.createImage(this.file):this.imageData=""},computed:{isPreview:function(){return""!==this.imageData&&this.preview}}},w=g,y=Object(p["a"])(w,m,v,!1,null,null,null),_=y.exports,b={name:"FormSample",components:{FileInput:h,FileInputImage:_}},x=b,A=(r("7b29"),Object(p["a"])(x,i,n,!1,null,null,null));t["a"]=A.exports}});
//# sourceMappingURL=app.04a31062.js.map