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

let requestedTasks = []

washCarBtn.addEventListener("click", function() {
    if (washCarBtnCounter === 0) {
        requestedTasks.push(tasks.washCar)
        renderTasks("Wash Car")
        washCarBtnCounter += 1;
        calculateCost()
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
    }
    else {
        return
    }
})

function renderTasks(task) {
    taskList.innerHTML += `<ul> ${task} </ul>`
}

function calculateCost() {
    let cost = 0
    for (let i = 0; i < requestedTasks.length; i++) {
        cost += requestedTasks[i]
    }
    totalCost.textContent = `Total Amount: $${cost}`
    return cost
}



