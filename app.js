import { createPane } from "./control-panel.js";
import { Circle } from "./circle.class.js";
import { reset } from "./reset-stage.js";

const usedColors = { red: "0xff0000", white: "0xffffff" };
export const circlesSet = [];
export const numberOfCircles = 20;

createPane();
const midPoint = new Circle();
midPoint.drawMidPoint(usedColors.red, 2);
export function start() {
  reset(circlesSet);
  circlesSet.length && circlesSet.splice(0, circlesSet.length);
  for (let i = 0; i < numberOfCircles; i++) {
    const circle = new Circle();
    circle.drawCircle(usedColors.white, 2);
    circlesSet.push(circle);
  }
}
