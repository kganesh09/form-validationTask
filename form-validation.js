const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password2=document.getElementById("password2")
form.addEventListener('submit',n =>{

    n.preventDefault()
    checkInput();
});
function checkInput  () {
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if( usernameValue === ''){
        SetError(username, 'username cannot be Blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue===''){
        SetError(email,'Email cannot be Blank') ;
    }
    else if(!isEmail(emailValue)){
        SetError(email,'Not a valid email') ;
    }
    else{
        setSuccess(email);
    }
    function isEmail(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
    if( passwordValue === ''){
        SetError(password, 'password cannot be Blank');
    }
    else if(passwordValue.length<8){
        SetError(password, 'password must be in the length of 8'); 
    }
    else{
        setSuccess(password);
    }
    if( password2Value === ''){
        SetError(password2, 'password cannot be Blank');
    }
    else if(password2Value.length<8){
        SetError(password2, 'password must be in the length of 8'); 
    }
    else if(passwordValue !== password2Value){
        SetError(password2, 'password does not match'); 
    }
    else{
        setSuccess(password2);
    }
    function SetError(input, message){
        const formControl=input.parentElement;
        const small=formControl.querySelector('small');
        formControl.className='form-control error';
        small.innerText=message;
    }
    function setSuccess(input){
        const formcontrol=input.parentElement;
        formcontrol.className='form-control success';
    }
}