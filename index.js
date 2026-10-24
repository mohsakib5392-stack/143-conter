let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = "bss " + count + " bar hi bola 🤨🤨 sali tilliiiii"
    saveEl.textContent = countStr
    count = 0
}
