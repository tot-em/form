let firstName = document.querySelector('.firstname')
let secondName = document.querySelector('.secondname')
let userName = document.querySelector('.usrname')
let Email = document.querySelector('.email')
let passWord = document.querySelector('.password')
let passWord2 = document.querySelector('.password2')
let submit = document.querySelector('#submit')

 submit.addEventListener("click", (e)=> {
    e.preventDefault();
    
    console.log(firstName.value);
    console.log(secondName.value);
    console.log(userName.value);
    console.log(Email.value);
    console.log(passWord.value);
    console.log(passWord2.value);
 })