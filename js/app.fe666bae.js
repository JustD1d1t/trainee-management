(function(t){function e(e){for(var a,n,u=e[0],o=e[1],l=e[2],c=0,p=[];c<u.length;c++)n=u[c],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,u=1;u<s.length;u++){var o=s[u];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/trainee-management/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"240c":function(t,e,s){"use strict";s("d9b7")},"27ca":function(t,e,s){"use strict";s("3306")},3306:function(t,e,s){},4228:function(t,e,s){"use strict";s("578c")},"4a1e":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("router-view")],1)},i=[],n=s("2f62"),u={name:"App",methods:{...Object(n["b"])("usersModule",{loadUsers:"loadUsers"})},async mounted(){this.loadUsers()}},o=u,l=s("2877"),d=Object(l["a"])(o,r,i,!1,null,null,null),c=d.exports,p=s("8c4f"),m=function(){var t=this,e=t._self._c;return e("div",[e("UsersList",{attrs:{users:t.paginatedUsers},on:{input:function(e){return t.search(e)}}}),t.paginatedUsers.length?e("Pagination",{attrs:{pages:t.paginatedPages}}):t._e()],1)},h=[],f=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("User List")]),e("Box",[e("div",{staticClass:"users-list__actions"},[e("div",{staticClass:"users-list__search"},[e("UIInput",{attrs:{type:"input",placeholder:"Search for users..."},on:{input:function(e){return t.$emit("input",e)}}})],1),e("div",{staticClass:"users-list__new-user"},[e("router-link",{staticClass:"primary-button add-user-button",attrs:{to:"/new"}},[e("span",{staticClass:"plus-sign"},[t._v("+")]),t._v(" Add User")])],1)]),e("ul",{staticClass:"users-list"},[e("li",{staticClass:"users-list__description-cols"},[e("div",{staticClass:"users-list__avatar"}),e("div",{staticClass:"users-list__fullname"},[t._v("Full Name")]),e("div",{staticClass:"users-list__action"},[t._v("Action")])]),t._l(t.usersToDisplay,(function(s){return e("ListItem",{key:s.id,attrs:{user:s},on:{removeUser:function(e){return t.removeUser(s.id)}}})}))],2)])],1)}),g=[],_=function(){var t=this,e=t._self._c;return e("li",{staticClass:"user-list-item"},[e("div",{staticClass:"user-list-item__logo"},[e("img",{attrs:{src:t.user.avatar,alt:""}})]),e("div",{staticClass:"user-list-item__fullname"},[t._v(" "+t._s(t.fullname)+" ")]),e("div",{staticClass:"user-list-item__actions"},[e("router-link",{staticClass:"user-list-item__action",attrs:{to:"/edit/"+t.user.id}},[e("font-awesome-icon",{attrs:{icon:"pen-to-square"}})],1),e("button",{staticClass:"user-list-item__action",on:{click:function(e){return t.$emit("removeUser",t.user.id)}}},[e("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)])},b=[],v={props:{user:{type:Object,deafult:{}}},computed:{fullname(){return`${this.user.first_name} ${this.user.last_name}`}}},y=v,U=(s("a547"),Object(l["a"])(y,_,b,!1,null,null,null)),N=U.exports,w={components:{ListItem:N},data(){return{filteredUsers:[]}},props:{users:{type:Array}},computed:{...Object(n["c"])("usersModule",{allUsers:"users"}),usersToDisplay(){return this.filteredUsers.length?this.filteredUsers:this.users}},methods:{...Object(n["b"])("usersModule",{removeUser:"removeUser"})}},P=w,C=(s("f39d"),Object(l["a"])(P,f,g,!1,null,"1fa6b82a",null)),O=C.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("router-link",{staticClass:"pagination-button",class:{disabled:t.disabledPrevPage},attrs:{to:"/?page="+t.prevPage}},[t._v("<<")]),t._l(t.pages,(function(s){return e("router-link",{key:s,staticClass:"pagination-button",class:{active:t.currentPage==s||!t.currentPage&&1==s},attrs:{to:"/?page="+s}},[t._v(" "+t._s(s)+" ")])})),e("router-link",{staticClass:"pagination-button",class:{disabled:t.disabledNextPage},attrs:{to:"/?page="+t.nextPage}},[t._v(">>")])],2)},x=[],I={props:{pages:{type:Number,default:1}},computed:{currentPage(){return this.$route.query.page},nextPage(){return parseFloat(this.$route.query.page)+1},prevPage(){return parseFloat(this.$route.query.page)-1},disabledPrevPage(){return 1===parseFloat(this.$route.query.page)||!this.$route.query.page},disabledNextPage(){return parseFloat(this.$route.query.page)===this.pages}}},S=I,L=(s("27ca"),Object(l["a"])(S,j,x,!1,null,"50a099ab",null)),$=L.exports,k={components:{UsersList:O,Pagination:$},data(){return{loadedUsers:[]}},computed:{...Object(n["c"])("usersModule",["users","totalPages"]),pageNumber(){return this.$route.query.page},paginatedUsers(){const t=this.loadedUsers.length?this.loadedUsers:this.users;return void 0===this.pageNumber||1==this.pageNumber?t.slice(0,6):t.slice(6+6*(Number(this.pageNumber)-2),6+6*(Number(this.pageNumber)-1))},paginatedPages(){const t=this.loadedUsers.length?this.loadedUsers:this.users;return Math.ceil(t.length/6)}},watch:{users(){this.loadedUsers=this.users}},methods:{...Object(n["b"])("usersModule",{loadUsers:"loadUsers"}),search(t){if(t){const e=this.users.filter(e=>e.last_name.toLowerCase().includes(t.toLowerCase())||e.first_name.toLowerCase().includes(t.toLowerCase()));this.loadedUsers=e}else this.loadedUsers=this.users}},updated(){Number(this.pageNumber)>Math.ceil(this.users.length/6)&&this.users&&this.$router.push({path:"/",query:{page:1}})},mounted(){6*Number(this.pageNumber)>Math.ceil(this.users.length)&&this.users.length>0&&this.$router.push({path:"/",query:{page:1}})}},F=k,T=Object(l["a"])(F,m,h,!1,null,"0796cdfa",null),q=T.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Edit user")]),e("Form",{attrs:{user:t.user,method:"PATCH"}})],1)},A=[],B=function(){var t,e,s,a=this,r=a._self._c;return r("div",[r("Transition",[a.show?r("Notification",{attrs:{content:a.content}}):a._e()],1),r("form",{staticClass:"add-user__form",on:{submit:function(t){return t.preventDefault(),a.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"add-user__form-wrapper"},[r("Box",{staticClass:"add-user__details"},[r("UIInput",{staticClass:"add-user__input",attrs:{val:null!==(t=a.user)&&void 0!==t&&t.first_name?a.user.first_name:"",name:"First name"},model:{value:a.updatedFirstName,callback:function(t){a.updatedFirstName="string"===typeof t?t.trim():t},expression:"updatedFirstName"}}),r("UIInput",{staticClass:"add-user__input",attrs:{val:null!==(e=a.user)&&void 0!==e&&e.last_name?a.user.last_name:"",name:"Last name"},model:{value:a.updatedLastName,callback:function(t){a.updatedLastName="string"===typeof t?t.trim():t},expression:"updatedLastName"}})],1),r("Box",{staticClass:"add-user__image"},[r("img",{attrs:{src:a.urlUpdatedImage?a.urlUpdatedImage:null===(s=a.user)||void 0===s?void 0:s.avatar,alt:""}}),r("UIInput",{staticClass:"add-user__input custom-file-upload",attrs:{type:"file",name:"Photo",id:"change-photo"},model:{value:a.updatedImage,callback:function(t){a.updatedImage=t},expression:"updatedImage"}})],1)],1),r("UIButton",{staticClass:"primary-button submit-form-button",attrs:{type:"submit"}},[a._v("Submit")])],1)],1)},D=[],E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[t._v(" "+t._s(t.content)+" ")])},J=[],z={props:{content:{type:String,default:""}}},H=z,R=(s("ae3a"),Object(l["a"])(H,E,J,!1,null,null,null)),Z=R.exports,G={components:{Notification:Z},props:{user:{type:Object,default:()=>({})},method:{type:String,default:"POST"}},data(){return{updatedFirstName:"",updatedLastName:"",updatedImage:"",urlUpdatedImage:"",show:!1,content:""}},methods:{...Object(n["b"])("usersModule",{editUser:"editUser",addUser:"addUser"}),async onSubmit(){if(!this.updatedFirstName.length&&!this.updatedLastName.length)return this.show=!0,this.content="Uzupełnij pola i wstaw zdjęcie",void setTimeout(()=>{this.show=!1},2e3);if("PATCH"===this.method){const t=await this.editUser({firstName:this.updatedFirstName,lastName:this.updatedLastName,id:this.$route.params.id,method:this.method});t&&(this.show=!0,this.content="Zaktualizowano dane",setTimeout(()=>{this.show=!1,this.$router.push("/")},2e3))}else if("POST"===this.method){const t=await this.addUser({firstName:this.updatedFirstName,lastName:this.updatedLastName,avatar:this.urlUpdatedImage,method:this.method});t&&(this.show=!0,this.content="Dodano użytkownika",setTimeout(()=>{this.show=!1,this.$router.push("/")},2e3))}}},watch:{updatedImage(){this.urlUpdatedImage=URL.createObjectURL(this.updatedImage[0])}}},K=G,Q=(s("4228"),Object(l["a"])(K,B,D,!1,null,"a8973104",null)),V=Q.exports,W={components:{Form:V},data(){return{user:{}}},computed:{...Object(n["c"])("usersModule",["users"])},methods:{setUser(){console.log(this.users);const t=this.users.find(t=>t.id===Number(this.$route.params.id));this.user=t}},mounted(){this.setUser()},watch:{users(){this.setUser()}}},X=W,Y=Object(l["a"])(X,M,A,!1,null,"618c291b",null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Add user")]),e("Form",{attrs:{method:"POST"}})],1)},st=[],at={components:{Form:V}},rt=at,it=Object(l["a"])(rt,et,st,!1,null,null,null),nt=it.exports;const ut=[{path:"/",component:q},{path:"/new",component:nt},{path:"/edit/:id",component:tt},{path:"*",redirect:"/"}];var ot=ut,lt=(s("845f"),s("be33")),dt=s("11ca"),ct=s("ad3d"),pt={setUsers(t,e){t.users=[...t.users,...e]},setTotalPages(t,e){t.totalPages=e},editUser(t,e){const s=t.users.findIndex(t=>t.id===Number(e.id)),a=t.users[s],r={avatar:a.avatar,email:a.email,id:a.id,first_name:a.first_name,last_name:a.last_name};e.firstName&&(r.first_name=e.firstName),e.lastName&&(r.last_name=e.lastName),t.users[s]=r},addUser(t,e){t.users.push(e)},reloadPages(t){const e=t.users.length;let s;s=e/6>parseInt(e/6)?parseInt(e/6+1):e/6,t.totalPages=s},removeUser(t,e){const s=t.users.findIndex(t=>t.id===e);t.users.splice(s,1)}},mt=s("cf05"),ht=s.n(mt),ft={async loadUsers(t){const e=await fetch("https://reqres.in/api/users"),s=await e.json(),a=s.total_pages;if(t.commit("setTotalPages",a),t.commit("setUsers",s.data),a>1)for(let r=2;r<=a;r++){let e="https://reqres.in/api/users?page="+r;const s=await fetch(e),a=await s.json();t.commit("setUsers",a.data)}},async editUser(t,e){let s="https://reqres.in/api/users/"+e.id;const a=await fetch(s,{method:e.method,body:JSON.stringify({firstName:e.firstName,lastName:e.lastName})}),r=await a.json();return!!r.updatedAt&&(t.commit("editUser",{firstName:e.firstName,lastName:e.lastName,id:e.id}),!0)},async addUser(t,e){let s="https://reqres.in/api/users";const a=await fetch(s,{method:e.method,body:JSON.stringify({firstName:e.firstName,lastName:e.lastName})}),r=await a.json();return!!r.id&&(t.commit("addUser",{first_name:e.firstName,last_name:e.lastName,id:Number(r.id),avatar:e.avatar?e.avatar:ht.a}),t.commit("reloadPages"),!0)},async removeUser(t,e){const s=await fetch("https://reqres.in/api/users/"+e,{method:"DELETE"});s.ok&&(t.commit("removeUser",e),t.commit("reloadPages"))}},gt={users(t){return t.users},totalPages(t){return t.totalPages},user(t,e){return console.log(t),console.log(e),t.users[0]}},_t={namespaced:!0,state(){return{users:[],totalPages:0}},mutations:pt,actions:ft,getters:gt};a["a"].use(n["a"]);var bt=new n["a"].Store({modules:{usersModule:_t}}),vt=function(){var t=this,e=t._self._c;return e("button",[t._t("default")],2)},yt=[],Ut={},Nt=Ut,wt=Object(l["a"])(Nt,vt,yt,!1,null,"bbff2c28",null),Pt=wt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-control"},[e("label",{attrs:{for:t.id}},["file"===t.type?e("font-awesome-icon",{attrs:{icon:"camera"}}):t._e(),t._v(t._s(t.name))],1),e("input",{class:t.classname,attrs:{type:t.type,placeholder:t.placeholder,name:t.name,id:t.id},domProps:{value:t.val},on:{input:function(e){"file"!==t.type?t.$emit("input",e.target.value):t.$emit("input",e.target.files)}}})])},Ot=[],jt={props:{classname:{type:String,default:""},type:{type:String,default:""},placeholder:{type:String,default:""},val:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""}}},xt=jt,It=(s("240c"),Object(l["a"])(xt,Ct,Ot,!1,null,"3e878ff4",null)),St=It.exports,Lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[t._t("default")],2)},$t=[],kt={},Ft=kt,Tt=(s("6be9"),Object(l["a"])(Ft,Lt,$t,!1,null,null,null)),qt=Tt.exports;lt["c"].add(dt["c"]),lt["c"].add(dt["b"]),lt["c"].add(dt["a"]),a["a"].component("font-awesome-icon",ct["a"]),a["a"].component("UIButton",Pt),a["a"].component("UIInput",St),a["a"].component("Box",qt),a["a"].use(p["a"]);const Mt=new p["a"]({routes:ot});new a["a"]({el:"#app",store:bt,render:t=>t(c),router:Mt})},"578c":function(t,e,s){},"6be9":function(t,e,s){"use strict";s("b5c2")},"845f":function(t,e,s){},a33d:function(t,e,s){},a547:function(t,e,s){"use strict";s("abe5")},abe5:function(t,e,s){},ae3a:function(t,e,s){"use strict";s("a33d")},b5c2:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d9b7:function(t,e,s){},f39d:function(t,e,s){"use strict";s("4a1e")}});
//# sourceMappingURL=app.fe666bae.js.map