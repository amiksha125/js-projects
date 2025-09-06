const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "ig0b6CvLO6kF8CttKo3NMg==OqNa988NBgTII4Wt";

const option = {
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes"

async function getJoke(){
   try {
     jokeEl.innerHTML = 'Updating...'
    btnEl.disabled = true;
    btnEl.innerHTML= 'Loading...'
    //we will use Dad joke api from api ninjas 
    const response = await fetch(apiURL, option);
   //the data should wait for the resposne before parsing response, its a asynchronous code we are doing, add async await
    const data = await response.json();
    console.log(data[0].joke);
    
    btnEl.disabled = false;
    btnEl.innerHTML= 'Tell me a joke'
    jokeEl.innerHTML = data[0].joke;

   } catch (error) {
      jokeEl.innerHTML = `An error happened, try again later`;
      btnEl.disabled = false;
      btnEl.innerHTML= 'Tell me a joke'
      console.log(error);    
   }
       
}
btn.addEventListener('click', getJoke)