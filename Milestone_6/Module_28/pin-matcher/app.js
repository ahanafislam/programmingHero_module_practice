// Generate 4 Digit Random Number
function generateRandomNum(){
    const random = Math.round(Math.random() * 10000);
    if(random.toString().length <= 3){
        return generateRandomNum();
    }
    return random;
}

// Pin Generate Event Listener
document.getElementById('pin-generate-btn').addEventListener('click', function(){
    const pinInputDisplay = document.getElementById('pin-input-display');
    pinInputDisplay.value = generateRandomNum();
});

// Event Listener For Key Pad
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const numberInputDisplay = document.getElementById('number-input-display');

    if(isNaN(number)) {
        if(number === 'C') {
            numberInputDisplay.value = '';
        }
    }
    else {
        const newNumber = numberInputDisplay.value + number;
        numberInputDisplay.value = newNumber;
    }
});

// Match Pin Event Listener Function
function matchPin() {
    console.log("I'm clicked!!");
}
