const	pianoKeysEl = document.querySelectorAll(".piano-keys .key");
let		mappedKeys = [];

let	tuneAudio = new Audio();
let volumeInputEl = document.querySelector(".volume-slider input");

function playTune(key) {
	tuneAudio.src = `tunes/${key}.wav`;

	let clickedKeyEl = document.querySelector(`[data-key=${key}`);
	clickedKeyEl.classList.add("active");
	setTimeout(() => { clickedKeyEl.classList.remove("active"), 200});

	tuneAudio.volume = volumeInputEl.value;
	tuneAudio.play();
}

// set listener to play tunes with mouse click
pianoKeysEl.forEach((keyEl) => {
	keyEl.addEventListener("click", () => playTune(keyEl.dataset.key));
	mappedKeys.push(keyEl.dataset.key);
});

// set listener to play tunes with keyboard
document.addEventListener("keydown", (e) => {
	if (mappedKeys.includes(e.key)) {
		playTune(e.key);
	}
});

// handle toggle hide keys
let hideKeysEl = document.querySelector(".hide-keys input");

hideKeysEl.addEventListener("click", () => {
	pianoKeysEl.forEach(keyEl => keyEl.classList.toggle("hide"));
});
