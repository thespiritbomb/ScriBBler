document.getElementById("headerLogoDiv").onclick=function(){
    window.open("file:../index.html","_self");
}
var editBtn=document.getElementById("postEditBtn");
var blogText=document.getElementsByClassName("blogText")[0];
var blogBody=document.getElementById("blogBody");
var saveBtn=document.getElementById("postSaveBtn");
editBtn.onclick=function(){
    editBtn.style.display="none"; //To hide the Edit Button
    blogText.classList.add("editable"); //To make the content of the Blog Editable
    blogBody.setAttribute("contenteditable","true");
    saveBtn.style.display="block"; //To Display the Save Button
}
saveBtn.onclick=function(){
    saveBtn.style.display="none"; //To hide the Save Button
    blogText.classList.remove("editable"); //To make the content of the Blog NON-Editable
    blogBody.removeAttribute("contenteditable");
    editBtn.style.display="block"; //To Display Edit Button
}
var numLikes=0;
var likeBtn=document.getElementById("likeBtn");
var numLikesP=document.getElementById("numLikes");
// To Display the number of likes and to change Button text from 'Like' to 'Liked!'
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
// To add comments to the page
commentBtn.onclick=function(){   
    if(commentText.value!=""){
    var newPara=document.createElement("p");
    newPara.innerHTML=commentText.value;
    newPara.style.backgroundColor="white";
    newPara.style.padding="15px";
        if((commentDiv.childNodes).length==0)
            commentDiv.appendChild(newPara);
        else
            commentDiv.insertBefore(newPara,commentDiv.childNodes[0]); //Make latest comment appear at the top
    }
    else{
        alert("Comment field can not be left empty.")
    }
}