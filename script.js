//Lectura de variables a trabajar

const botonGenerar = document.querySelector("#generate")
const passwordText = document.querySelector("#password > p")
const characterLength = document.querySelector("#range_length")

// Variables de entrada
    const uppercase = document.querySelector("#uppercase")
    const lowercase = document.querySelector("#lowercase")
    const symbols = document.querySelector("#symbols")

let genPassword = ""

botonGenerar.addEventListener("click", () => {
    let genPassword = ""
    const lowerTextletters = "abcdefghijklmnopqrstuvwxyz"
    const upperTextLetters = lowerTextletters.toUpperCase()
    const numberinc = "0123456789"
    const symbols = "!$%&?@"

    
    passwordText.textContent = genPassword

    for (let i=0; i< characterLength.value; i++) {

    
            
        const randomIndex =  parseInt(Math.random()*Number(characterLength.value))

        console.log(i, "---loop");
        console.log(randomIndex, "----index in loop");

        genPassword = genPassword + lowerTextletters [randomIndex]
    
    }
    
    passwordText.textContent = genPassword

})
