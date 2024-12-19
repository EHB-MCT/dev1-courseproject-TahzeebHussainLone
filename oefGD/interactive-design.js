"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

// heb solutions 8 gebruikt als voorbeeld
let lastTime = 0;
let delay = 100;

setup();
update();

function setup() {
	window.onmousemove = mouseMove;
	context.textAlign = "center";
	drawPosters();
}

function mouseMove(eventData) {
	delay = Math.max(20, 200 - (eventData.pageX / width) * 180);
}

// posters

drawPosters();

function drawPosters() {
	const width = 250;
	const height = 350;

	const posterPositions = [
		{ x: 200, y: 50 },
		{ x: 550, y: 50 },
		{ x: 1000, y: 50 },
		{ x: 1350, y: 50 },
		{ x: 200, y: 550 },
		{ x: 550, y: 550 },
		{ x: 1000, y: 550 },
		{ x: 1350, y: 550 },
	];

	for (let i = 0; i < posterPositions.length; i++) {
		const p = posterPositions[i];
		context.fillStyle = "black";
		context.fillRect(p.x, p.y, width, height);
		drawShapes(p.x, p.y, width, height);
	}
}

// vormen: lijnen, cirkels, driehoeken en sterren
function drawShapes(x, y, w, h) {
	const amountLines = Utils.randomNumber(5, 15);
	const amountCircles = Utils.randomNumber(1, 10);
	const amountStars = Utils.randomNumber(1, 10);
	const amountTriangles = Utils.randomNumber(1, 10);

	for (let i = 0; i < amountLines; i++) {
		const startX = x + Math.random() * w;
		const startY = y + Math.random() * h;
		const endX = x + Math.random() * w;
		const endY = y + Math.random() * h;
		const lineColor = Utils.hsl(Math.random() * 360, 100, 50);
		context.strokeStyle = lineColor;
		Utils.drawLine(startX, startY, endX, endY);
	}

	for (let i = 0; i < amountCircles; i++) {
		const circleX = x + Math.random() * w;
		const circleY = y + Math.random() * h;
		const radius = Math.abs(Utils.randomGaussian()) * 30 + 10;

		// Met chat gpt gemaakt, op 18 dec: max tot bound - om ervoor te zorgen dat de vormen niet uit de poster gaan

		const maxX = x + w - radius;
		const minX = x + radius;
		const maxY = y + h - radius;
		const minY = y + radius;
		const boundedCircleX = Math.max(minX, Math.min(maxX, circleX));
		const boundedCircleY = Math.max(minY, Math.min(maxY, circleY));

		const circleColor = Utils.hsl(Math.random() * 360, 100, 50);
		context.fillStyle = circleColor;
		Utils.fillCircle(boundedCircleX, boundedCircleY, radius);
	}

	for (let i = 0; i < amountTriangles; i++) {
		const triangleX = x + Math.random() * w;
		const triangleY = y + Math.random() * h;
		const traingleWidth = Math.abs(Utils.randomGaussian()) * 60 + 40;
		const triangleHeight = Math.abs(Utils.randomGaussian()) * 60 + 40;

		// Met chat gpt gemaakt, op 18 dec: max tot bound - om ervoor te zorgen dat de vormen niet uit de poster gaan

		const maxX = x + w - traingleWidth;
		const minX = x;
		const maxY = y + h - triangleHeight;
		const minY = y;
		const boundedTriangleX = Math.max(minX, Math.min(maxX, triangleX));
		const boundedTriangleY = Math.max(minY, Math.min(maxY, triangleY));

		drawTriangles(
			boundedTriangleX,
			boundedTriangleY,
			traingleWidth,
			triangleHeight
		);
	}

	for (let i = 0; i < amountStars; i++) {
		const starX = x + Math.random() * w;
		const starY = y + Math.random() * h;
		const starRadius = Math.abs(Utils.randomGaussian()) * 20 + 10;

		// Met chat gpt gemaakt, op 18 dec: max tot bound - om ervoor te zorgen dat de vormen niet uit de poster gaan

		const maxX = x + w - starRadius;
		const minX = x + starRadius;
		const maxY = y + h - starRadius;
		const minY = y + starRadius;
		const boundedStarX = Math.max(minX, Math.min(maxX, starX));
		const boundedStarY = Math.max(minY, Math.min(maxY, starY));

		drawStar(boundedStarX, boundedStarY, starRadius, 5);
	}
}

// muis richting groen is traag en muis reichting rood is snel
drawSpeedIndicators();
function drawSpeedIndicators() {
    context.fillStyle = "green";
    Utils.fillCircle(100, height / 2, 30);
    context.fillStyle = "red";
    Utils.fillCircle(width - 100, height / 2, 30);
}

function drawTriangles(x, y, w, h) {
	context.fillStyle = Utils.hsl(Math.random() * 360, 100, 50);

	context.beginPath();
	context.moveTo(x + Math.random() * w, y + Math.random() * h);
	context.lineTo(x + Math.random() * w, y + Math.random() * h);
	context.lineTo(x + Math.random() * w, y + Math.random() * h);

	context.closePath();
	context.fill();
}

function drawStar(x, y, radius, points = 5) {
	context.fillStyle = Utils.hsl(Math.random() * 360, 100, 50);

	// Met chat gpt gemaakt, op 18 dec: de angle en for loop

	const angle = Math.PI / points;
	context.beginPath();
	for (let i = 0; i < points * 2; i++) {
		const currentRadius = radius - (i % 2) * (radius / 2);
		const px = x + Math.cos(i * angle) * currentRadius;
		const py = y + Math.sin(i * angle) * currentRadius;
		context.lineTo(px, py);
	}

	context.closePath();
	context.fill();
}

// Met chat gpt gemaakt, op 18 dec: ik begreep niet hoe ik dit stukje moest doen
function update(timestamp) {
    if (timestamp - lastTime > delay) {
        drawPosters();
        lastTime = timestamp;
    }
    requestAnimationFrame(update);
}
