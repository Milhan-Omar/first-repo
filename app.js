const inputs = document.getElementsByClassName("form-control")
const send = document.getElementById("click")

function submit() {
 for (const input of inputs) {
    input.value = '';
 }
}
send.addEventListener('click', submit)