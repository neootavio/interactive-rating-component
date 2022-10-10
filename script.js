let elementList = document.querySelectorAll('button');

let rate = document.getElementById('rate');

let submitBtn = document.getElementById('submit-btn1');

let tela1 = document.getElementById('tela1');

let tela2 = document.getElementById('tela2');

let showRating = "";


console.log(tela1);


elementList[0].addEventListener("click", captureClick1);
elementList[1].addEventListener("click", captureClick2);
elementList[2].addEventListener("click", captureClick3);
elementList[3].addEventListener("click", captureClick4);
elementList[4].addEventListener("click", captureClick5);


function captureClick1(){
    
    showRating = elementList[0].id;

    rate.innerHTML = showRating;
}

function captureClick2(){
    
    showRating = elementList[1].id;

    rate.innerHTML = showRating;
}

function captureClick3(){
    
    showRating = elementList[2].id;

    rate.innerHTML = showRating;
}

function captureClick4(){
    
    showRating = elementList[3].id;

    rate.innerHTML = showRating;
}

function captureClick5(){
    
    showRating = elementList[4].id;

    rate.innerHTML = showRating;
}

submitBtn.addEventListener("click", submit);

function submit(){
    tela1.classList.add('hiddenState');

    tela2.classList.remove('hiddenState');
    tela2.classList.add('thx-container');
}