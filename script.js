const billDivideForm = document.getElementById('bill-divider-form');

billDivideForm.addEventListener('submit', billDividerHandler);

function billDividerHandler(event){
    event.preventDefault();
    const inputs = getInputs();
    showCalculatedOutput(inputs);
}

// GET_INPUTS_ON_THE_DIVIDER
function getInputs(){
    let subtotal = document.getElementById('subtotal').value;
    let tipPercent = document.getElementById('tip').value;
    let noOfPerson = document.getElementById('no-of-person').value;
    return {subtotal, tipPercent, noOfPerson};
}

// CALCULATION
function showCalculatedOutput(input){
    billDivideForm.reset();

    let totalTip = (parseFloat(input.subtotal) * parseFloat(input.tipPercent)) / 100;
    let totalAmount = parseFloat(input.subtotal) + totalTip;
    let tipPerPerson = totalTip / parseFloat(input.noOfPerson);
    let billPerPerson = totalAmount / parseFloat(input.noOfPerson);

    document.getElementById('total-bill').innerHTML = `$ ${totalAmount.toFixed(2)}`;
    document.getElementById('bill-per-person').innerHTML = `$ ${billPerPerson.toFixed(2)}`;
    document.getElementById('total-tip').innerHTML = `$ ${totalTip.toFixed(2)}`;
    document.getElementById('tip-per-person').innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
}