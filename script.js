const form=document.getElementById("form");
const nameInput=document.querySelector("#name");
const dataNascimentoInput=document.querySelector("#dataNascimento");
const emailInput=document.querySelector("#email");
const passworInput=document.querySelector("#password");
const rgInput=document.querySelector("#rg");
const jobselect=document.querySelector("#job");
const messageTextarea=document.querySelector("#message");

form.addEventListener("submit",(event)=>{
    //console.log(nameInput,cpfInput,emailInput);
    event.preventDefault();

    if(nameInput.value===""){
        alert("Por favor preencha seu nome");
        return;
    }

    if(dataNascimentoInput.value===""){
        alert("Por favor preencha sua data de nascimento");
        return;
    }

    if(emailInput.value===""||!isEmailValid(emailInput.value)){
        alert("Por favor preencha seu E-mail");
        return;
    }

    if(passwordInput.value===""||!validatePassword(passworInput.value,8)){
        alert("Por favor preencha sua senha");
        return;
    }

    if(jobselect.value===""){
        alert("Por favor, preencha sua escolha");
        return;
    }

    if(rgInput.value===""){
        alert("Por favor, preencha seu RG");
        return;
    }

    form.submit();
});

function isEmailValid(email){
    //padrão de email
    //usuario12@servico.com
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9]+a[a-zA-Z0-9]+.[a-zA-Z]{2,0}/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

function validatePassword(password,minDigits){
    if(password.lenght >=minDigits){
        return true;
    }
    return false;
}


document.getElementById("formNascimento").addEventListener("submit", function(event) {
    event.preventDefault();

    var dataNascimento = document.getElementById("dataNascimento").value;

    console.log("Data de Nascimento:", dataNascimento);
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var rgInput = document.getElementById('rg');
    var rgValue = rgInput.value;

    console.log('RG digitado:', rgValue);
});
