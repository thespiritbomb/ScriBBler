var deleteModal=document.getElementById("deletePostModalDiv");
var trashIcon=document.getElementsByClassName("post-trash");
var noBtn=document.getElementById("noDeletePostBtn");
// Open the Delete Modal on clicking any of the Trash Icons
for(var i=0;i<trashIcon.length;i++){
    trashIcon[i].onclick=function(){
        deleteModal.style.display="flex";
    }
}
// Close the Delete Modal on clicking the NO Button
noBtn.onclick=function(){
        deleteModal.style.display="none";
    }
var moreIcon=document.getElementsByClassName("post-more");
// Open the Post.html page on clicking any of the More Icons
for(var i=0;i<moreIcon.length;i++){
    moreIcon[i].onclick=function(){
        window.open("file:./post.html","_self");
    }
}
// Open the Index.html page on clicking the ScriBBler Logo
document.getElementById("headerLogoDiv").onclick=function(){
    window.open("file:../index.html","_self");
}