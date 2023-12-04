import { app } from "./circle.class.js";
import {
  circlesSet as circle,
  circlesSet,
  circlesSet as eachCircle,
  circlesSet as item,
  numberOfCircles,
} from "./app.js";
export const ticker = new PIXI.Ticker();
const endPoint = { x: app.renderer.width / 2, y: app.renderer.height / 2 };
const speed = 5;

export function moveOn() {
  ticker.add(loop);
  ticker.start();
}
let i = 0;
function loop() {
  const eachCircle = circlesSet[i];
  eachCircle.updatePosition(endPoint.x, endPoint.y, speed);
  console.log(
    eachCircle.setDistanceX(endPoint.x),
    eachCircle.moveX(speed, endPoint.x),
    eachCircle.circle.x
  );
  if (
    (eachCircle.setDistanceX(endPoint.x) >= 0 &&
      eachCircle.circle.x >
        endPoint.x + eachCircle.moveX(speed, endPoint.x, endPoint.y)) ||
    (eachCircle.setDistanceX(endPoint.x) <= 0 &&
      eachCircle.circle.x <
        endPoint.x - eachCircle.moveX(speed, endPoint.x, endPoint.y)) ||
    (eachCircle.setDistanceY(endPoint.y) >= 0 &&
      eachCircle.circle.y >
        endPoint.y + eachCircle.moveY(speed, endPoint.x, endPoint.y)) ||
    (eachCircle.setDistanceY(endPoint.y) <= 0 &&
      eachCircle.circle.y <
        endPoint.y - eachCircle.moveY(speed, endPoint.x, endPoint.y))
  ) {
    if (i < numberOfCircles - 1) {
      eachCircle.removeCircle();
      i++;
    } else {
      eachCircle.removeCircle();
      ticker.stop();
      i = 0;
    }
  }
}
