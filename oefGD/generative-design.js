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
    const Xrect = (200,550,1000,1350);
    const yrect = (50,550);

    context.fillStyle = "black";
    context.fillRect(Xrect, yrect, width, height);
    

}

