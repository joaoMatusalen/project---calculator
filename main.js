
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const keysBtn = document.querySelectorAll('.charKey')
const result = document.getElementById('result')
const copy = document.getElementById('copyToClipboard')

const allowKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

input.focus()

input.addEventListener('keydown', (ev) => {
    ev.preventDefault()
    if (allowKeys.includes(ev.key)) {
        input.value += ev.key
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculator()
    }
})

keysBtn.forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', ()=>{
        const value = charKeyBtn.dataset.value
        input.value += value
    }) 
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = ""
    input.focus()
})

document.getElementById('equal').addEventListener('click', () => {
    calculator()
})

function calculator() {
    result.value = 'Error.'
    result.classList.add('error')
    eval(input.value)
    if (eval(input.value) != undefined) {
        result.value = eval(input.value)
        result.classList.remove('error')
    }
}

document.getElementById('themeSwitcher').addEventListener('click', () => {
    
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        result.style.setProperty("--font-color", "#f1f5f9")
        main.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        result.style.setProperty("--font-color", "#f1f5f9")
        main.dataset.theme = "dark"
      }

    })

copy.addEventListener('click', () =>{
    
    if (copy.innerText === "Copy") {
        navigator.clipboard.writeText(result.value)
        copy.classList.add('success')
        copy.innerText = "Copied"
    } else{
        copy.innerText = "Copy"
        copy.classList.remove('success')
    }
})