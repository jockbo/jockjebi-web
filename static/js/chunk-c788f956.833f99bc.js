(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c788f956"],{9921:function(t,e,a){},"9e14":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("div",{staticStyle:{"background-color":"#fefefe",height:"100vh"}},[a("div",{staticStyle:{"padding-up":"50px","padding-left":"110px"}},[t._m(0),a("br"),a("div",{staticStyle:{padding:"20px 20px 5px 20px"}},[a("span",{staticStyle:{"padding-right":"40px"}},[a("label",{staticStyle:{"padding-right":"20px","font-size":"1.5em"},attrs:{for:"male"}},[t._v("과목")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticStyle:{width:"275px",height:"25px"},attrs:{type:"text"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}})]),a("span",[a("label",{staticStyle:{"padding-right":"20px","font-size":"1.5em"},attrs:{for:"male"}},[t._v("교수")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.professor,expression:"professor"}],staticStyle:{width:"275px",height:"25px"},attrs:{type:"text"},domProps:{value:t.professor},on:{input:function(e){e.target.composing||(t.professor=e.target.value)}}})])]),a("div",{staticStyle:{padding:"5px 20px 20px 20px"}},[a("span",{staticStyle:{"padding-right":"20px"}},[a("label",{staticStyle:{"padding-right":"20px","font-size":"1.5em"},attrs:{for:"male"}},[t._v("연도")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticStyle:{width:"100px",height:"25px"},attrs:{type:"text"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}})]),a("span",{staticStyle:{"padding-right":"40px"}},[a("label",{staticStyle:{"padding-right":"20px","font-size":"1.5em"},attrs:{for:"male"}},[t._v("학기")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.semester,expression:"semester"}],staticStyle:{width:"100px",height:"25px"},attrs:{type:"text"},domProps:{value:t.semester},on:{input:function(e){e.target.composing||(t.semester=e.target.value)}}})]),a("span",[a("label",{staticStyle:{"padding-right":"20px","font-size":"1.5em"},attrs:{for:"male"}},[t._v("분류")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticStyle:{width:"100px",height:"25px"},attrs:{type:"text"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})])]),a("div",{staticStyle:{padding:"20px 20px 20px 20px"}},[a("label",{staticStyle:{"padding-right":"20px","font-size":"1.5em"},attrs:{for:"male"}},[t._v("파일")]),a("input",{ref:"file",attrs:{type:"file"},on:{change:t.handleFileUpload}})])]),a("div",{staticStyle:{"text-align":"center"}},[a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.explain,expression:"explain"}],staticStyle:{height:"300px",width:"700px",background:"white"},domProps:{value:t.explain},on:{input:function(e){e.target.composing||(t.explain=e.target.value)}}},[t._v("코멘트를 작성하세")])])]),a("br"),a("div",{staticStyle:{"text-align":"center"}},[a("button",{staticStyle:{background:"#e0e0e0","border-color":"#bababa",width:"200px",height:"35px"},on:{click:t.createJockbo}},[t._v("submit")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px 20px 20px 20px"}},[a("span",{staticStyle:{"font-size":"1.5em"}},[a("b",[t._v("족보 업로드")])]),a("span",{staticStyle:{"padding-right":"450px"}}),a("span",{staticStyle:{"text-align":"left","font-size":"1.5em"}},[t._v("업로드가 처음이세요?")])])}],n={data:function(){return{subject:"",professor:"",year:"",semester:"",category:"",file:"",explain:""}},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0]},createJockbo:function(){console.log(this.file);var t=new FormData;t.append("subject",this.subject),t.append("professor",this.professor),t.append("year",this.year),t.append("semester",this.semester),t.append("category",this.category),t.append("university",1),t.append("explain",this.explain),t.append("file",this.file),console.log(this.$store.state.jwt),axios({method:"post",url:"/api/post",data:t,headers:{authorization:this.$store.state.jwt,"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t.data)})}}},p=n,r=(a("cc51"),a("2877")),o=Object(r["a"])(p,i,s,!1,null,"20284fa4",null);e["default"]=o.exports},cc51:function(t,e,a){"use strict";var i=a("9921"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-c788f956.833f99bc.js.map