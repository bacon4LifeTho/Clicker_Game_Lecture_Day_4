let gold = 1;

// These are the upgrades

let backpack = {
    price: 100,
    quantity: 0,
    clickValueAdded: 1,
    costIncrease: 1.2
}

function caculateClickValue() {
    let clickValue = 1 + backpack.quantity * backpack.clickValueAdded
    gold = gold + clickValue
    return clickValue
}

function getGold() {
    let clickValue = caculateClickValue()
    gold = gold + clickValue
    console.log(gold)
draw()
}

function draw() {
    document.getElementById("gold-count").innerText = gold
    document.getElementById("click-value").innerText = caculateClickValue()
}

function getBackpack() {
    if (gold >= backpack.price) {
        backpack.quantity++
        gold -= backpack.price
        backpack.price = backpack.price * backpack.costIncrease
        draw()
    }
    else {
        alert("You poor💀 you don't have enough gold")
    }
}