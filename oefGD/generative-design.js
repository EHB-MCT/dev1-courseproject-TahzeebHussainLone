"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

//base layer van posters
drawPosters();
function drawPosters() {
	const width = 250;
	const height = 350;

	context.fillStyle = "black";
	context.fillRect(200, 50, width, height);
	context.fillRect(550, 50, width, height);
	context.fillRect(1000, 50, width, height);
	context.fillRect(1350, 50, width, height);

	context.fillRect(200, 550, width, height);
	context.fillRect(550, 550, width, height);
	context.fillRect(1000, 550, width, height);
	context.fillRect(1350, 550, width, height);
}

//plaats waar de vormen op moeten
function addShapes() {
	const width = 250;
	const height = 350;

	drawRandomShapes(200, 50, width, height);
	drawRandomShapes(550, 50, width, height);
	drawRandomShapes(1000, 50, width, height);
	drawRandomShapes(1350, 50, width, height);

	drawRandomShapes(200, 550, width, height);
	drawRandomShapes(550, 550, width, height);
	drawRandomShapes(1000, 550, width, height);
	drawRandomShapes(1350, 550, width, height);
}

// vormen kleur en grootte
function drawRandomShapes(x, y, width, height) {
	const amountShape = 3;

	for (let i = 0; i < amountShape; i++) {
		const randomColor = getRandomColor();
		context.fillStyle = randomColor;

		const randomX = x + Math.random() * width;
		const randomY = y + Math.random() * height;

		const drawShapes = Math.random();

		if (drawShapes < 0) {
			drawRectangle(randomX, randomY, 50, 50);
		} else if (drawShapes < 1) {
			drawCircle(randomX, randomY, 30);
		} else {
			drawLine(randomX, randomY);
		}
	}
}

//rechthoek
function drawRectangle(x, y, width, height) {
	context.beginPath();
	context.rect(x, y, width, height);
	context.fill();
}

//cirkel
function drawCircle(x, y, straal) {
	context.arc(x, y, straal, 0, 2 * Math.PI);
	context.fill();
}

// lijn
function drawLine(x, y) {
	const length = Math.random() * 50;
	const eindX = x + length;
	const eindY = y + length;

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(eindX, eindY);
	context.stroke();
}
