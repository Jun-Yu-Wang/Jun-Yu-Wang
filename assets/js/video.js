const video = document.getElementById('videoMo');
const canvas = document.getElementById('videoCanvas');
const ctx = canvas.getContext('2d');
const soundButton = document.querySelector('.sound');


soundButton.addEventListener('click', function () {
	soundButton.classList.toggle('sound-mute');
	if (video.muted) {
		video.muted = false;
	} else {
		video.muted = true;
	}
});
video.addEventListener('play', function () {
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	drawFrame();
});

function drawFrame() {
	if (video.paused || video.ended) {
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		return;
	}
	ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	requestAnimationFrame(drawFrame);
}

document.addEventListener('click', function (e) {
	var target = e.target || window.event.srcElement;
	if (target.id == "play") {
		document.getElementById('play').className = 'playing';
		document.getElementById('pause').className += "show";
		document.querySelector(".home_box1").classList.remove('show')
		video.play();
	} else if (target.id == "pause") {
		document.getElementById('play').className = '';
		target.className = '';
		video.pause();
	}
});

video.addEventListener('ended', function () {
	document.getElementById('play').className = '';
	document.getElementById('pause').className = '';
	document.querySelector(".home_box1").classList.add('show');
	test();
	setInterval(drap, 40);
});


video.addEventListener('canplaythrough', function () {
	video.play();
});

video.load();


