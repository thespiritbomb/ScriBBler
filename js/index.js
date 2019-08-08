var allPostsBtn=document.getElementById("allPostsBtn");
var createPostBtn=document.getElementById("createPostBtn");
var createPostModal=document.getElementById("createPostModalDiv")
var closeCreatePostModal=document.getElementsByClassName("closeModal")[2];
// Display Create Post modal on clicking button
createPostBtn.onclick=function(){
    createPostModal.style.display="flex";
}
// Hide Create Post modal on clicking cross icon
closeCreatePostModal.onclick=function(){
    createPostModal.style.display="none";
}
// Opening new page on clicking All Posts Button
allPostsBtn.onclick=function(){
    window.open("file:./html/bloglist.html","_self");
}
// Opening home page on clicking the ScriBBler Logo
document.getElementById("headerLogoDiv").onclick=function(){
    window.open("file:./index.html","_self");
}