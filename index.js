const numInput = document.getElementById("num-input")
const convBtn = document.getElementById("conv-btn")
const length = document.getElementById("len")
const volume = document.getElementById("vol")
const mass = document.getElementById("mas")
const title = document.getElementById("title")

let daNum = ""

convBtn.addEventListener("click", function convert() {
    daNum = numInput.value
    if(isNaN(daNum) || daNum < 0) {
        title.textContent = "Please enter a valid value"
    } else {
        lenConv()
        volConv()
        masConv()
        title.textContent = "Metric/Imperial Unit Conversion"
    }
})

function lenConv() {
    let feet = daNum * 3.28084
    let meters = daNum / 3.28084
    length.innerHTML = `<b>${daNum}</b> meters = <u>${feet.toFixed(3)}</u> | <b>${daNum}</b> feet = <u>${meters.toFixed(3)}</u>`
}

function volConv() {
    let gallons = daNum * 0.264172
    let liters = daNum / 0.264172
    volume.innerHTML = `<b>${daNum}</b> liters = <u>${gallons.toFixed(3)}</u> | <b>${daNum}</b> gallons = <u>${liters.toFixed(3)}</u>`
}

function masConv() {
    let lbs = daNum * 2.20462
    let kg = daNum / 2.20462
    mass.innerHTML = `<b>${daNum}</b> kilos = <u>${lbs.toFixed(3)}</u> | <b>${daNum}</b> pounds = <u>${kg.toFixed(3)}</u>`
}


// console.log(kg.toFixed(3))