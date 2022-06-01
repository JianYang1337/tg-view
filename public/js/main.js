const enterBtn = document.querySelector(".btn--enter");
const forgotBtn = document.querySelector(".btn--forgot-password");
const regBtn = document.querySelector(".btn--registration");
const auth = document.querySelector(".auth");
const inputs = document.querySelectorAll(".input");
const forgotPassword = document.querySelector(".forgot-password");
const authBlock = document.querySelector(".auth-block");
const forgotBtnEnter = document.querySelector(".forgot__btn--enter");
const phoneInput = document.querySelector(".input-phone");
const passwordInput = document.querySelector(".input-password");
const chatInput = document.querySelector(".chat-input__input");
const chat = document.querySelector(".chat");
const chatInputForm = document.querySelector(".chat-input");
const btnSend = document.querySelector(".btn-send");
const checkbox = document.querySelector("#unreaded-messages__checkbox");
const body = document.querySelector("body");
const btnClear = document.querySelector(".search__clear");
const searchInput = document.querySelector(".search__input");
const theme = document.querySelector(".theme");
const registration = document.querySelector(".registration");
const regSend = document.querySelector(".btn--register");
const btnNewDialog = document.querySelector(".icon--new-dialog");
const btnMore = document.querySelector(".icon--more");
const moreDropdown = document.querySelector(".more__dropdown");
const crtNewDialog = document.querySelector(".new-dialog");
const newDialogMain = document.querySelector(".new-dialog__main");
const btnCancel = document.querySelector(".new-dialog__footer-cancel-button");



enterBtn.addEventListener("click", () => {
    let wrongInput = document.querySelector(".wrong-inputs");

    if (phoneInput.value === "+79286203639" && passwordInput.value === "123") {
        auth.classList.add("hidden");
    } else {
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.classList.add("wrong");
            setTimeout(() =>{
                input.classList.remove("wrong");
            }, 3000);           
    };
        auth.classList.remove("hidden");   
        wrongInput.classList.remove("hidden");
        setTimeout(() => {
            wrongInput.classList.add("hidden");
        }, 3000);
    }
});

forgotPassword.classList.add("hidden");
registration.classList.add("hidden");


forgotBtn.addEventListener("click", () => {
    authBlock.classList.add("hidden");
    forgotPassword.classList.remove("hidden");
});

forgotBtnEnter.addEventListener("click", () => {
    alert("Пароль был выслан в СМС");
    setTimeout(() => {
    forgotPassword.classList.add("hidden");
    authBlock.classList.remove("hidden");
}, 1000);
});

regBtn.addEventListener("click", () => {
    authBlock.classList.add("hidden");
    registration.classList.remove("hidden");
});

regSend.addEventListener("click", () => {
    registration.classList.add("hidden");

    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    
    const xhr = new XMLHttpRequest();    
    xhr.open('POST', '/signUp');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "login": login,
        "password": password,
        "firstName": firstName,
        "lastName": lastName
    }));

    alert("Пользователь успешно зарегистрирован");
    authBlock.classList.remove("hidden");
});


const checkInputsAuthForm = () => {
    if (phoneInput.value === "" || passwordInput.value === "") {
        enterBtn.disabled = true;
    } else {
        enterBtn.disabled = false;
    }
};

phoneInput.addEventListener("input", checkInputsAuthForm);
passwordInput.addEventListener("input", checkInputsAuthForm);

window.addEventListener("load", checkInputsAuthForm);

chatInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (chatInput.value.trim() === "") {
        return;
    }
    console.log(chatInput.value);
    const message = `
        <div class="chat-message">
            <img class="chat-message__avatar" src="/photo/photo.jpg">
            <div class="chat-message__info">
                <div class="chat-message__title">Maxim Kosarev
                    <span class=chat-message__title-time>13:31</span>
                </div>
                <pre class="chat-message__text">${chatInput.value}</pre>
            </div>
        </div>
    `;
    chat.insertAdjacentHTML('afterbegin', message);
    chatInput.value = "";
});

chatInput.addEventListener("input", () => {
    if (chatInput.value.trim() !== "") {
        btnSend.disabled = false;
    } else {
        btnSend.disabled = true;    
    }
});

checkbox.addEventListener("change", () => {
    body.classList.toggle("white");
    if (body.classList.contains("white")) {
        theme.innerHTML = "Темная тема"
    } else {
        theme.innerHTML = "Светлая тема"
    }
});


btnClear.addEventListener("click", () => {
    searchInput.value = "";
});

moreDropdown.classList.add("hidden");
btnMore.addEventListener("click", (e) => {
    e.stopPropagation();
    moreDropdown.classList.toggle("hidden");
});

document.addEventListener("click", () => { 
    moreDropdown.classList.add("hidden");
});


crtNewDialog.classList.add("hidden");
btnNewDialog.addEventListener("click", () => {
    crtNewDialog.classList.toggle("hidden");  
});


btnCancel.addEventListener("click", () => {
    crtNewDialog.classList.add("hidden");  
});


newDialogMain.addEventListener("click", (e) => {
    e.stopPropagation();
});
crtNewDialog.addEventListener("click", () => {
    crtNewDialog.classList.add("hidden")
})

