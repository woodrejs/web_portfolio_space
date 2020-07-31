import imgPath from "../../assets/image/star.png";

export default class Star {
  constructor(canvas, x, y, size, color, vx, vy) {
    this.canvas = canvas;
    this.c = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.color = color;
  }

  draw() {
    const starImg = new Image();
    starImg.src = `./${imgPath}`;

    this.c.drawImage(
      starImg,
      this.x,
      this.y,
      starImg.width * this.size,
      starImg.height * this.size
    );
  }
  update() {
    this.draw();
    ///MOVE
    this.x += this.vx;
    this.y += this.vy;
    ///STAY IN BORDER
    if (
      this.canvas.width <= this.x - 7 * this.size ||
      this.x + 7 * this.size <= 0
    )
      this.vx = -this.vx;
    if (
      this.canvas.height <= this.y - 7 * this.size ||
      this.y + 7 * this.size <= 0
    )
      this.vy = -this.vy;
  }
}
