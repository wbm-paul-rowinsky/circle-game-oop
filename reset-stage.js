import { Circle } from "./circle.class.js";
import { circlesSet } from "./app.js";
import { ticker } from "./move-circle.js";

export function reset(circlesArr) {
  ticker.stop();
  for (const circle of circlesArr) {
    circle.removeCircle();
  }
}
