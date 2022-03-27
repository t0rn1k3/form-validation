const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const website = document.getElementById('website');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const alert = document.querySelector('.alert');
const message = document.getElementById('message');

//store infomation variables

const storeName = document.getElementById('storeName');
const storePhone = document.getElementById('storePhone');
const storeEmail = document.getElementById('storeEmail');
const storeWebsite = document.getElementById('storeWebsite');
const storePassword = document.getElementById('storePassword');




let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    //message error
    if (!isValid) {
        message.textContent = 'please fill out all fields!';
        message.style.color = "#c81d25";
        alert.style.borderColor = "#c81d25";
        return;
    };

    //password match 
    if(password.value === confirm.value){
        passwordMatch = true;
        password.style.borderColor = '#008000';
        confirm.style.borderColor = '#008000';
    }else {
        passwordMatch = false;
        message.textContent = 'make sure your passwords match';
        message.style.color = "#c81d25";
        alert.style.borderColor = "#c81d25";
        password.style.borderColor = "#c81d25";
        confirm.style.borderColor = "#c81d25";
        return;
    }

    // if form is valid and passwords match

    if (isValid && passwordMatch) {
        message.textContent = 'successfully registered!';
        message.style.color = "#008000";
        alert.style.borderColor = "#008000";
    }
    
}

function formData() {
    const users = {
        name: form.fullName.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }

    storeName.innerText = users.name;
    storePhone.innerText = users.phone;
    storeEmail.innerText = users.email;
    storeWebsite.innerText = users.website;
    storePassword.innerText = users.password;
}

//submit form 

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    validateForm();

    //submit data
    if (isValid && passwordMatch) {
        formData();
    }
})