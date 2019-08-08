var allPostsBtn=document.getElementById("allPostsBtn");
var createPostBtn=document.getElementById("createPostBtn");
var createPostModal=document.getElementById("createPostModalDiv")
var closeCreatePostModal=document.getElementsByClassName("closeModal")[2];
createPostBtn.onclick=function(){
    createPostModal.style.display="flex";
}
closeCreatePostModal.onclick=function(){
    createPostModal.style.display="none";
}
allPostsBtn.onclick=function(){
    window.open("file:./html/bloglist.html","_self");
}
document.getElementById("headerLogoDiv").onclick=function(){
    window.open("file:./index.html","_self");
}