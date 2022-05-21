document.addEventListener("keydown", function(event) {
    if (event.key === "A" || event.key === "a") {
        let audio = new Audio("Virtual_piano\\white-keys\\A.mp3");
        return audio.play();
    }
    if (event.key === "W" || event.key === "w") {
        let audio = new Audio("Virtual_piano\\black-keys\\W.mp3");
        return audio.play();
    }
    if (event.key === "S" || event.key === "s") {
        let audio = new Audio("Virtual_piano\\white-keys\\S.mp3");
        return audio.play();
    }
    if (event.key === "E" || event.key === "e") {
        let audio = new Audio("Virtual_piano\\black-keys\\E.mp3");
        return audio.play();
    }
    if (event.key === "D" || event.key === "d") {
        let audio = new Audio("Virtual_piano\\white-keys\\D.mp3");
        return audio.play();
    }
    if (event.key === "F" || event.key === "f") {
        let audio = new Audio("Virtual_piano\\white-keys\\F.mp3");
        return audio.play();
    }
    if (event.key === "T" || event.key === "t") {
        let audio = new Audio("Virtual_piano\\black-keys\\T.mp3");
        return audio.play();
    }
    if (event.key === "G" || event.key === "g") {
        let audio = new Audio("Virtual_piano\\white-keys\\G.mp3");
        return audio.play();
    }
    if (event.key === "Y" || event.key === "y") {
        let audio = new Audio("Virtual_piano\\black-keys\\Y.mp3");
        return audio.play();
    }
    if (event.key === "H" || event.key === "h") {
        let audio = new Audio("Virtual_piano\\white-keys\\H.mp3");
        return audio.play();
    }
    if (event.key === "U" || event.key === "u") {
        let audio = new Audio("Virtual_piano\\black-keys\\U.mp3");
        return audio.play();
    }
    if (event.key === "J" || event.key === "j") {
        let audio = new Audio("Virtual_piano\\white-keys\\J.mp3");
        return audio.play();
    }
});