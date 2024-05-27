const formEl = document.getElementById("addUserForm");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const nameErrMsgEl = document.getElementById("nameErrMsg");
const emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameErrMsgEl.style.color = "red";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
        emailErrMsgEl.style.color = "red";
    } else {
        emailErrMsgEl.textContent = "";
    }
});