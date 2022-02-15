// Generate 4 Digit Random Number
function generateRandomNum(){
    const random = Math.round(Math.random() * 10000);
    if(random.toString().length <= 3){
        return generateRandomNum();
    }
    return random;
}

document.getElementById('pin-generate-btn').addEventListener('click', function(){
    const pinInputDisplay = document.getElementById('pin-input-display');
    pinInputDisplay.value = generateRandomNum();
});
