"use strict";

import context from "../../scripts/context.js";

let width = context.canvas.width;
let height = context.canvas.height;

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
	}
}
