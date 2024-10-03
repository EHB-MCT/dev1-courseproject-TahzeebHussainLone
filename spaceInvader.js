"use strict";

drawSpaceInVader();

function drawSpaceInVader() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillRect(50, 50, 350, 350);
	context.fillStyle = "green";
	context.beginPath();
	context.rect(100, 150, 250, 200);
	context.fill();

	context.fillRect(200, 100, 50, 50);

	context.fillStyle = "black";

	context.fillRect(200, 150, 50, 50);

	context.fillRect(200, 250, 50, 50);

	context.fillRect(300, 200, 50, 150);

	context.fillRect(100, 200, 50, 150);

	context.fillRect(150, 300, 50, 50);

	context.fillRect(250, 300, 50, 50);
}
