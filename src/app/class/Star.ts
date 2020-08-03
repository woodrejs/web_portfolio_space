import image from "../../assets/image/star.png";

export default class Star {
  constructor(
    public canvas: HTMLCanvasElement,
    public x: number,
    public y: number,
    public size: number,
    public color: string,
    public vx: number,
    public vy: number,
    public img: any = image,
    public c: CanvasRenderingContext2D | null = canvas.getContext("2d")
  ) {}

  draw() {
    const starImg = new Image();
    starImg.src = `./${this.img}`;
    if (this.c)
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
