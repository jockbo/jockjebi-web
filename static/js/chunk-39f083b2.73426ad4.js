(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39f083b2"],{"0c19":function(t,e,a){},"83c4":function(t,e,a){"use strict";var i=a("0c19"),s=a.n(i);s.a},"9e14":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("div",{staticStyle:{"background-color":"#fafafa",height:"100vh"}},[a("div",{staticStyle:{"padding-up":"50px","padding-left":"110px"}},[t._m(0),a("br"),a("div",{staticClass:"text",staticStyle:{padding:"20px 20px 5px 20px"}},[a("span",{staticStyle:{"padding-right":"40px"}},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticStyle:{width:"275px",height:"25px"},attrs:{type:"text"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),a("span",[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.professor,expression:"professor"}],staticStyle:{width:"275px",height:"25px"},attrs:{type:"text"},domProps:{value:t.professor},on:{input:function(e){e.target.composing||(t.professor=e.target.value)}}})])]),a("div",{staticClass:"text",staticStyle:{padding:"5px 20px 20px 20px"}},[a("span",{staticStyle:{"padding-right":"20px"}},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticStyle:{width:"100px",height:"25px"},attrs:{type:"text"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}})]),a("span",{staticStyle:{"padding-right":"40px"}},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.semester,expression:"semester"}],staticStyle:{width:"100px",height:"25px"},attrs:{type:"text"},domProps:{value:t.semester},on:{input:function(e){e.target.composing||(t.semester=e.target.value)}}})]),a("span",[t._m(5),a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticStyle:{width:"100px",height:"25px"},attrs:{type:"text"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})])]),a("span",{staticClass:"text",staticStyle:{padding:"20px 20px 20px 20px"}},[t._m(6),a("input",{ref:"file",staticStyle:{width:"275px"},attrs:{type:"file"},on:{change:t.handleFileUpload}})]),a("span",{staticClass:"text"},[t._m(7),a("input",{directives:[{name:"model",rawName:"v-model",value:t.university,expression:"university"}],staticStyle:{width:"275px","padding-left":"10px",height:"25px"},attrs:{type:"text"},domProps:{value:t.university},on:{input:function(e){e.target.composing||(t.university=e.target.value)}}})])]),a("br"),a("div",{staticStyle:{"text-align":"center"}},[a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.explain,expression:"explain"}],staticStyle:{height:"300px",width:"700px",background:"white"},domProps:{value:t.explain},on:{input:function(e){e.target.composing||(t.explain=e.target.value)}}},[t._v("코멘트를 작성하세")])])]),a("br"),a("div",{staticStyle:{"text-align":"center"}},[a("button",{staticStyle:{"font-size":"17px",background:"#6A4CFF","border-color":"#bababa",width:"140px",height:"40px","border-radius":"13px",color:"white"},on:{click:t.createJockbo}},[a("b",[t._v("제출하기")])]),a("span",{staticStyle:{"padding-left":"20px"}},[a("button",{staticStyle:{"font-size":"17px",background:"#ffffff","border-color":"#c5c5c5","border-style":"solid",width:"140px",height:"40px","border-radius":"13px",color:"#1d29da"},on:{click:t.createJockbo}},[a("b",[t._v("임시저장")])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px 20px 20px 20px"}},[a("span",{staticStyle:{"font-size":"1.5em"}},[a("b",[t._v("족보 업로드")])]),a("span",{staticStyle:{"padding-right":"450px"}}),a("span",{staticStyle:{"padding-left":"40px","text-align":"left","font-size":"1.0em"}},[t._v("업로드가 처음이세요?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"20px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("과목")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"20px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("교수")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"20px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("연도")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"23px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("학기")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"20px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("시험종류")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"20px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("파일")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"padding-right":"20px","padding-left":"20px","font-size":"1.3em"},attrs:{for:"male"}},[a("b",[t._v("대학")])])}],r={data:function(){return{subject:"",professor:"",year:"",semester:"",category:"",file:"",explain:"",university:this.$store.state.useruni}},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0]},createJockbo:function(){var t=this;console.log(this.file);var e=new FormData;e.append("subject",this.subject),e.append("professor",this.professor),e.append("year",this.year),e.append("semester",this.semester),e.append("category",this.category),e.append("university",this.university),e.append("explain",this.explain),e.append("file",this.file),console.log(this.$store.state.jwt),axios({method:"post",url:"/api/post",data:e,headers:{authorization:this.$store.state.jwt,"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),t.$router.push("/detail/"+e.data.id)})}}},n=r,o=(a("83c4"),a("2877")),p=Object(o["a"])(n,i,s,!1,null,"caf297c4",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-39f083b2.73426ad4.js.map