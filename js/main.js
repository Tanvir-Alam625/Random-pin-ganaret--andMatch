//get pin  function 
function generatePin(){
    const randomPin = getRandomPin() 
    document.getElementById('display-pin').value = randomPin;
}
// random pin generate function
function getRandomPin(){
    const pin = Math.round(Math.random() * 100000);
    const covertPin = pin+ '';
    if(covertPin.length == 5){
        return pin;
    }else{
        return getRandomPin()
    }
}
// key pad function
document.getElementById('key-pad').addEventListener('click',function(event){
    const keyValue =event.target.innerText;
    const keyInput = document.getElementById('typed-numbers');
    const number = keyInput.value + keyValue;
    if(isNaN(keyValue)){
        if(keyValue == 'C'){
            keyInput.value = '';
        }
    }else if(number.length < 6){
        keyInput.value = number;
    }
});
// checking pin isTrue And false function
function verifyPin(){
    const randomPin =document.getElementById('display-pin').value;
    const keyValue = document.getElementById('typed-numbers').value;
    // get message id
    const fail = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    //value checking condition 
    if(randomPin == keyValue){
        success.style.display = 'block';
        fail.style.display = 'none';
    }else{
        fail.style.display = 'block';
        success.style.display = 'none';
    }
}