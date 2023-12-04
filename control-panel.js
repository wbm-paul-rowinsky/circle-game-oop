import { Pane } from "./tweakpane-4.0.1.min.js";
import { circlesSet, start } from "./app.js";
import { reset } from "./reset-stage.js";
import { moveOn } from "./move-circle.js";

export function createPane() {
  const pane = new Pane({
    title: "Circle Game",
    expanded: true,
  });
  const titleElements = ["Reset", "Start", "Play"];
  const [resetBtn, startBtn, moveBtn] = titleElements.map((title) =>
    pane.addButton({
      title,
    })
  );
  resetBtn.on("click", () => {
    reset(circlesSet);
  });
  startBtn.on("click", () => {
    start();
  });
  moveBtn.on("click", () => {
    moveOn();
  });
  return {
    pane,
    resetBtn,
    startBtn,
    moveBtn,
  };
}
