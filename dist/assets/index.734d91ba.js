import{_ as t}from"./index.7f88c316.js";import{_ as o}from"./index.f0259f49.js";import{d as n,v as e,h as s,p as i,f as a,r as d,o as r,c,a as u,w as f}from"./vendor.b1565cd9.js";import"./index.adea8d68.js";const l=n({name:"Editor",components:{PageLayout:o,Tinymce:t},setup(){const t=e({contents:"初始内容填充"}),o=s('TinyMCE是一款易用、且功能强大的所见即所得的富文本编辑器。同类程序有：UEditor、Kindeditor、Simditor、CKEditor、wangEditor、Suneditor、froala等等。官方文档地址：<a href="https://www.tiny.cloud/docs/">点我前往 https://www.tiny.cloud/docs/</a> ');return{form:t,getEditorContent:o=>{t.contents=o},subtitle:o}}}),m=f();i("data-v-4f804315");const p={class:"section-container fix-width"};a();const w=m(((t,o,n,e,s,i)=>{const a=d("tinymce"),f=d("page-layout");return r(),c(f,{title:"富文本编辑器 - tinymce",subtitle:t.subtitle},{body:m((()=>[u("div",p,[u(a,{value:t.form.contents,height:500,onInput:t.getEditorContent},null,8,["value","onInput"])])])),_:1},8,["subtitle"])}));l.render=w,l.__scopeId="data-v-4f804315";export default l;