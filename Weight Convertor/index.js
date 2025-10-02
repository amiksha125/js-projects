const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById('result')
let errorTime;
let resultTime;

function updateResult(){
    console.log("change")

    if(inputEl.value <= 0 || isNaN(inputEl.value)){
        errorEl.innerHTML = `Please enter a valid number`;
        clearTimeout(errorTime);
        errorEl = setTimeout(() => {
            errorEl.innerText = '';
            inputEl.value = '';
        }, 2000); //after 2 sec stop showing error msg
    } else {
        // + for string to number casting
    resultEl.innerHTML = (+inputEl.value / 2.2).toFixed(2);

    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
           inputEl.value = '';
           resultEl.value = '';
    }, 10000)
    }


}


inputEl.addEventListener("input", updateResult);