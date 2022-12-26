// countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds 
// decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// countDown(4);
// // 3
// // 2
// // 1
// // "DONE!"


function countdown(time){
    let timer = setInterval(function(){
        if (time => 0){
            console.log(time);
            time--;
        }
        if (time ===0) {
            clearInterval(timer);
            console.log("DONE!");
        }
    
    }, 1000)
}

// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
// and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, 
// stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame(){
    let counter = 1;
    let timer = setInterval(function(){
        let random = Math.random();
        if (random >.75) {
            clearInterval(timer);
            console.log (random);
            console.log(`It took ${counter} tries to get a number greater than 0.75!`);
            if (counter > 7){
                console.log("You have terrible luck! :(");
            }
            else {
                console.log("You are quite lucky!");
            }
        }
        else {
            console.log (random);
            counter++;
        }
    }, 1000)
}