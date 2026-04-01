const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultEl = document.getElementById("result")

function calculateAge(){
  const birthdayVal = birthdayEl.value;

  if(birthdayVal === ""){
    alert("Please enter your birthday")
  } else {
    const age = getAge(birthdayVal)
    console.log(age);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year" } old`
    
  }
  
}

function getAge(birthdayVal){
    const currentDate =  new Date();
    const birthDate = new Date(birthdayVal)
    console.log(currentDate);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    // if the birthdate is after todaywe have to subtract 1
    const month = currentDate.getMonth() - birthDate.getMonth();
    
    if(month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        // if in same month then month === 0 then again check if it is after todays date
        // means if cur dateis less than birth date
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge)