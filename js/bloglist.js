var deleteModal=document.getElementById("deletePostModalDiv");
var trashIcon=document.getElementsByClassName("post-trash");
var noBtn=document.getElementById("noDeletePostBtn");
for(var i=0;i<trashIcon.length;i++){
    trashIcon[i].onclick=function(){
        deleteModal.style.display="flex";
    }
}
noBtn.onclick=function(){
        deleteModal.style.display="none";
    }
var moreIcon=document.getElementsByClassName("post-more");
for(var i=0;i<moreIcon.length;i++){
    moreIcon[i].onclick=function(){
        window.open("file:./post.html","_self");
    }
}
document.getElementById("headerLogoDiv").onclick=function(){
    window.open("file:../index.html","_self");
}