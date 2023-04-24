let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

console.log(saveEl)

function increment() {
    console.log("clicked")
    count += 1
    countEl.textContent = count
}

function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
}



