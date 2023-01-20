import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();
const now = Tone.now();
const tones = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
const twinkleStarArray = [
	0, 7, 0, 7, 4, 7, 4, 7, 5, 7, 5, 7, 4, 4, 4, 4,
	3, 7, 3, 7, 2, 7, 2, 7, 1, 7, 1, 7, 0, 0, 0, 0, 
	4, 7, 4, 7, 3, 7, 3, 7, 2, 7, 2, 7, 1, 1, 1, 1, 
	4, 7, 4, 7, 3, 7, 3, 7, 2, 7, 2, 7, 1, 1, 1, 1, 
	0, 7, 0, 7, 4, 7, 4, 7, 5, 7, 5, 7, 4, 4, 4, 4,
	3, 7, 3, 7, 2, 7, 2, 7, 1, 7, 1, 7, 0, 0, 0, 0, 
];

const playMusicByTone = (musicArray, msecTempo) => {
for (let i = 0; i < twinkleStarArray.length; i++) {
	if (twinkleStarArray[i] === 7) continue;
	synth.triggerAttackRelease(tones[musicArray[i]], '4n', now + i * msecTempo);
}
}

window.addEventListener('DOMContentLoaded', async () => {
	await Tone.start();
});

const twinkleStar = playMusicByTone(twinkleStarArray, 500)
autoplay.addEventListener('click', twinkleStar);