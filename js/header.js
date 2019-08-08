var signUpModal=document.getElementById("signUpModalDiv");
var signInModal=document.getElementById("signInModalDiv");
var signUpBtn=document.getElementById("headerSignUp");
var signInBtn=document.getElementById("headerSignIn");
var closeSignUpModal=document.getElementsByClassName("closeModal")[0];
var closeSignInModal=document.getElementsByClassName("closeModal")[1];
var link=document.getElementById("signInModalLink");
signUpBtn.onclick=function(){
    signUpModal.style.display="flex";
}
closeSignUpModal.onclick=function(){
    signUpModal.style.display="none";
}
signInBtn.onclick=function(){
    signInModal.style.display="flex";
}
closeSignInModal.onclick=function(){
    signInModal.style.display="none";
}
link.onclick=function(){
    signInModal.style.display="none";
    signUpModal.style.display="flex";
}
