//time value
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
})