
document.body.addEventListener("keydown", (event) => {
    
    const clap = new Audio('./DrumSounds/clap.wav')
    const hihat = new Audio('./DrumSounds/hihat.wav')
    const kick = new Audio('./DrumSounds/kick.wav')
    const openhat = new Audio('./DrumSounds/openhat.wav')
    const ride = new Audio('./DrumSounds/ride.wav')
    const snare = new Audio('./DrumSounds/snare.wav')
    const tink = new Audio('./DrumSounds/tink.wav')
    const tom = new Audio('./DrumSounds/tom.wav')
    
    switch (event.key) {
        case "a":
            clap.play();
            break;
    
        case "s":
            hihat.play();
            break;
    
        case "d":
            kick.play();
            break;
    
        case "f":
            openhat.play();
            break;
    
        case "g":
            ride.play();
            break;
    
        case "h":
            snare.play();
            break;
    
        case "j":
            tink.play();
            break;
    
        case "k":
            tom.play();
            break;
    
    }

});
