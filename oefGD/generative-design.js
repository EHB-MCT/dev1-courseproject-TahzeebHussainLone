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
    const YRect1 = 50;
    const YRect2 = 550;

    context.fillStyle = "black";
    context.fillRect(200, YRect1, width, height);
    context.fillRect(550, YRect1, width, height);
    context.fillRect(1000, YRect1, width, height);
    context.fillRect(1350, YRect1, width, height);

    context.fillRect(200, YRect2, width, height);
    context.fillRect(550, YRect2, width, height);
    context.fillRect(1000, YRect2, width, height);
    context.fillRect(1350, YRect2, width, height); 
   
}

