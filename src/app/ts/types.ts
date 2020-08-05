export type Stars = {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  img?: ImageData;
  c?: CanvasRenderingContext2D | null;
  draw: () => void;
  update: () => void;
};

export type Coords = {
  x: number;
  y: number;
};
