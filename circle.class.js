export const app = new PIXI.Application({ width: 1200, height: 700 });
document.body.appendChild(app.view);

export class Circle {
  constructor({ color, size } = { color: "0xff0000", size: 10 }) {
    this.circle = new PIXI.Graphics();
    this.color = color;
    this.size = size;
    this.circle.x = Math.random() * app.renderer.width;
    this.circle.y = Math.random() * app.renderer.height;
  }
  drawDeafultCircle(lineColor, lineWidth) {
    this.circle.beginFill(this.color);
    this.circle.lineStyle({ color: lineColor, width: lineWidth });
    this.circle.drawCircle(0, 0, this.size);
    this.circle.endFill();
    app.stage.addChild(this.circle);
  }
  drawCircle(lineColor, lineWidth) {
    this.drawDeafultCircle(lineColor, lineWidth);
    app.stage.addChild(this.circle);
  }
  drawMidPoint(lineColor, lineWidth) {
    this.drawDeafultCircle(lineColor, lineWidth);
    this.circle.x = app.renderer.width / 2;
    this.circle.y = app.renderer.height / 2;
  }
  removeCircle() {
    app.stage.removeChild(this.circle);
  }
  setDistanceX(endPointX) {
    const distanceX = endPointX - this.circle.x;
    return distanceX;
  }
  setDistanceY(endPointY) {
    const distanceY = endPointY - this.circle.y;
    return distanceY;
  }
  setDuration(speed, endPointX, endPointY) {
    const duration =
      Math.sqrt(
        this.setDistanceX(endPointX) ** 2 + this.setDistanceY(endPointY) ** 2
      ) / speed;
    return duration;
  }
  moveX(speed, endPointX, endPointY) {
    const moveX =
      this.setDistanceX(endPointX) /
      this.setDuration(speed, endPointX, endPointY);
    return moveX;
  }
  moveY(speed, endPointX, endPointY) {
    const moveY =
      this.setDistanceY(endPointY) /
      this.setDuration(speed, endPointX, endPointY);
    return moveY;
  }
  updatePosition(endPointX, endPointY, speed) {
    const distanceX = endPointX - this.circle.x;
    const distanceY = endPointY - this.circle.y;
    const duration = Math.sqrt(distanceX ** 2 + distanceY ** 2) / speed;
    const moveX = distanceX / duration;
    const moveY = distanceY / duration;
    this.circle.x += moveX + 5 * Math.sin(Math.random());
    this.circle.y += moveY + 5 * Math.sin(Math.random());
  }
}
