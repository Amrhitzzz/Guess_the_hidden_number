console.log('--- WelCome To Number Guessor ---');
console.log('Stay Safe');

const alertDanger = document.querySelector('.alert-danger'),
    alertSuccess = document.querySelector('.alert-success');


    // alertSuccess= document.querySelector('.message'),
const minV = document.querySelector('.min'),
    maxV = document.querySelector('.max'),
    guessInput = document.querySelector('#guessinput');

    chancemsg = document.querySelector('.chanceleft');
    guessInput.style.borderRadius = "10px";

let guessBtn = document.querySelector('#guessbtn'),
    min = 1,
    max = 10,
    chances = 3,
    guessNum = randomNum(min, max);

    // chances left message 
    chancemsg.textContent = `---- [ Total chances: ${chances} 💔 ] ----`;
    chancemsg.style.color = 'green';

minV.textContent = min;
maxV.textContent = max;


guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value);
    e.preventDefault();
    if (isNaN(guess) || guess < min || guess > max) {
        alertDanger.style.display = 'block';
        setmsgdanger(`🤨 Please enter number betn ${min} & ${max}`, "red");
        guessInput.style.borderColor = 'red';
        console.log(` Please Enter number between ${min} & ${max}`);
    }
    else {
        if (guess === guessNum) {
            guessInput.disabled = true;
            alertSuccess.style.display = 'block';
            alertDanger.style.display = 'none';
            guessInput.style.borderColor = 'green';
            setmsgsuccess(`🔥 Congrats!!! You guessed the number i.e ${guessNum} 😎`, 'green');
            playagain();
            console.log('Congrats!!! You guessed the Number');

        }
        else {
            chances -= 1;
            guessInput.textContent = '';
            alertDanger.style.display = 'block';
            guessInput.style.borderColor = 'red';
            setmsgdanger(`😐 Sorry Try again!!!, chances left : ${chances} 💔`, 'red');

            console.log(`Sorry Try again!!! , ${chances} chances left`);
        }
        if (chances === 0) {
            guessInput.disabled = true;
            alertDanger.style.display = 'block';
            guessInput.style.borderColor = 'red';
            setmsgdanger(`🥺GameOver!!! Chances left : ${chances} . Guess Number is ${guessNum}`, 'red');
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
    alertDanger.textContent = msg;
    alertDanger.style.color = color;
}

function setmsgsuccess(msg, color) {
    alertSuccess.textContent = msg;
    alertSuccess.style.color = color;
}

function playagain(){
    guessBtn.value = 'playagain';
    guessBtn.addEventListener('click', function(){
        window.location.reload();
    });

}




// customize section 

const custombtn = document.querySelector('#customsubmit'),
    custominputall = document.querySelectorAll('body.customize');

custombtn.addEventListener('click',function(){
    let custvalue = parseInt(custominputall.value);
    if(isNaN(custvalue)){
        console.log('error');
    }
   else{
    console.log('customsubmit');
    console.log('okay');
   }
       
        
   
});