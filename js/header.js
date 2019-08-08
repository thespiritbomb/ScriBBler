var signUpModal=document.getElementById("signUpModalDiv");
var signInModal=document.getElementById("signInModalDiv");
var signUpBtn=document.getElementById("headerSignUp");
var signInBtn=document.getElementById("headerSignIn");
var closeSignUpModal=document.getElementsByClassName("closeModal")[0];
var closeSignInModal=document.getElementsByClassName("closeModal")[1];
var link=document.getElementById("signInModalLink");
// Open Sign Up Modal on clicking Sign Up Button
signUpBtn.onclick=function(){
    signUpModal.style.display="flex";
}
// Hide Sign Up Modal on clicking cross Icon
closeSignUpModal.onclick=function(){
    signUpModal.style.display="none";
}
// Open Sign In Modal on clicking Sign In Button
signInBtn.onclick=function(){
    signInModal.style.display="flex";
}
// Close Sign In Modal on clicking cross Icon
closeSignInModal.onclick=function(){
    signInModal.style.display="none";
}
// Open Sign Up Modal on clicking Sign Up Link in the Sign in Modal
link.onclick=function(){
    signInModal.style.display="none";
    signUpModal.style.display="flex";
}
