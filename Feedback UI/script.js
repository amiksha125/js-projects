
const ratingEls = document.querySelectorAll('.rating');

const btnEl = document.getElementById('btn')
const containerEl = document.getElementById("container");

let selectedrating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (e) => {
         console.log(e.target.innerText || e.target.parentNode.innerText); //when u clicked on emoji then it display blank , it should display correct name
         removeActive(); //if u clickedon satifsied, then again clicked on unhappy then active class should be added on unhappy onlu, remove active class of all before assigning
         selectedrating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active")
        e.target.parentNode.classList.add("active")
    })
})

btnEl.addEventListener("click", function(e){
    if(selectedrating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedrating} </strong>
        <p>We'll use your feedback to improve our customer support. </p>`
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}