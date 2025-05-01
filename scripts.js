function generateNumbers(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    if(min < max) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        const message = "O número sorteado foi ";
        alert(message + result)
    } else {
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    }
}