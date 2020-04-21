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
        let interval = setInterval(() => {
            if(time > 0){
                time--;
                zoneText.innerText = time;
            } else {
                alert('le decompte est terminé');
                clearInterval(interval);
                zoneText.innerText = 'vous pouvez recommencer :)';
            }
        }, 1000);
    } else {
        alert('Vous devez entrer un nombre positif');
    }
    
})