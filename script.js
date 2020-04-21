zoneText = document.getElementById('timer');
let time;

//function for Recover value in input and convert on number
function recoverTime() {
    return time = parseInt(document.querySelector('#time').value);
}

//recover button 
let button = document.querySelector('button');

//add eventListener onclick button
button.addEventListener('click', () => {
    recoverTime();
   console.log(time);

    if (time > 0) {
        setInterval(() => {
            if(time > 0){
                time--;
                zoneText.innerText = time;
            }
        }, 1000);
    } else {
        alert('Vous devez entrer un nombre positif');
    }
    
})