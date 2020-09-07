console.log('--- WelCome To Number Guessor ---');
console.log('Stay Safe');

const alertDanger = document.querySelectorAll('.alert-danger'),
    alertSuccess = document.querySelectorAll('.alert-success');


// alertSuccess= document.querySelector('.message'),
const minV = document.querySelector('.min'),
    maxV = document.querySelector('.max'),
    guessInput = document.querySelector('#guessinput');

    let customizeSection =document.querySelector('.customize')
    
chancemsg = document.querySelector('.chanceleft');
chancemsgT = document.querySelector('.chanceleftT');
guessInput.style.borderRadius = "10px";

let guessBtn = document.querySelector('#guessbtn');
  var  min = 1;
  var  max = 10;
   let chances = 5,
    guessNum = randomNum(min, max);

// chances left message 
chancemsg.textContent = `---- [ Total chances: ${chances} 💔 ] ----`;
chancemsg.style.color = 'green';
chancemsgT.textContent =`${chances}`;

minV.textContent = min;
maxV.textContent = max;

function replacevalue(a,b,c){
    
      max = b
     min = a
console.log(`value of  are ${min} and ${max}`)
guessNum = randomNum(min, max);
chances = c
// chances left message 
chancemsg.textContent = `---- [ Total chances: ${chances} 💔 ] ----`;
chancemsgT.textContent = chances;
chancemsg.style.color = 'green';


}




guessBtn.addEventListener('click', function(e) {
   
    let guess = parseInt(guessInput.value);
    e.preventDefault();
    if (isNaN(guess) || guess < min || guess > max) {
        alertDanger[0].style.display = 'block';
        setmsgdanger(`🤨 Please enter number betn ${min} & ${max}`, "red");
        guessInput.style.borderColor = 'red';
        console.log(` Please Enter number between ${min} & ${max}`);
    }
    else {
        if (guess === guessNum) {
            guessInput.disabled = true;
            alertSuccess[0].style.display = 'block';
            alertDanger[0].style.display = 'none';
            guessInput.style.borderColor = 'green';
            setmsgsuccess(`🔥 Congrats!!! You guessed the number i.e ${guessNum} 😎`, 'green');
            playagain();
            console.log('Congrats!!! You guessed the Number');

        }
        else {
            chances -= 1;
            guessInput.textContent = '';
            alertDanger[0].style.display = 'block';
            guessInput.style.borderColor = 'red';
            chancemsg.textContent = `---- [ Total chances: ${chances} 💔 ] ----`;
            setmsgdanger(`😐 Sorry Try again!!!, 💔`, 'red');
            // setmsgdanger(`😐 Sorry Try again!!!, chances left : ${chances} 💔`, 'red');

            console.log(`Sorry Try again!!! , ${chances} chances left`);
        }
        if (chances === 0) {
            guessInput.disabled = true;
            alertDanger[0].style.display = 'block';
            guessInput.style.borderColor = 'red';
            chancemsg.textContent = `---- [ Total chances: ${chances} 💔 ] ----`;
            setmsgdanger(`🥺GameOver!!! Guess Number is ${guessNum}`, 'red');
            // setmsgdanger(`🥺GameOver!!! Chances left : ${chances} . Guess Number is ${guessNum}`, 'red');
            console.log(`${guessNum} is the number`);
            playagain();

        }
    }
});

function randomNum(min, max) {
    let a = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(a);
    return a;
}

function setmsgdanger(msg, color) {
    alertDanger[0].textContent = msg;
    alertDanger[0].style.color = color;
    alertDanger[1].textContent = msg;
    alertDanger[1].style.color = color;
}

function setmsgsuccess(msg, color) {
    alertSuccess[0].textContent = msg;
    alertSuccess[0].style.color = color;
    alertSuccess[1].textContent = msg;
    alertSuccess[1].style.color = color;
}

function playagain() {
    guessBtn.value = 'playagain';
    customizeSection.style.display = 'block';
    guessBtn.addEventListener('click', function () {
        window.location.reload();
    });

}

function guestmode(){
    customizeSection.style.display = 'block';
    
}


// customize section 

const minOne = document.querySelector('#firstnum'),
    maxOne = document.querySelector('#secondnum'),
    abcd = document.querySelectorAll('.custominput'),
    customchance = document.querySelector('#customchance');


let submitbtn = document.querySelector('#customsubmit');

submitbtn.addEventListener('click', function(e){

    var cMin = parseInt(minOne.value);
    var cMax = parseInt(maxOne.value);
    let cChanceleft = parseInt(customchance.value);

    e.preventDefault();
    console.log(cMin)
    console.log(cMax)
    console.log(cChanceleft)
    if(isNaN(cMin) || isNaN(cMax) || isNaN(cChanceleft)){
        console.log('please input check')
        alertDanger[1].style.display = 'block';
        setmsgdanger('need to fill all input','red');
        abcd[0].style.borderColor= 'red'
        abcd[1].style.borderColor= 'red'
        abcd[2].style.borderColor= 'red'
    }
else if(cMin <= 0 || cMax <= 0 || cChanceleft < 0){
    console.log('check : Number is positive and Max is greater than min');
    alertDanger[1].style.display = 'block';
    setmsgdanger('Check : Number must be positive','red');
   
}

else if(cMax <= cMin){
    console.log('max must be greater than min')
    alertDanger[1].style.display = 'block';
    setmsgdanger('Check : Max  value must be greater than min','red');
}

// start here 
else {
let customheading = document.querySelector('.customheading');
customheading.innerText = "---GUEST MODE---"
customheading.style.textAlign ='center'
customheading.style.fontWeight ='normal'

customizeSection.style.display ='none'






minV.textContent = cMin;
maxV.textContent = cMax;
replacevalue(cMin,cMax,cChanceleft);
}
});


    

