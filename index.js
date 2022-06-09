const tasks = {
    washCar: 10,
    mowLawn: 20,
    pullWeeds: 30
}

let cost = 0
let washCarBtnCounter = 0
let mowLawnBtnCounter = 0
let pullWeedsBtnCounter = 0

const washCarBtn = document.getElementById("washCar-btn")
const mowLawnBtn = document.getElementById("mowLawn-btn")
const pullWeedsBtn = document.getElementById("pullWeeds-btn")
const taskList = document.getElementById("taskList")
const totalCost = document.getElementById("totalCost")
const sendInvoice = document.getElementById("sendInvoice-btn")
const total = document.getElementById("total")

let requestedTasks = []

washCarBtn.addEventListener("click", function() {
    if (washCarBtnCounter === 0) {
        requestedTasks.push(tasks.washCar)
        renderTasks("Wash Car")
        washCarBtnCounter += 1;
        calculateCost()
        total.innerHTML += `<ul>$10</ul>`
    }
    else {
        return
    }
})

mowLawnBtn.addEventListener("click", function() {
    if (mowLawnBtnCounter === 0) {
        requestedTasks.push(tasks.mowLawn)
        renderTasks("Mow Lawn")
        mowLawnBtnCounter += 1;
        calculateCost()
        total.innerHTML += `<ul>$20</ul>`
    }
    else {
        return
    }
})

pullWeedsBtn.addEventListener("click", function() {
    if (pullWeedsBtnCounter === 0) {
        requestedTasks.push(tasks.pullWeeds)
        renderTasks("Pull Weeds")
        pullWeedsBtnCounter += 1;
        calculateCost()
        total.innerHTML += `<ul>$30</ul>`
    }
    else {
        return
    }
})

sendInvoice.addEventListener("click", function() {
    // reset cost, lists, arrays and all - no need for an actual sending function yet
    cost = 0
    washCarBtnCounter = 0
    mowLawnBtnCounter = 0
    pullWeedsBtnCounter = 0
    requestedTasks = []
    taskList.innerHTML = ''
    total.innerHTML = ''
})

function renderTasks(task) {
    taskList.innerHTML += `<ul>${task} </ul>`
}

function calculateCost() {
    let cost = 0
    for (let i = 0; i < requestedTasks.length; i++) {
        cost += requestedTasks[i]
    }
    totalCost.textContent = `Total Amount: $${cost}`
    return cost
}



