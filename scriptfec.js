const signUpForm = document.getElementById("sign-up-form");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("campo1").value;

    let data = {
        email,
    };

    let newData = JSON.stringify(data);

    localStorage.setItem("lead", newData);
    console.log(data)

    let content = document.getElementById("sign-up-form-div");
    let ready = `<p class="sign-up">Seu e-mail foi cadastrado com sucesso!</p>`;

    setTimeout(() => {
        content.innerHTML = ready;
    }, 1000);
});