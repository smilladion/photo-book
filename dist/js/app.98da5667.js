(function(e){function t(t){for(var r,o,s=t[0],l=t[1],d=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},i={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"066d":function(e,t,a){"use strict";var r=a("5600"),i=a.n(r);i.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3e1c":function(e,t,a){},5600:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=a("8c4f"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-jumbotron",{staticClass:"text-center",attrs:{"bg-variant":"light","border-variant":"muted","text-variant":"muted"}},[a("b-container",{staticStyle:{"max-width":"30rem"}},[a("h1",[e._v("Din digitale fotobog.")]),a("p",{staticClass:"lead text-muted"},[e._v("For at komme i gang, klik på en af de nedenstående knapper og upload et billede fra din computer.")]),a("p",[a("router-link",{attrs:{to:"/gallery"}},[a("b-button",{staticClass:"mr-1",attrs:{variant:"info"}},[e._v("Vis fotobog")])],1),a("router-link",{attrs:{to:"/upload"}},[a("b-button",{attrs:{variant:"dark"}},[e._v("Tilføj billeder")])],1)],1)])],1)],1)},o=[],s={name:"Welcome",mounted:function(){document.body.style.background="url('https://i.imgur.com/CK3NmM1.jpg')"},destroyed:function(){document.body.style.background=""}},l=s,d=a("2877"),c=Object(d["a"])(l,n,o,!1,null,"1145bb20",null),u=c.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-row",[a("b-col",[a("h3",{staticClass:"text-left"},[e._v("Din fotobog")])]),a("b-col",{staticClass:"text-right"},[0!==e.state.photos.length?a("b-button",{staticClass:"mr-2",attrs:{variant:e.editMode?"info":"outline-info",size:"sm"},on:{click:function(t){e.editMode=!e.editMode}}},[e._v("Redigering ")]):e._e(),0!==e.state.photos.length?a("b-dropdown",{attrs:{right:"",text:"Vælg tema",variant:"primary"}},[null===e.themes?a("b-dropdown-item",{attrs:{disabled:""}},[e._v("Loading themes")]):[a("b-dropdown-item",{attrs:{active:-1===e.state.activeTheme},on:{click:e.resetTheme}},[e._v("Normal")]),e._l(e.themes["themes"],(function(t){return a("b-dropdown-item",{key:t.id,attrs:{active:t.id===e.state.activeTheme},on:{click:function(a){return e.themeClicked(t)}}},[e._v(" "+e._s(t.name)+" ")])}))]],2):e._e()],1)],1),a("hr"),0===e.state.photos.length?a("b-alert",{attrs:{show:!0,dismissible:"",variant:"info"}},[e._v(" Det ser ud til du ikke har tilføjet nogle billeder endnu! Gå ind på "),a("router-link",{attrs:{to:"/upload"}},[e._v("tilføj billeder")]),e._v(" for at oprette din fotobog. ")],1):e._e(),0!==e.state.photos.length?a("h6",{staticClass:"text-muted text-center my-4"},[e._v(" Tryk på et foto for at se det i fuld skærm, eller rediger det gennem knappen til højre. ")]):e._e(),a("ImageGrid",{attrs:{editMode:e.editMode,photos:e.state.photos,styleObject:this.state.styleObject},on:{doneEditing:function(t){e.editMode=!1},photoClicked:e.photoClicked}})],1)},b=[],f=(a("b0c0"),a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",{attrs:{cols:"2","cols-lg":"3"}},e._l(e.photos,(function(t,r){return a("b-col",{key:t.src,staticClass:"mb-4 text-center"},[a("div",{style:e.styleObject},[a("img",{directives:[{name:"img",rawName:"v-img:gal",arg:"gal"}],staticClass:"img-fluid img-thumbnail",style:e.styleObject,attrs:{alt:t.tag,src:t.src}}),e.editMode?a("b-input",{staticClass:"text-center",style:e.titleInputStyle,attrs:{placeholder:"Indtast en titel",size:"lg"},model:{value:t.tag,callback:function(a){e.$set(t,"tag",a)},expression:"photo.tag"}}):a("h4",{staticClass:"text-center my-0",style:e.styleObject},[e._v(e._s(t.tag))])],1),e.editMode?[a("div",{staticClass:"mt-2"},[a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"info"},on:{click:function(a){return e.editPhoto(t)}}},[e._v("Rediger")]),a("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"success"},on:{click:function(t){return e.$emit("doneEditing")}}},[e._v("Gem")]),a("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.photos.splice(r,1)}}},[e._v("Slet")])],1)]:e._e()],2)})),1)],1)}),h=[],v={name:"ImageGrid",props:{photos:Array,styleObject:Object,editMode:Boolean},data:function(){return{titleInputStyle:{fontSize:"1rem",fontFamily:"sans-serif"}}},methods:{editPhoto:function(e){this.$router.push({name:"Editor",params:{photo:e}})}}},m=v,g=(a("d118"),Object(d["a"])(m,f,h,!1,null,"442c6a68",null)),k=g.exports,_={name:"Gallery",components:{ImageGrid:k},props:{sharedState:Object},data:function(){return{state:this.sharedState,themes:null,editMode:!1}},methods:{resetTheme:function(){this.state.activeTheme=-1,this.state.styleObject={color:"",backgroundColor:"white",border:"8px solid white",borderRadius:"0",fontFamily:"",padding:"0",fontSize:"18px"}},themeClicked:function(e){this.state.activeTheme=e.id,this.state.styleObject.color="#"+e.styles.primaryColor,this.state.styleObject.backgroundColor="#"+e.styles.secondaryColor,this.state.styleObject.border="8px solid #"+e.styles.secondaryColor,this.state.styleObject.fontFamily=e.styles.fontName,this.state.styleObject.borderRadius="0px","Børnebog"===e.name?this.state.styleObject.fontSize="30px":"Rejsebog"===e.name?this.state.styleObject.fontSize="18px":"Formel"===e.name&&(this.state.styleObject.fontSize="20px")}},mounted:function(){var e=this;fetch("https://itu-sdbg-s2020.now.sh/api/themes").then((function(e){return e.json()})).then((function(t){e.themes=t,-1!==e.state.activeTheme&&e.themeClicked(e.themes["themes"][e.state.activeTheme-1])})).catch((function(e){return console.error(e)}))}},y=_,x=(a("066d"),Object(d["a"])(y,p,b,!1,null,"37d3dcd4",null)),j=x.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Tilføj billeder")]),a("hr"),a("b-form-file",{ref:"file-input",attrs:{"file-name-formatter":e.fileInputText,accept:"image/*","browse-text":"Gennemse...","drop-placeholder":"Slip for at tilføje",multiple:"",placeholder:"Træk og slip dine billeder her"},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),a("FileMessage",{attrs:{files:e.files,uploadStarted:e.uploadStarted},on:{change:e.invalidChanged}}),a("FileList",{attrs:{files:e.files,invalid:e.invalid,uploaded:e.uploaded}}),!e.uploadStarted&&e.files.length>0?a("p",{staticClass:"text-center",class:{"my-4":0!==e.invalid.length}},[0===e.invalid.length?a("b-button",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:e.startClicked}},[e._v("Start upload")]):e._e(),a("b-button",{attrs:{variant:"danger"},on:{click:e.resetClicked}},[e._v("Nulstil filer")])],1):e._e(),e.uploadStarted?a("b-progress",{attrs:{animated:"",height:"1.5rem","show-progress":"",variant:"info"}},[a("b-progress-bar",{attrs:{max:e.files.length,value:e.uploaded.length}},[e._v(e._s(e.uploaded.length+"/"+e.files.length+" færdig"))])],1):e._e(),e.uploadStarted&&e.uploaded.length===e.files.length?a("div",{staticClass:"text-center"},[a("router-link",{attrs:{to:"/gallery"}},[a("b-button",{staticClass:"mr-1 my-4",attrs:{variant:"dark"}},[e._v("Se fotobogen")])],1)],1):e._e()],1)},w=[],O=(a("fb6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.uploadStarted?a("h6",{staticClass:"text-muted text-center mt-4"},[e._v(" Dine billeder er blevet uploadet til siden. ")]):e.filesEmpty?a("h6",{staticClass:"text-muted text-center mt-4"},[e._v(" Vælg de billeder som skal uploades. ")]):e.filesValid?a("h6",{staticClass:"text-muted text-center mt-4"},[e._v(" "+e._s(e.files.length)+" billede"+e._s(e.files.length>1?"r":"")+" blev valgt, er det korrekt? ")]):a("h6",{staticClass:"text-danger text-center mt-4"},[e._v(" "+e._s(e.invalid.length)+" fil"+e._s(e.invalid.length>1?"er":"")+" var ikke gyldig"+e._s(e.invalid.length>1?"e":"")+", kun billedfiler er tilladt. ")])])}),S=[],F=(a("2ca0"),a("b85c")),E={name:"FileMessage",props:{files:Array,uploadStarted:Boolean},data:function(){return{invalid:[]}},computed:{filesEmpty:function(){return 0===this.files.length},filesValid:function(){return 0===this.invalid.length}},watch:{files:function(e,t){this.invalid=[];var a,r=Object(F["a"])(this.files);try{for(r.s();!(a=r.n()).done;){var i=a.value;i.type.startsWith("image")||this.invalid.push(i)}}catch(n){r.e(n)}finally{r.f()}this.$emit("change",this.invalid)}}},N=E,T=Object(d["a"])(N,O,S,!1,null,"60b867f6",null),$=T.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-list-group",{staticClass:"mt-4"},e._l(e.files,(function(t,r){return e.invalid.includes(t)?e._e():a("b-list-group-item",{key:t.name,attrs:{variant:e.uploaded.includes(t)?"success":""}},[a("b-badge",{attrs:{variant:e.uploaded.includes(t)?"success":"",pill:""}},[e._v(e._s(r+1))]),e._v(" "+e._s(t.name.toLowerCase())+" "),e.uploaded.includes(t)?a("b-icon-check",{attrs:{variant:"success"}}):e._e()],1)})),1),a("b-list-group",{class:{"mt-4":e.files.length!==e.invalid.length}},e._l(e.files,(function(t,r){return e.invalid.includes(t)?a("b-list-group-item",{key:t.name},[a("b-badge",{attrs:{pill:"",variant:"danger"}},[e._v(e._s(r+1))]),e._v(" "+e._s(t.name.toLowerCase())+" (ugyldig) ")],1):e._e()})),1)],1)},P=[],G={name:"FileList",props:{files:Array,invalid:Array,uploaded:Array}},M=G,D=Object(d["a"])(M,I,P,!1,null,"158af51a",null),z=D.exports,R={name:"Upload",components:{FileList:z,FileMessage:$},props:{sharedState:Object},data:function(){return{state:this.sharedState,files:[],invalid:[],uploaded:[],uploadStarted:!1}},methods:{fileInputText:function(e){var t=e.length-this.invalid.length;return t+" gyldig"+(t>1||0===t?"e":"t")+" billede"+(t>1||0===t?"r":"")+" valgt"},invalidChanged:function(e){this.invalid=e},startClicked:function(){var e=this;if(0===this.invalid.length){this.uploadStarted=!0,this.uploaded=[];var t=new FileReader,a=0,r=function(){},i=function i(n,o){if(a>=n.length)r();else{var s=n[a];t.onload=function(t){e.uploaded.push(s),o.photos.push({src:t.target.result,tag:s.name.toLowerCase().slice(0,-4)}),i(n,o)},t.readAsDataURL(s),a++}};i(this.files,this.state)}},resetClicked:function(){this.$refs["file-input"].reset()}},watch:{files:function(e,t){this.uploadStarted=!1}}},J=R,V=Object(d["a"])(J,C,w,!1,null,"1e7f05fb",null),A=V.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Rediger billede")]),a("hr"),a("div",{staticClass:"input-group mb-3"},[e._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],staticClass:"form-control",attrs:{"aria-label":e.photo.tag,placeholder:e.photo.tag,"aria-describedby":"basic-addon1",type:"text"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}})]),a("PhotoEditor",{ref:"photo-editor",attrs:{photo:e.photo}}),a("p",{staticClass:"text-center my-4"},[a("b-button",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:e.saveClicked}},[e._v("Gem billede")]),a("b-button",{attrs:{variant:"danger"},on:{click:e.returnPrevious}},[e._v("Annuller")])],1)],1)},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e._v("Titel")])])}],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ImageEditor",{ref:"image-editor",attrs:{options:e.options,"include-ui":""}})},U=[],W=a("fc54"),K=(a("667e"),a("aec0"),a("c834"),a("a8cb"),a("5ff5"),a("741a"),{"common.bisize.width":"0","common.bisize.height":"0","common.backgroundColor":"#f8f9fa","common.border":"none","menu.normalIcon.color":"#c9c9c9","menu.disabledIcon.color":"#727272","menu.hoverIcon.color":"#e9e9e9","menu.iconSize.width":"16px","menu.iconSize.height":"16px"}),q={name:"PhotoEditor",components:{ImageEditor:W["a"]},props:{photo:Object},data:function(){return{options:{includeUI:{loadImage:{path:this.photo.src,name:this.photo.tag},theme:K,uiSize:{width:"100%",height:"672px"},menuBarPosition:"left"},usageStatistics:!1}}},methods:{saveBase64:function(){this.photo.src=this.$refs["image-editor"].invoke("toDataURL",{format:"jpeg",quality:.5})}}},X=q,Q=Object(d["a"])(X,B,U,!1,null,"611e2dd9",null),Y=Q.exports,Z={name:"Editor",components:{PhotoEditor:Y},props:{photo:Object},data:function(){return{newName:""}},methods:{returnPrevious:function(){this.$router.go(-1)},saveClicked:function(){this.$refs["photo-editor"].saveBase64(),this.returnPrevious(),this.newName.length>0&&(this.photo.tag=this.newName)}},watch:{}},ee=Z,te=Object(d["a"])(ee,H,L,!1,null,"4c23ebfd",null),ae=te.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Gem eller åbn en fotobog")]),a("hr"),a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{align:"center",header:"Importering"}},[a("b-card-text",[a("p",[e._v("For at importere en "),a("code",[e._v("photobook.json")]),e._v(", vælg en fil:")]),e.parsing?a("b-spinner"):a("b-form-file",{ref:"file-input",attrs:{accept:"application/json","browse-text":"Gennemse","drop-placeholder":"Slip for at åbne",placeholder:"Upload din photobook.json fil her"},on:{input:this.import},model:{value:e.importFile,callback:function(t){e.importFile=t},expression:"importFile"}}),e.fileInvalid?a("p",{staticClass:"mt-3 mb-0 text-danger"},[e._v("Filen du har valgt er ikke en gyldig .json-fil.")]):e._e()],1)],1),a("b-card",{attrs:{align:"center",header:"Eksportering"}},[a("b-card-text",[a("p",[e._v("For at eksportere din "),a("code",[e._v("photobook.json")]),e._v(", klik her:")]),a("b-button",{attrs:{variant:"outline-primary"},on:{click:this.export}},[e._v("Eksporter JSON")]),a("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"data-file",attrs:{download:"photobook.json"}})],1)],1)],1)],1)},ie=[],ne=(a("8a79"),{name:"Save",props:{sharedState:Object},data:function(){return{state:this.sharedState,importFile:null,importJson:null,fileInvalid:!1,parsing:!1}},methods:{import:function(){var e=this;if(this.parsing=!0,this.fileInvalid=!1,null!==this.importFile){if(!this.importFile.type.endsWith("json"))return this.fileInvalid=!0,void(this.parsing=!1);var t=new FileReader;t.onload=function(t){try{e.onJsonLoaded(JSON.parse(t.target.result))}catch(a){return e.fileInvalid=!0,e.parsing=!1,console.log(a),!1}},t.readAsText(this.importFile)}else this.parsing=!1},export:function(){this.$refs["data-file"].href="data:application/json,"+encodeURIComponent(JSON.stringify(this.encodeState(this.state))),this.$refs["data-file"].click(),this.$refs["data-file"].href=""},encodeState:function(e){var t={};t.title=this.state.title,t.activeTheme=this.state.activeTheme,t.pages=[];var a,r=Object(F["a"])(e.photos);try{for(r.s();!(a=r.n()).done;){var i=a.value;t.pages.push({image_url:i.src,content:[{type:"title",text:i.tag}]})}}catch(n){r.e(n)}finally{r.f()}return t},onJsonLoaded:function(e){this.validate(e,this.onJsonValidated)},onJsonValidated:function(e){this.state.title=e["title"],this.state.photos=[],"activeTheme"in e&&(this.state.activeTheme=e["activeTheme"]);var t,a="unknown",r=Object(F["a"])(e["pages"]);try{for(r.s();!(t=r.n()).done;){var i,n=t.value,o=Object(F["a"])(n.content);try{for(o.s();!(i=o.n()).done;){var s=i.value;"title"===s.type&&(a=s.text)}}catch(l){o.e(l)}finally{o.f()}this.state.photos.push({src:n.image_url,tag:a})}}catch(l){r.e(l)}finally{r.f()}this.$router.push("/gallery"),this.parsing=!1},validate:function(e,t){var a=this;fetch("https://itu-sdbg-s2020.now.sh/api/validate",{method:"POST",headers:{Accept:"application/json"},body:e}).then((function(e){return e.json()})).then((function(a){a["success"],t(e)})).catch((function(e){console.error(e),a.fileInvalid=!0,a.parsing=!1}))}}}),oe=ne,se=Object(d["a"])(oe,re,ie,!1,null,"3baccc9d",null),le=se.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Hjælp til fotobogen")]),a("hr"),a("h6",{staticClass:"text-muted text-center my-4"},[e._v(" Vælg et af de nedenstående emner, som passer til det du søger hjælp til. ")]),a("div",{attrs:{role:"tablist"}},[a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"text-left",attrs:{block:"",variant:"white"}},[e._v("Navigation af siden")])],1),a("b-collapse",{attrs:{id:"accordion-1",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[e._v(" Der er flere måder du kan navigere rundt på siden på, og ofte vises der links, som tager dig direkte hen til en side - for eksempel på forsiden, hvor man let kan navigere sig hen til fotobogen gennem en knap. "),a("br"),a("br"),e._v(' Gennem navigationsbaren i toppen af siden kan du altid navigere hen på den side, du leder efter, med det samme. For at komme tilbage til forsiden kan man enten trykke på "Forside" i navigationen, eller logoet i øverste venstre hjørne. ')])],1)],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"text-left",attrs:{block:"",variant:"white"}},[e._v("Tilføj billeder til fotobogen")])],1),a("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[e._v(" For at starte din fotobog skal du først gå ind på siden "),a("router-link",{attrs:{to:"/upload"}},[e._v("tilføj billeder")]),e._v("."),a("br"),a("br"),e._v(' Her kan du enten vælge at trykke på knappen "Gennemse", hvor du herefter kan vælge dine billedfiler fra computeren, eller du kan trække dine filer direkte fra stifinderen og slippe dem ovenpå feltet. '),a("br"),a("br"),e._v(" Kun billedfiler er tilladt (f.eks. PNG eller JPG), og siden vil fortælle dig hvis du har givet et forkert filformat. "),a("br"),a("br"),e._v(' Herefter trykker du på "Start upload", og dine billeder vil blive uploadet til siden. '),a("br"),a("br"),e._v(' Du kan også trykke "Nulstil filer" hvis du har valgt en ugyldig fil, eller bare fortryder dine valgte billeder. '),a("br"),a("br"),e._v(' Efter overførslen er færdig vil dine filer på skærmen være tjekket af, og du kan gå hen til din fotobog gennem knappen nedenunder, "Se fotobog", hvor billederne vil være indsat. ')],1)],1)],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"text-left",attrs:{block:"",variant:"white"}},[e._v("Rediger et billede")])],1),a("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[e._v(" Når du har tilføjet nogle billeder til "),a("router-link",{attrs:{to:"/gallery"}},[e._v("din fotobog")]),e._v(", kan du gå ind og redigere dem."),a("br"),a("br"),e._v(' For at gøre dette skal du trykke på knappen "Redigering" øverst til højre, ved siden af temaerne. Du vil nu se forskellige knapper dukke op under alle dine billeder. '),a("br"),a("br"),e._v(' Du kan direkte redigere billedets titel hvis du trykker på titlen, og hvis du herefter trykker på "Gem", så bliver dette til billedets nye titel. Du kan også slette et billede hvis det ikke skal være i fotobogen længere. '),a("br"),a("br"),e._v(' Den sidste mulighed, "Rediger", vil bringe dig videre til en ny side, hvor der er masser af forskellige muligheder ude i venstre side for at tilføje tekst, rotere billedet, bruge filtre osv. Du kan også ændre billedets titel inde på denne side.'),a("br"),a("br"),e._v(' For at gemme dine ændringer skal du huske at trykke på "Gem billede" i bunden af denne side. Hvis du derimod trykker på "Annuller" eller navigerer væk fra siden, så gemmes dine ændringer ikke. ')],1)],1)],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"text-left",attrs:{block:"",variant:"white"}},[e._v("Visning af billeder i fuld skærm")])],1),a("b-collapse",{attrs:{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[e._v(" Du kan vælge at se alle dine billeder i "),a("router-link",{attrs:{to:"/gallery"}},[e._v("fotobogen")]),e._v(" i fuld skærm. For at gøre dette skal du blot trykke på et billede, og så vil det åbne på siden. "),a("br"),a("br"),e._v(' Du kan trykke på "X" oppe i højre hjørne for at komme tilbage til den reelle fotobog. '),a("br"),a("br"),e._v(" Hvis du har mere end ét billede i fotobogen, så vil der være pile til venstre og højre side af skærmen, og ved tryk af disse kan du se de andre billeder i fotobogen også, i den rækkefølge de er indsat i. ")],1)],1)],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"text-left",attrs:{block:"",variant:"white"}},[e._v("Skift fotobogens tema")])],1),a("b-collapse",{attrs:{id:"accordion-5",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[e._v(" Til at starte med vil billederne i "),a("router-link",{attrs:{to:"/gallery"}},[e._v("fotobogen")]),e._v(" have almindelige, sorte titler, og hvide baggrunde. Hvis du vil ændre på dette, så findes der forskellige temaer du kan afprøve. "),a("br"),a("br"),e._v(' Klik knappen "Vælg tema" oppe i højre hjørne af fotobogen, og du vil se de forskellige muligheder. Vælger du f.eks. "Rejsebog", så vil billedernes baggrund skifte til orange, og titlerne til lilla. ')],1)],1)],1)],1),a("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"text-left",attrs:{block:"",variant:"white"}},[e._v("Gem eller åbn din fotobog")])],1),a("b-collapse",{attrs:{id:"accordion-6",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",[a("b-card-text",[e._v(" Da fotobogen ikke gemmes automatisk når du forlader siden, så har du muligheden for at gemme den og åbne den igen senere. Hvis du går ind på "),a("router-link",{attrs:{to:"/save"}},[e._v("gem/åbn")]),e._v(", så vil der være to muligheder: importer eller eksporter. "),a("br"),a("br"),e._v(' Hvis du vil gemme din fotobog, så skal du trykke på knappen "Eksporter JSON" til højre, og du vil få en JSON fil på din computer med den gemte fotobog. '),a("br"),a("br"),e._v(' For at åbne denne igen skal du blot trykke på "Gennemse" under importering til venstre, og vælge den i din stifinder - eller blot trække og slippe den i feltet. Du vil så automatisk blive navigeret hen til den åbnede fotobog, som forbliver på siden indtil du forlader den. ')],1)],1)],1)],1)],1)])},ce=[],ue={name:"Help"},pe=ue,be=Object(d["a"])(pe,de,ce,!1,null,"1dc98c52",null),fe=be.exports;r["default"].use(i["a"]);var he=[{path:"*",name:"Welcome",component:u},{path:"/gallery",name:"Gallery",component:j},{path:"/upload",name:"Upload",component:A},{path:"/editor",name:"Editor",component:ae,props:!0,beforeEnter:function(e,t,a){e.params.photo?a():a("/")}},{path:"/help",name:"Help",component:fe},{path:"/save",name:"Save",component:le}],ve=new i["a"]({routes:he}),me=ve,ge=a("2f62");r["default"].use(ge["a"]);var ke=new ge["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_e=a("5f5b"),ye=a("b1e0"),xe=(a("f9e3"),a("2dd8"),a("11a1")),je=(a("3e1c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-container",[a("router-link",{attrs:{tag:"b-navbar-brand",to:"/"}},[e._v("📷 Photo Book")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("router-link",{attrs:{"exact-active-class":"active",tag:"b-nav-item",to:"/"}},[e._v("Forside")]),a("router-link",{attrs:{"exact-active-class":"active",tag:"b-nav-item",to:"/gallery"}},[e._v("Vis fotobog")]),a("router-link",{attrs:{"exact-active-class":"active",tag:"b-nav-item",to:"/upload"}},[e._v("Tilføj billeder")]),a("router-link",{attrs:{"exact-active-class":"active",tag:"b-nav-item",to:"/save"}},[e._v("Gem/åbn")]),a("router-link",{attrs:{"exact-active-class":"active",tag:"b-nav-item",to:"/help"}},[e._v("Hjælp")])],1)],1)],1)],1),a("b-container",{staticClass:"mt-4"},[a("router-view",{attrs:{sharedState:e.state}})],1)],1)}),Ce=[],we={name:"App",components:{PhotoEditor:Y},props:{state:Object}},Oe=we,Se=Object(d["a"])(Oe,je,Ce,!1,null,null,null),Fe=Se.exports;r["default"].config.productionTip=!1,r["default"].use(_e["a"]),r["default"].use(ye["a"]),r["default"].use(xe["a"]);var Ee={title:"My Photo Book",photos:[],activeTheme:-1,styleObject:{color:"",backgroundColor:"white",border:"8px solid white",borderRadius:"0",fontFamily:"",padding:"0",fontSize:"18px"}};new r["default"]({router:me,store:ke,render:function(e){return e(Fe,{props:{state:Ee}})}}).$mount("#app")},b86e:function(e,t,a){},d118:function(e,t,a){"use strict";var r=a("b86e"),i=a.n(r);i.a}});
//# sourceMappingURL=app.98da5667.js.map