document.getElementById("headerLogoDiv").onclick=function(){
    window.open("file:../index.html","_self");
}
var editBtn=document.getElementById("postEditBtn");
var blogText=document.getElementsByClassName("blogText")[0];
var blogBody=document.getElementById("blogBody");
var saveBtn=document.getElementById("postSaveBtn");
editBtn.onclick=function(){
    editBtn.style.display="none";
    blogText.classList.add("editable");
    blogBody.setAttribute("contenteditable","true");
    saveBtn.style.display="block";
}
saveBtn.onclick=function(){
    saveBtn.style.display="none";
    blogText.classList.remove("editable");
    blogBody.removeAttribute("contenteditable");
    editBtn.style.display="block";
}
var numLikes=0;
var likeBtn=document.getElementById("likeBtn");
var numLikesP=document.getElementById("numLikes");
likeBtn.onclick=function(){
    if(likeBtn.innerHTML=='Like <i class="fa fa-thumbs-up" aria-hidden="true"></i>')
        likeBtn.innerHTML='Liked! <i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    numLikes+=1;
    if(numLikes==1)
    numLikesP.innerHTML=numLikes+' person likes this!';
    else if(numLikes>1)
    numLikesP.innerHTML=numLikes+' people have liked this!';
}
var commentBtn=document.getElementById("commentBtn");
var commentText=document.getElementById("commentTextarea");
var commentDiv=document.getElementById("readComments");
commentBtn.onclick=function(){   
    if(commentText.value!=""){
    var newPara=document.createElement("p");
    newPara.innerHTML=commentText.value;
    newPara.style.backgroundColor="white";
    newPara.style.padding="15px";
        if((commentDiv.childNodes).length==0)
            commentDiv.appendChild(newPara);
        else
            commentDiv.insertBefore(newPara,commentDiv.childNodes[0]);
    }
    else{
        alert("Comment field can not be left empty.")
    }
}