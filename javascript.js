
// add 5 sounds to js
let openhat = document.querySelector(`#openhat`);
let ride = document.querySelector(`#ride`);
let snare = document.querySelector(`#snare`);
let tink = document.querySelector(`#tink`);
let tom = document.querySelector(`#tom`);

// bind every sound to diffrent key
// play sound  assigned to key
window.addEventListener(`keydown`, (e) => {
   // openhat.wav  for 'T' key
    if (e.keyCode == 84) {
        openhat.play();

    }


    // ride.wav for 'Y' key
        if (e.keyCode == 89) {
            ride.play();
 }

//snare.wav for 'U' key
            if (e.keyCode == 85) {
                snare.play();
   }

   //tink.wav for 'I' key
   if (e.keyCode == 73) {
    tink.play();
}


// tom.wav for 'O' key
if (e.keyCode == 79) {
    tom.play();
}

  });

 