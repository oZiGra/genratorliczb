const generuj = document.querySelector(".generuj");

generuj.addEventListener('click', generateRanNum);

function generateRanNum() {
    const fromNum = document.querySelector(".fromNum").value;
    const toNum = document.querySelector(".toNum").value;
    
    const wylosowane = document.querySelector('.wylosowane');
        wylosowane.innerHTML = "Wylosowane liczby to:"; 

    randomNum = Math.floor(Math.random() * parseInt(toNum));
    if (randomNum >= parseInt(fromNum)) {
        const randomNumE1 = document.querySelector('.randomNumE1');
        randomNumE1.innerHTML = randomNum;
    }
    randomNum = Math.floor(Math.random() * parseInt(toNum));
    if (randomNum >= parseInt(fromNum)) {
        const randomNumE2 = document.querySelector('.randomNumE2');
        randomNumE2.innerHTML = randomNum;
    }
    randomNum = Math.floor(Math.random() * parseInt(toNum));
    if (randomNum >= parseInt(fromNum)) {
        const randomNumE3 = document.querySelector('.randomNumE3');
        randomNumE3.innerHTML = randomNum;
    }
}

const generujfalszywe = document.querySelector(".generujfalszywe");

generujfalszywe.addEventListener('click', generatefalszywe);

function generatefalszywe(){
    const wylosowane = document.querySelector('.wylosowane');
    wylosowane.innerHTML = "Wylosowane liczby to:"; 
    const randomNumE1 = document.querySelector('.randomNumE1');
    randomNumE1.innerHTML = 28;
    const randomNumE2 = document.querySelector('.randomNumE2');
    randomNumE2.innerHTML = 4;
    const randomNumE3 = document.querySelector('.randomNumE3');
    randomNumE3.innerHTML = 119;
}