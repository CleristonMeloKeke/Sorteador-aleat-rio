function generateNumbers(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const message = "O número sorteado foi ";
    alert(message + result)
}