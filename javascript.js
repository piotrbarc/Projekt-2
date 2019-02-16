
// add 5 sounds to js
let openhat = document.querySelector(`#openhat`);
let ride = document.querySelector(`#ride`);
let snare = document.querySelector(`#snare`);
let tink = document.querySelector(`#tink`);
let tom = document.querySelector(`#tom`);

// bind every sound to diffrent key
// play sound  assigned to key
window.addEventListener(`keydown`, (e) => {
   //set openhat.wav  for 'T' key
    if (e.keyCode == 84) {
        openhat.play();

    }


    //set ride.wav for 'Y' key
        if (e.keyCode == 89) {
            ride.play();
 }

//set snare.wav for 'U' key
            if (e.keyCode == 85) {
                snare.play();
   }

   //set tink.wav for 'I' key
   if (e.keyCode == 73) {
    tink.play();
}


//set tom.wav for 'O' key
if (e.keyCode == 79) {
    tom.play();
}

  });
// ------------ Record audio ------------------

// ad record buttons to js 
let record1 = document.querySelector(`#record1`);
let record2 = document.querySelector(`#record2`);
let record3 = document.querySelector(`#record3`);
let record4 = document.querySelector(`#record4`);
// add stop buttons to js
let stop1 = document.querySelector(`#stop1`);
let stop2 = document.querySelector(`#stop2`);
let stop3 = document.querySelector(`#stop3`);
let stop4 = document.querySelector(`#stop4`);
// add play buttons to js
let play1 = document.querySelector(`#play1`);
let play2 = document.querySelector(`#play2`);
let play3 = document.querySelector(`#play3`);
let play4 = document.querySelector(`#play4`);





// chanels 
record1.addEventListener(`click`, function() 
{
    // start recording audiot
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();


    // saving audio by pushing audioChunks to array
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
// converting audio

  mediaRecorder.addEventListener(`stop`, () => {

    
    const audioBlob = new Blob(audioChunks);
    // create url for single audio
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    // play the audio on button click for channel 1
    play1.addEventListener(`click` , function() {
    audio.play();
    
    });
});



//stop recording audio on button click for channel 1
 stop1.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })
   

});

});
record2.addEventListener(`click`, function()
{
    // start recording audio
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();


    // saving audio by pushing audioChunks to array
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
// converting audio
  mediaRecorder.addEventListener(`stop`, () => {
    const audioBlob = new Blob(audioChunks);
    // create url for single audio
    const audioUrl = URL.createObjectURL(audioBlob);

    // play the audio on button click for channel 2
    const audio = new Audio(audioUrl);
    play2.addEventListener(`click` , function() {
        audio.play();
        });
});


//stop recording audio on button click for channel 2
 stop2.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })
   

});

});
record3.addEventListener(`click`, function()
{
    // start recording audiot
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();


    // saving audio by pushing audioChunks to array
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
// converting audio
  mediaRecorder.addEventListener(`stop`, () => {
    const audioBlob = new Blob(audioChunks);
    // create url for single audio
    const audioUrl = URL.createObjectURL(audioBlob);

    // play the audio on button click for channel 3
    const audio = new Audio(audioUrl);
    play3.addEventListener(`click` , function() {
        audio.play();
        });
});


//stop recording audio  on button click for channel 3
 stop3.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })
   

});

});
record4.addEventListener(`click`, function()
{
    // start recording audio
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();


    // saving audio by pushing audioChunks to array
    const audioChunks = [];

    mediaRecorder.addEventListener(`dataavailable`, (event) => {
        audioChunks.push(event.data);
  });
// converting audio
  mediaRecorder.addEventListener(`stop`, () => {
    const audioBlob = new Blob(audioChunks);
    // create url for single audio
    const audioUrl = URL.createObjectURL(audioBlob);

    // play the audio on button click for channel 4
    const audio = new Audio(audioUrl);
    play4.addEventListener(`click` , function() {
        audio.play();
        });
});


//stop recording audio on button click for channel 4
 stop4.addEventListener(`click`, () =>{
    mediaRecorder.stop();
 })
   

});

});

//  function - record audio
 