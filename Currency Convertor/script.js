const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate() //when user comes for the first time he should not see the hardcoded value at exhangeRate, he should see the conversion for default selected option

async function updateRate(){
   await fetch(`https://v6.exchangerate-api.com/v6/5772b4a0dbc75fc394cfac6b/latest/${currencyFirstEl.value}`)
   .then((res) => res.json())
   .then((data) => {
    const rate = data.conversion_rates[currencySecondEl.value]; 
    console.log(rate);
    exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " "+     
        currencySecondEl.value}`

    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3);
});
    
}

currencyFirstEl.addEventListener("change", updateRate)
currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate);
worthSecondEl.addEventListener("input", updateRate);



