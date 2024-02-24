"use strict";
const form = document.querySelector(".login-form");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");

function formHandler(event) {
    event.preventDefault();

    const data = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    if (data.email === "" || data.password === "") {
        alert('All form fields must be filled in');
    } else {
        console.log(data);
        form.reset();
    }
}

form.addEventListener('submit', formHandler);