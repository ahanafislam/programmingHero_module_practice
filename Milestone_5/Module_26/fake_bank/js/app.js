// Function for deposit or withdrow Money
function getInputValue(inputId) {
    // Get Value From Input
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

// Update value in view
function updateValueUI(amount, updateIn) {
    // Get Previous Deposit amount From UI
    const previousAmountTag = document.getElementById(updateIn);
    const previousAmountValue = parseFloat(previousAmountTag.innerText);

    // Get Previous Balance From UI
    const previousBalanceTag = document.getElementById('total-balance');
    const previousBalance = parseFloat(previousBalanceTag.innerText);

    // Add Amount with previous amount
    const newAmount = previousAmountValue + amount;
    let newBlance;
    if(updateIn !== 'total-withdrow') {
        newBlance = previousBalance + amount;
    }
    else {
        newBlance = previousBalance - amount;
    }

    // Display Updated Value in Ui
    previousAmountTag.innerText = newAmount;
    previousBalanceTag.innerText = newBlance;
}

// Event Listener For Deposit
document.getElementById('btn-deposit').addEventListener('click', function(event){
    // Prevent Reload Page
    event.preventDefault();
    
    // Get Deposit Amount from Input
    const depositAmount = getInputValue('input-deposit');
    if(depositAmount > 0) {
        // View the updated value in UI
        updateValueUI(depositAmount,'total-deposit');
    }
});

// Event Listener For Withdrow
document.getElementById('btn-withdrow').addEventListener('click', function(event){
    // Prevent Reload Page
    event.preventDefault();

    // Get Withdrow Amount From Input
    const withdrowAmount = getInputValue('input-withdrow');
    if(withdrowAmount > 0) {
        // Update Value in UI
        updateValueUI(withdrowAmount, 'total-withdrow');
    }
});
