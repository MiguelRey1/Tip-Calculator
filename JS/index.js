const form = document.getElementById('form');

/* Span with the text warning */
const textWarning = document.getElementById('warningText');

/* input for putting the amount of bill and the number of the people */
const bill = document.getElementById('bill');
const numberPeople = document.getElementById('people');

/* Buttons to select the percent */

const buttons = document.getElementById('buttons');
const btn5 =document.getElementById('btn5');
const btn10 =document.getElementById('btn10');
const btn15 =document.getElementById('btn15');
const btn25 =document.getElementById('btn25');
const btn50 =document.getElementById('btn50');
const custom = document.getElementById('input-custom');

/* Span where the result will be display */
const totalPerPerson = document.getElementById('total-amount-person');
const totalAmount = document.getElementById('tip-amount-result');

let buttonsValue;

/* Functions to calculate the result */
const calculate = (bill, percentTip, people)=>{
    let percent = (bill * percentTip) / 100;
    let result= (percent + bill )/ people;
    return result.toFixed(2);
}

const calculateAmountTip =(bill, percentTip, people) => {
    let percent = (bill * percentTip)/100;
    let result = percent / people;
    return result.toFixed(2);
}

bill.addEventListener('keyup',(event)=>{
    let value1 = event.target.value;
    let value2 = event.target.valueAsNumber;

    if (value1 == "" || value2 == NaN || value2 == 0) {
        numberPeople.setAttribute("disabled", "");
    }else{
        numberPeople.removeAttribute('disabled');
    }
    

})

buttons.addEventListener('click', (event)=>{
    let value = event.target.textContent;
    let children = Array.from(buttons.children);
    if (value != "") {
        buttonsValue = parseInt(value);
    }

    switch (value) {
        case "5%":
            btn5.classList.toggle("visited")
        for (const child of children) {
                if (child.textContent !== value &&  child.classList.contains("visited")) {
                    child.classList.remove("visited")  
                }
            }
        break;
        case "10%":
            btn10.classList.toggle("visited")
            for (const child of children) {
                if (child.textContent !== value &&  child.classList.contains("visited")) {
                    child.classList.remove("visited")
                }
            }
        break;
        case "15%":
            btn15.classList.toggle("visited")
            for (const child of children) {
                if (child.textContent !== value &&  child.classList.contains("visited")) {
                    child.classList.remove("visited")
                } 
            }
        break;
        case "25%":
            btn25.classList.toggle("visited")
            for (const child of children) {
                if (child.textContent !== value &&  child.classList.contains("visited")) {
                    child.classList.remove("visited")
                }
            }
        break;
        case "50%":
            btn50.classList.toggle("visited")
            for (const child of children) {
                if (child.textContent !== value &&  child.classList.contains("visited")) {
                    child.classList.remove("visited")
                }
            }
        break;
    }
    
})

custom.addEventListener('keyup', (event)=>{
    if(event.target.value != ""){
        buttonsValue = parseInt(event.target.value);
    }

});


numberPeople.addEventListener('keyup', (event)=>{

    let billValue = bill.valueAsNumber;
    let peopleNumber = event.target.valueAsNumber;
    let peopleValue = event.target.value;

    if (peopleNumber == 0 || peopleValue =="") {  
        textWarning.textContent = "can't be zero";
        textWarning.setAttribute("class","warning-text");
        numberPeople.classList.add("warning");
        
    } else if(buttonsValue == 0 || buttonsValue == ""){
        textWarning.textContent = "";
        textWarning.removeAttribute('class');
        numberPeople.classList.remove('warning');
        totalAmount.textContent = "0.00";
        totalPerPerson.textContent = (billValue / peopleNumber).toFixed(2);

    } else if(buttonsValue !== undefined && buttonsValue !=0 ){
        totalAmount.textContent = calculateAmountTip(billValue, buttonsValue, peopleNumber);
        totalPerPerson.textContent = calculate(billValue, buttonsValue, peopleNumber );

    }else {
        textWarning.textContent = "";
        textWarning.removeAttribute('class');
        numberPeople.classList.remove('warning');
        totalPerPerson.textContent = (billValue / peopleNumber).toFixed(2);
    }

})

/* Button for reset all fields */
form.addEventListener('reset', ()=>{
    textWarning.textContent = "";
    textWarning.removeAttribute('class');
    numberPeople.classList.remove('warning');
    numberPeople.setAttribute("disabled", "");
    buttonsValue = ""; 
    totalAmount.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    let children = Array.from(buttons.children);
    for (const child of children) {
        child.classList.remove("visited");
    }
})