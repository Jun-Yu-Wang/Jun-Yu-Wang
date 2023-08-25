
const codeDown = document.getElementById('codeDown');
const ctx2 = codeDown.getContext('2d');
let string2 = ["0", "1"];
var fontsize = 20;
var drop = [];
// document.addEventListener("DOMContentLoaded", function () {
// 	test();
// 	setInterval(drap, 40);
// });
// window.onresize = function () {
// 	test();
// };

function test() {
	codeDown.width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	codeDown.height =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	drop = [];
	for (var x = 0, columns = codeDown.width / fontsize; x < columns; x++) {
		drop[x] = codeDown.height;
	}
}

function drap() {
	ctx2.fillStyle = "rgba(255,255,255,0.01)";
	ctx2.fillRect(0, 0, codeDown.width, codeDown.height);
	ctx2.fillStyle = "#f3c10e";
	ctx2.font = fontsize + "px Source Code Pro";
	for (var i = 0; i < drop.length; i++) {
		if (drop[i] < codeDown.height) {
			ctx2.fillText(
				string2[Math.floor(Math.random() * string2.length)],
				i * fontsize,
				drop[i] * fontsize
			);
			drop[i]++;
		} else if (Math.random() > 0.995) {
			drop[i] = 0;
		}
	}
}