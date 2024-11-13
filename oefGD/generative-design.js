"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";
let width = context.canvas.width;
let height = context.canvas.height;

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
