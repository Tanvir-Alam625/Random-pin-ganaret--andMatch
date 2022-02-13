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