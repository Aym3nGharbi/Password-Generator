const passwordBox = document.getElementById('password');
const generate = document.getElementById('btn');
const copy = document.getElementById('copy');

function createPassword(){
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "`~!@#$%^&*()-_=+[]{}|;:',.<>?/";

    const allChars = upperCase + lowerCase + numbers + symbols;

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < 12){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function passwordCopy(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
}

generate.addEventListener('click', createPassword);
copy.addEventListener('click', passwordCopy);