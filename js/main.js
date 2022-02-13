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